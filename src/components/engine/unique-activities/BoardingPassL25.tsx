'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { BOARDING_PASS_SCENARIOS } from '@/lib/lessons/L2.5'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 20000

export default function BoardingPassL25({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const scenario = BOARDING_PASS_SCENARIOS[round]
  const totalRounds = BOARDING_PASS_SCENARIOS.length

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
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 2000)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  useEffect(() => {
    if (phase !== 'game' || !scenario || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false), 2000) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, scenario])

  const handleSelect = useCallback((opt: string) => {
    if (feedback) return
    clearTimer()
    setSelected(opt)
    const correct = opt === scenario.correctAnswer
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct), 2000)
  }, [feedback, clearTimer, scenario, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="boarding-pass">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Boarding Pass Reader</h2>
        <p className="text-gray-400 mb-4">Read the boarding pass in Spanish and answer the question!</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#127915;</div>
          <p className="text-gray-400 mb-2">{totalRounds} boarding passes. Read the info and answer correctly.</p>
          <p className="text-sm text-gray-400 mb-6">20 seconds per pass.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl">
            Start Reading
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="boarding-pass">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Boarding Pass Reader</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-sky-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">{pct >= 80 ? 'Expert traveler!' : pct >= 50 ? 'Good reading! A few details missed.' : 'Keep practicing your boarding passes!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!scenario) return null

  return (
    <section id="boarding-pass">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Boarding Pass Reader</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Pass {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-sky-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      {/* Boarding Pass Card */}
      <div className="bg-white rounded-xl border-2 border-dashed border-sky-300 p-5 mb-5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400" />
        <div className="flex justify-between items-start mb-4 pt-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Pasajero / Passenger</p>
            <p className="text-lg font-bold text-gray-200">{scenario.passengerName}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Vuelo / Flight</p>
            <p className="text-lg font-bold text-sky-600">{scenario.flight}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Origen / From</p>
            <p className="text-sm font-semibold text-gray-700">{scenario.from}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Destino / To</p>
            <p className="text-sm font-semibold text-gray-700">{scenario.to}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 bg-sky-950/60 rounded-lg p-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Puerta / Gate</p>
            <p className="text-base font-bold text-gray-200">{scenario.gate}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Asiento / Seat</p>
            <p className="text-base font-bold text-gray-200">{scenario.seat}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Embarque / Boarding</p>
            <p className="text-base font-bold text-gray-200">{scenario.boarding}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Salida / Departure</p>
            <p className="text-base font-bold text-gray-200">{scenario.departure}</p>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-sky-950 border border-sky-800 rounded-xl p-4 mb-5">
        <p className="font-semibold text-gray-200 text-lg">{scenario.question}</p>
        {feedback && <p className="text-sm text-gray-400 mt-1 italic">{scenario.questionEnglish}</p>}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {scenario.options.map((opt) => {
          const isCorrect = opt === scenario.correctAnswer
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-950 text-green-200' : isSelected && !isCorrect ? 'border-red-700 bg-red-950 text-red-700' : 'border-gray-700 opacity-40'
                  : 'border-gray-700 hover:border-sky-400 hover:bg-sky-950/50 cursor-pointer'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
          {feedback.correct ? 'Correct!' : `Answer: ${scenario.correctAnswer}`}
        </div>
      )}
    </section>
  )
}
