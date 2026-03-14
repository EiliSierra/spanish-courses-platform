'use client'

import { useState } from 'react'
import { useAudio } from '@/hooks/useAudio'
import { DIALOGUES } from '@/lib/lesson-data'

export default function DialogueSection() {
  const [activeDialogue, setActiveDialogue] = useState(0)
  const { playFile } = useAudio()

  const dialogue = DIALOGUES[activeDialogue]

  return (
    <section id="dialogues">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Real-World Dialogues</h2>
      <p className="text-gray-600 mb-5">Listen to Spanish speakers spell words in real situations.</p>

      {/* Dialogue tabs */}
      <div className="flex gap-2 mb-5">
        {DIALOGUES.map((d, i) => (
          <button
            key={d.id}
            onClick={() => setActiveDialogue(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              i === activeDialogue
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {d.location}
          </button>
        ))}
      </div>

      {/* Dialogue content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4">{dialogue.title}</h3>
        <div className="space-y-4">
          {dialogue.lines.map((line, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${
                line.speaker === dialogue.lines[0].speaker ? '' : 'flex-row-reverse'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  line.speaker === dialogue.lines[0].speaker
                    ? 'bg-gray-100 rounded-tl-sm'
                    : 'bg-blue-600 text-white rounded-tr-sm'
                }`}
              >
                <div className={`text-xs font-semibold mb-1 ${
                  line.speaker === dialogue.lines[0].speaker ? 'text-gray-500' : 'text-blue-200'
                }`}>
                  {line.speaker}
                </div>
                <p className="text-sm">{line.text}</p>
              </div>
              <button
                onClick={() => playFile(line.audio)}
                className="flex-shrink-0 mt-2 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-200 transition-colors"
                aria-label={`Play: ${line.text}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
