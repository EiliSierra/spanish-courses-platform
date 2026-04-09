'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { FINAL_SHOWCASE_CHALLENGES } from '@/lib/lessons/L10.2'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 25000

export default function FinalShowcaseL102({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ scenario: string; correct: boolean; chosen: string; answer: string; fromLevels: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = FINAL_SHOWCASE_CHALLENGES[round]
  const totalRounds = FINAL_SHOWCASE_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, chosen: string) => {
    clearTimer()
    if (wasCorrect) {
      scoreRef.current++
      setScore(scoreRef.current)
      // Small confetti burst on every correct answer
      spawnConfetti(window.innerWidth / 2, 300, 15)
      // Big explosion at 5+ correct
      if (scoreRef.current >= 5) {
        setTimeout(() => spawnConfetti(window.innerWidth / 2, 200, 80), 400)
      }
    }
    setAnswers(prev => [...prev, { scenario: challenge.scenario, correct: wasCorrect, chosen, answer: challenge.correctAnswer, fromLevels: challenge.fromLevels }])
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 5) {
        setTimeout(() => spawnConfetti(window.innerWidth / 2, 200, 80), 300)
        onComplete?.()
      }
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
    const correct = opt === challenge.correctAnswer
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct, opt), 1800)
  }, [feedback, clearTimer, challenge, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null); setAnswers([])
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="final-showcase">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Final Showcase</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">The ultimate challenge — prove your mastery across ALL levels of the program!</p>
        <div className="bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 rounded-xl border border-amber-800 p-8 text-center">
          <div className="text-5xl mb-4">&#128081;</div>
          <h3 className="text-xl font-bold text-amber-200 mb-2">The Grand Finale</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} real-world scenarios drawing from ALL 10 levels of the program.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">25 seconds per scenario. Each challenge shows which levels it draws from.</p>
          <p className="text-sm text-amber-600 font-medium mb-6">Score 5+ to complete the Alexandria Language Institute Spanish Program!</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
            Begin Final Showcase
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    const isComplete = score >= 5
    return (
      <section id="final-showcase">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Final Showcase</h2>
        <div className="bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 rounded-xl border border-amber-800 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-amber-600 mb-1">{score}/{totalRounds}</div>
          {isComplete ? (
            <div className="mb-4">
              <p className="text-lg font-bold text-amber-200 mb-1">You have completed the Alexandria Language Institute Spanish Program!</p>
              <p className="text-gray-500 dark:text-gray-400">From your first &quot;Hola&quot; to complete mastery — congratulations on this incredible achievement. The Spanish-speaking world is yours.</p>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 50 ? 'So close! Review the levels shown below and try again to complete the program!' : 'Keep practicing! Each challenge shows which levels to review.'}</p>
          )}
          <div className="bg-white/60 rounded-xl p-4 mb-4 text-left space-y-2">
            <p className="text-xs font-semibold text-amber-600 uppercase mb-2">Your Results:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-3 rounded-lg ${a.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
                <div className="flex justify-between items-start">
                  <p className="font-medium flex-1">{a.scenario.length > 100 ? a.scenario.slice(0, 100) + '...' : a.scenario}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 ml-2 whitespace-nowrap">{a.fromLevels}</span>
                </div>
                {!a.correct && <p className="text-xs mt-1">Your answer: {a.chosen} — Correct: <span className="font-semibold">{a.answer}</span></p>}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 text-white rounded-lg font-medium hover:from-amber-700 hover:via-rose-700 hover:to-purple-700 transition-all">
            {isComplete ? 'Play Again' : 'Try Again'}
          </button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="final-showcase">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Final Showcase</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Challenge {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-amber-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 border border-amber-800 rounded-xl p-5 mb-5">
        <div className="flex justify-between items-start mb-3">
          <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg flex-1">{challenge.scenario}</p>
          <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 ml-3 whitespace-nowrap font-medium">{challenge.fromLevels}</span>
        </div>
        {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">{challenge.english}</p>}
      </div>

      <div className="space-y-3">
        {challenge.options.map((opt) => {
          const isCorrect = opt === challenge.correctAnswer
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`w-full text-left px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : isSelected && !isCorrect ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' : 'border-gray-200 dark:border-gray-700 opacity-40'
                  : 'border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:bg-amber-950/50 cursor-pointer'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {feedback.correct ? 'Excellent! You command this structure!' : `Correct: ${challenge.correctAnswer}`}
        </div>
      )}
    </section>
  )
}
