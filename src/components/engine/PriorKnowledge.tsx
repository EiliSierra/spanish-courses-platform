'use client'

import type { PriorKnowledgeItem } from '@/lib/types/lesson'

const LESSON_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'L1.1': { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200' },
  'L1.2': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
  'L1.3': { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200' },
}

const DEFAULT_COLOR = { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' }

export default function PriorKnowledge({ items }: { items: PriorKnowledgeItem[] }) {
  if (!items || items.length === 0) return null

  return (
    <section id="prior-knowledge">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">What You Already Know</h2>
      <p className="text-gray-600 mb-5">These concepts from earlier lessons will help you in this one.</p>
      <div className="grid gap-3">
        {items.map((item) => {
          const c = LESSON_COLORS[item.fromLesson] ?? DEFAULT_COLOR
          return (
            <div key={item.fromLesson + item.label} className={`flex items-start gap-4 p-4 rounded-xl border ${c.border} ${c.bg}`}>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${c.text} bg-white/70 flex-shrink-0`}>
                {item.fromLesson}
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                <p className="text-sm text-gray-600 mt-0.5">{item.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
