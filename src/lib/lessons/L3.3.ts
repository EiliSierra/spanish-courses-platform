import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Devices (10) ===
  { spanish: 'El teléfono celular', english: 'The cell phone', pronunciation: 'ehl teh-LEH-foh-noh seh-loo-LAHR', category: 'devices', audio: 'el-telefono-celular' },
  { spanish: 'La computadora portátil', english: 'The laptop', pronunciation: 'lah kohm-poo-tah-DOH-rah pohr-TAH-teel', category: 'devices', audio: 'la-computadora-portatil' },
  { spanish: 'La tableta', english: 'The tablet', pronunciation: 'lah tah-BLEH-tah', category: 'devices', audio: 'la-tableta' },
  { spanish: 'Los audífonos', english: 'The headphones', pronunciation: 'lohs ow-DEE-foh-nohs', category: 'devices', audio: 'los-audifonos' },
  { spanish: 'La pantalla', english: 'The screen', pronunciation: 'lah pahn-TAH-yah', category: 'devices', audio: 'la-pantalla' },
  { spanish: 'El cargador', english: 'The charger', pronunciation: 'ehl kahr-gah-DOHR', category: 'devices', audio: 'el-cargador' },
  { spanish: 'La batería está baja', english: 'The battery is low', pronunciation: 'lah bah-teh-REE-ah ehs-TAH BAH-hah', category: 'devices', audio: 'la-bateria-esta-baja' },
  { spanish: 'La cámara del teléfono', english: 'The phone camera', pronunciation: 'lah KAH-mah-rah dehl teh-LEH-foh-noh', category: 'devices', audio: 'la-camara-del-telefono' },
  { spanish: 'El teclado', english: 'The keyboard', pronunciation: 'ehl teh-KLAH-doh', category: 'devices', audio: 'el-teclado' },
  { spanish: 'El ratón inalámbrico', english: 'The wireless mouse', pronunciation: 'ehl rrah-TOHN ee-nah-LAHM-bree-koh', category: 'devices', audio: 'el-raton-inalambrico' },

  // === Social Media (10) ===
  { spanish: 'Las redes sociales', english: 'Social media / Social networks', pronunciation: 'lahs RREH-dehs soh-see-AH-lehs', category: 'social-media', audio: 'las-redes-sociales' },
  { spanish: 'Publicar una foto', english: 'To post a photo', pronunciation: 'poo-blee-KAHR OO-nah FOH-toh', category: 'social-media', audio: 'publicar-una-foto' },
  { spanish: 'Dar un like', english: 'To give a like', pronunciation: 'dahr oon LAHYK', category: 'social-media', audio: 'dar-un-like' },
  { spanish: 'Compartir un video', english: 'To share a video', pronunciation: 'kohm-pahr-TEER oon BEE-deh-oh', category: 'social-media', audio: 'compartir-un-video' },
  { spanish: 'Seguir a alguien', english: 'To follow someone', pronunciation: 'seh-GEER ah AHL-gee-ehn', category: 'social-media', audio: 'seguir-a-alguien' },
  { spanish: 'Los seguidores', english: 'The followers', pronunciation: 'lohs seh-gee-DOH-rehs', category: 'social-media', audio: 'los-seguidores' },
  { spanish: 'Un mensaje directo', english: 'A direct message', pronunciation: 'oon mehn-SAH-heh dee-REHK-toh', category: 'social-media', audio: 'un-mensaje-directo' },
  { spanish: 'Hacer una historia', english: 'To make a story (post)', pronunciation: 'ah-SEHR OO-nah ees-TOH-ree-ah', category: 'social-media', audio: 'hacer-una-historia' },
  { spanish: 'Etiquetar a un amigo', english: 'To tag a friend', pronunciation: 'eh-tee-keh-TAHR ah oon ah-MEE-goh', category: 'social-media', audio: 'etiquetar-a-un-amigo' },
  { spanish: 'Dejar un comentario', english: 'To leave a comment', pronunciation: 'deh-HAHR oon koh-mehn-TAH-ree-oh', category: 'social-media', audio: 'dejar-un-comentario' },

  // === Actions (10) ===
  { spanish: 'Descargar una aplicación', english: 'To download an app', pronunciation: 'dehs-kahr-GAHR OO-nah ah-plee-kah-see-OHN', category: 'actions', audio: 'descargar-una-aplicacion' },
  { spanish: 'Conectarse al wifi', english: 'To connect to wifi', pronunciation: 'koh-nehk-TAHR-seh ahl WAI-fai', category: 'actions', audio: 'conectarse-al-wifi' },
  { spanish: 'Buscar en internet', english: 'To search on the internet', pronunciation: 'boos-KAHR ehn een-tehr-NEHT', category: 'actions', audio: 'buscar-en-internet' },
  { spanish: 'Enviar un correo electrónico', english: 'To send an email', pronunciation: 'ehn-bee-AHR oon koh-RREH-oh eh-lehk-TROH-nee-koh', category: 'actions', audio: 'enviar-un-correo-electronico' },
  { spanish: 'Tomar una captura de pantalla', english: 'To take a screenshot', pronunciation: 'toh-MAHR OO-nah kahp-TOO-rah deh pahn-TAH-yah', category: 'actions', audio: 'tomar-una-captura-de-pantalla' },
  { spanish: 'Actualizar la aplicación', english: 'To update the app', pronunciation: 'ahk-too-ah-lee-SAHR lah ah-plee-kah-see-OHN', category: 'actions', audio: 'actualizar-la-aplicacion' },
  { spanish: 'Iniciar sesión', english: 'To log in', pronunciation: 'ee-nee-see-AHR seh-see-OHN', category: 'actions', audio: 'iniciar-sesion' },
  { spanish: 'Cerrar sesión', english: 'To log out', pronunciation: 'seh-RRAHR seh-see-OHN', category: 'actions', audio: 'cerrar-sesion' },
  { spanish: 'Cambiar la contraseña', english: 'To change the password', pronunciation: 'kahm-bee-AHR lah kohn-trah-SEH-nyah', category: 'actions', audio: 'cambiar-la-contrasena' },
  { spanish: 'Guardar el archivo', english: 'To save the file', pronunciation: 'gwahr-DAHR ehl ahr-CHEE-boh', category: 'actions', audio: 'guardar-el-archivo' },

  // === Problems (8) ===
  { spanish: 'No tengo señal', english: "I don't have signal", pronunciation: 'noh TEHN-goh seh-NYAHL', category: 'problems', audio: 'no-tengo-senal' },
  { spanish: 'El internet está lento', english: 'The internet is slow', pronunciation: 'ehl een-tehr-NEHT ehs-TAH LEHN-toh', category: 'problems', audio: 'el-internet-esta-lento' },
  { spanish: 'Se me olvidó la contraseña', english: 'I forgot my password', pronunciation: 'seh meh ohl-bee-DOH lah kohn-trah-SEH-nyah', category: 'problems', audio: 'se-me-olvido-la-contrasena' },
  { spanish: 'Mi teléfono se congeló', english: 'My phone froze', pronunciation: 'mee teh-LEH-foh-noh seh kohn-heh-LOH', category: 'problems', audio: 'mi-telefono-se-congelo' },
  { spanish: 'No puedo abrir la aplicación', english: "I can't open the app", pronunciation: 'noh PWEH-doh ah-BREER lah ah-plee-kah-see-OHN', category: 'problems', audio: 'no-puedo-abrir-la-aplicacion' },
  { spanish: 'Necesito reiniciar el teléfono', english: 'I need to restart the phone', pronunciation: 'neh-seh-SEE-toh rreh-ee-nee-see-AHR ehl teh-LEH-foh-noh', category: 'problems', audio: 'necesito-reiniciar-el-telefono' },
  { spanish: 'No hay suficiente memoria', english: "There isn't enough storage", pronunciation: 'noh ahy soo-fee-see-EHN-teh meh-MOH-ree-ah', category: 'problems', audio: 'no-hay-suficiente-memoria' },
  { spanish: 'La aplicación se cerró sola', english: 'The app closed by itself', pronunciation: 'lah ah-plee-kah-see-OHN seh seh-RROH SOH-lah', category: 'problems', audio: 'la-aplicacion-se-cerro-sola' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L33PhraseByAudio = phraseByAudio

// === APP NAVIGATOR (unique activity) ===

export interface AppNavigatorChallenge {
  instruction: string
  english: string
  correctAction: string
  options: string[]
}

export const APPNAVIGATOR_CHALLENGES: AppNavigatorChallenge[] = [
  {
    instruction: 'Para compartir esta foto, toca el botón de la flecha.',
    english: 'To share this photo, tap the arrow button.',
    correctAction: 'Tap the share button',
    options: ['Tap the share button', 'Tap the delete button', 'Tap the download button', 'Tap the edit button'],
  },
  {
    instruction: 'Inicia sesión con tu correo electrónico y tu contraseña.',
    english: 'Log in with your email and your password.',
    correctAction: 'Enter email and password, then log in',
    options: ['Enter email and password, then log in', 'Create a new account', 'Reset the password', 'Close the app'],
  },
  {
    instruction: 'Busca el restaurante en el mapa y guárdalo en tus favoritos.',
    english: 'Search for the restaurant on the map and save it to your favorites.',
    correctAction: 'Search and tap the star/favorite icon',
    options: ['Search and tap the star/favorite icon', 'Search and share the location', 'Search and call the restaurant', 'Search and leave a review'],
  },
  {
    instruction: 'Descarga la última actualización antes de usar la aplicación.',
    english: 'Download the latest update before using the app.',
    correctAction: 'Go to app store and tap Update',
    options: ['Go to app store and tap Update', 'Delete and reinstall the app', 'Restart the phone', 'Clear the app cache'],
  },
  {
    instruction: 'Etiqueta a tu amigo en la foto y escribe un comentario.',
    english: 'Tag your friend in the photo and write a comment.',
    correctAction: 'Tap the photo, tag friend, then comment',
    options: ['Tap the photo, tag friend, then comment', 'Send the photo as a direct message', 'Share the photo to your story', 'Download the photo'],
  },
  {
    instruction: 'Tu batería está baja. Conecta el cargador y activa el modo de ahorro de energía.',
    english: 'Your battery is low. Connect the charger and turn on power saving mode.',
    correctAction: 'Plug in charger and enable power saving',
    options: ['Plug in charger and enable power saving', 'Turn off the phone completely', 'Close all apps manually', 'Lower the screen brightness only'],
  },
]

// === LESSON DATA ===

export const L33Data: LessonData = {
  id: 'L3.3',
  hero: {
    lessonId: 'L3.3',
    title: 'Technology & Social Media',
    subtitle: 'Navigate the digital world in Spanish',
    description: 'Learn the vocabulary you need for phones, computers, apps, wifi, social media, and everyday tech problems. From posting photos to troubleshooting your device — master technology talk in Spanish!',
    image: '/images/L3.3/L3.3.jpg',
    gradient: 'from-blue-800/65 via-indigo-700/55 to-violet-700/65',
    accentColor: 'blue-200',
  },

  objectives: [
    { icon: '📱', title: 'Devices & Hardware', desc: 'Name phones, laptops, tablets, chargers, keyboards, and screens in Spanish.' },
    { icon: '📲', title: 'Social Media Actions', desc: 'Post, share, follow, comment, tag, and send messages on social platforms.' },
    { icon: '🔧', title: 'Tech Actions', desc: 'Download apps, connect to wifi, log in/out, change passwords, and save files.' },
    { icon: '⚠️', title: 'Tech Problems', desc: 'Describe common issues: no signal, slow internet, frozen phone, forgotten password.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L2.4', label: 'Wifi & Connectivity', detail: 'L2.4 introduced "¿Hay wifi?" and basic connectivity. Now expand to full tech vocabulary.' },
    { fromLesson: 'L2.5', label: 'Airport Technology', detail: 'L2.5 covered boarding passes and screens. Now you\'ll navigate apps and devices.' },
    { fromLesson: 'L2.8', label: 'Work & Office', detail: 'L2.8 taught office vocabulary. Now add the digital tools you use at work every day.' },
  ],

  sectionTransitions: [
    { afterSection: 'devices', text: 'You know your devices! Now let\'s talk about what you do on social media.' },
    { afterSection: 'social-media', text: 'Social media covered! Let\'s learn essential tech actions.' },
    { afterSection: 'actions', text: 'Great tech skills! Now let\'s handle those frustrating tech problems.' },
    { afterSection: 'dialogues', text: 'Awesome tech conversations! Let\'s explore digital culture in Latin America.' },
    { afterSection: 'cultural', text: 'Now navigate an app using only Spanish instructions!' },
    { afterSection: 'app-navigator', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Uso mi teléfono para...', english: 'I use my phone to...' },
    { spanish: 'Mi aplicación favorita es...', english: 'My favorite app is...' },
    { spanish: 'Publico fotos de...', english: 'I post photos of...' },
    { spanish: 'Siempre busco...', english: 'I always search for...' },
    { spanish: 'Me conecto al wifi en...', english: 'I connect to wifi at...' },
    { spanish: 'Mi problema de tecnología más común es...', english: 'My most common tech problem is...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Necesito descargar la aplicación', pronunciation: 'neh-seh-SEE-toh dehs-kahr-GAHR lah ah-plee-kah-see-OHN', english: 'I need to download the app', audio: 'descargar-una-aplicacion', tip: '"Aplicación" has four syllables with the stress on the last one: a-pli-ca-CIÓN. The accent mark tells you to stress -ción.' },
    { spanish: 'Se me olvidó la contraseña', pronunciation: 'seh meh ohl-bee-DOH lah kohn-trah-SEH-nyah', english: 'I forgot my password', audio: 'se-me-olvido-la-contrasena', tip: '"Contraseña" — the Ñ makes "nyah": contra-SE-ña. Don\'t skip the Ñ sound or it becomes a different word!' },
    { spanish: 'Las redes sociales son adictivas', pronunciation: 'lahs RREH-dehs soh-see-AH-lehs sohn ah-deek-TEE-bahs', english: 'Social media is addictive', audio: 'las-redes-sociales', tip: '"Redes" uses a strong rolled RR at the start. "Sociales" — the C before I sounds like S (Latin America) or TH (Spain).' },
    { spanish: 'Mi teléfono se congeló', pronunciation: 'mee teh-LEH-foh-noh seh kohn-heh-LOH', english: 'My phone froze', audio: 'mi-telefono-se-congelo', tip: '"Congeló" — the G before E makes an H sound: con-he-LÓ. Same rule from L1.1: G before E/I = /h/.' },
    { spanish: 'Publica fotos y comparte videos', pronunciation: 'poo-BLEE-kah FOH-tohs ee kohm-PAHR-teh BEE-deh-ohs', english: 'Post photos and share videos', audio: 'publicar-una-foto', tip: '"Video" in Spanish sounds like BEE-deh-oh — the V sounds like B, same as all Spanish V\'s.' },
    { spanish: 'Conectarse al wifi inalámbrico', pronunciation: 'koh-nehk-TAHR-seh ahl WAI-fai ee-nah-LAHM-bree-koh', english: 'To connect to wireless wifi', audio: 'conectarse-al-wifi', tip: '"Inalámbrico" — five syllables: i-na-LÁM-bri-co. The stress is on LÁM. This is a great word to practice syllable rhythm.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'devices', label: 'Devices & Hardware' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'actions', label: 'Tech Actions' },
    { id: 'problems', label: 'Tech Problems' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'tech-sorting', label: 'Tech Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'app-navigator', label: 'App Navigator' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'devices',
      title: 'Devices & Hardware',
      description: 'The gadgets you use every day — phones, laptops, tablets, and accessories.',
      tabs: [
        { label: 'Phone & Tablet', color: 'blue', phrases: PHRASES.filter(p => p.category === 'devices').slice(0, 5) },
        { label: 'Computer & Accessories', color: 'purple', phrases: PHRASES.filter(p => p.category === 'devices').slice(5) },
      ],
    },
    {
      id: 'social-media',
      title: 'Social Media',
      description: 'Post, share, follow, comment — everything you do on social platforms.',
      tabs: [
        { label: 'Posting & Sharing', color: 'rose', phrases: PHRASES.filter(p => p.category === 'social-media').slice(0, 5) },
        { label: 'Connecting & Engaging', color: 'amber', phrases: PHRASES.filter(p => p.category === 'social-media').slice(5) },
      ],
    },
    {
      id: 'actions',
      title: 'Tech Actions',
      description: 'Essential actions — download, connect, search, log in, and manage your digital life.',
      tabs: [
        { label: 'Connect & Search', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'actions').slice(0, 5) },
        { label: 'Manage & Secure', color: 'teal', phrases: PHRASES.filter(p => p.category === 'actions').slice(5) },
      ],
    },
    {
      id: 'problems',
      title: 'Tech Problems',
      description: 'When things go wrong — describe tech issues and ask for help.',
      tabs: [
        { label: 'Signal & Speed', color: 'orange', phrases: PHRASES.filter(p => p.category === 'problems').slice(0, 4) },
        { label: 'Apps & Storage', color: 'rose', phrases: PHRASES.filter(p => p.category === 'problems').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Tech Loanwords — How Spanish Adapts Them',
      content: 'Many tech terms come from English but get a Spanish twist. "Wifi" is pronounced "WAI-fai" (same). "Like" becomes "LAHYK." "Link" becomes "leenk." "Email" can be "correo electrónico" or just "email" (eh-MAIL). "App" can be "aplicación" (formal) or just "app" (informal). Using the Spanish version sounds more natural!',
      example: 'Wifi → wai-fai | Like → lahyk | Email → correo electrónico | App → aplicación',
    },
    {
      title: 'The Ñ in Technology Words',
      content: 'Several tech words use Ñ: "contraseña" (password), "señal" (signal), "diseño" (design). The Ñ produces "ny" — like the "ni" in "onion." It\'s a single consonant, not N+Y. Practice: con-tra-SE-ña, se-ÑAL, di-SE-ño.',
      example: 'Contraseña → kohn-trah-SEH-nyah | Señal → seh-NYAHL | Diseño → dee-SEH-nyoh',
      reviewFrom: 'L1.1',
    },
    {
      title: 'Long Words: Break Them Down',
      content: 'Tech vocabulary has long words that can feel intimidating. The trick: break them into syllables and stress the accented one. "Actualizar" → ac-tua-li-ZAR. "Inalámbrico" → i-na-LÁM-bri-co. "Electrónico" → e-lec-TRÓ-ni-co. Take it syllable by syllable!',
      example: 'Actualizar → ahk-too-ah-lee-SAHR | Inalámbrico → ee-nah-LAHM-bree-koh',
    },
    {
      title: 'The "CC" in Tech Words',
      content: '"Conectar," "acceso," "dirección" — when you see CC, the first C is /k/ and the second follows normal rules. "Acceso" = ak-SEH-soh. "Conectar" only has one C so it\'s simpler: koh-nek-TAHR. "Dirección" = dee-rehk-see-OHN.',
      example: 'Acceso → ahk-SEH-soh | Dirección → dee-rehk-see-OHN | Conectar → koh-nehk-TAHR',
    },
  ],

  flashcardGroups: [
    {
      key: 'devices-social',
      label: 'Devices & Social',
      audioKeys: ['el-telefono-celular', 'la-computadora-portatil', 'la-tableta', 'los-audifonos', 'las-redes-sociales', 'publicar-una-foto', 'compartir-un-video', 'seguir-a-alguien'],
    },
    {
      key: 'actions',
      label: 'Tech Actions',
      audioKeys: ['descargar-una-aplicacion', 'conectarse-al-wifi', 'buscar-en-internet', 'enviar-un-correo-electronico', 'iniciar-sesion', 'cerrar-sesion', 'cambiar-la-contrasena', 'guardar-el-archivo'],
    },
    {
      key: 'problems',
      label: 'Problems & Fixes',
      audioKeys: ['no-tengo-senal', 'el-internet-esta-lento', 'se-me-olvido-la-contrasena', 'mi-telefono-se-congelo', 'no-puedo-abrir-la-aplicacion', 'necesito-reiniciar-el-telefono', 'no-hay-suficiente-memoria', 'la-aplicacion-se-cerro-sola'],
    },
  ],

  matchPairs: [
    { left: 'El teléfono celular', right: 'Cell phone' },
    { left: 'Publicar una foto', right: 'Post a photo' },
    { left: 'Descargar', right: 'Download' },
    { left: 'La contraseña', right: 'Password' },
    { left: 'Las redes sociales', right: 'Social media' },
    { left: 'La pantalla', right: 'Screen' },
    { left: 'Iniciar sesión', right: 'Log in' },
    { left: 'La batería', right: 'Battery' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Device or Action?',
      instruction: 'Is this a physical device or a digital action?',
      buckets: ['Device 📱', 'Action ⚡'],
      items: [
        { text: 'El teléfono celular', bucket: 'Device 📱' },
        { text: 'La computadora portátil', bucket: 'Device 📱' },
        { text: 'El cargador', bucket: 'Device 📱' },
        { text: 'Los audífonos', bucket: 'Device 📱' },
        { text: 'Descargar una aplicación', bucket: 'Action ⚡' },
        { text: 'Iniciar sesión', bucket: 'Action ⚡' },
        { text: 'Publicar una foto', bucket: 'Action ⚡' },
        { text: 'Buscar en internet', bucket: 'Action ⚡' },
      ],
    },
    {
      title: 'Social Media or Tech Problem?',
      instruction: 'Is this a social media activity or a tech problem?',
      buckets: ['Social Media 📲', 'Tech Problem ⚠️'],
      items: [
        { text: 'Publicar una foto', bucket: 'Social Media 📲' },
        { text: 'Seguir a alguien', bucket: 'Social Media 📲' },
        { text: 'Dejar un comentario', bucket: 'Social Media 📲' },
        { text: 'Compartir un video', bucket: 'Social Media 📲' },
        { text: 'No tengo señal', bucket: 'Tech Problem ⚠️' },
        { text: 'El internet está lento', bucket: 'Tech Problem ⚠️' },
        { text: 'Mi teléfono se congeló', bucket: 'Tech Problem ⚠️' },
        { text: 'Se me olvidó la contraseña', bucket: 'Tech Problem ⚠️' },
      ],
    },
  ],
  sortSectionId: 'tech-sorting',
  sortTitle: 'Tech Sorting',

  dialogues: [
    {
      id: 'dialogue-new-phone',
      title: 'Setting Up a New Phone — Mexico City',
      location: 'Ciudad de México',
      lines: [
        { speaker: 'Sofía', text: '¡Mira! Me compré un teléfono nuevo.', audio: '/audio/L3.3/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: '¡Qué bonito! ¿Ya descargaste todas tus aplicaciones?', audio: '/audio/L3.3/phrases/d1-line2.mp3' },
        { speaker: 'Sofía', text: 'Solo algunas. Necesito conectarme al wifi primero.', audio: '/audio/L3.3/phrases/d1-line3.mp3', annotations: [{ phrase: 'wifi', fromLesson: 'L2.4', note: 'Wifi vocabulary from L2.4' }] },
        { speaker: 'Diego', text: 'La contraseña del wifi está en la cocina, en un papelito.', audio: '/audio/L3.3/phrases/d1-line4.mp3' },
        { speaker: 'Sofía', text: '¡Gracias! Ahora voy a iniciar sesión en mis redes sociales.', audio: '/audio/L3.3/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: '¿Usas todas las redes? Yo solo uso dos.', audio: '/audio/L3.3/phrases/d1-line6.mp3' },
        { speaker: 'Sofía', text: 'Yo uso como cinco. ¡Y ya publiqué una foto del teléfono nuevo!', audio: '/audio/L3.3/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: 'Jaja, típico. ¿Ya te dieron likes?', audio: '/audio/L3.3/phrases/d1-line8.mp3' },
        { speaker: 'Sofía', text: '¡Quince en cinco minutos! Y mi mamá dejó un comentario.', audio: '/audio/L3.3/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-tech-trouble',
      title: 'Tech Problems at Work — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Martín', text: '¿Me podés ayudar? Mi computadora no funciona.', audio: '/audio/L3.3/phrases/d2-line1.mp3' },
        { speaker: 'Valentina', text: '¿Qué le pasa? ¿Se congeló?', audio: '/audio/L3.3/phrases/d2-line2.mp3' },
        { speaker: 'Martín', text: 'No, el internet está muy lento y no puedo enviar un correo.', audio: '/audio/L3.3/phrases/d2-line3.mp3', annotations: [{ phrase: 'correo', fromLesson: 'L2.8', note: 'Email/office from L2.8' }] },
        { speaker: 'Valentina', text: '¿Probaste reiniciar el router?', audio: '/audio/L3.3/phrases/d2-line4.mp3' },
        { speaker: 'Martín', text: 'Sí, pero sigue lento. Y ahora dice que no tengo señal.', audio: '/audio/L3.3/phrases/d2-line5.mp3' },
        { speaker: 'Valentina', text: 'Esperá, voy a revisar la conexión. ¿Cuál es la contraseña del wifi?', audio: '/audio/L3.3/phrases/d2-line6.mp3' },
        { speaker: 'Martín', text: 'No me acuerdo... se me olvidó. Creo que está guardada en mi teléfono.', audio: '/audio/L3.3/phrases/d2-line7.mp3' },
        { speaker: 'Valentina', text: '¡Listo! Ya te conecté. El problema era la contraseña vieja.', audio: '/audio/L3.3/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Set up a new phone in Mexico City and troubleshoot tech problems in Buenos Aires.',

  culturalNotes: [
    {
      title: 'WhatsApp Rules Latin America',
      content: 'While the U.S. relies on iMessage and SMS, Latin America runs on WhatsApp. It\'s used for everything: family group chats, business communication, restaurant reservations, even government services. "Te mando un WhatsApp" (I\'ll send you a WhatsApp) is how people say "I\'ll text you." Understanding this is key to fitting in digitally!',
    },
    {
      title: 'Vos and Technology — Argentine Spanish Online',
      content: 'In Argentina and parts of Central America, "vos" is used instead of "tú." You\'ll see it everywhere online: "¿Vos usás Instagram?" instead of "¿Tú usas Instagram?" Notice dialogue 2 uses "podés" and "esperá" — typical Argentine voseo. On social media, you\'ll encounter regional variations constantly!',
    },
    {
      title: 'Spanish Tech Words vs. English Loanwords',
      content: 'Spanish speakers mix native words with English tech terms. "Postear" (to post), "likear" (to like), "tuitear" (to tweet), "stalkear" (to stalk online) are common verbs created by adding Spanish endings to English roots. The Real Academia Española officially recommends "publicar" over "postear," but informal usage wins on social media!',
    },
  ],
  culturalGradient: 'from-blue-50 to-indigo-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El teléfono celular" means:', options: ['The tablet', 'The cell phone', 'The laptop', 'The charger'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Voy a ___ una foto en Instagram" (post)', answer: 'publicar' },
    { id: 3, type: 'mc', text: '"Iniciar sesión" means:', options: ['Log out', 'Sign up', 'Log in', 'Delete account'], answer: 2 },
    { id: 4, type: 'tf', text: '"Las redes sociales" means "social media" or "social networks."', answer: true },
    { id: 5, type: 'mc', text: '"Se me olvidó la contraseña" means:', options: ['I changed my password', 'I forgot my password', 'I need a password', 'My password is strong'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Necesito ___ al wifi" (connect)', answer: 'conectarme' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, how many likes did Sofía get in five minutes?', options: ['Five', 'Ten', 'Fifteen', 'Twenty'], answer: 2 },
    { id: 8, type: 'mc', text: '"Compartir un video" means:', options: ['Record a video', 'Delete a video', 'Share a video', 'Edit a video'], answer: 2 },
    { id: 9, type: 'tf', text: 'In Latin America, WhatsApp is the primary messaging platform, not iMessage.', answer: true },
    { id: 10, type: 'mc', text: '"La batería está baja" means:', options: ['The battery is full', 'The battery is new', 'The battery is low', 'The battery is charging'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "El internet está ___" (slow)', answer: 'lento' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what was the actual problem?', options: ['Broken router', 'Old password', 'No signal', 'Frozen computer'], answer: 1 },
    { id: 13, type: 'mc', text: '"Descargar una aplicación" means:', options: ['Delete an app', 'Update an app', 'Download an app', 'Open an app'], answer: 2 },
    { id: 14, type: 'tf', text: '"Postear" is a Spanish verb created by adding Spanish endings to the English word "post."', answer: true },
    { id: 15, type: 'mc', text: '"Etiquetar a un amigo" means:', options: ['Follow a friend', 'Block a friend', 'Message a friend', 'Tag a friend'], answer: 3 },
  ],

  audioBase: '/audio/L3.3/phrases',

  uniqueActivity: {
    id: 'AppNavigatorL33',
    sectionId: 'app-navigator',
    sectionColor: 'bg-blue-50/40',
    sectionBorder: 'border-blue-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    devices: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'social-media': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    actions: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    problems: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'pronunciation-tips': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'tech-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    cultural: { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    'app-navigator': { bg: 'bg-blue-50/40', border: 'border-blue-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
