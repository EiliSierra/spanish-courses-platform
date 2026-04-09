'use client'

import type { CulturalNote } from '@/lib/types/lesson'

export default function CulturalNotes({ notes }: { notes: CulturalNote[]; gradient?: string }) {
  return (
    <section id="cultural">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">Culture &amp; Real Life</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{note.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
