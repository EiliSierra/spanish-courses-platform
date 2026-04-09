'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { POSTCARD_CHALLENGES } from '@/lib/lessons/L3.8'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 20000

const DESTINATIONS = ['Machu Picchu', 'Cancún', 'Buenos Aires', 'Cartagena', 'Galápagos', 'Barcelona']

export default function PostcardWriterL38({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [postcards, setPostcards] = useState<string[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = POSTCARD_CHALLENGES[round]
  const totalRounds = POSTCARD_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, message: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setPostcards(prev => [...prev, message])
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 4) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 1800)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  useEffect(() => {
    if (phase !== 'game' || !challenge || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false, challenge.correctMessage), 1800) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, challenge])

  const handleSelect = useCallback((opt: string) => {
    if (feedback) return
    clearTimer()
    setSelected(opt)
    const correct = opt === challenge.correctMessage
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct, correct ? opt : challenge.correctMessage), 1800)
  }, [feedback, clearTimer, challenge, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null); setPostcards([])
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="postcard-writer">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Postcard Writer</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Read each travel scenario and pick the best Spanish postcard message!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#9993;&#65039;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} postcards from amazing destinations. Choose the correct past-tense message for each.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">20 seconds per postcard.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl">
            Start Writing Postcards
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="postcard-writer">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Postcard Writer</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-amber-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Amazing travel writer!' : pct >= 50 ? 'Good postcards! Practice your preterite a bit more.' : 'Keep practicing those past tense travel stories!'}</p>
          <div className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4 mb-4 text-left">
            <p className="text-xs font-semibold text-amber-600 uppercase mb-2">Your Postcards:</p>
            {postcards.map((msg, i) => (
              <div key={i} className="mb-2 p-2 bg-white rounded-lg border border-amber-100">
                <p className="text-xs font-semibold text-orange-500">{DESTINATIONS[i]}</p>
                <p className="text-sm text-gray-700">{msg}</p>
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="postcard-writer">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Postcard Writer</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Postcard {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-amber-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      {postcards.length > 0 && (
        <div className="bg-amber-50 dark:bg-amber-950/50 rounded-lg p-3 mb-4 border border-amber-100">
          <p className="text-xs font-semibold text-amber-500 mb-1">Postcards sent:</p>
          {postcards.map((msg, i) => (
            <span key={i} className="text-sm text-gray-500 dark:text-gray-400 block">{DESTINATIONS[i]}: {msg.slice(0, 40)}...</span>
          ))}
        </div>
      )}

      <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-xl p-4 mb-3">
        <p className="text-xs font-semibold text-orange-500 uppercase mb-1">{DESTINATIONS[round]}</p>
        <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg">{challenge.scenario}</p>
        {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{challenge.english}</p>}
      </div>

      <div className="space-y-3">
        {challenge.options.map((opt) => {
          const isCorrect = opt === challenge.correctMessage
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
          {feedback.correct ? 'Perfect postcard!' : `Correct: ${challenge.correctMessage}`}
        </div>
      )}
    </section>
  )
}
