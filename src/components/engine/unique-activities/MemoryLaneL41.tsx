'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { MEMORY_LANE_CHALLENGES } from '@/lib/lessons/L4.1'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 20000

export default function MemoryLaneL41({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<'imperfect' | 'preterite' | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [answers, setAnswers] = useState<{ sentence: string; correct: boolean; explanation: string }[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const challenge = MEMORY_LANE_CHALLENGES[round]
  const totalRounds = MEMORY_LANE_CHALLENGES.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean, explanation: string, sentence: string) => {
    clearTimer()
    if (wasCorrect) { scoreRef.current++; setScore(scoreRef.current) }
    setAnswers(prev => [...prev, { sentence, correct: wasCorrect, explanation }])
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 6) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 2200)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  useEffect(() => {
    if (phase !== 'game' || !challenge || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const pct = Math.max(0, 100 - ((Date.now() - start) / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) { clearTimer(); setFeedback({ correct: false }); setTimeout(() => advanceRound(false, challenge.explanation, challenge.sentence), 2200) }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, challenge])

  const handleSelect = useCallback((tense: 'imperfect' | 'preterite') => {
    if (feedback) return
    clearTimer()
    setSelected(tense)
    const correct = tense === challenge.correctTense
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct, challenge.explanation, challenge.sentence), 2200)
  }, [feedback, clearTimer, challenge, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0); scoreRef.current = 0
    setFeedback(null); setSelected(null); setAnswers([])
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="memory-lane">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Memory Lane</h2>
        <p className="text-gray-400 mb-4">Read each sentence and decide: is it Imperfect or Preterite?</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128173;</div>
          <p className="text-gray-400 mb-2">{totalRounds} memory scenarios. Pick the correct tense for each one.</p>
          <p className="text-sm text-gray-400 mb-2">Imperfect = habitual, ongoing, background descriptions.</p>
          <p className="text-sm text-gray-400 mb-6">Preterite = completed, one-time, specific events.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-xl font-bold text-lg hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg hover:shadow-xl">
            Start Memory Lane
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="memory-lane">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Memory Lane</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-purple-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">{pct >= 80 ? 'Excellent! You really understand the difference!' : pct >= 50 ? 'Good job! Keep practicing the imperfect vs. preterite contrast.' : 'Keep working on distinguishing imperfect from preterite!'}</p>
          <div className="bg-purple-950 rounded-xl p-4 mb-4 text-left max-h-64 overflow-y-auto">
            <p className="text-xs font-semibold text-purple-600 uppercase mb-2">Review:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm mb-3 p-2 rounded-lg ${a.correct ? 'bg-green-950' : 'bg-red-950'}`}>
                <p className="font-medium text-gray-200">{a.correct ? '\u2705' : '\u274c'} {a.sentence}</p>
                <p className="text-gray-400 text-xs mt-1">{a.explanation}</p>
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
    <section id="memory-lane">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Memory Lane</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Scenario {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-purple-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-purple-950 border border-purple-800 rounded-xl p-5 mb-5">
        <p className="font-semibold text-gray-200 text-lg leading-relaxed">&ldquo;{challenge.sentence}&rdquo;</p>
        <p className="text-sm text-gray-400 mt-2 italic">{challenge.english}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => handleSelect('imperfect')}
          disabled={!!feedback}
          className={`px-4 py-5 rounded-xl border-2 font-bold text-lg transition-all ${
            feedback
              ? challenge.correctTense === 'imperfect'
                ? 'border-green-400 bg-green-950 text-green-200'
                : selected === 'imperfect'
                  ? 'border-red-700 bg-red-950 text-red-700'
                  : 'border-gray-700 opacity-40'
              : 'border-purple-800 hover:border-purple-400 hover:bg-purple-950/50 cursor-pointer text-purple-700'
          }`}
        >
          Imperfecto
          <span className="block text-xs font-normal mt-1 opacity-70">habitual / ongoing</span>
        </button>
        <button
          onClick={() => handleSelect('preterite')}
          disabled={!!feedback}
          className={`px-4 py-5 rounded-xl border-2 font-bold text-lg transition-all ${
            feedback
              ? challenge.correctTense === 'preterite'
                ? 'border-green-400 bg-green-950 text-green-200'
                : selected === 'preterite'
                  ? 'border-red-700 bg-red-950 text-red-700'
                  : 'border-gray-700 opacity-40'
              : 'border-violet-800 hover:border-violet-400 hover:bg-violet-950/50 cursor-pointer text-violet-700'
          }`}
        >
          Pretérito
          <span className="block text-xs font-normal mt-1 opacity-70">completed / one-time</span>
        </button>
      </div>

      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
          {feedback.correct ? `Correct! ${challenge.explanation}` : `Not quite. ${challenge.explanation}`}
        </div>
      )}
    </section>
  )
}
