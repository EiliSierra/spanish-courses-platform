import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

const MODELS = [
  'google/gemini-2.5-flash',
]

const TIMEOUT_MS = 15000

async function callOpenRouter(model: string, messages: { role: string; content: string }[], maxTokens: number) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
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
        messages,
        temperature: 0.5,
        max_tokens: maxTokens,
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      const err = await response.text()
      throw new Error(`HTTP ${response.status}: ${err}`)
    }

    return await response.json()
  } finally {
    clearTimeout(timer)
  }
}

export async function POST(req: NextRequest) {
  if (!OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const { studentSaid, targetSpanish, pronunciation } = await req.json()

  if (!studentSaid || !targetSpanish) {
    return NextResponse.json({ error: 'studentSaid and targetSpanish required' }, { status: 400 })
  }

  const prompt = `You are a Spanish pronunciation coach for A1-level learners.

The student tried to say: "${targetSpanish}"
Expected pronunciation guide: ${pronunciation || 'standard Spanish'}
What the speech recognizer heard: "${studentSaid}"

Analyze the pronunciation and respond with ONLY a JSON object (no markdown):
{
  "score": <number 0-100>,
  "assessment": "<Excellent|Good|Needs Work>",
  "feedback": "<1-2 sentences of encouraging, specific feedback>",
  "corrections": ["<specific correction 1>", "<specific correction 2>"]
}

Rules:
- Score 90-100 if the transcript closely matches the target (minor differences OK)
- Score 70-89 if most words are correct but some pronunciation issues
- Score below 70 if significant differences
- Be encouraging but specific — mention exact sounds to improve
- Keep corrections to max 3 items
- If the transcript is very close, congratulate them!
- Consider that speech recognition may mishear similar-sounding words`

  const messages = [{ role: 'user', content: prompt }]

  for (const model of MODELS) {
    try {
      const data = await callOpenRouter(model, messages, 300)
      const content = data.choices?.[0]?.message?.content ?? '{}'
      const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim()
      const feedback = JSON.parse(jsonStr)
      return NextResponse.json({ feedback })
    } catch (err) {
      console.warn(`[pronunciation] Model ${model} failed:`, String(err))
      continue
    }
  }

  // Fallback: basic local assessment if all models fail
  const target = targetSpanish.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const said = studentSaid.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const similarity = target === said ? 95 : target.includes(said) || said.includes(target) ? 75 : 50

  return NextResponse.json({
    feedback: {
      score: similarity,
      assessment: similarity >= 90 ? 'Excellent' : similarity >= 70 ? 'Good' : 'Needs Work',
      feedback: similarity >= 70
        ? 'Good attempt! The speech recognizer detected most of your words correctly.'
        : 'Keep practicing! Try speaking more slowly and clearly.',
      corrections: similarity < 90 ? [`Target: "${targetSpanish}" — try again slowly`] : [],
    }
  })
}
