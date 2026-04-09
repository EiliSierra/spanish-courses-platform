'use client'

import { useState } from 'react'

const DEMO_CARDS = [
  { front: 'Hello', back: 'Hola', phonetic: '/OH-lah/' },
  { front: 'Thank you', back: 'Gracias', phonetic: '/GRAH-see-ahs/' },
  { front: 'Good morning', back: 'Buenos dias', phonetic: '/BWEH-nohs DEE-ahs/' },
  { front: 'How are you?', back: '¿Como estas?', phonetic: '/KOH-moh ehs-TAHS/' },
  { front: 'Please', back: 'Por favor', phonetic: '/por fah-VOR/' },
]

export function FlashcardDemo() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const card = DEMO_CARDS[currentCard]

  function nextCard() {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % DEMO_CARDS.length)
    }, 150)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-gray-500 font-medium">Click the card to flip it</p>

      {/* Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-72 h-44 cursor-pointer select-none"
        style={{ perspective: '800px' }}
      >
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-white rounded-2xl border-2 border-blue-200 shadow-lg flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">English</span>
            <span className="text-3xl font-extrabold font-[family-name:var(--font-inter)] text-gray-900">
              {card.front}
            </span>
            <span className="mt-3 text-xs text-gray-400">Tap to reveal</span>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Espanol</span>
            <span className="text-3xl font-extrabold font-[family-name:var(--font-inter)] text-white">
              {card.back}
            </span>
            <span className="mt-2 text-sm text-blue-200">{card.phonetic}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          {DEMO_CARDS.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentCard ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextCard}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          Next card
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}
