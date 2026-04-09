import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Future Tense (10) ===
  { spanish: 'Hablaré con mi jefe mañana', english: 'I will talk with my boss tomorrow', pronunciation: 'ah-blah-REH kohn mee HEH-feh mah-NYAH-nah', category: 'future', audio: 'hablare-con-mi-jefe' },
  { spanish: 'Comeré en un restaurante nuevo', english: 'I will eat at a new restaurant', pronunciation: 'koh-meh-REH ehn oon rehs-tow-RAHN-teh NWEH-boh', category: 'future', audio: 'comere-en-un-restaurante' },
  { spanish: 'Viviré en otra ciudad', english: 'I will live in another city', pronunciation: 'bee-bee-REH ehn OH-trah see-oo-DAHD', category: 'future', audio: 'vivire-en-otra-ciudad' },
  { spanish: 'Estudiaremos en la universidad', english: 'We will study at the university', pronunciation: 'ehs-too-dee-ah-REH-mohs ehn lah oo-nee-behr-see-DAHD', category: 'future', audio: 'estudiaremos-en-la-universidad' },
  { spanish: 'Trabajarás en lo que te gusta', english: 'You will work in what you like', pronunciation: 'trah-bah-hah-RAHS ehn loh keh teh GOOS-tah', category: 'future', audio: 'trabajaras-en-lo-que-te-gusta' },
  { spanish: 'Viajarán por todo el mundo', english: 'They will travel around the world', pronunciation: 'bee-ah-hah-RAHN pohr TOH-doh ehl MOON-doh', category: 'future', audio: 'viajaran-por-todo-el-mundo' },
  { spanish: 'Aprenderé otro idioma', english: 'I will learn another language', pronunciation: 'ah-prehn-deh-REH OH-troh ee-dee-OH-mah', category: 'future', audio: 'aprendere-otro-idioma' },
  { spanish: 'Tendré mi propia empresa', english: 'I will have my own business', pronunciation: 'tehn-DREH mee PROH-pee-ah ehm-PREH-sah', category: 'future', audio: 'tendre-mi-propia-empresa' },
  { spanish: 'Seré doctor algún día', english: 'I will be a doctor someday', pronunciation: 'seh-REH dohk-TOHR ahl-GOON DEE-ah', category: 'future', audio: 'sere-doctor-algun-dia' },
  { spanish: 'Podremos lograr nuestras metas', english: 'We will be able to achieve our goals', pronunciation: 'poh-DREH-mohs loh-GRAHR NWEHS-trahs MEH-tahs', category: 'future', audio: 'podremos-lograr-nuestras-metas' },

  // === Conditional (10) ===
  { spanish: 'Hablaría con el presidente', english: 'I would talk with the president', pronunciation: 'ah-blah-REE-ah kohn ehl preh-see-DEHN-teh', category: 'conditional', audio: 'hablaria-con-el-presidente' },
  { spanish: 'Comería comida de todo el mundo', english: 'I would eat food from around the world', pronunciation: 'koh-meh-REE-ah koh-MEE-dah deh TOH-doh ehl MOON-doh', category: 'conditional', audio: 'comeria-comida-de-todo-el-mundo' },
  { spanish: 'Viviría en la playa', english: 'I would live at the beach', pronunciation: 'bee-bee-REE-ah ehn lah PLAH-yah', category: 'conditional', audio: 'viviria-en-la-playa' },
  { spanish: 'Viajaría a Japón', english: 'I would travel to Japan', pronunciation: 'bee-ah-hah-REE-ah ah hah-POHN', category: 'conditional', audio: 'viajaria-a-japon' },
  { spanish: 'Estudiaría arquitectura', english: 'I would study architecture', pronunciation: 'ehs-too-dee-ah-REE-ah ahr-kee-tehk-TOO-rah', category: 'conditional', audio: 'estudiaria-arquitectura' },
  { spanish: 'Me gustaría cambiar de carrera', english: 'I would like to change careers', pronunciation: 'meh goos-tah-REE-ah kahm-bee-AHR deh kah-RREH-rah', category: 'conditional', audio: 'me-gustaria-cambiar-de-carrera' },
  { spanish: 'Podría ayudar a más personas', english: 'I could help more people', pronunciation: 'poh-DREE-ah ah-yoo-DAHR ah mahs pehr-SOH-nahs', category: 'conditional', audio: 'podria-ayudar-a-mas-personas' },
  { spanish: 'Haría un viaje largo', english: 'I would take a long trip', pronunciation: 'ah-REE-ah oon bee-AH-heh LAHR-goh', category: 'conditional', audio: 'haria-un-viaje-largo' },
  { spanish: 'Sería voluntario en otro país', english: 'I would volunteer in another country', pronunciation: 'seh-REE-ah boh-loon-TAH-ree-oh ehn OH-troh pah-EES', category: 'conditional', audio: 'seria-voluntario-en-otro-pais' },
  { spanish: 'Tendría más tiempo libre', english: 'I would have more free time', pronunciation: 'tehn-DREE-ah mahs tee-EHM-poh LEE-breh', category: 'conditional', audio: 'tendria-mas-tiempo-libre' },

  // === Goals & Aspirations (10) ===
  { spanish: 'Quiero ser ingeniero', english: 'I want to be an engineer', pronunciation: 'kee-EH-roh sehr een-heh-nee-EH-roh', category: 'goals', audio: 'quiero-ser-ingeniero' },
  { spanish: 'Planeo terminar mi carrera', english: 'I plan to finish my degree', pronunciation: 'plah-NEH-oh tehr-mee-NAHR mee kah-RREH-rah', category: 'goals', audio: 'planeo-terminar-mi-carrera' },
  { spanish: 'Espero encontrar un buen trabajo', english: 'I hope to find a good job', pronunciation: 'ehs-PEH-roh ehn-kohn-TRAHR oon bwehn trah-BAH-hoh', category: 'goals', audio: 'espero-encontrar-un-buen-trabajo' },
  { spanish: 'Mi sueño es tener una familia', english: 'My dream is to have a family', pronunciation: 'mee SWEH-nyoh ehs teh-NEHR OO-nah fah-MEE-lee-ah', category: 'goals', audio: 'mi-sueno-es-tener-una-familia' },
  { spanish: 'Pienso estudiar en el extranjero', english: 'I plan to study abroad', pronunciation: 'pee-EHN-soh ehs-too-dee-AHR ehn ehl ehks-trahn-HEH-roh', category: 'goals', audio: 'pienso-estudiar-en-el-extranjero' },
  { spanish: 'Mi meta es hablar tres idiomas', english: 'My goal is to speak three languages', pronunciation: 'mee MEH-tah ehs ah-BLAHR trehs ee-dee-OH-mahs', category: 'goals', audio: 'mi-meta-es-hablar-tres-idiomas' },
  { spanish: 'Quiero comprar mi propia casa', english: 'I want to buy my own house', pronunciation: 'kee-EH-roh kohm-PRAHR mee PROH-pee-ah KAH-sah', category: 'goals', audio: 'quiero-comprar-mi-propia-casa' },
  { spanish: 'Planeo ahorrar para el futuro', english: 'I plan to save for the future', pronunciation: 'plah-NEH-oh ah-oh-RRAHR PAH-rah ehl foo-TOO-roh', category: 'goals', audio: 'planeo-ahorrar-para-el-futuro' },
  { spanish: 'Espero viajar a Sudamérica', english: 'I hope to travel to South America', pronunciation: 'ehs-PEH-roh bee-ah-HAHR ah soo-dah-MEH-ree-kah', category: 'goals', audio: 'espero-viajar-a-sudamerica' },
  { spanish: 'Mi sueño es abrir un negocio', english: 'My dream is to open a business', pronunciation: 'mee SWEH-nyoh ehs ah-BREER oon neh-GOH-see-oh', category: 'goals', audio: 'mi-sueno-es-abrir-un-negocio' },

  // === Hypothetical (8) ===
  { spanish: 'Si pudiera, viajaría al espacio', english: 'If I could, I would travel to space', pronunciation: 'see poo-dee-EH-rah bee-ah-hah-REE-ah ahl ehs-PAH-see-oh', category: 'hypothetical', audio: 'si-pudiera-viajaria-al-espacio' },
  { spanish: 'Si tuviera dinero, compraría una casa', english: 'If I had money, I would buy a house', pronunciation: 'see too-bee-EH-rah dee-NEH-roh kohm-prah-REE-ah OO-nah KAH-sah', category: 'hypothetical', audio: 'si-tuviera-dinero-compraria-una-casa' },
  { spanish: 'Me gustaría aprender a cocinar mejor', english: 'I would like to learn to cook better', pronunciation: 'meh goos-tah-REE-ah ah-prehn-DEHR ah koh-see-NAHR meh-HOHR', category: 'hypothetical', audio: 'me-gustaria-aprender-a-cocinar' },
  { spanish: 'Si fuera presidente, cambiaría las leyes', english: 'If I were president, I would change the laws', pronunciation: 'see foo-EH-rah preh-see-DEHN-teh kahm-bee-ah-REE-ah lahs LEH-yehs', category: 'hypothetical', audio: 'si-fuera-presidente-cambiaria' },
  { spanish: 'Si ganara la lotería, donaría a caridad', english: 'If I won the lottery, I would donate to charity', pronunciation: 'see gah-NAH-rah lah loh-teh-REE-ah doh-nah-REE-ah ah kah-ree-DAHD', category: 'hypothetical', audio: 'si-ganara-la-loteria-donaria' },
  { spanish: 'Me encantaría conocer Europa', english: 'I would love to visit Europe', pronunciation: 'meh ehn-kahn-tah-REE-ah koh-noh-SEHR eh-oo-ROH-pah', category: 'hypothetical', audio: 'me-encantaria-conocer-europa' },
  { spanish: 'Si hablara español perfecto, viviría en Madrid', english: 'If I spoke perfect Spanish, I would live in Madrid', pronunciation: 'see ah-BLAH-rah ehs-pah-NYOHL pehr-FEHK-toh bee-bee-REE-ah ehn mah-DREED', category: 'hypothetical', audio: 'si-hablara-espanol-perfecto' },
  { spanish: 'Si no lloviera, iríamos al parque', english: 'If it weren\'t raining, we would go to the park', pronunciation: 'see noh yoh-bee-EH-rah ee-REE-ah-mohs ahl PAHR-keh', category: 'hypothetical', audio: 'si-no-lloviera-iriamos' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L48PhraseByAudio = phraseByAudio

// === DREAM BOARD (unique activity) ===

export interface DreamBoardChallenge {
  scenario: string
  english: string
  correctForm: string
  options: string[]
}

export const DREAM_BOARD_CHALLENGES: DreamBoardChallenge[] = [
  {
    scenario: 'El próximo año yo ___ en la universidad. (estudiar)',
    english: 'Next year I will study at the university.',
    correctForm: 'estudiaré',
    options: ['estudiaré', 'estudiaría', 'estudie', 'estudiara'],
  },
  {
    scenario: 'Si tuviera más tiempo, ___ otro idioma. (aprender)',
    english: 'If I had more time, I would learn another language.',
    correctForm: 'aprendería',
    options: ['aprenderé', 'aprendería', 'aprenda', 'aprendiera'],
  },
  {
    scenario: 'Cuando me gradúe, ___ un buen trabajo. (buscar)',
    english: 'When I graduate, I will look for a good job.',
    correctForm: 'buscaré',
    options: ['buscaré', 'buscaría', 'busque', 'buscara'],
  },
  {
    scenario: 'Si ganara la lotería, ___ por el mundo. (viajar)',
    english: 'If I won the lottery, I would travel around the world.',
    correctForm: 'viajaría',
    options: ['viajaré', 'viajaría', 'viaje', 'viajara'],
  },
  {
    scenario: 'Es importante que ___ tus sueños. (seguir - subjunctive)',
    english: 'It is important that you follow your dreams.',
    correctForm: 'sigas',
    options: ['seguirás', 'seguirías', 'sigas', 'siguieras'],
  },
  {
    scenario: 'Mañana nosotros ___ la decisión final. (tomar)',
    english: 'Tomorrow we will make the final decision.',
    correctForm: 'tomaremos',
    options: ['tomaremos', 'tomaríamos', 'tomemos', 'tomáramos'],
  },
  {
    scenario: 'Si pudiera elegir cualquier carrera, ___ astronauta. (ser)',
    english: 'If I could choose any career, I would be an astronaut.',
    correctForm: 'sería',
    options: ['seré', 'sería', 'sea', 'fuera'],
  },
]

// === LESSON DATA ===

export const L48Data: LessonData = {
  id: 'L4.8',
  hero: {
    lessonId: 'L4.8',
    title: 'Future Plans & Dreams',
    subtitle: 'Talking about what will be and what could be',
    description: 'Master the future tense (hablaré) and conditional (hablaría) to discuss your goals, dreams, and hypothetical situations. Combine with the subjunctive to express wishes and possibilities — the key to sounding truly fluent!',
    image: '/images/L4.8/L4.8.jpg',
    gradient: 'from-amber-800/65 via-orange-700/55 to-rose-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '🔮', title: 'Future Tense', desc: 'Conjugate regular & irregular future: hablaré, comeré, tendré, podré, seré.' },
    { icon: '💭', title: 'Conditional Mood', desc: 'Express hypotheticals: hablaría, comería, tendría, podría, sería.' },
    { icon: '🎯', title: 'Goals & Aspirations', desc: 'Use quiero ser, planeo, espero, mi sueño es to share your life goals.' },
    { icon: '✨', title: 'Hypothetical Situations', desc: 'Combine si + imperfect subjunctive + conditional: Si pudiera, viajaría...' },
  ],

  priorKnowledge: [
    { fromLesson: 'L2.3', label: 'Near Future (ir + a)', detail: 'L2.3 taught "voy a hablar" (I\'m going to talk). Now learn the formal future: "hablaré" (I will talk).' },
    { fromLesson: 'L4.1', label: 'Imperfect Tense', detail: 'L4.1 covered habitual past. The conditional shares the same stem irregularities as the future.' },
    { fromLesson: 'L4.2', label: 'Subjunctive Mood', detail: 'L4.2 introduced subjunctive. Now use it in "si" clauses: "Si tuviera..." (If I had...).' },
  ],

  sectionTransitions: [
    { afterSection: 'future-tense', text: 'You can talk about the future! Now let\'s add the conditional — what would happen.' },
    { afterSection: 'conditional', text: 'Future and conditional mastered! Let\'s express your goals and dreams.' },
    { afterSection: 'goals', text: 'Goals set! Now the fun part — hypothetical "what if" scenarios.' },
    { afterSection: 'dialogues', text: 'Great conversations about dreams! Let\'s explore the culture of aspirations.' },
    { afterSection: 'cultural', text: 'Now test your skills in the Dream Board activity!' },
    { afterSection: 'dream-board', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Algún día...', english: 'Someday...' },
    { spanish: 'Quiero ser...', english: 'I want to be...' },
    { spanish: 'Me gustaría...', english: 'I would like...' },
    { spanish: 'Si pudiera...', english: 'If I could...' },
    { spanish: 'Mi sueño es...', english: 'My dream is...' },
    { spanish: 'En el futuro...', english: 'In the future...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Hablaré español con fluidez', pronunciation: 'ah-blah-REH ehs-pah-NYOHL kohn floo-ee-DEHS', english: 'I will speak Spanish fluently', audio: 'hablare-espanol-con-fluidez', tip: 'Future tense always stresses the ending: hablaRÉ, comeRÉ, viviRÉ. The infinitive + ending = future!' },
    { spanish: 'Comería tacos todos los días', pronunciation: 'koh-meh-REE-ah TAH-kohs TOH-dohs lohs DEE-ahs', english: 'I would eat tacos every day', audio: 'comeria-tacos-todos-los-dias', tip: 'Conditional stresses -RÍ-a: comeRÍa, hablaRÍa. Same pattern as future but with -ía endings.' },
    { spanish: 'Si tuviera tiempo, aprendería piano', pronunciation: 'see too-bee-EH-rah tee-EHM-poh ah-prehn-deh-REE-ah pee-AH-noh', english: 'If I had time, I would learn piano', audio: 'si-tuviera-tiempo-aprenderia-piano', tip: '"Si + imperfect subjunctive + conditional" is THE formula for hypotheticals. Si tuviera... haría...' },
    { spanish: 'Tendré mi propia casa el próximo año', pronunciation: 'tehn-DREH mee PROH-pee-ah KAH-sah ehl PROHK-see-moh AH-nyoh', english: 'I will have my own house next year', audio: 'tendre-mi-propia-casa-el-proximo-ano', tip: 'Irregular futures keep a modified stem: tener→tendr-, poder→podr-, saber→sabr-. Same endings: -é, -ás, -á, -emos, -án.' },
    { spanish: 'Podría cambiar el mundo', pronunciation: 'poh-DREE-ah kahm-bee-AHR ehl MOON-doh', english: 'I could change the world', audio: 'podria-cambiar-el-mundo', tip: 'Irregular conditionals use the SAME stems as irregular futures: podr-, tendr-, sabr-. Just add -ía endings.' },
    { spanish: 'Mi sueño es ser profesor de español', pronunciation: 'mee SWEH-nyoh ehs sehr proh-feh-SOHR deh ehs-pah-NYOHL', english: 'My dream is to be a Spanish teacher', audio: 'mi-sueno-es-ser-profesor-de-espanol', tip: '"Sueño" means both "dream" and "sleep." "Mi sueño" = my dream. "Tengo sueño" = I\'m sleepy. Context is key!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'future-tense', label: 'Future Tense' },
    { id: 'conditional', label: 'Conditional' },
    { id: 'goals', label: 'Goals & Dreams' },
    { id: 'hypothetical', label: 'Hypothetical' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'dream-board', label: 'Dream Board' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'future-tense',
      title: 'Future Tense — El Futuro',
      description: 'Add endings directly to the infinitive: -é, -ás, -á, -emos, -án. Irregulars change the stem but keep the same endings.',
      tabs: [
        { label: 'Regular Future', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'future').slice(0, 5) },
        { label: 'Irregular Future', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'future').slice(5) },
      ],
    },
    {
      id: 'conditional',
      title: 'Conditional — El Condicional',
      description: 'Same stem as future + imperfect -ER/-IR endings: -ía, -ías, -ía, -íamos, -ían. "I would..."',
      tabs: [
        { label: 'Regular Conditional', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'conditional').slice(0, 5) },
        { label: 'Irregular & Wishes', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'conditional').slice(5) },
      ],
    },
    {
      id: 'goals',
      title: 'Goals & Aspirations — Metas y Sueños',
      description: 'Use quiero, planeo, espero, pienso + infinitive to share your life ambitions.',
      tabs: [
        { label: 'Career & Education', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'goals').slice(0, 5) },
        { label: 'Life Goals', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'goals').slice(5) },
      ],
    },
    {
      id: 'hypothetical',
      title: 'Hypothetical Situations — Si yo pudiera...',
      description: 'Si + imperfect subjunctive + conditional = "If I could/had... I would..." The key formula for dreaming in Spanish!',
      tabs: [
        { label: 'If I could...', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'hypothetical').slice(0, 4) },
        { label: 'I would love to...', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'hypothetical').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Future = Infinitive + Endings',
      content: 'The future tense is the easiest to form! Take the full infinitive (hablar, comer, vivir) and add: -é, -ás, -á, -emos, -án. No stem changes for regular verbs. The stress ALWAYS falls on the ending: hablaRÉ, comeRÁS, viviRÁ.',
      example: 'Hablar → Hablaré, hablarás, hablará, hablaremos, hablarán',
    },
    {
      title: 'Conditional = Future Stem + -ía Endings',
      content: 'The conditional uses the SAME stem as the future (including irregulars!) but with -ía endings: -ía, -ías, -ía, -íamos, -ían. If a verb is irregular in the future, it\'s irregular in the same way in the conditional.',
      example: 'Tener → tendré (future) / tendría (conditional) | Poder → podré / podría',
      reviewFrom: 'L4.1',
    },
    {
      title: 'The "Si" Clause Formula',
      content: 'For hypotheticals about unlikely/impossible situations: "Si + imperfect subjunctive, conditional." Si tuviera (if I had), si pudiera (if I could), si fuera (if I were). The subjunctive goes in the "si" clause; the conditional goes in the result clause.',
      example: 'Si tuviera dinero, viajaría. | Si pudiera volar, iría a la luna.',
      reviewFrom: 'L4.2',
    },
    {
      title: '12 Irregular Future/Conditional Stems',
      content: 'Only 12 verbs have irregular stems (same for both future and conditional): tener→tendr-, poder→podr-, saber→sabr-, haber→habr-, poner→pondr-, salir→saldr-, venir→vendr-, decir→dir-, hacer→har-, querer→querr-, valer→valdr-, caber→cabr-.',
      example: 'Diré (I will say) | Haré (I will do) | Querré (I will want) | Saldré (I will leave)',
    },
  ],

  flashcardGroups: [
    {
      key: 'future',
      label: 'Future Tense',
      audioKeys: ['hablare-con-mi-jefe', 'comere-en-un-restaurante', 'vivire-en-otra-ciudad', 'estudiaremos-en-la-universidad', 'trabajaras-en-lo-que-te-gusta', 'viajaran-por-todo-el-mundo', 'aprendere-otro-idioma', 'tendre-mi-propia-empresa', 'sere-doctor-algun-dia', 'podremos-lograr-nuestras-metas'],
    },
    {
      key: 'conditional',
      label: 'Conditional',
      audioKeys: ['hablaria-con-el-presidente', 'comeria-comida-de-todo-el-mundo', 'viviria-en-la-playa', 'viajaria-a-japon', 'estudiaria-arquitectura', 'me-gustaria-cambiar-de-carrera', 'podria-ayudar-a-mas-personas', 'haria-un-viaje-largo', 'seria-voluntario-en-otro-pais', 'tendria-mas-tiempo-libre'],
    },
    {
      key: 'goals-hypothetical',
      label: 'Goals & Hypothetical',
      audioKeys: ['quiero-ser-ingeniero', 'planeo-terminar-mi-carrera', 'espero-encontrar-un-buen-trabajo', 'mi-sueno-es-tener-una-familia', 'si-pudiera-viajaria-al-espacio', 'si-tuviera-dinero-compraria-una-casa', 'me-gustaria-aprender-a-cocinar', 'me-encantaria-conocer-europa'],
    },
  ],

  matchPairs: [
    { left: 'Hablaré', right: 'I will speak' },
    { left: 'Hablaría', right: 'I would speak' },
    { left: 'Tendré', right: 'I will have' },
    { left: 'Podría', right: 'I could / would be able' },
    { left: 'Mi sueño es', right: 'My dream is' },
    { left: 'Si pudiera', right: 'If I could' },
    { left: 'Espero', right: 'I hope' },
    { left: 'Me gustaría', right: 'I would like' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Future vs. Conditional',
      instruction: 'Is this verb in the future tense or the conditional?',
      buckets: ['Future (will) 🔮', 'Conditional (would) 💭'],
      items: [
        { text: 'Hablaré', bucket: 'Future (will) 🔮' },
        { text: 'Comeré', bucket: 'Future (will) 🔮' },
        { text: 'Viviré', bucket: 'Future (will) 🔮' },
        { text: 'Tendré', bucket: 'Future (will) 🔮' },
        { text: 'Hablaría', bucket: 'Conditional (would) 💭' },
        { text: 'Comería', bucket: 'Conditional (would) 💭' },
        { text: 'Viviría', bucket: 'Conditional (would) 💭' },
        { text: 'Tendría', bucket: 'Conditional (would) 💭' },
      ],
    },
    {
      title: 'Certain vs. Hypothetical',
      instruction: 'Is this a definite plan or a hypothetical wish?',
      buckets: ['Definite Plan ✓', 'Hypothetical ✨'],
      items: [
        { text: 'Estudiaré medicina', bucket: 'Definite Plan ✓' },
        { text: 'Planeo viajar en junio', bucket: 'Definite Plan ✓' },
        { text: 'Trabajaré en Google', bucket: 'Definite Plan ✓' },
        { text: 'Aprenderé francés', bucket: 'Definite Plan ✓' },
        { text: 'Si pudiera, viviría en París', bucket: 'Hypothetical ✨' },
        { text: 'Si tuviera dinero, compraría un barco', bucket: 'Hypothetical ✨' },
        { text: 'Me gustaría ser astronauta', bucket: 'Hypothetical ✨' },
        { text: 'Si fuera famoso, donaría todo', bucket: 'Hypothetical ✨' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-career',
      title: 'Career Goals After Graduation — México City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Sofía', text: '¡Hola, Mateo! ¿Ya sabes qué harás después de graduarte?', audio: '/audio/L4.8/phrases/d1-line1.mp3' },
        { speaker: 'Mateo', text: 'Sí, estudiaré una maestría en ingeniería. Quiero especializarme en energía solar.', audio: '/audio/L4.8/phrases/d1-line2.mp3' },
        { speaker: 'Sofía', text: '¡Qué interesante! Yo planeo buscar trabajo en una empresa internacional.', audio: '/audio/L4.8/phrases/d1-line3.mp3' },
        { speaker: 'Mateo', text: '¿En serio? ¿Dónde te gustaría trabajar?', audio: '/audio/L4.8/phrases/d1-line4.mp3' },
        { speaker: 'Sofía', text: 'Me encantaría trabajar en España o Argentina. Mi sueño es vivir en el extranjero.', audio: '/audio/L4.8/phrases/d1-line5.mp3', annotations: [{ phrase: 'en el extranjero', fromLesson: 'L2.3', note: 'Travel vocabulary from L2.3' }] },
        { speaker: 'Mateo', text: '¡Qué padre! Si yo tuviera la oportunidad, también viviría fuera un tiempo.', audio: '/audio/L4.8/phrases/d1-line6.mp3' },
        { speaker: 'Sofía', text: '¿Y a largo plazo? ¿Qué esperas para el futuro?', audio: '/audio/L4.8/phrases/d1-line7.mp3' },
        { speaker: 'Mateo', text: 'Espero tener mi propia empresa algún día. Y tú, ¿cuál es tu meta más grande?', audio: '/audio/L4.8/phrases/d1-line8.mp3' },
        { speaker: 'Sofía', text: 'Quiero ayudar a comunidades rurales con tecnología. Creo que podré hacer una diferencia.', audio: '/audio/L4.8/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-hypothetical',
      title: 'What Would You Do? — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Valentina', text: 'Dale, juguemos. Si pudieras tener cualquier trabajo, ¿cuál sería?', audio: '/audio/L4.8/phrases/d2-line1.mp3' },
        { speaker: 'Nicolás', text: 'Si pudiera elegir, sería chef. Me encanta cocinar. ¿Y vos?', audio: '/audio/L4.8/phrases/d2-line2.mp3' },
        { speaker: 'Valentina', text: 'Yo sería directora de cine. Haría películas sobre la vida real.', audio: '/audio/L4.8/phrases/d2-line3.mp3' },
        { speaker: 'Nicolás', text: '¡Genial! ¿Y si ganaras un millón de dólares, qué harías primero?', audio: '/audio/L4.8/phrases/d2-line4.mp3' },
        { speaker: 'Valentina', text: 'Primero viajaría por toda Sudamérica. Después abriría una escuela de cine.', audio: '/audio/L4.8/phrases/d2-line5.mp3', annotations: [{ phrase: 'viajaría por toda Sudamérica', fromLesson: 'L4.1', note: 'Conditional formed like imperfect -ER/-IR endings from L4.1' }] },
        { speaker: 'Nicolás', text: '¡Qué copado! Si yo tuviera un millón, abriría un restaurante y invertiría el resto.', audio: '/audio/L4.8/phrases/d2-line6.mp3' },
        { speaker: 'Valentina', text: '¿Y si pudieras vivir en cualquier época, cuándo vivirías?', audio: '/audio/L4.8/phrases/d2-line7.mp3' },
        { speaker: 'Nicolás', text: 'Viviría en el futuro. Me gustaría ver cómo será el mundo en cien años.', audio: '/audio/L4.8/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Discuss career goals after graduation in Mexico City and play a hypothetical "what would you do?" game in Buenos Aires.',

  culturalNotes: [
    {
      title: 'El Sueño Americano vs. El Sueño Latinoamericano',
      content: 'While the "American Dream" emphasizes individual success and material wealth, many Latin Americans aspire to a different version: staying close to family, building community, and finding fulfillment beyond money. "Salir adelante" (to get ahead) often means lifting your whole family up, not just yourself. When discussing dreams in Spanish, you\'ll hear "quiero que mi familia esté bien" (I want my family to be well) as often as personal career goals.',
    },
    {
      title: 'La Emigración como Sueño y Sacrificio',
      content: 'For millions of Latin Americans, emigration represents both hope and sacrifice. "Irse para el norte" (going north) or "irse a Europa" carries deep emotional weight — leaving behind family, culture, and home for better opportunities. The conditional tense is often used to express these bittersweet dreams: "Me gustaría quedarme, pero tendré que irme" (I would like to stay, but I will have to leave). Understanding this context adds depth to your conversations about future plans.',
    },
    {
      title: 'El Emprendimiento en América Latina',
      content: 'Entrepreneurship is booming across Latin America. From Mexico\'s tech startups to Colombia\'s social enterprises to Argentina\'s creative economy, "abrir un negocio" (opening a business) is a common dream. Many young people say "quiero ser mi propio jefe" (I want to be my own boss). Street vendors, family restaurants, and small shops are the backbone of Latin American economies — and "emprender" (to start a business) is one of the most respected verbs in the region.',
    },
  ],
  culturalGradient: 'from-amber-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: 'The future of "hablar" (yo) is:', options: ['Hablo', 'Hablé', 'Hablaré', 'Hablaría'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "Mañana ___ a la playa" (I will go — ir)', answer: 'iré' },
    { id: 3, type: 'mc', text: '"Comería" means:', options: ['I ate', 'I eat', 'I will eat', 'I would eat'], answer: 3 },
    { id: 4, type: 'tf', text: 'The future and conditional share the same irregular stems (tendr-, podr-, sabr-).', answer: true },
    { id: 5, type: 'mc', text: '"Si tuviera dinero, viajaría" uses which combination?', options: ['Future + future', 'Present + conditional', 'Imperfect subjunctive + conditional', 'Preterite + future'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Si pudiera, ___ al espacio" (I would travel)', answer: 'viajaría' },
    { id: 7, type: 'mc', text: 'Which is a correct irregular future stem for "tener"?', options: ['ten-', 'tien-', 'tendr-', 'tuv-'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Mateo plan to study?', options: ['Medicine', 'Engineering master\'s', 'Business', 'Law'], answer: 1 },
    { id: 9, type: 'tf', text: '"Me gustaría" (I would like) uses the conditional tense.', answer: true },
    { id: 10, type: 'mc', text: '"Planeo terminar mi carrera" means:', options: ['I planned to finish', 'I plan to finish my degree', 'I will plan to finish', 'I would plan to finish'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "Mi sueño ___ tener una familia" (is)', answer: 'es' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what would Valentina do with a million dollars first?', options: ['Buy a house', 'Open a school', 'Travel South America', 'Make a film'], answer: 2 },
    { id: 13, type: 'mc', text: '"Tendré" comes from which verb?', options: ['Tender', 'Tener', 'Tentar', 'Teñir'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, "salir adelante" means to get ahead by lifting your family up.', answer: true },
    { id: 15, type: 'mc', text: '"Si ganara la lotería, donaría" — "ganara" is in the:', options: ['Future', 'Conditional', 'Imperfect subjunctive', 'Preterite'], answer: 2 },
  ],

  audioBase: '/audio/L4.8/phrases',

  uniqueActivity: {
    id: 'DreamBoardL48',
    sectionId: 'dream-board',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'future-tense': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    conditional: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    goals: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    hypothetical: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'dream-board': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
