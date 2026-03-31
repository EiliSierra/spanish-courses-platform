// Level 7 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L7.1–L7.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 7 badge.

import type { ExamQuestion } from './L4.F'
export type { ExamQuestion }

export const L7F_QUESTION_POOL: ExamQuestion[] = [
  // === L7.1 Dialectology & Sociolinguistics (6 questions) ===
  { id: 1, type: 'mc', text: '"El voseo" refers to:', options: ['A type of Spanish poetry', 'The use of "vos" instead of "tú" with distinct conjugations', 'A dialect spoken only in Spain', 'A formal register used in writing'], answer: 1, fromLesson: 'L7.1', topic: 'Voseo' },
  { id: 2, type: 'fill', text: 'Complete: "El ___ consiste en pronunciar la \"z\" y la \"c\" ante e/i como \"s\"" (seseo)', answer: 'seseo', fromLesson: 'L7.1', topic: 'Phonetic Variation' },
  { id: 3, type: 'mc', text: '"El lunfardo" originated in:', options: ['The royal courts of Madrid', 'The conventillos (tenement houses) of Buenos Aires', 'The universities of Mexico City', 'The coastal towns of Chile'], answer: 1, fromLesson: 'L7.1', topic: 'Sociolects' },
  { id: 4, type: 'tf', text: 'El yeísmo merges the "ll" and "y" sounds into one, so "calle" and "caye" sound the same.', answer: true, fromLesson: 'L7.1', topic: 'Yeísmo' },
  { id: 5, type: 'mc', text: 'In Spain they say "ordenador" for computer; in Mexico they say:', options: ['Computador', 'Computadora', 'Portátil', 'Procesador'], answer: 1, fromLesson: 'L7.1', topic: 'Vocabulary Divergence' },
  { id: 6, type: 'fill', text: 'Complete: "El ___ mezcla inglés y español fluidamente: \"Voy a parkear el carro\"" (Spanglish)', answer: 'spanglish', fromLesson: 'L7.1', topic: 'Code-Switching' },

  // === L7.2 Humor, Wordplay & Double Entendre (6 questions) ===
  { id: 7, type: 'mc', text: '"El albur" is best described as:', options: ['A type of formal debate', 'A Mexican verbal duel based on double meanings', 'A Spanish poetry form', 'An Argentine dance style'], answer: 1, fromLesson: 'L7.2', topic: 'Albur' },
  { id: 8, type: 'fill', text: 'Complete: "El ___ juega con la división de sílabas: \"oro parece, plata no es\"" (calambur)', answer: 'calambur', fromLesson: 'L7.2', topic: 'Wordplay' },
  { id: 9, type: 'mc', text: 'When someone says "¡Qué sorpresa!" with an exaggerated tone and no actual surprise, they are using:', options: ['A formal greeting', 'Sarcasm', 'A compliment', 'An apology'], answer: 1, fromLesson: 'L7.2', topic: 'Sarcasm' },
  { id: 10, type: 'tf', text: '"El doble sentido" works because many Spanish words have multiple meanings (acepciones múltiples).', answer: true, fromLesson: 'L7.2', topic: 'Double Entendre' },
  { id: 11, type: 'mc', text: '"El retruécano" is a figure of speech that:', options: ['Uses exaggeration for effect', 'Inverts word order to create new meaning, e.g. "comer para vivir, no vivir para comer"', 'Repeats the same word three times', 'Compares two unlike things'], answer: 1, fromLesson: 'L7.2', topic: 'Wordplay' },
  { id: 12, type: 'fill', text: 'Complete: "El ___ debe ser inesperado — es la parte final del chiste que provoca la risa" (punchline)', answer: 'remate', fromLesson: 'L7.2', topic: 'Comedic Storytelling' },

  // === L7.3 Media Literacy & Critical Analysis (7 questions) ===
  { id: 13, type: 'mc', text: '"El sesgo de confirmación" means:', options: ['Accepting all news as true', 'Seeking only information that reinforces your existing beliefs', 'Confirming sources with experts', 'Writing a balanced article'], answer: 1, fromLesson: 'L7.3', topic: 'Bias' },
  { id: 14, type: 'fill', text: 'Complete: "La ___ se crea deliberadamente; la malinformación saca de contexto hechos reales" (disinformation)', answer: 'desinformación', fromLesson: 'L7.3', topic: 'Fake News Detection' },
  { id: 15, type: 'mc', text: '"La falacia ad hominem" attacks:', options: ['The argument\'s logic', 'The person instead of their argument', 'The sources used', 'The writing style'], answer: 1, fromLesson: 'L7.3', topic: 'Logical Fallacies' },
  { id: 16, type: 'tf', text: '"La cámara de eco" reinforces your existing beliefs by exposing you only to similar opinions.', answer: true, fromLesson: 'L7.3', topic: 'Echo Chamber' },
  { id: 17, type: 'mc', text: '"El encuadre mediático" determines:', options: ['The newspaper\'s price', 'How a story is presented and perceived by the public', 'Which journalists are hired', 'The font size of headlines'], answer: 1, fromLesson: 'L7.3', topic: 'Media Framing' },
  { id: 18, type: 'fill', text: 'Complete: "La ___ de fuentes requiere al menos tres fuentes independientes para confirmar un hecho" (triangulation)', answer: 'triangulación', fromLesson: 'L7.3', topic: 'Source Verification' },
  { id: 19, type: 'mc', text: '"El clickbait" uses:', options: ['Verified facts and balanced reporting', 'Misleading headlines to generate clicks without substantial content', 'Academic citations', 'Government press releases'], answer: 1, fromLesson: 'L7.3', topic: 'Media Vocabulary' },

  // === L7.4 Scientific & Environmental Spanish (6 questions) ===
  { id: 20, type: 'mc', text: '"La hipótesis nula" establishes that:', options: ['The experiment was successful', 'There is no significant difference', 'The results are definitive', 'More research is impossible'], answer: 1, fromLesson: 'L7.4', topic: 'Scientific Method' },
  { id: 21, type: 'fill', text: 'Complete: "La ___ de carbono mide el impacto ambiental de nuestras actividades" (footprint)', answer: 'huella', fromLesson: 'L7.4', topic: 'Environmental Crisis' },
  { id: 22, type: 'mc', text: '"La revisión por pares" in scientific publishing ensures:', options: ['Faster publication', 'The quality of the publication through expert review', 'Lower costs', 'More citations'], answer: 1, fromLesson: 'L7.4', topic: 'Peer Review' },
  { id: 23, type: 'tf', text: '"La correlación no implica causalidad" means that just because two things are correlated does not mean one causes the other.', answer: true, fromLesson: 'L7.4', topic: 'Scientific Method' },
  { id: 24, type: 'mc', text: '"La divulgación científica" aims to:', options: ['Restrict science to experts only', 'Bring science closer to the general public', 'Replace academic journals', 'Simplify all research conclusions'], answer: 1, fromLesson: 'L7.4', topic: 'Science Communication' },
  { id: 25, type: 'fill', text: 'Complete: "La evidencia ___ respalda la hipótesis planteada" (empirical)', answer: 'empírica', fromLesson: 'L7.4', topic: 'Technical Writing' },

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
  subtitle: 'Upper-Intermediate (B2)',
  description: 'This final exam covers everything from Level 7: dialectology, humor and wordplay, media literacy, scientific Spanish, psychology and emotional intelligence, diplomacy, creative writing, and cultural identity. You need 70% (18/25) to earn your Level 7 badge and achieve Native Fluency status!',
  badgeEmoji: '🌟',
  badgeName: 'Level 7 — Native Fluency',
}
