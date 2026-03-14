'use client'

const OBJECTIVES = [
  { icon: '👋', title: 'Greetings & Farewells', desc: 'Say hello, goodbye, and everything in between for any time of day' },
  { icon: '🤝', title: 'Introductions', desc: 'Introduce yourself, ask names, and say where you are from' },
  { icon: '🙏', title: 'Polite Expressions', desc: 'Thank, apologize, and make polite requests like a native speaker' },
  { icon: '❓', title: 'Survival Questions', desc: 'Ask for help, repetition, and navigate when you don\'t understand' },
]

export default function ObjectivesGridL12() {
  return (
    <section id="why-greetings">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-6">What You&apos;ll Learn</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {OBJECTIVES.map((obj) => (
          <div key={obj.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-3">{obj.icon}</div>
            <h3 className="font-bold text-lg mb-1">{obj.title}</h3>
            <p className="text-gray-600 text-sm">{obj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
