import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Fashion Industry (12) ===
  { spanish: 'La pasarela del desfile fue iluminada con luces doradas', english: 'The runway of the fashion show was illuminated with golden lights', pronunciation: 'lah pah-sah-REH-lah dehl dehs-FEE-leh fweh ee-loo-mee-NAH-dah kohn LOO-sehs doh-RAH-dahs', category: 'fashion-industry', audio: 'pasarela-desfile-luces' },
  { spanish: 'El desfile de moda presentó la nueva colección de otoño', english: 'The fashion show presented the new fall collection', pronunciation: 'ehl dehs-FEE-leh deh MOH-dah preh-sehn-TOH lah NWEH-bah koh-lehk-see-OHN deh oh-TOH-nyoh', category: 'fashion-industry', audio: 'desfile-moda-otono' },
  { spanish: 'La colección primavera-verano destaca los colores vibrantes', english: 'The spring-summer collection highlights vibrant colors', pronunciation: 'lah koh-lehk-see-OHN pree-mah-BEH-rah beh-RAH-noh dehs-TAH-kah lohs koh-LOH-rehs bee-BRAHN-tehs', category: 'fashion-industry', audio: 'coleccion-primavera-verano' },
  { spanish: 'El diseñador de alta costura presentó vestidos impresionantes', english: 'The haute couture designer presented stunning dresses', pronunciation: 'ehl dee-seh-NYAH-dohr deh AHL-tah kohs-TOO-rah preh-sehn-TOH behs-TEE-dohs eem-preh-see-oh-NAHN-tehs', category: 'fashion-industry', audio: 'disenador-alta-costura' },
  { spanish: 'La prenda de vestir más vendida fue la chaqueta de cuero', english: 'The best-selling garment was the leather jacket', pronunciation: 'lah PREHN-dah deh behs-TEER mahs behn-DEE-dah fweh lah chah-KEH-tah deh KWEH-roh', category: 'fashion-industry', audio: 'prenda-vestir-chaqueta' },
  { spanish: 'El patronaje define la forma y las proporciones de cada pieza', english: 'Pattern making defines the shape and proportions of each piece', pronunciation: 'ehl pah-troh-NAH-heh deh-FEE-neh lah FOHR-mah ee lahs proh-pohr-see-OH-nehs deh KAH-dah pee-EH-sah', category: 'fashion-industry', audio: 'patronaje-forma-proporciones' },
  { spanish: 'Las modelos ensayan la caminata antes del desfile', english: 'The models rehearse the walk before the fashion show', pronunciation: 'lahs moh-DEH-lohs ehn-SAH-yahn lah kah-mee-NAH-tah AHN-tehs dehl dehs-FEE-leh', category: 'fashion-industry', audio: 'modelos-caminata-desfile' },
  { spanish: 'La casa de moda lanzó su marca de accesorios', english: 'The fashion house launched its accessories brand', pronunciation: 'lah KAH-sah deh MOH-dah lahn-SOH soo MAHR-kah deh ahk-seh-SOH-ree-ohs', category: 'fashion-industry', audio: 'casa-moda-accesorios' },
  { spanish: 'El estilista seleccionó los looks para la sesión fotográfica', english: 'The stylist selected the looks for the photo shoot', pronunciation: 'ehl ehs-tee-LEES-tah seh-lehk-see-oh-NOH lohs looks PAH-rah lah seh-see-OHN foh-toh-GRAH-fee-kah', category: 'fashion-industry', audio: 'estilista-looks-sesion' },
  { spanish: 'La industria de la moda genera millones de empleos', english: 'The fashion industry generates millions of jobs', pronunciation: 'lah een-DOOS-tree-ah deh lah MOH-dah heh-NEH-rah mee-YOH-nehs deh ehm-PLEH-ohs', category: 'fashion-industry', audio: 'industria-moda-empleos' },
  { spanish: 'El showroom exhibe las prendas para compradores mayoristas', english: 'The showroom displays garments for wholesale buyers', pronunciation: 'ehl show-room ehk-SEE-beh lahs PREHN-dahs PAH-rah kohm-prah-DOH-rehs mah-yoh-REES-tahs', category: 'fashion-industry', audio: 'showroom-prendas-mayoristas' },
  { spanish: 'La semana de la moda reúne a diseñadores de todo el mundo', english: 'Fashion week brings together designers from around the world', pronunciation: 'lah seh-MAH-nah deh lah MOH-dah reh-OO-neh ah dee-seh-nyah-DOH-rehs deh TOH-doh ehl MOON-doh', category: 'fashion-industry', audio: 'semana-moda-disenadores' },

  // === Textiles & Materials (12) ===
  { spanish: 'La seda natural tiene un brillo único e inconfundible', english: 'Natural silk has a unique and unmistakable shine', pronunciation: 'lah SEH-dah nah-too-RAHL tee-EH-neh oon BREE-yoh OO-nee-koh eh een-kohn-foon-DEE-bleh', category: 'textiles-materials', audio: 'seda-natural-brillo' },
  { spanish: 'El algodón orgánico se cultiva sin pesticidas químicos', english: 'Organic cotton is grown without chemical pesticides', pronunciation: 'ehl ahl-goh-DOHN ohr-GAH-nee-koh seh kool-TEE-bah seen pehs-tee-SEE-dahs KEE-mee-kohs', category: 'textiles-materials', audio: 'algodon-organico-pesticidas' },
  { spanish: 'El terciopelo aporta una textura lujosa a cualquier prenda', english: 'Velvet adds a luxurious texture to any garment', pronunciation: 'ehl tehr-see-oh-PEH-loh ah-POHR-tah OO-nah tehks-TOO-rah loo-HOH-sah ah kwahl-kee-EHR PREHN-dah', category: 'textiles-materials', audio: 'terciopelo-textura-lujosa' },
  { spanish: 'La lana merino es suave y regula la temperatura corporal', english: 'Merino wool is soft and regulates body temperature', pronunciation: 'lah LAH-nah meh-REE-noh ehs SWAH-beh ee reh-GOO-lah lah tehm-peh-rah-TOO-rah kohr-poh-RAHL', category: 'textiles-materials', audio: 'lana-merino-temperatura' },
  { spanish: 'El cuero vegano se fabrica con materiales sintéticos sostenibles', english: 'Vegan leather is made from sustainable synthetic materials', pronunciation: 'ehl KWEH-roh beh-GAH-noh seh fah-BREE-kah kohn mah-teh-ree-AH-lehs seen-TEH-tee-kohs sohs-teh-NEE-blehs', category: 'textiles-materials', audio: 'cuero-vegano-sinteticos' },
  { spanish: 'La tela estampada lleva un diseño floral muy colorido', english: 'The printed fabric features a very colorful floral design', pronunciation: 'lah TEH-lah ehs-tahm-PAH-dah YEH-bah oon dee-SEH-nyoh floh-RAHL mooy koh-loh-REE-doh', category: 'textiles-materials', audio: 'tela-estampada-floral' },
  { spanish: 'El tejido de punto se estira y adapta al cuerpo', english: 'Knit fabric stretches and adapts to the body', pronunciation: 'ehl teh-HEE-doh deh POON-toh seh ehs-TREE-rah ee ah-DAHP-tah ahl KWEHR-poh', category: 'textiles-materials', audio: 'tejido-punto-cuerpo' },
  { spanish: 'El lino es ideal para climas cálidos por su frescura', english: 'Linen is ideal for warm climates due to its coolness', pronunciation: 'ehl LEE-noh ehs ee-deh-AHL PAH-rah KLEE-mahs KAH-lee-dohs pohr soo frehs-KOO-rah', category: 'textiles-materials', audio: 'lino-climas-calidos' },
  { spanish: 'La mezclilla se usa para fabricar los jeans más resistentes', english: 'Denim is used to make the most resistant jeans', pronunciation: 'lah mehs-KLEE-yah seh OO-sah PAH-rah fah-bree-KAHR lohs jeens mahs reh-sees-TEHN-tehs', category: 'textiles-materials', audio: 'mezclilla-jeans-resistentes' },
  { spanish: 'El encaje artesanal requiere horas de trabajo manual', english: 'Handmade lace requires hours of manual work', pronunciation: 'ehl ehn-KAH-seh ahr-teh-sah-NAHL reh-kee-EH-reh OH-rahs deh trah-BAH-hoh mah-noo-AHL', category: 'textiles-materials', audio: 'encaje-artesanal-manual' },
  { spanish: 'La fibra de bambú es antibacteriana y ecológica', english: 'Bamboo fiber is antibacterial and ecological', pronunciation: 'lah FEE-brah deh bahm-BOO ehs ahn-tee-bahk-teh-ree-AH-nah ee eh-koh-LOH-hee-kah', category: 'textiles-materials', audio: 'fibra-bambu-ecologica' },
  { spanish: 'El nailon reciclado se obtiene de redes de pesca descartadas', english: 'Recycled nylon is obtained from discarded fishing nets', pronunciation: 'ehl nah-ee-LOHN reh-see-KLAH-doh seh ohb-tee-EH-neh deh RREH-dehs deh PEHS-kah dehs-kahr-TAH-dahs', category: 'textiles-materials', audio: 'nailon-reciclado-pesca' },

  // === Design Process (12) ===
  { spanish: 'El boceto inicial captura la esencia de la colección', english: 'The initial sketch captures the essence of the collection', pronunciation: 'ehl boh-SEH-toh ee-nee-see-AHL kahp-TOO-rah lah eh-SEHN-see-ah deh lah koh-lehk-see-OHN', category: 'design-process', audio: 'boceto-esencia-coleccion' },
  { spanish: 'El moodboard inspira la dirección creativa del proyecto', english: 'The moodboard inspires the creative direction of the project', pronunciation: 'ehl mood-bohrd eens-PEE-rah lah dee-rehk-see-OHN kreh-ah-TEE-bah dehl proh-YEHK-toh', category: 'design-process', audio: 'moodboard-direccion-creativa' },
  { spanish: 'La paleta de colores define la identidad de la marca', english: 'The color palette defines the brand identity', pronunciation: 'lah pah-LEH-tah deh koh-LOH-rehs deh-FEE-neh lah ee-dehn-tee-DAHD deh lah MAHR-kah', category: 'design-process', audio: 'paleta-colores-identidad' },
  { spanish: 'El corte al bies crea una caída elegante y fluida', english: 'The bias cut creates an elegant and fluid drape', pronunciation: 'ehl KOHR-teh ahl bee-EHS KREH-ah OO-nah kah-EE-dah eh-leh-GAHN-teh ee FLOO-ee-dah', category: 'design-process', audio: 'corte-bies-elegante' },
  { spanish: 'Las costuras invisibles dan un acabado profesional', english: 'Invisible seams give a professional finish', pronunciation: 'lahs kohs-TOO-rahs een-bee-SEE-blehs dahn oon ah-kah-BAH-doh proh-feh-see-oh-NAHL', category: 'design-process', audio: 'costuras-invisibles-profesional' },
  { spanish: 'El acabado artesanal distingue la alta costura del prêt-à-porter', english: 'The artisanal finish distinguishes haute couture from ready-to-wear', pronunciation: 'ehl ah-kah-BAH-doh ahr-teh-sah-NAHL dees-TEEN-geh lah AHL-tah kohs-TOO-rah dehl preht-ah-pohr-TEH', category: 'design-process', audio: 'acabado-artesanal-costura' },
  { spanish: 'La prueba de fitting ajusta la prenda al cuerpo de la modelo', english: 'The fitting trial adjusts the garment to the model\'s body', pronunciation: 'lah PRWEH-bah deh FEE-teeng ah-HOOS-tah lah PREHN-dah ahl KWEHR-poh deh lah moh-DEH-loh', category: 'design-process', audio: 'prueba-fitting-modelo' },
  { spanish: 'El prototipo pasa por varias revisiones antes de producción', english: 'The prototype goes through several revisions before production', pronunciation: 'ehl proh-toh-TEE-poh PAH-sah pohr BAH-ree-ahs reh-bee-see-OH-nehs AHN-tehs deh proh-dook-see-OHN', category: 'design-process', audio: 'prototipo-revisiones-produccion' },
  { spanish: 'La silueta define la forma general de la prenda en el cuerpo', english: 'The silhouette defines the overall shape of the garment on the body', pronunciation: 'lah see-loo-EH-tah deh-FEE-neh lah FOHR-mah heh-neh-RAHL deh lah PREHN-dah ehn ehl KWEHR-poh', category: 'design-process', audio: 'silueta-forma-prenda' },
  { spanish: 'El drapeado crea pliegues artísticos en la tela', english: 'Draping creates artistic folds in the fabric', pronunciation: 'ehl drah-peh-AH-doh KREH-ah plee-EH-gehs ahr-TEES-tee-kohs ehn lah TEH-lah', category: 'design-process', audio: 'drapeado-pliegues-tela' },
  { spanish: 'La confección industrial permite producir en grandes cantidades', english: 'Industrial manufacturing allows production in large quantities', pronunciation: 'lah kohn-fehk-see-OHN een-doos-tree-AHL pehr-MEE-teh proh-doo-SEER ehn GRAHN-dehs kahn-tee-DAH-dehs', category: 'design-process', audio: 'confeccion-industrial-cantidades' },
  { spanish: 'El estampado digital ofrece diseños ilimitados sin pantallas', english: 'Digital printing offers unlimited designs without screens', pronunciation: 'ehl ehs-tahm-PAH-doh dee-hee-TAHL oh-FREH-seh dee-SEH-nyohs ee-lee-mee-TAH-dohs seen pahn-TAH-yahs', category: 'design-process', audio: 'estampado-digital-ilimitados' },

  // === Sustainable Fashion (12) ===
  { spanish: 'La moda circular busca eliminar los residuos textiles', english: 'Circular fashion seeks to eliminate textile waste', pronunciation: 'lah MOH-dah seer-koo-LAHR BOOS-kah eh-lee-mee-NAHR lohs reh-SEE-dwos tehks-TEE-lehs', category: 'sustainable-fashion', audio: 'moda-circular-residuos' },
  { spanish: 'El comercio justo garantiza condiciones laborales dignas', english: 'Fair trade guarantees dignified working conditions', pronunciation: 'ehl koh-MEHR-see-oh HOOS-toh gah-rahn-TEE-sah kohn-dee-see-OH-nehs lah-boh-RAH-lehs DEEG-nahs', category: 'sustainable-fashion', audio: 'comercio-justo-laborales' },
  { spanish: 'La huella hídrica de la industria textil es alarmante', english: 'The water footprint of the textile industry is alarming', pronunciation: 'lah HWEH-yah EE-dree-kah deh lah een-DOOS-tree-ah tehks-TEEL ehs ah-lahr-MAHN-teh', category: 'sustainable-fashion', audio: 'huella-hidrica-textil' },
  { spanish: 'El upcycling transforma prendas viejas en diseños nuevos', english: 'Upcycling transforms old garments into new designs', pronunciation: 'ehl up-SAI-kleeng trahns-FOHR-mah PREHN-dahs bee-EH-hahs ehn dee-SEH-nyohs NWEH-bohs', category: 'sustainable-fashion', audio: 'upcycling-prendas-nuevos' },
  { spanish: 'La trazabilidad de la cadena muestra el origen de cada material', english: 'Supply chain traceability shows the origin of each material', pronunciation: 'lah trah-sah-bee-lee-DAHD deh lah kah-DEH-nah MWEHS-trah ehl oh-REE-hehn deh KAH-dah mah-teh-ree-AHL', category: 'sustainable-fashion', audio: 'trazabilidad-cadena-origen' },
  { spanish: 'El fast fashion produce ropa barata a un costo ambiental enorme', english: 'Fast fashion produces cheap clothing at an enormous environmental cost', pronunciation: 'ehl fahst FAH-shohn proh-DOO-seh RROH-pah bah-RAH-tah ah oon KOHS-toh ahm-bee-ehn-TAHL eh-NOHR-meh', category: 'sustainable-fashion', audio: 'fast-fashion-costo-ambiental' },
  { spanish: 'El slow fashion prioriza la calidad sobre la cantidad', english: 'Slow fashion prioritizes quality over quantity', pronunciation: 'ehl slow FAH-shohn pree-oh-ree-SAH lah kah-lee-DAHD SOH-breh lah kahn-tee-DAHD', category: 'sustainable-fashion', audio: 'slow-fashion-calidad' },
  { spanish: 'La ropa de segunda mano reduce el desperdicio textil', english: 'Second-hand clothing reduces textile waste', pronunciation: 'lah RROH-pah deh seh-GOON-dah MAH-noh reh-DOO-seh ehl dehs-pehr-DEE-see-oh tehks-TEEL', category: 'sustainable-fashion', audio: 'segunda-mano-desperdicio' },
  { spanish: 'Las fibras biodegradables se descomponen sin contaminar', english: 'Biodegradable fibers decompose without contaminating', pronunciation: 'lahs FEE-brahs bee-oh-deh-grah-DAH-blehs seh dehs-kohm-POH-nehn seen kohn-tah-mee-NAHR', category: 'sustainable-fashion', audio: 'fibras-biodegradables-contaminar' },
  { spanish: 'El teñido natural usa pigmentos de plantas y minerales', english: 'Natural dyeing uses pigments from plants and minerals', pronunciation: 'ehl teh-NYEE-doh nah-too-RAHL OO-sah peeg-MEHN-tohs deh PLAHN-tahs ee mee-neh-RAH-lehs', category: 'sustainable-fashion', audio: 'tenido-natural-pigmentos' },
  { spanish: 'La producción local reduce la huella de carbono del transporte', english: 'Local production reduces the carbon footprint of transportation', pronunciation: 'lah proh-dook-see-OHN loh-KAHL reh-DOO-seh lah HWEH-yah deh kahr-BOH-noh dehl trahns-POHR-teh', category: 'sustainable-fashion', audio: 'produccion-local-carbono' },
  { spanish: 'El alquiler de ropa es una alternativa al consumismo', english: 'Clothing rental is an alternative to consumerism', pronunciation: 'ehl ahl-kee-LEHR deh RROH-pah ehs OO-nah ahl-tehr-nah-TEE-bah ahl kohn-soo-MEES-moh', category: 'sustainable-fashion', audio: 'alquiler-ropa-consumismo' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L92PhraseByAudio = phraseByAudio

// === STYLE CURATOR (unique activity) ===

export interface StyleCuratorChallenge {
  description: string
  english: string
  correctConcept: string
  options: string[]
}

export const STYLE_CURATOR_CHALLENGES: StyleCuratorChallenge[] = [
  {
    description: 'Una técnica de corte diagonal sobre la tela que crea una caída elegante y fluida, siguiendo el hilo de la tela en ángulo.',
    english: 'A diagonal cutting technique on fabric that creates an elegant and fluid drape, following the grain at an angle.',
    correctConcept: 'el corte al bies',
    options: ['el corte al bies', 'el patronaje', 'el drapeado', 'las costuras invisibles'],
  },
  {
    description: 'Este movimiento busca eliminar los residuos textiles reutilizando, reciclando y rediseñando prendas en un ciclo continuo.',
    english: 'This movement seeks to eliminate textile waste by reusing, recycling, and redesigning garments in a continuous cycle.',
    correctConcept: 'la moda circular',
    options: ['la moda circular', 'el slow fashion', 'el upcycling', 'el comercio justo'],
  },
  {
    description: 'Un tejido con superficie suave y aterciopelada, históricamente asociado con la realeza y utilizado en vestidos de gala.',
    english: 'A fabric with a soft, velvety surface, historically associated with royalty and used in formal gowns.',
    correctConcept: 'el terciopelo',
    options: ['el terciopelo', 'la seda', 'el encaje', 'la lana merino'],
  },
  {
    description: 'La práctica de transformar prendas usadas o descartadas en nuevos diseños de mayor valor, sin destruir el material original.',
    english: 'The practice of transforming used or discarded garments into new designs of higher value, without destroying the original material.',
    correctConcept: 'el upcycling',
    options: ['el upcycling', 'la moda circular', 'el reciclaje', 'la confección industrial'],
  },
  {
    description: 'El proceso de crear los moldes de papel que determinan la forma, proporciones y tallas de una prenda de vestir.',
    english: 'The process of creating paper patterns that determine the shape, proportions, and sizes of a garment.',
    correctConcept: 'el patronaje',
    options: ['el patronaje', 'el boceto', 'la silueta', 'el prototipo'],
  },
  {
    description: 'Un sistema que permite conocer el origen de cada material y las condiciones laborales en cada etapa de producción de una prenda.',
    english: 'A system that allows knowing the origin of each material and working conditions at every stage of a garment\'s production.',
    correctConcept: 'la trazabilidad de la cadena',
    options: ['la trazabilidad de la cadena', 'el comercio justo', 'la certificación orgánica', 'la huella hídrica'],
  },
  {
    description: 'Un tablero visual con imágenes, texturas, colores y referencias que guían la dirección creativa de una colección de moda.',
    english: 'A visual board with images, textures, colors, and references that guide the creative direction of a fashion collection.',
    correctConcept: 'el moodboard',
    options: ['el moodboard', 'la paleta de colores', 'el boceto', 'el lookbook'],
  },
]

// === LESSON DATA ===

export const L92Data: LessonData = {
  id: 'L9.2',
  hero: {
    lessonId: 'L9.2',
    title: 'Fashion & Design',
    subtitle: 'From sketch to runway, the language of style',
    description: 'Dive into the vocabulary of the fashion world — from haute couture studios to sustainable fashion movements. Learn about textiles, the design process, runway culture, and the growing revolution of conscious fashion. Express your style in Spanish!',
    image: '/images/L9.2/L9.2.jpg',
    gradient: 'from-rose-800/65 via-pink-700/55 to-purple-700/65',
    accentColor: 'rose-200',
  },

  objectives: [
    { icon: '👗', title: 'Fashion Industry', desc: 'Navigate pasarela, desfile, alta costura, patronaje, prenda de vestir, and the business of fashion.' },
    { icon: '🧵', title: 'Textiles & Materials', desc: 'Identify seda, algodón orgánico, terciopelo, lana merino, cuero vegano, and innovative fibers.' },
    { icon: '✏️', title: 'Design Process', desc: 'Master boceto, moodboard, paleta de colores, corte al bies, costuras invisibles, acabado artesanal.' },
    { icon: '♻️', title: 'Sustainable Fashion', desc: 'Discuss moda circular, comercio justo, upcycling, trazabilidad, fast fashion vs slow fashion.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L2.6', label: 'Shopping & Clothing', detail: 'L2.6 taught basic shopping and clothing vocabulary. Now expand to the professional world of fashion design and the industry behind it.' },
    { fromLesson: 'L8.4', label: 'Gastronomy & Criticism', detail: 'L8.4 introduced the language of critique and artisanal craft. Apply that vocabulary to fashion criticism and design appreciation.' },
    { fromLesson: 'L5.5', label: 'Professional Spanish', detail: 'L5.5 covered professional contexts. Use that foundation for business conversations in the fashion industry.' },
  ],

  sectionTransitions: [
    { afterSection: 'fashion-industry', text: 'You know the industry! Now let\'s explore the fabrics and materials behind every garment.' },
    { afterSection: 'textiles-materials', text: 'Textiles mastered! Let\'s dive into the creative design process.' },
    { afterSection: 'design-process', text: 'From sketch to garment! Now let\'s talk about fashion\'s environmental impact.' },
    { afterSection: 'dialogues', text: 'Great fashion conversations! Let\'s explore the cultural side.' },
    { afterSection: 'cultural', text: 'Now test your skills as a Style Curator!' },
    { afterSection: 'style-curator', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Mi estilo personal es...', english: 'My personal style is...' },
    { spanish: 'El material que más me gusta es...', english: 'The material I like most is...' },
    { spanish: 'Mi diseñador favorito es...', english: 'My favorite designer is...' },
    { spanish: 'Prefiero la moda... (rápida/lenta)', english: 'I prefer... fashion (fast/slow)' },
    { spanish: 'La prenda que más uso es...', english: 'The garment I wear most is...' },
    { spanish: 'Compro ropa de segunda mano porque...', english: 'I buy second-hand clothes because...' },
  ],

  pronunciationChallenges: [
    { spanish: 'El diseñador presentó su colección primavera-verano', pronunciation: 'ehl dee-seh-NYAH-dohr preh-sehn-TOH soo koh-lehk-see-OHN pree-mah-BEH-rah beh-RAH-noh', english: 'The designer presented his spring-summer collection', audio: 'coleccion-primavera-verano', tip: '"Diseñador" has the ñ sound (like "ny" in "canyon"): dise-NYA-dor. "Colección" stresses the last syllable: colecCIÓN.' },
    { spanish: 'El terciopelo aporta una textura lujosa a la prenda', pronunciation: 'ehl tehr-see-oh-PEH-loh ah-POHR-tah OO-nah tehks-TOO-rah loo-HOH-sah ah lah PREHN-dah', english: 'Velvet adds a luxurious texture to the garment', audio: 'terciopelo-textura-lujosa', tip: '"Terciopelo" — stress on -PE-: tercioPElo. It\'s a four-syllable word. "Lujosa" means luxurious: luJOsa.' },
    { spanish: 'La moda circular elimina los residuos textiles', pronunciation: 'lah MOH-dah seer-koo-LAHR eh-lee-MEE-nah lohs reh-SEE-dwos tehks-TEE-lehs', english: 'Circular fashion eliminates textile waste', audio: 'moda-circular-residuos', tip: '"Circular" is stressed on the last syllable: circuLAR. "Residuos" = reh-SEE-dwos, with the "du" creating a "dw" sound.' },
    { spanish: 'El corte al bies crea una caída elegante', pronunciation: 'ehl KOHR-teh ahl bee-EHS KREH-ah OO-nah kah-EE-dah eh-leh-GAHN-teh', english: 'The bias cut creates an elegant drape', audio: 'corte-bies-elegante', tip: '"Bies" (bias) is pronounced bee-EHS, two syllables. "Caída" means drape/fall: kah-EE-dah, stress on the í.' },
    { spanish: 'El patronaje define las proporciones de cada pieza', pronunciation: 'ehl pah-troh-NAH-heh deh-FEE-neh lahs proh-pohr-see-OH-nehs deh KAH-dah pee-EH-sah', english: 'Pattern making defines the proportions of each piece', audio: 'patronaje-forma-proporciones', tip: '"Patronaje" — the "j" sounds like a strong "h": patro-NA-he. This -aje suffix appears in many technical terms: reciclaje, montaje, embalaje.' },
    { spanish: 'La trazabilidad garantiza transparencia en la cadena de producción', pronunciation: 'lah trah-sah-bee-lee-DAHD gah-rahn-TEE-sah trahns-pah-REHN-see-ah ehn lah kah-DEH-nah deh proh-dook-see-OHN', english: 'Traceability guarantees transparency in the production chain', audio: 'trazabilidad-cadena-origen', tip: '"Trazabilidad" is a long word — break it down: tra-za-bi-li-DAD. The stress is on the last syllable. All -dad words are feminine: LA trazabilidad.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'fashion-industry', label: 'Fashion Industry' },
    { id: 'textiles-materials', label: 'Textiles & Materials' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'sustainable-fashion', label: 'Sustainable Fashion' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'style-curator', label: 'Style Curator' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'fashion-industry',
      title: 'Fashion Industry — La Industria de la Moda',
      description: 'The world of fashion shows, haute couture, and the business behind the runway. From designers to stylists, learn the professional vocabulary.',
      tabs: [
        { label: 'Runway & Shows', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'fashion-industry').slice(0, 6) },
        { label: 'Business & Roles', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'fashion-industry').slice(6) },
      ],
    },
    {
      id: 'textiles-materials',
      title: 'Textiles & Materials — Textiles y Materiales',
      description: 'From silk to vegan leather, explore the fabrics and fibers that make fashion possible — both traditional and innovative.',
      tabs: [
        { label: 'Classic Fabrics', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'textiles-materials').slice(0, 6) },
        { label: 'Innovative & Eco', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'textiles-materials').slice(6) },
      ],
    },
    {
      id: 'design-process',
      title: 'Design Process — Proceso de Diseño',
      description: 'Follow a garment from initial sketch to final product. The creative and technical vocabulary of fashion design.',
      tabs: [
        { label: 'Creative Phase', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'design-process').slice(0, 6) },
        { label: 'Technical & Production', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'design-process').slice(6) },
      ],
    },
    {
      id: 'sustainable-fashion',
      title: 'Sustainable Fashion — Moda Sostenible',
      description: 'The growing movement for ethical and environmentally conscious fashion. From circular economy to fair trade.',
      tabs: [
        { label: 'Ethics & Impact', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'sustainable-fashion').slice(0, 6) },
        { label: 'Solutions & Alternatives', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'sustainable-fashion').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Fashion Loanwords in Spanish',
      content: 'Spanish fashion vocabulary borrows many words from French and English: "prêt-à-porter" (ready-to-wear), "moodboard," "showroom," "fitting," "upcycling." These loanwords are often pronounced with Spanish phonetics — "fitting" becomes FEE-teeng, "showroom" becomes show-ROOM. When unsure, use the Spanish pronunciation!',
      example: 'Fitting → FEE-teeng | Showroom → show-ROOM | Moodboard → mood-BOHRD',
    },
    {
      title: 'The -aje Suffix in Fashion',
      content: 'The suffix -aje (from French -age) appears in many fashion and technical terms. It\'s always masculine (EL patronaje) and stressed on the second-to-last syllable: patro-NA-je, recicLA-je, monta-JE. The "j" sounds like a strong English "h."',
      example: 'El patronaje, el reciclaje, el montaje, el embalaje, el drenaje',
    },
    {
      title: 'Compound Fashion Terms',
      content: 'Fashion loves compound expressions: "alta costura" (haute couture), "prenda de vestir" (garment), "colección primavera-verano" (spring-summer collection), "corte al bies" (bias cut). Practice each word separately, then flow them together naturally.',
      example: 'Alta costura | Prenda de vestir | Corte al bies | Comercio justo',
      reviewFrom: 'L5.5',
    },
    {
      title: 'Textile Terms: Natural vs. Synthetic',
      content: 'Natural fabrics tend to have short, classic names: seda (silk), lana (wool), lino (linen). Synthetic and technical terms are longer: poliéster, nailon reciclado, fibra biodegradable. The adjective always comes AFTER the noun: algodón orgánico (not orgánico algodón).',
      example: 'Seda natural, algodón orgánico, cuero vegano, fibra biodegradable, nailon reciclado',
    },
  ],

  flashcardGroups: [
    {
      key: 'fashion-industry',
      label: 'Fashion Industry',
      audioKeys: ['pasarela-desfile-luces', 'desfile-moda-otono', 'coleccion-primavera-verano', 'disenador-alta-costura', 'prenda-vestir-chaqueta', 'patronaje-forma-proporciones', 'modelos-caminata-desfile', 'casa-moda-accesorios', 'estilista-looks-sesion', 'industria-moda-empleos', 'showroom-prendas-mayoristas', 'semana-moda-disenadores'],
    },
    {
      key: 'textiles-materials',
      label: 'Textiles & Materials',
      audioKeys: ['seda-natural-brillo', 'algodon-organico-pesticidas', 'terciopelo-textura-lujosa', 'lana-merino-temperatura', 'cuero-vegano-sinteticos', 'tela-estampada-floral', 'tejido-punto-cuerpo', 'lino-climas-calidos', 'mezclilla-jeans-resistentes', 'encaje-artesanal-manual', 'fibra-bambu-ecologica', 'nailon-reciclado-pesca'],
    },
    {
      key: 'design-sustainable',
      label: 'Design Process & Sustainable Fashion',
      audioKeys: ['boceto-esencia-coleccion', 'moodboard-direccion-creativa', 'paleta-colores-identidad', 'corte-bies-elegante', 'moda-circular-residuos', 'comercio-justo-laborales', 'upcycling-prendas-nuevos', 'slow-fashion-calidad'],
    },
  ],

  matchPairs: [
    { left: 'La pasarela', right: 'The runway' },
    { left: 'El terciopelo', right: 'Velvet' },
    { left: 'El boceto', right: 'The sketch' },
    { left: 'La moda circular', right: 'Circular fashion' },
    { left: 'El patronaje', right: 'Pattern making' },
    { left: 'El algodón orgánico', right: 'Organic cotton' },
    { left: 'El upcycling', right: 'Upcycling' },
    { left: 'La alta costura', right: 'Haute couture' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Natural vs. Synthetic Materials',
      instruction: 'Is this material natural or synthetic/processed?',
      buckets: ['Natural 🌿', 'Synthetic/Processed 🔬'],
      items: [
        { text: 'La seda', bucket: 'Natural 🌿' },
        { text: 'El algodón orgánico', bucket: 'Natural 🌿' },
        { text: 'La lana merino', bucket: 'Natural 🌿' },
        { text: 'El lino', bucket: 'Natural 🌿' },
        { text: 'El cuero vegano', bucket: 'Synthetic/Processed 🔬' },
        { text: 'El nailon reciclado', bucket: 'Synthetic/Processed 🔬' },
        { text: 'La fibra de bambú', bucket: 'Synthetic/Processed 🔬' },
        { text: 'El poliéster', bucket: 'Synthetic/Processed 🔬' },
      ],
    },
    {
      title: 'Fast Fashion vs. Slow Fashion',
      instruction: 'Is this concept associated with fast fashion or slow fashion?',
      buckets: ['Fast Fashion ⚡', 'Slow Fashion 🌱'],
      items: [
        { text: 'Producción masiva', bucket: 'Fast Fashion ⚡' },
        { text: 'Ropa desechable', bucket: 'Fast Fashion ⚡' },
        { text: 'Precios muy bajos', bucket: 'Fast Fashion ⚡' },
        { text: 'Gran huella hídrica', bucket: 'Fast Fashion ⚡' },
        { text: 'Comercio justo', bucket: 'Slow Fashion 🌱' },
        { text: 'Acabado artesanal', bucket: 'Slow Fashion 🌱' },
        { text: 'Trazabilidad de la cadena', bucket: 'Slow Fashion 🌱' },
        { text: 'Moda circular', bucket: 'Slow Fashion 🌱' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-studio-cdmx',
      title: 'Fashion Designer Studio — Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Lucía', text: 'Bienvenida, Mariana. Pasa al taller. Quiero mostrarte los bocetos de la nueva colección.', audio: '/audio/L9.2/phrases/d1-line1.mp3' },
        { speaker: 'Mariana', text: '¡Qué emoción! ¿Cuál es la inspiración para esta colección primavera-verano?', audio: '/audio/L9.2/phrases/d1-line2.mp3' },
        { speaker: 'Lucía', text: 'Los textiles indígenas de Oaxaca. Mira el moodboard: colores tierra, bordados geométricos, materiales naturales.', audio: '/audio/L9.2/phrases/d1-line3.mp3' },
        { speaker: 'Mariana', text: 'Es hermoso. ¿Y cómo trabajas con las comunidades artesanas?', audio: '/audio/L9.2/phrases/d1-line4.mp3' },
        { speaker: 'Lucía', text: 'Tenemos acuerdos de comercio justo. Ellas tejen las telas y reciben crédito como codiseñadoras.', audio: '/audio/L9.2/phrases/d1-line5.mp3', annotations: [{ phrase: 'comercio justo', fromLesson: 'L5.5', note: 'Business ethics vocabulary from L5.5' }] },
        { speaker: 'Mariana', text: '¿Qué materiales estás usando? Veo que la paleta de colores es muy cálida.', audio: '/audio/L9.2/phrases/d1-line6.mp3' },
        { speaker: 'Lucía', text: 'Algodón orgánico para las prendas base, seda natural para los vestidos de noche, y lino para las piezas casuales.', audio: '/audio/L9.2/phrases/d1-line7.mp3' },
        { speaker: 'Mariana', text: '¿Nada de materiales sintéticos?', audio: '/audio/L9.2/phrases/d1-line8.mp3' },
        { speaker: 'Lucía', text: 'Solo nailon reciclado para los forros. Queremos que toda la colección sea trazable desde el origen de cada fibra.', audio: '/audio/L9.2/phrases/d1-line9.mp3' },
        { speaker: 'Mariana', text: 'Impresionante. ¿Y el patronaje? Veo cortes muy innovadores.', audio: '/audio/L9.2/phrases/d1-line10.mp3' },
        { speaker: 'Lucía', text: 'Sí, estoy experimentando con el corte al bies para crear siluetas fluidas. Sin costuras visibles.', audio: '/audio/L9.2/phrases/d1-line11.mp3' },
        { speaker: 'Mariana', text: '¿Cuándo es el desfile?', audio: '/audio/L9.2/phrases/d1-line12.mp3' },
        { speaker: 'Lucía', text: 'En tres semanas, durante la Semana de la Moda de la Ciudad de México. Todavía estamos en las pruebas de fitting.', audio: '/audio/L9.2/phrases/d1-line13.mp3' },
        { speaker: 'Mariana', text: '¡Va a ser espectacular! La moda mexicana está conquistando el mundo.', audio: '/audio/L9.2/phrases/d1-line14.mp3' },
        { speaker: 'Lucía', text: 'Gracias, Mariana. Mi sueño es demostrar que la moda puede ser bella, sostenible y justa al mismo tiempo.', audio: '/audio/L9.2/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-backstage-madrid',
      title: 'Fashion Week Backstage — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Pablo', text: '¡Vamos, equipo! Faltan veinte minutos para que salgan las modelos a la pasarela.', audio: '/audio/L9.2/phrases/d2-line1.mp3' },
        { speaker: 'Sofía', text: 'Pablo, hay un problema con el vestido de terciopelo. La costura del hombro se abrió.', audio: '/audio/L9.2/phrases/d2-line2.mp3' },
        { speaker: 'Pablo', text: '¿Puedes repararlo? Necesitamos costuras invisibles, no se puede notar nada en la pasarela.', audio: '/audio/L9.2/phrases/d2-line3.mp3' },
        { speaker: 'Sofía', text: 'Dame cinco minutos. Este terciopelo es delicado pero tengo la aguja correcta.', audio: '/audio/L9.2/phrases/d2-line4.mp3' },
        { speaker: 'Pablo', text: 'Perfecto. ¿Y el estilista ya seleccionó los accesorios para el look final?', audio: '/audio/L9.2/phrases/d2-line5.mp3', annotations: [{ phrase: 'accesorios', fromLesson: 'L2.6', note: 'Shopping vocabulary from L2.6' }] },
        { speaker: 'Sofía', text: 'Sí, decidió los aretes de plata artesanal que complementan el acabado de la colección.', audio: '/audio/L9.2/phrases/d2-line6.mp3' },
        { speaker: 'Pablo', text: 'Bien. Las modelos ya ensayaron la caminata esta mañana. ¿El orden de salida está confirmado?', audio: '/audio/L9.2/phrases/d2-line7.mp3' },
        { speaker: 'Sofía', text: 'Confirmado. Empezamos con las prendas casuales de lino, luego las de seda, y cerramos con la alta costura.', audio: '/audio/L9.2/phrases/d2-line8.mp3' },
        { speaker: 'Pablo', text: '¿Ya llegaron los periodistas de moda? Vi que Vogue España confirmó su asistencia.', audio: '/audio/L9.2/phrases/d2-line9.mp3' },
        { speaker: 'Sofía', text: 'Sí, y también están las compradoras de El Corte Inglés. Si les gusta, podríamos entrar en sus tiendas.', audio: '/audio/L9.2/phrases/d2-line10.mp3' },
        { speaker: 'Pablo', text: '¿Cómo está el showroom? ¿Tienen los lookbooks listos para los compradores mayoristas?', audio: '/audio/L9.2/phrases/d2-line11.mp3' },
        { speaker: 'Sofía', text: 'Todo listo. Incluimos la información de trazabilidad de cada prenda, como nos pidieron.', audio: '/audio/L9.2/phrases/d2-line12.mp3' },
        { speaker: 'Pablo', text: 'Excelente. Esta colección demuestra que España puede liderar el slow fashion en Europa.', audio: '/audio/L9.2/phrases/d2-line13.mp3' },
        { speaker: 'Sofía', text: '¡Listo el vestido! La costura quedó perfecta. Nadie notará la reparación.', audio: '/audio/L9.2/phrases/d2-line14.mp3' },
        { speaker: 'Pablo', text: '¡Eres una artista, Sofía! Bueno, equipo... ¡es hora del desfile! ¡Suerte a todos!', audio: '/audio/L9.2/phrases/d2-line15.mp3' },
        { speaker: 'Sofía', text: '¡Que comience la magia de la moda!', audio: '/audio/L9.2/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Visit a sustainable fashion design studio in Mexico City and experience the backstage rush before a fashion show in Madrid.',

  culturalNotes: [
    {
      title: 'Diseñadores Latinoamericanos en el Mundo',
      content: 'Latin American fashion designers are making waves globally. Carolina Herrera (Venezuela) and Oscar de la Renta (Dominican Republic) opened doors decades ago. Today, a new generation leads: Johanna Ortiz (Colombia) is known for tropical-inspired designs with natural fabrics; Carla Fernández (Mexico) collaborates with indigenous artisans to create modern pieces using ancestral techniques; and Ágatha Ruiz de la Prada (Spain/Latin America) is recognized for her bold, colorful designs. The phrase "diseño latinoamericano" now carries global prestige, especially in sustainable fashion where the region\'s artisanal traditions align perfectly with the slow fashion movement.',
    },
    {
      title: 'Textiles Indígenas: Arte que se Viste',
      content: 'Indigenous textiles across Latin America represent centuries of artistic tradition. In Guatemala, the "huipil" (traditional blouse) uses backstrap loom weaving with symbols representing the weaver\'s community and cosmovision. In Peru, alpaca wool textiles from communities in the Andes use natural dyeing techniques passed down for generations. In Mexico, the "rebozo" and Oaxacan embroidery are iconic. A growing ethical debate surrounds "apropiación cultural" (cultural appropriation) when international brands copy these designs without credit or compensation. Many designers now practice "diseño colaborativo" (collaborative design), partnering directly with artisan communities under fair trade agreements.',
    },
    {
      title: 'La Revolución de la Moda Sostenible',
      content: 'Latin America and Spain are at the forefront of the sustainable fashion revolution. In Spain, the movement "Moda Sostenible España" promotes local designers who use organic and recycled materials. In Colombia, "Inexmoda" (the Institute for Exports and Fashion) now requires sustainability reports from participating brands. In Argentina, the "feria americana" (thrift store/swap meet) culture has made second-hand shopping fashionable and mainstream. The phrase "moda con conciencia" (fashion with conscience) has become a rallying cry, and concepts like "armario cápsula" (capsule wardrobe) — owning fewer, better pieces — are gaining popularity across the Spanish-speaking world.',
    },
  ],
  culturalGradient: 'from-rose-50 to-pink-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La pasarela" refers to:', options: ['A fashion magazine', 'The runway', 'A sewing machine', 'A fabric store'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El ___ orgánico se cultiva sin pesticidas" (cotton)', answer: 'algodón' },
    { id: 3, type: 'mc', text: '"El patronaje" is the process of:', options: ['Choosing colors', 'Creating patterns', 'Selecting fabrics', 'Styling models'], answer: 1 },
    { id: 4, type: 'tf', text: 'El corte al bies crea una caída elegante y fluida en la tela.', answer: true },
    { id: 5, type: 'mc', text: '"La moda circular" aims to:', options: ['Create round designs', 'Eliminate textile waste', 'Increase production speed', 'Use only circular patterns'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "El ___ transforma prendas viejas en diseños nuevos" (upcycling)', answer: 'upcycling' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, what inspires Lucía\'s collection?', options: ['Japanese art', 'Oaxacan indigenous textiles', 'European architecture', 'African prints'], answer: 1 },
    { id: 8, type: 'mc', text: '"El terciopelo" is:', options: ['Silk', 'Linen', 'Velvet', 'Denim'], answer: 2 },
    { id: 9, type: 'tf', text: 'El comercio justo garantiza condiciones laborales dignas para los trabajadores.', answer: true },
    { id: 10, type: 'mc', text: '"El boceto" is:', options: ['The final product', 'The initial sketch', 'The fabric', 'The runway'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ de colores define la identidad de la marca" (palette)', answer: 'paleta' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what problem does Sofía fix backstage?', options: ['A broken zipper', 'A torn velvet dress seam', 'A missing button', 'Wrong shoes'], answer: 1 },
    { id: 13, type: 'mc', text: '"Fast fashion" in Spanish is described as producing:', options: ['Quality over quantity', 'Expensive artisanal pieces', 'Cheap clothing at high environmental cost', 'Only natural materials'], answer: 2 },
    { id: 14, type: 'tf', text: 'Carolina Herrera is a Venezuelan fashion designer who became internationally famous.', answer: true },
    { id: 15, type: 'mc', text: '"La trazabilidad de la cadena" refers to:', options: ['A type of necklace', 'Fashion trend tracking', 'Supply chain traceability', 'The runway walking path'], answer: 2 },
  ],

  audioBase: '/audio/L9.2/phrases',

  uniqueActivity: {
    id: 'StyleCuratorL92',
    sectionId: 'style-curator',
    sectionColor: 'bg-rose-50/40',
    sectionBorder: 'border-rose-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'fashion-industry': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'textiles-materials': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'design-process': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'sustainable-fashion': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'style-curator': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
