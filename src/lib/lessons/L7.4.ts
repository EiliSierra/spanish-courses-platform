import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Scientific Method (12) ===
  { spanish: 'La hipótesis nula establece que no hay diferencia significativa', english: 'The null hypothesis states that there is no significant difference', pronunciation: 'lah ee-POH-teh-sees NOO-lah ehs-tah-BLEH-seh keh noh eye dee-feh-REHN-see-ah seeg-nee-fee-kah-TEE-bah', category: 'scientific-method', audio: 'la-hipotesis-nula-establece' },
  { spanish: 'El grupo de control no recibe el tratamiento experimental', english: 'The control group does not receive the experimental treatment', pronunciation: 'ehl GROO-poh deh kohn-TROHL noh rreh-SEE-beh ehl trah-tah-mee-EHN-toh ehks-peh-ree-mehn-TAHL', category: 'scientific-method', audio: 'el-grupo-de-control' },
  { spanish: 'La variable independiente es la que el investigador manipula', english: 'The independent variable is the one the researcher manipulates', pronunciation: 'lah bah-ree-AH-bleh een-deh-pehn-dee-EHN-teh ehs lah keh ehl een-behs-tee-gah-DOHR mah-NEE-poo-lah', category: 'scientific-method', audio: 'la-variable-independiente' },
  { spanish: 'El margen de error fue inferior al cinco por ciento', english: 'The margin of error was less than five percent', pronunciation: 'ehl MAHR-hehn deh eh-RROHR fweh een-feh-ree-OHR ahl SEEN-koh pohr see-EHN-toh', category: 'scientific-method', audio: 'el-margen-de-error' },
  { spanish: 'La muestra representativa refleja la diversidad de la población', english: 'The representative sample reflects the diversity of the population', pronunciation: 'lah MWEHS-trah rreh-preh-sehn-tah-TEE-bah rreh-FLEH-hah lah dee-behr-see-DAHD deh lah poh-blah-see-OHN', category: 'scientific-method', audio: 'la-muestra-representativa' },
  { spanish: 'Los resultados son estadísticamente significativos con p menor a 0.05', english: 'The results are statistically significant with p less than 0.05', pronunciation: 'lohs rreh-sool-TAH-dohs sohn ehs-tah-DEES-tee-kah-MEHN-teh seeg-nee-fee-kah-TEE-bohs kohn peh meh-NOHR ah seh-roh POON-toh seh-roh SEEN-koh', category: 'scientific-method', audio: 'los-resultados-son-estadisticamente' },
  { spanish: 'Es necesario replicar el experimento para validar los hallazgos', english: 'It is necessary to replicate the experiment to validate the findings', pronunciation: 'ehs neh-seh-SAH-ree-oh rreh-plee-KAHR ehl ehks-peh-ree-MEHN-toh PAH-rah bah-lee-DAHR lohs ah-YAHS-gohs', category: 'scientific-method', audio: 'es-necesario-replicar' },
  { spanish: 'El sesgo de confirmación afecta la objetividad del estudio', english: 'Confirmation bias affects the objectivity of the study', pronunciation: 'ehl SEHS-goh deh kohn-feer-mah-see-OHN ah-FEHK-tah lah ohb-heh-tee-bee-DAHD dehl ehs-TOO-dee-oh', category: 'scientific-method', audio: 'el-sesgo-de-confirmacion' },
  { spanish: 'La revisión por pares garantiza la calidad de la publicación', english: 'Peer review ensures the quality of the publication', pronunciation: 'lah rreh-bee-see-OHN pohr PAH-rehs gah-rahn-TEE-sah lah kah-lee-DAHD deh lah poo-blee-kah-see-OHN', category: 'scientific-method', audio: 'la-revision-por-pares' },
  { spanish: 'Se aplicó un diseño experimental de doble ciego', english: 'A double-blind experimental design was applied', pronunciation: 'seh ah-plee-KOH oon dee-SEH-nyoh ehks-peh-ree-mehn-TAHL deh DOH-bleh see-EH-goh', category: 'scientific-method', audio: 'se-aplico-un-diseno-experimental' },
  { spanish: 'La correlación no implica causalidad', english: 'Correlation does not imply causation', pronunciation: 'lah koh-rreh-lah-see-OHN noh eem-PLEE-kah kow-sah-lee-DAHD', category: 'scientific-method', audio: 'la-correlacion-no-implica' },
  { spanish: 'Los datos fueron sometidos a un análisis de regresión múltiple', english: 'The data were subjected to a multiple regression analysis', pronunciation: 'lohs DAH-tohs FWEH-rohn soh-meh-TEE-dohs ah oon ah-NAH-lee-sees deh rreh-greh-see-OHN MOOL-tee-pleh', category: 'scientific-method', audio: 'los-datos-fueron-sometidos' },

  // === Environmental Crisis (12) ===
  { spanish: 'El calentamiento global ha elevado la temperatura media en 1.2 grados', english: 'Global warming has raised the average temperature by 1.2 degrees', pronunciation: 'ehl kah-lehn-tah-mee-EHN-toh gloh-BAHL ah eh-leh-BAH-doh lah tehm-peh-rah-TOO-rah MEH-dee-ah ehn OO-noh POON-toh dohs GRAH-dohs', category: 'environmental-crisis', audio: 'el-calentamiento-global' },
  { spanish: 'La huella de carbono mide el impacto ambiental de nuestras actividades', english: 'The carbon footprint measures the environmental impact of our activities', pronunciation: 'lah WVEH-yah deh kahr-BOH-noh MEE-deh ehl eem-PAHK-toh ahm-bee-ehn-TAHL deh NWEHS-trahs ahk-tee-bee-DAH-dehs', category: 'environmental-crisis', audio: 'la-huella-de-carbono' },
  { spanish: 'Las energías renovables son fundamentales para la transición energética', english: 'Renewable energies are fundamental for the energy transition', pronunciation: 'lahs eh-nehr-HEE-ahs rreh-noh-BAH-blehs sohn foon-dah-mehn-TAH-lehs PAH-rah lah trahn-see-see-OHN eh-nehr-HEH-tee-kah', category: 'environmental-crisis', audio: 'las-energias-renovables' },
  { spanish: 'La biodiversidad de la región está amenazada por la actividad humana', english: 'The region\'s biodiversity is threatened by human activity', pronunciation: 'lah bee-oh-dee-behr-see-DAHD deh lah rreh-hee-OHN ehs-TAH ah-meh-nah-SAH-dah pohr lah ahk-tee-bee-DAHD oo-MAH-nah', category: 'environmental-crisis', audio: 'la-biodiversidad-de-la-region' },
  { spanish: 'La deforestación del Amazonas libera millones de toneladas de CO2', english: 'Amazon deforestation releases millions of tons of CO2', pronunciation: 'lah deh-foh-rehs-tah-see-OHN dehl ah-mah-SOH-nahs lee-BEH-rah mee-YOH-nehs deh toh-neh-LAH-dahs deh seh-oh-DOHS', category: 'environmental-crisis', audio: 'la-deforestacion-del-amazonas' },
  { spanish: 'El efecto invernadero atrapa el calor dentro de la atmósfera terrestre', english: 'The greenhouse effect traps heat within the Earth\'s atmosphere', pronunciation: 'ehl eh-FEHK-toh een-behr-nah-DEH-roh ah-TRAH-pah ehl kah-LOHR DEHN-troh deh lah aht-MOHS-feh-rah teh-RREHS-treh', category: 'environmental-crisis', audio: 'el-efecto-invernadero' },
  { spanish: 'La sostenibilidad requiere equilibrar las necesidades económicas y ecológicas', english: 'Sustainability requires balancing economic and ecological needs', pronunciation: 'lah sohs-teh-nee-bee-lee-DAHD rreh-kee-EH-reh eh-kee-lee-BRAHR lahs neh-seh-see-DAH-dehs eh-koh-NOH-mee-kahs ee eh-koh-LOH-hee-kahs', category: 'environmental-crisis', audio: 'la-sostenibilidad-requiere' },
  { spanish: 'El desarrollo sustentable busca satisfacer las necesidades del presente sin comprometer el futuro', english: 'Sustainable development seeks to meet present needs without compromising the future', pronunciation: 'ehl deh-sah-RROH-yoh soos-tehn-TAH-bleh BOOS-kah sah-tees-fah-SEHR lahs neh-seh-see-DAH-dehs dehl preh-SEHN-teh seen kohm-proh-meh-TEHR ehl foo-TOO-roh', category: 'environmental-crisis', audio: 'el-desarrollo-sustentable' },
  { spanish: 'Los ecosistemas marinos sufren la acidificación de los océanos', english: 'Marine ecosystems suffer from ocean acidification', pronunciation: 'lohs eh-koh-sees-TEH-mahs mah-REE-nohs SOO-frehn lah ah-see-dee-fee-kah-see-OHN deh lohs oh-SEH-ah-nohs', category: 'environmental-crisis', audio: 'los-ecosistemas-marinos' },
  { spanish: 'La economía circular propone reducir, reutilizar y reciclar los recursos', english: 'The circular economy proposes reducing, reusing, and recycling resources', pronunciation: 'lah eh-koh-noh-MEE-ah seer-koo-LAHR proh-POH-neh rreh-doo-SEER rreh-oo-tee-lee-SAHR ee rreh-see-KLAHR lohs rreh-KOOR-sohs', category: 'environmental-crisis', audio: 'la-economia-circular' },
  { spanish: 'Las emisiones de gases de efecto invernadero deben reducirse drásticamente', english: 'Greenhouse gas emissions must be drastically reduced', pronunciation: 'lahs eh-mee-see-OH-nehs deh GAH-sehs deh eh-FEHK-toh een-behr-nah-DEH-roh DEH-behn rreh-doo-SEER-seh DRAHS-tee-kah-MEHN-teh', category: 'environmental-crisis', audio: 'las-emisiones-de-gases' },
  { spanish: 'El derretimiento de los glaciares está elevando el nivel del mar', english: 'The melting of glaciers is raising sea level', pronunciation: 'ehl deh-rreh-tee-mee-EHN-toh deh lohs glah-see-AH-rehs ehs-TAH eh-leh-BAHN-doh ehl nee-BEHL dehl mahr', category: 'environmental-crisis', audio: 'el-derretimiento-de-los-glaciares' },

  // === Technical Writing (12) ===
  { spanish: 'Los datos arrojaron que existe una tendencia creciente', english: 'The data showed that there is a growing trend', pronunciation: 'lohs DAH-tohs ah-rroh-HAH-rohn keh ehk-SEES-teh OO-nah tehn-DEHN-see-ah kreh-see-EHN-teh', category: 'technical-writing', audio: 'los-datos-arrojaron-que' },
  { spanish: 'Se observó una correlación entre la temperatura y la productividad', english: 'A correlation was observed between temperature and productivity', pronunciation: 'seh ohb-sehr-BOH OO-nah koh-rreh-lah-see-OHN EHN-treh lah tehm-peh-rah-TOO-rah ee lah proh-dook-tee-bee-DAHD', category: 'technical-writing', audio: 'se-observo-una-correlacion' },
  { spanish: 'Cabe mencionar que los resultados preliminares son prometedores', english: 'It is worth mentioning that the preliminary results are promising', pronunciation: 'KAH-beh mehn-see-oh-NAHR keh lohs rreh-sool-TAH-dohs preh-lee-mee-NAH-rehs sohn proh-meh-teh-DOH-rehs', category: 'technical-writing', audio: 'cabe-mencionar-que' },
  { spanish: 'Los hallazgos sugieren una relación causal entre ambas variables', english: 'The findings suggest a causal relationship between both variables', pronunciation: 'lohs ah-YAHS-gohs soo-hee-EH-rehn OO-nah rreh-lah-see-OHN kow-SAHL EHN-treh AHM-bahs bah-ree-AH-blehs', category: 'technical-writing', audio: 'los-hallazgos-sugieren' },
  { spanish: 'De acuerdo con la metodología empleada, se procedió a analizar las muestras', english: 'In accordance with the methodology employed, the samples were analyzed', pronunciation: 'deh ah-KWEHR-doh kohn lah meh-toh-doh-loh-HEE-ah ehm-pleh-AH-dah seh proh-seh-dee-OH ah ah-nah-lee-SAHR lahs MWEHS-trahs', category: 'technical-writing', audio: 'de-acuerdo-con-la-metodologia' },
  { spanish: 'Se procedió a analizar los factores que inciden en el fenómeno', english: 'The factors that affect the phenomenon were analyzed', pronunciation: 'seh proh-seh-dee-OH ah ah-nah-lee-SAHR lohs fahk-TOH-rehs keh een-SEE-dehn ehn ehl feh-NOH-meh-noh', category: 'technical-writing', audio: 'se-procedio-a-analizar' },
  { spanish: 'A partir de los resultados obtenidos, se puede concluir que', english: 'Based on the results obtained, it can be concluded that', pronunciation: 'ah pahr-TEER deh lohs rreh-sool-TAH-dohs ohb-teh-NEE-dohs seh PWEH-deh kohn-kloo-EER keh', category: 'technical-writing', audio: 'a-partir-de-los-resultados' },
  { spanish: 'El presente estudio tiene como objetivo determinar el impacto de', english: 'The present study aims to determine the impact of', pronunciation: 'ehl preh-SEHN-teh ehs-TOO-dee-oh tee-EH-neh KOH-moh ohb-heh-TEE-boh deh-tehr-mee-NAHR ehl eem-PAHK-toh deh', category: 'technical-writing', audio: 'el-presente-estudio-tiene' },
  { spanish: 'En lo que respecta al marco teórico, se consultaron las siguientes fuentes', english: 'Regarding the theoretical framework, the following sources were consulted', pronunciation: 'ehn loh keh rrehs-PEHK-tah ahl MAHR-koh teh-OH-ree-koh seh kohn-sool-TAH-rohn lahs see-gee-EHN-tehs FWEHN-tehs', category: 'technical-writing', audio: 'en-lo-que-respecta' },
  { spanish: 'Es preciso señalar las limitaciones inherentes a esta investigación', english: 'It is necessary to point out the limitations inherent to this research', pronunciation: 'ehs preh-SEE-soh seh-nyah-LAHR lahs lee-mee-tah-see-OH-nehs een-eh-REHN-tehs ah EHS-tah een-behs-tee-gah-see-OHN', category: 'technical-writing', audio: 'es-preciso-senalar' },
  { spanish: 'La evidencia empírica respalda la hipótesis planteada', english: 'The empirical evidence supports the proposed hypothesis', pronunciation: 'lah eh-bee-DEHN-see-ah ehm-PEE-ree-kah rrehs-PAHL-dah lah ee-POH-teh-sees plahn-teh-AH-dah', category: 'technical-writing', audio: 'la-evidencia-empirica' },
  { spanish: 'Se recomienda ampliar la muestra en futuras investigaciones', english: 'It is recommended to expand the sample in future research', pronunciation: 'seh rreh-koh-mee-EHN-dah ahm-plee-AHR lah MWEHS-trah ehn foo-TOO-rahs een-behs-tee-gah-see-OH-nehs', category: 'technical-writing', audio: 'se-recomienda-ampliar' },

  // === Science Communication (12) ===
  { spanish: 'La divulgación científica acerca la ciencia al público general', english: 'Science communication brings science closer to the general public', pronunciation: 'lah dee-bool-gah-see-OHN see-ehn-TEE-fee-kah ah-SEHR-kah lah see-EHN-see-ah ahl POO-blee-koh heh-neh-RAHL', category: 'science-communication', audio: 'la-divulgacion-cientifica' },
  { spanish: 'En términos sencillos, las células son los bloques de construcción de la vida', english: 'In simple terms, cells are the building blocks of life', pronunciation: 'ehn TEHR-mee-nohs sehn-SEE-yohs lahs SEH-loo-lahs sohn lohs BLOH-kehs deh kohns-trook-see-OHN deh lah BEE-dah', category: 'science-communication', audio: 'en-terminos-sencillos' },
  { spanish: 'Esto significa que el planeta se calienta más rápido de lo previsto', english: 'This means that the planet is warming faster than expected', pronunciation: 'EHS-toh seeg-nee-FEE-kah keh ehl plah-NEH-tah seh kah-lee-EHN-tah mahs RRAH-pee-doh deh loh preh-BEES-toh', category: 'science-communication', audio: 'esto-significa-que' },
  { spanish: 'Para ponerlo en perspectiva, cada segundo se destruyen dos hectáreas de bosque', english: 'To put it in perspective, every second two hectares of forest are destroyed', pronunciation: 'PAH-rah poh-NEHR-loh ehn pehrs-pehk-TEE-bah KAH-dah seh-GOON-doh seh dehs-TROO-yehn dohs ehk-TAH-reh-ahs deh BOHS-keh', category: 'science-communication', audio: 'para-ponerlo-en-perspectiva' },
  { spanish: 'Según los expertos, la ventana de acción se está cerrando rápidamente', english: 'According to experts, the window for action is closing rapidly', pronunciation: 'seh-GOON lohs ehks-PEHR-tohs lah behn-TAH-nah deh ahk-see-OHN seh ehs-TAH seh-RRAHN-doh RRAH-pee-dah-MEHN-teh', category: 'science-communication', audio: 'segun-los-expertos' },
  { spanish: 'La evidencia científica demuestra que el cambio climático es real', english: 'Scientific evidence demonstrates that climate change is real', pronunciation: 'lah eh-bee-DEHN-see-ah see-ehn-TEE-fee-kah deh-MWEHS-trah keh ehl KAHM-bee-oh klee-MAH-tee-koh ehs rreh-AHL', category: 'science-communication', audio: 'la-evidencia-cientifica-demuestra' },
  { spanish: 'Los científicos advierten sobre las consecuencias irreversibles', english: 'Scientists warn about the irreversible consequences', pronunciation: 'lohs see-ehn-TEE-fee-kohs ahd-bee-EHR-tehn SOH-breh lahs kohn-seh-KWEHN-see-ahs ee-rreh-behr-SEE-blehs', category: 'science-communication', audio: 'los-cientificos-advierten' },
  { spanish: 'Un estudio reciente publicado en Nature reveló que', english: 'A recent study published in Nature revealed that', pronunciation: 'oon ehs-TOO-dee-oh rreh-see-EHN-teh poo-blee-KAH-doh ehn NAY-chehr rreh-beh-LOH keh', category: 'science-communication', audio: 'un-estudio-reciente' },
  { spanish: 'La comunidad científica ha alcanzado un consenso sobre este tema', english: 'The scientific community has reached a consensus on this topic', pronunciation: 'lah koh-moo-nee-DAHD see-ehn-TEE-fee-kah ah ahl-kahn-SAH-doh oon kohn-SEHN-soh SOH-breh EHS-teh TEH-mah', category: 'science-communication', audio: 'la-comunidad-cientifica' },
  { spanish: 'Imaginemos que la atmósfera es como una manta que cubre la Tierra', english: 'Let\'s imagine that the atmosphere is like a blanket covering the Earth', pronunciation: 'ee-mah-hee-NEH-mohs keh lah aht-MOHS-feh-rah ehs KOH-moh OO-nah MAHN-tah keh KOO-breh lah tee-EH-rrah', category: 'science-communication', audio: 'imaginemos-que-la-atmosfera' },
  { spanish: 'Las investigaciones de vanguardia están transformando nuestra comprensión', english: 'Cutting-edge research is transforming our understanding', pronunciation: 'lahs een-behs-tee-gah-see-OH-nehs deh bahn-GWAHR-dee-ah ehs-TAHN trahns-fohr-MAHN-doh NWEHS-trah kohm-prehn-see-OHN', category: 'science-communication', audio: 'las-investigaciones-de-vanguardia' },
  { spanish: 'Es crucial comunicar la ciencia de manera accesible y rigurosa', english: 'It is crucial to communicate science in an accessible and rigorous way', pronunciation: 'ehs kroo-see-AHL koh-moo-nee-KAHR lah see-EHN-see-ah deh mah-NEH-rah ahk-seh-SEE-bleh ee ree-goo-ROH-sah', category: 'science-communication', audio: 'es-crucial-comunicar' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L74PhraseByAudio = phraseByAudio

// === LAB REPORT (unique activity) ===

export interface LabReportChallenge {
  term: string
  english: string
  correctDefinition: string
  options: string[]
}

export const LAB_REPORT_CHALLENGES: LabReportChallenge[] = [
  {
    term: 'Hipótesis nula',
    english: 'Null hypothesis',
    correctDefinition: 'A statement that there is no significant difference or effect',
    options: ['A statement that there is no significant difference or effect', 'The main prediction of the experiment', 'The final conclusion of the research', 'A bias introduced by the researcher'],
  },
  {
    term: 'Variable independiente',
    english: 'Independent variable',
    correctDefinition: 'The factor that the researcher deliberately manipulates',
    options: ['The factor that the researcher deliberately manipulates', 'The factor that changes as a result of the experiment', 'A variable that remains constant throughout', 'The error margin in the data'],
  },
  {
    term: 'Muestra representativa',
    english: 'Representative sample',
    correctDefinition: 'A subset that accurately reflects the characteristics of the population',
    options: ['The largest possible group of participants', 'A subset that accurately reflects the characteristics of the population', 'A random selection without any criteria', 'The control group in an experiment'],
  },
  {
    term: 'Revisión por pares',
    english: 'Peer review',
    correctDefinition: 'Evaluation of scientific work by experts in the same field',
    options: ['A review by the journal editor only', 'Evaluation of scientific work by experts in the same field', 'A public vote on the validity of research', 'A student\'s review of their professor\'s work'],
  },
  {
    term: 'Sesgo de confirmación',
    english: 'Confirmation bias',
    correctDefinition: 'The tendency to favor information that confirms pre-existing beliefs',
    options: ['An error in data collection instruments', 'The tendency to favor information that confirms pre-existing beliefs', 'A deliberate manipulation of results', 'The effect of sample size on conclusions'],
  },
  {
    term: 'Doble ciego',
    english: 'Double-blind',
    correctDefinition: 'Neither the participants nor the researchers know who receives the treatment',
    options: ['Neither the participants nor the researchers know who receives the treatment', 'Only the participants are unaware of the treatment', 'An experiment conducted in complete darkness', 'A study with two control groups'],
  },
  {
    term: 'Huella de carbono',
    english: 'Carbon footprint',
    correctDefinition: 'The total greenhouse gas emissions caused by an individual or activity',
    options: ['A physical mark left by carbon deposits', 'The total greenhouse gas emissions caused by an individual or activity', 'The amount of carbon in the soil', 'A measurement of fossil fuel reserves'],
  },
]

// === LESSON DATA ===

export const L74Data: LessonData = {
  id: 'L7.4',
  hero: {
    lessonId: 'L7.4',
    title: 'Scientific & Environmental Spanish',
    subtitle: 'Communicating research and environmental discourse with precision',
    description: 'Master the technical and scientific register in Spanish. Learn to discuss research methodology, environmental crises, and climate change with the vocabulary and structures used by scientists, researchers, and science communicators across the Spanish-speaking world.',
    image: '/images/L7.4/L7.4.jpg',
    gradient: 'from-green-800/65 via-emerald-700/55 to-teal-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '🔬', title: 'Scientific Method', desc: 'Use precise terminology: hipótesis nula, grupo de control, variable independiente, margen de error, revisión por pares.' },
    { icon: '🌍', title: 'Environmental Crisis', desc: 'Discuss climate change: calentamiento global, huella de carbono, energías renovables, biodiversidad, sostenibilidad.' },
    { icon: '📝', title: 'Technical Writing', desc: 'Master academic register: los datos arrojaron que, se observó una correlación, cabe mencionar que, los hallazgos sugieren.' },
    { icon: '📡', title: 'Science Communication', desc: 'Translate complex ideas: en términos sencillos, para ponerlo en perspectiva, según los expertos, la evidencia demuestra.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.7', label: 'Academic Vocabulary', detail: 'L5.7 introduced formal academic vocabulary. Now apply it specifically to scientific research and environmental discourse.' },
    { fromLesson: 'L5.3', label: 'Passive & Impersonal', detail: 'L5.3 taught passive and impersonal constructions (se observó, se procedió). These are the backbone of scientific writing in Spanish.' },
    { fromLesson: 'L6.1', label: 'Complex Sentences', detail: 'L6.1 covered complex sentence structures. Scientific writing demands layered clauses: "Los datos arrojaron que existe una correlación entre..."' },
  ],

  sectionTransitions: [
    { afterSection: 'scientific-method', text: 'You can discuss research methodology! Now let\'s tackle the environmental crisis vocabulary.' },
    { afterSection: 'environmental-crisis', text: 'Environmental vocabulary mastered! Let\'s learn the formal structures of technical writing.' },
    { afterSection: 'technical-writing', text: 'Academic register acquired! Now let\'s make science accessible through communication.' },
    { afterSection: 'dialogues', text: 'Excellent scientific conversations! Let\'s explore the cultural context of science in Latin America.' },
    { afterSection: 'cultural', text: 'Cultural insights absorbed! Now test your knowledge in the Lab Report challenge.' },
    { afterSection: 'lab-report', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Los datos indican que...', english: 'The data indicate that...' },
    { spanish: 'Según la investigación...', english: 'According to the research...' },
    { spanish: 'El impacto ambiental de...', english: 'The environmental impact of...' },
    { spanish: 'Se ha demostrado que...', english: 'It has been demonstrated that...' },
    { spanish: 'En términos científicos...', english: 'In scientific terms...' },
    { spanish: 'La evidencia sugiere que...', english: 'The evidence suggests that...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Los resultados son estadísticamente significativos', pronunciation: 'lohs rreh-sool-TAH-dohs sohn ehs-tah-DEES-tee-kah-MEHN-teh seeg-nee-fee-kah-TEE-bohs', english: 'The results are statistically significant', audio: 'los-resultados-son-estadisticamente-significativos', tip: '"Estadísticamente" has seven syllables — practice breaking it down: es-ta-DÍS-ti-ca-MEN-te. The stress on -DÍS- and -MEN- creates the rhythm of formal scientific Spanish.' },
    { spanish: 'La biodiversidad de la región está amenazada', pronunciation: 'lah bee-oh-dee-behr-see-DAHD deh lah rreh-hee-OHN ehs-TAH ah-meh-nah-SAH-dah', english: 'The region\'s biodiversity is threatened', audio: 'la-biodiversidad-de-la-region-esta-amenazada', tip: '"Biodiversidad" combines Greek "bio" (life) + Latin "diversitas" (variety). In scientific Spanish, many terms blend classical roots. The prefix bio- always stresses the "o": bi-o-di-ver-si-DAD.' },
    { spanish: 'Se observó una correlación entre la temperatura y la productividad', pronunciation: 'seh ohb-sehr-BOH OO-nah koh-rreh-lah-see-OHN EHN-treh lah tehm-peh-rah-TOO-rah ee lah proh-dook-tee-bee-DAHD', english: 'A correlation was observed between temperature and productivity', audio: 'se-observo-una-correlacion-entre-la-temperatura-y-la-productividad', tip: 'The impersonal "se" construction (se observó, se procedió, se analizó) is the hallmark of scientific writing. It removes the researcher as subject, creating an objective tone.' },
    { spanish: 'El efecto invernadero atrapa el calor dentro de la atmósfera', pronunciation: 'ehl eh-FEHK-toh een-behr-nah-DEH-roh ah-TRAH-pah ehl kah-LOHR DEHN-troh deh lah aht-MOHS-feh-rah', english: 'The greenhouse effect traps heat within the atmosphere', audio: 'el-efecto-invernadero-atrapa-el-calor-dentro-de-la-atmosfera', tip: '"Invernadero" literally means "winter place" (invierno + -adero). A greenhouse keeps plants warm in winter — hence "efecto invernadero" for the atmospheric phenomenon.' },
    { spanish: 'La divulgación científica acerca la ciencia al público', pronunciation: 'lah dee-bool-gah-see-OHN see-ehn-TEE-fee-kah ah-SEHR-kah lah see-EHN-see-ah ahl POO-blee-koh', english: 'Science communication brings science closer to the public', audio: 'la-divulgacion-cientifica-acerca-la-ciencia-al-publico', tip: '"Divulgación" comes from Latin "divulgare" (to make public). In Spanish, "divulgar" means to spread knowledge widely. A "divulgador científico" is a science communicator — a crucial role in Latin America.' },
    { spanish: 'La evidencia empírica respalda la hipótesis planteada', pronunciation: 'lah eh-bee-DEHN-see-ah ehm-PEE-ree-kah rrehs-PAHL-dah lah ee-POH-teh-sees plahn-teh-AH-dah', english: 'The empirical evidence supports the proposed hypothesis', audio: 'la-evidencia-empirica-respalda-la-hipotesis-planteada', tip: '"Empírico" (empirical) stresses the second syllable: em-PÍ-ri-co. In scientific Spanish, many adjectives end in -ico/-ica: científico, estadístico, metodológico, ecológico.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'scientific-method', label: 'Scientific Method' },
    { id: 'environmental-crisis', label: 'Environmental Crisis' },
    { id: 'technical-writing', label: 'Technical Writing' },
    { id: 'science-communication', label: 'Science Communication' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'register-sorting', label: 'Register Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'lab-report', label: 'Lab Report' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'scientific-method',
      title: 'Scientific Method — El Método Científico',
      description: 'Master the vocabulary of research: hypotheses, variables, controls, samples, and statistical significance — the language of discovery.',
      tabs: [
        { label: 'Research Design', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'scientific-method').slice(0, 6) },
        { label: 'Analysis & Review', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'scientific-method').slice(6) },
      ],
    },
    {
      id: 'environmental-crisis',
      title: 'Environmental Crisis — La Crisis Ambiental',
      description: 'Discuss climate change, biodiversity loss, and sustainability with the precise vocabulary used in environmental science and policy.',
      tabs: [
        { label: 'Climate & Ecosystems', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'environmental-crisis').slice(0, 6) },
        { label: 'Solutions & Policy', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'environmental-crisis').slice(6) },
      ],
    },
    {
      id: 'technical-writing',
      title: 'Technical Writing — Escritura Técnica',
      description: 'Learn the formal structures and transitional phrases that define academic and scientific writing in Spanish.',
      tabs: [
        { label: 'Data & Findings', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'technical-writing').slice(0, 6) },
        { label: 'Framework & Conclusions', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'technical-writing').slice(6) },
      ],
    },
    {
      id: 'science-communication',
      title: 'Science Communication — Divulgación Científica',
      description: 'Bridge the gap between technical jargon and public understanding with accessible language and powerful analogies.',
      tabs: [
        { label: 'Making It Accessible', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'science-communication').slice(0, 6) },
        { label: 'Authority & Impact', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'science-communication').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Impersonal "Se" in Scientific Spanish',
      content: 'Scientific writing in Spanish relies heavily on impersonal constructions with "se": se observó (it was observed), se procedió a (it was proceeded to), se analizaron (were analyzed). This creates objectivity by removing the researcher from the sentence. Unlike English passive voice ("was observed"), Spanish uses "se" + active verb, which sounds more natural.',
      example: 'Se observó una correlación. | Se procedió a analizar. | Se recomienda ampliar la muestra.',
    },
    {
      title: 'Greco-Latin Scientific Vocabulary',
      content: 'Spanish scientific terms draw heavily from Greek and Latin roots, making them similar to English equivalents: hipótesis (hypothesis), biodiversidad (biodiversity), ecosistema (ecosystem), atmósfera (atmosphere). The key difference is stress placement: hi-PÓ-te-sis (not hy-POTH-e-sis), at-MÓS-fe-ra (not AT-mos-phere).',
      example: 'Hipótesis (hi-PÓ-te-sis) | Atmósfera (at-MÓS-fe-ra) | Metodología (me-to-do-lo-GÍ-a)',
    },
    {
      title: 'Hedging Language in Research',
      content: 'Good scientific writing avoids absolute claims. Spanish uses hedging expressions: "los hallazgos sugieren" (findings suggest), "cabe mencionar" (it\'s worth mentioning), "es preciso señalar" (it\'s necessary to point out). These soften claims while maintaining authority.',
      example: 'Los datos sugieren que... | Cabe destacar que... | Es posible que... | Se podría inferir que...',
      reviewFrom: 'L5.3',
    },
    {
      title: 'Environmental Terminology: Spanish vs. English Cognates',
      content: 'Many environmental terms are near-cognates: sostenibilidad (sustainability), biodiversidad (biodiversity), deforestación (deforestation), emisiones (emissions). But beware of false friends: "sustentable" and "sostenible" both mean "sustainable" in Latin American and European Spanish respectively.',
      example: 'Sostenible (Spain) = Sustentable (Latin America) = Sustainable | Renovable = Renewable',
      reviewFrom: 'L6.1',
    },
  ],

  flashcardGroups: [
    {
      key: 'scientific-method',
      label: 'Scientific Method',
      audioKeys: ['la-hipotesis-nula-establece', 'el-grupo-de-control', 'la-variable-independiente', 'el-margen-de-error', 'la-muestra-representativa', 'los-resultados-son-estadisticamente', 'es-necesario-replicar', 'el-sesgo-de-confirmacion', 'la-revision-por-pares', 'se-aplico-un-diseno-experimental'],
    },
    {
      key: 'environmental',
      label: 'Environmental Crisis',
      audioKeys: ['el-calentamiento-global', 'la-huella-de-carbono', 'las-energias-renovables', 'la-biodiversidad-de-la-region', 'la-deforestacion-del-amazonas', 'el-efecto-invernadero', 'la-sostenibilidad-requiere', 'el-desarrollo-sustentable', 'los-ecosistemas-marinos', 'la-economia-circular'],
    },
    {
      key: 'technical-communication',
      label: 'Technical & Communication',
      audioKeys: ['los-datos-arrojaron-que', 'se-observo-una-correlacion', 'los-hallazgos-sugieren', 'la-divulgacion-cientifica', 'en-terminos-sencillos', 'segun-los-expertos', 'la-evidencia-cientifica-demuestra', 'la-comunidad-cientifica'],
    },
  ],

  matchPairs: [
    { left: 'Hipótesis nula', right: 'Null hypothesis' },
    { left: 'Huella de carbono', right: 'Carbon footprint' },
    { left: 'Revisión por pares', right: 'Peer review' },
    { left: 'Energías renovables', right: 'Renewable energies' },
    { left: 'Divulgación científica', right: 'Science communication' },
    { left: 'Sesgo de confirmación', right: 'Confirmation bias' },
    { left: 'Desarrollo sustentable', right: 'Sustainable development' },
    { left: 'Efecto invernadero', right: 'Greenhouse effect' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Scientific vs. Everyday Language',
      instruction: 'Is this phrase from a research paper or everyday conversation?',
      buckets: ['Research Paper 🔬', 'Everyday Speech 💬'],
      items: [
        { text: 'Se observó una correlación', bucket: 'Research Paper 🔬' },
        { text: 'Los hallazgos sugieren', bucket: 'Research Paper 🔬' },
        { text: 'La evidencia empírica respalda', bucket: 'Research Paper 🔬' },
        { text: 'De acuerdo con la metodología', bucket: 'Research Paper 🔬' },
        { text: 'Para ponerlo en perspectiva', bucket: 'Everyday Speech 💬' },
        { text: 'En términos sencillos', bucket: 'Everyday Speech 💬' },
        { text: 'Esto significa que', bucket: 'Everyday Speech 💬' },
        { text: 'Imaginemos que', bucket: 'Everyday Speech 💬' },
      ],
    },
    {
      title: 'Problem vs. Solution',
      instruction: 'Does this phrase describe an environmental problem or a solution?',
      buckets: ['Problem 🌡️', 'Solution 🌱'],
      items: [
        { text: 'Calentamiento global', bucket: 'Problem 🌡️' },
        { text: 'Deforestación del Amazonas', bucket: 'Problem 🌡️' },
        { text: 'Emisiones de gases invernadero', bucket: 'Problem 🌡️' },
        { text: 'Derretimiento de glaciares', bucket: 'Problem 🌡️' },
        { text: 'Energías renovables', bucket: 'Solution 🌱' },
        { text: 'Economía circular', bucket: 'Solution 🌱' },
        { text: 'Desarrollo sustentable', bucket: 'Solution 🌱' },
        { text: 'Sostenibilidad', bucket: 'Solution 🌱' },
      ],
    },
  ],
  sortSectionId: 'register-sorting',
  sortTitle: 'Register Sorting',

  dialogues: [
    {
      id: 'dialogue-lab',
      title: 'In the Research Lab — Santiago, Chile',
      location: 'Santiago, Chile',
      lines: [
        { speaker: 'Dra. Valenzuela', text: 'Buenos días, Tomás. ¿Cómo van los resultados del experimento sobre contaminación del suelo?', audio: '/audio/L7.4/phrases/d1-line1.mp3' },
        { speaker: 'Tomás', text: 'Los datos arrojaron que hay una correlación significativa entre el uso de pesticidas y la disminución de microorganismos.', audio: '/audio/L7.4/phrases/d1-line2.mp3' },
        { speaker: 'Dra. Valenzuela', text: 'Interesante. ¿El margen de error es aceptable?', audio: '/audio/L7.4/phrases/d1-line3.mp3' },
        { speaker: 'Tomás', text: 'Sí, fue inferior al tres por ciento. Además, la muestra representativa incluyó suelos de cinco regiones distintas.', audio: '/audio/L7.4/phrases/d1-line4.mp3' },
        { speaker: 'Dra. Valenzuela', text: '¿Controlaste por la variable de temperatura? Cabe mencionar que las condiciones climáticas podrían sesgar los resultados.', audio: '/audio/L7.4/phrases/d1-line5.mp3', annotations: [{ phrase: 'cabe mencionar que', fromLesson: 'L5.3', note: 'Impersonal hedging construction from L5.3' }] },
        { speaker: 'Tomás', text: 'Sí, se aplicó un diseño experimental que incluyó la temperatura como variable de control. Los resultados siguen siendo estadísticamente significativos.', audio: '/audio/L7.4/phrases/d1-line6.mp3' },
        { speaker: 'Dra. Valenzuela', text: 'Excelente. Antes de enviar el artículo a revisión por pares, necesitamos replicar el experimento con una muestra más amplia.', audio: '/audio/L7.4/phrases/d1-line7.mp3' },
        { speaker: 'Tomás', text: 'De acuerdo. También quiero incluir un análisis de regresión múltiple para fortalecer las conclusiones.', audio: '/audio/L7.4/phrases/d1-line8.mp3' },
        { speaker: 'Dra. Valenzuela', text: 'Perfecto. Los hallazgos podrían tener implicaciones importantes para las políticas agrícolas de la región.', audio: '/audio/L7.4/phrases/d1-line9.mp3' },
        { speaker: 'Tomás', text: 'Sí, es preciso señalar que ningún estudio previo ha analizado este fenómeno en suelos chilenos con esta profundidad.', audio: '/audio/L7.4/phrases/d1-line10.mp3' },
        { speaker: 'Dra. Valenzuela', text: 'Eso es lo que hace esta investigación tan relevante. Preparemos el protocolo para la segunda fase.', audio: '/audio/L7.4/phrases/d1-line11.mp3' },
        { speaker: 'Tomás', text: 'Perfecto, doctora. También debería consultar las fuentes del marco teórico para asegurarme de que estén actualizadas.', audio: '/audio/L7.4/phrases/d1-line12.mp3' },
        { speaker: 'Dra. Valenzuela', text: 'Buena idea. La ciencia avanza rápido y no queremos citar datos obsoletos.', audio: '/audio/L7.4/phrases/d1-line13.mp3' },
        { speaker: 'Tomás', text: 'Entendido. Tendré el borrador listo para la próxima semana.', audio: '/audio/L7.4/phrases/d1-line14.mp3' },
        { speaker: 'Dra. Valenzuela', text: '¡Adelante! Esta investigación puede hacer una diferencia real.', audio: '/audio/L7.4/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-conference',
      title: 'Environmental Conference — San José, Costa Rica',
      location: 'San José, Costa Rica',
      lines: [
        { speaker: 'Moderadora', text: 'Bienvenidos al panel sobre cambio climático y biodiversidad en Centroamérica. Doctora Rojas, ¿cuál es el panorama actual?', audio: '/audio/L7.4/phrases/d2-line1.mp3' },
        { speaker: 'Dra. Rojas', text: 'Según los expertos del IPCC, la ventana de acción se está cerrando rápidamente. La evidencia científica demuestra que el calentamiento global está acelerándose.', audio: '/audio/L7.4/phrases/d2-line2.mp3' },
        { speaker: 'Dr. Méndez', text: 'Para ponerlo en perspectiva, Costa Rica alberga el cinco por ciento de la biodiversidad mundial en solo el 0.03 por ciento del territorio.', audio: '/audio/L7.4/phrases/d2-line3.mp3' },
        { speaker: 'Dra. Rojas', text: 'Exacto. Y esa biodiversidad está amenazada. La deforestación, aunque se ha reducido aquí, sigue siendo crítica en la región.', audio: '/audio/L7.4/phrases/d2-line4.mp3' },
        { speaker: 'Moderadora', text: '¿Qué soluciones proponen?', audio: '/audio/L7.4/phrases/d2-line5.mp3' },
        { speaker: 'Dr. Méndez', text: 'Las energías renovables son fundamentales. Costa Rica ya genera más del noventa por ciento de su electricidad de fuentes renovables.', audio: '/audio/L7.4/phrases/d2-line6.mp3', annotations: [{ phrase: 'energías renovables', fromLesson: 'L5.7', note: 'Technical vocabulary building on L5.7 academic terms' }] },
        { speaker: 'Dra. Rojas', text: 'En términos sencillos, necesitamos una economía circular. Reducir, reutilizar y reciclar no es un eslogan; es una necesidad científica.', audio: '/audio/L7.4/phrases/d2-line7.mp3' },
        { speaker: 'Moderadora', text: '¿Y el papel de la divulgación científica en todo esto?', audio: '/audio/L7.4/phrases/d2-line8.mp3' },
        { speaker: 'Dr. Méndez', text: 'Es crucial comunicar la ciencia de manera accesible. Imaginemos que la atmósfera es como una manta: cuanto más gruesa, más calor atrapa.', audio: '/audio/L7.4/phrases/d2-line9.mp3' },
        { speaker: 'Dra. Rojas', text: 'La comunidad científica ha alcanzado un consenso claro. Ahora necesitamos que los gobiernos actúen con la misma urgencia.', audio: '/audio/L7.4/phrases/d2-line10.mp3' },
        { speaker: 'Moderadora', text: '¿Qué papel juegan los pueblos indígenas en la conservación?', audio: '/audio/L7.4/phrases/d2-line11.mp3' },
        { speaker: 'Dra. Rojas', text: 'Los territorios indígenas protegen el ochenta por ciento de la biodiversidad mundial. Su conocimiento ecológico ancestral es invaluable para la ciencia moderna.', audio: '/audio/L7.4/phrases/d2-line12.mp3' },
        { speaker: 'Dr. Méndez', text: 'Un estudio reciente publicado en Nature reveló que las áreas gestionadas por comunidades indígenas tienen tasas de deforestación significativamente menores.', audio: '/audio/L7.4/phrases/d2-line13.mp3' },
        { speaker: 'Moderadora', text: 'Las investigaciones de vanguardia están transformando nuestra comprensión. Gracias a ambos por este panel tan enriquecedor.', audio: '/audio/L7.4/phrases/d2-line14.mp3' },
        { speaker: 'Dra. Rojas', text: 'Gracias. El desarrollo sustentable no es una opción; es la única vía posible.', audio: '/audio/L7.4/phrases/d2-line15.mp3' },
        { speaker: 'Dr. Méndez', text: 'Así es. Como científicos, nuestro deber es comunicar con claridad y actuar con urgencia.', audio: '/audio/L7.4/phrases/d2-line16.mp3' },
        { speaker: 'Moderadora', text: '¡Que estas palabras nos inspiren a todos! Un aplauso para nuestros panelistas.', audio: '/audio/L7.4/phrases/d2-line17.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Discuss soil contamination research methodology in a Chilean laboratory and debate climate change solutions at an environmental conference in Costa Rica.',

  culturalNotes: [
    {
      title: 'Latin America\'s Biodiversity: A Scientific Treasure',
      content: 'Latin America harbors roughly 60% of Earth\'s terrestrial biodiversity. The Amazon rainforest alone contains 10% of all known species. Countries like Colombia, Brazil, Mexico, and Peru are among the world\'s "megadiverse" nations. This biological wealth makes the region both a critical area for scientific research and ground zero for the impacts of climate change. When Latin American scientists say "nuestra biodiversidad está en peligro" (our biodiversity is in danger), the stakes are uniquely high.',
    },
    {
      title: 'La Fuga de Cerebros: The Scientific Brain Drain',
      content: 'Many talented Latin American scientists face a difficult choice: stay in countries with limited research funding or emigrate to institutions with more resources. This "fuga de cerebros" (brain drain) has deeply affected scientific production across the region. Countries like Argentina, Mexico, and Chile have created programs like CONICET, CONACYT, and FONDECYT to retain researchers, but the challenge persists. Understanding this context explains why phrases like "es preciso señalar las limitaciones" carry extra weight in Latin American research.',
    },
    {
      title: 'Indigenous Ecological Knowledge: Science Before Science',
      content: 'Long before Western science arrived, indigenous communities across the Americas developed sophisticated ecological knowledge. The Quechua and Aymara peoples understood altitude-based farming; the Maya developed advanced agricultural calendars; Amazonian communities practiced sustainable forest management for millennia. Today, "el conocimiento ecológico tradicional" (traditional ecological knowledge) is increasingly recognized by modern science as invaluable for conservation. The phrase "saberes ancestrales" (ancestral wisdom) appears frequently in Latin American environmental research.',
    },
  ],
  culturalGradient: 'from-green-50 to-emerald-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La hipótesis nula" refers to:', options: ['The main theory', 'A statement of no significant difference', 'The researcher\'s prediction', 'The experimental conclusion'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Los resultados son ___ significativos" (statistically)', answer: 'estadísticamente' },
    { id: 3, type: 'mc', text: '"La huella de carbono" means:', options: ['Carbon dating', 'Carbon footprint', 'Carbon dioxide', 'Carbon fiber'], answer: 1 },
    { id: 4, type: 'tf', text: '"Se observó una correlación" uses the impersonal "se" construction typical of scientific writing.', answer: true },
    { id: 5, type: 'mc', text: '"Cabe mencionar que" is best translated as:', options: ['It is certain that', 'It is worth mentioning that', 'It is false that', 'It is obvious that'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Las energías ___ son fundamentales" (renewable)', answer: 'renovables' },
    { id: 7, type: 'mc', text: 'In dialogue 1, what did Tomás find a correlation between?', options: ['Temperature and growth', 'Pesticides and microorganisms', 'Rainfall and soil quality', 'Altitude and biodiversity'], answer: 1 },
    { id: 8, type: 'mc', text: '"Divulgación científica" means:', options: ['Scientific discovery', 'Scientific division', 'Science communication', 'Scientific data'], answer: 2 },
    { id: 9, type: 'tf', text: '"Sustentable" (Latin America) and "sostenible" (Spain) both mean "sustainable."', answer: true },
    { id: 10, type: 'mc', text: '"El efecto invernadero" literally translates to:', options: ['The winter effect', 'The greenhouse effect', 'The ice effect', 'The garden effect'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ por pares garantiza la calidad" (review)', answer: 'revisión' },
    { id: 12, type: 'mc', text: 'In dialogue 2, what percentage of electricity does Costa Rica generate from renewable sources?', options: ['50%', '70%', '90%', '100%'], answer: 2 },
    { id: 13, type: 'mc', text: '"Los hallazgos sugieren" is an example of:', options: ['Absolute scientific claim', 'Hedging language', 'Informal speech', 'Imperative mood'], answer: 1 },
    { id: 14, type: 'tf', text: 'Indigenous territories protect approximately 80% of the world\'s biodiversity.', answer: true },
    { id: 15, type: 'mc', text: '"Se procedió a analizar" is in which voice/construction?', options: ['Active voice', 'Passive with ser', 'Impersonal se', 'Reflexive'], answer: 2 },
  ],

  audioBase: '/audio/L7.4/phrases',

  uniqueActivity: {
    id: 'LabReportL74',
    sectionId: 'lab-report',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'scientific-method': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'environmental-crisis': { bg: 'bg-green-50/30', border: 'border-green-100' },
    'technical-writing': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'science-communication': { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'register-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-green-50/30', border: 'border-green-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'lab-report': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
