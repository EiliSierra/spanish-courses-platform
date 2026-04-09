'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { NUMBER_DICTATION_ROUNDS } from '@/lib/lessons/L1.3'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function NumberDictationL13({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: string } | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentRound = NUMBER_DICTATION_ROUNDS[round]
  const totalRounds = NUMBER_DICTATION_ROUNDS.length

  const playAudio = useCallback(() => {
    if (!currentRound) return
    if (audioRef.current) audioRef.current.pause()
    audioRef.current = new Audio(`/audio/L1.3/phrases/${currentRound.audio}.mp3`)
    audioRef.current.play().catch(() => {
      // Fallback to Speech API
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(currentRound.display)
      u.lang = 'es-MX'
      u.rate = 0.85
      window.speechSynthesis.speak(u)
    })
  }, [currentRound])

  // Auto-play audio when round changes
  useEffect(() => {
    if (phase === 'game' && currentRound && !feedback) {
      const timer = setTimeout(playAudio, 300)
      return () => clearTimeout(timer)
    }
  }, [phase, round, feedback, playAudio, currentRound])

  const handleCheck = useCallback(() => {
    if (!input.trim()) return
    const isCorrect = input.trim() === currentRound.answer
    setFeedback({ correct: isCorrect, answer: currentRound.answer })

    if (isCorrect) {
      setScore(s => s + 1)
      spawnConfetti(window.innerWidth / 2, 200, 20)
    }

    setTimeout(() => {
      if (round + 1 >= totalRounds) {
        setPhase('results')
        if ((isCorrect ? score + 1 : score) >= Math.ceil(totalRounds * 0.6)) {
          onComplete?.()
        }
      } else {
        setRound(r => r + 1)
        setInput('')
        setFeedback(null)
      }
    }, 1500)
  }, [input, currentRound, round, totalRounds, score, onComplete])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    setInput('')
    setFeedback(null)
  }, [])

  if (phase === 'start') {
    return (
      <section id="number-dictation">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Number Dictation</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Listen to a number or time in Spanish and type what you hear. Test your number recognition skills!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128266;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-6">{totalRounds} numbers to identify. Listen carefully!</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl">
            Start Dictation
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="number-dictation">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Number Dictation</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{Array(stars).fill(null).map((_, i) => <span key={i}>&#11088;</span>)}{Array(3 - stars).fill(null).map((_, i) => <span key={i}>&#9734;</span>)}</div>
          <div className="text-4xl font-bold text-amber-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {pct >= 80 ? 'Excellent number recognition!' : pct >= 50 ? 'Good work! Keep practicing those numbers.' : 'Keep listening and practicing!'}
          </p>
          <button onClick={startGame} className="px-6 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700">Try Again</button>
        </div>
      </section>
    )
  }

  return (
    <section id="number-dictation">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Number Dictation</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Number {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-amber-600">Score: {score}</span>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        {/* Audio button */}
        <div className="text-center mb-6">
          <button onClick={playAudio} className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center mx-auto hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {feedback ? (
              <span className="font-semibold">Answer: {feedback.answer}</span>
            ) : (
              <>Listen and type the number <span className="text-xs text-gray-500 dark:text-gray-400">({currentRound.hint})</span></>
            )}
          </p>
        </div>

        {/* Input */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !feedback && handleCheck()}
            disabled={!!feedback}
            placeholder="Type the number..."
            className={`w-48 text-center text-2xl font-bold px-4 py-3 rounded-xl border-2 focus:outline-none transition-all ${
              feedback
                ? feedback.correct
                  ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300'
                  : 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                : 'border-gray-200 dark:border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-100'
            }`}
          />
        </div>

        {/* Check button */}
        {!feedback && (
          <div className="text-center">
            <button onClick={handleCheck} disabled={!input.trim()}
              className="px-8 py-2.5 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors disabled:opacity-40">
              Check
            </button>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className={`mt-4 text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
            {feedback.correct ? 'Correct!' : `The answer was: ${feedback.answer}`}
          </div>
        )}
      </div>
    </section>
  )
}
