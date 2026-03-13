import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'

export default async function LandingPage() {
  const { userId } = await auth()
  const isSignedIn = !!userId

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-[family-name:var(--font-inter)]">
              Learn Spanish<br />
              <span className="text-amber-300">The Interactive Way</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 leading-relaxed">
              Master Spanish from scratch with audio-powered lessons, interactive games,
              and real-world dialogues. No boring textbooks — just engaging, hands-on learning.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              {isSignedIn ? (
                <Link
                  href="/courses"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all text-lg"
                >
                  Go to My Courses
                </Link>
              ) : (
                <>
                  <Link
                    href="/sign-up"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all text-lg"
                  >
                    Start Learning Free
                  </Link>
                  <Link
                    href="/sign-in"
                    className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center font-[family-name:var(--font-inter)] mb-12">
          Why Students Love This Course
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Audio-First Learning', desc: 'Every letter, word, and dialogue has native-speaker audio. Train your ear from day one.', icon: '🎧' },
            { title: 'Interactive Games', desc: 'Flashcards, matching games, spelling bees, and sorting activities make learning fun.', icon: '🎮' },
            { title: 'Track Your Progress', desc: 'See your advancement through each lesson with visual progress tracking.', icon: '📊' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-inter)] mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>Spanish Course &copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}
