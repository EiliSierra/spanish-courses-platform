'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useAudio } from '@/hooks/useAudio'
import { ALPHABET } from '@/lib/lesson-data'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const BEE_ROUNDS = 10

export default function SpellingBee({ onComplete }: { onComplete?: () => void }) {
  const { playLetter } = useAudio()
  const [letters] = useState(() => shuffle(ALPHABET).slice(0, BEE_ROUNDS))
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState('')
  const [answered, setAnswered] = useState(false)
  const [feedback, setFeedback] = useState<{ text: string; correct: boolean } | null>(null)
  const [showFinal, setShowFinal] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!answered && !showFinal) inputRef.current?.focus()
  }, [round, answered, showFinal])

  const submit = useCallback(() => {
    if (answered || round >= BEE_ROUNDS || !input.trim()) return
    setAnswered(true)
    const answer = input.trim().toUpperCase()
    const correct = letters[round].letter.toUpperCase()

    if (answer === correct) {
      setScore((s) => s + 10)
      setFeedback({ text: 'Correct!', correct: true })
      const el = inputRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        spawnConfetti(rect.left + rect.width / 2, rect.top, 12)
      }
    } else {
      setFeedback({ text: `The answer was "${correct}" (${letters[round].name})`, correct: false })
    }

    setTimeout(() => {
      const nextRound = round + 1
      if (nextRound >= BEE_ROUNDS) {
        setShowFinal(true)
        onComplete?.()
      } else {
        setRound(nextRound)
        setInput('')
        setAnswered(false)
        setFeedback(null)
      }
    }, 1500)
  }, [answered, round, input, letters, onComplete])

  const retry = useCallback(() => {
    setRound(0)
    setScore(0)
    setInput('')
    setAnswered(false)
    setFeedback(null)
    setShowFinal(false)
  }, [])

  if (showFinal) {
    const pct = score / (BEE_ROUNDS * 10)
    const stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : pct >= 0.3 ? 1 : 0
    return (
      <section id="spelling-bee" className="mb-10">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">Spelling Bee</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-2">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
          <h3 className="text-xl font-bold mb-1">
            {stars === 3 ? 'Excellent!' : stars === 2 ? 'Great Job!' : stars === 1 ? 'Good Effort!' : 'Keep Practicing!'}
          </h3>
          <p className="text-gray-600 mb-4">You scored {score} out of {BEE_ROUNDS * 10} points</p>
          <button onClick={retry} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
            Try Again
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="spelling-bee" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Spelling Bee</h2>
      <p className="text-gray-600 mb-5">Listen to the letter sound and type which letter it is.</p>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4 text-sm">
          <span className="text-gray-500">Round {round + 1} / {BEE_ROUNDS}</span>
          <span className="font-semibold text-blue-600">Score: {score}</span>
        </div>

        <div className="text-center mb-6">
          <button
            onClick={() => playLetter(letters[round].audio)}
            className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto hover:bg-blue-200 transition-colors"
            aria-label="Play letter sound"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 mt-2">Click to hear the letter</p>
        </div>

        <div className="flex gap-3 justify-center mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') submit() }}
            disabled={answered}
            maxLength={4}
            placeholder="?"
            className={`w-20 h-14 text-center text-2xl font-bold rounded-xl border-2 outline-none transition-colors ${
              feedback
                ? feedback.correct
                  ? 'border-green-400 bg-green-50 text-green-700'
                  : 'border-red-400 bg-red-50 text-red-700'
                : 'border-gray-300 focus:border-blue-400'
            }`}
            aria-label="Your answer"
          />
          <button
            onClick={submit}
            disabled={answered}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            Check
          </button>
        </div>

        {feedback && (
          <p className={`text-center text-sm font-medium ${feedback.correct ? 'text-green-600' : 'text-red-600'}`}>
            {feedback.text}
          </p>
        )}
      </div>
    </section>
  )
}
