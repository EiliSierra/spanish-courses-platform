'use client'

import { useState, useCallback, useEffect } from 'react'
import { CONVERSATION_BUILDER_ROUNDS } from '@/lib/lessons/L1.2'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ConversationBuilderL12({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [available, setAvailable] = useState<string[]>([])
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)

  const currentRound = CONVERSATION_BUILDER_ROUNDS[round]
  const totalRounds = CONVERSATION_BUILDER_ROUNDS.length

  // Shuffle lines when round changes
  useEffect(() => {
    if (phase === 'game' && currentRound) {
      setAvailable(shuffle(currentRound.correctOrder))
      setSelected([])
      setFeedback(null)
    }
  }, [phase, round, currentRound])

  const handleSelectLine = useCallback((line: string) => {
    if (feedback) return
    setSelected(prev => [...prev, line])
    setAvailable(prev => {
      const idx = prev.indexOf(line)
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
  }, [feedback])

  const handleUndoLast = useCallback(() => {
    if (feedback || selected.length === 0) return
    const last = selected[selected.length - 1]
    setSelected(prev => prev.slice(0, -1))
    setAvailable(prev => [...prev, last])
  }, [feedback, selected])

  const handleCheck = useCallback(() => {
    const isCorrect = selected.every((line, i) => line === currentRound.correctOrder[i])
    setFeedback({ correct: isCorrect })

    if (isCorrect) {
      setScore(s => s + 1)
      spawnConfetti(window.innerWidth / 2, 200, 30)
    }

    setTimeout(() => {
      if (round + 1 >= totalRounds) {
        setPhase('results')
        if (isCorrect || score + (isCorrect ? 1 : 0) >= 2) {
          onComplete?.()
        }
      } else {
        setRound(r => r + 1)
      }
    }, 2000)
  }, [selected, currentRound, round, totalRounds, score, onComplete])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    setSelected([])
    setFeedback(null)
  }, [])

  if (phase === 'start') {
    return (
      <section id="conversation-builder">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Conversation Builder</h2>
        <p className="text-gray-600 mb-4">Put the scrambled conversation lines in the correct order. Think about what makes sense as a natural dialogue!</p>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-4">&#128172;</div>
          <p className="text-gray-600 mb-6">{totalRounds} conversations to build. Drag or click lines in the right order.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl">
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
      <section id="conversation-builder">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Conversation Builder</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-2">{Array(stars).fill(null).map((_, i) => <span key={i}>&#11088;</span>)}{Array(3 - stars).fill(null).map((_, i) => <span key={i}>&#9734;</span>)}</div>
          <div className="text-4xl font-bold text-emerald-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-600 mb-4">
            {pct >= 80 ? 'Excellent conversation skills!' : pct >= 50 ? 'Good work! Practice makes perfect.' : 'Keep practicing the conversation flow!'}
          </p>
          <button onClick={startGame} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700">Try Again</button>
        </div>
      </section>
    )
  }

  const allPlaced = available.length === 0

  return (
    <section id="conversation-builder">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Conversation Builder</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500">Conversation {round + 1} of {totalRounds}: {currentRound.title}</span>
        <span className="font-semibold text-emerald-600">Score: {score}</span>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Built conversation so far */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Your conversation:</p>
          <div className="min-h-[120px] bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-200 space-y-2">
            {selected.length === 0 && (
              <p className="text-gray-400 text-sm text-center py-4">Click lines below to build the conversation...</p>
            )}
            {selected.map((line, i) => {
              const isCorrectPos = feedback && line === currentRound.correctOrder[i]
              const isWrongPos = feedback && line !== currentRound.correctOrder[i]
              return (
                <div key={`${line}-${i}`} className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isCorrectPos ? 'bg-green-100 text-green-800 border border-green-300'
                  : isWrongPos ? 'bg-red-100 text-red-800 border border-red-300'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}>
                  <span className="text-emerald-400 mr-2">{i + 1}.</span>
                  {line}
                </div>
              )
            })}
          </div>
          {!feedback && selected.length > 0 && (
            <button onClick={handleUndoLast} className="mt-2 text-sm text-gray-500 hover:text-gray-700 font-medium">
              &#8592; Undo last
            </button>
          )}
        </div>

        {/* Available lines to choose from */}
        {!feedback && (
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Available lines:</p>
            <div className="space-y-2">
              {available.map((line, i) => (
                <button key={`${line}-${i}`} onClick={() => handleSelectLine(line)}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium bg-white border-2 border-gray-200 text-gray-800 hover:border-emerald-400 hover:bg-emerald-50 cursor-pointer transition-all">
                  {line}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Check button */}
        {allPlaced && !feedback && (
          <button onClick={handleCheck}
            className="mt-4 w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-base hover:bg-emerald-700 transition-colors">
            Check Order
          </button>
        )}

        {/* Feedback */}
        {feedback && (
          <div className={`mt-4 text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {feedback.correct ? 'Perfect conversation flow!' : 'Not quite — check the highlighted lines. The correct order is shown.'}
          </div>
        )}
      </div>
    </section>
  )
}
