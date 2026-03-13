'use client'

import { useState, useCallback, useRef } from 'react'
import { MATCH_PAIRS } from '@/lib/lesson-data'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function MatchingGame({ onComplete }: { onComplete?: () => void }) {
  const [score, setScore] = useState(0)
  const [matched, setMatched] = useState<Set<string>>(new Set())
  const [wrongZone, setWrongZone] = useState<string | null>(null)
  const [dragging, setDragging] = useState<string | null>(null)
  const [shuffledNames] = useState(() => shuffle(MATCH_PAIRS))
  const [shuffledLetters] = useState(() => shuffle(MATCH_PAIRS))
  const scoreRef = useRef(0)

  const handleDrop = useCallback(
    (name: string, targetLetter: string) => {
      const pair = MATCH_PAIRS.find((p) => p.name === name)
      if (!pair || matched.has(name)) return

      if (pair.letter === targetLetter) {
        setMatched((prev) => new Set([...prev, name]))
        const newScore = scoreRef.current + 1
        scoreRef.current = newScore
        setScore(newScore)
        // Confetti on the drop zone
        const zone = document.querySelector(`[data-drop-letter="${targetLetter}"]`)
        if (zone) {
          const rect = zone.getBoundingClientRect()
          spawnConfetti(rect.left + rect.width / 2, rect.top, 15)
        }
        if (newScore === 10) onComplete?.()
      } else {
        setWrongZone(targetLetter)
        setTimeout(() => setWrongZone(null), 500)
      }
      setDragging(null)
    },
    [matched, onComplete],
  )

  const reset = useCallback(() => {
    setScore(0)
    scoreRef.current = 0
    setMatched(new Set())
  }, [])

  return (
    <section id="matching-game" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Matching Game</h2>
      <p className="text-gray-600 mb-2">Drag each letter name to its matching letter. <strong>Score: {score}/10</strong></p>

      <div className="grid md:grid-cols-2 gap-6 mb-4">
        {/* Drag column - names */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-500 mb-2">Letter Names</div>
          {shuffledNames.map((pair) => (
            <div
              key={pair.name}
              draggable={!matched.has(pair.name)}
              onDragStart={() => setDragging(pair.name)}
              onDragEnd={() => setDragging(null)}
              className={`px-4 py-3 rounded-lg font-medium text-center transition-all select-none ${
                matched.has(pair.name)
                  ? 'bg-green-100 text-green-700 opacity-50 cursor-default'
                  : 'bg-white border-2 border-blue-200 text-blue-800 cursor-grab hover:border-blue-400 hover:shadow-sm active:cursor-grabbing'
              }`}
            >
              {pair.name}
            </div>
          ))}
        </div>

        {/* Drop column - letters */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-500 mb-2">Letters</div>
          {shuffledLetters.map((pair) => {
            const isMatched = matched.has(MATCH_PAIRS.find((p) => p.letter === pair.letter)?.name ?? '')
            const isWrong = wrongZone === pair.letter

            return (
              <div
                key={pair.letter}
                data-drop-letter={pair.letter}
                onDragOver={(e) => { if (!isMatched) e.preventDefault() }}
                onDrop={(e) => {
                  e.preventDefault()
                  if (dragging) handleDrop(dragging, pair.letter)
                }}
                className={`px-4 py-3 rounded-lg font-bold text-center text-xl transition-all ${
                  isMatched
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : isWrong
                      ? 'bg-red-50 border-2 border-red-400 animate-[shake_0.3s]'
                      : 'bg-gray-50 border-2 border-dashed border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                }`}
              >
                {pair.letter}
                {isMatched && (
                  <span className="text-sm font-normal ml-2 text-green-600">
                    ✓ {MATCH_PAIRS.find((p) => p.letter === pair.letter)?.name}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <button
        onClick={reset}
        className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors"
      >
        Reset Game
      </button>
    </section>
  )
}
