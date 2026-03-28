import type { LessonData } from '@/lib/types/lesson'

// === PHRASES: ~50 items across 5 categories ===

const PHRASES = [
  // === Weather (12) ===
  { spanish: 'Hace calor', english: 'It is hot', pronunciation: 'AH-seh kah-LOHR', category: 'weather', audio: 'hace-calor' },
  { spanish: 'Hace fr\u00edo', english: 'It is cold', pronunciation: 'AH-seh FREE-oh', category: 'weather', audio: 'hace-frio' },
  { spanish: 'Hace sol', english: 'It is sunny', pronunciation: 'AH-seh sohl', category: 'weather', audio: 'hace-sol' },
  { spanish: 'Hace viento', english: 'It is windy', pronunciation: 'AH-seh bee-EHN-toh', category: 'weather', audio: 'hace-viento' },
  { spanish: 'Hace buen tiempo', english: 'The weather is nice', pronunciation: 'AH-seh bwehn tee-EHM-poh', category: 'weather', audio: 'hace-buen-tiempo' },
  { spanish: 'Hace mal tiempo', english: 'The weather is bad', pronunciation: 'AH-seh mahl tee-EHM-poh', category: 'weather', audio: 'hace-mal-tiempo' },
  { spanish: 'Llueve', english: 'It is raining', pronunciation: 'YOO-eh-beh', category: 'weather', audio: 'llueve' },
  { spanish: 'Nieva', english: 'It is snowing', pronunciation: 'nee-EH-bah', category: 'weather', audio: 'nieva' },
  { spanish: 'Est\u00e1 nublado', english: 'It is cloudy', pronunciation: 'ehs-TAH noo-BLAH-doh', category: 'weather', audio: 'esta-nublado' },
  { spanish: 'Hay tormenta', english: 'There is a storm', pronunciation: 'eye tohr-MEHN-tah', category: 'weather', audio: 'hay-tormenta' },
  { spanish: 'El cielo', english: 'The sky', pronunciation: 'ehl see-EH-loh', category: 'weather', audio: 'el-cielo' },
  { spanish: 'La temperatura', english: 'The temperature', pronunciation: 'lah tehm-peh-rah-TOO-rah', category: 'weather', audio: 'la-temperatura' },

  // === Seasons (4) ===
  { spanish: 'La primavera', english: 'Spring', pronunciation: 'lah pree-mah-BEH-rah', category: 'seasons', audio: 'la-primavera' },
  { spanish: 'El verano', english: 'Summer', pronunciation: 'ehl beh-RAH-noh', category: 'seasons', audio: 'el-verano' },
  { spanish: 'El oto\u00f1o', english: 'Fall / Autumn', pronunciation: 'ehl oh-TOH-nyoh', category: 'seasons', audio: 'el-otono' },
  { spanish: 'El invierno', english: 'Winter', pronunciation: 'ehl een-bee-EHR-noh', category: 'seasons', audio: 'el-invierno' },

  // === Clothing (8) ===
  { spanish: 'El abrigo', english: 'The coat', pronunciation: 'ehl ah-BREE-goh', category: 'clothing', audio: 'el-abrigo' },
  { spanish: 'La chaqueta', english: 'The jacket', pronunciation: 'lah chah-KEH-tah', category: 'clothing', audio: 'la-chaqueta' },
  { spanish: 'El paraguas', english: 'The umbrella', pronunciation: 'ehl pah-RAH-gwahs', category: 'clothing', audio: 'el-paraguas' },
  { spanish: 'Las gafas de sol', english: 'The sunglasses', pronunciation: 'lahs GAH-fahs deh sohl', category: 'clothing', audio: 'las-gafas-de-sol' },
  { spanish: 'La bufanda', english: 'The scarf', pronunciation: 'lah boo-FAHN-dah', category: 'clothing', audio: 'la-bufanda' },
  { spanish: 'Los guantes', english: 'The gloves', pronunciation: 'lohs GWAHN-tehs', category: 'clothing', audio: 'los-guantes' },
  { spanish: 'El sombrero', english: 'The hat', pronunciation: 'ehl sohm-BREH-roh', category: 'clothing', audio: 'el-sombrero' },
  { spanish: 'Las botas', english: 'The boots', pronunciation: 'lahs BOH-tahs', category: 'clothing', audio: 'las-botas' },

  // === Conversation Phrases (8) ===
  { spanish: '\u00bfQu\u00e9 tiempo hace?', english: 'What is the weather like?', pronunciation: 'keh tee-EHM-poh AH-seh', category: 'phrases', audio: 'que-tiempo-hace' },
  { spanish: '\u00bfQu\u00e9 tiempo hace hoy?', english: 'What is the weather like today?', pronunciation: 'keh tee-EHM-poh AH-seh oy', category: 'phrases', audio: 'que-tiempo-hace-hoy' },
  { spanish: 'Hoy hace mucho calor', english: 'Today it is very hot', pronunciation: 'oy AH-seh MOO-choh kah-LOHR', category: 'phrases', audio: 'hoy-hace-mucho-calor' },
  { spanish: 'Ma\u00f1ana va a llover', english: 'Tomorrow it is going to rain', pronunciation: 'mah-NYAH-nah bah ah yoh-BEHR', category: 'phrases', audio: 'manana-va-a-llover' },
  { spanish: 'Necesito un paraguas', english: 'I need an umbrella', pronunciation: 'neh-seh-SEE-toh oon pah-RAH-gwahs', category: 'phrases', audio: 'necesito-un-paraguas' },
  { spanish: '\u00bfEn qu\u00e9 mes estamos?', english: 'What month are we in?', pronunciation: 'ehn keh mehs ehs-TAH-mohs', category: 'phrases', audio: 'en-que-mes-estamos' },
  { spanish: 'Me gusta el verano', english: 'I like summer', pronunciation: 'meh GOOS-tah ehl beh-RAH-noh', category: 'phrases', audio: 'me-gusta-el-verano' },
  { spanish: 'Prefiero el oto\u00f1o', english: 'I prefer fall', pronunciation: 'preh-fee-EH-roh ehl oh-TOH-nyoh', category: 'phrases', audio: 'prefiero-el-otono' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })

export const L22PhraseByAudio = phraseByAudio

// === WEATHER FORECAST SCENARIOS (unique activity data) ===

export interface ForecastScenario {
  city: string
  country: string
  description: string
  english: string
  correctWeather: string
  correctSeason: string
  weatherOptions: string[]
  seasonOptions: string[]
}

export const WEATHER_FORECAST_SCENARIOS: ForecastScenario[] = [
  {
    city: 'Canc\u00fan', country: 'M\u00e9xico',
    description: 'Hace mucho calor y hace sol. La temperatura es de treinta y cinco grados.',
    english: 'It is very hot and sunny. The temperature is 35 degrees.',
    correctWeather: 'Hace calor', correctSeason: 'El verano',
    weatherOptions: ['Hace calor', 'Hace fr\u00edo', 'Llueve', 'Nieva'],
    seasonOptions: ['El verano', 'El invierno', 'La primavera', 'El oto\u00f1o'],
  },
  {
    city: 'Bogot\u00e1', country: 'Colombia',
    description: 'Est\u00e1 nublado y llueve. Necesito un paraguas.',
    english: 'It is cloudy and raining. I need an umbrella.',
    correctWeather: 'Llueve', correctSeason: 'El oto\u00f1o',
    weatherOptions: ['Llueve', 'Hace sol', 'Nieva', 'Hace viento'],
    seasonOptions: ['El oto\u00f1o', 'El verano', 'El invierno', 'La primavera'],
  },
  {
    city: 'Buenos Aires', country: 'Argentina',
    description: 'Hace fr\u00edo y hace viento. Necesito un abrigo y una bufanda.',
    english: 'It is cold and windy. I need a coat and a scarf.',
    correctWeather: 'Hace fr\u00edo', correctSeason: 'El invierno',
    weatherOptions: ['Hace fr\u00edo', 'Hace calor', 'Hace sol', 'Llueve'],
    seasonOptions: ['El invierno', 'El verano', 'La primavera', 'El oto\u00f1o'],
  },
  {
    city: 'Madrid', country: 'Espa\u00f1a',
    description: 'Hace buen tiempo y hace sol. Las flores son bonitas.',
    english: 'The weather is nice and sunny. The flowers are beautiful.',
    correctWeather: 'Hace sol', correctSeason: 'La primavera',
    weatherOptions: ['Hace sol', 'Nieva', 'Llueve', 'Hay tormenta'],
    seasonOptions: ['La primavera', 'El invierno', 'El oto\u00f1o', 'El verano'],
  },
  {
    city: 'Santiago', country: 'Chile',
    description: 'Nieva en las monta\u00f1as. Hace mucho fr\u00edo.',
    english: 'It is snowing in the mountains. It is very cold.',
    correctWeather: 'Nieva', correctSeason: 'El invierno',
    weatherOptions: ['Nieva', 'Llueve', 'Hace calor', 'Hace viento'],
    seasonOptions: ['El invierno', 'El verano', 'La primavera', 'El oto\u00f1o'],
  },
  {
    city: 'La Habana', country: 'Cuba',
    description: 'Hay tormenta. Hace mucho viento y llueve.',
    english: 'There is a storm. It is very windy and raining.',
    correctWeather: 'Hay tormenta', correctSeason: 'El verano',
    weatherOptions: ['Hay tormenta', 'Hace sol', 'Nieva', 'Hace buen tiempo'],
    seasonOptions: ['El verano', 'El invierno', 'El oto\u00f1o', 'La primavera'],
  },
  {
    city: 'Ciudad de M\u00e9xico', country: 'M\u00e9xico',
    description: 'Hace viento y est\u00e1 nublado. La temperatura es fresca.',
    english: 'It is windy and cloudy. The temperature is cool.',
    correctWeather: 'Hace viento', correctSeason: 'El oto\u00f1o',
    weatherOptions: ['Hace viento', 'Hace calor', 'Nieva', 'Hace sol'],
    seasonOptions: ['El oto\u00f1o', 'El verano', 'La primavera', 'El invierno'],
  },
  {
    city: 'Lima', country: 'Per\u00fa',
    description: 'Est\u00e1 nublado pero no llueve. Hace buen tiempo.',
    english: 'It is cloudy but not raining. The weather is nice.',
    correctWeather: 'Est\u00e1 nublado', correctSeason: 'La primavera',
    weatherOptions: ['Est\u00e1 nublado', 'Nieva', 'Hay tormenta', 'Hace fr\u00edo'],
    seasonOptions: ['La primavera', 'El invierno', 'El verano', 'El oto\u00f1o'],
  },
]

// === LESSON DATA ===

export const L22Data: LessonData = {
  id: 'L2.2',
  hero: {
    lessonId: 'L2.2',
    title: 'Weather & Seasons',
    subtitle: 'Climate, months & what to wear',
    description: 'Learn to talk about the weather, name the months and seasons, and choose the right clothing. Master the "hacer" weather construction and expand your conversation skills.',
    image: '/images/L2.2/L2.2.jpg',
    gradient: 'from-sky-800/65 via-blue-700/55 to-cyan-700/65',
    accentColor: 'sky-200',
  },

  objectives: [
    { icon: '\u2600\ufe0f', title: 'Describe the Weather', desc: 'Use "hace," "est\u00e1," and "hay" to talk about weather conditions.' },
    { icon: '\ud83c\udf43', title: 'Name Seasons & Months', desc: 'Say all 4 seasons and 12 months in Spanish with correct pronunciation.' },
    { icon: '\ud83e\udde5', title: 'Weather & Clothing', desc: 'Match clothing vocabulary to weather conditions.' },
    { icon: '\ud83d\udcac', title: 'Weather Conversations', desc: 'Ask about the weather and express preferences about seasons.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.3', label: 'Numbers, Time & Calendar', detail: 'Temperatures use numbers: "treinta y cinco grados." Months (enero\u2013diciembre) and days help with forecasts.' },
    { fromLesson: 'L1.5', label: 'Getting Around', detail: '"Estar" for location now extends to weather: "est\u00e1 nublado" (it is cloudy).' },
    { fromLesson: 'L1.8', label: 'Daily Routines', detail: '"Me gusta" returns for preferences: "Me gusta el verano" (I like summer).' },
  ],

  sectionTransitions: [
    { afterSection: 'weather', text: 'You can describe the weather \u2014 now let\u2019s learn when these conditions happen.' },
    { afterSection: 'seasons', text: 'You know the seasons \u2014 now let\u2019s learn what to wear.' },
    { afterSection: 'clothing', text: 'You\u2019re dressed for the weather! Let\u2019s put it all together in conversations.' },
    { afterSection: 'dialogues', text: 'Great listening! Let\u2019s explore how weather shapes culture across Latin America.' },
    { afterSection: 'cultural', text: 'Time to become a weather forecaster! Read the forecast and identify the weather.' },
    { afterSection: 'weather-forecast', text: 'Final stretch \u2014 let\u2019s test everything you\u2019ve learned!' },
  ],

  personalizedVocab: [
    { spanish: 'Hace calor', english: 'It is hot' },
    { spanish: 'Llueve', english: 'It is raining' },
    { spanish: 'El paraguas', english: 'The umbrella' },
    { spanish: '\u00bfQu\u00e9 tiempo hace?', english: 'What is the weather like?' },
    { spanish: 'El verano', english: 'Summer' },
    { spanish: 'El abrigo', english: 'The coat' },
  ],

  pronunciationChallenges: [
    { spanish: 'Hace mucho calor hoy', pronunciation: 'AH-seh MOO-choh kah-LOHR oy', english: 'It is very hot today', audio: 'hoy-hace-mucho-calor', tip: '"Hace" starts with a silent H. It sounds like AH-seh, not HAH-seh.' },
    { spanish: 'Llueve mucho en abril', pronunciation: 'YOO-eh-beh MOO-choh ehn ah-BREEL', english: 'It rains a lot in April', audio: 'llueve', tip: 'LL = "y" sound in most Latin America. YOOH-eh-beh, not LYOOH-eh-beh.' },
    { spanish: 'El oto\u00f1o es bonito', pronunciation: 'ehl oh-TOH-nyoh ehs boh-NEE-toh', english: 'Fall is beautiful', audio: 'el-otono', tip: 'The \u00d1 in "oto\u00f1o" makes the "ny" sound from L1.1: oh-TOH-nyoh.' },
    { spanish: 'Necesito un paraguas', pronunciation: 'neh-seh-SEE-toh oon pah-RAH-gwahs', english: 'I need an umbrella', audio: 'necesito-un-paraguas', tip: 'The GUA in "paraguas" is a diphthong: GWAHS, not GOO-ahs.' },
    { spanish: 'Ma\u00f1ana va a llover', pronunciation: 'mah-NYAH-nah bah ah yoh-BEHR', english: 'Tomorrow it is going to rain', audio: 'manana-va-a-llover', tip: '"Ir + a + infinitivo" is how you say what is going to happen. This is your first future expression!' },
    { spanish: '\u00bfEn qu\u00e9 mes estamos?', pronunciation: 'ehn keh mehs ehs-TAH-mohs', english: 'What month are we in?', audio: 'en-que-mes-estamos', tip: '"Estamos" uses the nosotros form of estar. It means "we are (in)."' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'weather', label: 'Weather' },
    { id: 'seasons', label: 'Seasons' },
    { id: 'clothing', label: 'Clothing' },
    { id: 'phrases', label: 'Conversations' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'weather-sorting', label: 'Weather Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'weather-forecast', label: 'Weather Forecast' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'weather',
      title: 'Talking About the Weather',
      description: 'Spanish uses three constructions for weather: "hace" (it makes), "est\u00e1" (it is), and "hay" (there is). Click to hear each one.',
      tabs: [
        { label: 'Hace + weather', color: 'amber', phrases: PHRASES.filter(p => p.category === 'weather').slice(0, 6) },
        { label: 'Other weather', color: 'blue', phrases: PHRASES.filter(p => p.category === 'weather').slice(6) },
      ],
    },
    {
      id: 'seasons',
      title: 'The Four Seasons',
      description: 'Remember: seasons are reversed in the Southern Hemisphere! When it\u2019s summer in the US, it\u2019s winter in Argentina.',
      tabs: [
        { label: 'Seasons', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'seasons') },
      ],
    },
    {
      id: 'clothing',
      title: 'Dressing for the Weather',
      description: 'What do you wear when it\u2019s cold? Hot? Rainy? Learn the essential clothing vocabulary.',
      tabs: [
        { label: 'Cold Weather', color: 'purple', phrases: PHRASES.filter(p => p.category === 'clothing').slice(0, 4) },
        { label: 'Warm & Rainy', color: 'orange', phrases: PHRASES.filter(p => p.category === 'clothing').slice(4) },
      ],
    },
    {
      id: 'phrases',
      title: 'Weather Conversations',
      description: 'Put it all together \u2014 ask about the weather, describe today\u2019s conditions, and express your preferences.',
      tabs: [
        { label: 'Questions & Descriptions', color: 'amber', phrases: PHRASES.filter(p => p.category === 'phrases').slice(0, 4), columns: 2 },
        { label: 'Needs & Preferences', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'phrases').slice(4), columns: 2 },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: '"Hace" \u2014 Silent H, Again!',
      content: 'The most common weather construction uses "hacer" (to make/do). "Hace calor" literally means "it makes heat." Remember: H is ALWAYS silent in Spanish \u2014 it\u2019s AH-seh, not HAH-seh.',
      example: 'Hace calor = AH-seh kah-LOHR | Hace fr\u00edo = AH-seh FREE-oh',
      reviewFrom: 'L1.1',
    },
    {
      title: '"Llueve" \u2014 The LL Sound',
      content: 'LL sounds like "y" in most of Latin America and like "sh" in Argentina. "Llueve" (it rains) = YOO-eh-beh. "Llover" (to rain) is an irregular verb \u2014 just memorize "llueve."',
      example: 'Llueve = YOO-eh-beh | Llover = yoh-BEHR',
      reviewFrom: 'L1.1',
    },
    {
      title: '"Ir + a + infinitivo" \u2014 Your First Future',
      content: 'To say what is GOING TO happen, use "ir + a + infinitivo": "Va a llover" (It is going to rain). This is the easiest way to talk about the future at A1 level.',
      example: 'Va a llover = It\u2019s going to rain | Voy a necesitar = I\u2019m going to need',
      reviewFrom: 'L1.5',
    },
  ],

  flashcardGroups: [
    {
      key: 'weather',
      label: 'Weather',
      audioKeys: ['hace-calor', 'hace-frio', 'hace-sol', 'hace-viento', 'hace-buen-tiempo', 'hace-mal-tiempo', 'llueve', 'nieva', 'esta-nublado', 'hay-tormenta', 'el-cielo', 'la-temperatura'],
    },
    {
      key: 'seasons',
      label: 'Seasons',
      audioKeys: ['la-primavera', 'el-verano', 'el-otono', 'el-invierno'],
    },
    {
      key: 'clothing-phrases',
      label: 'Clothing & Phrases',
      audioKeys: ['el-abrigo', 'la-chaqueta', 'el-paraguas', 'las-gafas-de-sol', 'la-bufanda', 'los-guantes', 'el-sombrero', 'las-botas', 'que-tiempo-hace', 'hoy-hace-mucho-calor', 'necesito-un-paraguas', 'me-gusta-el-verano'],
    },
  ],

  matchPairs: [
    { left: 'Hace calor', right: 'It is hot' },
    { left: 'Llueve', right: 'It is raining' },
    { left: 'El invierno', right: 'Winter' },
    { left: 'La primavera', right: 'Spring' },
    { left: 'El paraguas', right: 'Umbrella' },
    { left: 'El abrigo', right: 'Coat' },
    { left: 'Hace viento', right: 'It is windy' },
    { left: '\u00bfQu\u00e9 tiempo hace?', right: 'What is the weather?' },
  ],
  matchLabels: { left: 'Espa\u00f1ol', right: 'English' },

  sortActivities: [
    {
      title: 'Hot Weather vs. Cold Weather',
      instruction: 'Sort each item by the weather it belongs to.',
      buckets: ['Hot Weather', 'Cold Weather'],
      items: [
        { text: 'Hace calor', bucket: 'Hot Weather' },
        { text: 'Hace sol', bucket: 'Hot Weather' },
        { text: 'Gafas de sol', bucket: 'Hot Weather' },
        { text: 'El verano', bucket: 'Hot Weather' },
        { text: 'Sombrero', bucket: 'Hot Weather' },
        { text: 'Hace fr\u00edo', bucket: 'Cold Weather' },
        { text: 'Nieva', bucket: 'Cold Weather' },
        { text: 'Abrigo', bucket: 'Cold Weather' },
        { text: 'El invierno', bucket: 'Cold Weather' },
        { text: 'Guantes', bucket: 'Cold Weather' },
      ],
    },
    {
      title: 'Hace vs. Est\u00e1 vs. Hay',
      instruction: 'Which construction does each weather expression use?',
      buckets: ['Hace...', 'Est\u00e1...', 'Hay...'],
      items: [
        { text: '...calor', bucket: 'Hace...' },
        { text: '...fr\u00edo', bucket: 'Hace...' },
        { text: '...sol', bucket: 'Hace...' },
        { text: '...viento', bucket: 'Hace...' },
        { text: '...buen tiempo', bucket: 'Hace...' },
        { text: '...nublado', bucket: 'Est\u00e1...' },
        { text: '...despejado', bucket: 'Est\u00e1...' },
        { text: '...tormenta', bucket: 'Hay...' },
        { text: '...niebla', bucket: 'Hay...' },
        { text: '...lluvia', bucket: 'Hay...' },
      ],
    },
    {
      title: 'What Do You Need?',
      instruction: 'What clothing or item do you need for each weather condition?',
      buckets: ['Hace calor / Hace sol', 'Hace fr\u00edo / Nieva', 'Llueve'],
      items: [
        { text: 'Gafas de sol', bucket: 'Hace calor / Hace sol' },
        { text: 'Sombrero', bucket: 'Hace calor / Hace sol' },
        { text: 'Abrigo', bucket: 'Hace fr\u00edo / Nieva' },
        { text: 'Bufanda', bucket: 'Hace fr\u00edo / Nieva' },
        { text: 'Guantes', bucket: 'Hace fr\u00edo / Nieva' },
        { text: 'Botas', bucket: 'Hace fr\u00edo / Nieva' },
        { text: 'Paraguas', bucket: 'Llueve' },
        { text: 'Chaqueta', bucket: 'Llueve' },
      ],
    },
  ],
  sortSectionId: 'weather-sorting',
  sortTitle: 'Weather Sorting',

  dialogues: [
    {
      id: 'dialogue-weather',
      title: 'Planning the Day \u2014 Guadalajara',
      location: 'Guadalajara',
      lines: [
        { speaker: 'Mar\u00eda', text: 'Buenos d\u00edas, Carlos. \u00bfQu\u00e9 tiempo hace hoy?', audio: '/audio/L2.2/phrases/d1-line1.mp3', annotations: [{ phrase: 'Buenos d\u00edas', fromLesson: 'L1.2', note: 'Greeting from L1.2' }] },
        { speaker: 'Carlos', text: 'Hace mucho calor. La temperatura es de treinta y dos grados.', audio: '/audio/L2.2/phrases/d1-line2.mp3', annotations: [{ phrase: 'treinta y dos', fromLesson: 'L1.3', note: 'Numbers from L1.3' }] },
        { speaker: 'Mar\u00eda', text: '\u00bfVa a llover por la tarde?', audio: '/audio/L2.2/phrases/d1-line3.mp3' },
        { speaker: 'Carlos', text: 'S\u00ed, en julio siempre llueve por la tarde en Guadalajara.', audio: '/audio/L2.2/phrases/d1-line4.mp3' },
        { speaker: 'Mar\u00eda', text: 'Entonces necesito un paraguas y gafas de sol.', audio: '/audio/L2.2/phrases/d1-line5.mp3' },
        { speaker: 'Carlos', text: '\u00a1Exacto! Sol por la ma\u00f1ana y lluvia por la tarde.', audio: '/audio/L2.2/phrases/d1-line6.mp3' },
      ],
    },
    {
      id: 'dialogue-seasons',
      title: 'Seasons in Buenos Aires \u2014 Argentina',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Ana', text: 'En Argentina, las estaciones son diferentes.', audio: '/audio/L2.2/phrases/d2-line1.mp3' },
        { speaker: 'Tom\u00e1s', text: '\u00bfPor qu\u00e9? \u00bfNo tienen las mismas estaciones?', audio: '/audio/L2.2/phrases/d2-line2.mp3' },
        { speaker: 'Ana', text: 'S\u00ed, pero al rev\u00e9s. En diciembre es verano. En julio es invierno.', audio: '/audio/L2.2/phrases/d2-line3.mp3' },
        { speaker: 'Tom\u00e1s', text: '\u00a1Navidad en verano! \u00bfHace calor en diciembre?', audio: '/audio/L2.2/phrases/d2-line4.mp3' },
        { speaker: 'Ana', text: 'S\u00ed, hace mucho calor. Treinta y cinco grados.', audio: '/audio/L2.2/phrases/d2-line5.mp3' },
        { speaker: 'Tom\u00e1s', text: '\u00a1Qu\u00e9 interesante! Yo prefiero el oto\u00f1o.', audio: '/audio/L2.2/phrases/d2-line6.mp3', annotations: [{ phrase: 'prefiero', fromLesson: 'L2.2', note: 'Preference expression' }] },
      ],
    },
  ],
  dialogueDescription: 'Listen to conversations about weather and seasons from Guadalajara and Buenos Aires.',

  culturalNotes: [
    {
      title: 'Reversed Seasons \u2014 Southern Hemisphere',
      content: 'In Argentina, Chile, Uruguay, and southern Brazil, the seasons are opposite to the Northern Hemisphere. December is the start of summer, and July is the coldest month. Christmas is celebrated at the beach in Buenos Aires! This surprises many first-time visitors.',
    },
    {
      title: 'Microclimates of Latin America',
      content: 'Latin America has incredible climate diversity. Colombia has no traditional seasons \u2014 cities like Bogot\u00e1 are cool year-round (15\u00b0C) while Cartagena is tropical (32\u00b0C). Mexico City is temperate, but Canc\u00fan is hot and humid. Altitude matters more than latitude in many countries.',
    },
    {
      title: 'El Pron\u00f3stico \u2014 Weather Small Talk',
      content: 'Just like in English, weather is the #1 small talk topic in Spanish. Asking "\u00bfQu\u00e9 tiempo hace?" is a safe conversation starter anywhere. In many Latin American countries, people also use weather metaphors: "est\u00e1 que llueve" (it\u2019s pouring) can mean someone is very angry!',
    },
  ],
  culturalGradient: 'from-sky-50 to-cyan-50',

  quiz: [
    { id: 1, type: 'mc', text: 'How do you say "it is hot" in Spanish?', options: ['Est\u00e1 calor', 'Hace calor', 'Tiene calor', 'Es calor'], answer: 1 },
    { id: 2, type: 'mc', text: 'Which construction uses "hay"?', options: ['Hay sol', 'Hay fr\u00edo', 'Hay tormenta', 'Hay calor'], answer: 2 },
    { id: 3, type: 'fill', text: 'Complete: "Hoy ___ mucho viento" (Today it is very windy)', answer: 'hace' },
    { id: 4, type: 'mc', text: 'Which month comes after marzo?', options: ['Febrero', 'Abril', 'Mayo', 'Enero'], answer: 1 },
    { id: 5, type: 'tf', text: 'In Spanish, months are written in lowercase: "enero," not "Enero."', answer: true },
    { id: 6, type: 'mc', text: 'When it is summer in New York, what season is it in Buenos Aires?', options: ['Summer', 'Winter', 'Spring', 'Fall'], answer: 1 },
    { id: 7, type: 'fill', text: 'Complete: "Ma\u00f1ana va a ___" (Tomorrow it is going to rain)', answer: 'llover' },
    { id: 8, type: 'mc', text: 'What do you wear when "hace fr\u00edo"?', options: ['Gafas de sol', 'Un abrigo', 'Un sombrero', 'Sandalias'], answer: 1 },
    { id: 9, type: 'tf', text: '"Llueve" uses the verb "hacer."', answer: false },
    { id: 10, type: 'mc', text: 'In Dialogue 1, why does Mar\u00eda need both sunglasses AND an umbrella?', options: ['She is confused', 'Sun in the morning, rain in the afternoon', 'It is a joke', 'She forgot her coat'], answer: 1 },
    { id: 11, type: 'mc', text: '"El paraguas" is:', options: ['The coat', 'The umbrella', 'The scarf', 'The boots'], answer: 1 },
    { id: 12, type: 'fill', text: 'Complete: "Me ___ el verano" (I like summer)', answer: 'gusta' },
    { id: 13, type: 'mc', text: 'How do you ask "What is the weather like today?"', options: ['\u00bfC\u00f3mo tiempo hace hoy?', '\u00bfQu\u00e9 hace el tiempo?', '\u00bfQu\u00e9 tiempo hace hoy?', '\u00bfD\u00f3nde hace tiempo?'], answer: 2 },
    { id: 14, type: 'tf', text: '"Est\u00e1 nublado" means "it is cloudy."', answer: true },
    { id: 15, type: 'mc', text: 'Which expression means "it is going to snow"?', options: ['Hace nieve', 'Est\u00e1 nevando', 'Va a nevar', 'Nieva ma\u00f1ana'], answer: 2 },
  ],

  audioBase: '/audio/L2.2/phrases',

  uniqueActivity: {
    id: 'WeatherForecastL22',
    sectionId: 'weather-forecast',
    sectionColor: 'bg-sky-50/40',
    sectionBorder: 'border-sky-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    weather: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    seasons: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    clothing: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    phrases: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'weather-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'weather-forecast': { bg: 'bg-sky-50/40', border: 'border-sky-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
