import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@clerk/nextjs/server'
import { HeroCTA, NavAuth, PricingCTA, FinalCTA } from '@/components/landing/AuthButtons'
import { ScrollReveal } from '@/components/landing/ScrollReveal'
import { FlashcardDemo } from '@/components/landing/FlashcardDemo'
import { AnimatedGradientOrbs } from '@/components/landing/AnimatedGradient'
import { CheckoutButton } from '@/components/landing/PricingButtons'

const LEVELS = [
  { num: 1, name: 'Foundations', cefr: 'A1', lessons: 8, desc: 'Alphabet, greetings, numbers, daily routines', color: 'from-blue-500 to-blue-600' },
  { num: 2, name: 'Building Blocks', cefr: 'A1–A2', lessons: 8, desc: 'Doctor visits, travel, shopping, work', color: 'from-blue-600 to-indigo-600' },
  { num: 3, name: 'Elementary', cefr: 'A2', lessons: 8, desc: 'Past tense, technology, cooking, traditions', color: 'from-indigo-500 to-indigo-600' },
  { num: 4, name: 'Pre-Intermediate', cefr: 'A2–B1', lessons: 8, desc: 'Subjunctive, finance, arts, future plans', color: 'from-indigo-600 to-purple-600' },
  { num: 5, name: 'Intermediate', cefr: 'B1–B2', lessons: 8, desc: 'Advanced grammar, professional & academic Spanish', color: 'from-purple-500 to-purple-600' },
  { num: 6, name: 'Upper-Intermediate', cefr: 'B1–C1', lessons: 8, desc: 'Literary language, legal Spanish, rhetoric', color: 'from-purple-600 to-fuchsia-600' },
  { num: 7, name: 'Advanced', cefr: 'B2–C1', lessons: 8, desc: 'Dialectology, media literacy, creative writing', color: 'from-fuchsia-500 to-fuchsia-600' },
  { num: 8, name: 'Specialization', cefr: 'B2–C1', lessons: 8, desc: 'Medical, business, tech, culinary, politics', color: 'from-fuchsia-600 to-rose-600' },
  { num: 9, name: 'Cultural Immersion', cefr: 'C1', lessons: 8, desc: 'Architecture, journalism, entrepreneurship', color: 'from-rose-500 to-rose-600' },
  { num: 10, name: 'Capstone', cefr: 'C1–C2', lessons: 2, desc: 'Mastery: conversation arts & your Spanish journey', color: 'from-rose-600 to-amber-600' },
]

const FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: 'Audio-First Learning',
    desc: 'Every word, phrase, and dialogue has native-speaker audio. Train your ear from lesson one with over 4,400 audio clips.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.607.61.654a48.24 48.24 0 005.427.058 48.394 48.394 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
    title: '74 Interactive Activities',
    desc: 'Flashcards, matching games, spelling bees, sorting challenges, and unique activities like Dialect Decoder and Triage Simulator.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'CEFR-Aligned Curriculum',
    desc: 'Professionally structured from A1 (beginner) to C2 (mastery), following the Common European Framework of Reference for Languages.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Real-World Dialogues',
    desc: 'Practice with conversations set in real cities across Latin America and Spain. Cafes in Mexico City, airports in Madrid, markets in Bogota.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: '10 Final Exams',
    desc: 'Test your knowledge at the end of every level with comprehensive exams. Score 70% or higher to earn your level badge.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: 'Cultural Deep Dives',
    desc: 'Go beyond grammar with lessons on Latin American history, regional dialects, slang, traditions, and the evolution of the Spanish language.',
  },
]

const SAMPLE_LESSONS = [
  { id: 'L1.1', title: 'Sounds & Letters', sub: 'The Spanish Alphabet', image: '/images/L1.1/L1.1.jpg' },
  { id: 'L1.2', title: 'Greetings & Introductions', sub: 'Meeting People', image: '/images/L1.2/hero-meeting.png' },
  { id: 'L1.4', title: 'At the Cafe', sub: 'Ordering Food & Drinks', image: '/images/L1.4/L1.4.jpg' },
  { id: 'L1.6', title: 'Family & Relationships', sub: 'La Familia', image: '/images/L1.6/L1.6.jpg' },
]

const FAQ = [
  { q: 'Do I need any prior Spanish knowledge?', a: 'Not at all! Level 1 starts from absolute zero — the alphabet, basic sounds, and simple greetings. The course is designed for complete beginners through advanced learners.' },
  { q: 'How many lessons are included?', a: '74 full lessons plus 10 final exams across 10 levels, covering everything from A1 (beginner) to C2 (mastery). Each lesson includes vocabulary, dialogues, grammar explanations, and interactive activities.' },
  { q: 'Is there audio for everything?', a: 'Yes! Over 4,400 audio clips recorded by native speakers. Every vocabulary word, phrase, dialogue, and pronunciation guide has audio you can play with one click.' },
  { q: 'What makes this different from Duolingo?', a: 'This course offers complete, structured lessons — not just isolated sentences. You get real dialogues set in actual cities, specialized vocabulary (medical, legal, business Spanish), cultural deep dives, and CEFR-aligned progression.' },
  { q: 'Can I try it before paying?', a: 'Absolutely. Level 1 (8 lessons + final exam) is completely free. No credit card required. Just sign up and start learning.' },
  { q: 'Will I get a certificate?', a: 'You earn a badge for each level you complete by passing the final exam (70% or higher). Printable certificates are coming soon.' },
]

export default async function LandingPage() {
  const { userId } = await auth()
  const isSignedIn = !!userId

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold font-[family-name:var(--font-inter)] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alexandria&apos;s Language Institute
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#curriculum" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Curriculum
            </a>
            <a href="#pricing" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </a>
            <NavAuth isSignedIn={isSignedIn} />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <AnimatedGradientOrbs />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                74 lessons available — A1 to C2
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-[family-name:var(--font-inter)] tracking-tight">
                Learn Spanish{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent animate-gradient-text">
                  the interactive way
                </span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-500 leading-relaxed">
                Master Spanish from zero to fluency with audio-powered lessons,
                real-world dialogues, and hands-on activities. No boring textbooks.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <HeroCTA isSignedIn={isSignedIn} />
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-lg"
                >
                  See Curriculum
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                No credit card required. Level 1 is completely free.
              </p>
            </div>

            {/* Hero preview image */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/10 border border-gray-200">
                  <Image
                    src="/images/L1.4/L1.4.jpg"
                    alt="Vibrant Latin American cafe scene — learn real-world Spanish"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">A1</div>
                  <div>
                    <div className="text-sm font-bold">Level 1 — Free</div>
                    <div className="text-xs text-gray-500">8 lessons + final exam</div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-2 text-center">
                  <div className="text-2xl font-extrabold font-[family-name:var(--font-inter)] text-blue-600">4,400+</div>
                  <div className="text-xs text-gray-500">Audio clips</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto md:mx-0">
            {[
              { num: '74', label: 'Lessons' },
              { num: '4,400+', label: 'Audio Clips' },
              { num: '10', label: 'Levels (A1–C2)' },
              { num: '10', label: 'Final Exams' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)] text-gray-900">{s.num}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
              <span>CEFR-aligned curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              <span>Built by language educators</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
              <span>No ads, no streaks, no tricks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Preview — Free Lessons + Flashcard Demo */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
                Try Level 1 — completely free
              </h2>
              <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
                Jump into any of these 8 beginner lessons right now. No sign-up walls, no credit card.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lesson cards */}
            <ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {SAMPLE_LESSONS.map((l) => (
                  <Link
                    key={l.id}
                    href={`/courses/${l.id}`}
                    className="group overflow-hidden bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/5 transition-all"
                  >
                    <Image
                      src={l.image}
                      alt={`${l.title} lesson preview`}
                      width={400}
                      height={200}
                      className="h-[140px] w-full object-cover"
                    />
                    <div className="p-5">
                      <div className="text-xs font-bold text-blue-600 mb-2">{l.id}</div>
                      <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-blue-600 transition-colors">
                        {l.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">{l.sub}</p>
                      <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Start lesson
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/courses" className="text-blue-600 font-semibold hover:text-blue-700 text-sm">
                  View all 8 free lessons + final exam &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Interactive Flashcard Demo */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="text-center mb-4">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Live Demo</span>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-inter)] mt-1">Interactive Flashcards</h3>
                  <p className="text-gray-500 text-sm mt-1">One of 74 unique activity types in the course</p>
                </div>
                <FlashcardDemo />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
              Everything you need to become fluent
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
              Built by language educators, powered by real pedagogy — not gamification tricks.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className="group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-inter)] mb-2">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
                10 levels. A1 to C2. Complete curriculum.
              </h2>
              <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
                74 lessons covering everything from &ldquo;Hola&rdquo; to literary analysis, medical terminology, and diplomatic negotiation.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {LEVELS.map((level) => (
              <ScrollReveal key={level.num} delay={level.num * 60}>
                <div className="relative bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color}`} />
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-extrabold font-[family-name:var(--font-inter)] text-gray-900">
                      L{level.num}
                    </span>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {level.cefr}
                    </span>
                  </div>
                  <h3 className="font-bold font-[family-name:var(--font-inter)] text-sm mb-1">{level.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{level.desc}</p>
                  <div className="mt-3 text-xs text-gray-400">
                    {level.lessons} lessons + exam
                  </div>
                  {level.num === 1 && (
                    <span className="mt-2 inline-block text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                      FREE
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
              How each lesson works
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
              Four steps, every lesson. Build real skills — not streaks.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: 'Learn',
              desc: 'Vocabulary with audio, visual flashcards, and pronunciation guides',
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              ),
              color: 'from-blue-500 to-blue-600',
              shadow: 'shadow-blue-600/20',
            },
            {
              title: 'Practice',
              desc: 'Interactive activities — matching, sorting, spelling bees, and more',
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.607.61.654a48.24 48.24 0 005.427.058 48.394 48.394 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>
              ),
              color: 'from-purple-500 to-purple-600',
              shadow: 'shadow-purple-600/20',
            },
            {
              title: 'Apply',
              desc: 'Real-world dialogues and cultural context set in actual Spanish-speaking cities',
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              ),
              color: 'from-fuchsia-500 to-fuchsia-600',
              shadow: 'shadow-fuchsia-600/20',
            },
            {
              title: 'Prove it',
              desc: 'Knowledge quizzes and level-end exams to earn your badge',
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-7.54 0" />
                </svg>
              ),
              color: 'from-amber-500 to-orange-500',
              shadow: 'shadow-amber-600/20',
            },
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 150}>
              <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mx-auto mb-5 shadow-lg ${s.shadow}`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        {/* Connector line (desktop only) */}
        <div className="hidden md:flex items-center justify-center mt-8">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-16 h-px bg-gray-200" />
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            <div className="w-16 h-px bg-gray-200" />
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            <div className="w-16 h-px bg-gray-200" />
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            <div className="w-16 h-px bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
                How we compare
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Not all language learning is created equal.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 pr-4 text-sm font-bold text-gray-500 uppercase tracking-wider w-1/3">Feature</th>
                    <th className="py-4 px-4 text-center">
                      <span className="text-sm font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Alexandria&apos;s</span>
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-bold text-gray-400">Duolingo</th>
                    <th className="py-4 px-4 text-center text-sm font-bold text-gray-400">Textbooks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: 'Complete structured lessons', us: true, duo: false, text: true },
                    { feature: 'Native-speaker audio on everything', us: true, duo: true, text: false },
                    { feature: 'Interactive activities & games', us: true, duo: true, text: false },
                    { feature: 'Real-world dialogues in context', us: true, duo: false, text: false },
                    { feature: 'CEFR-aligned A1 to C2', us: true, duo: false, text: true },
                    { feature: 'Specialized vocabulary (medical, legal, business)', us: true, duo: false, text: false },
                    { feature: 'Cultural deep dives & history', us: true, duo: false, text: true },
                    { feature: 'Regional dialects & slang', us: true, duo: false, text: false },
                    { feature: 'Level-end exams with badges', us: true, duo: false, text: false },
                    { feature: 'No ads or streak pressure', us: true, duo: false, text: true },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3.5 pr-4 text-sm text-gray-700 font-medium">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center">
                        {row.us ? (
                          <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {row.duo ? (
                          <svg className="w-5 h-5 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {row.text ? (
                          <svg className="w-5 h-5 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What learners say — placeholder testimonials */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
                What learners are saying
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'The audio quality is incredible. Every word has a native speaker recording — I feel like I have a tutor in my ear.',
                name: 'Sarah M.',
                detail: 'Completed Level 3',
              },
              {
                quote: 'I tried Duolingo for a year. In two months with Alexandria\'s, I learned more actual Spanish than that entire year.',
                name: 'James R.',
                detail: 'Currently on Level 5',
              },
              {
                quote: 'The cultural deep dives are my favorite part. I\'m not just learning words — I understand the people and places behind them.',
                name: 'Maria L.',
                detail: 'Completed Level 7',
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="font-bold text-sm font-[family-name:var(--font-inter)]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
                Simple, transparent pricing
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Start free. Upgrade when you&apos;re ready for more.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="font-bold text-lg font-[family-name:var(--font-inter)]">Free</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold font-[family-name:var(--font-inter)]">$0</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">Forever free, no strings attached</p>
              <ul className="mt-6 space-y-3">
                {[
                  'Level 1 — 8 full lessons',
                  'Final exam + badge',
                  'All audio clips included',
                  'All interactive activities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <PricingCTA isSignedIn={isSignedIn} />
            </div>

            {/* Premium — highlighted */}
            <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 relative shadow-lg shadow-blue-600/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="font-bold text-lg font-[family-name:var(--font-inter)]">Premium</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold font-[family-name:var(--font-inter)]">$14.99</span>
                <span className="text-gray-500 text-sm">/month</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">or $119/year (save 34%)</p>
              <ul className="mt-6 space-y-3">
                {[
                  'All 10 levels (74 lessons)',
                  '10 final exams + badges',
                  '4,400+ native audio clips',
                  '74 unique activities',
                  'Cultural deep dives',
                  'Specialized vocabulary',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_MONTHLY ? (
                <div className="mt-8 space-y-2">
                  <CheckoutButton
                    priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_MONTHLY}
                    label="Subscribe Monthly — $14.99"
                    className="w-full py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
                  />
                  {process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_YEARLY && (
                    <CheckoutButton
                      priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_YEARLY}
                      label="Subscribe Yearly — $119 (save 34%)"
                      className="w-full py-2.5 rounded-xl font-semibold text-sm border-2 border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors"
                    />
                  )}
                </div>
              ) : (
                <button className="mt-8 w-full py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25" disabled>
                  Coming Soon
                </button>
              )}
            </div>

            {/* Lifetime */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="font-bold text-lg font-[family-name:var(--font-inter)]">Lifetime</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold font-[family-name:var(--font-inter)]">$199</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">One-time payment, forever access</p>
              <ul className="mt-6 space-y-3">
                {[
                  'Everything in Premium',
                  'Lifetime access — no renewals',
                  'All future content updates',
                  'Priority support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {process.env.NEXT_PUBLIC_STRIPE_PRICE_LIFETIME ? (
                <CheckoutButton
                  priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_LIFETIME}
                  label="Buy Lifetime — $199"
                  className="mt-8 w-full py-3 rounded-xl font-bold border-2 border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
                />
              ) : (
                <button className="mt-8 w-full py-3 rounded-xl font-bold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors" disabled>
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
              Frequently asked questions
            </h2>
          </div>
        </ScrollReveal>
        <div className="space-y-6">
          {FAQ.map((item, i) => (
            <ScrollReveal key={item.q} delay={i * 80}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)]">{item.q}</h3>
                <p className="mt-2 text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-inter)]">
            Ready to start your Spanish journey?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-xl mx-auto">
            Level 1 is free. 8 lessons, interactive activities, native audio — all yours, no strings attached.
          </p>
          <div className="mt-10">
            <FinalCTA isSignedIn={isSignedIn} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h4 className="font-bold text-white font-[family-name:var(--font-inter)] text-lg mb-3">
                Alexandria&apos;s Language Institute
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                Interactive Spanish courses from A1 to C2. Built by educators who believe language learning should be engaging, structured, and accessible.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
                  CEFR-aligned
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>
                  4,400+ audio
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white font-[family-name:var(--font-inter)] mb-3">Course</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className="hover:text-white transition-colors">All Lessons</Link></li>
                <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white font-[family-name:var(--font-inter)] mb-3">Levels</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className="hover:text-white transition-colors">Level 1 — Foundations (Free)</Link></li>
                <li><span className="text-gray-500">Levels 2–4 — Elementary</span></li>
                <li><span className="text-gray-500">Levels 5–7 — Intermediate</span></li>
                <li><span className="text-gray-500">Levels 8–10 — Advanced</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white font-[family-name:var(--font-inter)] mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-500">Alexandria&apos;s Design LLC</span></li>
                <li><a href="mailto:esierra@alexandriasdesign.com" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><span className="text-gray-500">Carlsbad, California</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Alexandria&apos;s Language Institute. All rights reserved.</p>
            <p className="text-gray-600 text-xs">Made with care by language educators</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
