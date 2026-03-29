// Level 2 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L2.1–L2.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 2 badge.

export interface ExamQuestion {
  id: number
  type: 'mc' | 'tf' | 'fill'
  text: string
  options?: string[]
  answer: number | boolean | string
  fromLesson: string
  topic: string
}

export const L2F_QUESTION_POOL: ExamQuestion[] = [
  // === L2.1 Health & Medical ===
  { id: 1, type: 'mc', text: '"Me duele la cabeza" means:', options: ['My head hurts', 'I have a cold', 'I need medicine', 'I feel dizzy'], answer: 0, fromLesson: 'L2.1', topic: 'Symptoms' },
  { id: 2, type: 'fill', text: 'Complete: "Necesito una ___" (appointment)', answer: 'cita', fromLesson: 'L2.1', topic: 'Medical' },
  { id: 3, type: 'mc', text: '"Tome esta medicina" means:', options: ['Buy this medicine', 'Take this medicine', 'Return this medicine', 'Find this medicine'], answer: 1, fromLesson: 'L2.1', topic: 'Treatment' },
  { id: 4, type: 'tf', text: '"Doler" works like "gustar" — "me duele" = it hurts me.', answer: true, fromLesson: 'L2.1', topic: 'Grammar' },
  { id: 5, type: 'mc', text: 'A doctor asks "¿Desde cuándo?" This means:', options: ['Where does it hurt?', 'Since when?', 'How old are you?', 'What happened?'], answer: 1, fromLesson: 'L2.1', topic: 'Medical' },
  { id: 6, type: 'fill', text: 'Complete: "Tengo dolor de ___" (throat)', answer: 'garganta', fromLesson: 'L2.1', topic: 'Symptoms' },

  // === L2.2 Weather & Seasons ===
  { id: 7, type: 'mc', text: '"Hace mucho calor" means:', options: ['It is very cold', 'It is very hot', 'It is raining', 'It is windy'], answer: 1, fromLesson: 'L2.2', topic: 'Weather' },
  { id: 8, type: 'fill', text: 'Complete: "___ mucho en abril" (It rains)', answer: 'Llueve', fromLesson: 'L2.2', topic: 'Weather' },
  { id: 9, type: 'mc', text: '"Necesito un paraguas" — you need a:', options: ['Jacket', 'Hat', 'Umbrella', 'Scarf'], answer: 2, fromLesson: 'L2.2', topic: 'Weather' },
  { id: 10, type: 'tf', text: 'Spanish uses "hacer" (to make/do) for weather: "Hace frío" = It is cold.', answer: true, fromLesson: 'L2.2', topic: 'Grammar' },
  { id: 11, type: 'mc', text: '"El otoño" is:', options: ['Spring', 'Summer', 'Fall', 'Winter'], answer: 2, fromLesson: 'L2.2', topic: 'Seasons' },
  { id: 12, type: 'fill', text: 'Complete: "Mañana va a ___" (rain)', answer: 'llover', fromLesson: 'L2.2', topic: 'Weather' },

  // === L2.3 Making Plans ===
  { id: 13, type: 'mc', text: '"Voy a estudiar" means:', options: ['I studied', 'I am going to study', 'I study', 'I want to study'], answer: 1, fromLesson: 'L2.3', topic: 'Future' },
  { id: 14, type: 'fill', text: 'Complete: "¿___ ir al cine?" (Do you want to)', answer: 'Quieres', fromLesson: 'L2.3', topic: 'Invitations' },
  { id: 15, type: 'mc', text: '"Lo siento, no puedo" means:', options: ['I am sorry, I cannot', 'I am sorry, I am late', 'I don\'t know', 'I don\'t want to'], answer: 0, fromLesson: 'L2.3', topic: 'Responses' },
  { id: 16, type: 'tf', text: '"Ir + a + infinitive" is how Spanish expresses the near future.', answer: true, fromLesson: 'L2.3', topic: 'Grammar' },
  { id: 17, type: 'mc', text: '"Este fin de semana" means:', options: ['Last weekend', 'This weekend', 'Every weekend', 'Next month'], answer: 1, fromLesson: 'L2.3', topic: 'Time' },
  { id: 18, type: 'fill', text: 'Complete: "¡Claro que ___!" (Of course!)', answer: 'sí', fromLesson: 'L2.3', topic: 'Responses' },

  // === L2.4 At the Hotel ===
  { id: 19, type: 'mc', text: '"Tengo una reservación" means:', options: ['I want a room', 'I have a reservation', 'I need a key', 'I am checking out'], answer: 1, fromLesson: 'L2.4', topic: 'Check-in' },
  { id: 20, type: 'fill', text: 'Complete: "La ___ de la habitación no funciona" (key)', answer: 'llave', fromLesson: 'L2.4', topic: 'Room' },
  { id: 21, type: 'mc', text: '"El aire acondicionado no funciona" — what is broken?', options: ['The wifi', 'The TV', 'The AC', 'The elevator'], answer: 2, fromLesson: 'L2.4', topic: 'Problems' },
  { id: 22, type: 'tf', text: 'The H in "habitación" is silent in Spanish.', answer: true, fromLesson: 'L2.4', topic: 'Pronunciation' },
  { id: 23, type: 'mc', text: '"Necesito más toallas" — you need more:', options: ['Pillows', 'Keys', 'Towels', 'Blankets'], answer: 2, fromLesson: 'L2.4', topic: 'Requests' },
  { id: 24, type: 'fill', text: 'Complete: "¿A qué hora es el ___?" (breakfast)', answer: 'desayuno', fromLesson: 'L2.4', topic: 'Services' },

  // === L2.5 At the Airport ===
  { id: 25, type: 'mc', text: '"La puerta de embarque" is:', options: ['The exit', 'The boarding gate', 'The check-in counter', 'The baggage claim'], answer: 1, fromLesson: 'L2.5', topic: 'Airport' },
  { id: 26, type: 'fill', text: 'Complete: "Quiero un asiento de ___" (window)', answer: 'ventanilla', fromLesson: 'L2.5', topic: 'Check-in' },
  { id: 27, type: 'mc', text: '"Mi vuelo tiene retraso" means:', options: ['My flight is on time', 'My flight is delayed', 'My flight is cancelled', 'My flight is boarding'], answer: 1, fromLesson: 'L2.5', topic: 'Flights' },
  { id: 28, type: 'tf', text: '"Ida y vuelta" means a one-way ticket.', answer: false, fromLesson: 'L2.5', topic: 'Tickets' },
  { id: 29, type: 'mc', text: '"Facturar el equipaje" means:', options: ['To lose luggage', 'To check in luggage', 'To carry luggage', 'To find luggage'], answer: 1, fromLesson: 'L2.5', topic: 'Check-in' },
  { id: 30, type: 'fill', text: 'Complete: "¿A qué hora ___ el vuelo?" (leaves)', answer: 'sale', fromLesson: 'L2.5', topic: 'Flights' },

  // === L2.6 Shopping & Clothing ===
  { id: 31, type: 'mc', text: '"Me queda grande" means:', options: ['I like it', 'It fits perfectly', 'It is too big on me', 'It is expensive'], answer: 2, fromLesson: 'L2.6', topic: 'Shopping' },
  { id: 32, type: 'fill', text: 'Complete: "¿Cuánto ___?" (How much does it cost?)', answer: 'cuesta', fromLesson: 'L2.6', topic: 'Prices' },
  { id: 33, type: 'mc', text: '"La falda roja" is:', options: ['The red shirt', 'The red skirt', 'The red dress', 'The red jacket'], answer: 1, fromLesson: 'L2.6', topic: 'Clothing' },
  { id: 34, type: 'tf', text: '"Azul" changes to "azula" for feminine nouns.', answer: false, fromLesson: 'L2.6', topic: 'Colors' },
  { id: 35, type: 'mc', text: '"Me lo llevo" means:', options: ['I\'ll return it', 'I\'ll take it', 'I\'ll try it', 'I don\'t want it'], answer: 1, fromLesson: 'L2.6', topic: 'Shopping' },
  { id: 36, type: 'fill', text: 'Complete: "¿Puedo ___?" (try it on)', answer: 'probármelo', fromLesson: 'L2.6', topic: 'Shopping' },

  // === L2.7 Describing People ===
  { id: 37, type: 'mc', text: '"Tiene los ojos verdes" means:', options: ['She is green', 'She has green eyes', 'She likes green', 'She wears green'], answer: 1, fromLesson: 'L2.7', topic: 'Appearance' },
  { id: 38, type: 'fill', text: 'Complete: "Es alto y ___" (thin)', answer: 'delgado', fromLesson: 'L2.7', topic: 'Appearance' },
  { id: 39, type: 'mc', text: '"Está cansado" uses ESTAR because:', options: ['It\'s permanent', 'It\'s temporary', 'It\'s physical', 'It\'s a profession'], answer: 1, fromLesson: 'L2.7', topic: 'Ser vs Estar' },
  { id: 40, type: 'tf', text: '"¿Cómo es?" asks about permanent traits, "¿Cómo está?" asks about current state.', answer: true, fromLesson: 'L2.7', topic: 'Ser vs Estar' },
  { id: 41, type: 'mc', text: 'The feminine of "simpático" is:', options: ['Simpática', 'Simpatica', 'Simpático', 'Simpáticas'], answer: 0, fromLesson: 'L2.7', topic: 'Adjectives' },
  { id: 42, type: 'fill', text: 'Complete: "___ una camisa azul" (He/She is wearing)', answer: 'Lleva', fromLesson: 'L2.7', topic: 'Describing' },

  // === L2.8 Work & Professions ===
  { id: 43, type: 'mc', text: '"¿A qué te dedicas?" means:', options: ['Where do you live?', 'What do you do for work?', 'What do you study?', 'How are you?'], answer: 1, fromLesson: 'L2.8', topic: 'Work' },
  { id: 44, type: 'fill', text: 'Complete: "Soy ___" (teacher, masculine)', answer: 'profesor', fromLesson: 'L2.8', topic: 'Professions' },
  { id: 45, type: 'mc', text: 'The feminine of "programador" is:', options: ['Programadora', 'Programadra', 'Programada', 'Programadoro'], answer: 0, fromLesson: 'L2.8', topic: 'Professions' },
  { id: 46, type: 'tf', text: 'In Spanish, you say "Soy un doctor" with the article.', answer: false, fromLesson: 'L2.8', topic: 'Grammar' },
  { id: 47, type: 'mc', text: '"Busco trabajo" means:', options: ['I found a job', 'I like my job', 'I\'m looking for a job', 'I quit my job'], answer: 2, fromLesson: 'L2.8', topic: 'Work' },
  { id: 48, type: 'fill', text: 'Complete: "Trabajo ___ lunes a viernes" (from)', answer: 'de', fromLesson: 'L2.8', topic: 'Schedule' },
  { id: 49, type: 'mc', text: '"Estoy de vacaciones" means:', options: ['I am working', 'I am on vacation', 'I am retired', 'I am busy'], answer: 1, fromLesson: 'L2.8', topic: 'Work' },
  { id: 50, type: 'tf', text: 'In Latin America, "¿A qué te dedicas?" can include non-paid work like studying or volunteering.', answer: true, fromLesson: 'L2.8', topic: 'Culture' },
]

export const L2F_CONFIG = {
  totalQuestions: 25,        // Pick 25 from pool of 50
  passingScore: 70,          // 70% to pass = 18/25
  title: 'Level 2 — Final Assessment',
  subtitle: 'Practical Spanish',
  description: 'This exam covers everything from Level 2: health, weather, plans, hotel, airport, shopping, describing people, and work. You need 70% (18/25) to earn your Level 2 badge.',
  badgeEmoji: '🎖️',
  badgeName: 'Level 2 — Practical Spanish Complete',
}
