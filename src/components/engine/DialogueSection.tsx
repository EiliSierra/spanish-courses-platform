'use client'

import { useState } from 'react'
import type { Dialogue, DialogueAnnotation } from '@/lib/types/lesson'

function AnnotatedText({ text, annotations, isLight }: { text: string; annotations?: DialogueAnnotation[]; isLight: boolean }) {
  if (!annotations || annotations.length === 0) return <>{text}</>

  const parts: React.ReactNode[] = []
  let remaining = text
  let keyIdx = 0

  // Sort annotations by position in text
  const sorted = [...annotations].sort((a, b) => text.indexOf(a.phrase) - text.indexOf(b.phrase))

  for (const ann of sorted) {
    const idx = remaining.indexOf(ann.phrase)
    if (idx === -1) continue

    if (idx > 0) {
      parts.push(<span key={keyIdx++}>{remaining.slice(0, idx)}</span>)
    }

    parts.push(
      <span key={keyIdx++} className="relative group/ann inline">
        <span className={`underline decoration-dotted ${isLight ? 'decoration-amber-300' : 'decoration-amber-400'}`}>
          {ann.phrase}
        </span>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 rounded text-xs font-semibold bg-gray-900 text-white whitespace-nowrap opacity-0 group-hover/ann:opacity-100 transition-opacity pointer-events-none z-10">
          {ann.fromLesson}{ann.note ? ` — ${ann.note}` : ''}
        </span>
      </span>
    )

    remaining = remaining.slice(idx + ann.phrase.length)
  }

  if (remaining) parts.push(<span key={keyIdx++}>{remaining}</span>)

  return <>{parts}</>
}

export default function DialogueSection({ dialogues, description }: { dialogues: Dialogue[]; description: string }) {
  const [activeDialogue, setActiveDialogue] = useState(0)
  const dialogue = dialogues[activeDialogue]

  const playFile = (src: string) => {
    new Audio(src).play().catch(() => {})
  }

  return (
    <section id="dialogues">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Real-World Dialogues</h2>
      <p className="text-gray-600 mb-5">{description}</p>

      <div className="flex gap-2 mb-5">
        {dialogues.map((d, i) => (
          <button key={d.id} onClick={() => setActiveDialogue(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              i === activeDialogue ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
            {d.location}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4">{dialogue.title}</h3>
        <div className="space-y-4">
          {dialogue.lines.map((line, i) => {
            const isFirstSpeaker = line.speaker === dialogue.lines[0].speaker
            return (
              <div key={i} className={`flex items-start gap-3 ${!isFirstSpeaker ? 'flex-row-reverse' : ''}`}>
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  isFirstSpeaker ? 'bg-gray-100 rounded-tl-sm' : 'bg-amber-600 text-white rounded-tr-sm'
                }`}>
                  <div className={`text-xs font-semibold mb-1 ${isFirstSpeaker ? 'text-gray-500' : 'text-amber-200'}`}>
                    {line.speaker}
                  </div>
                  <p className="text-sm">
                    <AnnotatedText text={line.text} annotations={line.annotations} isLight={!isFirstSpeaker} />
                  </p>
                  {line.annotations && line.annotations.length > 0 && (
                    <div className="flex gap-1 mt-1.5">
                      {[...new Set(line.annotations.map(a => a.fromLesson))].map(lesson => (
                        <span key={lesson} className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          isFirstSpeaker ? 'bg-sky-100 text-sky-700' : 'bg-white/20 text-white'
                        }`}>
                          {lesson}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => playFile(line.audio)}
                  className="flex-shrink-0 mt-2 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  aria-label={`Play: ${line.text}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
