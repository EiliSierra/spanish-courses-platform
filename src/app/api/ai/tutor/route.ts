import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

export async function POST(req: NextRequest) {
  if (!OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
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

  const apiMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.map((m: { role: string; content: string }) => ({ role: m.role, content: m.content })),
  ]

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
        model: 'google/gemini-2.5-flash',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: `OpenRouter error: ${err}` }, { status: 502 })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content ?? 'Sorry, I couldn\'t process that. Try again!'

    return NextResponse.json({ reply })
  } catch (err) {
    return NextResponse.json({ error: `Failed to generate: ${String(err)}` }, { status: 500 })
  }
}
