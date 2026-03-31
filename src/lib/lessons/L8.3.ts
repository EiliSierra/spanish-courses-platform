import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Software Development (12) ===
  { spanish: 'El código fuente está en el repositorio', english: 'The source code is in the repository', pronunciation: 'ehl KOH-dee-goh FWEHN-teh ehs-TAH ehn ehl reh-poh-see-TOH-ree-oh', category: 'software-dev', audio: 'codigo-fuente-repositorio' },
  { spanish: 'Necesitamos compilar el proyecto antes de probarlo', english: 'We need to compile the project before testing it', pronunciation: 'neh-seh-see-TAH-mohs kohm-pee-LAHR ehl proh-YEHK-toh AHN-tehs deh proh-BAHR-loh', category: 'software-dev', audio: 'compilar-proyecto' },
  { spanish: 'Estoy depurando un error en la función principal', english: 'I am debugging an error in the main function', pronunciation: 'ehs-TOY deh-poo-RAHN-doh oon eh-RROHR ehn lah foon-see-OHN preen-see-PAHL', category: 'software-dev', audio: 'depurando-error' },
  { spanish: 'Creé una nueva rama en el repositorio', english: 'I created a new branch in the repository', pronunciation: 'kreh-EH OO-nah NWEH-bah RRAH-mah ehn ehl reh-poh-see-TOH-ree-oh', category: 'software-dev', audio: 'nueva-rama-repositorio' },
  { spanish: 'Fusiona tu rama con la rama principal', english: 'Merge your branch with the main branch', pronunciation: 'foo-see-OH-nah too RRAH-mah kohn lah RRAH-mah preen-see-PAHL', category: 'software-dev', audio: 'fusiona-rama-principal' },
  { spanish: 'Vamos a desplegar en producción esta noche', english: 'We are going to deploy to production tonight', pronunciation: 'BAH-mohs ah dehs-pleh-GAHR ehn proh-dook-see-OHN EHS-tah NOH-cheh', category: 'software-dev', audio: 'desplegar-produccion' },
  { spanish: 'La API RESTful devuelve datos en formato JSON', english: 'The RESTful API returns data in JSON format', pronunciation: 'lah ah-PEE rehst-fool deh-BWEHL-beh DAH-tohs ehn fohr-MAH-toh hah-SOHN', category: 'software-dev', audio: 'api-restful-json' },
  { spanish: 'Estamos migrando a una arquitectura de microservicios', english: 'We are migrating to a microservices architecture', pronunciation: 'ehs-TAH-mohs mee-GRAHN-doh ah OO-nah ahr-kee-tehk-TOO-rah deh mee-kroh-sehr-BEE-see-ohs', category: 'software-dev', audio: 'arquitectura-microservicios' },
  { spanish: 'Haz un commit con un mensaje descriptivo', english: 'Make a commit with a descriptive message', pronunciation: 'ahs oon koh-MEET kohn oon mehn-SAH-heh dehs-kreep-TEE-boh', category: 'software-dev', audio: 'commit-mensaje' },
  { spanish: 'La integración continua detectó un fallo en las pruebas', english: 'Continuous integration detected a test failure', pronunciation: 'lah een-teh-grah-see-OHN kohn-TEE-nwah deh-tehk-TOH oon FAH-yoh ehn lahs PRWEH-bahs', category: 'software-dev', audio: 'integracion-continua-fallo' },
  { spanish: 'Revisa el pull request antes de aprobarlo', english: 'Review the pull request before approving it', pronunciation: 'reh-BEE-sah ehl pool reh-KWEST AHN-tehs deh ah-proh-BAHR-loh', category: 'software-dev', audio: 'pull-request-aprobar' },
  { spanish: 'El framework facilita el desarrollo ágil', english: 'The framework facilitates agile development', pronunciation: 'ehl FRAYM-wohrk fah-see-LEE-tah ehl deh-sah-RROH-yoh AH-heel', category: 'software-dev', audio: 'framework-desarrollo-agil' },

  // === Hardware & Infrastructure (12) ===
  { spanish: 'El servidor está alojado en la nube', english: 'The server is hosted in the cloud', pronunciation: 'ehl sehr-bee-DOHR ehs-TAH ah-loh-HAH-doh ehn lah NOO-beh', category: 'hardware-infrastructure', audio: 'servidor-nube' },
  { spanish: 'El ancho de banda no es suficiente para el tráfico actual', english: 'The bandwidth is not enough for the current traffic', pronunciation: 'ehl AHN-choh deh BAHN-dah noh ehs soo-fee-see-EHN-teh PAH-rah ehl TRAH-fee-koh ahk-TWAHL', category: 'hardware-infrastructure', audio: 'ancho-banda-trafico' },
  { spanish: 'La latencia del servidor es demasiado alta', english: 'The server latency is too high', pronunciation: 'lah lah-TEHN-see-ah dehl sehr-bee-DOHR ehs deh-mah-see-AH-doh AHL-tah', category: 'hardware-infrastructure', audio: 'latencia-servidor' },
  { spanish: 'Migramos el almacenamiento en la nube a otro proveedor', english: 'We migrated the cloud storage to another provider', pronunciation: 'mee-GRAH-mohs ehl ahl-mah-seh-nah-mee-EHN-toh ehn lah NOO-beh ah OH-troh proh-beh-eh-DOHR', category: 'hardware-infrastructure', audio: 'almacenamiento-nube' },
  { spanish: 'Este procesador tiene ocho núcleos de alto rendimiento', english: 'This processor has eight high-performance cores', pronunciation: 'EHS-teh proh-seh-sah-DOHR tee-EH-neh OH-choh NOO-kleh-ohs deh AHL-toh rehn-dee-mee-EHN-toh', category: 'hardware-infrastructure', audio: 'procesador-nucleos' },
  { spanish: 'Necesitamos más memoria RAM para el entorno de desarrollo', english: 'We need more RAM for the development environment', pronunciation: 'neh-seh-see-TAH-mohs mahs meh-MOH-ree-ah rrahm PAH-rah ehl ehn-TOHR-noh deh deh-sah-RROH-yoh', category: 'hardware-infrastructure', audio: 'memoria-ram-desarrollo' },
  { spanish: 'La red de fibra óptica mejora la velocidad de transferencia', english: 'The fiber optic network improves transfer speed', pronunciation: 'lah rrehd deh FEE-brah OHP-tee-kah meh-HOH-rah lah beh-loh-see-DAHD deh trahns-feh-REHN-see-ah', category: 'hardware-infrastructure', audio: 'fibra-optica-velocidad' },
  { spanish: 'El centro de datos tiene redundancia geográfica', english: 'The data center has geographic redundancy', pronunciation: 'ehl SEHN-troh deh DAH-tohs tee-EH-neh rreh-doon-DAHN-see-ah heh-oh-GRAH-fee-kah', category: 'hardware-infrastructure', audio: 'centro-datos-redundancia' },
  { spanish: 'La virtualización optimiza el uso de los recursos', english: 'Virtualization optimizes resource usage', pronunciation: 'lah beer-twah-lee-sah-see-OHN ohp-tee-MEE-sah ehl OO-soh deh lohs reh-KOOR-sohs', category: 'hardware-infrastructure', audio: 'virtualizacion-recursos' },
  { spanish: 'Configura el balanceador de carga para distribuir el tráfico', english: 'Configure the load balancer to distribute traffic', pronunciation: 'kohn-fee-GOO-rah ehl bah-lahn-seh-ah-DOHR deh KAHR-gah PAH-rah dees-tree-boo-EER ehl TRAH-fee-koh', category: 'hardware-infrastructure', audio: 'balanceador-carga' },
  { spanish: 'El disco de estado sólido acelera el tiempo de arranque', english: 'The solid state drive speeds up boot time', pronunciation: 'ehl DEES-koh deh ehs-TAH-doh SOH-lee-doh ah-seh-LEH-rah ehl tee-EHM-poh deh ah-RRAHN-keh', category: 'hardware-infrastructure', audio: 'disco-estado-solido' },
  { spanish: 'Instalamos un sistema de refrigeración líquida en el rack', english: 'We installed a liquid cooling system in the rack', pronunciation: 'eens-tah-LAH-mohs oon sees-TEH-mah deh rreh-free-heh-rah-see-OHN LEE-kee-dah ehn ehl rrahk', category: 'hardware-infrastructure', audio: 'refrigeracion-liquida' },

  // === AI & Data (12) ===
  { spanish: 'La inteligencia artificial está transformando la industria', english: 'Artificial intelligence is transforming the industry', pronunciation: 'lah een-teh-lee-HEHN-see-ah ahr-tee-fee-see-AHL ehs-TAH trahns-fohr-MAHN-doh lah een-DOOS-tree-ah', category: 'ai-data', audio: 'inteligencia-artificial-industria' },
  { spanish: 'El aprendizaje automático detecta patrones en los datos', english: 'Machine learning detects patterns in the data', pronunciation: 'ehl ah-prehn-dee-SAH-heh ow-toh-MAH-tee-koh deh-TEHK-tah pah-TROH-nehs ehn lohs DAH-tohs', category: 'ai-data', audio: 'aprendizaje-automatico' },
  { spanish: 'La red neuronal profunda tiene doce capas ocultas', english: 'The deep neural network has twelve hidden layers', pronunciation: 'lah rrehd neh-oo-roh-NAHL proh-FOON-dah tee-EH-neh DOH-seh KAH-pahs oh-KOOL-tahs', category: 'ai-data', audio: 'red-neuronal-capas' },
  { spanish: 'Debemos limpiar el conjunto de datos antes de entrenar el modelo', english: 'We must clean the dataset before training the model', pronunciation: 'deh-BEH-mohs leem-pee-AHR ehl kohn-HOON-toh deh DAH-tohs AHN-tehs deh ehn-treh-NAHR ehl moh-DEH-loh', category: 'ai-data', audio: 'conjunto-datos-entrenar' },
  { spanish: 'El sesgo algorítmico puede generar resultados discriminatorios', english: 'Algorithmic bias can generate discriminatory results', pronunciation: 'ehl SEHS-goh ahl-goh-REET-mee-koh PWEH-deh heh-neh-RAHR reh-sool-TAH-dohs dees-kree-mee-nah-TOH-ree-ohs', category: 'ai-data', audio: 'sesgo-algoritmico' },
  { spanish: 'El modelo de lenguaje genera texto coherente y fluido', english: 'The language model generates coherent and fluent text', pronunciation: 'ehl moh-DEH-loh deh lehn-GWAH-heh HEH-neh-rah TEHKS-toh koh-eh-REHN-teh ee FLOO-ee-doh', category: 'ai-data', audio: 'modelo-lenguaje' },
  { spanish: 'La tokenización divide el texto en unidades procesables', english: 'Tokenization divides text into processable units', pronunciation: 'lah toh-keh-nee-sah-see-OHN dee-BEE-deh ehl TEHKS-toh ehn oo-nee-DAH-dehs proh-seh-SAH-blehs', category: 'ai-data', audio: 'tokenizacion-texto' },
  { spanish: 'Estamos entrenando el modelo con datos etiquetados', english: 'We are training the model with labeled data', pronunciation: 'ehs-TAH-mohs ehn-treh-NAHN-doh ehl moh-DEH-loh kohn DAH-tohs eh-tee-keh-TAH-dohs', category: 'ai-data', audio: 'entrenando-datos-etiquetados' },
  { spanish: 'La función de pérdida mide el error del modelo', english: 'The loss function measures the model error', pronunciation: 'lah foon-see-OHN deh PEHR-dee-dah MEE-deh ehl eh-RROHR dehl moh-DEH-loh', category: 'ai-data', audio: 'funcion-perdida-error' },
  { spanish: 'El procesamiento de lenguaje natural analiza sentimientos', english: 'Natural language processing analyzes sentiments', pronunciation: 'ehl proh-seh-sah-mee-EHN-toh deh lehn-GWAH-heh nah-too-RAHL ah-nah-LEE-sah sehn-tee-mee-EHN-tohs', category: 'ai-data', audio: 'procesamiento-lenguaje-natural' },
  { spanish: 'La inferencia en tiempo real requiere optimización del modelo', english: 'Real-time inference requires model optimization', pronunciation: 'lah een-feh-REHN-see-ah ehn tee-EHM-poh reh-AHL reh-kee-EH-reh ohp-tee-mee-sah-see-OHN dehl moh-DEH-loh', category: 'ai-data', audio: 'inferencia-tiempo-real' },
  { spanish: 'El aprendizaje por refuerzo enseña al agente mediante recompensas', english: 'Reinforcement learning teaches the agent through rewards', pronunciation: 'ehl ah-prehn-dee-SAH-heh pohr reh-FWEHR-soh ehn-SEH-nyah ahl ah-HEHN-teh meh-dee-AHN-teh rreh-kohm-PEHN-sahs', category: 'ai-data', audio: 'aprendizaje-refuerzo' },

  // === Cybersecurity (12) ===
  { spanish: 'La ciberseguridad es fundamental para toda organización', english: 'Cybersecurity is fundamental for every organization', pronunciation: 'lah see-behr-seh-goo-ree-DAHD ehs foon-dah-mehn-TAHL PAH-rah TOH-dah ohr-gah-nee-sah-see-OHN', category: 'cybersecurity', audio: 'ciberseguridad-organizacion' },
  { spanish: 'La encriptación protege los datos durante la transmisión', english: 'Encryption protects data during transmission', pronunciation: 'lah ehn-kreep-tah-see-OHN proh-TEH-heh lohs DAH-tohs doo-RAHN-teh lah trahns-mee-see-OHN', category: 'cybersecurity', audio: 'encriptacion-datos' },
  { spanish: 'Activa la autenticación de dos factores en todas tus cuentas', english: 'Enable two-factor authentication on all your accounts', pronunciation: 'ahk-TEE-bah lah ow-tehn-tee-kah-see-OHN deh dohs fahk-TOH-rehs ehn TOH-dahs toos KWEHN-tahs', category: 'cybersecurity', audio: 'autenticacion-dos-factores' },
  { spanish: 'La brecha de seguridad expuso datos de millones de usuarios', english: 'The security breach exposed data of millions of users', pronunciation: 'lah BREH-chah deh seh-goo-ree-DAHD ehks-POO-soh DAH-tohs deh mee-YOH-nehs deh oo-SWAH-ree-ohs', category: 'cybersecurity', audio: 'brecha-seguridad' },
  { spanish: 'El ataque de phishing imitaba un correo del banco', english: 'The phishing attack imitated a bank email', pronunciation: 'ehl ah-TAH-keh deh FEE-sheeng ee-mee-TAH-bah oon koh-RREH-oh dehl BAHN-koh', category: 'cybersecurity', audio: 'phishing-correo-banco' },
  { spanish: 'El cortafuegos bloquea el tráfico sospechoso', english: 'The firewall blocks suspicious traffic', pronunciation: 'ehl kohr-tah-FWEH-gohs bloh-KEH-ah ehl TRAH-fee-koh sohs-peh-CHOH-soh', category: 'cybersecurity', audio: 'cortafuegos-trafico' },
  { spanish: 'Descubrieron una vulnerabilidad de día cero en el sistema operativo', english: 'They discovered a zero-day vulnerability in the operating system', pronunciation: 'dehs-koo-bree-EH-rohn OO-nah bool-neh-rah-bee-lee-DAHD deh DEE-ah SEH-roh ehn ehl sees-TEH-mah oh-peh-rah-TEE-boh', category: 'cybersecurity', audio: 'vulnerabilidad-dia-cero' },
  { spanish: 'El ransomware cifró todos los archivos de la empresa', english: 'The ransomware encrypted all the company files', pronunciation: 'ehl rahn-sohm-WEHR see-FROH TOH-dohs lohs ahr-CHEE-bohs deh lah ehm-PREH-sah', category: 'cybersecurity', audio: 'ransomware-archivos' },
  { spanish: 'Realizamos una auditoría de seguridad cada trimestre', english: 'We perform a security audit every quarter', pronunciation: 'rreh-ah-lee-SAH-mohs OO-nah ow-dee-toh-REE-ah deh seh-goo-ree-DAHD KAH-dah tree-MEHS-treh', category: 'cybersecurity', audio: 'auditoria-seguridad' },
  { spanish: 'El certificado SSL garantiza una conexión segura', english: 'The SSL certificate guarantees a secure connection', pronunciation: 'ehl sehr-tee-fee-KAH-doh eh-seh-EH-leh gah-rahn-TEE-sah OO-nah koh-nehk-see-OHN seh-GOO-rah', category: 'cybersecurity', audio: 'certificado-ssl' },
  { spanish: 'La ingeniería social manipula a las personas para obtener acceso', english: 'Social engineering manipulates people to gain access', pronunciation: 'lah een-heh-nee-eh-REE-ah soh-see-AHL mah-nee-POO-lah ah lahs pehr-SOH-nahs PAH-rah ohb-teh-NEHR ahk-SEH-soh', category: 'cybersecurity', audio: 'ingenieria-social' },
  { spanish: 'Implementamos un sistema de detección de intrusiones', english: 'We implemented an intrusion detection system', pronunciation: 'eem-pleh-mehn-TAH-mohs oon sees-TEH-mah deh deh-tehk-see-OHN deh een-troo-see-OH-nehs', category: 'cybersecurity', audio: 'deteccion-intrusiones' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L83PhraseByAudio = phraseByAudio

// === TECH SPEC CHALLENGE (unique activity) ===

export interface TechSpecChallenge {
  term: string
  english: string
  correctDefinition: string
  options: string[]
}

export const TECH_SPEC_CHALLENGES: TechSpecChallenge[] = [
  {
    term: 'Desplegar en producción',
    english: 'Deploy to production',
    correctDefinition: 'Publicar una versión del software en el entorno real donde la usan los usuarios finales',
    options: ['Publicar una versión del software en el entorno real donde la usan los usuarios finales', 'Eliminar el código antiguo del repositorio', 'Crear una copia de seguridad de la base de datos', 'Transferir archivos entre dos servidores locales'],
  },
  {
    term: 'Sesgo algorítmico',
    english: 'Algorithmic bias',
    correctDefinition: 'Tendencia sistemática de un algoritmo a producir resultados injustos o discriminatorios',
    options: ['Tendencia sistemática de un algoritmo a producir resultados injustos o discriminatorios', 'Error de programación que causa un bucle infinito', 'Velocidad excesiva en el procesamiento de datos', 'Falta de memoria durante la ejecución del programa'],
  },
  {
    term: 'Vulnerabilidad de día cero',
    english: 'Zero-day vulnerability',
    correctDefinition: 'Fallo de seguridad desconocido por el fabricante que puede ser explotado antes de que exista un parche',
    options: ['Fallo de seguridad desconocido por el fabricante que puede ser explotado antes de que exista un parche', 'Error que ocurre el primer día de uso del software', 'Virus que se activa en una fecha específica', 'Problema de rendimiento que aparece tras la instalación inicial'],
  },
  {
    term: 'Arquitectura de microservicios',
    english: 'Microservices architecture',
    correctDefinition: 'Diseño donde la aplicación se divide en servicios pequeños e independientes que se comunican entre sí',
    options: ['Diseño donde la aplicación se divide en servicios pequeños e independientes que se comunican entre sí', 'Estructura que usa un solo servidor para toda la aplicación', 'Técnica para comprimir archivos en el servidor', 'Método de organización de bases de datos relacionales'],
  },
  {
    term: 'Red neuronal profunda',
    english: 'Deep neural network',
    correctDefinition: 'Modelo de inteligencia artificial con múltiples capas ocultas que aprende representaciones complejas de los datos',
    options: ['Modelo de inteligencia artificial con múltiples capas ocultas que aprende representaciones complejas de los datos', 'Cable de red que conecta computadoras en diferentes pisos', 'Sistema de cifrado con varias claves de seguridad', 'Programa que copia archivos entre múltiples discos duros'],
  },
  {
    term: 'Cortafuegos',
    english: 'Firewall',
    correctDefinition: 'Sistema de seguridad que filtra y controla el tráfico de red según reglas predefinidas',
    options: ['Sistema de seguridad que filtra y controla el tráfico de red según reglas predefinidas', 'Programa que elimina virus del sistema operativo', 'Dispositivo que enfría los servidores en un centro de datos', 'Software que comprime archivos para ahorrar espacio'],
  },
  {
    term: 'Aprendizaje por refuerzo',
    english: 'Reinforcement learning',
    correctDefinition: 'Técnica donde un agente aprende a tomar decisiones mediante prueba y error, recibiendo recompensas o penalizaciones',
    options: ['Técnica donde un agente aprende a tomar decisiones mediante prueba y error, recibiendo recompensas o penalizaciones', 'Método de enseñanza basado en repetición de ejercicios', 'Proceso de actualización automática del software', 'Algoritmo que ordena datos de mayor a menor'],
  },
]

// === LESSON DATA ===

export const L83Data: LessonData = {
  id: 'L8.3',
  hero: {
    lessonId: 'L8.3',
    title: 'Technology & Engineering',
    subtitle: 'Specialized language for the digital world',
    description: 'Master the technical vocabulary of software development, hardware infrastructure, AI/ML, and cybersecurity. From deploying to production to discussing neural networks and zero-day vulnerabilities — communicate with precision in the Spanish-speaking tech industry.',
    image: '/images/L8.3/L8.3.jpg',
    gradient: 'from-blue-800/65 via-indigo-700/55 to-violet-700/65',
    accentColor: 'blue-200',
  },

  objectives: [
    { icon: '💻', title: 'Software Development', desc: 'Discuss code, repositories, branches, deployments, APIs, and microservices architecture.' },
    { icon: '🖥️', title: 'Hardware & Infrastructure', desc: 'Describe servers, bandwidth, latency, cloud storage, processors, and fiber optic networks.' },
    { icon: '🤖', title: 'AI & Data Science', desc: 'Explain neural networks, machine learning, datasets, algorithmic bias, and language models.' },
    { icon: '🔒', title: 'Cybersecurity', desc: 'Navigate encryption, two-factor authentication, firewalls, phishing, and zero-day vulnerabilities.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.3', label: 'Technology Basics', detail: 'L3.3 introduced everyday tech vocabulary (apps, internet, devices). Now dive into specialized professional terminology.' },
    { fromLesson: 'L6.4', label: 'Digital & Internet Slang', detail: 'L6.4 covered informal digital language. Now learn the formal, professional register used in tech teams.' },
    { fromLesson: 'L7.4', label: 'Scientific Spanish', detail: 'L7.4 built academic scientific vocabulary. Now apply that precision to engineering and computer science contexts.' },
  ],

  sectionTransitions: [
    { afterSection: 'software-dev', text: 'Great coding vocabulary! Now let\'s explore the hardware that runs the software.' },
    { afterSection: 'hardware-infrastructure', text: 'Infrastructure covered! Time to enter the world of artificial intelligence and data.' },
    { afterSection: 'ai-data', text: 'AI mastered! Now let\'s protect it all with cybersecurity.' },
    { afterSection: 'dialogues', text: 'Excellent tech conversations! Let\'s explore the culture of tech in the Spanish-speaking world.' },
    { afterSection: 'cultural', text: 'Now test your tech knowledge in the Tech Spec Challenge!' },
    { afterSection: 'tech-spec', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Voy a desplegar...', english: 'I\'m going to deploy...' },
    { spanish: 'El modelo se entrena con...', english: 'The model trains on...' },
    { spanish: 'La vulnerabilidad afecta a...', english: 'The vulnerability affects...' },
    { spanish: 'Necesitamos optimizar...', english: 'We need to optimize...' },
    { spanish: 'El algoritmo procesa...', english: 'The algorithm processes...' },
    { spanish: 'La red está configurada para...', english: 'The network is configured for...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Arquitectura de microservicios', pronunciation: 'ahr-kee-tehk-TOO-rah deh mee-kroh-sehr-BEE-see-ohs', english: 'Microservices architecture', audio: 'arquitectura-microservicios', tip: '"Microservicios" keeps the stress on -VI-: mi-cro-ser-VI-cios. The prefix "micro-" is always unstressed in Spanish technical terms.' },
    { spanish: 'Vulnerabilidad de día cero', pronunciation: 'bool-neh-rah-bee-lee-DAHD deh DEE-ah SEH-roh', english: 'Zero-day vulnerability', audio: 'vulnerabilidad-dia-cero', tip: '"Vulnerabilidad" has five syllables: vul-ne-ra-bi-li-DAD. The stress falls on the final syllable because it ends in -D.' },
    { spanish: 'Autenticación de dos factores', pronunciation: 'ow-tehn-tee-kah-see-OHN deh dohs fahk-TOH-rehs', english: 'Two-factor authentication', audio: 'autenticacion-dos-factores', tip: '"Autenticación" has the stress on -CIÓN. In tech Spanish, many English loanwords get Spanish suffixes: -ción, -izar, -ado.' },
    { spanish: 'Procesamiento de lenguaje natural', pronunciation: 'proh-seh-sah-mee-EHN-toh deh lehn-GWAH-heh nah-too-RAHL', english: 'Natural language processing', audio: 'procesamiento-lenguaje-natural', tip: '"Procesamiento" follows the -miento pattern (like "conocimiento"). The stress is on -MIEN-: pro-ce-sa-MIEN-to.' },
    { spanish: 'Integración continua detectó un fallo', pronunciation: 'een-teh-grah-see-OHN kohn-TEE-nwah deh-tehk-TOH oon FAH-yoh', english: 'Continuous integration detected a failure', audio: 'integracion-continua-fallo', tip: '"Fallo" (failure/bug) vs. "falla" (fault/defect) — in Spain "fallo" is more common; in Latin America "falla" is preferred. Both are understood everywhere.' },
    { spanish: 'Encriptación de extremo a extremo', pronunciation: 'ehn-kreep-tah-see-OHN deh ehks-TREH-moh ah ehks-TREH-moh', english: 'End-to-end encryption', audio: 'encriptacion-datos', tip: '"Encriptación" comes from English "encryption." Some purists prefer "cifrado" (from "cifra" = cipher). Both are widely used in professional settings.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'software-dev', label: 'Software Development' },
    { id: 'hardware-infrastructure', label: 'Hardware & Infrastructure' },
    { id: 'ai-data', label: 'AI & Data Science' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Term Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'tech-spec', label: 'Tech Spec Challenge' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'software-dev',
      title: 'Software Development — Desarrollo de Software',
      description: 'The language of coding, version control, deployments, and modern software engineering practices.',
      tabs: [
        { label: 'Code & Version Control', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'software-dev').slice(0, 6) },
        { label: 'Architecture & CI/CD', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'software-dev').slice(6) },
      ],
    },
    {
      id: 'hardware-infrastructure',
      title: 'Hardware & Infrastructure — Infraestructura',
      description: 'Servers, networking, cloud computing, and the physical backbone that powers the digital world.',
      tabs: [
        { label: 'Servers & Cloud', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'hardware-infrastructure').slice(0, 6) },
        { label: 'Performance & Networking', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'hardware-infrastructure').slice(6) },
      ],
    },
    {
      id: 'ai-data',
      title: 'AI & Data Science — IA y Ciencia de Datos',
      description: 'Machine learning, neural networks, language models, and the vocabulary of the AI revolution.',
      tabs: [
        { label: 'Models & Training', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'ai-data').slice(0, 6) },
        { label: 'NLP & Advanced AI', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'ai-data').slice(6) },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity — Ciberseguridad',
      description: 'Encryption, authentication, threat detection, and the essential vocabulary of digital defense.',
      tabs: [
        { label: 'Defense & Protection', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'cybersecurity').slice(0, 6) },
        { label: 'Threats & Response', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'cybersecurity').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'English Loanwords in Spanish Tech',
      content: 'Many tech terms are borrowed from English but pronounced with Spanish phonetics. "Software" becomes sof-TWEHR, "hardware" becomes ahr-DWEHR, "commit" becomes koh-MEET. The key is to apply Spanish vowel sounds while keeping the recognizable root. Some terms are fully translated: "firewall" → "cortafuegos," "bug" → "error/fallo."',
      example: 'Software (sof-TWEHR) | Hardware (ahr-DWEHR) | Framework (FRAYM-wohrk)',
    },
    {
      title: 'The -ción / -sión Technical Suffix',
      content: 'Technical nouns ending in -ción or -sión always carry stress on the final syllable: encriptaCIÓN, autenticaCIÓN, virtualizaCIÓN. These map to English words ending in -tion/-sion. Learning this pattern unlocks hundreds of technical terms instantly.',
      example: 'Configuración | Implementación | Compilación | Transmisión',
      reviewFrom: 'L3.3',
    },
    {
      title: 'Compound Technical Terms',
      content: 'Spanish often forms tech compounds with "de": "base de datos" (database), "centro de datos" (data center), "ingeniería de software" (software engineering). Unlike English compounds, the modifier comes AFTER the noun: "red neuronal" (neural network), not "neuronal red."',
      example: 'Base de datos | Código fuente | Prueba de concepto | Interfaz de usuario',
      reviewFrom: 'L6.4',
    },
    {
      title: 'Acronyms in Spanish Tech',
      content: 'Most acronyms keep their English form (API, SSL, RAM, JSON) but are pronounced with Spanish letter sounds: A-peh-EE (API), EH-seh-EH-leh (SSL), RRAHM (RAM). Some get Spanish equivalents: AI → IA (Inteligencia Artificial), NLP → PLN (Procesamiento de Lenguaje Natural).',
      example: 'IA (ee-AH) | API (ah-peh-EE) | URL (oo-RREH-leh-EH-leh)',
    },
  ],

  flashcardGroups: [
    {
      key: 'software-dev',
      label: 'Software Development',
      audioKeys: ['codigo-fuente-repositorio', 'compilar-proyecto', 'depurando-error', 'nueva-rama-repositorio', 'fusiona-rama-principal', 'desplegar-produccion', 'api-restful-json', 'arquitectura-microservicios', 'commit-mensaje', 'integracion-continua-fallo', 'pull-request-aprobar', 'framework-desarrollo-agil'],
    },
    {
      key: 'hardware-infrastructure',
      label: 'Hardware & Infrastructure',
      audioKeys: ['servidor-nube', 'ancho-banda-trafico', 'latencia-servidor', 'almacenamiento-nube', 'procesador-nucleos', 'memoria-ram-desarrollo', 'fibra-optica-velocidad', 'centro-datos-redundancia', 'virtualizacion-recursos', 'balanceador-carga', 'disco-estado-solido', 'refrigeracion-liquida'],
    },
    {
      key: 'ai-data',
      label: 'AI & Data Science',
      audioKeys: ['inteligencia-artificial-industria', 'aprendizaje-automatico', 'red-neuronal-capas', 'conjunto-datos-entrenar', 'sesgo-algoritmico', 'modelo-lenguaje', 'tokenizacion-texto', 'entrenando-datos-etiquetados', 'funcion-perdida-error', 'procesamiento-lenguaje-natural', 'inferencia-tiempo-real', 'aprendizaje-refuerzo'],
    },
    {
      key: 'cybersecurity',
      label: 'Cybersecurity',
      audioKeys: ['ciberseguridad-organizacion', 'encriptacion-datos', 'autenticacion-dos-factores', 'brecha-seguridad', 'phishing-correo-banco', 'cortafuegos-trafico', 'vulnerabilidad-dia-cero', 'ransomware-archivos', 'auditoria-seguridad', 'certificado-ssl', 'ingenieria-social', 'deteccion-intrusiones'],
    },
  ],

  matchPairs: [
    { left: 'Desplegar', right: 'To deploy' },
    { left: 'Depurar', right: 'To debug' },
    { left: 'Cortafuegos', right: 'Firewall' },
    { left: 'Red neuronal', right: 'Neural network' },
    { left: 'Ancho de banda', right: 'Bandwidth' },
    { left: 'Encriptación', right: 'Encryption' },
    { left: 'Sesgo algorítmico', right: 'Algorithmic bias' },
    { left: 'Rama principal', right: 'Main branch' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Software vs. Hardware',
      instruction: 'Is this term related to software or hardware/infrastructure?',
      buckets: ['Software 💻', 'Hardware 🖥️'],
      items: [
        { text: 'Código fuente', bucket: 'Software 💻' },
        { text: 'Compilar', bucket: 'Software 💻' },
        { text: 'API RESTful', bucket: 'Software 💻' },
        { text: 'Microservicios', bucket: 'Software 💻' },
        { text: 'Procesador', bucket: 'Hardware 🖥️' },
        { text: 'Memoria RAM', bucket: 'Hardware 🖥️' },
        { text: 'Fibra óptica', bucket: 'Hardware 🖥️' },
        { text: 'Servidor', bucket: 'Hardware 🖥️' },
      ],
    },
    {
      title: 'AI vs. Cybersecurity',
      instruction: 'Does this term belong to AI/Data or Cybersecurity?',
      buckets: ['AI / Data 🤖', 'Cybersecurity 🔒'],
      items: [
        { text: 'Red neuronal', bucket: 'AI / Data 🤖' },
        { text: 'Aprendizaje automático', bucket: 'AI / Data 🤖' },
        { text: 'Modelo de lenguaje', bucket: 'AI / Data 🤖' },
        { text: 'Sesgo algorítmico', bucket: 'AI / Data 🤖' },
        { text: 'Encriptación', bucket: 'Cybersecurity 🔒' },
        { text: 'Cortafuegos', bucket: 'Cybersecurity 🔒' },
        { text: 'Phishing', bucket: 'Cybersecurity 🔒' },
        { text: 'Vulnerabilidad', bucket: 'Cybersecurity 🔒' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Term Sorting',

  dialogues: [
    {
      id: 'dialogue-standup',
      title: 'Dev Team Standup — Guadalajara Tech Hub',
      location: 'Guadalajara',
      lines: [
        { speaker: 'Andrea', text: 'Buenos días, equipo. Empecemos el standup. ¿Cómo van con el sprint?', audio: '/audio/L8.3/phrases/d1-line1.mp3' },
        { speaker: 'Carlos', text: 'Ayer terminé de depurar el módulo de autenticación. Ya funciona la autenticación de dos factores.', audio: '/audio/L8.3/phrases/d1-line2.mp3' },
        { speaker: 'Andrea', text: 'Excelente. ¿Y el pull request? ¿Alguien lo revisó?', audio: '/audio/L8.3/phrases/d1-line3.mp3' },
        { speaker: 'Lucía', text: 'Yo lo revisé anoche. El código está limpio, pero sugiero agregar más pruebas unitarias.', audio: '/audio/L8.3/phrases/d1-line4.mp3' },
        { speaker: 'Carlos', text: 'De acuerdo, las agrego hoy. ¿Podemos fusionar la rama después de eso?', audio: '/audio/L8.3/phrases/d1-line5.mp3' },
        { speaker: 'Andrea', text: 'Sí, pero primero asegúrate de que la integración continua pase sin errores.', audio: '/audio/L8.3/phrases/d1-line6.mp3', annotations: [{ phrase: 'integración continua', fromLesson: 'L3.3', note: 'CI/CD pipeline — advanced use of tech vocabulary from L3.3' }] },
        { speaker: 'Lucía', text: 'Por mi parte, estoy migrando la API a la arquitectura de microservicios. Llevo un setenta por ciento.', audio: '/audio/L8.3/phrases/d1-line7.mp3' },
        { speaker: 'Andrea', text: '¿Has tenido problemas con la latencia entre los servicios?', audio: '/audio/L8.3/phrases/d1-line8.mp3' },
        { speaker: 'Lucía', text: 'Un poco. El balanceador de carga necesita ajustes. Voy a optimizar la configuración hoy.', audio: '/audio/L8.3/phrases/d1-line9.mp3' },
        { speaker: 'Carlos', text: 'También deberíamos revisar el ancho de banda del servidor de staging.', audio: '/audio/L8.3/phrases/d1-line10.mp3' },
        { speaker: 'Andrea', text: 'Buen punto. Lucía, ¿puedes verificar eso antes de desplegar en producción?', audio: '/audio/L8.3/phrases/d1-line11.mp3' },
        { speaker: 'Lucía', text: 'Claro. Lo tengo listo para mañana. ¿Desplegamos el jueves o el viernes?', audio: '/audio/L8.3/phrases/d1-line12.mp3' },
        { speaker: 'Andrea', text: 'El jueves. Así tenemos el viernes para monitorear y corregir cualquier fallo en producción.', audio: '/audio/L8.3/phrases/d1-line13.mp3' },
        { speaker: 'Carlos', text: 'Perfecto. Yo preparo la documentación de la API para el cliente.', audio: '/audio/L8.3/phrases/d1-line14.mp3' },
        { speaker: 'Andrea', text: 'Genial, equipo. Buen trabajo. Nos vemos mañana en el standup.', audio: '/audio/L8.3/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-cybersecurity',
      title: 'Cybersecurity Briefing — Madrid Security Center',
      location: 'Madrid',
      lines: [
        { speaker: 'Directora Ramos', text: 'Atención, equipo. Tenemos un incidente de seguridad. Anoche detectamos una brecha.', audio: '/audio/L8.3/phrases/d2-line1.mp3' },
        { speaker: 'Ingeniero Vega', text: '¿Qué tipo de ataque fue? ¿Phishing o intrusión directa?', audio: '/audio/L8.3/phrases/d2-line2.mp3' },
        { speaker: 'Directora Ramos', text: 'Un ataque de phishing sofisticado. Imitaba correos internos de recursos humanos.', audio: '/audio/L8.3/phrases/d2-line3.mp3' },
        { speaker: 'Analista Torres', text: '¿Cuántos empleados cayeron en la trampa?', audio: '/audio/L8.3/phrases/d2-line4.mp3' },
        { speaker: 'Directora Ramos', text: 'Tres personas hicieron clic en el enlace. Afortunadamente, la autenticación de dos factores bloqueó el acceso.', audio: '/audio/L8.3/phrases/d2-line5.mp3', annotations: [{ phrase: 'autenticación de dos factores', fromLesson: 'L6.4', note: 'Digital security concept introduced informally in L6.4' }] },
        { speaker: 'Ingeniero Vega', text: 'Menos mal. ¿Revisamos los registros del cortafuegos para rastrear el origen?', audio: '/audio/L8.3/phrases/d2-line6.mp3' },
        { speaker: 'Directora Ramos', text: 'Sí. Torres, quiero un análisis completo de los registros de las últimas cuarenta y ocho horas.', audio: '/audio/L8.3/phrases/d2-line7.mp3' },
        { speaker: 'Analista Torres', text: 'Entendido. También voy a revisar si hay vulnerabilidades de día cero en nuestros sistemas.', audio: '/audio/L8.3/phrases/d2-line8.mp3' },
        { speaker: 'Ingeniero Vega', text: 'Propongo actualizar la encriptación a AES-256 y reforzar las políticas de contraseñas.', audio: '/audio/L8.3/phrases/d2-line9.mp3' },
        { speaker: 'Directora Ramos', text: 'De acuerdo. También necesitamos una campaña de concientización sobre ingeniería social.', audio: '/audio/L8.3/phrases/d2-line10.mp3' },
        { speaker: 'Analista Torres', text: 'Puedo preparar una simulación de phishing para medir la preparación del personal.', audio: '/audio/L8.3/phrases/d2-line11.mp3' },
        { speaker: 'Ingeniero Vega', text: '¿Deberíamos implementar un sistema de detección de intrusiones más robusto?', audio: '/audio/L8.3/phrases/d2-line12.mp3' },
        { speaker: 'Directora Ramos', text: 'Absolutamente. Preparen un presupuesto para la próxima auditoría de seguridad trimestral.', audio: '/audio/L8.3/phrases/d2-line13.mp3' },
        { speaker: 'Analista Torres', text: 'Directora, los certificados SSL de tres dominios vencen la próxima semana. ¿Los renuevo?', audio: '/audio/L8.3/phrases/d2-line14.mp3' },
        { speaker: 'Directora Ramos', text: 'Inmediatamente. No podemos permitir ninguna conexión insegura. Buen trabajo, equipo.', audio: '/audio/L8.3/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Join a dev team standup at a tech hub in Guadalajara and attend a cybersecurity incident briefing at a security center in Madrid.',

  culturalNotes: [
    {
      title: 'Latin American Tech Hubs: Silicon Valleys del Sur',
      content: 'Latin America has emerged as a global tech powerhouse. Guadalajara is Mexico\'s "Silicon Valley" with over 600 tech companies. Medellín transformed from one of the world\'s most dangerous cities to a thriving innovation hub. Buenos Aires produces world-class developers and startups. São Paulo, Bogotá, and Santiago also host vibrant ecosystems. The phrase "el ecosistema tech" is used casually, and "emprendimiento tecnológico" (tech entrepreneurship) drives regional economic growth.',
    },
    {
      title: 'The Nearshoring Boom',
      content: 'Since 2020, "nearshoring" has transformed Latin American tech. US companies increasingly hire developers in Mexico, Colombia, and Argentina for timezone compatibility and competitive rates. "Nearshoring" is used as-is in Spanish business contexts. Developers in these countries earn significantly more than local averages, creating a new tech middle class. The phrase "trabajo remoto para una empresa estadounidense" (remote work for a US company) has become a career aspiration for many young engineers.',
    },
    {
      title: 'Spanish in the Global Tech Industry',
      content: 'While English dominates programming languages and documentation, Spanish-speaking developers have built a massive community. Stack Overflow en Español, Platzi (Colombia), and Código Facilito (Mexico) serve millions of developers learning in Spanish. Tech conferences like Talent Land (Guadalajara) and Nerdear.la (Buenos Aires) celebrate Spanish-language tech culture. Increasingly, companies write internal documentation in Spanish: "documentación en español" is becoming a standard practice in Latin American tech teams.',
    },
  ],
  culturalGradient: 'from-blue-50 to-indigo-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Desplegar en producción" means:', options: ['Delete from production', 'Deploy to production', 'Test in staging', 'Download from server'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Necesitamos más memoria ___ para el servidor" (RAM)', answer: 'RAM' },
    { id: 3, type: 'mc', text: '"Depurar" in software development means:', options: ['To purify water', 'To debug code', 'To delete files', 'To compress data'], answer: 1 },
    { id: 4, type: 'tf', text: '"Cortafuegos" is the Spanish term for "firewall."', answer: true },
    { id: 5, type: 'mc', text: '"Sesgo algorítmico" refers to:', options: ['Fast algorithm speed', 'Algorithm optimization', 'Algorithmic bias', 'Algorithm security'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "La ___ de dos factores protege tu cuenta" (authentication)', answer: 'autenticación' },
    { id: 7, type: 'mc', text: 'What does "rama principal" mean in version control?', options: ['Main server', 'Main branch', 'Main database', 'Main function'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what percentage of the microservices migration has Lucía completed?', options: ['50%', '60%', '70%', '80%'], answer: 2 },
    { id: 9, type: 'tf', text: '"Aprendizaje automático" is the Spanish term for "machine learning."', answer: true },
    { id: 10, type: 'mc', text: '"Ancho de banda" translates to:', options: ['Wide band', 'Bandwidth', 'Broadband cable', 'Network width'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ neuronal tiene doce capas ocultas" (network)', answer: 'red' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what blocked the attackers after employees clicked the phishing link?', options: ['Firewall', 'Encryption', 'Two-factor authentication', 'VPN'], answer: 2 },
    { id: 13, type: 'mc', text: '"Vulnerabilidad de día cero" is:', options: ['A first-day bug', 'A zero-day vulnerability', 'A midnight error', 'A daily scan'], answer: 1 },
    { id: 14, type: 'tf', text: 'Guadalajara is known as Mexico\'s "Silicon Valley" for its tech industry.', answer: true },
    { id: 15, type: 'mc', text: '"Conjunto de datos" means:', options: ['Data center', 'Database', 'Dataset', 'Data type'], answer: 2 },
  ],

  audioBase: '/audio/L8.3/phrases',

  uniqueActivity: {
    id: 'TechSpecL83',
    sectionId: 'tech-spec',
    sectionColor: 'bg-blue-50/40',
    sectionBorder: 'border-blue-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'software-dev': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'hardware-infrastructure': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'ai-data': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    cybersecurity: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'tech-spec': { bg: 'bg-blue-50/40', border: 'border-blue-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
