'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { TONE_TUNER_CHALLENGES } from '@/lib/lessons/L5.8'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 20000

export default function ToneTunerL58({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ context: string; correct: boolean; chosen: string; answer: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = TONE_TUNER_CHALLENGES[round]
  const totalRounds = TONE_TUNER_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, chosen: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setAnswers(prev => [...prev, { context: challenge.context, correct: wasCorrect, chosen, answer: challenge.correctTone }])
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
    const correct = opt === challenge.correctTone
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
      <section id="tone-tuner">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Tone Tuner</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Read the situation, see the too-direct statement, and pick the version with the right tone!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#127926;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} scenarios. Find the appropriately softened response for each.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">20 seconds per scenario.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
            Start Tuning
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="tone-tuner">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Tone Tuner</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-purple-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Perfectly tuned! You sound like a native diplomat.' : pct >= 50 ? 'Good instincts! Some tones still need fine-tuning.' : 'Keep practicing — nuance takes time to master!'}</p>
          <div className="bg-pink-50 dark:bg-pink-950 rounded-xl p-4 mb-4 text-left space-y-2">
            <p className="text-xs font-semibold text-purple-600 uppercase mb-2">Your Results:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${a.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
                <p className="font-medium">{a.context}</p>
                {!a.correct && <p className="text-xs mt-1">Your answer: <span className="italic">{a.chosen}</span></p>}
                {!a.correct && <p className="text-xs mt-1">Better tone: <span className="font-semibold">{a.answer}</span></p>}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="tone-tuner">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Tone Tuner</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Scenario {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-purple-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 rounded-xl p-5 mb-4">
        <p className="text-xs font-semibold text-purple-500 uppercase mb-1">Situation</p>
        <p className="text-gray-700 dark:text-gray-200">{challenge.context}</p>
        {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">{challenge.english}</p>}
      </div>

      <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700 rounded-xl p-4 mb-5">
        <p className="text-xs font-semibold text-red-500 uppercase mb-1">Too Direct</p>
        <p className="text-red-800 font-medium">{challenge.tooDirectStatement}</p>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">Choose the better-toned alternative:</p>

      <div className="space-y-3">
        {challenge.options.map((opt) => {
          const isCorrect = opt === challenge.correctTone
          const isSelected = selected === opt
          const show = feedback !== null
          return (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className={`w-full text-left px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                show ? isCorrect ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : isSelected && !isCorrect ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' : 'border-gray-200 dark:border-gray-700 opacity-40'
                  : 'border-gray-200 dark:border-gray-700 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 cursor-pointer'
              }`}>{opt}</button>
          )
        })}
      </div>
      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {feedback.correct ? 'Perfect tone! Diplomatically done.' : `Better tone: ${challenge.correctTone}`}
        </div>
      )}
    </section>
  )
}
