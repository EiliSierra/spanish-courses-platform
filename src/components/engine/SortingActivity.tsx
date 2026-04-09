'use client'

import { useState, useCallback } from 'react'
import type { SortActivity } from '@/lib/types/lesson'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface SortingActivityProps {
  activities: SortActivity[]
  sectionId: string
  title: string
  onComplete?: () => void
}

export default function SortingActivity({ activities, sectionId, title, onComplete }: SortingActivityProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [placements, setPlacements] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState<Record<number, boolean>>({})
  const [items, setItems] = useState(() => shuffle(activities[0].items.map((item, i) => ({ ...item, idx: i }))))
  const [selected, setSelected] = useState<number | null>(null)
  const [dragging, setDragging] = useState<number | null>(null)

  const activity = activities[activeTab]

  const switchTab = useCallback((tabIdx: number) => {
    setActiveTab(tabIdx)
    setPlacements({})
    setChecked(false)
    setResults({})
    setSelected(null)
    setItems(shuffle(activities[tabIdx].items.map((item, i) => ({ ...item, idx: i }))))
  }, [activities])

  const placeToBucket = useCallback((itemIdx: number, bucketName: string) => {
    setPlacements((prev) => ({ ...prev, [itemIdx]: bucketName }))
    setSelected(null)
  }, [])

  const removeFromBucket = useCallback((itemIdx: number) => {
    setPlacements((prev) => { const next = { ...prev }; delete next[itemIdx]; return next })
  }, [])

  const checkAnswers = useCallback(() => {
    if (Object.keys(placements).length < items.length) return
    const res: Record<number, boolean> = {}
    let correct = 0
    items.forEach((item) => { const ok = placements[item.idx] === item.bucket; res[item.idx] = ok; if (ok) correct++ })
    setResults(res)
    setChecked(true)
    if (Math.round((correct / items.length) * 100) >= 80) {
      spawnConfetti(window.innerWidth / 2, 300, 30)
      onComplete?.()
    }
  }, [placements, items, onComplete])

  const unplacedItems = items.filter((item) => !(item.idx in placements))
  const correctCount = Object.values(results).filter(Boolean).length

  return (
    <section id={sectionId}>
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">Drag items into the correct category, or click to select then click a bucket.</p>

      <div className="flex gap-2 mb-5 flex-wrap">
        {activities.map((act, i) => (
          <button key={act.title} onClick={() => switchTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i === activeTab ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200'}`}>
            {act.title}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">{activity.instruction}</p>

      {unplacedItems.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 min-h-[60px]">
          {unplacedItems.map((item) => (
            <div key={item.idx} draggable onDragStart={() => setDragging(item.idx)} onDragEnd={() => setDragging(null)}
              onClick={() => setSelected(selected === item.idx ? null : item.idx)}
              className={`px-3 py-2 rounded-lg text-sm font-medium cursor-grab active:cursor-grabbing transition-all select-none ${
                selected === item.idx ? 'bg-blue-600 text-white ring-2 ring-blue-400' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-300'
              }`}>
              {item.text}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-5">
        {activity.buckets.map((bucketName) => {
          const bucketItems = items.filter((item) => placements[item.idx] === bucketName)
          return (
            <div key={bucketName} onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); if (dragging !== null) placeToBucket(dragging, bucketName) }}
              onClick={() => { if (selected !== null) placeToBucket(selected, bucketName) }}
              className="bg-white dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 min-h-[120px] hover:border-blue-400 transition-colors">
              <div className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-3 pb-2 border-b border-gray-100">{bucketName}</div>
              <div className="flex flex-wrap gap-2">
                {bucketItems.map((item) => (
                  <div key={item.idx} onClick={(e) => { e.stopPropagation(); if (!checked) removeFromBucket(item.idx) }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      checked ? results[item.idx] ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 cursor-pointer hover:bg-blue-200'
                    }`}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex gap-3 items-center">
        <button onClick={checkAnswers} disabled={Object.keys(placements).length < items.length}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors">Check Answers</button>
        <button onClick={() => switchTab(activeTab)} className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 transition-colors">Reset</button>
        {checked && <span className={`text-sm font-semibold ${correctCount === items.length ? 'text-green-600' : 'text-amber-600'}`}>{correctCount}/{items.length} correct</span>}
      </div>
    </section>
  )
}
