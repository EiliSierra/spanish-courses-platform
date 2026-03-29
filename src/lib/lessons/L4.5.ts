import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Mental Health (10) ===
  { spanish: 'La salud mental', english: 'Mental health', pronunciation: 'lah sah-LOOD mehn-TAHL', category: 'mental-health', audio: 'la-salud-mental' },
  { spanish: 'Estoy estresado/a', english: 'I am stressed', pronunciation: 'ehs-TOY ehs-treh-SAH-doh', category: 'mental-health', audio: 'estoy-estresado' },
  { spanish: 'Necesito descansar', english: 'I need to rest', pronunciation: 'neh-seh-SEE-toh dehs-kahn-SAHR', category: 'mental-health', audio: 'necesito-descansar' },
  { spanish: 'Me siento ansioso/a', english: 'I feel anxious', pronunciation: 'meh see-EHN-toh ahn-see-OH-soh', category: 'mental-health', audio: 'me-siento-ansioso' },
  { spanish: 'La terapia me ayuda mucho', english: 'Therapy helps me a lot', pronunciation: 'lah teh-RAH-pee-ah meh ah-YOO-dah MOO-choh', category: 'mental-health', audio: 'la-terapia-me-ayuda' },
  { spanish: 'Practico la meditación', english: 'I practice meditation', pronunciation: 'PRAHK-tee-koh lah meh-dee-tah-see-OHN', category: 'mental-health', audio: 'practico-la-meditacion' },
  { spanish: 'Me siento agotado/a', english: 'I feel exhausted/burned out', pronunciation: 'meh see-EHN-toh ah-goh-TAH-doh', category: 'mental-health', audio: 'me-siento-agotado' },
  { spanish: 'Tengo que manejar el estrés', english: 'I have to manage stress', pronunciation: 'TEHN-goh keh mah-neh-HAHR ehl ehs-TREHS', category: 'mental-health', audio: 'manejar-el-estres' },
  { spanish: 'Respirar profundo ayuda', english: 'Deep breathing helps', pronunciation: 'rrehs-pee-RAHR proh-FOON-doh ah-YOO-dah', category: 'mental-health', audio: 'respirar-profundo' },
  { spanish: 'Mi bienestar emocional es importante', english: 'My emotional well-being is important', pronunciation: 'mee bee-ehn-ehs-TAHR eh-moh-see-oh-NAHL ehs eem-pohr-TAHN-teh', category: 'mental-health', audio: 'bienestar-emocional' },

  // === Lifestyle (10) ===
  { spanish: 'Llevo un estilo de vida saludable', english: 'I lead a healthy lifestyle', pronunciation: 'YEH-boh oon ehs-TEE-loh deh BEE-dah sah-loo-DAH-bleh', category: 'lifestyle', audio: 'estilo-de-vida-saludable' },
  { spanish: 'Duermo ocho horas cada noche', english: 'I sleep eight hours every night', pronunciation: 'DWEHR-moh OH-choh OH-rahs KAH-dah NOH-cheh', category: 'lifestyle', audio: 'duermo-ocho-horas' },
  { spanish: 'Tomo mucha agua durante el día', english: 'I drink a lot of water during the day', pronunciation: 'TOH-moh MOO-chah AH-gwah doo-RAHN-teh ehl DEE-ah', category: 'lifestyle', audio: 'tomo-mucha-agua' },
  { spanish: 'Evito el exceso de cafeína', english: 'I avoid excess caffeine', pronunciation: 'eh-BEE-toh ehl ehk-SEH-soh deh kah-feh-EE-nah', category: 'lifestyle', audio: 'evito-cafeina' },
  { spanish: 'No fumo ni bebo alcohol', english: 'I don\'t smoke or drink alcohol', pronunciation: 'noh FOO-moh nee BEH-boh ahl-koh-OHL', category: 'lifestyle', audio: 'no-fumo-ni-bebo' },
  { spanish: 'Me acuesto temprano', english: 'I go to bed early', pronunciation: 'meh ah-KWEHS-toh tehm-PRAH-noh', category: 'lifestyle', audio: 'me-acuesto-temprano' },
  { spanish: 'Paso tiempo al aire libre', english: 'I spend time outdoors', pronunciation: 'PAH-soh tee-EHM-poh ahl AH-ee-reh LEE-breh', category: 'lifestyle', audio: 'tiempo-al-aire-libre' },
  { spanish: 'Tengo una rutina de sueño', english: 'I have a sleep routine', pronunciation: 'TEHN-goh OO-nah rroo-TEE-nah deh SWEH-nyoh', category: 'lifestyle', audio: 'rutina-de-sueno' },
  { spanish: 'Desconecto el teléfono antes de dormir', english: 'I disconnect my phone before sleeping', pronunciation: 'dehs-koh-NEHK-toh ehl teh-LEH-foh-noh AHN-tehs deh dohr-MEER', category: 'lifestyle', audio: 'desconecto-telefono' },
  { spanish: 'El equilibrio es clave', english: 'Balance is key', pronunciation: 'ehl eh-kee-LEE-bree-oh ehs KLAH-beh', category: 'lifestyle', audio: 'equilibrio-es-clave' },

  // === Exercise & Diet (10) ===
  { spanish: 'Hago ejercicio tres veces por semana', english: 'I exercise three times a week', pronunciation: 'AH-goh eh-hehr-SEE-see-oh trehs BEH-sehs pohr seh-MAH-nah', category: 'exercise-diet', audio: 'hago-ejercicio' },
  { spanish: 'Como frutas y verduras todos los días', english: 'I eat fruits and vegetables every day', pronunciation: 'KOH-moh FROO-tahs ee behr-DOO-rahs TOH-dohs lohs DEE-ahs', category: 'exercise-diet', audio: 'como-frutas-verduras' },
  { spanish: 'Corro en el parque por las mañanas', english: 'I run in the park in the mornings', pronunciation: 'KOH-rroh ehn ehl PAHR-keh pohr lahs mah-NYAH-nahs', category: 'exercise-diet', audio: 'corro-en-el-parque' },
  { spanish: 'Practico yoga para relajarme', english: 'I practice yoga to relax', pronunciation: 'PRAHK-tee-koh YOH-gah PAH-rah rreh-lah-HAHR-meh', category: 'exercise-diet', audio: 'practico-yoga' },
  { spanish: 'Evito la comida chatarra', english: 'I avoid junk food', pronunciation: 'eh-BEE-toh lah koh-MEE-dah chah-TAH-rrah', category: 'exercise-diet', audio: 'evito-comida-chatarra' },
  { spanish: 'Levanto pesas en el gimnasio', english: 'I lift weights at the gym', pronunciation: 'leh-BAHN-toh PEH-sahs ehn ehl heem-NAH-see-oh', category: 'exercise-diet', audio: 'levanto-pesas' },
  { spanish: 'Llevo una dieta equilibrada', english: 'I follow a balanced diet', pronunciation: 'YEH-boh OO-nah dee-EH-tah eh-kee-lee-BRAH-dah', category: 'exercise-diet', audio: 'dieta-equilibrada' },
  { spanish: 'Camino al menos treinta minutos al día', english: 'I walk at least thirty minutes a day', pronunciation: 'kah-MEE-noh ahl MEH-nohs TREH-een-tah mee-NOO-tohs ahl DEE-ah', category: 'exercise-diet', audio: 'camino-treinta-minutos' },
  { spanish: 'Las proteínas son esenciales', english: 'Proteins are essential', pronunciation: 'lahs proh-teh-EE-nahs sohn eh-sehn-see-AH-lehs', category: 'exercise-diet', audio: 'proteinas-esenciales' },
  { spanish: 'Necesito estirar después de correr', english: 'I need to stretch after running', pronunciation: 'neh-seh-SEE-toh ehs-tee-RAHR dehs-PWEHS deh koh-RREHR', category: 'exercise-diet', audio: 'estirar-despues-correr' },

  // === Advice (8) ===
  { spanish: 'Te recomiendo que duermas más', english: 'I recommend that you sleep more', pronunciation: 'teh rreh-koh-mee-EHN-doh keh DWEHR-mahs mahs', category: 'advice', audio: 'recomiendo-duermas' },
  { spanish: 'Es importante que hagas ejercicio', english: 'It\'s important that you exercise', pronunciation: 'ehs eem-pohr-TAHN-teh keh AH-gahs eh-hehr-SEE-see-oh', category: 'advice', audio: 'importante-hagas-ejercicio' },
  { spanish: 'Sugiero que pruebes la meditación', english: 'I suggest you try meditation', pronunciation: 'soo-hee-EH-roh keh proo-EH-behs lah meh-dee-tah-see-OHN', category: 'advice', audio: 'sugiero-pruebes-meditacion' },
  { spanish: 'Deberías consultar a un especialista', english: 'You should see a specialist', pronunciation: 'deh-beh-REE-ahs kohn-sool-TAHR ah oon ehs-peh-see-ah-LEES-tah', category: 'advice', audio: 'deberias-consultar' },
  { spanish: 'Es mejor que reduzcas el azúcar', english: 'It\'s better that you reduce sugar', pronunciation: 'ehs meh-HOHR keh rreh-DOOS-kahs ehl ah-SOO-kahr', category: 'advice', audio: 'reduzcas-azucar' },
  { spanish: 'Te aconsejo que camines más', english: 'I advise you to walk more', pronunciation: 'teh ah-kohn-SEH-hoh keh kah-MEE-nehs mahs', category: 'advice', audio: 'aconsejo-camines' },
  { spanish: 'No es bueno que trabajes tanto', english: 'It\'s not good that you work so much', pronunciation: 'noh ehs BWEH-noh keh trah-BAH-hehs TAHN-toh', category: 'advice', audio: 'no-bueno-trabajes-tanto' },
  { spanish: 'Ojalá que te sientas mejor pronto', english: 'I hope you feel better soon', pronunciation: 'oh-hah-LAH keh teh see-EHN-tahs meh-HOHR PROHN-toh', category: 'advice', audio: 'ojala-sientas-mejor' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L45PhraseByAudio = phraseByAudio

// === WELLNESS COACH (unique activity) ===

export interface WellnessChallenge {
  concern: string
  english: string
  correctAdvice: string
  options: string[]
}

export const WELLNESS_CHALLENGES: WellnessChallenge[] = [
  {
    concern: 'No puedo dormir bien. Me acuesto tarde y me despierto cansado/a.',
    english: 'I can\'t sleep well. I go to bed late and wake up tired.',
    correctAdvice: 'Te recomiendo que desconectes el teléfono una hora antes de dormir.',
    options: ['Te recomiendo que desconectes el teléfono una hora antes de dormir.', 'Deberías comer más frutas y verduras.', 'Es importante que hagas más ejercicio por la mañana.', 'Sugiero que bebas más café para tener energía.'],
  },
  {
    concern: 'Me siento muy ansioso/a por el trabajo. No puedo relajarme.',
    english: 'I feel very anxious about work. I can\'t relax.',
    correctAdvice: 'Sugiero que pruebes la meditación y la respiración profunda.',
    options: ['Sugiero que pruebes la meditación y la respiración profunda.', 'Es mejor que trabajes más horas para terminar todo.', 'Te aconsejo que tomes más cafeína.', 'Deberías evitar hablar con tus amigos.'],
  },
  {
    concern: 'Quiero bajar de peso pero no me gusta ir al gimnasio.',
    english: 'I want to lose weight but I don\'t like going to the gym.',
    correctAdvice: 'Te aconsejo que camines treinta minutos al día y evites la comida chatarra.',
    options: ['Te aconsejo que camines treinta minutos al día y evites la comida chatarra.', 'Es mejor que no comas nada después de las seis.', 'Deberías hacer ejercicio cinco horas al día.', 'Sugiero que solo tomes agua y no comas.'],
  },
  {
    concern: 'Siempre estoy cansado/a y no tengo energía para nada.',
    english: 'I\'m always tired and I have no energy for anything.',
    correctAdvice: 'Es importante que duermas ocho horas y lleves una dieta equilibrada.',
    options: ['Es importante que duermas ocho horas y lleves una dieta equilibrada.', 'Te recomiendo que tomes bebidas energéticas todos los días.', 'Deberías trabajar menos y dormir todo el día.', 'Sugiero que evites el agua y tomes más café.'],
  },
  {
    concern: 'Paso muchas horas frente a la computadora y me duele la espalda.',
    english: 'I spend many hours in front of the computer and my back hurts.',
    correctAdvice: 'Deberías estirar cada hora y practicar yoga para fortalecer la espalda.',
    options: ['Deberías estirar cada hora y practicar yoga para fortalecer la espalda.', 'Es mejor que no te muevas para no empeorar el dolor.', 'Te aconsejo que trabajes acostado en la cama.', 'Sugiero que ignores el dolor, va a pasar solo.'],
  },
  {
    concern: 'Me siento agotado/a emocionalmente. Trabajo demasiado y no tengo tiempo para mí.',
    english: 'I feel emotionally exhausted. I work too much and have no time for myself.',
    correctAdvice: 'No es bueno que trabajes tanto. Te recomiendo que busques un equilibrio.',
    options: ['No es bueno que trabajes tanto. Te recomiendo que busques un equilibrio.', 'Deberías trabajar más duro para sentirte productivo.', 'Es importante que evites a tus amigos y familia.', 'Sugiero que tomes más café para seguir adelante.'],
  },
]

// === LESSON DATA ===

export const L45Data: LessonData = {
  id: 'L4.5',
  hero: {
    lessonId: 'L4.5',
    title: 'Health & Wellness',
    subtitle: 'Beyond the doctor — mental health, fitness, and living well',
    description: 'Go beyond basic doctor visits to discuss mental health, exercise routines, diet, stress management, and wellness culture. Learn to give and receive health advice using the subjunctive, and explore how Spanish-speaking cultures approach well-being holistically.',
    image: '/images/L4.5/L4.5.jpg',
    gradient: 'from-emerald-800/65 via-green-700/55 to-teal-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '🧠', title: 'Mental Health Vocabulary', desc: 'Express feelings of stress, anxiety, exhaustion, and the importance of emotional well-being.' },
    { icon: '🏃', title: 'Exercise & Diet', desc: 'Talk about workout routines, nutrition, and healthy habits using specific vocabulary.' },
    { icon: '💤', title: 'Lifestyle & Sleep', desc: 'Discuss sleep routines, screen habits, hydration, and work-life balance.' },
    { icon: '💬', title: 'Giving Wellness Advice', desc: 'Use subjunctive expressions (recomiendo que, sugiero que, es importante que) to give health advice.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L2.1', label: 'Health & Doctor Visits', detail: 'L2.1 covered basic medical vocabulary (me duele, tengo fiebre). Now you\'ll go deeper into wellness.' },
    { fromLesson: 'L4.2', label: 'Subjunctive for Advice', detail: 'L4.2 introduced the subjunctive mood. Now use it to give health and wellness recommendations.' },
    { fromLesson: 'L3.5', label: 'Sports & Hobbies', detail: 'L3.5 taught sports vocabulary. Now connect physical activity to overall health and fitness goals.' },
  ],

  sectionTransitions: [
    { afterSection: 'mental-health', text: 'You can talk about mental health! Now let\'s explore lifestyle habits.' },
    { afterSection: 'lifestyle', text: 'Great lifestyle vocabulary! Let\'s add exercise and diet.' },
    { afterSection: 'exercise-diet', text: 'Fitness and nutrition covered! Now learn to give wellness advice.' },
    { afterSection: 'dialogues', text: 'Wonderful wellness conversations! Let\'s explore the culture of well-being.' },
    { afterSection: 'cultural', text: 'Now put it all together — be a wellness coach!' },
    { afterSection: 'wellness-coach', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Me siento...', english: 'I feel...' },
    { spanish: 'Necesito...', english: 'I need...' },
    { spanish: 'Hago ejercicio...', english: 'I exercise...' },
    { spanish: 'Te recomiendo que...', english: 'I recommend that you...' },
    { spanish: 'Es importante que...', english: 'It\'s important that...' },
    { spanish: 'Mi bienestar...', english: 'My well-being...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Me siento estresado y ansioso', pronunciation: 'meh see-EHN-toh ehs-treh-SAH-doh ee ahn-see-OH-soh', english: 'I feel stressed and anxious', audio: 'estoy-estresado', tip: '"Estresado" has the stress on -SA-. Don\'t add an extra "e" at the beginning like in English "stressed." It\'s "ehs-treh-SAH-doh."' },
    { spanish: 'Practico la meditación cada mañana', pronunciation: 'PRAHK-tee-koh lah meh-dee-tah-see-OHN KAH-dah mah-NYAH-nah', english: 'I practice meditation every morning', audio: 'practico-la-meditacion', tip: '"Meditación" — the accent falls on the final syllable -CIÓN. This is a common pattern for -ción words (like nación, educación).' },
    { spanish: 'Te recomiendo que duermas ocho horas', pronunciation: 'teh rreh-koh-mee-EHN-doh keh DWEHR-mahs OH-choh OH-rahs', english: 'I recommend you sleep eight hours', audio: 'recomiendo-duermas', tip: '"Duermas" is subjunctive of dormir (o→ue). After "recomiendo que" you MUST use subjunctive. Present: duermes. Subjunctive: duermas.' },
    { spanish: 'Es importante que hagas ejercicio', pronunciation: 'ehs eem-pohr-TAHN-teh keh AH-gahs eh-hehr-SEE-see-oh', english: 'It\'s important that you exercise', audio: 'importante-hagas-ejercicio', tip: '"Hagas" is subjunctive of hacer. The "h" is silent! So it sounds like "AH-gahs." After "es importante que" → always subjunctive.' },
    { spanish: 'Llevo una dieta equilibrada', pronunciation: 'YEH-boh OO-nah dee-EH-tah eh-kee-lee-BRAH-dah', english: 'I follow a balanced diet', audio: 'dieta-equilibrada', tip: '"Equilibrada" has five syllables: eh-kee-lee-BRAH-dah. The double L in "llevo" sounds like "Y" in most of Latin America.' },
    { spanish: 'Deberías consultar a un especialista', pronunciation: 'deh-beh-REE-ahs kohn-sool-TAHR ah oon ehs-peh-see-ah-LEES-tah', english: 'You should see a specialist', audio: 'deberias-consultar', tip: '"Deberías" is conditional of deber — used for polite advice (you should). Stress on -RÍ-. "Especialista" — same word for male and female!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'mental-health', label: 'Mental Health' },
    { id: 'lifestyle', label: 'Lifestyle & Sleep' },
    { id: 'exercise-diet', label: 'Exercise & Diet' },
    { id: 'advice', label: 'Giving Advice' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Wellness Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'wellness-coach', label: 'Wellness Coach' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'mental-health',
      title: 'Mental Health & Emotional Well-being',
      description: 'Talk about stress, anxiety, therapy, and emotional self-care. Mental health is health!',
      tabs: [
        { label: 'Feelings & States', color: 'purple', phrases: PHRASES.filter(p => p.category === 'mental-health').slice(0, 5) },
        { label: 'Self-Care', color: 'teal', phrases: PHRASES.filter(p => p.category === 'mental-health').slice(5) },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Sleep Habits',
      description: 'Healthy habits beyond exercise — sleep, hydration, screen time, and daily routines.',
      tabs: [
        { label: 'Sleep & Rest', color: 'blue', phrases: PHRASES.filter(p => p.category === 'lifestyle').slice(0, 5) },
        { label: 'Daily Habits', color: 'amber', phrases: PHRASES.filter(p => p.category === 'lifestyle').slice(5) },
      ],
    },
    {
      id: 'exercise-diet',
      title: 'Exercise & Nutrition',
      description: 'From running to yoga, from fruits to proteins — build your fitness vocabulary.',
      tabs: [
        { label: 'Working Out', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'exercise-diet').slice(0, 5) },
        { label: 'Nutrition', color: 'orange', phrases: PHRASES.filter(p => p.category === 'exercise-diet').slice(5) },
      ],
    },
    {
      id: 'advice',
      title: 'Giving Wellness Advice',
      description: 'Use the subjunctive to recommend, suggest, and advise on health. "Te recomiendo que..." + subjunctive.',
      tabs: [
        { label: 'Recommendations', color: 'rose', phrases: PHRASES.filter(p => p.category === 'advice').slice(0, 4) },
        { label: 'More Advice', color: 'purple', phrases: PHRASES.filter(p => p.category === 'advice').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Subjunctive in Health Advice',
      content: 'When giving advice in Spanish, expressions like "te recomiendo que," "es importante que," and "sugiero que" ALWAYS trigger the subjunctive. This isn\'t optional — it\'s a grammar rule. "Te recomiendo que duermas" (not "duermes"). Practice these triggers and the subjunctive forms will become automatic.',
      example: 'Te recomiendo que duermas | Es importante que hagas | Sugiero que pruebes',
      reviewFrom: 'L4.2',
    },
    {
      title: 'Medical & Wellness Cognates',
      content: 'Many wellness words are cognates (similar in English and Spanish): terapia/therapy, meditación/meditation, proteínas/proteins, yoga/yoga, ansiedad/anxiety. But watch out for false friends! "Dieta" means diet (what you eat), and "equilibrio" means balance/equilibrium. Use cognates to your advantage!',
      example: 'Terapia = Therapy | Meditación = Meditation | Proteínas = Proteins',
    },
    {
      title: 'Reflexive Verbs for Self-Care',
      content: 'Self-care vocabulary uses many reflexive verbs: sentirse (to feel), relajarse (to relax), acostarse (to go to bed), despertarse (to wake up), estirarse (to stretch). Remember: the reflexive pronoun (me, te, se) goes BEFORE the conjugated verb: "me siento," "te relajas."',
      example: 'Me siento bien | Me acuesto temprano | Me relajo con música',
      reviewFrom: 'L1.8',
    },
    {
      title: 'Stress Patterns in -ción Words',
      content: 'Words ending in -ción always stress the last syllable: meditaCIÓN, relajaCIÓN, alimentaCIÓN, respiraCIÓN. These are always feminine (la meditación, la respiración). Drop the -ción and add -r to find the related verb: meditación → meditar, respiración → respirar.',
      example: 'MeditaCIÓN → meditar | RelajaCIÓN → relajar | RespiraCIÓN → respirar',
    },
  ],

  flashcardGroups: [
    {
      key: 'mental-health',
      label: 'Mental Health',
      audioKeys: ['la-salud-mental', 'estoy-estresado', 'necesito-descansar', 'me-siento-ansioso', 'la-terapia-me-ayuda', 'practico-la-meditacion', 'me-siento-agotado', 'manejar-el-estres', 'respirar-profundo', 'bienestar-emocional'],
    },
    {
      key: 'lifestyle',
      label: 'Lifestyle',
      audioKeys: ['estilo-de-vida-saludable', 'duermo-ocho-horas', 'tomo-mucha-agua', 'evito-cafeina', 'no-fumo-ni-bebo', 'me-acuesto-temprano', 'tiempo-al-aire-libre', 'rutina-de-sueno', 'desconecto-telefono', 'equilibrio-es-clave'],
    },
    {
      key: 'exercise-advice',
      label: 'Exercise & Advice',
      audioKeys: ['hago-ejercicio', 'como-frutas-verduras', 'corro-en-el-parque', 'practico-yoga', 'evito-comida-chatarra', 'recomiendo-duermas', 'importante-hagas-ejercicio', 'sugiero-pruebes-meditacion', 'ojala-sientas-mejor'],
    },
  ],

  matchPairs: [
    { left: 'Estoy estresado', right: 'I\'m stressed' },
    { left: 'La salud mental', right: 'Mental health' },
    { left: 'Hago ejercicio', right: 'I exercise' },
    { left: 'Dieta equilibrada', right: 'Balanced diet' },
    { left: 'Duermo ocho horas', right: 'I sleep eight hours' },
    { left: 'La meditación', right: 'Meditation' },
    { left: 'Comida chatarra', right: 'Junk food' },
    { left: 'El bienestar', right: 'Well-being' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Body vs. Mind',
      instruction: 'Is this about physical health or mental health?',
      buckets: ['Physical Health 🏃', 'Mental Health 🧠'],
      items: [
        { text: 'Hago ejercicio', bucket: 'Physical Health 🏃' },
        { text: 'Como frutas y verduras', bucket: 'Physical Health 🏃' },
        { text: 'Levanto pesas', bucket: 'Physical Health 🏃' },
        { text: 'Practico yoga', bucket: 'Physical Health 🏃' },
        { text: 'Practico la meditación', bucket: 'Mental Health 🧠' },
        { text: 'Me siento ansioso', bucket: 'Mental Health 🧠' },
        { text: 'La terapia me ayuda', bucket: 'Mental Health 🧠' },
        { text: 'Manejar el estrés', bucket: 'Mental Health 🧠' },
      ],
    },
    {
      title: 'Good Advice vs. Bad Advice',
      instruction: 'Is this good or bad wellness advice?',
      buckets: ['Good Advice ✅', 'Bad Advice ❌'],
      items: [
        { text: 'Duerme ocho horas', bucket: 'Good Advice ✅' },
        { text: 'Toma mucha agua', bucket: 'Good Advice ✅' },
        { text: 'Camina treinta minutos al día', bucket: 'Good Advice ✅' },
        { text: 'Lleva una dieta equilibrada', bucket: 'Good Advice ✅' },
        { text: 'Toma más café para dormir', bucket: 'Bad Advice ❌' },
        { text: 'Trabaja 16 horas sin descanso', bucket: 'Bad Advice ❌' },
        { text: 'Evita hacer ejercicio', bucket: 'Bad Advice ❌' },
        { text: 'Ignora tu salud mental', bucket: 'Bad Advice ❌' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Wellness Sorting',

  dialogues: [
    {
      id: 'dialogue-stress',
      title: 'Managing Work Stress — Lima',
      location: 'Lima',
      lines: [
        { speaker: 'Valentina', text: 'Últimamente me siento muy estresada con el trabajo.', audio: '/audio/L4.5/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: '¿En serio? ¿Qué está pasando?', audio: '/audio/L4.5/phrases/d1-line2.mp3' },
        { speaker: 'Valentina', text: 'Trabajo muchas horas y no duermo bien. Me siento agotada.', audio: '/audio/L4.5/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Te recomiendo que hables con tu jefe sobre tu carga de trabajo.', audio: '/audio/L4.5/phrases/d1-line4.mp3', annotations: [{ phrase: 'recomiendo que hables', fromLesson: 'L4.2', note: 'Subjunctive after recomiendo que — from L4.2' }] },
        { speaker: 'Valentina', text: 'Sí, tienes razón. También necesito una rutina de sueño.', audio: '/audio/L4.5/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Es importante que desconectes el teléfono antes de dormir.', audio: '/audio/L4.5/phrases/d1-line6.mp3' },
        { speaker: 'Valentina', text: '¿Tú qué haces para manejar el estrés?', audio: '/audio/L4.5/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: 'Practico meditación y hago yoga dos veces por semana. Me ayuda mucho.', audio: '/audio/L4.5/phrases/d1-line8.mp3', annotations: [{ phrase: 'dos veces por semana', fromLesson: 'L3.5', note: 'Frequency expressions from Sports L3.5' }] },
        { speaker: 'Valentina', text: 'Sugiero que lo intentemos juntos. Ojalá me ayude también.', audio: '/audio/L4.5/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-fitness',
      title: 'Getting in Shape — Medellín',
      location: 'Medellín',
      lines: [
        { speaker: 'Camila', text: 'Quiero empezar a hacer ejercicio pero no sé por dónde comenzar.', audio: '/audio/L4.5/phrases/d2-line1.mp3' },
        { speaker: 'Andrés', text: 'Te aconsejo que empieces con algo simple, como caminar treinta minutos al día.', audio: '/audio/L4.5/phrases/d2-line2.mp3' },
        { speaker: 'Camila', text: '¿Y la dieta? Como mucha comida chatarra.', audio: '/audio/L4.5/phrases/d2-line3.mp3' },
        { speaker: 'Andrés', text: 'Es mejor que reduzcas el azúcar y comas más frutas y verduras.', audio: '/audio/L4.5/phrases/d2-line4.mp3', annotations: [{ phrase: 'frutas y verduras', fromLesson: 'L2.1', note: 'Food/health vocabulary from L2.1' }] },
        { speaker: 'Camila', text: '¿Tú vas al gimnasio?', audio: '/audio/L4.5/phrases/d2-line5.mp3' },
        { speaker: 'Andrés', text: 'Sí, levanto pesas tres veces por semana y corro en el parque los fines de semana.', audio: '/audio/L4.5/phrases/d2-line6.mp3' },
        { speaker: 'Camila', text: 'Me gustaría probar yoga. Dicen que es bueno para relajarse.', audio: '/audio/L4.5/phrases/d2-line7.mp3' },
        { speaker: 'Andrés', text: '¡Sí! Es excelente para el cuerpo y la mente. El equilibrio es clave.', audio: '/audio/L4.5/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Navigate a stressful work conversation in Lima and plan a fitness journey in Medellín.',

  culturalNotes: [
    {
      title: 'Wellness Culture in Latin America — More Than a Trend',
      content: 'In many Latin American countries, wellness isn\'t just about the gym — it\'s deeply connected to community, nature, and tradition. Herbal teas (agüitas in Mexico, mates in Argentina) are common home remedies. Walks in the park, dancing salsa, and cooking fresh meals with family are all considered part of a healthy lifestyle. The concept of "bienestar" encompasses physical, emotional, and social health.',
    },
    {
      title: 'Mental Health — Breaking the Stigma',
      content: 'Mental health conversations are evolving rapidly in the Spanish-speaking world. While there was historically a stigma around therapy (seeing a psicólogo), younger generations are normalizing it. Phrases like "salud mental" and "bienestar emocional" are now common in media. Mexico, Argentina, and Colombia have seen significant growth in mental health awareness campaigns, and phrases like "está bien no estar bien" (it\'s okay to not be okay) have gained traction.',
    },
    {
      title: 'Sobremesa and Social Wellness',
      content: 'Remember sobremesa from L1.4? The tradition of lingering at the table after a meal is itself a form of wellness — it\'s social connection, stress relief, and mindfulness all in one. In cultures where family and community are central, loneliness (soledad) is taken seriously. Sharing meals, walking together, and gathering for coffee are all culturally embedded wellness practices that research now confirms are vital for health.',
    },
  ],
  culturalGradient: 'from-emerald-50 to-teal-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Estoy estresado" means:', options: ['I\'m tired', 'I\'m stressed', 'I\'m happy', 'I\'m hungry'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Te recomiendo que ___ más" (sleep — subjunctive)', answer: 'duermas' },
    { id: 3, type: 'mc', text: '"La salud mental" translates to:', options: ['The mental hospital', 'Mental health', 'The mental state', 'Mental illness'], answer: 1 },
    { id: 4, type: 'tf', text: 'After "es importante que" you must use the subjunctive mood.', answer: true },
    { id: 5, type: 'mc', text: '"Comida chatarra" means:', options: ['Cheap food', 'Fast food', 'Junk food', 'Fried food'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Es importante que ___ ejercicio" (do — hacer subjunctive)', answer: 'hagas' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, what does Diego practice to manage stress?', options: ['Running', 'Swimming', 'Meditation and yoga', 'Weightlifting'], answer: 2 },
    { id: 8, type: 'tf', text: '"Deberías" is the conditional form of "deber" used for polite advice.', answer: true },
    { id: 9, type: 'mc', text: '"Llevo una dieta equilibrada" means:', options: ['I carry a balanced diet', 'I follow a balanced diet', 'I want a balanced diet', 'I need a balanced diet'], answer: 1 },
    { id: 10, type: 'fill', text: 'Complete: "Sugiero que ___ la meditación" (try — probar subjunctive)', answer: 'pruebes' },
    { id: 11, type: 'mc', text: '"Me siento agotado" means:', options: ['I feel happy', 'I feel sick', 'I feel exhausted', 'I feel nervous'], answer: 2 },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does Andrés suggest Camila start with?', options: ['Running 5 km', 'Walking 30 minutes a day', 'Going to the gym', 'Swimming'], answer: 1 },
    { id: 13, type: 'tf', text: 'In Latin American wellness culture, herbal teas are commonly used as home remedies.', answer: true },
    { id: 14, type: 'mc', text: '"Ojalá que te sientas mejor" expresses:', options: ['A command', 'A hope/wish', 'A question', 'An apology'], answer: 1 },
    { id: 15, type: 'mc', text: 'Which is NOT a reflexive verb?', options: ['Sentirse', 'Relajarse', 'Acostarse', 'Recomendar'], answer: 3 },
  ],

  audioBase: '/audio/L4.5/phrases',

  uniqueActivity: {
    id: 'WellnessCoachL45',
    sectionId: 'wellness-coach',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'mental-health': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    lifestyle: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'exercise-diet': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    advice: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'verb-sorting': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    dialogues: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    cultural: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'wellness-coach': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
