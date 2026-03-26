import Link from 'next/link'

const LESSONS = [
  { id: 'L1.1', title: 'Sounds & Letters', subtitle: 'The Spanish Alphabet', level: 1, available: true },
  { id: 'L1.2', title: 'Greetings & Introductions', subtitle: 'Meeting People', level: 1, available: true },
  { id: 'L1.3', title: 'Numbers & Time', subtitle: 'From 0 to 100 + Telling Time', level: 1, available: true },
  { id: 'L1.4', title: 'At the Cafe', subtitle: 'Ordering Food & Drinks', level: 1, available: true },
  { id: 'L1.5', title: 'Getting Around', subtitle: 'Directions & Places', level: 1, available: true },
  { id: 'L1.6', title: 'Family & Relationships', subtitle: 'La Familia', level: 1, available: false },
  { id: 'L1.7', title: 'Food & Drinks', subtitle: 'At the Restaurant', level: 1, available: false },
  { id: 'L1.8', title: 'Daily Routines', subtitle: 'A Day in Your Life', level: 1, available: false },
]

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 1 — Foundations</h1>
        <p className="text-gray-500 mt-1">8 lessons to build your Spanish base</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LESSONS.map((lesson, i) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                  <div className="text-xs font-semibold text-blue-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-blue-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 rounded-2xl border border-gray-200 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
