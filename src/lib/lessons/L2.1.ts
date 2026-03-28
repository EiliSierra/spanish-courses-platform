import type { LessonData } from '@/lib/types/lesson'

// === PHRASES: ~50 items across 5 categories ===

const PHRASES = [
  // === Body Parts (16) ===
  { spanish: 'La cabeza', english: 'The head', pronunciation: 'lah kah-BEH-sah', category: 'body', audio: 'la-cabeza' },
  { spanish: 'El brazo', english: 'The arm', pronunciation: 'ehl BRAH-soh', category: 'body', audio: 'el-brazo' },
  { spanish: 'La pierna', english: 'The leg', pronunciation: 'lah pee-EHR-nah', category: 'body', audio: 'la-pierna' },
  { spanish: 'El pie', english: 'The foot', pronunciation: 'ehl pee-EH', category: 'body', audio: 'el-pie' },
  { spanish: 'La mano', english: 'The hand', pronunciation: 'lah MAH-noh', category: 'body', audio: 'la-mano' },
  { spanish: 'El ojo', english: 'The eye', pronunciation: 'ehl OH-hoh', category: 'body', audio: 'el-ojo' },
  { spanish: 'El o\u00eddo', english: 'The ear (inner)', pronunciation: 'ehl oh-EE-doh', category: 'body', audio: 'el-oido' },
  { spanish: 'La nariz', english: 'The nose', pronunciation: 'lah nah-REES', category: 'body', audio: 'la-nariz' },
  { spanish: 'La boca', english: 'The mouth', pronunciation: 'lah BOH-kah', category: 'body', audio: 'la-boca' },
  { spanish: 'El pecho', english: 'The chest', pronunciation: 'ehl PEH-choh', category: 'body', audio: 'el-pecho' },
  { spanish: 'La espalda', english: 'The back', pronunciation: 'lah ehs-PAHL-dah', category: 'body', audio: 'la-espalda' },
  { spanish: 'El cuello', english: 'The neck', pronunciation: 'ehl KWEH-yoh', category: 'body', audio: 'el-cuello' },
  { spanish: 'El hombro', english: 'The shoulder', pronunciation: 'ehl OHM-broh', category: 'body', audio: 'el-hombro' },
  { spanish: 'El est\u00f3mago', english: 'The stomach', pronunciation: 'ehl ehs-TOH-mah-goh', category: 'body', audio: 'el-estomago' },
  { spanish: 'La garganta', english: 'The throat', pronunciation: 'lah gahr-GAHN-tah', category: 'body', audio: 'la-garganta' },
  { spanish: 'La rodilla', english: 'The knee', pronunciation: 'lah roh-DEE-yah', category: 'body', audio: 'la-rodilla' },

  // === Symptoms & Conditions (10) ===
  { spanish: 'La fiebre', english: 'The fever', pronunciation: 'lah fee-EH-breh', category: 'symptoms', audio: 'la-fiebre' },
  { spanish: 'La tos', english: 'The cough', pronunciation: 'lah tohs', category: 'symptoms', audio: 'la-tos' },
  { spanish: 'El dolor', english: 'The pain', pronunciation: 'ehl doh-LOHR', category: 'symptoms', audio: 'el-dolor' },
  { spanish: 'La gripe', english: 'The flu', pronunciation: 'lah GREE-peh', category: 'symptoms', audio: 'la-gripe' },
  { spanish: 'El mareo', english: 'The dizziness', pronunciation: 'ehl mah-REH-oh', category: 'symptoms', audio: 'el-mareo' },
  { spanish: 'Las n\u00e1useas', english: 'The nausea', pronunciation: 'lahs NOW-seh-ahs', category: 'symptoms', audio: 'las-nauseas' },
  { spanish: 'La alergia', english: 'The allergy', pronunciation: 'lah ah-LEHR-hee-ah', category: 'symptoms', audio: 'la-alergia' },
  { spanish: 'La herida', english: 'The wound', pronunciation: 'lah eh-REE-dah', category: 'symptoms', audio: 'la-herida' },
  { spanish: 'El resfriado', english: 'The cold', pronunciation: 'ehl rehs-free-AH-doh', category: 'symptoms', audio: 'el-resfriado' },
  { spanish: 'La infecci\u00f3n', english: 'The infection', pronunciation: 'lah een-fehk-see-OHN', category: 'symptoms', audio: 'la-infeccion' },

  // === At the Clinic (10) ===
  { spanish: 'El doctor / La doctora', english: 'The doctor (m/f)', pronunciation: 'ehl dohk-TOHR / lah dohk-TOH-rah', category: 'doctor', audio: 'el-doctor' },
  { spanish: 'El enfermero / La enfermera', english: 'The nurse (m/f)', pronunciation: 'ehl ehn-fehr-MEH-roh / lah ehn-fehr-MEH-rah', category: 'doctor', audio: 'el-enfermero' },
  { spanish: 'El hospital', english: 'The hospital', pronunciation: 'ehl ohs-pee-TAHL', category: 'doctor', audio: 'el-hospital' },
  { spanish: 'La cl\u00ednica', english: 'The clinic', pronunciation: 'lah KLEE-nee-kah', category: 'doctor', audio: 'la-clinica' },
  { spanish: 'La cita', english: 'The appointment', pronunciation: 'lah SEE-tah', category: 'doctor', audio: 'la-cita' },
  { spanish: 'La receta', english: 'The prescription', pronunciation: 'lah reh-SEH-tah', category: 'doctor', audio: 'la-receta' },
  { spanish: 'La medicina', english: 'The medicine', pronunciation: 'lah meh-dee-SEE-nah', category: 'doctor', audio: 'la-medicina' },
  { spanish: 'La pastilla', english: 'The pill/tablet', pronunciation: 'lah pahs-TEE-yah', category: 'doctor', audio: 'la-pastilla' },
  { spanish: 'El jarabe', english: 'The syrup', pronunciation: 'ehl hah-RAH-beh', category: 'doctor', audio: 'el-jarabe' },
  { spanish: 'La inyecci\u00f3n', english: 'The injection/shot', pronunciation: 'lah een-yehk-see-OHN', category: 'doctor', audio: 'la-inyeccion' },

  // === Key Medical Phrases (10) ===
  { spanish: 'Me duele la cabeza', english: 'My head hurts', pronunciation: 'meh DWEH-leh lah kah-BEH-sah', category: 'phrases', audio: 'me-duele-la-cabeza' },
  { spanish: 'Me duele el est\u00f3mago', english: 'My stomach hurts', pronunciation: 'meh DWEH-leh ehl ehs-TOH-mah-goh', category: 'phrases', audio: 'me-duele-el-estomago' },
  { spanish: 'Me duelen los ojos', english: 'My eyes hurt', pronunciation: 'meh DWEH-lehn lohs OH-hohs', category: 'phrases', audio: 'me-duelen-los-ojos' },
  { spanish: 'Tengo fiebre', english: 'I have a fever', pronunciation: 'TEHN-goh fee-EH-breh', category: 'phrases', audio: 'tengo-fiebre' },
  { spanish: 'Tengo tos', english: 'I have a cough', pronunciation: 'TEHN-goh tohs', category: 'phrases', audio: 'tengo-tos' },
  { spanish: 'Tengo dolor de garganta', english: 'I have a sore throat', pronunciation: 'TEHN-goh doh-LOHR deh gahr-GAHN-tah', category: 'phrases', audio: 'tengo-dolor-de-garganta' },
  { spanish: '\u00bfQu\u00e9 le pasa?', english: 'What is wrong?', pronunciation: 'keh leh PAH-sah', category: 'phrases', audio: 'que-le-pasa' },
  { spanish: 'Necesito una cita', english: 'I need an appointment', pronunciation: 'neh-seh-SEE-toh OO-nah SEE-tah', category: 'phrases', audio: 'necesito-una-cita' },
  { spanish: 'Tome esta medicina', english: 'Take this medicine', pronunciation: 'TOH-meh EHS-tah meh-dee-SEE-nah', category: 'phrases', audio: 'tome-esta-medicina' },
  { spanish: '\u00bfDesde cu\u00e1ndo se siente as\u00ed?', english: 'Since when have you felt this way?', pronunciation: 'DEHS-deh KWAHN-doh seh see-EHN-teh ah-SEE', category: 'phrases', audio: 'desde-cuando-se-siente-asi' },

  // === Emergency (4) ===
  { spanish: 'La emergencia', english: 'The emergency', pronunciation: 'lah eh-mehr-HEHN-see-ah', category: 'emergency', audio: 'la-emergencia' },
  { spanish: 'La ambulancia', english: 'The ambulance', pronunciation: 'lah ahm-boo-LAHN-see-ah', category: 'emergency', audio: 'la-ambulancia' },
  { spanish: 'Urgencias', english: 'Emergency room', pronunciation: 'oor-HEHN-see-ahs', category: 'emergency', audio: 'urgencias' },
  { spanish: '\u00a1Llame al doctor!', english: 'Call the doctor!', pronunciation: 'YAH-meh ahl dohk-TOHR', category: 'emergency', audio: 'llame-al-doctor' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })

export const L21PhraseByAudio = phraseByAudio

// === SYMPTOM CHECKER SCENARIOS (unique activity data) ===

export interface SymptomScenario {
  patientSays: string
  english: string
  correctBodyPart: string
  correctCondition: string
  bodyPartOptions: string[]
  conditionOptions: string[]
}

export const SYMPTOM_CHECKER_SCENARIOS: SymptomScenario[] = [
  {
    patientSays: 'Me duele mucho la cabeza y tengo fiebre.',
    english: 'My head hurts a lot and I have a fever.',
    correctBodyPart: 'La cabeza',
    correctCondition: 'La fiebre',
    bodyPartOptions: ['La cabeza', 'El est\u00f3mago', 'La garganta', 'La espalda'],
    conditionOptions: ['La fiebre', 'La alergia', 'La herida', 'El mareo'],
  },
  {
    patientSays: 'Tengo dolor de garganta y tos.',
    english: 'I have a sore throat and a cough.',
    correctBodyPart: 'La garganta',
    correctCondition: 'La tos',
    bodyPartOptions: ['La garganta', 'El pecho', 'La nariz', 'El o\u00eddo'],
    conditionOptions: ['La tos', 'La gripe', 'Las n\u00e1useas', 'La fiebre'],
  },
  {
    patientSays: 'Me duele el est\u00f3mago y tengo n\u00e1useas.',
    english: 'My stomach hurts and I have nausea.',
    correctBodyPart: 'El est\u00f3mago',
    correctCondition: 'Las n\u00e1useas',
    bodyPartOptions: ['El est\u00f3mago', 'El pecho', 'La espalda', 'La rodilla'],
    conditionOptions: ['Las n\u00e1useas', 'La tos', 'La fiebre', 'La alergia'],
  },
  {
    patientSays: 'Me duelen los ojos y tengo alergia.',
    english: 'My eyes hurt and I have allergies.',
    correctBodyPart: 'Los ojos',
    correctCondition: 'La alergia',
    bodyPartOptions: ['Los ojos', 'La nariz', 'El o\u00eddo', 'La boca'],
    conditionOptions: ['La alergia', 'La infecci\u00f3n', 'El resfriado', 'La herida'],
  },
  {
    patientSays: 'Me duele mucho la espalda.',
    english: 'My back hurts a lot.',
    correctBodyPart: 'La espalda',
    correctCondition: 'El dolor',
    bodyPartOptions: ['La espalda', 'El hombro', 'La pierna', 'El cuello'],
    conditionOptions: ['El dolor', 'El mareo', 'La gripe', 'La tos'],
  },
  {
    patientSays: 'Tengo gripe. Me duele todo el cuerpo.',
    english: 'I have the flu. My whole body hurts.',
    correctBodyPart: 'El cuerpo',
    correctCondition: 'La gripe',
    bodyPartOptions: ['El cuerpo', 'La cabeza', 'El brazo', 'La pierna'],
    conditionOptions: ['La gripe', 'El resfriado', 'La alergia', 'La herida'],
  },
  {
    patientSays: 'Me duele la rodilla. Tengo una herida.',
    english: 'My knee hurts. I have a wound.',
    correctBodyPart: 'La rodilla',
    correctCondition: 'La herida',
    bodyPartOptions: ['La rodilla', 'El pie', 'La pierna', 'El brazo'],
    conditionOptions: ['La herida', 'La infecci\u00f3n', 'El mareo', 'La fiebre'],
  },
  {
    patientSays: 'Tengo mareo y me duele el pecho.',
    english: 'I feel dizzy and my chest hurts.',
    correctBodyPart: 'El pecho',
    correctCondition: 'El mareo',
    bodyPartOptions: ['El pecho', 'El est\u00f3mago', 'La cabeza', 'El cuello'],
    conditionOptions: ['El mareo', 'Las n\u00e1useas', 'La tos', 'La gripe'],
  },
]

// === LESSON DATA ===

export const L21Data: LessonData = {
  id: 'L2.1',
  hero: {
    lessonId: 'L2.1',
    title: 'At the Doctor',
    subtitle: 'Describing symptoms, body parts & doctor visits',
    description: 'Learn to describe how you feel, name body parts, and navigate a doctor visit or pharmacy in the Spanish-speaking world. Master the "doler" construction and -ER/-IR verb conjugations.',
    image: '/images/L2.1/L2.1.jpg',
    gradient: 'from-green-800/65 via-emerald-700/55 to-teal-700/65',
    accentColor: 'green-200',
  },

  objectives: [
    { icon: '\ud83e\uddb4', title: 'Name Body Parts', desc: 'Identify and say 16 body parts in Spanish with correct articles (el/la).' },
    { icon: '\ud83c\udf21\ufe0f', title: 'Describe Symptoms', desc: 'Use "me duele," "tengo," and symptom vocabulary to tell a doctor how you feel.' },
    { icon: '\ud83e\ude7a', title: 'Navigate a Doctor Visit', desc: 'Understand questions, give answers, and follow instructions at a clinic.' },
    { icon: '\ud83d\udc8a', title: 'Pharmacy & Medicine', desc: 'Ask for medicine, understand prescriptions, and learn pharmacy culture in Latin America.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.2', label: 'Polite Expressions', detail: '"Buenos d\u00edas," "por favor," "gracias" \u2014 essential when speaking to a doctor or pharmacist.' },
    { fromLesson: 'L1.3', label: 'Numbers', detail: 'Numbers help with dosage: "Tome dos pastillas cada ocho horas" (Take two pills every eight hours).' },
    { fromLesson: 'L1.8', label: 'Daily Routines', detail: 'The reflexive pronoun pattern (me + verb) extends to "me duele" (it hurts me).' },
  ],

  sectionTransitions: [
    { afterSection: 'body', text: 'You can name the body parts \u2014 now let\u2019s learn what can go wrong with them.' },
    { afterSection: 'symptoms', text: 'You know the symptoms \u2014 time to meet the people who can help.' },
    { afterSection: 'doctor', text: 'You have the medical vocabulary \u2014 let\u2019s put it into real phrases.' },
    { afterSection: 'phrases', text: 'Great phrases! Now sharpen your pronunciation for the doctor\u2019s office.' },
    { afterSection: 'dialogues', text: 'Great listening! Let\u2019s explore how healthcare works across Latin America.' },
    { afterSection: 'cultural', text: 'Ready to play doctor? Diagnose patients in our Symptom Checker!' },
    { afterSection: 'symptom-checker', text: 'Final stretch \u2014 let\u2019s test everything you\u2019ve learned!' },
  ],

  personalizedVocab: [
    { spanish: 'Me duele', english: 'It hurts me' },
    { spanish: 'Tengo fiebre', english: 'I have a fever' },
    { spanish: 'La receta', english: 'The prescription' },
    { spanish: '\u00bfQu\u00e9 le pasa?', english: 'What is wrong?' },
    { spanish: 'Necesito', english: 'I need' },
    { spanish: 'La pastilla', english: 'The pill' },
  ],

  pronunciationChallenges: [
    { spanish: 'Me duele la cabeza', pronunciation: 'meh DWEH-leh lah kah-BEH-sah', english: 'My head hurts', audio: 'me-duele-la-cabeza', tip: 'The UE in "duele" is a diphthong: DWEH-leh. Stress the first syllable.' },
    { spanish: 'Tengo dolor de garganta', pronunciation: 'TEHN-goh doh-LOHR deh gahr-GAHN-tah', english: 'I have a sore throat', audio: 'tengo-dolor-de-garganta', tip: 'The G before A in "garganta" is hard (like English G). Two hard G sounds in one word!' },
    { spanish: 'Necesito una cita', pronunciation: 'neh-seh-SEE-toh OO-nah SEE-tah', english: 'I need an appointment', audio: 'necesito-una-cita', tip: 'The C before E/I = "s" sound in Latin America: neh-seh-SEE-toh.' },
    { spanish: 'La inyecci\u00f3n', pronunciation: 'lah een-yehk-see-OHN', english: 'The injection', audio: 'la-inyeccion', tip: 'Double challenge: NY sound + CC at the end. een-yehk-see-OHN.' },
    { spanish: '\u00bfDesde cu\u00e1ndo se siente as\u00ed?', pronunciation: 'DEHS-deh KWAHN-doh seh see-EHN-teh ah-SEE', english: 'Since when have you felt this way?', audio: 'desde-cuando-se-siente-asi', tip: 'This is a full question the doctor asks. Practice the rising intonation.' },
    { spanish: 'Tome esta medicina', pronunciation: 'TOH-meh EHS-tah meh-dee-SEE-nah', english: 'Take this medicine', audio: 'tome-esta-medicina', tip: 'Tome is a formal command (usted). TOH-meh, not TOH-may.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'body', label: 'Body Parts' },
    { id: 'symptoms', label: 'Symptoms' },
    { id: 'doctor', label: 'At the Clinic' },
    { id: 'phrases', label: 'Key Phrases' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'medical-sorting', label: 'Medical Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'symptom-checker', label: 'Symptom Checker' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'body',
      title: 'The Human Body',
      description: 'Click any body part to hear it pronounced. Notice the articles: "el" for masculine, "la" for feminine. Fun fact: "la mano" (hand) is feminine even though it ends in -o!',
      tabs: [
        { label: 'Head & Upper Body', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'body').slice(0, 8) },
        { label: 'Lower Body & Core', color: 'teal', phrases: PHRASES.filter(p => p.category === 'body').slice(8) },
      ],
    },
    {
      id: 'symptoms',
      title: 'Symptoms & Conditions',
      description: 'Learn to name what ails you. These are the words you will need when visiting a doctor or pharmacy.',
      tabs: [
        { label: 'Common Symptoms', color: 'rose', phrases: PHRASES.filter(p => p.category === 'symptoms').slice(0, 5) },
        { label: 'Other Conditions', color: 'amber', phrases: PHRASES.filter(p => p.category === 'symptoms').slice(5) },
      ],
    },
    {
      id: 'doctor',
      title: 'At the Clinic',
      description: 'The people, places, and things you will encounter at a doctor\u2019s office or hospital.',
      tabs: [
        { label: 'People & Places', color: 'blue', phrases: PHRASES.filter(p => p.category === 'doctor').slice(0, 5) },
        { label: 'Treatment', color: 'purple', phrases: PHRASES.filter(p => p.category === 'doctor').slice(5) },
      ],
    },
    {
      id: 'phrases',
      title: 'Essential Medical Phrases',
      description: 'Put your vocabulary together into full sentences. The "doler" construction works like "gustar" \u2014 the body part is the subject.',
      tabs: [
        { label: 'Describing Pain', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'phrases').slice(0, 6), columns: 2 },
        { label: "Doctor's Questions", color: 'teal', phrases: PHRASES.filter(p => p.category === 'phrases').slice(6), columns: 2 },
        { label: 'Emergencies', color: 'rose', phrases: PHRASES.filter(p => p.category === 'emergency'), columns: 2 },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: '"Duele" \u2014 The UE Diphthong Strikes Again',
      content: 'You met UE in L1.4 ("cuenta," "huevos"). In "duele," it\u2019s DWEH-leh. The "doler" construction works like "gustar" \u2014 the thing that hurts is the subject: "Me duele la cabeza" literally means "The head hurts to me."',
      example: 'Me duele = DWEH-leh (singular) | Me duelen = DWEH-lehn (plural)',
      reviewFrom: 'L1.1',
    },
    {
      title: '"Garganta" \u2014 The Hard G',
      content: 'G before A, O, U is always hard (like "go"). "Garganta" has two hard Gs: gahr-GAHN-tah. But G before E/I is soft (like English H): "alergia" = ah-LEHR-hee-ah.',
      example: 'Garganta = gahr-GAHN-tah | Alergia = ah-LEHR-hee-ah',
      reviewFrom: 'L1.1',
    },
    {
      title: '"Inyecci\u00f3n" \u2014 The NY and CC Combo',
      content: 'The Y after N creates the "\u00f1" sound here. The CC in "inyecci\u00f3n" is pronounced "ks" in most of Latin America. This is one of the trickiest words in this lesson!',
      example: 'Inyecci\u00f3n = een-yehk-see-OHN | Infecci\u00f3n = een-fehk-see-OHN',
    },
    {
      title: '-ER/-IR Verbs \u2014 New Endings',
      content: 'In L1.8 you mastered -AR verbs (trabajo, cocino). Now meet -ER verbs (comer, beber, toser) and -IR verbs (vivir, abrir). The endings change but the stress patterns stay the same.',
      example: 'Como = KOH-moh | Bebo = BEH-boh | Vivo = BEE-boh | Abro = AH-broh',
      reviewFrom: 'L1.8',
    },
  ],

  flashcardGroups: [
    {
      key: 'body-parts',
      label: 'Body Parts',
      audioKeys: ['la-cabeza', 'el-brazo', 'la-pierna', 'el-pie', 'la-mano', 'el-ojo', 'el-oido', 'la-nariz', 'la-boca', 'el-pecho', 'la-espalda', 'el-cuello', 'el-hombro', 'el-estomago', 'la-garganta', 'la-rodilla'],
    },
    {
      key: 'symptoms-treatment',
      label: 'Symptoms & Treatment',
      audioKeys: ['la-fiebre', 'la-tos', 'el-dolor', 'la-gripe', 'el-mareo', 'las-nauseas', 'la-alergia', 'la-herida', 'el-resfriado', 'la-infeccion', 'el-doctor', 'la-clinica', 'la-receta', 'la-medicina', 'la-pastilla', 'el-jarabe'],
    },
    {
      key: 'medical-phrases',
      label: 'Medical Phrases',
      audioKeys: ['me-duele-la-cabeza', 'me-duele-el-estomago', 'tengo-fiebre', 'tengo-tos', 'tengo-dolor-de-garganta', 'que-le-pasa', 'necesito-una-cita', 'tome-esta-medicina', 'la-emergencia', 'la-ambulancia'],
    },
  ],

  matchPairs: [
    { left: 'La cabeza', right: 'The head' },
    { left: 'Me duele', right: 'It hurts me' },
    { left: 'La fiebre', right: 'The fever' },
    { left: 'La receta', right: 'The prescription' },
    { left: 'El est\u00f3mago', right: 'The stomach' },
    { left: 'La pastilla', right: 'The pill' },
    { left: 'Urgencias', right: 'Emergency room' },
    { left: '\u00bfQu\u00e9 le pasa?', right: 'What is wrong?' },
  ],
  matchLabels: { left: 'Espa\u00f1ol', right: 'English' },

  sortActivities: [
    {
      title: 'El vs. La \u2014 Body Part Gender',
      instruction: 'Sort each body part by its article. Watch out for "la mano" \u2014 it\u2019s feminine despite ending in -o!',
      buckets: ['El (masculine)', 'La (feminine)'],
      items: [
        { text: 'Cabeza', bucket: 'La (feminine)' },
        { text: 'Brazo', bucket: 'El (masculine)' },
        { text: 'Pierna', bucket: 'La (feminine)' },
        { text: 'Pie', bucket: 'El (masculine)' },
        { text: 'Mano', bucket: 'La (feminine)' },
        { text: 'Ojo', bucket: 'El (masculine)' },
        { text: 'Nariz', bucket: 'La (feminine)' },
        { text: 'Pecho', bucket: 'El (masculine)' },
        { text: 'Espalda', bucket: 'La (feminine)' },
        { text: 'Cuello', bucket: 'El (masculine)' },
      ],
    },
    {
      title: 'Me duele... vs. Tengo...',
      instruction: 'Sort: "Me duele" is for body part pain. "Tengo" is for conditions you "have."',
      buckets: ['Me duele... (body part)', 'Tengo... (condition)'],
      items: [
        { text: '...la cabeza', bucket: 'Me duele... (body part)' },
        { text: '...el est\u00f3mago', bucket: 'Me duele... (body part)' },
        { text: '...la garganta', bucket: 'Me duele... (body part)' },
        { text: '...la espalda', bucket: 'Me duele... (body part)' },
        { text: '...la rodilla', bucket: 'Me duele... (body part)' },
        { text: '...fiebre', bucket: 'Tengo... (condition)' },
        { text: '...tos', bucket: 'Tengo... (condition)' },
        { text: '...gripe', bucket: 'Tengo... (condition)' },
        { text: '...n\u00e1useas', bucket: 'Tengo... (condition)' },
        { text: '...una alergia', bucket: 'Tengo... (condition)' },
      ],
    },
    {
      title: 'Symptom vs. Treatment',
      instruction: 'Is it a symptom (what\u2019s wrong) or a treatment (how to fix it)?',
      buckets: ['Symptom', 'Treatment'],
      items: [
        { text: 'Fiebre', bucket: 'Symptom' },
        { text: 'Tos', bucket: 'Symptom' },
        { text: 'Dolor', bucket: 'Symptom' },
        { text: 'Gripe', bucket: 'Symptom' },
        { text: 'Mareo', bucket: 'Symptom' },
        { text: 'Pastilla', bucket: 'Treatment' },
        { text: 'Jarabe', bucket: 'Treatment' },
        { text: 'Inyecci\u00f3n', bucket: 'Treatment' },
        { text: 'Receta', bucket: 'Treatment' },
        { text: 'Medicina', bucket: 'Treatment' },
      ],
    },
  ],
  sortSectionId: 'medical-sorting',
  sortTitle: 'Medical Sorting',

  dialogues: [
    {
      id: 'dialogue-doctor',
      title: 'Doctor Visit \u2014 Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Doctora', text: 'Buenos d\u00edas. \u00bfQu\u00e9 le pasa?', audio: '/audio/L2.1/phrases/d1-line1.mp3', annotations: [{ phrase: 'Buenos d\u00edas', fromLesson: 'L1.2', note: 'Greeting from L1.2' }] },
        { speaker: 'Paciente', text: 'Buenos d\u00edas, doctora. Me duele mucho la cabeza y tengo fiebre.', audio: '/audio/L2.1/phrases/d1-line2.mp3' },
        { speaker: 'Doctora', text: '\u00bfDesde cu\u00e1ndo se siente as\u00ed?', audio: '/audio/L2.1/phrases/d1-line3.mp3' },
        { speaker: 'Paciente', text: 'Desde ayer. Tambi\u00e9n tengo dolor de garganta.', audio: '/audio/L2.1/phrases/d1-line4.mp3' },
        { speaker: 'Doctora', text: 'Abra la boca, por favor. Hmm, tiene la garganta roja.', audio: '/audio/L2.1/phrases/d1-line5.mp3', annotations: [{ phrase: 'por favor', fromLesson: 'L1.2', note: 'Polite request from L1.2' }] },
        { speaker: 'Paciente', text: '\u00bfEs gripe?', audio: '/audio/L2.1/phrases/d1-line6.mp3' },
        { speaker: 'Doctora', text: 'S\u00ed, tiene gripe. Tome este jarabe dos veces al d\u00eda y descanse.', audio: '/audio/L2.1/phrases/d1-line7.mp3', annotations: [{ phrase: 'dos veces', fromLesson: 'L1.3', note: 'Numbers from L1.3' }] },
        { speaker: 'Paciente', text: 'Gracias, doctora. \u00bfNecesito una receta?', audio: '/audio/L2.1/phrases/d1-line8.mp3', annotations: [{ phrase: 'Gracias', fromLesson: 'L1.2' }] },
      ],
    },
    {
      id: 'dialogue-pharmacy',
      title: 'At the Pharmacy \u2014 Bogot\u00e1',
      location: 'Bogot\u00e1',
      lines: [
        { speaker: 'Cliente', text: 'Buenas tardes. Tengo dolor de garganta.', audio: '/audio/L2.1/phrases/d2-line1.mp3', annotations: [{ phrase: 'Buenas tardes', fromLesson: 'L1.2', note: 'Afternoon greeting from L1.2' }] },
        { speaker: 'Farmac\u00e9utico', text: '\u00bfTiene receta?', audio: '/audio/L2.1/phrases/d2-line2.mp3' },
        { speaker: 'Cliente', text: 'No, no tengo receta. \u00bfQu\u00e9 me recomienda?', audio: '/audio/L2.1/phrases/d2-line3.mp3' },
        { speaker: 'Farmac\u00e9utico', text: 'Le recomiendo estas pastillas. Tome una cada ocho horas.', audio: '/audio/L2.1/phrases/d2-line4.mp3', annotations: [{ phrase: 'ocho horas', fromLesson: 'L1.3', note: 'Numbers & time from L1.3' }] },
        { speaker: 'Cliente', text: '\u00bfCu\u00e1nto cuestan?', audio: '/audio/L2.1/phrases/d2-line5.mp3', annotations: [{ phrase: '\u00bfCu\u00e1nto cuestan?', fromLesson: 'L1.4', note: 'Asking price from L1.4' }] },
        { speaker: 'Farmac\u00e9utico', text: 'Quince mil pesos. \u00bfAlgo m\u00e1s?', audio: '/audio/L2.1/phrases/d2-line6.mp3' },
        { speaker: 'Cliente', text: 'No, gracias. Muy amable.', audio: '/audio/L2.1/phrases/d2-line7.mp3', annotations: [{ phrase: 'Muy amable', fromLesson: 'L1.4', note: 'Polite phrase from L1.4' }] },
      ],
    },
  ],
  dialogueDescription: 'Listen to real medical conversations from Mexico City and Bogot\u00e1. Notice how vocabulary from earlier lessons appears naturally.',

  culturalNotes: [
    {
      title: 'Healthcare in Latin America \u2014 Public vs. Private',
      content: 'Most Latin American countries have dual healthcare systems. Mexico has IMSS (public) and private clinics. Colombia has EPS. Public healthcare is available to residents and costs are significantly lower than in the US. Many expats and travelers use private clinics for faster service \u2014 a doctor visit can cost $20\u201350 USD.',
    },
    {
      title: 'La Farmacia \u2014 Your Neighborhood Health Advisor',
      content: 'In many Latin American countries, pharmacists can recommend and sell medications that would require a prescription in the US. Pharmacies are on every corner, and the farmac\u00e9utico often acts as a first-line healthcare advisor. It\u2019s common to describe your symptoms and get medicine without seeing a doctor first.',
    },
    {
      title: 'Remedios Caseros \u2014 Home Remedies',
      content: 'Before going to the doctor, many families try traditional remedies: manzanilla (chamomile tea) for stomach aches, miel con lim\u00f3n (honey with lemon) for sore throats, s\u00e1bila (aloe vera) for burns, and agua de arroz (rice water) for digestive issues. Grandmothers\u2019 remedies are deeply respected across all social classes.',
    },
  ],
  culturalGradient: 'from-green-50 to-emerald-50',

  quiz: [
    { id: 1, type: 'mc', text: 'You have a headache. How do you tell the doctor?', options: ['Tengo cabeza', 'Me duele la cabeza', 'Mi cabeza duele', 'Yo duelo la cabeza'], answer: 1 },
    { id: 2, type: 'mc', text: 'The doctor asks "\u00bfQu\u00e9 le pasa?" What is she asking?', options: ['What time is it?', 'What is wrong with you?', 'Where does it hurt?', 'Do you have insurance?'], answer: 1 },
    { id: 3, type: 'fill', text: 'Complete: "Me ___ la garganta" (My throat hurts)', answer: 'duele' },
    { id: 4, type: 'mc', text: 'Which is the most polite way to ask for an appointment?', options: ['Dame una cita', 'Necesito una cita, por favor', 'Cita ahora', 'Quiero cita'], answer: 1 },
    { id: 5, type: 'tf', text: '"Me duele" uses the same structure as "me gusta" from L1.8 \u2014 the thing that hurts is the subject.', answer: true },
    { id: 6, type: 'mc', text: 'Spot the error: "Me duele los ojos"', options: ['Should be "me duelen" (plural)', '"Los" should be "las"', '"Ojos" should be "ojo"', 'There is no error'], answer: 0 },
    { id: 7, type: 'fill', text: 'Complete: "Tengo dolor de ___" (I have a sore throat)', answer: 'garganta' },
    { id: 8, type: 'mc', text: 'The doctor says "Tome dos pastillas cada ocho horas." How often?', options: ['Every 2 hours', 'Every 8 hours', 'Twice a day', 'Every 12 hours'], answer: 1 },
    { id: 9, type: 'tf', text: 'In many Latin American countries, you can buy some medicines at a farmacia without a prescription.', answer: true },
    { id: 10, type: 'mc', text: 'In Dialogue 1, the doctor diagnosed the patient with:', options: ['Una alergia', 'La gripe', 'Un resfriado', 'Una infecci\u00f3n'], answer: 1 },
    { id: 11, type: 'mc', text: 'Which body part is feminine despite ending in -o?', options: ['El brazo', 'El ojo', 'La mano', 'El pie'], answer: 2 },
    { id: 12, type: 'fill', text: 'Complete: "Necesito una ___ con el doctor" (I need an appointment)', answer: 'cita' },
    { id: 13, type: 'mc', text: 'How is the G in "garganta" pronounced?', options: ['Soft, like "h"', 'Hard, like "go"', 'Silent', 'Like "sh"'], answer: 1 },
    { id: 14, type: 'tf', text: '"Jarabe" means "pill."', answer: false },
    { id: 15, type: 'mc', text: 'You feel dizzy and nauseous in Colombia. Where might you go first?', options: ['La farmacia \u2014 the pharmacist can help', 'El aeropuerto', 'La escuela', 'El restaurante'], answer: 0 },
  ],

  audioBase: '/audio/L2.1/phrases',

  uniqueActivity: {
    id: 'SymptomCheckerL21',
    sectionId: 'symptom-checker',
    sectionColor: 'bg-green-50/40',
    sectionBorder: 'border-green-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    body: { bg: 'bg-green-50/30', border: 'border-green-100' },
    symptoms: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    doctor: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    phrases: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'medical-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'symptom-checker': { bg: 'bg-green-50/40', border: 'border-green-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
