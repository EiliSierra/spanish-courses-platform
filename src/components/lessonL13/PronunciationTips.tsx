'use client'

import { useState } from 'react'

const TIPS = [
  {
    title: '"Siete" — The Diphthong',
    content: 'The "ie" in "siete" is a diphthong — two vowels that glide together in one syllable. Say "see-EH-teh" (three syllables), not "see-et" (two syllables). The stress falls on the middle syllable.',
    example: 'Siete = see-EH-teh  |  Diecisiete = dee-eh-see-see-EH-teh',
  },
  {
    title: '"Cincuenta" — The CU = KW Sound',
    content: 'The "cu" combination before a vowel makes a "kw" sound, just like English "queen." So "cincuenta" is "seen-KWEHN-tah" — not "sin-koo-en-ta."',
    example: 'Cincuenta = seen-KWEHN-tah  |  Cuarenta = kwah-REHN-tah  |  Cuarto = KWAHR-toh',
  },
  {
    title: '"Hora" — The Silent H',
    content: 'Remember: the letter H is always silent in Spanish. "Hora" is pronounced "OH-rah," not "HOR-ah." This applies to all H words: "hoy" (today) = "oy," "hay" (there is) = "eye."',
    example: 'Hora = OH-rah  |  ¿Qué hora es? = keh OH-rah ehs',
  },
  {
    title: '"Años" — The Ñ Sound',
    content: 'The "ñ" (enya) makes a "ny" sound, like the "ny" in "canyon." So "años" is "AH-nyohs" — not "AH-nos." The tilde (~) over the N completely changes the sound.',
    example: 'Años = AH-nyohs  |  Mañana = mah-NYAH-nah  |  Otoño = oh-TOH-nyoh',
  },
]

export default function PronunciationTipsL13() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="pronunciation-tips">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Pronunciation Tips</h2>
      <p className="text-gray-600 mb-5">Key patterns for numbers and time expressions.</p>
      <div className="space-y-3">
        {TIPS.map((tip, i) => (
          <div key={tip.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
              <span className="font-semibold text-gray-800 flex-1">{tip.title}</span>
              <svg className={`w-5 h-5 text-gray-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === i && (
              <div className="px-5 pb-4 pl-16">
                <p className="text-gray-600 text-sm mb-3">{tip.content}</p>
                <div className="bg-amber-50 border-l-3 border-amber-400 px-4 py-2 rounded-r-lg text-sm text-amber-900 font-medium">{tip.example}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
