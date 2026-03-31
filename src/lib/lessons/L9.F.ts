// Level 9 Final Assessment — Question Pool
// 50 questions covering all 8 lessons (L9.1–L9.8). Exam picks 25 randomly.
// 70% (18/25) to pass and earn the Level 9 badge.

import type { ExamQuestion } from './L4.F'
export type { ExamQuestion }

export const L9F_QUESTION_POOL: ExamQuestion[] = [
  // === L9.1 Architecture & Urban Planning (6 questions) ===
  { id: 1, type: 'mc', text: '"La fachada" of a building refers to:', options: ['The roof', 'The front exterior face', 'The foundation', 'The interior walls'], answer: 1, fromLesson: 'L9.1', topic: 'Architecture' },
  { id: 2, type: 'fill', text: 'Complete: "El ___ urbano diseña ciudades más habitables" (planning)', answer: 'urbanismo', fromLesson: 'L9.1', topic: 'Urban Planning' },
  { id: 3, type: 'mc', text: '"La bóveda" is:', options: ['A window', 'An arched ceiling or vault', 'A door frame', 'A staircase'], answer: 1, fromLesson: 'L9.1', topic: 'Structural Elements' },
  { id: 4, type: 'tf', text: '"La arquitectura sostenible" focuses on environmentally friendly building design.', answer: true, fromLesson: 'L9.1', topic: 'Sustainability' },
  { id: 5, type: 'mc', text: '"El plano" in architecture is:', options: ['A flat surface', 'A blueprint or floor plan', 'A type of building', 'A construction tool'], answer: 1, fromLesson: 'L9.1', topic: 'Design' },
  { id: 6, type: 'fill', text: 'Complete: "La ___ distribuye el peso hacia los muros laterales" (vault/dome)', answer: 'bóveda', fromLesson: 'L9.1', topic: 'Architecture' },

  // === L9.2 Fashion & Textile Industry (6 questions) ===
  { id: 7, type: 'mc', text: '"La pasarela" in fashion is:', options: ['A fabric type', 'The runway/catwalk', 'A sewing tool', 'A clothing brand'], answer: 1, fromLesson: 'L9.2', topic: 'Fashion Shows' },
  { id: 8, type: 'fill', text: 'Complete: "La moda ___ promueve prácticas éticas en la industria textil" (sustainable)', answer: 'sostenible', fromLesson: 'L9.2', topic: 'Sustainability' },
  { id: 9, type: 'mc', text: '"El patronaje" refers to:', options: ['Fashion photography', 'Pattern making for garments', 'Fabric dyeing', 'Retail management'], answer: 1, fromLesson: 'L9.2', topic: 'Production' },
  { id: 10, type: 'tf', text: '"La alta costura" refers to mass-produced, affordable clothing.', answer: false, fromLesson: 'L9.2', topic: 'Haute Couture' },
  { id: 11, type: 'mc', text: '"El tejido" can mean:', options: ['Only a type of dance', 'Fabric or textile', 'A fashion magazine', 'A retail store'], answer: 1, fromLesson: 'L9.2', topic: 'Materials' },
  { id: 12, type: 'fill', text: 'Complete: "El ___ de moda presenta las colecciones de la temporada" (show/event)', answer: 'desfile', fromLesson: 'L9.2', topic: 'Fashion Events' },

  // === L9.3 Agriculture & Food Systems (7 questions) ===
  { id: 13, type: 'mc', text: '"La cosecha" refers to:', options: ['Planting seeds', 'The harvest', 'Buying groceries', 'Cooking food'], answer: 1, fromLesson: 'L9.3', topic: 'Agriculture' },
  { id: 14, type: 'fill', text: 'Complete: "La agricultura ___ evita el uso de pesticidas químicos" (organic)', answer: 'orgánica', fromLesson: 'L9.3', topic: 'Organic Farming' },
  { id: 15, type: 'mc', text: '"La soberanía alimentaria" means:', options: ['Food delivery service', 'The right of peoples to control their own food systems', 'A type of restaurant', 'Government food subsidies'], answer: 1, fromLesson: 'L9.3', topic: 'Food Systems' },
  { id: 16, type: 'tf', text: '"El monocultivo" means growing only one type of crop on a large scale.', answer: true, fromLesson: 'L9.3', topic: 'Farming Practices' },
  { id: 17, type: 'mc', text: '"El riego por goteo" is:', options: ['Flood irrigation', 'Drip irrigation', 'Rain-fed farming', 'Hydroponics'], answer: 1, fromLesson: 'L9.3', topic: 'Irrigation' },
  { id: 18, type: 'fill', text: 'Complete: "La ___ de la cadena garantiza el origen del producto" (traceability)', answer: 'trazabilidad', fromLesson: 'L9.3', topic: 'Supply Chain' },
  { id: 19, type: 'mc', text: '"La agroecología" combines:', options: ['Technology and finance', 'Ecological principles with farming practices', 'Tourism and agriculture', 'Architecture and food'], answer: 1, fromLesson: 'L9.3', topic: 'Sustainability' },

  // === L9.4 Tourism & Hospitality (6 questions) ===
  { id: 20, type: 'mc', text: '"El turismo sostenible" prioritizes:', options: ['Maximum tourist numbers', 'Environmental conservation and local community benefit', 'Luxury travel only', 'Government revenue'], answer: 1, fromLesson: 'L9.4', topic: 'Sustainable Tourism' },
  { id: 21, type: 'fill', text: 'Complete: "El ___ turístico incluye alojamiento, transporte y actividades" (package)', answer: 'paquete', fromLesson: 'L9.4', topic: 'Travel Planning' },
  { id: 22, type: 'mc', text: '"La temporada alta" is:', options: ['Low season', 'Peak/high season', 'Shoulder season', 'Off season'], answer: 1, fromLesson: 'L9.4', topic: 'Seasons' },
  { id: 23, type: 'tf', text: '"El ecoturismo" focuses on nature conservation and environmental education.', answer: true, fromLesson: 'L9.4', topic: 'Ecotourism' },
  { id: 24, type: 'mc', text: '"La hostelería" encompasses:', options: ['Only hotels', 'The hospitality industry including hotels and restaurants', 'Hospital care', 'Youth hostels only'], answer: 1, fromLesson: 'L9.4', topic: 'Hospitality' },
  { id: 25, type: 'fill', text: 'Complete: "El patrimonio ___ de la humanidad protege sitios de valor universal" (world)', answer: 'mundial', fromLesson: 'L9.4', topic: 'Heritage' },

  // === L9.5 Journalism & Investigative Reporting (7 questions) ===
  { id: 26, type: 'mc', text: '"La sala de redacción" is:', options: ['A printing press', 'The newsroom', 'A journalism school', 'A library'], answer: 1, fromLesson: 'L9.5', topic: 'Newsroom' },
  { id: 27, type: 'fill', text: 'Complete: "La fuente ___ exige que se proteja su identidad" (confidential)', answer: 'confidencial', fromLesson: 'L9.5', topic: 'Source Protection' },
  { id: 28, type: 'mc', text: '"El sesgo editorial" refers to:', options: ['Good reporting', 'Editorial bias that distorts information', 'A type of headline', 'An editing tool'], answer: 1, fromLesson: 'L9.5', topic: 'Ethics' },
  { id: 29, type: 'tf', text: '"La verificación de hechos" is the process of confirming or debunking claims.', answer: true, fromLesson: 'L9.5', topic: 'Fact-Checking' },
  { id: 30, type: 'mc', text: '"El clickbait" uses:', options: ['Accurate headlines', 'Misleading headlines to generate clicks', 'Government-approved titles', 'Academic references'], answer: 1, fromLesson: 'L9.5', topic: 'Digital Media' },
  { id: 31, type: 'fill', text: 'Complete: "El derecho de ___ permite a las personas responder a informaciones erróneas" (reply)', answer: 'réplica', fromLesson: 'L9.5', topic: 'Press Rights' },
  { id: 32, type: 'mc', text: '"Cruzar datos" means to:', options: ['Delete information', 'Cross-reference data from different sources', 'Publish raw data', 'Encrypt files'], answer: 1, fromLesson: 'L9.5', topic: 'Investigation' },

  // === L9.6 Social Media & Digital Marketing (6 questions) ===
  { id: 33, type: 'mc', text: '"El engagement" measures:', options: ['Website loading speed', 'Audience interaction with content', 'Number of employees', 'Server capacity'], answer: 1, fromLesson: 'L9.6', topic: 'Metrics' },
  { id: 34, type: 'fill', text: 'Complete: "La tasa de ___ mide el porcentaje de visitantes que compran" (conversion)', answer: 'conversión', fromLesson: 'L9.6', topic: 'Analytics' },
  { id: 35, type: 'mc', text: '"El embudo de ventas" visualizes:', options: ['Manufacturing process', 'The customer journey from discovery to purchase', 'Supply chain logistics', 'Employee onboarding'], answer: 1, fromLesson: 'L9.6', topic: 'Sales' },
  { id: 36, type: 'tf', text: '"El contenido patrocinado" must be clearly identified to comply with advertising regulations.', answer: true, fromLesson: 'L9.6', topic: 'Influencer Marketing' },
  { id: 37, type: 'mc', text: '"Las palabras clave" in SEO are:', options: ['Random words', 'Terms users type in search engines', 'Programming commands', 'Social media hashtags only'], answer: 1, fromLesson: 'L9.6', topic: 'SEO' },
  { id: 38, type: 'fill', text: 'Complete: "El ___ de inversión calcula cuánto genera cada dólar invertido" (return)', answer: 'retorno', fromLesson: 'L9.6', topic: 'ROI' },

  // === L9.7 Religion & Spirituality (6 questions) ===
  { id: 39, type: 'mc', text: '"El sincretismo" is:', options: ['Religious intolerance', 'The blending of different religious traditions', 'A type of prayer', 'Church governance'], answer: 1, fromLesson: 'L9.7', topic: 'Syncretism' },
  { id: 40, type: 'fill', text: 'Complete: "La ___ es un viaje sagrado a un lugar de significado religioso" (pilgrimage)', answer: 'peregrinación', fromLesson: 'L9.7', topic: 'Pilgrimage' },
  { id: 41, type: 'mc', text: '"El Día de Muertos" is primarily a celebration of:', options: ['Fear and horror', 'Remembering and honoring deceased loved ones', 'Halloween', 'A harvest festival'], answer: 1, fromLesson: 'L9.7', topic: 'Traditions' },
  { id: 42, type: 'tf', text: '"La ceremonia de limpia" purifies negative energy using herbs and prayers.', answer: true, fromLesson: 'L9.7', topic: 'Spiritual Practices' },
  { id: 43, type: 'mc', text: '"La tolerancia religiosa" recognizes:', options: ['Only one correct religion', 'The right of each person to practice their own faith freely', 'Government control of religion', 'Mandatory church attendance'], answer: 1, fromLesson: 'L9.7', topic: 'Interfaith' },
  { id: 44, type: 'fill', text: 'Complete: "Los ___ son objetos dejados como agradecimiento por milagros" (votive offerings)', answer: 'exvotos', fromLesson: 'L9.7', topic: 'Devotion' },

  // === L9.8 Entrepreneurship & Innovation (6 questions) ===
  { id: 45, type: 'mc', text: '"El MVP" in startup terminology stands for:', options: ['Most Valuable Player', 'Minimum Viable Product', 'Maximum Value Proposition', 'Market Verification Process'], answer: 1, fromLesson: 'L9.8', topic: 'Startup' },
  { id: 46, type: 'fill', text: 'Complete: "El capital ___ es la primera inversión en una startup" (seed)', answer: 'semilla', fromLesson: 'L9.8', topic: 'Funding' },
  { id: 47, type: 'mc', text: '"El pivoteo" means:', options: ['Closing the company', 'A strategic change of business direction', 'Going public on the stock exchange', 'Hiring a new CEO'], answer: 1, fromLesson: 'L9.8', topic: 'Strategy' },
  { id: 48, type: 'tf', text: '"La empresa B certificada" meets rigorous standards of social and environmental performance.', answer: true, fromLesson: 'L9.8', topic: 'Social Enterprise' },
  { id: 49, type: 'mc', text: '"El unicornio" is a startup valued at:', options: ['$1 million', '$10 million', '$100 million', 'Over $1 billion'], answer: 3, fromLesson: 'L9.8', topic: 'Growth' },
  { id: 50, type: 'fill', text: 'Complete: "El triple ___ mide éxito económico, social y ambiental" (impact)', answer: 'impacto', fromLesson: 'L9.8', topic: 'Social Enterprise' },
]

export const L9F_CONFIG = {
  totalQuestions: 25,
  passingScore: 70,
  title: 'Level 9 — Final Assessment',
  subtitle: 'Cultural Immersion & Specialized Communication',
  description: 'This exam covers all Level 9 specializations: architecture, fashion, agriculture, tourism, journalism, digital marketing, religion, and entrepreneurship. Score 70% to earn your badge!',
  badgeEmoji: '🎯',
  badgeName: 'Level 9 — Cultural Immersion Complete',
}
