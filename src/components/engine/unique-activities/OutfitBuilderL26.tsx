'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { OUTFIT_CHALLENGES } from '@/lib/lessons/L2.6'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 20000

export default function OutfitBuilderL26({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = OUTFIT_CHALLENGES[round]
  const totalRounds = OUTFIT_CHALLENGES.length

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
      setTimeout(() => { setFeedback(null); setSelected(new Set()); setRound(r => r + 1) }, 2200)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  useEffect(() => {
    if (phase !== 'game' || !challenge || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false), 2200) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, challenge])

  const toggleItem = useCallback((item: string) => {
    if (feedback) return
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(item)) next.delete(item)
      else next.add(item)
      return next
    })
  }, [feedback])

  const handleSubmit = useCallback(() => {
    if (feedback || !challenge) return
    clearTimer()
    const correctSet = new Set(challenge.correctItems)
    const isCorrect = selected.size === correctSet.size && [...selected].every(s => correctSet.has(s))
    setFeedback({ correct: isCorrect })
    setTimeout(() => advanceRound(isCorrect), 2200)
  }, [feedback, challenge, selected, clearTimer, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(new Set())
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="outfit-builder">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Outfit Builder</h2>
        <p className="text-gray-400 mb-4">Pick the right clothes for each scenario!</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128087;</div>
          <p className="text-gray-400 mb-2">{totalRounds} scenarios. Pick exactly 3 items that fit the situation.</p>
          <p className="text-sm text-gray-400 mb-6">20 seconds per outfit.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl">
            Start Styling
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="outfit-builder">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Outfit Builder</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-pink-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">{pct >= 80 ? 'Fashion expert!' : pct >= 50 ? 'Nice picks! A few outfits were off.' : 'Keep practicing your outfits!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="outfit-builder">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Outfit Builder</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Outfit {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-pink-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-pink-950 border border-pink-200 rounded-xl p-4 mb-5">
        <p className="font-semibold text-gray-200 text-lg">{challenge.scenario}</p>
        {feedback && <p className="text-sm text-gray-400 mt-1 italic">{challenge.english}</p>}
      </div>

      <p className="text-sm font-semibold text-gray-400 mb-3">Pick 3 items:</p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {challenge.allItems.map((item) => {
          const isSel = selected.has(item)
          const isCorrect = challenge.correctItems.includes(item)
          const show = feedback !== null
          return (
            <button key={item} onClick={() => toggleItem(item)} disabled={!!feedback}
              className={`px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-950 text-green-200'
                  : isSel && !isCorrect ? 'border-red-700 bg-red-950 text-red-700'
                  : 'border-gray-700 opacity-40'
                : isSel ? 'border-pink-400 bg-pink-950 text-pink-800 ring-2 ring-pink-200'
                : 'border-gray-700 hover:border-pink-300 hover:bg-pink-950/50 cursor-pointer'
              }`}>{item}</button>
          )
        })}
      </div>

      {!feedback && (
        <button onClick={handleSubmit} disabled={selected.size !== 3}
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
            selected.size === 3 ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}>
          {selected.size === 3 ? 'Check Outfit!' : `Select ${3 - selected.size} more item${3 - selected.size !== 1 ? 's' : ''}`}
        </button>
      )}

      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
          {feedback.correct ? 'Perfect outfit!' : `Correct: ${challenge.correctItems.join(', ')}`}
        </div>
      )}
    </section>
  )
}
