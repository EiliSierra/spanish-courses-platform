'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { IDENTITY_MOSAIC_CHALLENGES } from '@/lib/lessons/L7.8'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 22000

export default function IdentityMosaicL78({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'study' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ concept: string; correct: boolean; chosen: string; answer: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = IDENTITY_MOSAIC_CHALLENGES[round]
  const totalRounds = IDENTITY_MOSAIC_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, chosen: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setAnswers(prev => [...prev, { concept: challenge.concept, correct: wasCorrect, chosen, answer: challenge.correctDescription }])
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
    const correct = opt === challenge.correctDescription
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct, opt), 2000)
  }, [feedback, clearTimer, challenge, advanceRound])

  const startStudy = useCallback(() => setPhase('study'), [])
  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null); setAnswers([])
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="identity-mosaic">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Identity Mosaic</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Read each cultural scenario and identify the correct concept or description. Think about identity, migration, and belonging!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#127758;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} cultural scenarios. First, study the key concepts. Then identify them!</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">22 seconds per scenario.</p>
          <button onClick={startStudy} className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl">
            Study the Concepts
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'study') {
    return (
      <section id="identity-mosaic">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Identity Mosaic</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Study these cultural concepts carefully. You&apos;ll need to match them to scenarios!</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {IDENTITY_MOSAIC_CHALLENGES.map((ch) => (
            <div key={ch.correctDescription} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <h3 className="font-bold text-rose-700 dark:text-rose-400 mb-2">{ch.correctDescription}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ch.concept}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">{ch.english}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl">
            I&apos;m Ready — Start the Quiz!
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="identity-mosaic">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Identity Mosaic</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-rose-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Exceptional cultural awareness! You understand the complexity of identity.' : pct >= 50 ? 'Good instincts! Study the concepts you missed.' : 'Keep exploring — cultural understanding deepens with every conversation!'}</p>
          <div className="bg-rose-50 dark:bg-rose-950 rounded-xl p-4 mb-4 text-left space-y-2">
            <p className="text-xs font-semibold text-rose-600 uppercase mb-2">Your Results:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${a.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
                <p className="font-medium">{a.concept.slice(0, 80)}...</p>
                {!a.correct && <p className="text-xs mt-1">Correct: <span className="font-semibold">{a.answer}</span></p>}
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
    <section id="identity-mosaic">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Identity Mosaic</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Scenario {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-rose-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 rounded-xl p-5 mb-3">
        <p className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{challenge.concept}</p>
        {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">{challenge.english}</p>}
      </div>

      <div className="bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 rounded-xl p-4 mb-5">
        <p className="text-sm font-medium text-pink-800 dark:text-pink-200">Which concept best describes this cultural situation?</p>
      </div>

      <div className="space-y-3">
        {challenge.options.map((opt) => {
          const isCorrect = opt === challenge.correctDescription
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`w-full text-left px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : isSelected && !isCorrect ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' : 'border-gray-200 dark:border-gray-700 opacity-40'
                  : 'border-gray-200 dark:border-gray-700 hover:border-rose-400 hover:bg-rose-50 dark:hover:bg-rose-50 dark:hover:bg-rose-950/50 cursor-pointer text-gray-700 dark:text-gray-200'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {feedback.correct ? 'Excellent cultural insight!' : `Correct: ${challenge.correctDescription}`}
        </div>
      )}
    </section>
  )
}
