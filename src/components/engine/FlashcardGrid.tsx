'use client'

import { useState, useCallback } from 'react'
import type { PhraseData, FlashcardGroup } from '@/lib/types/lesson'

const CAT_COLORS: Record<string, string> = {
  drink: 'from-amber-600 to-orange-600 border-amber-400',
  food: 'from-orange-600 to-red-600 border-orange-400',
  ordering: 'from-blue-600 to-cyan-600 border-blue-400',
  paying: 'from-purple-600 to-indigo-600 border-purple-400',
  polite: 'from-emerald-600 to-teal-600 border-emerald-400',
}

const DEFAULT_COLOR = 'from-blue-600 to-cyan-600 border-blue-400'

interface FlashcardGridProps {
  groups: FlashcardGroup[]
  phraseByAudio: Record<string, PhraseData>
  audioBase: string
}

export default function FlashcardGrid({ groups, phraseByAudio, audioBase }: FlashcardGridProps) {
  const [activeTab, setActiveTab] = useState(groups[0]?.key ?? '')
  const [flipped, setFlipped] = useState<Set<string>>(new Set())

  const group = groups.find((g) => g.key === activeTab) ?? groups[0]
  const cards = group.audioKeys.map((k) => phraseByAudio[k]).filter(Boolean)

  const toggleFlip = useCallback((audio: string) => {
    setFlipped((prev) => {
      const next = new Set(prev)
      if (next.has(audio)) next.delete(audio)
      else next.add(audio)
      return next
    })
  }, [])

  const switchTab = useCallback((key: string) => {
    setActiveTab(key)
    setFlipped(new Set())
  }, [])

  // Speech API overrides for letters the browser can't pronounce from their symbol alone
  const LETTER_SPEECH: Record<string, string> = {
    'Ñ': 'eñe', 'LL': 'elle', 'RR': 'doble erre', 'CH': 'che', 'Y': 'ye',
  }

  const playAudio = useCallback((audio: string) => {
    const phrase = phraseByAudio[audio]
    const isLetter = phrase && phrase.spanish.length <= 2
    if (isLetter && phrase) {
      // Use Speech API for single letters — MP3s have "la letra" prefix
      window.speechSynthesis.cancel()
      const text = LETTER_SPEECH[phrase.spanish] ?? phrase.spanish
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'es-MX'
      utterance.rate = 0.95
      window.speechSynthesis.speak(utterance)
    } else {
      new Audio(`${audioBase}/${audio}.mp3`).play().catch(() => {})
    }
  }, [audioBase, phraseByAudio])

  return (
    <section id="flashcards">
      <h2 className="text-2xl font-bold mb-2">Flashcards</h2>
      <p className="text-gray-600 mb-4">Click a card to flip it. Front shows English, back reveals Spanish with audio.</p>

      <div className="flex gap-2 mb-5 flex-wrap">
        {groups.map((g) => (
          <button key={g.key} onClick={() => switchTab(g.key)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              g.key === activeTab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
            {g.label}
            <span className="ml-1 text-xs opacity-70">({g.audioKeys.length})</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {cards.map((item) => {
          const isFlipped = flipped.has(item.audio)
          const color = CAT_COLORS[item.category] ?? DEFAULT_COLOR

          return (
            <div
              key={item.audio}
              className="flashcard-3d h-48"
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('.fc-audio-btn')) return
                toggleFlip(item.audio)
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(item.audio) } }}
            >
              <div className="fc-inner" style={isFlipped ? { transform: 'rotateY(180deg)' } : undefined}>
                <div className="fc-front bg-white border border-gray-100 shadow-sm hover:shadow-lg rounded-2xl">
                  <span className="text-base font-extrabold text-gray-900 text-center leading-tight px-2">{item.english}</span>
                  <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wide">{item.category}</span>
                  <span className="flex items-center gap-1 mt-2 text-gray-300 text-[10px] uppercase tracking-wide">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                    tap to flip
                  </span>
                </div>
                <div className={`fc-back bg-gradient-to-br ${color} text-white border rounded-2xl`}>
                  <span className="text-lg font-bold text-center px-2">{item.spanish}</span>
                  <span className="text-xs text-white/70 mt-1 italic">{item.pronunciation}</span>
                  <button
                    className="fc-audio-btn mt-3 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    onClick={(e) => { e.stopPropagation(); playAudio(item.audio) }}
                    aria-label={`Listen to ${item.spanish}`}
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
