// Level 6 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L6.1–L6.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 6 badge.

import type { ExamQuestion } from './L4.F'
export type { ExamQuestion }

export const L6F_QUESTION_POOL: ExamQuestion[] = [
  // === L6.1 (6 questions) ===
  { id: 1, type: 'mc', text: '"El matiz" in advanced Spanish refers to:', options: ['A mistake', 'A nuance or shade of meaning', 'A greeting', 'A verb tense'], answer: 1, fromLesson: 'L6.1', topic: 'Nuance' },
  { id: 2, type: 'fill', text: 'Complete: "La sutileza del lenguaje permite expresar ideas con ___" (precision)', answer: 'precisión', fromLesson: 'L6.1', topic: 'Precision' },
  { id: 3, type: 'mc', text: '"Conllevar" means:', options: ['To carry on', 'To entail or involve', 'To converge', 'To celebrate'], answer: 1, fromLesson: 'L6.1', topic: 'Advanced Vocabulary' },
  { id: 4, type: 'tf', text: '"Acarrear consecuencias" means to bring about consequences.', answer: true, fromLesson: 'L6.1', topic: 'Collocations' },
  { id: 5, type: 'mc', text: '"Cabe destacar que..." is used to:', options: ['Express doubt', 'Introduce a noteworthy point', 'End a conversation', 'Express sadness'], answer: 1, fromLesson: 'L6.1', topic: 'Academic Markers' },
  { id: 6, type: 'fill', text: 'Complete: "El ___ de esta política es beneficiar a la comunidad" (purpose/aim)', answer: 'propósito', fromLesson: 'L6.1', topic: 'Purpose' },

  // === L6.2 (6 questions) ===
  { id: 7, type: 'mc', text: '"Hubiera/hubiese podido" expresses:', options: ['Future certainty', 'A past hypothetical that did not happen', 'A present state', 'A command'], answer: 1, fromLesson: 'L6.2', topic: 'Past Hypothetical' },
  { id: 8, type: 'fill', text: 'Complete: "De ___ sabido, habría actuado diferente" (had I known)', answer: 'haber', fromLesson: 'L6.2', topic: 'De haber + participle' },
  { id: 9, type: 'mc', text: '"Si no fuera por ti, no estaría aquí" is a:', options: ['Past hypothetical', 'Present contrary-to-fact conditional', 'Future plan', 'Command'], answer: 1, fromLesson: 'L6.2', topic: 'Conditionals' },
  { id: 10, type: 'tf', text: '"De no ser por la lluvia, habríamos salido" means "If it were not for the rain, we would have gone out."', answer: true, fromLesson: 'L6.2', topic: 'De no ser por' },
  { id: 11, type: 'mc', text: '"Ojalá hubiera estudiado más" expresses:', options: ['A future wish', 'Regret about the past', 'A present desire', 'An obligation'], answer: 1, fromLesson: 'L6.2', topic: 'Ojalá + pluperfect subjunctive' },
  { id: 12, type: 'fill', text: 'Complete: "Si hubiera ___ antes, habría llegado a tiempo" (left/departed)', answer: 'salido', fromLesson: 'L6.2', topic: 'Pluperfect Subjunctive' },

  // === L6.3 (7 questions) ===
  { id: 13, type: 'mc', text: '"La metáfora" is:', options: ['A grammatical error', 'A figure of speech comparing unlike things without "like"', 'A type of verb', 'A formal greeting'], answer: 1, fromLesson: 'L6.3', topic: 'Literary Devices' },
  { id: 14, type: 'fill', text: 'Complete: "El autor utiliza la ___ para exagerar el efecto" (hyperbole)', answer: 'hipérbole', fromLesson: 'L6.3', topic: 'Hyperbole' },
  { id: 15, type: 'mc', text: '"El realismo mágico" is most associated with:', options: ['Spanish poetry', 'Latin American narrative fiction', 'Medieval chronicles', 'Modern journalism'], answer: 1, fromLesson: 'L6.3', topic: 'Literary Movements' },
  { id: 16, type: 'tf', text: 'Gabriel García Márquez is the most famous representative of magical realism.', answer: true, fromLesson: 'L6.3', topic: 'Authors' },
  { id: 17, type: 'mc', text: '"La personificación" gives human qualities to:', options: ['Animals only', 'Non-human or inanimate things', 'Other people', 'Historical figures'], answer: 1, fromLesson: 'L6.3', topic: 'Personification' },
  { id: 18, type: 'fill', text: 'Complete: "La obra refleja una ___ social profunda" (critique)', answer: 'crítica', fromLesson: 'L6.3', topic: 'Literary Analysis' },
  { id: 19, type: 'mc', text: '"El narrador omnisciente" knows:', options: ['Only external events', 'Only the protagonist\'s thoughts', 'Everything about all characters', 'Nothing — it\'s unreliable'], answer: 2, fromLesson: 'L6.3', topic: 'Narrative Voice' },

  // === L6.4 (6 questions) ===
  { id: 20, type: 'mc', text: '"El neologismo" is:', options: ['An old word', 'A newly coined word', 'A borrowed word', 'A misspelling'], answer: 1, fromLesson: 'L6.4', topic: 'Neologisms' },
  { id: 21, type: 'fill', text: 'Complete: "El ___ es un cambio semántico donde una palabra amplía su significado" (semantic broadening)', answer: 'ensanchamiento', fromLesson: 'L6.4', topic: 'Semantic Change' },
  { id: 22, type: 'mc', text: '"El anglicismo" refers to a word borrowed from:', options: ['French', 'Arabic', 'English', 'Italian'], answer: 2, fromLesson: 'L6.4', topic: 'Borrowings' },
  { id: 23, type: 'tf', text: 'Languages are constantly evolving — no living language stays the same forever.', answer: true, fromLesson: 'L6.4', topic: 'Language Evolution' },
  { id: 24, type: 'mc', text: '"El registro" in linguistics refers to:', options: ['A list of students', 'The level of formality in language use', 'A type of accent', 'A grammatical rule'], answer: 1, fromLesson: 'L6.4', topic: 'Register' },
  { id: 25, type: 'fill', text: 'Complete: "La ___ lingüística estudia cómo cambian las lenguas" (diachronic/historical)', answer: 'lingüística', fromLesson: 'L6.4', topic: 'Linguistics' },

  // === L6.5 (6 questions) ===
  { id: 26, type: 'mc', text: '"La mediación intercultural" involves:', options: ['Translating word for word', 'Facilitating understanding between cultures', 'Studying ancient languages', 'Writing poetry'], answer: 1, fromLesson: 'L6.5', topic: 'Intercultural Mediation' },
  { id: 27, type: 'fill', text: 'Complete: "El choque ___ ocurre cuando nos enfrentamos a costumbres muy diferentes" (cultural)', answer: 'cultural', fromLesson: 'L6.5', topic: 'Culture Shock' },
  { id: 28, type: 'mc', text: '"El estereotipo" is:', options: ['An accurate description', 'An oversimplified generalization about a group', 'A cultural tradition', 'A type of food'], answer: 1, fromLesson: 'L6.5', topic: 'Stereotypes' },
  { id: 29, type: 'tf', text: '"La competencia intercultural" means being able to communicate effectively across cultures.', answer: true, fromLesson: 'L6.5', topic: 'Intercultural Competence' },
  { id: 30, type: 'mc', text: '"Adaptarse a una nueva cultura" requires:', options: ['Forgetting your own culture', 'Openness, empathy, and flexibility', 'Speaking perfectly', 'Avoiding all local customs'], answer: 1, fromLesson: 'L6.5', topic: 'Adaptation' },
  { id: 31, type: 'fill', text: 'Complete: "Es importante evitar los ___ cuando hablamos de otras culturas" (prejudices)', answer: 'prejuicios', fromLesson: 'L6.5', topic: 'Prejudice' },

  // === L6.6 Philosophy & Abstract Thought (7 questions) ===
  { id: 32, type: 'mc', text: '"La existencia precede a la esencia" is a core principle of:', options: ['Utilitarianism', 'Existentialism', 'Empiricism', 'Stoicism'], answer: 1, fromLesson: 'L6.6', topic: 'Existentialism' },
  { id: 33, type: 'fill', text: 'Complete: "El libre ___ es la capacidad de elegir" (free will)', answer: 'albedrío', fromLesson: 'L6.6', topic: 'Free Will' },
  { id: 34, type: 'mc', text: '"La falacia ad hominem" attacks:', options: ['The evidence', 'The person, not the argument', 'The conclusion', 'The methodology'], answer: 1, fromLesson: 'L6.6', topic: 'Fallacies' },
  { id: 35, type: 'tf', text: '"Correlación no implica causalidad" means that just because two things occur together, one does not necessarily cause the other.', answer: true, fromLesson: 'L6.6', topic: 'Logic' },
  { id: 36, type: 'mc', text: '"El imperativo categórico" was proposed by:', options: ['Sartre', 'Camus', 'Kant', 'Nietzsche'], answer: 2, fromLesson: 'L6.6', topic: 'Kantian Ethics' },
  { id: 37, type: 'fill', text: 'Complete: "La ___ nos obliga a repensar nuestras certezas" (paradox)', answer: 'paradoja', fromLesson: 'L6.6', topic: 'Paradox' },
  { id: 38, type: 'mc', text: '"En esencia" and "en el fondo" are examples of:', options: ['Greetings', 'Abstract expressions', 'Verb conjugations', 'Regional slang'], answer: 1, fromLesson: 'L6.6', topic: 'Abstract Expression' },

  // === L6.7 History of the Spanish Language (6 questions) ===
  { id: 39, type: 'mc', text: 'The Latin word "filius" evolved into which Spanish word?', options: ['Filo', 'Hijo', 'Fiel', 'Hilo'], answer: 1, fromLesson: 'L6.7', topic: 'Latin Origins' },
  { id: 40, type: 'fill', text: 'Complete: "___" proviene del árabe "inshallah" (hopefully/God willing)', answer: 'Ojalá', fromLesson: 'L6.7', topic: 'Arabic Influence' },
  { id: 41, type: 'mc', text: 'The prefix "al-" in almohada and alcalde comes from:', options: ['Latin', 'Greek', 'Arabic definite article', 'Nahuatl'], answer: 2, fromLesson: 'L6.7', topic: 'Arabic Prefix' },
  { id: 42, type: 'tf', text: '"Chocolate," "tomate," and "aguacate" all come from the Nahuatl language.', answer: true, fromLesson: 'L6.7', topic: 'Indigenous Languages' },
  { id: 43, type: 'mc', text: 'The Real Academia Española (RAE) was founded in:', options: ['1492', '1613', '1713', '1813'], answer: 2, fromLesson: 'L6.7', topic: 'RAE History' },
  { id: 44, type: 'fill', text: 'Complete: "En español medieval se decía ___ en vez de hablar" (to speak — old form)', answer: 'fablar', fromLesson: 'L6.7', topic: 'Medieval Spanish' },

  // === L6.8 Public Speaking & Rhetoric (6 questions) ===
  { id: 45, type: 'mc', text: '"Queremos paz. Queremos justicia. Queremos dignidad." is an example of:', options: ['Antithesis', 'Anaphora', 'Hyperbole', 'Irony'], answer: 1, fromLesson: 'L6.8', topic: 'Anaphora' },
  { id: 46, type: 'fill', text: 'Complete: "Hago un ___ a la acción" (call)', answer: 'llamado', fromLesson: 'L6.8', topic: 'Call to Action' },
  { id: 47, type: 'mc', text: 'The three pillars of persuasion (Aristotle) are:', options: ['Logos, ethos, pathos', 'Data, charts, conclusions', 'Opening, body, closing', 'Anaphora, antithesis, metaphor'], answer: 0, fromLesson: 'L6.8', topic: 'Persuasion' },
  { id: 48, type: 'tf', text: '"El pueblo unido jamás será vencido" originated as a Chilean protest chant.', answer: true, fromLesson: 'L6.8', topic: 'Famous Speeches' },
  { id: 49, type: 'mc', text: '"La antítesis" confronts:', options: ['Similar ideas', 'Opposing ideas for impact', 'Random facts', 'Historical dates'], answer: 1, fromLesson: 'L6.8', topic: 'Antithesis' },
  { id: 50, type: 'fill', text: 'Complete: "Para ___, quiero dejarles una reflexión" (to conclude)', answer: 'concluir', fromLesson: 'L6.8', topic: 'Speech Structure' },
]

export const L6F_CONFIG = {
  totalQuestions: 25,
  passingScore: 70,
  title: 'Level 6 — Final Assessment',
  subtitle: 'Mastery Spanish (C1-C2)',
  description: 'This comprehensive exam covers everything from Level 6: nuanced vocabulary, advanced conditionals, literary analysis, language evolution, intercultural competence, philosophy & abstract thought, history of the Spanish language, and public speaking & rhetoric. You need 70% (18/25) to earn your Level 6 badge. Good luck!',
  badgeEmoji: '💎',
  badgeName: 'Level 6 — Mastery Complete',
}
