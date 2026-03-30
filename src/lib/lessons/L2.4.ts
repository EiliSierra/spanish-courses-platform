import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Hotel Rooms & Areas (10) ===
  { spanish: 'La habitación', english: 'The room', pronunciation: 'lah ah-bee-tah-see-OHN', category: 'rooms', audio: 'la-habitacion' },
  { spanish: 'La recepción', english: 'The front desk', pronunciation: 'lah reh-sehp-see-OHN', category: 'rooms', audio: 'la-recepcion' },
  { spanish: 'El lobby', english: 'The lobby', pronunciation: 'ehl LOH-bee', category: 'rooms', audio: 'el-lobby' },
  { spanish: 'La piscina', english: 'The pool', pronunciation: 'lah pee-SEE-nah', category: 'rooms', audio: 'la-piscina' },
  { spanish: 'El elevador', english: 'The elevator', pronunciation: 'ehl eh-leh-bah-DOHR', category: 'rooms', audio: 'el-elevador' },
  { spanish: 'Las escaleras', english: 'The stairs', pronunciation: 'lahs ehs-kah-LEH-rahs', category: 'rooms', audio: 'las-escaleras' },
  { spanish: 'El estacionamiento', english: 'The parking lot', pronunciation: 'ehl ehs-tah-see-oh-nah-mee-EHN-toh', category: 'rooms', audio: 'el-estacionamiento' },
  { spanish: 'El restaurante del hotel', english: 'The hotel restaurant', pronunciation: 'ehl rehs-tow-RAHN-teh dehl oh-TEHL', category: 'rooms', audio: 'el-restaurante-del-hotel' },
  { spanish: 'El gimnasio', english: 'The gym', pronunciation: 'ehl heem-NAH-see-oh', category: 'rooms', audio: 'el-gimnasio' },
  { spanish: 'La terraza', english: 'The terrace', pronunciation: 'lah teh-RRAH-sah', category: 'rooms', audio: 'la-terraza' },

  // === Room Features & Amenities (10) ===
  { spanish: 'La cama doble', english: 'The double bed', pronunciation: 'lah KAH-mah DOH-bleh', category: 'amenities', audio: 'la-cama-doble' },
  { spanish: 'La almohada', english: 'The pillow', pronunciation: 'lah ahl-moh-AH-dah', category: 'amenities', audio: 'la-almohada' },
  { spanish: 'La toalla', english: 'The towel', pronunciation: 'lah toh-AH-yah', category: 'amenities', audio: 'la-toalla' },
  { spanish: 'El aire acondicionado', english: 'The air conditioning', pronunciation: 'ehl AH-ee-reh ah-kohn-dee-see-oh-NAH-doh', category: 'amenities', audio: 'el-aire-acondicionado' },
  { spanish: 'La llave de la habitación', english: 'The room key', pronunciation: 'lah YAH-beh deh lah ah-bee-tah-see-OHN', category: 'amenities', audio: 'la-llave-de-la-habitacion' },
  { spanish: 'La caja fuerte', english: 'The safe', pronunciation: 'lah KAH-hah FWEHR-teh', category: 'amenities', audio: 'la-caja-fuerte' },
  { spanish: 'El wifi', english: 'The wifi', pronunciation: 'ehl WEE-fee', category: 'amenities', audio: 'el-wifi' },
  { spanish: 'La vista al mar', english: 'The ocean view', pronunciation: 'lah BEES-tah ahl mahr', category: 'amenities', audio: 'la-vista-al-mar' },
  { spanish: 'El balcón', english: 'The balcony', pronunciation: 'ehl bahl-KOHN', category: 'amenities', audio: 'el-balcon' },
  { spanish: 'El minibar', english: 'The minibar', pronunciation: 'ehl mee-nee-BAHR', category: 'amenities', audio: 'el-minibar' },

  // === Check-in & Check-out (10) ===
  { spanish: 'La reservación', english: 'The reservation', pronunciation: 'lah reh-sehr-bah-see-OHN', category: 'checkin', audio: 'la-reservacion' },
  { spanish: 'Registrarse', english: 'To check in', pronunciation: 'reh-hees-TRAHR-seh', category: 'checkin', audio: 'registrarse' },
  { spanish: 'La salida', english: 'Check-out', pronunciation: 'lah sah-LEE-dah', category: 'checkin', audio: 'la-salida' },
  { spanish: 'El pasaporte', english: 'The passport', pronunciation: 'ehl pah-sah-POHR-teh', category: 'checkin', audio: 'el-pasaporte' },
  { spanish: 'La tarjeta de crédito', english: 'The credit card', pronunciation: 'lah tahr-HEH-tah deh KREH-dee-toh', category: 'checkin', audio: 'la-tarjeta-de-credito' },
  { spanish: 'Tres noches', english: 'Three nights', pronunciation: 'trehs NOH-chehs', category: 'checkin', audio: 'tres-noches' },
  { spanish: 'El huésped', english: 'The guest', pronunciation: 'ehl WEHS-pehd', category: 'checkin', audio: 'el-huesped' },
  { spanish: 'El equipaje', english: 'The luggage', pronunciation: 'ehl eh-kee-PAH-heh', category: 'checkin', audio: 'el-equipaje' },
  { spanish: 'La maleta', english: 'The suitcase', pronunciation: 'lah mah-LEH-tah', category: 'checkin', audio: 'la-maleta' },
  { spanish: 'La propina', english: 'The tip', pronunciation: 'lah proh-PEE-nah', category: 'checkin', audio: 'la-propina' },

  // === Requests & Problems (8) ===
  { spanish: 'Necesito más toallas', english: 'I need more towels', pronunciation: 'neh-seh-SEE-toh mahs toh-AH-yahs', category: 'requests', audio: 'necesito-mas-toallas' },
  { spanish: 'No funciona', english: 'It does not work', pronunciation: 'noh foon-see-OH-nah', category: 'requests', audio: 'no-funciona' },
  { spanish: '¿Puede ayudarme?', english: 'Can you help me?', pronunciation: 'PWEH-deh ah-yoo-DAHR-meh', category: 'requests', audio: 'puede-ayudarme' },
  { spanish: 'Hace mucho calor', english: 'It is very hot', pronunciation: 'AH-seh MOO-choh kah-LOHR', category: 'requests', audio: 'hace-mucho-calor' },
  { spanish: 'No hay agua caliente', english: 'There is no hot water', pronunciation: 'noh ah-ee AH-gwah kah-lee-EHN-teh', category: 'requests', audio: 'no-hay-agua-caliente' },
  { spanish: 'Hay mucho ruido', english: 'There is a lot of noise', pronunciation: 'ah-ee MOO-choh RRWEE-doh', category: 'requests', audio: 'hay-mucho-ruido' },
  { spanish: '¿A qué hora es el desayuno?', english: 'What time is breakfast?', pronunciation: 'ah keh OH-rah ehs ehl deh-sah-YOO-noh', category: 'requests', audio: 'a-que-hora-es-el-desayuno' },
  { spanish: '¿Tienen servicio de lavandería?', english: 'Do you have laundry service?', pronunciation: 'tee-EH-nehn sehr-BEE-see-oh deh lah-bahn-deh-REE-ah', category: 'requests', audio: 'tienen-servicio-de-lavanderia' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L24PhraseByAudio = phraseByAudio

// === HOTEL CHECK-IN SCENARIOS (unique activity) ===

export interface HotelCheckinScenario {
  guestRequest: string
  english: string
  correctRoom: string
  options: string[]
}

export const HOTEL_CHECKIN_SCENARIOS: HotelCheckinScenario[] = [
  {
    guestRequest: '"Necesito una cama doble y vista al mar."',
    english: '"I need a double bed and ocean view."',
    correctRoom: 'Habitación con vista al mar',
    options: ['Habitación con vista al mar', 'Habitación estándar', 'Habitación individual', 'Habitación con balcón'],
  },
  {
    guestRequest: '"Somos dos. Una habitación con dos camas, por favor."',
    english: '"There are two of us. A room with two beds, please."',
    correctRoom: 'Habitación doble',
    options: ['Habitación doble', 'Habitación individual', 'Suite con minibar', 'Habitación con piscina'],
  },
  {
    guestRequest: '"Viajo solo. Necesito wifi y un escritorio."',
    english: '"I\'m traveling alone. I need wifi and a desk."',
    correctRoom: 'Habitación ejecutiva',
    options: ['Habitación ejecutiva', 'Suite familiar', 'Habitación sin wifi', 'Habitación doble'],
  },
  {
    guestRequest: '"Somos una familia. Necesitamos dos camas y piscina."',
    english: '"We are a family. We need two beds and a pool."',
    correctRoom: 'Suite familiar con piscina',
    options: ['Suite familiar con piscina', 'Habitación individual', 'Habitación ejecutiva', 'Habitación estándar'],
  },
  {
    guestRequest: '"Queremos balcón y minibar, por favor."',
    english: '"We want a balcony and minibar, please."',
    correctRoom: 'Suite con balcón y minibar',
    options: ['Suite con balcón y minibar', 'Habitación estándar', 'Habitación sin ventana', 'Habitación ejecutiva'],
  },
  {
    guestRequest: '"Una habitación con aire acondicionado y caja fuerte."',
    english: '"A room with AC and a safe."',
    correctRoom: 'Habitación con A/C y caja fuerte',
    options: ['Habitación con A/C y caja fuerte', 'Habitación sin aire', 'Suite familiar', 'Habitación con piscina'],
  },
  {
    guestRequest: '"Necesito una habitación cerca del elevador, por favor."',
    english: '"I need a room near the elevator, please."',
    correctRoom: 'Habitación cerca del elevador',
    options: ['Habitación cerca del elevador', 'Habitación con vista al mar', 'Suite con terraza', 'Habitación con balcón'],
  },
  {
    guestRequest: '"No necesito nada especial. Una habitación con cama y toallas."',
    english: '"I don\'t need anything special. A room with a bed and towels."',
    correctRoom: 'Habitación estándar',
    options: ['Habitación estándar', 'Suite presidencial', 'Suite con minibar', 'Habitación ejecutiva'],
  },
]

// === LESSON DATA ===

export const L24Data: LessonData = {
  id: 'L2.4',
  hero: {
    lessonId: 'L2.4',
    title: 'At the Hotel',
    subtitle: 'Check-in, rooms & hotel services',
    description: 'Learn to check in at a hotel, describe what you need in your room, ask for services, and report problems. Essential vocabulary for traveling in Spanish-speaking countries.',
    image: '/images/L2.4/L2.4.jpg',
    gradient: 'from-cyan-800/65 via-sky-700/55 to-blue-700/65',
    accentColor: 'cyan-200',
  },

  objectives: [
    { icon: '🏨', title: 'Check In & Out', desc: 'Handle hotel registration, ask about your reservation, and check out smoothly.' },
    { icon: '🛏️', title: 'Describe Your Room', desc: 'Name room features, amenities, and hotel areas in Spanish.' },
    { icon: '🔧', title: 'Make Requests & Report Issues', desc: 'Ask for extra towels, report broken things, and request services.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.2', label: 'Polite Expressions', detail: '"Buenos días," "por favor," "gracias" — essential for hotel interactions.' },
    { fromLesson: 'L1.3', label: 'Numbers & Time', detail: 'Room numbers, floor numbers, and check-in/check-out times use numbers from L1.3.' },
    { fromLesson: 'L2.1', label: 'Making Requests', detail: '"Necesito..." and "¿Puede...?" from L2.1 now apply to hotel needs.' },
  ],

  sectionTransitions: [
    { afterSection: 'hotel-areas', text: 'You know the hotel layout — now let\u2019s see what\u2019s inside your room!' },
    { afterSection: 'amenities', text: 'Your room is set — time to learn how to check in and check out.' },
    { afterSection: 'checkin', text: 'You can handle the front desk — now let\u2019s learn to ask for what you need.' },
    { afterSection: 'dialogues', text: 'Great hotel conversations! Let\u2019s discover hotel culture in Latin America.' },
    { afterSection: 'cultural', text: 'Now put your skills to the test — check in a real guest!' },
    { afterSection: 'hotel-checkin', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La habitación', english: 'The room' },
    { spanish: 'La reservación', english: 'The reservation' },
    { spanish: 'Necesito...', english: 'I need...' },
    { spanish: 'No funciona', english: 'It doesn\u2019t work' },
    { spanish: '¿A qué hora...?', english: 'What time...?' },
    { spanish: 'La llave', english: 'The key' },
  ],

  pronunciationChallenges: [
    { spanish: 'Tengo una reservación a nombre de Martínez', pronunciation: 'TEHN-goh OO-nah reh-sehr-bah-see-OHN ah NOHM-breh deh mahr-TEE-nehs', english: 'I have a reservation under Martínez', audio: 'la-reservacion', tip: '"Reservación" has the stress on the last syllable: reh-sehr-bah-see-OHN.' },
    { spanish: 'La llave de la habitación no funciona', pronunciation: 'lah YAH-beh deh lah ah-bee-tah-see-OHN noh foon-see-OH-nah', english: 'The room key does not work', audio: 'la-llave-de-la-habitacion', tip: 'LL = "Y" sound in most Latin America. "Llave" = YAH-beh, not "LAH-beh."' },
    { spanish: '¿Puede ayudarme con el equipaje?', pronunciation: 'PWEH-deh ah-yoo-DAHR-meh kohn ehl eh-kee-PAH-heh', english: 'Can you help me with the luggage?', audio: 'puede-ayudarme', tip: '"Equipaje" — the J makes an "H" sound: eh-kee-PAH-heh.' },
    { spanish: 'Necesito una toalla más, por favor', pronunciation: 'neh-seh-SEE-toh OO-nah toh-AH-yah mahs pohr fah-BOHR', english: 'I need one more towel, please', audio: 'necesito-mas-toallas', tip: '"Toalla" has the LL = Y: toh-AH-yah. Two syllables after "to."' },
    { spanish: 'El aire acondicionado no funciona', pronunciation: 'ehl AH-ee-reh ah-kohn-dee-see-oh-NAH-doh noh foon-see-OH-nah', english: 'The AC does not work', audio: 'el-aire-acondicionado', tip: '"Acondicionado" is long! Break it: a-con-di-cio-NA-do. Stress on NA.' },
    { spanish: 'El desayuno es a las siete', pronunciation: 'ehl deh-sah-YOO-noh ehs ah lahs see-EH-teh', english: 'Breakfast is at seven', audio: 'a-que-hora-es-el-desayuno', tip: '"Desayuno" — stress on YOO: deh-sah-YOO-noh.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'hotel-areas', label: 'Hotel Areas' },
    { id: 'amenities', label: 'Room Amenities' },
    { id: 'checkin', label: 'Check-in & Check-out' },
    { id: 'requests', label: 'Requests & Problems' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'hotel-sorting', label: 'Hotel Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'hotel-checkin', label: 'Hotel Check-in' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'hotel-areas',
      title: 'Hotel Areas & Spaces',
      description: 'Navigate the hotel like a pro. These are the key areas you\u2019ll need to find.',
      tabs: [
        { label: 'Indoor Areas', color: 'blue', phrases: PHRASES.filter(p => p.category === 'rooms').slice(0, 5) },
        { label: 'Outdoor & More', color: 'teal', phrases: PHRASES.filter(p => p.category === 'rooms').slice(5) },
      ],
    },
    {
      id: 'amenities',
      title: 'Room Features & Amenities',
      description: 'Everything inside your hotel room — from the bed to the view.',
      tabs: [
        { label: 'Essentials', color: 'amber', phrases: PHRASES.filter(p => p.category === 'amenities').slice(0, 5) },
        { label: 'Extras', color: 'purple', phrases: PHRASES.filter(p => p.category === 'amenities').slice(5) },
      ],
    },
    {
      id: 'checkin',
      title: 'Check-in & Check-out',
      description: 'Handle the front desk with confidence. From reservations to tipping the bellboy.',
      tabs: [
        { label: 'Arrival', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'checkin').slice(0, 5) },
        { label: 'Stay & Departure', color: 'rose', phrases: PHRASES.filter(p => p.category === 'checkin').slice(5) },
      ],
    },
    {
      id: 'requests',
      title: 'Requests & Problems',
      description: 'Something broken? Need extra pillows? Here\u2019s how to ask.',
      tabs: [
        { label: 'Requests', color: 'orange', phrases: PHRASES.filter(p => p.category === 'requests').slice(0, 4), columns: 2 },
        { label: 'Problems & Services', color: 'blue', phrases: PHRASES.filter(p => p.category === 'requests').slice(4), columns: 2 },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: '"Habitación" — The Silent H',
      content: 'In Spanish, H is ALWAYS silent. "Habitación" starts with the vowel A sound: ah-bee-tah-see-OHN. Same rule as "hotel" (oh-TEHL), "huésped" (WEHS-pehd), and "hay" (ah-ee). Never pronounce the H!',
      example: 'Habitación = ah-bee-tah-see-OHN | Hotel = oh-TEHL | Hay = ah-ee',
      reviewFrom: 'L1.1',
    },
    {
      title: '"LL" in Hotel Vocabulary',
      content: '"Llave" (key), "toalla" (towel), and "llegada" (arrival) all have LL. In most of Latin America, LL = "Y" sound. In Argentina and Uruguay, LL = "SH" sound. This lesson uses the Latin American "Y" pronunciation.',
      example: 'Llave = YAH-beh | Toalla = toh-AH-yah',
      reviewFrom: 'L1.1',
    },
    {
      title: '"Necesito" + Noun — Making Requests',
      content: '"Necesito" (I need) is your hotel survival word. It is regular (-ar conjugation of "necesitar"): necesito, necesitas, necesita. Follow it with any noun: "Necesito una toalla," "Necesito la llave."',
      example: 'Necesito + toallas | Necesito + ayuda | Necesito + la llave',
    },
    {
      title: '"No funciona" — Reporting Problems',
      content: '"No funciona" (it doesn\u2019t work) is the phrase you need when something is broken. Add the article + noun before it: "El aire acondicionado no funciona," "La luz no funciona." Simple and effective!',
      example: 'El wifi no funciona | La televisión no funciona | La ducha no funciona',
    },
  ],

  flashcardGroups: [
    {
      key: 'hotel-areas',
      label: 'Hotel Areas',
      audioKeys: ['la-habitacion', 'la-recepcion', 'el-lobby', 'la-piscina', 'el-elevador', 'las-escaleras', 'el-estacionamiento', 'el-restaurante-del-hotel', 'el-gimnasio', 'la-terraza'],
    },
    {
      key: 'room-amenities',
      label: 'Room & Amenities',
      audioKeys: ['la-cama-doble', 'la-almohada', 'la-toalla', 'el-aire-acondicionado', 'la-llave-de-la-habitacion', 'la-caja-fuerte', 'el-wifi', 'la-vista-al-mar', 'el-balcon', 'el-minibar'],
    },
    {
      key: 'checkin-requests',
      label: 'Check-in & Requests',
      audioKeys: ['la-reservacion', 'registrarse', 'la-salida', 'el-pasaporte', 'la-tarjeta-de-credito', 'el-equipaje', 'la-maleta', 'necesito-mas-toallas', 'no-funciona', 'puede-ayudarme'],
    },
  ],

  matchPairs: [
    { left: 'La habitación', right: 'The room' },
    { left: 'La llave', right: 'The key' },
    { left: 'La piscina', right: 'The pool' },
    { left: 'El equipaje', right: 'The luggage' },
    { left: 'La toalla', right: 'The towel' },
    { left: 'La reservación', right: 'The reservation' },
    { left: 'No funciona', right: 'It doesn\u2019t work' },
    { left: 'El desayuno', right: 'Breakfast' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'El vs. La — Hotel Edition',
      instruction: 'Is it EL (masculine) or LA (feminine)?',
      buckets: ['El (masculino)', 'La (femenino)'],
      items: [
        { text: 'elevador', bucket: 'El (masculino)' },
        { text: 'gimnasio', bucket: 'El (masculino)' },
        { text: 'balcón', bucket: 'El (masculino)' },
        { text: 'pasaporte', bucket: 'El (masculino)' },
        { text: 'wifi', bucket: 'El (masculino)' },
        { text: 'habitación', bucket: 'La (femenino)' },
        { text: 'piscina', bucket: 'La (femenino)' },
        { text: 'toalla', bucket: 'La (femenino)' },
        { text: 'maleta', bucket: 'La (femenino)' },
        { text: 'terraza', bucket: 'La (femenino)' },
      ],
    },
    {
      title: 'Amenity vs. Problem',
      instruction: 'Is this something good about the room or a problem?',
      buckets: ['Amenity ✓', 'Problem ✗'],
      items: [
        { text: 'Vista al mar', bucket: 'Amenity ✓' },
        { text: 'Wifi rápido', bucket: 'Amenity ✓' },
        { text: 'Cama doble', bucket: 'Amenity ✓' },
        { text: 'Aire acondicionado', bucket: 'Amenity ✓' },
        { text: 'Minibar', bucket: 'Amenity ✓' },
        { text: 'No hay agua caliente', bucket: 'Problem ✗' },
        { text: 'No funciona el wifi', bucket: 'Problem ✗' },
        { text: 'Hay mucho ruido', bucket: 'Problem ✗' },
        { text: 'Hace mucho calor', bucket: 'Problem ✗' },
        { text: 'La llave no funciona', bucket: 'Problem ✗' },
      ],
    },
  ],
  sortSectionId: 'hotel-sorting',
  sortTitle: 'Hotel Sorting',

  dialogues: [
    {
      id: 'dialogue-checkin',
      title: 'Checking In — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Recepcionista', text: 'Buenas tardes. Bienvenido al Hotel Palermo. ¿Tiene reservación?', audio: '/audio/L2.4/phrases/d1-line1.mp3', annotations: [{ phrase: 'Buenas tardes', fromLesson: 'L1.2', note: 'Greeting from L1.2' }] },
        { speaker: 'Huésped', text: 'Sí, tengo una reservación a nombre de López. Tres noches.', audio: '/audio/L2.4/phrases/d1-line2.mp3', annotations: [{ phrase: 'Tres', fromLesson: 'L1.3', note: 'Number from L1.3' }] },
        { speaker: 'Recepcionista', text: 'Perfecto. Necesito su pasaporte y una tarjeta de crédito, por favor.', audio: '/audio/L2.4/phrases/d1-line3.mp3' },
        { speaker: 'Huésped', text: 'Aquí tiene. ¿La habitación tiene wifi?', audio: '/audio/L2.4/phrases/d1-line4.mp3' },
        { speaker: 'Recepcionista', text: 'Sí, el wifi es gratis. La contraseña está en la llave. Su habitación es la trescientos ocho, en el tercer piso.', audio: '/audio/L2.4/phrases/d1-line5.mp3' },
        { speaker: 'Huésped', text: '¿A qué hora es el desayuno?', audio: '/audio/L2.4/phrases/d1-line6.mp3', annotations: [{ phrase: '¿A qué hora', fromLesson: 'L1.3', note: 'Asking time from L1.3' }] },
        { speaker: 'Recepcionista', text: 'De siete a diez de la mañana, en el restaurante del primer piso. El elevador está a la derecha.', audio: '/audio/L2.4/phrases/d1-line7.mp3', annotations: [{ phrase: 'a la derecha', fromLesson: 'L1.5', note: 'Directions from L1.5' }] },
        { speaker: 'Huésped', text: 'Muchas gracias. ¿Tienen estacionamiento?', audio: '/audio/L2.4/phrases/d1-line8.mp3' },
        { speaker: 'Recepcionista', text: 'Sí, el estacionamiento está detrás del hotel. Aquí tiene su llave. ¡Disfrute su estadía!', audio: '/audio/L2.4/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-problem',
      title: 'A Problem with the Room — Cancún',
      location: 'Cancún',
      lines: [
        { speaker: 'Huésped', text: 'Buenas noches. Tengo un problema con mi habitación.', audio: '/audio/L2.4/phrases/d2-line1.mp3' },
        { speaker: 'Recepcionista', text: '¿Qué pasó? ¿En qué puedo ayudarle?', audio: '/audio/L2.4/phrases/d2-line2.mp3' },
        { speaker: 'Huésped', text: 'El aire acondicionado no funciona y hace mucho calor.', audio: '/audio/L2.4/phrases/d2-line3.mp3', annotations: [{ phrase: 'mucho calor', fromLesson: 'L2.2', note: 'Weather from L2.2' }] },
        { speaker: 'Recepcionista', text: 'Lo siento mucho. Puedo cambiarle a otra habitación en el mismo piso.', audio: '/audio/L2.4/phrases/d2-line4.mp3' },
        { speaker: 'Huésped', text: '¿La otra habitación tiene vista al mar?', audio: '/audio/L2.4/phrases/d2-line5.mp3' },
        { speaker: 'Recepcionista', text: 'Sí, la habitación quinientos doce tiene balcón y vista al mar. ¿Le parece bien?', audio: '/audio/L2.4/phrases/d2-line6.mp3' },
        { speaker: 'Huésped', text: '¡Perfecto! También necesito dos toallas más, por favor.', audio: '/audio/L2.4/phrases/d2-line7.mp3' },
        { speaker: 'Recepcionista', text: 'Claro. Las toallas llegan a su habitación en diez minutos. Aquí está su nueva llave.', audio: '/audio/L2.4/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Listen to a smooth check-in in Buenos Aires and a room problem resolved in Cancún.',

  culturalNotes: [
    {
      title: 'Propinas en Hoteles — Tipping Culture',
      content: 'Tipping customs vary across Latin America. In Mexico, tipping hotel staff (bellboys, housekeeping) is expected — usually 20-50 pesos per service. In Argentina and Chile, tipping is appreciated but less obligatory. In Colombia, a "propina voluntaria" (voluntary tip) of 10% is often added to restaurant bills inside hotels. When in doubt, ask: "¿Se acostumbra dejar propina?" (Is it customary to tip?).',
    },
    {
      title: 'Hoteles, Hostales y Posadas',
      content: 'Latin America offers diverse accommodation types. "Hoteles" range from budget to luxury (rated by estrellas/stars). "Hostales" (hostels) are popular with younger travelers and backpackers. "Posadas" are charming, family-run guesthouses common in Venezuela, Colombia, and Mexico. "Cabañas" (cabins) are popular near beaches and mountains. Each offers a unique cultural experience!',
    },
    {
      title: 'El Desayuno del Hotel — Hotel Breakfast',
      content: 'Hotel breakfast in Latin America is often a highlight. In Colombia, expect "arepa con queso" and fresh tropical fruit. In Mexico, "huevos rancheros" or "chilaquiles" are classics. In Argentina, the "medialunas" (croissants) with "café con leche" are a must. Most hotels offer "desayuno incluido" (breakfast included) — always ask at check-in!',
    },
  ],
  culturalGradient: 'from-cyan-50 to-sky-50',

  quiz: [
    { id: 1, type: 'mc', text: 'How do you say "I have a reservation" in Spanish?', options: ['Tengo una habitación', 'Tengo una reservación', 'Necesito una reservación', 'Quiero una reservación'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La ___ de la habitación no funciona" (The room key)', answer: ['llave', 'Llave'] },
    { id: 3, type: 'mc', text: 'What does "el huésped" mean?', options: ['The host', 'The guest', 'The manager', 'The bellboy'], answer: 1 },
    { id: 4, type: 'tf', text: 'In Spanish, the H in "habitación" is silent.', answer: true },
    { id: 5, type: 'mc', text: 'You need extra towels. You say:', options: ['Quiero más camas', 'Necesito más toallas', 'Tengo más toallas', 'Hay más toallas'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "El aire acondicionado no ___" (does not work)', answer: 'funciona' },
    { id: 7, type: 'mc', text: '"La caja fuerte" is:', options: ['The safe', 'The strong box', 'The safe room', 'The cashier'], answer: 0 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what floor is the guest\'s room on?', options: ['First floor', 'Second floor', 'Third floor', 'Eighth floor'], answer: 2 },
    { id: 9, type: 'tf', text: '"LL" in "llave" is pronounced like "Y" in most of Latin America.', answer: true },
    { id: 10, type: 'mc', text: 'How do you ask "What time is breakfast?"', options: ['¿Dónde es el desayuno?', '¿Cuánto es el desayuno?', '¿A qué hora es el desayuno?', '¿Cómo es el desayuno?'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Necesito su ___ y una tarjeta de crédito" (passport)', answer: 'pasaporte' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what was the problem with the room?', options: ['No hot water', 'Too much noise', 'The AC didn\u2019t work', 'The key was broken'], answer: 2 },
    { id: 13, type: 'mc', text: 'Which is NOT a hotel area?', options: ['La recepción', 'La piscina', 'La cocina', 'El estacionamiento'], answer: 2 },
    { id: 14, type: 'tf', text: 'In Mexico, tipping hotel staff is expected.', answer: true },
    { id: 15, type: 'mc', text: '"Desayuno incluido" means:', options: ['Breakfast is extra', 'Breakfast is included', 'Breakfast is at noon', 'Breakfast is cancelled'], answer: 1 },
  ],

  audioBase: '/audio/L2.4/phrases',

  uniqueActivity: {
    id: 'HotelCheckinL24',
    sectionId: 'hotel-checkin',
    sectionColor: 'bg-cyan-50/40',
    sectionBorder: 'border-cyan-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'hotel-areas': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    amenities: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    checkin: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    requests: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'hotel-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'hotel-checkin': { bg: 'bg-cyan-50/40', border: 'border-cyan-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
