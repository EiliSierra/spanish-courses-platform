'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { ORDER_CHALLENGE_ROUNDS } from '@/lib/lessons/L1.4'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 10000 // 10 seconds

export default function OrderChallengeL14({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<{ correct: boolean; display: string } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const scoreRef = useRef(0)

  const currentRound = ORDER_CHALLENGE_ROUNDS[round]
  const totalRounds = ORDER_CHALLENGE_ROUNDS.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const playAudio = useCallback(() => {
    if (audioRef.current) audioRef.current.pause()
    audioRef.current = new Audio(`/audio/L1.4/phrases/${currentRound?.audio}.mp3`)
    audioRef.current.play().catch(() => {})
  }, [currentRound?.audio])

  const advanceRound = useCallback((wasCorrect: boolean) => {
    clearTimer()
    if (wasCorrect) {
      const newScore = scoreRef.current + 1
      scoreRef.current = newScore
      setScore(newScore)
    }
    if (round + 1 >= totalRounds) {
      setPhase('results')
      const finalScore = wasCorrect ? scoreRef.current : scoreRef.current
      if (finalScore >= 6) {
        spawnConfetti(window.innerWidth / 2, 200, 50)
        onComplete?.()
      }
    } else {
      setTimeout(() => {
        setFeedback(null)
        setRound(r => r + 1)
      }, 1500)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  // Start timer each round
  useEffect(() => {
    if (phase !== 'game' || !currentRound || feedback) return
    playAudio()
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.max(0, 100 - (elapsed / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) {
        clearTimer()
        setFeedback({ correct: false, display: currentRound.correct })
        setTimeout(() => advanceRound(false), 1500)
      }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, playAudio, clearTimer, advanceRound, currentRound])

  const handleChoice = useCallback((choice: string) => {
    if (feedback) return
    clearTimer()
    const correct = choice === currentRound.correct
    setFeedback({ correct, display: currentRound.correct })
    setTimeout(() => advanceRound(correct), 1500)
  }, [feedback, clearTimer, currentRound, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    scoreRef.current = 0
    setFeedback(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="order-challenge">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Order Challenge</h2>
        <p className="text-gray-600 mb-4">Listen to the audio and select what was ordered. You have 10 seconds per round!</p>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-4">&#127911;</div>
          <p className="text-gray-600 mb-6">{totalRounds} rounds. Listen carefully and choose the correct item.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl">
            Start Challenge
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="order-challenge">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Order Challenge</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-2">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-blue-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-600 mb-4">{pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good effort! Try again for a better score.' : 'Keep practicing!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Try Again</button>
        </div>
      </section>
    )
  }

  return (
    <section id="order-challenge">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Order Challenge</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500">Round {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-blue-600">Score: {score}</span>
      </div>

      {/* Timer bar */}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Audio replay button */}
        <div className="text-center mb-6">
          <button onClick={playAudio} className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white flex items-center justify-center mx-auto hover:from-orange-500 hover:to-amber-600 transition-all shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 mt-2">
            {feedback ? (
              <span className="italic">&ldquo;{currentRound.transcript}&rdquo;</span>
            ) : (
              'Listen and choose the correct item'
            )}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3">
          {currentRound.options.map((option) => {
            const isCorrectOption = option === currentRound.correct
            const showResult = feedback !== null
            return (
              <button key={option} onClick={() => handleChoice(option)} disabled={!!feedback}
                className={`px-4 py-4 rounded-xl border-2 font-semibold text-center transition-all ${
                  showResult
                    ? isCorrectOption
                      ? 'border-green-400 bg-green-50 text-green-800'
                      : 'border-gray-200 opacity-50'
                    : 'border-gray-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer'
                }`}>
                {option}
              </button>
            )
          })}
        </div>

        {feedback && (
          <div className={`mt-4 text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {feedback.correct ? 'Correct!' : `The answer was: ${feedback.display}`}
          </div>
        )}
      </div>
    </section>
  )
}
