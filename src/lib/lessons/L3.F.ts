// Level 3 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L3.1–L3.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 3 badge.

export interface ExamQuestion {
  id: number
  type: 'mc' | 'tf' | 'fill'
  text: string
  options?: string[]
  answer: number | boolean | string
  fromLesson: string
  topic: string
}

export const L3F_QUESTION_POOL: ExamQuestion[] = [
  // === L3.1 Past Tense ===
  { id: 1, type: 'mc', text: 'The preterite of "hablar" (yo) is:', options: ['Hablo', 'Hablé', 'Hablaba', 'Hablaré'], answer: 1, fromLesson: 'L3.1', topic: 'Regular -AR' },
  { id: 2, type: 'fill', text: 'Complete: "Ayer ___ al cine" (I went)', answer: 'fui', fromLesson: 'L3.1', topic: 'Irregular' },
  { id: 3, type: 'tf', text: 'SER and IR share the same preterite forms.', answer: true, fromLesson: 'L3.1', topic: 'Irregular' },
  { id: 4, type: 'mc', text: '"Tuve" is the preterite of:', options: ['Tomar', 'Tener', 'Tocar', 'Trabajar'], answer: 1, fromLesson: 'L3.1', topic: 'Irregular' },
  { id: 5, type: 'fill', text: 'Complete: "Ella ___ la tarea" (did — hacer)', answer: 'hizo', fromLesson: 'L3.1', topic: 'Irregular' },
  { id: 6, type: 'mc', text: '"Anoche" means:', options: ['This morning', 'Last night', 'Tomorrow night', 'Every night'], answer: 1, fromLesson: 'L3.1', topic: 'Time markers' },

  // === L3.2 Home & Housing ===
  { id: 7, type: 'mc', text: '"La cocina" is:', options: ['The bedroom', 'The bathroom', 'The kitchen', 'The living room'], answer: 2, fromLesson: 'L3.2', topic: 'Rooms' },
  { id: 8, type: 'fill', text: 'Complete: "Busco un ___" (apartment)', answer: 'departamento', fromLesson: 'L3.2', topic: 'Housing' },
  { id: 9, type: 'mc', text: '"Está amueblado" means:', options: ['It is empty', 'It is furnished', 'It is new', 'It is old'], answer: 1, fromLesson: 'L3.2', topic: 'Housing' },
  { id: 10, type: 'tf', text: '"Barrer el piso" means to mop the floor.', answer: false, fromLesson: 'L3.2', topic: 'Chores' },
  { id: 11, type: 'mc', text: '"El sofá" is:', options: ['The bed', 'The chair', 'The couch', 'The table'], answer: 2, fromLesson: 'L3.2', topic: 'Furniture' },
  { id: 12, type: 'fill', text: 'Complete: "¿Cuánto es la ___?" (rent)', answer: 'renta', fromLesson: 'L3.2', topic: 'Housing' },

  // === L3.3 Technology ===
  { id: 13, type: 'mc', text: '"La contraseña" is:', options: ['The username', 'The password', 'The email', 'The app'], answer: 1, fromLesson: 'L3.3', topic: 'Tech' },
  { id: 14, type: 'fill', text: 'Complete: "Necesito ___ el wifi" (to connect to)', answer: 'conectarme', fromLesson: 'L3.3', topic: 'Actions' },
  { id: 15, type: 'mc', text: '"Descargar una aplicación" means:', options: ['To delete an app', 'To download an app', 'To open an app', 'To update an app'], answer: 1, fromLesson: 'L3.3', topic: 'Actions' },
  { id: 16, type: 'tf', text: 'WhatsApp is more commonly used than SMS in Latin America.', answer: true, fromLesson: 'L3.3', topic: 'Culture' },
  { id: 17, type: 'mc', text: '"La pantalla" is:', options: ['The keyboard', 'The mouse', 'The screen', 'The speaker'], answer: 2, fromLesson: 'L3.3', topic: 'Devices' },
  { id: 18, type: 'fill', text: 'Complete: "Mi teléfono no ___" (doesn\'t work)', answer: 'funciona', fromLesson: 'L3.3', topic: 'Problems' },

  // === L3.4 Cooking ===
  { id: 19, type: 'mc', text: '"Picar" means:', options: ['To cook', 'To chop', 'To boil', 'To fry'], answer: 1, fromLesson: 'L3.4', topic: 'Actions' },
  { id: 20, type: 'fill', text: 'Complete: "Necesito una ___ de sal" (pinch/teaspoon)', answer: 'cucharadita', fromLesson: 'L3.4', topic: 'Recipes' },
  { id: 21, type: 'mc', text: '"La sartén" is:', options: ['The pot', 'The frying pan', 'The oven', 'The bowl'], answer: 1, fromLesson: 'L3.4', topic: 'Kitchen' },
  { id: 22, type: 'tf', text: '"Hervir" means to fry.', answer: false, fromLesson: 'L3.4', topic: 'Actions' },
  { id: 23, type: 'mc', text: 'The first step in making guacamole is usually:', options: ['Add salt', 'Mash the avocado', 'Cut the avocado', 'Serve'], answer: 2, fromLesson: 'L3.4', topic: 'Recipes' },
  { id: 24, type: 'fill', text: 'Complete: "___ la cebolla en cubos" (Cut — imperative)', answer: 'Corta', fromLesson: 'L3.4', topic: 'Actions' },

  // === L3.5 Sports & Hobbies ===
  { id: 25, type: 'mc', text: '"Me encanta nadar" means:', options: ['I hate swimming', 'I love swimming', 'I can swim', 'I need to swim'], answer: 1, fromLesson: 'L3.5', topic: 'Opinions' },
  { id: 26, type: 'fill', text: 'Complete: "Juego al fútbol ___ a la semana" (twice)', answer: 'dos veces', fromLesson: 'L3.5', topic: 'Frequency' },
  { id: 27, type: 'mc', text: '"Correr" is:', options: ['To swim', 'To run', 'To jump', 'To walk'], answer: 1, fromLesson: 'L3.5', topic: 'Sports' },
  { id: 28, type: 'tf', text: 'Fútbol (soccer) is the most popular sport in Latin America.', answer: true, fromLesson: 'L3.5', topic: 'Culture' },
  { id: 29, type: 'mc', text: '"Prefiero" means:', options: ['I need', 'I prefer', 'I can', 'I want'], answer: 1, fromLesson: 'L3.5', topic: 'Opinions' },
  { id: 30, type: 'fill', text: 'Complete: "Los fines de semana me gusta ___" (to paint)', answer: 'pintar', fromLesson: 'L3.5', topic: 'Hobbies' },

  // === L3.6 Environment ===
  { id: 31, type: 'mc', text: '"El bosque" is:', options: ['The desert', 'The ocean', 'The forest', 'The mountain'], answer: 2, fromLesson: 'L3.6', topic: 'Nature' },
  { id: 32, type: 'fill', text: 'Complete: "Debemos ___ el agua" (to save/conserve)', answer: 'ahorrar', fromLesson: 'L3.6', topic: 'Eco-actions' },
  { id: 33, type: 'mc', text: '"La tortuga" is:', options: ['The parrot', 'The turtle', 'The monkey', 'The snake'], answer: 1, fromLesson: 'L3.6', topic: 'Animals' },
  { id: 34, type: 'tf', text: 'The Amazon rainforest spans multiple South American countries.', answer: true, fromLesson: 'L3.6', topic: 'Geography' },
  { id: 35, type: 'mc', text: '"Reciclar" means:', options: ['To reduce', 'To reuse', 'To recycle', 'To remove'], answer: 2, fromLesson: 'L3.6', topic: 'Eco-actions' },
  { id: 36, type: 'fill', text: 'Complete: "Las islas ___ están en Ecuador" (Galápagos)', answer: 'Galápagos', fromLesson: 'L3.6', topic: 'Geography' },

  // === L3.7 Celebrations ===
  { id: 37, type: 'mc', text: '"La quinceañera" celebrates a girl turning:', options: ['13', '15', '16', '18'], answer: 1, fromLesson: 'L3.7', topic: 'Celebrations' },
  { id: 38, type: 'fill', text: 'Complete: "¡Feliz ___!" (birthday)', answer: 'cumpleaños', fromLesson: 'L3.7', topic: 'Greetings' },
  { id: 39, type: 'mc', text: 'Día de Muertos is celebrated in:', options: ['Argentina', 'Mexico', 'Chile', 'Colombia'], answer: 1, fromLesson: 'L3.7', topic: 'Holidays' },
  { id: 40, type: 'tf', text: '"Las Posadas" is a tradition celebrated before Christmas in Mexico.', answer: true, fromLesson: 'L3.7', topic: 'Traditions' },
  { id: 41, type: 'mc', text: '"Brindis" refers to:', options: ['A dance', 'A toast (cheers)', 'A gift', 'A song'], answer: 1, fromLesson: 'L3.7', topic: 'Traditions' },
  { id: 42, type: 'fill', text: 'Complete: "Rompimos la ___" (piñata)', answer: 'piñata', fromLesson: 'L3.7', topic: 'Traditions' },

  // === L3.8 Travel Stories ===
  { id: 43, type: 'mc', text: '"Vale la pena" means:', options: ['It is expensive', 'It is worth it', 'It is far', 'It is boring'], answer: 1, fromLesson: 'L3.8', topic: 'Opinions' },
  { id: 44, type: 'fill', text: 'Complete: "Te ___ visitar Machu Picchu" (I recommend)', answer: 'recomiendo', fromLesson: 'L3.8', topic: 'Recommendations' },
  { id: 45, type: 'mc', text: '"Conocí un lugar increíble" means:', options: ['I knew a place', 'I visited an incredible place', 'I lost a place', 'I found a map'], answer: 1, fromLesson: 'L3.8', topic: 'Experiences' },
  { id: 46, type: 'tf', text: '"Probé la comida local" means "I tried the local food."', answer: true, fromLesson: 'L3.8', topic: 'Experiences' },
  { id: 47, type: 'mc', text: '"El destino" means:', options: ['The destiny', 'The destination', 'The distance', 'The direction'], answer: 1, fromLesson: 'L3.8', topic: 'Travel' },
  { id: 48, type: 'fill', text: 'Complete: "Lo mejor del viaje ___" (was — ser preterite)', answer: 'fue', fromLesson: 'L3.8', topic: 'Opinions' },
  { id: 49, type: 'mc', text: '"Deberías ir" means:', options: ['You should go', 'You went', 'You must go', 'You can go'], answer: 0, fromLesson: 'L3.8', topic: 'Recommendations' },
  { id: 50, type: 'tf', text: '"Me encantó" uses past tense to express you loved something.', answer: true, fromLesson: 'L3.8', topic: 'Opinions' },
]

export const L3F_CONFIG = {
  totalQuestions: 25,
  passingScore: 70,
  title: 'Level 3 — Final Assessment',
  subtitle: 'Elementary Spanish (A2)',
  description: 'This exam covers everything from Level 3: past tense, home, technology, cooking, sports, environment, celebrations, and travel stories. You need 70% (18/25) to earn your Level 3 badge.',
  badgeEmoji: '🏅',
  badgeName: 'Level 3 — Intermediate Spanish Complete',
}
