'use client'

import { useState, useCallback } from 'react'
import { SUBJUNCTIVE_CHALLENGES } from '@/lib/lessons/L4.2'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function SubjunctiveDetectorL42({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<'indicative' | 'subjunctive' | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null)

  const scenario = SUBJUNCTIVE_CHALLENGES[round]
  const totalRounds = SUBJUNCTIVE_CHALLENGES.length

  const handleSelect = useCallback((choice: 'indicative' | 'subjunctive') => {
    if (feedback) return
    setSelected(choice)
    const correct = choice === scenario.correctMood
    setFeedback({ correct, explanation: scenario.explanation })
    if (correct) setScore(s => s + 1)
    setTimeout(() => {
      if (round + 1 >= totalRounds) {
        const finalScore = correct ? score + 1 : score
        setPhase('results')
        if (finalScore >= 6) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
      } else {
        setFeedback(null)
        setSelected(null)
        setRound(r => r + 1)
      }
    }, 3000)
  }, [feedback, scenario, round, totalRounds, score, onComplete])

  const startGame = useCallback(() => {
    setPhase('game'); setRound(0); setScore(0)
    setFeedback(null); setSelected(null)
  }, [])

  if (phase === 'start') {
    return (
      <section id="subjunctive-detector">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Subjunctive Detector</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Read the sentence and decide: is it indicative or subjunctive?</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128270;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} sentences. Identify the mood of each one.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Look for WEIRDO triggers: Wishes, Emotions, Impersonal, Recommendations, Doubt, Ojalá.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl">
            Start Detecting
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="subjunctive-detector">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Subjunctive Detector</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-indigo-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Subjunctive master!' : pct >= 50 ? 'Good eye! Keep practicing the tricky ones.' : 'Review the WEIRDO triggers and try again!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!scenario) return null

  return (
    <section id="subjunctive-detector">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Subjunctive Detector</h2>
      <div className="flex justify-between text-sm mb-4">
        <span className="text-gray-500 dark:text-gray-400">Sentence {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-indigo-600">Score: {score}</span>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        {/* Sentence display */}
        <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-700 rounded-xl p-5 mb-2 text-center">
          <p className="font-semibold text-gray-700 dark:text-gray-200 text-xl mb-1">{scenario.sentence}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">{scenario.english}</p>
        </div>

        {/* Question */}
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 mt-5 text-center">What mood is the underlined clause?</p>

        {/* Two buttons */}
        <div className="grid grid-cols-2 gap-4">
          {(['indicative', 'subjunctive'] as const).map((mood) => {
            const isCorrect = mood === scenario.correctMood
            const isSelected = selected === mood
            const show = feedback !== null
            const label = mood === 'indicative' ? 'Indicativo' : 'Subjuntivo'
            const emoji = mood === 'indicative' ? '📊' : '💭'
            const desc = mood === 'indicative' ? 'Facts & certainty' : 'Wishes, emotions & doubt'
            return (
              <button
                key={mood}
                onClick={() => handleSelect(mood)}
                disabled={!!feedback}
                className={`px-4 py-5 rounded-xl border-2 font-medium transition-all ${
                  show
                    ? isCorrect
                      ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                      : isSelected && !isCorrect
                        ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                        : 'border-gray-200 dark:border-gray-700 opacity-40'
                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:bg-indigo-950/50 cursor-pointer'
                }`}
              >
                <div className="text-2xl mb-1">{emoji}</div>
                <div className="text-lg font-bold">{label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{desc}</div>
              </button>
            )
          })}
        </div>

        {/* Feedback with explanation */}
        {feedback && (
          <div className={`text-sm p-4 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
            <p className="font-bold mb-1">{feedback.correct ? 'Correct!' : 'Not quite!'}</p>
            <p>{feedback.explanation}</p>
          </div>
        )}
      </div>
    </section>
  )
}
