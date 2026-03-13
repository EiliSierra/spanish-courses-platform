'use client'

import { useState } from 'react'

const TIPS = [
  {
    title: 'The 5 Vowels: A, E, I, O, U',
    content: 'Spanish vowels are simple and consistent — each one always makes the same sound, unlike English.\n\n• A = "ah" (amigo — friend)\n• E = "eh" (escuela — school)\n• I = "ee" (isla — island)\n• O = "oh" (ojo — eye)\n• U = "oo" (uva — grape)',
  },
  {
    title: 'Consonants That Sound Different from English',
    content: '• H — Always silent. "Hola" sounds like "oh-lah."\n• J — A strong, breathy sound. "Jamón" = "hah-MOHN."\n• Ñ — Like "ny" in "canyon."\n• R / RR — Single R is a quick tap. Double RR is a full trill.\n• LL — Pronounced like "y" in "yes" in most countries.\n• Z — Like "s" in Latin America, like "th" in Spain.\n• V — Sounds almost identical to B.',
  },
  {
    title: 'Letters That Change Sound (C and G)',
    content: 'C before A, O, U → hard "k" sound: casa, coco, cuna\nC before E, I → soft "s" sound: cielo, cena\n\nG before A, O, U → hard "g" sound: gato, gordo, gusto\nG before E, I → breathy "h" sound: gente, gigante\n\nTip: When C or G see E or I, they "soften up."',
  },
  {
    title: 'Rare Letters: K, W, X',
    content: '• K (ka) — "kilo," "kayak," "karate" — all borrowed.\n• W (doble uve) — "wifi," "whisky," "web" — borrowed from English.\n• X (equis) — Multiple sounds! In "México" = "h" sound. In "examen" = "ks" sound. In Nahuatl-origin words like "Xochimilco" = "sh" sound.',
  },
]

export default function PronunciationTips() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="pronunciation-tips" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">Pronunciation Tips</h2>
      <div className="space-y-3">
        {TIPS.map((tip, i) => (
          <div key={tip.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span>{tip.title}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 text-gray-600 whitespace-pre-line text-sm leading-relaxed">
                {tip.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
