import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Animals (10) ===
  { spanish: 'El jaguar', english: 'The jaguar', pronunciation: 'ehl hah-GWAHR', category: 'animals', audio: 'el-jaguar' },
  { spanish: 'La tortuga marina', english: 'The sea turtle', pronunciation: 'lah tohr-TOO-gah mah-REE-nah', category: 'animals', audio: 'la-tortuga-marina' },
  { spanish: 'El cóndor', english: 'The condor', pronunciation: 'ehl KOHN-dohr', category: 'animals', audio: 'el-condor' },
  { spanish: 'La ballena', english: 'The whale', pronunciation: 'lah bah-YEH-nah', category: 'animals', audio: 'la-ballena' },
  { spanish: 'El mono', english: 'The monkey', pronunciation: 'ehl MOH-noh', category: 'animals', audio: 'el-mono' },
  { spanish: 'La iguana', english: 'The iguana', pronunciation: 'lah ee-GWAH-nah', category: 'animals', audio: 'la-iguana' },
  { spanish: 'El loro', english: 'The parrot', pronunciation: 'ehl LOH-roh', category: 'animals', audio: 'el-loro' },
  { spanish: 'El delfín', english: 'The dolphin', pronunciation: 'ehl dehl-FEEN', category: 'animals', audio: 'el-delfin' },
  { spanish: 'La mariposa', english: 'The butterfly', pronunciation: 'lah mah-ree-POH-sah', category: 'animals', audio: 'la-mariposa' },
  { spanish: 'El oso', english: 'The bear', pronunciation: 'ehl OH-soh', category: 'animals', audio: 'el-oso' },

  // === Nature & Geography (10) ===
  { spanish: 'La selva tropical', english: 'The tropical rainforest', pronunciation: 'lah SEHL-bah troh-pee-KAHL', category: 'nature', audio: 'la-selva-tropical' },
  { spanish: 'El volcán', english: 'The volcano', pronunciation: 'ehl bohl-KAHN', category: 'nature', audio: 'el-volcan' },
  { spanish: 'El río', english: 'The river', pronunciation: 'ehl RREE-oh', category: 'nature', audio: 'el-rio' },
  { spanish: 'La montaña', english: 'The mountain', pronunciation: 'lah mohn-TAH-nyah', category: 'nature', audio: 'la-montana' },
  { spanish: 'La isla', english: 'The island', pronunciation: 'lah EES-lah', category: 'nature', audio: 'la-isla' },
  { spanish: 'El bosque', english: 'The forest', pronunciation: 'ehl BOHS-keh', category: 'nature', audio: 'el-bosque' },
  { spanish: 'La cascada', english: 'The waterfall', pronunciation: 'lah kahs-KAH-dah', category: 'nature', audio: 'la-cascada' },
  { spanish: 'El desierto', english: 'The desert', pronunciation: 'ehl deh-see-EHR-toh', category: 'nature', audio: 'el-desierto' },
  { spanish: 'La costa', english: 'The coast', pronunciation: 'lah KOHS-tah', category: 'nature', audio: 'la-costa' },
  { spanish: 'El arrecife de coral', english: 'The coral reef', pronunciation: 'ehl ah-rreh-SEE-feh deh koh-RAHL', category: 'nature', audio: 'el-arrecife-de-coral' },

  // === Environment (10) ===
  { spanish: 'El cambio climático', english: 'Climate change', pronunciation: 'ehl KAHM-bee-oh klee-MAH-tee-koh', category: 'environment', audio: 'el-cambio-climatico' },
  { spanish: 'La contaminación', english: 'Pollution', pronunciation: 'lah kohn-tah-mee-nah-see-OHN', category: 'environment', audio: 'la-contaminacion' },
  { spanish: 'Los recursos naturales', english: 'Natural resources', pronunciation: 'lohs reh-KOOR-sohs nah-too-RAH-lehs', category: 'environment', audio: 'los-recursos-naturales' },
  { spanish: 'La deforestación', english: 'Deforestation', pronunciation: 'lah deh-foh-rehs-tah-see-OHN', category: 'environment', audio: 'la-deforestacion' },
  { spanish: 'El calentamiento global', english: 'Global warming', pronunciation: 'ehl kah-lehn-tah-mee-EHN-toh gloh-BAHL', category: 'environment', audio: 'el-calentamiento-global' },
  { spanish: 'Las especies en peligro', english: 'Endangered species', pronunciation: 'lahs ehs-PEH-see-ehs ehn peh-LEE-groh', category: 'environment', audio: 'las-especies-en-peligro' },
  { spanish: 'La biodiversidad', english: 'Biodiversity', pronunciation: 'lah bee-oh-dee-behr-see-DAHD', category: 'environment', audio: 'la-biodiversidad' },
  { spanish: 'El ecosistema', english: 'The ecosystem', pronunciation: 'ehl eh-koh-sees-TEH-mah', category: 'environment', audio: 'el-ecosistema' },
  { spanish: 'La capa de ozono', english: 'The ozone layer', pronunciation: 'lah KAH-pah deh oh-SOH-noh', category: 'environment', audio: 'la-capa-de-ozono' },
  { spanish: 'La sequía', english: 'The drought', pronunciation: 'lah seh-KEE-ah', category: 'environment', audio: 'la-sequia' },

  // === Eco-Actions (8) ===
  { spanish: 'Reciclar la basura', english: 'Recycle the trash', pronunciation: 'rreh-see-KLAHR lah bah-SOO-rah', category: 'eco-actions', audio: 'reciclar-la-basura' },
  { spanish: 'Ahorrar agua', english: 'Save water', pronunciation: 'ah-oh-RRAHR AH-gwah', category: 'eco-actions', audio: 'ahorrar-agua' },
  { spanish: 'Plantar árboles', english: 'Plant trees', pronunciation: 'plahn-TAHR AHR-boh-lehs', category: 'eco-actions', audio: 'plantar-arboles' },
  { spanish: 'Usar energía solar', english: 'Use solar energy', pronunciation: 'oo-SAHR eh-nehr-HEE-ah soh-LAHR', category: 'eco-actions', audio: 'usar-energia-solar' },
  { spanish: 'Proteger los animales', english: 'Protect the animals', pronunciation: 'proh-teh-HEHR lohs ah-nee-MAH-lehs', category: 'eco-actions', audio: 'proteger-los-animales' },
  { spanish: 'Reducir el plástico', english: 'Reduce plastic', pronunciation: 'rreh-doo-SEER ehl PLAHS-tee-koh', category: 'eco-actions', audio: 'reducir-el-plastico' },
  { spanish: 'Limpiar las playas', english: 'Clean the beaches', pronunciation: 'leem-pee-AHR lahs PLAH-yahs', category: 'eco-actions', audio: 'limpiar-las-playas' },
  { spanish: 'Cuidar el medio ambiente', english: 'Take care of the environment', pronunciation: 'kwee-DAHR ehl MEH-dee-oh ahm-bee-EHN-teh', category: 'eco-actions', audio: 'cuidar-el-medio-ambiente' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L36PhraseByAudio = phraseByAudio

// === ECO QUIZ (unique activity) ===

export interface EcoQuizChallenge {
  statement: string
  english: string
  isTrue: boolean
  explanation: string
}

export const ECO_QUIZ_CHALLENGES: EcoQuizChallenge[] = [
  {
    statement: 'El Amazonas produce aproximadamente el veinte por ciento del oxígeno del mundo.',
    english: 'The Amazon produces approximately 20% of the world\'s oxygen.',
    isTrue: true,
    explanation: 'The Amazon rainforest is often called "the lungs of the Earth" for its massive oxygen output.',
  },
  {
    statement: 'El cóndor andino es el ave voladora más grande del mundo.',
    english: 'The Andean condor is the largest flying bird in the world.',
    isTrue: true,
    explanation: 'The Andean condor has the largest wingspan of any land bird, reaching up to 3.3 meters (10.8 feet).',
  },
  {
    statement: 'Las Islas Galápagos están en la costa de México.',
    english: 'The Galápagos Islands are off the coast of Mexico.',
    isTrue: false,
    explanation: 'The Galápagos Islands belong to Ecuador, about 1,000 km off its Pacific coast.',
  },
  {
    statement: 'La selva tropical del Amazonas cubre nueve países de Sudamérica.',
    english: 'The Amazon rainforest covers nine countries in South America.',
    isTrue: true,
    explanation: 'The Amazon spans Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana.',
  },
  {
    statement: 'El río Amazonas es el río más largo del mundo.',
    english: 'The Amazon River is the longest river in the world.',
    isTrue: false,
    explanation: 'The Nile is generally considered the longest river. The Amazon is the largest by water volume.',
  },
  {
    statement: 'Costa Rica genera más del noventa por ciento de su electricidad con energía renovable.',
    english: 'Costa Rica generates over 90% of its electricity from renewable energy.',
    isTrue: true,
    explanation: 'Costa Rica is a world leader in renewable energy, using hydroelectric, geothermal, wind, and solar power.',
  },
  {
    statement: 'El jaguar vive solamente en la selva tropical.',
    english: 'The jaguar lives only in the tropical rainforest.',
    isTrue: false,
    explanation: 'Jaguars also inhabit savannas, wetlands, and scrublands across Central and South America.',
  },
  {
    statement: 'La mariposa monarca migra miles de kilómetros desde Canadá hasta México.',
    english: 'The monarch butterfly migrates thousands of kilometers from Canada to Mexico.',
    isTrue: true,
    explanation: 'Monarch butterflies travel up to 4,800 km to reach their winter sanctuaries in Michoacán, Mexico.',
  },
  {
    statement: 'El desierto de Atacama en Chile es el desierto más seco del mundo.',
    english: 'The Atacama Desert in Chile is the driest desert in the world.',
    isTrue: true,
    explanation: 'Parts of the Atacama have never recorded rainfall. It\'s drier than even the polar deserts.',
  },
  {
    statement: 'Las tortugas marinas pueden vivir más de cien años.',
    english: 'Sea turtles can live more than 100 years.',
    isTrue: true,
    explanation: 'Some sea turtle species can live 80-100+ years, making them among the longest-lived reptiles.',
  },
  {
    statement: 'El lago Titicaca es el lago navegable más alto del mundo.',
    english: 'Lake Titicaca is the highest navigable lake in the world.',
    isTrue: true,
    explanation: 'At 3,812 meters above sea level, Lake Titicaca on the Peru-Bolivia border is the highest navigable lake.',
  },
  {
    statement: 'La deforestación del Amazonas no afecta el clima global.',
    english: 'Deforestation of the Amazon does not affect global climate.',
    isTrue: false,
    explanation: 'Amazon deforestation releases massive CO₂ and disrupts rainfall patterns across South America and globally.',
  },
  {
    statement: 'Colombia es el segundo país con más biodiversidad del mundo.',
    english: 'Colombia is the second most biodiverse country in the world.',
    isTrue: true,
    explanation: 'Colombia ranks #2 globally in biodiversity, with over 56,000 species of plants and animals.',
  },
  {
    statement: 'Los delfines rosados viven en el río Amazonas.',
    english: 'Pink dolphins live in the Amazon River.',
    isTrue: true,
    explanation: 'The Amazon river dolphin (boto) is famous for its pink color and lives in freshwater rivers.',
  },
  {
    statement: 'El Salto Ángel en Venezuela es la cascada más alta del mundo.',
    english: 'Angel Falls in Venezuela is the tallest waterfall in the world.',
    isTrue: true,
    explanation: 'Angel Falls drops 979 meters, making it the world\'s highest uninterrupted waterfall.',
  },
]

// === LESSON DATA ===

export const L36Data: LessonData = {
  id: 'L3.6',
  hero: {
    lessonId: 'L3.6',
    title: 'Environment & Nature',
    subtitle: 'Explore the natural world in Spanish',
    description: 'Learn vocabulary about animals, landscapes, and environmental topics. Discuss Latin America\'s incredible biodiversity, from the Amazon rainforest to the Galápagos Islands, and talk about protecting our planet.',
    image: '/images/L3.6/L3.6.jpg',
    gradient: 'from-emerald-800/65 via-teal-700/55 to-green-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '🐆', title: 'Animals', desc: 'Name animals from Latin America: jaguar, cóndor, tortuga marina, ballena, delfín, mariposa, and more.' },
    { icon: '🏔️', title: 'Nature & Geography', desc: 'Describe landscapes: selva, volcán, río, montaña, isla, bosque, cascada, desierto.' },
    { icon: '🌍', title: 'Environment', desc: 'Discuss environmental topics: cambio climático, contaminación, deforestación, biodiversidad.' },
    { icon: '♻️', title: 'Eco-Actions', desc: 'Express actions to help: reciclar, ahorrar agua, plantar árboles, proteger los animales.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L2.2', label: 'Weather', detail: 'Weather vocab from L2.2 (lluvia, sol, nublado) connects to climate and nature discussions.' },
    { fromLesson: 'L3.2', label: 'Home & Spaces', detail: 'Home vocabulary from L3.2 extends to talking about the natural "home" of animals and ecosystems.' },
    { fromLesson: 'L2.7', label: 'Describing Things', detail: 'Adjectives from L2.7 help describe animals and landscapes: grande, hermoso, peligroso.' },
  ],

  sectionTransitions: [
    { afterSection: 'animals', text: 'You know the animals! Now let\u2019s explore where they live.' },
    { afterSection: 'nature', text: 'Beautiful landscapes mastered \u2014 now the environmental challenges they face.' },
    { afterSection: 'environment', text: 'You understand the problems. Let\u2019s learn what we can do to help!' },
    { afterSection: 'dialogues', text: 'Great conversations about nature! Let\u2019s explore Latin American biodiversity.' },
    { afterSection: 'cultural', text: 'Now test your eco-knowledge with our quiz!' },
    { afterSection: 'eco-quiz', text: 'Final stretch \u2014 knowledge check time!' },
  ],

  personalizedVocab: [
    { spanish: 'Mi animal favorito es...', english: 'My favorite animal is...' },
    { spanish: 'Quiero visitar...', english: 'I want to visit...' },
    { spanish: 'El medio ambiente es importante', english: 'The environment is important' },
    { spanish: 'Podemos reciclar...', english: 'We can recycle...' },
    { spanish: 'La naturaleza es hermosa', english: 'Nature is beautiful' },
    { spanish: 'Debemos proteger...', english: 'We should protect...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La selva tropical del Amazonas', pronunciation: 'lah SEHL-bah troh-pee-KAHL dehl ah-mah-SOH-nahs', english: 'The Amazon tropical rainforest', audio: 'la-selva-tropical-del-amazonas', tip: '"Selva" has a soft S. "Tropical" stress falls on the last syllable: troh-pee-KAHL. Roll the R slightly in "tropical."' },
    { spanish: 'Las especies en peligro de extinción', pronunciation: 'lahs ehs-PEH-see-ehs ehn peh-LEE-groh deh ehks-teen-see-OHN', english: 'Endangered species', audio: 'las-especies-en-peligro-de-extincion', tip: '"Especies" has four syllables: ehs-PEH-see-ehs. "Peligro" stress on the second syllable: peh-LEE-groh.' },
    { spanish: 'El arrecife de coral es hermoso', pronunciation: 'ehl ah-rreh-SEE-feh deh koh-RAHL ehs ehr-MOH-soh', english: 'The coral reef is beautiful', audio: 'el-arrecife-de-coral-es-hermoso', tip: '"Arrecife" has a strong rolled RR: ah-rreh-SEE-feh. Don\u2019t skip the double R sound!' },
    { spanish: 'Debemos cuidar el medio ambiente', pronunciation: 'deh-BEH-mohs kwee-DAHR ehl MEH-dee-oh ahm-bee-EHN-teh', english: 'We should take care of the environment', audio: 'debemos-cuidar-el-medio-ambiente', tip: '"Cuidar" has a diphthong: kwee-DAHR. "Ambiente" stress on the second syllable: ahm-bee-EHN-teh.' },
    { spanish: 'La biodiversidad de Colombia es increíble', pronunciation: 'lah bee-oh-dee-behr-see-DAHD deh koh-LOHM-bee-ah ehs een-kreh-EE-bleh', english: 'Colombia\u2019s biodiversity is incredible', audio: 'la-biodiversidad-de-colombia-es-increible', tip: '"Biodiversidad" is a long word \u2014 break it down: bee-oh-dee-behr-see-DAHD. Stress always on the last syllable.' },
    { spanish: 'El cambio climático afecta a todos', pronunciation: 'ehl KAHM-bee-oh klee-MAH-tee-koh ah-FEHK-tah ah TOH-dohs', english: 'Climate change affects everyone', audio: 'el-cambio-climatico-afecta-a-todos', tip: '"Climático" is esdrújula (stress on third-to-last): klee-MAH-tee-koh. All esdrújulas carry an accent mark!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'animals', label: 'Animals' },
    { id: 'nature', label: 'Nature & Geography' },
    { id: 'environment', label: 'Environment' },
    { id: 'eco-actions', label: 'Eco-Actions' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Sorting Activity' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'eco-quiz', label: 'Eco Quiz' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'animals',
      title: 'Animals of Latin America',
      description: 'From jaguars in the jungle to whales in the Pacific \u2014 the amazing fauna of the Spanish-speaking world.',
      tabs: [
        { label: 'Land Animals', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'animals').slice(0, 5) },
        { label: 'Sea & Sky', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'animals').slice(5) },
      ],
    },
    {
      id: 'nature',
      title: 'Nature & Geography',
      description: 'Rainforests, volcanoes, deserts, and coasts \u2014 Latin America has every landscape imaginable.',
      tabs: [
        { label: 'Land & Water', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'nature').slice(0, 5) },
        { label: 'More Landscapes', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'nature').slice(5) },
      ],
    },
    {
      id: 'environment',
      title: 'Environment & Climate',
      description: 'Understand the environmental challenges facing our planet and the vocabulary to discuss them.',
      tabs: [
        { label: 'Problems', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'environment').slice(0, 5) },
        { label: 'Concepts', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'environment').slice(5) },
      ],
    },
    {
      id: 'eco-actions',
      title: 'Eco-Actions',
      description: 'What can we do to help? Learn to express environmental actions in Spanish.',
      tabs: [
        { label: 'Reduce & Reuse', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'eco-actions').slice(0, 4) },
        { label: 'Protect & Care', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'eco-actions').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Nature Cognates \u2014 Easy Wins!',
      content: 'Many environment words are cognates: volcán (volcano), ecosistema (ecosystem), biodiversidad (biodiversity), contaminación (contamination/pollution). The spelling is close to English, but pronunciation follows Spanish rules. Remember: stress the accented syllable!',
      example: 'Vol-CÁN | Eco-sis-TE-ma | Bio-di-ver-si-DAD',
    },
    {
      title: 'The Double R in Nature Words',
      content: 'Many nature words feature the rolled RR: arrecife (reef), arroyo (stream), sierra (mountain range). Practice the RR by placing your tongue behind your upper teeth and letting it vibrate. Start with "rrr" alone, then add it to words.',
      example: 'A-rre-CI-fe | A-RRO-yo | SIE-rra',
      reviewFrom: 'L2.2',
    },
    {
      title: 'Long Environmental Words',
      content: 'Don\u2019t be intimidated by long words like "deforestación" or "calentamiento." Break them into syllables: de-fo-res-ta-CIÓN, ca-len-ta-MIEN-to. Spanish is phonetic \u2014 each syllable is pronounced exactly as spelled. Practice slowly, then speed up.',
      example: 'De-fo-res-ta-CIÓN | Ca-len-ta-MIEN-to glo-BAL',
    },
    {
      title: 'Animal Names \u2014 False Friends',
      content: '"Tortuga" is not "tortoise" only \u2014 it also means turtle! "Mono" means monkey (not "mono" as in English). "Oso" (bear) is easy but "oso hormiguero" (anteater) is a fun compound. Context and articles (el/la) help distinguish gender.',
      example: 'La tortuga marina (sea turtle) | El oso polar (polar bear)',
    },
  ],

  flashcardGroups: [
    {
      key: 'animals',
      label: 'Animals',
      audioKeys: ['el-jaguar', 'la-tortuga-marina', 'el-condor', 'la-ballena', 'el-mono', 'la-iguana', 'el-loro', 'el-delfin', 'la-mariposa', 'el-oso'],
    },
    {
      key: 'nature',
      label: 'Nature',
      audioKeys: ['la-selva-tropical', 'el-volcan', 'el-rio', 'la-montana', 'la-isla', 'el-bosque', 'la-cascada', 'el-desierto', 'la-costa', 'el-arrecife-de-coral'],
    },
    {
      key: 'environment-eco',
      label: 'Environment & Eco',
      audioKeys: ['el-cambio-climatico', 'la-contaminacion', 'la-deforestacion', 'la-biodiversidad', 'reciclar-la-basura', 'ahorrar-agua', 'plantar-arboles', 'cuidar-el-medio-ambiente'],
    },
  ],

  matchPairs: [
    { left: 'El jaguar', right: 'The jaguar' },
    { left: 'La selva', right: 'The rainforest' },
    { left: 'El volcán', right: 'The volcano' },
    { left: 'La ballena', right: 'The whale' },
    { left: 'Reciclar', right: 'To recycle' },
    { left: 'La montaña', right: 'The mountain' },
    { left: 'El río', right: 'The river' },
    { left: 'La mariposa', right: 'The butterfly' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Animal or Landscape?',
      instruction: 'Is this an animal or a landscape/geography term?',
      buckets: ['Animal 🐾', 'Landscape 🏔️'],
      items: [
        { text: 'El jaguar', bucket: 'Animal 🐾' },
        { text: 'La ballena', bucket: 'Animal 🐾' },
        { text: 'El cóndor', bucket: 'Animal 🐾' },
        { text: 'La mariposa', bucket: 'Animal 🐾' },
        { text: 'La selva tropical', bucket: 'Landscape 🏔️' },
        { text: 'El volcán', bucket: 'Landscape 🏔️' },
        { text: 'La cascada', bucket: 'Landscape 🏔️' },
        { text: 'El desierto', bucket: 'Landscape 🏔️' },
      ],
    },
    {
      title: 'Problem or Solution?',
      instruction: 'Is this an environmental problem or a positive action?',
      buckets: ['Problem ⚠️', 'Solution ✅'],
      items: [
        { text: 'La contaminación', bucket: 'Problem ⚠️' },
        { text: 'La deforestación', bucket: 'Problem ⚠️' },
        { text: 'El calentamiento global', bucket: 'Problem ⚠️' },
        { text: 'La sequía', bucket: 'Problem ⚠️' },
        { text: 'Reciclar la basura', bucket: 'Solution ✅' },
        { text: 'Plantar árboles', bucket: 'Solution ✅' },
        { text: 'Ahorrar agua', bucket: 'Solution ✅' },
        { text: 'Usar energía solar', bucket: 'Solution ✅' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Sorting Activity',

  dialogues: [
    {
      id: 'dialogue-amazon',
      title: 'Exploring the Amazon — Iquitos, Peru',
      location: 'Iquitos',
      lines: [
        { speaker: 'Sofía', text: '¡Mira! Hay un mono en ese árbol. ¿Lo ves?', audio: '/audio/L3.6/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: '¡Sí! Y escucho loros también. La selva está llena de vida.', audio: '/audio/L3.6/phrases/d1-line2.mp3' },
        { speaker: 'Sofía', text: 'Nuestro guía dijo que hay más de mil especies de aves aquí.', audio: '/audio/L3.6/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: '¡Increíble! ¿Y es verdad que el Amazonas produce el veinte por ciento del oxígeno?', audio: '/audio/L3.6/phrases/d1-line4.mp3' },
        { speaker: 'Sofía', text: 'Sí, por eso lo llaman "los pulmones del planeta." Pero la deforestación es un problema muy serio.', audio: '/audio/L3.6/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: '¿Qué podemos hacer para ayudar?', audio: '/audio/L3.6/phrases/d1-line6.mp3' },
        { speaker: 'Sofía', text: 'Podemos reducir el uso de papel, apoyar a comunidades locales y cuidar nuestros bosques.', audio: '/audio/L3.6/phrases/d1-line7.mp3', annotations: [{ phrase: 'bosques', fromLesson: 'L2.2', note: 'Nature vocabulary connecting to weather and seasons' }] },
        { speaker: 'Diego', text: '¡Mira el río! ¿Esos son delfines rosados?', audio: '/audio/L3.6/phrases/d1-line8.mp3' },
        { speaker: 'Sofía', text: '¡Sí! Los delfines rosados del Amazonas. Son hermosos y están en peligro de extinción.', audio: '/audio/L3.6/phrases/d1-line9.mp3', annotations: [{ phrase: 'hermosos', fromLesson: 'L2.7', note: 'Descriptive adjectives from L2.7' }] },
      ],
    },
    {
      id: 'dialogue-galapagos',
      title: 'Visiting the Galápagos — Ecuador',
      location: 'Galápagos',
      lines: [
        { speaker: 'Ana', text: '¡No puedo creer que estamos en las Islas Galápagos!', audio: '/audio/L3.6/phrases/d2-line1.mp3' },
        { speaker: 'Mateo', text: '¡Yo tampoco! Mira esas iguanas marinas en las rocas.', audio: '/audio/L3.6/phrases/d2-line2.mp3' },
        { speaker: 'Ana', text: 'Son únicas en el mundo. Solo existen aquí. ¿Y esas tortugas gigantes?', audio: '/audio/L3.6/phrases/d2-line3.mp3' },
        { speaker: 'Mateo', text: 'Las tortugas gigantes de Galápagos pueden vivir más de cien años.', audio: '/audio/L3.6/phrases/d2-line4.mp3' },
        { speaker: 'Ana', text: 'Aquí la biodiversidad es impresionante. Charles Darwin estudió estas islas.', audio: '/audio/L3.6/phrases/d2-line5.mp3' },
        { speaker: 'Mateo', text: '¿Es verdad que no puedes tocar a los animales?', audio: '/audio/L3.6/phrases/d2-line6.mp3' },
        { speaker: 'Ana', text: 'Correcto. Es un parque nacional protegido. Debemos respetar la naturaleza.', audio: '/audio/L3.6/phrases/d2-line7.mp3' },
        { speaker: 'Mateo', text: 'Mañana quiero ver las ballenas y hacer snorkel en el arrecife de coral.', audio: '/audio/L3.6/phrases/d2-line8.mp3', annotations: [{ phrase: 'Mañana quiero', fromLesson: 'L3.2', note: 'Expressing wishes about future activities' }] },
      ],
    },
  ],
  dialogueDescription: 'Explore the Amazon rainforest in Peru and discover the Galápagos Islands in Ecuador.',

  culturalNotes: [
    {
      title: 'The Amazon \u2014 World\u2019s Largest Rainforest',
      content: 'The Amazon rainforest spans nine countries and is home to 10% of all species on Earth. Indigenous communities have protected this ecosystem for thousands of years. In Peru, the city of Iquitos is the largest city in the world with no road access \u2014 you can only arrive by boat or plane! The Amazon River carries more water than the next seven largest rivers combined.',
    },
    {
      title: 'Galápagos \u2014 A Living Laboratory',
      content: 'Ecuador\u2019s Galápagos Islands inspired Charles Darwin\u2019s theory of evolution. The islands are home to species found nowhere else: marine iguanas, giant tortoises, blue-footed boobies, and flightless cormorants. Ecuador\u2019s constitution is unique \u2014 it grants legal rights to nature (los derechos de la naturaleza), making it a pioneer in environmental law.',
    },
    {
      title: 'Costa Rica \u2014 A Model for Conservation',
      content: 'Costa Rica reversed its deforestation crisis: in the 1980s, it was losing forests rapidly, but today over 50% of the country is forested again. The "Pago por Servicios Ambientales" (Payment for Environmental Services) program pays landowners to protect forests. Costa Rica generates over 98% of its electricity from renewable sources and aims to be fully carbon neutral.',
    },
  ],
  culturalGradient: 'from-emerald-50 to-teal-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El jaguar" in English is:', options: ['The eagle', 'The jaguar', 'The lion', 'The tiger'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La selva ___" (tropical)', answer: 'tropical' },
    { id: 3, type: 'mc', text: '"La contaminación" means:', options: ['Conservation', 'Contamination/Pollution', 'Construction', 'Communication'], answer: 1 },
    { id: 4, type: 'tf', text: 'The Galápagos Islands belong to Ecuador.', answer: true },
    { id: 5, type: 'mc', text: '"Reciclar la basura" means:', options: ['Throw away trash', 'Recycle the trash', 'Burn the trash', 'Hide the trash'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Debemos proteger los ___" (animals)', answer: 'animales' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, what animals did Diego see in the river?', options: ['Turtles', 'Fish', 'Pink dolphins', 'Crocodiles'], answer: 2 },
    { id: 8, type: 'mc', text: '"El volcán" means:', options: ['The valley', 'The volcano', 'The village', 'The vine'], answer: 1 },
    { id: 9, type: 'tf', text: 'The Amazon rainforest covers only one country (Brazil).', answer: false },
    { id: 10, type: 'mc', text: '"La cascada" means:', options: ['The cascade/waterfall', 'The castle', 'The coast', 'The cave'], answer: 0 },
    { id: 11, type: 'fill', text: 'Complete: "El cambio ___" (climático)', answer: 'climático' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, where are Ana and Mateo?', options: ['The Amazon', 'Galápagos Islands', 'Costa Rica', 'Patagonia'], answer: 1 },
    { id: 13, type: 'mc', text: '"Ahorrar agua" means:', options: ['Heat water', 'Save water', 'Drink water', 'Boil water'], answer: 1 },
    { id: 14, type: 'tf', text: 'Costa Rica generates over 90% of its electricity from renewable energy.', answer: true },
    { id: 15, type: 'mc', text: '"La mariposa" means:', options: ['The ladybug', 'The dragonfly', 'The butterfly', 'The bee'], answer: 2 },
  ],

  audioBase: '/audio/L3.6/phrases',

  uniqueActivity: {
    id: 'EcoQuizL36',
    sectionId: 'eco-quiz',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    animals: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    nature: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    environment: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'eco-actions': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'eco-quiz': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
