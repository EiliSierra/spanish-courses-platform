import Link from 'next/link'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs/server'
import { canAccessLesson, type PlanKey } from '@/lib/stripe'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

type ProgressMap = Record<string, { progressPct: number; quizScore: number | null; quizMax: number | null; quizPassed: boolean }>

function lessonImage(id: string): string {
  const special: Record<string, string> = {
    'L1.1': '/images/L1.1/L1.1.jpg',
    'L1.2': '/images/L1.2/hero-meeting.png',
    'L1.3': '/images/L1.3/hero-numbers.png',
  }
  return special[id] || `/images/${id}/${id}.jpg`
}

type Lesson = { id: string; title: string; subtitle: string }

const LEVELS: {
  num: number
  title: string
  subtitle: string
  color: string
  hoverBorder: string
  gradientFrom: string
  gradientTo: string
  darkFrom: string
  darkTo: string
  borderColor: string
  darkBorder: string
  accentColor: string
  emoji: string
  examLabel: string
  examDesc: string
  lessons: Lesson[]
}[] = [
  {
    num: 1, title: 'Level 1 — Foundations', subtitle: '8 lessons to build your Spanish base',
    color: 'text-blue-600', hoverBorder: 'hover:border-blue-300',
    gradientFrom: 'from-indigo-50', gradientTo: 'to-violet-50', darkFrom: 'dark:from-indigo-950', darkTo: 'dark:to-violet-950',
    borderColor: 'border-indigo-200', darkBorder: 'dark:border-indigo-800', accentColor: 'text-indigo-600',
    emoji: '🏆', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L1.1', title: 'Sounds & Letters', subtitle: 'The Spanish Alphabet' },
      { id: 'L1.2', title: 'Greetings & Introductions', subtitle: 'Meeting People' },
      { id: 'L1.3', title: 'Numbers & Time', subtitle: 'From 0 to 100 + Telling Time' },
      { id: 'L1.4', title: 'At the Cafe', subtitle: 'Ordering Food & Drinks' },
      { id: 'L1.5', title: 'Getting Around', subtitle: 'Directions & Places' },
      { id: 'L1.6', title: 'Family & Relationships', subtitle: 'La Familia' },
      { id: 'L1.7', title: 'Food & Drinks', subtitle: 'At the Restaurant' },
      { id: 'L1.8', title: 'Daily Routines', subtitle: 'A Day in Your Life' },
    ],
  },
  {
    num: 2, title: 'Level 2 — Building Blocks', subtitle: '8 lessons to expand your Spanish abilities',
    color: 'text-green-600', hoverBorder: 'hover:border-green-300',
    gradientFrom: 'from-green-50', gradientTo: 'to-emerald-50', darkFrom: 'dark:from-green-950', darkTo: 'dark:to-emerald-950',
    borderColor: 'border-green-200', darkBorder: 'dark:border-green-800', accentColor: 'text-green-600',
    emoji: '🎖️', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L2.1', title: 'At the Doctor', subtitle: 'Symptoms, Body Parts & Doctor Visits' },
      { id: 'L2.2', title: 'Weather & Seasons', subtitle: 'Climate, Months & Clothing' },
      { id: 'L2.3', title: 'Making Plans', subtitle: 'Invitations & Future Plans' },
      { id: 'L2.4', title: 'At the Hotel', subtitle: 'Check-in, Rooms & Services' },
      { id: 'L2.5', title: 'At the Airport', subtitle: 'Flights, Check-in & Boarding' },
      { id: 'L2.6', title: 'Shopping & Clothing', subtitle: 'Clothes, Colors & Buying Things' },
      { id: 'L2.7', title: 'Describing People', subtitle: 'Appearance, Personality & Feelings' },
      { id: 'L2.8', title: 'Work & Professions', subtitle: 'Jobs, Workplace & Career' },
    ],
  },
  {
    num: 3, title: 'Level 3 — Intermediate Spanish', subtitle: '8 lessons to reach conversational fluency',
    color: 'text-amber-600', hoverBorder: 'hover:border-amber-300',
    gradientFrom: 'from-amber-50', gradientTo: 'to-orange-50', darkFrom: 'dark:from-amber-950', darkTo: 'dark:to-orange-950',
    borderColor: 'border-amber-200', darkBorder: 'dark:border-amber-800', accentColor: 'text-amber-600',
    emoji: '🏅', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L3.1', title: 'Past Tense — Pretérito', subtitle: 'Telling Stories About What Happened' },
      { id: 'L3.2', title: 'Home & Housing', subtitle: 'Rooms, Furniture & Renting' },
      { id: 'L3.3', title: 'Technology & Social Media', subtitle: 'Phones, Apps & Internet' },
      { id: 'L3.4', title: 'Cooking & Recipes', subtitle: 'Ingredients, Kitchen & Instructions' },
      { id: 'L3.5', title: 'Sports & Hobbies', subtitle: 'Activities, Preferences & Frequency' },
      { id: 'L3.6', title: 'Environment & Nature', subtitle: 'Animals, Geography & Eco-Actions' },
      { id: 'L3.7', title: 'Celebrations & Traditions', subtitle: 'Holidays, Parties & Customs' },
      { id: 'L3.8', title: 'Travel Stories', subtitle: 'Sharing Experiences & Recommendations' },
    ],
  },
  {
    num: 4, title: 'Level 4 — Upper-Intermediate', subtitle: '8 lessons to master complex Spanish grammar and real-world topics',
    color: 'text-purple-600', hoverBorder: 'hover:border-purple-300',
    gradientFrom: 'from-purple-50', gradientTo: 'to-indigo-50', darkFrom: 'dark:from-purple-950', darkTo: 'dark:to-indigo-950',
    borderColor: 'border-purple-200', darkBorder: 'dark:border-purple-800', accentColor: 'text-purple-600',
    emoji: '👑', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L4.1', title: 'Imperfect Tense', subtitle: 'How Things Used to Be' },
      { id: 'L4.2', title: 'Subjunctive Mood', subtitle: 'Wishes, Doubts & Recommendations' },
      { id: 'L4.3', title: 'Formal vs Informal', subtitle: 'Tú, Usted & Vos' },
      { id: 'L4.4', title: 'News & Current Events', subtitle: 'Media, Headlines & Opinions' },
      { id: 'L4.5', title: 'Health & Wellness', subtitle: 'Lifestyle, Mental Health & Habits' },
      { id: 'L4.6', title: 'Banking & Finance', subtitle: 'Money, Bills & Accounts' },
      { id: 'L4.7', title: 'Arts & Entertainment', subtitle: 'Music, Movies & Books' },
      { id: 'L4.8', title: 'Future Plans & Dreams', subtitle: 'Goals, Conditional & Aspirations' },
    ],
  },
  {
    num: 5, title: 'Level 5 — Advanced Spanish', subtitle: '8 lessons to master complex grammar and real-world fluency',
    color: 'text-rose-600', hoverBorder: 'hover:border-rose-300',
    gradientFrom: 'from-rose-50', gradientTo: 'to-pink-50', darkFrom: 'dark:from-rose-950', darkTo: 'dark:to-pink-950',
    borderColor: 'border-rose-200', darkBorder: 'dark:border-rose-800', accentColor: 'text-rose-600',
    emoji: '🎓', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L5.1', title: 'Past Perfect & Sequencing', subtitle: 'What Had Happened Before' },
      { id: 'L5.2', title: 'Advanced Subjunctive', subtitle: 'Wishes, Doubts & Counterfactuals' },
      { id: 'L5.3', title: 'Passive Voice & Impersonal', subtitle: 'Se Constructions & Formal Register' },
      { id: 'L5.4', title: 'Discourse Markers', subtitle: 'Argumentation & Academic Connectors' },
      { id: 'L5.5', title: 'Professional Spanish', subtitle: 'Emails, Meetings & Presentations' },
      { id: 'L5.6', title: 'Idioms & Proverbs', subtitle: 'Figurative Language & Refranes' },
      { id: 'L5.7', title: 'Academic Spanish', subtitle: 'Reported Speech & Literary Analysis' },
      { id: 'L5.8', title: 'Nuanced Expression', subtitle: 'Tone, Irony & Regional Variation' },
    ],
  },
  {
    num: 6, title: 'Level 6 — Mastery Spanish', subtitle: '8 lessons to achieve full proficiency and cultural mastery',
    color: 'text-cyan-600', hoverBorder: 'hover:border-cyan-300',
    gradientFrom: 'from-cyan-50', gradientTo: 'to-teal-50', darkFrom: 'dark:from-cyan-950', darkTo: 'dark:to-teal-950',
    borderColor: 'border-cyan-200', darkBorder: 'dark:border-cyan-800', accentColor: 'text-cyan-600',
    emoji: '💎', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L6.1', title: 'Complex Sentence Architecture', subtitle: 'Relative Clauses & Subordination' },
      { id: 'L6.2', title: 'Literary & Poetic Language', subtitle: 'Devices, Movements & Criticism' },
      { id: 'L6.3', title: 'Legal & Bureaucratic Spanish', subtitle: 'Contracts, Procedures & Rights' },
      { id: 'L6.4', title: 'Slang & Language Evolution', subtitle: 'Neologisms, Anglicisms & Digital Spanish' },
      { id: 'L6.5', title: 'Translation & Interpretation', subtitle: 'False Friends & Untranslatable Words' },
      { id: 'L6.6', title: 'Philosophy & Abstract Thought', subtitle: 'Ethics, Logic & Existential Concepts' },
      { id: 'L6.7', title: 'History of Spanish', subtitle: 'Latin, Arabic & Modern Evolution' },
      { id: 'L6.8', title: 'Public Speaking & Rhetoric', subtitle: 'Persuasion, Speeches & Oratory' },
    ],
  },
  {
    num: 7, title: 'Level 7 — Native Fluency', subtitle: '8 lessons to think, create, and express like a native speaker',
    color: 'text-teal-600', hoverBorder: 'hover:border-teal-300',
    gradientFrom: 'from-teal-50', gradientTo: 'to-emerald-50', darkFrom: 'dark:from-teal-950', darkTo: 'dark:to-emerald-950',
    borderColor: 'border-teal-200', darkBorder: 'dark:border-teal-800', accentColor: 'text-teal-600',
    emoji: '🌟', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L7.1', title: 'Dialectology & Sociolinguistics', subtitle: 'Regional Varieties & Code-Switching' },
      { id: 'L7.2', title: 'Humor & Wordplay', subtitle: 'Puns, Albur & Sarcasm' },
      { id: 'L7.3', title: 'Media Literacy', subtitle: 'Bias Detection & Critical Analysis' },
      { id: 'L7.4', title: 'Scientific Spanish', subtitle: 'Research, Environment & Technical Writing' },
      { id: 'L7.5', title: 'Psychology & Emotions', subtitle: 'Emotional Intelligence & Self-Reflection' },
      { id: 'L7.6', title: 'Diplomacy & Resolution', subtitle: 'Negotiation, Mediation & Peace' },
      { id: 'L7.7', title: 'Creative Writing', subtitle: 'Narrative Techniques & Storytelling' },
      { id: 'L7.8', title: 'Identity & Migration', subtitle: 'Belonging, Diaspora & Social Justice' },
    ],
  },
  {
    num: 8, title: 'Level 8 — Specialization', subtitle: '8 specialized lessons for professional and academic Spanish',
    color: 'text-orange-600', hoverBorder: 'hover:border-orange-300',
    gradientFrom: 'from-orange-50', gradientTo: 'to-red-50', darkFrom: 'dark:from-orange-950', darkTo: 'dark:to-red-950',
    borderColor: 'border-orange-200', darkBorder: 'dark:border-orange-800', accentColor: 'text-orange-600',
    emoji: '🔬', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L8.1', title: 'Medical Spanish', subtitle: 'Anatomy, Diagnosis & Patient Care' },
      { id: 'L8.2', title: 'Economics & Business', subtitle: 'Markets, Strategy & Startups' },
      { id: 'L8.3', title: 'Technology & Engineering', subtitle: 'Software, AI & Cybersecurity' },
      { id: 'L8.4', title: 'Gastronomy & Culinary Arts', subtitle: 'Techniques, Cuisines & Criticism' },
      { id: 'L8.5', title: 'Sports Commentary', subtitle: 'Live Narration & Fan Culture' },
      { id: 'L8.6', title: 'Music & Performing Arts', subtitle: 'Genres, Dance & Theater' },
      { id: 'L8.7', title: 'Politics & Governance', subtitle: 'Elections, Policy & Civic Life' },
      { id: 'L8.8', title: 'Education & Pedagogy', subtitle: 'Teaching Methods & Curriculum' },
    ],
  },
  {
    num: 9, title: 'Level 9 — Cultural Immersion', subtitle: '8 lessons to explore culture, industry, and society',
    color: 'text-violet-600', hoverBorder: 'hover:border-violet-300',
    gradientFrom: 'from-violet-50', gradientTo: 'to-purple-50', darkFrom: 'dark:from-violet-950', darkTo: 'dark:to-purple-950',
    borderColor: 'border-violet-200', darkBorder: 'dark:border-violet-800', accentColor: 'text-violet-600',
    emoji: '🎯', examLabel: 'FINAL ASSESSMENT', examDesc: '25 questions from all 8 lessons. Score 70% to earn your badge!',
    lessons: [
      { id: 'L9.1', title: 'Architecture & Urban Planning', subtitle: 'Styles, Construction & Sustainability' },
      { id: 'L9.2', title: 'Fashion & Design', subtitle: 'Textiles, Runway & Sustainable Fashion' },
      { id: 'L9.3', title: 'Agriculture & Rural Life', subtitle: 'Farming, Livestock & Rural Customs' },
      { id: 'L9.4', title: 'Tourism & Hospitality', subtitle: 'Hotels, Tours & Event Planning' },
      { id: 'L9.5', title: 'Investigative Journalism', subtitle: 'Sources, Ethics & Digital Media' },
      { id: 'L9.6', title: 'Digital Marketing', subtitle: 'Social Media, SEO & Analytics' },
      { id: 'L9.7', title: 'Religion & Spirituality', subtitle: 'Faith, Pilgrimages & Traditions' },
      { id: 'L9.8', title: 'Entrepreneurship', subtitle: 'Startups, Funding & Social Impact' },
    ],
  },
  {
    num: 10, title: 'Level 10 — Capstone', subtitle: 'The final 2 lessons — complete mastery and celebration',
    color: 'text-amber-600', hoverBorder: 'hover:border-amber-300',
    gradientFrom: 'from-amber-50', gradientTo: 'to-rose-50', darkFrom: 'dark:from-amber-950', darkTo: 'dark:to-rose-950',
    borderColor: 'border-amber-200', darkBorder: 'dark:border-amber-800', accentColor: 'text-amber-600',
    emoji: '👑', examLabel: 'ULTIMATE ASSESSMENT', examDesc: '20 questions across all levels. Score 70% to become a Spanish Master!',
    lessons: [
      { id: 'L10.1', title: 'The Art of Conversation', subtitle: 'Turn-Taking, Listening & Social Mastery' },
      { id: 'L10.2', title: 'Your Spanish Journey', subtitle: 'Comprehensive Review & Celebration' },
    ],
  },
]

function LockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

function ProgressBadge({ progress }: { progress?: ProgressMap[string] }) {
  if (!progress || progress.progressPct === 0) return null

  const pct = progress.progressPct
  const isComplete = pct === 100

  if (isComplete) {
    return (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        {progress.quizScore != null && progress.quizMax != null && (
          <span className="text-xs font-semibold text-green-600 dark:text-green-400">
            {Math.round((progress.quizScore / progress.quizMax) * 100)}%
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 flex-1">
      <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{pct}%</span>
    </div>
  )
}

function LessonCard({ lesson, color, hoverBorder, locked, progress }: { lesson: Lesson; color: string; hoverBorder: string; locked: boolean; progress?: ProgressMap[string] }) {
  if (locked) {
    return (
      <Link href="/#pricing" className="block group">
        <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
          <div className="relative">
            <Image src={lessonImage(lesson.id)} alt={lesson.title} width={400} height={200} className="h-32 w-full object-cover opacity-50 grayscale" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                <LockIcon />
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-gray-400">{lesson.id}</div>
              <span className="text-xs font-bold text-purple-700 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-300 px-2 py-0.5 rounded-full">Premium</span>
            </div>
            <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500 dark:text-gray-400">
              {lesson.title}
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">{lesson.subtitle}</p>
          </div>
        </div>
      </Link>
    )
  }

  const isComplete = progress && progress.progressPct === 100

  return (
    <Link href={`/courses/${lesson.id}`} className="block group">
      <div className={`overflow-hidden bg-white dark:bg-gray-800 rounded-2xl border ${isComplete ? 'border-green-300 dark:border-green-700' : 'border-gray-200 dark:border-gray-700'} shadow-sm hover:shadow-md ${hoverBorder} transition-all`}>
        <div className="relative">
          <Image src={lessonImage(lesson.id)} alt={lesson.title} width={400} height={200} className="h-32 w-full object-cover" />
          {isComplete && (
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <div className={`text-xs font-semibold ${color}`}>{lesson.id}</div>
            <ProgressBadge progress={progress} />
          </div>
          <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-blue-700 transition-colors">
            {lesson.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

function ExamCard({ level, locked, progress }: { level: typeof LEVELS[number]; locked: boolean; progress?: ProgressMap[string] }) {
  const examId = `L${level.num}.F`

  if (locked) {
    return (
      <Link href="/#pricing" className="block group">
        <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 opacity-60">
          <div className="flex items-center gap-4">
            <div className="text-4xl opacity-50">{level.emoji}</div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-gray-400 mb-1">{level.examLabel}</div>
              <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                Level {level.num} — Final Exam
              </h3>
              <p className="text-gray-400 text-sm mt-1">{level.examDesc}</p>
            </div>
            <span className="text-xs font-bold text-purple-700 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-300 px-3 py-1 rounded-full">Premium</span>
          </div>
        </div>
      </Link>
    )
  }

  const passed = progress?.quizPassed
  const score = progress?.quizScore != null && progress?.quizMax != null
    ? Math.round((progress.quizScore / progress.quizMax) * 100)
    : null

  return (
    <Link href={`/courses/${examId}`} className="block group">
      <div className={`bg-gradient-to-r ${level.gradientFrom} ${level.gradientTo} ${level.darkFrom} ${level.darkTo} rounded-2xl border-2 ${passed ? 'border-green-400 dark:border-green-600' : `${level.borderColor} ${level.darkBorder}`} p-6 shadow-sm hover:shadow-md transition-all`}>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{level.emoji}</span>
          <div className="flex-1">
            <div className={`text-xs font-semibold ${level.accentColor} mb-1`}>{level.examLabel}</div>
            <h3 className={`font-bold text-lg font-[family-name:var(--font-inter)] group-hover:${level.accentColor} transition-colors`}>
              Level {level.num} — {level.num === 10 ? 'Ultimate Exam' : 'Final Exam'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{level.examDesc}</p>
          </div>
          {score != null && (
            <div className={`flex flex-col items-center gap-1 ${passed ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
              <span className="text-2xl font-bold">{score}%</span>
              <span className="text-xs font-semibold">{passed ? 'Passed' : 'Try Again'}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default async function CoursesPage() {
  const user = await currentUser()
  const userPlan = (user?.publicMetadata?.plan as PlanKey) || 'free'

  // Fetch all progress for this user
  let progressMap: ProgressMap = {}
  let lastAccessedLesson: { lessonId: string; progressPct: number } | null = null
  if (user?.id) {
    try {
      const rows = await prisma.lessonProgress.findMany({
        where: { userId: user.id },
        select: { lessonId: true, progressPct: true, quizScore: true, quizMax: true, quizPassed: true, lastAccess: true },
        orderBy: { lastAccess: 'desc' },
      })
      for (const r of rows) {
        progressMap[r.lessonId] = {
          progressPct: r.progressPct,
          quizScore: r.quizScore,
          quizMax: r.quizMax,
          quizPassed: r.quizPassed,
        }
      }
      // Find last accessed lesson that isn't 100% complete
      const inProgress = rows.find(r => r.progressPct > 0 && r.progressPct < 100)
      if (inProgress) {
        lastAccessedLesson = { lessonId: inProgress.lessonId, progressPct: inProgress.progressPct }
      }
    } catch {
      // DB unavailable — show page without progress indicators
    }
  }

  // Look up lesson title for continue banner
  const allLessons = LEVELS.flatMap(l => l.lessons)
  const continueLesson = lastAccessedLesson
    ? allLessons.find(l => l.id === lastAccessedLesson!.lessonId)
    : null

  // Calculate overall stats
  const totalCompleted = Object.values(progressMap).filter(p => p.progressPct === 100).length
  const totalInProgress = Object.values(progressMap).filter(p => p.progressPct > 0 && p.progressPct < 100).length

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Continue banner */}
      {continueLesson && lastAccessedLesson && (
        <Link href={`/courses/${lastAccessedLesson.lessonId}`} className="block mb-8 group">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-2xl border border-blue-200 dark:border-blue-800 p-5 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-md">
                {lastAccessedLesson.progressPct}%
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Continue where you left off</p>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  {lastAccessedLesson.lessonId} — {continueLesson.title}
                </h3>
              </div>
              <svg className="w-6 h-6 text-blue-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </Link>
      )}

      {/* Progress summary */}
      {totalCompleted > 0 && (
        <div className="flex items-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-green-600 dark:text-green-400">{totalCompleted} completed</span>
          {totalInProgress > 0 && <span>{totalInProgress} in progress</span>}
          <span>of 84 lessons</span>
        </div>
      )}
      {LEVELS.map((level) => {
        const levelLocked = !canAccessLesson(`L${level.num}.1`, userPlan)

        const completedLessons = level.lessons.filter(l => progressMap[l.id]?.progressPct === 100).length
        const totalLessons = level.lessons.length
        const levelProgress = !levelLocked && completedLessons > 0

        return (
          <div key={level.num}>
            {/* Level header */}
            <div className={level.num === 1 ? 'mb-8' : 'mt-16 mb-8'}>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">{level.title}</h1>
                {levelLocked && (
                  <span className="text-xs font-bold text-purple-700 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-300 px-3 py-1 rounded-full flex items-center gap-1">
                    <LockIcon /> Premium
                  </span>
                )}
                {levelProgress && (
                  <span className={`text-xs font-bold ${completedLessons === totalLessons ? 'text-green-700 bg-green-100 dark:bg-green-900/50 dark:text-green-300' : 'text-blue-700 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300'} px-3 py-1 rounded-full`}>
                    {completedLessons === totalLessons ? `${totalLessons}/${totalLessons} Complete` : `${completedLessons}/${totalLessons} lessons`}
                  </span>
                )}
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{level.subtitle}</p>
            </div>

            {/* Lesson cards */}
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}>
              {level.lessons.map((lesson) => (
                <div key={lesson.id} className="relative">
                  <LessonCard
                    lesson={lesson}
                    color={level.color}
                    hoverBorder={level.hoverBorder}
                    locked={levelLocked}
                    progress={progressMap[lesson.id]}
                  />
                </div>
              ))}
            </div>

            {/* Final exam */}
            <div className="mt-10">
              <ExamCard level={level} locked={levelLocked} progress={progressMap[`L${level.num}.F`]} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
