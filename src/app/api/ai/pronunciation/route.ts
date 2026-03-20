import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

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
        model: 'nvidia/nemotron-nano-12b-v2-vl:free',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: `OpenRouter error: ${err}` }, { status: 502 })
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content ?? '{}'
    const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim()
    const feedback = JSON.parse(jsonStr)

    return NextResponse.json({ feedback })
  } catch (err) {
    return NextResponse.json({ error: `Failed to generate: ${String(err)}` }, { status: 500 })
  }
}
