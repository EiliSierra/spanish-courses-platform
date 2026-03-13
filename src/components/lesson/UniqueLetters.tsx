'use client'

import { useAudio } from '@/hooks/useAudio'

const UNIQUE = [
  {
    letter: 'Ñ',
    name: 'eñe',
    audio: 'ñ',
    desc: 'Like "ny" in "canyon." The tilde (~) creates a completely different letter with a unique sound.',
    examples: 'niño (child), año (year), España (Spain)',
  },
  {
    letter: 'LL',
    name: 'elle',
    audio: 'l',
    desc: 'Pronounced like "y" in "yes" in most countries. In Argentina, it sounds like "sh."',
    examples: 'lluvia (rain), calle (street), pollo (chicken)',
  },
  {
    letter: 'RR',
    name: 'doble erre',
    audio: 'r',
    desc: 'A full rolled/trilled R. Compare: pero (but) vs. perro (dog) — the difference changes the meaning!',
    examples: 'perro (dog), carro (car), arroz (rice)',
  },
]

export default function UniqueLetters() {
  const { playLetter } = useAudio()

  return (
    <section id="unique-letters" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Unique Spanish Letters</h2>
      <p className="text-gray-600 mb-5">These letters or combinations don&apos;t exist in English.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {UNIQUE.map((u) => (
          <button
            key={u.letter}
            onClick={() => playLetter(u.audio)}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 text-left hover:shadow-md transition-all cursor-pointer"
          >
            <div className="text-4xl font-bold text-purple-700 mb-1">{u.letter}</div>
            <div className="text-sm font-semibold text-purple-600 mb-2">{u.name}</div>
            <p className="text-sm text-gray-700 mb-2">{u.desc}</p>
            <p className="text-xs text-gray-500 italic">{u.examples}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
