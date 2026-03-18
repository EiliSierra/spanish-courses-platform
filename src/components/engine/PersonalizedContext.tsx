'use client'

import { useState, useCallback } from 'react'

interface VocabWord {
  spanish: string
  english: string
}

interface PersonalizedSentence {
  word: string
  spanish: string
  english: string
  connection: string
}

const PROFILE_OPTIONS = [
  { label: 'Healthcare Worker', value: 'I am a nurse/doctor working in a hospital. I interact with Spanish-speaking patients daily.' },
  { label: 'Teacher', value: 'I am a K-12 teacher with Spanish-speaking students and parents. I need classroom and parent-conference vocabulary.' },
  { label: 'Traveler', value: 'I am planning a trip to Mexico/Spain. I want to order food, ask directions, and navigate everyday situations.' },
  { label: 'Business Professional', value: 'I work in business with Latin American clients. I need professional dining and meeting vocabulary.' },
  { label: 'College Student', value: 'I am a college student studying Spanish. I want to practice in social and campus settings.' },
  { label: 'Parent', value: 'My child is in a bilingual school. I want to communicate with other parents and teachers in Spanish.' },
]

export default function PersonalizedContext({ words, lessonId }: { words: VocabWord[]; lessonId: string }) {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const [customContext, setCustomContext] = useState('')
  const [sentences, setSentences] = useState<PersonalizedSentence[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showCustom, setShowCustom] = useState(false)

  const generate = useCallback(async (context: string) => {
    setLoading(true)
    setError(null)
    setSentences([])

    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY
    if (!apiKey) {
      setError('OpenRouter API key not configured')
      setLoading(false)
      return
    }

    const selectedWords = words.slice(0, 6)
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

    const userPrompt = `Student context: ${context}

Vocabulary words to personalize:
${selectedWords.map(w => `- ${w.spanish} (${w.english})`).join('\n')}

Generate personalized sentences for each word.`

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://alexandria-language.com',
          'X-Title': 'Alexandria Language Institute',
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          temperature: 0.7,
          max_tokens: 1500,
        }),
      })

      if (!res.ok) {
        const errText = await res.text()
        throw new Error(`API error: ${errText}`)
      }

      const data = await res.json()
      const content = data.choices?.[0]?.message?.content ?? '[]'
      const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim()
      const parsed = JSON.parse(jsonStr)
      setSentences(parsed)
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err))
    } finally {
      setLoading(false)
    }
  }, [words, lessonId])

  const handleProfileSelect = (value: string) => {
    setSelectedProfile(value)
    generate(value)
  }

  const handleCustomSubmit = () => {
    if (customContext.trim()) {
      setSelectedProfile(customContext)
      generate(customContext)
    }
  }

  return (
    <section id="personalized-context">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)]">See in YOUR Context</h2>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-violet-500 to-indigo-500 text-white">
          AI
        </span>
      </div>
      <p className="text-gray-600 mb-5">
        Select your profile and AI will create personalized sentences using this lesson&apos;s vocabulary in situations relevant to YOU.
      </p>

      {/* Profile Selection */}
      {!selectedProfile && !loading && (
        <div>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {PROFILE_OPTIONS.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleProfileSelect(opt.value)}
                className="text-left p-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-indigo-700 text-sm">{opt.label}</span>
              </button>
            ))}
          </div>

          {!showCustom ? (
            <button
              onClick={() => setShowCustom(true)}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              + Describe your own context
            </button>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                value={customContext}
                onChange={(e) => setCustomContext(e.target.value)}
                placeholder="E.g., I'm a firefighter who works with Spanish-speaking communities..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
              />
              <button
                onClick={handleCustomSubmit}
                disabled={!customContext.trim()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 transition-colors"
              >
                Generate
              </button>
            </div>
          )}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
            <span className="text-gray-600 text-sm">AI is personalizing vocabulary for you...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="text-red-700 text-sm">{error}</p>
          <button onClick={() => { setSelectedProfile(null); setError(null) }}
            className="text-red-600 text-sm font-medium mt-2 hover:underline">
            Try again
          </button>
        </div>
      )}

      {/* Results */}
      {sentences.length > 0 && (
        <div>
          <div className="space-y-3 mb-4">
            {sentences.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-indigo-100 p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
                    {s.word}
                  </span>
                  <span className="text-xs text-gray-400">{s.connection}</span>
                </div>
                <p className="text-gray-900 font-medium">{s.spanish}</p>
                <p className="text-gray-500 text-sm mt-1">{s.english}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => { setSentences([]); setSelectedProfile(null); setShowCustom(false); setCustomContext('') }}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Try a different profile
          </button>
        </div>
      )}
    </section>
  )
}
