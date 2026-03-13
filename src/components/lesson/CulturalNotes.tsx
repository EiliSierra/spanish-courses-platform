'use client'

const NOTES = [
  {
    title: 'The Ñ — A Symbol of Identity',
    content: 'The letter Ñ is more than just a letter — it\'s a symbol of Hispanic identity. In 1991, Spain even passed a law requiring keyboards sold in Spain to include the Ñ key.',
  },
  {
    title: 'B and V — The Eternal Confusion',
    content: 'In most varieties of Spanish, B and V are pronounced nearly identically. To distinguish them while spelling, Spanish speakers use phrases like: "b de burro" (B as in donkey) and "v de vaca" (V as in cow).',
  },
  {
    title: 'Z and C — Regional Variations',
    content: 'In Latin America, Z sounds like "s" (zapato = "sah-PAH-toh"). In central and northern Spain, Z sounds like "th" in "think." This feature is called "distinción." Neither pronunciation is "more correct."',
  },
]

export default function CulturalNotes() {
  return (
    <section id="cultural" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">The Alphabet in Action</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {NOTES.map((note) => (
          <div key={note.title} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
            <h3 className="font-bold text-amber-900 mb-2">{note.title}</h3>
            <p className="text-sm text-amber-800 leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
