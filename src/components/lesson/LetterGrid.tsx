'use client'

import { useCallback, useState } from 'react'
import { useAudio } from '@/hooks/useAudio'
import { VOWELS, CONSONANTS, type LetterData } from '@/lib/lesson-data'

function LetterCard({ item }: { item: LetterData }) {
  const { playLetter } = useAudio()
  const [active, setActive] = useState(false)

  const handleClick = useCallback(() => {
    playLetter(item.audio)
    setActive(true)
    setTimeout(() => setActive(false), 800)
  }, [playLetter, item.audio])

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center p-5 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 ${
        active
          ? 'border-amber-400 bg-amber-50 shadow-lg scale-105'
          : item.vowel
            ? 'border-blue-100 bg-blue-50/50 hover:border-blue-300'
            : 'border-purple-100 bg-purple-50/50 hover:border-purple-300'
      }`}
      aria-label={`${item.letter}, ${item.name}. ${item.hint}`}
    >
      <span className={`text-4xl font-extrabold ${item.vowel ? 'text-blue-700' : 'text-purple-700'}`}>{item.letter}</span>
      <span className={`text-sm font-semibold mt-2 ${item.vowel ? 'text-blue-500' : 'text-purple-500'}`}>{item.name}</span>
      <span className="text-xs text-gray-400 mt-1">{item.hint}</span>
      <svg className="mt-2 text-gray-300" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
      </svg>
    </button>
  )
}

export default function LetterGrid() {
  return (
    <>
      <section id="vowels" className="mb-6">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Spanish Vowels</h2>
        <p className="text-gray-600 mb-5">Click any letter to hear its pronunciation. Spanish vowels are simple — each one always makes the same sound.</p>
        <div className="grid grid-cols-5 gap-4">
          {VOWELS.map((v) => (
            <LetterCard key={v.letter} item={v} />
          ))}
        </div>
      </section>

      <section id="consonants">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Standard Consonants</h2>
        <p className="text-gray-600 mb-5">Most Spanish consonants are similar to English. Click to hear each one.</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {CONSONANTS.map((c) => (
            <LetterCard key={c.letter} item={c} />
          ))}
        </div>
      </section>
    </>
  )
}
