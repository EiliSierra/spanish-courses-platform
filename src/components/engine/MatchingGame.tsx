'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import type { MatchPair } from '@/lib/types/lesson'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface MatchingGameProps {
  pairs: MatchPair[]
  labels: { left: string; right: string }
  onComplete?: () => void
}

export default function MatchingGame({ pairs, labels, onComplete }: MatchingGameProps) {
  const total = pairs.length
  const [score, setScore] = useState(0)
  const [matched, setMatched] = useState<Set<string>>(new Set())
  const [wrongZone, setWrongZone] = useState<string | null>(null)
  const [dragging, setDragging] = useState<string | null>(null)
  // Shuffle only on client to avoid hydration mismatch
  const [shuffledLeft, setShuffledLeft] = useState(pairs)
  const [shuffledRight, setShuffledRight] = useState(pairs)
  const scoreRef = useRef(0)

  useEffect(() => {
    setShuffledLeft(shuffle(pairs))
    setShuffledRight(shuffle(pairs))
  }, [pairs])

  const handleDrop = useCallback(
    (leftText: string, targetRight: string) => {
      const pair = pairs.find((p) => p.left === leftText)
      if (!pair || matched.has(leftText)) return

      if (pair.right === targetRight) {
        setMatched((prev) => new Set([...prev, leftText]))
        const newScore = scoreRef.current + 1
        scoreRef.current = newScore
        setScore(newScore)
        const zone = document.querySelector(`[data-drop-right="${targetRight}"]`)
        if (zone) {
          const rect = zone.getBoundingClientRect()
          spawnConfetti(rect.left + rect.width / 2, rect.top, 15)
        }
        if (newScore === total) onComplete?.()
      } else {
        setWrongZone(targetRight)
        setTimeout(() => setWrongZone(null), 500)
      }
      setDragging(null)
    },
    [matched, onComplete, total, pairs],
  )

  const reset = useCallback(() => {
    setScore(0)
    scoreRef.current = 0
    setMatched(new Set())
  }, [])

  return (
    <section id="matching-game">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Matching Game</h2>
      <p className="text-gray-600 mb-2">Drag each item to its match. <strong>Score: {score}/{total}</strong></p>

      <div className="grid md:grid-cols-2 gap-6 mb-4">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-500 mb-2">{labels.left}</div>
          {shuffledLeft.map((pair) => (
            <div
              key={pair.left}
              draggable={!matched.has(pair.left)}
              onDragStart={() => setDragging(pair.left)}
              onDragEnd={() => setDragging(null)}
              className={`px-4 py-3 rounded-lg font-medium text-center transition-all select-none ${
                matched.has(pair.left)
                  ? 'bg-green-100 text-green-700 opacity-50 cursor-default'
                  : 'bg-white border-2 border-orange-200 text-orange-800 cursor-grab hover:border-orange-400 hover:shadow-sm active:cursor-grabbing'
              }`}
            >
              {pair.left}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-500 mb-2">{labels.right}</div>
          {shuffledRight.map((pair) => {
            const isMatched = matched.has(pairs.find((p) => p.right === pair.right)?.left ?? '')
            const isWrong = wrongZone === pair.right

            return (
              <div
                key={pair.right}
                data-drop-right={pair.right}
                onDragOver={(e) => { if (!isMatched) e.preventDefault() }}
                onDrop={(e) => {
                  e.preventDefault()
                  if (dragging) handleDrop(dragging, pair.right)
                }}
                className={`px-4 py-3 rounded-lg font-medium text-center transition-all ${
                  isMatched
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : isWrong
                      ? 'bg-red-50 border-2 border-red-400 animate-[shake_0.3s]'
                      : 'bg-gray-50 border-2 border-dashed border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                }`}
              >
                {pair.right}
                {isMatched && (
                  <span className="text-sm font-normal ml-2 text-green-600">
                    &#10003; {pairs.find((p) => p.right === pair.right)?.left}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <button onClick={reset} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors">
        Reset Game
      </button>
    </section>
  )
}
