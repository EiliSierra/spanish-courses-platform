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
      className={`flex flex-col items-center p-4 rounded-xl border transition-all cursor-pointer ${
        active
          ? 'border-blue-400 bg-blue-50 shadow-md scale-105'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
      }`}
      aria-label={`${item.letter}, ${item.name}. ${item.hint}`}
    >
      <span className="text-3xl font-bold text-gray-900">{item.letter}</span>
      <span className="text-sm text-blue-600 font-medium mt-1">{item.name}</span>
      <span className="text-xs text-gray-500 mt-0.5">{item.hint}</span>
    </button>
  )
}

export default function LetterGrid() {
  return (
    <>
      <section id="vowels" className="mb-10">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Spanish Vowels</h2>
        <p className="text-gray-600 mb-5">Click any letter to hear its pronunciation. Spanish vowels are simple — each one always makes the same sound.</p>
        <div className="grid grid-cols-5 gap-3">
          {VOWELS.map((v) => (
            <LetterCard key={v.letter} item={v} />
          ))}
        </div>
      </section>

      <section id="consonants" className="mb-10">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Standard Consonants</h2>
        <p className="text-gray-600 mb-5">Most Spanish consonants are similar to English. Click to hear each one.</p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {CONSONANTS.map((c) => (
            <LetterCard key={c.letter} item={c} />
          ))}
        </div>
      </section>
    </>
  )
}
