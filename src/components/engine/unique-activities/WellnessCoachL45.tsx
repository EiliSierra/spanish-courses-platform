'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { WELLNESS_CHALLENGES } from '@/lib/lessons/L4.5'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 20000

export default function WellnessCoachL45({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const scenario = WELLNESS_CHALLENGES[round]
  const totalRounds = WELLNESS_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 4) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 1800)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  useEffect(() => {
    if (phase !== 'game' || !scenario || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false), 1800) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, scenario])

  const handleSelect = useCallback((opt: string) => {
    if (feedback) return
    clearTimer()
    setSelected(opt)
    const correct = opt === scenario.correctAdvice
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct), 1800)
  }, [feedback, clearTimer, scenario, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-emerald-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="wellness-coach">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Wellness Coach Simulator</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Read the person&apos;s health concern and pick the best wellness advice!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#129657;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} patients. Read their concern and choose the right advice.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">20 seconds per patient.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg hover:shadow-xl">
            Start Coaching
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="wellness-coach">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Wellness Coach Simulator</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-emerald-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Amazing wellness coach!' : pct >= 50 ? 'Good advice! A few could improve.' : 'Keep studying wellness vocabulary!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!scenario) return null

  return (
    <section id="wellness-coach">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Wellness Coach Simulator</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Patient {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-emerald-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">&#129657;</span>
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg">{scenario.concern}</p>
              {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{scenario.english}</p>}
            </div>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">What wellness advice would you give?</p>
        <div className="grid grid-cols-1 gap-3">
          {scenario.options.map((opt) => {
            const isCorrect = opt === scenario.correctAdvice
            const isSelected = selected === opt
            const show = feedback !== null
            return (
              <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
                className={`px-4 py-4 rounded-xl border-2 font-medium text-sm text-left transition-all ${
                  show ? isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : isSelected && !isCorrect ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' : 'border-gray-200 dark:border-gray-700 opacity-40'
                    : 'border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 cursor-pointer'
                }`}>{opt}</button>
            )
          })}
        </div>
        {feedback && (
          <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
            {feedback.correct ? 'Excellent advice!' : `Best advice: ${scenario.correctAdvice}`}
          </div>
        )}
      </div>
    </section>
  )
}
