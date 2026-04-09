'use client'

import { useState, useCallback } from 'react'
import { ECO_QUIZ_CHALLENGES } from '@/lib/lessons/L3.6'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function EcoQuizL36({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)

  const challenge = ECO_QUIZ_CHALLENGES[round]
  const totalRounds = ECO_QUIZ_CHALLENGES.length

  const advanceRound = useCallback((wasCorrect: boolean) => {
    const newScore = wasCorrect ? score + 1 : score
    if (wasCorrect) setScore(newScore)
    if (round + 1 >= totalRounds) {
      setTimeout(() => {
        setPhase('results')
        if (newScore >= 10) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
      }, 2000)
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 2000)
    }
  }, [round, totalRounds, score, onComplete])

  const handleSelect = useCallback((answer: boolean) => {
    if (feedback) return
    setSelected(answer)
    const correct = answer === challenge.isTrue
    setFeedback({ correct })
    if (correct) setScore(s => s + 1)
    if (round + 1 >= totalRounds) {
      const finalScore = correct ? score + 1 : score
      setTimeout(() => {
        setPhase('results')
        if (finalScore >= 10) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
      }, 2000)
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 2000)
    }
  }, [feedback, challenge, round, totalRounds, score, onComplete])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0)
    setFeedback(null); setSelected(null)
  }, [])

  if (phase === 'start') {
    return (
      <section id="eco-quiz">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Eco Quiz</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Test your knowledge about Latin American nature and environment!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#127758;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} facts about nature and the environment. True or false?</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Read each statement in Spanish and decide if it&apos;s true or false.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl">
            Start Quiz
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="eco-quiz">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Eco Quiz</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-emerald-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Eco expert! Amazing knowledge!' : pct >= 50 ? 'Good job! Keep learning about our planet.' : 'Keep exploring nature facts!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="eco-quiz">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Eco Quiz</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Fact {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-emerald-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className="h-full rounded-full bg-emerald-500 transition-all duration-300" style={{ width: `${((round) / totalRounds) * 100}%` }} />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-4">
          <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg leading-relaxed">{challenge.statement}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">{challenge.english}</p>
        </div>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Is this statement true or false?</p>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSelect(true)}
            disabled={!!feedback}
            className={`px-4 py-4 rounded-xl border-2 font-bold text-lg transition-all ${
              feedback
                ? selected === true
                  ? feedback.correct
                    ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                    : 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                  : challenge.isTrue
                    ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                    : 'border-gray-200 dark:border-gray-700 opacity-40'
                : 'border-emerald-800 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 cursor-pointer text-emerald-700'
            }`}
          >
            &#9989; True
          </button>
          <button
            onClick={() => handleSelect(false)}
            disabled={!!feedback}
            className={`px-4 py-4 rounded-xl border-2 font-bold text-lg transition-all ${
              feedback
                ? selected === false
                  ? feedback.correct
                    ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                    : 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                  : !challenge.isTrue
                    ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                    : 'border-gray-200 dark:border-gray-700 opacity-40'
                : 'border-rose-800 hover:border-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 cursor-pointer text-rose-700'
            }`}
          >
            &#10060; False
          </button>
        </div>
        {feedback && (
          <div className={`text-sm p-4 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
            <p className="font-semibold mb-1">{feedback.correct ? 'Correct!' : `Wrong! The answer is ${challenge.isTrue ? 'True' : 'False'}.`}</p>
            <p className="text-xs opacity-80">{challenge.explanation}</p>
          </div>
        )}
      </div>
    </section>
  )
}
