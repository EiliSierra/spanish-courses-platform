import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Future Plans - Ir + a + infinitivo (10) ===
  { spanish: 'Voy a estudiar', english: 'I am going to study', pronunciation: 'boy ah ehs-too-dee-AHR', category: 'plans', audio: 'voy-a-estudiar' },
  { spanish: 'Vas a comer', english: 'You are going to eat', pronunciation: 'bahs ah koh-MEHR', category: 'plans', audio: 'vas-a-comer' },
  { spanish: 'Va a llover', english: 'It is going to rain', pronunciation: 'bah ah yoh-BEHR', category: 'plans', audio: 'va-a-llover' },
  { spanish: 'Vamos a salir', english: 'We are going to go out', pronunciation: 'BAH-mohs ah sah-LEER', category: 'plans', audio: 'vamos-a-salir' },
  { spanish: 'Van a viajar', english: 'They are going to travel', pronunciation: 'bahn ah bee-ah-HAHR', category: 'plans', audio: 'van-a-viajar' },
  { spanish: 'Voy a cocinar', english: 'I am going to cook', pronunciation: 'boy ah koh-see-NAHR', category: 'plans', audio: 'voy-a-cocinar' },
  { spanish: 'Vamos a ver una pel\u00edcula', english: 'We are going to watch a movie', pronunciation: 'BAH-mohs ah behr OO-nah peh-LEE-koo-lah', category: 'plans', audio: 'vamos-a-ver-una-pelicula' },
  { spanish: 'Voy a descansar', english: 'I am going to rest', pronunciation: 'boy ah dehs-kahn-SAHR', category: 'plans', audio: 'voy-a-descansar' },
  { spanish: 'Va a ser divertido', english: 'It is going to be fun', pronunciation: 'bah ah sehr dee-behr-TEE-doh', category: 'plans', audio: 'va-a-ser-divertido' },
  { spanish: 'Voy a ir al gimnasio', english: 'I am going to go to the gym', pronunciation: 'boy ah eer ahl heem-NAH-see-oh', category: 'plans', audio: 'voy-a-ir-al-gimnasio' },

  // === Invitations & Responses (10) ===
  { spanish: '\u00bfQuieres ir al cine?', english: 'Do you want to go to the movies?', pronunciation: 'kee-EH-rehs eer ahl SEE-neh', category: 'invitations', audio: 'quieres-ir-al-cine' },
  { spanish: '\u00bfVamos al parque?', english: 'Shall we go to the park?', pronunciation: 'BAH-mohs ahl PAHR-keh', category: 'invitations', audio: 'vamos-al-parque' },
  { spanish: '\u00bfTe gustar\u00eda cenar conmigo?', english: 'Would you like to have dinner with me?', pronunciation: 'teh goos-tah-REE-ah seh-NAHR kohn-MEE-goh', category: 'invitations', audio: 'te-gustaria-cenar-conmigo' },
  { spanish: '\u00bfEst\u00e1s libre el s\u00e1bado?', english: 'Are you free on Saturday?', pronunciation: 'ehs-TAHS LEE-breh ehl SAH-bah-doh', category: 'invitations', audio: 'estas-libre-el-sabado' },
  { spanish: '\u00bfA qu\u00e9 hora nos vemos?', english: 'What time shall we meet?', pronunciation: 'ah keh OH-rah nohs BEH-mohs', category: 'invitations', audio: 'a-que-hora-nos-vemos' },
  { spanish: '\u00a1S\u00ed, me encanta la idea!', english: 'Yes, I love the idea!', pronunciation: 'see meh ehn-KAHN-tah lah ee-DEH-ah', category: 'invitations', audio: 'si-me-encanta-la-idea' },
  { spanish: '\u00a1Claro que s\u00ed!', english: 'Of course!', pronunciation: 'KLAH-roh keh see', category: 'invitations', audio: 'claro-que-si' },
  { spanish: 'Lo siento, no puedo', english: 'I am sorry, I cannot', pronunciation: 'loh see-EHN-toh noh PWEH-doh', category: 'invitations', audio: 'lo-siento-no-puedo' },
  { spanish: 'Tengo otros planes', english: 'I have other plans', pronunciation: 'TEHN-goh OH-trohs PLAH-nehs', category: 'invitations', audio: 'tengo-otros-planes' },
  { spanish: '\u00bfQu\u00e9 tal otro d\u00eda?', english: 'How about another day?', pronunciation: 'keh tahl OH-troh DEE-ah', category: 'invitations', audio: 'que-tal-otro-dia' },

  // === Time Expressions (8) ===
  { spanish: 'Hoy', english: 'Today', pronunciation: 'oy', category: 'time', audio: 'hoy' },
  { spanish: 'Ma\u00f1ana', english: 'Tomorrow', pronunciation: 'mah-NYAH-nah', category: 'time', audio: 'manana' },
  { spanish: 'Esta noche', english: 'Tonight', pronunciation: 'EHS-tah NOH-cheh', category: 'time', audio: 'esta-noche' },
  { spanish: 'Este fin de semana', english: 'This weekend', pronunciation: 'EHS-teh feen deh seh-MAH-nah', category: 'time', audio: 'este-fin-de-semana' },
  { spanish: 'La pr\u00f3xima semana', english: 'Next week', pronunciation: 'lah PROHK-see-mah seh-MAH-nah', category: 'time', audio: 'la-proxima-semana' },
  { spanish: 'Por la ma\u00f1ana', english: 'In the morning', pronunciation: 'pohr lah mah-NYAH-nah', category: 'time', audio: 'por-la-manana' },
  { spanish: 'Por la tarde', english: 'In the afternoon', pronunciation: 'pohr lah TAHR-deh', category: 'time', audio: 'por-la-tarde' },
  { spanish: 'Por la noche', english: 'In the evening / At night', pronunciation: 'pohr lah NOH-cheh', category: 'time', audio: 'por-la-noche' },

  // === Places (8) ===
  { spanish: 'El cine', english: 'The movies / cinema', pronunciation: 'ehl SEE-neh', category: 'places', audio: 'el-cine' },
  { spanish: 'El parque', english: 'The park', pronunciation: 'ehl PAHR-keh', category: 'places', audio: 'el-parque' },
  { spanish: 'El restaurante', english: 'The restaurant', pronunciation: 'ehl rehs-tow-RAHN-teh', category: 'places', audio: 'el-restaurante' },
  { spanish: 'La playa', english: 'The beach', pronunciation: 'lah PLAH-yah', category: 'places', audio: 'la-playa' },
  { spanish: 'El gimnasio', english: 'The gym', pronunciation: 'ehl heem-NAH-see-oh', category: 'places', audio: 'el-gimnasio' },
  { spanish: 'La fiesta', english: 'The party', pronunciation: 'lah fee-EHS-tah', category: 'places', audio: 'la-fiesta' },
  { spanish: 'El centro comercial', english: 'The shopping mall', pronunciation: 'ehl SEHN-troh koh-mehr-see-AHL', category: 'places', audio: 'el-centro-comercial' },
  { spanish: 'La casa de un amigo', english: 'A friend\u2019s house', pronunciation: 'lah KAH-sah deh oon ah-MEE-goh', category: 'places', audio: 'la-casa-de-un-amigo' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L23PhraseByAudio = phraseByAudio

// === PLAN BUILDER SCENARIOS (unique activity) ===

export interface PlanScenario {
  situation: string
  english: string
  correctDay: string
  correctActivity: string
  dayOptions: string[]
  activityOptions: string[]
}

export const PLAN_BUILDER_SCENARIOS: PlanScenario[] = [
  {
    situation: 'Tu amigo dice: "\u00bfQuieres ir al cine el viernes por la noche?"',
    english: 'Your friend says: "Do you want to go to the movies Friday night?"',
    correctDay: 'Viernes', correctActivity: 'Ir al cine',
    dayOptions: ['Viernes', 'S\u00e1bado', 'Lunes', 'Domingo'],
    activityOptions: ['Ir al cine', 'Ir al parque', 'Cocinar', 'Estudiar'],
  },
  {
    situation: 'Mar\u00eda dice: "Vamos a la playa este s\u00e1bado por la ma\u00f1ana."',
    english: 'María says: "Let\'s go to the beach this Saturday morning."',
    correctDay: 'S\u00e1bado', correctActivity: 'Ir a la playa',
    dayOptions: ['S\u00e1bado', 'Domingo', 'Viernes', 'Jueves'],
    activityOptions: ['Ir a la playa', 'Ir al gimnasio', 'Ver una pel\u00edcula', 'Cenar'],
  },
  {
    situation: 'Carlos dice: "Ma\u00f1ana voy a cocinar para la familia."',
    english: 'Carlos says: "Tomorrow I am going to cook for the family."',
    correctDay: 'Ma\u00f1ana', correctActivity: 'Cocinar',
    dayOptions: ['Ma\u00f1ana', 'Hoy', 'El lunes', 'Este fin de semana'],
    activityOptions: ['Cocinar', 'Descansar', 'Salir', 'Estudiar'],
  },
  {
    situation: 'Ana dice: "El domingo vamos a descansar en casa."',
    english: 'Ana says: "On Sunday we are going to rest at home."',
    correctDay: 'Domingo', correctActivity: 'Descansar',
    dayOptions: ['Domingo', 'S\u00e1bado', 'Lunes', 'Viernes'],
    activityOptions: ['Descansar', 'Viajar', 'Ir al cine', 'Cocinar'],
  },
  {
    situation: 'Tu jefe dice: "El mi\u00e9rcoles vamos a tener una reuni\u00f3n."',
    english: 'Your boss says: "On Wednesday we are going to have a meeting."',
    correctDay: 'Mi\u00e9rcoles', correctActivity: 'Tener una reuni\u00f3n',
    dayOptions: ['Mi\u00e9rcoles', 'Martes', 'Jueves', 'Lunes'],
    activityOptions: ['Tener una reuni\u00f3n', 'Ir a la fiesta', 'Descansar', 'Viajar'],
  },
  {
    situation: 'Camila dice: "\u00bfEst\u00e1s libre el jueves? Vamos al gimnasio."',
    english: 'Camila says: "Are you free Thursday? Let\'s go to the gym."',
    correctDay: 'Jueves', correctActivity: 'Ir al gimnasio',
    dayOptions: ['Jueves', 'Viernes', 'Mi\u00e9rcoles', 'Martes'],
    activityOptions: ['Ir al gimnasio', 'Ir al cine', 'Ir a la playa', 'Cocinar'],
  },
  {
    situation: 'Luis dice: "Esta noche vamos a cenar en un restaurante nuevo."',
    english: 'Luis says: "Tonight we are going to have dinner at a new restaurant."',
    correctDay: 'Esta noche', correctActivity: 'Cenar',
    dayOptions: ['Esta noche', 'Ma\u00f1ana', 'El s\u00e1bado', 'El viernes'],
    activityOptions: ['Cenar', 'Desayunar', 'Ir al parque', 'Ver una pel\u00edcula'],
  },
  {
    situation: 'Tu amiga dice: "El martes voy a estudiar para el examen. \u00bfMe ayudas?"',
    english: 'Your friend says: "On Tuesday I am going to study for the exam. Can you help me?"',
    correctDay: 'Martes', correctActivity: 'Estudiar',
    dayOptions: ['Martes', 'Lunes', 'Mi\u00e9rcoles', 'Jueves'],
    activityOptions: ['Estudiar', 'Cocinar', 'Salir', 'Descansar'],
  },
]

// === LESSON DATA ===

export const L23Data: LessonData = {
  id: 'L2.3',
  hero: {
    lessonId: 'L2.3',
    title: 'Making Plans',
    subtitle: 'Invitations, future plans & where to go',
    description: 'Learn to make plans, invite friends, accept or decline invitations, and talk about what you are going to do. Master "ir + a + infinitivo" \u2014 the easiest way to express the future in Spanish.',
    image: '/images/L2.3/L2.3.jpg',
    gradient: 'from-violet-800/65 via-purple-700/55 to-fuchsia-700/65',
    accentColor: 'violet-200',
  },

  objectives: [
    { icon: '\ud83d\ude80', title: 'Express Future Plans', desc: 'Use "ir + a + infinitivo" to say what you are going to do.' },
    { icon: '\ud83d\udce8', title: 'Invite & Respond', desc: 'Ask someone to do something, accept, or politely decline.' },
    { icon: '\u23f0', title: 'Time & Place', desc: 'Set when and where to meet using time expressions and places.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.3', label: 'Days, Numbers & Time', detail: 'Days of the week (lunes\u2013domingo) and telling time ("a las ocho") are essential for setting plans.' },
    { fromLesson: 'L1.8', label: 'Daily Routines', detail: 'Verbs like "cocinar," "estudiar," "descansar" now combine with "ir + a" for future.' },
    { fromLesson: 'L2.2', label: 'Weather & Seasons', detail: '"Va a llover" already used "ir + a" for weather. Now extend it to all plans!' },
  ],

  sectionTransitions: [
    { afterSection: 'plans', text: 'You can express future plans \u2014 time to learn how to invite others!' },
    { afterSection: 'invitations', text: 'You can invite and respond \u2014 now let\u2019s set the time and place.' },
    { afterSection: 'time', text: 'You know when \u2014 let\u2019s learn where to go.' },
    { afterSection: 'dialogues', text: 'Great conversations! Let\u2019s explore how Latin Americans make plans.' },
    { afterSection: 'cultural', text: 'Time to be a social planner! Read invitations and organize the week.' },
    { afterSection: 'plan-builder', text: 'Final stretch \u2014 quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Voy a...', english: 'I am going to...' },
    { spanish: '\u00bfQuieres ir?', english: 'Do you want to go?' },
    { spanish: '\u00a1Claro que s\u00ed!', english: 'Of course!' },
    { spanish: 'Este fin de semana', english: 'This weekend' },
    { spanish: 'Lo siento, no puedo', english: 'Sorry, I can\u2019t' },
    { spanish: '\u00bfA qu\u00e9 hora?', english: 'At what time?' },
  ],

  pronunciationChallenges: [
    { spanish: 'Voy a ir al cine el viernes', pronunciation: 'boy ah eer ahl SEE-neh ehl bee-EHR-nehs', english: 'I am going to go to the movies on Friday', audio: 'voy-a-ir-al-cine-el-viernes', tip: '"Voy a ir" has two V sounds. In Spanish, V sounds like B: BOY ah EER.' },
    { spanish: '\u00bfQuieres ir al parque ma\u00f1ana?', pronunciation: 'kee-EH-rehs eer ahl PAHR-keh mah-NYAH-nah', english: 'Do you want to go to the park tomorrow?', audio: 'quieres-ir-al-parque-manana', tip: 'QU = "k" (from L1.1). "Quieres" = kee-EH-rehs, not "kwee-EH-rehs."' },
    { spanish: '\u00a1Claro que s\u00ed! Me encanta la idea', pronunciation: 'KLAH-roh keh see meh ehn-KAHN-tah', english: 'Of course! I love the idea', audio: 'claro-que-si-me-encanta-la-idea', tip: '"Encanta" has the stress on the second-to-last syllable: ehn-KAHN-tah.' },
    { spanish: 'Lo siento, tengo otros planes', pronunciation: 'loh see-EHN-toh TEHN-goh OH-trohs PLAH-nehs', english: 'I\u2019m sorry, I have other plans', audio: 'lo-siento-tengo-otros-planes', tip: '"Siento" has the diphthong IE: see-EHN-toh. Stress the EHN.' },
    { spanish: 'Vamos a salir este s\u00e1bado', pronunciation: 'BAH-mohs ah sah-LEER EHS-teh SAH-bah-doh', english: 'We are going to go out this Saturday', audio: 'vamos-a-salir-este-sabado', tip: '"Vamos" is the nosotros form of "ir." BAH-mohs, not VAH-mohs.' },
    { spanish: 'Mi\u00e9rcoles', pronunciation: 'mee-EHR-koh-lehs', english: 'Wednesday', audio: 'miercoles', tip: 'The hardest day to pronounce! Four syllables: mee-EHR-koh-lehs. Stress on EHR.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'plans', label: 'Future Plans' },
    { id: 'invitations', label: 'Invitations' },
    { id: 'time', label: 'Time & Places' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'plan-sorting', label: 'Plan Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'plan-builder', label: 'Plan Builder' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'plans',
      title: 'Future Plans: Ir + a + Infinitivo',
      description: 'The easiest way to say what you\u2019re GOING TO do. Formula: Voy/Vas/Va/Vamos/Van + a + verb. You already used this in L2.2: "Va a llover."',
      tabs: [
        { label: 'Yo / T\u00fa / \u00c9l', color: 'blue', phrases: PHRASES.filter(p => p.category === 'plans').slice(0, 5), columns: 2 },
        { label: 'Nosotros & More', color: 'teal', phrases: PHRASES.filter(p => p.category === 'plans').slice(5), columns: 2 },
      ],
    },
    {
      id: 'invitations',
      title: 'Inviting & Responding',
      description: 'How to ask someone to do something, and how to say yes or no politely.',
      tabs: [
        { label: 'Inviting', color: 'amber', phrases: PHRASES.filter(p => p.category === 'invitations').slice(0, 5), columns: 2 },
        { label: 'Responding', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'invitations').slice(5), columns: 2 },
      ],
    },
    {
      id: 'time',
      title: 'When & Where',
      description: 'Set the time and choose a place for your plans.',
      tabs: [
        { label: 'Time Expressions', color: 'orange', phrases: PHRASES.filter(p => p.category === 'time'), columns: 2 },
        { label: 'Places', color: 'rose', phrases: PHRASES.filter(p => p.category === 'places') },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: '"Ir + a" \u2014 The V/B Confusion',
      content: 'In Spanish, V and B sound the SAME. "Voy" sounds like "BOY," "vamos" like "BAH-mohs." This means "voy a ir" has three sounds that feel like B: boy-ah-eer. Don\u2019t try to make a separate V sound!',
      example: 'Voy = boy | Vas = bahs | Vamos = BAH-mohs',
      reviewFrom: 'L1.1',
    },
    {
      title: '"Mi\u00e9rcoles" \u2014 The 4-Syllable Challenge',
      content: '"Mi\u00e9rcoles" is the longest and hardest day to pronounce. It has 4 syllables with stress on the second: mee-EHR-koh-lehs. The IE is a diphthong. Practice slowly!',
      example: 'Mi\u00e9r-co-les = mee-EHR-koh-lehs (4 syllables)',
    },
    {
      title: '"Querer" + Infinitivo \u2014 Another Future Pattern',
      content: '"Quiero ir" (I want to go) is another way to express intentions. "Querer" is irregular: quiero, quieres, quiere. The QU = "k" sound from L1.1.',
      example: 'Quiero ir = I want to go | Quieres comer = Do you want to eat',
      reviewFrom: 'L1.1',
    },
  ],

  flashcardGroups: [
    {
      key: 'plans-invitations',
      label: 'Plans & Invitations',
      audioKeys: ['voy-a-estudiar', 'vas-a-comer', 'vamos-a-salir', 'van-a-viajar', 'voy-a-cocinar', 'vamos-a-ver-una-pelicula', 'quieres-ir-al-cine', 'vamos-al-parque', 'estas-libre-el-sabado', 'claro-que-si', 'lo-siento-no-puedo'],
    },
    {
      key: 'time-places',
      label: 'Time & Places',
      audioKeys: ['hoy', 'manana', 'esta-noche', 'este-fin-de-semana', 'la-proxima-semana', 'por-la-manana', 'el-cine', 'el-parque', 'el-restaurante', 'la-playa', 'el-gimnasio', 'la-fiesta'],
    },
  ],

  matchPairs: [
    { left: 'Voy a estudiar', right: 'I\u2019m going to study' },
    { left: 'Viernes', right: 'Friday' },
    { left: '\u00bfQuieres ir?', right: 'Do you want to go?' },
    { left: 'La playa', right: 'The beach' },
    { left: '\u00a1Claro que s\u00ed!', right: 'Of course!' },
    { left: 'Esta noche', right: 'Tonight' },
    { left: 'Lo siento', right: 'I\u2019m sorry' },
    { left: 'El cine', right: 'The movies' },
  ],
  matchLabels: { left: 'Espa\u00f1ol', right: 'English' },

  sortActivities: [
    {
      title: 'Accepting vs. Declining',
      instruction: 'Is this a YES or a NO to an invitation?',
      buckets: ['Accepting (\u2713)', 'Declining (\u2717)'],
      items: [
        { text: '\u00a1Claro que s\u00ed!', bucket: 'Accepting (\u2713)' },
        { text: '\u00a1Me encanta la idea!', bucket: 'Accepting (\u2713)' },
        { text: '\u00a1Perfecto!', bucket: 'Accepting (\u2713)' },
        { text: '\u00a1Vamos!', bucket: 'Accepting (\u2713)' },
        { text: '\u00a1Con mucho gusto!', bucket: 'Accepting (\u2713)' },
        { text: 'Lo siento, no puedo', bucket: 'Declining (\u2717)' },
        { text: 'Tengo otros planes', bucket: 'Declining (\u2717)' },
        { text: '\u00bfQu\u00e9 tal otro d\u00eda?', bucket: 'Declining (\u2717)' },
        { text: 'No estoy libre', bucket: 'Declining (\u2717)' },
        { text: 'Estoy ocupado/a', bucket: 'Declining (\u2717)' },
      ],
    },
    {
      title: 'Ir + a: Match the Subject',
      instruction: 'Which form of "ir" matches each subject?',
      buckets: ['Voy (yo)', 'Vas (t\u00fa)', 'Va (\u00e9l/ella)', 'Vamos (nosotros)'],
      items: [
        { text: 'Yo... a estudiar', bucket: 'Voy (yo)' },
        { text: 'Yo... a cocinar', bucket: 'Voy (yo)' },
        { text: 'T\u00fa... a comer', bucket: 'Vas (t\u00fa)' },
        { text: 'T\u00fa... a descansar', bucket: 'Vas (t\u00fa)' },
        { text: '\u00c9l... a llover', bucket: 'Va (\u00e9l/ella)' },
        { text: 'Ella... a viajar', bucket: 'Va (\u00e9l/ella)' },
        { text: 'Nosotros... a salir', bucket: 'Vamos (nosotros)' },
        { text: 'Nosotros... a ver una pel\u00edcula', bucket: 'Vamos (nosotros)' },
      ],
    },
  ],
  sortSectionId: 'plan-sorting',
  sortTitle: 'Plan Sorting',

  dialogues: [
    {
      id: 'dialogue-weekend',
      title: 'Weekend Plans \u2014 Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Ana', text: 'Hola, Carlos. \u00bfQu\u00e9 vas a hacer este fin de semana?', audio: '/audio/L2.3/phrases/d1-line1.mp3', annotations: [{ phrase: 'Hola', fromLesson: 'L1.2', note: 'Greeting from L1.2' }] },
        { speaker: 'Carlos', text: 'El s\u00e1bado voy a ir al gimnasio por la ma\u00f1ana. \u00bfY t\u00fa?', audio: '/audio/L2.3/phrases/d1-line2.mp3' },
        { speaker: 'Ana', text: '\u00bfQuieres ir al cine el s\u00e1bado por la noche?', audio: '/audio/L2.3/phrases/d1-line3.mp3' },
        { speaker: 'Carlos', text: '\u00a1Claro que s\u00ed! \u00bfA qu\u00e9 hora?', audio: '/audio/L2.3/phrases/d1-line4.mp3' },
        { speaker: 'Ana', text: 'A las ocho. La pel\u00edcula empieza a las ocho y media.', audio: '/audio/L2.3/phrases/d1-line5.mp3', annotations: [{ phrase: 'las ocho', fromLesson: 'L1.3', note: 'Time from L1.3' }] },
        { speaker: 'Carlos', text: 'Perfecto. Nos vemos el s\u00e1bado a las ocho.', audio: '/audio/L2.3/phrases/d1-line6.mp3' },
        { speaker: 'Ana', text: '\u00a1Va a ser divertido! \u00a1Hasta el s\u00e1bado!', audio: '/audio/L2.3/phrases/d1-line7.mp3' },
      ],
    },
    {
      id: 'dialogue-decline',
      title: 'Declining an Invitation \u2014 Bogot\u00e1',
      location: 'Bogot\u00e1',
      lines: [
        { speaker: 'Andr\u00e9s', text: '\u00bfEst\u00e1s libre el viernes? Vamos a cenar en un restaurante nuevo.', audio: '/audio/L2.3/phrases/d2-line1.mp3' },
        { speaker: 'Camila', text: 'Lo siento, el viernes no puedo. Tengo otros planes.', audio: '/audio/L2.3/phrases/d2-line2.mp3' },
        { speaker: 'Andr\u00e9s', text: '\u00bfQu\u00e9 tal el s\u00e1bado?', audio: '/audio/L2.3/phrases/d2-line3.mp3' },
        { speaker: 'Camila', text: 'El s\u00e1bado s\u00ed estoy libre. \u00a1Me encanta la idea!', audio: '/audio/L2.3/phrases/d2-line4.mp3' },
        { speaker: 'Andr\u00e9s', text: 'Perfecto. El restaurante se llama "El Cielo." \u00bfA las siete?', audio: '/audio/L2.3/phrases/d2-line5.mp3' },
        { speaker: 'Camila', text: '\u00a1A las siete est\u00e1 bien! Nos vemos el s\u00e1bado.', audio: '/audio/L2.3/phrases/d2-line6.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Listen to friends making weekend plans in Mexico City and politely rescheduling in Bogot\u00e1.',

  culturalNotes: [
    {
      title: '"La Hora Latina" \u2014 Flexible Time',
      content: 'In many Latin American countries, social time is flexible. If someone says "nos vemos a las ocho" (see you at 8), arriving at 8:30 is perfectly normal for social events. However, for business, doctor appointments, and flights, punctuality is expected. Know the context!',
    },
    {
      title: 'Weekend Culture \u2014 Family First',
      content: 'Sundays in Latin America are sacred family time. "Almuerzo familiar" (family lunch) on Sundays is a deeply rooted tradition. Plans with friends usually happen Friday or Saturday night. If someone declines a Sunday invitation, it\u2019s likely because of family.',
    },
    {
      title: 'Making Plans \u2014 WhatsApp Is King',
      content: 'Forget phone calls or emails. In Latin America, plans are made on WhatsApp. Group chats for friend groups, voice messages instead of typing, and last-minute changes are completely normal. "Te mando mensaje" (I\u2019ll text you) is how most plans get confirmed.',
    },
  ],
  culturalGradient: 'from-violet-50 to-purple-50',

  quiz: [
    { id: 1, type: 'mc', text: 'How do you say "I am going to study" in Spanish?', options: ['Estoy estudiando', 'Voy a estudiar', 'Estudio', 'Quiero estudiar'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "___ a comer" (You are going to eat)', answer: 'Vas' },
    { id: 3, type: 'mc', text: 'Which day comes after jueves?', options: ['Mi\u00e9rcoles', 'Viernes', 'S\u00e1bado', 'Martes'], answer: 1 },
    { id: 4, type: 'tf', text: 'In Spanish, days of the week are written in lowercase: "lunes," not "Lunes."', answer: true },
    { id: 5, type: 'mc', text: 'Your friend invites you but you\u2019re busy. The politest response is:', options: ['No', 'Lo siento, no puedo. \u00bfQu\u00e9 tal otro d\u00eda?', 'No quiero', 'No me gusta'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "\u00bfQuieres ___ al cine?" (Do you want to go to the movies?)', answer: 'ir' },
    { id: 7, type: 'mc', text: '"Este fin de semana" means:', options: ['Last weekend', 'This weekend', 'Next weekend', 'Every weekend'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what are Ana and Carlos going to do Saturday night?', options: ['Go to the gym', 'Go to the movies', 'Go to a restaurant', 'Cook dinner'], answer: 1 },
    { id: 9, type: 'tf', text: '"Vamos" is the nosotros form of "ir."', answer: true },
    { id: 10, type: 'mc', text: 'Which is NOT a way to accept an invitation?', options: ['\u00a1Claro que s\u00ed!', '\u00a1Me encanta la idea!', 'Tengo otros planes', '\u00a1Perfecto!'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Nos vemos el ___ a las ocho" (See you Saturday at 8)', answer: 's\u00e1bado' },
    { id: 12, type: 'mc', text: 'In "La Hora Latina," arriving 30 minutes late is normal for:', options: ['Doctor appointments', 'Flights', 'Social events with friends', 'Business meetings'], answer: 2 },
    { id: 13, type: 'mc', text: '"Voy a ir al gimnasio" \u2014 how is the V in "voy" pronounced?', options: ['Like English V', 'Like English B', 'Silent', 'Like F'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, plans are most commonly made via WhatsApp.', answer: true },
    { id: 15, type: 'mc', text: 'The formula for future plans is:', options: ['Estar + gerundio', 'Ir + a + infinitivo', 'Haber + participio', 'Tener + que + infinitivo'], answer: 1 },
  ],

  audioBase: '/audio/L2.3/phrases',

  uniqueActivity: {
    id: 'PlanBuilderL23',
    sectionId: 'plan-builder',
    sectionColor: 'bg-violet-50/40',
    sectionBorder: 'border-violet-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    plans: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    invitations: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    time: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'plan-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'plan-builder': { bg: 'bg-violet-50/40', border: 'border-violet-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
