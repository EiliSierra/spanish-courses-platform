import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Narrative Techniques (12) ===
  { spanish: 'El narrador en primera persona nos sumerge en la mente del protagonista', english: 'The first-person narrator immerses us in the protagonist\'s mind', pronunciation: 'ehl nah-rrah-DOHR ehn pree-MEH-rah pehr-SOH-nah nohs soo-MEHR-heh ehn lah MEHN-teh dehl proh-tah-goh-NEES-tah', category: 'narrative-techniques', audio: 'el-narrador-en-primera' },
  { spanish: 'El flashback o analepsis nos transporta a un momento anterior de la historia', english: 'The flashback or analepsis transports us to an earlier moment in the story', pronunciation: 'ehl flahsh-bahk oh ah-nah-LEHP-sees nohs trahns-POHR-tah ah oon moh-MEHN-toh ahn-teh-ree-OHR deh lah ees-TOH-ree-ah', category: 'narrative-techniques', audio: 'el-flashback-o-analepsis' },
  { spanish: 'El foreshadowing o prolepsis anticipa eventos que ocurrirán más adelante', english: 'Foreshadowing or prolepsis anticipates events that will occur later', pronunciation: 'ehl fohr-SHAH-doh-weeng oh proh-LEHP-sees ahn-tee-SEE-pah eh-BEHN-tohs keh oh-koo-ree-RAHN mahs ah-deh-LAHN-teh', category: 'narrative-techniques', audio: 'el-foreshadowing-o-prolepsis' },
  { spanish: 'El flujo de consciencia captura los pensamientos desordenados de un personaje', english: 'Stream of consciousness captures a character\'s disordered thoughts', pronunciation: 'ehl FLOO-hoh deh kohns-see-EHN-see-ah kahp-TOO-rah lohs pehn-sah-mee-EHN-tohs deh-sohr-deh-NAH-dohs deh oon pehr-soh-NAH-heh', category: 'narrative-techniques', audio: 'el-flujo-de-consciencia' },
  { spanish: 'El monólogo interior revela lo que un personaje piensa pero no dice', english: 'The interior monologue reveals what a character thinks but doesn\'t say', pronunciation: 'ehl moh-NOH-loh-goh een-teh-ree-OHR rreh-BEH-lah loh keh oon pehr-soh-NAH-heh pee-EHN-sah PEH-roh noh DEE-seh', category: 'narrative-techniques', audio: 'el-monologo-interior' },
  { spanish: 'El punto de vista múltiple presenta la historia desde varias perspectivas', english: 'Multiple point of view presents the story from various perspectives', pronunciation: 'ehl POON-toh deh BEES-tah MOOL-tee-pleh preh-SEHN-tah lah ees-TOH-ree-ah DEHS-deh BAH-ree-ahs pehr-spehk-TEE-bahs', category: 'narrative-techniques', audio: 'el-punto-de-vista' },
  { spanish: 'El narrador omnisciente todo lo sabe: pensamientos, pasado y futuro', english: 'The omniscient narrator knows everything: thoughts, past, and future', pronunciation: 'ehl nah-rrah-DOHR ohm-nee-see-EHN-teh TOH-doh loh SAH-beh pehn-sah-mee-EHN-tohs pah-SAH-doh ee foo-TOO-roh', category: 'narrative-techniques', audio: 'el-narrador-omnisciente' },
  { spanish: 'El narrador no fiable nos engaña deliberadamente sobre los hechos', english: 'The unreliable narrator deliberately deceives us about the facts', pronunciation: 'ehl nah-rrah-DOHR noh fee-AH-bleh nohs ehn-GAH-nyah deh-lee-beh-rah-dah-MEHN-teh SOH-breh lohs EH-chohs', category: 'narrative-techniques', audio: 'el-narrador-no-fiable' },
  { spanish: 'La elipsis narrativa omite eventos para crear misterio o acelerar el ritmo', english: 'Narrative ellipsis omits events to create mystery or accelerate the pace', pronunciation: 'lah eh-LEEP-sees nah-rrah-TEE-bah oh-MEE-teh eh-BEHN-tohs PAH-rah kreh-AHR mees-TEH-ree-oh oh ah-seh-leh-RAHR ehl RREET-moh', category: 'narrative-techniques', audio: 'la-elipsis-narrativa' },
  { spanish: 'El tiempo no lineal desordena la cronología para generar sorpresa', english: 'Non-linear time disorders the chronology to generate surprise', pronunciation: 'ehl tee-EHM-poh noh lee-neh-AHL dehs-OHR-deh-nah lah kroh-noh-loh-HEE-ah PAH-rah heh-neh-RAHR sohr-PREH-sah', category: 'narrative-techniques', audio: 'el-tiempo-no-lineal' },
  { spanish: 'La metaficción hace que la historia hable de sí misma como ficción', english: 'Metafiction makes the story talk about itself as fiction', pronunciation: 'lah meh-tah-feek-see-OHN AH-seh keh lah ees-TOH-ree-ah AH-bleh deh see MEES-mah KOH-moh feek-see-OHN', category: 'narrative-techniques', audio: 'la-metaficcion-hace' },
  { spanish: 'El cliffhanger deja la acción suspendida para mantener el suspenso', english: 'The cliffhanger leaves the action suspended to maintain suspense', pronunciation: 'ehl kleef-HAHN-gehr DEH-hah lah ahk-see-OHN soos-pehn-DEE-dah PAH-rah mahn-teh-NEHR ehl soos-PEHN-soh', category: 'narrative-techniques', audio: 'el-cliffhanger-deja' },

  // === Descriptive Writing (12) ===
  { spanish: 'El paisaje se extendía hasta donde alcanzaba la vista, vasto e inmutable', english: 'The landscape stretched as far as the eye could see, vast and unchanging', pronunciation: 'ehl pah-ee-SAH-heh seh ehks-tehn-DEE-ah AHS-tah DOHN-deh ahl-kahn-SAH-bah lah BEES-tah BAHS-toh eh een-moo-TAH-bleh', category: 'descriptive-writing', audio: 'el-paisaje-se-extendia' },
  { spanish: 'Una brisa tenue acariciaba los campos de trigo dorado', english: 'A gentle breeze caressed the fields of golden wheat', pronunciation: 'OO-nah BREE-sah TEH-nweh ah-kah-ree-see-AH-bah lohs KAHM-pohs deh TREE-goh doh-RAH-doh', category: 'descriptive-writing', audio: 'una-brisa-tenue' },
  { spanish: 'El silencio era ensordecedor, como si el mundo hubiera dejado de respirar', english: 'The silence was deafening, as if the world had stopped breathing', pronunciation: 'ehl see-LEHN-see-oh EH-rah ehn-sohr-deh-seh-DOHR KOH-moh see ehl MOON-doh oo-bee-EH-rah deh-HAH-doh deh rrehs-pee-RAHR', category: 'descriptive-writing', audio: 'el-silencio-era-ensordecedor' },
  { spanish: 'La luz se filtraba entre las hojas, creando un mosaico de sombras', english: 'The light filtered through the leaves, creating a mosaic of shadows', pronunciation: 'lah loos seh feel-TRAH-bah EHN-treh lahs OH-hahs kreh-AHN-doh oon moh-SAH-ee-koh deh SOHM-brahs', category: 'descriptive-writing', audio: 'la-luz-se-filtraba' },
  { spanish: 'El aire olía a lluvia inminente y a tierra húmeda', english: 'The air smelled of imminent rain and damp earth', pronunciation: 'ehl AH-ee-reh oh-LEE-ah ah YOO-bee-ah een-mee-NEHN-teh ee ah tee-EH-rrah OO-meh-dah', category: 'descriptive-writing', audio: 'el-aire-olia' },
  { spanish: 'Las calles adoquinadas reflejaban la luz mortecina del atardecer', english: 'The cobblestone streets reflected the fading light of dusk', pronunciation: 'lahs KAH-yehs ah-doh-kee-NAH-dahs rreh-fleh-HAH-bahn lah loos mohr-teh-SEE-nah dehl ah-tahr-deh-SEHR', category: 'descriptive-writing', audio: 'las-calles-adoquinadas' },
  { spanish: 'Su rostro era un mapa de arrugas que contaban historias sin palabras', english: 'Her face was a map of wrinkles that told stories without words', pronunciation: 'soo RROHS-troh EH-rah oon MAH-pah deh ah-RROO-gahs keh kohn-TAH-bahn ees-TOH-ree-ahs seen pah-LAH-brahs', category: 'descriptive-writing', audio: 'su-rostro-era-un-mapa' },
  { spanish: 'La niebla envolvía el pueblo como un manto de algodón gris', english: 'The fog enveloped the town like a blanket of gray cotton', pronunciation: 'lah nee-EH-blah ehn-bohl-BEE-ah ehl PWEH-bloh KOH-moh oon MAHN-toh deh ahl-goh-DOHN grees', category: 'descriptive-writing', audio: 'la-niebla-envolvia' },
  { spanish: 'El río murmuraba secretos antiguos entre las piedras desgastadas', english: 'The river murmured ancient secrets among the worn stones', pronunciation: 'ehl RREE-oh moor-moo-RAH-bah seh-KREH-tohs ahn-TEE-gwohs EHN-treh lahs pee-EH-drahs dehs-gahs-TAH-dahs', category: 'descriptive-writing', audio: 'el-rio-murmuraba' },
  { spanish: 'Un trueno lejano anunciaba la tormenta con voz de gigante dormido', english: 'A distant thunder announced the storm with the voice of a sleeping giant', pronunciation: 'oon TRWEH-noh leh-HAH-noh ah-noon-see-AH-bah lah tohr-MEHN-tah kohn bohs deh hee-GAHN-teh dohr-MEE-doh', category: 'descriptive-writing', audio: 'un-trueno-lejano' },
  { spanish: 'Los colores del mercado explotaban como fuegos artificiales de tela y especias', english: 'The market\'s colors exploded like fireworks of fabric and spices', pronunciation: 'lohs koh-LOH-rehs dehl mehr-KAH-doh ehks-ploh-TAH-bahn KOH-moh FWEH-gohs ahr-tee-fee-see-AH-lehs deh TEH-lah ee ehs-PEH-see-ahs', category: 'descriptive-writing', audio: 'los-colores-del-mercado' },
  { spanish: 'La casa crujía bajo el peso de los años, como un anciano que suspira', english: 'The house creaked under the weight of years, like an old man sighing', pronunciation: 'lah KAH-sah kroo-HEE-ah BAH-hoh ehl PEH-soh deh lohs AH-nyohs KOH-moh oon ahn-see-AH-noh keh soos-PEE-rah', category: 'descriptive-writing', audio: 'la-casa-crujia' },

  // === Dialogue Craft (12) ===
  { spanish: '—dijo con voz entrecortada, como si cada palabra le costara un esfuerzo', english: '—he said in a broken voice, as if each word cost him an effort', pronunciation: 'DEE-hoh kohn bohs ehn-treh-kohr-TAH-dah KOH-moh see KAH-dah pah-LAH-brah leh kohs-TAH-rah oon ehs-FWEHR-soh', category: 'dialogue-craft', audio: 'dijo-con-voz-entrecortada' },
  { spanish: '—murmuró entre dientes, sin levantar la mirada del suelo', english: '—he mumbled through clenched teeth, without lifting his gaze from the floor', pronunciation: 'moor-moo-ROH EHN-treh dee-EHN-tehs seen leh-bahn-TAHR lah mee-RAH-dah dehl SWEH-loh', category: 'dialogue-craft', audio: 'murmuro-entre-dientes' },
  { spanish: '—exclamó con ironía, dibujando una sonrisa amarga en los labios', english: '—she exclaimed with irony, drawing a bitter smile on her lips', pronunciation: 'ehks-klah-MOH kohn ee-roh-NEE-ah dee-boo-HAHN-doh OO-nah sohn-REE-sah ah-MAHR-gah ehn lohs LAH-bee-ohs', category: 'dialogue-craft', audio: 'exclamo-con-ironia' },
  { spanish: '—suspiró antes de responder, como si buscara las palabras exactas', english: '—she sighed before answering, as if searching for the exact words', pronunciation: 'soos-pee-ROH AHN-tehs deh rrehs-pohn-DEHR KOH-moh see boos-KAH-rah lahs pah-LAH-brahs ehk-SAHK-tahs', category: 'dialogue-craft', audio: 'suspiro-antes-de-responder' },
  { spanish: '—gritó con una rabia que hacía temblar las paredes', english: '—he shouted with a rage that made the walls tremble', pronunciation: 'gree-TOH kohn OO-nah RRAH-bee-ah keh ah-SEE-ah tehm-BLAHR lahs pah-REH-dehs', category: 'dialogue-craft', audio: 'grito-con-una-rabia' },
  { spanish: '—confesó en voz baja, como quien entrega un secreto peligroso', english: '—she confessed quietly, like someone surrendering a dangerous secret', pronunciation: 'kohn-feh-SOH ehn bohs BAH-hah KOH-moh kee-EHN ehn-TREH-gah oon seh-KREH-toh peh-lee-GROH-soh', category: 'dialogue-craft', audio: 'confeso-en-voz-baja' },
  { spanish: '—respondió con calma glacial, sin que una sola emoción cruzara su rostro', english: '—she responded with glacial calm, without a single emotion crossing her face', pronunciation: 'rrehs-pohn-dee-OH kohn KAHL-mah glah-see-AHL seen keh OO-nah SOH-lah eh-moh-see-OHN kroo-SAH-rah soo RROHS-troh', category: 'dialogue-craft', audio: 'respondio-con-calma' },
  { spanish: '—tartamudeó, buscando las palabras que se le escapaban como peces', english: '—he stuttered, searching for words that escaped him like fish', pronunciation: 'tahr-tah-moo-deh-OH boos-KAHN-doh lahs pah-LAH-brahs keh seh leh ehs-kah-PAH-bahn KOH-moh PEH-sehs', category: 'dialogue-craft', audio: 'tartamudeo-buscando' },
  { spanish: '—interrumpió con impaciencia, sin dejar terminar la frase', english: '—she interrupted impatiently, without letting the sentence finish', pronunciation: 'een-teh-rroom-pee-OH kohn eem-pah-see-EHN-see-ah seen deh-HAHR tehr-mee-NAHR lah FRAH-seh', category: 'dialogue-craft', audio: 'interrumpio-con-impaciencia' },
  { spanish: '—suplicó con los ojos llenos de lágrimas que no se atrevía a derramar', english: '—she pleaded with eyes full of tears she dared not shed', pronunciation: 'soo-plee-KOH kohn lohs OH-hohs YEH-nohs deh LAH-gree-mahs keh noh seh ah-treh-BEE-ah ah deh-rrah-MAHR', category: 'dialogue-craft', audio: 'suplico-con-los-ojos' },
  { spanish: '—mintió sin pestañear, con la tranquilidad de quien ha ensayado mil veces', english: '—he lied without blinking, with the calm of someone who has rehearsed a thousand times', pronunciation: 'meen-tee-OH seen pehs-tah-nyeh-AHR kohn lah trahn-kee-lee-DAHD deh kee-EHN ah ehn-sah-YAH-doh meel BEH-sehs', category: 'dialogue-craft', audio: 'mintio-sin-pestanear' },
  { spanish: '—preguntó con genuina curiosidad, inclinando la cabeza como un pájaro', english: '—she asked with genuine curiosity, tilting her head like a bird', pronunciation: 'preh-goon-TOH kohn heh-noo-EE-nah koo-ree-oh-see-DAHD een-klee-NAHN-doh lah kah-BEH-sah KOH-moh oon PAH-hah-roh', category: 'dialogue-craft', audio: 'pregunto-con-genuina' },

  // === Story Structure (12) ===
  { spanish: 'El planteamiento establece el mundo, los personajes y el tono de la historia', english: 'The exposition establishes the world, characters, and tone of the story', pronunciation: 'ehl plahn-teh-ah-mee-EHN-toh ehs-tah-BLEH-seh ehl MOON-doh lohs pehr-soh-NAH-hehs ee ehl TOH-noh deh lah ees-TOH-ree-ah', category: 'story-structure', audio: 'el-planteamiento-establece' },
  { spanish: 'El nudo es donde el conflicto se desarrolla y las tensiones aumentan', english: 'The rising action is where the conflict develops and tensions increase', pronunciation: 'ehl NOO-doh ehs DOHN-deh ehl kohn-FLEEK-toh seh deh-sah-RROH-yah ee lahs tehn-see-OH-nehs ow-MEHN-tahn', category: 'story-structure', audio: 'el-nudo-es-donde' },
  { spanish: 'El clímax es el momento de máxima tensión donde todo cambia', english: 'The climax is the moment of maximum tension where everything changes', pronunciation: 'ehl KLEE-mahks ehs ehl moh-MEHN-toh deh MAHK-see-mah tehn-see-OHN DOHN-deh TOH-doh KAHM-bee-ah', category: 'story-structure', audio: 'el-climax-es-el-momento' },
  { spanish: 'El desenlace resuelve los conflictos y cierra los arcos narrativos', english: 'The denouement resolves the conflicts and closes the narrative arcs', pronunciation: 'ehl deh-sehn-LAH-seh rreh-SWEL-beh lohs kohn-FLEEK-tohs ee see-EH-rrah lohs AHR-kohs nah-rrah-TEE-bohs', category: 'story-structure', audio: 'el-desenlace-resuelve' },
  { spanish: 'El conflicto interno enfrenta al personaje consigo mismo', english: 'The internal conflict pits the character against themselves', pronunciation: 'ehl kohn-FLEEK-toh een-TEHR-noh ehn-FREHN-tah ahl pehr-soh-NAH-heh kohn-SEE-goh MEES-moh', category: 'story-structure', audio: 'el-conflicto-interno' },
  { spanish: 'La resolución puede ser abierta, dejando que el lector imagine el final', english: 'The resolution can be open-ended, letting the reader imagine the ending', pronunciation: 'lah rreh-soh-loo-see-OHN PWEH-deh sehr ah-bee-EHR-tah deh-HAHN-doh keh ehl lehk-TOHR ee-mah-HEE-neh ehl fee-NAHL', category: 'story-structure', audio: 'la-resolucion-puede-ser' },
  { spanish: 'El arco del personaje muestra su transformación a lo largo de la historia', english: 'The character arc shows their transformation throughout the story', pronunciation: 'ehl AHR-koh dehl pehr-soh-NAH-heh MWEHS-trah soo trahns-fohr-mah-see-OHN ah loh LAHR-goh deh lah ees-TOH-ree-ah', category: 'story-structure', audio: 'el-arco-del-personaje' },
  { spanish: 'El antagonista no siempre es un villano; puede ser una circunstancia', english: 'The antagonist is not always a villain; it can be a circumstance', pronunciation: 'ehl ahn-tah-goh-NEES-tah noh see-EHM-preh ehs oon bee-YAH-noh PWEH-deh sehr OO-nah seer-koons-TAHN-see-ah', category: 'story-structure', audio: 'el-antagonista-no-siempre' },
  { spanish: 'El tema subyacente da profundidad y significado universal a la historia', english: 'The underlying theme gives depth and universal meaning to the story', pronunciation: 'ehl TEH-mah soob-yah-SEHN-teh dah proh-foon-dee-DAHD ee seeg-nee-fee-KAH-doh oo-nee-behr-SAHL ah lah ees-TOH-ree-ah', category: 'story-structure', audio: 'el-tema-subyacente' },
  { spanish: 'El giro argumental sorprende al lector al cambiar el rumbo de la trama', english: 'The plot twist surprises the reader by changing the course of the plot', pronunciation: 'ehl HEE-roh ahr-goo-mehn-TAHL sohr-PREHN-deh ahl lehk-TOHR ahl kahm-bee-AHR ehl RROOM-boh deh lah TRAH-mah', category: 'story-structure', audio: 'el-giro-argumental' },
  { spanish: 'El epílogo ofrece un vistazo al futuro de los personajes después del final', english: 'The epilogue offers a glimpse into the characters\' future after the ending', pronunciation: 'ehl eh-PEE-loh-goh oh-FREH-seh oon bees-TAH-soh ahl foo-TOO-roh deh lohs pehr-soh-NAH-hehs dehs-PWEHS dehl fee-NAHL', category: 'story-structure', audio: 'el-epilogo-ofrece' },
  { spanish: 'La tensión dramática mantiene al lector en vilo, deseando saber qué pasará', english: 'Dramatic tension keeps the reader in suspense, wanting to know what will happen', pronunciation: 'lah tehn-see-OHN drah-MAH-tee-kah mahn-tee-EH-neh ahl lehk-TOHR ehn BEE-loh deh-seh-AHN-doh sah-BEHR keh pah-sah-RAH', category: 'story-structure', audio: 'la-tension-dramatica' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L77PhraseByAudio = phraseByAudio

// === STORY WEAVER (unique activity) ===

export interface StoryWeaverChallenge {
  prompt: string
  english: string
  correctContinuation: string
  options: string[]
}

export const STORY_WEAVER_CHALLENGES: StoryWeaverChallenge[] = [
  {
    prompt: '"La puerta del sótano siempre había estado cerrada con llave. Pero esa noche, al pasar por el pasillo, notó que estaba entreabierta..."',
    english: '"The basement door had always been locked. But that night, passing through the hallway, she noticed it was ajar..."',
    correctContinuation: 'Una corriente de aire frío le acarició los tobillos, trayendo consigo un olor a tierra húmeda y a algo dulce que no supo identificar.',
    options: ['Una corriente de aire frío le acarició los tobillos, trayendo consigo un olor a tierra húmeda y a algo dulce que no supo identificar.', 'Decidió ir a dormir porque tenía sueño.', 'Llamó a la policía inmediatamente.', 'La puerta se cerró sola y nunca más pensó en ello.'],
  },
  {
    prompt: '"El anciano llevaba sentado en ese banco del parque desde las seis de la mañana. Cada día, sin falta, durante cuarenta años..."',
    english: '"The old man had been sitting on that park bench since six in the morning. Every day, without fail, for forty years..."',
    correctContinuation: 'Pero hoy su mano derecha sostenía algo diferente: en vez del periódico de siempre, apretaba una carta arrugada que olía a perfume de jazmín.',
    options: ['Se fue a su casa a las siete como siempre.', 'El parque estaba bonito ese día.', 'Pero hoy su mano derecha sostenía algo diferente: en vez del periódico de siempre, apretaba una carta arrugada que olía a perfume de jazmín.', 'Hacía buen tiempo y los pájaros cantaban.'],
  },
  {
    prompt: '"—No me busques más —dijo ella, dejando la llave sobre la mesa con un golpe seco..."',
    english: '"—Don\'t look for me anymore —she said, placing the key on the table with a sharp thud..."',
    correctContinuation: '—suspiró antes de responder, como si buscara las palabras exactas—: Nunca he dejado de buscarte. Incluso cuando creía haberte olvidado.',
    options: ['—Está bien, adiós —respondió él sin levantar la vista.', '—suspiró antes de responder, como si buscara las palabras exactas—: Nunca he dejado de buscarte. Incluso cuando creía haberte olvidado.', '—OK —dijo él y encendió la televisión.', '—¿Quieres cenar? —preguntó cambiando de tema.'],
  },
  {
    prompt: '"La carta decía simplemente: «Sé lo que hiciste el verano de 1987. Te espero en el faro a medianoche»..."',
    english: '"The letter simply said: \'I know what you did in the summer of 1987. I\'ll be waiting at the lighthouse at midnight\'..."',
    correctContinuation: 'Las manos le temblaron. Hacía treinta y nueve años que guardaba ese secreto. Lo había enterrado tan profundo que había llegado a creer que no era real.',
    options: ['Tiró la carta a la basura y se olvidó del asunto.', 'Las manos le temblaron. Hacía treinta y nueve años que guardaba ese secreto. Lo había enterrado tan profundo que había llegado a creer que no era real.', 'Llamó a la policía para reportar la carta.', 'Decidió no ir al faro.'],
  },
  {
    prompt: '"El pueblo entero se reunió en la plaza. Hacía diez años que no llovía. Los pozos estaban secos, los campos muertos..."',
    english: '"The entire town gathered in the plaza. It hadn\'t rained in ten years. The wells were dry, the fields dead..."',
    correctContinuation: 'Entonces la niña más pequeña del pueblo caminó hasta el centro de la plaza, levantó las manos al cielo y cantó una canción que nadie había escuchado jamás.',
    options: ['Decidieron mudarse a otra ciudad.', 'El alcalde dio un discurso sobre el clima.', 'Entonces la niña más pequeña del pueblo caminó hasta el centro de la plaza, levantó las manos al cielo y cantó una canción que nadie había escuchado jamás.', 'Todos se fueron a sus casas tristes.'],
  },
  {
    prompt: '"El espejo del baño reflejaba algo imposible: su propio rostro, pero treinta años más joven..."',
    english: '"The bathroom mirror reflected something impossible: his own face, but thirty years younger..."',
    correctContinuation: 'Extendió la mano temblorosa hacia el cristal. Sus dedos lo atravesaron como si fuera agua, y del otro lado sintió el calor de un verano que creía perdido para siempre.',
    options: ['Se lavó la cara y se fue a trabajar.', 'Pensó que necesitaba lentes nuevos.', 'Rompió el espejo con el puño.', 'Extendió la mano temblorosa hacia el cristal. Sus dedos lo atravesaron como si fuera agua, y del otro lado sintió el calor de un verano que creía perdido para siempre.'],
  },
  {
    prompt: '"Encontró el diario de su abuela en el desván. La última entrada, fechada el día de su muerte, decía: «Querida nieta, si estás leyendo esto...»"',
    english: '"She found her grandmother\'s diary in the attic. The last entry, dated the day of her death, said: \'Dear granddaughter, if you\'re reading this...\'"',
    correctContinuation: '«...hay algo que nunca te conté. En la caja de música que te regalé cuando tenías cinco años, escondí un mapa. Síguelo. La verdad sobre nuestra familia te espera al final.»',
    options: ['«...te quiero mucho. Cuídate.»', '«...no olvides regar las plantas del jardín.»', '«...hay algo que nunca te conté. En la caja de música que te regalé cuando tenías cinco años, escondí un mapa. Síguelo. La verdad sobre nuestra familia te espera al final.»', '«...recuerda que la cena está en el refrigerador.»'],
  },
]

// === LESSON DATA ===

export const L77Data: LessonData = {
  id: 'L7.7',
  hero: {
    lessonId: 'L7.7',
    title: 'Creative Writing & Storytelling',
    subtitle: 'The art of crafting worlds with words',
    description: 'Master the narrative techniques, descriptive writing, dialogue craft, and story structures that make great fiction unforgettable. From stream of consciousness to unreliable narrators, learn to tell stories that captivate in Spanish.',
    image: '/images/L7.7/L7.7.jpg',
    gradient: 'from-amber-800/65 via-orange-700/55 to-rose-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '📖', title: 'Narrative Techniques', desc: 'Master first person, flashback, foreshadowing, stream of consciousness, and unreliable narrators.' },
    { icon: '🎨', title: 'Descriptive Writing', desc: 'Paint vivid scenes with sensory language: landscapes, sounds, smells, textures, and atmospheres.' },
    { icon: '💬', title: 'Dialogue Craft', desc: 'Write dialogue that reveals character: speech tags, subtext, emotional tone, and rhythm.' },
    { icon: '🏗️', title: 'Story Structure', desc: 'Build compelling stories: exposition, rising action, climax, denouement, and character arcs.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L6.2', label: 'Literary Language', detail: 'L6.2 explored literary devices and poetic forms. Now use those tools to write your own creative fiction.' },
    { fromLesson: 'L5.1', label: 'Narrative Sequencing', detail: 'L5.1 taught past tenses and temporal connectors. Now use them to create complex timelines in storytelling.' },
    { fromLesson: 'L6.1', label: 'Complex Sentences', detail: 'L6.1 mastered advanced syntax. Now deploy that syntactic sophistication in creative prose.' },
  ],

  sectionTransitions: [
    { afterSection: 'narrative-techniques', text: 'You know the techniques! Now let\'s paint vivid scenes with descriptive writing.' },
    { afterSection: 'descriptive-writing', text: 'Beautiful descriptions! Let\'s bring characters to life through their dialogue.' },
    { afterSection: 'dialogue-craft', text: 'Your characters speak! Now let\'s understand the architecture of a great story.' },
    { afterSection: 'dialogues', text: 'Workshop sessions explored! Let\'s discover the storytelling traditions of the Spanish-speaking world.' },
    { afterSection: 'cultural', text: 'Cultural traditions understood! Now weave your own stories in the Story Weaver challenge.' },
    { afterSection: 'story-weaver', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El narrador en primera persona...', english: 'The first-person narrator...' },
    { spanish: 'El paisaje se extendía...', english: 'The landscape stretched...' },
    { spanish: '—dijo con voz entrecortada...', english: '—he said in a broken voice...' },
    { spanish: 'El planteamiento establece...', english: 'The exposition establishes...' },
    { spanish: 'El clímax es el momento de...', english: 'The climax is the moment of...' },
    { spanish: 'El desenlace resuelve...', english: 'The denouement resolves...' },
  ],

  pronunciationChallenges: [
    { spanish: 'El silencio era ensordecedor, como si el mundo hubiera dejado de respirar', pronunciation: 'ehl see-LEHN-see-oh EH-rah ehn-sohr-deh-seh-DOHR KOH-moh see ehl MOON-doh oo-bee-EH-rah deh-HAH-doh deh rrehs-pee-RAHR', english: 'The silence was deafening, as if the world had stopped breathing', audio: 'el-silencio-era-ensordecedor', tip: 'This is an oxymoron — "silencio ensordecedor" (deafening silence). The contrast creates power. Deliver "ensordecedor" slowly, letting each syllable build the paradox.' },
    { spanish: 'Una brisa tenue acariciaba los campos de trigo dorado', pronunciation: 'OO-nah BREE-sah TEH-nweh ah-kah-ree-see-AH-bah lohs KAHM-pohs deh TREE-goh doh-RAH-doh', english: 'A gentle breeze caressed the fields of golden wheat', audio: 'una-brisa-tenue', tip: '"Tenue" (tenuous/gentle) and "acariciaba" (caressed) are both soft, sensory words. Let your voice become gentle when reading descriptive prose — the tone should match the content.' },
    { spanish: '—suspiró antes de responder, como si buscara las palabras exactas', pronunciation: 'soos-pee-ROH AHN-tehs deh rrehs-pohn-DEHR KOH-moh see boos-KAH-rah lahs pah-LAH-brahs ehk-SAHK-tahs', english: '—she sighed before answering, as if searching for the exact words', audio: 'suspiro-antes-de-responder', tip: 'Dialogue tags in Spanish go beyond "dijo" (said). "Suspiró," "murmuró," "exclamó" — each verb carries emotional weight. Practice reading these with the emotion the verb describes.' },
    { spanish: 'El giro argumental sorprende al lector al cambiar el rumbo de la trama', pronunciation: 'ehl HEE-roh ahr-goo-mehn-TAHL sohr-PREHN-deh ahl lehk-TOHR ahl kahm-bee-AHR ehl RROOM-boh deh lah TRAH-mah', english: 'The plot twist surprises the reader by changing the course of the plot', audio: 'el-giro-argumental', tip: '"Giro argumental" (plot twist) — "giro" literally means turn. In storytelling vocabulary, technical terms often have concrete, physical roots that make them memorable.' },
    { spanish: 'La niebla envolvía el pueblo como un manto de algodón gris', pronunciation: 'lah nee-EH-blah ehn-bohl-BEE-ah ehl PWEH-bloh KOH-moh oon MAHN-toh deh ahl-goh-DOHN grees', english: 'The fog enveloped the town like a blanket of gray cotton', audio: 'la-niebla-envolvia', tip: 'This simile uses "como" (like). The imperfect tense "envolvía" creates a continuous, atmospheric image — the fog was wrapping around the town slowly, persistently.' },
    { spanish: 'El arco del personaje muestra su transformación a lo largo de la historia', pronunciation: 'ehl AHR-koh dehl pehr-soh-NAH-heh MWEHS-trah soo trahns-fohr-mah-see-OHN ah loh LAHR-goh deh lah ees-TOH-ree-ah', english: 'The character arc shows their transformation throughout the story', audio: 'el-arco-del-personaje', tip: '"Arco del personaje" (character arc) is essential writing vocabulary. The word "arco" evokes the visual image of a curve — the character\'s journey from beginning to end.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'narrative-techniques', label: 'Narrative Techniques' },
    { id: 'descriptive-writing', label: 'Descriptive Writing' },
    { id: 'dialogue-craft', label: 'Dialogue Craft' },
    { id: 'story-structure', label: 'Story Structure' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'writing-sorting', label: 'Writing Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'story-weaver', label: 'Story Weaver' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'narrative-techniques',
      title: 'Narrative Techniques — Técnicas Narrativas',
      description: 'The storyteller\'s toolkit: point of view, time manipulation, and narrative voice.',
      tabs: [
        { label: 'Point of View', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'narrative-techniques').slice(0, 6) },
        { label: 'Time & Structure', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'narrative-techniques').slice(6) },
      ],
    },
    {
      id: 'descriptive-writing',
      title: 'Descriptive Writing — Escritura Descriptiva',
      description: 'Painting with words: sensory language that makes scenes come alive.',
      tabs: [
        { label: 'Nature & Setting', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'descriptive-writing').slice(0, 6) },
        { label: 'Atmosphere & Detail', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'descriptive-writing').slice(6) },
      ],
    },
    {
      id: 'dialogue-craft',
      title: 'Dialogue Craft — El Arte del Diálogo',
      description: 'How characters speak reveals who they are: tone, subtext, and emotional weight.',
      tabs: [
        { label: 'Emotion & Voice', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'dialogue-craft').slice(0, 6) },
        { label: 'Tension & Subtext', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'dialogue-craft').slice(6) },
      ],
    },
    {
      id: 'story-structure',
      title: 'Story Structure — Estructura Narrativa',
      description: 'The architecture of stories: from exposition to resolution, conflict to transformation.',
      tabs: [
        { label: 'Core Structure', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'story-structure').slice(0, 6) },
        { label: 'Advanced Elements', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'story-structure').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Imperfect Tense in Description',
      content: 'Descriptive writing in Spanish relies heavily on the imperfect tense: "se extendía" (stretched), "acariciaba" (caressed), "envolvía" (enveloped), "murmuraba" (murmured). The imperfect creates continuous, atmospheric images — it\'s the tense of setting and mood. The preterite breaks in for action: "De pronto, un trueno ROMPIÓ el silencio."',
      example: 'El río murmuraba (imperfect = background) → De pronto se desbordó (preterite = action)',
      reviewFrom: 'L5.1',
    },
    {
      title: 'Dialogue Tags Beyond "Dijo"',
      content: 'Great writers use varied speech tags: suspiró, murmuró, exclamó, confesó, suplicó, tartamudeó, gritó, interrumpió, mintió. Each carries emotional weight and eliminates the need for adverbs. Instead of "dijo tristemente" (said sadly), write "suspiró" (sighed). The verb IS the emotion.',
      example: 'murmuró = murmured (intimate) | exclamó = exclaimed (surprise) | suplicó = pleaded (desperation)',
    },
    {
      title: 'Similes and Metaphors in Spanish',
      content: 'Spanish uses "como" for similes: "como un manto de algodón" (like a blanket of cotton). Metaphors are direct: "Su rostro era un mapa de arrugas" (Her face was a map of wrinkles). The imperfect subjunctive creates beautiful hypothetical comparisons: "como si el mundo hubiera dejado de respirar" (as if the world had stopped breathing).',
      example: 'Simile: como un pájaro | Metaphor: era un mapa | Subjunctive simile: como si hubiera...',
      reviewFrom: 'L6.2',
    },
    {
      title: 'Reading Aloud: The Writer\'s Secret',
      content: 'The best Spanish-language writers — García Márquez, Borges, Allende — all emphasized reading their prose aloud. Spanish has a natural musicality that only reveals itself when spoken. Listen for rhythm: long sentences that build tension, short ones that break it. "El silencio era ensordecedor." Five words. Maximum impact.',
      example: 'Long: "El paisaje se extendía hasta donde alcanzaba la vista, vasto e inmutable." | Short: "Entonces lo vio."',
    },
  ],

  flashcardGroups: [
    {
      key: 'narrative',
      label: 'Narrative Techniques',
      audioKeys: ['el-narrador-en-primera', 'el-flashback-o-analepsis', 'el-foreshadowing-o-prolepsis', 'el-flujo-de-consciencia', 'el-monologo-interior', 'el-punto-de-vista', 'el-narrador-omnisciente', 'el-narrador-no-fiable'],
    },
    {
      key: 'descriptive',
      label: 'Descriptive Writing',
      audioKeys: ['el-paisaje-se-extendia', 'una-brisa-tenue', 'el-silencio-era-ensordecedor', 'la-luz-se-filtraba', 'el-aire-olia', 'las-calles-adoquinadas', 'la-niebla-envolvia', 'el-rio-murmuraba'],
    },
    {
      key: 'structure',
      label: 'Story Structure',
      audioKeys: ['el-planteamiento-establece', 'el-nudo-es-donde', 'el-climax-es-el-momento', 'el-desenlace-resuelve', 'el-conflicto-interno', 'el-arco-del-personaje', 'el-giro-argumental', 'la-tension-dramatica'],
    },
  ],

  matchPairs: [
    { left: 'El planteamiento', right: 'Introduces world and characters' },
    { left: 'El nudo', right: 'Conflict develops and tensions rise' },
    { left: 'El clímax', right: 'Moment of maximum tension' },
    { left: 'El desenlace', right: 'Conflicts are resolved' },
    { left: 'El flashback', right: 'Jump to an earlier time' },
    { left: 'El narrador no fiable', right: 'Deliberately misleading voice' },
    { left: 'El monólogo interior', right: 'Character\'s unspoken thoughts' },
    { left: 'El giro argumental', right: 'Unexpected plot twist' },
  ],
  matchLabels: { left: 'Concepto Narrativo', right: 'Definition' },

  sortActivities: [
    {
      title: 'Technique or Structure?',
      instruction: 'Is this a narrative technique or a story structure element?',
      buckets: ['Technique 🔧', 'Structure 🏗️'],
      items: [
        { text: 'Flashback / Analepsis', bucket: 'Technique 🔧' },
        { text: 'Narrador no fiable', bucket: 'Technique 🔧' },
        { text: 'Flujo de consciencia', bucket: 'Technique 🔧' },
        { text: 'Metaficción', bucket: 'Technique 🔧' },
        { text: 'El planteamiento', bucket: 'Structure 🏗️' },
        { text: 'El clímax', bucket: 'Structure 🏗️' },
        { text: 'El desenlace', bucket: 'Structure 🏗️' },
        { text: 'El arco del personaje', bucket: 'Structure 🏗️' },
      ],
    },
    {
      title: 'Show or Tell?',
      instruction: 'Does this phrase SHOW (descriptive/vivid) or TELL (direct/informational)?',
      buckets: ['Show 🎨', 'Tell 📋'],
      items: [
        { text: 'Una brisa tenue acariciaba los campos', bucket: 'Show 🎨' },
        { text: 'Su rostro era un mapa de arrugas', bucket: 'Show 🎨' },
        { text: 'La niebla envolvía el pueblo', bucket: 'Show 🎨' },
        { text: '—murmuró entre dientes', bucket: 'Show 🎨' },
        { text: 'El planteamiento establece el mundo', bucket: 'Tell 📋' },
        { text: 'El clímax es el momento de tensión', bucket: 'Tell 📋' },
        { text: 'La elipsis omite eventos', bucket: 'Tell 📋' },
        { text: 'El antagonista no siempre es un villano', bucket: 'Tell 📋' },
      ],
    },
  ],
  sortSectionId: 'writing-sorting',
  sortTitle: 'Writing Sorting',

  dialogues: [
    {
      id: 'dialogue-workshop-oaxaca',
      title: 'Creative Writing Workshop — Oaxaca',
      location: 'Oaxaca',
      lines: [
        { speaker: 'Profesora Ruiz', text: 'Bienvenidos al taller de escritura creativa. Hoy trabajaremos con la técnica del narrador no fiable. ¿Alguien puede definirlo?', audio: '/audio/L7.7/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Es un narrador que nos engaña deliberadamente sobre los hechos. El lector descubre la verdad solo al final.', audio: '/audio/L7.7/phrases/d1-line2.mp3' },
        { speaker: 'Profesora Ruiz', text: 'Exacto. Piensen en un personaje que cuenta su versión de los hechos, pero oculta información crucial. ¿Qué efecto tiene en el lector?', audio: '/audio/L7.7/phrases/d1-line3.mp3' },
        { speaker: 'Marta', text: 'Crea un giro argumental que sorprende al lector al cambiar todo el rumbo de la trama. Es como releer la historia con ojos nuevos.', audio: '/audio/L7.7/phrases/d1-line4.mp3', annotations: [{ phrase: 'giro argumental', fromLesson: 'L7.7', note: 'Plot twist: a sudden, unexpected change in the story\'s direction' }] },
        { speaker: 'Profesora Ruiz', text: 'Perfecto. Ahora quiero que escriban una escena de tres párrafos. Primer párrafo: planteamiento con descripción sensorial.', audio: '/audio/L7.7/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: '¿Puedo usar el flujo de consciencia? Quiero que los pensamientos del personaje se mezclen con la descripción del lugar.', audio: '/audio/L7.7/phrases/d1-line6.mp3' },
        { speaker: 'Profesora Ruiz', text: 'Claro. Recuerden: el flujo de consciencia captura los pensamientos desordenados. No necesitan comas perfectas ni lógica lineal.', audio: '/audio/L7.7/phrases/d1-line7.mp3' },
        { speaker: 'Marta', text: 'Yo quiero empezar con una imagen: "El silencio era ensordecedor, como si el mundo hubiera dejado de respirar."', audio: '/audio/L7.7/phrases/d1-line8.mp3' },
        { speaker: 'Profesora Ruiz', text: '¡Hermoso! Esa es una paradoja descriptiva — "silencio ensordecedor." Usen los cinco sentidos: no solo lo que se ve, sino lo que se oye, huele, toca y saborea.', audio: '/audio/L7.7/phrases/d1-line9.mp3' },
        { speaker: 'Diego', text: 'Tengo un problema con el diálogo. Todo suena igual, como si todos los personajes fueran la misma persona.', audio: '/audio/L7.7/phrases/d1-line10.mp3' },
        { speaker: 'Profesora Ruiz', text: 'Cada personaje debe tener una voz única. Uno "murmura entre dientes," otro "exclama con ironía." La acción del diálogo revela el carácter.', audio: '/audio/L7.7/phrases/d1-line11.mp3' },
        { speaker: 'Marta', text: 'Y el subtext, ¿no? Lo que el personaje NO dice es tan importante como lo que dice.', audio: '/audio/L7.7/phrases/d1-line12.mp3' },
        { speaker: 'Profesora Ruiz', text: 'Exacto. Un personaje que "confesó en voz baja, como quien entrega un secreto peligroso" — ahí está el subtexto. La forma de hablar es el mensaje.', audio: '/audio/L7.7/phrases/d1-line13.mp3' },
        { speaker: 'Diego', text: 'Entiendo. El arco del personaje muestra su transformación. Si el diálogo no cambia con el personaje, la historia no evoluciona.', audio: '/audio/L7.7/phrases/d1-line14.mp3' },
        { speaker: 'Profesora Ruiz', text: 'Brillante. Recuerden: toda gran historia tiene un tema subyacente que da profundidad universal. Escriban con el corazón, editen con la cabeza.', audio: '/audio/L7.7/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-editing-madrid',
      title: 'Book Editing Session — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Editor Guzmán', text: 'He leído tu manuscrito completo, Ana. La historia es poderosa, pero necesitamos hablar de estructura. El nudo se extiende demasiado.', audio: '/audio/L7.7/phrases/d2-line1.mp3' },
        { speaker: 'Ana', text: 'Sé que el nudo es largo. Pero necesito ese tiempo para desarrollar la relación entre los dos protagonistas.', audio: '/audio/L7.7/phrases/d2-line2.mp3' },
        { speaker: 'Editor Guzmán', text: 'Entiendo, pero el lector pierde la tensión dramática. Propongo usar elipsis narrativa — omitir las escenas repetitivas y saltar a los momentos clave.', audio: '/audio/L7.7/phrases/d2-line3.mp3', annotations: [{ phrase: 'elipsis narrativa', fromLesson: 'L7.7', note: 'Skipping over events to accelerate pacing and maintain tension' }] },
        { speaker: 'Ana', text: '¿Y si uso flashbacks en vez de narrar todo linealmente? Puedo revelar la relación a través de recuerdos mientras la trama principal avanza.', audio: '/audio/L7.7/phrases/d2-line4.mp3' },
        { speaker: 'Editor Guzmán', text: '¡Eso es! El tiempo no lineal puede ser tu mejor aliado. Desordena la cronología para generar sorpresa.', audio: '/audio/L7.7/phrases/d2-line5.mp3' },
        { speaker: 'Ana', text: 'Ahora, sobre el clímax. ¿Crees que el lector lo ve venir?', audio: '/audio/L7.7/phrases/d2-line6.mp3' },
        { speaker: 'Editor Guzmán', text: 'Sí, necesitas más foreshadowing sutil. Planta pistas pequeñas que solo cobren sentido en la relectura. La prolepsis bien hecha es invisible la primera vez.', audio: '/audio/L7.7/phrases/d2-line7.mp3' },
        { speaker: 'Ana', text: 'Tu descripción del mercado de Oaxaca es magistral: "Los colores explotaban como fuegos artificiales de tela y especias." Eso es pura poesía.', audio: '/audio/L7.7/phrases/d2-line8.mp3' },
        { speaker: 'Editor Guzmán', text: 'Gracias. Pero en el capítulo siete, el diálogo entre María y su padre suena forzado. "Dijo" aparece quince veces en dos páginas.', audio: '/audio/L7.7/phrases/d2-line9.mp3' },
        { speaker: 'Ana', text: 'Tienes razón. Necesito más variedad: "murmuró entre dientes," "suspiró antes de responder," "respondió con calma glacial."', audio: '/audio/L7.7/phrases/d2-line10.mp3' },
        { speaker: 'Editor Guzmán', text: 'Perfecto. Y el desenlace — ¿va a ser abierto o cerrado?', audio: '/audio/L7.7/phrases/d2-line11.mp3' },
        { speaker: 'Ana', text: 'Quiero una resolución abierta. Que el lector imagine el final. Pero necesito que sea satisfactoria, no frustrante.', audio: '/audio/L7.7/phrases/d2-line12.mp3' },
        { speaker: 'Editor Guzmán', text: 'Entonces cierra los arcos emocionales pero deja abierta la trama externa. El conflicto interno del personaje se resuelve, pero su viaje continúa.', audio: '/audio/L7.7/phrases/d2-line13.mp3' },
        { speaker: 'Ana', text: 'Eso es exactamente lo que quiero. Un epílogo que ofrezca un vistazo al futuro sin cerrarlo todo.', audio: '/audio/L7.7/phrases/d2-line14.mp3' },
        { speaker: 'Editor Guzmán', text: 'Me encanta tu voz como escritora, Ana. Esta novela va a ser especial. Ahora — a reescribir el segundo acto.', audio: '/audio/L7.7/phrases/d2-line15.mp3' },
        { speaker: 'Ana', text: 'A reescribir. Como dice la frase: "Escribir es reescribir." Nos vemos la próxima semana con la versión revisada.', audio: '/audio/L7.7/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Participate in a creative writing workshop exploring unreliable narrators in Oaxaca, then sit in on a book editing session discussing story structure and pacing in Madrid.',

  culturalNotes: [
    {
      title: 'El Boom Latinoamericano',
      content: 'The Latin American Literary Boom of the 1960s-70s revolutionized world literature. Writers like Gabriel García Márquez (Colombia), Julio Cortázar (Argentina), Mario Vargas Llosa (Peru), and Carlos Fuentes (Mexico) introduced techniques like magical realism, non-linear narratives, and metafiction to global audiences. García Márquez\'s "Cien años de soledad" remains the gold standard for combining oral storytelling traditions with experimental narrative techniques. This movement proved that Spanish-language literature could be both deeply local and universally resonant.',
    },
    {
      title: 'La Tradición Oral Hispana',
      content: 'Before written literature, Spanish-speaking cultures had rich oral storytelling traditions. In Mexico, the "cuentacuentos" (storyteller) tradition traces back to pre-Columbian times. In the Caribbean, "los cuentos de camino" (road stories) were passed from generation to generation. In Spain, the "romance" — a narrative poem sung by traveling bards — kept history alive for centuries. These oral traditions valued rhythm, repetition, and communal participation — elements that still influence written Spanish literature today.',
    },
    {
      title: 'Talleres Literarios en el Mundo Hispano',
      content: 'Creative writing workshops (talleres literarios) have a unique history in the Spanish-speaking world. In Mexico, Juan Rulfo\'s and Augusto Monterroso\'s workshops at UNAM shaped generations of writers. In Colombia, García Márquez founded the Fundación para un Nuevo Periodismo Iberoamericano (FNPI), blending journalism with creative narrative. Buenos Aires has more literary workshops per capita than almost any city in the world. These talleres emphasize reading aloud, communal critique, and the craft of revision — "escribir es reescribir" (writing is rewriting).',
    },
  ],
  culturalGradient: 'from-amber-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El narrador no fiable" deliberately:', options: ['Tells the truth', 'Deceives the reader', 'Describes settings', 'Speaks in dialogue'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El ___ o analepsis nos transporta a un momento anterior" (flashback)', answer: 'flashback' },
    { id: 3, type: 'tf', text: '"El flujo de consciencia" captures a character\'s disordered, stream-like thoughts.', answer: true },
    { id: 4, type: 'mc', text: '"El planteamiento" in story structure refers to:', options: ['The climax', 'The exposition/setup', 'The resolution', 'The epilogue'], answer: 1 },
    { id: 5, type: 'mc', text: '"—murmuró entre dientes" is an example of:', options: ['Descriptive writing', 'Narrative technique', 'A dialogue tag', 'Story structure'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "El ___ es el momento de máxima tensión" (climax)', answer: 'clímax' },
    { id: 7, type: 'mc', text: '"El paisaje se extendía hasta donde alcanzaba la vista" uses which tense?', options: ['Preterite', 'Imperfect', 'Future', 'Conditional'], answer: 1 },
    { id: 8, type: 'tf', text: '"La metaficción" is when a story talks about itself as fiction.', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, what technique does Diego want to use?', options: ['Flashback', 'Stream of consciousness', 'Unreliable narrator', 'Epilogue'], answer: 1 },
    { id: 10, type: 'mc', text: '"El arco del personaje" refers to:', options: ['The setting', 'The character\'s transformation', 'The plot structure', 'The narrative voice'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "El ___ resuelve los conflictos y cierra los arcos" (denouement)', answer: 'desenlace' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does Editor Guzmán suggest for the long middle section?', options: ['Add more descriptions', 'Use narrative ellipsis', 'Change the narrator', 'Delete the chapter'], answer: 1 },
    { id: 13, type: 'tf', text: '"El silencio era ensordecedor" is an oxymoron — a contradiction used for literary effect.', answer: true },
    { id: 14, type: 'mc', text: '"El foreshadowing" or "prolepsis" does what?', options: ['Looks backward', 'Hints at future events', 'Describes the present', 'Creates dialogue'], answer: 1 },
    { id: 15, type: 'mc', text: 'The phrase "Su rostro era un mapa de arrugas" is a:', options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], answer: 1 },
  ],

  audioBase: '/audio/L7.7/phrases',

  uniqueActivity: {
    id: 'StoryWeaverL77',
    sectionId: 'story-weaver',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'narrative-techniques': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'descriptive-writing': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'dialogue-craft': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'story-structure': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'matching-game': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'writing-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'story-weaver': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
