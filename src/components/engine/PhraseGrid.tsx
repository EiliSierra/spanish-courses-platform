'use client'

import { useCallback, useState, useRef } from 'react'
import type { PhraseData, PhraseSection } from '@/lib/types/lesson'

const COLOR_MAP: Record<string, { bg: string; border: string; activeBorder: string; text: string; sub: string }> = {
  orange: { bg: 'bg-orange-50/50', border: 'border-orange-100', activeBorder: 'border-orange-400', text: 'text-orange-700', sub: 'text-orange-500' },
  amber: { bg: 'bg-amber-50/50', border: 'border-amber-100', activeBorder: 'border-amber-400', text: 'text-amber-700', sub: 'text-amber-500' },
  blue: { bg: 'bg-blue-50/50', border: 'border-blue-100', activeBorder: 'border-blue-400', text: 'text-blue-700', sub: 'text-blue-500' },
  rose: { bg: 'bg-rose-50/50', border: 'border-rose-100', activeBorder: 'border-rose-400', text: 'text-rose-700', sub: 'text-rose-500' },
  purple: { bg: 'bg-purple-50/50', border: 'border-purple-100', activeBorder: 'border-purple-400', text: 'text-purple-700', sub: 'text-purple-500' },
  emerald: { bg: 'bg-emerald-50/50', border: 'border-emerald-100', activeBorder: 'border-emerald-400', text: 'text-emerald-700', sub: 'text-emerald-500' },
  teal: { bg: 'bg-teal-50/50', border: 'border-teal-100', activeBorder: 'border-teal-400', text: 'text-teal-700', sub: 'text-teal-500' },
}

const DIALECTS = [
  { code: 'default', label: 'Original', flag: '🎧', lang: '' },
  { code: 'es-MX', label: 'Mexico', flag: '🇲🇽', lang: 'es-MX' },
  { code: 'es-ES', label: 'Spain', flag: '🇪🇸', lang: 'es-ES' },
  { code: 'es-AR', label: 'Argentina', flag: '🇦🇷', lang: 'es-AR' },
  { code: 'es-CO', label: 'Colombia', flag: '🇨🇴', lang: 'es-CO' },
  { code: 'es-CL', label: 'Chile', flag: '🇨🇱', lang: 'es-CL' },
  { code: 'es-US', label: 'US Spanish', flag: '🇺🇸', lang: 'es-US' },
]

// Cache voices once loaded
let cachedVoices: SpeechSynthesisVoice[] = []

function loadVoices(): SpeechSynthesisVoice[] {
  const voices = window.speechSynthesis.getVoices()
  if (voices.length > 0) cachedVoices = voices
  return cachedVoices
}

function findVoiceForDialect(langCode: string): SpeechSynthesisVoice | null {
  const voices = loadVoices()
  // 1. Exact match (e.g. es-MX)
  const exact = voices.find(v => v.lang === langCode)
  if (exact) return exact

  // 2. Match with region variant format (e.g. es_MX, es-419)
  const normalized = langCode.replace('-', '_')
  const variant = voices.find(v => v.lang.replace('-', '_') === normalized)
  if (variant) return variant

  // 3. Any voice that contains the region code in its name
  const region = langCode.split('-')[1]
  if (region) {
    const byName = voices.find(v =>
      v.lang.startsWith('es') && (v.name.includes(region) || v.name.includes(region.toLowerCase()))
    )
    if (byName) return byName
  }

  // 4. Fallback: any Spanish voice different from previously used ones
  const anySpanish = voices.filter(v => v.lang.startsWith('es'))
  if (anySpanish.length > 0) {
    // Try to pick one with a matching lang tag
    return anySpanish.find(v => v.lang.includes(langCode.split('-')[1] || '')) || anySpanish[0]
  }

  return null
}

function speakWithDialect(text: string, langCode: string) {
  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = langCode
  utterance.rate = 0.95

  const voice = findVoiceForDialect(langCode)
  if (voice) {
    utterance.voice = voice
    utterance.lang = voice.lang
  }

  window.speechSynthesis.speak(utterance)
}

function PhraseCard({ item, color, audioBase, dialect }: { item: PhraseData; color: string; audioBase: string; dialect: string }) {
  const [active, setActive] = useState(false)
  const c = COLOR_MAP[color] ?? COLOR_MAP.orange
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleClick = useCallback(() => {
    if (dialect === 'default') {
      // Play original MP3
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0 }
      const audio = new Audio(`${audioBase}/${item.audio}.mp3`)
      audioRef.current = audio
      audio.play().catch(() => {})
    } else {
      // Use Web Speech API with selected dialect
      speakWithDialect(item.spanish, dialect)
    }
    setActive(true)
    setTimeout(() => setActive(false), 800)
  }, [item.audio, item.spanish, audioBase, dialect])

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center p-5 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 ${
        active ? `${c.activeBorder} bg-amber-50 shadow-lg scale-105` : `${c.border} ${c.bg}`
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

function TabGroup({ tabs, children }: { tabs: string[]; children: React.ReactNode[] }) {
  const [active, setActive] = useState(0)
  return (
    <>
      {tabs.length > 1 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {tabs.map((label, i) => (
            <button key={label} onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                i === active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
              {label}
            </button>
          ))}
        </div>
      )}
      {children[active]}
    </>
  )
}

function DialectSelector({ selected, onChange }: { selected: string; onChange: (code: string) => void }) {
  // Always show all dialects — when a specific voice isn't available,
  // findVoiceForDialect already falls back to any Spanish voice.
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span className="text-xs text-gray-500 font-semibold mr-1">Accent:</span>
      {DIALECTS.map(d => (
        <button
          key={d.code}
          onClick={() => onChange(d.code)}
          title={d.label}
          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all ${
            selected === d.code
              ? 'bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
        >
          <span>{d.flag}</span>
          <span className="hidden sm:inline">{d.label}</span>
        </button>
      ))}
    </div>
  )
}

export default function PhraseGrid({ sections, audioBase }: { sections: PhraseSection[]; audioBase: string }) {
  const [dialect, setDialect] = useState('default')

  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)]">{section.title}</h2>
              <p className="text-gray-600 mt-1">{section.description}</p>
            </div>
          </div>
          <div className="mb-4">
            <DialectSelector selected={dialect} onChange={setDialect} />
          </div>
          <TabGroup tabs={section.tabs.map(t => t.label)}>
            {section.tabs.map((tab) => (
              <div key={tab.label} className={`grid grid-cols-${tab.columns ?? 3} sm:grid-cols-${(tab.columns ?? 3) + 1} md:grid-cols-${(tab.columns ?? 3) + 2} gap-4`}>
                {tab.phrases.map((p) => (
                  <PhraseCard key={p.audio} item={p} color={tab.color} audioBase={audioBase} dialect={dialect === 'default' ? 'default' : DIALECTS.find(d => d.code === dialect)?.lang ?? 'default'} />
                ))}
              </div>
            ))}
          </TabGroup>
        </section>
      ))}
    </>
  )
}
