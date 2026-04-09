'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { LEGAL_NAVIGATOR_CHALLENGES } from '@/lib/lessons/L6.3'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 30000

export default function LegalNavigatorL63({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ question: string; correct: boolean; chosen: string; answer: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = LEGAL_NAVIGATOR_CHALLENGES[round]
  const totalRounds = LEGAL_NAVIGATOR_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, chosen: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setAnswers(prev => [...prev, { question: challenge.question, correct: wasCorrect, chosen, answer: challenge.correctAnswer }])
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
    const correct = opt === challenge.correctAnswer
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
      <section id="legal-navigator">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Legal Navigator</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Read real legal document excerpts and answer comprehension questions. Can you decode the legalese?</p>
        <div className="bg-white rounded-xl border border-stone-200 p-8 text-center">
          <div className="text-5xl mb-4">&#9878;&#65039;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} legal excerpts. Read carefully and answer the comprehension question.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">30 seconds per document — legal texts need careful reading!</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-stone-600 to-amber-600 text-white rounded-xl font-bold text-lg hover:from-stone-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl">
            Enter the Courtroom
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="legal-navigator">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Legal Navigator</h2>
        <div className="bg-white rounded-xl border border-stone-200 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-amber-700 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Objection sustained — you\'re a legal expert!' : pct >= 50 ? 'Good reading! Some legal texts still tripped you up.' : 'The law is complex — keep studying those legal formulas!'}</p>
          <div className="bg-stone-50 dark:bg-stone-950 rounded-xl p-4 mb-4 text-left space-y-2">
            <p className="text-xs font-semibold text-amber-700 uppercase mb-2">Your Results:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${a.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
                <p className="font-medium">{a.question}</p>
                {!a.correct && <p className="text-xs mt-1">Your answer: {a.chosen} — Correct: <span className="font-semibold">{a.answer}</span></p>}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="legal-navigator">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Legal Navigator</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Document {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-amber-700">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 rounded-xl p-5 mb-4">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Legal Document Excerpt</p>
        <p className="font-serif text-gray-700 dark:text-gray-200 text-sm leading-relaxed italic">&ldquo;{challenge.document}&rdquo;</p>
        {feedback && <p className="text-xs text-stone-400 mt-3 not-italic border-t border-stone-200 pt-2">{challenge.english}</p>}
      </div>

      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-700 rounded-xl p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-200">{challenge.question}</p>
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
          {feedback.correct ? 'Correct! You read the legalese perfectly.' : `Correct answer: ${challenge.correctAnswer}`}
        </div>
      )}
    </section>
  )
}
