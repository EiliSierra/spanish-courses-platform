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
    <section id="pronunciation-board">
      <h2 className="text-2xl font-bold mb-2">Flashcards</h2>
      <p className="text-gray-600 mb-5">Click a card to flip it and reveal details. Use the speaker button to hear the pronunciation.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {ALPHABET.map((item, idx) => {
          const isFlipped = flipped.has(idx)
          return (
            <div
              key={item.letter}
              className="flashcard-3d h-48"
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
              <div className="fc-inner"
                style={isFlipped ? { transform: 'rotateY(180deg)' } : undefined}
              >
                {/* Front */}
                <div className="fc-front bg-white border border-gray-100 shadow-sm hover:shadow-lg rounded-2xl">
                  <span className="text-4xl font-extrabold text-gray-900">{item.letter}</span>
                  <span className="text-sm text-blue-600 font-semibold mt-2">{item.name}</span>
                  <span className="text-xs text-gray-400 mt-1">{item.hint}</span>
                  <span className="flex items-center gap-1 mt-2 text-gray-300 text-[10px] uppercase tracking-wide">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                    tap to flip
                  </span>
                </div>
                {/* Back */}
                <div className="fc-back bg-gradient-to-br from-blue-600 to-purple-600 text-white border border-blue-400 rounded-2xl">
                  <span className="text-xl font-bold">{item.word}</span>
                  <span className="text-sm text-blue-200 mt-2">{item.hint}</span>
                  <button
                    className="fc-audio-btn mt-3 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      playLetter(item.audio)
                    }}
                    aria-label={`Listen to ${item.word}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
