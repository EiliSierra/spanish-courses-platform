// Alphabet data used across multiple components
export interface LetterData {
  letter: string
  name: string
  hint: string
  vowel: boolean
  audio: string
  word: string
}

export const ALPHABET: LetterData[] = [
  { letter: 'A', name: 'a', hint: '"ah" as in father', vowel: true, audio: 'a', word: 'amigo' },
  { letter: 'B', name: 'be', hint: 'like English "b"', vowel: false, audio: 'b', word: 'boca' },
  { letter: 'C', name: 'ce', hint: '"s" before e/i, "k" otherwise', vowel: false, audio: 'c', word: 'casa' },
  { letter: 'D', name: 'de', hint: 'softer than English "d"', vowel: false, audio: 'd', word: 'dedo' },
  { letter: 'E', name: 'e', hint: '"eh" as in met', vowel: true, audio: 'e', word: 'escuela' },
  { letter: 'F', name: 'efe', hint: 'like English "f"', vowel: false, audio: 'f', word: 'familia' },
  { letter: 'G', name: 'ge', hint: 'soft before e/i, hard otherwise', vowel: false, audio: 'g', word: 'gato' },
  { letter: 'H', name: 'hache', hint: 'always silent', vowel: false, audio: 'h', word: 'hola' },
  { letter: 'I', name: 'i', hint: '"ee" as in see', vowel: true, audio: 'i', word: 'isla' },
  { letter: 'J', name: 'jota', hint: 'like English "h"', vowel: false, audio: 'j', word: 'jugo' },
  { letter: 'K', name: 'ka', hint: 'like English "k"', vowel: false, audio: 'k', word: 'kilo' },
  { letter: 'L', name: 'ele', hint: 'like English "l"', vowel: false, audio: 'l', word: 'luna' },
  { letter: 'M', name: 'eme', hint: 'like English "m"', vowel: false, audio: 'm', word: 'mesa' },
  { letter: 'N', name: 'ene', hint: 'like English "n"', vowel: false, audio: 'n', word: 'nariz' },
  { letter: 'Ñ', name: 'eñe', hint: '"ny" as in canyon', vowel: false, audio: 'ñ', word: 'niño' },
  { letter: 'O', name: 'o', hint: '"oh" as in hope', vowel: true, audio: 'o', word: 'ojo' },
  { letter: 'P', name: 'pe', hint: 'like English "p"', vowel: false, audio: 'p', word: 'perro' },
  { letter: 'Q', name: 'cu', hint: '"k" sound (always with u)', vowel: false, audio: 'q', word: 'queso' },
  { letter: 'R', name: 'erre', hint: 'rolled / trilled', vowel: false, audio: 'r', word: 'rosa' },
  { letter: 'S', name: 'ese', hint: 'like English "s"', vowel: false, audio: 's', word: 'sol' },
  { letter: 'T', name: 'te', hint: 'softer than English "t"', vowel: false, audio: 't', word: 'tomate' },
  { letter: 'U', name: 'u', hint: '"oo" as in food', vowel: true, audio: 'u', word: 'uva' },
  { letter: 'V', name: 'uve', hint: 'sounds like "b"', vowel: false, audio: 'v', word: 'vaca' },
  { letter: 'W', name: 'doble uve', hint: '"w" sound (rare in Spanish)', vowel: false, audio: 'w', word: 'wifi' },
  { letter: 'X', name: 'equis', hint: '"ks" or "s"', vowel: false, audio: 'x', word: 'taxi' },
  { letter: 'Y', name: 'ye', hint: '"y" as in yes', vowel: false, audio: 'y', word: 'yogur' },
  { letter: 'Z', name: 'zeta', hint: '"s" (Latin America)', vowel: false, audio: 'z', word: 'zapato' },
]

export const VOWELS = ALPHABET.filter((l) => l.vowel)
export const CONSONANTS = ALPHABET.filter((l) => !l.vowel)

// Sections for sidebar navigation
export interface SectionDef {
  id: string
  title: string
}

export const SECTIONS: SectionDef[] = [
  { id: 'welcome', title: 'Welcome' },
  { id: 'why-alphabet', title: "What You'll Learn" },
  { id: 'vowels', title: 'Spanish Vowels' },
  { id: 'consonants', title: 'Standard Consonants' },
  { id: 'unique-letters', title: 'Unique Spanish Letters' },
  { id: 'pronunciation-tips', title: 'Pronunciation Tips' },
  { id: 'pronunciation-board', title: 'Flashcards' },
  { id: 'matching-game', title: 'Matching Game' },
  { id: 'spelling-bee', title: 'Spelling Bee' },
  { id: 'letter-sorting', title: 'Letter Sorting' },
  { id: 'dialogues', title: 'Real-World Dialogues' },
  { id: 'cultural', title: 'The Alphabet in Action' },
  { id: 'lightning-round', title: 'Lightning Round' },
  { id: 'knowledge-check', title: 'Knowledge Check' },
]

// Matching game pairs
export const MATCH_PAIRS = [
  { name: 'eñe', letter: 'Ñ' },
  { name: 'hache', letter: 'H' },
  { name: 'jota', letter: 'J' },
  { name: 'ge', letter: 'G' },
  { name: 'cu', letter: 'Q' },
  { name: 'zeta', letter: 'Z' },
  { name: 'elle', letter: 'LL' },
  { name: 'doble erre', letter: 'RR' },
  { name: 'equis', letter: 'X' },
  { name: 'ye', letter: 'Y' },
]

// Quiz questions
export interface QuizQuestion {
  id: number
  type: 'mc' | 'tf' | 'fill'
  text: string
  options?: string[]
  correct: number | boolean | string
  explanation: string
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 1, type: 'mc', text: 'How many letters are in the Spanish alphabet?',
    options: ['26', '27', '28', '30'], correct: 1,
    explanation: 'The Spanish alphabet has 27 letters, including the unique letter Ñ.' },
  { id: 2, type: 'mc', text: 'Which letter is unique to the Spanish alphabet?',
    options: ['LL', 'Ñ', 'CH', 'RR'], correct: 1,
    explanation: 'Ñ is the only letter unique to the Spanish alphabet. LL, CH, and RR are digraphs.' },
  { id: 3, type: 'tf', text: 'The Spanish alphabet is entirely phonetic.',
    correct: true,
    explanation: 'Spanish is a highly phonetic language — words are pronounced as they are written.' },
  { id: 4, type: 'mc', text: 'How is "a" pronounced in Spanish?',
    options: ['Like "a" in "cat"', 'Like "a" in "father"', 'Like "a" in "cake"', 'Like "a" in "about"'], correct: 1,
    explanation: 'The Spanish "a" is always an open "ah" sound, like the "a" in "father."' },
  { id: 5, type: 'mc', text: 'Which of these is a Spanish vowel?',
    options: ['Ñ', 'LL', 'U', 'R'], correct: 2,
    explanation: 'U is one of the five Spanish vowels: A, E, I, O, U.' },
  { id: 6, type: 'tf', text: 'The letter "h" is always silent in Spanish.',
    correct: true,
    explanation: 'Correct! The letter H (hache) is always silent in Spanish. "Hola" is pronounced "oh-la."' },
  { id: 7, type: 'mc', text: 'How is "ñ" pronounced?',
    options: ['Like "n" in "no"', 'Like "ny" in "canyon"', 'Like "gn" in "sign"', 'Like "nn" in "inner"'], correct: 1,
    explanation: 'Ñ is pronounced like "ny" in "canyon." Think of "niño" (child) = "nee-nyoh."' },
  { id: 8, type: 'fill', text: 'The Spanish word for "child" is ni_o. Fill in the missing letter.',
    correct: 'ñ',
    explanation: 'The word is "niño" — the Ñ creates the "ny" sound that is essential to this word.' },
  { id: 9, type: 'mc', text: 'The letter "c" before "e" or "i" sounds like:',
    options: ['"k"', '"s"', '"ch"', '"th"'], correct: 1,
    explanation: 'In Latin American Spanish, "c" before "e" or "i" sounds like "s" (e.g., cielo = "syeh-lo").' },
  { id: 10, type: 'tf', text: 'The letter "r" in Spanish is rolled or trilled.',
    correct: true,
    explanation: 'The Spanish R is rolled (trilled), especially when doubled (RR) or at the beginning of a word.' },
  { id: 11, type: 'mc', text: '"LL" is pronounced similar to:',
    options: ['"l" in "love"', '"y" in "yes"', '"j" in "jar"', '"ll" in "llama" (English)'], correct: 1,
    explanation: 'In most Spanish dialects, LL sounds like the "y" in "yes."' },
  { id: 12, type: 'fill', text: 'The Spanish word for "rain" is __uvia. Fill in the missing letters.',
    correct: 'll',
    explanation: 'The word is "lluvia" — the double L (LL) creates a "y" sound.' },
  { id: 13, type: 'mc', text: 'Which word contains a silent letter?',
    options: ['Casa', 'Hola', 'Perro', 'Gato'], correct: 1,
    explanation: '"Hola" contains the silent letter H. It is pronounced "oh-la," not "ho-la."' },
  { id: 14, type: 'mc', text: '"G" before "e" or "i" sounds:',
    options: ['Hard like "go"', 'Soft, similar to "h"', 'Like "j" in English', 'Silent'], correct: 1,
    explanation: 'Before E or I, the Spanish G has a soft, breathy sound similar to the English "h."' },
  { id: 15, type: 'tf', text: 'Each Spanish vowel has only one consistent sound.',
    correct: true,
    explanation: 'Unlike English, where vowels can have many different sounds, each Spanish vowel has one reliable pronunciation.' },
]

// Sorting activities
export interface SortItem {
  text: string
  bucket: string
}

export interface SortActivity {
  title: string
  instruction: string
  items: SortItem[]
  buckets: string[]
}

export const SORT_ACTIVITIES: Record<string, SortActivity> = {
  'sort-vowels': {
    title: 'Vowels vs. Consonants',
    instruction: 'Drag each letter to the correct category.',
    items: [
      { text: 'A', bucket: 'Vowels' }, { text: 'E', bucket: 'Vowels' },
      { text: 'I', bucket: 'Vowels' }, { text: 'O', bucket: 'Vowels' },
      { text: 'U', bucket: 'Vowels' }, { text: 'B', bucket: 'Consonants' },
      { text: 'F', bucket: 'Consonants' }, { text: 'J', bucket: 'Consonants' },
      { text: 'Ñ', bucket: 'Consonants' }, { text: 'R', bucket: 'Consonants' },
    ],
    buckets: ['Vowels', 'Consonants'],
  },
  'sort-similar': {
    title: 'Similar to English vs. Different',
    instruction: 'Sort each letter based on whether it sounds similar to English or different in Spanish.',
    items: [
      { text: 'A', bucket: 'Similar to English' }, { text: 'B', bucket: 'Similar to English' },
      { text: 'D', bucket: 'Similar to English' }, { text: 'F', bucket: 'Similar to English' },
      { text: 'K', bucket: 'Similar to English' }, { text: 'L', bucket: 'Similar to English' },
      { text: 'M', bucket: 'Similar to English' }, { text: 'P', bucket: 'Similar to English' },
      { text: 'S', bucket: 'Similar to English' }, { text: 'T', bucket: 'Similar to English' },
      { text: 'C', bucket: 'Sounds Different' }, { text: 'G', bucket: 'Sounds Different' },
      { text: 'H', bucket: 'Sounds Different' }, { text: 'J', bucket: 'Sounds Different' },
      { text: 'Ñ', bucket: 'Sounds Different' }, { text: 'R', bucket: 'Sounds Different' },
      { text: 'V', bucket: 'Sounds Different' }, { text: 'Z', bucket: 'Sounds Different' },
      { text: 'LL', bucket: 'Sounds Different' }, { text: 'Y', bucket: 'Sounds Different' },
    ],
    buckets: ['Similar to English', 'Sounds Different'],
  },
  'sort-truefalse': {
    title: 'True or False?',
    instruction: 'Drag each statement to True or False.',
    items: [
      { text: 'The letter H is always silent in Spanish', bucket: 'True' },
      { text: 'B and V sound almost identical in Spanish', bucket: 'True' },
      { text: 'Ñ is a letter that does not exist in English', bucket: 'True' },
      { text: 'Spanish has 27 letters in its alphabet', bucket: 'True' },
      { text: 'The letter J sounds like a strong English H', bucket: 'True' },
      { text: 'Spanish has 26 letters, same as English', bucket: 'False' },
      { text: 'The letter H is pronounced like English H', bucket: 'False' },
      { text: 'Z always sounds like "z" in "zoo" in Spanish', bucket: 'False' },
      { text: 'Ñ is just an N with a decoration — same sound', bucket: 'False' },
      { text: 'Q is always followed by the letter A in Spanish', bucket: 'False' },
    ],
    buckets: ['True', 'False'],
  },
}

// Lightning round pool
export const LR_POOL = ALPHABET.map((l) => ({ letter: l.letter, name: l.name }))

// Dialogue data
export interface DialogueLine {
  speaker: string
  text: string
  audio: string
}

export interface Dialogue {
  id: string
  title: string
  location: string
  lines: DialogueLine[]
}

export const DIALOGUES: Dialogue[] = [
  {
    id: 'dialogue-airport',
    title: 'Spelling Your Name — At the Airport',
    location: 'Airport',
    lines: [
      { speaker: 'Agent', text: 'Hola, buenos días. ¿Cómo se escribe su nombre?', audio: '/audio/L1.1/dialogue_0_0.mp3' },
      { speaker: 'Anna', text: 'Me llamo Anna. Se escribe: a, ene, ene, a.', audio: '/audio/L1.1/dialogue_0_1.mp3' },
      { speaker: 'Agent', text: 'Gracias. ¿Y su apellido?', audio: '/audio/L1.1/dialogue_0_2.mp3' },
      { speaker: 'Anna', text: 'Lee. Se escribe: ele, e, e.', audio: '/audio/L1.1/dialogue_0_3.mp3' },
      { speaker: 'Agent', text: '¿Puede repetir? ¿Ele, e, e?', audio: '/audio/L1.1/dialogue_0_4.mp3' },
      { speaker: 'Anna', text: 'Sí, correcto. Ele, e, e. Lee.', audio: '/audio/L1.1/dialogue_0_5.mp3' },
    ],
  },
  {
    id: 'dialogue-classroom',
    title: 'Spelling Practice — In the Classroom',
    location: 'Classroom',
    lines: [
      { speaker: 'Teacher', text: 'Vamos a deletrear palabras en español. ¿Cómo se escribe guitarra?', audio: '/audio/L1.1/dialogue_1_0.mp3' },
      { speaker: 'Student', text: 'Se escribe: ge, u, i, te, a, erre, erre, a.', audio: '/audio/L1.1/dialogue_1_1.mp3' },
      { speaker: 'Teacher', text: 'Muy bien. ¿Y queso?', audio: '/audio/L1.1/dialogue_1_2.mp3' },
      { speaker: 'Student', text: 'Cu, u, e, ese, o.', audio: '/audio/L1.1/dialogue_1_3.mp3' },
      { speaker: 'Teacher', text: 'Excelente. Ahora una difícil: zapato.', audio: '/audio/L1.1/dialogue_1_4.mp3' },
      { speaker: 'Student', text: 'Zeta, a, pe, a, te, o.', audio: '/audio/L1.1/dialogue_1_5.mp3' },
      { speaker: 'Teacher', text: '¡Perfecto! Ya conoces bien las letras.', audio: '/audio/L1.1/dialogue_1_6.mp3' },
    ],
  },
]
