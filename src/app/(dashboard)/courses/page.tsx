import Link from 'next/link'

export const dynamic = 'force-dynamic'

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
  { id: 'L2.4', title: 'At the Hotel', subtitle: 'Check-in, Rooms & Services', available: true },
  { id: 'L2.5', title: 'At the Airport', subtitle: 'Flights, Check-in & Boarding', available: true },
  { id: 'L2.6', title: 'Shopping & Clothing', subtitle: 'Clothes, Colors & Buying Things', available: true },
  { id: 'L2.7', title: 'Describing People', subtitle: 'Appearance, Personality & Feelings', available: true },
  { id: 'L2.8', title: 'Work & Professions', subtitle: 'Jobs, Workplace & Career', available: true },
]

const LEVEL3_LESSONS = [
  { id: 'L3.1', title: 'Past Tense — Pretérito', subtitle: 'Telling Stories About What Happened', available: true },
  { id: 'L3.2', title: 'Home & Housing', subtitle: 'Rooms, Furniture & Renting', available: true },
  { id: 'L3.3', title: 'Technology & Social Media', subtitle: 'Phones, Apps & Internet', available: true },
  { id: 'L3.4', title: 'Cooking & Recipes', subtitle: 'Ingredients, Kitchen & Instructions', available: true },
  { id: 'L3.5', title: 'Sports & Hobbies', subtitle: 'Activities, Preferences & Frequency', available: true },
  { id: 'L3.6', title: 'Environment & Nature', subtitle: 'Animals, Geography & Eco-Actions', available: true },
  { id: 'L3.7', title: 'Celebrations & Traditions', subtitle: 'Holidays, Parties & Customs', available: true },
  { id: 'L3.8', title: 'Travel Stories', subtitle: 'Sharing Experiences & Recommendations', available: true },
]

const LEVEL4_LESSONS = [
  { id: 'L4.1', title: 'Imperfect Tense', subtitle: 'How Things Used to Be', available: true },
  { id: 'L4.2', title: 'Subjunctive Mood', subtitle: 'Wishes, Doubts & Recommendations', available: true },
  { id: 'L4.3', title: 'Formal vs Informal', subtitle: 'Tú, Usted & Vos', available: true },
  { id: 'L4.4', title: 'News & Current Events', subtitle: 'Media, Headlines & Opinions', available: true },
  { id: 'L4.5', title: 'Health & Wellness', subtitle: 'Lifestyle, Mental Health & Habits', available: true },
  { id: 'L4.6', title: 'Banking & Finance', subtitle: 'Money, Bills & Accounts', available: true },
  { id: 'L4.7', title: 'Arts & Entertainment', subtitle: 'Music, Movies & Books', available: true },
  { id: 'L4.8', title: 'Future Plans & Dreams', subtitle: 'Goals, Conditional & Aspirations', available: true },
]

const LEVEL5_LESSONS = [
  { id: 'L5.1', title: 'Past Perfect & Sequencing', subtitle: 'What Had Happened Before', available: true },
  { id: 'L5.2', title: 'Advanced Subjunctive', subtitle: 'Wishes, Doubts & Counterfactuals', available: true },
  { id: 'L5.3', title: 'Passive Voice & Impersonal', subtitle: 'Se Constructions & Formal Register', available: true },
  { id: 'L5.4', title: 'Discourse Markers', subtitle: 'Argumentation & Academic Connectors', available: true },
  { id: 'L5.5', title: 'Professional Spanish', subtitle: 'Emails, Meetings & Presentations', available: true },
  { id: 'L5.6', title: 'Idioms & Proverbs', subtitle: 'Figurative Language & Refranes', available: true },
  { id: 'L5.7', title: 'Academic Spanish', subtitle: 'Reported Speech & Literary Analysis', available: true },
  { id: 'L5.8', title: 'Nuanced Expression', subtitle: 'Tone, Irony & Regional Variation', available: true },
]

const LEVEL6_LESSONS = [
  { id: 'L6.1', title: 'Complex Sentence Architecture', subtitle: 'Relative Clauses & Subordination', available: true },
  { id: 'L6.2', title: 'Literary & Poetic Language', subtitle: 'Devices, Movements & Criticism', available: true },
  { id: 'L6.3', title: 'Legal & Bureaucratic Spanish', subtitle: 'Contracts, Procedures & Rights', available: true },
  { id: 'L6.4', title: 'Slang & Language Evolution', subtitle: 'Neologisms, Anglicisms & Digital Spanish', available: true },
  { id: 'L6.5', title: 'Translation & Interpretation', subtitle: 'False Friends & Untranslatable Words', available: true },
  { id: 'L6.6', title: 'Philosophy & Abstract Thought', subtitle: 'Ethics, Logic & Existential Concepts', available: true },
  { id: 'L6.7', title: 'History of Spanish', subtitle: 'Latin, Arabic & Modern Evolution', available: true },
  { id: 'L6.8', title: 'Public Speaking & Rhetoric', subtitle: 'Persuasion, Speeches & Oratory', available: true },
]

const LEVEL7_LESSONS = [
  { id: 'L7.1', title: 'Dialectology & Sociolinguistics', subtitle: 'Regional Varieties & Code-Switching', available: true },
  { id: 'L7.2', title: 'Humor & Wordplay', subtitle: 'Puns, Albur & Sarcasm', available: true },
  { id: 'L7.3', title: 'Media Literacy', subtitle: 'Bias Detection & Critical Analysis', available: true },
  { id: 'L7.4', title: 'Scientific Spanish', subtitle: 'Research, Environment & Technical Writing', available: true },
  { id: 'L7.5', title: 'Psychology & Emotions', subtitle: 'Emotional Intelligence & Self-Reflection', available: true },
  { id: 'L7.6', title: 'Diplomacy & Resolution', subtitle: 'Negotiation, Mediation & Peace', available: true },
  { id: 'L7.7', title: 'Creative Writing', subtitle: 'Narrative Techniques & Storytelling', available: true },
  { id: 'L7.8', title: 'Identity & Migration', subtitle: 'Belonging, Diaspora & Social Justice', available: true },
]

const LEVEL8_LESSONS = [
  { id: 'L8.1', title: 'Medical Spanish', subtitle: 'Anatomy, Diagnosis & Patient Care', available: true },
  { id: 'L8.2', title: 'Economics & Business', subtitle: 'Markets, Strategy & Startups', available: true },
  { id: 'L8.3', title: 'Technology & Engineering', subtitle: 'Software, AI & Cybersecurity', available: true },
  { id: 'L8.4', title: 'Gastronomy & Culinary Arts', subtitle: 'Techniques, Cuisines & Criticism', available: true },
  { id: 'L8.5', title: 'Sports Commentary', subtitle: 'Live Narration & Fan Culture', available: true },
  { id: 'L8.6', title: 'Music & Performing Arts', subtitle: 'Genres, Dance & Theater', available: true },
  { id: 'L8.7', title: 'Politics & Governance', subtitle: 'Elections, Policy & Civic Life', available: true },
  { id: 'L8.8', title: 'Education & Pedagogy', subtitle: 'Teaching Methods & Curriculum', available: true },
]

const LEVEL9_LESSONS = [
  { id: 'L9.1', title: 'Architecture & Urban Planning', subtitle: 'Styles, Construction & Sustainability', available: true },
  { id: 'L9.2', title: 'Fashion & Design', subtitle: 'Textiles, Runway & Sustainable Fashion', available: true },
  { id: 'L9.3', title: 'Agriculture & Rural Life', subtitle: 'Farming, Livestock & Rural Customs', available: true },
  { id: 'L9.4', title: 'Tourism & Hospitality', subtitle: 'Hotels, Tours & Event Planning', available: true },
  { id: 'L9.5', title: 'Investigative Journalism', subtitle: 'Sources, Ethics & Digital Media', available: true },
  { id: 'L9.6', title: 'Digital Marketing', subtitle: 'Social Media, SEO & Analytics', available: true },
  { id: 'L9.7', title: 'Religion & Spirituality', subtitle: 'Faith, Pilgrimages & Traditions', available: true },
  { id: 'L9.8', title: 'Entrepreneurship', subtitle: 'Startups, Funding & Social Impact', available: true },
]

const LEVEL10_LESSONS = [
  { id: 'L10.1', title: 'The Art of Conversation', subtitle: 'Turn-Taking, Listening & Social Mastery', available: true },
  { id: 'L10.2', title: 'Your Spanish Journey', subtitle: 'Comprehensive Review & Celebration', available: true },
]

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 1 — Foundations</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons to build your Spanish base</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LESSONS.map((lesson, i) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                  <div className="text-xs font-semibold text-blue-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-blue-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L1.F" className="block group">
          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950 dark:to-violet-950 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 p-6 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏆</span>
              <div>
                <div className="text-xs font-semibold text-indigo-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-indigo-700 transition-colors">
                  Level 1 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 2 — Building Blocks */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 2 — Building Blocks</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons to expand your Spanish abilities</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL2_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-green-300 transition-all">
                  <div className="text-xs font-semibold text-green-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-green-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 2 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L2.F" className="block group">
          <div className="bg-gradient-to-r from-green-950 to-emerald-950 rounded-2xl border-2 border-green-800 p-6 shadow-sm hover:shadow-md hover:border-green-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎖️</span>
              <div>
                <div className="text-xs font-semibold text-green-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-green-700 transition-colors">
                  Level 2 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 3 — Intermediate Spanish */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 3 — Intermediate Spanish</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons to reach conversational fluency</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL3_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                  <div className="text-xs font-semibold text-amber-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-amber-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 3 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L3.F" className="block group">
          <div className="bg-gradient-to-r from-amber-950 to-orange-950 rounded-2xl border-2 border-amber-800 p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏅</span>
              <div>
                <div className="text-xs font-semibold text-amber-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-amber-700 transition-colors">
                  Level 3 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 4 — Upper-Intermediate */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 4 — Upper-Intermediate</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons to master complex Spanish grammar and real-world topics</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL4_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                  <div className="text-xs font-semibold text-purple-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-purple-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 4 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L4.F" className="block group">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 rounded-2xl border-2 border-purple-200 dark:border-purple-800 p-6 shadow-sm hover:shadow-md hover:border-purple-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">👑</span>
              <div>
                <div className="text-xs font-semibold text-purple-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-purple-700 transition-colors">
                  Level 4 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 5 — Advanced Spanish */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 5 — Advanced Spanish</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons to master complex grammar and real-world fluency</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL5_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-rose-300 transition-all">
                  <div className="text-xs font-semibold text-rose-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-rose-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 5 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L5.F" className="block group">
          <div className="bg-gradient-to-r from-rose-950 to-pink-950 rounded-2xl border-2 border-rose-800 p-6 shadow-sm hover:shadow-md hover:border-rose-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎓</span>
              <div>
                <div className="text-xs font-semibold text-rose-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-rose-700 transition-colors">
                  Level 5 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 6 — Mastery Spanish */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 6 — Mastery Spanish</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons to achieve full proficiency and cultural mastery</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL6_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all">
                  <div className="text-xs font-semibold text-cyan-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-cyan-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 6 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L6.F" className="block group">
          <div className="bg-gradient-to-r from-cyan-950 to-teal-950 rounded-2xl border-2 border-cyan-800 p-6 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">💎</span>
              <div>
                <div className="text-xs font-semibold text-cyan-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-cyan-700 transition-colors">
                  Level 6 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 7 — Native Fluency */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 7 — Native Fluency</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons to think, create, and express like a native speaker</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL7_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-teal-300 transition-all">
                  <div className="text-xs font-semibold text-teal-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-teal-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 7 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L7.F" className="block group">
          <div className="bg-gradient-to-r from-teal-950 to-emerald-950 rounded-2xl border-2 border-teal-800 p-6 shadow-sm hover:shadow-md hover:border-teal-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🌟</span>
              <div>
                <div className="text-xs font-semibold text-teal-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-teal-700 transition-colors">
                  Level 7 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 8 — Specialization */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 8 — Specialization</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons mastering real-world professional domains</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL8_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all">
                  <div className="text-xs font-semibold text-orange-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-orange-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 8 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L8.F" className="block group">
          <div className="bg-gradient-to-r from-orange-950 to-amber-950 rounded-2xl border-2 border-orange-800 p-6 shadow-sm hover:shadow-md hover:border-orange-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏅</span>
              <div>
                <div className="text-xs font-semibold text-orange-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-orange-700 transition-colors">
                  Level 8 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 9 — Cultural Immersion */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 9 — Cultural Immersion</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">8 lessons exploring specialized cultural and professional domains</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LEVEL9_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            {lesson.available ? (
              <Link href={`/courses/${lesson.id}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-violet-300 transition-all">
                  <div className="text-xs font-semibold text-violet-600 mb-2">{lesson.id}</div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-violet-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-60 cursor-not-allowed">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-500">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
                <span className="mt-3 inline-block text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Level 9 Final Assessment */}
      <div className="mt-10">
        <Link href="/courses/L9.F" className="block group">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950 rounded-2xl border-2 border-violet-200 dark:border-violet-800 p-6 shadow-sm hover:shadow-md hover:border-violet-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎯</span>
              <div>
                <div className="text-xs font-semibold text-violet-600 mb-1">FINAL ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-violet-700 transition-colors">
                  Level 9 — Final Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">25 questions from all 8 lessons. Score 70% to earn your badge!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Level 10 — Capstone */}
      <div className="mt-16 mb-8">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-inter)]">Level 10 — Capstone</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">The final 2 lessons — complete mastery and celebration</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {LEVEL10_LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative">
            <Link href={`/courses/${lesson.id}`} className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="text-xs font-semibold text-amber-600 mb-2">{lesson.id}</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-amber-700 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{lesson.subtitle}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Level 10 Ultimate Assessment */}
      <div className="mt-10">
        <Link href="/courses/L10.F" className="block group">
          <div className="bg-gradient-to-r from-amber-950 via-rose-950 to-purple-950 rounded-2xl border-2 border-amber-800 p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition-all">
            <div className="flex items-center gap-4">
              <span className="text-4xl">👑</span>
              <div>
                <div className="text-xs font-semibold text-amber-600 mb-1">ULTIMATE ASSESSMENT</div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] group-hover:text-amber-700 transition-colors">
                  Level 10 — Ultimate Exam
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">20 questions across all levels. Score 70% to become a Spanish Master!</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
