import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Professions (12) ===
  { spanish: 'El doctor / La doctora', english: 'The doctor', pronunciation: 'ehl dohk-TOHR / lah dohk-TOH-rah', category: 'professions', audio: 'el-doctor' },
  { spanish: 'El profesor / La profesora', english: 'The teacher', pronunciation: 'ehl proh-feh-SOHR / lah proh-feh-SOH-rah', category: 'professions', audio: 'el-profesor' },
  { spanish: 'El ingeniero / La ingeniera', english: 'The engineer', pronunciation: 'ehl een-heh-nee-EH-roh / lah een-heh-nee-EH-rah', category: 'professions', audio: 'el-ingeniero' },
  { spanish: 'El abogado / La abogada', english: 'The lawyer', pronunciation: 'ehl ah-boh-GAH-doh / lah ah-boh-GAH-dah', category: 'professions', audio: 'el-abogado' },
  { spanish: 'El enfermero / La enfermera', english: 'The nurse', pronunciation: 'ehl ehn-fehr-MEH-roh / lah ehn-fehr-MEH-rah', category: 'professions', audio: 'el-enfermero' },
  { spanish: 'El cocinero / La cocinera', english: 'The cook / chef', pronunciation: 'ehl koh-see-NEH-roh / lah koh-see-NEH-rah', category: 'professions', audio: 'el-cocinero' },
  { spanish: 'El mesero / La mesera', english: 'The waiter / waitress', pronunciation: 'ehl meh-SEH-roh / lah meh-SEH-rah', category: 'professions', audio: 'el-mesero' },
  { spanish: 'El programador / La programadora', english: 'The programmer', pronunciation: 'ehl proh-grah-mah-DOHR / lah proh-grah-mah-DOH-rah', category: 'professions', audio: 'el-programador' },
  { spanish: 'El contador / La contadora', english: 'The accountant', pronunciation: 'ehl kohn-tah-DOHR / lah kohn-tah-DOH-rah', category: 'professions', audio: 'el-contador' },
  { spanish: 'El vendedor / La vendedora', english: 'The salesperson', pronunciation: 'ehl behn-deh-DOHR / lah behn-deh-DOH-rah', category: 'professions', audio: 'el-vendedor' },
  { spanish: 'El diseñador / La diseñadora', english: 'The designer', pronunciation: 'ehl dee-seh-nyah-DOHR / lah dee-seh-nyah-DOH-rah', category: 'professions', audio: 'el-disenador' },
  { spanish: 'El bombero / La bombera', english: 'The firefighter', pronunciation: 'ehl bohm-BEH-roh / lah bohm-BEH-rah', category: 'professions', audio: 'el-bombero' },

  // === Workplace (8) ===
  { spanish: 'La oficina', english: 'The office', pronunciation: 'lah oh-fee-SEE-nah', category: 'workplace', audio: 'la-oficina' },
  { spanish: 'El hospital', english: 'The hospital', pronunciation: 'ehl ohs-pee-TAHL', category: 'workplace', audio: 'el-hospital' },
  { spanish: 'La escuela', english: 'The school', pronunciation: 'lah ehs-KWEH-lah', category: 'workplace', audio: 'la-escuela' },
  { spanish: 'El restaurante', english: 'The restaurant', pronunciation: 'ehl rehs-tow-RAHN-teh', category: 'workplace', audio: 'el-restaurante' },
  { spanish: 'La empresa', english: 'The company', pronunciation: 'lah ehm-PREH-sah', category: 'workplace', audio: 'la-empresa' },
  { spanish: 'La tienda', english: 'The store', pronunciation: 'lah tee-EHN-dah', category: 'workplace', audio: 'la-tienda' },
  { spanish: 'El taller', english: 'The workshop', pronunciation: 'ehl tah-YEHR', category: 'workplace', audio: 'el-taller' },
  { spanish: 'Desde casa', english: 'From home', pronunciation: 'DEHS-deh KAH-sah', category: 'workplace', audio: 'desde-casa' },

  // === Work Actions & Schedule (10) ===
  { spanish: '¿A qué te dedicas?', english: 'What do you do (for work)?', pronunciation: 'ah keh teh deh-DEE-kahs', category: 'actions', audio: 'a-que-te-dedicas' },
  { spanish: 'Soy profesor', english: 'I am a teacher', pronunciation: 'soy proh-feh-SOHR', category: 'actions', audio: 'soy-profesor' },
  { spanish: 'Trabajo en una oficina', english: 'I work in an office', pronunciation: 'trah-BAH-hoh ehn OO-nah oh-fee-SEE-nah', category: 'actions', audio: 'trabajo-en-una-oficina' },
  { spanish: 'Trabajo de lunes a viernes', english: 'I work Monday to Friday', pronunciation: 'trah-BAH-hoh deh LOO-nehs ah bee-EHR-nehs', category: 'actions', audio: 'trabajo-de-lunes-a-viernes' },
  { spanish: 'Mi horario es flexible', english: 'My schedule is flexible', pronunciation: 'mee oh-RAH-ree-oh ehs flehk-SEE-bleh', category: 'actions', audio: 'mi-horario-es-flexible' },
  { spanish: 'Tengo una reunión', english: 'I have a meeting', pronunciation: 'TEHN-goh OO-nah reh-oo-nee-OHN', category: 'actions', audio: 'tengo-una-reunion' },
  { spanish: 'Estoy de vacaciones', english: 'I am on vacation', pronunciation: 'ehs-TOY deh bah-kah-see-OH-nehs', category: 'actions', audio: 'estoy-de-vacaciones' },
  { spanish: 'Me gusta mi trabajo', english: 'I like my job', pronunciation: 'meh GOOS-tah mee trah-BAH-hoh', category: 'actions', audio: 'me-gusta-mi-trabajo' },
  { spanish: 'Busco trabajo', english: 'I am looking for a job', pronunciation: 'BOOS-koh trah-BAH-hoh', category: 'actions', audio: 'busco-trabajo' },
  { spanish: 'Trabajo por mi cuenta', english: 'I am self-employed', pronunciation: 'trah-BAH-hoh pohr mee KWEHN-tah', category: 'actions', audio: 'trabajo-por-mi-cuenta' },

  // === Skills & Qualities (8) ===
  { spanish: 'Habla tres idiomas', english: 'He/She speaks three languages', pronunciation: 'AH-blah trehs ee-dee-OH-mahs', category: 'skills', audio: 'habla-tres-idiomas' },
  { spanish: 'Tiene experiencia', english: 'He/She has experience', pronunciation: 'tee-EH-neh ehks-peh-ree-EHN-see-ah', category: 'skills', audio: 'tiene-experiencia' },
  { spanish: 'Es muy profesional', english: 'He/She is very professional', pronunciation: 'ehs mooy proh-feh-see-oh-NAHL', category: 'skills', audio: 'es-muy-profesional' },
  { spanish: 'Trabaja en equipo', english: 'He/She works in a team', pronunciation: 'trah-BAH-hah ehn eh-KEE-poh', category: 'skills', audio: 'trabaja-en-equipo' },
  { spanish: 'Es responsable', english: 'He/She is responsible', pronunciation: 'ehs rehs-pohn-SAH-bleh', category: 'skills', audio: 'es-responsable' },
  { spanish: 'Tiene buena actitud', english: 'He/She has a good attitude', pronunciation: 'tee-EH-neh BWEH-nah ahk-tee-TOOD', category: 'skills', audio: 'tiene-buena-actitud' },
  { spanish: 'Es puntual', english: 'He/She is punctual', pronunciation: 'ehs poon-too-AHL', category: 'skills', audio: 'es-puntual' },
  { spanish: 'Aprende rápido', english: 'He/She learns quickly', pronunciation: 'ah-PREHN-deh RRAH-pee-doh', category: 'skills', audio: 'aprende-rapido' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L28PhraseByAudio = phraseByAudio

// === JOB INTERVIEW (unique activity) ===

export interface InterviewQuestion {
  interviewer: string
  english: string
  correctAnswer: string
  options: string[]
}

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    interviewer: '¿A qué se dedica actualmente?',
    english: 'What do you currently do?',
    correctAnswer: 'Soy programador en una empresa de tecnología.',
    options: ['Soy programador en una empresa de tecnología.', 'Me gusta mucho programar.', 'Tengo una computadora.', 'La tecnología es interesante.'],
  },
  {
    interviewer: '¿Cuántos años de experiencia tiene?',
    english: 'How many years of experience do you have?',
    correctAnswer: 'Tengo cinco años de experiencia.',
    options: ['Tengo cinco años de experiencia.', 'Tengo cinco años.', 'Son las cinco.', 'Me gusta trabajar cinco días.'],
  },
  {
    interviewer: '¿Cuáles son sus fortalezas?',
    english: 'What are your strengths?',
    correctAnswer: 'Soy responsable y trabajo bien en equipo.',
    options: ['Soy responsable y trabajo bien en equipo.', 'Estoy cansado pero contento.', 'Me gustan los equipos de fútbol.', 'Tengo el pelo corto.'],
  },
  {
    interviewer: '¿Por qué quiere trabajar aquí?',
    english: 'Why do you want to work here?',
    correctAnswer: 'Me gusta la empresa y quiero crecer profesionalmente.',
    options: ['Me gusta la empresa y quiero crecer profesionalmente.', 'Porque necesito vacaciones.', 'Porque la oficina está cerca de mi casa.', 'No sé, busco cualquier trabajo.'],
  },
  {
    interviewer: '¿Habla otros idiomas?',
    english: 'Do you speak other languages?',
    correctAnswer: 'Sí, hablo español e inglés.',
    options: ['Sí, hablo español e inglés.', 'Sí, me gusta el español.', 'No, solo como comida mexicana.', 'Sí, tengo un libro en inglés.'],
  },
  {
    interviewer: '¿Cuál es su horario ideal?',
    english: 'What is your ideal schedule?',
    correctAnswer: 'Prefiero de lunes a viernes, horario flexible.',
    options: ['Prefiero de lunes a viernes, horario flexible.', 'Me gusta dormir hasta tarde.', 'Los viernes son mi día favorito.', 'Trabajo cuando quiero.'],
  },
]

// === LESSON DATA ===

export const L28Data: LessonData = {
  id: 'L2.8',
  hero: {
    lessonId: 'L2.8',
    title: 'Work & Professions',
    subtitle: 'Jobs, workplace & career',
    description: 'Learn to talk about your job, describe professions, discuss work schedules, and handle basic job-related conversations in Spanish.',
    image: '/images/L2.8/L2.8.jpg',
    gradient: 'from-emerald-800/65 via-teal-700/55 to-green-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '💼', title: 'Name Professions', desc: 'Learn 12 common professions with masculine and feminine forms.' },
    { icon: '🏢', title: 'Describe Your Workplace', desc: 'Talk about where you work — office, hospital, school, or from home.' },
    { icon: '📅', title: 'Discuss Work Schedules', desc: 'Describe your hours, meetings, and vacation time.' },
    { icon: '🎯', title: 'Talk About Skills', desc: 'Describe professional qualities and what makes someone good at their job.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.3', label: 'Numbers & Days', detail: 'Days of the week and numbers from L1.3 describe your work schedule.' },
    { fromLesson: 'L1.8', label: 'Daily Routines', detail: 'Routine verbs from L1.8 apply to your workday too.' },
    { fromLesson: 'L2.7', label: 'Describing People', detail: 'Personality adjectives from L2.7 describe professional qualities.' },
  ],

  sectionTransitions: [
    { afterSection: 'professions', text: 'You know the jobs — now let\u2019s see where people work!' },
    { afterSection: 'workplace', text: 'Workplace ready — time to talk about what you DO at work.' },
    { afterSection: 'work-actions', text: 'You can describe your work! Now let\u2019s learn professional skills.' },
    { afterSection: 'dialogues', text: 'Great work conversations! Let\u2019s learn about work culture in Latin America.' },
    { afterSection: 'cultural', text: 'Now ace that job interview!' },
    { afterSection: 'job-interview', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: '¿A qué te dedicas?', english: 'What do you do?' },
    { spanish: 'Soy...', english: 'I am a...' },
    { spanish: 'Trabajo en...', english: 'I work at...' },
    { spanish: 'Mi horario', english: 'My schedule' },
    { spanish: 'Tengo experiencia', english: 'I have experience' },
    { spanish: 'Me gusta mi trabajo', english: 'I like my job' },
  ],

  pronunciationChallenges: [
    { spanish: '¿A qué te dedicas?', pronunciation: 'ah keh teh deh-DEE-kahs', english: 'What do you do for work?', audio: 'a-que-te-dedicas', tip: '"Dedicarse" is reflexive. This is THE question for asking about jobs. Stress on DEE.' },
    { spanish: 'Soy ingeniero', pronunciation: 'soy een-heh-nee-EH-roh', english: 'I am an engineer', audio: 'soy-ingeniero', tip: 'No article needed! "Soy ingeniero" NOT "Soy un ingeniero." This is unique to professions in Spanish.' },
    { spanish: 'Trabajo de lunes a viernes', pronunciation: 'trah-BAH-hoh deh LOO-nehs ah bee-EHR-nehs', english: 'I work Monday to Friday', audio: 'trabajo-de-lunes-a-viernes', tip: 'Days of the week from L1.3! No capitals in Spanish: lunes, martes, miércoles...' },
    { spanish: 'Tengo una reunión a las tres', pronunciation: 'TEHN-goh OO-nah reh-oo-nee-OHN ah lahs trehs', english: 'I have a meeting at three', audio: 'tengo-una-reunion-a-las-tres', tip: '"Reunión" — stress on the last syllable. "A las tres" = time from L1.3.' },
    { spanish: 'Es responsable y puntual', pronunciation: 'ehs rehs-pohn-SAH-bleh ee poon-too-AHL', english: 'He/She is responsible and punctual', audio: 'es-responsable-y-puntual', tip: 'These adjectives end in -E/-AL, so they DON\u2019T change for masculine/feminine!' },
    { spanish: 'Trabajo por mi cuenta', pronunciation: 'trah-BAH-hoh pohr mee KWEHN-tah', english: 'I am self-employed', audio: 'trabajo-por-mi-cuenta', tip: '"Por mi cuenta" = on my own. Very common in Latin America where many people are freelancers.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'professions', label: 'Professions' },
    { id: 'workplace', label: 'Workplace' },
    { id: 'work-actions', label: 'Work Actions' },
    { id: 'skills', label: 'Skills & Qualities' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'work-sorting', label: 'Work Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'job-interview', label: 'Job Interview' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'professions',
      title: 'Professions',
      description: 'Common jobs with masculine and feminine forms.',
      tabs: [
        { label: 'Healthcare & Education', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'professions').slice(0, 6) },
        { label: 'Business & More', color: 'teal', phrases: PHRASES.filter(p => p.category === 'professions').slice(6) },
      ],
    },
    {
      id: 'workplace',
      title: 'Workplace',
      description: 'Where people work — from offices to home.',
      tabs: [
        { label: 'Buildings', color: 'blue', phrases: PHRASES.filter(p => p.category === 'workplace').slice(0, 4) },
        { label: 'More Places', color: 'amber', phrases: PHRASES.filter(p => p.category === 'workplace').slice(4) },
      ],
    },
    {
      id: 'work-actions',
      title: 'Work Actions & Schedule',
      description: 'Talk about what you do, your schedule, and your work life.',
      tabs: [
        { label: 'About Your Job', color: 'purple', phrases: PHRASES.filter(p => p.category === 'actions').slice(0, 5), columns: 2 },
        { label: 'Schedule & Life', color: 'rose', phrases: PHRASES.filter(p => p.category === 'actions').slice(5), columns: 2 },
      ],
    },
    {
      id: 'skills',
      title: 'Professional Skills & Qualities',
      description: 'What makes someone great at their job.',
      tabs: [
        { label: 'Skills', color: 'blue', phrases: PHRASES.filter(p => p.category === 'skills').slice(0, 4), columns: 2 },
        { label: 'Qualities', color: 'orange', phrases: PHRASES.filter(p => p.category === 'skills').slice(4), columns: 2 },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Professions Without Articles!',
      content: 'In English you say "I am A teacher." In Spanish, you drop the article: "Soy profesor" (NOT "Soy un profesor"). This only applies to professions with SER. But if you add an adjective, the article returns: "Soy un buen profesor." This is one of the quirks of Spanish that catches every beginner!',
      example: 'Soy doctor | Soy ingeniera | BUT: Soy un buen doctor',
    },
    {
      title: 'Masculine & Feminine Professions',
      content: 'Most professions change endings: -O → -A (ingeniero/ingeniera), -OR → -ORA (doctor/doctora, programador/programadora). But some stay the same: "el/la periodista" (journalist), "el/la artista" (artist). Only the article changes! Memorize the exceptions.',
      example: 'Profesor → Profesora | Doctor → Doctora | Periodista → Periodista (no change)',
    },
    {
      title: '"Dedicarse" — The Work Question',
      content: '"¿A qué te dedicas?" is the most natural way to ask "What do you do?" in Spanish. It literally means "What do you dedicate yourself to?" More formal: "¿A qué se dedica?" (usted). Less formal: "¿En qué trabajas?" (What do you work in?). All three are correct — choose based on formality.',
      example: '¿A qué te dedicas? (tú) | ¿A qué se dedica? (usted) | ¿En qué trabajas?',
    },
    {
      title: '"Trabajo" — Noun AND Verb',
      content: '"Trabajo" can be "I work" (verb) OR "job/work" (noun). Context tells you which: "Trabajo en una oficina" (I work in an office) vs. "Me gusta mi trabajo" (I like my job). The verb "trabajar" is regular -AR: trabajo, trabajas, trabaja, trabajamos, trabajan.',
      example: 'Trabajo (verb): Trabajo aquí | Trabajo (noun): Mi trabajo es difícil',
      reviewFrom: 'L1.8',
    },
  ],

  flashcardGroups: [
    {
      key: 'professions',
      label: 'Professions',
      audioKeys: ['el-doctor', 'el-profesor', 'el-ingeniero', 'el-abogado', 'el-enfermero', 'el-cocinero', 'el-mesero', 'el-programador', 'el-contador', 'el-vendedor', 'el-disenador', 'el-bombero'],
    },
    {
      key: 'workplace',
      label: 'Workplace & Actions',
      audioKeys: ['la-oficina', 'el-hospital', 'la-escuela', 'la-empresa', 'desde-casa', 'a-que-te-dedicas', 'soy-profesor', 'trabajo-en-una-oficina', 'tengo-una-reunion', 'busco-trabajo'],
    },
    {
      key: 'skills',
      label: 'Skills & Schedule',
      audioKeys: ['habla-tres-idiomas', 'tiene-experiencia', 'es-muy-profesional', 'trabaja-en-equipo', 'es-responsable', 'es-puntual', 'trabajo-de-lunes-a-viernes', 'mi-horario-es-flexible'],
    },
  ],

  matchPairs: [
    { left: 'El doctor', right: 'The doctor' },
    { left: 'La oficina', right: 'The office' },
    { left: '¿A qué te dedicas?', right: 'What do you do?' },
    { left: 'Tengo una reunión', right: 'I have a meeting' },
    { left: 'El bombero', right: 'The firefighter' },
    { left: 'Busco trabajo', right: 'I\u2019m looking for a job' },
    { left: 'Es puntual', right: 'He/She is punctual' },
    { left: 'La empresa', right: 'The company' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Where Do They Work?',
      instruction: 'Match the profession to their workplace.',
      buckets: ['Hospital 🏥', 'Office 🏢', 'School 🏫', 'Restaurant 🍽️'],
      items: [
        { text: 'El doctor', bucket: 'Hospital 🏥' },
        { text: 'La enfermera', bucket: 'Hospital 🏥' },
        { text: 'El programador', bucket: 'Office 🏢' },
        { text: 'La contadora', bucket: 'Office 🏢' },
        { text: 'El profesor', bucket: 'School 🏫' },
        { text: 'La profesora', bucket: 'School 🏫' },
        { text: 'El cocinero', bucket: 'Restaurant 🍽️' },
        { text: 'La mesera', bucket: 'Restaurant 🍽️' },
      ],
    },
    {
      title: 'SER vs. TENER for Work',
      instruction: 'Does this use SER or TENER?',
      buckets: ['SER (identity)', 'TENER (possession)'],
      items: [
        { text: 'Soy profesor', bucket: 'SER (identity)' },
        { text: 'Es responsable', bucket: 'SER (identity)' },
        { text: 'Es puntual', bucket: 'SER (identity)' },
        { text: 'Es profesional', bucket: 'SER (identity)' },
        { text: 'Tengo experiencia', bucket: 'TENER (possession)' },
        { text: 'Tengo una reunión', bucket: 'TENER (possession)' },
        { text: 'Tiene buena actitud', bucket: 'TENER (possession)' },
        { text: 'Habla tres idiomas', bucket: 'TENER (possession)' },
      ],
    },
  ],
  sortSectionId: 'work-sorting',
  sortTitle: 'Work Sorting',

  dialogues: [
    {
      id: 'dialogue-party',
      title: 'Meeting at a Party — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Martín', text: 'Hola, ¿cómo te llamás? Soy Martín.', audio: '/audio/L2.8/phrases/d1-line1.mp3', annotations: [{ phrase: 'cómo te llamás', fromLesson: 'L1.2', note: 'Argentine "vos" form of llamarse' }] },
        { speaker: 'Paula', text: 'Soy Paula, mucho gusto. ¿A qué te dedicás?', audio: '/audio/L2.8/phrases/d1-line2.mp3', annotations: [{ phrase: 'mucho gusto', fromLesson: 'L1.2', note: 'Greeting from L1.2' }] },
        { speaker: 'Martín', text: 'Soy diseñador gráfico. Trabajo desde casa.', audio: '/audio/L2.8/phrases/d1-line3.mp3' },
        { speaker: 'Paula', text: '¡Qué bueno! Yo soy abogada. Trabajo en una empresa grande.', audio: '/audio/L2.8/phrases/d1-line4.mp3' },
        { speaker: 'Martín', text: '¿Te gusta tu trabajo?', audio: '/audio/L2.8/phrases/d1-line5.mp3' },
        { speaker: 'Paula', text: 'Sí, me gusta mucho. Es difícil pero interesante. ¿Y a vos?', audio: '/audio/L2.8/phrases/d1-line6.mp3' },
        { speaker: 'Martín', text: 'Me encanta. Mi horario es flexible y trabajo por mi cuenta.', audio: '/audio/L2.8/phrases/d1-line7.mp3' },
        { speaker: 'Paula', text: '¡Qué suerte! Yo trabajo de lunes a viernes, de nueve a seis.', audio: '/audio/L2.8/phrases/d1-line8.mp3', annotations: [{ phrase: 'de nueve a seis', fromLesson: 'L1.3', note: 'Time from L1.3' }] },
      ],
    },
    {
      id: 'dialogue-interview',
      title: 'A Job Interview — Monterrey',
      location: 'Monterrey',
      lines: [
        { speaker: 'Entrevistador', text: 'Buenos días. Siéntese, por favor. ¿Me puede contar sobre su experiencia?', audio: '/audio/L2.8/phrases/d2-line1.mp3' },
        { speaker: 'Candidata', text: 'Soy ingeniera. Tengo seis años de experiencia en empresas de tecnología.', audio: '/audio/L2.8/phrases/d2-line2.mp3' },
        { speaker: 'Entrevistador', text: '¿Cuáles son sus fortalezas?', audio: '/audio/L2.8/phrases/d2-line3.mp3' },
        { speaker: 'Candidata', text: 'Soy responsable, puntual y trabajo bien en equipo. También hablo inglés.', audio: '/audio/L2.8/phrases/d2-line4.mp3', annotations: [{ phrase: 'responsable, puntual', fromLesson: 'L2.7', note: 'Personality traits from L2.7' }] },
        { speaker: 'Entrevistador', text: '¿Qué horario prefiere?', audio: '/audio/L2.8/phrases/d2-line5.mp3' },
        { speaker: 'Candidata', text: 'Prefiero de lunes a viernes con horario flexible.', audio: '/audio/L2.8/phrases/d2-line6.mp3' },
        { speaker: 'Entrevistador', text: '¿Por qué quiere trabajar en nuestra empresa?', audio: '/audio/L2.8/phrases/d2-line7.mp3' },
        { speaker: 'Candidata', text: 'Me gusta la empresa porque es innovadora. Quiero crecer profesionalmente aquí.', audio: '/audio/L2.8/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Chat about jobs at a Buenos Aires party and sit through a job interview in Monterrey.',

  culturalNotes: [
    {
      title: 'Work Culture in Latin America',
      content: 'Work culture varies across Latin America. In Mexico and Colombia, business is relationship-driven — small talk before meetings is expected. In Argentina and Chile, work-life balance is highly valued. Many countries have a "hora de almuerzo" (lunch hour) of 1-2 hours. Remote work ("trabajo remoto" or "teletrabajo") has grown enormously since 2020. "Trabajo por mi cuenta" (self-employment) is also very common.',
    },
    {
      title: '"¿A qué te dedicas?" — More Than a Job Title',
      content: 'In Latin America, your answer to "¿A qué te dedicas?" can include passion projects, volunteer work, or studies — not just paid employment. "Soy estudiante" (I\u2019m a student), "Soy mamá" (I\u2019m a mom), and "Estoy emprendiendo" (I\u2019m starting a business) are all common, respected answers. The question values what you dedicate your life to, not just your paycheck.',
    },
    {
      title: 'The "Voseo" in Professional Settings',
      content: 'In Argentina, Uruguay, and parts of Central America, "vos" replaces "tú." At work: "¿A qué te dedicás?" (vos) vs. "¿A qué te dedicas?" (tú). In formal interviews, both countries use "usted": "¿A qué se dedica?" The "voseo" shows regional identity — understanding it helps you navigate professional settings across Latin America.',
    },
  ],
  culturalGradient: 'from-emerald-50 to-teal-50',

  quiz: [
    { id: 1, type: 'mc', text: 'How do you ask "What do you do (for work)?"', options: ['¿Qué haces?', '¿A qué te dedicas?', '¿Dónde trabajas?', '¿Cuál es tu nombre?'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Soy ___" (teacher, masculine)', answer: 'profesor' },
    { id: 3, type: 'mc', text: '"La enfermera" is:', options: ['The doctor', 'The nurse', 'The engineer', 'The teacher'], answer: 1 },
    { id: 4, type: 'tf', text: 'In Spanish, you say "Soy un doctor" with the article "un."', answer: false },
    { id: 5, type: 'mc', text: 'The feminine of "programador" is:', options: ['Programadora', 'Programadra', 'Programadoro', 'Programada'], answer: 0 },
    { id: 6, type: 'fill', text: 'Complete: "Trabajo ___ una oficina" (in)', answer: 'en' },
    { id: 7, type: 'mc', text: '"Estoy de vacaciones" means:', options: ['I am working', 'I am on vacation', 'I am at the office', 'I am busy'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Martín do?', options: ['Lawyer', 'Engineer', 'Graphic designer', 'Teacher'], answer: 2 },
    { id: 9, type: 'tf', text: '"Periodista" changes to "periodisto" for masculine.', answer: false },
    { id: 10, type: 'mc', text: '"Busco trabajo" means:', options: ['I found a job', 'I like my job', 'I\u2019m looking for a job', 'I quit my job'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Habla tres ___" (languages)', answer: 'idiomas' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, how many years of experience does the candidate have?', options: ['Three', 'Five', 'Six', 'Eight'], answer: 2 },
    { id: 13, type: 'mc', text: '"Desde casa" means:', options: ['Near home', 'From home', 'At home', 'Going home'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, "¿A qué te dedicas?" can include non-paid work.', answer: true },
    { id: 15, type: 'mc', text: '"Trabajo por mi cuenta" means:', options: ['I work for my account', 'I count my work', 'I am self-employed', 'I work part-time'], answer: 2 },
  ],

  audioBase: '/audio/L2.8/phrases',

  uniqueActivity: {
    id: 'JobInterviewL28',
    sectionId: 'job-interview',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    professions: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    workplace: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'work-actions': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    skills: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'work-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'job-interview': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
