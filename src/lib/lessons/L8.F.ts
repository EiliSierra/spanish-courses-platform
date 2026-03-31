// Level 8 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L8.1–L8.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 8 badge.

import type { ExamQuestion } from './L4.F'
export type { ExamQuestion }

export const L8F_QUESTION_POOL: ExamQuestion[] = [
  // === L8.1 Medical Spanish (6 questions) ===
  { id: 1, type: 'mc', text: '"El diagnóstico diferencial" is used to:', options: ['Prescribe medication', 'Distinguish between conditions with similar symptoms', 'Schedule surgery', 'Order lab tests'], answer: 1, fromLesson: 'L8.1', topic: 'Diagnosis' },
  { id: 2, type: 'fill', text: 'Complete: "El paciente presenta ___ en el pecho" (pain)', answer: 'dolor', fromLesson: 'L8.1', topic: 'Symptoms' },
  { id: 3, type: 'mc', text: '"La historia clínica" contains:', options: ['Only the current diagnosis', 'The patient\'s complete medical background', 'Insurance information only', 'Pharmacy records'], answer: 1, fromLesson: 'L8.1', topic: 'Medical Records' },
  { id: 4, type: 'tf', text: '"Recetar" means to prescribe medication.', answer: true, fromLesson: 'L8.1', topic: 'Treatment' },
  { id: 5, type: 'mc', text: '"La presión arterial" refers to:', options: ['Heart rate', 'Blood pressure', 'Body temperature', 'Breathing rate'], answer: 1, fromLesson: 'L8.1', topic: 'Vital Signs' },
  { id: 6, type: 'fill', text: 'Complete: "Necesitamos hacer un análisis de ___" (blood)', answer: 'sangre', fromLesson: 'L8.1', topic: 'Lab Tests' },

  // === L8.2 Economics & Finance (6 questions) ===
  { id: 7, type: 'mc', text: '"La inflación" is a sustained increase in:', options: ['Employment', 'The general price level', 'Government spending', 'Population'], answer: 1, fromLesson: 'L8.2', topic: 'Macroeconomics' },
  { id: 8, type: 'fill', text: 'Complete: "El producto interno ___ mide el valor total de bienes y servicios" (gross)', answer: 'bruto', fromLesson: 'L8.2', topic: 'GDP' },
  { id: 9, type: 'mc', text: '"La oferta y la demanda" determines:', options: ['Only supply', 'Only demand', 'Market prices and quantities', 'Tax rates'], answer: 2, fromLesson: 'L8.2', topic: 'Market Forces' },
  { id: 10, type: 'tf', text: '"El tipo de cambio" refers to the exchange rate between currencies.', answer: true, fromLesson: 'L8.2', topic: 'Currency' },
  { id: 11, type: 'mc', text: '"La deuda externa" is money owed to:', options: ['Domestic banks', 'Foreign creditors', 'Local businesses', 'Individual citizens'], answer: 1, fromLesson: 'L8.2', topic: 'Public Finance' },
  { id: 12, type: 'fill', text: 'Complete: "La tasa de ___ ha alcanzado niveles históricos" (unemployment)', answer: 'desempleo', fromLesson: 'L8.2', topic: 'Labor Market' },

  // === L8.3 Technology & Innovation (7 questions) ===
  { id: 13, type: 'mc', text: '"La inteligencia artificial" can be described as:', options: ['Only robots', 'Systems that simulate human cognitive processes', 'Social media platforms', 'Hardware components'], answer: 1, fromLesson: 'L8.3', topic: 'AI' },
  { id: 14, type: 'fill', text: 'Complete: "La ciberseguridad protege los sistemas de ___ no autorizados" (access)', answer: 'accesos', fromLesson: 'L8.3', topic: 'Cybersecurity' },
  { id: 15, type: 'mc', text: '"El aprendizaje automático" is the Spanish term for:', options: ['Distance learning', 'Machine learning', 'Self-study', 'Automatic grading'], answer: 1, fromLesson: 'L8.3', topic: 'Machine Learning' },
  { id: 16, type: 'tf', text: '"La cadena de bloques" (blockchain) is a centralized database controlled by one entity.', answer: false, fromLesson: 'L8.3', topic: 'Blockchain' },
  { id: 17, type: 'mc', text: '"Los macrodatos" (big data) refers to:', options: ['Large physical servers', 'Massive datasets analyzed for patterns', 'Expensive computers', 'Government databases only'], answer: 1, fromLesson: 'L8.3', topic: 'Big Data' },
  { id: 18, type: 'fill', text: 'Complete: "El internet de las ___ conecta dispositivos cotidianos a la red" (things)', answer: 'cosas', fromLesson: 'L8.3', topic: 'IoT' },
  { id: 19, type: 'mc', text: '"La computación en la nube" allows:', options: ['Only local file storage', 'Accessing resources and services over the internet', 'Faster typing', 'Better screen resolution'], answer: 1, fromLesson: 'L8.3', topic: 'Cloud Computing' },

  // === L8.4 Gastronomy & Culinary Arts (6 questions) ===
  { id: 20, type: 'mc', text: '"La gastronomía molecular" applies:', options: ['Traditional cooking only', 'Scientific techniques to cuisine', 'Only baking methods', 'Agricultural science'], answer: 1, fromLesson: 'L8.4', topic: 'Molecular Gastronomy' },
  { id: 21, type: 'fill', text: 'Complete: "El maridaje perfecto combina vino y ___ de manera armoniosa" (food)', answer: 'comida', fromLesson: 'L8.4', topic: 'Pairing' },
  { id: 22, type: 'mc', text: '"El umami" is considered the fifth:', options: ['Course', 'Ingredient', 'Basic taste', 'Cooking method'], answer: 2, fromLesson: 'L8.4', topic: 'Flavor' },
  { id: 23, type: 'tf', text: '"La mise en place" refers to having all ingredients measured and prepared before cooking.', answer: true, fromLesson: 'L8.4', topic: 'Kitchen Organization' },
  { id: 24, type: 'mc', text: '"Flamear" means to:', options: ['Deep fry', 'Cook with flames/flambé', 'Steam', 'Freeze'], answer: 1, fromLesson: 'L8.4', topic: 'Techniques' },
  { id: 25, type: 'fill', text: 'Complete: "El ceviche se prepara con pescado crudo marinado en jugo de ___" (lime)', answer: 'limón', fromLesson: 'L8.4', topic: 'Latin Cuisine' },

  // === L8.5 Sports Commentary (6 questions) ===
  { id: 26, type: 'mc', text: '"El árbitro" in sports is:', options: ['The coach', 'The referee', 'The team captain', 'The announcer'], answer: 1, fromLesson: 'L8.5', topic: 'Officials' },
  { id: 27, type: 'fill', text: 'Complete: "El delantero marcó un ___ espectacular en el minuto noventa" (goal)', answer: 'gol', fromLesson: 'L8.5', topic: 'Soccer' },
  { id: 28, type: 'mc', text: '"La prórroga" in a match refers to:', options: ['Halftime', 'Extra time/overtime', 'The opening ceremony', 'The post-game interview'], answer: 1, fromLesson: 'L8.5', topic: 'Match Rules' },
  { id: 29, type: 'tf', text: '"La hinchada" refers to the passionate fans or supporters of a team.', answer: true, fromLesson: 'L8.5', topic: 'Fan Culture' },
  { id: 30, type: 'mc', text: '"El contraataque" is a tactical move that:', options: ['Defends the goal', 'Attacks quickly after recovering the ball', 'Substitutes a player', 'Calls a timeout'], answer: 1, fromLesson: 'L8.5', topic: 'Tactics' },
  { id: 31, type: 'fill', text: 'Complete: "El entrenador realizó tres ___ en el segundo tiempo" (substitutions)', answer: 'cambios', fromLesson: 'L8.5', topic: 'Game Management' },

  // === L8.6 Performing Arts (6 questions) ===
  { id: 32, type: 'mc', text: '"La puesta en escena" refers to:', options: ['Writing the script', 'The staging/production of a performance', 'Selling tickets', 'Auditions'], answer: 1, fromLesson: 'L8.6', topic: 'Theater' },
  { id: 33, type: 'fill', text: 'Complete: "La ___ del actor fue tan conmovedora que el público lloró" (performance/acting)', answer: 'actuación', fromLesson: 'L8.6', topic: 'Acting' },
  { id: 34, type: 'mc', text: '"El vestuario" in theater means:', options: ['The script', 'The costumes/wardrobe', 'The audience', 'The director'], answer: 1, fromLesson: 'L8.6', topic: 'Production' },
  { id: 35, type: 'tf', text: '"El ballet folklórico" combines classical ballet technique with traditional folk dance.', answer: true, fromLesson: 'L8.6', topic: 'Dance' },
  { id: 36, type: 'mc', text: '"El monólogo" is a performance by:', options: ['A full cast', 'A single performer', 'A choir', 'A dance troupe'], answer: 1, fromLesson: 'L8.6', topic: 'Performance Types' },
  { id: 37, type: 'fill', text: 'Complete: "El ___ diseña la iluminación y los efectos visuales del espectáculo" (lighting designer)', answer: 'iluminador', fromLesson: 'L8.6', topic: 'Technical Theater' },

  // === L8.7 Politics & Governance (7 questions) ===
  { id: 38, type: 'mc', text: '"La separación de poderes" divides government into:', options: ['Two branches', 'Three branches: executive, legislative, judicial', 'Five branches', 'Regional governments only'], answer: 1, fromLesson: 'L8.7', topic: 'Political Systems' },
  { id: 39, type: 'fill', text: 'Complete: "La rendición de ___ obliga a los funcionarios a explicar sus acciones" (accounts)', answer: 'cuentas', fromLesson: 'L8.7', topic: 'Accountability' },
  { id: 40, type: 'mc', text: '"La segunda vuelta" is held when:', options: ['The first vote is invalid', 'No candidate gets an absolute majority', 'The president requests it', 'A law is vetoed'], answer: 1, fromLesson: 'L8.7', topic: 'Elections' },
  { id: 41, type: 'tf', text: '"El clientelismo político" exchanges political favors for electoral loyalty.', answer: true, fromLesson: 'L8.7', topic: 'Corruption' },
  { id: 42, type: 'mc', text: '"Promulgar una ley" means:', options: ['To propose a law', 'To give a law binding force', 'To debate a law', 'To repeal a law'], answer: 1, fromLesson: 'L8.7', topic: 'Legislation' },
  { id: 43, type: 'fill', text: 'Complete: "La corrupción ___ socava las instituciones" (systemic)', answer: 'sistémica', fromLesson: 'L8.7', topic: 'Governance' },
  { id: 44, type: 'mc', text: '"La consulta popular" is:', options: ['A government survey', 'A public referendum', 'A press conference', 'A congressional hearing'], answer: 1, fromLesson: 'L8.7', topic: 'Civic Participation' },

  // === L8.8 Education & Teaching (6 questions) ===
  { id: 45, type: 'mc', text: '"La zona de desarrollo próximo" (Vygotsky) is:', options: ['The school district', 'The gap between current ability and potential with help', 'A type of classroom', 'An exam score range'], answer: 1, fromLesson: 'L8.8', topic: 'Learning Theory' },
  { id: 46, type: 'fill', text: 'Complete: "La evaluación ___ permite ajustar la enseñanza durante el proceso" (formative)', answer: 'formativa', fromLesson: 'L8.8', topic: 'Assessment' },
  { id: 47, type: 'mc', text: '"El aula invertida" transfers direct instruction to:', options: ['After-school programs', 'Outside the classroom (home/online)', 'The gymnasium', 'Study halls'], answer: 1, fromLesson: 'L8.8', topic: 'EdTech' },
  { id: 48, type: 'tf', text: '"La taxonomía de Bloom" classifies thinking levels from remembering to creating.', answer: true, fromLesson: 'L8.8', topic: 'Pedagogy' },
  { id: 49, type: 'mc', text: '"La brecha digital" refers to:', options: ['A broken computer', 'Unequal access to technology and internet', 'A new app', 'Digital art'], answer: 1, fromLesson: 'L8.8', topic: 'Equity' },
  { id: 50, type: 'fill', text: 'Complete: "La ___ establece criterios claros para evaluar trabajos" (rubric)', answer: 'rúbrica', fromLesson: 'L8.8', topic: 'Assessment Tools' },
]

export const L8F_CONFIG = {
  totalQuestions: 25,
  passingScore: 70,
  title: 'Level 8 — Final Assessment',
  subtitle: 'Specialization & Real-World Mastery',
  description: 'This final exam covers all Level 8 specializations: medical Spanish, economics, technology, gastronomy, sports commentary, performing arts, politics, and education. You need 70% (18/25) to earn your Level 8 badge!',
  badgeEmoji: '🏅',
  badgeName: 'Level 8 — Specialist Complete',
}
