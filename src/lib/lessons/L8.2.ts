import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Macroeconomics (12) ===
  { spanish: 'El PIB creció un tres por ciento este trimestre', english: 'GDP grew three percent this quarter', pronunciation: 'ehl peeh-EE-beh kreh-see-OH oon trehs pohr see-EHN-toh EHS-teh tree-MEHS-treh', category: 'macroeconomics', audio: 'pib-crecio-tres-por-ciento' },
  { spanish: 'La inflación superó las expectativas del mercado', english: 'Inflation exceeded market expectations', pronunciation: 'lah een-flah-see-OHN soo-peh-ROH lahs ehks-pehk-tah-TEE-bahs dehl mehr-KAH-doh', category: 'macroeconomics', audio: 'inflacion-supero-expectativas' },
  { spanish: 'La tasa de desempleo bajó al cuatro por ciento', english: 'The unemployment rate dropped to four percent', pronunciation: 'lah TAH-sah deh dehs-ehm-PLEH-oh bah-HOH ahl KWAH-troh pohr see-EHN-toh', category: 'macroeconomics', audio: 'tasa-desempleo-bajo' },
  { spanish: 'La deuda externa representa un riesgo fiscal significativo', english: 'Foreign debt represents a significant fiscal risk', pronunciation: 'lah DEH-oo-dah ehks-TEHR-nah rreh-preh-SEHN-tah oon ree-EHS-goh fees-KAHL seeg-nee-fee-kah-TEE-boh', category: 'macroeconomics', audio: 'deuda-externa-riesgo-fiscal' },
  { spanish: 'La balanza comercial muestra un déficit creciente', english: 'The trade balance shows a growing deficit', pronunciation: 'lah bah-LAHN-sah koh-mehr-see-AHL MWEHS-trah oon DEH-fee-seet kreh-see-EHN-teh', category: 'macroeconomics', audio: 'balanza-comercial-deficit' },
  { spanish: 'La política monetaria busca controlar la inflación', english: 'Monetary policy seeks to control inflation', pronunciation: 'lah poh-LEE-tee-kah moh-neh-TAH-ree-ah BOOS-kah kohn-troh-LAHR lah een-flah-see-OHN', category: 'macroeconomics', audio: 'politica-monetaria-inflacion' },
  { spanish: 'Estamos entrando en una recesión económica', english: 'We are entering an economic recession', pronunciation: 'ehs-TAH-mohs ehn-TRAHN-doh ehn OO-nah rreh-seh-see-OHN eh-koh-NOH-mee-kah', category: 'macroeconomics', audio: 'recesion-economica' },
  { spanish: 'La devaluación afectó el poder adquisitivo', english: 'The devaluation affected purchasing power', pronunciation: 'lah deh-bah-loo-ah-see-OHN ah-fehk-TOH ehl poh-DEHR ahd-kee-see-TEE-boh', category: 'macroeconomics', audio: 'devaluacion-poder-adquisitivo' },
  { spanish: 'El banco central subió la tasa de interés', english: 'The central bank raised the interest rate', pronunciation: 'ehl BAHN-koh sehn-TRAHL soo-bee-OH lah TAH-sah deh een-teh-REHS', category: 'macroeconomics', audio: 'banco-central-tasa-interes' },
  { spanish: 'El tipo de cambio se mantiene estable', english: 'The exchange rate remains stable', pronunciation: 'ehl TEE-poh deh KAHM-bee-oh seh mahn-tee-EH-neh ehs-TAH-bleh', category: 'macroeconomics', audio: 'tipo-cambio-estable' },
  { spanish: 'Las exportaciones aumentaron un doce por ciento', english: 'Exports increased by twelve percent', pronunciation: 'lahs ehks-pohr-tah-see-OH-nehs ow-mehn-TAH-rohn oon DOH-seh pohr see-EHN-toh', category: 'macroeconomics', audio: 'exportaciones-aumentaron' },
  { spanish: 'La inversión extranjera directa alcanzó niveles récord', english: 'Foreign direct investment reached record levels', pronunciation: 'lah een-behr-see-OHN ehks-trahn-HEH-rah dee-REHK-tah ahl-kahn-SOH nee-BEH-lehs RREH-kohrd', category: 'macroeconomics', audio: 'inversion-extranjera-record' },

  // === Financial Reports (12) ===
  { spanish: 'El balance general refleja la salud financiera de la empresa', english: 'The balance sheet reflects the company\'s financial health', pronunciation: 'ehl bah-LAHN-seh heh-neh-RAHL rreh-FLEH-hah lah sah-LOOD fee-nahn-see-EH-rah deh lah ehm-PREH-sah', category: 'financial-reports', audio: 'balance-general-salud' },
  { spanish: 'El estado de resultados muestra una ganancia neta', english: 'The income statement shows a net profit', pronunciation: 'ehl ehs-TAH-doh deh rreh-sool-TAH-dohs MWEHS-trah OO-nah gah-NAHN-see-ah NEH-tah', category: 'financial-reports', audio: 'estado-resultados-ganancia' },
  { spanish: 'El flujo de caja operativo fue positivo', english: 'Operating cash flow was positive', pronunciation: 'ehl FLOO-hoh deh KAH-hah oh-peh-rah-TEE-boh fweh poh-see-TEE-boh', category: 'financial-reports', audio: 'flujo-caja-positivo' },
  { spanish: 'Los activos superan a los pasivos en un treinta por ciento', english: 'Assets exceed liabilities by thirty percent', pronunciation: 'lohs ahk-TEE-bohs soo-PEH-rahn ah lohs pah-SEE-bohs ehn oon TREH-een-tah pohr see-EHN-toh', category: 'financial-reports', audio: 'activos-superan-pasivos' },
  { spanish: 'El margen de ganancia se redujo este semestre', english: 'The profit margin decreased this semester', pronunciation: 'ehl MAHR-hehn deh gah-NAHN-see-ah seh rreh-DOO-hoh EHS-teh seh-MEHS-treh', category: 'financial-reports', audio: 'margen-ganancia-redujo' },
  { spanish: 'La rentabilidad del proyecto superó las proyecciones', english: 'The project\'s profitability exceeded projections', pronunciation: 'lah rrehn-tah-bee-lee-DAHD dehl proh-YEHK-toh soo-peh-ROH lahs proh-yehk-see-OH-nehs', category: 'financial-reports', audio: 'rentabilidad-supero-proyecciones' },
  { spanish: 'Los dividendos se distribuirán el próximo mes', english: 'Dividends will be distributed next month', pronunciation: 'lohs dee-bee-DEHN-dohs seh dees-tree-boo-ee-RAHN ehl PROHK-see-moh mehs', category: 'financial-reports', audio: 'dividendos-proximo-mes' },
  { spanish: 'Los ingresos brutos aumentaron considerablemente', english: 'Gross revenue increased considerably', pronunciation: 'lohs een-GREH-sohs BROO-tohs ow-mehn-TAH-rohn kohn-see-deh-RAH-bleh-MEHN-teh', category: 'financial-reports', audio: 'ingresos-brutos-aumentaron' },
  { spanish: 'El apalancamiento financiero es demasiado alto', english: 'Financial leverage is too high', pronunciation: 'ehl ah-pah-lahn-kah-mee-EHN-toh fee-nahn-see-EH-roh ehs deh-mah-see-AH-doh AHL-toh', category: 'financial-reports', audio: 'apalancamiento-alto' },
  { spanish: 'La depreciación de los activos se registró correctamente', english: 'Asset depreciation was recorded correctly', pronunciation: 'lah deh-preh-see-ah-see-OHN deh lohs ahk-TEE-bohs seh rreh-hees-TROH koh-rrehk-tah-MEHN-teh', category: 'financial-reports', audio: 'depreciacion-activos' },
  { spanish: 'El retorno sobre la inversión fue del quince por ciento', english: 'The return on investment was fifteen percent', pronunciation: 'ehl rreh-TOHR-noh SOH-breh lah een-behr-see-OHN fweh dehl KEEN-seh pohr see-EHN-toh', category: 'financial-reports', audio: 'retorno-inversion-quince' },
  { spanish: 'Debemos auditar los estados financieros trimestrales', english: 'We must audit the quarterly financial statements', pronunciation: 'deh-BEH-mohs ow-dee-TAHR lohs ehs-TAH-dohs fee-nahn-see-EH-rohs tree-mehs-TRAH-lehs', category: 'financial-reports', audio: 'auditar-estados-financieros' },

  // === Startup & Innovation (12) ===
  { spanish: 'Necesitamos capital de riesgo para escalar', english: 'We need venture capital to scale', pronunciation: 'neh-seh-see-TAH-mohs kah-pee-TAHL deh ree-EHS-goh PAH-rah ehs-kah-LAHR', category: 'startup-innovation', audio: 'capital-riesgo-escalar' },
  { spanish: 'Cerramos nuestra ronda de inversión Serie A', english: 'We closed our Series A investment round', pronunciation: 'seh-RRAH-mohs NWEHS-trah RROHN-dah deh een-behr-see-OHN SEH-ree-eh AH', category: 'startup-innovation', audio: 'ronda-inversion-serie-a' },
  { spanish: 'La escalabilidad del producto es nuestra prioridad', english: 'Product scalability is our priority', pronunciation: 'lah ehs-kah-lah-bee-lee-DAHD dehl proh-DOOK-toh ehs NWEHS-trah pree-oh-ree-DAHD', category: 'startup-innovation', audio: 'escalabilidad-prioridad' },
  { spanish: 'Nuestro modelo de negocio se basa en suscripciones', english: 'Our business model is subscription-based', pronunciation: 'NWEHS-troh moh-DEH-loh deh neh-GOH-see-oh seh BAH-sah ehn soos-kreep-see-OH-nehs', category: 'startup-innovation', audio: 'modelo-negocio-suscripciones' },
  { spanish: 'La propuesta de valor nos diferencia del mercado', english: 'The value proposition differentiates us from the market', pronunciation: 'lah proh-PWEHS-tah deh bah-LOHR nohs dee-feh-REHN-see-ah dehl mehr-KAH-doh', category: 'startup-innovation', audio: 'propuesta-valor-diferencia' },
  { spanish: 'La incubadora de empresas nos brindó mentoría', english: 'The business incubator provided us mentorship', pronunciation: 'lah een-koo-bah-DOH-rah deh ehm-PREH-sahs nohs breen-DOH mehn-toh-REE-ah', category: 'startup-innovation', audio: 'incubadora-mentoria' },
  { spanish: 'Alcanzamos el punto de equilibrio en seis meses', english: 'We reached break-even in six months', pronunciation: 'ahl-kahn-SAH-mohs ehl POON-toh deh eh-kee-LEE-bree-oh ehn SEH-ees MEH-sehs', category: 'startup-innovation', audio: 'punto-equilibrio-seis-meses' },
  { spanish: 'El producto mínimo viable ya está en el mercado', english: 'The minimum viable product is already on the market', pronunciation: 'ehl proh-DOOK-toh MEE-nee-moh bee-AH-bleh yah ehs-TAH ehn ehl mehr-KAH-doh', category: 'startup-innovation', audio: 'producto-minimo-viable' },
  { spanish: 'Buscamos pivotar hacia un nuevo segmento', english: 'We are looking to pivot toward a new segment', pronunciation: 'boos-KAH-mohs pee-boh-TAHR AH-see-ah oon NWEH-boh sehg-MEHN-toh', category: 'startup-innovation', audio: 'pivotar-nuevo-segmento' },
  { spanish: 'La tasa de retención de usuarios es del ochenta por ciento', english: 'The user retention rate is eighty percent', pronunciation: 'lah TAH-sah deh rreh-tehn-see-OHN deh oo-SWAH-ree-ohs ehs dehl oh-CHEHN-tah pohr see-EHN-toh', category: 'startup-innovation', audio: 'tasa-retencion-usuarios' },
  { spanish: 'Estamos en conversaciones con inversores ángeles', english: 'We are in talks with angel investors', pronunciation: 'ehs-TAH-mohs ehn kohn-behr-sah-see-OH-nehs kohn een-behr-SOH-rehs AHN-heh-lehs', category: 'startup-innovation', audio: 'inversores-angeles' },
  { spanish: 'La aceleradora nos conectó con fondos internacionales', english: 'The accelerator connected us with international funds', pronunciation: 'lah ah-seh-leh-rah-DOH-rah nohs koh-nehk-TOH kohn FOHN-dohs een-tehr-nah-see-oh-NAH-lehs', category: 'startup-innovation', audio: 'aceleradora-fondos-internacionales' },

  // === Strategy & Analysis (12) ===
  { spanish: 'El análisis FODA reveló debilidades en distribución', english: 'The SWOT analysis revealed distribution weaknesses', pronunciation: 'ehl ah-NAH-lee-sees FOH-dah rreh-beh-LOH deh-bee-lee-DAH-dehs ehn dees-tree-boo-see-OHN', category: 'strategy-analysis', audio: 'analisis-foda-debilidades' },
  { spanish: 'Nuestra ventaja competitiva es la tecnología propia', english: 'Our competitive advantage is proprietary technology', pronunciation: 'NWEHS-trah behn-TAH-hah kohm-peh-tee-TEE-bah ehs lah tehk-noh-loh-HEE-ah PROH-pee-ah', category: 'strategy-analysis', audio: 'ventaja-competitiva-tecnologia' },
  { spanish: 'La cuota de mercado aumentó al veintidós por ciento', english: 'Market share increased to twenty-two percent', pronunciation: 'lah KWOH-tah deh mehr-KAH-doh ow-mehn-TOH ahl behn-tee-DOHS pohr see-EHN-toh', category: 'strategy-analysis', audio: 'cuota-mercado-veintidos' },
  { spanish: 'La segmentación del mercado identifica tres perfiles clave', english: 'Market segmentation identifies three key profiles', pronunciation: 'lah sehg-mehn-tah-see-OHN dehl mehr-KAH-doh ee-dehn-tee-FEE-kah trehs pehr-FEE-lehs KLAH-beh', category: 'strategy-analysis', audio: 'segmentacion-tres-perfiles' },
  { spanish: 'El posicionamiento de marca se enfoca en sostenibilidad', english: 'Brand positioning focuses on sustainability', pronunciation: 'ehl poh-see-see-oh-nah-mee-EHN-toh deh MAHR-kah seh ehn-FOH-kah ehn sohs-teh-nee-bee-lee-DAHD', category: 'strategy-analysis', audio: 'posicionamiento-sostenibilidad' },
  { spanish: 'La cadena de suministro fue interrumpida por la pandemia', english: 'The supply chain was disrupted by the pandemic', pronunciation: 'lah kah-DEH-nah deh soo-mee-NEES-troh fweh een-teh-rroom-PEE-dah pohr lah pahn-DEH-mee-ah', category: 'strategy-analysis', audio: 'cadena-suministro-pandemia' },
  { spanish: 'Implementaremos una estrategia de diversificación', english: 'We will implement a diversification strategy', pronunciation: 'eem-pleh-mehn-tah-REH-mohs OO-nah ehs-trah-TEH-hee-ah deh dee-behr-see-fee-kah-see-OHN', category: 'strategy-analysis', audio: 'estrategia-diversificacion' },
  { spanish: 'El análisis de la competencia muestra tres rivales principales', english: 'Competitor analysis shows three main rivals', pronunciation: 'ehl ah-NAH-lee-sees deh lah kohm-peh-TEHN-see-ah MWEHS-trah trehs ree-BAH-lehs preen-see-PAH-lehs', category: 'strategy-analysis', audio: 'analisis-competencia-rivales' },
  { spanish: 'La matriz de riesgo prioriza los escenarios críticos', english: 'The risk matrix prioritizes critical scenarios', pronunciation: 'lah mah-TREES deh ree-EHS-goh pree-oh-REE-sah lohs ehs-seh-NAH-ree-ohs KREE-tee-kohs', category: 'strategy-analysis', audio: 'matriz-riesgo-escenarios' },
  { spanish: 'Debemos optimizar la estructura de costos', english: 'We must optimize the cost structure', pronunciation: 'deh-BEH-mohs ohp-tee-mee-SAHR lah ehs-trook-TOO-rah deh KOHS-tohs', category: 'strategy-analysis', audio: 'optimizar-estructura-costos' },
  { spanish: 'La alianza estratégica nos abre nuevos mercados', english: 'The strategic alliance opens new markets for us', pronunciation: 'lah ah-lee-AHN-sah ehs-trah-TEH-hee-kah nohs AH-breh NWEH-bohs mehr-KAH-dohs', category: 'strategy-analysis', audio: 'alianza-estrategica-mercados' },
  { spanish: 'El plan quinquenal contempla expansión regional', english: 'The five-year plan includes regional expansion', pronunciation: 'ehl plahn keen-keh-NAHL kohn-TEHM-plah ehks-pahn-see-OHN rreh-hee-oh-NAHL', category: 'strategy-analysis', audio: 'plan-quinquenal-expansion' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L82PhraseByAudio = phraseByAudio

// === MARKET ANALYST CHALLENGE (unique activity) ===

export interface MarketAnalystChallenge {
  scenario: string
  english: string
  correctStrategy: string
  options: string[]
}

export const MARKET_ANALYST_CHALLENGES: MarketAnalystChallenge[] = [
  {
    scenario: 'Una startup de fintech en Bogotá tiene un producto mínimo viable con buena retención pero necesita expandirse a México y Brasil. ¿Cuál es la mejor estrategia?',
    english: 'A Bogotá fintech startup has an MVP with good retention but needs to expand to Mexico and Brazil.',
    correctStrategy: 'Buscar una ronda Serie A para financiar la expansión regional',
    options: ['Buscar una ronda Serie A para financiar la expansión regional', 'Reducir costos operativos inmediatamente', 'Pivotar hacia un mercado completamente diferente', 'Esperar a que el mercado venga a nosotros'],
  },
  {
    scenario: 'El informe trimestral muestra que los ingresos bajaron un 15% y la deuda externa aumentó. La inflación del país supera el 8%. ¿Qué recomiendas?',
    english: 'The quarterly report shows revenue down 15% and rising foreign debt. National inflation exceeds 8%.',
    correctStrategy: 'Optimizar la estructura de costos y diversificar fuentes de ingreso',
    options: ['Aumentar los precios en un 20%', 'Optimizar la estructura de costos y diversificar fuentes de ingreso', 'Solicitar más deuda para cubrir el déficit', 'Reducir el equipo a la mitad sin reestructurar'],
  },
  {
    scenario: 'Una empresa de e-commerce en CDMX tiene una cuota de mercado del 5% pero su ventaja competitiva es la entrega en 24 horas. Los competidores ofrecen precios más bajos.',
    english: 'A Mexico City e-commerce company has 5% market share but 24-hour delivery advantage. Competitors offer lower prices.',
    correctStrategy: 'Fortalecer el posicionamiento de marca en velocidad y confiabilidad',
    options: ['Igualar los precios de la competencia', 'Fortalecer el posicionamiento de marca en velocidad y confiabilidad', 'Eliminar el servicio de entrega rápida para reducir costos', 'Enfocarse solo en productos de lujo'],
  },
  {
    scenario: 'El análisis FODA de una cadena de restaurantes en Lima revela que las fortalezas son la receta tradicional y la ubicación, pero la debilidad es la falta de presencia digital.',
    english: 'A Lima restaurant chain\'s SWOT shows strengths in traditional recipes and location, but weakness in digital presence.',
    correctStrategy: 'Implementar una estrategia de marketing digital manteniendo la identidad tradicional',
    options: ['Cambiar completamente el menú para atraer turistas', 'Cerrar las ubicaciones físicas y vender solo en línea', 'Implementar una estrategia de marketing digital manteniendo la identidad tradicional', 'Ignorar lo digital y enfocarse solo en el boca a boca'],
  },
  {
    scenario: 'Una empresa de tecnología en Medellín alcanzó el punto de equilibrio pero la tasa de retención de usuarios cayó al 40%. El producto mínimo viable necesita mejoras.',
    english: 'A Medellín tech company reached break-even but user retention dropped to 40%. The MVP needs improvements.',
    correctStrategy: 'Invertir en mejoras del producto basándose en feedback de usuarios',
    options: ['Lanzar una campaña de marketing masiva', 'Invertir en mejoras del producto basándose en feedback de usuarios', 'Buscar inversores ángeles para un nuevo producto', 'Subir los precios para compensar la pérdida de usuarios'],
  },
  {
    scenario: 'La balanza comercial de un país muestra un déficit creciente. El banco central subió la tasa de interés al 11%. Las exportaciones agrícolas son el principal ingreso.',
    english: 'A country\'s trade balance shows growing deficit. Central bank raised rates to 11%. Agricultural exports are the main income.',
    correctStrategy: 'Diversificar las exportaciones y agregar valor a los productos agrícolas',
    options: ['Devaluar la moneda para hacer las exportaciones más baratas', 'Diversificar las exportaciones y agregar valor a los productos agrícolas', 'Aumentar las importaciones de bienes de lujo', 'Bajar la tasa de interés para estimular el consumo interno'],
  },
  {
    scenario: 'Una aceleradora en Buenos Aires conectó a tu startup con fondos internacionales. Tienes dos ofertas: una con mayor capital pero pérdida de control, otra con menos capital pero mantiene autonomía.',
    english: 'A Buenos Aires accelerator connected your startup with international funds. Two offers: more capital but lose control, or less capital but keep autonomy.',
    correctStrategy: 'Aceptar la oferta con menos capital que mantiene la autonomía del equipo fundador',
    options: ['Aceptar la oferta con más capital sin importar las condiciones', 'Rechazar ambas ofertas y buscar financiamiento propio', 'Aceptar la oferta con menos capital que mantiene la autonomía del equipo fundador', 'Negociar para combinar ambas ofertas en una sola'],
  },
]

// === LESSON DATA ===

export const L82Data: LessonData = {
  id: 'L8.2',
  hero: {
    lessonId: 'L8.2',
    title: 'Economics & Business Strategy',
    subtitle: 'Mastering the language of markets, finance, and innovation',
    description: 'Dive into the specialized vocabulary of macroeconomics, financial reporting, startup ecosystems, and strategic analysis. From discussing GDP and inflation to pitching a startup and dissecting SWOT analyses — command the boardroom in Spanish.',
    image: '/images/L8.2/L8.2.jpg',
    gradient: 'from-emerald-800/65 via-teal-700/55 to-cyan-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '📊', title: 'Macroeconomics', desc: 'Discuss PIB, inflation, unemployment, monetary policy, and trade balances with precision.' },
    { icon: '📋', title: 'Financial Reports', desc: 'Read and present balance sheets, income statements, cash flow, ROI, and dividends.' },
    { icon: '🚀', title: 'Startup Ecosystem', desc: 'Navigate venture capital, investment rounds, scalability, MVPs, and incubators.' },
    { icon: '🎯', title: 'Strategic Analysis', desc: 'Conduct SWOT analyses, assess competitive advantage, market share, and supply chains.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.6', label: 'Banking & Finance', detail: 'L4.6 covered personal banking. Now apply financial language to corporate reports and macroeconomics.' },
    { fromLesson: 'L5.5', label: 'Professional Spanish', detail: 'L5.5 introduced workplace communication. Now elevate to C-suite strategy and investor presentations.' },
    { fromLesson: 'L7.6', label: 'Diplomacy & Negotiation', detail: 'L7.6 taught diplomatic register. Apply that tact to boardroom negotiations and stakeholder management.' },
  ],

  sectionTransitions: [
    { afterSection: 'macroeconomics', text: 'You can analyze national economies! Now let\'s dive into corporate financial statements.' },
    { afterSection: 'financial-reports', text: 'Financial reports mastered! Time to enter the exciting world of startups and innovation.' },
    { afterSection: 'startup-innovation', text: 'Startup vocabulary locked in! Let\'s apply strategic frameworks to real business scenarios.' },
    { afterSection: 'dialogues', text: 'Brilliant boardroom conversations! Let\'s explore how economics shapes Latin American culture.' },
    { afterSection: 'cultural', text: 'Now put your strategic mind to the test in the Market Analyst Challenge!' },
    { afterSection: 'market-analyst', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El PIB...', english: 'The GDP...' },
    { spanish: 'La tasa de...', english: 'The rate of...' },
    { spanish: 'El margen de ganancia...', english: 'The profit margin...' },
    { spanish: 'Capital de riesgo...', english: 'Venture capital...' },
    { spanish: 'La cuota de mercado...', english: 'Market share...' },
    { spanish: 'El análisis FODA...', english: 'The SWOT analysis...' },
  ],

  pronunciationChallenges: [
    { spanish: 'El producto interno bruto creció significativamente', pronunciation: 'ehl proh-DOOK-toh een-TEHR-noh BROO-toh kreh-see-OH seeg-nee-fee-kah-tee-bah-MEHN-teh', english: 'The gross domestic product grew significantly', audio: 'pib-crecio-tres-por-ciento', tip: '"PIB" (Producto Interno Bruto) is how GDP is said in Spanish. Note: in Spain they say "PIB" as letters; in Latin America it\'s often pronounced as a word: "peeb."' },
    { spanish: 'Los dividendos se distribuirán trimestralmente', pronunciation: 'lohs dee-bee-DEHN-dohs seh dees-tree-boo-ee-RAHN tree-mehs-TRAHL-mehn-teh', english: 'Dividends will be distributed quarterly', audio: 'dividendos-proximo-mes', tip: '"Dividendos" has four syllables: di-vi-DEN-dos. The stress falls on the third syllable. "Trimestralmente" means quarterly — from "trimestre" (quarter/semester).' },
    { spanish: 'La escalabilidad garantiza el crecimiento sostenido', pronunciation: 'lah ehs-kah-lah-bee-lee-DAHD gah-rahn-TEE-sah ehl kreh-see-mee-EHN-toh sohs-teh-NEE-doh', english: 'Scalability guarantees sustained growth', audio: 'escalabilidad-prioridad', tip: '"Escalabilidad" is a six-syllable word: es-ca-la-bi-li-DAD. Business terms in Spanish often add "-idad" where English uses "-ity": scalability → escalabilidad, profitability → rentabilidad.' },
    { spanish: 'La ventaja competitiva radica en la innovación', pronunciation: 'lah behn-TAH-hah kohm-peh-tee-TEE-bah rah-DEE-kah ehn lah ee-noh-bah-see-OHN', english: 'The competitive advantage lies in innovation', audio: 'ventaja-competitiva-tecnologia', tip: '"Ventaja competitiva" — note the soft "b" in "ventaja" (sounds almost like "v" but lips barely touch). "Radica" means "lies in/resides in" — a formal verb common in business Spanish.' },
    { spanish: 'Debemos reestructurar la cadena de suministro', pronunciation: 'deh-BEH-mohs rreh-ehs-trook-too-RAHR lah kah-DEH-nah deh soo-mee-NEES-troh', english: 'We must restructure the supply chain', audio: 'cadena-suministro-pandemia', tip: '"Cadena de suministro" (supply chain) — "suministro" has the stress on the third syllable: su-mi-NIS-tro. "Reestructurar" starts with a rolled "rr" sound.' },
    { spanish: 'El retorno sobre la inversión supera las expectativas', pronunciation: 'ehl rreh-TOHR-noh SOH-breh lah een-behr-see-OHN soo-PEH-rah lahs ehks-pehk-tah-TEE-bahs', english: 'The return on investment exceeds expectations', audio: 'retorno-inversion-quince', tip: '"ROI" in Spanish is "RSI" (Retorno Sobre la Inversión) but many professionals just say "el retorno." Note: "inversión" has the stress on the final syllable, typical of words ending in -ión.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'macroeconomics', label: 'Macroeconomics' },
    { id: 'financial-reports', label: 'Financial Reports' },
    { id: 'startup-innovation', label: 'Startup & Innovation' },
    { id: 'strategy-analysis', label: 'Strategy & Analysis' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Term Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'market-analyst', label: 'Market Analyst' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'macroeconomics',
      title: 'Macroeconomics — Macroeconomía',
      description: 'Key terms for discussing national economies: GDP, inflation, monetary policy, trade balances, and economic cycles.',
      tabs: [
        { label: 'Indicators & Policy', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'macroeconomics').slice(0, 6) },
        { label: 'Markets & Trade', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'macroeconomics').slice(6) },
      ],
    },
    {
      id: 'financial-reports',
      title: 'Financial Reports — Informes Financieros',
      description: 'Navigate balance sheets, income statements, cash flow, profitability metrics, and audit terminology.',
      tabs: [
        { label: 'Statements & Metrics', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'financial-reports').slice(0, 6) },
        { label: 'Analysis & Audit', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'financial-reports').slice(6) },
      ],
    },
    {
      id: 'startup-innovation',
      title: 'Startup & Innovation — Emprendimiento e Innovación',
      description: 'Venture capital, investment rounds, scalability, business models, and the Latin American startup ecosystem.',
      tabs: [
        { label: 'Funding & Growth', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'startup-innovation').slice(0, 6) },
        { label: 'Product & Users', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'startup-innovation').slice(6) },
      ],
    },
    {
      id: 'strategy-analysis',
      title: 'Strategy & Analysis — Estrategia y Análisis',
      description: 'SWOT analysis, competitive positioning, market segmentation, supply chain management, and long-term planning.',
      tabs: [
        { label: 'Competitive Landscape', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'strategy-analysis').slice(0, 6) },
        { label: 'Planning & Execution', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'strategy-analysis').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Financial Abbreviations in Spanish',
      content: 'Spanish uses different abbreviations than English: GDP = PIB (Producto Interno Bruto), SWOT = FODA (Fortalezas, Oportunidades, Debilidades, Amenazas), ROI = RSI (Retorno Sobre la Inversión), IPO = OPI (Oferta Pública Inicial). Some professionals use the English abbreviations in casual speech, but formal reports always use Spanish ones.',
      example: 'El PIB del país | Un análisis FODA | El RSI del proyecto | La OPI fue exitosa',
    },
    {
      title: 'The "-idad" Suffix for Business Concepts',
      content: 'Many English business terms ending in "-ity" become "-idad" in Spanish: scalability → escalabilidad, profitability → rentabilidad, sustainability → sostenibilidad, productivity → productividad. The stress always falls on the final "-DAD" syllable.',
      example: 'La rentabilidad | La escalabilidad | La sostenibilidad | La productividad',
      reviewFrom: 'L5.5',
    },
    {
      title: 'Formal Register in Board Meetings',
      content: 'Business Spanish in formal contexts uses "usted" forms and subjunctive constructions: "Les sugiero que consideremos..." (I suggest we consider...), "Es imperativo que optimicemos..." (It is imperative that we optimize...). The subjunctive signals deference and professionalism in corporate settings.',
      example: 'Les propongo que analicemos los datos. | Es fundamental que diversifiquemos.',
      reviewFrom: 'L7.6',
    },
    {
      title: 'Economic Terms with Double Meanings',
      content: '"Capital" means both "capital city" and "financial capital." "Mercado" means both "market (financial)" and "market (place to buy food)." "Inversión" means "investment" but also "inversion" in science. Context determines meaning — in a boardroom, "el mercado" is always the financial market.',
      example: 'Capital de riesgo (venture capital) vs. la capital (capital city) | El mercado bursátil (stock market)',
    },
  ],

  flashcardGroups: [
    {
      key: 'macroeconomics',
      label: 'Macroeconomics',
      audioKeys: ['pib-crecio-tres-por-ciento', 'inflacion-supero-expectativas', 'tasa-desempleo-bajo', 'deuda-externa-riesgo-fiscal', 'balanza-comercial-deficit', 'politica-monetaria-inflacion', 'recesion-economica', 'devaluacion-poder-adquisitivo', 'banco-central-tasa-interes', 'tipo-cambio-estable', 'exportaciones-aumentaron', 'inversion-extranjera-record'],
    },
    {
      key: 'financial-reports',
      label: 'Financial Reports',
      audioKeys: ['balance-general-salud', 'estado-resultados-ganancia', 'flujo-caja-positivo', 'activos-superan-pasivos', 'margen-ganancia-redujo', 'rentabilidad-supero-proyecciones', 'dividendos-proximo-mes', 'ingresos-brutos-aumentaron', 'apalancamiento-alto', 'depreciacion-activos', 'retorno-inversion-quince', 'auditar-estados-financieros'],
    },
    {
      key: 'startup-strategy',
      label: 'Startup & Strategy',
      audioKeys: ['capital-riesgo-escalar', 'ronda-inversion-serie-a', 'escalabilidad-prioridad', 'modelo-negocio-suscripciones', 'propuesta-valor-diferencia', 'punto-equilibrio-seis-meses', 'analisis-foda-debilidades', 'ventaja-competitiva-tecnologia', 'cuota-mercado-veintidos', 'cadena-suministro-pandemia'],
    },
  ],

  matchPairs: [
    { left: 'PIB', right: 'GDP' },
    { left: 'Flujo de caja', right: 'Cash flow' },
    { left: 'Capital de riesgo', right: 'Venture capital' },
    { left: 'Análisis FODA', right: 'SWOT analysis' },
    { left: 'Cuota de mercado', right: 'Market share' },
    { left: 'Punto de equilibrio', right: 'Break-even point' },
    { left: 'Rentabilidad', right: 'Profitability' },
    { left: 'Cadena de suministro', right: 'Supply chain' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Macro vs. Corporate',
      instruction: 'Does this term belong to macroeconomics or corporate finance?',
      buckets: ['Macroeconomics 📊', 'Corporate Finance 📋'],
      items: [
        { text: 'PIB', bucket: 'Macroeconomics 📊' },
        { text: 'Inflación', bucket: 'Macroeconomics 📊' },
        { text: 'Balanza comercial', bucket: 'Macroeconomics 📊' },
        { text: 'Política monetaria', bucket: 'Macroeconomics 📊' },
        { text: 'Balance general', bucket: 'Corporate Finance 📋' },
        { text: 'Margen de ganancia', bucket: 'Corporate Finance 📋' },
        { text: 'Dividendos', bucket: 'Corporate Finance 📋' },
        { text: 'Flujo de caja', bucket: 'Corporate Finance 📋' },
      ],
    },
    {
      title: 'Startup vs. Strategy',
      instruction: 'Is this term about startups or strategic analysis?',
      buckets: ['Startup 🚀', 'Strategy 🎯'],
      items: [
        { text: 'Capital de riesgo', bucket: 'Startup 🚀' },
        { text: 'Ronda de inversión', bucket: 'Startup 🚀' },
        { text: 'Producto mínimo viable', bucket: 'Startup 🚀' },
        { text: 'Incubadora de empresas', bucket: 'Startup 🚀' },
        { text: 'Análisis FODA', bucket: 'Strategy 🎯' },
        { text: 'Ventaja competitiva', bucket: 'Strategy 🎯' },
        { text: 'Segmentación del mercado', bucket: 'Strategy 🎯' },
        { text: 'Cadena de suministro', bucket: 'Strategy 🎯' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Term Sorting',

  dialogues: [
    {
      id: 'dialogue-boardroom',
      title: 'Quarterly Board Meeting — Ciudad de México',
      location: 'Mexico City',
      lines: [
        { speaker: 'Directora García', text: 'Buenos días a todos. Comencemos con el informe trimestral. Licenciada Morales, ¿cómo estuvieron los números?', audio: '/audio/L8.2/phrases/d1-line1.mp3' },
        { speaker: 'Lic. Morales', text: 'El PIB del sector tecnológico creció un cuatro por ciento, lo cual benefició nuestras ventas directamente.', audio: '/audio/L8.2/phrases/d1-line2.mp3' },
        { speaker: 'Dir. García', text: 'Excelente. ¿Y el estado de resultados?', audio: '/audio/L8.2/phrases/d1-line3.mp3' },
        { speaker: 'Lic. Morales', text: 'Los ingresos brutos aumentaron un doce por ciento. Sin embargo, el margen de ganancia se redujo por el aumento en costos de suministro.', audio: '/audio/L8.2/phrases/d1-line4.mp3', annotations: [{ phrase: 'margen de ganancia', fromLesson: 'L4.6', note: 'Financial metric vocabulary from L4.6 Banking & Finance' }] },
        { speaker: 'Ing. Delgado', text: 'Les sugiero que optimicemos la cadena de suministro. He identificado tres proveedores alternativos con mejores precios.', audio: '/audio/L8.2/phrases/d1-line5.mp3' },
        { speaker: 'Dir. García', text: '¿Cuál sería el impacto en la rentabilidad si cambiamos de proveedores?', audio: '/audio/L8.2/phrases/d1-line6.mp3' },
        { speaker: 'Ing. Delgado', text: 'Estimamos un aumento del ocho por ciento en el margen neto. El retorno sobre la inversión se vería en dos trimestres.', audio: '/audio/L8.2/phrases/d1-line7.mp3' },
        { speaker: 'Lic. Morales', text: 'También recomiendo que diversifiquemos hacia el mercado centroamericano. El análisis FODA muestra oportunidades claras en Guatemala y Costa Rica.', audio: '/audio/L8.2/phrases/d1-line8.mp3', annotations: [{ phrase: 'análisis FODA', fromLesson: 'L7.6', note: 'Strategic framework using diplomatic language from L7.6' }] },
        { speaker: 'Dir. García', text: 'Me parece una propuesta sólida. ¿Los activos actuales soportan esa expansión?', audio: '/audio/L8.2/phrases/d1-line9.mp3' },
        { speaker: 'Lic. Morales', text: 'Sí, los activos superan los pasivos en un treinta por ciento. Tenemos capacidad financiera.', audio: '/audio/L8.2/phrases/d1-line10.mp3' },
        { speaker: 'Ing. Delgado', text: 'Además, podríamos buscar una alianza estratégica con distribuidores locales para reducir el riesgo.', audio: '/audio/L8.2/phrases/d1-line11.mp3' },
        { speaker: 'Dir. García', text: 'Perfecto. Aprobemos el plan quinquenal con estas modificaciones. Los dividendos se distribuirán como estaba programado.', audio: '/audio/L8.2/phrases/d1-line12.mp3' },
        { speaker: 'Lic. Morales', text: 'Entendido, directora. Prepararé el informe actualizado para el consejo de accionistas.', audio: '/audio/L8.2/phrases/d1-line13.mp3' },
        { speaker: 'Dir. García', text: 'Excelente trabajo, equipo. La próxima reunión será en tres semanas. Muchas gracias.', audio: '/audio/L8.2/phrases/d1-line14.mp3' },
        { speaker: 'Todos', text: 'Gracias, directora.', audio: '/audio/L8.2/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-pitch',
      title: 'Startup Pitch at an Accelerator — Medellín',
      location: 'Medellín',
      lines: [
        { speaker: 'Camilo', text: 'Buenas tardes, inversores. Soy Camilo Restrepo, fundador de AgroTech Solutions. Hoy les presento nuestra ronda Serie A.', audio: '/audio/L8.2/phrases/d2-line1.mp3' },
        { speaker: 'Camilo', text: 'Nuestro modelo de negocio se basa en suscripciones mensuales para pequeños agricultores que necesitan datos climáticos y de mercado en tiempo real.', audio: '/audio/L8.2/phrases/d2-line2.mp3' },
        { speaker: 'Inversora Ruiz', text: '¿Cuál es su propuesta de valor frente a competidores como FarmAI?', audio: '/audio/L8.2/phrases/d2-line3.mp3' },
        { speaker: 'Camilo', text: 'Nuestra ventaja competitiva es que operamos en español y portugués con datos hiperlocales. FarmAI solo cubre Norteamérica.', audio: '/audio/L8.2/phrases/d2-line4.mp3', annotations: [{ phrase: 'ventaja competitiva', fromLesson: 'L5.5', note: 'Professional competitive language from L5.5' }] },
        { speaker: 'Inversora Ruiz', text: '¿Ya alcanzaron el punto de equilibrio?', audio: '/audio/L8.2/phrases/d2-line5.mp3' },
        { speaker: 'Camilo', text: 'Sí, lo alcanzamos en seis meses. La tasa de retención de usuarios es del ochenta por ciento y estamos creciendo un veinte por ciento mensual.', audio: '/audio/L8.2/phrases/d2-line6.mp3' },
        { speaker: 'Inversor Patel', text: '¿Qué tan escalable es el producto? ¿Pueden entrar a Brasil y México rápidamente?', audio: '/audio/L8.2/phrases/d2-line7.mp3' },
        { speaker: 'Camilo', text: 'La escalabilidad es nuestra prioridad. La incubadora de empresas Ruta N nos brindó mentoría y ya tenemos contactos en São Paulo y Guadalajara.', audio: '/audio/L8.2/phrases/d2-line8.mp3' },
        { speaker: 'Inversora Ruiz', text: '¿Cuánto capital de riesgo necesitan y cómo lo usarían?', audio: '/audio/L8.2/phrases/d2-line9.mp3' },
        { speaker: 'Camilo', text: 'Buscamos dos millones de dólares. El sesenta por ciento para expansión regional, el treinta para desarrollo de producto y el diez para marketing.', audio: '/audio/L8.2/phrases/d2-line10.mp3' },
        { speaker: 'Inversor Patel', text: '¿Cuál es el retorno sobre la inversión proyectado a tres años?', audio: '/audio/L8.2/phrases/d2-line11.mp3' },
        { speaker: 'Camilo', text: 'Proyectamos un RSI del trescientos por ciento en tres años, basado en nuestro crecimiento actual y la demanda del mercado agrícola latinoamericano.', audio: '/audio/L8.2/phrases/d2-line12.mp3' },
        { speaker: 'Inversora Ruiz', text: 'Es un mercado enorme. Me gustaría revisar sus estados financieros detallados.', audio: '/audio/L8.2/phrases/d2-line13.mp3' },
        { speaker: 'Camilo', text: 'Por supuesto. Les enviaré el balance general, el estado de resultados y las proyecciones de flujo de caja esta misma tarde.', audio: '/audio/L8.2/phrases/d2-line14.mp3' },
        { speaker: 'Inversora Ruiz', text: 'Excelente presentación, Camilo. Agendemos una reunión de seguimiento la próxima semana.', audio: '/audio/L8.2/phrases/d2-line15.mp3' },
        { speaker: 'Camilo', text: '¡Con mucho gusto! Gracias por su tiempo e interés en AgroTech Solutions.', audio: '/audio/L8.2/phrases/d2-line16.mp3' },
        { speaker: 'Inversor Patel', text: 'Gracias a usted. Colombia está produciendo startups impresionantes.', audio: '/audio/L8.2/phrases/d2-line17.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Present quarterly financial results in a Mexico City boardroom and pitch a startup to investors at a Medellín accelerator.',

  culturalNotes: [
    {
      title: 'The Latin American Startup Boom',
      content: 'Latin America has become one of the fastest-growing startup ecosystems in the world. Cities like São Paulo, Mexico City, Bogotá, and Medellín are home to "unicornios" (unicorns) worth over $1 billion — including Rappi (Colombia), Nubank (Brazil), and Kavak (Mexico). "Ruta N" in Medellín, "Wayra" by Telefónica, and "NXTP Labs" in Buenos Aires are major accelerators. When doing business in Latin America, understanding terms like "emprendimiento" (entrepreneurship), "aceleradora," and "ronda de inversión" is essential. The region\'s startup culture blends Silicon Valley practices with a uniquely Latin emphasis on social impact — many startups aim to solve problems in financial inclusion, agriculture, and education.',
    },
    {
      title: 'Remittances & the Informal Economy',
      content: 'Remittances — "remesas" in Spanish — are a lifeline for many Latin American economies. Mexico alone receives over $60 billion annually from workers abroad. These funds represent a significant portion of GDP for countries like Guatemala, Honduras, and El Salvador. The "economía informal" (informal economy) also plays a massive role: in Mexico, roughly 55% of workers operate informally. Business discussions in the region must account for these realities. Terms like "economía sumergida" (underground economy), "microcréditos" (microloans), and "inclusión financiera" (financial inclusion) are critical for understanding the full economic picture.',
    },
    {
      title: 'Economic Integration: From MERCOSUR to the Pacific Alliance',
      content: 'Latin America has several major trade blocs: MERCOSUR (Argentina, Brazil, Paraguay, Uruguay) focuses on a common market; the "Alianza del Pacífico" (Pacific Alliance — Mexico, Colombia, Peru, Chile) promotes free trade with Asia-Pacific. CAFTA-DR covers Central America. Understanding these blocs is essential for discussing "aranceles" (tariffs), "tratados de libre comercio" (free trade agreements), and "integración económica" (economic integration). In board meetings, you might hear: "El tratado nos permite exportar sin aranceles" (The treaty allows us to export without tariffs). These agreements shape investment decisions across the hemisphere.',
    },
  ],
  culturalGradient: 'from-emerald-50 to-teal-50',

  quiz: [
    { id: 1, type: 'mc', text: '"PIB" stands for:', options: ['Producto Interno Bruto', 'Plan de Inversión Bancaria', 'Presupuesto Integral Base', 'Programa de Integración Bilateral'], answer: 0 }, // 0-indexed: correct answer is 'Producto Interno Bruto'
    { id: 2, type: 'fill', text: 'Complete: "La tasa de ___ bajó al cuatro por ciento" (unemployment)', answer: 'desempleo' },
    { id: 3, type: 'mc', text: '"Flujo de caja" means:', options: ['Cash register', 'Cash flow', 'Credit line', 'Bank account'], answer: 1 },
    { id: 4, type: 'tf', text: '"FODA" is the Spanish equivalent of "SWOT" (Strengths, Weaknesses, Opportunities, Threats).', answer: true },
    { id: 5, type: 'mc', text: '"Capital de riesgo" translates to:', options: ['Risk assessment', 'Capital city', 'Venture capital', 'Risk capital reserves'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Alcanzamos el punto de ___ en seis meses" (break-even)', answer: 'equilibrio' },
    { id: 7, type: 'mc', text: 'In the boardroom dialogue, what did Ing. Delgado suggest?', options: ['Raising prices', 'Optimizing the supply chain', 'Reducing staff', 'Canceling dividends'], answer: 1 },
    { id: 8, type: 'mc', text: '"Rentabilidad" means:', options: ['Rental income', 'Profitability', 'Accountability', 'Sustainability'], answer: 1 },
    { id: 9, type: 'tf', text: 'In the startup pitch, AgroTech Solutions had an 80% user retention rate.', answer: true },
    { id: 10, type: 'mc', text: '"La balanza comercial" refers to:', options: ['Bank balance', 'Trade balance', 'Commercial scale', 'Payment schedule'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ de mercado aumentó al veintidós por ciento" (share/quota)', answer: 'cuota' },
    { id: 12, type: 'mc', text: 'What is the Pacific Alliance?', options: ['A military alliance', 'A trade bloc of Mexico, Colombia, Peru, and Chile', 'A Pacific coast fishing agreement', 'A cryptocurrency exchange'], answer: 1 },
    { id: 13, type: 'mc', text: '"Cadena de suministro" means:', options: ['Chain of command', 'Supply chain', 'Chain of stores', 'Security chain'], answer: 1 },
    { id: 14, type: 'tf', text: '"Remesas" (remittances) are a significant portion of GDP for several Latin American countries.', answer: true },
    { id: 15, type: 'mc', text: 'In the pitch dialogue, how much capital was AgroTech seeking?', options: ['$500,000', '$1 million', '$2 million', '$5 million'], answer: 2 },
  ],

  audioBase: '/audio/L8.2/phrases',

  uniqueActivity: {
    id: 'MarketAnalystL82',
    sectionId: 'market-analyst',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    macroeconomics: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'financial-reports': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'startup-innovation': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'strategy-analysis': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'market-analyst': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
