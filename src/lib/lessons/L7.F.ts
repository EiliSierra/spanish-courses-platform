// Level 7 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L7.1–L7.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 7 badge.

import type { ExamQuestion } from './L4.F'
export type { ExamQuestion }

export const L7F_QUESTION_POOL: ExamQuestion[] = [
  // === L7.1 (6 questions) ===
  { id: 1, type: 'mc', text: '"El matiz semántico" refers to:', options: ['A grammar rule', 'A subtle shade of meaning', 'A verb tense', 'A pronunciation guide'], answer: 1, fromLesson: 'L7.1', topic: 'Semantic Nuance' },
  { id: 2, type: 'fill', text: 'Complete: "La ___ del lenguaje permite expresar ideas con máxima precisión" (subtlety)', answer: 'sutileza', fromLesson: 'L7.1', topic: 'Precision' },
  { id: 3, type: 'mc', text: '"Connotar" vs. "denotar" — connotation refers to:', options: ['The literal meaning', 'The dictionary definition', 'The emotional or cultural associations', 'The pronunciation'], answer: 2, fromLesson: 'L7.1', topic: 'Connotation' },
  { id: 4, type: 'tf', text: 'At the C2 level, a speaker can understand virtually everything heard or read with ease.', answer: true, fromLesson: 'L7.1', topic: 'C2 Proficiency' },
  { id: 5, type: 'mc', text: '"El eufemismo" is used to:', options: ['Exaggerate a point', 'Soften or substitute a harsh expression', 'Create humor', 'Describe colors'], answer: 1, fromLesson: 'L7.1', topic: 'Euphemism' },
  { id: 6, type: 'fill', text: 'Complete: "El lenguaje figurado va más allá del significado ___" (literal)', answer: 'literal', fromLesson: 'L7.1', topic: 'Figurative Language' },

  // === L7.2 (6 questions) ===
  { id: 7, type: 'mc', text: '"El registro académico" is characterized by:', options: ['Slang and colloquialisms', 'Formal vocabulary and complex syntax', 'Short sentences only', 'Spoken language only'], answer: 1, fromLesson: 'L7.2', topic: 'Academic Register' },
  { id: 8, type: 'fill', text: 'Complete: "La tesis debe estar respaldada por ___ empíricas" (evidence)', answer: 'evidencias', fromLesson: 'L7.2', topic: 'Academic Writing' },
  { id: 9, type: 'mc', text: '"Cabe destacar que" is used in academic writing to:', options: ['End a paragraph', 'Introduce a noteworthy point', 'Express doubt', 'Make a joke'], answer: 1, fromLesson: 'L7.2', topic: 'Academic Markers' },
  { id: 10, type: 'tf', text: '"No obstante" and "sin embargo" both mean "however/nevertheless" in academic Spanish.', answer: true, fromLesson: 'L7.2', topic: 'Connectors' },
  { id: 11, type: 'mc', text: 'A "ponencia" in academic Spanish is:', options: ['A type of exam', 'A conference presentation or paper', 'A university building', 'A study group'], answer: 1, fromLesson: 'L7.2', topic: 'Academic Events' },
  { id: 12, type: 'fill', text: 'Complete: "Los resultados del estudio ___ la hipótesis inicial" (confirm/support)', answer: 'confirman', fromLesson: 'L7.2', topic: 'Research Language' },

  // === L7.3 (7 questions) ===
  { id: 13, type: 'mc', text: '"El dialecto" differs from "el idioma" in that a dialect is:', options: ['A separate language', 'A regional variety of a language', 'An ancient language', 'A written-only form'], answer: 1, fromLesson: 'L7.3', topic: 'Dialects' },
  { id: 14, type: 'fill', text: 'Complete: "El ___ es el uso del \"vos\" en lugar de \"tú\"" (voseo)', answer: 'voseo', fromLesson: 'L7.3', topic: 'Voseo' },
  { id: 15, type: 'mc', text: '"El seseo" is the pronunciation of "c" (before e/i) and "z" as:', options: ['/th/ like in English "think"', '/s/ like in English "see"', '/ch/ like in English "church"', '/k/ like in English "cat"'], answer: 1, fromLesson: 'L7.3', topic: 'Phonetic Variation' },
  { id: 16, type: 'tf', text: 'Spanish is spoken as an official language on every inhabited continent.', answer: true, fromLesson: 'L7.3', topic: 'Global Spanish' },
  { id: 17, type: 'mc', text: '"El lunfardo" is a slang associated with:', options: ['Mexico City', 'Buenos Aires, Argentina', 'Madrid, Spain', 'Bogotá, Colombia'], answer: 1, fromLesson: 'L7.3', topic: 'Regional Slang' },
  { id: 18, type: 'fill', text: 'Complete: "En México se dice \"computadora\"; en España se dice ___" (computer)', answer: 'ordenador', fromLesson: 'L7.3', topic: 'Lexical Variation' },
  { id: 19, type: 'mc', text: '"El español neutro" is used primarily in:', options: ['Academic papers only', 'Media and dubbing to reach all Spanish speakers', 'Government documents', 'Poetry'], answer: 1, fromLesson: 'L7.3', topic: 'Neutral Spanish' },

  // === L7.4 (6 questions) ===
  { id: 20, type: 'mc', text: '"La ironía" says:', options: ['Exactly what it means', 'The opposite of what it means', 'Nothing meaningful', 'Only positive things'], answer: 1, fromLesson: 'L7.4', topic: 'Irony' },
  { id: 21, type: 'fill', text: 'Complete: "El ___ es un tipo de humor que dice lo contrario de lo que parece" (sarcasm)', answer: 'sarcasmo', fromLesson: 'L7.4', topic: 'Sarcasm' },
  { id: 22, type: 'mc', text: '"El doble sentido" in Spanish humor relies on:', options: ['Visual effects', 'Words with multiple meanings', 'Physical comedy', 'Repetition'], answer: 1, fromLesson: 'L7.4', topic: 'Double Meaning' },
  { id: 23, type: 'tf', text: 'Understanding humor in a foreign language is considered one of the highest levels of fluency.', answer: true, fromLesson: 'L7.4', topic: 'Humor & Fluency' },
  { id: 24, type: 'mc', text: '"El albur" is a form of wordplay most associated with:', options: ['Spain', 'Argentina', 'Mexico', 'Colombia'], answer: 2, fromLesson: 'L7.4', topic: 'Cultural Humor' },
  { id: 25, type: 'fill', text: 'Complete: "No es para ___, pero..." (to brag — common understatement)', answer: 'presumir', fromLesson: 'L7.4', topic: 'Understatement' },

  // === L7.5 Psychology & Emotional Intelligence (6 questions) ===
  { id: 26, type: 'mc', text: '"La resiliencia" is the ability to:', options: ['Avoid all problems', 'Recover from adversity', 'Control others', 'Eliminate emotions'], answer: 1, fromLesson: 'L7.5', topic: 'Resilience' },
  { id: 27, type: 'fill', text: 'Complete: "¿Cómo te hace ___ eso?" (feel)', answer: 'sentir', fromLesson: 'L7.5', topic: 'Therapeutic Language' },
  { id: 28, type: 'mc', text: '"La escucha activa" requires:', options: ['Preparing your response while listening', 'Paying attention without interrupting or judging', 'Giving advice immediately', 'Changing the subject'], answer: 1, fromLesson: 'L7.5', topic: 'Active Listening' },
  { id: 29, type: 'tf', text: '"La vulnerabilidad no es debilidad" means vulnerability is actually a form of emotional courage.', answer: true, fromLesson: 'L7.5', topic: 'Vulnerability' },
  { id: 30, type: 'mc', text: '"Establecer límites" in relationships means:', options: ['Ending the relationship', 'Setting healthy boundaries', 'Being selfish', 'Ignoring others'], answer: 1, fromLesson: 'L7.5', topic: 'Boundaries' },
  { id: 31, type: 'fill', text: 'Complete: "La comunicación ___ expresa necesidades con claridad y respeto" (assertive)', answer: 'asertiva', fromLesson: 'L7.5', topic: 'Assertive Communication' },

  // === L7.6 Diplomacy & Conflict Resolution (7 questions) ===
  { id: 32, type: 'mc', text: '"Instamos a" is used to:', options: ['Make a casual suggestion', 'Urgently call for action', 'Express gratitude', 'Describe a past event'], answer: 1, fromLesson: 'L7.6', topic: 'Diplomatic Urgency' },
  { id: 33, type: 'fill', text: 'Complete: "Hacemos un ___ a la paz" (call)', answer: 'llamado', fromLesson: 'L7.6', topic: 'Call for Peace' },
  { id: 34, type: 'mc', text: '"La propuesta es mutuamente beneficiosa" means:', options: ['Only one side benefits', 'Both sides benefit', 'Neither side benefits', 'A third party benefits'], answer: 1, fromLesson: 'L7.6', topic: 'Win-Win' },
  { id: 35, type: 'tf', text: '"Los cascos azules" are the United Nations peacekeeping forces.', answer: true, fromLesson: 'L7.6', topic: 'UN Peacekeeping' },
  { id: 36, type: 'mc', text: '"Propongo una tregua" means:', options: ['I propose a surrender', 'I propose a ceasefire/truce', 'I propose a final solution', 'I propose an attack'], answer: 1, fromLesson: 'L7.6', topic: 'Mediation' },
  { id: 37, type: 'fill', text: 'Complete: "La ___ de cada nación debe ser respetada" (sovereignty)', answer: 'soberanía', fromLesson: 'L7.6', topic: 'Sovereignty' },
  { id: 38, type: 'mc', text: 'In diplomatic language, "exhortamos" is more intense than:', options: ['Exigimos', 'Condenamos', 'Sugerimos', 'Denunciamos'], answer: 2, fromLesson: 'L7.6', topic: 'Diplomatic Intensity' },

  // === L7.7 Creative Writing & Storytelling (6 questions) ===
  { id: 39, type: 'mc', text: '"El narrador no fiable" deliberately:', options: ['Tells the truth', 'Deceives the reader', 'Describes settings', 'Speaks in dialogue'], answer: 1, fromLesson: 'L7.7', topic: 'Unreliable Narrator' },
  { id: 40, type: 'fill', text: 'Complete: "El ___ es el momento de máxima tensión" (climax)', answer: 'clímax', fromLesson: 'L7.7', topic: 'Story Structure' },
  { id: 41, type: 'mc', text: '"El planteamiento" in story structure refers to:', options: ['The climax', 'The exposition/setup', 'The resolution', 'The epilogue'], answer: 1, fromLesson: 'L7.7', topic: 'Exposition' },
  { id: 42, type: 'tf', text: '"La metaficción" is when a story talks about itself as fiction, breaking the fourth wall.', answer: true, fromLesson: 'L7.7', topic: 'Metafiction' },
  { id: 43, type: 'mc', text: '"—murmuró entre dientes" is an example of:', options: ['Descriptive writing', 'A narrative technique', 'A dialogue tag showing emotion', 'Story structure'], answer: 2, fromLesson: 'L7.7', topic: 'Dialogue Tags' },
  { id: 44, type: 'fill', text: 'Complete: "El ___ resuelve los conflictos y cierra los arcos narrativos" (denouement)', answer: 'desenlace', fromLesson: 'L7.7', topic: 'Resolution' },

  // === L7.8 Cultural Identity & Migration (6 questions) ===
  { id: 45, type: 'mc', text: '"El desarraigo" means:', options: ['Integration', 'The state of being uprooted', 'Nostalgia', 'Immigration'], answer: 1, fromLesson: 'L7.8', topic: 'Uprooting' },
  { id: 46, type: 'fill', text: 'Complete: "La ___ es mi patria; donde hablo mi idioma, estoy en casa" (language)', answer: 'lengua', fromLesson: 'L7.8', topic: 'Language as Homeland' },
  { id: 47, type: 'mc', text: '"La hibridez cultural" creates identities that are:', options: ['Confused and lost', 'Rich combinations of multiple traditions', 'Purely from one culture', 'Temporary'], answer: 1, fromLesson: 'L7.8', topic: 'Cultural Hybridity' },
  { id: 48, type: 'tf', text: '"Las remesas" are money transfers that migrants send back to their home countries.', answer: true, fromLesson: 'L7.8', topic: 'Remittances' },
  { id: 49, type: 'mc', text: '"No soy ni de aquí ni de allá" expresses:', options: ['Confusion', 'Bicultural identity between two worlds', 'Rejection of both cultures', 'A desire to choose'], answer: 1, fromLesson: 'L7.8', topic: 'Bicultural Identity' },
  { id: 50, type: 'fill', text: 'Complete: "La ___ surge del miedo a lo desconocido" (xenophobia)', answer: 'xenofobia', fromLesson: 'L7.8', topic: 'Xenophobia' },
]

export const L7F_CONFIG = {
  totalQuestions: 25,
  passingScore: 70,
  title: 'Level 7 — Final Assessment',
  subtitle: 'Native Fluency (C2)',
  description: 'This final exam covers everything from Level 7: dialectology, humor and wordplay, media literacy, scientific Spanish, psychology and emotional intelligence, diplomacy, creative writing, and cultural identity. You need 70% (18/25) to earn your Level 7 badge and achieve Native Fluency status!',
  badgeEmoji: '🌟',
  badgeName: 'Level 7 — Native Fluency',
}
