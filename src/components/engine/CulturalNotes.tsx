'use client'

import type { CulturalNote } from '@/lib/types/lesson'

export default function CulturalNotes({ notes }: { notes: CulturalNote[]; gradient?: string }) {
  return (
    <section id="cultural">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-lg">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
        </div>
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)]">Culture &amp; Real Life</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {notes.map((note, i) => {
          const colors = [
            'from-amber-50 to-orange-50 border-amber-200 dark:from-amber-950/40 dark:to-orange-950/40 dark:border-amber-800',
            'from-rose-50 to-pink-50 border-rose-200 dark:from-rose-950/40 dark:to-pink-950/40 dark:border-rose-800',
            'from-teal-50 to-emerald-50 border-teal-200 dark:from-teal-950/40 dark:to-emerald-950/40 dark:border-teal-800',
          ]
          return (
            <div key={note.title} className={`bg-gradient-to-br ${colors[i % colors.length]} rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow`}>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{note.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{note.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
