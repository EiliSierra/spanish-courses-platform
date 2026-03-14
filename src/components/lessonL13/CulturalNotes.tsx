'use client'

const NOTES = [
  {
    title: 'Numbers Shape Culture',
    content: 'In many Spanish-speaking countries, floor numbering differs — the ground floor is "planta baja," and the first floor is one level up. Phone numbers are often read in pairs (e.g., 55-23-41), not digit by digit.',
  },
  {
    title: 'Time Is Flexible',
    content: 'In Latin America, social events often start 15–30 minutes late — this is known as "hora latina." Business meetings, however, are more punctual. When someone says "ahorita" (right now), it could mean anything from immediately to later today.',
  },
  {
    title: 'The Calendar Difference',
    content: 'Weeks start on Monday, not Sunday. Days and months are NOT capitalized in Spanish (lunes, enero). Dates use the day/month/year format — so 3/5/2026 means May 3rd, not March 5th.',
  },
]

export default function CulturalNotesL13() {
  return (
    <section id="cultural">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">Culture &amp; Real Life</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {NOTES.map((note) => (
          <div key={note.title} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-2">{note.title}</h3>
            <p className="text-sm text-orange-800 leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
