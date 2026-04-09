'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { PITCH_PERFECT_CHALLENGES } from '@/lib/lessons/L9.8'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 25000

export default function PitchPerfectL98({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ scenario: string; correct: boolean; chosen: string; answer: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = PITCH_PERFECT_CHALLENGES[round]
  const totalRounds = PITCH_PERFECT_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, chosen: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setAnswers(prev => [...prev, { scenario: challenge.scenario, correct: wasCorrect, chosen, answer: challenge.correctPitch }])
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 5) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 2000)
    }
  }, [round, totalRounds, clearTimer, onComplete, challenge])

  useEffect(() => {
    if (phase !== 'game' || !challenge || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false, '(time out)'), 2000) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, challenge])

  const handleSelect = useCallback((opt: string) => {
    if (feedback) return
    clearTimer()
    setSelected(opt)
    const correct = opt === challenge.correctPitch
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct, opt), 2000)
  }, [feedback, clearTimer, challenge, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null); setAnswers([])
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="pitch-perfect">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Pitch Perfect</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Read each entrepreneurial scenario and choose the most effective pitch or response. Think like a founder!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128640;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} investor scenarios. Choose the most compelling and data-driven response.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">25 seconds per scenario.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold text-lg hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl">
            Start Pitching
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="pitch-perfect">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Pitch Perfect</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-teal-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Brilliant founder instincts! Investors would fund you in a heartbeat.' : pct >= 50 ? 'Good pitching sense! Review the scenarios you missed.' : 'Keep practicing your pitch — every great founder started somewhere!'}</p>
          <div className="bg-teal-50 dark:bg-teal-950 rounded-xl p-4 mb-4 text-left space-y-2">
            <p className="text-xs font-semibold text-teal-600 uppercase mb-2">Your Pitches:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${a.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
                <p className="font-medium">{a.scenario.slice(0, 80)}...</p>
                {!a.correct && <p className="text-xs mt-1">Best pitch: <span className="font-semibold">{a.answer.slice(0, 100)}...</span></p>}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="pitch-perfect">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Pitch Perfect</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Scenario {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-teal-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 rounded-xl p-5 mb-3">
        <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg">{challenge.scenario}</p>
        {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">{challenge.english}</p>}
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-5">
        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-800 dark:text-emerald-200">Which pitch or response is most effective?</p>
      </div>

      <div className="space-y-3">
        {challenge.options.map((opt) => {
          const isCorrect = opt === challenge.correctPitch
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`w-full text-left px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : isSelected && !isCorrect ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' : 'border-gray-200 dark:border-gray-700 opacity-40'
                  : 'border-gray-200 dark:border-gray-700 hover:border-teal-400 hover:bg-teal-950/50 cursor-pointer'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {feedback.correct ? 'Excellent pitch! Data-driven and compelling.' : `Best pitch: ${challenge.correctPitch.slice(0, 80)}...`}
        </div>
      )}
    </section>
  )
}
