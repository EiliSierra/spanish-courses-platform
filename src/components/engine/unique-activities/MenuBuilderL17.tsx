'use client'

import { useState, useCallback } from 'react'
import { MENU_ITEMS, MENU_BUILDER_ROUNDS } from '@/lib/lessons/L1.7'
import { spawnConfetti } from '@/components/ui/Confetti'

type CourseKey = 'entrada' | 'platoFuerte' | 'postre'
type Selection = Partial<Record<CourseKey, string>>

export default function MenuBuilderL17({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selection, setSelection] = useState<Selection>({})
  const [feedback, setFeedback] = useState<{ correct: boolean; details: Record<string, boolean> } | null>(null)

  const currentRound = MENU_BUILDER_ROUNDS[round]
  const totalRounds = MENU_BUILDER_ROUNDS.length

  const checkOrder = useCallback(() => {
    if (!currentRound) return
    const reqs = currentRound.requirements
    const details: Record<string, boolean> = {}
    let allCorrect = true

    for (const [course, tags] of Object.entries(reqs)) {
      const key = course as CourseKey
      const sel = selection[key]
      if (!sel) { details[course] = false; allCorrect = false; continue }

      const menuSource = key === 'entrada' ? MENU_ITEMS.entradas
        : key === 'platoFuerte' ? MENU_ITEMS.platosFuertes
        : MENU_ITEMS.postres

      const item = menuSource.find(i => i.name === sel)
      const hasAllTags = item ? (tags as string[]).every(t => item.tags.includes(t)) : false
      details[course] = hasAllTags
      if (!hasAllTags) allCorrect = false
    }

    setFeedback({ correct: allCorrect, details })
    if (allCorrect) {
      setScore(s => s + 1)
      spawnConfetti(window.innerWidth / 2, 200, 25)
    }

    setTimeout(() => {
      if (round + 1 < totalRounds) {
        setRound(r => r + 1)
        setSelection({})
        setFeedback(null)
      } else {
        setPhase('results')
        if (allCorrect ? score + 1 >= totalRounds * 0.5 : score >= totalRounds * 0.5) {
          onComplete?.()
        }
      }
    }, 2200)
  }, [currentRound, selection, round, totalRounds, score, onComplete])

  if (phase === 'start') {
    return (
      <div id="menu-builder" className="text-center py-8">
        <h2 className="text-2xl font-bold mb-3">Menu Builder</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          Read a dining scenario and build the perfect order! Pick the right dishes from each course based on the requirements.
        </p>
        <button
          onClick={() => setPhase('game')}
          className="px-8 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-lg"
        >
          Start Challenge
        </button>
      </div>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const passed = pct >= 50
    return (
      <div id="menu-builder" className="text-center py-8">
        <div className="text-5xl mb-4">{passed ? '🎉' : '💪'}</div>
        <h2 className="text-2xl font-bold mb-2">{passed ? '¡Buen provecho!' : 'Keep Practicing!'}</h2>
        <p className="text-lg text-gray-700 mb-2">
          You built <strong>{score}</strong> of <strong>{totalRounds}</strong> orders correctly ({pct}%)
        </p>
        <button
          onClick={() => { setPhase('start'); setRound(0); setScore(0); setSelection({}); setFeedback(null) }}
          className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
        >
          Play Again
        </button>
      </div>
    )
  }

  const reqKeys = Object.keys(currentRound.requirements) as CourseKey[]

  return (
    <div id="menu-builder" className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Menu Builder</h2>
        <span className="text-sm text-gray-400 font-medium">{round + 1} / {totalRounds} — Score: {score}</span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="h-2 bg-orange-500 rounded-full transition-all duration-500" style={{ width: `${(round / totalRounds) * 100}%` }} />
      </div>

      <div className="bg-orange-950 border border-orange-800 rounded-xl p-5 mb-6">
        <p className="text-sm text-orange-600 font-semibold mb-1">Your dining scenario:</p>
        <p className="text-lg font-medium text-gray-200">{currentRound.scenario}</p>
      </div>

      {/* Courses */}
      {reqKeys.includes('entrada') && (
        <CourseSection
          title="La Entrada (Appetizer)"
          items={MENU_ITEMS.entradas}
          selected={selection.entrada}
          onSelect={(name) => setSelection(s => ({ ...s, entrada: name }))}
          feedback={feedback?.details.entrada}
          disabled={!!feedback}
        />
      )}
      {reqKeys.includes('platoFuerte') && (
        <CourseSection
          title="El Plato Fuerte (Main Course)"
          items={MENU_ITEMS.platosFuertes}
          selected={selection.platoFuerte}
          onSelect={(name) => setSelection(s => ({ ...s, platoFuerte: name }))}
          feedback={feedback?.details.platoFuerte}
          disabled={!!feedback}
        />
      )}
      {reqKeys.includes('postre') && (
        <CourseSection
          title="El Postre (Dessert)"
          items={MENU_ITEMS.postres}
          selected={selection.postre}
          onSelect={(name) => setSelection(s => ({ ...s, postre: name }))}
          feedback={feedback?.details.postre}
          disabled={!!feedback}
        />
      )}

      {!feedback && (
        <button
          onClick={checkOrder}
          disabled={reqKeys.some(k => !selection[k])}
          className="mt-4 w-full py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit Order
        </button>
      )}
    </div>
  )
}

function CourseSection({ title, items, selected, onSelect, feedback, disabled }: {
  title: string
  items: { name: string; emoji: string; tags: string[] }[]
  selected?: string
  onSelect: (name: string) => void
  feedback?: boolean
  disabled: boolean
}) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
        {title}
        {feedback === true && <span className="text-green-600">✓</span>}
        {feedback === false && <span className="text-red-500">✗</span>}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => {
          const isSelected = selected === item.name
          let cls = 'border rounded-lg p-3 text-center cursor-pointer transition-all text-sm '
          if (feedback !== undefined) {
            if (isSelected && feedback) cls += 'border-green-500 bg-green-950'
            else if (isSelected && !feedback) cls += 'border-red-400 bg-red-950'
            else cls += 'border-gray-700 bg-gray-50 opacity-50'
          } else if (isSelected) {
            cls += 'border-orange-500 bg-orange-950 ring-2 ring-orange-300'
          } else {
            cls += 'border-gray-700 bg-white hover:border-orange-300'
          }

          return (
            <button key={item.name} onClick={() => !disabled && onSelect(item.name)} disabled={disabled} className={cls}>
              <span className="text-xl">{item.emoji}</span>
              <p className="font-medium mt-1">{item.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{item.tags.join(', ')}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
