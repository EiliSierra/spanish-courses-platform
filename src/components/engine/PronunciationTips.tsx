'use client'

import { useState } from 'react'
import type { PronunciationTip } from '@/lib/types/lesson'

export default function PronunciationTips({ tips }: { tips: PronunciationTip[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="pronunciation-tips">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Pronunciation Tips</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-5">Key patterns for this lesson&apos;s vocabulary.</p>
      <div className="space-y-3">
        {tips.map((tip, i) => (
          <div key={tip.title} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 dark:bg-gray-900 transition-colors">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
              <span className="font-semibold text-gray-700 dark:text-gray-200 flex-1">{tip.title}</span>
              <svg className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === i && (
              <div className="px-5 pb-4 pl-16">
                {tip.reviewFrom && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 mb-2">
                    Review from {tip.reviewFrom}
                  </span>
                )}
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{tip.content}</p>
                <div className="bg-amber-50 dark:bg-amber-950 border-l-3 border-amber-400 px-4 py-2 rounded-r-lg text-sm text-amber-800 dark:text-amber-200 font-medium">{tip.example}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
