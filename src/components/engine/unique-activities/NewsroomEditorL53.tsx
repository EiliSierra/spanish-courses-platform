'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { NEWSROOM_EDITOR_CHALLENGES } from '@/lib/lessons/L5.3'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 22000

export default function NewsroomEditorL53({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ activeVoice: string; correct: boolean; chosen: string; answer: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = NEWSROOM_EDITOR_CHALLENGES[round]
  const totalRounds = NEWSROOM_EDITOR_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, chosen: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setAnswers(prev => [...prev, { activeVoice: challenge.activeVoice, correct: wasCorrect, chosen, answer: challenge.correctPassive }])
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
    const correct = opt === challenge.correctPassive
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
      <section id="newsroom-editor">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Newsroom Editor</h2>
        <p className="text-gray-400 mb-4">You&apos;re the editor! Rewrite active-voice sentences into the correct passive or impersonal construction.</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128240;</div>
          <p className="text-gray-400 mb-2">{totalRounds} headlines to edit. Choose the best passive or impersonal rewrite.</p>
          <p className="text-sm text-gray-400 mb-6">22 seconds per headline.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-slate-500 to-zinc-600 text-white rounded-xl font-bold text-lg hover:from-slate-600 hover:to-zinc-700 transition-all shadow-lg hover:shadow-xl">
            Start Editing
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="newsroom-editor">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Newsroom Editor</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-slate-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">{pct >= 80 ? 'Star editor! Your rewrites are publication-ready.' : pct >= 50 ? 'Good instincts! Some constructions need more practice.' : 'Keep practicing — passive voice takes time to master!'}</p>
          <div className="bg-slate-950 rounded-xl p-4 mb-4 text-left space-y-2">
            <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Your Edits:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${a.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
                <p className="font-medium">Active: {a.activeVoice}</p>
                {!a.correct && <p className="text-xs mt-1">Your edit: {a.chosen} — Best: <span className="font-semibold">{a.answer}</span></p>}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="newsroom-editor">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Newsroom Editor</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Headline {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-slate-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-amber-950 border border-amber-700 rounded-xl p-5 mb-2">
        <p className="text-xs font-semibold text-amber-600 uppercase mb-1">Active Voice (Original):</p>
        <p className="font-semibold text-gray-200 text-lg">{challenge.activeVoice}</p>
        {feedback && <p className="text-sm text-gray-400 mt-2 italic">{challenge.english}</p>}
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase mb-3 mt-3">Choose the best passive/impersonal rewrite:</p>

      <div className="space-y-3">
        {challenge.options.map((opt) => {
          const isCorrect = opt === challenge.correctPassive
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`w-full text-left px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-950 text-green-200' : isSelected && !isCorrect ? 'border-red-700 bg-red-950 text-red-700' : 'border-gray-700 opacity-40'
                  : 'border-gray-700 hover:border-slate-400 hover:bg-slate-950/50 cursor-pointer'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
          {feedback.correct ? 'Great edit! Perfect passive construction.' : `Best rewrite: ${challenge.correctPassive}`}
        </div>
      )}
    </section>
  )
}
