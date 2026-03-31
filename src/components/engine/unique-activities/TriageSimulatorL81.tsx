'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { TRIAGE_SIMULATOR_CHALLENGES } from '@/lib/lessons/L8.1'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 25000

export default function TriageSimulatorL81({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ symptoms: string; correct: boolean; chosen: string; answer: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = TRIAGE_SIMULATOR_CHALLENGES[round]
  const totalRounds = TRIAGE_SIMULATOR_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, chosen: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setAnswers(prev => [...prev, { symptoms: challenge.patientSymptoms, correct: wasCorrect, chosen, answer: challenge.correctAction }])
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 5) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 1800)
    }
  }, [round, totalRounds, clearTimer, onComplete, challenge])

  useEffect(() => {
    if (phase !== 'game' || !challenge || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false, '(time out)'), 1800) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, challenge])

  const handleSelect = useCallback((opt: string) => {
    if (feedback) return
    clearTimer()
    setSelected(opt)
    const correct = opt === challenge.correctAction
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct, opt), 1800)
  }, [feedback, clearTimer, challenge, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null); setAnswers([])
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-emerald-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="triage-simulator">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Triage Simulator</h2>
        <p className="text-gray-400 mb-4">Read the patient symptoms and choose the correct medical action. Think fast — lives depend on it!</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">🏥</div>
          <p className="text-gray-400 mb-2">{totalRounds} patients. Choose the right medical action for each case.</p>
          <p className="text-sm text-gray-400 mb-6">25 seconds per patient.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-xl font-bold text-lg hover:from-rose-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
            Begin Triage
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="triage-simulator">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Triage Simulator</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-rose-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">{pct >= 80 ? 'Outstanding triage skills — you saved every patient!' : pct >= 50 ? 'Good clinical judgment! Review the cases you missed.' : 'Keep studying — medical decisions require precision!'}</p>
          <div className="bg-rose-950 rounded-xl p-4 mb-4 text-left space-y-2">
            <p className="text-xs font-semibold text-rose-600 uppercase mb-2">Case Review:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${a.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
                <p className="font-medium">{a.symptoms}</p>
                {!a.correct && <p className="text-xs mt-1">Your action: {a.chosen} — Correct: <span className="font-semibold">{a.answer}</span></p>}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="triage-simulator">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Triage Simulator</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Patient {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-rose-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-rose-950 border border-rose-800 rounded-xl p-5 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Patient Symptoms</span>
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
        </div>
        <p className="font-semibold text-gray-200 text-lg">{challenge.patientSymptoms}</p>
        {feedback && <p className="text-sm text-gray-400 mt-2 italic">{challenge.english}</p>}
      </div>

      <p className="text-xs font-semibold text-rose-500 uppercase tracking-wide mb-3">Choose the correct medical action:</p>
      <div className="space-y-3">
        {challenge.options.map((opt) => {
          const isCorrect = opt === challenge.correctAction
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`w-full text-left px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-950 text-green-200' : isSelected && !isCorrect ? 'border-red-700 bg-red-950 text-red-700' : 'border-gray-700 opacity-40'
                  : 'border-gray-700 hover:border-rose-400 hover:bg-rose-950/50 cursor-pointer'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
          {feedback.correct ? 'Correct medical action!' : `Correct: ${challenge.correctAction}`}
        </div>
      )}
    </section>
  )
}
