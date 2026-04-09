'use client'

import { useState, useCallback } from 'react'
import { TIMELINE_WEAVER_CHALLENGES } from '@/lib/lessons/L5.1'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function TimelineWeaverL51({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [userOrder, setUserOrder] = useState<string[]>([])
  const [remaining, setRemaining] = useState<string[]>([])
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [answers, setAnswers] = useState<{ narrative: string; correct: boolean; userOrder: string[]; correctOrder: string[] }[]>([])

  const challenge = TIMELINE_WEAVER_CHALLENGES[round]
  const totalRounds = TIMELINE_WEAVER_CHALLENGES.length

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    setFeedback(null)
    setAnswers([])
    const first = TIMELINE_WEAVER_CHALLENGES[0]
    setRemaining([...first.events])
    setUserOrder([])
  }, [])

  const handleSelect = useCallback((event: string) => {
    if (feedback) return
    setUserOrder(prev => [...prev, event])
    setRemaining(prev => prev.filter(e => e !== event))
  }, [feedback])

  const handleUndo = useCallback(() => {
    if (feedback || userOrder.length === 0) return
    const last = userOrder[userOrder.length - 1]
    setUserOrder(prev => prev.slice(0, -1))
    setRemaining(prev => [...prev, last])
  }, [feedback, userOrder])

  const handleSubmit = useCallback(() => {
    if (userOrder.length !== challenge.correctOrder.length) return
    const isCorrect = userOrder.every((e, i) => e === challenge.correctOrder[i])
    if (isCorrect) setScore(s => s + 1)
    setFeedback({ correct: isCorrect })
    setAnswers(prev => [...prev, { narrative: challenge.narrative, correct: isCorrect, userOrder: [...userOrder], correctOrder: challenge.correctOrder }])

    setTimeout(() => {
      if (round + 1 >= totalRounds) {
        const finalScore = isCorrect ? score + 1 : score
        setPhase('results')
        if (finalScore >= 4) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
      } else {
        const next = TIMELINE_WEAVER_CHALLENGES[round + 1]
        setRemaining([...next.events])
        setUserOrder([])
        setFeedback(null)
        setRound(r => r + 1)
      }
    }, 2500)
  }, [userOrder, challenge, round, totalRounds, score, onComplete])

  if (phase === 'start') {
    return (
      <section id="timeline-weaver">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Timeline Weaver</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Put the events in chronological order. Pay attention to what had happened (pluperfect) vs. what happened (preterite)!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128205;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} narratives. Order the events from first to last.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Events using &quot;había&quot; (pluperfect) happened BEFORE the preterite events.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl">
            Start Weaving
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="timeline-weaver">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Timeline Weaver</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-indigo-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Master storyteller! Your sequencing is flawless.' : pct >= 50 ? 'Good work! Keep practicing event ordering.' : 'The pluperfect takes practice — try again!'}</p>
          <div className="bg-indigo-50 dark:bg-indigo-950 rounded-xl p-4 mb-4 text-left space-y-3">
            <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">Your Results:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-3 rounded-lg ${a.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
                <p className="font-medium mb-1">{a.narrative}</p>
                {!a.correct && (
                  <div className="text-xs mt-1 space-y-1">
                    <p className="text-red-600">Your order:</p>
                    {a.userOrder.map((e, j) => <p key={j} className="pl-2">{j + 1}. {e}</p>)}
                    <p className="text-green-700 mt-1">Correct order:</p>
                    {a.correctOrder.map((e, j) => <p key={j} className="pl-2">{j + 1}. {e}</p>)}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="timeline-weaver">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Timeline Weaver</h2>
      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-500 dark:text-gray-400">Narrative {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-indigo-600">Score: {score}</span>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-700 rounded-xl p-5 mb-5">
        <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg">{challenge.narrative}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{challenge.english}</p>
      </div>

      {/* User's timeline */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-indigo-600 uppercase mb-2">Your Timeline (first → last):</p>
        <div className="space-y-2 min-h-[60px]">
          {userOrder.length === 0 && <p className="text-sm text-gray-500 dark:text-gray-400 italic">Click events below to add them in order...</p>}
          {userOrder.map((event, i) => {
            const isPluperfect = event.includes('había') || event.includes('habían') || event.includes('habíamos')
            return (
              <div key={i} className={`flex items-center gap-2 p-3 rounded-lg border text-sm ${
                feedback ? (event === challenge.correctOrder[i] ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200')
                  : isPluperfect ? 'bg-violet-950 border-violet-700' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}>
                <span className="font-bold text-indigo-500 w-6 shrink-0">{i + 1}.</span>
                <span className="flex-1">{event}</span>
                {isPluperfect && !feedback && <span className="text-xs bg-violet-900 text-violet-200 px-2 py-0.5 rounded-full shrink-0">pluperfect</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Available events */}
      {remaining.length > 0 && !feedback && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Available Events (click to add):</p>
          <div className="space-y-2">
            {remaining.map((event) => (
              <button key={event} onClick={() => handleSelect(event)}
                className="w-full text-left px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:bg-indigo-950/50 text-sm font-medium transition-all cursor-pointer">
                {event}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      {!feedback && (
        <div className="flex gap-3 mt-4">
          <button onClick={handleUndo} disabled={userOrder.length === 0}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed">
            Undo Last
          </button>
          <button onClick={handleSubmit} disabled={remaining.length > 0}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            Check Order
          </button>
        </div>
      )}

      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {feedback.correct ? 'Perfect timeline! Events in the right order.' : 'Not quite — check the correct order above.'}
        </div>
      )}
    </section>
  )
}
