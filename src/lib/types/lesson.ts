// Universal lesson types — consumed by LessonShell and all engine components

export interface PhraseData {
  spanish: string
  english: string
  pronunciation: string
  category: string
  audio: string // filename without extension
}

export interface PhraseTab {
  label: string
  color: 'orange' | 'amber' | 'blue' | 'rose' | 'purple' | 'emerald' | 'teal'
  phrases: PhraseData[]
  columns?: number // grid cols override (default 3)
}

export interface PhraseSection {
  id: string
  title: string
  description: string
  tabs: PhraseTab[]
}

export interface FlashcardGroup {
  key: string
  label: string
  audioKeys: string[]
}

export interface MatchPair {
  left: string
  right: string
}

export interface SortItem {
  text: string
  bucket: string
}

export interface SortActivity {
  title: string
  instruction: string
  buckets: string[]
  items: SortItem[]
}

export interface DialogueAnnotation {
  phrase: string       // text to annotate in the line
  fromLesson: string   // e.g. "L1.2"
  note?: string        // optional tooltip text
}

export interface DialogueLine {
  speaker: string
  text: string
  audio: string
  annotations?: DialogueAnnotation[]
}

export interface Dialogue {
  id: string
  title: string
  location: string
  lines: DialogueLine[]
}

export interface CulturalNote {
  title: string
  content: string
}

export interface PronunciationTip {
  title: string
  content: string
  example: string
  reviewFrom?: string // e.g. "L1.1" — shows badge "Review from L1.1"
}

export interface QuizQuestion {
  id: number
  type: 'mc' | 'tf' | 'fill'
  text: string
  options?: string[]
  answer: number | boolean | string | string[]
}

export interface OrderChallengeRound {
  audio: string
  transcript: string
  correct: string
  options: string[]
}

export interface SectionDef {
  id: string
  label: string
}

export interface LessonHero {
  lessonId: string
  title: string
  subtitle: string
  description: string
  image: string
  gradient: string // tailwind gradient classes
  accentColor: string // e.g. 'amber-200'
}

export interface LessonObjective {
  icon: string
  title: string
  desc: string
}

export interface UniqueActivityDef {
  id: string
  sectionId: string
  sectionColor: string
  sectionBorder: string
}

export interface PriorKnowledgeItem {
  fromLesson: string  // e.g. "L1.1"
  label: string       // e.g. "Pronunciation Rules"
  detail: string      // e.g. "QU = 'kee' sound → now in 'quiero' (I want)"
}

export interface SectionTransition {
  afterSection: string  // section id after which to show the transition
  text: string          // narrative transition text
}

export interface PersonalizedVocab {
  spanish: string
  english: string
}

export interface PronunciationChallenge {
  spanish: string
  pronunciation: string // expected phonetic guide
  english: string
  audio: string // reference audio file
  tip?: string // specific tip for this phrase
}

export interface LessonData {
  id: string
  hero: LessonHero
  objectives: LessonObjective[]
  priorKnowledge?: PriorKnowledgeItem[]
  sectionTransitions?: SectionTransition[]
  personalizedVocab?: PersonalizedVocab[] // key words for AI personalization
  pronunciationChallenges?: PronunciationChallenge[] // phrases for AI pronunciation practice
  sections: SectionDef[]
  phraseSections: PhraseSection[]
  pronunciationTips: PronunciationTip[]
  flashcardGroups: FlashcardGroup[]
  matchPairs: MatchPair[]
  matchLabels: { left: string; right: string }
  sortActivities: SortActivity[]
  sortSectionId: string
  sortTitle: string
  dialogues: Dialogue[]
  dialogueDescription: string
  culturalNotes: CulturalNote[]
  culturalGradient: string
  quiz: QuizQuestion[]
  audioBase: string // e.g. '/audio/L1.4/phrases'
  uniqueActivity?: UniqueActivityDef
  // Section color map for the shell
  sectionColors: Record<string, { bg: string; border: string }>
}
