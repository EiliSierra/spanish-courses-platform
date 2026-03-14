'use client'

import { useCallback, useState } from 'react'
import { NUMBERS_0_20, NUMBERS_21_100, TIME_PHRASES, AGE_PHRASES, PHONE_DATE_PHRASES, type PhraseData } from '@/lib/lesson-data-L13'

function PhraseCard({ item, color }: { item: PhraseData; color: 'orange' | 'amber' | 'blue' | 'rose' | 'purple' }) {
  const [active, setActive] = useState(false)

  const colorMap = {
    orange: { bg: 'bg-orange-50/50', border: 'border-orange-100', activeBorder: 'border-orange-400', text: 'text-orange-700', sub: 'text-orange-500' },
    amber: { bg: 'bg-amber-50/50', border: 'border-amber-100', activeBorder: 'border-amber-400', text: 'text-amber-700', sub: 'text-amber-500' },
    blue: { bg: 'bg-blue-50/50', border: 'border-blue-100', activeBorder: 'border-blue-400', text: 'text-blue-700', sub: 'text-blue-500' },
    rose: { bg: 'bg-rose-50/50', border: 'border-rose-100', activeBorder: 'border-rose-400', text: 'text-rose-700', sub: 'text-rose-500' },
    purple: { bg: 'bg-purple-50/50', border: 'border-purple-100', activeBorder: 'border-purple-400', text: 'text-purple-700', sub: 'text-purple-500' },
  }

  const c = colorMap[color]

  const handleClick = useCallback(() => {
    const audio = new Audio(`/audio/L1.3/phrases/${item.audio}.mp3`)
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
      <section id="numbers-0-20" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Numbers 0–20</h2>
        <p className="text-gray-600 mb-5">Click any number to hear it. These are the building blocks — learn them by heart!</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {NUMBERS_0_20.map((p) => <PhraseCard key={p.audio} item={p} color="orange" />)}
        </div>
      </section>

      <section id="numbers-21-100" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Numbers 21–100</h2>
        <p className="text-gray-600 mb-5">Numbers 21–29 are single words. From 30 onward, use &ldquo;y&rdquo; to combine tens and ones.</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {NUMBERS_21_100.map((p) => <PhraseCard key={p.audio} item={p} color="amber" />)}
        </div>
      </section>

      <section id="telling-time" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Telling Time</h2>
        <p className="text-gray-600 mb-5">Spanish uses &ldquo;Es la&rdquo; for 1:00 and &ldquo;Son las&rdquo; for all other hours.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {TIME_PHRASES.map((p) => <PhraseCard key={p.audio} item={p} color="blue" />)}
        </div>
      </section>

      <section id="age-calendar">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Age, Days &amp; Months</h2>
        <p className="text-gray-600 mb-5">In Spanish, you &ldquo;have&rdquo; years — &ldquo;Tengo veinte años&rdquo; (I have twenty years).</p>

        <h3 className="text-lg font-semibold mb-3 text-rose-700">Age Expressions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {AGE_PHRASES.map((p) => <PhraseCard key={p.audio} item={p} color="rose" />)}
        </div>

        <h3 className="text-lg font-semibold mb-3 text-purple-700">Phone, Days &amp; Months</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PHONE_DATE_PHRASES.map((p) => <PhraseCard key={p.audio} item={p} color="purple" />)}
        </div>
      </section>
    </>
  )
}
