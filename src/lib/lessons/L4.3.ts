import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Tú Forms (10) ===
  { spanish: '¿Cómo estás tú?', english: 'How are you? (informal)', pronunciation: 'KOH-moh ehs-TAHS too', category: 'tu-forms', audio: 'como-estas-tu' },
  { spanish: 'Tú puedes hacerlo', english: 'You can do it (informal)', pronunciation: 'too PWEH-dehs ah-SEHR-loh', category: 'tu-forms', audio: 'tu-puedes-hacerlo' },
  { spanish: '¿Quieres ir al cine?', english: 'Do you want to go to the movies? (informal)', pronunciation: 'kee-EH-rehs eer ahl SEE-neh', category: 'tu-forms', audio: 'quieres-ir-al-cine' },
  { spanish: 'Dime la verdad', english: 'Tell me the truth (informal)', pronunciation: 'DEE-meh lah behr-DAHD', category: 'tu-forms', audio: 'dime-la-verdad' },
  { spanish: '¿Tienes tiempo?', english: 'Do you have time? (informal)', pronunciation: 'tee-EH-nehs tee-EHM-poh', category: 'tu-forms', audio: 'tienes-tiempo' },
  { spanish: 'Ven aquí un momento', english: 'Come here a moment (informal)', pronunciation: 'behn ah-KEE oon moh-MEHN-toh', category: 'tu-forms', audio: 'ven-aqui-un-momento' },
  { spanish: 'Tú hablas muy bien', english: 'You speak very well (informal)', pronunciation: 'too AH-blahs mooy bee-EHN', category: 'tu-forms', audio: 'tu-hablas-muy-bien' },
  { spanish: '¿Qué piensas de esto?', english: 'What do you think about this? (informal)', pronunciation: 'keh pee-EHN-sahs deh EHS-toh', category: 'tu-forms', audio: 'que-piensas-de-esto' },
  { spanish: 'Siéntate donde quieras', english: 'Sit wherever you want (informal)', pronunciation: 'see-EHN-tah-teh DOHN-deh kee-EH-rahs', category: 'tu-forms', audio: 'sientate-donde-quieras' },
  { spanish: 'Cuéntame qué pasó', english: 'Tell me what happened (informal)', pronunciation: 'KWEHN-tah-meh keh pah-SOH', category: 'tu-forms', audio: 'cuentame-que-paso' },

  // === Usted Forms (10) ===
  { spanish: '¿Cómo está usted?', english: 'How are you? (formal)', pronunciation: 'KOH-moh ehs-TAH oos-TEHD', category: 'usted-forms', audio: 'como-esta-usted' },
  { spanish: 'Pase usted, por favor', english: 'Come in, please (formal)', pronunciation: 'PAH-seh oos-TEHD pohr fah-BOHR', category: 'usted-forms', audio: 'pase-usted-por-favor' },
  { spanish: '¿Podría repetir eso?', english: 'Could you repeat that? (formal)', pronunciation: 'poh-DREE-ah rreh-peh-TEER EH-soh', category: 'usted-forms', audio: 'podria-repetir-eso' },
  { spanish: 'Disculpe la molestia', english: 'Excuse the inconvenience (formal)', pronunciation: 'dees-KOOL-peh lah moh-LEHS-tee-ah', category: 'usted-forms', audio: 'disculpe-la-molestia' },
  { spanish: '¿En qué le puedo ayudar?', english: 'How can I help you? (formal)', pronunciation: 'ehn keh leh PWEH-doh ah-yoo-DAHR', category: 'usted-forms', audio: 'en-que-le-puedo-ayudar' },
  { spanish: 'Le agradezco su tiempo', english: 'I appreciate your time (formal)', pronunciation: 'leh ah-grah-DEHS-koh soo tee-EHM-poh', category: 'usted-forms', audio: 'le-agradezco-su-tiempo' },
  { spanish: 'Tome asiento, por favor', english: 'Please have a seat (formal)', pronunciation: 'TOH-meh ah-see-EHN-toh pohr fah-BOHR', category: 'usted-forms', audio: 'tome-asiento-por-favor' },
  { spanish: '¿Tiene usted alguna pregunta?', english: 'Do you have any questions? (formal)', pronunciation: 'tee-EH-neh oos-TEHD ahl-GOO-nah preh-GOON-tah', category: 'usted-forms', audio: 'tiene-usted-alguna-pregunta' },
  { spanish: 'Permítame explicarle', english: 'Allow me to explain (formal)', pronunciation: 'pehr-MEE-tah-meh ehks-plee-KAHR-leh', category: 'usted-forms', audio: 'permitame-explicarle' },
  { spanish: 'Fue un placer conocerlo', english: 'It was a pleasure to meet you (formal)', pronunciation: 'fweh oon plah-SEHR koh-noh-SEHR-loh', category: 'usted-forms', audio: 'fue-un-placer-conocerlo' },

  // === Vos Forms (8) ===
  { spanish: '¿Cómo estás vos?', english: 'How are you? (voseo)', pronunciation: 'KOH-moh ehs-TAHS bohs', category: 'vos-forms', audio: 'como-estas-vos' },
  { spanish: '¿Querés tomar algo?', english: 'Do you want to have a drink? (voseo)', pronunciation: 'keh-REHS toh-MAHR AHL-goh', category: 'vos-forms', audio: 'queres-tomar-algo' },
  { spanish: 'Vos sabés que te quiero', english: 'You know I love you (voseo)', pronunciation: 'bohs sah-BEHS keh teh kee-EH-roh', category: 'vos-forms', audio: 'vos-sabes-que-te-quiero' },
  { spanish: 'Contame qué te pasó', english: 'Tell me what happened to you (voseo)', pronunciation: 'kohn-TAH-meh keh teh pah-SOH', category: 'vos-forms', audio: 'contame-que-te-paso' },
  { spanish: 'Vení a mi casa', english: 'Come to my house (voseo)', pronunciation: 'beh-NEE ah mee KAH-sah', category: 'vos-forms', audio: 'veni-a-mi-casa' },
  { spanish: '¿Tenés tiempo ahora?', english: 'Do you have time now? (voseo)', pronunciation: 'teh-NEHS tee-EHM-poh ah-OH-rah', category: 'vos-forms', audio: 'tenes-tiempo-ahora' },
  { spanish: 'Sentate donde quieras', english: 'Sit wherever you want (voseo)', pronunciation: 'sehn-TAH-teh DOHN-deh kee-EH-rahs', category: 'vos-forms', audio: 'sentate-donde-quieras' },
  { spanish: 'Decime la verdad', english: 'Tell me the truth (voseo)', pronunciation: 'deh-SEE-meh lah behr-DAHD', category: 'vos-forms', audio: 'decime-la-verdad' },

  // === Contexts — When to Use Each (10) ===
  { spanish: 'Con amigos uso tú', english: 'With friends I use tú', pronunciation: 'kohn ah-MEE-gohs OO-soh too', category: 'contexts', audio: 'con-amigos-uso-tu' },
  { spanish: 'Al doctor le digo usted', english: 'I address the doctor as usted', pronunciation: 'ahl dohk-TOHR leh DEE-goh oos-TEHD', category: 'contexts', audio: 'al-doctor-le-digo-usted' },
  { spanish: 'En Argentina se usa vos', english: 'In Argentina they use vos', pronunciation: 'ehn ahr-hehn-TEE-nah seh OO-sah bohs', category: 'contexts', audio: 'en-argentina-se-usa-vos' },
  { spanish: 'A los mayores se les trata de usted', english: 'Elders are addressed as usted', pronunciation: 'ah lohs mah-YOH-rehs seh lehs TRAH-tah deh oos-TEHD', category: 'contexts', audio: 'a-los-mayores-usted' },
  { spanish: 'En Colombia usted es más común', english: 'In Colombia usted is more common', pronunciation: 'ehn koh-LOHM-bee-ah oos-TEHD ehs mahs koh-MOON', category: 'contexts', audio: 'en-colombia-usted-comun' },
  { spanish: 'En una entrevista se usa usted', english: 'In an interview you use usted', pronunciation: 'ehn OO-nah ehn-treh-BEES-tah seh OO-sah oos-TEHD', category: 'contexts', audio: 'en-entrevista-usted' },
  { spanish: 'Entre hermanos se usa tú o vos', english: 'Between siblings you use tú or vos', pronunciation: 'EHN-treh ehr-MAH-nohs seh OO-sah too oh bohs', category: 'contexts', audio: 'entre-hermanos-tu-vos' },
  { spanish: 'Tutear es hablar de tú', english: 'To "tutear" means to address someone as tú', pronunciation: 'too-teh-AHR ehs ah-BLAHR deh too', category: 'contexts', audio: 'tutear-hablar-de-tu' },
  { spanish: 'Vosear es hablar de vos', english: 'To "vosear" means to address someone as vos', pronunciation: 'boh-seh-AHR ehs ah-BLAHR deh bohs', category: 'contexts', audio: 'vosear-hablar-de-vos' },
  { spanish: 'El registro cambia según la situación', english: 'The register changes depending on the situation', pronunciation: 'ehl rreh-HEES-troh KAHM-bee-ah seh-GOON lah see-twah-see-OHN', category: 'contexts', audio: 'registro-cambia-situacion' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L43PhraseByAudio = phraseByAudio

// === REGISTER SWITCH (unique activity) ===

export interface RegisterSwitchChallenge {
  scenario: string
  english: string
  correctRegister: string
  options: string[]
}

export const REGISTER_SWITCH_CHALLENGES: RegisterSwitchChallenge[] = [
  {
    scenario: 'Estás en una entrevista de trabajo con el director de la empresa.',
    english: 'You are in a job interview with the company director.',
    correctRegister: 'Usted',
    options: ['Tú', 'Usted', 'Vos'],
  },
  {
    scenario: 'Hablas con tu mejor amigo en un café en Ciudad de México.',
    english: 'You are talking to your best friend at a café in Mexico City.',
    correctRegister: 'Tú',
    options: ['Tú', 'Usted', 'Vos'],
  },
  {
    scenario: 'Le pides indicaciones a una señora mayor en la calle.',
    english: 'You are asking an elderly woman for directions on the street.',
    correctRegister: 'Usted',
    options: ['Tú', 'Usted', 'Vos'],
  },
  {
    scenario: 'Estás con tus compañeros de trabajo en Buenos Aires tomando mate.',
    english: 'You are with your coworkers in Buenos Aires drinking mate.',
    correctRegister: 'Vos',
    options: ['Tú', 'Usted', 'Vos'],
  },
  {
    scenario: 'Te presentan al abuelo de tu pareja por primera vez.',
    english: 'You are being introduced to your partner\'s grandfather for the first time.',
    correctRegister: 'Usted',
    options: ['Tú', 'Usted', 'Vos'],
  },
  {
    scenario: 'Tu hermana menor te pide ayuda con la tarea en Costa Rica.',
    english: 'Your younger sister asks you for homework help in Costa Rica.',
    correctRegister: 'Vos',
    options: ['Tú', 'Usted', 'Vos'],
  },
  {
    scenario: 'Juegas videojuegos en línea con amigos de España.',
    english: 'You are playing video games online with friends from Spain.',
    correctRegister: 'Tú',
    options: ['Tú', 'Usted', 'Vos'],
  },
  {
    scenario: 'Llamas por teléfono a un banco para pedir información sobre tu cuenta.',
    english: 'You call a bank to ask about your account.',
    correctRegister: 'Usted',
    options: ['Tú', 'Usted', 'Vos'],
  },
]

// === LESSON DATA ===

export const L43Data: LessonData = {
  id: 'L4.3',
  hero: {
    lessonId: 'L4.3',
    title: 'Formal vs Informal — Tú, Usted & Vos',
    subtitle: 'Choosing the right register in every situation',
    description: 'Master when to use tú (informal), usted (formal), and vos (Argentine/Central American). Learn to switch registers naturally depending on the social context — from professional meetings to chatting with friends.',
    image: '/images/L4.3/L4.3.jpg',
    gradient: 'from-teal-800/65 via-cyan-700/55 to-blue-700/65',
    accentColor: 'teal-200',
  },

  objectives: [
    { icon: '🤝', title: 'Tú — Informal You', desc: 'Use tú with friends, family, peers, and people your age in most Spanish-speaking countries.' },
    { icon: '👔', title: 'Usted — Formal You', desc: 'Use usted with elders, authority figures, strangers, and in professional settings.' },
    { icon: '🇦🇷', title: 'Vos — Regional Informal', desc: 'Understand and use vos, the informal "you" in Argentina, Uruguay, and Central America.' },
    { icon: '🔄', title: 'Register Switching', desc: 'Learn to read social cues and switch between registers naturally and confidently.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.2', label: 'Greetings', detail: 'L1.2 introduced "¿Cómo estás?" (informal) vs. "¿Cómo está?" (formal). Now you\'ll learn the full system.' },
    { fromLesson: 'L2.8', label: 'Work & Professions', detail: 'L2.8 used formal language at work. Now you\'ll understand why and when to switch registers.' },
    { fromLesson: 'L4.1', label: 'Imperfect Tense', detail: 'L4.1 used voseo in dialogue 2 (Buenos Aires). Now you\'ll learn all vos conjugations.' },
  ],

  sectionTransitions: [
    { afterSection: 'tu-forms', text: 'Great with tú! Now let\'s learn the formal register — usted.' },
    { afterSection: 'usted-forms', text: 'You\'re polished and formal! Time to explore vos — the regional twist.' },
    { afterSection: 'vos-forms', text: 'Vos mastered! Now learn when to use each register.' },
    { afterSection: 'dialogues', text: 'Amazing conversations! Let\'s explore the cultural rules behind register.' },
    { afterSection: 'cultural', text: 'Now test your register instincts!' },
    { afterSection: 'register-switch', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: '¿Cómo estás? / ¿Cómo está?', english: 'How are you? (informal / formal)' },
    { spanish: 'Dime / Dígame', english: 'Tell me (informal / formal)' },
    { spanish: '¿Querés? / ¿Quieres?', english: 'Do you want? (vos / tú)' },
    { spanish: 'Siéntate / Siéntese', english: 'Sit down (informal / formal)' },
    { spanish: 'Vení / Ven', english: 'Come (vos / tú)' },
    { spanish: 'Disculpa / Disculpe', english: 'Excuse me (informal / formal)' },
  ],

  pronunciationChallenges: [
    { spanish: '¿Cómo está usted?', pronunciation: 'KOH-moh ehs-TAH oos-TEHD', english: 'How are you? (formal)', audio: 'como-esta-usted', tip: 'Notice "está" (no S at the end) vs. "estás" (with S for tú). Usted uses third-person verb forms!' },
    { spanish: '¿Querés tomar algo?', pronunciation: 'keh-REHS toh-MAHR AHL-goh', english: 'Do you want a drink? (voseo)', audio: 'queres-tomar-algo', tip: 'Vos stresses the LAST syllable: "querÉS" not "quiÉRES." The accent shifts and the diphthong disappears.' },
    { spanish: 'Pase usted, por favor', pronunciation: 'PAH-seh oos-TEHD pohr fah-BOHR', english: 'Come in, please (formal)', audio: 'pase-usted-por-favor', tip: 'Formal commands drop the S: "pasa" (tú) → "pase" (usted). Same pattern: "habla" → "hable", "come" → "coma".' },
    { spanish: 'Vení a mi casa', pronunciation: 'beh-NEE ah mee KAH-sah', english: 'Come to my house (voseo)', audio: 'veni-a-mi-casa', tip: 'Vos commands stress the final syllable and drop the R: "venir" → "vení", "decir" → "decí", "salir" → "salí".' },
    { spanish: 'Le agradezco su tiempo', pronunciation: 'leh ah-grah-DEHS-koh soo tee-EHM-poh', english: 'I appreciate your time (formal)', audio: 'le-agradezco-su-tiempo', tip: 'With usted, use "le" (to you) and "su" (your) — same as he/she pronouns. Context makes it clear.' },
    { spanish: 'Decime la verdad', pronunciation: 'deh-SEE-meh lah behr-DAHD', english: 'Tell me the truth (voseo)', audio: 'decime-la-verdad', tip: '"Decime" (vos) vs. "dime" (tú) vs. "dígame" (usted). Three registers, three different forms!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'tu-forms', label: 'Tú (Informal)' },
    { id: 'usted-forms', label: 'Usted (Formal)' },
    { id: 'vos-forms', label: 'Vos (Regional)' },
    { id: 'contexts', label: 'When to Use Each' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Register Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'register-switch', label: 'Register Switch' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'tu-forms',
      title: 'Tú — Informal You',
      description: 'Used with friends, family, children, and peers. The default in most of Spain and Mexico.',
      tabs: [
        { label: 'Everyday Tú', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'tu-forms').slice(0, 5) },
        { label: 'Commands & Questions', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'tu-forms').slice(5) },
      ],
    },
    {
      id: 'usted-forms',
      title: 'Usted — Formal You',
      description: 'Used with strangers, elders, bosses, and in professional settings. Shows respect and distance.',
      tabs: [
        { label: 'Polite Phrases', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'usted-forms').slice(0, 5) },
        { label: 'Professional', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'usted-forms').slice(5) },
      ],
    },
    {
      id: 'vos-forms',
      title: 'Vos — Regional Informal',
      description: 'Used in Argentina, Uruguay, Paraguay, and Central America instead of tú. Unique conjugations!',
      tabs: [
        { label: 'Vos Basics', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'vos-forms').slice(0, 4) },
        { label: 'Vos Commands', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'vos-forms').slice(4) },
      ],
    },
    {
      id: 'contexts',
      title: 'When to Use Each Register',
      description: 'Knowing which register to use is just as important as knowing the grammar. Read the social cues!',
      tabs: [
        { label: 'Social Rules', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'contexts').slice(0, 5) },
        { label: 'Regional Norms', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'contexts').slice(5) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Tú vs. Usted — It\'s All in the Verb',
      content: 'Tú uses second-person endings: hablas, comes, vives. Usted uses THIRD-person endings: habla, come, vive. This is the #1 rule! You can even drop "tú" and "usted" — the verb tells the listener which register you\'re using. "¿Cómo estás?" = informal. "¿Cómo está?" = formal.',
      example: 'Tú hablas → Usted habla | Tú comes → Usted come | Tú vives → Usted vive',
    },
    {
      title: 'Vos Conjugation Pattern',
      content: 'Vos conjugations stress the LAST syllable and simplify diphthongs. Take the infinitive, drop the -R, and stress the last vowel: hablar → hablás, comer → comés, vivir → vivís. For commands, just remove the final -R and add an accent: hablar → hablá, venir → vení, decir → decí.',
      example: 'Tú quieres → Vos querés | Tú puedes → Vos podés | Tú vienes → Vos venís',
      reviewFrom: 'L4.1',
    },
    {
      title: 'Formal Commands — Drop the S, Change the Vowel',
      content: 'Tú commands end in -a/-e (habla, come). Usted commands FLIP the vowel: -AR verbs use -e (hable), -ER/-IR verbs use -a (coma, viva). Think of it as the "opposite vowel" rule. Add "usted" or "por favor" to make it extra polite.',
      example: 'Tú: habla, come, escribe | Usted: hable, coma, escriba',
    },
    {
      title: 'Possessives Change Too!',
      content: 'With tú: tu libro, tus amigos (your). With usted: su libro, sus amigos (your — same as his/her!). With vos: tu libro, tus amigos (same as tú). Object pronouns also change: te (tú/vos) → le/lo/la (usted).',
      example: 'Tu casa (tú/vos) → Su casa (usted) | Te llamo (tú/vos) → Le llamo (usted)',
      reviewFrom: 'L1.2',
    },
  ],

  flashcardGroups: [
    {
      key: 'tu-informal',
      label: 'Tú (Informal)',
      audioKeys: ['como-estas-tu', 'tu-puedes-hacerlo', 'quieres-ir-al-cine', 'dime-la-verdad', 'tienes-tiempo', 'ven-aqui-un-momento', 'tu-hablas-muy-bien', 'que-piensas-de-esto'],
    },
    {
      key: 'usted-formal',
      label: 'Usted (Formal)',
      audioKeys: ['como-esta-usted', 'pase-usted-por-favor', 'podria-repetir-eso', 'disculpe-la-molestia', 'en-que-le-puedo-ayudar', 'le-agradezco-su-tiempo', 'tome-asiento-por-favor', 'tiene-usted-alguna-pregunta'],
    },
    {
      key: 'vos-contexts',
      label: 'Vos & Contexts',
      audioKeys: ['como-estas-vos', 'queres-tomar-algo', 'veni-a-mi-casa', 'decime-la-verdad', 'con-amigos-uso-tu', 'al-doctor-le-digo-usted', 'en-argentina-se-usa-vos', 'registro-cambia-situacion'],
    },
  ],

  matchPairs: [
    { left: '¿Cómo estás?', right: 'Tú (informal)' },
    { left: '¿Cómo está?', right: 'Usted (formal)' },
    { left: '¿Querés?', right: 'Vos (regional)' },
    { left: 'Dime', right: 'Tú command' },
    { left: 'Dígame', right: 'Usted command' },
    { left: 'Decime', right: 'Vos command' },
    { left: 'Tu casa', right: 'Informal possessive' },
    { left: 'Su casa', right: 'Formal possessive' },
  ],
  matchLabels: { left: 'Phrase', right: 'Register' },

  sortActivities: [
    {
      title: 'Tú vs. Usted',
      instruction: 'Is this phrase informal (tú) or formal (usted)?',
      buckets: ['Tú (Informal)', 'Usted (Formal)'],
      items: [
        { text: '¿Cómo estás?', bucket: 'Tú (Informal)' },
        { text: 'Dime la verdad', bucket: 'Tú (Informal)' },
        { text: '¿Quieres ir?', bucket: 'Tú (Informal)' },
        { text: 'Siéntate aquí', bucket: 'Tú (Informal)' },
        { text: '¿Cómo está usted?', bucket: 'Usted (Formal)' },
        { text: 'Pase, por favor', bucket: 'Usted (Formal)' },
        { text: 'Disculpe', bucket: 'Usted (Formal)' },
        { text: 'Tome asiento', bucket: 'Usted (Formal)' },
      ],
    },
    {
      title: 'Where Would You Hear Vos?',
      instruction: 'Is this a tú or vos form?',
      buckets: ['Tú', 'Vos'],
      items: [
        { text: '¿Quieres?', bucket: 'Tú' },
        { text: '¿Querés?', bucket: 'Vos' },
        { text: 'Ven aquí', bucket: 'Tú' },
        { text: 'Vení acá', bucket: 'Vos' },
        { text: 'Dime', bucket: 'Tú' },
        { text: 'Decime', bucket: 'Vos' },
        { text: '¿Tienes?', bucket: 'Tú' },
        { text: '¿Tenés?', bucket: 'Vos' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Register Sorting',

  dialogues: [
    {
      id: 'dialogue-meeting',
      title: 'A Formal Business Meeting — Lima',
      location: 'Lima',
      lines: [
        { speaker: 'Sra. Rojas', text: 'Buenos días. Pase, por favor. Tome asiento.', audio: '/audio/L4.3/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Gracias, señora Rojas. Le agradezco su tiempo.', audio: '/audio/L4.3/phrases/d1-line2.mp3', annotations: [{ phrase: 'Le agradezco', fromLesson: 'L2.8', note: 'Formal workplace language from L2.8' }] },
        { speaker: 'Sra. Rojas', text: '¿En qué le puedo ayudar hoy?', audio: '/audio/L4.3/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Quería hablarle sobre el proyecto nuevo. ¿Podría revisar este documento?', audio: '/audio/L4.3/phrases/d1-line4.mp3', annotations: [{ phrase: 'Quería', fromLesson: 'L4.1', note: 'Imperfect for polite requests from L4.1' }] },
        { speaker: 'Sra. Rojas', text: 'Por supuesto. Permítame leerlo con atención.', audio: '/audio/L4.3/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Tómese su tiempo. No hay prisa.', audio: '/audio/L4.3/phrases/d1-line6.mp3' },
        { speaker: 'Sra. Rojas', text: 'Muy bien. ¿Tiene alguna pregunta adicional?', audio: '/audio/L4.3/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: 'No, señora. Fue un placer. Muchas gracias por recibirme.', audio: '/audio/L4.3/phrases/d1-line8.mp3' },
      ],
    },
    {
      id: 'dialogue-friends',
      title: 'Casual Hangout with Friends — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Martín', text: '¡Che! ¿Cómo estás, boludo? ¡Hace mucho que no te veo!', audio: '/audio/L4.3/phrases/d2-line1.mp3' },
        { speaker: 'Lucía', text: '¡Hola! Bien, ¿y vos? Contame, ¿qué estuviste haciendo?', audio: '/audio/L4.3/phrases/d2-line2.mp3' },
        { speaker: 'Martín', text: 'Nada, laburando como loco. ¿Querés tomar un mate?', audio: '/audio/L4.3/phrases/d2-line3.mp3' },
        { speaker: 'Lucía', text: '¡Dale! Vení, sentate acá. Te cuento algo increíble.', audio: '/audio/L4.3/phrases/d2-line4.mp3' },
        { speaker: 'Martín', text: '¿Qué pasó? Decime, decime.', audio: '/audio/L4.3/phrases/d2-line5.mp3' },
        { speaker: 'Lucía', text: 'Conseguí un trabajo nuevo. ¡No lo podés creer!', audio: '/audio/L4.3/phrases/d2-line6.mp3' },
        { speaker: 'Martín', text: '¡No me digás! ¡Felicitaciones! ¿Y cuándo empezás?', audio: '/audio/L4.3/phrases/d2-line7.mp3' },
        { speaker: 'Lucía', text: 'El lunes que viene. Estoy re nerviosa pero contenta.', audio: '/audio/L4.3/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Compare a formal business meeting in Lima (usted) with a casual hangout in Buenos Aires (vos).',

  culturalNotes: [
    {
      title: 'Tú, Usted, or Vos? — The Social GPS',
      content: 'Choosing the right register is one of the most important social skills in Spanish. Using usted with a friend can feel cold and distant. Using tú with a boss or elder can seem disrespectful. In Argentina, using tú instead of vos might mark you as a foreigner. Pay attention to what locals use and mirror them — it\'s the fastest way to fit in!',
    },
    {
      title: 'Colombia — Where Usted Is for Everyone',
      content: 'In Bogotá and the Colombian highlands, usted is used even between close friends, couples, and family members! "¿Usted qué quiere comer?" between best friends is completely normal. In Medellín and the coast, tú and vos are more common. This shows that register rules aren\'t universal — they vary by region, not just by formality.',
    },
    {
      title: 'The Voseo Map — More Common Than You Think',
      content: 'Vos isn\'t just Argentina! It\'s the standard informal pronoun in Uruguay, Paraguay, Costa Rica, El Salvador, Guatemala, Honduras, and Nicaragua. It\'s also used in parts of Colombia (Medellín), Bolivia, Ecuador, and Venezuela. Over 100 million Spanish speakers use vos daily. Learning it makes you sound natural in half of Latin America!',
    },
  ],
  culturalGradient: 'from-teal-50 to-cyan-50',

  quiz: [
    { id: 1, type: 'mc', text: 'Which pronoun should you use with your boss in a formal meeting?', options: ['Tú', 'Usted', 'Vos', 'Ustedes'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "¿Cómo ___ usted?" (How are you? — formal)', answer: 'está' },
    { id: 3, type: 'mc', text: '"¿Querés tomar algo?" uses which register?', options: ['Tú', 'Usted', 'Vos', 'Nosotros'], answer: 2 },
    { id: 4, type: 'tf', text: 'Usted uses third-person verb conjugations (habla, come, vive).', answer: true },
    { id: 5, type: 'mc', text: 'In Argentina, the informal "you" is:', options: ['Tú', 'Usted', 'Vos', 'Vosotros'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete the vos command: "___  a mi casa" (Come — venir)', answer: 'Vení' },
    { id: 7, type: 'mc', text: 'The formal command of "hablar" (usted) is:', options: ['Habla', 'Hable', 'Hablá', 'Hablas'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, which register does Diego use with Sra. Rojas?', options: ['Tú', 'Usted', 'Vos', 'Mixed'], answer: 1 },
    { id: 9, type: 'tf', text: 'In Colombia, usted can be used even between close friends.', answer: true },
    { id: 10, type: 'mc', text: '"Decime la verdad" is:', options: ['Tú command', 'Usted command', 'Vos command', 'Nosotros form'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Pase ___, por favor" (formal you)', answer: 'usted' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does Lucía tell Martín?', options: ['She got married', 'She got a new job', 'She is moving', 'She is traveling'], answer: 1 },
    { id: 13, type: 'mc', text: 'Vos is the standard informal pronoun in all of these EXCEPT:', options: ['Argentina', 'Costa Rica', 'Spain', 'Uruguay'], answer: 2 },
    { id: 14, type: 'tf', text: '"Tutear" means to address someone using the tú form.', answer: true },
    { id: 15, type: 'mc', text: 'The vos conjugation of "tener" (present) is:', options: ['Tienes', 'Tenés', 'Tiene', 'Tenís'], answer: 1 },
  ],

  audioBase: '/audio/L4.3/phrases',

  uniqueActivity: {
    id: 'RegisterSwitchL43',
    sectionId: 'register-switch',
    sectionColor: 'bg-teal-50/40',
    sectionBorder: 'border-teal-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'tu-forms': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'usted-forms': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'vos-forms': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    contexts: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'register-switch': { bg: 'bg-teal-50/40', border: 'border-teal-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
