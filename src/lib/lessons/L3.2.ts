import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Rooms (10) ===
  { spanish: 'La cocina', english: 'The kitchen', pronunciation: 'lah koh-SEE-nah', category: 'rooms', audio: 'la-cocina' },
  { spanish: 'El baño', english: 'The bathroom', pronunciation: 'ehl BAH-nyoh', category: 'rooms', audio: 'el-bano' },
  { spanish: 'La sala', english: 'The living room', pronunciation: 'lah SAH-lah', category: 'rooms', audio: 'la-sala' },
  { spanish: 'El dormitorio', english: 'The bedroom', pronunciation: 'ehl dohr-mee-TOH-ree-oh', category: 'rooms', audio: 'el-dormitorio' },
  { spanish: 'El comedor', english: 'The dining room', pronunciation: 'ehl koh-meh-DOHR', category: 'rooms', audio: 'el-comedor' },
  { spanish: 'El garaje', english: 'The garage', pronunciation: 'ehl gah-RAH-heh', category: 'rooms', audio: 'el-garaje' },
  { spanish: 'El jardín', english: 'The garden/yard', pronunciation: 'ehl hahr-DEEN', category: 'rooms', audio: 'el-jardin' },
  { spanish: 'El balcón', english: 'The balcony', pronunciation: 'ehl bahl-KOHN', category: 'rooms', audio: 'el-balcon' },
  { spanish: 'El pasillo', english: 'The hallway', pronunciation: 'ehl pah-SEE-yoh', category: 'rooms', audio: 'el-pasillo' },
  { spanish: 'La terraza', english: 'The terrace/patio', pronunciation: 'lah teh-RRAH-sah', category: 'rooms', audio: 'la-terraza' },

  // === Furniture (10) ===
  { spanish: 'La cama', english: 'The bed', pronunciation: 'lah KAH-mah', category: 'furniture', audio: 'la-cama' },
  { spanish: 'La mesa', english: 'The table', pronunciation: 'lah MEH-sah', category: 'furniture', audio: 'la-mesa' },
  { spanish: 'La silla', english: 'The chair', pronunciation: 'lah SEE-yah', category: 'furniture', audio: 'la-silla' },
  { spanish: 'El sofá', english: 'The sofa/couch', pronunciation: 'ehl soh-FAH', category: 'furniture', audio: 'el-sofa' },
  { spanish: 'El estante', english: 'The shelf/bookcase', pronunciation: 'ehl ehs-TAHN-teh', category: 'furniture', audio: 'el-estante' },
  { spanish: 'La lámpara', english: 'The lamp', pronunciation: 'lah LAHM-pah-rah', category: 'furniture', audio: 'la-lampara' },
  { spanish: 'El espejo', english: 'The mirror', pronunciation: 'ehl ehs-PEH-hoh', category: 'furniture', audio: 'el-espejo' },
  { spanish: 'La alfombra', english: 'The rug/carpet', pronunciation: 'lah ahl-FOHM-brah', category: 'furniture', audio: 'la-alfombra' },
  { spanish: 'El clóset', english: 'The closet', pronunciation: 'ehl KLOH-seht', category: 'furniture', audio: 'el-closet' },
  { spanish: 'La cortina', english: 'The curtain', pronunciation: 'lah kohr-TEE-nah', category: 'furniture', audio: 'la-cortina' },

  // === Housing Phrases (10) ===
  { spanish: 'Busco un departamento', english: 'I\'m looking for an apartment', pronunciation: 'BOOS-koh oon deh-pahr-tah-MEHN-toh', category: 'housing', audio: 'busco-un-departamento' },
  { spanish: '¿Cuánto es la renta?', english: 'How much is the rent?', pronunciation: 'KWAHN-toh ehs lah RREHN-tah', category: 'housing', audio: 'cuanto-es-la-renta' },
  { spanish: 'Tiene dos recámaras', english: 'It has two bedrooms', pronunciation: 'tee-EH-neh dohs reh-KAH-mah-rahs', category: 'housing', audio: 'tiene-dos-recamaras' },
  { spanish: 'Está amueblado', english: 'It\'s furnished', pronunciation: 'ehs-TAH ah-mweh-BLAH-doh', category: 'housing', audio: 'esta-amueblado' },
  { spanish: 'La casa es grande y luminosa', english: 'The house is big and bright', pronunciation: 'lah KAH-sah ehs GRAHN-deh ee loo-mee-NOH-sah', category: 'housing', audio: 'la-casa-es-grande' },
  { spanish: 'Quiero vivir cerca del centro', english: 'I want to live near downtown', pronunciation: 'kee-EH-roh bee-BEER SEHR-kah dehl SEHN-troh', category: 'housing', audio: 'quiero-vivir-cerca' },
  { spanish: 'Los servicios están incluidos', english: 'Utilities are included', pronunciation: 'lohs sehr-BEE-see-ohs ehs-TAHN een-kloo-EE-dohs', category: 'housing', audio: 'los-servicios-incluidos' },
  { spanish: 'Necesito un cuarto más', english: 'I need one more room', pronunciation: 'neh-seh-SEE-toh oon KWAHR-toh mahs', category: 'housing', audio: 'necesito-un-cuarto-mas' },
  { spanish: 'El vecindario es tranquilo', english: 'The neighborhood is quiet', pronunciation: 'ehl beh-seen-DAH-ree-oh ehs trahn-KEE-loh', category: 'housing', audio: 'el-vecindario-es-tranquilo' },
  { spanish: 'Prefiero un piso alto', english: 'I prefer a high floor', pronunciation: 'preh-fee-EH-roh oon PEE-soh AHL-toh', category: 'housing', audio: 'prefiero-un-piso-alto' },

  // === Chores (8) ===
  { spanish: 'Lavar los platos', english: 'To wash the dishes', pronunciation: 'lah-BAHR lohs PLAH-tohs', category: 'chores', audio: 'lavar-los-platos' },
  { spanish: 'Barrer el piso', english: 'To sweep the floor', pronunciation: 'bah-RREHR ehl PEE-soh', category: 'chores', audio: 'barrer-el-piso' },
  { spanish: 'Tender la cama', english: 'To make the bed', pronunciation: 'tehn-DEHR lah KAH-mah', category: 'chores', audio: 'tender-la-cama' },
  { spanish: 'Sacar la basura', english: 'To take out the trash', pronunciation: 'sah-KAHR lah bah-SOO-rah', category: 'chores', audio: 'sacar-la-basura' },
  { spanish: 'Cocinar la cena', english: 'To cook dinner', pronunciation: 'koh-see-NAHR lah SEH-nah', category: 'chores', audio: 'cocinar-la-cena' },
  { spanish: 'Limpiar la casa', english: 'To clean the house', pronunciation: 'leem-pee-AHR lah KAH-sah', category: 'chores', audio: 'limpiar-la-casa' },
  { spanish: 'Pasar la aspiradora', english: 'To vacuum', pronunciation: 'pah-SAHR lah ahs-pee-rah-DOH-rah', category: 'chores', audio: 'pasar-la-aspiradora' },
  { spanish: 'Regar las plantas', english: 'To water the plants', pronunciation: 'rreh-GAHR lahs PLAHN-tahs', category: 'chores', audio: 'regar-las-plantas' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L32PhraseByAudio = phraseByAudio

// === ROOM DESIGNER (unique activity) ===

export interface RoomDesignerChallenge {
  description: string
  descriptionEnglish: string
  correctLayout: string
  options: string[]
}

export const ROOM_DESIGNER_CHALLENGES: RoomDesignerChallenge[] = [
  {
    description: 'La sala tiene un sofá grande en el centro, una lámpara al lado derecho y una alfombra debajo de la mesa.',
    descriptionEnglish: 'The living room has a big sofa in the center, a lamp on the right side, and a rug under the table.',
    correctLayout: 'Sofa (center) + Lamp (right) + Rug under table',
    options: [
      'Sofa (center) + Lamp (right) + Rug under table',
      'Sofa (right) + Lamp (center) + Rug on wall',
      'Table (center) + Sofa (right) + Lamp on floor',
      'Lamp (center) + Rug on sofa + Table (right)',
    ],
  },
  {
    description: 'El dormitorio tiene una cama contra la pared, un clóset a la izquierda y cortinas azules en la ventana.',
    descriptionEnglish: 'The bedroom has a bed against the wall, a closet on the left, and blue curtains on the window.',
    correctLayout: 'Bed (against wall) + Closet (left) + Blue curtains (window)',
    options: [
      'Bed (against wall) + Closet (left) + Blue curtains (window)',
      'Closet (against wall) + Bed (left) + Red curtains (window)',
      'Bed (center) + Closet (right) + Blue curtains (door)',
      'Bed (left) + Curtains (closet) + Closet (window)',
    ],
  },
  {
    description: 'La cocina tiene una mesa pequeña con cuatro sillas, un estante con platos y una ventana grande.',
    descriptionEnglish: 'The kitchen has a small table with four chairs, a shelf with plates, and a big window.',
    correctLayout: 'Small table + 4 chairs + Shelf with plates + Big window',
    options: [
      'Small table + 4 chairs + Shelf with plates + Big window',
      'Big table + 2 chairs + Empty shelf + Small window',
      'Small table + 6 chairs + Shelf with books + No window',
      'Round table + 4 chairs + Shelf with cups + Big door',
    ],
  },
  {
    description: 'El baño tiene un espejo encima del lavabo, una cortina de ducha blanca y una alfombra pequeña en el piso.',
    descriptionEnglish: 'The bathroom has a mirror above the sink, a white shower curtain, and a small rug on the floor.',
    correctLayout: 'Mirror (above sink) + White shower curtain + Small rug (floor)',
    options: [
      'Mirror (above sink) + White shower curtain + Small rug (floor)',
      'Mirror (on door) + Blue shower curtain + Large rug (floor)',
      'Mirror (above toilet) + White shower curtain + No rug',
      'Mirror (above sink) + No curtain + Small rug (wall)',
    ],
  },
  {
    description: 'El comedor tiene una mesa larga en el centro, seis sillas alrededor y una lámpara encima de la mesa.',
    descriptionEnglish: 'The dining room has a long table in the center, six chairs around it, and a lamp above the table.',
    correctLayout: 'Long table (center) + 6 chairs (around) + Lamp (above table)',
    options: [
      'Long table (center) + 6 chairs (around) + Lamp (above table)',
      'Round table (center) + 4 chairs (around) + Lamp (corner)',
      'Long table (wall) + 6 chairs (one side) + Lamp (above table)',
      'Long table (center) + 8 chairs (around) + Lamp (floor)',
    ],
  },
  {
    description: 'La terraza tiene dos sillas y una mesa pequeña, plantas en las esquinas y una vista al jardín.',
    descriptionEnglish: 'The terrace has two chairs and a small table, plants in the corners, and a view of the garden.',
    correctLayout: '2 chairs + Small table + Plants (corners) + Garden view',
    options: [
      '2 chairs + Small table + Plants (corners) + Garden view',
      '4 chairs + Big table + Plants (center) + Street view',
      '2 chairs + Small table + No plants + Garden view',
      '1 chair + Small table + Plants (corners) + Pool view',
    ],
  },
]

// === LESSON DATA ===

export const L32Data: LessonData = {
  id: 'L3.2',
  hero: {
    lessonId: 'L3.2',
    title: 'Home & Housing',
    subtitle: 'Describing where you live and finding a place',
    description: 'Learn vocabulary for rooms, furniture, and household chores. Describe your home, talk about renting or buying, and discuss your ideal living space. Essential for everyday life in a Spanish-speaking country!',
    image: '/images/L3.2/L3.2.jpg',
    gradient: 'from-teal-800/65 via-emerald-700/55 to-green-700/65',
    accentColor: 'teal-200',
  },

  objectives: [
    { icon: '🏠', title: 'Rooms of the House', desc: 'Name and describe every room: la cocina, el baño, la sala, el dormitorio, el comedor, and more.' },
    { icon: '🛋️', title: 'Furniture & Objects', desc: 'Identify common furniture: la cama, el sofá, la mesa, la silla, el estante, la lámpara.' },
    { icon: '🏢', title: 'Housing & Renting', desc: 'Ask about rent, describe apartments, express preferences: busco, tiene, está amueblado.' },
    { icon: '🧹', title: 'Household Chores', desc: 'Talk about daily tasks: lavar, barrer, cocinar, limpiar, tender la cama.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.5', label: 'Directions & Location', detail: 'Location words from L1.5 (cerca, lejos, al lado de) now describe where things are in your house.' },
    { fromLesson: 'L2.4', label: 'Hotel Rooms', detail: 'Hotel vocabulary from L2.4 (habitación, cama, baño) transfers directly to home vocabulary.' },
    { fromLesson: 'L2.7', label: 'Describing Things', detail: 'Adjectives from L2.7 (grande, pequeño, bonito) now describe your home and furniture.' },
  ],

  sectionTransitions: [
    { afterSection: 'rooms', text: 'You know all the rooms! Now let\u2019s fill them with furniture.' },
    { afterSection: 'furniture', text: 'Furniture mastered \u2014 now let\u2019s talk about finding and describing a place to live.' },
    { afterSection: 'housing', text: 'You can discuss housing! Time to learn about keeping your home clean.' },
    { afterSection: 'dialogues', text: 'Great conversations about housing! Let\u2019s explore how homes differ across Latin America.' },
    { afterSection: 'cultural', text: 'Now design rooms from Spanish descriptions!' },
    { afterSection: 'room-designer', text: 'Final stretch \u2014 quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Mi casa tiene...', english: 'My house has...' },
    { spanish: 'En mi dormitorio hay...', english: 'In my bedroom there is...' },
    { spanish: 'Me gusta cocinar en...', english: 'I like to cook in...' },
    { spanish: 'Mi cuarto favorito es...', english: 'My favorite room is...' },
    { spanish: 'Necesito limpiar...', english: 'I need to clean...' },
    { spanish: 'Busco un departamento con...', english: 'I\'m looking for an apartment with...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Busco un departamento amueblado', pronunciation: 'BOOS-koh oon deh-pahr-tah-MEHN-toh ah-mweh-BLAH-doh', english: 'I\'m looking for a furnished apartment', audio: 'busco-un-departamento-amueblado', tip: '"Amueblado" has the tricky "mue" diphthong. Say it like "ah-mweh-BLAH-doh" \u2014 don\u2019t separate the M from the UE.' },
    { spanish: 'El vecindario es muy tranquilo', pronunciation: 'ehl beh-seen-DAH-ree-oh ehs mwee trahn-KEE-loh', english: 'The neighborhood is very quiet', audio: 'el-vecindario-es-muy-tranquilo', tip: '"Vecindario" \u2014 five syllables! Stress on DA. And "tranquilo" has QUI = KEE, not KWEE.' },
    { spanish: 'Tiene dos recámaras y un balcón', pronunciation: 'tee-EH-neh dohs reh-KAH-mah-rahs ee oon bahl-KOHN', english: 'It has two bedrooms and a balcony', audio: 'tiene-dos-recamaras-y-un-balcon', tip: '"Rec\u00e1maras" is the Latin American word for bedrooms. In Spain they say "habitaciones." Stress on KAH.' },
    { spanish: 'Necesito barrer y pasar la aspiradora', pronunciation: 'neh-seh-SEE-toh bah-RREHR ee pah-SAHR lah ahs-pee-rah-DOH-rah', english: 'I need to sweep and vacuum', audio: 'necesito-barrer-y-pasar-la-aspiradora', tip: '"Barrer" has a strong rolled RR. "Aspiradora" = 5 syllables! Break it down: as-pi-ra-DO-ra.' },
    { spanish: 'La alfombra está debajo de la mesa', pronunciation: 'lah ahl-FOHM-brah ehs-TAH deh-BAH-hoh deh lah MEH-sah', english: 'The rug is under the table', audio: 'la-alfombra-esta-debajo-de-la-mesa', tip: '"Alfombra" \u2014 the L and F blend together quickly. And "debajo" = under (de-BAH-hoh), not "abajo" which means "down."' },
    { spanish: 'Prefiero vivir cerca del centro', pronunciation: 'preh-fee-EH-roh bee-BEER SEHR-kah dehl SEHN-troh', english: 'I prefer to live near downtown', audio: 'prefiero-vivir-cerca-del-centro', tip: '"Prefiero" \u2014 the IE diphthong is key. Pre-fie-RO, not "pre-FEE-ro." Same pattern as "quiero" from earlier lessons.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: 'What You\'ll Learn' },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'housing', label: 'Housing & Renting' },
    { id: 'chores', label: 'Chores' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'home-sorting', label: 'Home Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'room-designer', label: 'Room Designer' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'rooms',
      title: 'Rooms of the House',
      description: 'Every home has rooms \u2014 learn to name them all in Spanish!',
      tabs: [
        { label: 'Main Rooms', color: 'teal', phrases: PHRASES.filter(p => p.category === 'rooms').slice(0, 5) },
        { label: 'More Spaces', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'rooms').slice(5) },
      ],
    },
    {
      id: 'furniture',
      title: 'Furniture & Objects',
      description: 'Fill your rooms with furniture! Learn the essential items for every space.',
      tabs: [
        { label: 'Big Items', color: 'amber', phrases: PHRASES.filter(p => p.category === 'furniture').slice(0, 5) },
        { label: 'Accessories', color: 'orange', phrases: PHRASES.filter(p => p.category === 'furniture').slice(5) },
      ],
    },
    {
      id: 'housing',
      title: 'Housing & Renting',
      description: 'Searching for a place? These phrases help you ask, describe, and decide.',
      tabs: [
        { label: 'Searching', color: 'blue', phrases: PHRASES.filter(p => p.category === 'housing').slice(0, 5) },
        { label: 'Preferences', color: 'purple', phrases: PHRASES.filter(p => p.category === 'housing').slice(5) },
      ],
    },
    {
      id: 'chores',
      title: 'Household Chores',
      description: 'Keeping a home clean is universal. Learn to talk about daily tasks.',
      tabs: [
        { label: 'Kitchen & Floors', color: 'rose', phrases: PHRASES.filter(p => p.category === 'chores').slice(0, 4) },
        { label: 'General Cleaning', color: 'teal', phrases: PHRASES.filter(p => p.category === 'chores').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Departamento vs. Apartamento',
      content: 'Both mean "apartment" but usage varies by country! Mexico and most of Central America say "departamento." The Caribbean, Colombia, and Spain prefer "apartamento." Both are correct \u2014 learn both so you understand everyone. In this lesson we use "departamento" (Latin American standard).',
      example: 'Busco un departamento (MX) = Busco un apartamento (CO/ES)',
    },
    {
      title: 'Gender of Rooms & Furniture',
      content: 'Most rooms ending in -A are feminine (la cocina, la sala, la terraza) and those ending in consonants or -O are masculine (el comedor, el ba\u00f1o, el dormitorio). Furniture follows the same rules. But watch out: "el sof\u00e1" ends in -A but is masculine! When in doubt, learn the article WITH the noun.',
      example: 'LA cocina, LA sala, LA cama | EL ba\u00f1o, EL sof\u00e1, EL estante',
      reviewFrom: 'L1.2',
    },
    {
      title: 'The "H" is Silent in Housing Words',
      content: '"Habitaci\u00f3n" starts with H but sounds like "ah-bee-tah-see-OHN." In Spanish, H is ALWAYS silent. So "hay" (there is) = "AH-ee," not "HAY." This applies to all home vocabulary: hogar (home) = oh-GAHR.',
      example: 'Hay una habitaci\u00f3n \u2192 AH-ee OO-nah ah-bee-tah-see-OHN',
      reviewFrom: 'L1.1',
    },
    {
      title: 'Chore Infinitives \u2014 The -AR Pattern',
      content: 'Most chores use -AR infinitives: lavar, limpiar, cocinar, pasar. Note: barrer is -ER but follows the same pattern. When giving instructions or saying what you need to do, use "necesito + infinitive" or "hay que + infinitive" (one must). The infinitive is the base form \u2014 no conjugation needed!',
      example: 'Necesito lavar los platos | Hay que barrer el piso | Voy a limpiar la casa',
    },
  ],

  flashcardGroups: [
    {
      key: 'rooms',
      label: 'Rooms',
      audioKeys: ['la-cocina', 'el-bano', 'la-sala', 'el-dormitorio', 'el-comedor', 'el-garaje', 'el-jardin', 'el-balcon', 'el-pasillo', 'la-terraza'],
    },
    {
      key: 'furniture',
      label: 'Furniture',
      audioKeys: ['la-cama', 'la-mesa', 'la-silla', 'el-sofa', 'el-estante', 'la-lampara', 'el-espejo', 'la-alfombra', 'el-closet', 'la-cortina'],
    },
    {
      key: 'housing-chores',
      label: 'Housing & Chores',
      audioKeys: ['busco-un-departamento', 'cuanto-es-la-renta', 'esta-amueblado', 'lavar-los-platos', 'barrer-el-piso', 'tender-la-cama', 'limpiar-la-casa', 'sacar-la-basura'],
    },
  ],

  matchPairs: [
    { left: 'La cocina', right: 'The kitchen' },
    { left: 'El dormitorio', right: 'The bedroom' },
    { left: 'El sof\u00e1', right: 'The sofa' },
    { left: 'La alfombra', right: 'The rug' },
    { left: 'Barrer', right: 'To sweep' },
    { left: 'La renta', right: 'The rent' },
    { left: 'Amueblado', right: 'Furnished' },
    { left: 'El espejo', right: 'The mirror' },
  ],
  matchLabels: { left: 'Espa\u00f1ol', right: 'English' },

  sortActivities: [
    {
      title: 'Rooms vs. Furniture',
      instruction: 'Is this a room or a piece of furniture?',
      buckets: ['Room \uD83C\uDFE0', 'Furniture \uD83D\uDECB\uFE0F'],
      items: [
        { text: 'La cocina', bucket: 'Room \uD83C\uDFE0' },
        { text: 'El ba\u00f1o', bucket: 'Room \uD83C\uDFE0' },
        { text: 'La sala', bucket: 'Room \uD83C\uDFE0' },
        { text: 'El balc\u00f3n', bucket: 'Room \uD83C\uDFE0' },
        { text: 'La cama', bucket: 'Furniture \uD83D\uDECB\uFE0F' },
        { text: 'El sof\u00e1', bucket: 'Furniture \uD83D\uDECB\uFE0F' },
        { text: 'La l\u00e1mpara', bucket: 'Furniture \uD83D\uDECB\uFE0F' },
        { text: 'El espejo', bucket: 'Furniture \uD83D\uDECB\uFE0F' },
      ],
    },
    {
      title: 'Kitchen Chores vs. Other Chores',
      instruction: 'Does this chore happen in the kitchen or elsewhere?',
      buckets: ['Kitchen \uD83C\uDF73', 'Elsewhere \uD83C\uDFE0'],
      items: [
        { text: 'Lavar los platos', bucket: 'Kitchen \uD83C\uDF73' },
        { text: 'Cocinar la cena', bucket: 'Kitchen \uD83C\uDF73' },
        { text: 'Sacar la basura', bucket: 'Kitchen \uD83C\uDF73' },
        { text: 'Barrer el piso', bucket: 'Elsewhere \uD83C\uDFE0' },
        { text: 'Tender la cama', bucket: 'Elsewhere \uD83C\uDFE0' },
        { text: 'Pasar la aspiradora', bucket: 'Elsewhere \uD83C\uDFE0' },
        { text: 'Limpiar la casa', bucket: 'Elsewhere \uD83C\uDFE0' },
        { text: 'Regar las plantas', bucket: 'Elsewhere \uD83C\uDFE0' },
      ],
    },
  ],
  sortSectionId: 'home-sorting',
  sortTitle: 'Home Sorting',

  dialogues: [
    {
      id: 'dialogue-renting',
      title: 'Looking for an Apartment \u2014 Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Laura', text: 'Hola, vi el anuncio del departamento. \u00bfTodav\u00eda est\u00e1 disponible?', audio: '/audio/L3.2/phrases/d1-line1.mp3' },
        { speaker: 'Se\u00f1or Ruiz', text: 'S\u00ed, claro. Es un departamento de dos rec\u00e1maras con un ba\u00f1o completo.', audio: '/audio/L3.2/phrases/d1-line2.mp3' },
        { speaker: 'Laura', text: '\u00bfCu\u00e1nto es la renta mensual?', audio: '/audio/L3.2/phrases/d1-line3.mp3' },
        { speaker: 'Se\u00f1or Ruiz', text: 'Son doce mil pesos al mes. Los servicios de agua y gas est\u00e1n incluidos.', audio: '/audio/L3.2/phrases/d1-line4.mp3' },
        { speaker: 'Laura', text: '\u00bfEst\u00e1 amueblado?', audio: '/audio/L3.2/phrases/d1-line5.mp3', annotations: [{ phrase: 'amueblado', fromLesson: 'L2.4', note: 'Describing accommodations from L2.4' }] },
        { speaker: 'Se\u00f1or Ruiz', text: 'S\u00ed, tiene cama, sof\u00e1, mesa con sillas y un estante en la sala.', audio: '/audio/L3.2/phrases/d1-line6.mp3' },
        { speaker: 'Laura', text: '\u00bfY el vecindario? \u00bfEs tranquilo?', audio: '/audio/L3.2/phrases/d1-line7.mp3' },
        { speaker: 'Se\u00f1or Ruiz', text: 'Muy tranquilo. Est\u00e1 cerca del metro y hay un parque al lado.', audio: '/audio/L3.2/phrases/d1-line8.mp3', annotations: [{ phrase: 'cerca del', fromLesson: 'L1.5', note: 'Location vocabulary from L1.5' }] },
        { speaker: 'Laura', text: 'Me interesa mucho. \u00bfPuedo verlo ma\u00f1ana?', audio: '/audio/L3.2/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-describing',
      title: 'Describing Your House \u2014 Medell\u00edn',
      location: 'Medell\u00edn',
      lines: [
        { speaker: 'Camila', text: '\u00bfC\u00f3mo es tu casa nueva?', audio: '/audio/L3.2/phrases/d2-line1.mp3' },
        { speaker: 'Diego', text: 'Es un apartamento grande con tres habitaciones y dos ba\u00f1os.', audio: '/audio/L3.2/phrases/d2-line2.mp3' },
        { speaker: 'Camila', text: '\u00a1Qu\u00e9 bien! \u00bfTiene balc\u00f3n?', audio: '/audio/L3.2/phrases/d2-line3.mp3' },
        { speaker: 'Diego', text: 'S\u00ed, un balc\u00f3n con vista a las monta\u00f1as. Es muy bonito.', audio: '/audio/L3.2/phrases/d2-line4.mp3', annotations: [{ phrase: 'bonito', fromLesson: 'L2.7', note: 'Descriptive adjectives from L2.7' }] },
        { speaker: 'Camila', text: '\u00bfY la cocina? \u00bfEs grande?', audio: '/audio/L3.2/phrases/d2-line5.mp3' },
        { speaker: 'Diego', text: 'S\u00ed, la cocina es amplia y luminosa. Tiene mucho espacio para cocinar.', audio: '/audio/L3.2/phrases/d2-line6.mp3' },
        { speaker: 'Camila', text: '\u00bf Qui\u00e9n limpia? \u00bfT\u00fa o tu compa\u00f1ero?', audio: '/audio/L3.2/phrases/d2-line7.mp3' },
        { speaker: 'Diego', text: 'Nos turnamos. Yo barro y paso la aspiradora. \u00c9l lava los platos y cocina.', audio: '/audio/L3.2/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Search for an apartment in Mexico City and describe a new home in Medell\u00edn.',

  culturalNotes: [
    {
      title: 'Housing in Latin America \u2014 Apartments Are King',
      content: 'In most Latin American cities, the majority of people live in apartments (departamentos or apartamentos), not houses. In Mexico City, Buenos Aires, and Bogot\u00e1, high-rise and mid-rise buildings dominate. Renting is very common, especially for young adults, and leases often work differently than in the US \u2014 some require a "aval" (guarantor) or several months\u2019 deposit upfront.',
    },
    {
      title: 'The Courtyard Culture \u2014 El Patio',
      content: 'Traditional Latin American homes often feature an inner courtyard (patio interior). This open-air space in the center of the house is used for plants, family gatherings, and relaxation. In Colombia, Mexico, and Central America, even modern homes try to include some outdoor living space \u2014 a balc\u00f3n, terraza, or small jard\u00edn. Indoor-outdoor living is deeply cultural.',
    },
    {
      title: 'Chores & Family \u2014 Everyone Helps',
      content: 'In Latin American households, chores are often shared among family members, and it\u2019s common for multiple generations to live together. Children learn household responsibilities early. Phrases like "hay que tender la cama" (you have to make the bed) and "te toca lavar los platos" (it\u2019s your turn to wash the dishes) are heard daily. In some countries, live-in or part-time household help is also common and culturally normal.',
    },
  ],
  culturalGradient: 'from-teal-50 to-emerald-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La cocina" means:', options: ['The bedroom', 'The kitchen', 'The bathroom', 'The living room'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "_____ los platos" (To wash the dishes)', answer: 'Lavar' },
    { id: 3, type: 'mc', text: 'Which word means "furnished"?', options: ['Luminoso', 'Amueblado', 'Tranquilo', 'Incluido'], answer: 1 },
    { id: 4, type: 'tf', text: '"El sof\u00e1" is feminine because it ends in -A.', answer: false },
    { id: 5, type: 'mc', text: '"Barrer el piso" means:', options: ['To mop the floor', 'To sweep the floor', 'To clean the floor', 'To paint the floor'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "\u00bfCu\u00e1nto es la _____?" (How much is the rent?)', answer: 'renta' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, how much is the monthly rent?', options: ['8,000 pesos', '10,000 pesos', '12,000 pesos', '15,000 pesos'], answer: 2 },
    { id: 8, type: 'tf', text: '"Departamento" and "apartamento" both mean apartment.', answer: true },
    { id: 9, type: 'mc', text: '"La alfombra" is:', options: ['The curtain', 'The shelf', 'The rug', 'The mirror'], answer: 2 },
    { id: 10, type: 'fill', text: 'Complete: "Tender la _____" (To make the bed)', answer: 'cama' },
    { id: 11, type: 'mc', text: 'In Dialogue 2, what view does Diego\'s balcony have?', options: ['City view', 'Ocean view', 'Mountain view', 'Garden view'], answer: 2 },
    { id: 12, type: 'tf', text: 'In Latin American cities, most people live in houses rather than apartments.', answer: false },
    { id: 13, type: 'mc', text: '"El vecindario" means:', options: ['The neighbor', 'The neighborhood', 'The building', 'The street'], answer: 1 },
    { id: 14, type: 'fill', text: 'Complete: "Sacar la _____" (To take out the trash)', answer: 'basura' },
    { id: 15, type: 'mc', text: 'Which room is "el comedor"?', options: ['The kitchen', 'The bedroom', 'The dining room', 'The bathroom'], answer: 2 },
  ],

  audioBase: '/audio/L3.2/phrases',

  uniqueActivity: {
    id: 'RoomDesignerL32',
    sectionId: 'room-designer',
    sectionColor: 'bg-teal-50/40',
    sectionBorder: 'border-teal-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    rooms: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    furniture: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    housing: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    chores: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'home-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'room-designer': { bg: 'bg-teal-50/40', border: 'border-teal-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
