'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { REGISTER_SWITCH_CHALLENGES } from '@/lib/lessons/L4.3'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 18000

export default function RegisterSwitchL43({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const scenario = REGISTER_SWITCH_CHALLENGES[round]
  const totalRounds = REGISTER_SWITCH_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 6) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
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
    const correct = opt === scenario.correctRegister
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct), 1800)
  }, [feedback, clearTimer, scenario, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-teal-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="register-switch">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Register Switch Challenge</h2>
        <p className="text-gray-400 mb-4">Read the social scenario and pick the correct register!</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128101;</div>
          <p className="text-gray-400 mb-2">{totalRounds} scenarios. Choose <strong>tú</strong>, <strong>usted</strong>, or <strong>vos</strong>.</p>
          <p className="text-sm text-gray-400 mb-6">18 seconds per scenario. Read the context carefully!</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl">
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
      <section id="register-switch">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Register Switch Challenge</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-teal-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">{pct >= 80 ? 'Social chameleon! You nailed the registers!' : pct >= 50 ? 'Good instincts! A few more scenarios to practice.' : 'Keep practicing — register takes time!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!scenario) return null

  return (
    <section id="register-switch">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Register Switch Challenge</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Scenario {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-teal-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <div className="bg-teal-950 border border-teal-800 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">&#128172;</span>
            <div>
              <p className="font-semibold text-gray-200 text-lg">{scenario.scenario}</p>
              {feedback && <p className="text-sm text-gray-400 mt-1 italic">{scenario.english}</p>}
            </div>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-400 mb-3">Which register should you use?</p>
        <div className="grid grid-cols-3 gap-3">
          {scenario.options.map((opt) => {
            const isCorrect = opt === scenario.correctRegister
            const isSelected = selected === opt
            const show = feedback !== null
            return (
              <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
                className={`px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                  show ? isCorrect ? 'border-green-400 bg-green-950 text-green-200' : isSelected && !isCorrect ? 'border-red-700 bg-red-950 text-red-700' : 'border-gray-700 opacity-40'
                    : 'border-gray-700 hover:border-teal-400 hover:bg-teal-950/50 cursor-pointer'
                }`}>{opt}</button>
            )
          })}
        </div>
        {feedback && (
          <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
            {feedback.correct ? 'Perfect register!' : `Correct: ${scenario.correctRegister}`}
          </div>
        )}
      </div>
    </section>
  )
}
