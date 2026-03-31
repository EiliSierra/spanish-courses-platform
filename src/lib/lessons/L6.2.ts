import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Literary Devices (12) ===
  { spanish: 'La metáfora transforma la realidad: "La vida es un río que desemboca en el mar"', english: 'Metaphor transforms reality: "Life is a river that flows into the sea"', pronunciation: 'lah meh-TAH-foh-rah trahns-FOHR-mah lah reh-ah-lee-DAHD', category: 'literary-devices', audio: 'metafora-transforma-la-realidad' },
  { spanish: 'El símil compara con "como": "Sus ojos brillaban como estrellas"', english: 'Simile compares with "like": "Her eyes shone like stars"', pronunciation: 'ehl SEE-meel kohm-PAH-rah kohn KOH-moh', category: 'literary-devices', audio: 'simil-compara-con-como' },
  { spanish: 'La hipérbole exagera para enfatizar: "Te he dicho un millón de veces"', english: 'Hyperbole exaggerates to emphasize: "I have told you a million times"', pronunciation: 'lah ee-PEHR-boh-leh ehk-sah-HEH-rah PAH-rah ehn-fah-tee-SAHR', category: 'literary-devices', audio: 'hiperbole-exagera-para-enfatizar' },
  { spanish: 'La personificación da vida a lo inanimado: "El viento susurraba secretos"', english: 'Personification gives life to the inanimate: "The wind whispered secrets"', pronunciation: 'lah pehr-soh-nee-fee-kah-see-OHN dah BEE-dah ah loh ee-nah-nee-MAH-doh', category: 'literary-devices', audio: 'personificacion-da-vida' },
  { spanish: 'La aliteración repite sonidos: "Con el ala aleve del leve abanico" — Rubén Darío', english: 'Alliteration repeats sounds: "With the light wing of the light fan" — Rubén Darío', pronunciation: 'lah ah-lee-teh-rah-see-OHN reh-PEE-teh soh-NEE-dohs', category: 'literary-devices', audio: 'aliteracion-repite-sonidos' },
  { spanish: 'La anáfora repite palabras al inicio: "Aquí fue Troya. Aquí mi desdicha" — Cervantes', english: 'Anaphora repeats words at the start: "Here was Troy. Here my misfortune" — Cervantes', pronunciation: 'lah ah-NAH-foh-rah reh-PEE-teh pah-LAH-brahs ahl ee-NEE-see-oh', category: 'literary-devices', audio: 'anafora-repite-palabras' },
  { spanish: 'El oxímoron une contrarios: "Es hielo abrasador, es fuego helado" — Quevedo', english: 'Oxymoron joins opposites: "It is scorching ice, it is frozen fire" — Quevedo', pronunciation: 'ehl ohk-SEE-moh-rohn OO-neh kohn-TRAH-ree-ohs', category: 'literary-devices', audio: 'oximoron-une-contrarios' },
  { spanish: 'La sinestesia mezcla sentidos: "Una melodía azul inundaba la sala"', english: 'Synesthesia mixes senses: "A blue melody flooded the room"', pronunciation: 'lah see-nehs-TEH-see-ah MEHS-klah sehn-TEE-dohs', category: 'literary-devices', audio: 'sinestesia-mezcla-sentidos' },
  { spanish: 'La metonimia sustituye por cercanía: "Leyó a Cervantes" (sus obras)', english: 'Metonymy substitutes by proximity: "He read Cervantes" (his works)', pronunciation: 'lah meh-toh-NEE-mee-ah soos-tee-TOO-yeh pohr sehr-kah-NEE-ah', category: 'literary-devices', audio: 'metonimia-sustituye-por-cercania' },
  { spanish: 'La ironía dramática: el lector sabe lo que el personaje ignora', english: 'Dramatic irony: the reader knows what the character does not', pronunciation: 'lah ee-roh-NEE-ah drah-MAH-tee-kah ehl lehk-TOHR SAH-beh', category: 'literary-devices', audio: 'ironia-dramatica-lector-sabe' },
  { spanish: 'La antítesis opone ideas: "Ayer naciste y morirás mañana" — Góngora', english: 'Antithesis contrasts ideas: "Yesterday you were born and tomorrow you will die" — Góngora', pronunciation: 'lah ahn-TEE-teh-sees oh-POH-neh ee-DEH-ahs', category: 'literary-devices', audio: 'antitesis-opone-ideas' },
  { spanish: 'El encabalgamiento rompe el verso: la oración continúa en la línea siguiente', english: 'Enjambment breaks the verse: the sentence continues on the next line', pronunciation: 'ehl ehn-kah-bahl-hah-mee-EHN-toh ROHM-peh ehl BEHR-soh', category: 'literary-devices', audio: 'encabalgamiento-rompe-verso' },

  // === Poetic Forms (12) ===
  { spanish: 'El soneto tiene catorce versos endecasílabos: dos cuartetos y dos tercetos', english: 'The sonnet has fourteen hendecasyllabic lines: two quatrains and two tercets', pronunciation: 'ehl soh-NEH-toh tee-EH-neh kah-TOHR-seh BEHR-sohs ehn-deh-kah-SEE-lah-bohs', category: 'poetic-forms', audio: 'soneto-catorce-versos' },
  { spanish: 'El haiku en español: tres versos de cinco, siete y cinco sílabas', english: 'Haiku in Spanish: three lines of five, seven, and five syllables', pronunciation: 'ehl ah-EE-koo ehn ehs-pah-NYOHL trehs BEHR-sohs', category: 'poetic-forms', audio: 'haiku-en-espanol' },
  { spanish: 'El verso libre no sigue un patrón métrico fijo ni rima obligatoria', english: 'Free verse follows no fixed metrical pattern nor required rhyme', pronunciation: 'ehl BEHR-soh LEE-breh noh SEE-geh oon pah-TROHN MEH-tree-koh FEE-hoh', category: 'poetic-forms', audio: 'verso-libre-no-sigue' },
  { spanish: 'El romance es una serie de octosílabos con rima asonante en los pares', english: 'The romance is a series of octosyllabic lines with assonant rhyme on even lines', pronunciation: 'ehl roh-MAHN-seh ehs OO-nah SEH-ree-eh deh ohk-toh-SEE-lah-bohs', category: 'poetic-forms', audio: 'romance-serie-octasilabos' },
  { spanish: 'La décima espinela: diez octosílabos con rima ABBAACCDDC', english: 'The décima espinela: ten octosyllabic lines with ABBAACCDDC rhyme', pronunciation: 'lah DEH-see-mah ehs-pee-NEH-lah dee-EHS ohk-toh-SEE-lah-bohs', category: 'poetic-forms', audio: 'decima-espinela-diez' },
  { spanish: 'La copla es un poema breve de carácter popular, cantado con música', english: 'The copla is a short popular poem, sung with music', pronunciation: 'lah KOH-plah ehs oon poh-EH-mah BREH-beh deh kah-RAHK-tehr poh-poo-LAHR', category: 'poetic-forms', audio: 'copla-poema-breve' },
  { spanish: 'El alejandrino tiene catorce sílabas divididas en dos hemistiquios', english: 'The alexandrine has fourteen syllables divided into two hemistichs', pronunciation: 'ehl ah-leh-hahn-DREE-noh tee-EH-neh kah-TOHR-seh SEE-lah-bahs', category: 'poetic-forms', audio: 'alejandrino-catorce-silabas' },
  { spanish: 'La rima consonante coincide en vocales y consonantes desde la última vocal tónica', english: 'Consonant rhyme matches vowels and consonants from the last stressed vowel', pronunciation: 'lah RREE-mah kohn-soh-NAHN-teh koh-een-SEE-deh ehn boh-KAH-lehs', category: 'poetic-forms', audio: 'rima-consonante-coincide' },
  { spanish: 'La rima asonante solo coincide en las vocales: "alma" con "casa"', english: 'Assonant rhyme only matches vowels: "alma" with "casa"', pronunciation: 'lah RREE-mah ah-soh-NAHN-teh SOH-loh koh-een-SEE-deh ehn lahs boh-KAH-lehs', category: 'poetic-forms', audio: 'rima-asonante-solo-vocales' },
  { spanish: 'El endecasílabo: once sílabas, el verso clásico del Siglo de Oro', english: 'The hendecasyllable: eleven syllables, the classic verse of the Golden Age', pronunciation: 'ehl ehn-deh-kah-SEE-lah-boh OHN-seh SEE-lah-bahs', category: 'poetic-forms', audio: 'endecasilabo-once-silabas' },
  { spanish: 'El octosílabo: ocho sílabas, el verso más natural del español', english: 'The octosyllable: eight syllables, the most natural verse in Spanish', pronunciation: 'ehl ohk-toh-SEE-lah-boh OH-choh SEE-lah-bahs', category: 'poetic-forms', audio: 'octasilabo-ocho-silabas' },
  { spanish: 'La estrofa es un conjunto de versos que forman una unidad rítmica', english: 'The stanza is a group of verses that form a rhythmic unit', pronunciation: 'lah ehs-TROH-fah ehs oon kohn-HOON-toh deh BEHR-sohs', category: 'poetic-forms', audio: 'estrofa-conjunto-versos' },

  // === Literary Movements (12) ===
  { spanish: 'El realismo mágico mezcla lo cotidiano con lo fantástico: García Márquez, Cien años de soledad', english: 'Magical realism blends the everyday with the fantastic: García Márquez, One Hundred Years of Solitude', pronunciation: 'ehl reh-ah-LEES-moh MAH-hee-koh MEHS-klah loh koh-tee-dee-AH-noh', category: 'literary-movements', audio: 'realismo-magico-mezcla' },
  { spanish: 'El modernismo buscó la belleza pura: Rubén Darío renovó la poesía hispánica', english: 'Modernismo sought pure beauty: Rubén Darío renewed Hispanic poetry', pronunciation: 'ehl moh-dehr-NEES-moh boos-KOH lah beh-YEH-sah POO-rah', category: 'literary-movements', audio: 'modernismo-busco-belleza' },
  { spanish: 'El barroco español: complejidad lingüística, Quevedo y Góngora lideraron el movimiento', english: 'Spanish Baroque: linguistic complexity, Quevedo and Góngora led the movement', pronunciation: 'ehl bah-RROH-koh ehs-pah-NYOHL kohm-pleh-hee-DAHD leen-GWEES-tee-kah', category: 'literary-movements', audio: 'barroco-espanol-complejidad' },
  { spanish: 'El romanticismo exaltó la libertad y la emoción: Bécquer escribió las Rimas', english: 'Romanticism exalted freedom and emotion: Bécquer wrote the Rimas', pronunciation: 'ehl roh-mahn-tee-SEES-moh ehk-sahl-TOH lah lee-behr-TAHD', category: 'literary-movements', audio: 'romanticismo-exalto-libertad' },
  { spanish: 'La Generación del 27: Lorca, Alberti, Cernuda — poesía vanguardista española', english: 'The Generation of \'27: Lorca, Alberti, Cernuda — Spanish avant-garde poetry', pronunciation: 'lah heh-neh-rah-see-OHN dehl behn-tee-see-EH-teh', category: 'literary-movements', audio: 'generacion-del-27-lorca' },
  { spanish: 'El boom latinoamericano: Cortázar, Vargas Llosa, Fuentes revolucionaron la narrativa', english: 'The Latin American Boom: Cortázar, Vargas Llosa, Fuentes revolutionized narrative', pronunciation: 'ehl boom lah-tee-noh-ah-meh-ree-KAH-noh kohr-TAH-sahr', category: 'literary-movements', audio: 'boom-latinoamericano-cortazar' },
  { spanish: 'El naturalismo mostró la realidad cruda: influencia de Zola en Blasco Ibáñez', english: 'Naturalism showed raw reality: Zola\'s influence on Blasco Ibáñez', pronunciation: 'ehl nah-too-rah-LEES-moh mohs-TROH lah reh-ah-lee-DAHD KROO-dah', category: 'literary-movements', audio: 'naturalismo-mostro-realidad' },
  { spanish: 'El costumbrismo retrató las costumbres locales con humor e ironía', english: 'Costumbrismo portrayed local customs with humor and irony', pronunciation: 'ehl kohs-toom-BREES-moh reh-trah-TOH lahs kohs-TOOM-brehs loh-KAH-lehs', category: 'literary-movements', audio: 'costumbrismo-retrato-costumbres' },
  { spanish: 'El surrealismo en la poesía: imágenes oníricas sin lógica racional', english: 'Surrealism in poetry: dreamlike images without rational logic', pronunciation: 'ehl soo-rreh-ah-LEES-moh ehn lah poh-eh-SEE-ah ee-MAH-heh-nehs oh-NEE-ree-kahs', category: 'literary-movements', audio: 'surrealismo-imagenes-oniricas' },
  { spanish: 'La picaresca: el antihéroe narra su vida con astucia — El Lazarillo de Tormes', english: 'The picaresque: the antihero narrates his life with cunning — Lazarillo de Tormes', pronunciation: 'lah pee-kah-REHS-kah ehl ahn-tee-EH-roh-eh NAH-rrah soo BEE-dah', category: 'literary-movements', audio: 'picaresca-antiheroe-narra' },
  { spanish: 'La poesía social de posguerra: Blas de Otero denunció la injusticia con versos directos', english: 'Post-war social poetry: Blas de Otero denounced injustice with direct verses', pronunciation: 'lah poh-eh-SEE-ah soh-see-AHL deh pohs-GEH-rrah blahs deh oh-TEH-roh', category: 'literary-movements', audio: 'poesia-social-posguerra' },
  { spanish: 'El criollismo celebró la identidad americana: paisajes, lengua y personajes locales', english: 'Criollismo celebrated American identity: landscapes, language, and local characters', pronunciation: 'ehl kree-oh-YEES-moh seh-leh-BROH lah ee-dehn-tee-DAHD ah-meh-ree-KAH-nah', category: 'literary-movements', audio: 'criollismo-celebro-identidad' },

  // === Criticism Vocabulary (12) ===
  { spanish: 'El subtexto revela lo que el personaje no dice pero siente profundamente', english: 'The subtext reveals what the character does not say but deeply feels', pronunciation: 'ehl soob-TEHKS-toh reh-BEH-lah loh keh ehl pehr-soh-NAH-heh noh DEE-seh', category: 'criticism-vocabulary', audio: 'subtexto-revela-personaje' },
  { spanish: 'La voz narrativa en primera persona crea intimidad con el lector', english: 'The first-person narrative voice creates intimacy with the reader', pronunciation: 'lah bohs nah-rrah-TEE-bah ehn pree-MEH-rah pehr-SOH-nah', category: 'criticism-vocabulary', audio: 'voz-narrativa-primera-persona' },
  { spanish: 'El arco del personaje muestra su transformación a lo largo de la obra', english: 'The character arc shows their transformation throughout the work', pronunciation: 'ehl AHR-koh dehl pehr-soh-NAH-heh MWEHS-trah soo trahns-fohr-mah-see-OHN', category: 'criticism-vocabulary', audio: 'arco-del-personaje-muestra' },
  { spanish: 'La ambigüedad enriquece el texto: permite múltiples interpretaciones válidas', english: 'Ambiguity enriches the text: it allows multiple valid interpretations', pronunciation: 'lah ahm-bee-gweh-DAHD ehn-ree-KEH-seh ehl TEHKS-toh', category: 'criticism-vocabulary', audio: 'ambiguedad-enriquece-texto' },
  { spanish: 'El leitmotiv es un tema o imagen recurrente que unifica la obra', english: 'The leitmotif is a recurring theme or image that unifies the work', pronunciation: 'ehl lah-eet-moh-TEEF ehs oon TEH-mah oh ee-MAH-hehn reh-koo-RREHN-teh', category: 'criticism-vocabulary', audio: 'leitmotiv-tema-recurrente' },
  { spanish: 'La intertextualidad conecta obras entre sí: Borges citaba a Borges citando a otros', english: 'Intertextuality connects works: Borges quoted Borges quoting others', pronunciation: 'lah een-tehr-tehks-too-ah-lee-DAHD koh-NEHK-tah OH-brahs ehn-treh SEE', category: 'criticism-vocabulary', audio: 'intertextualidad-conecta-obras' },
  { spanish: 'El desdoblamiento: cuando un personaje se divide en dos identidades opuestas', english: 'The doubling: when a character splits into two opposing identities', pronunciation: 'ehl dehs-doh-blah-mee-EHN-toh KWAHN-doh oon pehr-soh-NAH-heh seh dee-BEE-deh', category: 'criticism-vocabulary', audio: 'desdoblamiento-personaje-divide' },
  { spanish: 'La catarsis es la purificación emocional que experimenta el lector o espectador', english: 'Catharsis is the emotional purification experienced by the reader or spectator', pronunciation: 'lah kah-TAHR-sees ehs lah poo-ree-fee-kah-see-OHN eh-moh-see-oh-NAHL', category: 'criticism-vocabulary', audio: 'catarsis-purificacion-emocional' },
  { spanish: 'El narrador omnisciente lo sabe todo: pensamientos, pasado y futuro de cada personaje', english: 'The omniscient narrator knows everything: thoughts, past, and future of each character', pronunciation: 'ehl nah-rrah-DOHR ohm-nee-see-EHN-teh loh SAH-beh TOH-doh', category: 'criticism-vocabulary', audio: 'narrador-omnisciente-sabe-todo' },
  { spanish: 'El clímax es el punto de mayor tensión dramática en la trama', english: 'The climax is the point of greatest dramatic tension in the plot', pronunciation: 'ehl KLEE-mahks ehs ehl POON-toh deh mah-YOHR tehn-see-OHN drah-MAH-tee-kah', category: 'criticism-vocabulary', audio: 'climax-punto-mayor-tension' },
  { spanish: 'El desenlace resuelve los conflictos y cierra el arco narrativo', english: 'The denouement resolves the conflicts and closes the narrative arc', pronunciation: 'ehl deh-sehn-LAH-seh reh-SWEL-beh lohs kohn-FLEEK-tohs', category: 'criticism-vocabulary', audio: 'desenlace-resuelve-conflictos' },
  { spanish: 'La prosopopeya otorga cualidades humanas a conceptos abstractos en el discurso', english: 'Prosopopeia grants human qualities to abstract concepts in discourse', pronunciation: 'lah proh-soh-poh-PEH-yah oh-TOHR-gah kwah-lee-DAH-dehs oo-MAH-nahs', category: 'criticism-vocabulary', audio: 'prosopopeya-otorga-cualidades' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L62PhraseByAudio = phraseByAudio

// === POETRY FORGE (unique activity) ===

export interface PoetryForgeChallenge {
  excerpt: string
  english: string
  device: string
  correctDevice: string
  options: string[]
}

export const POETRY_FORGE_CHALLENGES: PoetryForgeChallenge[] = [
  {
    excerpt: '"La vida es sueño, y los sueños, sueños son." — Calderón de la Barca',
    english: '"Life is a dream, and dreams are dreams."',
    device: 'The author equates life directly with a dream without using "like" or "as".',
    correctDevice: 'Metáfora',
    options: ['Metáfora', 'Símil', 'Hipérbole', 'Metonimia'],
  },
  {
    excerpt: '"Sus cabellos eran como hilos de oro bajo el sol de agosto."',
    english: '"Her hair was like threads of gold under the August sun."',
    device: 'The comparison uses "como" (like) to draw a parallel.',
    correctDevice: 'Símil',
    options: ['Personificación', 'Símil', 'Sinestesia', 'Antítesis'],
  },
  {
    excerpt: '"Érase un hombre a una nariz pegado." — Quevedo',
    english: '"There was a man attached to a nose."',
    device: 'The nose is exaggerated to absurd proportions to mock the subject.',
    correctDevice: 'Hipérbole',
    options: ['Oxímoron', 'Anáfora', 'Hipérbole', 'Metonimia'],
  },
  {
    excerpt: '"Las estrellas nos miraban mientras nos doblábamos de risa." — Neruda',
    english: '"The stars watched us while we doubled over with laughter."',
    device: 'Stars are given the human ability to watch.',
    correctDevice: 'Personificación',
    options: ['Personificación', 'Aliteración', 'Ironía dramática', 'Encabalgamiento'],
  },
  {
    excerpt: '"Es hielo abrasador, es fuego helado." — Quevedo',
    english: '"It is scorching ice, it is frozen fire."',
    device: 'Two contradictory terms are placed side by side in each phrase.',
    correctDevice: 'Oxímoron',
    options: ['Sinestesia', 'Oxímoron', 'Hipérbole', 'Anáfora'],
  },
  {
    excerpt: '"Verde que te quiero verde. Verde viento. Verde ramas." — García Lorca',
    english: '"Green how I want you green. Green wind. Green branches."',
    device: 'The word "verde" is repeated at the beginning of successive clauses.',
    correctDevice: 'Anáfora',
    options: ['Metonimia', 'Aliteración', 'Anáfora', 'Antítesis'],
  },
  {
    excerpt: '"En el silencio solo se escuchaba un susurro de abejas que sonaba." — Garcilaso',
    english: '"In the silence one could only hear a murmur of bees that sounded."',
    device: 'The repeated "s" sounds imitate the buzzing of bees.',
    correctDevice: 'Aliteración',
    options: ['Aliteración', 'Sinestesia', 'Símil', 'Encabalgamiento'],
  },
]

// === LESSON DATA ===

export const L62Data: LessonData = {
  id: 'L6.2',
  hero: {
    lessonId: 'L6.2',
    title: 'Literary & Poetic Language',
    subtitle: 'Understanding the art of language in literature and poetry',
    description: 'Explore the rich world of literary devices, poetic forms, and criticism vocabulary at a C1-C2 level. Recognize metáforas, símiles, and hipérboles in classic Spanish literature, understand soneto and romance structures, and engage in sophisticated literary analysis using the vocabulary of professional critics.',
    image: '/images/L6.2/L6.2.jpg',
    gradient: 'from-rose-800/65 via-pink-700/55 to-fuchsia-700/65',
    accentColor: 'pink-200',
  },

  objectives: [
    { icon: '🖋️', title: 'Literary Devices', desc: 'Identify and explain metáfora, símil, hipérbole, personificación, aliteración, anáfora, oxímoron, sinestesia, and more.' },
    { icon: '📜', title: 'Poetic Forms', desc: 'Understand soneto, romance, décima, copla, verso libre, and meter: endecasílabo, octosílabo, rima consonante/asonante.' },
    { icon: '📚', title: 'Literary Movements', desc: 'Navigate realismo mágico, modernismo, barroco, romanticismo, Generación del 27, and the boom latinoamericano.' },
    { icon: '🔍', title: 'Criticism Vocabulary', desc: 'Use professional terms: subtexto, voz narrativa, arco del personaje, leitmotiv, intertextualidad, catarsis.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.7', label: 'Academic & Literary Analysis', detail: 'L5.7 introduced academic register and analytical writing. Now apply those skills to literary criticism and close reading of poetry.' },
    { fromLesson: 'L4.7', label: 'Arts & Entertainment', detail: 'L4.7 covered arts vocabulary and cultural discussion. Now deepen into the technical language of literary and poetic analysis.' },
    { fromLesson: 'L5.6', label: 'Figurative Language', detail: 'L5.6 introduced figurative expressions and idioms. Now master the formal classification system for literary devices and rhetoric.' },
  ],

  sectionTransitions: [
    { afterSection: 'literary-devices', text: 'You can identify the building blocks of literature! Now let\'s explore the structures poets use.' },
    { afterSection: 'poetic-forms', text: 'Forms mastered! Let\'s journey through the great literary movements of the Spanish-speaking world.' },
    { afterSection: 'literary-movements', text: 'From the Baroque to the Boom — now let\'s sharpen your critical vocabulary.' },
    { afterSection: 'criticism-vocabulary', text: 'Your critical toolkit is complete! Let\'s hear these concepts in authentic conversations.' },
    { afterSection: 'dialogues', text: 'Brilliant literary discussions! Let\'s explore the cultural legacy of Spanish poetry.' },
    { afterSection: 'cultural', text: 'Now test your skills — identify literary devices in the Poetry Forge!' },
    { afterSection: 'poetry-forge', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Este poema emplea una metáfora...', english: 'This poem employs a metaphor...' },
    { spanish: 'Nótese la rima asonante en...', english: 'Notice the assonant rhyme in...' },
    { spanish: 'El autor recurre a la ironía para...', english: 'The author uses irony to...' },
    { spanish: 'La voz narrativa sugiere que...', english: 'The narrative voice suggests that...' },
    { spanish: 'Se percibe una intertextualidad con...', english: 'One perceives an intertextuality with...' },
    { spanish: 'El leitmotiv de la obra es...', english: 'The leitmotif of the work is...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Es hielo abrasador, es fuego helado', pronunciation: 'ehs ee-EH-loh ah-brah-sah-DOHR ehs FWEH-goh eh-LAH-doh', english: 'It is scorching ice, it is frozen fire', audio: 'oximoron-une-contrarios', tip: 'Quevedo\'s oxímoron: notice how the stress falls naturally on the contrasting words — hiElo/abrasaDOR, fuEgo/heLAdo.' },
    { spanish: 'Verde que te quiero verde, verde viento, verde ramas', pronunciation: 'BEHR-deh keh teh kee-EH-roh BEHR-deh BEHR-deh bee-EHN-toh BEHR-deh RRAH-mahs', english: 'Green how I want you green, green wind, green branches', audio: 'anafora-repite-palabras', tip: 'Lorca\'s anáfora: "verde" repeated creates a hypnotic rhythm. In Spanish poetry, repetition drives emotion, not redundancy.' },
    { spanish: 'Con el ala aleve del leve abanico', pronunciation: 'kohn ehl AH-lah ah-LEH-beh dehl LEH-beh ah-bah-NEE-koh', english: 'With the light wing of the light fan', audio: 'aliteracion-repite-sonidos', tip: 'Darío\'s aliteración: the "l" and "a" sounds create a breeze-like effect. Read slowly and feel the airiness of the sounds.' },
    { spanish: 'La intertextualidad conecta obras entre sí', pronunciation: 'lah een-tehr-tehks-too-ah-lee-DAHD koh-NEHK-tah OH-brahs ehn-treh SEE', english: 'Intertextuality connects works to each other', audio: 'intertextualidad-conecta-obras', tip: 'A long word: in-ter-tex-tua-li-dad. Break it into syllables. The stress is on the final syllable: intertextualidÁD.' },
    { spanish: 'El narrador omnisciente lo sabe todo', pronunciation: 'ehl nah-rrah-DOHR ohm-nee-see-EHN-teh loh SAH-beh TOH-doh', english: 'The omniscient narrator knows everything', audio: 'narrador-omnisciente-sabe-todo', tip: '"Omnisciente" — ohm-nee-see-EHN-teh. The accent is on the penultimate syllable. This Latin-origin word is common in literary criticism.' },
    { spanish: 'El realismo mágico mezcla lo cotidiano con lo fantástico', pronunciation: 'ehl reh-ah-LEES-moh MAH-hee-koh MEHS-klah loh koh-tee-dee-AH-noh kohn loh fahn-TAHS-tee-koh', english: 'Magical realism blends the everyday with the fantastic', audio: 'realismo-magico-mezcla', tip: '"Mágico" has the stress on the first syllable: MÁ-gi-co. "Fantástico" on the second: fan-TÁS-ti-co. Both are esdrújulas (proparoxytones).' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'literary-devices', label: 'Literary Devices' },
    { id: 'poetic-forms', label: 'Poetic Forms' },
    { id: 'literary-movements', label: 'Literary Movements' },
    { id: 'criticism-vocabulary', label: 'Criticism Vocabulary' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Concept Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'poetry-forge', label: 'Poetry Forge' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'literary-devices',
      title: 'Literary Devices — Recursos Literarios',
      description: 'The fundamental tools writers use to create meaning, beauty, and emotion. From metaphor to enjambment, these devices shape how we experience language.',
      tabs: [
        { label: 'Figures of Speech', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'literary-devices').slice(0, 6) },
        { label: 'Sound & Structure', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'literary-devices').slice(6) },
      ],
    },
    {
      id: 'poetic-forms',
      title: 'Poetic Forms — Formas Poéticas',
      description: 'The architectural structures of poetry: from the rigid beauty of the soneto to the freedom of verso libre, and the musicality of rima and meter.',
      tabs: [
        { label: 'Fixed Forms', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'poetic-forms').slice(0, 6) },
        { label: 'Meter & Rhyme', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'poetic-forms').slice(6) },
      ],
    },
    {
      id: 'literary-movements',
      title: 'Literary Movements — Movimientos Literarios',
      description: 'The great currents of Spanish-language literature: from the Baroque complexity of the Siglo de Oro to the magical realism of the Boom.',
      tabs: [
        { label: 'Spain & Golden Age', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'literary-movements').slice(0, 6) },
        { label: 'Latin America & Modern', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'literary-movements').slice(6) },
      ],
    },
    {
      id: 'criticism-vocabulary',
      title: 'Literary Criticism — Vocabulario de Crítica Literaria',
      description: 'The professional vocabulary of literary analysis: discuss narrative voice, character arcs, subtext, and intertextuality like a scholar.',
      tabs: [
        { label: 'Narrative Analysis', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'criticism-vocabulary').slice(0, 6) },
        { label: 'Structure & Effect', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'criticism-vocabulary').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Esdrújulas: The Rhythm of Literary Spanish',
      content: 'Many literary terms are esdrújulas (stressed on the antepenultimate syllable): metÁfora, hipÉrbole, sinÉstesia, oxÍmoron, anÁfora. These always carry a written accent. Recognizing this pattern helps you pronounce new literary vocabulary correctly even before looking it up.',
      example: 'metÁfora, hipÉrbole, sinÉstesia, oxÍmoron, anÁfora — all stressed on the third-to-last syllable',
    },
    {
      title: 'Reading Poetry Aloud: Sinalefa',
      content: 'In Spanish verse, when a word ending in a vowel meets a word starting with a vowel, they merge into one syllable — this is sinalefa. It\'s essential for counting syllables correctly in poetry. "De este" becomes one syllable "dees-te." Without understanding sinalefa, you\'ll miscount every line.',
      example: '"De-es-te (2 syllables, not 3) | "mi al-ma" = "mial-ma" (2 syllables, not 3)',
      reviewFrom: 'L5.7',
    },
    {
      title: 'The Music of Rima Asonante',
      content: 'Assonant rhyme — matching only vowels — is the backbone of the romance and much popular Spanish poetry. Train your ear: "alma" (a-a) rhymes with "casa" (a-a) and "plata" (a-a). It creates a subtler, more musical effect than full consonant rhyme.',
      example: 'alma / casa / plata (all share a-a pattern) | verde / nieve / fuerte (e-e pattern)',
    },
    {
      title: 'Naming the Verse by Syllable Count',
      content: 'Spanish poetry names verses by their syllable count: octosílabo (8), endecasílabo (11), alejandrino (14). The terms themselves follow consistent patterns: octo- (8), endeca- (11), alej- (from Alexander). Knowing the Greek/Latin prefixes lets you decode any verse name.',
      example: 'Tetrasílabo (4) | Hexasílabo (6) | Octosílabo (8) | Decasílabo (10) | Endecasílabo (11)',
    },
  ],

  flashcardGroups: [
    {
      key: 'literary-devices',
      label: 'Literary Devices',
      audioKeys: ['metafora-transforma-la-realidad', 'simil-compara-con-como', 'hiperbole-exagera-para-enfatizar', 'personificacion-da-vida', 'aliteracion-repite-sonidos', 'anafora-repite-palabras', 'oximoron-une-contrarios', 'sinestesia-mezcla-sentidos', 'metonimia-sustituye-por-cercania', 'ironia-dramatica-lector-sabe', 'antitesis-opone-ideas', 'encabalgamiento-rompe-verso'],
    },
    {
      key: 'poetic-forms',
      label: 'Poetic Forms',
      audioKeys: ['soneto-catorce-versos', 'haiku-en-espanol', 'verso-libre-no-sigue', 'romance-serie-octasilabos', 'decima-espinela-diez', 'copla-poema-breve', 'alejandrino-catorce-silabas', 'rima-consonante-coincide', 'rima-asonante-solo-vocales', 'endecasilabo-once-silabas', 'octasilabo-ocho-silabas', 'estrofa-conjunto-versos'],
    },
    {
      key: 'movements-criticism',
      label: 'Movements & Criticism',
      audioKeys: ['realismo-magico-mezcla', 'modernismo-busco-belleza', 'barroco-espanol-complejidad', 'generacion-del-27-lorca', 'boom-latinoamericano-cortazar', 'subtexto-revela-personaje', 'voz-narrativa-primera-persona', 'arco-del-personaje-muestra', 'leitmotiv-tema-recurrente', 'intertextualidad-conecta-obras', 'catarsis-purificacion-emocional', 'climax-punto-mayor-tension'],
    },
  ],

  matchPairs: [
    { left: 'Metáfora', right: 'Direct comparison without "like"' },
    { left: 'Símil', right: 'Comparison using "como"' },
    { left: 'Hipérbole', right: 'Exaggeration for emphasis' },
    { left: 'Oxímoron', right: 'Joining contradictory terms' },
    { left: 'Soneto', right: '14 hendecasyllabic lines' },
    { left: 'Realismo mágico', right: 'Everyday meets the fantastic' },
    { left: 'Catarsis', right: 'Emotional purification' },
    { left: 'Leitmotiv', right: 'Recurring theme or image' },
  ],
  matchLabels: { left: 'Concepto', right: 'Definition' },

  sortActivities: [
    {
      title: 'Device or Form?',
      instruction: 'Is this a literary device (recurso literario) or a poetic form (forma poética)?',
      buckets: ['Literary Device 🖋️', 'Poetic Form 📜'],
      items: [
        { text: 'Metáfora', bucket: 'Literary Device 🖋️' },
        { text: 'Hipérbole', bucket: 'Literary Device 🖋️' },
        { text: 'Personificación', bucket: 'Literary Device 🖋️' },
        { text: 'Anáfora', bucket: 'Literary Device 🖋️' },
        { text: 'Soneto', bucket: 'Poetic Form 📜' },
        { text: 'Romance', bucket: 'Poetic Form 📜' },
        { text: 'Décima', bucket: 'Poetic Form 📜' },
        { text: 'Verso libre', bucket: 'Poetic Form 📜' },
      ],
    },
    {
      title: 'Spain or Latin America?',
      instruction: 'Does this movement or author primarily belong to Spain or Latin America?',
      buckets: ['Spain 🇪🇸', 'Latin America 🌎'],
      items: [
        { text: 'Barroco (Quevedo, Góngora)', bucket: 'Spain 🇪🇸' },
        { text: 'Generación del 27 (Lorca)', bucket: 'Spain 🇪🇸' },
        { text: 'Romanticismo (Bécquer)', bucket: 'Spain 🇪🇸' },
        { text: 'Picaresca (Lazarillo)', bucket: 'Spain 🇪🇸' },
        { text: 'Realismo mágico (García Márquez)', bucket: 'Latin America 🌎' },
        { text: 'Boom (Cortázar, Vargas Llosa)', bucket: 'Latin America 🌎' },
        { text: 'Modernismo (Rubén Darío)', bucket: 'Latin America 🌎' },
        { text: 'Criollismo', bucket: 'Latin America 🌎' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-poetry-workshop',
      title: 'Poetry Workshop in Granada — Taller de Poesía',
      location: 'Granada',
      lines: [
        { speaker: 'Profesora Elena', text: 'Bienvenidos al taller. Hoy analizaremos este fragmento de Lorca: "Verde que te quiero verde."', audio: '/audio/L6.2/phrases/d1-line1.mp3' },
        { speaker: 'Daniel', text: '¿Es una anáfora, verdad? La repetición de "verde" al inicio de cada verso crea un efecto hipnótico.', audio: '/audio/L6.2/phrases/d1-line2.mp3' },
        { speaker: 'Profesora Elena', text: 'Exacto. Pero también hay sinestesia: "verde viento" mezcla un color con algo intangible. ¿Qué efecto produce?', audio: '/audio/L6.2/phrases/d1-line3.mp3' },
        { speaker: 'Lucía', text: 'Creo que difumina los límites entre lo visual y lo táctil. El lector siente el verde, no solo lo ve.', audio: '/audio/L6.2/phrases/d1-line4.mp3' },
        { speaker: 'Daniel', text: '¿Y el subtexto? ¿"Verde" representa la muerte en el universo lorquiano, o es la naturaleza?', audio: '/audio/L6.2/phrases/d1-line5.mp3', annotations: [{ phrase: 'el subtexto', fromLesson: 'L5.7', note: 'Literary analysis vocabulary from L5.7' }] },
        { speaker: 'Profesora Elena', text: 'Esa ambigüedad es precisamente lo que hace grande a Lorca. El verde es vida, muerte, deseo y destino a la vez.', audio: '/audio/L6.2/phrases/d1-line6.mp3' },
        { speaker: 'Lucía', text: 'Es fascinante cómo un solo color se convierte en leitmotiv de todo el Romancero gitano.', audio: '/audio/L6.2/phrases/d1-line7.mp3' },
        { speaker: 'Daniel', text: 'La intertextualidad con la tradición del romance español también es evidente. Lorca renovó la forma manteniendo el octosílabo.', audio: '/audio/L6.2/phrases/d1-line8.mp3' },
        { speaker: 'Profesora Elena', text: 'Perfecto. Ahora quiero que cada uno escriba tres versos usando al menos una anáfora y un símil. Tienen veinte minutos.', audio: '/audio/L6.2/phrases/d1-line9.mp3' },
        { speaker: 'Lucía', text: '¿Podemos usar verso libre o debemos respetar una métrica fija como el endecasílabo?', audio: '/audio/L6.2/phrases/d1-line10.mp3' },
        { speaker: 'Profesora Elena', text: 'Verso libre. Pero quiero que presten atención al ritmo interno. La musicalidad no depende solo de la rima.', audio: '/audio/L6.2/phrases/d1-line11.mp3' },
        { speaker: 'Daniel', text: 'Entendido. Voy a intentar algo con encabalgamiento para que la idea fluya entre los versos.', audio: '/audio/L6.2/phrases/d1-line12.mp3' },
        { speaker: 'Profesora Elena', text: '¡Excelente idea! El encabalgamiento crea tensión y sorpresa. Es como si el verso se negara a terminar.', audio: '/audio/L6.2/phrases/d1-line13.mp3' },
        { speaker: 'Lucía', text: 'Justo como en Neruda: las ideas se desbordan de un verso al siguiente como un río.', audio: '/audio/L6.2/phrases/d1-line14.mp3', annotations: [{ phrase: 'se desbordan', fromLesson: 'L5.6', note: 'Figurative language from L5.6' }] },
        { speaker: 'Profesora Elena', text: '¡Eso mismo es un símil maravilloso! Ya están pensando como poetas. Manos a la obra.', audio: '/audio/L6.2/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-book-club',
      title: 'Book Discussion in Buenos Aires — Club de Lectura',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Martín', text: 'Acabo de terminar Cien años de soledad. Estoy abrumado. ¿Cómo procesás tanta información narrativa?', audio: '/audio/L6.2/phrases/d2-line1.mp3' },
        { speaker: 'Camila', text: 'Es que García Márquez usa el realismo mágico como si fuera lo más natural del mundo. Llueven flores y nadie se sorprende.', audio: '/audio/L6.2/phrases/d2-line2.mp3' },
        { speaker: 'Martín', text: 'El arco del personaje de Úrsula me pareció el más poderoso. Ella es la columna vertebral de toda la saga.', audio: '/audio/L6.2/phrases/d2-line3.mp3', annotations: [{ phrase: 'columna vertebral', fromLesson: 'L5.6', note: 'Figurative expression from L5.6 — backbone/pillar' }] },
        { speaker: 'Camila', text: 'Totalmente. Y hay un desdoblamiento constante: los Aurelianos y los José Arcadios repiten patrones como un leitmotiv genealógico.', audio: '/audio/L6.2/phrases/d2-line4.mp3' },
        { speaker: 'Martín', text: '¿Notaste la ironía dramática al final? El lector sabe que Macondo va a desaparecer, pero los personajes siguen viviendo.', audio: '/audio/L6.2/phrases/d2-line5.mp3' },
        { speaker: 'Camila', text: 'Sí, y la catarsis cuando finalmente leés las profecías de Melquíades es devastadora. Todo cobra sentido.', audio: '/audio/L6.2/phrases/d2-line6.mp3' },
        { speaker: 'Martín', text: 'Lo que más me impactó fue la circularidad. Es una metáfora del tiempo latinoamericano: la historia se repite.', audio: '/audio/L6.2/phrases/d2-line7.mp3' },
        { speaker: 'Camila', text: 'Ahora entiendo por qué dicen que el boom fue una revolución narrativa. Cortázar, Fuentes, Vargas Llosa — todos rompieron moldes.', audio: '/audio/L6.2/phrases/d2-line8.mp3' },
        { speaker: 'Martín', text: '¿Leíste Rayuela de Cortázar? Ahí la intertextualidad es el corazón del libro. Cita a Morelli, que es un alter ego del autor.', audio: '/audio/L6.2/phrases/d2-line9.mp3' },
        { speaker: 'Camila', text: 'Sí, y la voz narrativa cambia según el capítulo. Hay un narrador omnisciente, pero también fragmentos en primera persona.', audio: '/audio/L6.2/phrases/d2-line10.mp3' },
        { speaker: 'Martín', text: 'Me encanta cómo la literatura latinoamericana no le tiene miedo a la ambigüedad. Nada es blanco o negro.', audio: '/audio/L6.2/phrases/d2-line11.mp3' },
        { speaker: 'Camila', text: 'Eso es parte de su riqueza. El clímax no siempre es explosivo; a veces es un silencio, una ausencia.', audio: '/audio/L6.2/phrases/d2-line12.mp3' },
        { speaker: 'Martín', text: '¿Para la próxima reunión leemos a Borges? "El Aleph" es perfecto para analizar la metonimia y el infinito en la literatura.', audio: '/audio/L6.2/phrases/d2-line13.mp3' },
        { speaker: 'Camila', text: '¡Dale! Borges es el maestro de la intertextualidad. Cada cuento es un laberinto de referencias. Va a dar para horas de discusión.', audio: '/audio/L6.2/phrases/d2-line14.mp3' },
        { speaker: 'Martín', text: 'Perfecto. Preparo un análisis del narrador y vos te enfocás en los recursos literarios. ¡Nos vemos el jueves!', audio: '/audio/L6.2/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Analyze poetry with a professor in a workshop in Granada and discuss landmark novels at a book club in Buenos Aires.',

  culturalNotes: [
    {
      title: 'Neruda, Borges & Sor Juana: The Poets Who Shaped a Continent',
      content: 'Pablo Neruda\'s Veinte poemas de amor transformed love poetry; his Canto general gave Latin America an epic voice. Jorge Luis Borges invented fictional libraries and infinite labyrinths that changed world literature forever. And centuries before them, Sor Juana Inés de la Cruz — a 17th-century Mexican nun — wrote the first feminist manifesto in the Americas and composed some of the most intellectually daring poetry in Spanish. Together, they represent the breadth of Hispanic literary genius: from the sensual to the cerebral, from the colonial to the revolutionary.',
    },
    {
      title: 'Oral Poetry: From Romances to Décimas to Slam',
      content: 'Spanish poetry has always lived in the voice as much as on the page. Medieval romances were sung by juglares (minstrels) across Spain. In the Caribbean, the décima became the foundation of musical improvisation — Cuban punto guajiro and Puerto Rican trova use this ten-line form for spontaneous poetic duels. In Mexico, corridos narrate current events in verse. Today, spoken word and poetry slam festivals thrive in Madrid, Buenos Aires, and México City, proving that the oral tradition never died — it simply evolved.',
    },
    {
      title: 'Modern Spoken Word & the Digital Poetry Renaissance',
      content: 'A new generation of Spanish-speaking poets is reaching millions through Instagram, TikTok, and YouTube. Elvira Sastre, Marwan, and Irene X built massive followings by sharing accessible, emotionally raw poetry online. Meanwhile, poetry slam competitions in cities like Bogotá, Barcelona, and Santiago de Chile fill theaters with audiences hungry for live verse. This digital renaissance has made poetry cool again — "la poesía es el nuevo rock" (poetry is the new rock), they say. The ancient art of verse has found its most democratic platform yet.',
    },
  ],
  culturalGradient: 'from-rose-50 to-pink-50',

  quiz: [
    { id: 1, type: 'mc', text: 'A metáfora differs from a símil because it:', options: ['Uses "como" (like)', 'Makes a direct equation without comparison words', 'Only appears in poetry', 'Always involves nature'], answer: 1 },
    { id: 2, type: 'fill', text: '"Érase un hombre a una nariz pegado" (Quevedo) is an example of:', answer: 'hipérbole' },
    { id: 3, type: 'mc', text: 'An oxímoron is:', options: ['Repetition at the start of lines', 'Mixing of senses', 'Two contradictory terms joined together', 'An exaggerated statement'], answer: 2 },
    { id: 4, type: 'tf', text: 'Rima asonante matches only the vowels from the last stressed syllable.', answer: true },
    { id: 5, type: 'mc', text: 'A soneto has:', options: ['10 lines in décima form', '14 hendecasyllabic lines', '8 octosyllabic lines', 'No fixed structure'], answer: 1 },
    { id: 6, type: 'fill', text: 'The literary movement that blends the everyday with the fantastic is called:', answer: 'realismo mágico' },
    { id: 7, type: 'mc', text: 'Rubén Darío is the key figure of which movement?', options: ['Romanticismo', 'Barroco', 'Modernismo', 'Naturalismo'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, which device does Lucía identify in "verde viento"?', options: ['Hipérbole', 'Anáfora', 'Sinestesia', 'Metonimia'], answer: 2 },
    { id: 9, type: 'tf', text: 'Aliteración is the repetition of similar consonant or vowel sounds in nearby words.', answer: true },
    { id: 10, type: 'mc', text: 'The "arco del personaje" refers to:', options: ['The plot structure', 'The character\'s transformation', 'The rhyme scheme', 'The narrative voice'], answer: 1 },
    { id: 11, type: 'fill', text: 'A recurring theme or image that unifies a literary work is called a:', answer: 'leitmotiv' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what do Martín and Camila plan to read next?', options: ['Neruda', 'Cortázar', 'Borges', 'García Márquez'], answer: 2 },
    { id: 13, type: 'mc', text: '"Leyó a Cervantes" (meaning: read his works) is an example of:', options: ['Sinestesia', 'Personificación', 'Metonimia', 'Antítesis'], answer: 2 },
    { id: 14, type: 'tf', text: 'Sor Juana Inés de la Cruz was a 17th-century Mexican poet who wrote feminist works.', answer: true },
    { id: 15, type: 'mc', text: 'Encabalgamiento occurs when:', options: ['A verse has internal rhyme', 'A sentence continues past the end of a verse line', 'Two words contradict each other', 'The narrator changes perspective'], answer: 1 },
  ],

  audioBase: '/audio/L6.2/phrases',

  uniqueActivity: {
    id: 'PoetryForgeL62',
    sectionId: 'poetry-forge',
    sectionColor: 'bg-rose-50/40',
    sectionBorder: 'border-rose-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    'literary-devices': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'poetic-forms': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'literary-movements': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'criticism-vocabulary': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'poetry-forge': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
