// L1.2 — Meeting People: Greetings, Farewells, Polite Expressions, Introductions

export interface PhraseData {
  spanish: string
  english: string
  pronunciation: string
  category: 'greeting' | 'farewell' | 'polite' | 'introduction' | 'question'
  audio: string // filename without extension
}

export const PHRASES: PhraseData[] = [
  // Greetings
  { spanish: 'Hola', english: 'Hello', pronunciation: 'oh-lah', category: 'greeting', audio: 'hola' },
  { spanish: 'Buenos días', english: 'Good morning', pronunciation: 'BWEH-nos DEE-ahs', category: 'greeting', audio: 'buenos-dias' },
  { spanish: 'Buenas tardes', english: 'Good afternoon', pronunciation: 'BWEH-nahs TAR-dehs', category: 'greeting', audio: 'buenas-tardes' },
  { spanish: 'Buenas noches', english: 'Good evening', pronunciation: 'BWEH-nahs NOH-chehs', category: 'greeting', audio: 'buenas-noches' },
  { spanish: '¿Cómo está?', english: 'How are you?', pronunciation: 'KOH-moh ehs-TAH', category: 'greeting', audio: 'como-esta' },
  { spanish: '¿Qué tal?', english: "How's it going?", pronunciation: 'keh tahl', category: 'greeting', audio: 'que-tal' },
  // Farewells
  { spanish: 'Adiós', english: 'Goodbye', pronunciation: 'ah-dee-OHS', category: 'farewell', audio: 'adios' },
  { spanish: 'Hasta luego', english: 'See you later', pronunciation: 'AHS-tah LWEH-goh', category: 'farewell', audio: 'hasta-luego' },
  { spanish: 'Hasta mañana', english: 'See you tomorrow', pronunciation: 'AHS-tah mah-NYAH-nah', category: 'farewell', audio: 'hasta-manana' },
  { spanish: 'Nos vemos', english: 'See you', pronunciation: 'nohs VEH-mohs', category: 'farewell', audio: 'nos-vemos' },
  { spanish: 'Chao', english: 'Bye', pronunciation: 'chow', category: 'farewell', audio: 'chao' },
  { spanish: 'Hasta pronto', english: 'See you soon', pronunciation: 'AHS-tah PROHN-toh', category: 'farewell', audio: 'hasta-pronto' },
  // Polite expressions
  { spanish: 'Gracias', english: 'Thank you', pronunciation: 'GRAH-see-ahs', category: 'polite', audio: 'gracias' },
  { spanish: 'Muchas gracias', english: 'Thank you very much', pronunciation: 'MOO-chahs GRAH-see-ahs', category: 'polite', audio: 'muchas-gracias' },
  { spanish: 'Mil gracias', english: 'A thousand thanks', pronunciation: 'meel GRAH-see-ahs', category: 'polite', audio: 'mil-gracias' },
  { spanish: 'Por favor', english: 'Please', pronunciation: 'pohr fah-BOHR', category: 'polite', audio: 'por-favor' },
  { spanish: '¿Puede ayudarme?', english: 'Can you help me?', pronunciation: 'PWEH-deh ah-yoo-DAR-meh', category: 'polite', audio: 'puede-ayudarme' },
  { spanish: 'Disculpe', english: 'Excuse me', pronunciation: 'dees-KOOL-peh', category: 'polite', audio: 'disculpe' },
  { spanish: 'Lo siento', english: "I'm sorry", pronunciation: 'loh see-EHN-toh', category: 'polite', audio: 'lo-siento' },
  { spanish: 'Perdón', english: 'Pardon', pronunciation: 'pehr-DOHN', category: 'polite', audio: 'perdon' },
  { spanish: 'Bien, gracias', english: 'Fine, thank you', pronunciation: 'bee-EHN GRAH-see-ahs', category: 'polite', audio: 'bien-gracias' },
  // Introductions
  { spanish: 'Me llamo...', english: 'My name is...', pronunciation: 'meh YAH-moh', category: 'introduction', audio: 'me-llamo' },
  { spanish: 'Mucho gusto', english: 'Nice to meet you', pronunciation: 'MOO-choh GOOS-toh', category: 'introduction', audio: 'mucho-gusto' },
  { spanish: 'Encantado/a', english: 'Delighted to meet you', pronunciation: 'ehn-kahn-TAH-doh', category: 'introduction', audio: 'encantado' },
  { spanish: 'Soy de...', english: "I'm from...", pronunciation: 'soy deh', category: 'introduction', audio: 'soy-de' },
  { spanish: '¿Cómo te llamas?', english: "What's your name? (informal)", pronunciation: 'KOH-moh teh YAH-mahs', category: 'introduction', audio: 'como-te-llamas' },
  { spanish: '¿De dónde eres?', english: 'Where are you from? (informal)', pronunciation: 'deh DOHN-deh EH-rehs', category: 'introduction', audio: 'de-donde-eres' },
  { spanish: 'Muy bien, gracias', english: 'Very well, thank you', pronunciation: 'mooy bee-EHN GRAH-see-ahs', category: 'introduction', audio: 'muy-bien' },
  { spanish: 'Más o menos', english: 'So-so', pronunciation: 'mahs oh MEH-nohs', category: 'introduction', audio: 'mas-o-menos' },
  { spanish: '¿Cómo se llama?', english: "What's your name? (formal)", pronunciation: 'KOH-moh seh YAH-mah', category: 'introduction', audio: 'como-se-llama' },
  { spanish: '¿De dónde es?', english: 'Where are you from? (formal)', pronunciation: 'deh DOHN-deh ehs', category: 'introduction', audio: 'de-donde-es' },
  { spanish: 'Soy...', english: 'I am...', pronunciation: 'soy', category: 'introduction', audio: 'soy' },
  { spanish: 'El gusto es mío', english: 'The pleasure is mine', pronunciation: 'ehl GOOS-toh ehs MEE-oh', category: 'introduction', audio: 'el-gusto-es-mio' },
  // Essential questions
  { spanish: '¿Habla inglés?', english: 'Do you speak English?', pronunciation: 'AH-blah een-GLEHS', category: 'question', audio: 'habla-ingles' },
  { spanish: 'No entiendo', english: "I don't understand", pronunciation: 'noh ehn-tee-EHN-doh', category: 'question', audio: 'no-entiendo' },
  { spanish: 'No sé', english: "I don't know", pronunciation: 'noh seh', category: 'question', audio: 'no-se' },
  { spanish: 'No hablo español', english: "I don't speak Spanish", pronunciation: 'noh AH-bloh ehs-pah-NYOHL', category: 'question', audio: 'no-hablo-espanol' },
  { spanish: '¿Puede repetir?', english: 'Can you repeat that?', pronunciation: 'PWEH-deh reh-peh-TEER', category: 'question', audio: 'puede-repetir' },
  { spanish: 'Más despacio, por favor', english: 'Slower, please', pronunciation: 'mahs dehs-PAH-see-oh', category: 'question', audio: 'mas-despacio' },
  { spanish: '¿Dónde está...?', english: 'Where is...?', pronunciation: 'DOHN-deh ehs-TAH', category: 'question', audio: 'donde-esta' },
  { spanish: '¿Cuánto cuesta?', english: 'How much does it cost?', pronunciation: 'KWAHN-toh KWES-tah', category: 'question', audio: 'cuanto-cuesta' },
  { spanish: '¿Qué hora es?', english: 'What time is it?', pronunciation: 'keh OH-rah ehs', category: 'question', audio: 'que-hora-es' },
]

export const GREETINGS = PHRASES.filter(p => p.category === 'greeting')
export const FAREWELLS = PHRASES.filter(p => p.category === 'farewell')
export const POLITE = PHRASES.filter(p => p.category === 'polite')
export const INTRODUCTIONS = PHRASES.filter(p => p.category === 'introduction')
export const QUESTIONS = PHRASES.filter(p => p.category === 'question')

export const SECTIONS_L12 = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'why-greetings', label: "What You'll Learn" },
  { id: 'greetings', label: 'Spanish Greetings' },
  { id: 'farewells', label: 'Farewells' },
  { id: 'polite-expressions', label: 'Polite Expressions' },
  { id: 'introductions', label: 'Introducing Yourself' },
  { id: 'essential-questions', label: 'Essential Questions' },
  { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'matching-game', label: 'Matching Game' },
  { id: 'phrase-sorting', label: 'Sort the Phrases' },
  { id: 'dialogues', label: 'Real-World Dialogues' },
  { id: 'cultural', label: 'Culture & Real Life' },
  { id: 'knowledge-check', label: 'Knowledge Check' },
]

export const MATCH_PAIRS_L12 = [
  { left: 'Hola', right: 'Hello' },
  { left: 'Adiós', right: 'Goodbye' },
  { left: 'Gracias', right: 'Thank you' },
  { left: 'Por favor', right: 'Please' },
  { left: 'Hasta luego', right: 'See you later' },
  { left: 'Lo siento', right: "I'm sorry" },
  { left: 'Buenos días', right: 'Good morning' },
  { left: 'No entiendo', right: "I don't understand" },
]

export const SORT_ACTIVITIES_L12 = [
  {
    title: 'Formal vs. Informal',
    instruction: 'Sort each phrase into Formal or Informal',
    buckets: ['Formal', 'Informal'],
    items: [
      { text: '¿Cómo está usted?', bucket: 'Formal' },
      { text: 'Mucho gusto', bucket: 'Formal' },
      { text: 'Disculpe', bucket: 'Formal' },
      { text: '¿Cómo se llama?', bucket: 'Formal' },
      { text: '¿Qué tal?', bucket: 'Informal' },
      { text: 'Chao', bucket: 'Informal' },
      { text: 'Nos vemos', bucket: 'Informal' },
      { text: '¿Cómo te llamas?', bucket: 'Informal' },
    ],
  },
  {
    title: 'Greetings vs. Farewells',
    instruction: 'Sort each phrase into Greetings or Farewells',
    buckets: ['Greetings', 'Farewells'],
    items: [
      { text: 'Hola', bucket: 'Greetings' },
      { text: 'Buenos días', bucket: 'Greetings' },
      { text: 'Buenas tardes', bucket: 'Greetings' },
      { text: '¿Cómo está?', bucket: 'Greetings' },
      { text: 'Adiós', bucket: 'Farewells' },
      { text: 'Hasta luego', bucket: 'Farewells' },
      { text: 'Hasta mañana', bucket: 'Farewells' },
      { text: 'Nos vemos', bucket: 'Farewells' },
    ],
  },
  {
    title: 'True or False?',
    instruction: 'Sort each statement as True or False',
    buckets: ['True', 'False'],
    items: [
      { text: '"Buenas noches" = greeting & farewell', bucket: 'True' },
      { text: 'Skipping a greeting is rude in Spanish', bucket: 'True' },
      { text: '"Me llamo" = "I call myself"', bucket: 'True' },
      { text: '"Encantado/a" changes by gender', bucket: 'True' },
      { text: '"Tú" is the formal "you"', bucket: 'False' },
      { text: '"Adiós" is the most casual farewell', bucket: 'False' },
      { text: '"Disculpe" and "Lo siento" = same', bucket: 'False' },
      { text: '"Buenos días" works at any time', bucket: 'False' },
    ],
  },
]

export const DIALOGUES_L12 = [
  {
    id: 'dialogue-conference',
    title: 'Meeting Someone New — At a Conference',
    location: 'Conference',
    lines: [
      { speaker: 'Ana', text: 'Hola, buenos días. Me llamo Ana. ¿Cómo se llama?', audio: '/audio/L1.2/dialogues/dialogue_0_0.mp3' },
      { speaker: 'Luis', text: 'Buenos días. Soy Luis. Mucho gusto.', audio: '/audio/L1.2/dialogues/dialogue_0_1.mp3' },
      { speaker: 'Ana', text: 'Encantada. ¿De dónde es?', audio: '/audio/L1.2/dialogues/dialogue_0_2.mp3' },
      { speaker: 'Luis', text: 'Soy de Colombia. ¿Y usted?', audio: '/audio/L1.2/dialogues/dialogue_0_3.mp3' },
      { speaker: 'Ana', text: 'Soy de México. ¿Cómo está?', audio: '/audio/L1.2/dialogues/dialogue_0_4.mp3' },
      { speaker: 'Luis', text: 'Muy bien, gracias. El gusto es mío.', audio: '/audio/L1.2/dialogues/dialogue_0_5.mp3' },
    ],
  },
  {
    id: 'dialogue-goodbye',
    title: 'Saying Goodbye — After Class',
    location: 'School',
    lines: [
      { speaker: 'Ana', text: 'Disculpe, ¿qué hora es?', audio: '/audio/L1.2/dialogues/dialogue_1_0.mp3' },
      { speaker: 'Luis', text: 'No sé... Ah, son las cinco.', audio: '/audio/L1.2/dialogues/dialogue_1_1.mp3' },
      { speaker: 'Ana', text: '¡Gracias! Me tengo que ir. Hasta luego.', audio: '/audio/L1.2/dialogues/dialogue_1_2.mp3' },
      { speaker: 'Luis', text: 'Hasta mañana. Nos vemos en clase.', audio: '/audio/L1.2/dialogues/dialogue_1_3.mp3' },
      { speaker: 'Ana', text: '¡Muchas gracias por todo! ¡Chao!', audio: '/audio/L1.2/dialogues/dialogue_1_4.mp3' },
      { speaker: 'Luis', text: '¡Chao! Que te vaya bien.', audio: '/audio/L1.2/dialogues/dialogue_1_5.mp3' },
    ],
  },
]

export const QUIZ_L12 = [
  { id: 1, type: 'mc' as const, text: 'Which greeting would you use at 10 AM?', options: ['Buenas tardes', 'Buenos días', 'Buenas noches', 'Hasta luego'], answer: 1 },
  { id: 2, type: 'mc' as const, text: "What does 'Hasta luego' mean?", options: ['Goodbye forever', 'See you later', 'Good night', 'Thank you'], answer: 1 },
  { id: 3, type: 'tf' as const, text: "'Buenas noches' can be used both as a greeting and farewell.", answer: true },
  { id: 4, type: 'mc' as const, text: "How do you say 'Please' in Spanish?", options: ['Gracias', 'De nada', 'Por favor', 'Disculpe'], answer: 2 },
  { id: 5, type: 'mc' as const, text: 'Which phrase would you use to apologize for bumping into someone?', options: ['Lo siento', 'Gracias', 'Hola', 'Chao'], answer: 0 },
  { id: 6, type: 'tf' as const, text: "'Chao' is a formal way to say goodbye.", answer: false },
  { id: 7, type: 'mc' as const, text: "What is the formal way to ask 'How are you?'", options: ['¿Qué tal?', '¿Qué onda?', '¿Cómo está usted?', '¿Cómo estás?'], answer: 2 },
  { id: 8, type: 'fill' as const, text: "Complete: 'Muchas ___' (Thank you very much)", answer: 'gracias' },
  { id: 9, type: 'mc' as const, text: 'Someone is talking too fast. What do you say?', options: ['No sé', 'Más despacio, por favor', 'Lo siento', 'Perdón'], answer: 1 },
  { id: 10, type: 'tf' as const, text: "'Disculpe' and 'Lo siento' mean exactly the same thing.", answer: false },
  { id: 11, type: 'mc' as const, text: "You're leaving work and will see your coworker tomorrow. You say:", options: ['Adiós', 'Hasta mañana', 'Chao', 'Buenas noches'], answer: 1 },
  { id: 12, type: 'fill' as const, text: "Complete: 'No hablo ___' (I don't speak Spanish)", answer: 'español' },
  { id: 13, type: 'mc' as const, text: "What does 'No entiendo' mean?", options: ["I don't know", "I don't speak", "I don't understand", "I'm sorry"], answer: 2 },
  { id: 14, type: 'mc' as const, text: 'What is the most universal, all-purpose greeting in Spanish?', options: ['Buenos días', 'Buenas tardes', 'Hola', '¿Qué tal?'], answer: 2 },
  { id: 15, type: 'tf' as const, text: "It's OK to skip greetings and go straight to business in Spanish-speaking cultures.", answer: false },
]
