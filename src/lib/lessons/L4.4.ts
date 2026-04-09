import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Media Vocabulary (10) ===
  { spanish: 'El periódico', english: 'The newspaper', pronunciation: 'ehl peh-ree-OH-dee-koh', category: 'media-vocab', audio: 'el-periodico' },
  { spanish: 'Las noticias', english: 'The news', pronunciation: 'lahs noh-TEE-see-ahs', category: 'media-vocab', audio: 'las-noticias' },
  { spanish: 'El reportaje', english: 'The news report', pronunciation: 'ehl reh-pohr-TAH-heh', category: 'media-vocab', audio: 'el-reportaje' },
  { spanish: 'El noticiero', english: 'The newscast', pronunciation: 'ehl noh-tee-see-EH-roh', category: 'media-vocab', audio: 'el-noticiero' },
  { spanish: 'La prensa', english: 'The press', pronunciation: 'lah PREHN-sah', category: 'media-vocab', audio: 'la-prensa' },
  { spanish: 'El titular', english: 'The headline', pronunciation: 'ehl tee-too-LAHR', category: 'media-vocab', audio: 'el-titular' },
  { spanish: 'La revista', english: 'The magazine', pronunciation: 'lah reh-BEES-tah', category: 'media-vocab', audio: 'la-revista' },
  { spanish: 'El periodista', english: 'The journalist', pronunciation: 'ehl peh-ree-oh-DEES-tah', category: 'media-vocab', audio: 'el-periodista' },
  { spanish: 'La entrevista', english: 'The interview', pronunciation: 'lah ehn-treh-BEES-tah', category: 'media-vocab', audio: 'la-entrevista' },
  { spanish: 'La cadena de televisión', english: 'The TV network', pronunciation: 'lah kah-DEH-nah deh teh-leh-bee-see-OHN', category: 'media-vocab', audio: 'la-cadena-de-television' },

  // === Headlines (8) ===
  { spanish: 'Aumentan los precios de alimentos en todo el país', english: 'Food prices rise across the country', pronunciation: 'ow-MEHN-tahn lohs PREH-see-ohs deh ah-lee-MEHN-tohs', category: 'headlines', audio: 'aumentan-los-precios' },
  { spanish: 'Científicos descubren nueva especie en el Amazonas', english: 'Scientists discover new species in the Amazon', pronunciation: 'see-ehn-TEE-fee-kohs dehs-KOO-brehn NWEH-bah ehs-PEH-see-eh', category: 'headlines', audio: 'cientificos-descubren' },
  { spanish: 'Gobierno anuncia plan de energía renovable', english: 'Government announces renewable energy plan', pronunciation: 'goh-bee-EHR-noh ah-NOON-see-ah plahn deh eh-nehr-HEE-ah', category: 'headlines', audio: 'gobierno-anuncia-plan' },
  { spanish: 'Miles de personas protestan en la capital', english: 'Thousands protest in the capital', pronunciation: 'MEE-lehs deh pehr-SOH-nahs proh-TEHS-tahn', category: 'headlines', audio: 'miles-protestan' },
  { spanish: 'Selección nacional clasifica al mundial', english: 'National team qualifies for the World Cup', pronunciation: 'seh-lehk-see-OHN nah-see-oh-NAHL klah-see-FEE-kah', category: 'headlines', audio: 'seleccion-clasifica' },
  { spanish: 'Terremoto de magnitud seis sacude la costa', english: 'Magnitude 6 earthquake shakes the coast', pronunciation: 'teh-rreh-MOH-toh deh mahg-nee-TOOD seys sah-KOO-deh', category: 'headlines', audio: 'terremoto-sacude' },
  { spanish: 'Presidente firma acuerdo comercial histórico', english: 'President signs historic trade agreement', pronunciation: 'preh-see-DEHN-teh FEER-mah ah-KWEHR-doh', category: 'headlines', audio: 'presidente-firma' },
  { spanish: 'Estudiantes exigen cambios en el sistema educativo', english: 'Students demand changes in the education system', pronunciation: 'ehs-too-dee-AHN-tehs ehk-SEE-hehn KAHM-bee-ohs', category: 'headlines', audio: 'estudiantes-exigen' },

  // === Opinions (10) ===
  { spanish: 'Creo que es una buena noticia', english: 'I think it\'s good news', pronunciation: 'KREH-oh keh ehs OO-nah BWEH-nah noh-TEE-see-ah', category: 'opinions', audio: 'creo-que-es-buena' },
  { spanish: 'En mi opinión, necesitamos más información', english: 'In my opinion, we need more information', pronunciation: 'ehn mee oh-pee-nee-OHN neh-seh-see-TAH-mohs', category: 'opinions', audio: 'en-mi-opinion' },
  { spanish: 'Estoy de acuerdo con el artículo', english: 'I agree with the article', pronunciation: 'ehs-TOY deh ah-KWEHR-doh kohn ehl ahr-TEE-koo-loh', category: 'opinions', audio: 'estoy-de-acuerdo' },
  { spanish: 'No estoy de acuerdo con eso', english: 'I don\'t agree with that', pronunciation: 'noh ehs-TOY deh ah-KWEHR-doh kohn EH-soh', category: 'opinions', audio: 'no-estoy-de-acuerdo' },
  { spanish: 'Me parece que es exagerado', english: 'It seems exaggerated to me', pronunciation: 'meh pah-REH-seh keh ehs ehk-sah-heh-RAH-doh', category: 'opinions', audio: 'me-parece-exagerado' },
  { spanish: 'Es importante que la gente sepa esto', english: 'It\'s important that people know this', pronunciation: 'ehs eem-pohr-TAHN-teh keh lah HEHN-teh SEH-pah', category: 'opinions', audio: 'es-importante-que-sepa' },
  { spanish: 'No me sorprende esta noticia', english: 'This news doesn\'t surprise me', pronunciation: 'noh meh sohr-PREHN-deh EHS-tah noh-TEE-see-ah', category: 'opinions', audio: 'no-me-sorprende' },
  { spanish: 'Pienso que el gobierno debe actuar', english: 'I think the government should act', pronunciation: 'pee-EHN-soh keh ehl goh-bee-EHR-noh DEH-beh ahk-too-AHR', category: 'opinions', audio: 'pienso-que-debe-actuar' },
  { spanish: 'Para mí, eso es un problema serio', english: 'For me, that\'s a serious problem', pronunciation: 'PAH-rah mee EH-soh ehs oon proh-BLEH-mah SEH-ree-oh', category: 'opinions', audio: 'para-mi-problema-serio' },
  { spanish: 'Me preocupa mucho esta situación', english: 'This situation worries me a lot', pronunciation: 'meh preh-oh-KOO-pah MOO-choh EHS-tah see-too-ah-see-OHN', category: 'opinions', audio: 'me-preocupa-situacion' },

  // === Reporting (10) ===
  { spanish: 'Según el periódico, hubo un accidente', english: 'According to the newspaper, there was an accident', pronunciation: 'seh-GOON ehl peh-ree-OH-dee-koh OO-boh', category: 'reporting', audio: 'segun-el-periodico' },
  { spanish: 'Informaron que el presidente viajó ayer', english: 'They reported that the president traveled yesterday', pronunciation: 'een-fohr-MAH-rohn keh ehl preh-see-DEHN-teh', category: 'reporting', audio: 'informaron-que' },
  { spanish: 'Se reportó un terremoto en Chile', english: 'An earthquake was reported in Chile', pronunciation: 'seh reh-pohr-TOH oon teh-rreh-MOH-toh', category: 'reporting', audio: 'se-reporto-terremoto' },
  { spanish: 'Las autoridades confirmaron la noticia', english: 'The authorities confirmed the news', pronunciation: 'lahs ow-toh-ree-DAH-dehs kohn-feer-MAH-rohn', category: 'reporting', audio: 'autoridades-confirmaron' },
  { spanish: 'De acuerdo con fuentes oficiales', english: 'According to official sources', pronunciation: 'deh ah-KWEHR-doh kohn FWEHN-tehs oh-fee-see-AH-lehs', category: 'reporting', audio: 'de-acuerdo-con-fuentes' },
  { spanish: 'El corresponsal dijo que la situación es grave', english: 'The correspondent said the situation is serious', pronunciation: 'ehl koh-rrehs-pohn-SAHL DEE-hoh keh', category: 'reporting', audio: 'el-corresponsal-dijo' },
  { spanish: 'Se espera que mejore la economía', english: 'The economy is expected to improve', pronunciation: 'seh ehs-PEH-rah keh meh-HOH-reh lah eh-koh-noh-MEE-ah', category: 'reporting', audio: 'se-espera-mejore' },
  { spanish: 'Fuentes cercanas indicaron que hay cambios', english: 'Sources close to the matter indicated there are changes', pronunciation: 'FWEHN-tehs sehr-KAH-nahs een-dee-KAH-rohn', category: 'reporting', audio: 'fuentes-indicaron' },
  { spanish: 'El artículo menciona tres puntos clave', english: 'The article mentions three key points', pronunciation: 'ehl ahr-TEE-koo-loh mehn-see-OH-nah trehs POON-tohs KLAH-beh', category: 'reporting', audio: 'articulo-menciona' },
  { spanish: 'La noticia fue publicada esta mañana', english: 'The news was published this morning', pronunciation: 'lah noh-TEE-see-ah fweh poo-blee-KAH-dah EHS-tah mah-NYAH-nah', category: 'reporting', audio: 'noticia-publicada' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L44PhraseByAudio = phraseByAudio

// === HEADLINE READER (unique activity) ===

export interface HeadlineChallenge {
  headline: string
  english: string
  correctTopic: string
  options: string[]
}

export const HEADLINE_CHALLENGES: HeadlineChallenge[] = [
  {
    headline: 'Aumentan los precios de alimentos en todo el país',
    english: 'Food prices rise across the country',
    correctTopic: 'Economy',
    options: ['Economy', 'Sports', 'Science', 'Weather'],
  },
  {
    headline: 'Científicos descubren nueva especie en el Amazonas',
    english: 'Scientists discover new species in the Amazon',
    correctTopic: 'Science',
    options: ['Politics', 'Science', 'Sports', 'Crime'],
  },
  {
    headline: 'Gobierno anuncia plan de energía renovable',
    english: 'Government announces renewable energy plan',
    correctTopic: 'Politics',
    options: ['Sports', 'Culture', 'Politics', 'Weather'],
  },
  {
    headline: 'Miles de personas protestan en la capital',
    english: 'Thousands protest in the capital',
    correctTopic: 'Society',
    options: ['Economy', 'Society', 'Science', 'Sports'],
  },
  {
    headline: 'Selección nacional clasifica al mundial',
    english: 'National team qualifies for the World Cup',
    correctTopic: 'Sports',
    options: ['Politics', 'Economy', 'Sports', 'Culture'],
  },
  {
    headline: 'Terremoto de magnitud seis sacude la costa',
    english: 'Magnitude 6 earthquake shakes the coast',
    correctTopic: 'Natural Disaster',
    options: ['Sports', 'Natural Disaster', 'Politics', 'Economy'],
  },
  {
    headline: 'Presidente firma acuerdo comercial histórico',
    english: 'President signs historic trade agreement',
    correctTopic: 'Politics',
    options: ['Science', 'Sports', 'Politics', 'Culture'],
  },
  {
    headline: 'Estudiantes exigen cambios en el sistema educativo',
    english: 'Students demand changes in the education system',
    correctTopic: 'Education',
    options: ['Education', 'Economy', 'Weather', 'Sports'],
  },
]

// === LESSON DATA ===

export const L44Data: LessonData = {
  id: 'L4.4',
  hero: {
    lessonId: 'L4.4',
    title: 'News & Current Events',
    subtitle: 'Reading headlines and expressing opinions',
    description: 'Learn to read Spanish news, understand headlines, and express your opinions about current events. Master media vocabulary and reporting language to discuss what\'s happening in the world.',
    image: '/images/L4.4/L4.4.jpg',
    gradient: 'from-rose-800/65 via-amber-700/55 to-orange-700/65',
    accentColor: 'rose-200',
  },

  objectives: [
    { icon: '\uD83D\uDCF0', title: 'Media Vocabulary', desc: 'Learn key words: periódico, noticias, reportaje, noticiero, prensa, titular, periodista.' },
    { icon: '\uD83D\uDCF0', title: 'Reading Headlines', desc: 'Understand real-style Spanish headlines and identify their topics quickly.' },
    { icon: '\uD83D\uDCAC', title: 'Expressing Opinions', desc: 'Use creo que, en mi opinión, estoy de acuerdo, me parece to share your views.' },
    { icon: '\uD83D\uDCDD', title: 'Reporting Language', desc: 'Report news using según, informaron, se reportó, fuentes oficiales.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.2', label: 'Subjunctive Mood', detail: 'L4.2 subjunctive triggers (es importante que, espero que) appear naturally in opinion expressions.' },
    { fromLesson: 'L3.3', label: 'Technology Vocabulary', detail: 'Digital media terms from L3.3 connect to online news and social media reporting.' },
    { fromLesson: 'L4.1', label: 'Past Tense Review', detail: 'News reports use preterite (informaron, se reportó) to describe past events.' },
  ],

  sectionTransitions: [
    { afterSection: 'media-vocab', text: 'You know the media vocabulary! Now let\'s read some headlines.' },
    { afterSection: 'headlines', text: 'Headlines mastered! Time to express your opinions.' },
    { afterSection: 'opinions', text: 'Great opinions! Now learn how to report news like a pro.' },
    { afterSection: 'dialogues', text: 'Real news conversations done! Let\'s explore media culture.' },
    { afterSection: 'cultural', text: 'Now test your headline reading skills!' },
    { afterSection: 'headline-reader', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: '¿Leíste las noticias?', english: 'Did you read the news?' },
    { spanish: 'Según el periódico...', english: 'According to the newspaper...' },
    { spanish: 'Creo que...', english: 'I think that...' },
    { spanish: 'En mi opinión...', english: 'In my opinion...' },
    { spanish: 'Estoy de acuerdo', english: 'I agree' },
    { spanish: '¿Qué piensas?', english: 'What do you think?' },
  ],

  pronunciationChallenges: [
    { spanish: 'El periódico publicó un reportaje', pronunciation: 'ehl peh-ree-OH-dee-koh poo-blee-KOH oon reh-pohr-TAH-heh', english: 'The newspaper published a report', audio: 'el-periodico-publico-un-reportaje', tip: '"Periódico" has the stress on -Ó-. The accent mark is essential — without it, the rhythm is wrong.' },
    { spanish: 'Según las noticias de hoy', pronunciation: 'seh-GOON lahs noh-TEE-see-ahs deh oy', english: 'According to today\'s news', audio: 'segun-las-noticias-de-hoy', tip: '"Según" is stressed on the last syllable. It\'s one of the most useful words for reporting what others say.' },
    { spanish: 'En mi opinión, es exagerado', pronunciation: 'ehn mee oh-pee-nee-OHN ehs ehk-sah-heh-RAH-doh', english: 'In my opinion, it\'s exaggerated', audio: 'en-mi-opinion-es-exagerado', tip: '"Opinión" ends in -ÓN with a clear stress. "Exagerado" — the J sound in Spanish is soft, like an H in English.' },
    { spanish: 'Informaron que hubo un terremoto', pronunciation: 'een-fohr-MAH-rohn keh OO-boh oon teh-rreh-MOH-toh', english: 'They reported there was an earthquake', audio: 'informaron-que-hubo-un-terremoto', tip: '"Terremoto" has a rolled RR in the middle. Practice: te-RRE-mo-to. "Hubo" = there was (irregular past of haber).' },
    { spanish: 'El titular dice que el presidente viajó', pronunciation: 'ehl tee-too-LAHR DEE-seh keh ehl preh-see-DEHN-teh bee-ah-HOH', english: 'The headline says the president traveled', audio: 'el-titular-dice-que-el-presidente-viajo', tip: '"Titular" is stressed on the last syllable. In headlines, verbs often appear in present tense even for past events!' },
    { spanish: 'Las autoridades confirmaron la noticia', pronunciation: 'lahs ow-toh-ree-DAH-dehs kohn-feer-MAH-rohn lah noh-TEE-see-ah', english: 'The authorities confirmed the news', audio: 'las-autoridades-confirmaron-la-noticia', tip: '"Autoridades" — note the stress on -DA-. "Confirmaron" is preterite third-person plural from L4.1.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'media-vocab', label: 'Media Vocabulary' },
    { id: 'headlines', label: 'Headlines' },
    { id: 'opinions', label: 'Expressing Opinions' },
    { id: 'reporting', label: 'Reporting Language' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Topic Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'headline-reader', label: 'Headline Reader' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'media-vocab',
      title: 'Media Vocabulary',
      description: 'Essential words for talking about news, media, and journalism in Spanish.',
      tabs: [
        { label: 'Print & TV', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'media-vocab').slice(0, 5) },
        { label: 'People & Formats', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'media-vocab').slice(5) },
      ],
    },
    {
      id: 'headlines',
      title: 'Reading Headlines',
      description: 'Real-style Spanish headlines. Notice how headlines drop articles and use present tense for recent events.',
      tabs: [
        { label: 'Economy & Science', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'headlines').slice(0, 4) },
        { label: 'Politics & Society', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'headlines').slice(4) },
      ],
    },
    {
      id: 'opinions',
      title: 'Expressing Opinions',
      description: 'Share your views on the news using these key expressions.',
      tabs: [
        { label: 'Agree & Believe', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'opinions').slice(0, 5) },
        { label: 'Disagree & Worry', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'opinions').slice(5) },
      ],
    },
    {
      id: 'reporting',
      title: 'Reporting Language',
      description: 'How to cite sources and report what others said, just like a real journalist.',
      tabs: [
        { label: 'Citing Sources', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'reporting').slice(0, 5) },
        { label: 'Reporting Events', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'reporting').slice(5) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Headline Spanish — Present Tense for Past Events',
      content: 'Spanish headlines often use the present tense to describe recent events, just like English. "Gobierno anuncia plan" (Government announces plan) even though it already happened. This is called the "historical present." When reading headlines aloud, use a neutral, declarative tone.',
      example: 'Presidente firma acuerdo (signs = signed) | Científicos descubren (discover = discovered)',
    },
    {
      title: '"Según" and Reporting Structures',
      content: '"Según" (according to) is your Swiss Army knife for reporting. It\'s followed directly by the source: según el periódico, según las autoridades, según fuentes oficiales. No preposition needed! For indirect speech, use "que": "Informaron que..." (They reported that...).',
      example: 'Según el presidente... | Informaron que hubo... | Se reportó que...',
      reviewFrom: 'L4.1',
    },
    {
      title: 'Opinion Expressions with Subjunctive',
      content: 'Remember from L4.2: negative opinions trigger the subjunctive! "Creo que ES verdad" (indicative — I believe it). But "No creo que SEA verdad" (subjunctive — I don\'t believe it). Positive certainty = indicative. Doubt or denial = subjunctive.',
      example: 'Creo que es bueno (indicative) | No creo que sea bueno (subjunctive)',
      reviewFrom: 'L4.2',
    },
    {
      title: 'Media Vocabulary — Gender Matters',
      content: '"El periodista" (male journalist) vs. "la periodista" (female journalist) — same word, different article! "Las noticias" is always plural in Spanish (you can\'t say "una noticia" for "the news" — well, you can, but it means "a piece of news"). "El noticiero" = the newscast, always masculine.',
      example: 'El/La periodista | Las noticias (always plural) | El noticiero | La prensa',
    },
  ],

  flashcardGroups: [
    {
      key: 'media-vocab',
      label: 'Media Vocabulary',
      audioKeys: ['el-periodico', 'las-noticias', 'el-reportaje', 'el-noticiero', 'la-prensa', 'el-titular', 'la-revista', 'el-periodista', 'la-entrevista', 'la-cadena-de-television'],
    },
    {
      key: 'headlines',
      label: 'Headlines',
      audioKeys: ['aumentan-los-precios', 'cientificos-descubren', 'gobierno-anuncia-plan', 'miles-protestan', 'seleccion-clasifica', 'terremoto-sacude', 'presidente-firma', 'estudiantes-exigen'],
    },
    {
      key: 'opinions-reporting',
      label: 'Opinions & Reporting',
      audioKeys: ['creo-que-es-buena', 'en-mi-opinion', 'estoy-de-acuerdo', 'no-estoy-de-acuerdo', 'segun-el-periodico', 'informaron-que', 'se-reporto-terremoto', 'autoridades-confirmaron'],
    },
  ],

  matchPairs: [
    { left: 'El periódico', right: 'The newspaper' },
    { left: 'El titular', right: 'The headline' },
    { left: 'El periodista', right: 'The journalist' },
    { left: 'Creo que', right: 'I think that' },
    { left: 'Según', right: 'According to' },
    { left: 'Informaron', right: 'They reported' },
    { left: 'Se reportó', right: 'It was reported' },
    { left: 'Estoy de acuerdo', right: 'I agree' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Fact vs. Opinion',
      instruction: 'Is this a fact or an opinion?',
      buckets: ['Fact', 'Opinion'],
      items: [
        { text: 'Se reportó un terremoto', bucket: 'Fact' },
        { text: 'Las autoridades confirmaron', bucket: 'Fact' },
        { text: 'Informaron que el presidente viajó', bucket: 'Fact' },
        { text: 'La noticia fue publicada hoy', bucket: 'Fact' },
        { text: 'Creo que es exagerado', bucket: 'Opinion' },
        { text: 'En mi opinión, es un problema', bucket: 'Opinion' },
        { text: 'Me parece que es bueno', bucket: 'Opinion' },
        { text: 'No estoy de acuerdo', bucket: 'Opinion' },
      ],
    },
    {
      title: 'News Topic',
      instruction: 'What section of the newspaper does this headline belong to?',
      buckets: ['Politics', 'Science & Environment'],
      items: [
        { text: 'Presidente firma acuerdo', bucket: 'Politics' },
        { text: 'Gobierno anuncia plan', bucket: 'Politics' },
        { text: 'Miles protestan en la capital', bucket: 'Politics' },
        { text: 'Estudiantes exigen cambios', bucket: 'Politics' },
        { text: 'Científicos descubren especie', bucket: 'Science & Environment' },
        { text: 'Terremoto sacude la costa', bucket: 'Science & Environment' },
        { text: 'Plan de energía renovable', bucket: 'Science & Environment' },
        { text: 'Nueva especie en el Amazonas', bucket: 'Science & Environment' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Topic Sorting',

  dialogues: [
    {
      id: 'dialogue-breakfast-news',
      title: 'Morning News at Breakfast — Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Sofía', text: '¿Ya leíste las noticias de hoy? ¡Hay un titular increíble!', audio: '/audio/L4.4/phrases/d1-line1.mp3' },
        { speaker: 'Miguel', text: 'No, todavía no. ¿Qué pasó?', audio: '/audio/L4.4/phrases/d1-line2.mp3' },
        { speaker: 'Sofía', text: 'Según el periódico, descubrieron una nueva especie de rana en Chiapas.', audio: '/audio/L4.4/phrases/d1-line3.mp3', annotations: [{ phrase: 'Según el periódico', fromLesson: 'L4.4', note: 'Reporting language — citing a source' }] },
        { speaker: 'Miguel', text: '¿En serio? Creo que eso es muy importante para la biodiversidad.', audio: '/audio/L4.4/phrases/d1-line4.mp3' },
        { speaker: 'Sofía', text: 'Estoy de acuerdo. También informaron que aumentaron los precios de la gasolina.', audio: '/audio/L4.4/phrases/d1-line5.mp3', annotations: [{ phrase: 'aumentaron', fromLesson: 'L4.1', note: 'Preterite tense from L4.1' }] },
        { speaker: 'Miguel', text: '¡Otra vez! En mi opinión, el gobierno debe hacer algo.', audio: '/audio/L4.4/phrases/d1-line6.mp3' },
        { speaker: 'Sofía', text: 'Pienso lo mismo. ¿Viste el noticiero anoche?', audio: '/audio/L4.4/phrases/d1-line7.mp3' },
        { speaker: 'Miguel', text: 'Sí, el reportaje sobre la educación fue muy interesante.', audio: '/audio/L4.4/phrases/d1-line8.mp3' },
        { speaker: 'Sofía', text: 'Me preocupa mucho esa situación. Es importante que la gente sepa.', audio: '/audio/L4.4/phrases/d1-line9.mp3', annotations: [{ phrase: 'Es importante que...sepa', fromLesson: 'L4.2', note: 'Subjunctive trigger from L4.2' }] },
      ],
    },
    {
      id: 'dialogue-debate',
      title: 'Debating an Issue — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Valentina', text: '¿Leíste el artículo sobre el acuerdo comercial?', audio: '/audio/L4.4/phrases/d2-line1.mp3' },
        { speaker: 'Andrés', text: 'Sí, lo leí en la revista. Me parece que es positivo para la economía.', audio: '/audio/L4.4/phrases/d2-line2.mp3' },
        { speaker: 'Valentina', text: 'No estoy de acuerdo. Creo que va a afectar a las pequeñas empresas.', audio: '/audio/L4.4/phrases/d2-line3.mp3' },
        { speaker: 'Andrés', text: 'Según fuentes oficiales, va a crear más empleos.', audio: '/audio/L4.4/phrases/d2-line4.mp3' },
        { speaker: 'Valentina', text: 'Pero el corresponsal del periódico dijo que hay riesgos.', audio: '/audio/L4.4/phrases/d2-line5.mp3' },
        { speaker: 'Andrés', text: 'Es verdad. Para mí, necesitamos más información antes de opinar.', audio: '/audio/L4.4/phrases/d2-line6.mp3' },
        { speaker: 'Valentina', text: 'En eso sí estoy de acuerdo. Es mejor esperar el reportaje completo.', audio: '/audio/L4.4/phrases/d2-line7.mp3' },
        { speaker: 'Andrés', text: 'Exacto. No creo que sea bueno sacar conclusiones rápidas.', audio: '/audio/L4.4/phrases/d2-line8.mp3', annotations: [{ phrase: 'No creo que sea', fromLesson: 'L4.2', note: 'Negative belief triggers subjunctive' }] },
      ],
    },
  ],
  dialogueDescription: 'Discuss the morning news over breakfast in Mexico City and debate a trade agreement in Buenos Aires.',

  culturalNotes: [
    {
      title: 'Latin American Media Landscape',
      content: 'Latin America has a vibrant media ecosystem. Major newspapers like El Universal (Mexico), El Tiempo (Colombia), and Clarín (Argentina) are widely read. TV news is hugely popular — channels like Televisa, TV Azteca, and Telemundo reach millions. In recent years, digital media has exploded, with news sites and social media becoming the primary source of information for younger generations.',
    },
    {
      title: 'Telenovelas as News & Social Commentary',
      content: 'Telenovelas are more than entertainment — they often address real social issues like inequality, corruption, immigration, and education. In many Latin American countries, telenovelas have sparked national conversations and even influenced public policy. When people say "parece telenovela" (it seems like a soap opera), they mean a situation is dramatic and hard to believe — a phrase you\'ll hear when discussing shocking news!',
    },
    {
      title: 'Social Media as a News Source',
      content: 'In Latin America, social media platforms (especially WhatsApp, Twitter/X, and Instagram) have become primary news sources. During major events, hashtags trend instantly and citizen journalism fills gaps left by traditional media. However, this has also led to challenges with misinformation. The phrase "lo vi en las redes" (I saw it on social media) is now as common as "lo vi en el periódico" — and often prompts the response "¿pero es de una fuente confiable?" (but is it from a reliable source?).',
    },
  ],
  culturalGradient: 'from-rose-50 to-amber-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El periódico" means:', options: ['The magazine', 'The newspaper', 'The TV show', 'The radio'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "_____ el periódico, hubo un accidente" (According to)', answer: 'Según' },
    { id: 3, type: 'mc', text: '"El titular" refers to:', options: ['The journalist', 'The editor', 'The headline', 'The reader'], answer: 2 },
    { id: 4, type: 'tf', text: 'Spanish headlines often use present tense to describe recent past events.', answer: true },
    { id: 5, type: 'mc', text: '"Estoy de acuerdo" means:', options: ['I disagree', 'I don\'t know', 'I agree', 'I doubt it'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "En mi _____, necesitamos más información" (opinion)', answer: 'opinión' },
    { id: 7, type: 'mc', text: '"Informaron que el presidente viajó" — who traveled?', options: ['The reporters', 'The president', 'The journalists', 'The authorities'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what was discovered in Chiapas?', options: ['A new plant', 'A new frog species', 'Ancient ruins', 'A river'], answer: 1 },
    { id: 9, type: 'tf', text: '"Las noticias" is always plural in Spanish when referring to "the news."', answer: true },
    { id: 10, type: 'mc', text: '"Se reportó un terremoto" uses which structure?', options: ['Active voice', 'Passive se', 'Subjunctive', 'Imperative'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "No _____ de acuerdo con eso" (I am not)', answer: 'estoy' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does Andrés think about the trade agreement?', options: ['It\'s terrible', 'It\'s positive for the economy', 'It doesn\'t matter', 'It\'s illegal'], answer: 1 },
    { id: 13, type: 'mc', text: '"El corresponsal" is:', options: ['The editor', 'The anchor', 'The correspondent', 'The cameraman'], answer: 2 },
    { id: 14, type: 'tf', text: 'In Latin America, WhatsApp is commonly used as a news source.', answer: true },
    { id: 15, type: 'mc', text: '"Creo que es verdad" uses indicative because:', options: ['It\'s a question', 'It expresses certainty', 'It\'s a command', 'It\'s negative'], answer: 1 },
  ],

  audioBase: '/audio/L4.4/phrases',

  uniqueActivity: {
    id: 'HeadlineReaderL44',
    sectionId: 'headline-reader',
    sectionColor: 'bg-rose-50/40',
    sectionBorder: 'border-rose-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'media-vocab': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    headlines: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    opinions: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    reporting: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    dialogues: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    cultural: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'headline-reader': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
