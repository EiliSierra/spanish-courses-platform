import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Travel Vocabulary (10) ===
  { spanish: 'El destino', english: 'The destination', pronunciation: 'ehl dehs-TEE-noh', category: 'travel-vocab', audio: 'el-destino' },
  { spanish: 'El viaje', english: 'The trip', pronunciation: 'ehl bee-AH-heh', category: 'travel-vocab', audio: 'el-viaje' },
  { spanish: 'La maleta', english: 'The suitcase', pronunciation: 'lah mah-LEH-tah', category: 'travel-vocab', audio: 'la-maleta' },
  { spanish: 'El paseo', english: 'The walk / stroll', pronunciation: 'ehl pah-SEH-oh', category: 'travel-vocab', audio: 'el-paseo' },
  { spanish: 'El recuerdo', english: 'The souvenir / memory', pronunciation: 'ehl reh-KWEHR-doh', category: 'travel-vocab', audio: 'el-recuerdo' },
  { spanish: 'La aventura', english: 'The adventure', pronunciation: 'lah ah-behn-TOO-rah', category: 'travel-vocab', audio: 'la-aventura' },
  { spanish: 'El itinerario', english: 'The itinerary', pronunciation: 'ehl ee-tee-neh-RAH-ree-oh', category: 'travel-vocab', audio: 'el-itinerario' },
  { spanish: 'La guía turística', english: 'The tour guide / guidebook', pronunciation: 'lah GEE-ah too-REES-tee-kah', category: 'travel-vocab', audio: 'la-guia-turistica' },
  { spanish: 'El paisaje', english: 'The landscape / scenery', pronunciation: 'ehl pah-ee-SAH-heh', category: 'travel-vocab', audio: 'el-paisaje' },
  { spanish: 'La temporada', english: 'The season (travel)', pronunciation: 'lah tehm-poh-RAH-dah', category: 'travel-vocab', audio: 'la-temporada' },

  // === Experiences (10) ===
  { spanish: 'Conocí un lugar increíble', english: 'I discovered an incredible place', pronunciation: 'koh-noh-SEE oon loo-GAHR een-kreh-EE-bleh', category: 'experiences', audio: 'conoci-un-lugar' },
  { spanish: 'Visité las ruinas', english: 'I visited the ruins', pronunciation: 'bee-see-TEH lahs RROO-ee-nahs', category: 'experiences', audio: 'visite-las-ruinas' },
  { spanish: 'Probé la comida local', english: 'I tried the local food', pronunciation: 'proh-BEH lah koh-MEE-dah loh-KAHL', category: 'experiences', audio: 'probe-la-comida-local' },
  { spanish: 'Caminé por la ciudad', english: 'I walked around the city', pronunciation: 'kah-mee-NEH pohr lah see-oo-DAHD', category: 'experiences', audio: 'camine-por-la-ciudad' },
  { spanish: 'Tomé muchas fotos', english: 'I took many photos', pronunciation: 'toh-MEH MOO-chahs FOH-tohs', category: 'experiences', audio: 'tome-muchas-fotos' },
  { spanish: 'Nadé en el mar', english: 'I swam in the sea', pronunciation: 'nah-DEH ehn ehl mahr', category: 'experiences', audio: 'nade-en-el-mar' },
  { spanish: 'Subí a la montaña', english: 'I climbed the mountain', pronunciation: 'soo-BEE ah lah mohn-TAH-nyah', category: 'experiences', audio: 'subi-a-la-montana' },
  { spanish: 'Me perdí en las calles', english: 'I got lost in the streets', pronunciation: 'meh pehr-DEE ehn lahs KAH-yehs', category: 'experiences', audio: 'me-perdi-en-las-calles' },
  { spanish: 'Compré recuerdos', english: 'I bought souvenirs', pronunciation: 'kohm-PREH reh-KWEHR-dohs', category: 'experiences', audio: 'compre-recuerdos' },
  { spanish: 'Hice un tour guiado', english: 'I did a guided tour', pronunciation: 'EE-seh oon toor gee-AH-doh', category: 'experiences', audio: 'hice-un-tour-guiado' },

  // === Recommendations (10) ===
  { spanish: 'Te recomiendo ir en verano', english: 'I recommend you go in summer', pronunciation: 'teh reh-koh-mee-EHN-doh eer ehn beh-RAH-noh', category: 'recommendations', audio: 'te-recomiendo-ir' },
  { spanish: 'Deberías visitar el museo', english: 'You should visit the museum', pronunciation: 'deh-beh-REE-ahs bee-see-TAHR ehl moo-SEH-oh', category: 'recommendations', audio: 'deberias-visitar' },
  { spanish: 'Vale la pena el viaje', english: 'The trip is worth it', pronunciation: 'BAH-leh lah PEH-nah ehl bee-AH-heh', category: 'recommendations', audio: 'vale-la-pena' },
  { spanish: 'No te pierdas el centro histórico', english: 'Don\'t miss the historic center', pronunciation: 'noh teh pee-EHR-dahs ehl SEHN-troh ees-TOH-ree-koh', category: 'recommendations', audio: 'no-te-pierdas' },
  { spanish: 'Tienes que probar el ceviche', english: 'You have to try the ceviche', pronunciation: 'tee-EH-nehs keh proh-BAHR ehl seh-BEE-cheh', category: 'recommendations', audio: 'tienes-que-probar' },
  { spanish: 'Es mejor ir en temporada baja', english: 'It\'s better to go in low season', pronunciation: 'ehs meh-HOHR eer ehn tehm-poh-RAH-dah BAH-hah', category: 'recommendations', audio: 'es-mejor-ir' },
  { spanish: 'Lleva ropa cómoda', english: 'Bring comfortable clothes', pronunciation: 'YEH-bah RROH-pah KOH-moh-dah', category: 'recommendations', audio: 'lleva-ropa-comoda' },
  { spanish: 'Reserva con anticipación', english: 'Book in advance', pronunciation: 'reh-SEHR-bah kohn ahn-tee-see-pah-see-OHN', category: 'recommendations', audio: 'reserva-con-anticipacion' },
  { spanish: 'No olvides el protector solar', english: 'Don\'t forget sunscreen', pronunciation: 'noh ohl-BEE-dehs ehl proh-tehk-TOHR soh-LAHR', category: 'recommendations', audio: 'no-olvides-protector' },
  { spanish: 'Te va a encantar', english: 'You\'re going to love it', pronunciation: 'teh bah ah ehn-kahn-TAHR', category: 'recommendations', audio: 'te-va-a-encantar' },

  // === Opinions (8) ===
  { spanish: 'Fue increíble', english: 'It was incredible', pronunciation: 'fweh een-kreh-EE-bleh', category: 'opinions', audio: 'fue-increible' },
  { spanish: 'Lo mejor fue la comida', english: 'The best part was the food', pronunciation: 'loh meh-HOHR fweh lah koh-MEE-dah', category: 'opinions', audio: 'lo-mejor-fue' },
  { spanish: 'Me encantó el paisaje', english: 'I loved the scenery', pronunciation: 'meh ehn-kahn-TOH ehl pah-ee-SAH-heh', category: 'opinions', audio: 'me-encanto-el-paisaje' },
  { spanish: 'Fue una experiencia única', english: 'It was a unique experience', pronunciation: 'fweh OO-nah ehks-peh-ree-EHN-see-ah OO-nee-kah', category: 'opinions', audio: 'fue-una-experiencia' },
  { spanish: 'No me gustó el hotel', english: 'I didn\'t like the hotel', pronunciation: 'noh meh goos-TOH ehl oh-TEHL', category: 'opinions', audio: 'no-me-gusto-el-hotel' },
  { spanish: 'Quiero volver algún día', english: 'I want to go back someday', pronunciation: 'kee-EH-roh bohl-BEHR ahl-GOON DEE-ah', category: 'opinions', audio: 'quiero-volver' },
  { spanish: 'El viaje cambió mi vida', english: 'The trip changed my life', pronunciation: 'ehl bee-AH-heh kahm-bee-OH mee BEE-dah', category: 'opinions', audio: 'el-viaje-cambio' },
  { spanish: 'Fue el mejor viaje de mi vida', english: 'It was the best trip of my life', pronunciation: 'fweh ehl meh-HOHR bee-AH-heh deh mee BEE-dah', category: 'opinions', audio: 'fue-el-mejor-viaje' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L38PhraseByAudio = phraseByAudio

// === POSTCARD WRITER (unique activity) ===

export interface PostcardChallenge {
  scenario: string
  english: string
  correctMessage: string
  options: string[]
}

export const POSTCARD_CHALLENGES: PostcardChallenge[] = [
  {
    scenario: 'You hiked to the top of Machu Picchu at sunrise and the view took your breath away.',
    english: 'I visited Machu Picchu and it was the most incredible view of my life!',
    correctMessage: '¡Visité Machu Picchu y fue la vista más increíble de mi vida!',
    options: [
      '¡Visité Machu Picchu y fue la vista más increíble de mi vida!',
      'Voy a visitar Machu Picchu y será increíble.',
      'Visito Machu Picchu todos los veranos.',
      'Quiero visitar Machu Picchu algún día.',
    ],
  },
  {
    scenario: 'You spent three days in Cancún, swimming in turquoise waters and eating the best tacos.',
    english: 'I swam in the Caribbean Sea and tried amazing tacos. You have to come!',
    correctMessage: 'Nadé en el mar Caribe y probé unos tacos increíbles. ¡Tienes que venir!',
    options: [
      'Nadé en el mar Caribe y probé unos tacos increíbles. ¡Tienes que venir!',
      'Nado en el mar Caribe y como tacos todos los días.',
      'Voy a nadar en el mar Caribe mañana.',
      'Me gusta nadar en el mar y comer tacos.',
    ],
  },
  {
    scenario: 'You danced tango in the streets of Buenos Aires and the experience moved you deeply.',
    english: 'I danced tango in Buenos Aires and it was a unique experience. I loved it!',
    correctMessage: 'Bailé tango en Buenos Aires y fue una experiencia única. ¡Me encantó!',
    options: [
      'Bailé tango en Buenos Aires y fue una experiencia única. ¡Me encantó!',
      'Bailo tango en Buenos Aires cada fin de semana.',
      'Voy a bailar tango en Buenos Aires el próximo mes.',
      'Quiero bailar tango pero no sé cómo.',
    ],
  },
  {
    scenario: 'You explored the colorful streets of Cartagena and bought beautiful handmade jewelry.',
    english: 'I walked through the old city of Cartagena and bought handmade souvenirs. It\'s worth the trip!',
    correctMessage: 'Caminé por la ciudad vieja de Cartagena y compré recuerdos artesanales. ¡Vale la pena el viaje!',
    options: [
      'Caminé por la ciudad vieja de Cartagena y compré recuerdos artesanales. ¡Vale la pena el viaje!',
      'Camino por Cartagena y compro cosas bonitas.',
      'Voy a caminar por Cartagena y comprar recuerdos.',
      'Cartagena es una ciudad muy bonita para visitar.',
    ],
  },
  {
    scenario: 'You snorkeled with sea turtles in the Galápagos Islands and saw giant tortoises up close.',
    english: 'I saw giant tortoises and swam with sea turtles! It changed my life!',
    correctMessage: '¡Vi tortugas gigantes y nadé con tortugas marinas! ¡El viaje cambió mi vida!',
    options: [
      '¡Vi tortugas gigantes y nadé con tortugas marinas! ¡El viaje cambió mi vida!',
      'Veo tortugas en las Galápagos todos los años.',
      'Las Galápagos tienen muchas tortugas bonitas.',
      'Voy a ver tortugas en las Galápagos algún día.',
    ],
  },
  {
    scenario: 'You visited La Sagrada Familia in Barcelona and tried the best paella of your life.',
    english: 'I visited La Sagrada Familia and tried the best paella of my life. I recommend you go in spring!',
    correctMessage: 'Visité la Sagrada Familia y probé la mejor paella de mi vida. ¡Te recomiendo ir en primavera!',
    options: [
      'Visité la Sagrada Familia y probé la mejor paella de mi vida. ¡Te recomiendo ir en primavera!',
      'Visito la Sagrada Familia y como paella.',
      'Barcelona es una ciudad con buena comida.',
      'Voy a visitar Barcelona y comer paella pronto.',
    ],
  },
]

// === LESSON DATA ===

export const L38Data: LessonData = {
  id: 'L3.8',
  hero: {
    lessonId: 'L3.8',
    title: 'Travel Stories',
    subtitle: 'Sharing adventures and recommending destinations',
    description: 'Learn to tell travel stories in the past tense, share your experiences, give recommendations, and express opinions about destinations. Write postcards, share memories, and inspire others to explore the Spanish-speaking world!',
    image: '/images/L3.8/L3.8.jpg',
    gradient: 'from-amber-800/65 via-orange-700/55 to-rose-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '✈️', title: 'Travel Vocabulary', desc: 'Master essential travel words: destino, viaje, maleta, paseo, recuerdo, aventura, and more.' },
    { icon: '🗺️', title: 'Sharing Experiences', desc: 'Tell stories about past trips using conocí, visité, probé, nadé, subí in context.' },
    { icon: '💡', title: 'Giving Recommendations', desc: 'Recommend places with te recomiendo, deberías, vale la pena, tienes que probar.' },
    { icon: '⭐', title: 'Expressing Opinions', desc: 'Share feelings about trips: fue increíble, lo mejor fue, me encantó, quiero volver.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L2.4', label: 'Hotel Vocabulary', detail: 'Hotel words from L2.4 (reservación, habitación, recepción) set the stage for travel stories.' },
    { fromLesson: 'L2.5', label: 'Airport & Transportation', detail: 'L2.5 taught airport and transit vocab — now you\'ll narrate your complete travel experience.' },
    { fromLesson: 'L3.1', label: 'Past Tense (Pretérito)', detail: 'The preterite from L3.1 is essential here — all your travel stories happened in the past!' },
  ],

  sectionTransitions: [
    { afterSection: 'travel-vocab', text: 'Great travel vocabulary! Now let\'s talk about what you experienced.' },
    { afterSection: 'experiences', text: 'Amazing experiences! Now let\'s learn how to recommend places.' },
    { afterSection: 'recommendations', text: 'You can recommend like a pro! Let\'s express opinions about trips.' },
    { afterSection: 'dialogues', text: 'Wonderful travel conversations! Let\'s explore travel culture.' },
    { afterSection: 'cultural', text: 'Now write postcards from your dream destinations!' },
    { afterSection: 'postcard-writer', text: 'Final stretch — test your travel Spanish!' },
  ],

  personalizedVocab: [
    { spanish: 'Viajé a...', english: 'I traveled to...' },
    { spanish: 'Conocí...', english: 'I discovered...' },
    { spanish: 'Probé...', english: 'I tried...' },
    { spanish: 'Te recomiendo...', english: 'I recommend you...' },
    { spanish: 'Lo mejor fue...', english: 'The best part was...' },
    { spanish: 'Vale la pena...', english: 'It\'s worth it...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Visité las ruinas de Machu Picchu', pronunciation: 'bee-see-TEH lahs RROO-ee-nahs deh MAH-choo PEE-choo', english: 'I visited the ruins of Machu Picchu', audio: 'visite-las-ruinas', tip: 'The accent on "visité" marks the preterite first person. Without it, "visite" would be subjunctive.' },
    { spanish: 'Probé la comida local y me encantó', pronunciation: 'proh-BEH lah koh-MEE-dah loh-KAHL ee meh ehn-kahn-TOH', english: 'I tried the local food and loved it', audio: 'probe-la-comida-local', tip: '"Probé" from "probar" — regular -AR preterite. "Me encantó" uses the gustar-like pattern from earlier lessons.' },
    { spanish: 'Te recomiendo ir en verano', pronunciation: 'teh reh-koh-mee-EHN-doh eer ehn beh-RAH-noh', english: 'I recommend you go in summer', audio: 'te-recomiendo-ir', tip: '"Recomiendo" is present tense — you\'re giving the recommendation NOW about a trip you already took.' },
    { spanish: 'Fue el mejor viaje de mi vida', pronunciation: 'fweh ehl meh-HOHR bee-AH-heh deh mee BEE-dah', english: 'It was the best trip of my life', audio: 'fue-el-mejor-viaje', tip: '"Fue" from ser (it was) — same irregular preterite from L3.1. "Mejor" = best/better, always the same form.' },
    { spanish: 'No te pierdas el centro histórico', pronunciation: 'noh teh pee-EHR-dahs ehl SEHN-troh ees-TOH-ree-koh', english: 'Don\'t miss the historic center', audio: 'no-te-pierdas', tip: '"Pierdas" is subjunctive after "no" — a sneak peek at the subjunctive mood! For now, memorize this useful phrase.' },
    { spanish: 'El viaje cambió mi vida', pronunciation: 'ehl bee-AH-heh kahm-bee-OH mee BEE-dah', english: 'The trip changed my life', audio: 'el-viaje-cambio', tip: '"Cambió" — regular -AR preterite third person. The accent on -ó is crucial: "cambio" (I change) vs. "cambió" (it changed).' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'travel-vocab', label: 'Travel Vocabulary' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'opinions', label: 'Opinions' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'postcard-writer', label: 'Postcard Writer' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'travel-vocab',
      title: 'Travel Vocabulary',
      description: 'Essential words for talking about trips, destinations, and travel planning.',
      tabs: [
        { label: 'Essentials', color: 'orange', phrases: PHRASES.filter(p => p.category === 'travel-vocab').slice(0, 5) },
        { label: 'Planning & Scenery', color: 'amber', phrases: PHRASES.filter(p => p.category === 'travel-vocab').slice(5) },
      ],
    },
    {
      id: 'experiences',
      title: 'Travel Experiences',
      description: 'Tell stories about what you did on your trip using the preterite tense.',
      tabs: [
        { label: 'Sightseeing', color: 'blue', phrases: PHRASES.filter(p => p.category === 'experiences').slice(0, 5) },
        { label: 'Adventures', color: 'purple', phrases: PHRASES.filter(p => p.category === 'experiences').slice(5) },
      ],
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      description: 'Give travel advice and recommend destinations to friends and family.',
      tabs: [
        { label: 'Must-Do\'s', color: 'rose', phrases: PHRASES.filter(p => p.category === 'recommendations').slice(0, 5) },
        { label: 'Practical Tips', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'recommendations').slice(5) },
      ],
    },
    {
      id: 'opinions',
      title: 'Opinions & Feelings',
      description: 'Express how you felt about your travel experiences.',
      tabs: [
        { label: 'Positive', color: 'teal', phrases: PHRASES.filter(p => p.category === 'opinions').slice(0, 4) },
        { label: 'Reflections', color: 'amber', phrases: PHRASES.filter(p => p.category === 'opinions').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Preterite Accents in Travel Stories',
      content: 'When telling travel stories, you\'ll use tons of preterite verbs: visité, probé, nadé, caminé, compré. The accent mark on the final -É is essential! Without it, you\'d be speaking in present tense or subjunctive. Practice stressing that last syllable clearly.',
      example: 'Visité (I visited) vs. Visite (subjunctive) | Probé (I tried) vs. Probe (doesn\'t exist)',
    },
    {
      title: 'Recommendation Phrases Are Present Tense',
      content: 'A subtle but important point: when recommending places, you switch to present tense! "Te recomiendo" (I recommend), "deberías" (you should), "vale la pena" (it\'s worth it). The trip was past, but your advice is NOW. This mix of past + present is very natural.',
      example: 'Fui a Cancún (past). Te recomiendo ir (present). Fue increíble (past).',
      reviewFrom: 'L3.1',
    },
    {
      title: 'The "V" and "B" Sound',
      content: 'In Spanish, V and B sound almost identical — both are a soft "b" sound. "Viaje" (trip), "vale" (it\'s worth), "visité" (I visited), "bien" (good) all start with the same sound. Don\'t try to make V different from B — native speakers don\'t!',
      example: 'Viaje = bee-AH-heh | Vale = BAH-leh | Barcelona = bahr-seh-LOH-nah',
    },
    {
      title: 'Connected Speech in Stories',
      content: 'When telling stories naturally, words connect: "Fui a la playa" sounds like "fwee-ah-lah-PLAH-yah" as one flow. Practice linking words together instead of pausing between each one. This makes your travel stories sound much more natural and fluent.',
      example: 'Fui a un restaurante → fwee-ah-oon-rehs-tow-RAHN-teh (flowing, not choppy)',
      reviewFrom: 'L2.5',
    },
  ],

  flashcardGroups: [
    {
      key: 'travel-vocab',
      label: 'Travel Vocab',
      audioKeys: ['el-destino', 'el-viaje', 'la-maleta', 'el-paseo', 'el-recuerdo', 'la-aventura', 'el-itinerario', 'la-guia-turistica', 'el-paisaje', 'la-temporada'],
    },
    {
      key: 'experiences',
      label: 'Experiences',
      audioKeys: ['conoci-un-lugar', 'visite-las-ruinas', 'probe-la-comida-local', 'camine-por-la-ciudad', 'tome-muchas-fotos', 'nade-en-el-mar', 'subi-a-la-montana', 'me-perdi-en-las-calles', 'compre-recuerdos'],
    },
    {
      key: 'recommendations-opinions',
      label: 'Recs & Opinions',
      audioKeys: ['te-recomiendo-ir', 'deberias-visitar', 'vale-la-pena', 'tienes-que-probar', 'fue-increible', 'lo-mejor-fue', 'me-encanto-el-paisaje', 'fue-el-mejor-viaje'],
    },
  ],

  matchPairs: [
    { left: 'El destino', right: 'The destination' },
    { left: 'La maleta', right: 'The suitcase' },
    { left: 'Visité', right: 'I visited' },
    { left: 'Probé', right: 'I tried' },
    { left: 'Te recomiendo', right: 'I recommend you' },
    { left: 'Vale la pena', right: 'It\'s worth it' },
    { left: 'Fue increíble', right: 'It was incredible' },
    { left: 'Me encantó', right: 'I loved it' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Past (Preterite) vs. Present',
      instruction: 'Is this about a past trip or a current recommendation?',
      buckets: ['Past Trip', 'Present Advice'],
      items: [
        { text: 'Visité las ruinas', bucket: 'Past Trip' },
        { text: 'Probé la comida', bucket: 'Past Trip' },
        { text: 'Nadé en el mar', bucket: 'Past Trip' },
        { text: 'Me encantó el paisaje', bucket: 'Past Trip' },
        { text: 'Te recomiendo ir', bucket: 'Present Advice' },
        { text: 'Deberías visitar', bucket: 'Present Advice' },
        { text: 'Vale la pena', bucket: 'Present Advice' },
        { text: 'Tienes que probar', bucket: 'Present Advice' },
      ],
    },
    {
      title: 'Vocabulary vs. Experience',
      instruction: 'Is this a travel noun or a travel experience?',
      buckets: ['Travel Noun', 'Travel Experience'],
      items: [
        { text: 'El destino', bucket: 'Travel Noun' },
        { text: 'La maleta', bucket: 'Travel Noun' },
        { text: 'El itinerario', bucket: 'Travel Noun' },
        { text: 'El recuerdo', bucket: 'Travel Noun' },
        { text: 'Conocí un lugar', bucket: 'Travel Experience' },
        { text: 'Subí a la montaña', bucket: 'Travel Experience' },
        { text: 'Tomé muchas fotos', bucket: 'Travel Experience' },
        { text: 'Hice un tour guiado', bucket: 'Travel Experience' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-peru',
      title: 'Telling About a Trip to Peru — México City',
      location: 'México City',
      lines: [
        { speaker: 'Sofía', text: '¿A dónde fuiste de vacaciones?', audio: '/audio/L3.8/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Fui a Perú con mi familia. Visitamos Lima y Cusco.', audio: '/audio/L3.8/phrases/d1-line2.mp3', annotations: [{ phrase: 'fui', fromLesson: 'L3.1', note: 'Irregular preterite of ir from L3.1' }] },
        { speaker: 'Sofía', text: '¡Qué increíble! ¿Fueron a Machu Picchu?', audio: '/audio/L3.8/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Sí, subimos a Machu Picchu al amanecer. Fue la vista más impresionante de mi vida.', audio: '/audio/L3.8/phrases/d1-line4.mp3' },
        { speaker: 'Sofía', text: '¿Y la comida? ¿Probaron algo típico?', audio: '/audio/L3.8/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Probamos ceviche en Lima. ¡Estuvo delicioso! También probé lomo saltado.', audio: '/audio/L3.8/phrases/d1-line6.mp3' },
        { speaker: 'Sofía', text: '¿Me recomiendas ir?', audio: '/audio/L3.8/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: '¡Totalmente! Te recomiendo ir en junio o julio. El clima es perfecto. ¡Vale la pena!', audio: '/audio/L3.8/phrases/d1-line8.mp3', annotations: [{ phrase: 'te recomiendo', fromLesson: 'L3.8', note: 'Recommendation phrase — present tense advice about a past trip' }] },
        { speaker: 'Sofía', text: '¡Ya quiero ir! Voy a empezar a planear el viaje.', audio: '/audio/L3.8/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-colombia',
      title: 'Sharing a Colombia Adventure — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Valentina', text: 'Acabo de volver de Colombia. ¡Fue el mejor viaje de mi vida!', audio: '/audio/L3.8/phrases/d2-line1.mp3' },
        { speaker: 'Mateo', text: '¡No me digas! ¿Qué ciudades visitaste?', audio: '/audio/L3.8/phrases/d2-line2.mp3' },
        { speaker: 'Valentina', text: 'Fui a Cartagena, Medellín y el Eje Cafetero.', audio: '/audio/L3.8/phrases/d2-line3.mp3' },
        { speaker: 'Mateo', text: '¿Qué fue lo mejor?', audio: '/audio/L3.8/phrases/d2-line4.mp3' },
        { speaker: 'Valentina', text: 'Lo mejor fue caminar por la ciudad vieja de Cartagena. Los colores, la música, la comida...', audio: '/audio/L3.8/phrases/d2-line5.mp3', annotations: [{ phrase: 'ciudad vieja', fromLesson: 'L2.5', note: 'City navigation vocabulary from L2.5' }] },
        { speaker: 'Mateo', text: '¿Y Medellín? Dicen que es muy bonita.', audio: '/audio/L3.8/phrases/d2-line6.mp3' },
        { speaker: 'Valentina', text: 'Medellín me encantó. Tomé el metrocable y vi toda la ciudad desde arriba.', audio: '/audio/L3.8/phrases/d2-line7.mp3' },
        { speaker: 'Mateo', text: '¿Debo llevar mucha ropa?', audio: '/audio/L3.8/phrases/d2-line8.mp3', annotations: [{ phrase: 'ropa', fromLesson: 'L2.4', note: 'Packing/hotel context from L2.4' }] },
        { speaker: 'Valentina', text: 'Lleva ropa cómoda y no olvides el protector solar. ¡Hace mucho calor en la costa!', audio: '/audio/L3.8/phrases/d2-line9.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Share travel stories about Peru and Colombia with friends from different countries.',

  culturalNotes: [
    {
      title: 'The Postcard Tradition — Tarjetas Postales',
      content: 'While digital communication has largely replaced postcards, the tradition of sending "tarjetas postales" remains culturally significant in Latin America. In tourist destinations like Cartagena, Cusco, and Oaxaca, you\'ll find beautifully illustrated postcards. The act of writing one forces you to reflect on your experience and express it concisely — a perfect exercise in travel Spanish!',
    },
    {
      title: 'Backpacking Culture — La Ruta Gringa',
      content: 'Latin America has a famous backpacking route called "La Ruta Gringa" — from Mexico through Central America to Patagonia. Spanish is the key that unlocks authentic experiences along the way. Instead of tourist traps, knowing phrases like "¿Dónde comen los locales?" (Where do locals eat?) or "¿Qué me recomienda?" (What do you recommend?) opens doors to real food, real stories, and real connections.',
    },
    {
      title: 'Travel as Storytelling — Sobremesa Viajera',
      content: 'Remember "sobremesa" from L1.4 — lingering after a meal to chat? When travelers return home in Latin culture, there\'s often a "sobremesa viajera" — a long, animated conversation where they share every detail of their trip. People bring back souvenirs (recuerdos), show photos, and most importantly, tell stories. The better your preterite, the better your stories will be!',
    },
  ],
  culturalGradient: 'from-amber-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El destino" means:', options: ['The dessert', 'The destination', 'The destiny only', 'The distance'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "___ la comida local en Perú" (I tried)', answer: 'Probé' },
    { id: 3, type: 'mc', text: '"Te recomiendo ir en verano" is in what tense?', options: ['Preterite', 'Present', 'Future', 'Imperfect'], answer: 1 },
    { id: 4, type: 'tf', text: '"Vale la pena" means "it\'s worth it."', answer: true },
    { id: 5, type: 'mc', text: '"Fue increíble" means:', options: ['It will be incredible', 'It is incredible', 'It was incredible', 'It would be incredible'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "___ muchas fotos en Barcelona" (I took)', answer: 'Tomé' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, what did Diego try in Lima?', options: ['Tacos', 'Paella', 'Ceviche', 'Arepas'], answer: 2 },
    { id: 8, type: 'tf', text: 'In Spanish, "V" and "B" are pronounced differently.', answer: false },
    { id: 9, type: 'mc', text: '"La maleta" means:', options: ['The wallet', 'The suitcase', 'The map', 'The ticket'], answer: 1 },
    { id: 10, type: 'fill', text: 'Complete: "No te ___ el centro histórico" (don\'t miss)', answer: 'pierdas' },
    { id: 11, type: 'mc', text: 'In Dialogue 2, what did Valentina love most about Cartagena?', options: ['The beach', 'The old city', 'The hotel', 'The airport'], answer: 1 },
    { id: 12, type: 'tf', text: '"La Ruta Gringa" is a famous backpacking route through Latin America.', answer: true },
    { id: 13, type: 'mc', text: '"Me encantó el paisaje" means:', options: ['I love the scenery', 'I loved the scenery', 'I will love the scenery', 'The scenery enchants me'], answer: 1 },
    { id: 14, type: 'fill', text: 'Complete: "Deberías ___ el museo" (visit)', answer: 'visitar' },
    { id: 15, type: 'mc', text: '"Quiero volver algún día" means:', options: ['I returned one day', 'I want to go back someday', 'I always come back', 'I left some day'], answer: 1 },
  ],

  audioBase: '/audio/L3.8/phrases',

  uniqueActivity: {
    id: 'PostcardWriterL38',
    sectionId: 'postcard-writer',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'travel-vocab': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    experiences: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    recommendations: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    opinions: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'postcard-writer': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
