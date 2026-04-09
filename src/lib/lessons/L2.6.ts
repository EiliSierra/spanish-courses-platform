import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Clothing (10) ===
  { spanish: 'La camisa', english: 'The shirt', pronunciation: 'lah kah-MEE-sah', category: 'clothing', audio: 'la-camisa' },
  { spanish: 'Los pantalones', english: 'The pants', pronunciation: 'lohs pahn-tah-LOH-nehs', category: 'clothing', audio: 'los-pantalones' },
  { spanish: 'El vestido', english: 'The dress', pronunciation: 'ehl behs-TEE-doh', category: 'clothing', audio: 'el-vestido' },
  { spanish: 'La falda', english: 'The skirt', pronunciation: 'lah FAHL-dah', category: 'clothing', audio: 'la-falda' },
  { spanish: 'Los zapatos', english: 'The shoes', pronunciation: 'lohs sah-PAH-tohs', category: 'clothing', audio: 'los-zapatos' },
  { spanish: 'La chaqueta', english: 'The jacket', pronunciation: 'lah chah-KEH-tah', category: 'clothing', audio: 'la-chaqueta' },
  { spanish: 'La camiseta', english: 'The T-shirt', pronunciation: 'lah kah-mee-SEH-tah', category: 'clothing', audio: 'la-camiseta' },
  { spanish: 'Los calcetines', english: 'The socks', pronunciation: 'lohs kahl-seh-TEE-nehs', category: 'clothing', audio: 'los-calcetines' },
  { spanish: 'El sombrero', english: 'The hat', pronunciation: 'ehl sohm-BREH-roh', category: 'clothing', audio: 'el-sombrero' },
  { spanish: 'Las gafas de sol', english: 'The sunglasses', pronunciation: 'lahs GAH-fahs deh sohl', category: 'clothing', audio: 'las-gafas-de-sol' },

  // === Colors & Descriptions (10) ===
  { spanish: 'Rojo', english: 'Red', pronunciation: 'RROH-hoh', category: 'colors', audio: 'rojo' },
  { spanish: 'Azul', english: 'Blue', pronunciation: 'ah-SOOL', category: 'colors', audio: 'azul' },
  { spanish: 'Negro', english: 'Black', pronunciation: 'NEH-groh', category: 'colors', audio: 'negro' },
  { spanish: 'Blanco', english: 'White', pronunciation: 'BLAHN-koh', category: 'colors', audio: 'blanco' },
  { spanish: 'Verde', english: 'Green', pronunciation: 'BEHR-deh', category: 'colors', audio: 'verde' },
  { spanish: 'Amarillo', english: 'Yellow', pronunciation: 'ah-mah-REE-yoh', category: 'colors', audio: 'amarillo' },
  { spanish: 'Grande', english: 'Big / Large', pronunciation: 'GRAHN-deh', category: 'colors', audio: 'grande' },
  { spanish: 'Pequeño', english: 'Small', pronunciation: 'peh-KEH-nyoh', category: 'colors', audio: 'pequeno' },
  { spanish: 'Largo', english: 'Long', pronunciation: 'LAHR-goh', category: 'colors', audio: 'largo' },
  { spanish: 'Corto', english: 'Short', pronunciation: 'KOHR-toh', category: 'colors', audio: 'corto' },

  // === Shopping Phrases (10) ===
  { spanish: '¿Cuánto cuesta?', english: 'How much does it cost?', pronunciation: 'KWAHN-toh KWEHS-tah', category: 'shopping', audio: 'cuanto-cuesta' },
  { spanish: '¿Tiene una talla más grande?', english: 'Do you have a bigger size?', pronunciation: 'tee-EH-neh OO-nah TAH-yah mahs GRAHN-deh', category: 'shopping', audio: 'tiene-talla-mas-grande' },
  { spanish: 'Me queda bien', english: 'It fits me well', pronunciation: 'meh KEH-dah bee-EHN', category: 'shopping', audio: 'me-queda-bien' },
  { spanish: 'Me queda grande', english: 'It is too big on me', pronunciation: 'meh KEH-dah GRAHN-deh', category: 'shopping', audio: 'me-queda-grande' },
  { spanish: '¿Puedo probármelo?', english: 'Can I try it on?', pronunciation: 'PWEH-doh proh-BAHR-meh-loh', category: 'shopping', audio: 'puedo-probarmelo' },
  { spanish: '¿Dónde están los probadores?', english: 'Where are the fitting rooms?', pronunciation: 'DOHN-deh ehs-TAHN lohs proh-bah-DOH-rehs', category: 'shopping', audio: 'donde-estan-los-probadores' },
  { spanish: 'Estoy buscando...', english: 'I am looking for...', pronunciation: 'ehs-TOY boos-KAHN-doh', category: 'shopping', audio: 'estoy-buscando' },
  { spanish: 'Está en oferta', english: 'It is on sale', pronunciation: 'ehs-TAH ehn oh-FEHR-tah', category: 'shopping', audio: 'esta-en-oferta' },
  { spanish: '¿Aceptan tarjeta?', english: 'Do you accept card?', pronunciation: 'ah-SEHP-tahn tahr-HEH-tah', category: 'shopping', audio: 'aceptan-tarjeta' },
  { spanish: 'Me lo llevo', english: 'I will take it', pronunciation: 'meh loh YEH-boh', category: 'shopping', audio: 'me-lo-llevo' },

  // === Store & Payment (8) ===
  { spanish: 'La tienda', english: 'The store', pronunciation: 'lah tee-EHN-dah', category: 'store', audio: 'la-tienda' },
  { spanish: 'El centro comercial', english: 'The shopping mall', pronunciation: 'ehl SEHN-troh koh-mehr-see-AHL', category: 'store', audio: 'el-centro-comercial' },
  { spanish: 'El probador', english: 'The fitting room', pronunciation: 'ehl proh-bah-DOHR', category: 'store', audio: 'el-probador' },
  { spanish: 'La caja', english: 'The register / checkout', pronunciation: 'lah KAH-hah', category: 'store', audio: 'la-caja' },
  { spanish: 'El descuento', english: 'The discount', pronunciation: 'ehl dehs-KWEHN-toh', category: 'store', audio: 'el-descuento' },
  { spanish: 'La talla', english: 'The size', pronunciation: 'lah TAH-yah', category: 'store', audio: 'la-talla' },
  { spanish: 'El recibo', english: 'The receipt', pronunciation: 'ehl reh-SEE-boh', category: 'store', audio: 'el-recibo' },
  { spanish: 'En efectivo', english: 'In cash', pronunciation: 'ehn eh-fehk-TEE-boh', category: 'store', audio: 'en-efectivo' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L26PhraseByAudio = phraseByAudio

// === OUTFIT BUILDER (unique activity) ===

export interface OutfitChallenge {
  scenario: string
  english: string
  correctItems: string[]
  allItems: string[]
}

export const OUTFIT_CHALLENGES: OutfitChallenge[] = [
  {
    scenario: 'Vas a la playa en verano. ¿Qué te pones?',
    english: 'You are going to the beach in summer. What do you wear?',
    correctItems: ['La camiseta', 'Los pantalones cortos', 'Las gafas de sol'],
    allItems: ['La camiseta', 'Los pantalones cortos', 'Las gafas de sol', 'La chaqueta', 'Los calcetines', 'El sombrero de invierno'],
  },
  {
    scenario: 'Tienes una entrevista de trabajo formal.',
    english: 'You have a formal job interview.',
    correctItems: ['La camisa', 'Los pantalones', 'Los zapatos'],
    allItems: ['La camisa', 'Los pantalones', 'Los zapatos', 'La camiseta', 'Las sandalias', 'Los pantalones cortos'],
  },
  {
    scenario: 'Hace frío y llueve. Sales a caminar.',
    english: 'It is cold and rainy. You go for a walk.',
    correctItems: ['La chaqueta', 'Los pantalones', 'Los zapatos'],
    allItems: ['La chaqueta', 'Los pantalones', 'Los zapatos', 'El vestido', 'Las gafas de sol', 'La camiseta'],
  },
  {
    scenario: 'Vas a una fiesta elegante por la noche.',
    english: 'You are going to an elegant party at night.',
    correctItems: ['El vestido', 'Los zapatos', 'El bolso'],
    allItems: ['El vestido', 'Los zapatos', 'El bolso', 'La camiseta', 'Los calcetines', 'El sombrero de playa'],
  },
  {
    scenario: 'Es sábado y vas al gimnasio.',
    english: 'It is Saturday and you are going to the gym.',
    correctItems: ['La camiseta', 'Los pantalones cortos', 'Los tenis'],
    allItems: ['La camiseta', 'Los pantalones cortos', 'Los tenis', 'La falda', 'La chaqueta', 'El sombrero'],
  },
  {
    scenario: 'Visitas un museo en otoño.',
    english: 'You visit a museum in fall.',
    correctItems: ['La camisa', 'Los pantalones', 'La chaqueta'],
    allItems: ['La camisa', 'Los pantalones', 'La chaqueta', 'Los pantalones cortos', 'Las sandalias', 'Las gafas de sol'],
  },
]

// === LESSON DATA ===

export const L26Data: LessonData = {
  id: 'L2.6',
  hero: {
    lessonId: 'L2.6',
    title: 'Shopping & Clothing',
    subtitle: 'Clothes, colors & buying things',
    description: 'Learn to shop for clothes in Spanish — name clothing items, describe colors and sizes, try things on, ask prices, and pay. Essential for any shopping trip in a Spanish-speaking country.',
    image: '/images/L2.6/L2.6.jpg',
    gradient: 'from-pink-800/65 via-rose-700/55 to-fuchsia-700/65',
    accentColor: 'pink-200',
  },

  objectives: [
    { icon: '👕', title: 'Name Clothing Items', desc: 'Identify shirts, pants, dresses, shoes, and accessories in Spanish.' },
    { icon: '🎨', title: 'Describe with Colors & Sizes', desc: 'Use colors and size words to describe what you want.' },
    { icon: '🛍️', title: 'Shop Like a Local', desc: 'Ask prices, try things on, and navigate a store in Spanish.' },
    { icon: '💳', title: 'Pay & Get Receipts', desc: 'Handle payment with cash or card and ask for discounts.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.3', label: 'Numbers & Prices', detail: 'Prices use numbers from L1.3 — "cuesta veinticinco pesos."' },
    { fromLesson: 'L1.4', label: 'Ordering & Asking', detail: '"¿Tiene...?" and "Quiero..." from L1.4 work perfectly for shopping.' },
    { fromLesson: 'L2.2', label: 'Weather & Seasons', detail: 'Weather from L2.2 helps you pick the right clothes — "Hace frío, necesito una chaqueta."' },
  ],

  sectionTransitions: [
    { afterSection: 'clothing', text: 'You know the clothes — now let\u2019s add color!' },
    { afterSection: 'colors-sizes', text: 'Colors and sizes ready — time to go shopping!' },
    { afterSection: 'shopping-phrases', text: 'You can shop! Now let\u2019s learn about stores and payment.' },
    { afterSection: 'dialogues', text: 'Great shopping conversations! Let\u2019s learn about shopping culture.' },
    { afterSection: 'cultural', text: 'Now build the perfect outfit!' },
    { afterSection: 'outfit-builder', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La camisa', english: 'The shirt' },
    { spanish: '¿Cuánto cuesta?', english: 'How much does it cost?' },
    { spanish: 'Me queda bien', english: 'It fits me well' },
    { spanish: 'La talla', english: 'The size' },
    { spanish: 'Rojo', english: 'Red' },
    { spanish: 'Me lo llevo', english: 'I\u2019ll take it' },
  ],

  pronunciationChallenges: [
    { spanish: '¿Cuánto cuesta la camisa?', pronunciation: 'KWAHN-toh KWEHS-tah lah kah-MEE-sah', english: 'How much is the shirt?', audio: 'cuanto-cuesta-la-camisa', tip: 'Both "cuánto" and "cuesta" have the CU = "KW" sound. Keep them crisp!' },
    { spanish: 'Me queda muy bien', pronunciation: 'meh KEH-dah mooy bee-EHN', english: 'It fits me very well', audio: 'me-queda-muy-bien', tip: '"Queda" — QU = "K" sound (never say "kweh-da"). Stress on KE.' },
    { spanish: 'Busco una falda azul', pronunciation: 'BOOS-koh OO-nah FAHL-dah ah-SOOL', english: 'I\u2019m looking for a blue skirt', audio: 'busco-una-falda-azul', tip: '"Azul" — stress on the last syllable: ah-SOOL. Z = S sound in Latin America.' },
    { spanish: '¿Tiene talla pequeña?', pronunciation: 'tee-EH-neh TAH-yah peh-KEH-nyah', english: 'Do you have a small size?', audio: 'tiene-talla-pequena', tip: '"Talla" — LL = Y sound: TAH-yah. "Pequeña" has the Ñ = NY from L1.1.' },
    { spanish: 'Los zapatos negros', pronunciation: 'lohs sah-PAH-tohs NEH-grohs', english: 'The black shoes', audio: 'los-zapatos-negros', tip: '"Zapatos" — Z = S in Latin America. Adjective "negros" comes AFTER the noun in Spanish.' },
    { spanish: 'Está en oferta', pronunciation: 'ehs-TAH ehn oh-FEHR-tah', english: 'It\u2019s on sale', audio: 'esta-en-oferta', tip: '"Oferta" = sale/offer. Stress on FEHR. Very useful word in Latin American markets!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'clothing', label: 'Clothing Items' },
    { id: 'colors-sizes', label: 'Colors & Sizes' },
    { id: 'shopping-phrases', label: 'Shopping Phrases' },
    { id: 'store-payment', label: 'Store & Payment' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'shopping-sorting', label: 'Shopping Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'outfit-builder', label: 'Outfit Builder' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'clothing',
      title: 'Clothing Items',
      description: 'The essential clothes you\u2019ll need to talk about when shopping.',
      tabs: [
        { label: 'Tops & Bottoms', color: 'rose', phrases: PHRASES.filter(p => p.category === 'clothing').slice(0, 5) },
        { label: 'More Clothes', color: 'purple', phrases: PHRASES.filter(p => p.category === 'clothing').slice(5) },
      ],
    },
    {
      id: 'colors-sizes',
      title: 'Colors & Descriptions',
      description: 'Describe what you want with colors and sizes.',
      tabs: [
        { label: 'Colors', color: 'amber', phrases: PHRASES.filter(p => p.category === 'colors').slice(0, 6) },
        { label: 'Sizes', color: 'teal', phrases: PHRASES.filter(p => p.category === 'colors').slice(6) },
      ],
    },
    {
      id: 'shopping-phrases',
      title: 'Shopping Phrases',
      description: 'Everything you need to say while shopping.',
      tabs: [
        { label: 'Asking & Trying', color: 'blue', phrases: PHRASES.filter(p => p.category === 'shopping').slice(0, 5), columns: 2 },
        { label: 'Buying & Paying', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'shopping').slice(5), columns: 2 },
      ],
    },
    {
      id: 'store-payment',
      title: 'Store & Payment',
      description: 'Navigate the store and handle payment.',
      tabs: [
        { label: 'The Store', color: 'rose', phrases: PHRASES.filter(p => p.category === 'store').slice(0, 4) },
        { label: 'Payment', color: 'orange', phrases: PHRASES.filter(p => p.category === 'store').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: '"Queda" — It Fits (Not "Kweda"!)',
      content: '"Me queda bien" (it fits me well) is your go-to shopping phrase. Remember: QU in Spanish = "K" sound, never "KW." So "queda" = KEH-dah, not "KWEH-dah." This is the same rule as "quiero" (L1.4) and "qué" (L1.2).',
      example: 'Me queda bien = meh KEH-dah bee-EHN | Me queda grande = meh KEH-dah GRAHN-deh',
      reviewFrom: 'L1.1',
    },
    {
      title: 'Colors Agree with Nouns!',
      content: 'In Spanish, colors change to match the noun. Masculine: "zapato rojo" (red shoe). Feminine: "camisa roja" (red shirt). But colors ending in -E or consonant DON\u2019T change: "camisa verde" AND "zapato verde." "Azul" stays "azul" for both!',
      example: 'Camisa roja | Zapato rojo | Camisa verde | Zapato verde | Camisa azul | Zapato azul',
    },
    {
      title: '"Probarse" — Reflexive Verbs While Shopping',
      content: '"Probarse" (to try on) is reflexive — the action reflects back to you. "¿Puedo probármelo?" = Can I try it on? The "-me" is "myself" and "-lo" is "it." You saw reflexive verbs in L1.8 (levantarse, acostarse). Same pattern here!',
      example: 'Probármelo = try it on (me) | Probártelo = try it on (you)',
      reviewFrom: 'L1.8',
    },
    {
      title: '"Llevar" — To Wear AND To Take',
      content: '"Me lo llevo" (I\u2019ll take it) uses "llevar" which means both "to wear" and "to take/carry." At a store: "Me lo llevo" = I\u2019ll buy/take it. Describing someone: "Lleva una camisa azul" = He/she is wearing a blue shirt. Context tells you which meaning!',
      example: 'Me lo llevo = I\u2019ll take it | Lleva pantalones negros = Wearing black pants',
    },
  ],

  flashcardGroups: [
    {
      key: 'clothing',
      label: 'Clothing',
      audioKeys: ['la-camisa', 'los-pantalones', 'el-vestido', 'la-falda', 'los-zapatos', 'la-chaqueta', 'la-camiseta', 'los-calcetines', 'el-sombrero', 'las-gafas-de-sol'],
    },
    {
      key: 'colors-sizes',
      label: 'Colors & Sizes',
      audioKeys: ['rojo', 'azul', 'negro', 'blanco', 'verde', 'amarillo', 'grande', 'pequeno', 'largo', 'corto'],
    },
    {
      key: 'shopping',
      label: 'Shopping',
      audioKeys: ['cuanto-cuesta', 'me-queda-bien', 'puedo-probarmelo', 'estoy-buscando', 'me-lo-llevo', 'esta-en-oferta', 'aceptan-tarjeta', 'el-descuento', 'la-talla', 'en-efectivo'],
    },
  ],

  matchPairs: [
    { left: 'La camisa', right: 'The shirt' },
    { left: 'Los zapatos', right: 'The shoes' },
    { left: 'Rojo', right: 'Red' },
    { left: '¿Cuánto cuesta?', right: 'How much?' },
    { left: 'Me lo llevo', right: 'I\u2019ll take it' },
    { left: 'El descuento', right: 'The discount' },
    { left: 'La talla', right: 'The size' },
    { left: 'La chaqueta', right: 'The jacket' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Tops vs. Bottoms vs. Accessories',
      instruction: 'Classify each clothing item.',
      buckets: ['Top 👕', 'Bottom 👖', 'Accessory 🕶️'],
      items: [
        { text: 'La camisa', bucket: 'Top 👕' },
        { text: 'La camiseta', bucket: 'Top 👕' },
        { text: 'La chaqueta', bucket: 'Top 👕' },
        { text: 'Los pantalones', bucket: 'Bottom 👖' },
        { text: 'La falda', bucket: 'Bottom 👖' },
        { text: 'Los zapatos', bucket: 'Bottom 👖' },
        { text: 'El sombrero', bucket: 'Accessory 🕶️' },
        { text: 'Las gafas de sol', bucket: 'Accessory 🕶️' },
        { text: 'Los calcetines', bucket: 'Accessory 🕶️' },
      ],
    },
    {
      title: 'Warm Colors vs. Cool Colors',
      instruction: 'Is this a warm or cool color?',
      buckets: ['Warm 🔥', 'Cool ❄️'],
      items: [
        { text: 'Rojo', bucket: 'Warm 🔥' },
        { text: 'Amarillo', bucket: 'Warm 🔥' },
        { text: 'Azul', bucket: 'Cool ❄️' },
        { text: 'Verde', bucket: 'Cool ❄️' },
        { text: 'Blanco', bucket: 'Cool ❄️' },
      ],
    },
  ],
  sortSectionId: 'shopping-sorting',
  sortTitle: 'Shopping Sorting',

  dialogues: [
    {
      id: 'dialogue-store',
      title: 'Shopping for a Shirt — Lima',
      location: 'Lima',
      lines: [
        { speaker: 'Vendedor', text: '¡Buenas tardes! ¿En qué puedo ayudarle?', audio: '/audio/L2.6/phrases/d1-line1.mp3', annotations: [{ phrase: 'Buenas tardes', fromLesson: 'L1.2', note: 'Greeting from L1.2' }] },
        { speaker: 'Cliente', text: 'Estoy buscando una camisa azul.', audio: '/audio/L2.6/phrases/d1-line2.mp3' },
        { speaker: 'Vendedor', text: 'Tenemos estas. ¿Qué talla usa?', audio: '/audio/L2.6/phrases/d1-line3.mp3' },
        { speaker: 'Cliente', text: 'Mediana. ¿Puedo probármela?', audio: '/audio/L2.6/phrases/d1-line4.mp3' },
        { speaker: 'Vendedor', text: 'Claro, los probadores están al fondo a la izquierda.', audio: '/audio/L2.6/phrases/d1-line5.mp3', annotations: [{ phrase: 'a la izquierda', fromLesson: 'L1.5', note: 'Directions from L1.5' }] },
        { speaker: 'Cliente', text: 'Me queda perfecta. ¿Cuánto cuesta?', audio: '/audio/L2.6/phrases/d1-line6.mp3', annotations: [{ phrase: '¿Cuánto cuesta?', fromLesson: 'L1.4', note: 'Asking price from L1.4' }] },
        { speaker: 'Vendedor', text: 'Cuesta ochenta y nueve soles. Pero hoy está en oferta: setenta soles.', audio: '/audio/L2.6/phrases/d1-line7.mp3', annotations: [{ phrase: 'ochenta y nueve', fromLesson: 'L1.3', note: 'Numbers from L1.3' }] },
        { speaker: 'Cliente', text: '¡Perfecto! Me la llevo. ¿Aceptan tarjeta?', audio: '/audio/L2.6/phrases/d1-line8.mp3' },
        { speaker: 'Vendedor', text: 'Sí, tarjeta y efectivo. Pase por la caja, por favor.', audio: '/audio/L2.6/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-market',
      title: 'At the Market — Oaxaca',
      location: 'Oaxaca',
      lines: [
        { speaker: 'Vendedora', text: '¡Pásele, pásele! Tenemos vestidos bonitos y baratos.', audio: '/audio/L2.6/phrases/d2-line1.mp3' },
        { speaker: 'Clienta', text: 'Me gusta este vestido rojo. ¿Cuánto cuesta?', audio: '/audio/L2.6/phrases/d2-line2.mp3' },
        { speaker: 'Vendedora', text: 'Trescientos cincuenta pesos. Está hecho a mano.', audio: '/audio/L2.6/phrases/d2-line3.mp3' },
        { speaker: 'Clienta', text: '¿Me hace un descuento? Compro dos.', audio: '/audio/L2.6/phrases/d2-line4.mp3' },
        { speaker: 'Vendedora', text: 'Dos por seiscientos pesos. ¿Le parece bien?', audio: '/audio/L2.6/phrases/d2-line5.mp3' },
        { speaker: 'Clienta', text: '¡Sí! ¿Tiene uno en verde también?', audio: '/audio/L2.6/phrases/d2-line6.mp3' },
        { speaker: 'Vendedora', text: 'Sí, aquí tiene. Verde y rojo, los colores de México.', audio: '/audio/L2.6/phrases/d2-line7.mp3' },
        { speaker: 'Clienta', text: 'Hermosos. ¿Solo efectivo o también tarjeta?', audio: '/audio/L2.6/phrases/d2-line8.mp3' },
        { speaker: 'Vendedora', text: 'Aquí solo efectivo, pero hay un cajero en la esquina.', audio: '/audio/L2.6/phrases/d2-line9.mp3', annotations: [{ phrase: 'en la esquina', fromLesson: 'L1.5', note: 'Location from L1.5' }] },
      ],
    },
  ],
  dialogueDescription: 'Shop for a shirt in a Lima store and haggle at a traditional Oaxaca market.',

  culturalNotes: [
    {
      title: 'El Regateo — Haggling Culture',
      content: 'In many Latin American countries, haggling ("regatear") is common at markets and street vendors — but NOT in malls or chain stores. In Mexico, Guatemala, and Peru, it\u2019s expected at artisan markets. Start by asking the price, then offer 60-70% of the stated price. Be friendly and smile! "¿Me hace un descuentito?" (Can you give me a little discount?) works wonders.',
    },
    {
      title: 'Tallas y Medidas — Sizes Are Different!',
      content: 'Clothing sizes vary across Latin America and don\u2019t match US sizes. Mexico uses S/M/L/XL for casual wear but different numbers for formal clothes. Argentina and Chile often use European sizing. When in doubt, always try clothes on! "¿Puedo probármelo?" is your best friend. Also, "medida" means measurement — useful at tailors.',
    },
    {
      title: 'Mercados Tradicionales — Traditional Markets',
      content: 'Every Latin American city has traditional markets full of color and life. Mexico\u2019s "tianguis" are open-air markets dating back to the Aztecs. Peru\u2019s "mercados" sell everything from clothing to food. Guatemala\u2019s Chichicastenango market is world-famous. These markets are the best places to practice Spanish and find unique handmade items!',
    },
  ],
  culturalGradient: 'from-pink-50 to-rose-50',

  quiz: [
    { id: 1, type: 'mc', text: 'How do you say "the shirt" in Spanish?', options: ['La falda', 'La camisa', 'La camiseta', 'La chaqueta'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "¿Cuánto ___?" (How much does it cost?)', answer: 'cuesta' },
    { id: 3, type: 'mc', text: '"Me queda grande" means:', options: ['It fits me well', 'It is too big on me', 'It is too small', 'I like it'], answer: 1 },
    { id: 4, type: 'tf', text: '"Azul" changes to "azula" for feminine nouns.', answer: false },
    { id: 5, type: 'mc', text: 'You want to try on pants. You say:', options: ['¿Puedo comprarlos?', '¿Puedo probármelos?', '¿Puedo verlos?', '¿Puedo llevarlos?'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Estoy ___ una chaqueta negra" (I am looking for)', answer: 'buscando' },
    { id: 7, type: 'mc', text: '"En efectivo" means:', options: ['By card', 'In cash', 'On credit', 'By check'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, how much was the shirt on sale?', options: ['89 soles', '70 soles', '80 soles', '60 soles'], answer: 1 },
    { id: 9, type: 'tf', text: 'Haggling is appropriate at chain stores in Latin America.', answer: false },
    { id: 10, type: 'mc', text: '"Me lo llevo" means:', options: ['I\u2019ll return it', 'I don\u2019t want it', 'I\u2019ll take it', 'I\u2019ll try it'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Los zapatos ___" (black — masculine plural)', answer: 'negros' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what was the final price for two dresses?', options: ['350 pesos', '700 pesos', '600 pesos', '500 pesos'], answer: 2 },
    { id: 13, type: 'mc', text: '"El probador" is:', options: ['The cashier', 'The fitting room', 'The store', 'The receipt'], answer: 1 },
    { id: 14, type: 'tf', text: '"Llevar" can mean both "to wear" and "to take."', answer: true },
    { id: 15, type: 'mc', text: 'A "camisa roja" is:', options: ['A red shirt', 'A red dress', 'A red skirt', 'A red jacket'], answer: 0 },
  ],

  audioBase: '/audio/L2.6/phrases',

  uniqueActivity: {
    id: 'OutfitBuilderL26',
    sectionId: 'outfit-builder',
    sectionColor: 'bg-pink-50/40',
    sectionBorder: 'border-pink-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    clothing: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'colors-sizes': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'shopping-phrases': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'store-payment': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'shopping-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'outfit-builder': { bg: 'bg-pink-50/40', border: 'border-pink-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
