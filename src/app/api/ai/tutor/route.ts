import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { isRateLimited } from '@/lib/rate-limit'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY
const VERCEL_AI_KEY = process.env.VERCEL_AI_GATEWAY_API_KEY
const VERCEL_AI_URL = process.env.VERCEL_AI_GATEWAY_BASE_URL || 'https://ai-gateway.vercel.sh/v1'
const TIMEOUT_MS = 15000

async function callOpenAI(messages: { role: string; content: string }[], maxTokens: number) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.7,
        max_tokens: maxTokens,
      }),
      signal: controller.signal,
    })

    if (!response.ok) throw new Error(`OpenAI HTTP ${response.status}`)
    return await response.json()
  } finally {
    clearTimeout(timer)
  }
}

async function callOpenRouter(model: string, messages: { role: string; content: string }[], maxTokens: number) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const isFreeModel = model.includes(':free')
    const apiMessages = isFreeModel
      ? [{ role: 'user', content: messages.map(m => `${m.role}: ${m.content}`).join('\n') }]
      : messages

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://alexandria-language.com',
        'X-Title': 'Alexandria Language Institute',
      },
      body: JSON.stringify({
        model,
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: maxTokens,
      }),
      signal: controller.signal,
    })

    if (!response.ok) throw new Error(`OpenRouter HTTP ${response.status}`)
    return await response.json()
  } finally {
    clearTimeout(timer)
  }
}

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (isRateLimited(userId, 30)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 })
  }

  if (!OPENAI_API_KEY && !VERCEL_AI_KEY && !OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'No API key configured' }, { status: 500 })
  }

  const { messages, lessonId, lessonTitle } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: 'messages array required' }, { status: 400 })
  }

  const systemPrompt = `You are a friendly, encouraging AI Spanish tutor for the Alexandria Language Institute.
You are helping a student who is currently on lesson ${lessonId} ("${lessonTitle}").

Rules:
- Answer in the language the student uses (English or Spanish), but always include Spanish examples
- Keep answers SHORT (2-4 sentences max) — this is a chat widget, not an essay
- For grammar questions, give the rule + 1-2 examples
- For vocabulary, include pronunciation in parentheses
- For cultural questions, be concise but informative
- Reference concepts from this lesson and earlier lessons (L1.1 pronunciation, L1.2 greetings, L1.3 numbers) when relevant
- NEVER break character — you are a tutor, not a general AI assistant
- If the student asks something unrelated to Spanish learning, gently redirect
- Use encouraging language: "Great question!", "You're getting it!", etc.
- CEFR level: A1 — keep Spanish examples simple`

  const userMessages = messages.map((m: { role: string; content: string }) => ({ role: m.role, content: m.content }))
  const fullMessages = [{ role: 'system', content: systemPrompt }, ...userMessages]

  // 1) Try OpenAI direct (gpt-4o-mini — fast & cheap)
  if (OPENAI_API_KEY) {
    try {
      const data = await callOpenAI(fullMessages, 300)
      const reply = data.choices?.[0]?.message?.content ?? 'Sorry, I couldn\'t process that. Try again!'
      return NextResponse.json({ reply })
    } catch (err) {
      console.warn('[tutor] OpenAI gpt-4o-mini failed:', String(err))
    }
  }

  // 2) Try Vercel AI Gateway
  if (VERCEL_AI_KEY) {
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
      const response = await fetch(`${VERCEL_AI_URL}/chat/completions`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${VERCEL_AI_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: fullMessages, temperature: 0.7, max_tokens: 300 }),
        signal: controller.signal,
      })
      clearTimeout(timer)
      if (!response.ok) throw new Error(`Vercel AI Gateway HTTP ${response.status}`)
      const data = await response.json()
      const reply = data.choices?.[0]?.message?.content ?? 'Sorry, I couldn\'t process that. Try again!'
      return NextResponse.json({ reply })
    } catch (err) {
      console.warn('[tutor] Vercel AI Gateway failed:', String(err))
    }
  }

  // 3) Fallback to OpenRouter free models
  if (OPENROUTER_API_KEY) {
    const fallbackModels = ['google/gemma-3-27b-it:free', 'google/gemma-3-12b-it:free']
    for (const model of fallbackModels) {
      try {
        const data = await callOpenRouter(model, fullMessages, 300)
        const reply = data.choices?.[0]?.message?.content ?? 'Sorry, I couldn\'t process that. Try again!'
        return NextResponse.json({ reply })
      } catch (err) {
        console.warn(`[tutor] OpenRouter ${model} failed:`, String(err))
        continue
      }
    }
  }

  return NextResponse.json({ error: 'AI service is temporarily busy. Please try again.' }, { status: 503 })
}
