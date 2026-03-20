import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

export async function POST(req: NextRequest) {
  if (!OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const { words, context, lessonId } = await req.json()

  if (!words || !Array.isArray(words) || words.length === 0) {
    return NextResponse.json({ error: 'words array required' }, { status: 400 })
  }

  const systemPrompt = `You are a Spanish language tutor for the Alexandria Language Institute.
Your task: take vocabulary words from lesson ${lessonId} and create personalized example sentences
that connect to the student's real life context.

Rules:
- Create exactly ONE Spanish sentence per word, followed by its English translation
- The sentence MUST use the vocabulary word naturally
- Adapt the context to the student's profile/interest
- Keep sentences at A1 CEFR level (simple present, basic structures)
- Use vocabulary from earlier lessons when possible (greetings, numbers, polite phrases)
- Format each as: {"word": "...", "spanish": "...", "english": "...", "connection": "..."}
- "connection" is a brief note explaining why this sentence fits their context
- Return a JSON array of these objects, nothing else`

  const userPrompt = `Student context: ${context || 'general learner, no specific profile yet'}

Vocabulary words to personalize:
${words.map((w: { spanish: string; english: string }) => `- ${w.spanish} (${w.english})`).join('\n')}

Generate personalized sentences for each word.`

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
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: `OpenRouter error: ${err}` }, { status: 502 })
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content ?? '[]'

    // Parse JSON from response (handle markdown code blocks)
    const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim()
    const sentences = JSON.parse(jsonStr)

    return NextResponse.json({ sentences })
  } catch (err) {
    return NextResponse.json({ error: `Failed to generate: ${String(err)}` }, { status: 500 })
  }
}
