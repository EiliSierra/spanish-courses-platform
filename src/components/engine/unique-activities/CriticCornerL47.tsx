'use client'

import { useState, useCallback } from 'react'
import { CRITIC_CHALLENGES } from '@/lib/lessons/L4.7'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function CriticCornerL47({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)

  const challenge = CRITIC_CHALLENGES[round]
  const totalRounds = CRITIC_CHALLENGES.length

  const advanceRound = useCallback((wasCorrect: boolean) => {
    const newScore = wasCorrect ? score + 1 : score
    if (wasCorrect) setScore(newScore)
    if (round + 1 >= totalRounds) {
      setTimeout(() => {
        setPhase('results')
        if (newScore >= 4) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
      }, 1800)
    } else {
      setTimeout(() => { setFeedback(null); setSelected(null); setRound(r => r + 1) }, 1800)
    }
  }, [round, totalRounds, score, onComplete])

  const handleSelect = useCallback((opt: string) => {
    if (feedback) return
    setSelected(opt)
    const correct = opt === challenge.correctGenre
    setFeedback({ correct })
    advanceRound(correct)
  }, [feedback, challenge, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0)
    setFeedback(null); setSelected(null)
  }, [])

  if (phase === 'start') {
    return (
      <section id="critic-corner">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Critic Corner</h2>
        <p className="text-gray-600 mb-4">Read a Spanish review and guess the genre or type!</p>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-4">&#127916;</div>
          <p className="text-gray-600 mb-2">{totalRounds} reviews. Read each one and match it to the correct genre.</p>
          <p className="text-sm text-gray-400 mb-6">Use context clues from the description!</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-xl font-bold text-lg hover:from-purple-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl">
            Start Reviewing
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="critic-corner">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Critic Corner</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-purple-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-600 mb-4">{pct >= 80 ? 'Expert critic!' : pct >= 50 ? 'Good eye for genres!' : 'Keep reading and watching!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  return (
    <section id="critic-corner">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Critic Corner</h2>
      <div className="flex justify-between text-sm mb-4">
        <span className="text-gray-500">Review {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-purple-600">Score: {score}</span>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">&#128221;</span>
            <div>
              <p className="font-semibold text-gray-800 text-lg italic">&ldquo;{challenge.review}&rdquo;</p>
              {feedback && <p className="text-sm text-gray-500 mt-2">{challenge.english}</p>}
            </div>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-500 mb-3">What genre or type is this?</p>
        <div className="grid grid-cols-2 gap-3">
          {challenge.options.map((opt) => {
            const isCorrect = opt === challenge.correctGenre
            const isSelected = selected === opt
            const show = feedback !== null
            return (
              <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
                className={`px-4 py-4 rounded-xl border-2 font-medium text-sm transition-all ${
                  show ? isCorrect ? 'border-green-400 bg-green-50 text-green-800' : isSelected && !isCorrect ? 'border-red-300 bg-red-50 text-red-700' : 'border-gray-200 opacity-40'
                    : 'border-gray-200 hover:border-purple-400 hover:bg-purple-50/50 cursor-pointer'
                }`}>{opt}</button>
            )
          })}
        </div>
        {feedback && (
          <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {feedback.correct ? 'Correct!' : `It was: ${challenge.correctGenre}`}
          </div>
        )}
      </div>
    </section>
  )
}
