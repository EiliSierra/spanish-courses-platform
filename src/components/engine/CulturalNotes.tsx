'use client'

import type { CulturalNote } from '@/lib/types/lesson'

export default function CulturalNotes({ notes, gradient }: { notes: CulturalNote[]; gradient: string }) {
  return (
    <section id="cultural">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">Culture &amp; Real Life</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.title} className={`bg-gradient-to-br ${gradient} rounded-xl p-6 border border-orange-200`}>
            <h3 className="font-bold text-orange-900 mb-2">{note.title}</h3>
            <p className="text-sm text-orange-800 leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
