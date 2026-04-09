'use client'

import { useState, useCallback } from 'react'
import { CLAUSE_ARCHITECT_CHALLENGES } from '@/lib/lessons/L6.1'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function ClauseArchitectL61({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [placed, setPlaced] = useState<string[]>([])
  const [remaining, setRemaining] = useState<string[]>([])
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [answers, setAnswers] = useState<{ english: string; correct: boolean; userSentence: string; correctSentence: string }[]>([])

  const challenge = CLAUSE_ARCHITECT_CHALLENGES[round]
  const totalRounds = CLAUSE_ARCHITECT_CHALLENGES.length

  const shuffle = (arr: string[]) => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    setFeedback(null)
    setAnswers([])
    const first = CLAUSE_ARCHITECT_CHALLENGES[0]
    setRemaining(shuffle(first.fragments))
    setPlaced([])
  }, [])

  const handleSelect = useCallback((fragment: string) => {
    if (feedback) return
    setPlaced(prev => [...prev, fragment])
    setRemaining(prev => prev.filter(f => f !== fragment))
  }, [feedback])

  const handleUndo = useCallback(() => {
    if (feedback || placed.length === 0) return
    const last = placed[placed.length - 1]
    setPlaced(prev => prev.slice(0, -1))
    setRemaining(prev => [...prev, last])
  }, [feedback, placed])

  const handleCheck = useCallback(() => {
    if (placed.length !== challenge.fragments.length) return
    const userSentence = placed.join(' ')
    const isCorrect = userSentence === challenge.correctSentence
    if (isCorrect) setScore(s => s + 1)
    setFeedback({ correct: isCorrect })
    setAnswers(prev => [...prev, { english: challenge.english, correct: isCorrect, userSentence, correctSentence: challenge.correctSentence }])

    setTimeout(() => {
      if (round + 1 >= totalRounds) {
        const finalScore = isCorrect ? score + 1 : score
        setPhase('results')
        if (finalScore >= 5) { spawnConfetti(window.innerWidth / 2, 200, 50); onComplete?.() }
      } else {
        const next = CLAUSE_ARCHITECT_CHALLENGES[round + 1]
        setRemaining(shuffle(next.fragments))
        setPlaced([])
        setFeedback(null)
        setRound(r => r + 1)
      }
    }, 3000)
  }, [placed, challenge, round, totalRounds, score, onComplete])

  if (phase === 'start') {
    return (
      <section id="clause-architect">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Clause Architect</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Arrange scrambled fragments into a grammatically correct complex sentence. Think carefully about clause order, relative pronouns, and punctuation!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#127959;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} sentences to build. Click fragments in the correct order.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Look for relative pronouns, conjunctions, and punctuation clues to guide your construction.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl">
            Start Building
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="clause-architect">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Clause Architect</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-cyan-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Masterful sentence architect! Your clause construction is impeccable.' : pct >= 50 ? 'Good structural sense! Keep practicing complex constructions.' : 'Complex sentences take practice \u2014 review the patterns and try again!'}</p>
          <div className="bg-cyan-50 dark:bg-cyan-950 rounded-xl p-4 mb-4 text-left space-y-3">
            <p className="text-xs font-semibold text-cyan-600 uppercase mb-2">Your Results:</p>
            {answers.map((a, i) => (
              <div key={i} className={`text-sm p-3 rounded-lg ${a.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
                <p className="font-medium mb-1 italic text-gray-500 dark:text-gray-400">{a.english}</p>
                {a.correct ? (
                  <p className="text-green-700">{a.correctSentence}</p>
                ) : (
                  <div className="text-xs mt-1 space-y-1">
                    <p className="text-red-600 font-semibold">Your sentence:</p>
                    <p className="pl-2">{a.userSentence}</p>
                    <p className="text-green-700 font-semibold mt-1">Correct sentence:</p>
                    <p className="pl-2">{a.correctSentence}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!challenge) return null

  const userSentence = placed.join(' ')

  return (
    <section id="clause-architect">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Clause Architect</h2>
      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-500 dark:text-gray-400">Sentence {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-cyan-600">Score: {score}</span>
      </div>

      {/* English prompt */}
      <div className="bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 mb-5">
        <p className="text-sm text-cyan-700 font-semibold uppercase mb-1">Build this sentence in Spanish:</p>
        <p className="text-gray-700 dark:text-gray-200 text-lg italic">{challenge.english}</p>
      </div>

      {/* Constructed sentence */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-cyan-600 uppercase mb-2">Your Sentence:</p>
        <div className={`min-h-[80px] p-4 rounded-xl border-2 ${
          feedback
            ? feedback.correct ? 'border-green-400 bg-green-50 dark:bg-green-950' : 'border-red-400 bg-red-50 dark:bg-red-950'
            : 'border-dashed border-cyan-200 bg-white'
        }`}>
          {placed.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">Click fragments below to build your sentence...</p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {placed.map((fragment, i) => (
                <span key={i} className={`inline-block px-3 py-1.5 rounded-lg text-sm font-medium ${
                  feedback
                    ? feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
                    : 'bg-cyan-100 text-cyan-800'
                }`}>
                  {fragment}
                </span>
              ))}
            </div>
          )}
          {feedback && !feedback.correct && (
            <div className="mt-3 pt-3 border-t border-red-200">
              <p className="text-xs font-semibold text-green-700 mb-1">Correct sentence:</p>
              <p className="text-sm text-green-800">{challenge.correctSentence}</p>
            </div>
          )}
        </div>
      </div>

      {/* Available fragments */}
      {remaining.length > 0 && !feedback && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Available Fragments (click to add):</p>
          <div className="flex flex-wrap gap-2">
            {remaining.map((fragment) => (
              <button key={fragment} onClick={() => handleSelect(fragment)}
                className="px-4 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-50 dark:hover:bg-cyan-950/50 text-sm font-medium transition-all cursor-pointer bg-white shadow-sm hover:shadow">
                {fragment}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      {!feedback && (
        <div className="flex gap-3 mt-4">
          <button onClick={handleUndo} disabled={placed.length === 0}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed">
            Undo
          </button>
          <button onClick={handleCheck} disabled={remaining.length > 0}
            className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-bold hover:bg-cyan-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            Check Sentence
          </button>
        </div>
      )}

      {feedback && (
        <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {feedback.correct ? 'Perfect construction! Every clause in its right place.' : 'Not quite \u2014 compare your sentence with the correct one above.'}
        </div>
      )}
    </section>
  )
}
