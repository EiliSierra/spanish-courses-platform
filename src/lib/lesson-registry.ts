import type { LessonData, PhraseData } from '@/lib/types/lesson'
import type { ExamQuestion } from '@/lib/lessons/L1.F'

// Lazy-loaded lesson entry: only downloaded when the user navigates to it
export type LessonEntry = {
  type: 'lesson'
  load: () => Promise<{ data: LessonData; phraseByAudio: Record<string, PhraseData> }>
}

export type ExamConfig = {
  totalQuestions: number
  passingScore: number
  title: string
  subtitle: string
  description: string
  badgeEmoji: string
  badgeName: string
}

export type ExamEntry = {
  type: 'exam'
  load: () => Promise<{ questions: ExamQuestion[]; config: ExamConfig }>
}

export type RegistryEntry = LessonEntry | ExamEntry

// Helper to create a lesson entry
function lesson(
  loader: () => Promise<{ data: LessonData; phraseByAudio: Record<string, PhraseData> }>
): LessonEntry {
  return { type: 'lesson', load: loader }
}

// Helper to create an exam entry
function exam(
  loader: () => Promise<{ questions: ExamQuestion[]; config: ExamConfig }>
): ExamEntry {
  return { type: 'exam', load: loader }
}

export function getNextLessonId(currentId: string): string | null {
  const match = currentId.match(/^L(\d+)\.(\d+|F)$/)
  if (!match) return null
  const level = Number(match[1])
  const part = match[2]

  let candidate: string | null = null
  if (part === 'F') {
    candidate = `L${level + 1}.1`
  } else {
    const n = Number(part)
    candidate = n < 8 ? `L${level}.${n + 1}` : `L${level}.F`
  }
  return candidate && LESSON_REGISTRY[candidate] ? candidate : null
}

export const LESSON_REGISTRY: Record<string, RegistryEntry> = {
  // Level 1
  'L1.1': lesson(() => import('@/lib/lessons/L1.1').then(m => ({ data: m.L11Data, phraseByAudio: m.L11PhraseByAudio }))),
  'L1.2': lesson(() => import('@/lib/lessons/L1.2').then(m => ({ data: m.L12Data, phraseByAudio: m.L12PhraseByAudio }))),
  'L1.3': lesson(() => import('@/lib/lessons/L1.3').then(m => ({ data: m.L13Data, phraseByAudio: m.L13PhraseByAudio }))),
  'L1.4': lesson(() => import('@/lib/lessons/L1.4').then(m => ({ data: m.L14Data, phraseByAudio: m.L14PhraseByAudio }))),
  'L1.5': lesson(() => import('@/lib/lessons/L1.5').then(m => ({ data: m.L15Data, phraseByAudio: m.L15PhraseByAudio }))),
  'L1.6': lesson(() => import('@/lib/lessons/L1.6').then(m => ({ data: m.L16Data, phraseByAudio: m.L16PhraseByAudio }))),
  'L1.7': lesson(() => import('@/lib/lessons/L1.7').then(m => ({ data: m.L17Data, phraseByAudio: m.L17PhraseByAudio }))),
  'L1.8': lesson(() => import('@/lib/lessons/L1.8').then(m => ({ data: m.L18Data, phraseByAudio: m.L18PhraseByAudio }))),
  'L1.F': exam(() => import('@/lib/lessons/L1.F').then(m => ({ questions: m.L1F_QUESTION_POOL, config: m.L1F_CONFIG }))),

  // Level 2
  'L2.1': lesson(() => import('@/lib/lessons/L2.1').then(m => ({ data: m.L21Data, phraseByAudio: m.L21PhraseByAudio }))),
  'L2.2': lesson(() => import('@/lib/lessons/L2.2').then(m => ({ data: m.L22Data, phraseByAudio: m.L22PhraseByAudio }))),
  'L2.3': lesson(() => import('@/lib/lessons/L2.3').then(m => ({ data: m.L23Data, phraseByAudio: m.L23PhraseByAudio }))),
  'L2.4': lesson(() => import('@/lib/lessons/L2.4').then(m => ({ data: m.L24Data, phraseByAudio: m.L24PhraseByAudio }))),
  'L2.5': lesson(() => import('@/lib/lessons/L2.5').then(m => ({ data: m.L25Data, phraseByAudio: m.L25PhraseByAudio }))),
  'L2.6': lesson(() => import('@/lib/lessons/L2.6').then(m => ({ data: m.L26Data, phraseByAudio: m.L26PhraseByAudio }))),
  'L2.7': lesson(() => import('@/lib/lessons/L2.7').then(m => ({ data: m.L27Data, phraseByAudio: m.L27PhraseByAudio }))),
  'L2.8': lesson(() => import('@/lib/lessons/L2.8').then(m => ({ data: m.L28Data, phraseByAudio: m.L28PhraseByAudio }))),
  'L2.F': exam(() => import('@/lib/lessons/L2.F').then(m => ({ questions: m.L2F_QUESTION_POOL, config: m.L2F_CONFIG }))),

  // Level 3
  'L3.1': lesson(() => import('@/lib/lessons/L3.1').then(m => ({ data: m.L31Data, phraseByAudio: m.L31PhraseByAudio }))),
  'L3.2': lesson(() => import('@/lib/lessons/L3.2').then(m => ({ data: m.L32Data, phraseByAudio: m.L32PhraseByAudio }))),
  'L3.3': lesson(() => import('@/lib/lessons/L3.3').then(m => ({ data: m.L33Data, phraseByAudio: m.L33PhraseByAudio }))),
  'L3.4': lesson(() => import('@/lib/lessons/L3.4').then(m => ({ data: m.L34Data, phraseByAudio: m.L34PhraseByAudio }))),
  'L3.5': lesson(() => import('@/lib/lessons/L3.5').then(m => ({ data: m.L35Data, phraseByAudio: m.L35PhraseByAudio }))),
  'L3.6': lesson(() => import('@/lib/lessons/L3.6').then(m => ({ data: m.L36Data, phraseByAudio: m.L36PhraseByAudio }))),
  'L3.7': lesson(() => import('@/lib/lessons/L3.7').then(m => ({ data: m.L37Data, phraseByAudio: m.L37PhraseByAudio }))),
  'L3.8': lesson(() => import('@/lib/lessons/L3.8').then(m => ({ data: m.L38Data, phraseByAudio: m.L38PhraseByAudio }))),
  'L3.F': exam(() => import('@/lib/lessons/L3.F').then(m => ({ questions: m.L3F_QUESTION_POOL, config: m.L3F_CONFIG }))),

  // Level 4
  'L4.1': lesson(() => import('@/lib/lessons/L4.1').then(m => ({ data: m.L41Data, phraseByAudio: m.L41PhraseByAudio }))),
  'L4.2': lesson(() => import('@/lib/lessons/L4.2').then(m => ({ data: m.L42Data, phraseByAudio: m.L42PhraseByAudio }))),
  'L4.3': lesson(() => import('@/lib/lessons/L4.3').then(m => ({ data: m.L43Data, phraseByAudio: m.L43PhraseByAudio }))),
  'L4.4': lesson(() => import('@/lib/lessons/L4.4').then(m => ({ data: m.L44Data, phraseByAudio: m.L44PhraseByAudio }))),
  'L4.5': lesson(() => import('@/lib/lessons/L4.5').then(m => ({ data: m.L45Data, phraseByAudio: m.L45PhraseByAudio }))),
  'L4.6': lesson(() => import('@/lib/lessons/L4.6').then(m => ({ data: m.L46Data, phraseByAudio: m.L46PhraseByAudio }))),
  'L4.7': lesson(() => import('@/lib/lessons/L4.7').then(m => ({ data: m.L47Data, phraseByAudio: m.L47PhraseByAudio }))),
  'L4.8': lesson(() => import('@/lib/lessons/L4.8').then(m => ({ data: m.L48Data, phraseByAudio: m.L48PhraseByAudio }))),
  'L4.F': exam(() => import('@/lib/lessons/L4.F').then(m => ({ questions: m.L4F_QUESTION_POOL, config: m.L4F_CONFIG }))),

  // Level 5
  'L5.1': lesson(() => import('@/lib/lessons/L5.1').then(m => ({ data: m.L51Data, phraseByAudio: m.L51PhraseByAudio }))),
  'L5.2': lesson(() => import('@/lib/lessons/L5.2').then(m => ({ data: m.L52Data, phraseByAudio: m.L52PhraseByAudio }))),
  'L5.3': lesson(() => import('@/lib/lessons/L5.3').then(m => ({ data: m.L53Data, phraseByAudio: m.L53PhraseByAudio }))),
  'L5.4': lesson(() => import('@/lib/lessons/L5.4').then(m => ({ data: m.L54Data, phraseByAudio: m.L54PhraseByAudio }))),
  'L5.5': lesson(() => import('@/lib/lessons/L5.5').then(m => ({ data: m.L55Data, phraseByAudio: m.L55PhraseByAudio }))),
  'L5.6': lesson(() => import('@/lib/lessons/L5.6').then(m => ({ data: m.L56Data, phraseByAudio: m.L56PhraseByAudio }))),
  'L5.7': lesson(() => import('@/lib/lessons/L5.7').then(m => ({ data: m.L57Data, phraseByAudio: m.L57PhraseByAudio }))),
  'L5.8': lesson(() => import('@/lib/lessons/L5.8').then(m => ({ data: m.L58Data, phraseByAudio: m.L58PhraseByAudio }))),
  'L5.F': exam(() => import('@/lib/lessons/L5.F').then(m => ({ questions: m.L5F_QUESTION_POOL, config: m.L5F_CONFIG }))),

  // Level 6
  'L6.1': lesson(() => import('@/lib/lessons/L6.1').then(m => ({ data: m.L61Data, phraseByAudio: m.L61PhraseByAudio }))),
  'L6.2': lesson(() => import('@/lib/lessons/L6.2').then(m => ({ data: m.L62Data, phraseByAudio: m.L62PhraseByAudio }))),
  'L6.3': lesson(() => import('@/lib/lessons/L6.3').then(m => ({ data: m.L63Data, phraseByAudio: m.L63PhraseByAudio }))),
  'L6.4': lesson(() => import('@/lib/lessons/L6.4').then(m => ({ data: m.L64Data, phraseByAudio: m.L64PhraseByAudio }))),
  'L6.5': lesson(() => import('@/lib/lessons/L6.5').then(m => ({ data: m.L65Data, phraseByAudio: m.L65PhraseByAudio }))),
  'L6.6': lesson(() => import('@/lib/lessons/L6.6').then(m => ({ data: m.L66Data, phraseByAudio: m.L66PhraseByAudio }))),
  'L6.7': lesson(() => import('@/lib/lessons/L6.7').then(m => ({ data: m.L67Data, phraseByAudio: m.L67PhraseByAudio }))),
  'L6.8': lesson(() => import('@/lib/lessons/L6.8').then(m => ({ data: m.L68Data, phraseByAudio: m.L68PhraseByAudio }))),
  'L6.F': exam(() => import('@/lib/lessons/L6.F').then(m => ({ questions: m.L6F_QUESTION_POOL, config: m.L6F_CONFIG }))),

  // Level 7
  'L7.1': lesson(() => import('@/lib/lessons/L7.1').then(m => ({ data: m.L71Data, phraseByAudio: m.L71PhraseByAudio }))),
  'L7.2': lesson(() => import('@/lib/lessons/L7.2').then(m => ({ data: m.L72Data, phraseByAudio: m.L72PhraseByAudio }))),
  'L7.3': lesson(() => import('@/lib/lessons/L7.3').then(m => ({ data: m.L73Data, phraseByAudio: m.L73PhraseByAudio }))),
  'L7.4': lesson(() => import('@/lib/lessons/L7.4').then(m => ({ data: m.L74Data, phraseByAudio: m.L74PhraseByAudio }))),
  'L7.5': lesson(() => import('@/lib/lessons/L7.5').then(m => ({ data: m.L75Data, phraseByAudio: m.L75PhraseByAudio }))),
  'L7.6': lesson(() => import('@/lib/lessons/L7.6').then(m => ({ data: m.L76Data, phraseByAudio: m.L76PhraseByAudio }))),
  'L7.7': lesson(() => import('@/lib/lessons/L7.7').then(m => ({ data: m.L77Data, phraseByAudio: m.L77PhraseByAudio }))),
  'L7.8': lesson(() => import('@/lib/lessons/L7.8').then(m => ({ data: m.L78Data, phraseByAudio: m.L78PhraseByAudio }))),
  'L7.F': exam(() => import('@/lib/lessons/L7.F').then(m => ({ questions: m.L7F_QUESTION_POOL, config: m.L7F_CONFIG }))),

  // Level 8
  'L8.1': lesson(() => import('@/lib/lessons/L8.1').then(m => ({ data: m.L81Data, phraseByAudio: m.L81PhraseByAudio }))),
  'L8.2': lesson(() => import('@/lib/lessons/L8.2').then(m => ({ data: m.L82Data, phraseByAudio: m.L82PhraseByAudio }))),
  'L8.3': lesson(() => import('@/lib/lessons/L8.3').then(m => ({ data: m.L83Data, phraseByAudio: m.L83PhraseByAudio }))),
  'L8.4': lesson(() => import('@/lib/lessons/L8.4').then(m => ({ data: m.L84Data, phraseByAudio: m.L84PhraseByAudio }))),
  'L8.5': lesson(() => import('@/lib/lessons/L8.5').then(m => ({ data: m.L85Data, phraseByAudio: m.L85PhraseByAudio }))),
  'L8.6': lesson(() => import('@/lib/lessons/L8.6').then(m => ({ data: m.L86Data, phraseByAudio: m.L86PhraseByAudio }))),
  'L8.7': lesson(() => import('@/lib/lessons/L8.7').then(m => ({ data: m.L87Data, phraseByAudio: m.L87PhraseByAudio }))),
  'L8.8': lesson(() => import('@/lib/lessons/L8.8').then(m => ({ data: m.L88Data, phraseByAudio: m.L88PhraseByAudio }))),
  'L8.F': exam(() => import('@/lib/lessons/L8.F').then(m => ({ questions: m.L8F_QUESTION_POOL, config: m.L8F_CONFIG }))),

  // Level 9
  'L9.1': lesson(() => import('@/lib/lessons/L9.1').then(m => ({ data: m.L91Data, phraseByAudio: m.L91PhraseByAudio }))),
  'L9.2': lesson(() => import('@/lib/lessons/L9.2').then(m => ({ data: m.L92Data, phraseByAudio: m.L92PhraseByAudio }))),
  'L9.3': lesson(() => import('@/lib/lessons/L9.3').then(m => ({ data: m.L93Data, phraseByAudio: m.L93PhraseByAudio }))),
  'L9.4': lesson(() => import('@/lib/lessons/L9.4').then(m => ({ data: m.L94Data, phraseByAudio: m.L94PhraseByAudio }))),
  'L9.5': lesson(() => import('@/lib/lessons/L9.5').then(m => ({ data: m.L95Data, phraseByAudio: m.L95PhraseByAudio }))),
  'L9.6': lesson(() => import('@/lib/lessons/L9.6').then(m => ({ data: m.L96Data, phraseByAudio: m.L96PhraseByAudio }))),
  'L9.7': lesson(() => import('@/lib/lessons/L9.7').then(m => ({ data: m.L97Data, phraseByAudio: m.L97PhraseByAudio }))),
  'L9.8': lesson(() => import('@/lib/lessons/L9.8').then(m => ({ data: m.L98Data, phraseByAudio: m.L98PhraseByAudio }))),
  'L9.F': exam(() => import('@/lib/lessons/L9.F').then(m => ({ questions: m.L9F_QUESTION_POOL, config: m.L9F_CONFIG }))),

  // Level 10
  'L10.1': lesson(() => import('@/lib/lessons/L10.1').then(m => ({ data: m.L101Data, phraseByAudio: m.L101PhraseByAudio }))),
  'L10.2': lesson(() => import('@/lib/lessons/L10.2').then(m => ({ data: m.L102Data, phraseByAudio: m.L102PhraseByAudio }))),
  'L10.F': exam(() => import('@/lib/lessons/L10.F').then(m => ({ questions: m.L10F_QUESTION_POOL, config: m.L10F_CONFIG }))),
}
