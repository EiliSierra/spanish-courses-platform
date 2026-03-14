'use client'

import { useCallback, useState } from 'react'
import { GREETINGS, FAREWELLS, POLITE, INTRODUCTIONS, QUESTIONS, type PhraseData } from '@/lib/lesson-data-L12'

function PhraseCard({ item, color }: { item: PhraseData; color: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose' }) {
  const [active, setActive] = useState(false)

  const colorMap = {
    emerald: { bg: 'bg-emerald-50/50', border: 'border-emerald-100', activeBorder: 'border-emerald-400', text: 'text-emerald-700', sub: 'text-emerald-500' },
    blue: { bg: 'bg-blue-50/50', border: 'border-blue-100', activeBorder: 'border-blue-400', text: 'text-blue-700', sub: 'text-blue-500' },
    purple: { bg: 'bg-purple-50/50', border: 'border-purple-100', activeBorder: 'border-purple-400', text: 'text-purple-700', sub: 'text-purple-500' },
    amber: { bg: 'bg-amber-50/50', border: 'border-amber-100', activeBorder: 'border-amber-400', text: 'text-amber-700', sub: 'text-amber-500' },
    rose: { bg: 'bg-rose-50/50', border: 'border-rose-100', activeBorder: 'border-rose-400', text: 'text-rose-700', sub: 'text-rose-500' },
  }

  const c = colorMap[color]

  const handleClick = useCallback(() => {
    const audio = new Audio(`/audio/L1.2/phrases/${item.audio}.mp3`)
    audio.play().catch(() => {})
    setActive(true)
    setTimeout(() => setActive(false), 800)
  }, [item.audio])

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center p-5 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 ${
        active ? `${c.activeBorder} bg-amber-50 shadow-lg scale-105` : `${c.border} ${c.bg} hover:${c.border}`
      }`}
    >
      <span className={`text-lg font-extrabold ${c.text}`}>{item.spanish}</span>
      <span className={`text-sm font-semibold mt-1 ${c.sub}`}>{item.english}</span>
      <span className="text-xs text-gray-400 mt-1 italic">{item.pronunciation}</span>
      <svg className="mt-2 text-gray-300" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
      </svg>
    </button>
  )
}

export default function PhraseGrid() {
  return (
    <>
      <section id="greetings" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Spanish Greetings</h2>
        <p className="text-gray-600 mb-5">Click any phrase to hear it. Spanish greetings change based on the time of day.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {GREETINGS.map((p) => <PhraseCard key={p.audio} item={p} color="emerald" />)}
        </div>
      </section>

      <section id="farewells" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Farewells</h2>
        <p className="text-gray-600 mb-5">Spanish has many ways to say goodbye — from formal to casual.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {FAREWELLS.map((p) => <PhraseCard key={p.audio} item={p} color="blue" />)}
        </div>
      </section>

      <section id="polite-expressions" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Polite Expressions</h2>
        <p className="text-gray-600 mb-5">Politeness is key in Spanish culture. Master these essential phrases.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {POLITE.map((p) => <PhraseCard key={p.audio} item={p} color="purple" />)}
        </div>
      </section>

      <section id="introductions" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Introducing Yourself</h2>
        <p className="text-gray-600 mb-5">Learn to share your name, ask others, and make a great first impression.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {INTRODUCTIONS.map((p) => <PhraseCard key={p.audio} item={p} color="amber" />)}
        </div>
      </section>

      <section id="essential-questions">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Essential Questions</h2>
        <p className="text-gray-600 mb-5">Survival phrases for when you need help or don&apos;t understand.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {QUESTIONS.map((p) => <PhraseCard key={p.audio} item={p} color="rose" />)}
        </div>
      </section>
    </>
  )
}
