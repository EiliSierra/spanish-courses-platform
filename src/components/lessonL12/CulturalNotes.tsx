'use client'

const NOTES = [
  {
    title: 'Greetings Are Everything',
    content: 'In Spanish-speaking cultures, greetings are never skipped. Even in a quick store visit, you say "Buenos días" first. Jumping straight to business is considered rude. A warm greeting opens every interaction.',
  },
  {
    title: 'Tú vs. Usted — A Dance of Respect',
    content: '"Tú" (informal) is for friends, family, and peers. "Usted" (formal) shows respect to elders, strangers, and authority figures. When in doubt, start with "usted" — it\'s always safe and shows good manners.',
  },
  {
    title: 'The Kiss on the Cheek',
    content: 'In many Latin American countries and Spain, people greet with a kiss on the cheek (or two in Spain). Men often shake hands or do a brief hug. Don\'t be surprised — it\'s a sign of warmth, not intimacy.',
  },
]

export default function CulturalNotesL12() {
  return (
    <section id="cultural">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">Culture & Real Life</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {NOTES.map((note) => (
          <div key={note.title} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="font-bold text-emerald-900 mb-2">{note.title}</h3>
            <p className="text-sm text-emerald-800 leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
