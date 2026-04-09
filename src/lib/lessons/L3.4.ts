import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Ingredients (10) ===
  { spanish: 'El aguacate', english: 'The avocado', pronunciation: 'ehl ah-gwah-KAH-teh', category: 'ingredients', audio: 'el-aguacate' },
  { spanish: 'La cebolla', english: 'The onion', pronunciation: 'lah seh-BOH-yah', category: 'ingredients', audio: 'la-cebolla' },
  { spanish: 'El ajo', english: 'The garlic', pronunciation: 'ehl AH-hoh', category: 'ingredients', audio: 'el-ajo' },
  { spanish: 'El tomate', english: 'The tomato', pronunciation: 'ehl toh-MAH-teh', category: 'ingredients', audio: 'el-tomate' },
  { spanish: 'El arroz', english: 'The rice', pronunciation: 'ehl ah-RROHS', category: 'ingredients', audio: 'el-arroz' },
  { spanish: 'El pollo', english: 'The chicken', pronunciation: 'ehl POH-yoh', category: 'ingredients', audio: 'el-pollo' },
  { spanish: 'La sal y la pimienta', english: 'The salt and pepper', pronunciation: 'lah sahl ee lah pee-mee-EHN-tah', category: 'ingredients', audio: 'la-sal-y-la-pimienta' },
  { spanish: 'El aceite de oliva', english: 'The olive oil', pronunciation: 'ehl ah-SEH-ee-teh deh oh-LEE-bah', category: 'ingredients', audio: 'el-aceite-de-oliva' },
  { spanish: 'El limón', english: 'The lime/lemon', pronunciation: 'ehl lee-MOHN', category: 'ingredients', audio: 'el-limon' },
  { spanish: 'El cilantro', english: 'The cilantro', pronunciation: 'ehl see-LAHN-troh', category: 'ingredients', audio: 'el-cilantro' },

  // === Kitchen Tools (8) ===
  { spanish: 'La sartén', english: 'The frying pan', pronunciation: 'lah sahr-TEHN', category: 'kitchen-tools', audio: 'la-sarten' },
  { spanish: 'La olla', english: 'The pot', pronunciation: 'lah OH-yah', category: 'kitchen-tools', audio: 'la-olla' },
  { spanish: 'El cuchillo', english: 'The knife', pronunciation: 'ehl koo-CHEE-yoh', category: 'kitchen-tools', audio: 'el-cuchillo' },
  { spanish: 'La tabla de cortar', english: 'The cutting board', pronunciation: 'lah TAH-blah deh kohr-TAHR', category: 'kitchen-tools', audio: 'la-tabla-de-cortar' },
  { spanish: 'La cuchara', english: 'The spoon', pronunciation: 'lah koo-CHAH-rah', category: 'kitchen-tools', audio: 'la-cuchara' },
  { spanish: 'El tenedor', english: 'The fork', pronunciation: 'ehl teh-neh-DOHR', category: 'kitchen-tools', audio: 'el-tenedor' },
  { spanish: 'El horno', english: 'The oven', pronunciation: 'ehl OHR-noh', category: 'kitchen-tools', audio: 'el-horno' },
  { spanish: 'La estufa', english: 'The stove', pronunciation: 'lah ehs-TOO-fah', category: 'kitchen-tools', audio: 'la-estufa' },

  // === Cooking Actions (10) ===
  { spanish: 'Cortar en pedazos', english: 'To cut into pieces', pronunciation: 'kohr-TAHR ehn peh-DAH-sohs', category: 'cooking-actions', audio: 'cortar-en-pedazos' },
  { spanish: 'Mezclar los ingredientes', english: 'To mix the ingredients', pronunciation: 'mehs-KLAHR lohs een-greh-dee-EHN-tehs', category: 'cooking-actions', audio: 'mezclar-los-ingredientes' },
  { spanish: 'Hervir el agua', english: 'To boil the water', pronunciation: 'ehr-BEER ehl AH-gwah', category: 'cooking-actions', audio: 'hervir-el-agua' },
  { spanish: 'Freír con aceite', english: 'To fry with oil', pronunciation: 'freh-EER kohn ah-SEH-ee-teh', category: 'cooking-actions', audio: 'freir-con-aceite' },
  { spanish: 'Cocinar a fuego lento', english: 'To cook on low heat', pronunciation: 'koh-see-NAHR ah FWEH-goh LEHN-toh', category: 'cooking-actions', audio: 'cocinar-a-fuego-lento' },
  { spanish: 'Agregar la sal', english: 'To add the salt', pronunciation: 'ah-greh-GAHR lah sahl', category: 'cooking-actions', audio: 'agregar-la-sal' },
  { spanish: 'Picar la cebolla', english: 'To chop the onion', pronunciation: 'pee-KAHR lah seh-BOH-yah', category: 'cooking-actions', audio: 'picar-la-cebolla' },
  { spanish: 'Pelar el ajo', english: 'To peel the garlic', pronunciation: 'peh-LAHR ehl AH-hoh', category: 'cooking-actions', audio: 'pelar-el-ajo' },
  { spanish: 'Revolver la mezcla', english: 'To stir the mixture', pronunciation: 'reh-bohl-BEHR lah MEHS-klah', category: 'cooking-actions', audio: 'revolver-la-mezcla' },
  { spanish: 'Servir en un plato', english: 'To serve on a plate', pronunciation: 'sehr-BEER ehn oon PLAH-toh', category: 'cooking-actions', audio: 'servir-en-un-plato' },

  // === Recipe Phrases (10) ===
  { spanish: 'Primero, lava las verduras', english: 'First, wash the vegetables', pronunciation: 'pree-MEH-roh LAH-bah lahs behr-DOO-rahs', category: 'recipe-phrases', audio: 'primero-lava-las-verduras' },
  { spanish: 'Después, corta el tomate', english: 'Then, cut the tomato', pronunciation: 'dehs-PWEHS KOHR-tah ehl toh-MAH-teh', category: 'recipe-phrases', audio: 'despues-corta-el-tomate' },
  { spanish: 'Luego, calienta la sartén', english: 'Next, heat the pan', pronunciation: 'LWEH-goh kah-lee-EHN-tah lah sahr-TEHN', category: 'recipe-phrases', audio: 'luego-calienta-la-sarten' },
  { spanish: 'Cocina por veinte minutos', english: 'Cook for twenty minutes', pronunciation: 'koh-SEE-nah pohr BEH-een-teh mee-NOO-tohs', category: 'recipe-phrases', audio: 'cocina-por-veinte-minutos' },
  { spanish: '¡La receta está lista!', english: 'The recipe is ready!', pronunciation: 'lah rreh-SEH-tah ehs-TAH LEES-tah', category: 'recipe-phrases', audio: 'la-receta-esta-lista' },
  { spanish: 'Necesitas dos tazas de arroz', english: 'You need two cups of rice', pronunciation: 'neh-seh-SEE-tahs dohs TAH-sahs deh ah-RROHS', category: 'recipe-phrases', audio: 'necesitas-dos-tazas-de-arroz' },
  { spanish: 'Añade una pizca de sal', english: 'Add a pinch of salt', pronunciation: 'ah-NYAH-deh OO-nah PEES-kah deh sahl', category: 'recipe-phrases', audio: 'anade-una-pizca-de-sal' },
  { spanish: 'Deja reposar cinco minutos', english: 'Let it rest for five minutes', pronunciation: 'DEH-hah rreh-poh-SAHR SEEN-koh mee-NOO-tohs', category: 'recipe-phrases', audio: 'deja-reposar-cinco-minutos' },
  { spanish: 'La comida huele delicioso', english: 'The food smells delicious', pronunciation: 'lah koh-MEE-dah WEH-leh deh-lee-see-OH-soh', category: 'recipe-phrases', audio: 'la-comida-huele-delicioso' },
  { spanish: '¿Me pasas la receta?', english: 'Can you pass me the recipe?', pronunciation: 'meh PAH-sahs lah rreh-SEH-tah', category: 'recipe-phrases', audio: 'me-pasas-la-receta' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L34PhraseByAudio = phraseByAudio

// === RECIPE BUILDER (unique activity) ===

export interface RecipeStep {
  step: string
  english: string
  order: number
}

export interface RecipeChallenge {
  title: string
  emoji: string
  steps: RecipeStep[]
}

export const RECIPE_CHALLENGES: RecipeChallenge[] = [
  {
    title: 'Guacamole',
    emoji: '🥑',
    steps: [
      { step: 'Corta los aguacates por la mitad y quita la semilla.', english: 'Cut the avocados in half and remove the seed.', order: 1 },
      { step: 'Con un tenedor, machaca la pulpa del aguacate.', english: 'With a fork, mash the avocado flesh.', order: 2 },
      { step: 'Pica la cebolla, el tomate y el cilantro.', english: 'Chop the onion, tomato, and cilantro.', order: 3 },
      { step: 'Mezcla todo y agrega el jugo de limón.', english: 'Mix everything and add the lime juice.', order: 4 },
      { step: 'Añade sal al gusto y sirve con totopos.', english: 'Add salt to taste and serve with tortilla chips.', order: 5 },
    ],
  },
  {
    title: 'Arroz con Pollo',
    emoji: '🍗',
    steps: [
      { step: 'Corta el pollo en pedazos y sazónalo con sal y pimienta.', english: 'Cut the chicken into pieces and season with salt and pepper.', order: 1 },
      { step: 'Calienta aceite en una olla grande y fríe el pollo.', english: 'Heat oil in a large pot and fry the chicken.', order: 2 },
      { step: 'Agrega la cebolla y el ajo picados, cocina por tres minutos.', english: 'Add the chopped onion and garlic, cook for three minutes.', order: 3 },
      { step: 'Añade el arroz, el tomate y el agua. Mezcla bien.', english: 'Add the rice, tomato, and water. Mix well.', order: 4 },
      { step: 'Cocina a fuego lento por veinte minutos hasta que el arroz esté listo.', english: 'Cook on low heat for twenty minutes until the rice is done.', order: 5 },
    ],
  },
]

// === LESSON DATA ===

export const L34Data: LessonData = {
  id: 'L3.4',
  hero: {
    lessonId: 'L3.4',
    title: 'Cooking & Recipes — Cocina y Recetas',
    subtitle: 'Learn to cook Latin American dishes in Spanish',
    description: 'Master the vocabulary of the kitchen: ingredients, tools, cooking verbs, and how to follow a recipe. From chopping onions to simmering arroz con pollo, you\'ll learn to navigate any Latin American kitchen!',
    image: '/images/L3.4/L3.4.jpg',
    gradient: 'from-red-800/65 via-orange-700/55 to-amber-700/65',
    accentColor: 'orange-200',
  },

  objectives: [
    { icon: '🥑', title: 'Common Ingredients', desc: 'Name fruits, vegetables, meats, and seasonings used in Latin American cooking.' },
    { icon: '🍳', title: 'Kitchen Tools', desc: 'Identify the essential utensils: sartén, olla, cuchillo, tabla de cortar, and more.' },
    { icon: '🔪', title: 'Cooking Verbs', desc: 'Use key verbs like cortar, mezclar, hervir, freír, picar, pelar, and servir.' },
    { icon: '📋', title: 'Recipe Instructions', desc: 'Follow and give recipe instructions using sequence words: primero, después, luego.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.4', label: 'Café Food', detail: 'Café vocabulary from L1.4 (coffee, sandwich, juice) now expands to full kitchen ingredients.' },
    { fromLesson: 'L1.7', label: 'Food & Drinks', detail: 'L1.7 taught ordering food. Now you\'ll learn to prepare it yourself!' },
    { fromLesson: 'L3.1', label: 'Past Tense', detail: 'L3.1 preterite lets you say what you cooked: "Cociné arroz con pollo ayer."' },
  ],

  sectionTransitions: [
    { afterSection: 'ingredients', text: 'You know the ingredients! Now let\'s grab the right kitchen tools.' },
    { afterSection: 'kitchen-tools', text: 'Tools ready — time to learn the cooking actions!' },
    { afterSection: 'cooking-actions', text: 'You can describe cooking! Let\'s put it all together with recipe phrases.' },
    { afterSection: 'dialogues', text: 'Great kitchen conversations! Let\'s explore Latin American cooking culture.' },
    { afterSection: 'cultural', text: 'Now put your skills to the test — build a recipe step by step!' },
    { afterSection: 'recipe-builder', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Necesito...', english: 'I need...' },
    { spanish: 'Corta el/la...', english: 'Cut the...' },
    { spanish: 'Mezcla con...', english: 'Mix with...' },
    { spanish: 'Cocina por... minutos', english: 'Cook for... minutes' },
    { spanish: '¡Está delicioso!', english: 'It\'s delicious!' },
    { spanish: 'La receta lleva...', english: 'The recipe calls for...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Cortar en pedazos pequeños', pronunciation: 'kohr-TAHR ehn peh-DAH-sohs peh-KEH-nyohs', english: 'Cut into small pieces', audio: 'cortar-en-pedazos-pequenos', tip: 'The R in "cortar" is a single tap, not a trill. Tap the roof of your mouth quickly, like the "tt" in "butter" in American English.' },
    { spanish: 'Hervir el agua con sal', pronunciation: 'ehr-BEER ehl AH-gwah kohn sahl', english: 'Boil the water with salt', audio: 'hervir-el-agua-con-sal', tip: 'The H in "hervir" is SILENT! Say "ehr-BEER." Also, "agua" starts with "ah-gwah" — the GU sounds like "gw."' },
    { spanish: 'Freír las cebollas en aceite', pronunciation: 'freh-EER lahs seh-BOH-yahs ehn ah-SEH-ee-teh', english: 'Fry the onions in oil', audio: 'freir-las-cebollas-en-aceite', tip: '"Freír" has a strong accent on the final syllable. The "eí" diphthong sounds like "eh-EE." Practice: fre-ÍR.' },
    { spanish: 'Picar la cebolla bien fina', pronunciation: 'pee-KAHR lah seh-BOH-yah bee-EHN FEE-nah', english: 'Finely chop the onion', audio: 'picar-la-cebolla-bien-fina', tip: '"Picar" means to chop finely (not just cut). The double L in "cebolla" sounds like Y: "seh-BOH-yah."' },
    { spanish: 'Mezclar todo con una cuchara', pronunciation: 'mehs-KLAHR TOH-doh kohn OO-nah koo-CHAH-rah', english: 'Mix everything with a spoon', audio: 'mezclar-todo-con-una-cuchara', tip: 'The Z in "mezclar" sounds like S in Latin America: "mes-KLAHR." In Spain it sounds like "th." We use the Latin American pronunciation.' },
    { spanish: 'Cocinar a fuego lento veinte minutos', pronunciation: 'koh-see-NAHR ah FWEH-goh LEHN-toh BEH-een-teh mee-NOO-tohs', english: 'Simmer for twenty minutes', audio: 'cocinar-a-fuego-lento-veinte-minutos', tip: '"Fuego lento" (slow fire) = simmer. "Fuego" has the diphthong "ue": FWEH-goh. From L1.3 numbers: veinte (20).' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'kitchen-tools', label: 'Kitchen Tools' },
    { id: 'cooking-actions', label: 'Cooking Actions' },
    { id: 'recipe-phrases', label: 'Recipe Phrases' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'vocab-sorting', label: 'Vocab Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'recipe-builder', label: 'Recipe Builder' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'ingredients',
      title: 'Common Ingredients',
      description: 'The building blocks of every Latin American dish — fruits, vegetables, proteins, and seasonings.',
      tabs: [
        { label: 'Produce', color: 'orange', phrases: PHRASES.filter(p => p.category === 'ingredients').slice(0, 5) },
        { label: 'Proteins & Seasonings', color: 'amber', phrases: PHRASES.filter(p => p.category === 'ingredients').slice(5) },
      ],
    },
    {
      id: 'kitchen-tools',
      title: 'Kitchen Tools',
      description: 'Essential utensils and equipment you\'ll need to cook any recipe.',
      tabs: [
        { label: 'Cooking Tools', color: 'rose', phrases: PHRASES.filter(p => p.category === 'kitchen-tools').slice(0, 4) },
        { label: 'More Essentials', color: 'blue', phrases: PHRASES.filter(p => p.category === 'kitchen-tools').slice(4) },
      ],
    },
    {
      id: 'cooking-actions',
      title: 'Cooking Actions',
      description: 'The verbs that bring recipes to life — cutting, mixing, boiling, frying, and more.',
      tabs: [
        { label: 'Heat & Mix', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'cooking-actions').slice(0, 5) },
        { label: 'Prep & Serve', color: 'purple', phrases: PHRASES.filter(p => p.category === 'cooking-actions').slice(5) },
      ],
    },
    {
      id: 'recipe-phrases',
      title: 'Recipe Phrases',
      description: 'Put it all together — full recipe instructions and useful cooking expressions.',
      tabs: [
        { label: 'Instructions', color: 'teal', phrases: PHRASES.filter(p => p.category === 'recipe-phrases').slice(0, 5) },
        { label: 'Useful Expressions', color: 'orange', phrases: PHRASES.filter(p => p.category === 'recipe-phrases').slice(5) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Silent H — El Horno, Hervir, Huevo',
      content: 'The H is ALWAYS silent in Spanish! "Hervir" sounds like "ehr-BEER," "horno" like "OHR-noh." This is different from English where H is usually pronounced. Never add an H sound — just skip it completely.',
      example: 'Hervir (ehr-BEER) | Horno (OHR-noh) | Huevo (WEH-boh)',
    },
    {
      title: 'Double L (LL) — Cebolla, Cuchillo, Pollo',
      content: 'In Latin America, LL sounds like Y in "yes." "Cebolla" = seh-BOH-yah, "cuchillo" = koo-CHEE-yoh, "pollo" = POH-yoh. In Argentina, it sounds like "sh." We teach the standard Latin American Y sound.',
      example: 'Cebolla (seh-BOH-yah) | Pollo (POH-yoh) | Cuchillo (koo-CHEE-yoh)',
      reviewFrom: 'L1.4',
    },
    {
      title: 'Cooking Verb Conjugation — Imperatives',
      content: 'Recipe instructions use the imperative (command) form. For tú: drop the -s from present tense. "Cortas" → "¡Corta!" "Mezclas" → "¡Mezcla!" For usted (formal): use subjunctive. "Corte," "Mezcle." Recipes typically use tú or infinitive (cortar, mezclar).',
      example: 'Corta el tomate (Cut the tomato) | Mezcla bien (Mix well) | Sirve caliente (Serve hot)',
    },
    {
      title: 'Sequence Words — Primero, Después, Luego',
      content: 'These words structure any recipe or instructions. "Primero" (first), "después" (then/after), "luego" (next/then), "finalmente" (finally). They always come at the beginning of a sentence followed by a comma. You learned "primero... después" in L3.1!',
      example: 'Primero, corta. Después, mezcla. Luego, cocina. Finalmente, sirve.',
      reviewFrom: 'L3.1',
    },
  ],

  flashcardGroups: [
    {
      key: 'ingredients',
      label: 'Ingredients',
      audioKeys: ['el-aguacate', 'la-cebolla', 'el-ajo', 'el-tomate', 'el-arroz', 'el-pollo', 'la-sal-y-la-pimienta', 'el-aceite-de-oliva', 'el-limon', 'el-cilantro'],
    },
    {
      key: 'tools-actions',
      label: 'Tools & Actions',
      audioKeys: ['la-sarten', 'la-olla', 'el-cuchillo', 'la-cuchara', 'cortar-en-pedazos', 'mezclar-los-ingredientes', 'hervir-el-agua', 'freir-con-aceite', 'picar-la-cebolla'],
    },
    {
      key: 'recipe-phrases',
      label: 'Recipe Phrases',
      audioKeys: ['primero-lava-las-verduras', 'despues-corta-el-tomate', 'luego-calienta-la-sarten', 'cocina-por-veinte-minutos', 'la-receta-esta-lista', 'necesitas-dos-tazas-de-arroz', 'anade-una-pizca-de-sal'],
    },
  ],

  matchPairs: [
    { left: 'Cortar', right: 'To cut' },
    { left: 'Mezclar', right: 'To mix' },
    { left: 'Hervir', right: 'To boil' },
    { left: 'Freír', right: 'To fry' },
    { left: 'La sartén', right: 'Frying pan' },
    { left: 'La olla', right: 'Pot' },
    { left: 'El cuchillo', right: 'Knife' },
    { left: 'El aguacate', right: 'Avocado' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Ingredient or Tool?',
      instruction: 'Is this an ingredient or a kitchen tool?',
      buckets: ['Ingredient 🥑', 'Tool 🍳'],
      items: [
        { text: 'El aguacate', bucket: 'Ingredient 🥑' },
        { text: 'El tomate', bucket: 'Ingredient 🥑' },
        { text: 'El pollo', bucket: 'Ingredient 🥑' },
        { text: 'El cilantro', bucket: 'Ingredient 🥑' },
        { text: 'La sartén', bucket: 'Tool 🍳' },
        { text: 'El cuchillo', bucket: 'Tool 🍳' },
        { text: 'La olla', bucket: 'Tool 🍳' },
        { text: 'La cuchara', bucket: 'Tool 🍳' },
      ],
    },
    {
      title: 'Prep or Cook?',
      instruction: 'Is this a preparation step or a cooking step?',
      buckets: ['Prep 🔪', 'Cook 🔥'],
      items: [
        { text: 'Cortar', bucket: 'Prep 🔪' },
        { text: 'Picar', bucket: 'Prep 🔪' },
        { text: 'Pelar', bucket: 'Prep 🔪' },
        { text: 'Lavar', bucket: 'Prep 🔪' },
        { text: 'Hervir', bucket: 'Cook 🔥' },
        { text: 'Freír', bucket: 'Cook 🔥' },
        { text: 'Cocinar a fuego lento', bucket: 'Cook 🔥' },
        { text: 'Revolver', bucket: 'Cook 🔥' },
      ],
    },
  ],
  sortSectionId: 'vocab-sorting',
  sortTitle: 'Vocab Sorting',

  dialogues: [
    {
      id: 'dialogue-guacamole',
      title: 'Making Guacamole — Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Sofía', text: '¡Vamos a hacer guacamole! ¿Tienes aguacates?', audio: '/audio/L3.4/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Sí, compré tres aguacates maduros en el mercado.', audio: '/audio/L3.4/phrases/d1-line2.mp3', annotations: [{ phrase: 'compré', fromLesson: 'L3.1', note: 'Preterite -AR from L3.1' }] },
        { speaker: 'Sofía', text: 'Perfecto. Primero, corta los aguacates por la mitad.', audio: '/audio/L3.4/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Listo. ¿Ahora los machaco con un tenedor?', audio: '/audio/L3.4/phrases/d1-line4.mp3' },
        { speaker: 'Sofía', text: 'Sí, pero no mucho. Me gusta con pedazos. Ahora pica la cebolla y el cilantro.', audio: '/audio/L3.4/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: '¿Le pongo tomate también?', audio: '/audio/L3.4/phrases/d1-line6.mp3' },
        { speaker: 'Sofía', text: '¡Claro! Mezcla todo y agrega jugo de limón y sal.', audio: '/audio/L3.4/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: '¡Mmm, huele delicioso! ¿Dónde están los totopos?', audio: '/audio/L3.4/phrases/d1-line8.mp3' },
        { speaker: 'Sofía', text: '¡Aquí! Ayer los compré en la tienda. ¡A comer!', audio: '/audio/L3.4/phrases/d1-line9.mp3', annotations: [{ phrase: 'ayer', fromLesson: 'L3.1', note: 'Time marker from L3.1' }] },
      ],
    },
    {
      id: 'dialogue-arroz',
      title: 'Cooking Arroz con Pollo — Lima',
      location: 'Lima',
      lines: [
        { speaker: 'Carmen', text: 'Hoy voy a cocinar arroz con pollo. ¿Me ayudas?', audio: '/audio/L3.4/phrases/d2-line1.mp3' },
        { speaker: 'Ricardo', text: '¡Sí! ¿Qué necesitamos?', audio: '/audio/L3.4/phrases/d2-line2.mp3' },
        { speaker: 'Carmen', text: 'Pollo, arroz, cebolla, ajo, tomate y cilantro.', audio: '/audio/L3.4/phrases/d2-line3.mp3' },
        { speaker: 'Ricardo', text: '¿Primero corto el pollo?', audio: '/audio/L3.4/phrases/d2-line4.mp3' },
        { speaker: 'Carmen', text: 'Sí, córtalo en pedazos y ponle sal y pimienta.', audio: '/audio/L3.4/phrases/d2-line5.mp3' },
        { speaker: 'Ricardo', text: 'Ya está. ¿Ahora lo frío en la olla?', audio: '/audio/L3.4/phrases/d2-line6.mp3' },
        { speaker: 'Carmen', text: 'Exacto. Fríe el pollo, luego agrega la cebolla y el ajo.', audio: '/audio/L3.4/phrases/d2-line7.mp3' },
        { speaker: 'Ricardo', text: '¿Y el arroz cuándo lo agrego?', audio: '/audio/L3.4/phrases/d2-line8.mp3' },
        { speaker: 'Carmen', text: 'Después de tres minutos. Añade el arroz con agua y cocina a fuego lento veinte minutos.', audio: '/audio/L3.4/phrases/d2-line9.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Make guacamole in Mexico City and cook arroz con pollo in Lima.',

  culturalNotes: [
    {
      title: 'La Cocina Latina — The Heart of the Home',
      content: 'In Latin America, the kitchen (la cocina) is the heart of every home. Cooking is a communal activity — families gather to prepare meals together, share recipes passed down through generations, and spend hours in the kitchen during holidays. "Sobremesa" (after-meal conversation from L1.4) starts right there while cooking!',
    },
    {
      title: 'Recetas de la Abuela — Grandma\'s Recipes',
      content: 'Many Latin American recipes are "de la abuela" (from grandma) — passed down orally, never written. Amounts are "un poquito" (a little bit), "al ojo" (by eye), or "hasta que quede bien" (until it\'s right). Learning to cook in Spanish means embracing this intuitive style alongside exact measurements.',
    },
    {
      title: 'Guacamole — More Than a Dip',
      content: 'Guacamole originates from the Aztec word "ahuacamolli" (avocado sauce). In Mexico, every family has their own version. Some add mango, others pomegranate. The key debate: ¿con tomate o sin tomate? (with or without tomato?). It\'s served fresh — never from a jar! In Latin America, aguacate is an everyday food, not a luxury.',
    },
  ],
  culturalGradient: 'from-red-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La sartén" in English is:', options: ['The pot', 'The frying pan', 'The oven', 'The spoon'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Primero, ___ las verduras" (wash)', answer: 'lava' },
    { id: 3, type: 'mc', text: '"Hervir el agua" means:', options: ['Boil the water', 'Drink the water', 'Pour the water', 'Heat the water'], answer: 0 },
    { id: 4, type: 'tf', text: 'The H in "hervir" is silent in Spanish.', answer: true },
    { id: 5, type: 'mc', text: '"Picar la cebolla" means:', options: ['Peel the onion', 'Chop the onion', 'Cut the onion', 'Wash the onion'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Cocina a fuego ___" (low heat)', answer: 'lento' },
    { id: 7, type: 'mc', text: 'Which is a kitchen tool?', options: ['El cilantro', 'El arroz', 'El cuchillo', 'El tomate'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Sofía add last?', options: ['Tomato', 'Lime juice and salt', 'Onion', 'Chips'], answer: 1 },
    { id: 9, type: 'tf', text: '"Freír" means to boil.', answer: false },
    { id: 10, type: 'mc', text: '"Añade una pizca de sal" means:', options: ['Add a cup of salt', 'Remove the salt', 'Add a pinch of salt', 'Buy some salt'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "___ los ingredientes" (mix)', answer: 'Mezcla' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what do they cook?', options: ['Guacamole', 'Tacos', 'Arroz con pollo', 'Ceviche'], answer: 2 },
    { id: 13, type: 'mc', text: '"El aguacate" is:', options: ['The onion', 'The garlic', 'The avocado', 'The tomato'], answer: 2 },
    { id: 14, type: 'tf', text: '"Guacamole" comes from an Aztec word meaning "avocado sauce."', answer: true },
    { id: 15, type: 'mc', text: '"Revolver la mezcla" means:', options: ['Pour the mixture', 'Stir the mixture', 'Heat the mixture', 'Taste the mixture'], answer: 1 },
  ],

  audioBase: '/audio/L3.4/phrases',

  uniqueActivity: {
    id: 'RecipeBuilderL34',
    sectionId: 'recipe-builder',
    sectionColor: 'bg-orange-50/40',
    sectionBorder: 'border-orange-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    ingredients: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'kitchen-tools': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'cooking-actions': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'recipe-phrases': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'vocab-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'recipe-builder': { bg: 'bg-orange-50/40', border: 'border-orange-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
