import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // Asking for locations
  { spanish: '¿Dónde está...?', english: 'Where is...?', pronunciation: 'DOHN-deh ehs-TAH', category: 'location', audio: 'donde-esta' },
  { spanish: '¿Cómo llego a...?', english: 'How do I get to...?', pronunciation: 'KOH-moh YEH-goh ah', category: 'location', audio: 'como-llego-a' },
  { spanish: 'Estoy perdido/a', english: 'I am lost', pronunciation: 'ehs-TOY pehr-DEE-doh', category: 'location', audio: 'estoy-perdido' },
  { spanish: '¿Está lejos?', english: 'Is it far?', pronunciation: 'ehs-TAH LEH-hohs', category: 'location', audio: 'esta-lejos' },
  { spanish: '¿Está cerca?', english: 'Is it close?', pronunciation: 'ehs-TAH SEHR-kah', category: 'location', audio: 'esta-cerca' },
  { spanish: 'Está aquí', english: 'It is here', pronunciation: 'ehs-TAH ah-KEE', category: 'location', audio: 'esta-aqui' },
  { spanish: 'Está allí', english: 'It is there', pronunciation: 'ehs-TAH ah-YEE', category: 'location', audio: 'esta-alli' },
  // Directions
  { spanish: 'A la derecha', english: 'To the right', pronunciation: 'ah lah deh-REH-chah', category: 'direction', audio: 'a-la-derecha' },
  { spanish: 'A la izquierda', english: 'To the left', pronunciation: 'ah lah ees-kee-EHR-dah', category: 'direction', audio: 'a-la-izquierda' },
  { spanish: 'Derecho / Recto', english: 'Straight ahead', pronunciation: 'deh-REH-choh / REHK-toh', category: 'direction', audio: 'derecho' },
  { spanish: 'En la esquina', english: 'On the corner', pronunciation: 'ehn lah ehs-KEE-nah', category: 'direction', audio: 'en-la-esquina' },
  { spanish: 'Al lado de', english: 'Next to', pronunciation: 'ahl LAH-doh deh', category: 'direction', audio: 'al-lado-de' },
  { spanish: 'Enfrente de', english: 'In front of', pronunciation: 'ehn-FREHN-teh deh', category: 'direction', audio: 'enfrente-de' },
  { spanish: 'Detrás de', english: 'Behind', pronunciation: 'deh-TRAHS deh', category: 'direction', audio: 'detras-de' },
  { spanish: 'Entre', english: 'Between', pronunciation: 'EHN-treh', category: 'direction', audio: 'entre' },
  // Places
  { spanish: 'El hotel', english: 'The hotel', pronunciation: 'ehl oh-TEHL', category: 'place', audio: 'el-hotel' },
  { spanish: 'El aeropuerto', english: 'The airport', pronunciation: 'ehl ah-eh-roh-PWEHR-toh', category: 'place', audio: 'el-aeropuerto' },
  { spanish: 'La estación', english: 'The station', pronunciation: 'lah ehs-tah-see-OHN', category: 'place', audio: 'la-estacion' },
  { spanish: 'El banco', english: 'The bank', pronunciation: 'ehl BAHN-koh', category: 'place', audio: 'el-banco' },
  { spanish: 'La farmacia', english: 'The pharmacy', pronunciation: 'lah far-MAH-see-ah', category: 'place', audio: 'la-farmacia' },
  { spanish: 'El hospital', english: 'The hospital', pronunciation: 'ehl ohs-pee-TAHL', category: 'place', audio: 'el-hospital' },
  { spanish: 'El restaurante', english: 'The restaurant', pronunciation: 'ehl rehs-tow-RAHN-teh', category: 'place', audio: 'el-restaurante' },
  { spanish: 'El supermercado', english: 'The supermarket', pronunciation: 'ehl soo-pehr-mehr-KAH-doh', category: 'place', audio: 'el-supermercado' },
  { spanish: 'La parada de autobús', english: 'The bus stop', pronunciation: 'lah pah-RAH-dah deh ow-toh-BOOS', category: 'place', audio: 'la-parada' },
  // Transport
  { spanish: 'Un taxi, por favor', english: 'A taxi, please', pronunciation: 'oon TAHK-see pohr fah-BOHR', category: 'transport', audio: 'un-taxi' },
  { spanish: 'Quiero ir a...', english: 'I want to go to...', pronunciation: 'kee-EH-roh eer ah', category: 'transport', audio: 'quiero-ir-a' },
  { spanish: '¿Cuánto cuesta el taxi?', english: 'How much is the taxi?', pronunciation: 'KWAHN-toh KWEHS-tah ehl TAHK-see', category: 'transport', audio: 'cuanto-cuesta-taxi' },
  { spanish: 'Pare aquí, por favor', english: 'Stop here, please', pronunciation: 'PAH-reh ah-KEE pohr fah-BOHR', category: 'transport', audio: 'pare-aqui' },
  { spanish: 'El autobús', english: 'The bus', pronunciation: 'ehl ow-toh-BOOS', category: 'transport', audio: 'el-autobus' },
  { spanish: 'El metro', english: 'The subway', pronunciation: 'ehl MEH-troh', category: 'transport', audio: 'el-metro' },
  { spanish: 'A pie', english: 'On foot / Walking', pronunciation: 'ah pee-EH', category: 'transport', audio: 'a-pie' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })

export const L15Data: LessonData = {
  id: 'L1.5',
  hero: {
    lessonId: 'L1.5',
    title: 'Getting Around',
    subtitle: 'Directions, transportation & finding your way',
    description: 'Learn to ask for directions, take a taxi, find places, and navigate a Spanish-speaking city. These are the phrases that will get you from point A to point B.',
    image: '/images/L1.5/hero-directions-foto.png',
    gradient: 'from-sky-800/65 via-blue-700/55 to-indigo-700/65',
    accentColor: 'sky-200',
  },
  priorKnowledge: [
    {
      fromLesson: 'L1.2',
      label: 'Polite Phrases',
      detail: '"Por favor," "gracias," "disculpe" \u2014 essential when asking strangers for directions.',
    },
    {
      fromLesson: 'L1.3',
      label: 'Numbers',
      detail: 'Numbers help with addresses, bus lines, and taxi fares: "Calle treinta y dos," "L\u00ednea cinco."',
    },
    {
      fromLesson: 'L1.4',
      label: '\u00bfCu\u00e1nto cuesta?',
      detail: 'You already know how to ask prices \u2014 now use it for taxi fares and tickets.',
    },
  ],
  sectionTransitions: [
    { afterSection: 'locations', text: 'You can now ask where things are! Let\'s learn the directions to get there.' },
    { afterSection: 'directions', text: 'Great \u2014 you know left, right, and straight. Now let\'s learn the places you\'ll navigate to.' },
    { afterSection: 'places', text: 'You know the places! Now let\'s learn how to get around by taxi, bus, and on foot.' },
    { afterSection: 'transport', text: 'Your navigation toolkit is complete. Let\'s sharpen the pronunciation.' },
    { afterSection: 'dialogues', text: 'You just heard real direction-giving in action. Let\'s explore how navigation works in different countries.' },
    { afterSection: 'cultural', text: 'Ready for the challenge? Follow directions to reach your destination!' },
    { afterSection: 'direction-race', text: 'Final stretch \u2014 let\'s see how much you\'ve learned!' },
  ],
  personalizedVocab: [
    { spanish: '\u00bfD\u00f3nde est\u00e1...?', english: 'Where is...?' },
    { spanish: 'A la derecha / izquierda', english: 'To the right / left' },
    { spanish: 'Est\u00e1 cerca / lejos', english: 'It is close / far' },
    { spanish: 'Quiero ir a...', english: 'I want to go to...' },
    { spanish: 'Un taxi, por favor', english: 'A taxi, please' },
    { spanish: 'Pare aqu\u00ed', english: 'Stop here' },
  ],
  pronunciationChallenges: [
    { spanish: '\u00bfD\u00f3nde est\u00e1 el hotel?', pronunciation: 'DOHN-deh ehs-TAH ehl oh-TEHL', english: 'Where is the hotel?', audio: 'donde-esta', tip: 'Remember: H is silent (L1.1). "Hotel" = oh-TEHL, not "hoh-TEHL."' },
    { spanish: 'A la izquierda', pronunciation: 'ah lah ees-kee-EHR-dah', english: 'To the left', audio: 'a-la-izquierda', tip: 'The Z sounds like "s" in Latin America (L1.1). QU = "k" sound.' },
    { spanish: 'Quiero ir al aeropuerto', pronunciation: 'kee-EH-roh eer ahl ah-eh-roh-PWEHR-toh', english: 'I want to go to the airport', audio: 'quiero-ir-a', tip: '"Quiero" from L1.4! "Aeropuerto" has 5 syllables \u2014 take it slow.' },
    { spanish: 'Est\u00e1 en la esquina', pronunciation: 'ehs-TAH ehn lah ehs-KEE-nah', english: 'It is on the corner', audio: 'en-la-esquina', tip: 'QU before I = "k" sound (L1.1 rule). "Esquina" = ehs-KEE-nah.' },
    { spanish: 'Pare aqu\u00ed, por favor', pronunciation: 'PAH-reh ah-KEE pohr fah-BOHR', english: 'Stop here, please', audio: 'pare-aqui', tip: '"Por favor" from L1.2. Stress "ah-KEE" on the last syllable.' },
    { spanish: '\u00bfCu\u00e1nto cuesta el taxi?', pronunciation: 'KWAHN-toh KWEHS-tah ehl TAHK-see', english: 'How much is the taxi?', audio: 'cuanto-cuesta-taxi', tip: '"\u00bfCu\u00e1nto cuesta?" from L1.4 \u2014 now applied to transportation.' },
  ],
  objectives: [
    { icon: '\uD83D\uDDFA\uFE0F', title: 'Ask for Directions', desc: 'Ask where places are and understand basic directions' },
    { icon: '\u27A1\uFE0F', title: 'Give Directions', desc: 'Use left, right, straight, and location words' },
    { icon: '\uD83C\uDFE8', title: 'Find Places', desc: 'Learn names of common places: hotel, bank, pharmacy, station' },
    { icon: '\uD83D\uDE95', title: 'Use Transportation', desc: 'Take a taxi, bus, or metro and ask about fares' },
  ],
  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'locations', label: 'Asking for Locations' },
    { id: 'directions', label: 'Directions' },
    { id: 'places', label: 'Common Places' },
    { id: 'transport', label: 'Transportation' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'direction-sorting', label: 'Sort the Directions' },
    { id: 'dialogues', label: 'Real-World Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'direction-race', label: 'Direction Race' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],
  audioBase: '/audio/L1.5/phrases',
  phraseSections: [
    {
      id: 'locations',
      title: 'Asking for Locations',
      description: 'The most important question you\'ll ask as a traveler: "\u00bfD\u00f3nde est\u00e1...?" Notice: "estar" is used for LOCATION.',
      tabs: [
        { label: 'Location Questions', color: 'blue', phrases: PHRASES.filter(p => p.category === 'location'), columns: 2 },
      ],
    },
    {
      id: 'directions',
      title: 'Directions',
      description: 'Left, right, straight ahead, and relative positions. These words will get you anywhere.',
      tabs: [
        { label: 'Left / Right / Straight', color: 'emerald', phrases: PHRASES.filter(p => ['a-la-derecha', 'a-la-izquierda', 'derecho'].includes(p.audio)) },
        { label: 'Relative Position', color: 'teal', phrases: PHRASES.filter(p => ['en-la-esquina', 'al-lado-de', 'enfrente-de', 'detras-de', 'entre'].includes(p.audio)), columns: 2 },
      ],
    },
    {
      id: 'places',
      title: 'Common Places',
      description: 'The places you\'ll need to find in any city. Notice the articles: "el" (masculine) vs "la" (feminine).',
      tabs: [
        { label: 'All Places', color: 'amber', phrases: PHRASES.filter(p => p.category === 'place') },
      ],
    },
    {
      id: 'transport',
      title: 'Transportation',
      description: 'How to take a taxi, catch a bus, or walk. Combine these with directions to navigate like a local.',
      tabs: [
        { label: 'Getting Around', color: 'purple', phrases: PHRASES.filter(p => p.category === 'transport'), columns: 2 },
      ],
    },
  ],
  pronunciationTips: [
    {
      title: '"Estar" for Location',
      content: 'Spanish has two verbs for "to be": SER (identity) and ESTAR (location/state). For places, always use ESTAR: "El hotel est\u00e1 cerca" (The hotel IS close). You already know SER from L1.2 ("Soy de M\u00e9xico"). Now you\'re learning ESTAR for where things ARE.',
      example: 'SER: Soy de Colombia (identity) | ESTAR: Estoy en Colombia (location)',
    },
    {
      title: '"Derecho" vs "A la derecha" \u2014 Not the Same!',
      content: '"Derecho" or "recto" means straight ahead. "A la derecha" means to the right. They look similar but mean very different things! A common mistake is confusing "Go straight" with "Go right."',
      example: 'Derecho = straight ahead | A la derecha = to the right',
    },
    {
      title: 'Articles with Places: El vs La',
      content: 'Places have gender. "El" for masculine: el hotel, el banco, el hospital, el metro. "La" for feminine: la farmacia, la estaci\u00f3n, la parada. Learning the article WITH the noun is key \u2014 always memorize "el hotel" not just "hotel."',
      example: 'EL: hotel, banco, aeropuerto | LA: farmacia, estaci\u00f3n, parada',
    },
    {
      title: '"Quiero ir a..." \u2014 Building on L1.4',
      content: 'In L1.4 you learned "Quiero un caf\u00e9." Now add "ir a" (to go to): "Quiero ir al hotel" (I want to go to the hotel). Note: "a + el" contracts to "al." "A + la" stays separate: "a la farmacia."',
      example: 'Quiero ir AL hotel (a + el) | Quiero ir A LA farmacia',
      reviewFrom: 'L1.4',
    },
  ],
  flashcardGroups: [
    { key: 'locations-directions', label: 'Locations & Directions', audioKeys: ['donde-esta', 'esta-cerca', 'esta-lejos', 'a-la-derecha', 'a-la-izquierda', 'derecho', 'en-la-esquina', 'al-lado-de', 'enfrente-de', 'detras-de'] },
    { key: 'places', label: 'Places', audioKeys: ['el-hotel', 'el-aeropuerto', 'la-estacion', 'el-banco', 'la-farmacia', 'el-hospital', 'el-restaurante', 'el-supermercado', 'la-parada'] },
    { key: 'transport', label: 'Transportation', audioKeys: ['un-taxi', 'quiero-ir-a', 'cuanto-cuesta-taxi', 'pare-aqui', 'el-autobus', 'el-metro', 'a-pie'] },
  ],
  matchPairs: [
    { left: '\u00bfD\u00f3nde est\u00e1?', right: 'Where is it?' },
    { left: 'A la derecha', right: 'To the right' },
    { left: 'A la izquierda', right: 'To the left' },
    { left: 'Derecho', right: 'Straight ahead' },
    { left: 'Est\u00e1 cerca', right: 'It is close' },
    { left: 'La farmacia', right: 'The pharmacy' },
    { left: 'Pare aqu\u00ed', right: 'Stop here' },
    { left: 'El aeropuerto', right: 'The airport' },
  ],
  matchLabels: { left: 'Spanish', right: 'English' },
  sortActivities: [
    {
      title: 'El vs La (Masculine vs Feminine)',
      instruction: 'Sort each place by its article.',
      buckets: ['El (masculine)', 'La (feminine)'],
      items: [
        { text: 'Hotel', bucket: 'El (masculine)' },
        { text: 'Banco', bucket: 'El (masculine)' },
        { text: 'Hospital', bucket: 'El (masculine)' },
        { text: 'Aeropuerto', bucket: 'El (masculine)' },
        { text: 'Metro', bucket: 'El (masculine)' },
        { text: 'Farmacia', bucket: 'La (feminine)' },
        { text: 'Estaci\u00f3n', bucket: 'La (feminine)' },
        { text: 'Parada', bucket: 'La (feminine)' },
      ],
    },
    {
      title: 'Location vs Direction',
      instruction: 'Sort each phrase: is it asking WHERE something is, or HOW to get there?',
      buckets: ['Location (Where)', 'Direction (How)'],
      items: [
        { text: '\u00bfD\u00f3nde est\u00e1?', bucket: 'Location (Where)' },
        { text: 'Est\u00e1 cerca', bucket: 'Location (Where)' },
        { text: 'Est\u00e1 aqu\u00ed', bucket: 'Location (Where)' },
        { text: 'Al lado de', bucket: 'Location (Where)' },
        { text: 'A la derecha', bucket: 'Direction (How)' },
        { text: 'A la izquierda', bucket: 'Direction (How)' },
        { text: 'Derecho', bucket: 'Direction (How)' },
        { text: 'En la esquina', bucket: 'Direction (How)' },
      ],
    },
    {
      title: 'True or False?',
      instruction: 'Sort each statement as True or False.',
      buckets: ['True', 'False'],
      items: [
        { text: '"Estar" is used for location', bucket: 'True' },
        { text: '"Cerca" means close', bucket: 'True' },
        { text: '"A + el" contracts to "al"', bucket: 'True' },
        { text: '"A pie" means on foot', bucket: 'True' },
        { text: '"Derecho" means to the right', bucket: 'False' },
        { text: '"El farmacia" is correct', bucket: 'False' },
        { text: '"Estoy perdido" uses "ser"', bucket: 'False' },
        { text: '"Lejos" means close', bucket: 'False' },
      ],
    },
  ],
  sortSectionId: 'direction-sorting',
  sortTitle: 'Sort the Directions',
  dialogues: [
    {
      id: 'dialogue-lost',
      title: 'Lost in the City \u2014 Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Turista', text: 'Disculpe, \u00bfd\u00f3nde est\u00e1 el hotel Reforma?', audio: '/audio/L1.5/dialogues/d1-line1.mp3',
          annotations: [{ phrase: 'Disculpe', fromLesson: 'L1.2', note: 'Excuse me (polite)' }] },
        { speaker: 'Local', text: 'Est\u00e1 cerca. Derecho dos cuadras y a la derecha.', audio: '/audio/L1.5/dialogues/d1-line2.mp3' },
        { speaker: 'Turista', text: '\u00bfDos cuadras a la derecha?', audio: '/audio/L1.5/dialogues/d1-line3.mp3' },
        { speaker: 'Local', text: 'S\u00ed, derecho primero, y luego a la derecha. Est\u00e1 al lado del banco.', audio: '/audio/L1.5/dialogues/d1-line4.mp3' },
        { speaker: 'Turista', text: 'Muchas gracias.', audio: '/audio/L1.5/dialogues/d1-line5.mp3',
          annotations: [{ phrase: 'Muchas gracias', fromLesson: 'L1.2', note: 'Thank you very much' }] },
      ],
    },
    {
      id: 'dialogue-taxi',
      title: 'Taking a Taxi \u2014 Bogot\u00e1',
      location: 'Bogot\u00e1',
      lines: [
        { speaker: 'Pasajero', text: 'Buenas tardes. Quiero ir al aeropuerto, por favor.', audio: '/audio/L1.5/dialogues/d2-line1.mp3',
          annotations: [{ phrase: 'Buenas tardes', fromLesson: 'L1.2', note: 'Good afternoon' }, { phrase: 'por favor', fromLesson: 'L1.2', note: 'Please' }] },
        { speaker: 'Taxista', text: 'S\u00ed, se\u00f1or. \u00bfPor cu\u00e1l ruta?', audio: '/audio/L1.5/dialogues/d2-line2.mp3' },
        { speaker: 'Pasajero', text: 'No s\u00e9. \u00bfCu\u00e1nto cuesta?', audio: '/audio/L1.5/dialogues/d2-line3.mp3',
          annotations: [{ phrase: '\u00bfCu\u00e1nto cuesta?', fromLesson: 'L1.4', note: 'How much does it cost?' }] },
        { speaker: 'Taxista', text: 'Son treinta y cinco mil pesos.', audio: '/audio/L1.5/dialogues/d2-line4.mp3',
          annotations: [{ phrase: 'treinta y cinco', fromLesson: 'L1.3', note: 'Thirty-five (number)' }] },
        { speaker: 'Pasajero', text: 'Perfecto. Pare aqu\u00ed, por favor. Gracias.', audio: '/audio/L1.5/dialogues/d2-line5.mp3',
          annotations: [{ phrase: 'Gracias', fromLesson: 'L1.2', note: 'Thank you' }] },
      ],
    },
  ],
  dialogueDescription: 'Listen to real situations where people ask for directions and take taxis in Spanish-speaking cities.',
  culturalNotes: [
    {
      title: 'Cuadras, Not Blocks',
      content: 'In Latin America, directions are given in "cuadras" (blocks): "Dos cuadras a la derecha." In Spain, they more often use street names and landmarks. Both systems work \u2014 but in Latin America, knowing your cuadras is essential.',
    },
    {
      title: 'Taxi Culture Varies by Country',
      content: 'Mexico: Use official taxis (look for the license plate). Colombia: Taxis have meters. Spain: Taxis are regulated with fixed rates to airports. Argentina: "Remis" (private car service) is as common as taxis. Always ask "\u00bfCu\u00e1nto cuesta?" before getting in if there\'s no meter.',
    },
    {
      title: 'Addresses \u2014 A Different System',
      content: 'Many Latin American cities use a grid system: "Calle 32 con Carrera 7" (Street 32 at Avenue 7). In Spain, addresses are like "Calle Gran V\u00eda, 42" (street name + number). Learning to read addresses is essential for taxis and directions.',
    },
  ],
  culturalGradient: 'from-sky-50 to-blue-50',
  quiz: [
    { id: 1, type: 'mc', text: 'You are lost. What do you say?', options: ['Soy perdido', 'Estoy perdido', 'Tengo perdido', 'Me perdido'], answer: 1 },
    { id: 2, type: 'mc', text: '\u00bfD\u00f3nde est\u00e1 la farmacia? \u2014 Est\u00e1 ___ del banco.', options: ['A la derecha', 'Al lado', 'Derecho', 'Lejos'], answer: 1 },
    { id: 3, type: 'tf', text: '"Derecho" and "a la derecha" mean the same thing.', answer: false },
    { id: 4, type: 'fill', text: 'Complete: "Quiero ir ___ aeropuerto" (to the)', answer: 'al' },
    { id: 5, type: 'mc', text: 'Which uses the correct article?', options: ['La hotel', 'El farmacia', 'La estaci\u00f3n', 'El parada'], answer: 2 },
    { id: 6, type: 'tf', text: '"Estar" is used for location, "ser" is used for identity.', answer: true },
    { id: 7, type: 'mc', text: 'You want the taxi to stop. You say:', options: ['Quiero ir', 'Pare aqu\u00ed, por favor', 'Est\u00e1 cerca', 'A la derecha'], answer: 1 },
    { id: 8, type: 'fill', text: 'Complete: "La farmacia est\u00e1 ___" (close)', answer: 'cerca' },
    { id: 9, type: 'mc', text: '"En la esquina" means:', options: ['In the park', 'On the corner', 'In front of', 'Behind'], answer: 1 },
    { id: 10, type: 'tf', text: '"A + el" contracts to "al" in Spanish.', answer: true },
    { id: 11, type: 'mc', text: 'You need a taxi. You say:', options: ['Un taxi, por favor', 'Quiero un taxi, gracias', 'Pare aqu\u00ed', 'Both A and B are correct'], answer: 3 },
    { id: 12, type: 'fill', text: 'Complete: "\u00bfD\u00f3nde ___ el hospital?" (is)', answer: 'est\u00e1' },
    { id: 13, type: 'mc', text: '"Enfrente de" means:', options: ['Behind', 'Next to', 'In front of', 'Between'], answer: 2 },
    { id: 14, type: 'mc', text: 'Which is NOT a form of transportation?', options: ['El metro', 'El autobus', 'A pie', 'La esquina'], answer: 3 },
    { id: 15, type: 'tf', text: '"A pie" means by car.', answer: false },
  ],
  uniqueActivity: {
    id: 'DirectionRaceL15',
    sectionId: 'direction-race',
    sectionColor: 'bg-sky-50/40',
    sectionBorder: 'border-sky-100',
  },
  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    locations: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    directions: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    places: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    transport: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    'matching-game': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'direction-sorting': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    dialogues: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'direction-race': { bg: 'bg-sky-50/40', border: 'border-sky-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}

export const L15PhraseByAudio = phraseByAudio

// Direction Race — visual grid map
// Grid layout (row, col) — student starts at center (1,1)
// "Derecho" ALWAYS means UP (north/forward)
// "A la derecha" = right, "A la izquierda" = left
//
//   (0,0) Farmacia   (0,1) Hospital   (0,2) Hotel
//   (1,0) Banco      (1,1) TÚ         (1,2) Restaurante
//   (2,0) Metro      (2,1) Parada     (2,2) Supermercado
export const DIRECTION_RACE_MAP = [
  [{ emoji: '💊', label: 'La farmacia' }, { emoji: '🏥', label: 'El hospital' }, { emoji: '🏨', label: 'El hotel' }],
  [{ emoji: '🏦', label: 'El banco' },   { emoji: '📍', label: 'TÚ' },          { emoji: '🍽️', label: 'El restaurante' }],
  [{ emoji: '🚇', label: 'El metro' },   { emoji: '🚏', label: 'La parada' },   { emoji: '🛒', label: 'El supermercado' }],
]

// Derecho = UP always. Izquierda = LEFT. Derecha = RIGHT.
export const DIRECTION_RACE_ROUNDS = [
  { instruction: 'A la izquierda', correct: 'El banco' },
  { instruction: 'A la derecha', correct: 'El restaurante' },
  { instruction: 'Derecho', correct: 'El hospital' },
  { instruction: 'Derecho y a la izquierda', correct: 'La farmacia' },
  { instruction: 'Derecho y a la derecha', correct: 'El hotel' },
  { instruction: 'A la derecha y abajo', correct: 'El supermercado' },
  { instruction: 'A la izquierda y abajo', correct: 'El metro' },
  { instruction: 'Abajo y a la derecha', correct: 'El supermercado' },
]
