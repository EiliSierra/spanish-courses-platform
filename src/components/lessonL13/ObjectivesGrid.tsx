'use client'

const OBJECTIVES = [
  { icon: '\u{1F522}', title: 'Numbers 0\u2013100', desc: 'Count from zero to one hundred' },
  { icon: '\u{1F550}', title: 'Telling Time', desc: 'Tell the time using Spanish clock expressions' },
  { icon: '\u{1F4C5}', title: 'Days & Months', desc: 'Master the Spanish calendar' },
  { icon: '\u{1F382}', title: 'Age & Dates', desc: 'Express your age and important dates' },
]

export default function ObjectivesGridL13() {
  return (
    <section id="why-numbers">
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
