import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Airport Areas & Signs (10) ===
  { spanish: 'El aeropuerto', english: 'The airport', pronunciation: 'ehl ah-eh-roh-PWEHR-toh', category: 'areas', audio: 'el-aeropuerto' },
  { spanish: 'La terminal', english: 'The terminal', pronunciation: 'lah tehr-mee-NAHL', category: 'areas', audio: 'la-terminal' },
  { spanish: 'La puerta de embarque', english: 'The boarding gate', pronunciation: 'lah PWEHR-tah deh ehm-BAHR-keh', category: 'areas', audio: 'la-puerta-de-embarque' },
  { spanish: 'El mostrador', english: 'The counter', pronunciation: 'ehl mohs-trah-DOHR', category: 'areas', audio: 'el-mostrador' },
  { spanish: 'La sala de espera', english: 'The waiting area', pronunciation: 'lah SAH-lah deh ehs-PEH-rah', category: 'areas', audio: 'la-sala-de-espera' },
  { spanish: 'El control de seguridad', english: 'Security checkpoint', pronunciation: 'ehl kohn-TROHL deh seh-goo-ree-DAHD', category: 'areas', audio: 'el-control-de-seguridad' },
  { spanish: 'La aduana', english: 'Customs', pronunciation: 'lah ah-DWAH-nah', category: 'areas', audio: 'la-aduana' },
  { spanish: 'El reclamo de equipaje', english: 'Baggage claim', pronunciation: 'ehl reh-KLAH-moh deh eh-kee-PAH-heh', category: 'areas', audio: 'el-reclamo-de-equipaje' },
  { spanish: 'La tienda libre de impuestos', english: 'Duty-free shop', pronunciation: 'lah tee-EHN-dah LEE-breh deh eem-PWEHS-tohs', category: 'areas', audio: 'la-tienda-libre-de-impuestos' },
  { spanish: 'La salida', english: 'The exit / Departures', pronunciation: 'lah sah-LEE-dah', category: 'areas', audio: 'la-salida' },

  // === Check-in & Documents (10) ===
  { spanish: 'El pasaporte', english: 'The passport', pronunciation: 'ehl pah-sah-POHR-teh', category: 'checkin', audio: 'el-pasaporte' },
  { spanish: 'La tarjeta de embarque', english: 'The boarding pass', pronunciation: 'lah tahr-HEH-tah deh ehm-BAHR-keh', category: 'checkin', audio: 'la-tarjeta-de-embarque' },
  { spanish: 'El boleto de avión', english: 'The plane ticket', pronunciation: 'ehl boh-LEH-toh deh ah-bee-OHN', category: 'checkin', audio: 'el-boleto-de-avion' },
  { spanish: 'La maleta', english: 'The suitcase', pronunciation: 'lah mah-LEH-tah', category: 'checkin', audio: 'la-maleta' },
  { spanish: 'El equipaje de mano', english: 'Carry-on luggage', pronunciation: 'ehl eh-kee-PAH-heh deh MAH-noh', category: 'checkin', audio: 'el-equipaje-de-mano' },
  { spanish: 'Facturar el equipaje', english: 'To check in luggage', pronunciation: 'fahk-too-RAHR ehl eh-kee-PAH-heh', category: 'checkin', audio: 'facturar-el-equipaje' },
  { spanish: 'El asiento', english: 'The seat', pronunciation: 'ehl ah-see-EHN-toh', category: 'checkin', audio: 'el-asiento' },
  { spanish: 'Ventanilla o pasillo', english: 'Window or aisle', pronunciation: 'behn-tah-NEE-yah oh pah-SEE-yoh', category: 'checkin', audio: 'ventanilla-o-pasillo' },
  { spanish: 'La visa', english: 'The visa', pronunciation: 'lah BEE-sah', category: 'checkin', audio: 'la-visa' },
  { spanish: 'El vuelo', english: 'The flight', pronunciation: 'ehl BWEH-loh', category: 'checkin', audio: 'el-vuelo' },

  // === On the Plane (8) ===
  { spanish: 'Abrocharse el cinturón', english: 'To fasten the seatbelt', pronunciation: 'ah-broh-CHAHR-seh ehl seen-too-ROHN', category: 'plane', audio: 'abrocharse-el-cinturon' },
  { spanish: 'El despegue', english: 'Takeoff', pronunciation: 'ehl dehs-PEH-geh', category: 'plane', audio: 'el-despegue' },
  { spanish: 'El aterrizaje', english: 'Landing', pronunciation: 'ehl ah-teh-rree-SAH-heh', category: 'plane', audio: 'el-aterrizaje' },
  { spanish: 'El piloto', english: 'The pilot', pronunciation: 'ehl pee-LOH-toh', category: 'plane', audio: 'el-piloto' },
  { spanish: 'El auxiliar de vuelo', english: 'The flight attendant', pronunciation: 'ehl owk-see-lee-AHR deh BWEH-loh', category: 'plane', audio: 'el-auxiliar-de-vuelo' },
  { spanish: 'La turbulencia', english: 'Turbulence', pronunciation: 'lah toor-boo-LEHN-see-ah', category: 'plane', audio: 'la-turbulencia' },
  { spanish: 'El retraso', english: 'The delay', pronunciation: 'ehl reh-TRAH-soh', category: 'plane', audio: 'el-retraso' },
  { spanish: 'La escala', english: 'The layover / stopover', pronunciation: 'lah ehs-KAH-lah', category: 'plane', audio: 'la-escala' },

  // === Useful Phrases (10) ===
  { spanish: '¿A qué hora sale el vuelo?', english: 'What time does the flight leave?', pronunciation: 'ah keh OH-rah SAH-leh ehl BWEH-loh', category: 'phrases', audio: 'a-que-hora-sale-el-vuelo' },
  { spanish: '¿Dónde está la puerta cinco?', english: 'Where is gate five?', pronunciation: 'DOHN-deh ehs-TAH lah PWEHR-tah SEEN-koh', category: 'phrases', audio: 'donde-esta-la-puerta-cinco' },
  { spanish: 'Mi vuelo tiene retraso', english: 'My flight is delayed', pronunciation: 'mee BWEH-loh tee-EH-neh reh-TRAH-soh', category: 'phrases', audio: 'mi-vuelo-tiene-retraso' },
  { spanish: 'Perdí mi vuelo', english: 'I missed my flight', pronunciation: 'pehr-DEE mee BWEH-loh', category: 'phrases', audio: 'perdi-mi-vuelo' },
  { spanish: '¿Cuánto pesa la maleta?', english: 'How much does the suitcase weigh?', pronunciation: 'KWAHN-toh PEH-sah lah mah-LEH-tah', category: 'phrases', audio: 'cuanto-pesa-la-maleta' },
  { spanish: 'Quiero un asiento de ventanilla', english: 'I want a window seat', pronunciation: 'kee-EH-roh oon ah-see-EHN-toh deh behn-tah-NEE-yah', category: 'phrases', audio: 'quiero-un-asiento-de-ventanilla' },
  { spanish: '¿Tiene conexión wifi?', english: 'Do you have wifi?', pronunciation: 'tee-EH-neh koh-nehk-see-OHN WEE-fee', category: 'phrases', audio: 'tiene-conexion-wifi' },
  { spanish: 'Vuelo directo', english: 'Direct flight', pronunciation: 'BWEH-loh dee-REHK-toh', category: 'phrases', audio: 'vuelo-directo' },
  { spanish: 'Ida y vuelta', english: 'Round trip', pronunciation: 'EE-dah ee BWEHL-tah', category: 'phrases', audio: 'ida-y-vuelta' },
  { spanish: 'Solo ida', english: 'One way', pronunciation: 'SOH-loh EE-dah', category: 'phrases', audio: 'solo-ida' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L25PhraseByAudio = phraseByAudio

// === BOARDING PASS SCENARIOS (unique activity) ===

export interface BoardingPassScenario {
  passengerName: string
  flight: string
  from: string
  to: string
  gate: string
  seat: string
  departure: string
  boarding: string
  question: string
  questionEnglish: string
  correctAnswer: string
  options: string[]
}

export const BOARDING_PASS_SCENARIOS: BoardingPassScenario[] = [
  {
    passengerName: 'María López',
    flight: 'AV 204',
    from: 'Bogotá (BOG)',
    to: 'Ciudad de México (MEX)',
    gate: 'B12',
    seat: '14A',
    departure: '10:30 AM',
    boarding: '9:50 AM',
    question: '¿A qué hora es el embarque?',
    questionEnglish: 'What time is boarding?',
    correctAnswer: '9:50 AM',
    options: ['9:50 AM', '10:30 AM', '14:00 PM', '12:30 PM'],
  },
  {
    passengerName: 'Carlos Ruiz',
    flight: 'LA 531',
    from: 'Lima (LIM)',
    to: 'Buenos Aires (EZE)',
    gate: 'C7',
    seat: '22F',
    departure: '3:15 PM',
    boarding: '2:30 PM',
    question: '¿Cuál es la puerta de embarque?',
    questionEnglish: 'What is the boarding gate?',
    correctAnswer: 'C7',
    options: ['C7', 'B12', 'A3', 'D9'],
  },
  {
    passengerName: 'Ana García',
    flight: 'AM 456',
    from: 'Cancún (CUN)',
    to: 'Madrid (MAD)',
    gate: 'A3',
    seat: '8C',
    departure: '11:45 PM',
    boarding: '11:00 PM',
    question: '¿Cuál es el asiento de Ana?',
    questionEnglish: 'What is Ana\'s seat?',
    correctAnswer: '8C',
    options: ['8C', '22F', '14A', '3B'],
  },
  {
    passengerName: 'Roberto Díaz',
    flight: 'IB 6843',
    from: 'Madrid (MAD)',
    to: 'Santiago (SCL)',
    gate: 'D9',
    seat: '3B',
    departure: '6:00 AM',
    boarding: '5:15 AM',
    question: '¿A dónde va Roberto?',
    questionEnglish: 'Where is Roberto going?',
    correctAnswer: 'Santiago (SCL)',
    options: ['Santiago (SCL)', 'Madrid (MAD)', 'Bogotá (BOG)', 'Lima (LIM)'],
  },
  {
    passengerName: 'Lucía Fernández',
    flight: 'CM 720',
    from: 'Panamá (PTY)',
    to: 'Medellín (MDE)',
    gate: 'E2',
    seat: '19D',
    departure: '1:20 PM',
    boarding: '12:40 PM',
    question: '¿Cuál es el número de vuelo?',
    questionEnglish: 'What is the flight number?',
    correctAnswer: 'CM 720',
    options: ['CM 720', 'AV 204', 'LA 531', 'AM 456'],
  },
  {
    passengerName: 'Diego Morales',
    flight: 'AR 1133',
    from: 'Buenos Aires (EZE)',
    to: 'Bogotá (BOG)',
    gate: 'F5',
    seat: '27A',
    departure: '8:45 PM',
    boarding: '8:00 PM',
    question: '¿De dónde sale el vuelo?',
    questionEnglish: 'Where does the flight depart from?',
    correctAnswer: 'Buenos Aires (EZE)',
    options: ['Buenos Aires (EZE)', 'Bogotá (BOG)', 'Panamá (PTY)', 'Cancún (CUN)'],
  },
]

// === LESSON DATA ===

export const L25Data: LessonData = {
  id: 'L2.5',
  hero: {
    lessonId: 'L2.5',
    title: 'At the Airport',
    subtitle: 'Flights, check-in & boarding',
    description: 'Learn to navigate an airport in Spanish — from checking in and going through security to boarding your flight. Essential vocabulary for any trip to a Spanish-speaking country.',
    image: '/images/L2.5/L2.5.jpg',
    gradient: 'from-slate-800/65 via-blue-700/55 to-sky-700/65',
    accentColor: 'sky-200',
  },

  objectives: [
    { icon: '✈️', title: 'Navigate the Airport', desc: 'Find your way through terminals, gates, security, and customs.' },
    { icon: '🎫', title: 'Check In for a Flight', desc: 'Handle check-in, choose your seat, and check your luggage.' },
    { icon: '��', title: 'Board the Plane', desc: 'Understand boarding announcements and in-flight vocabulary.' },
    { icon: '🗣️', title: 'Handle Common Situations', desc: 'Ask about delays, find your gate, and report lost luggage.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.3', label: 'Numbers & Time', detail: 'Gate numbers, flight times, and seat numbers all use numbers and time from L1.3.' },
    { fromLesson: 'L1.5', label: 'Getting Around', detail: '"¿Dónde está...?" and directions from L1.5 help you navigate the airport.' },
    { fromLesson: 'L2.4', label: 'Hotel Vocabulary', detail: '"El pasaporte," "el equipaje," and "la maleta" from L2.4 return at the airport.' },
  ],

  sectionTransitions: [
    { afterSection: 'airport-areas', text: 'You know the airport layout — now let\u2019s get your documents ready!' },
    { afterSection: 'checkin-docs', text: 'Documents ready — time to learn what happens on the plane.' },
    { afterSection: 'on-plane', text: 'You\u2019re aboard! Now let\u2019s practice the phrases you\u2019ll need most.' },
    { afterSection: 'dialogues', text: 'Great airport conversations! Let\u2019s discover airport culture in Latin America.' },
    { afterSection: 'cultural', text: 'Now put it all together — read a real boarding pass!' },
    { afterSection: 'boarding-pass', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El vuelo', english: 'The flight' },
    { spanish: 'La puerta de embarque', english: 'The boarding gate' },
    { spanish: '¿A qué hora sale...?', english: 'What time does... leave?' },
    { spanish: 'El retraso', english: 'The delay' },
    { spanish: 'Ida y vuelta', english: 'Round trip' },
    { spanish: 'El asiento', english: 'The seat' },
  ],

  pronunciationChallenges: [
    { spanish: '¿Dónde está la puerta B12?', pronunciation: 'DOHN-deh ehs-TAH lah PWEHR-tah beh DOH-seh', english: 'Where is gate B12?', audio: 'donde-esta-la-puerta-b12', tip: '"Puerta" has the UE diphthong: PWEHR-tah. Gate numbers use letters + numbers.' },
    { spanish: 'Mi vuelo sale a las tres', pronunciation: 'mee BWEH-loh SAH-leh ah lahs trehs', english: 'My flight leaves at three', audio: 'mi-vuelo-sale-a-las-tres', tip: '"Vuelo" has the UE diphthong: BWEH-loh. "Sale" = it leaves (irregular salir).' },
    { spanish: 'Quiero facturar dos maletas', pronunciation: 'kee-EH-roh fahk-too-RAHR dohs mah-LEH-tahs', english: 'I want to check two suitcases', audio: 'quiero-facturar-dos-maletas', tip: '"Facturar" is the verb for checking luggage. Stress the last syllable: fahk-too-RAHR.' },
    { spanish: 'El vuelo tiene una escala', pronunciation: 'ehl BWEH-loh tee-EH-neh OO-nah ehs-KAH-lah', english: 'The flight has a layover', audio: 'el-vuelo-tiene-una-escala', tip: '"Escala" = layover/stopover. "Tiene" from L2.4 — tee-EH-neh.' },
    { spanish: 'Ida y vuelta a Bogotá', pronunciation: 'EE-dah ee BWEHL-tah ah boh-goh-TAH', english: 'Round trip to Bogotá', audio: 'ida-y-vuelta-a-bogota', tip: '"Ida" = one way, "vuelta" = return. Together = round trip. Both have clean vowels.' },
    { spanish: 'Perdí mi equipaje de mano', pronunciation: 'pehr-DEE mee eh-kee-PAH-heh deh MAH-noh', english: 'I lost my carry-on', audio: 'perdi-mi-equipaje-de-mano', tip: '"Perdí" = I lost (past tense). "Equipaje" — the J makes an "H" sound (L2.4).' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'airport-areas', label: 'Airport Areas' },
    { id: 'checkin-docs', label: 'Check-in & Documents' },
    { id: 'on-plane', label: 'On the Plane' },
    { id: 'useful-phrases', label: 'Useful Phrases' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'airport-sorting', label: 'Airport Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'boarding-pass', label: 'Boarding Pass' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'airport-areas',
      title: 'Airport Areas & Signs',
      description: 'Navigate the airport like a pro. These are the key areas you\u2019ll encounter.',
      tabs: [
        { label: 'Inside the Terminal', color: 'blue', phrases: PHRASES.filter(p => p.category === 'areas').slice(0, 5) },
        { label: 'Security & Beyond', color: 'teal', phrases: PHRASES.filter(p => p.category === 'areas').slice(5) },
      ],
    },
    {
      id: 'checkin-docs',
      title: 'Check-in & Documents',
      description: 'Everything you need to check in for your flight and board the plane.',
      tabs: [
        { label: 'Documents', color: 'amber', phrases: PHRASES.filter(p => p.category === 'checkin').slice(0, 5) },
        { label: 'Luggage & Seats', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'checkin').slice(5) },
      ],
    },
    {
      id: 'on-plane',
      title: 'On the Plane',
      description: 'In-flight vocabulary — from takeoff to landing.',
      tabs: [
        { label: 'Flight Basics', color: 'blue', phrases: PHRASES.filter(p => p.category === 'plane').slice(0, 4) },
        { label: 'Crew & Situations', color: 'rose', phrases: PHRASES.filter(p => p.category === 'plane').slice(4) },
      ],
    },
    {
      id: 'useful-phrases',
      title: 'Useful Airport Phrases',
      description: 'Practical phrases for common airport situations.',
      tabs: [
        { label: 'Questions & Requests', color: 'purple', phrases: PHRASES.filter(p => p.category === 'phrases').slice(0, 5), columns: 2 },
        { label: 'Tickets & Trips', color: 'orange', phrases: PHRASES.filter(p => p.category === 'phrases').slice(5), columns: 2 },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: '"Vuelo" — The UE Diphthong at the Airport',
      content: 'You\u2019ll hear "vuelo" (flight) constantly at the airport. The UE diphthong sounds like "WEH": BWEH-loh. You already know this from "puerta" (PWEHR-tah) in L2.4 and "bueno" (BWEH-noh) from L1.2. At the airport, listen for: vuelo, puerta, vuelta.',
      example: 'Vuelo = BWEH-loh | Puerta = PWEHR-tah | Vuelta = BWEHL-tah',
      reviewFrom: 'L1.1',
    },
    {
      title: '"Equipaje" — The J Sound Review',
      content: 'From L2.4 (hotel) you learned "equipaje." At the airport, you\u2019ll use it even more: "equipaje de mano" (carry-on), "reclamo de equipaje" (baggage claim), "facturar el equipaje" (check luggage). Remember: J always sounds like English H.',
      example: 'Equipaje = eh-kee-PAH-heh | Aterrizaje = ah-teh-rree-SAH-heh',
      reviewFrom: 'L2.4',
    },
    {
      title: '"Embarque" vs. "Embarcar"',
      content: '"Embarque" (boarding) is the noun, "embarcar" (to board) is the verb. The QU makes a "K" sound — never pronounce the U! "Puerta de embarque" = boarding gate. "Tarjeta de embarque" = boarding pass. The stress falls on BAR: ehm-BAHR-keh.',
      example: 'Embarque = ehm-BAHR-keh | Embarcar = ehm-bahr-KAHR',
    },
    {
      title: '"Facturar" — A False Friend',
      content: '"Facturar" looks like "factory" but means "to check in (luggage)" at the airport. In other contexts it means "to invoice." At the airport counter, you\u2019ll hear: "¿Va a facturar equipaje?" (Are you checking luggage?). The stress is on the last syllable: fahk-too-RAHR.',
      example: 'Facturar = fahk-too-RAHR | ¿Va a facturar? = Are you checking luggage?',
    },
  ],

  flashcardGroups: [
    {
      key: 'airport-areas',
      label: 'Airport Areas',
      audioKeys: ['el-aeropuerto', 'la-terminal', 'la-puerta-de-embarque', 'el-mostrador', 'la-sala-de-espera', 'el-control-de-seguridad', 'la-aduana', 'el-reclamo-de-equipaje', 'la-salida'],
    },
    {
      key: 'docs-luggage',
      label: 'Documents & Luggage',
      audioKeys: ['el-pasaporte', 'la-tarjeta-de-embarque', 'el-boleto-de-avion', 'la-maleta', 'el-equipaje-de-mano', 'facturar-el-equipaje', 'el-asiento', 'ventanilla-o-pasillo', 'el-vuelo'],
    },
    {
      key: 'flight-phrases',
      label: 'Flight & Phrases',
      audioKeys: ['el-despegue', 'el-aterrizaje', 'el-retraso', 'la-escala', 'ida-y-vuelta', 'solo-ida', 'vuelo-directo', 'a-que-hora-sale-el-vuelo', 'perdi-mi-vuelo'],
    },
  ],

  matchPairs: [
    { left: 'La puerta de embarque', right: 'Boarding gate' },
    { left: 'El vuelo', right: 'The flight' },
    { left: 'La tarjeta de embarque', right: 'Boarding pass' },
    { left: 'El aterrizaje', right: 'Landing' },
    { left: 'Ida y vuelta', right: 'Round trip' },
    { left: 'El retraso', right: 'The delay' },
    { left: 'La aduana', right: 'Customs' },
    { left: 'El equipaje de mano', right: 'Carry-on luggage' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Before Security vs. After Security',
      instruction: 'Where do you find these? Before or after the security checkpoint?',
      buckets: ['Before Security ✈️', 'After Security 🛫'],
      items: [
        { text: 'El mostrador de check-in', bucket: 'Before Security ✈️' },
        { text: 'Facturar el equipaje', bucket: 'Before Security ✈️' },
        { text: 'El reclamo de equipaje', bucket: 'Before Security ✈️' },
        { text: 'La entrada principal', bucket: 'Before Security ✈️' },
        { text: 'La puerta de embarque', bucket: 'After Security 🛫' },
        { text: 'La sala de espera', bucket: 'After Security 🛫' },
        { text: 'La tienda libre de impuestos', bucket: 'After Security 🛫' },
        { text: 'Embarcar el avión', bucket: 'After Security 🛫' },
      ],
    },
    {
      title: 'El vs. La — Airport Edition',
      instruction: 'Is it EL (masculine) or LA (feminine)?',
      buckets: ['El (masculino)', 'La (femenino)'],
      items: [
        { text: 'aeropuerto', bucket: 'El (masculino)' },
        { text: 'vuelo', bucket: 'El (masculino)' },
        { text: 'asiento', bucket: 'El (masculino)' },
        { text: 'piloto', bucket: 'El (masculino)' },
        { text: 'retraso', bucket: 'El (masculino)' },
        { text: 'terminal', bucket: 'La (femenino)' },
        { text: 'maleta', bucket: 'La (femenino)' },
        { text: 'aduana', bucket: 'La (femenino)' },
        { text: 'escala', bucket: 'La (femenino)' },
        { text: 'turbulencia', bucket: 'La (femenino)' },
      ],
    },
  ],
  sortSectionId: 'airport-sorting',
  sortTitle: 'Airport Sorting',

  dialogues: [
    {
      id: 'dialogue-checkin',
      title: 'Checking In — Mexico City Airport',
      location: 'Ciudad de México',
      lines: [
        { speaker: 'Agente', text: 'Buenos días. ¿Me permite su pasaporte y boleto, por favor?', audio: '/audio/L2.5/phrases/d1-line1.mp3', annotations: [{ phrase: 'Buenos días', fromLesson: 'L1.2', note: 'Greeting from L1.2' }] },
        { speaker: 'Pasajero', text: 'Aquí tiene. Vuelo AM cuatrocientos cincuenta y seis a Madrid.', audio: '/audio/L2.5/phrases/d1-line2.mp3', annotations: [{ phrase: 'cuatrocientos cincuenta y seis', fromLesson: 'L1.3', note: 'Numbers from L1.3' }] },
        { speaker: 'Agente', text: '¿Va a facturar equipaje?', audio: '/audio/L2.5/phrases/d1-line3.mp3' },
        { speaker: 'Pasajero', text: 'Sí, una maleta. Y tengo un equipaje de mano.', audio: '/audio/L2.5/phrases/d1-line4.mp3' },
        { speaker: 'Agente', text: 'Ponga la maleta en la báscula, por favor. ¿Ventanilla o pasillo?', audio: '/audio/L2.5/phrases/d1-line5.mp3' },
        { speaker: 'Pasajero', text: 'Ventanilla, por favor.', audio: '/audio/L2.5/phrases/d1-line6.mp3' },
        { speaker: 'Agente', text: 'Tiene el asiento catorce A. La puerta de embarque es la B doce. El embarque comienza a las diez y media.', audio: '/audio/L2.5/phrases/d1-line7.mp3' },
        { speaker: 'Pasajero', text: 'Gracias. ¿Dónde está el control de seguridad?', audio: '/audio/L2.5/phrases/d1-line8.mp3', annotations: [{ phrase: '��Dónde está', fromLesson: 'L1.5', note: 'Asking location from L1.5' }] },
        { speaker: 'Agente', text: 'Siga derecho y después a la izquierda. ¡Buen vuelo!', audio: '/audio/L2.5/phrases/d1-line9.mp3', annotations: [{ phrase: 'a la izquierda', fromLesson: 'L1.5', note: 'Directions from L1.5' }] },
      ],
    },
    {
      id: 'dialogue-delay',
      title: 'A Flight Delay — Bogotá',
      location: 'Bogot��',
      lines: [
        { speaker: 'Pasajera', text: 'Disculpe, ¿el vuelo AV doscientos cuatro tiene retraso?', audio: '/audio/L2.5/phrases/d2-line1.mp3' },
        { speaker: 'Agente', text: 'Sí, señora. El vuelo tiene un retraso de dos horas por el mal tiempo.', audio: '/audio/L2.5/phrases/d2-line2.mp3', annotations: [{ phrase: 'mal tiempo', fromLesson: 'L2.2', note: 'Weather from L2.2' }] },
        { speaker: 'Pasajera', text: '¿A qué hora sale ahora?', audio: '/audio/L2.5/phrases/d2-line3.mp3', annotations: [{ phrase: '¿A qué hora', fromLesson: 'L1.3', note: 'Asking time from L1.3' }] },
        { speaker: 'Agente', text: 'Sale a las doce y media en vez de las diez y media. La puerta cambió a C siete.', audio: '/audio/L2.5/phrases/d2-line4.mp3' },
        { speaker: 'Pasajera', text: '¿Puedo ir a la tienda libre de impuestos mientras espero?', audio: '/audio/L2.5/phrases/d2-line5.mp3' },
        { speaker: 'Agente', text: 'Claro, está aquí a la derecha. Le recomiendo estar en la puerta treinta minutos antes del embarque.', audio: '/audio/L2.5/phrases/d2-line6.mp3', annotations: [{ phrase: 'a la derecha', fromLesson: 'L1.5', note: 'Directions from L1.5' }] },
        { speaker: 'Pasajera', text: 'Perfecto, gracias. ¿Hay wifi en la sala de espera?', audio: '/audio/L2.5/phrases/d2-line7.mp3', annotations: [{ phrase: 'wifi', fromLesson: 'L2.4', note: 'Hotel/service vocab from L2.4' }] },
        { speaker: 'Agente', text: 'Sí, el wifi es gratis. La contraseña está en las pantallas.', audio: '/audio/L2.5/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Listen to a smooth check-in at Mexico City airport and handle a flight delay in Bogotá.',

  culturalNotes: [
    {
      title: 'Aeropuertos en América Latina',
      content: 'Latin America has world-class airports. Mexico City\u2019s AICM is the busiest in Latin America. Bogotá\u2019s El Dorado, Lima\u2019s Jorge Chávez, and Santiago\u2019s Arturo Merino Benítez are major hubs. Most airports have bilingual signs (Spanish + English), but knowing Spanish helps enormously with announcements, which are often only in Spanish!',
    },
    {
      title: 'Inmigración y Aduana — What to Expect',
      content: 'When arriving in a Latin American country, you\u2019ll go through "migración" (immigration) and "aduana" (customs). Officers may ask: "¿Cuál es el motivo de su viaje?" (What is the purpose of your trip?) — common answers: "turismo" (tourism), "negocios" (business), "visitar familia" (visiting family). Many countries now use electronic kiosks, but human officers still appreciate a "buenos días" and a smile!',
    },
    {
      title: 'Sobrepeso de Equipaje — The Weight Limit',
      content: 'Luggage weight limits vary by airline, but most Latin American carriers allow 23 kg (50 lbs) for checked bags. If your bag is overweight, you\u2019ll hear: "Su maleta tiene sobrepeso" (Your suitcase is overweight). The fee can be expensive! A useful trick: reorganize items into your carry-on. "¿Puedo reorganizar mi equipaje?" (Can I reorganize my luggage?) — most agents will say yes.',
    },
  ],
  culturalGradient: 'from-slate-50 to-sky-50',

  quiz: [
    { id: 1, type: 'mc', text: 'What does "la puerta de embarque" mean?', options: ['The exit door', 'The boarding gate', 'The emergency door', 'The entrance'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Quiero un asiento de ___" (window)', answer: ['ventanilla', 'Ventanilla'] },
    { id: 3, type: 'mc', text: '"Facturar el equipaje" means:', options: ['To lose luggage', 'To carry luggage', 'To check in luggage', 'To buy luggage'], answer: 2 },
    { id: 4, type: 'tf', text: '"Ida y vuelta" means a one-way ticket.', answer: false },
    { id: 5, type: 'mc', text: 'Your flight is delayed. You say:', options: ['Mi vuelo tiene retraso', 'Mi vuelo tiene prisa', 'Mi vuelo tiene hambre', 'Mi vuelo tiene sueño'], answer: 0 },
    { id: 6, type: 'fill', text: 'Complete: "¿A qué hora ___ el vuelo?" (leaves)', answer: ['sale', 'Sale'] },
    { id: 7, type: 'mc', text: '"El aterrizaje" is:', options: ['Takeoff', 'Turbulence', 'Landing', 'A layover'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what seat did the passenger get?', options: ['14A — window', '14C — aisle', '22F — window', '8B — middle'], answer: 0 },
    { id: 9, type: 'tf', text: '"El equipaje de mano" is carry-on luggage.', answer: true },
    { id: 10, type: 'mc', text: 'Where do you pick up checked luggage?', options: ['La puerta de embarque', 'El reclamo de equipaje', 'El control de seguridad', 'La sala de espera'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "¿Me permite su ___, por favor?" (passport)', answer: 'pasaporte' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, why was the flight delayed?', options: ['Mechanical problems', 'Bad weather', 'No pilot', 'Too many passengers'], answer: 1 },
    { id: 13, type: 'mc', text: '"La escala" means:', options: ['The stairs', 'The scale', 'The layover', 'The escalator'], answer: 2 },
    { id: 14, type: 'tf', text: 'At most Latin American airports, announcements are only in English.', answer: false },
    { id: 15, type: 'mc', text: '"Vuelo directo" means:', options: ['Direct flight', 'Fast flight', 'First flight', 'Last flight'], answer: 0 },
  ],

  audioBase: '/audio/L2.5/phrases',

  uniqueActivity: {
    id: 'BoardingPassL25',
    sectionId: 'boarding-pass',
    sectionColor: 'bg-sky-50/40',
    sectionBorder: 'border-sky-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    'airport-areas': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'checkin-docs': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'on-plane': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'useful-phrases': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'airport-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'boarding-pass': { bg: 'bg-sky-50/40', border: 'border-sky-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
