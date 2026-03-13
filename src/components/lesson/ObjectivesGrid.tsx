'use client'

const OBJECTIVES = [
  { icon: '🔤', title: '27 Letters', desc: 'Learn every letter of the Spanish alphabet and its name' },
  { icon: '🗣️', title: 'Pronunciation', desc: 'Master the sounds that make Spanish a phonetic language' },
  { icon: '✍️', title: 'Spelling', desc: 'Practice spelling words aloud using letter names' },
  { icon: '🎯', title: 'Key Differences', desc: 'Understand how Spanish letters differ from English' },
]

export default function ObjectivesGrid() {
  return (
    <section id="why-alphabet" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-6">What You&apos;ll Learn</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {OBJECTIVES.map((obj) => (
          <div key={obj.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-3xl mb-3">{obj.icon}</div>
            <h3 className="font-bold text-lg mb-1">{obj.title}</h3>
            <p className="text-gray-600 text-sm">{obj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
