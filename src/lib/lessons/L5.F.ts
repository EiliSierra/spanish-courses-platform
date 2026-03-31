// Level 5 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L5.1–L5.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 5 badge.

import type { ExamQuestion } from './L4.F'
export type { ExamQuestion }

export const L5F_QUESTION_POOL: ExamQuestion[] = [
  // === L5.1 Past Perfect & Sequencing (6 questions) ===
  { id: 1, type: 'mc', text: 'Choose the correct pluperfect form: "Cuando llegué, ellos ya ___."', options: ['habían salido', 'han salido', 'hubieron salido', 'habrían salido'], answer: 0, fromLesson: 'L5.1', topic: 'Pluperfect Formation' },
  { id: 2, type: 'fill', text: 'Complete with the correct irregular participle: "Nosotros ya habíamos ___ la carta." (escribir)', answer: 'escrito', fromLesson: 'L5.1', topic: 'Irregular Participles' },
  { id: 3, type: 'mc', text: 'Which temporal connector means "by the time"?', options: ['antes de que', 'para cuando', 'una vez que', 'después de que'], answer: 1, fromLesson: 'L5.1', topic: 'Temporal Connectors' },
  { id: 4, type: 'fill', text: 'Complete: "Ella nunca había ___ algo así." (ver)', answer: 'visto', fromLesson: 'L5.1', topic: 'Irregular Participles' },
  { id: 5, type: 'tf', text: 'In "Una vez que habíamos terminado, nos fuimos," the pluperfect indicates an action completed before another past action.', answer: true, fromLesson: 'L5.1', topic: 'Narrative Sequencing' },
  { id: 6, type: 'mc', text: '"Antes de que yo llegara, él ya había ___ la verdad." Choose the correct participle of "decir."', options: ['decido', 'dicido', 'dicho', 'decido'], answer: 2, fromLesson: 'L5.1', topic: 'Irregular Participles' },

  // === L5.2 Advanced Subjunctive (7 questions) ===
  { id: 7, type: 'mc', text: 'The imperfect subjunctive (-ra form) of "tener" (yo) is:', options: ['tenga', 'tuviera', 'tendría', 'teniera'], answer: 1, fromLesson: 'L5.2', topic: 'Imperfect Subjunctive -ra' },
  { id: 8, type: 'fill', text: 'Complete with the -se form: "Si yo ___ más tiempo, estudiaría más." (tener)', answer: 'tuviese', fromLesson: 'L5.2', topic: 'Imperfect Subjunctive -se' },
  { id: 9, type: 'mc', text: '"Habla como si ___ español nativo." Choose the correct form.', options: ['es', 'fuera', 'será', 'fue'], answer: 1, fromLesson: 'L5.2', topic: 'Como Si Clauses' },
  { id: 10, type: 'fill', text: 'Complete the pluperfect subjunctive: "Si hubiera ___, habría aprobado." (estudiar)', answer: 'estudiado', fromLesson: 'L5.2', topic: 'Pluperfect Subjunctive' },
  { id: 11, type: 'mc', text: '"Si hubiéramos sabido la verdad, no ___ venido." Choose the correct conditional perfect.', options: ['habríamos', 'hubiéramos', 'habíamos', 'hemos'], answer: 0, fromLesson: 'L5.2', topic: 'Conditional Perfect' },
  { id: 12, type: 'tf', text: 'The -ra and -se forms of the imperfect subjunctive are interchangeable in most contexts.', answer: true, fromLesson: 'L5.2', topic: 'Imperfect Subjunctive -se' },
  { id: 13, type: 'mc', text: '"Ojalá que hubiera ___ a tiempo." Complete with the participle of "llegar."', options: ['llegando', 'llegar', 'llegado', 'llegó'], answer: 2, fromLesson: 'L5.2', topic: 'Pluperfect Subjunctive' },

  // === L5.3 Passive Voice & Impersonal (6 questions) ===
  { id: 14, type: 'mc', text: '"El libro fue escrito por Cervantes" is an example of:', options: ['Active voice', 'Se passive', 'Ser + participle passive', 'Impersonal se'], answer: 2, fromLesson: 'L5.3', topic: 'Ser + Participle Passive' },
  { id: 15, type: 'fill', text: 'Rewrite using se passive: "Construyeron el puente en 1990." → "Se ___ el puente en 1990."', answer: 'construyó', fromLesson: 'L5.3', topic: 'Se Passive' },
  { id: 16, type: 'mc', text: '"Se habla español aquí" is an example of:', options: ['Ser passive', 'Se passive', 'Impersonal se', 'Estar + participle'], answer: 2, fromLesson: 'L5.3', topic: 'Impersonal Se' },
  { id: 17, type: 'tf', text: '"La puerta está abierta" uses estar + participle to describe a resulting state, not an action.', answer: true, fromLesson: 'L5.3', topic: 'Estar + Participle' },
  { id: 18, type: 'mc', text: '"Se vendieron todas las entradas" — the verb is plural because:', options: ['Se is plural', 'The subject is "entradas"', 'It is impersonal', 'The agent is plural'], answer: 1, fromLesson: 'L5.3', topic: 'Se Passive' },
  { id: 19, type: 'fill', text: 'Complete with the impersonal se: "En este restaurante ___ come muy bien."', answer: 'se', fromLesson: 'L5.3', topic: 'Impersonal Se' },

  // === L5.4 Discourse Markers & Argumentation (6 questions) ===
  { id: 20, type: 'mc', text: 'Which discourse marker expresses contrast similar to "however"?', options: ['Además', 'Sin embargo', 'Por lo tanto', 'Es decir'], answer: 1, fromLesson: 'L5.4', topic: 'Contrast Connectors' },
  { id: 21, type: 'fill', text: 'Complete: "Los datos son claros; ___, debemos actuar." (therefore)', answer: 'por lo tanto', fromLesson: 'L5.4', topic: 'Cause-Consequence' },
  { id: 22, type: 'mc', text: '"A pesar de que llovía, salimos a caminar" uses a connector of:', options: ['Cause', 'Consequence', 'Concession', 'Addition'], answer: 2, fromLesson: 'L5.4', topic: 'Concession' },
  { id: 23, type: 'tf', text: '"No obstante" and "sin embargo" are both contrast markers that can be used interchangeably.', answer: true, fromLesson: 'L5.4', topic: 'Contrast Connectors' },
  { id: 24, type: 'mc', text: 'Which expression is used for academic hedging?', options: ['¡Claro que sí!', 'Cabe señalar que...', 'Yo creo que...', 'Obviamente...'], answer: 1, fromLesson: 'L5.4', topic: 'Academic Hedging' },
  { id: 25, type: 'fill', text: 'Complete: "___ destacar que los resultados son preliminares." (It is worth)', answer: 'Cabe', fromLesson: 'L5.4', topic: 'Academic Hedging' },

  // === L5.5 Professional Spanish (6 questions) ===
  { id: 26, type: 'mc', text: 'The appropriate formal email opening for someone you don\'t know is:', options: ['Hola, ¿qué tal?', 'Querido amigo', 'Estimado/a señor/a', 'Buenas'], answer: 2, fromLesson: 'L5.5', topic: 'Email Conventions' },
  { id: 27, type: 'fill', text: 'Complete a formal email closing: "Sin otro particular, le saluda ___."', answer: 'atentamente', fromLesson: 'L5.5', topic: 'Email Conventions' },
  { id: 28, type: 'mc', text: '"El orden del día" in a meeting context means:', options: ['The order of the day', 'The daily schedule', 'The agenda', 'The minutes'], answer: 2, fromLesson: 'L5.5', topic: 'Meeting Language' },
  { id: 29, type: 'tf', text: '"Propongo que pasemos al siguiente punto" uses the subjunctive because it expresses a suggestion.', answer: true, fromLesson: 'L5.5', topic: 'Meeting Language' },
  { id: 30, type: 'mc', text: 'In a negotiation, "Estaríamos dispuestos a considerar su oferta" uses the conditional to:', options: ['Express certainty', 'Soften the statement and sound diplomatic', 'Talk about the past', 'Give an order'], answer: 1, fromLesson: 'L5.5', topic: 'Negotiation Phrases' },
  { id: 31, type: 'fill', text: 'Complete for a presentation: "A continuación, les ___ los resultados." (I will present)', answer: 'presentaré', fromLesson: 'L5.5', topic: 'Presentation Language' },

  // === L5.6 Idioms & Proverbs (7 questions) ===
  { id: 32, type: 'mc', text: '"Meter la pata" means:', options: ['To put your foot in it / make a blunder', 'To kick someone', 'To walk carefully', 'To dance well'], answer: 0, fromLesson: 'L5.6', topic: 'Body Idioms' },
  { id: 33, type: 'fill', text: 'Complete the idiom: "Me estás tomando el ___." (You\'re pulling my leg)', answer: 'pelo', fromLesson: 'L5.6', topic: 'Body Idioms' },
  { id: 34, type: 'mc', text: 'The proverb "No hay mal que por bien no venga" is closest in meaning to:', options: ['Bad things never happen', 'Every cloud has a silver lining', 'What goes around comes around', 'Better safe than sorry'], answer: 1, fromLesson: 'L5.6', topic: 'Proverbs' },
  { id: 35, type: 'tf', text: '"Estar en las nubes" means someone is daydreaming or not paying attention.', answer: true, fromLesson: 'L5.6', topic: 'Nature Idioms' },
  { id: 36, type: 'mc', text: '"Ser pan comido" means something is:', options: ['Delicious', 'Very easy', 'Expensive', 'Impossible'], answer: 1, fromLesson: 'L5.6', topic: 'Food Idioms' },
  { id: 37, type: 'fill', text: 'Complete the proverb: "Más vale tarde que ___."', answer: 'nunca', fromLesson: 'L5.6', topic: 'Proverbs' },
  { id: 38, type: 'mc', text: 'In colloquial Spanish, "Es re difícil" uses "re" as:', options: ['A prefix meaning "again"', 'A regional intensifier meaning "very"', 'A negative particle', 'A formal register marker'], answer: 1, fromLesson: 'L5.6', topic: 'Regional Intensifiers' },

  // === L5.7 Academic Spanish & Reported Speech (6 questions) ===
  { id: 39, type: 'mc', text: 'Direct: "Estudio mucho." → Reported: "Dijo que ___ mucho."', options: ['estudia', 'estudiaba', 'estudió', 'estudie'], answer: 1, fromLesson: 'L5.7', topic: 'Reported Speech' },
  { id: 40, type: 'fill', text: 'Transform to reported speech: "Vendré mañana" → "Dijo que ___ al día siguiente."', answer: 'vendría', fromLesson: 'L5.7', topic: 'Reported Speech' },
  { id: 41, type: 'mc', text: '"Los hallazgos de esta investigación sugieren que..." — "hallazgos" means:', options: ['Hypotheses', 'Findings', 'Methods', 'Conclusions'], answer: 1, fromLesson: 'L5.7', topic: 'Academic Vocabulary' },
  { id: 42, type: 'tf', text: 'In reported speech, "hoy" changes to "ese día" and "aquí" changes to "allí."', answer: true, fromLesson: 'L5.7', topic: 'Reported Speech' },
  { id: 43, type: 'mc', text: '"El marco teórico" in academic writing refers to:', options: ['The bibliography', 'The theoretical framework', 'The abstract', 'The methodology'], answer: 1, fromLesson: 'L5.7', topic: 'Academic Vocabulary' },
  { id: 44, type: 'fill', text: 'Complete: "En resumen, los datos ___ la hipótesis inicial." (support/confirm)', answer: 'confirman', fromLesson: 'L5.7', topic: 'Summarizing' },

  // === L5.8 Nuanced Expression & Cultural Fluency (6 questions) ===
  { id: 45, type: 'mc', text: 'Which expression is a softener/hedge used to express uncertainty politely?', options: ['Estoy seguro de que...', 'Obviamente...', 'Puede que...', 'Sin duda...'], answer: 2, fromLesson: 'L5.8', topic: 'Softeners' },
  { id: 46, type: 'fill', text: 'Complete with a polite hedge: "Yo ___ que deberíamos reconsiderar." (I would say)', answer: 'diría', fromLesson: 'L5.8', topic: 'Softeners' },
  { id: 47, type: 'mc', text: 'The euphemism "persona de la tercera edad" is a polite way to say:', options: ['A teenager', 'An elderly person', 'A middle-aged person', 'A child'], answer: 1, fromLesson: 'L5.8', topic: 'Euphemisms' },
  { id: 48, type: 'tf', text: 'In Spanish, "¡Qué bonito!" said with a sarcastic tone can function as irony, meaning the opposite of what is literally said.', answer: true, fromLesson: 'L5.8', topic: 'Irony Markers' },
  { id: 49, type: 'mc', text: 'In Spain, "coger el autobús" means "to catch the bus," but in Latin America it can be vulgar. This illustrates:', options: ['A grammar rule', 'Regional variation in meaning', 'A tense change', 'Formal vs informal register'], answer: 1, fromLesson: 'L5.8', topic: 'Regional Variation' },
  { id: 50, type: 'fill', text: 'Complete with a politeness softener: "___ sería posible cambiar la fecha de la reunión?" (Perhaps/Maybe)', answer: 'Tal vez', fromLesson: 'L5.8', topic: 'Softeners' },
]

export const L5F_CONFIG = {
  totalQuestions: 25,
  passingScore: 70,
  title: 'Level 5 — Final Assessment',
  subtitle: 'Advanced Spanish (B2-C1)',
  description: 'This comprehensive exam covers everything from Level 5: pluperfect tense, advanced subjunctive (imperfect & pluperfect), passive voice & impersonal constructions, discourse markers & argumentation, professional Spanish, idioms & proverbs, academic Spanish & reported speech, and nuanced expression & cultural fluency. You need 70% (18/25) to earn your Level 5 badge. Good luck!',
  badgeEmoji: '🎓',
  badgeName: 'Level 5 — Advanced Complete',
}
