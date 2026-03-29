import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Physical Appearance (10) ===
  { spanish: 'Alto', english: 'Tall', pronunciation: 'AHL-toh', category: 'appearance', audio: 'alto' },
  { spanish: 'Bajo', english: 'Short (height)', pronunciation: 'BAH-hoh', category: 'appearance', audio: 'bajo' },
  { spanish: 'Delgado', english: 'Thin / Slim', pronunciation: 'dehl-GAH-doh', category: 'appearance', audio: 'delgado' },
  { spanish: 'El pelo largo', english: 'Long hair', pronunciation: 'ehl PEH-loh LAHR-goh', category: 'appearance', audio: 'el-pelo-largo' },
  { spanish: 'El pelo corto', english: 'Short hair', pronunciation: 'ehl PEH-loh KOHR-toh', category: 'appearance', audio: 'el-pelo-corto' },
  { spanish: 'El pelo rubio', english: 'Blond hair', pronunciation: 'ehl PEH-loh RROO-bee-oh', category: 'appearance', audio: 'el-pelo-rubio' },
  { spanish: 'El pelo castaño', english: 'Brown hair', pronunciation: 'ehl PEH-loh kahs-TAH-nyoh', category: 'appearance', audio: 'el-pelo-castano' },
  { spanish: 'Los ojos verdes', english: 'Green eyes', pronunciation: 'lohs OH-hohs BEHR-dehs', category: 'appearance', audio: 'los-ojos-verdes' },
  { spanish: 'Los ojos marrones', english: 'Brown eyes', pronunciation: 'lohs OH-hohs mah-RROH-nehs', category: 'appearance', audio: 'los-ojos-marrones' },
  { spanish: 'La barba', english: 'The beard', pronunciation: 'lah BAHR-bah', category: 'appearance', audio: 'la-barba' },

  // === Personality (10) ===
  { spanish: 'Simpático', english: 'Nice / Friendly', pronunciation: 'seem-PAH-tee-koh', category: 'personality', audio: 'simpatico' },
  { spanish: 'Amable', english: 'Kind', pronunciation: 'ah-MAH-bleh', category: 'personality', audio: 'amable' },
  { spanish: 'Divertido', english: 'Funny / Fun', pronunciation: 'dee-behr-TEE-doh', category: 'personality', audio: 'divertido' },
  { spanish: 'Inteligente', english: 'Intelligent', pronunciation: 'een-teh-lee-HEHN-teh', category: 'personality', audio: 'inteligente' },
  { spanish: 'Trabajador', english: 'Hardworking', pronunciation: 'trah-bah-hah-DOHR', category: 'personality', audio: 'trabajador' },
  { spanish: 'Tranquilo', english: 'Calm / Quiet', pronunciation: 'trahn-KEE-loh', category: 'personality', audio: 'tranquilo' },
  { spanish: 'Serio', english: 'Serious', pronunciation: 'SEH-ree-oh', category: 'personality', audio: 'serio' },
  { spanish: 'Tímido', english: 'Shy', pronunciation: 'TEE-mee-doh', category: 'personality', audio: 'timido' },
  { spanish: 'Generoso', english: 'Generous', pronunciation: 'heh-neh-ROH-soh', category: 'personality', audio: 'generoso' },
  { spanish: 'Paciente', english: 'Patient', pronunciation: 'pah-see-EHN-teh', category: 'personality', audio: 'paciente' },

  // === Describing with SER & ESTAR (8) ===
  { spanish: 'Es alto y delgado', english: 'He is tall and thin', pronunciation: 'ehs AHL-toh ee dehl-GAH-doh', category: 'describing', audio: 'es-alto-y-delgado' },
  { spanish: 'Es simpática y divertida', english: 'She is nice and fun', pronunciation: 'ehs seem-PAH-tee-kah ee dee-behr-TEE-dah', category: 'describing', audio: 'es-simpatica-y-divertida' },
  { spanish: 'Tiene los ojos azules', english: 'He/She has blue eyes', pronunciation: 'tee-EH-neh lohs OH-hohs ah-SOO-lehs', category: 'describing', audio: 'tiene-los-ojos-azules' },
  { spanish: 'Tiene el pelo negro', english: 'He/She has black hair', pronunciation: 'tee-EH-neh ehl PEH-loh NEH-groh', category: 'describing', audio: 'tiene-el-pelo-negro' },
  { spanish: 'Lleva gafas', english: 'He/She wears glasses', pronunciation: 'YEH-bah GAH-fahs', category: 'describing', audio: 'lleva-gafas' },
  { spanish: 'Lleva una camisa azul', english: 'He/She is wearing a blue shirt', pronunciation: 'YEH-bah OO-nah kah-MEE-sah ah-SOOL', category: 'describing', audio: 'lleva-una-camisa-azul' },
  { spanish: 'Se parece a su mamá', english: 'He/She looks like his/her mom', pronunciation: 'seh pah-REH-seh ah soo mah-MAH', category: 'describing', audio: 'se-parece-a-su-mama' },
  { spanish: '¿Cómo es él?', english: 'What is he like?', pronunciation: 'KOH-moh ehs ehl', category: 'describing', audio: 'como-es-el' },

  // === Feelings & States (8) ===
  { spanish: 'Está contento', english: 'He is happy', pronunciation: 'ehs-TAH kohn-TEHN-toh', category: 'feelings', audio: 'esta-contento' },
  { spanish: 'Está cansado', english: 'He is tired', pronunciation: 'ehs-TAH kahn-SAH-doh', category: 'feelings', audio: 'esta-cansado' },
  { spanish: 'Está enojado', english: 'He is angry', pronunciation: 'ehs-TAH eh-noh-HAH-doh', category: 'feelings', audio: 'esta-enojado' },
  { spanish: 'Está preocupado', english: 'He is worried', pronunciation: 'ehs-TAH preh-oh-koo-PAH-doh', category: 'feelings', audio: 'esta-preocupado' },
  { spanish: 'Está triste', english: 'He is sad', pronunciation: 'ehs-TAH TREES-teh', category: 'feelings', audio: 'esta-triste' },
  { spanish: 'Está nervioso', english: 'He is nervous', pronunciation: 'ehs-TAH nehr-bee-OH-soh', category: 'feelings', audio: 'esta-nervioso' },
  { spanish: 'Está emocionado', english: 'He is excited', pronunciation: 'ehs-TAH eh-moh-see-oh-NAH-doh', category: 'feelings', audio: 'esta-emocionado' },
  { spanish: 'Está ocupado', english: 'He is busy', pronunciation: 'ehs-TAH oh-koo-PAH-doh', category: 'feelings', audio: 'esta-ocupado' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L27PhraseByAudio = phraseByAudio

// === WHO IS IT? (unique activity) ===

export interface WhoIsItChallenge {
  description: string
  english: string
  correctPerson: string
  options: string[]
}

export const WHO_IS_IT_CHALLENGES: WhoIsItChallenge[] = [
  {
    description: 'Es alto, tiene el pelo rubio y los ojos azules. Lleva gafas.',
    english: 'He is tall, has blond hair and blue eyes. He wears glasses.',
    correctPerson: 'Carlos',
    options: ['Carlos', 'Miguel', 'Ana', 'Lucía'],
  },
  {
    description: 'Es baja y tiene el pelo largo y castaño. Es muy simpática y divertida.',
    english: 'She is short and has long brown hair. She is very nice and fun.',
    correctPerson: 'María',
    options: ['María', 'Carlos', 'Pedro', 'Sofía'],
  },
  {
    description: 'Tiene barba y el pelo corto y negro. Está cansado porque trabaja mucho.',
    english: 'He has a beard and short black hair. He is tired because he works a lot.',
    correctPerson: 'Pedro',
    options: ['Pedro', 'Ana', 'Carlos', 'María'],
  },
  {
    description: 'Es alta y delgada. Tiene los ojos verdes. Lleva una camisa roja.',
    english: 'She is tall and slim. She has green eyes. She wears a red shirt.',
    correctPerson: 'Sofía',
    options: ['Sofía', 'María', 'Pedro', 'Miguel'],
  },
  {
    description: 'Es serio pero generoso. Tiene el pelo corto y rubio. Está preocupado hoy.',
    english: 'He is serious but generous. He has short blond hair. He is worried today.',
    correctPerson: 'Miguel',
    options: ['Miguel', 'Carlos', 'Sofía', 'Lucía'],
  },
  {
    description: 'Es tímida y paciente. Tiene los ojos marrones y el pelo largo y negro.',
    english: 'She is shy and patient. She has brown eyes and long black hair.',
    correctPerson: 'Lucía',
    options: ['Lucía', 'María', 'Sofía', 'Ana'],
  },
]

// === LESSON DATA ===

export const L27Data: LessonData = {
  id: 'L2.7',
  hero: {
    lessonId: 'L2.7',
    title: 'Describing People',
    subtitle: 'Appearance, personality & feelings',
    description: 'Learn to describe how people look, their personality, and how they feel. Master the difference between SER and ESTAR when describing people in Spanish.',
    image: '/images/L2.7/L2.7.jpg',
    gradient: 'from-violet-800/65 via-purple-700/55 to-indigo-700/65',
    accentColor: 'violet-200',
  },

  objectives: [
    { icon: '👤', title: 'Describe Appearance', desc: 'Talk about height, hair, eyes, and physical features in Spanish.' },
    { icon: '💭', title: 'Describe Personality', desc: 'Use adjectives to describe someone\u2019s character and personality.' },
    { icon: '😊', title: 'Express Feelings', desc: 'Say how someone feels right now using ESTAR + adjective.' },
    { icon: '🔄', title: 'Master SER vs. ESTAR', desc: 'Know when to use SER (permanent) and ESTAR (temporary) for descriptions.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.6', label: 'Family Members', detail: 'Family vocabulary from L1.6 — now you can describe your relatives!' },
    { fromLesson: 'L2.6', label: 'Colors & Clothing', detail: 'Colors from L2.6 describe hair and eyes. "Llevar" now means "to wear."' },
    { fromLesson: 'L1.1', label: 'Ñ and LL Sounds', detail: '"Castaño" (Ñ) and "lleva" (LL) use sounds from L1.1.' },
  ],

  sectionTransitions: [
    { afterSection: 'appearance', text: 'You can describe how someone looks — now let\u2019s talk personality!' },
    { afterSection: 'personality', text: 'Personality done! Now learn to combine appearance + personality.' },
    { afterSection: 'describing', text: 'Great descriptions! Now express how someone feels right now.' },
    { afterSection: 'dialogues', text: 'Excellent conversations! Let\u2019s learn about beauty standards across cultures.' },
    { afterSection: 'cultural', text: 'Now identify the mystery person!' },
    { afterSection: 'who-is-it', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Es alto/a', english: 'He/She is tall' },
    { spanish: 'Tiene el pelo...', english: 'He/She has ... hair' },
    { spanish: 'Es simpático/a', english: 'He/She is nice' },
    { spanish: 'Está contento/a', english: 'He/She is happy' },
    { spanish: 'Lleva...', english: 'He/She is wearing...' },
    { spanish: '¿Cómo es?', english: 'What is he/she like?' },
  ],

  pronunciationChallenges: [
    { spanish: 'Tiene los ojos verdes', pronunciation: 'tee-EH-neh lohs OH-hohs BEHR-dehs', english: 'He/She has green eyes', audio: 'tiene-los-ojos-verdes', tip: '"Ojos" — the J sounds like H: OH-hohs. "Verdes" changes to match the plural noun.' },
    { spanish: 'Es simpática y divertida', pronunciation: 'ehs seem-PAH-tee-kah ee dee-behr-TEE-dah', english: 'She is nice and fun', audio: 'es-simpatica-y-divertida', tip: 'Both adjectives end in -A because they describe a woman. For a man: simpático, divertido.' },
    { spanish: 'Está cansado hoy', pronunciation: 'ehs-TAH kahn-SAH-doh oy', english: 'He is tired today', audio: 'esta-cansado', tip: 'ESTAR for temporary states. "Está cansado" = tired right now. "Es cansado" would be wrong!' },
    { spanish: 'Tiene el pelo castaño', pronunciation: 'tee-EH-neh ehl PEH-loh kahs-TAH-nyoh', english: 'He/She has brown hair', audio: 'el-pelo-castano', tip: '"Castaño" has the Ñ sound from L1.1: kahs-TAH-nyoh. It specifically means chestnut brown.' },
    { spanish: '¿Cómo es tu hermano?', pronunciation: 'KOH-moh ehs too ehr-MAH-noh', english: 'What is your brother like?', audio: 'como-es-el', tip: '"¿Cómo es?" asks about permanent traits. "¿Cómo está?" asks about current state/feelings.' },
    { spanish: 'Lleva una camisa azul', pronunciation: 'YEH-bah OO-nah kah-MEE-sah ah-SOOL', english: 'He/She is wearing a blue shirt', audio: 'lleva-una-camisa-azul', tip: '"Llevar" from L2.6! Here it means "to wear." LL = Y: YEH-bah.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'appearance', label: 'Physical Appearance' },
    { id: 'personality', label: 'Personality' },
    { id: 'describing', label: 'Describing People' },
    { id: 'feelings', label: 'Feelings & States' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'people-sorting', label: 'People Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'who-is-it', label: 'Who Is It?' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'appearance',
      title: 'Physical Appearance',
      description: 'Describe how people look — height, hair, eyes, and features.',
      tabs: [
        { label: 'Body & Height', color: 'purple', phrases: PHRASES.filter(p => p.category === 'appearance').slice(0, 3) },
        { label: 'Hair & Eyes', color: 'blue', phrases: PHRASES.filter(p => p.category === 'appearance').slice(3, 9) },
        { label: 'Features', color: 'teal', phrases: PHRASES.filter(p => p.category === 'appearance').slice(9) },
      ],
    },
    {
      id: 'personality',
      title: 'Personality Traits',
      description: 'Describe someone\u2019s character — all use SER (permanent traits).',
      tabs: [
        { label: 'Positive Traits', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'personality').slice(0, 5) },
        { label: 'More Traits', color: 'amber', phrases: PHRASES.filter(p => p.category === 'personality').slice(5) },
      ],
    },
    {
      id: 'describing',
      title: 'Putting It Together',
      description: 'Combine appearance, personality, and clothing to describe someone.',
      tabs: [
        { label: 'SER + Appearance', color: 'blue', phrases: PHRASES.filter(p => p.category === 'describing').slice(0, 4), columns: 2 },
        { label: 'TENER + LLEVAR', color: 'rose', phrases: PHRASES.filter(p => p.category === 'describing').slice(4), columns: 2 },
      ],
    },
    {
      id: 'feelings',
      title: 'Feelings & Temporary States',
      description: 'How someone feels RIGHT NOW — all use ESTAR (temporary).',
      tabs: [
        { label: 'Positive', color: 'blue', phrases: PHRASES.filter(p => p.category === 'feelings').slice(0, 2) },
        { label: 'Negative', color: 'orange', phrases: PHRASES.filter(p => p.category === 'feelings').slice(2, 6) },
        { label: 'Other', color: 'teal', phrases: PHRASES.filter(p => p.category === 'feelings').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'SER vs. ESTAR — The Key Difference',
      content: 'This is one of the most important concepts in Spanish. SER = who someone IS (permanent): "Es alto" (He is tall — always). ESTAR = how someone IS RIGHT NOW (temporary): "Está cansado" (He is tired — right now). A trick: if it can change by tomorrow, use ESTAR. If it\u2019s a core trait, use SER.',
      example: 'SER: Es inteligente (permanent) | ESTAR: Está contento (temporary)',
    },
    {
      title: 'Adjective Agreement — Masculine & Feminine',
      content: 'Most adjectives change endings: -O for masculine, -A for feminine. "Es simpático" (he), "Es simpática" (she). But adjectives ending in -E or consonant stay the same: "Es inteligente" (he/she), "Es trabajador/trabajadora." Always match the adjective to the person!',
      example: 'Alto → Alta | Divertido → Divertida | Amable → Amable (no change)',
      reviewFrom: 'L2.6',
    },
    {
      title: '"Tener" for Descriptions — HAVE, Not BE',
      content: 'In Spanish, you "have" physical features, you don\u2019t "are" them. "Tiene los ojos azules" (Has blue eyes), not "Es ojos azules." Same as "Tengo veinte años" (I have 20 years = I am 20) from L1.3. Use TENER for: eyes, hair, age, beard/mustache.',
      example: 'Tiene el pelo largo | Tiene los ojos marrones | Tiene barba',
      reviewFrom: 'L1.3',
    },
    {
      title: '"Ojos" — The Silent H + J Sound',
      content: '"Ojos" (eyes) combines two L1.1 rules: the O is pure (OH), and the J makes an H sound: OH-hohs. You\u2019ll hear it in: "los ojos verdes," "los ojos marrones," "los ojos azules." The plural -ES is because "ojo" ends in a consonant... wait, it ends in O! So it\u2019s just -S: ojos.',
      example: 'Ojos = OH-hohs | Los ojos verdes = lohs OH-hohs BEHR-dehs',
      reviewFrom: 'L1.1',
    },
  ],

  flashcardGroups: [
    {
      key: 'appearance',
      label: 'Appearance',
      audioKeys: ['alto', 'bajo', 'delgado', 'el-pelo-largo', 'el-pelo-corto', 'el-pelo-rubio', 'el-pelo-castano', 'los-ojos-verdes', 'los-ojos-marrones', 'la-barba'],
    },
    {
      key: 'personality',
      label: 'Personality',
      audioKeys: ['simpatico', 'amable', 'divertido', 'inteligente', 'trabajador', 'tranquilo', 'serio', 'timido', 'generoso', 'paciente'],
    },
    {
      key: 'feelings',
      label: 'Feelings',
      audioKeys: ['esta-contento', 'esta-cansado', 'esta-enojado', 'esta-preocupado', 'esta-triste', 'esta-nervioso', 'esta-emocionado', 'esta-ocupado'],
    },
  ],

  matchPairs: [
    { left: 'Alto', right: 'Tall' },
    { left: 'Simpático', right: 'Nice / Friendly' },
    { left: 'Está cansado', right: 'He is tired' },
    { left: 'El pelo castaño', right: 'Brown hair' },
    { left: 'Divertido', right: 'Funny / Fun' },
    { left: 'Los ojos verdes', right: 'Green eyes' },
    { left: 'Tímido', right: 'Shy' },
    { left: 'Está contento', right: 'He is happy' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'SER vs. ESTAR',
      instruction: 'Does this use SER (permanent) or ESTAR (temporary)?',
      buckets: ['SER (permanent)', 'ESTAR (temporary)'],
      items: [
        { text: 'Es alto', bucket: 'SER (permanent)' },
        { text: 'Es simpática', bucket: 'SER (permanent)' },
        { text: 'Es inteligente', bucket: 'SER (permanent)' },
        { text: 'Es trabajador', bucket: 'SER (permanent)' },
        { text: 'Está cansado', bucket: 'ESTAR (temporary)' },
        { text: 'Está contento', bucket: 'ESTAR (temporary)' },
        { text: 'Está enojada', bucket: 'ESTAR (temporary)' },
        { text: 'Está nervioso', bucket: 'ESTAR (temporary)' },
      ],
    },
    {
      title: 'Appearance vs. Personality',
      instruction: 'Is this about how someone LOOKS or who they ARE inside?',
      buckets: ['Appearance 👁️', 'Personality 💭'],
      items: [
        { text: 'Alto', bucket: 'Appearance 👁️' },
        { text: 'Pelo rubio', bucket: 'Appearance 👁️' },
        { text: 'Ojos marrones', bucket: 'Appearance 👁️' },
        { text: 'Delgado', bucket: 'Appearance 👁️' },
        { text: 'Simpático', bucket: 'Personality 💭' },
        { text: 'Inteligente', bucket: 'Personality 💭' },
        { text: 'Tímido', bucket: 'Personality 💭' },
        { text: 'Generoso', bucket: 'Personality 💭' },
      ],
    },
  ],
  sortSectionId: 'people-sorting',
  sortTitle: 'People Sorting',

  dialogues: [
    {
      id: 'dialogue-friend',
      title: 'Describing a Friend — Santiago',
      location: 'Santiago',
      lines: [
        { speaker: 'Ana', text: '¿Conoces a mi amigo Diego?', audio: '/audio/L2.7/phrases/d1-line1.mp3' },
        { speaker: 'Lucía', text: 'No, ¿cómo es?', audio: '/audio/L2.7/phrases/d1-line2.mp3' },
        { speaker: 'Ana', text: 'Es alto y delgado. Tiene el pelo corto y negro.', audio: '/audio/L2.7/phrases/d1-line3.mp3' },
        { speaker: 'Lucía', text: '¿Y su personalidad?', audio: '/audio/L2.7/phrases/d1-line4.mp3' },
        { speaker: 'Ana', text: 'Es muy simpático y divertido. Siempre está contento.', audio: '/audio/L2.7/phrases/d1-line5.mp3', annotations: [{ phrase: 'Siempre', fromLesson: 'L1.8', note: 'Frequency word from L1.8' }] },
        { speaker: 'Lucía', text: '¿Tiene ojos claros?', audio: '/audio/L2.7/phrases/d1-line6.mp3' },
        { speaker: 'Ana', text: 'Sí, tiene los ojos verdes. Y hoy lleva una chaqueta azul.', audio: '/audio/L2.7/phrases/d1-line7.mp3', annotations: [{ phrase: 'chaqueta azul', fromLesson: 'L2.6', note: 'Clothing + color from L2.6' }] },
        { speaker: 'Lucía', text: '¡Ah, ya sé quién es! Está allá, cerca de la puerta.', audio: '/audio/L2.7/phrases/d1-line8.mp3', annotations: [{ phrase: 'cerca de', fromLesson: 'L1.5', note: 'Location from L1.5' }] },
      ],
    },
    {
      id: 'dialogue-family',
      title: 'Describing Family — Medellín',
      location: 'Medellín',
      lines: [
        { speaker: 'Carlos', text: '¿A quién te pareces más, a tu mamá o a tu papá?', audio: '/audio/L2.7/phrases/d2-line1.mp3', annotations: [{ phrase: 'mamá, papá', fromLesson: 'L1.6', note: 'Family from L1.6' }] },
        { speaker: 'María', text: 'Dicen que me parezco a mi mamá. Tenemos los mismos ojos marrones.', audio: '/audio/L2.7/phrases/d2-line2.mp3' },
        { speaker: 'Carlos', text: '¿Y tu hermano?', audio: '/audio/L2.7/phrases/d2-line3.mp3', annotations: [{ phrase: 'hermano', fromLesson: 'L1.6', note: 'Family from L1.6' }] },
        { speaker: 'María', text: 'Él se parece más a mi papá. Es alto, tiene barba y el pelo castaño.', audio: '/audio/L2.7/phrases/d2-line4.mp3' },
        { speaker: 'Carlos', text: '¿Cómo es de personalidad?', audio: '/audio/L2.7/phrases/d2-line5.mp3' },
        { speaker: 'María', text: 'Es serio pero muy generoso. Hoy está un poco cansado porque trabajó mucho.', audio: '/audio/L2.7/phrases/d2-line6.mp3' },
        { speaker: 'Carlos', text: 'Mi hermana es lo opuesto. Es muy divertida y siempre está emocionada.', audio: '/audio/L2.7/phrases/d2-line7.mp3' },
        { speaker: 'María', text: '¡Las familias son interesantes! Cada persona es diferente.', audio: '/audio/L2.7/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Describe a friend in Santiago and talk about family resemblance in Medellín.',

  culturalNotes: [
    {
      title: 'Descriptions & Nicknames in Latin America',
      content: 'In Latin America, physical descriptions are often used as affectionate nicknames. "Gordo/a" (chubby), "Flaco/a" (skinny), "Negro/a" (dark-skinned), and "Güero/a" (light-skinned, Mexico) are terms of endearment, not insults. Context and tone matter! A mother calling her child "gordo" is showing love. These nicknames reflect a culture where physical descriptions are part of daily warmth.',
    },
    {
      title: 'SER vs. ESTAR — A Cultural Mindset',
      content: 'The SER/ESTAR distinction reflects how Spanish speakers see the world. SER = essence (who you fundamentally are). ESTAR = state (how you are right now). This means "Es feliz" (She IS happy — it\u2019s her nature) is very different from "Está feliz" (She IS happy — right now). This distinction doesn\u2019t exist in English and is one of the most beautiful aspects of Spanish.',
    },
    {
      title: '"¿Cómo eres?" vs. "¿Cómo estás?"',
      content: 'These two questions sound similar but mean very different things. "¿Cómo eres?" (What are you like?) asks about permanent traits — appearance and personality. "¿Cómo estás?" (How are you?) asks about your current state — feelings and health. A fun exercise: answer both! "Soy alto y simpático" (I am tall and friendly) vs. "Estoy cansado pero contento" (I am tired but happy).',
    },
  ],
  culturalGradient: 'from-violet-50 to-purple-50',

  quiz: [
    { id: 1, type: 'mc', text: 'How do you say "She has green eyes"?', options: ['Es ojos verdes', 'Tiene los ojos verdes', 'Está ojos verdes', 'Hay ojos verdes'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Es alto y ___" (thin)', answer: 'delgado' },
    { id: 3, type: 'mc', text: '"Está cansado" uses ESTAR because:', options: ['It\u2019s permanent', 'It\u2019s temporary', 'It\u2019s physical', 'It\u2019s about age'], answer: 1 },
    { id: 4, type: 'tf', text: '"Simpática" is the feminine form of "simpático."', answer: true },
    { id: 5, type: 'mc', text: '"Tiene barba" means:', options: ['He is bearded', 'He has a beard', 'He wants a beard', 'He likes beards'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Tiene el pelo ___ y largo" (brown/chestnut)', answer: ['castaño', 'castano'] },
    { id: 7, type: 'mc', text: 'Which uses SER correctly?', options: ['Es cansado', 'Es contento', 'Es inteligente', 'Es enojado'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what color are Diego\u2019s eyes?', options: ['Brown', 'Blue', 'Green', 'Black'], answer: 2 },
    { id: 9, type: 'tf', text: '"¿Cómo es?" asks about permanent traits.', answer: true },
    { id: 10, type: 'mc', text: '"Está emocionada" means she is:', options: ['Emotional', 'Excited', 'Tired', 'Calm'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "___ una camisa azul" (He/She is wearing)', answer: 'Lleva' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, who does María look like?', options: ['Her dad', 'Her brother', 'Her mom', 'Her grandma'], answer: 2 },
    { id: 13, type: 'mc', text: '"Tranquilo" means:', options: ['Tired', 'Calm / Quiet', 'Sad', 'Happy'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, "gordo/a" is always an insult.', answer: false },
    { id: 15, type: 'mc', text: 'To describe someone\u2019s hair, you use:', options: ['SER + pelo', 'TENER + pelo', 'ESTAR + pelo', 'HABER + pelo'], answer: 1 },
  ],

  audioBase: '/audio/L2.7/phrases',

  uniqueActivity: {
    id: 'WhoIsItL27',
    sectionId: 'who-is-it',
    sectionColor: 'bg-violet-50/40',
    sectionBorder: 'border-violet-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    appearance: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    personality: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    describing: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    feelings: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'people-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'who-is-it': { bg: 'bg-violet-50/40', border: 'border-violet-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
