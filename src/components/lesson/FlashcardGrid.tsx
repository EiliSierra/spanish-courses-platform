'use client'

import { useState, useCallback } from 'react'
import { useAudio } from '@/hooks/useAudio'
import { ALPHABET } from '@/lib/lesson-data'

export default function FlashcardGrid() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set())
  const { playLetter } = useAudio()

  const toggleFlip = useCallback((idx: number) => {
    setFlipped((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }, [])

  return (
    <section id="pronunciation-board" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Flashcards</h2>
      <p className="text-gray-600 mb-5">Click a card to flip it and reveal details. Use the speaker button to hear the pronunciation.</p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {ALPHABET.map((item, idx) => {
          const isFlipped = flipped.has(idx)
          return (
            <div
              key={item.letter}
              className="flashcard-3d aspect-square"
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('.fc-audio-btn')) return
                toggleFlip(idx)
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(idx)
                }
              }}
              aria-label={`${item.letter}, ${item.name}. Click to flip.`}
            >
              <div className={`fc-inner ${isFlipped ? 'transform-[rotateY(180deg)]' : ''}`}
                style={isFlipped ? { transform: 'rotateY(180deg)' } : undefined}
              >
                {/* Front */}
                <div className={`fc-front ${item.vowel ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white border-2 border-gray-200'}`}>
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">{item.letter}</span>
                  <span className="text-xs text-blue-600 font-medium mt-1">{item.name}</span>
                </div>
                {/* Back */}
                <div className="fc-back bg-gradient-to-br from-blue-600 to-purple-600 text-white border-2 border-blue-400">
                  <span className="text-lg font-bold">{item.word}</span>
                  <span className="text-xs text-blue-200 mt-1">{item.hint}</span>
                  <button
                    className="fc-audio-btn mt-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      playLetter(item.audio)
                    }}
                    aria-label={`Listen to ${item.word}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
