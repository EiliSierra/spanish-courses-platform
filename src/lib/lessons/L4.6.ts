import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Banking (10) ===
  { spanish: 'La cuenta bancaria', english: 'The bank account', pronunciation: 'lah KWEHN-tah bahn-KAH-ree-ah', category: 'banking', audio: 'la-cuenta-bancaria' },
  { spanish: 'La cuenta de ahorros', english: 'The savings account', pronunciation: 'lah KWEHN-tah deh ah-OH-rrohs', category: 'banking', audio: 'la-cuenta-de-ahorros' },
  { spanish: 'La cuenta corriente', english: 'The checking account', pronunciation: 'lah KWEHN-tah koh-rree-EHN-teh', category: 'banking', audio: 'la-cuenta-corriente' },
  { spanish: 'El cajero automático', english: 'The ATM', pronunciation: 'ehl kah-HEH-roh ow-toh-MAH-tee-koh', category: 'banking', audio: 'el-cajero-automatico' },
  { spanish: 'La sucursal', english: 'The branch (bank)', pronunciation: 'lah soo-koor-SAHL', category: 'banking', audio: 'la-sucursal' },
  { spanish: 'La tarjeta de débito', english: 'The debit card', pronunciation: 'lah tahr-HEH-tah deh DEH-bee-toh', category: 'banking', audio: 'la-tarjeta-de-debito' },
  { spanish: 'La tarjeta de crédito', english: 'The credit card', pronunciation: 'lah tahr-HEH-tah deh KREH-dee-toh', category: 'banking', audio: 'la-tarjeta-de-credito' },
  { spanish: 'El estado de cuenta', english: 'The bank statement', pronunciation: 'ehl ehs-TAH-doh deh KWEHN-tah', category: 'banking', audio: 'el-estado-de-cuenta' },
  { spanish: 'El saldo', english: 'The balance', pronunciation: 'ehl SAHL-doh', category: 'banking', audio: 'el-saldo' },
  { spanish: 'La banca en línea', english: 'Online banking', pronunciation: 'lah BAHN-kah ehn LEE-neh-ah', category: 'banking', audio: 'la-banca-en-linea' },

  // === Transactions (10) ===
  { spanish: 'Quiero depositar dinero', english: 'I want to deposit money', pronunciation: 'kee-EH-roh deh-poh-see-TAHR dee-NEH-roh', category: 'transactions', audio: 'quiero-depositar-dinero' },
  { spanish: 'Necesito retirar efectivo', english: 'I need to withdraw cash', pronunciation: 'neh-seh-SEE-toh reh-tee-RAHR eh-fehk-TEE-boh', category: 'transactions', audio: 'necesito-retirar-efectivo' },
  { spanish: 'Quiero transferir fondos', english: 'I want to transfer funds', pronunciation: 'kee-EH-roh trahns-feh-REER FOHN-dohs', category: 'transactions', audio: 'quiero-transferir-fondos' },
  { spanish: 'Necesito pagar una factura', english: 'I need to pay a bill', pronunciation: 'neh-seh-SEE-toh pah-GAHR OO-nah fahk-TOO-rah', category: 'transactions', audio: 'necesito-pagar-una-factura' },
  { spanish: 'Quiero cobrar un cheque', english: 'I want to cash a check', pronunciation: 'kee-EH-roh koh-BRAHR oon CHEH-keh', category: 'transactions', audio: 'quiero-cobrar-un-cheque' },
  { spanish: 'La comisión bancaria', english: 'The bank fee', pronunciation: 'lah koh-mee-see-OHN bahn-KAH-ree-ah', category: 'transactions', audio: 'la-comision-bancaria' },
  { spanish: 'El recibo', english: 'The receipt', pronunciation: 'ehl reh-SEE-boh', category: 'transactions', audio: 'el-recibo' },
  { spanish: 'Firmar aquí, por favor', english: 'Sign here, please', pronunciation: 'feer-MAHR ah-KEE pohr fah-BOHR', category: 'transactions', audio: 'firmar-aqui-por-favor' },
  { spanish: 'Ingrese su contraseña', english: 'Enter your password/PIN', pronunciation: 'een-GREH-seh soo kohn-trah-SEH-nyah', category: 'transactions', audio: 'ingrese-su-contrasena' },
  { spanish: 'El depósito directo', english: 'Direct deposit', pronunciation: 'ehl deh-POH-see-toh dee-REHK-toh', category: 'transactions', audio: 'el-deposito-directo' },

  // === Currency (8) ===
  { spanish: 'La casa de cambio', english: 'The currency exchange', pronunciation: 'lah KAH-sah deh KAHM-bee-oh', category: 'currency', audio: 'la-casa-de-cambio' },
  { spanish: '¿Cuál es el tipo de cambio?', english: 'What is the exchange rate?', pronunciation: 'kwahl ehs ehl TEE-poh deh KAHM-bee-oh', category: 'currency', audio: 'cual-es-el-tipo-de-cambio' },
  { spanish: 'Quiero cambiar dólares a pesos', english: 'I want to exchange dollars to pesos', pronunciation: 'kee-EH-roh kahm-bee-AHR DOH-lah-rehs ah PEH-sohs', category: 'currency', audio: 'quiero-cambiar-dolares' },
  { spanish: 'La moneda', english: 'The currency / coin', pronunciation: 'lah moh-NEH-dah', category: 'currency', audio: 'la-moneda' },
  { spanish: 'El billete', english: 'The bill (money)', pronunciation: 'ehl bee-YEH-teh', category: 'currency', audio: 'el-billete' },
  { spanish: 'El efectivo', english: 'Cash', pronunciation: 'ehl eh-fehk-TEE-boh', category: 'currency', audio: 'el-efectivo' },
  { spanish: 'La divisa extranjera', english: 'Foreign currency', pronunciation: 'lah dee-BEE-sah ehs-trahn-HEH-rah', category: 'currency', audio: 'la-divisa-extranjera' },
  { spanish: '¿Aceptan dólares?', english: 'Do you accept dollars?', pronunciation: 'ah-SEHP-tahn DOH-lah-rehs', category: 'currency', audio: 'aceptan-dolares' },

  // === Financial Phrases (10) ===
  { spanish: 'Quiero abrir una cuenta', english: 'I want to open an account', pronunciation: 'kee-EH-roh ah-BREER OO-nah KWEHN-tah', category: 'financial-phrases', audio: 'quiero-abrir-una-cuenta' },
  { spanish: '¿Cuál es la tasa de interés?', english: 'What is the interest rate?', pronunciation: 'kwahl ehs lah TAH-sah deh een-teh-REHS', category: 'financial-phrases', audio: 'cual-es-la-tasa-de-interes' },
  { spanish: 'Necesito un préstamo', english: 'I need a loan', pronunciation: 'neh-seh-SEE-toh oon PREHS-tah-moh', category: 'financial-phrases', audio: 'necesito-un-prestamo' },
  { spanish: 'Quiero solicitar una hipoteca', english: 'I want to apply for a mortgage', pronunciation: 'kee-EH-roh soh-lee-see-TAHR OO-nah ee-poh-TEH-kah', category: 'financial-phrases', audio: 'quiero-solicitar-una-hipoteca' },
  { spanish: 'Pagar a plazos', english: 'To pay in installments', pronunciation: 'pah-GAHR ah PLAH-sohs', category: 'financial-phrases', audio: 'pagar-a-plazos' },
  { spanish: 'El presupuesto mensual', english: 'The monthly budget', pronunciation: 'ehl preh-soo-PWEHS-toh mehn-SWAHL', category: 'financial-phrases', audio: 'el-presupuesto-mensual' },
  { spanish: 'Ahorrar para el futuro', english: 'To save for the future', pronunciation: 'ah-oh-RRAHR PAH-rah ehl foo-TOO-roh', category: 'financial-phrases', audio: 'ahorrar-para-el-futuro' },
  { spanish: 'La deuda', english: 'The debt', pronunciation: 'lah DEH-oo-dah', category: 'financial-phrases', audio: 'la-deuda' },
  { spanish: 'Los impuestos', english: 'Taxes', pronunciation: 'lohs eem-PWEHS-tohs', category: 'financial-phrases', audio: 'los-impuestos' },
  { spanish: 'Invertir en la bolsa', english: 'To invest in the stock market', pronunciation: 'een-behr-TEER ehn lah BOHL-sah', category: 'financial-phrases', audio: 'invertir-en-la-bolsa' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L46PhraseByAudio = phraseByAudio

// === BANK TELLER (unique activity) ===

export interface BankTellerChallenge {
  request: string
  english: string
  correctService: string
  options: string[]
}

export const BANK_TELLER_CHALLENGES: BankTellerChallenge[] = [
  {
    request: 'Buenos días. Quiero depositar este cheque en mi cuenta de ahorros.',
    english: 'Good morning. I want to deposit this check into my savings account.',
    correctService: 'Depósito de cheque',
    options: ['Depósito de cheque', 'Retiro de efectivo', 'Cambio de divisas', 'Apertura de cuenta'],
  },
  {
    request: 'Disculpe, necesito enviar dinero a la cuenta de mi hermano en otro banco.',
    english: 'Excuse me, I need to send money to my brother\'s account at another bank.',
    correctService: 'Transferencia bancaria',
    options: ['Transferencia bancaria', 'Cobro de cheque', 'Pago de factura', 'Solicitud de préstamo'],
  },
  {
    request: 'Hola, acabo de mudarme a la ciudad y necesito una cuenta corriente nueva.',
    english: 'Hello, I just moved to the city and need a new checking account.',
    correctService: 'Apertura de cuenta',
    options: ['Apertura de cuenta', 'Cambio de divisas', 'Depósito de cheque', 'Retiro de efectivo'],
  },
  {
    request: 'Buenas tardes. Tengo dólares y necesito cambiarlos a pesos mexicanos.',
    english: 'Good afternoon. I have dollars and need to exchange them for Mexican pesos.',
    correctService: 'Cambio de divisas',
    options: ['Cambio de divisas', 'Depósito de cheque', 'Transferencia bancaria', 'Pago de factura'],
  },
  {
    request: 'Por favor, necesito pagar mi factura de electricidad. Aquí está el número de referencia.',
    english: 'Please, I need to pay my electricity bill. Here is the reference number.',
    correctService: 'Pago de factura',
    options: ['Pago de factura', 'Apertura de cuenta', 'Retiro de efectivo', 'Solicitud de préstamo'],
  },
  {
    request: 'Buenos días. Mi esposa y yo queremos información sobre préstamos para comprar una casa.',
    english: 'Good morning. My wife and I want information about loans to buy a house.',
    correctService: 'Solicitud de préstamo',
    options: ['Solicitud de préstamo', 'Transferencia bancaria', 'Depósito de cheque', 'Apertura de cuenta'],
  },
]

// === LESSON DATA ===

export const L46Data: LessonData = {
  id: 'L4.6',
  hero: {
    lessonId: 'L4.6',
    title: 'Banking & Finance',
    subtitle: 'Managing money like a native speaker',
    description: 'Master essential banking vocabulary — from opening accounts and using ATMs to exchanging currency and paying bills. Build the financial Spanish you need for everyday life and travel in Latin America.',
    image: '/images/L4.6/L4.6.jpg',
    gradient: 'from-blue-800/65 via-teal-700/55 to-emerald-700/65',
    accentColor: 'blue-200',
  },

  objectives: [
    { icon: '🏦', title: 'Banking Vocabulary', desc: 'Learn the essential terms: cuenta, saldo, tarjeta, cajero automático, sucursal, and more.' },
    { icon: '💳', title: 'Banking Transactions', desc: 'Deposit, withdraw, transfer funds, cash checks, and pay bills entirely in Spanish.' },
    { icon: '💱', title: 'Currency Exchange', desc: 'Navigate casas de cambio: ask for rates, exchange money, and understand denominations.' },
    { icon: '📊', title: 'Financial Literacy', desc: 'Discuss loans, budgets, interest rates, saving, taxes, and investing in Spanish.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.3', label: 'Numbers', detail: 'Numbers from L1.3 are essential for amounts, balances, and exchange rates.' },
    { fromLesson: 'L2.6', label: 'Shopping & Payment', detail: 'Payment vocabulary from L2.6 (pagar, precio, efectivo) extends into banking contexts.' },
    { fromLesson: 'L4.3', label: 'Formal Register', detail: 'L4.3\'s formal "usted" register is how you speak at banks: "¿Podría ayudarme?"' },
  ],

  sectionTransitions: [
    { afterSection: 'banking', text: 'You know the key banking terms! Now let\'s learn how to make transactions.' },
    { afterSection: 'transactions', text: 'Great transaction skills! Let\'s tackle currency exchange next.' },
    { afterSection: 'currency', text: 'You can handle any casa de cambio! Now for broader financial phrases.' },
    { afterSection: 'dialogues', text: 'Excellent banking conversations! Let\'s explore the financial culture.' },
    { afterSection: 'cultural', text: 'Now put it all together — help customers at the bank!' },
    { afterSection: 'bank-teller', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Mi cuenta...', english: 'My account...' },
    { spanish: 'Quiero depositar...', english: 'I want to deposit...' },
    { spanish: '¿Cuánto es la comisión?', english: 'How much is the fee?' },
    { spanish: 'El tipo de cambio...', english: 'The exchange rate...' },
    { spanish: 'Necesito un préstamo', english: 'I need a loan' },
    { spanish: 'Mi presupuesto es...', english: 'My budget is...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Quiero abrir una cuenta de ahorros', pronunciation: 'kee-EH-roh ah-BREER OO-nah KWEHN-tah deh ah-OH-rrohs', english: 'I want to open a savings account', audio: 'quiero-abrir-una-cuenta', tip: '"Ahorros" has a strong rolled RR. Exaggerate it: ah-OH-rrohs. The H is always silent in Spanish!' },
    { spanish: '¿Cuál es el tipo de cambio hoy?', pronunciation: 'kwahl ehs ehl TEE-poh deh KAHM-bee-oh oy', english: 'What is the exchange rate today?', audio: 'cual-es-el-tipo-de-cambio', tip: '"Cuál" has one syllable with a strong accent. Don\'t confuse "cuál" (which) with "cual" (which — relative).' },
    { spanish: 'Necesito retirar quinientos dólares', pronunciation: 'neh-seh-SEE-toh reh-tee-RAHR kee-nee-EHN-tohs DOH-lah-rehs', english: 'I need to withdraw five hundred dollars', audio: 'necesito-retirar-efectivo', tip: '"Retirar" — stress the last syllable: reh-tee-RAHR. Connect "retirar quinientos" smoothly.' },
    { spanish: 'La tasa de interés es del cinco por ciento', pronunciation: 'lah TAH-sah deh een-teh-REHS ehs dehl SEEN-koh pohr see-EHN-toh', english: 'The interest rate is five percent', audio: 'cual-es-la-tasa-de-interes', tip: '"Interés" — accent on the last syllable. Don\'t say "IN-teres." It\'s een-teh-REHS.' },
    { spanish: 'Quiero transferir fondos a otra cuenta', pronunciation: 'kee-EH-roh trahns-feh-REER FOHN-dohs ah OH-trah KWEHN-tah', english: 'I want to transfer funds to another account', audio: 'quiero-transferir-fondos', tip: '"Transferir" — the stress is on the last syllable: trahns-feh-REER. In Latin America, the "s" before "f" is often soft.' },
    { spanish: 'Ingrese su número de identificación personal', pronunciation: 'een-GREH-seh soo NOO-meh-roh deh ee-dehn-tee-fee-kah-see-OHN pehr-soh-NAHL', english: 'Enter your personal identification number', audio: 'ingrese-su-contrasena', tip: '"Identificación" — five syllables! Practice breaking it down: i-den-ti-fi-ca-ción. Stress the final -CIÓN.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'banking', label: 'Banking Basics' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'currency', label: 'Currency Exchange' },
    { id: 'financial-phrases', label: 'Financial Phrases' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'finance-sorting', label: 'Finance Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'bank-teller', label: 'Bank Teller' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'banking',
      title: 'Banking Basics',
      description: 'Essential vocabulary for navigating any bank or ATM in the Spanish-speaking world.',
      tabs: [
        { label: 'Accounts & Cards', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'banking').slice(0, 5) },
        { label: 'Tools & Services', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'banking').slice(5) },
      ],
    },
    {
      id: 'transactions',
      title: 'Banking Transactions',
      description: 'The actions you perform at the bank — depositing, withdrawing, transferring, and more.',
      tabs: [
        { label: 'Deposits & Withdrawals', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'transactions').slice(0, 5) },
        { label: 'Payments & Signing', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'transactions').slice(5) },
      ],
    },
    {
      id: 'currency',
      title: 'Currency Exchange',
      description: 'Navigate casas de cambio and handle foreign currency with confidence.',
      tabs: [
        { label: 'Exchange', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'currency').slice(0, 4) },
        { label: 'Money Types', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'currency').slice(4) },
      ],
    },
    {
      id: 'financial-phrases',
      title: 'Financial Phrases',
      description: 'Talk about loans, savings, budgets, and investments like a pro.',
      tabs: [
        { label: 'Loans & Rates', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'financial-phrases').slice(0, 5) },
        { label: 'Budgets & Investing', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'financial-phrases').slice(5) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Banking Terms: Stress Matters!',
      content: 'Many banking words are stressed on a specific syllable that changes the meaning. "Depósito" (deposit — noun) vs. "depositó" (he deposited — verb). "Préstamo" (loan) has stress on PRÉ-. "Crédito" on CRÉ-. Listen for accent marks — they tell you exactly where to stress.',
      example: 'DEpósito vs. depósitÓ | PRÉStamo (loan) | CRÉdito (credit)',
    },
    {
      title: 'The "CC" and Double Letters',
      content: '"Cuenta corriente" — "corriente" has a rolled RR. "Comisión" ends with -SIÓN (like English "-shone"). "Transferencia" — the "ncia" sounds like "nsee-ah." Practice these multi-syllable banking words slowly, then speed up.',
      example: 'Cuenta corriente (checking) | Comisión (fee) | Transferencia (transfer)',
      reviewFrom: 'L2.6',
    },
    {
      title: 'Formal Banking Register',
      content: 'Banks use formal Spanish. You\'ll hear "usted" forms: "¿Desea algo más?" (Do you wish anything else?), "Ingrese su PIN" (Enter your PIN), "Firme aquí" (Sign here). Use "quisiera" (I would like) instead of "quiero" for extra politeness.',
      example: 'Quisiera abrir una cuenta (I would like to open an account)',
      reviewFrom: 'L4.3',
    },
    {
      title: 'Numbers in Financial Contexts',
      content: 'Remember: "mil" (1,000) is never pluralized — "dos mil" not "dos miles." Decimals use commas in most Latin American countries: $1.500,00 = one thousand five hundred. "Por ciento" (percent) is always two words in Spanish.',
      example: 'Cinco mil pesos (5,000) | Tres por ciento (3%) | $2.500,50',
      reviewFrom: 'L1.3',
    },
  ],

  flashcardGroups: [
    {
      key: 'banking-basics',
      label: 'Banking Basics',
      audioKeys: ['la-cuenta-bancaria', 'la-cuenta-de-ahorros', 'la-cuenta-corriente', 'el-cajero-automatico', 'la-sucursal', 'la-tarjeta-de-debito', 'la-tarjeta-de-credito', 'el-saldo', 'la-banca-en-linea'],
    },
    {
      key: 'transactions',
      label: 'Transactions',
      audioKeys: ['quiero-depositar-dinero', 'necesito-retirar-efectivo', 'quiero-transferir-fondos', 'necesito-pagar-una-factura', 'quiero-cobrar-un-cheque', 'firmar-aqui-por-favor', 'ingrese-su-contrasena', 'el-deposito-directo'],
    },
    {
      key: 'currency-finance',
      label: 'Currency & Finance',
      audioKeys: ['la-casa-de-cambio', 'cual-es-el-tipo-de-cambio', 'quiero-cambiar-dolares', 'el-efectivo', 'quiero-abrir-una-cuenta', 'necesito-un-prestamo', 'el-presupuesto-mensual', 'ahorrar-para-el-futuro'],
    },
  ],

  matchPairs: [
    { left: 'Cuenta de ahorros', right: 'Savings account' },
    { left: 'Cajero automático', right: 'ATM' },
    { left: 'Tipo de cambio', right: 'Exchange rate' },
    { left: 'Retirar efectivo', right: 'Withdraw cash' },
    { left: 'Préstamo', right: 'Loan' },
    { left: 'Factura', right: 'Bill / Invoice' },
    { left: 'Saldo', right: 'Balance' },
    { left: 'Presupuesto', right: 'Budget' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Banking vs. Currency Exchange',
      instruction: 'Does this belong at the BANK or the CASA DE CAMBIO?',
      buckets: ['Banco 🏦', 'Casa de Cambio 💱'],
      items: [
        { text: 'Abrir una cuenta', bucket: 'Banco 🏦' },
        { text: 'Depositar un cheque', bucket: 'Banco 🏦' },
        { text: 'Solicitar un préstamo', bucket: 'Banco 🏦' },
        { text: 'Pagar una factura', bucket: 'Banco 🏦' },
        { text: 'Cambiar dólares a pesos', bucket: 'Casa de Cambio 💱' },
        { text: 'Preguntar el tipo de cambio', bucket: 'Casa de Cambio 💱' },
        { text: 'Comprar divisas extranjeras', bucket: 'Casa de Cambio 💱' },
        { text: 'Cambiar euros a soles', bucket: 'Casa de Cambio 💱' },
      ],
    },
    {
      title: 'Saving vs. Spending',
      instruction: 'Is this about SAVING or SPENDING money?',
      buckets: ['Ahorrar 💰', 'Gastar 🛒'],
      items: [
        { text: 'Cuenta de ahorros', bucket: 'Ahorrar 💰' },
        { text: 'Invertir en la bolsa', bucket: 'Ahorrar 💰' },
        { text: 'Presupuesto mensual', bucket: 'Ahorrar 💰' },
        { text: 'Depósito directo', bucket: 'Ahorrar 💰' },
        { text: 'Pagar a plazos', bucket: 'Gastar 🛒' },
        { text: 'Tarjeta de crédito', bucket: 'Gastar 🛒' },
        { text: 'Retirar efectivo', bucket: 'Gastar 🛒' },
        { text: 'Cobrar un cheque', bucket: 'Gastar 🛒' },
      ],
    },
  ],
  sortSectionId: 'finance-sorting',
  sortTitle: 'Finance Sorting',

  dialogues: [
    {
      id: 'dialogue-open-account',
      title: 'Opening a Bank Account — Ciudad de México',
      location: 'Ciudad de México',
      lines: [
        { speaker: 'Empleado', text: 'Buenos días, bienvenido al banco. ¿En qué puedo ayudarle?', audio: '/audio/L4.6/phrases/d1-line1.mp3' },
        { speaker: 'Cliente', text: 'Buenos días. Quisiera abrir una cuenta de ahorros, por favor.', audio: '/audio/L4.6/phrases/d1-line2.mp3', annotations: [{ phrase: 'Quisiera', fromLesson: 'L4.3', note: 'Formal request form from L4.3' }] },
        { speaker: 'Empleado', text: 'Claro. ¿Tiene su identificación oficial y un comprobante de domicilio?', audio: '/audio/L4.6/phrases/d1-line3.mp3' },
        { speaker: 'Cliente', text: 'Sí, aquí tiene mi pasaporte y una factura de electricidad.', audio: '/audio/L4.6/phrases/d1-line4.mp3' },
        { speaker: 'Empleado', text: 'Perfecto. El depósito mínimo es de quinientos pesos. ¿Desea depositar hoy?', audio: '/audio/L4.6/phrases/d1-line5.mp3', annotations: [{ phrase: 'quinientos pesos', fromLesson: 'L1.3', note: 'Numbers from L1.3' }] },
        { speaker: 'Cliente', text: 'Sí, quiero depositar dos mil pesos para empezar.', audio: '/audio/L4.6/phrases/d1-line6.mp3' },
        { speaker: 'Empleado', text: 'Muy bien. También le vamos a dar una tarjeta de débito. ¿Prefiere banca en línea?', audio: '/audio/L4.6/phrases/d1-line7.mp3' },
        { speaker: 'Cliente', text: 'Sí, por favor. ¿Cuál es la tasa de interés de la cuenta?', audio: '/audio/L4.6/phrases/d1-line8.mp3' },
        { speaker: 'Empleado', text: 'La tasa actual es del tres por ciento anual. Firme aquí, por favor.', audio: '/audio/L4.6/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-currency-exchange',
      title: 'At the Currency Exchange — Lima',
      location: 'Lima',
      lines: [
        { speaker: 'Turista', text: 'Buenas tardes. ¿Cuál es el tipo de cambio de dólares a soles hoy?', audio: '/audio/L4.6/phrases/d2-line1.mp3' },
        { speaker: 'Cajero', text: 'Buenas tardes. Hoy el dólar está a tres soles con ochenta.', audio: '/audio/L4.6/phrases/d2-line2.mp3' },
        { speaker: 'Turista', text: 'Quiero cambiar trescientos dólares, por favor.', audio: '/audio/L4.6/phrases/d2-line3.mp3' },
        { speaker: 'Cajero', text: 'Son mil ciento cuarenta soles. ¿Quiere billetes grandes o pequeños?', audio: '/audio/L4.6/phrases/d2-line4.mp3', annotations: [{ phrase: 'billetes', fromLesson: 'L2.6', note: 'Money vocabulary from L2.6' }] },
        { speaker: 'Turista', text: 'Una mezcla, por favor. Algunos de cien y otros de veinte.', audio: '/audio/L4.6/phrases/d2-line5.mp3' },
        { speaker: 'Cajero', text: 'Aquí tiene. ¿Necesita un recibo?', audio: '/audio/L4.6/phrases/d2-line6.mp3' },
        { speaker: 'Turista', text: 'Sí, por favor. ¿Cobran comisión?', audio: '/audio/L4.6/phrases/d2-line7.mp3' },
        { speaker: 'Cajero', text: 'No, señor. No cobramos comisión. Aquí está su recibo. ¡Buen viaje!', audio: '/audio/L4.6/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Open a bank account in Mexico City and exchange currency at a Lima casa de cambio.',

  culturalNotes: [
    {
      title: 'Cash is Still King in Latin America',
      content: 'Despite growing digital payments, cash ("efectivo") remains essential in most of Latin America. Street vendors, small shops, taxis, and markets often only accept cash. It\'s common to hear "¿Tiene cambio?" (Do you have change?) because large bills can be hard to break. Always carry small bills and coins — "sencillo" (small change) is your best friend.',
    },
    {
      title: 'Remesas — Remittances That Move Economies',
      content: 'Millions of Latin Americans working abroad send money home through "remesas" (remittances). In 2024, Mexico received over $60 billion in remesas — more than its tourism revenue! Services like Western Union, MoneyGram, and apps like Mercado Pago are vital. "Mandar dinero a mi familia" (to send money to my family) is a phrase you\'ll hear often. Remesas are a lifeline for entire communities.',
    },
    {
      title: 'Mobile Banking & Digital Wallets',
      content: 'Latin America is rapidly adopting "banca móvil" (mobile banking). Brazil has Pix, Mexico has CoDi/SPEI, and Argentina has Mercado Pago. In many countries, you can pay with QR codes at street stalls. "¿Aceptan transferencia?" (Do you accept a transfer?) is increasingly common. However, millions remain "sin bancarizar" (unbanked), making financial inclusion a major regional challenge.',
    },
  ],
  culturalGradient: 'from-blue-50 to-teal-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La cuenta de ahorros" means:', options: ['Checking account', 'Savings account', 'Credit card', 'Bank statement'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Quiero ___ dinero en mi cuenta" (deposit)', answer: 'depositar' },
    { id: 3, type: 'mc', text: '"El cajero automático" is:', options: ['The bank teller', 'The ATM', 'The cashier', 'The manager'], answer: 1 },
    { id: 4, type: 'tf', text: '"La casa de cambio" is where you exchange currency.', answer: true },
    { id: 5, type: 'mc', text: '"Retirar efectivo" means:', options: ['To deposit cash', 'To exchange cash', 'To withdraw cash', 'To count cash'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "¿Cuál es el tipo de ___?" (exchange rate)', answer: 'cambio' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, what is the minimum deposit?', options: ['200 pesos', '500 pesos', '1000 pesos', '2000 pesos'], answer: 1 },
    { id: 8, type: 'tf', text: '"Préstamo" means "loan" in English.', answer: true },
    { id: 9, type: 'mc', text: '"Firmar aquí" means:', options: ['Pay here', 'Sign here', 'Wait here', 'Look here'], answer: 1 },
    { id: 10, type: 'fill', text: 'Complete: "La tasa de ___" (interest rate)', answer: 'interés' },
    { id: 11, type: 'mc', text: 'In Dialogue 2, how many dollars does the tourist exchange?', options: ['100', '200', '300', '500'], answer: 2 },
    { id: 12, type: 'tf', text: 'In most of Latin America, cash is still widely used for daily transactions.', answer: true },
    { id: 13, type: 'mc', text: '"El presupuesto mensual" means:', options: ['The annual report', 'The monthly budget', 'The bank fee', 'The savings plan'], answer: 1 },
    { id: 14, type: 'fill', text: 'Complete: "Quiero ___ una cuenta" (to open)', answer: 'abrir' },
    { id: 15, type: 'mc', text: '"Remesas" refers to:', options: ['Bank loans', 'Money sent from abroad', 'Tax payments', 'Stock investments'], answer: 1 },
  ],

  audioBase: '/audio/L4.6/phrases',

  uniqueActivity: {
    id: 'BankTellerL46',
    sectionId: 'bank-teller',
    sectionColor: 'bg-blue-50/40',
    sectionBorder: 'border-blue-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'banking': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'transactions': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'currency': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'financial-phrases': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'finance-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    cultural: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'bank-teller': { bg: 'bg-blue-50/40', border: 'border-blue-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
