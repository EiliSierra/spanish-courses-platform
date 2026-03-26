// Level 1 Final Assessment — Question Pool
// 50 questions covering all 8 lessons. Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 1 badge.

export interface ExamQuestion {
  id: number
  type: 'mc' | 'tf' | 'fill'
  text: string
  options?: string[]
  answer: number | boolean | string
  fromLesson: string
  topic: string
}

export const L1F_QUESTION_POOL: ExamQuestion[] = [
  // === L1.1 Sounds & Letters ===
  { id: 1, type: 'mc', text: 'The letter H in Spanish is:', options: ['Pronounced like English H', 'Always silent', 'Pronounced like J', 'Only silent before vowels'], answer: 1, fromLesson: 'L1.1', topic: 'Alphabet' },
  { id: 2, type: 'tf', text: 'The Spanish letter Ñ sounds like "ny" in "canyon."', answer: true, fromLesson: 'L1.1', topic: 'Unique Letters' },
  { id: 3, type: 'mc', text: 'How many letters does the Spanish alphabet have?', options: ['24', '26', '27', '30'], answer: 2, fromLesson: 'L1.1', topic: 'Alphabet' },
  { id: 4, type: 'mc', text: 'The LL in "pollo" sounds like:', options: ['"L" sound', '"Y" sound in most Latin America', '"SH" sound everywhere', 'Silent'], answer: 1, fromLesson: 'L1.1', topic: 'Pronunciation' },
  { id: 5, type: 'tf', text: 'Spanish vowels always have the same sound regardless of position.', answer: true, fromLesson: 'L1.1', topic: 'Vowels' },
  { id: 6, type: 'fill', text: 'The RAE 2010 name for the letter Y is "___"', answer: 'ye', fromLesson: 'L1.1', topic: 'Alphabet' },

  // === L1.2 Meeting People ===
  { id: 7, type: 'mc', text: '"Mucho gusto" means:', options: ['Good morning', 'Nice to meet you', 'See you later', 'How are you?'], answer: 1, fromLesson: 'L1.2', topic: 'Greetings' },
  { id: 8, type: 'fill', text: 'Complete: "Me ___ María" (My name is María)', answer: 'llamo', fromLesson: 'L1.2', topic: 'Introductions' },
  { id: 9, type: 'mc', text: 'How do you say "Good afternoon"?', options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Buen día'], answer: 1, fromLesson: 'L1.2', topic: 'Greetings' },
  { id: 10, type: 'tf', text: '"¿De dónde eres?" means "How old are you?"', answer: false, fromLesson: 'L1.2', topic: 'Introductions' },
  { id: 11, type: 'mc', text: 'You want to say "Please" in Spanish:', options: ['Gracias', 'De nada', 'Por favor', 'Perdón'], answer: 2, fromLesson: 'L1.2', topic: 'Polite' },
  { id: 12, type: 'fill', text: 'Complete: "Soy ___ Colombia" (I am from Colombia)', answer: 'de', fromLesson: 'L1.2', topic: 'Introductions' },

  // === L1.3 Numbers & Time ===
  { id: 13, type: 'mc', text: '"Veinticinco" is:', options: ['15', '20', '25', '50'], answer: 2, fromLesson: 'L1.3', topic: 'Numbers' },
  { id: 14, type: 'fill', text: 'Complete: "Son las ___ de la tarde" (It is 3 PM)', answer: 'tres', fromLesson: 'L1.3', topic: 'Time' },
  { id: 15, type: 'mc', text: '"Tengo veinte años" means:', options: ['I have 20 dollars', 'I am 20 years old', 'It is 20 degrees', 'There are 20 people'], answer: 1, fromLesson: 'L1.3', topic: 'Age' },
  { id: 16, type: 'tf', text: 'For 1:00 you say "Es la una" (singular), not "Son las una."', answer: true, fromLesson: 'L1.3', topic: 'Time' },
  { id: 17, type: 'mc', text: '"Miércoles" is:', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], answer: 2, fromLesson: 'L1.3', topic: 'Days' },
  { id: 18, type: 'fill', text: 'Write the number: cuarenta y dos = ___', answer: '42', fromLesson: 'L1.3', topic: 'Numbers' },

  // === L1.4 At the Café ===
  { id: 19, type: 'mc', text: '"La cuenta, por favor" means:', options: ['The menu, please', 'The check, please', 'The coffee, please', 'The tip, please'], answer: 1, fromLesson: 'L1.4', topic: 'Paying' },
  { id: 20, type: 'fill', text: 'Complete: "Quiero ___ café" (I want a coffee)', answer: 'un', fromLesson: 'L1.4', topic: 'Ordering' },
  { id: 21, type: 'mc', text: '"¿Cuánto cuesta?" means:', options: ['What is it?', 'Where is it?', 'How much does it cost?', 'Do you have it?'], answer: 2, fromLesson: 'L1.4', topic: 'Paying' },
  { id: 22, type: 'tf', text: '"Sobremesa" is the tradition of lingering at the table after a meal to talk.', answer: true, fromLesson: 'L1.4', topic: 'Culture' },
  { id: 23, type: 'mc', text: '"Café con leche" is:', options: ['Black coffee', 'Coffee with milk', 'Iced coffee', 'Coffee with sugar'], answer: 1, fromLesson: 'L1.4', topic: 'Drinks' },
  { id: 24, type: 'fill', text: 'Complete: "¡Está ___!" (It is delicious!)', answer: 'delicioso', fromLesson: 'L1.4', topic: 'Polite' },

  // === L1.5 Getting Around ===
  { id: 25, type: 'mc', text: '"A la izquierda" means:', options: ['To the right', 'To the left', 'Straight ahead', 'Behind'], answer: 1, fromLesson: 'L1.5', topic: 'Directions' },
  { id: 26, type: 'fill', text: 'Complete: "¿Dónde ___ el hotel?" (Where is the hotel?)', answer: 'está', fromLesson: 'L1.5', topic: 'Location' },
  { id: 27, type: 'tf', text: '"Derecho" and "a la derecha" mean the same thing.', answer: false, fromLesson: 'L1.5', topic: 'Directions' },
  { id: 28, type: 'mc', text: '"A + el" contracts to:', options: ['A el', 'Al', 'Del', 'A la'], answer: 1, fromLesson: 'L1.5', topic: 'Grammar' },
  { id: 29, type: 'mc', text: 'You are lost. You say:', options: ['Soy perdido', 'Estoy perdido', 'Tengo perdido', 'Hago perdido'], answer: 1, fromLesson: 'L1.5', topic: 'Location' },
  { id: 30, type: 'fill', text: 'Complete: "Quiero ir ___ aeropuerto" (to the airport)', answer: 'al', fromLesson: 'L1.5', topic: 'Transport' },

  // === L1.6 Family & Relationships ===
  { id: 31, type: 'mc', text: '"La abuela" means:', options: ['Aunt', 'Grandmother', 'Mother', 'Sister'], answer: 1, fromLesson: 'L1.6', topic: 'Family' },
  { id: 32, type: 'fill', text: 'Complete: "Mi mamá ___ llama Carmen" (is named)', answer: 'se', fromLesson: 'L1.6', topic: 'Describing' },
  { id: 33, type: 'mc', text: 'The plural of "mi" (my) is:', options: ['Mís', 'Mis', 'Mos', 'Mes'], answer: 1, fromLesson: 'L1.6', topic: 'Possessives' },
  { id: 34, type: 'tf', text: 'In Hispanic culture, "tía" can be used for close family friends, not just real aunts.', answer: true, fromLesson: 'L1.6', topic: 'Culture' },
  { id: 35, type: 'mc', text: '"El sobrino" means:', options: ['Cousin', 'Nephew', 'Grandson', 'Brother-in-law'], answer: 1, fromLesson: 'L1.6', topic: 'Family' },
  { id: 36, type: 'fill', text: 'Complete: "Tengo dos ___" (brothers/siblings)', answer: 'hermanos', fromLesson: 'L1.6', topic: 'Family' },
  { id: 37, type: 'mc', text: 'In Spanish-speaking countries, people typically have:', options: ['One last name', 'Two last names', 'Three last names', 'No last names'], answer: 1, fromLesson: 'L1.6', topic: 'Culture' },

  // === L1.7 Food & Drinks ===
  { id: 38, type: 'mc', text: '"El plato fuerte" means:', options: ['The appetizer', 'The main course', 'The dessert', 'The side dish'], answer: 1, fromLesson: 'L1.7', topic: 'Restaurant' },
  { id: 39, type: 'fill', text: 'Complete: "¿Qué ___?" (What do you recommend?)', answer: 'recomienda', fromLesson: 'L1.7', topic: 'Restaurant' },
  { id: 40, type: 'mc', text: '"Picante" means:', options: ['Sweet', 'Salty', 'Spicy', 'Bitter'], answer: 2, fromLesson: 'L1.7', topic: 'Describing Food' },
  { id: 41, type: 'tf', text: '"Caliente" means spicy in Spanish.', answer: false, fromLesson: 'L1.7', topic: 'Describing Food' },
  { id: 42, type: 'mc', text: 'You are vegetarian. You say:', options: ['Quiero carne', 'Soy vegetariano', 'No tengo hambre', 'Me gusta el pollo'], answer: 1, fromLesson: 'L1.7', topic: 'Dietary' },
  { id: 43, type: 'fill', text: 'Complete: "Para empezar, ___ la sopa" (I want)', answer: 'quiero', fromLesson: 'L1.7', topic: 'Ordering' },
  { id: 44, type: 'mc', text: 'The correct meal order is:', options: ['Postre → Entrada → Plato fuerte', 'Entrada → Plato fuerte → Postre', 'Plato fuerte → Postre → Entrada', 'Entrada → Postre → Plato fuerte'], answer: 1, fromLesson: 'L1.7', topic: 'Restaurant' },

  // === L1.8 Daily Routines ===
  { id: 45, type: 'mc', text: '"Me levanto" means:', options: ['I go to bed', 'I get up', 'I take a shower', 'I get dressed'], answer: 1, fromLesson: 'L1.8', topic: 'Routines' },
  { id: 46, type: 'fill', text: 'Complete: "___ gusta cocinar" (I like to cook)', answer: 'Me', fromLesson: 'L1.8', topic: 'Likes' },
  { id: 47, type: 'tf', text: '"Siempre" means "sometimes."', answer: false, fromLesson: 'L1.8', topic: 'Frequency' },
  { id: 48, type: 'mc', text: 'Which is a reflexive verb?', options: ['Trabajo', 'Cocino', 'Me ducho', 'Estudio'], answer: 2, fromLesson: 'L1.8', topic: 'Verbs' },
  { id: 49, type: 'mc', text: '"Por la noche" means:', options: ['In the morning', 'In the afternoon', 'At night', 'At noon'], answer: 2, fromLesson: 'L1.8', topic: 'Time' },
  { id: 50, type: 'fill', text: 'Complete: "Me ___ a las diez" (I go to bed at ten)', answer: 'acuesto', fromLesson: 'L1.8', topic: 'Routines' },
]

export const L1F_CONFIG = {
  totalQuestions: 25,        // Pick 25 from pool of 50
  passingScore: 70,          // 70% to pass = 18/25
  title: 'Level 1 — Final Assessment',
  subtitle: 'Foundations',
  description: 'This exam covers everything from Level 1: alphabet, greetings, numbers, food, directions, family, restaurant, and daily routines. You need 70% (18/25) to earn your Level 1 badge.',
  badgeEmoji: '🏆',
  badgeName: 'Level 1 — Foundations Complete',
}
