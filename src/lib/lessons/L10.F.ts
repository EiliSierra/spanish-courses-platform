// Level 10 Ultimate Assessment — Question Pool
// 30 questions covering L10.1 and L10.2 (the capstone). Exam picks 20 randomly.
// 70% (14/20) to pass and earn the Level 10 — Spanish Master badge.
// THE HARDEST EXAM IN THE PLATFORM — drawing from ALL levels.

import type { ExamQuestion } from './L4.F'
export type { ExamQuestion }

export const L10F_QUESTION_POOL: ExamQuestion[] = [
  // === L10.1 — The Art of Conversation (15 questions) ===
  { id: 1, type: 'mc', text: 'To politely interrupt someone mid-sentence, the best phrase is:', options: ['¡No me digas!', 'Perdona que te interrumpa, pero...', 'Bueno, te dejo', 'Ajá, sigue'], answer: 1, fromLesson: 'L10.1', topic: 'Turn-Taking' },
  { id: 2, type: 'fill', text: 'Complete: "Como ___ diciendo antes de que me interrumpieran..." (I was)', answer: 'iba', fromLesson: 'L10.1', topic: 'Resuming' },
  { id: 3, type: 'mc', text: '"Retomando el hilo de la conversación" means:', options: ['Cutting the thread', 'Picking up the thread of conversation', 'Losing the point', 'Starting a new topic'], answer: 1, fromLesson: 'L10.1', topic: 'Turn-Taking' },
  { id: 4, type: 'tf', text: '"Muletillas" like "o sea" and "es decir" are signs of poor Spanish and should be avoided.', answer: false, fromLesson: 'L10.1', topic: 'Fluency' },
  { id: 5, type: 'mc', text: 'In Spain, overlapping speech during conversation is generally considered:', options: ['Extremely rude', 'A sign of engagement and interest', 'Only acceptable among family', 'A sign of anger'], answer: 1, fromLesson: 'L10.1', topic: 'Cultural Norms' },
  { id: 6, type: 'fill', text: 'Complete: "No me ___ a eso, sino a otra cosa completamente diferente" (I\'m not referring)', answer: 'refiero', fromLesson: 'L10.1', topic: 'Conversation Repair' },
  { id: 7, type: 'mc', text: '"Sobremesa" in Spanish culture refers to:', options: ['The tablecloth', 'The post-meal lingering conversation', 'The appetizer course', 'The bill at a restaurant'], answer: 1, fromLesson: 'L10.1', topic: 'Culture' },
  { id: 8, type: 'mc', text: 'To gracefully exit a conversation, you would say:', options: ['Un momento, no he terminado', 'Me explico mal', 'Bueno, te dejo que tengo que irme. ¡Fue un placer!', '¿En serio? ¡Qué fuerte!'], answer: 2, fromLesson: 'L10.1', topic: 'Small Talk' },
  { id: 9, type: 'tf', text: '"Nos ponemos al día" means "we will argue about the schedule."', answer: false, fromLesson: 'L10.1', topic: 'Idioms' },
  { id: 10, type: 'mc', text: '"Es decir, lo que intento explicar es..." is used for:', options: ['Changing topics', 'Active listening', 'Conversation repair — rephrasing', 'Ending a conversation'], answer: 2, fromLesson: 'L10.1', topic: 'Repair' },
  { id: 11, type: 'fill', text: 'Complete: "Oye, a ___, ¿supiste lo que pasó ayer?" (by the way)', answer: 'propósito', fromLesson: 'L10.1', topic: 'Topic Change' },
  { id: 12, type: 'mc', text: 'Which active listening signal shows surprise and engagement?', options: ['Bueno, cambiando de tema', 'Me explico mal', '¡No me digas! ¿Y qué pasó?', 'Te cedo el turno'], answer: 2, fromLesson: 'L10.1', topic: 'Active Listening' },
  { id: 13, type: 'mc', text: 'In Mexico, interrupting a superior is generally:', options: ['Expected and encouraged', 'Considered inappropriate', 'Required in meetings', 'A sign of intelligence'], answer: 1, fromLesson: 'L10.1', topic: 'Cultural Norms' },
  { id: 14, type: 'tf', text: 'Caribbean Spanish speakers (Cuban, Dominican) tend to speak more slowly and quietly than other Spanish speakers.', answer: false, fromLesson: 'L10.1', topic: 'Dialectology' },
  { id: 15, type: 'mc', text: '"Creo que me has malinterpretado" is used when:', options: ['You agree with someone', 'Someone misunderstood you', 'You want to change topics', 'You are saying goodbye'], answer: 1, fromLesson: 'L10.1', topic: 'Repair' },

  // === L10.2 — Your Spanish Journey: Comprehensive Review (15 questions) ===
  { id: 16, type: 'mc', text: '"Si hubiera sabido la verdad, habría tomado una decisión diferente" uses which structure?', options: ['Present + future', 'Imperfect + conditional', 'Pluperfect subjunctive + conditional perfect', 'Preterite + imperfect'], answer: 2, fromLesson: 'L10.2', topic: 'Mixed Conditionals' },
  { id: 17, type: 'fill', text: 'Complete: "La mujer ___ libro ganó el premio es de Colombia" (whose)', answer: 'cuyo', fromLesson: 'L10.2', topic: 'Relative Clauses' },
  { id: 18, type: 'mc', text: '"El informe será presentado por la directora" is an example of:', options: ['Active voice', 'Passive voice with ser', 'Reflexive passive (se)', 'Impersonal construction'], answer: 1, fromLesson: 'L10.2', topic: 'Passive Voice' },
  { id: 19, type: 'tf', text: 'The word "ojalá" derives from Arabic and always triggers the subjunctive mood in Spanish.', answer: true, fromLesson: 'L10.2', topic: 'Etymology' },
  { id: 20, type: 'mc', text: '"Quiubo, parce" is a greeting characteristic of:', options: ['Spain', 'Chile', 'Colombia', 'Argentina'], answer: 2, fromLesson: 'L10.2', topic: 'Regional Variants' },
  { id: 21, type: 'fill', text: 'Complete: "Para el próximo año, ya ___ terminado mi doctorado" (I will have)', answer: 'habré', fromLesson: 'L10.2', topic: 'Future Perfect' },
  { id: 22, type: 'mc', text: '"Le agradecería enormemente si pudiera considerar nuestra solicitud" combines:', options: ['Imperative + infinitive', 'Conditional + imperfect subjunctive', 'Present + present', 'Future + preterite'], answer: 1, fromLesson: 'L10.2', topic: 'Diplomatic Register' },
  { id: 23, type: 'mc', text: '"El que mucho abarca, poco aprieta" is equivalent to the English:', options: ['The early bird catches the worm', 'Jack of all trades, master of none', 'What goes around comes around', 'Better safe than sorry'], answer: 1, fromLesson: 'L10.2', topic: 'Proverbs' },
  { id: 24, type: 'tf', text: 'There are exactly 21 countries where Spanish is an official language.', answer: true, fromLesson: 'L10.2', topic: 'Geography' },
  { id: 25, type: 'mc', text: 'In the sentence "El profesor dijo que los resultados habían superado las expectativas," the verb "habían superado" is in the:', options: ['Present perfect', 'Future perfect', 'Pluperfect (past perfect)', 'Conditional perfect'], answer: 2, fromLesson: 'L10.2', topic: 'Reported Speech' },
  { id: 26, type: 'fill', text: 'Complete: "Estimados colegas, hoy les ___ los resultados de nuestra investigación" (I present)', answer: 'presento', fromLesson: 'L10.2', topic: 'Formal Presentations' },
  { id: 27, type: 'mc', text: '"Si hubieras llegado antes, habrías conocido al autor del cual te hablé" — "del cual" is:', options: ['A conjunction', 'A relative pronoun meaning "about whom"', 'A preposition', 'An adverb'], answer: 1, fromLesson: 'L10.2', topic: 'Relative Clauses' },
  { id: 28, type: 'mc', text: '"Cachai" is regional slang meaning "do you understand?" from:', options: ['Mexico', 'Cuba', 'Chile', 'Peru'], answer: 2, fromLesson: 'L10.2', topic: 'Regional Slang' },
  { id: 29, type: 'tf', text: 'The United States has the second-largest Spanish-speaking population in the world.', answer: true, fromLesson: 'L10.2', topic: 'Demographics' },
  { id: 30, type: 'mc', text: 'Which sentence correctly uses the imperfect subjunctive + conditional?', options: ['"Si tengo tiempo, viajaré"', '"Si tuviera tiempo, viajaría"', '"Si tuve tiempo, viajé"', '"Si tendré tiempo, viajo"'], answer: 1, fromLesson: 'L10.2', topic: 'Conditionals' },
]

export const L10F_CONFIG = {
  totalQuestions: 20,
  passingScore: 70,
  title: 'Level 10 — Ultimate Assessment',
  subtitle: 'Capstone — Complete Spanish Mastery',
  description: 'The ultimate test of your Spanish mastery. This exam draws from everything you have learned across all 10 levels — from basic greetings to nuanced cultural expression. Score 70% to earn the coveted Capstone badge and complete your Spanish journey!',
  badgeEmoji: '👑',
  badgeName: 'Level 10 — Spanish Master',
}
