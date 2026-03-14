// L1.3 — Numbers & Time

export interface PhraseData {
  spanish: string
  english: string
  pronunciation: string
  category: 'number-basic' | 'number-advanced' | 'time' | 'age' | 'phone-date'
  audio: string
}

export const PHRASES: PhraseData[] = [
  // Numbers 0-10
  { spanish: 'Cero', english: 'Zero (0)', pronunciation: 'SEH-roh', category: 'number-basic', audio: 'cero' },
  { spanish: 'Uno', english: 'One (1)', pronunciation: 'OO-noh', category: 'number-basic', audio: 'uno' },
  { spanish: 'Dos', english: 'Two (2)', pronunciation: 'dohs', category: 'number-basic', audio: 'dos' },
  { spanish: 'Tres', english: 'Three (3)', pronunciation: 'trehs', category: 'number-basic', audio: 'tres' },
  { spanish: 'Cuatro', english: 'Four (4)', pronunciation: 'KWAH-troh', category: 'number-basic', audio: 'cuatro' },
  { spanish: 'Cinco', english: 'Five (5)', pronunciation: 'SEEN-koh', category: 'number-basic', audio: 'cinco' },
  { spanish: 'Seis', english: 'Six (6)', pronunciation: 'says', category: 'number-basic', audio: 'seis' },
  { spanish: 'Siete', english: 'Seven (7)', pronunciation: 'see-EH-teh', category: 'number-basic', audio: 'siete' },
  { spanish: 'Ocho', english: 'Eight (8)', pronunciation: 'OH-choh', category: 'number-basic', audio: 'ocho' },
  { spanish: 'Nueve', english: 'Nine (9)', pronunciation: 'NWEH-beh', category: 'number-basic', audio: 'nueve' },
  { spanish: 'Diez', english: 'Ten (10)', pronunciation: 'dee-EHS', category: 'number-basic', audio: 'diez' },
  // Numbers 11-20
  { spanish: 'Once', english: 'Eleven (11)', pronunciation: 'OHN-seh', category: 'number-basic', audio: 'once' },
  { spanish: 'Doce', english: 'Twelve (12)', pronunciation: 'DOH-seh', category: 'number-basic', audio: 'doce' },
  { spanish: 'Trece', english: 'Thirteen (13)', pronunciation: 'TREH-seh', category: 'number-basic', audio: 'trece' },
  { spanish: 'Catorce', english: 'Fourteen (14)', pronunciation: 'kah-TOHR-seh', category: 'number-basic', audio: 'catorce' },
  { spanish: 'Quince', english: 'Fifteen (15)', pronunciation: 'KEEN-seh', category: 'number-basic', audio: 'quince' },
  { spanish: 'Dieciséis', english: 'Sixteen (16)', pronunciation: 'dee-eh-see-SAYS', category: 'number-basic', audio: 'dieciseis' },
  { spanish: 'Diecisiete', english: 'Seventeen (17)', pronunciation: 'dee-eh-see-see-EH-teh', category: 'number-basic', audio: 'diecisiete' },
  { spanish: 'Dieciocho', english: 'Eighteen (18)', pronunciation: 'dee-eh-see-OH-choh', category: 'number-basic', audio: 'dieciocho' },
  { spanish: 'Diecinueve', english: 'Nineteen (19)', pronunciation: 'dee-eh-see-NWEH-beh', category: 'number-basic', audio: 'diecinueve' },
  { spanish: 'Veinte', english: 'Twenty (20)', pronunciation: 'BAYN-teh', category: 'number-basic', audio: 'veinte' },
  // Numbers 21-29
  { spanish: 'Veintiuno', english: 'Twenty-one (21)', pronunciation: 'bayn-tee-OO-noh', category: 'number-advanced', audio: 'veintiuno' },
  { spanish: 'Veintidós', english: 'Twenty-two (22)', pronunciation: 'bayn-tee-DOHS', category: 'number-advanced', audio: 'veintidos' },
  { spanish: 'Veintitrés', english: 'Twenty-three (23)', pronunciation: 'bayn-tee-TREHS', category: 'number-advanced', audio: 'veintitres' },
  { spanish: 'Veinticuatro', english: 'Twenty-four (24)', pronunciation: 'bayn-tee-KWAH-troh', category: 'number-advanced', audio: 'veinticuatro' },
  { spanish: 'Veinticinco', english: 'Twenty-five (25)', pronunciation: 'bayn-tee-SEEN-koh', category: 'number-advanced', audio: 'veinticinco' },
  { spanish: 'Veintiseis', english: 'Twenty-six (26)', pronunciation: 'bayn-tee-SAYS', category: 'number-advanced', audio: 'veintiseis' },
  { spanish: 'Veintisiete', english: 'Twenty-seven (27)', pronunciation: 'bayn-tee-see-EH-teh', category: 'number-advanced', audio: 'veintisiete' },
  { spanish: 'Veintiocho', english: 'Twenty-eight (28)', pronunciation: 'bayn-tee-OH-choh', category: 'number-advanced', audio: 'veintiocho' },
  { spanish: 'Veintinueve', english: 'Twenty-nine (29)', pronunciation: 'bayn-tee-NWEH-beh', category: 'number-advanced', audio: 'veintinueve' },
  // Tens 30-100
  { spanish: 'Treinta', english: 'Thirty (30)', pronunciation: 'TRAYN-tah', category: 'number-advanced', audio: 'treinta' },
  { spanish: 'Cuarenta', english: 'Forty (40)', pronunciation: 'kwah-REHN-tah', category: 'number-advanced', audio: 'cuarenta' },
  { spanish: 'Cincuenta', english: 'Fifty (50)', pronunciation: 'seen-KWEHN-tah', category: 'number-advanced', audio: 'cincuenta' },
  { spanish: 'Sesenta', english: 'Sixty (60)', pronunciation: 'seh-SEHN-tah', category: 'number-advanced', audio: 'sesenta' },
  { spanish: 'Setenta', english: 'Seventy (70)', pronunciation: 'seh-TEHN-tah', category: 'number-advanced', audio: 'setenta' },
  { spanish: 'Ochenta', english: 'Eighty (80)', pronunciation: 'oh-CHEHN-tah', category: 'number-advanced', audio: 'ochenta' },
  { spanish: 'Noventa', english: 'Ninety (90)', pronunciation: 'noh-BEHN-tah', category: 'number-advanced', audio: 'noventa' },
  { spanish: 'Cien', english: 'One hundred (100)', pronunciation: 'see-EHN', category: 'number-advanced', audio: 'cien' },
  // Time expressions
  { spanish: '¿Qué hora es?', english: 'What time is it?', pronunciation: 'keh OH-rah ehs', category: 'time', audio: 'que-hora-es' },
  { spanish: 'Es la una', english: "It's 1:00", pronunciation: 'ehs lah OO-nah', category: 'time', audio: 'es-la-una' },
  { spanish: 'Son las dos', english: "It's 2:00", pronunciation: 'sohn lahs dohs', category: 'time', audio: 'son-las-dos' },
  { spanish: 'Son las tres', english: "It's 3:00", pronunciation: 'sohn lahs trehs', category: 'time', audio: 'son-las-tres' },
  { spanish: 'y cuarto', english: ':15 (quarter past)', pronunciation: 'ee KWAHR-toh', category: 'time', audio: 'y-cuarto' },
  { spanish: 'y media', english: ':30 (half past)', pronunciation: 'ee MEH-dee-ah', category: 'time', audio: 'y-media' },
  { spanish: 'menos cuarto', english: ':45 (quarter to)', pronunciation: 'MEH-nohs KWAHR-toh', category: 'time', audio: 'menos-cuarto' },
  { spanish: 'Medianoche', english: 'Midnight', pronunciation: 'meh-dee-ah-NOH-cheh', category: 'time', audio: 'medianoche' },
  { spanish: 'Mediodía', english: 'Noon', pronunciation: 'meh-dee-oh-DEE-ah', category: 'time', audio: 'mediodia' },
  { spanish: 'de la mañana', english: 'in the morning (AM)', pronunciation: 'deh lah mah-NYAH-nah', category: 'time', audio: 'de-la-manana' },
  { spanish: 'de la tarde', english: 'in the afternoon (PM)', pronunciation: 'deh lah TAR-deh', category: 'time', audio: 'de-la-tarde' },
  { spanish: 'de la noche', english: 'at night (PM)', pronunciation: 'deh lah NOH-cheh', category: 'time', audio: 'de-la-noche' },
  // Age
  { spanish: 'Tengo ___ años', english: 'I am ___ years old', pronunciation: 'TEHN-goh ... AH-nyohs', category: 'age', audio: 'tengo-anos' },
  { spanish: '¿Cuántos años tienes?', english: 'How old are you?', pronunciation: 'KWAHN-tohs AH-nyohs', category: 'age', audio: 'cuantos-anos-tienes' },
  { spanish: 'Tengo veinte años', english: 'I am twenty years old', pronunciation: 'TEHN-goh BAYN-teh AH-nyohs', category: 'age', audio: 'tengo-veinte-anos' },
  // Phone & dates
  { spanish: '¿Cuál es tu número?', english: 'What is your phone number?', pronunciation: 'kwahl ehs too NOO-meh-roh', category: 'phone-date', audio: 'cual-es-tu-numero' },
  { spanish: 'Mi número es...', english: 'My number is...', pronunciation: 'mee NOO-meh-roh ehs', category: 'phone-date', audio: 'mi-numero-es' },
  // Days
  { spanish: 'Lunes', english: 'Monday', pronunciation: 'LOO-nehs', category: 'phone-date', audio: 'lunes' },
  { spanish: 'Martes', english: 'Tuesday', pronunciation: 'MAR-tehs', category: 'phone-date', audio: 'martes' },
  { spanish: 'Miércoles', english: 'Wednesday', pronunciation: 'mee-EHR-koh-lehs', category: 'phone-date', audio: 'miercoles' },
  { spanish: 'Jueves', english: 'Thursday', pronunciation: 'HWEH-behs', category: 'phone-date', audio: 'jueves' },
  { spanish: 'Viernes', english: 'Friday', pronunciation: 'bee-EHR-nehs', category: 'phone-date', audio: 'viernes' },
  { spanish: 'Sábado', english: 'Saturday', pronunciation: 'SAH-bah-doh', category: 'phone-date', audio: 'sabado' },
  { spanish: 'Domingo', english: 'Sunday', pronunciation: 'doh-MEEN-goh', category: 'phone-date', audio: 'domingo' },
  // Months
  { spanish: 'Enero', english: 'January', pronunciation: 'eh-NEH-roh', category: 'phone-date', audio: 'enero' },
  { spanish: 'Febrero', english: 'February', pronunciation: 'feh-BREH-roh', category: 'phone-date', audio: 'febrero' },
  { spanish: 'Marzo', english: 'March', pronunciation: 'MAR-soh', category: 'phone-date', audio: 'marzo' },
  { spanish: 'Abril', english: 'April', pronunciation: 'ah-BREEL', category: 'phone-date', audio: 'abril' },
  { spanish: 'Mayo', english: 'May', pronunciation: 'MAH-yoh', category: 'phone-date', audio: 'mayo' },
  { spanish: 'Junio', english: 'June', pronunciation: 'HOO-nee-oh', category: 'phone-date', audio: 'junio' },
  { spanish: 'Julio', english: 'July', pronunciation: 'HOO-lee-oh', category: 'phone-date', audio: 'julio' },
  { spanish: 'Agosto', english: 'August', pronunciation: 'ah-GOHS-toh', category: 'phone-date', audio: 'agosto' },
  { spanish: 'Septiembre', english: 'September', pronunciation: 'sehp-tee-EHM-breh', category: 'phone-date', audio: 'septiembre' },
  { spanish: 'Octubre', english: 'October', pronunciation: 'ohk-TOO-breh', category: 'phone-date', audio: 'octubre' },
  { spanish: 'Noviembre', english: 'November', pronunciation: 'noh-bee-EHM-breh', category: 'phone-date', audio: 'noviembre' },
  { spanish: 'Diciembre', english: 'December', pronunciation: 'dee-see-EHM-breh', category: 'phone-date', audio: 'diciembre' },
]

export const NUMBERS_0_20 = PHRASES.filter(p => p.category === 'number-basic')
export const NUMBERS_21_100 = PHRASES.filter(p => p.category === 'number-advanced')
export const TIME_PHRASES = PHRASES.filter(p => p.category === 'time')
export const AGE_PHRASES = PHRASES.filter(p => p.category === 'age')
export const PHONE_DATE_PHRASES = PHRASES.filter(p => p.category === 'phone-date')

export const SECTIONS_L13 = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'why-numbers', label: "What You'll Learn" },
  { id: 'numbers-0-20', label: 'Numbers 0–20' },
  { id: 'numbers-21-100', label: 'Numbers 21–100' },
  { id: 'telling-time', label: 'Telling Time' },
  { id: 'age-calendar', label: 'Age, Days & Months' },
  { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'matching-game', label: 'Matching Game' },
  { id: 'number-sorting', label: 'Sort the Numbers' },
  { id: 'dialogues', label: 'Real-World Dialogues' },
  { id: 'cultural', label: 'Cultural Insights' },
  { id: 'number-dictation', label: 'Number Dictation' },
  { id: 'knowledge-check', label: 'Knowledge Check' },
]

export const FC_GROUPS = [
  { key: 'numbers', label: 'Numbers', audioKeys: ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','quince','veinte','treinta','cuarenta','cincuenta','cien'] },
  { key: 'time', label: 'Time & Age', audioKeys: ['que-hora-es','es-la-una','son-las-dos','son-las-tres','y-cuarto','y-media','menos-cuarto','medianoche','mediodia','de-la-manana','de-la-tarde','de-la-noche','cuantos-anos-tienes','tengo-veinte-anos'] },
  { key: 'calendar', label: 'Calendar', audioKeys: ['lunes','martes','miercoles','jueves','viernes','sabado','domingo','enero','marzo','mayo','julio','septiembre','diciembre','cual-es-tu-numero'] },
]

export const MATCH_PAIRS_L13 = [
  { left: 'Diez', right: '10' },
  { left: 'Veinticinco', right: '25' },
  { left: 'Cincuenta', right: '50' },
  { left: 'Cien', right: '100' },
  { left: 'Es la una', right: '1:00' },
  { left: 'Son las tres', right: '3:00' },
  { left: 'y media', right: ':30' },
  { left: 'menos cuarto', right: ':45' },
]

export const SORT_ACTIVITIES_L13 = [
  {
    title: 'Less than 50 vs. More than 50',
    instruction: 'Drag each number to the correct category.',
    buckets: ['Less than 50', 'More than 50'],
    items: [
      { text: 'Quince (15)', bucket: 'Less than 50' },
      { text: 'Treinta (30)', bucket: 'Less than 50' },
      { text: 'Doce (12)', bucket: 'Less than 50' },
      { text: 'Cuarenta y cinco (45)', bucket: 'Less than 50' },
      { text: 'Sesenta (60)', bucket: 'More than 50' },
      { text: 'Ochenta (80)', bucket: 'More than 50' },
      { text: 'Setenta y cinco (75)', bucket: 'More than 50' },
      { text: 'Cien (100)', bucket: 'More than 50' },
    ],
  },
  {
    title: 'Morning vs. Afternoon',
    instruction: 'Sort each time by morning or afternoon/evening.',
    buckets: ['Morning', 'Afternoon / Evening'],
    items: [
      { text: 'Las ocho de la mañana', bucket: 'Morning' },
      { text: 'Las diez de la mañana', bucket: 'Morning' },
      { text: 'Las siete de la mañana', bucket: 'Morning' },
      { text: 'Las once de la mañana', bucket: 'Morning' },
      { text: 'Las tres de la tarde', bucket: 'Afternoon / Evening' },
      { text: 'Las seis de la tarde', bucket: 'Afternoon / Evening' },
      { text: 'Las nueve de la noche', bucket: 'Afternoon / Evening' },
      { text: 'Las diez de la noche', bucket: 'Afternoon / Evening' },
    ],
  },
  {
    title: 'True or False?',
    instruction: 'Sort each statement as True or False.',
    buckets: ['True', 'False'],
    items: [
      { text: 'Spanish uses "tener" for age', bucket: 'True' },
      { text: 'Numbers 16–19 use "dieci-"', bucket: 'True' },
      { text: '"Es la una" is singular', bucket: 'True' },
      { text: 'Days are not capitalized', bucket: 'True' },
      { text: '"Menos cuarto" = quarter past', bucket: 'False' },
      { text: '21–29 are separate words', bucket: 'False' },
      { text: '"Son las una" for 1:00', bucket: 'False' },
      { text: '"Ciento" is used alone for 100', bucket: 'False' },
    ],
  },
]

export const DIALOGUES_L13 = [
  {
    id: 'dialogue-restaurant',
    title: 'Making a Reservation — At a Restaurant',
    location: 'Restaurant',
    lines: [
      { speaker: 'Cliente', text: 'Buenas tardes. Quisiera una mesa para cuatro personas.', audio: '/audio/L1.3/dialogues/dialogue_0_0.mp3' },
      { speaker: 'Mesero', text: '¿Para qué hora?', audio: '/audio/L1.3/dialogues/dialogue_0_1.mp3' },
      { speaker: 'Cliente', text: 'Para las ocho de la noche.', audio: '/audio/L1.3/dialogues/dialogue_0_2.mp3' },
      { speaker: 'Mesero', text: 'Perfecto. Mesa para cuatro a las ocho. ¿A nombre de quién?', audio: '/audio/L1.3/dialogues/dialogue_0_3.mp3' },
    ],
  },
  {
    id: 'dialogue-plans',
    title: 'Making Plans — With a Friend',
    location: 'Café',
    lines: [
      { speaker: 'María', text: 'Hola, Carlos. ¿Quieres ir al café el viernes?', audio: '/audio/L1.3/dialogues/dialogue_1_0.mp3' },
      { speaker: 'Carlos', text: '¡Sí! ¿A qué hora?', audio: '/audio/L1.3/dialogues/dialogue_1_1.mp3' },
      { speaker: 'María', text: '¿A las cuatro de la tarde?', audio: '/audio/L1.3/dialogues/dialogue_1_2.mp3' },
      { speaker: 'Carlos', text: 'Perfecto. Nos vemos el viernes a las cuatro. ¡Hasta luego!', audio: '/audio/L1.3/dialogues/dialogue_1_3.mp3' },
    ],
  },
]

export const QUIZ_L13 = [
  { id: 1, type: 'mc' as const, text: "Your friend asks '¿Cuántos años tienes?' You are 28. Which is correct?", options: ['Soy veintiocho años', 'Tengo veintiocho años', 'Estoy veintiocho', 'Mi edad es veintiocho'], answer: 1 },
  { id: 2, type: 'mc' as const, text: 'Numbers 21–29 are one word. What happens from 30 onward?', options: ['Also one word', "Three words with 'y' (treinta y uno)", 'They drop the ones digit', 'They use a hyphen'], answer: 1 },
  { id: 3, type: 'mc' as const, text: 'It is 1:45 PM. Which form is correct?', options: ['Es la una y cuarenta y cinco', 'Son las una menos cuarto', 'Son las dos menos cuarto', 'Es la una menos cuarto'], answer: 0 },
  { id: 4, type: 'fill' as const, text: "Complete: 'Me llamo Ana. Soy de Colombia. ___ veinticinco años.'", answer: 'Tengo' },
  { id: 5, type: 'mc' as const, text: 'How do you say 58 in Spanish?', options: ['Cinco ocho', 'Cincuenta y ocho', 'Cincoenta ocho', 'Cincuenta ocho'], answer: 1 },
  { id: 6, type: 'tf' as const, text: "At noon you say 'Son las doce del mediodía.'", answer: false },
  { id: 7, type: 'mc' as const, text: "A student writes 'Son las una y media.' What is the error?", options: ["Should be 'y cuarto'", "'Una' needs 'Es la' not 'Son las'", "Should use 'menos'", "'Media' should be 'treinta'"], answer: 1 },
  { id: 8, type: 'fill' as const, text: "The clock shows 8:30. Complete: 'Son las ocho y ___'", answer: 'media' },
  { id: 9, type: 'mc' as const, text: 'Which number is written INCORRECTLY?', options: ['Veinticuatro (24)', 'Treinta y seis (36)', 'Diecisiete (17)', 'Cuarenta uno (41)'], answer: 3 },
  { id: 10, type: 'fill' as const, text: "9:15 AM. Complete: 'Son las nueve y ___ de la mañana'", answer: 'cuarto' },
  { id: 11, type: 'tf' as const, text: "'Cien' and 'ciento' both mean 100 and are interchangeable.", answer: false },
  { id: 12, type: 'mc' as const, text: "'Son ochenta y cinco pesos.' How much do you owe?", options: ['58 pesos', '80 pesos', '85 pesos', '850 pesos'], answer: 2 },
  { id: 13, type: 'fill' as const, text: 'The first day of the week in Spanish-speaking countries is ___ (Monday).', answer: 'lunes' },
  { id: 14, type: 'mc' as const, text: "'Mi clase empieza a las diez y cuarto de la mañana.' What time?", options: ['10:40 AM', '10:15 AM', '10:45 AM', '4:10 AM'], answer: 1 },
  { id: 15, type: 'tf' as const, text: "'Tengo treinta y un años' means 31 years old.", answer: true },
]
