'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import type { PronunciationChallenge } from '@/lib/types/lesson'

interface FeedbackResult {
  score: number // 0-100
  assessment: string // "Excellent" | "Good" | "Needs Work"
  feedback: string // specific phonetic feedback
  corrections: string[] // specific corrections
}

interface Props {
  challenges: PronunciationChallenge[]
  audioBase: string
}

export default function PronunciationPractice({ challenges, audioBase }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null)
  const [loadingFeedback, setLoadingFeedback] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [speechSupported, setSpeechSupported] = useState(true)
  const recognitionRef = useRef<any>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  // Use ref so recording callbacks always see the current challenge
  const currentIdxRef = useRef(currentIdx)
  currentIdxRef.current = currentIdx

  const challenge = challenges[currentIdx]

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) {
      setSpeechSupported(false)
    }
  }, [])

  const playReference = useCallback(() => {
    // Stop any previously playing audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    const audio = new Audio(`${audioBase}/${challenge.audio}.mp3`)
    audioRef.current = audio
    audio.play().catch(() => {})
  }, [audioBase, challenge.audio])

  const getAIFeedback = useCallback(async (studentSaid: string, challengeAtRecord: PronunciationChallenge) => {
    setLoadingFeedback(true)

    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY
    if (!apiKey) {
      setFeedback({
        score: 0,
        assessment: 'Error',
        feedback: 'API key not configured.',
        corrections: [],
      })
      setLoadingFeedback(false)
      return
    }

    const prompt = `You are a Spanish pronunciation coach for A1-level learners.

The student tried to say: "${challengeAtRecord.spanish}"
Expected pronunciation guide: ${challengeAtRecord.pronunciation}
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
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.5,
          max_tokens: 300,
        }),
      })

      if (!res.ok) throw new Error('API error')

      const data = await res.json()
      const content = data.choices?.[0]?.message?.content ?? '{}'
      const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim()
      const parsed = JSON.parse(jsonStr) as FeedbackResult
      setFeedback(parsed)
    } catch {
      setFeedback({
        score: 0,
        assessment: 'Error',
        feedback: 'Could not get AI feedback. Please try again.',
        corrections: [],
      })
    } finally {
      setLoadingFeedback(false)
    }
  }, [])

  const startRecording = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) {
      setError('Speech recognition not supported in this browser. Try Chrome.')
      return
    }

    // Stop any playing audio before recording
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    setTranscript(null)
    setFeedback(null)
    setError(null)

    // Capture which challenge we're recording for RIGHT NOW
    const capturedIdx = currentIdxRef.current
    const capturedChallenge = challenges[capturedIdx]

    const recognition = new SR()
    recognition.lang = 'es-ES'
    recognition.continuous = false
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const result = event.results[0][0].transcript
      setTranscript(result)
      setIsRecording(false)
      // Pass the captured challenge, not the current one
      getAIFeedback(result, capturedChallenge)
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsRecording(false)
      if (event.error === 'no-speech') {
        setError('No speech detected. Try again and speak clearly.')
      } else if (event.error === 'not-allowed') {
        setError('Microphone access denied. Please allow microphone in your browser settings.')
      } else {
        setError(`Recording error: ${event.error}`)
      }
    }

    recognition.onend = () => {
      setIsRecording(false)
    }

    recognitionRef.current = recognition
    recognition.start()
    setIsRecording(true)
  }, [challenges, getAIFeedback])

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    setIsRecording(false)
  }, [])

  const nextChallenge = () => {
    // Stop audio and recording when navigating
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0 }
    if (recognitionRef.current) { recognitionRef.current.stop() }
    setIsRecording(false)
    setCurrentIdx((prev) => (prev + 1) % challenges.length)
    setTranscript(null)
    setFeedback(null)
    setError(null)
  }

  const prevChallenge = () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0 }
    if (recognitionRef.current) { recognitionRef.current.stop() }
    setIsRecording(false)
    setCurrentIdx((prev) => (prev - 1 + challenges.length) % challenges.length)
    setTranscript(null)
    setFeedback(null)
    setError(null)
  }

  const scoreColor = feedback
    ? feedback.score >= 90 ? 'text-green-600' : feedback.score >= 70 ? 'text-amber-600' : 'text-red-500'
    : ''

  const scoreBg = feedback
    ? feedback.score >= 90 ? 'bg-green-50 border-green-200' : feedback.score >= 70 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'
    : ''

  if (!challenges || challenges.length === 0) return null

  return (
    <section id="pronunciation-practice">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)]">Pronunciation Practice</h2>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          AI
        </span>
      </div>
      <p className="text-gray-600 mb-5">
        Listen to the phrase, then record yourself saying it. AI will analyze your pronunciation and give feedback.
      </p>

      {!speechSupported && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <p className="text-amber-800 text-sm">Speech recognition is not supported in your browser. Please use <strong>Google Chrome</strong> for the best experience.</p>
        </div>
      )}

      {/* Challenge Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Header with counter */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 flex items-center justify-between border-b border-blue-100">
          <span className="text-sm font-semibold text-blue-700">
            Phrase {currentIdx + 1} of {challenges.length}
          </span>
          <div className="flex gap-1">
            {challenges.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === currentIdx ? 'bg-blue-600' : 'bg-blue-200'}`} />
            ))}
          </div>
        </div>

        {/* Phrase to practice */}
        <div className="p-6">
          <p className="text-2xl font-bold text-gray-900 mb-1">{challenge.spanish}</p>
          <p className="text-gray-500 text-sm mb-1">{challenge.english}</p>
          <p className="text-blue-600 text-xs font-mono">{challenge.pronunciation}</p>

          {challenge.tip && (
            <div className="mt-3 bg-amber-50 border-l-3 border-amber-400 px-3 py-2 rounded-r-lg">
              <p className="text-xs text-amber-800">{challenge.tip}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={playReference}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
              Listen First
            </button>

            {speechSupported && (
              <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={loadingFeedback}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } disabled:opacity-40`}
              >
                {isRecording ? (
                  <>
                    <div className="w-3 h-3 rounded-full bg-white" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    Record Yourself
                  </>
                )}
              </button>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Transcript */}
          {transcript && (
            <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">What we heard:</p>
              <p className="text-lg text-gray-900 font-medium">{transcript}</p>
            </div>
          )}

          {/* Loading Feedback */}
          {loadingFeedback && (
            <div className="mt-4 flex items-center gap-3 justify-center py-6">
              <div className="w-5 h-5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
              <span className="text-gray-600 text-sm">AI is analyzing your pronunciation...</span>
            </div>
          )}

          {/* AI Feedback */}
          {feedback && !loadingFeedback && (
            <div className={`mt-4 rounded-xl p-5 border ${scoreBg}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">AI Feedback</span>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold ${scoreColor}`}>{feedback.score}</span>
                  <span className="text-gray-400 text-sm">/100</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                  feedback.score >= 90 ? 'bg-green-100 text-green-700' :
                  feedback.score >= 70 ? 'bg-amber-100 text-amber-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {feedback.assessment}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-3">{feedback.feedback}</p>

              {feedback.corrections.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Tips to improve:</p>
                  <ul className="space-y-1">
                    {feedback.corrections.map((c, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">&#8250;</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={isRecording ? stopRecording : startRecording}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={prevChallenge}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              &#8592; Previous
            </button>
            <button
              onClick={nextChallenge}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Next Phrase &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Type declarations for Web Speech API
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
  type SpeechRecognition = any
  type SpeechRecognitionEvent = any
  type SpeechRecognitionErrorEvent = any
}
