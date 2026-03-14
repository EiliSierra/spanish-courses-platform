'use client'

import { useState } from 'react'

const TIPS = [
  {
    title: '"Buenos" — The BW Sound',
    content: 'The "ue" in "buenos" creates a quick "weh" sound. Say "BWEH-nos" — not "BOO-eh-nos." The lips round quickly and move to the next syllable.',
    example: 'Buenos días = BWEH-nos DEE-ahs  |  Buenas noches = BWEH-nahs NOH-chehs',
  },
  {
    title: '"Gracias" — The Soft CI',
    content: 'In "gracias," the "ci" makes a soft "see" sound in Latin America (GRAH-see-ahs), or a "th" sound in Spain (GRAH-thee-ahs). The stress falls on the first syllable.',
    example: 'Gracias = GRAH-see-ahs  |  Muchas gracias = MOO-chahs GRAH-see-ahs',
  },
  {
    title: '"¿Cómo?" — Question Intonation',
    content: 'Yes/no questions ("¿Habla inglés?") rise at the end. Questions with a question word ("¿Cómo?") tend to fall. "Cómo" has the stress on the first syllable: KOH-moh.',
    example: '¿Cómo está? = KOH-moh ehs-TAH ↘  |  ¿Habla inglés? = AH-blah een-GLEHS ↗',
  },
  {
    title: '"Por favor" — The Soft V',
    content: 'The Spanish "v" sounds nearly identical to "b." So "favor" is pronounced "fah-BOHR" — not "fah-VOR." The stress is on the last syllable.',
    example: 'Por favor = pohr fah-BOHR',
  },
]

export default function PronunciationTipsL12() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="pronunciation-tips">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Pronunciation Tips</h2>
      <p className="text-gray-600 mb-5">Key patterns that will make you sound more natural.</p>

      <div className="space-y-3">
        {TIPS.map((tip, i) => (
          <div key={tip.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="font-semibold text-gray-800 flex-1">{tip.title}</span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === i && (
              <div className="px-5 pb-4 pl-16">
                <p className="text-gray-600 text-sm mb-3">{tip.content}</p>
                <div className="bg-amber-50 border-l-3 border-amber-400 px-4 py-2 rounded-r-lg text-sm text-amber-900 font-medium">
                  {tip.example}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
