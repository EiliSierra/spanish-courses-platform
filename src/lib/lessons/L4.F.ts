// Level 4 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L4.1–L4.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 4 badge.

export interface ExamQuestion {
  id: number
  type: 'mc' | 'tf' | 'fill'
  text: string
  options?: string[]
  answer: number | boolean | string
  fromLesson: string
  topic: string
}

export const L4F_QUESTION_POOL: ExamQuestion[] = [
  // === L4.1 Imperfect Tense ===
  { id: 1, type: 'mc', text: 'The imperfect of "hablar" (yo) is:', options: ['Hablé', 'Hablaba', 'Hablaré', 'Hable'], answer: 1, fromLesson: 'L4.1', topic: 'Imperfect' },
  { id: 2, type: 'fill', text: 'Complete: "Cuando era niño, ___ al parque" (I used to go)', answer: 'iba', fromLesson: 'L4.1', topic: 'Irregular' },
  { id: 3, type: 'tf', text: 'The imperfect has only 3 irregular verbs: ser, ir, ver.', answer: true, fromLesson: 'L4.1', topic: 'Grammar' },
  { id: 4, type: 'mc', text: '"Jugábamos todos los días" uses imperfect because:', options: ['It happened once', 'It was habitual', 'It will happen', 'It might happen'], answer: 1, fromLesson: 'L4.1', topic: 'Usage' },
  { id: 5, type: 'fill', text: 'Complete: "De pequeño, ___ muchos cuentos" (I used to read)', answer: 'leía', fromLesson: 'L4.1', topic: 'Regular -ER' },
  { id: 6, type: 'mc', text: '"Era" is the imperfect of:', options: ['Estar', 'Ser', 'Ir', 'Haber'], answer: 1, fromLesson: 'L4.1', topic: 'Irregular' },

  // === L4.2 Subjunctive ===
  { id: 7, type: 'mc', text: '"Quiero que vengas" uses subjunctive because of:', options: ['A fact', 'A wish/desire', 'A past action', 'A future plan'], answer: 1, fromLesson: 'L4.2', topic: 'Wishes' },
  { id: 8, type: 'fill', text: 'Complete: "Es importante que ___ español" (you study)', answer: 'estudies', fromLesson: 'L4.2', topic: 'Recommendations' },
  { id: 9, type: 'mc', text: '"Dudo que llueva" expresses:', options: ['Certainty', 'Doubt', 'A command', 'Past action'], answer: 1, fromLesson: 'L4.2', topic: 'Doubt' },
  { id: 10, type: 'tf', text: 'The subjunctive is used after "creo que" (I believe that).', answer: false, fromLesson: 'L4.2', topic: 'Grammar' },
  { id: 11, type: 'mc', text: '"Me alegra que estés aquí" uses subjunctive for:', options: ['A fact', 'An emotion', 'A routine', 'A description'], answer: 1, fromLesson: 'L4.2', topic: 'Emotions' },
  { id: 12, type: 'fill', text: 'Complete: "Ojalá que ___ buen tiempo" (there is — haber)', answer: 'haya', fromLesson: 'L4.2', topic: 'Wishes' },

  // === L4.3 Formal vs Informal ===
  { id: 13, type: 'mc', text: 'In Argentina, instead of "tú" people use:', options: ['Usted', 'Vos', 'Él', 'Nosotros'], answer: 1, fromLesson: 'L4.3', topic: 'Voseo' },
  { id: 14, type: 'fill', text: 'Complete: "¿___ está usted?" (How — formal)', answer: 'Cómo', fromLesson: 'L4.3', topic: 'Formal' },
  { id: 15, type: 'mc', text: 'You should use "usted" when speaking to:', options: ['Your best friend', 'Your boss', 'Your sibling', 'Your pet'], answer: 1, fromLesson: 'L4.3', topic: 'Context' },
  { id: 16, type: 'tf', text: 'In Colombia, "usted" is sometimes used even among close friends.', answer: true, fromLesson: 'L4.3', topic: 'Culture' },
  { id: 17, type: 'mc', text: '"Vos querés" is equivalent to:', options: ['Él quiere', 'Tú quieres', 'Usted quiere', 'Nosotros queremos'], answer: 1, fromLesson: 'L4.3', topic: 'Voseo' },
  { id: 18, type: 'fill', text: 'Complete: "Le agradezco su ___" (time — formal)', answer: 'tiempo', fromLesson: 'L4.3', topic: 'Formal' },

  // === L4.4 News ===
  { id: 19, type: 'mc', text: '"El titular" means:', options: ['The journalist', 'The headline', 'The newspaper', 'The channel'], answer: 1, fromLesson: 'L4.4', topic: 'Media' },
  { id: 20, type: 'fill', text: 'Complete: "En mi ___, es un problema serio" (opinion)', answer: 'opinión', fromLesson: 'L4.4', topic: 'Opinions' },
  { id: 21, type: 'mc', text: '"Según el periódico" means:', options: ['Despite the newspaper', 'According to the newspaper', 'Without the newspaper', 'Like the newspaper'], answer: 1, fromLesson: 'L4.4', topic: 'Reporting' },
  { id: 22, type: 'tf', text: '"Estoy de acuerdo" means "I agree."', answer: true, fromLesson: 'L4.4', topic: 'Opinions' },
  { id: 23, type: 'mc', text: '"Informaron que" is used for:', options: ['Giving orders', 'Reporting news', 'Asking questions', 'Making plans'], answer: 1, fromLesson: 'L4.4', topic: 'Reporting' },
  { id: 24, type: 'fill', text: 'Complete: "No estoy de ___" (I disagree)', answer: 'acuerdo', fromLesson: 'L4.4', topic: 'Opinions' },

  // === L4.5 Health & Wellness ===
  { id: 25, type: 'mc', text: '"Estoy estresado" means:', options: ['I am sick', 'I am stressed', 'I am tired', 'I am happy'], answer: 1, fromLesson: 'L4.5', topic: 'Mental Health' },
  { id: 26, type: 'fill', text: 'Complete: "Practico la ___" (meditation)', answer: 'meditación', fromLesson: 'L4.5', topic: 'Wellness' },
  { id: 27, type: 'mc', text: '"Dieta equilibrada" means:', options: ['Strict diet', 'Balanced diet', 'Liquid diet', 'No diet'], answer: 1, fromLesson: 'L4.5', topic: 'Lifestyle' },
  { id: 28, type: 'tf', text: '"Manejar el estrés" means to manage stress.', answer: true, fromLesson: 'L4.5', topic: 'Mental Health' },
  { id: 29, type: 'mc', text: '"Es importante que hagas ejercicio" uses:', options: ['Indicative', 'Subjunctive', 'Imperative', 'Conditional'], answer: 1, fromLesson: 'L4.5', topic: 'Grammar' },
  { id: 30, type: 'fill', text: 'Complete: "Duermo ocho ___ cada noche" (hours)', answer: 'horas', fromLesson: 'L4.5', topic: 'Lifestyle' },

  // === L4.6 Banking ===
  { id: 31, type: 'mc', text: '"La cuenta de ahorros" is:', options: ['Checking account', 'Savings account', 'Credit card', 'Loan'], answer: 1, fromLesson: 'L4.6', topic: 'Banking' },
  { id: 32, type: 'fill', text: 'Complete: "Quiero ___ una cuenta" (to open)', answer: 'abrir', fromLesson: 'L4.6', topic: 'Transactions' },
  { id: 33, type: 'mc', text: '"El cajero automático" is:', options: ['The bank teller', 'The ATM', 'The cashier', 'The manager'], answer: 1, fromLesson: 'L4.6', topic: 'Banking' },
  { id: 34, type: 'tf', text: '"Remesas" are money transfers sent by emigrants to their families.', answer: true, fromLesson: 'L4.6', topic: 'Culture' },
  { id: 35, type: 'mc', text: '"¿Cuál es el tipo de cambio?" asks about:', options: ['Interest rate', 'Exchange rate', 'Account balance', 'Commission'], answer: 1, fromLesson: 'L4.6', topic: 'Currency' },
  { id: 36, type: 'fill', text: 'Complete: "Necesito ___ efectivo" (to withdraw)', answer: 'retirar', fromLesson: 'L4.6', topic: 'Transactions' },

  // === L4.7 Arts & Entertainment ===
  { id: 37, type: 'mc', text: '"La película me pareció aburrida" means:', options: ['I loved the movie', 'The movie seemed boring to me', 'The movie was exciting', 'I want to see the movie'], answer: 1, fromLesson: 'L4.7', topic: 'Reviews' },
  { id: 38, type: 'fill', text: 'Complete: "Me encanta la música ___" (Latin)', answer: 'latina', fromLesson: 'L4.7', topic: 'Music' },
  { id: 39, type: 'mc', text: '"La trama" in a story refers to:', options: ['The director', 'The plot', 'The actor', 'The camera'], answer: 1, fromLesson: 'L4.7', topic: 'Stories' },
  { id: 40, type: 'tf', text: 'Gabriel García Márquez wrote "Cien años de soledad."', answer: true, fromLesson: 'L4.7', topic: 'Literature' },
  { id: 41, type: 'mc', text: '"Te recomiendo esta serie" means:', options: ['I watch this series', 'I recommend this series to you', 'I hate this series', 'I filmed this series'], answer: 1, fromLesson: 'L4.7', topic: 'Reviews' },
  { id: 42, type: 'fill', text: 'Complete: "La ___ de la novela es muy interesante" (plot)', answer: 'trama', fromLesson: 'L4.7', topic: 'Books' },

  // === L4.8 Future & Dreams ===
  { id: 43, type: 'mc', text: 'The future tense of "hablar" (yo) is:', options: ['Hablé', 'Hablaba', 'Hablaré', 'Hablaría'], answer: 2, fromLesson: 'L4.8', topic: 'Future' },
  { id: 44, type: 'fill', text: 'Complete: "Si pudiera, ___ por el mundo" (I would travel)', answer: 'viajaría', fromLesson: 'L4.8', topic: 'Conditional' },
  { id: 45, type: 'mc', text: '"Me gustaría" is:', options: ['Present', 'Preterite', 'Future', 'Conditional'], answer: 3, fromLesson: 'L4.8', topic: 'Conditional' },
  { id: 46, type: 'tf', text: 'The conditional in Spanish adds endings to the full infinitive, like the future tense.', answer: true, fromLesson: 'L4.8', topic: 'Grammar' },
  { id: 47, type: 'mc', text: '"Planeo estudiar medicina" means:', options: ['I studied medicine', 'I plan to study medicine', 'I am studying medicine', 'I would study medicine'], answer: 1, fromLesson: 'L4.8', topic: 'Goals' },
  { id: 48, type: 'fill', text: 'Complete: "Mi sueño ___ ser doctor" (is)', answer: 'es', fromLesson: 'L4.8', topic: 'Goals' },
  { id: 49, type: 'mc', text: '"Si tuviera dinero, compraría una casa" uses:', options: ['Future + present', 'Imperfect subjunctive + conditional', 'Preterite + future', 'Present + imperative'], answer: 1, fromLesson: 'L4.8', topic: 'Hypothetical' },
  { id: 50, type: 'tf', text: '"Tendré" is the future tense of "tener" (irregular stem "tendr-").', answer: true, fromLesson: 'L4.8', topic: 'Future' },
]

export const L4F_CONFIG = {
  totalQuestions: 25,
  passingScore: 70,
  title: 'Level 4 — Final Assessment',
  subtitle: 'Pre-Intermediate Spanish (A2-B1)',
  description: 'This exam covers everything from Level 4: imperfect, subjunctive, formal/informal, news, wellness, banking, arts, and future plans. You need 70% (18/25) to earn your Level 4 badge.',
  badgeEmoji: '👑',
  badgeName: 'Level 4 — Upper-Intermediate Complete',
}
