'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { INTERVIEW_QUESTIONS } from '@/lib/lessons/L2.8'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 20000

export default function JobInterviewL28({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const question = INTERVIEW_QUESTIONS[round]
  const totalRounds = INTERVIEW_QUESTIONS.length

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
    if (phase !== 'game' || !question || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false), 2000) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, question])

  const handleSelect = useCallback((opt: string) => {
    if (feedback) return
    clearTimer()
    setSelected(opt)
    const correct = opt === question.correctAnswer
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct), 2000)
  }, [feedback, clearTimer, question, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="job-interview">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Job Interview Simulator</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Answer the interviewer\u2019s questions with the best response!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128188;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} interview questions. Pick the best professional answer.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">20 seconds per question.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl">
            Start Interview
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="job-interview">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Job Interview Simulator</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-emerald-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'You\u2019re hired!' : pct >= 50 ? 'Good answers! A few could improve.' : 'Let\u2019s practice more interview skills!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!question) return null

  return (
    <section id="job-interview">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Job Interview Simulator</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Question {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-emerald-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 mb-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">&#128100;</span>
          <div>
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">Interviewer asks:</p>
            <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg">{question.interviewer}</p>
            {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{question.english}</p>}
          </div>
        </div>
      </div>

      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Your best answer:</p>
      <div className="space-y-3">
        {question.options.map((opt) => {
          const isCorrect = opt === question.correctAnswer
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`w-full text-left px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : isSelected && !isCorrect ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' : 'border-gray-200 dark:border-gray-700 opacity-40'
                  : 'border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 cursor-pointer'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {feedback.correct ? 'Great answer!' : 'Better answer: ' + question.correctAnswer}
        </div>
      )}
    </section>
  )
}
