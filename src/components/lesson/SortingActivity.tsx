'use client'

import { useState, useCallback } from 'react'
import { SORT_ACTIVITIES } from '@/lib/lesson-data'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ACTIVITY_IDS = ['sort-vowels', 'sort-similar', 'sort-truefalse'] as const

export default function SortingActivity({ onComplete }: { onComplete?: () => void }) {
  const [activeTab, setActiveTab] = useState<string>('sort-vowels')
  const [placements, setPlacements] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState<Record<number, boolean>>({})
  const [items, setItems] = useState(() => shuffle(SORT_ACTIVITIES['sort-vowels'].items.map((item, i) => ({ ...item, idx: i }))))
  const [dragging, setDragging] = useState<number | null>(null)
  const [selected, setSelected] = useState<number | null>(null)

  const activity = SORT_ACTIVITIES[activeTab]

  const switchTab = useCallback((tabId: string) => {
    setActiveTab(tabId)
    setPlacements({})
    setChecked(false)
    setResults({})
    setSelected(null)
    setItems(shuffle(SORT_ACTIVITIES[tabId].items.map((item, i) => ({ ...item, idx: i }))))
  }, [])

  const placeToBucket = useCallback((itemIdx: number, bucketName: string) => {
    setPlacements((prev) => ({ ...prev, [itemIdx]: bucketName }))
    setSelected(null)
  }, [])

  const removeFromBucket = useCallback((itemIdx: number) => {
    setPlacements((prev) => {
      const next = { ...prev }
      delete next[itemIdx]
      return next
    })
  }, [])

  const checkAnswers = useCallback(() => {
    if (Object.keys(placements).length < items.length) return

    const res: Record<number, boolean> = {}
    let correct = 0
    items.forEach((item) => {
      const isCorrect = placements[item.idx] === item.bucket
      res[item.idx] = isCorrect
      if (isCorrect) correct++
    })
    setResults(res)
    setChecked(true)

    const pct = Math.round((correct / items.length) * 100)
    if (pct >= 80) {
      spawnConfetti(window.innerWidth / 2, 300, 30)
      onComplete?.()
    }
  }, [placements, items, onComplete])

  const unplacedItems = items.filter((item) => !(item.idx in placements))
  const correctCount = Object.values(results).filter(Boolean).length

  return (
    <section id="letter-sorting" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Letter Sorting</h2>
      <p className="text-gray-600 mb-4">Drag items into the correct category, or click to select then click a bucket.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {ACTIVITY_IDS.map((id) => (
          <button
            key={id}
            onClick={() => switchTab(id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              id === activeTab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {SORT_ACTIVITIES[id].title}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">{activity.instruction}</p>

      {/* Unplaced items */}
      {unplacedItems.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 min-h-[60px]">
          {unplacedItems.map((item) => (
            <div
              key={item.idx}
              draggable
              onDragStart={() => setDragging(item.idx)}
              onDragEnd={() => setDragging(null)}
              onClick={() => setSelected(selected === item.idx ? null : item.idx)}
              className={`px-3 py-2 rounded-lg text-sm font-medium cursor-grab active:cursor-grabbing transition-all select-none ${
                selected === item.idx
                  ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                  : 'bg-white border border-gray-200 text-gray-800 hover:border-blue-300'
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}

      {/* Buckets */}
      <div className={`grid gap-4 mb-5 ${activity.buckets.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
        {activity.buckets.map((bucketName) => {
          const bucketItems = items.filter((item) => placements[item.idx] === bucketName)
          return (
            <div
              key={bucketName}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                if (dragging !== null) placeToBucket(dragging, bucketName)
              }}
              onClick={() => {
                if (selected !== null) placeToBucket(selected, bucketName)
              }}
              className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-4 min-h-[120px] hover:border-blue-400 transition-colors"
            >
              <div className="text-sm font-bold text-gray-700 mb-3 pb-2 border-b border-gray-100">{bucketName}</div>
              <div className="flex flex-wrap gap-2">
                {bucketItems.map((item) => (
                  <div
                    key={item.idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!checked) removeFromBucket(item.idx)
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      checked
                        ? results[item.idx]
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-red-100 text-red-700 border border-red-300 cursor-pointer'
                        : 'bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200'
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex gap-3 items-center">
        <button
          onClick={checkAnswers}
          disabled={Object.keys(placements).length < items.length}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          Check Answers
        </button>
        <button
          onClick={() => switchTab(activeTab)}
          className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Reset
        </button>
        {checked && (
          <span className={`text-sm font-semibold ${correctCount === items.length ? 'text-green-600' : 'text-amber-600'}`}>
            {correctCount}/{items.length} correct
          </span>
        )}
      </div>
    </section>
  )
}
