import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

// Models to try in order — first that succeeds wins
const MODELS = [
  'google/gemini-2.5-flash',              // Fast, cheap, reliable
]

const TIMEOUT_MS = 20000

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
        temperature: 0.7,
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

  const { words, context, lessonId } = await req.json()

  if (!words || !Array.isArray(words) || words.length === 0) {
    return NextResponse.json({ error: 'words array required' }, { status: 400 })
  }

  // L1.1 is absolute beginner (level zero) — only letters and sounds
  const isLetterLesson = lessonId === 'L1.1'

  const systemPrompt = isLetterLesson
    ? `You are a Spanish pronunciation tutor for the Alexandria Language Institute.
The student is at ABSOLUTE ZERO level — they are learning the Spanish alphabet for the very first time.
They do NOT know any Spanish words yet. This lesson ONLY teaches letter names and sounds.

Your task: for each letter or sound, give ONE simple Spanish word that contains that letter/sound and connect it to the student's life context.

Rules:
- "spanish" field MUST be a real Spanish word (1 word only) that contains the letter/sound
- "english" field: the English translation + a short note about how the sound works, in plain English
- "connection" field: why this word is relevant to their profile
- Do NOT use English words in the "spanish" field — always a real Spanish word
- Format: {"word": "...", "spanish": "<Spanish word>", "english": "<English translation — sound explanation>", "connection": "..."}
- Return a JSON array, nothing else

Example for a Healthcare Worker and the letter Ñ:
{"word": "Ñ", "spanish": "Niño", "english": "Child/Boy — the Ñ sounds like 'ny' in canyon", "connection": "You'll hear parents say this in pediatric settings"}`
    : `You are a Spanish language tutor for the Alexandria Language Institute.
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

  const userPrompt = isLetterLesson
    ? `Student profile: ${context || 'general learner'}

Letters/sounds to personalize:
${words.map((w: { spanish: string; english: string }) => `- ${w.spanish} (${w.english})`).join('\n')}

For each letter/sound, give ONE familiar word from their real life where that sound appears.`
    : `Student context: ${context || 'general learner, no specific profile yet'}

Vocabulary words to personalize:
${words.map((w: { spanish: string; english: string }) => `- ${w.spanish} (${w.english})`).join('\n')}

Generate personalized sentences for each word.`

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ]

  // Try each model until one succeeds
  for (const model of MODELS) {
    try {
      const data = await callOpenRouter(model, messages, 1500)
      const content = data.choices?.[0]?.message?.content ?? '[]'
      const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim()
      const sentences = JSON.parse(jsonStr)
      return NextResponse.json({ sentences })
    } catch (err) {
      console.warn(`[personalize] Model ${model} failed:`, String(err))
      continue
    }
  }

  return NextResponse.json(
    { error: 'AI service is temporarily busy. Please try again in a moment.' },
    { status: 503 }
  )
}
