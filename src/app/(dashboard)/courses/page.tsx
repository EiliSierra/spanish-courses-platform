import Link from 'next/link'

const LESSONS = [
  { id: 'L1.1', title: 'Sounds & Letters', subtitle: 'The Spanish Alphabet', level: 1, available: true },
  { id: 'L1.2', title: 'Greetings & Introductions', subtitle: 'Meeting People', level: 1, available: true },
  { id: 'L1.3', title: 'Numbers & Time', subtitle: 'From 0 to 100 + Telling Time', level: 1, available: true },
  { id: 'L1.4', title: 'At the Cafe', subtitle: 'Ordering Food & Drinks', level: 1, available: true },
  { id: 'L1.5', title: 'Getting Around', subtitle: 'Directions & Places', level: 1, available: true },
  { id: 'L1.6', title: 'Family & Relationships', subtitle: 'La Familia', level: 1, available: true },
  { id: 'L1.7', title: 'Food & Drinks', subtitle: 'At the Restaurant', level: 1, available: true },
  { id: 'L1.8', title: 'Daily Routines', subtitle: 'A Day in Your Life', level: 1, available: true },
]

const LEVEL2_LESSONS = [
  { id: 'L2.1', title: 'At the Doctor', subtitle: 'Symptoms, Body Parts & Doctor Visits', available: true },
  { id: 'L2.2', title: 'Weather & Seasons', subtitle: 'Climate, Months & Clothing', available: true },
  { id: 'L2.3', title: 'Making Plans', subtitle: 'Invitations & Future Plans', available: true },
  { id: 'L2.4', title: 'At the Hotel', subtitle: 'Check-in, Rooms & Services', available: false },
  { id: 'L2.5', title: 'Eating Out', subtitle: 'Restaurant & Full Menu', available: false },
  { id: 'L2.6', title: 'Phone & Social Media', subtitle: 'Calls, Messages & Technology', available: false },
  { id: 'L2.7', title: 'Feelings & Opinions', subtitle: 'Emotions & Ser vs. Estar', available: false },
  { id: 'L2.8', title: 'A Day in Bogot\u00e1', subtitle: 'Review: All of Level 1 + 2', available: false },
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

      {/* Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L1.F" className="block group">
          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border-2 border-indigo-200 p-6 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏆</span>
              <div>
                <div className="text-xs font-semibold text-indigo-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-indigo-700 transition-colors">
                  Level 1 — Final Exam
                </h3>
                <p className="text-gray-500 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 2 — Building Blocks */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 2 — Building Blocks</h1>
        <p className="text-gray-500 mt-1">8 lessons to expand your Spanish abilities</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL2_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-green-300 transition-all">
                  <div className="text-xs font-semibold text-green-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-green-700 transition-colors">
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
