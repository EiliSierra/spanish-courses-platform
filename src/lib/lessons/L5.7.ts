import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Reported Speech (12) ===
  { spanish: 'Dijo que estaba cansado', english: 'He said he was tired', pronunciation: 'DEE-hoh keh ehs-TAH-bah kahn-SAH-doh', category: 'reported-speech', audio: 'dijo-que-estaba-cansado' },
  { spanish: 'Afirmó que el proyecto era viable', english: 'She affirmed that the project was viable', pronunciation: 'ah-feer-MOH keh ehl proh-YEHK-toh EH-rah bee-AH-bleh', category: 'reported-speech', audio: 'afirmo-que-el-proyecto-era-viable' },
  { spanish: 'Negó que hubiera participado', english: 'He denied having participated', pronunciation: 'neh-GOH keh oo-bee-EH-rah pahr-tee-see-PAH-doh', category: 'reported-speech', audio: 'nego-que-hubiera-participado' },
  { spanish: 'Explicó que los datos confirmaban la teoría', english: 'She explained that the data confirmed the theory', pronunciation: 'ehks-plee-KOH keh lohs DAH-tohs kohn-feer-MAH-bahn lah teh-oh-REE-ah', category: 'reported-speech', audio: 'explico-que-los-datos-confirmaban' },
  { spanish: 'Mencionó que vendría al congreso', english: 'He mentioned he would come to the conference', pronunciation: 'mehn-see-oh-NOH keh behn-DREE-ah ahl kohn-GREH-soh', category: 'reported-speech', audio: 'menciono-que-vendria-al-congreso' },
  { spanish: 'Según el investigador, los resultados son prometedores', english: 'According to the researcher, the results are promising', pronunciation: 'seh-GOON ehl een-behs-tee-gah-DOHR lohs reh-sool-TAH-dohs sohn proh-meh-teh-DOH-rehs', category: 'reported-speech', audio: 'segun-el-investigador' },
  { spanish: 'De acuerdo con el estudio, la hipótesis se cumple', english: 'According to the study, the hypothesis holds true', pronunciation: 'deh ah-KWEHR-doh kohn ehl ehs-TOO-dee-oh lah ee-POH-teh-sees seh KOOM-pleh', category: 'reported-speech', audio: 'de-acuerdo-con-el-estudio' },
  { spanish: 'Señaló que habría cambios significativos', english: 'He pointed out there would be significant changes', pronunciation: 'seh-nyah-LOH keh ah-BREE-ah KAHM-bee-ohs seeg-nee-fee-kah-TEE-bohs', category: 'reported-speech', audio: 'senalo-que-habria-cambios' },
  { spanish: 'Sostuvo que la metodología era adecuada', english: 'She maintained that the methodology was adequate', pronunciation: 'sohs-TOO-boh keh lah meh-toh-doh-loh-HEE-ah EH-rah ah-deh-KWAH-dah', category: 'reported-speech', audio: 'sostuvo-que-la-metodologia' },
  { spanish: 'Concluyó que se necesitaba más investigación', english: 'He concluded that more research was needed', pronunciation: 'kohn-kloo-YOH keh seh neh-seh-see-TAH-bah mahs een-behs-tee-gah-see-OHN', category: 'reported-speech', audio: 'concluyo-que-se-necesitaba' },
  { spanish: 'Admitió que el modelo tenía limitaciones', english: 'She admitted that the model had limitations', pronunciation: 'ahd-mee-tee-OH keh ehl moh-DEH-loh teh-NEE-ah lee-mee-tah-see-OH-nehs', category: 'reported-speech', audio: 'admitio-que-el-modelo-tenia' },
  { spanish: 'Insistió en que los resultados eran confiables', english: 'He insisted that the results were reliable', pronunciation: 'een-sees-tee-OH ehn keh lohs reh-sool-TAH-dohs EH-rahn kohn-fee-AH-blehs', category: 'reported-speech', audio: 'insistio-en-que-los-resultados' },

  // === Academic Vocabulary (12) ===
  { spanish: 'La hipótesis fue rechazada por los datos', english: 'The hypothesis was rejected by the data', pronunciation: 'lah ee-POH-teh-sees fweh reh-chah-SAH-dah pohr lohs DAH-tohs', category: 'academic-vocabulary', audio: 'la-hipotesis-fue-rechazada' },
  { spanish: 'El marco teórico se basa en tres pilares', english: 'The theoretical framework is based on three pillars', pronunciation: 'ehl MAHR-koh teh-OH-ree-koh seh BAH-sah ehn trehs pee-LAH-rehs', category: 'academic-vocabulary', audio: 'el-marco-teorico-se-basa' },
  { spanish: 'La metodología combina enfoques cualitativos y cuantitativos', english: 'The methodology combines qualitative and quantitative approaches', pronunciation: 'lah meh-toh-doh-loh-HEE-ah kohm-BEE-nah ehn-FOH-kehs kwah-lee-tah-TEE-bohs ee kwahn-tee-tah-TEE-bohs', category: 'academic-vocabulary', audio: 'la-metodologia-combina-enfoques' },
  { spanish: 'Los hallazgos contradicen estudios previos', english: 'The findings contradict previous studies', pronunciation: 'lohs ah-YAHS-gohs kohn-trah-DEE-sehn ehs-TOO-dee-ohs PREH-bee-ohs', category: 'academic-vocabulary', audio: 'los-hallazgos-contradicen' },
  { spanish: 'Cabe destacar que la muestra es representativa', english: 'It is worth noting that the sample is representative', pronunciation: 'KAH-beh dehs-tah-KAHR keh lah MWEHS-trah ehs reh-preh-sehn-tah-TEE-bah', category: 'academic-vocabulary', audio: 'cabe-destacar-que-la-muestra' },
  { spanish: 'Es menester señalar las limitaciones del estudio', english: 'It is necessary to point out the study\'s limitations', pronunciation: 'ehs meh-nehs-TEHR seh-nyah-LAHR lahs lee-mee-tah-see-OH-nehs dehl ehs-TOO-dee-oh', category: 'academic-vocabulary', audio: 'es-menester-senalar' },
  { spanish: 'A modo de conclusión, los datos respaldan la tesis', english: 'By way of conclusion, the data support the thesis', pronunciation: 'ah MOH-doh deh kohn-kloo-see-OHN lohs DAH-tohs rehs-PAHL-dahn lah TEH-sees', category: 'academic-vocabulary', audio: 'a-modo-de-conclusion' },
  { spanish: 'El planteamiento del problema es innovador', english: 'The problem statement is innovative', pronunciation: 'ehl plahn-teh-ah-mee-EHN-toh dehl proh-BLEH-mah ehs ee-noh-bah-DOHR', category: 'academic-vocabulary', audio: 'el-planteamiento-del-problema' },
  { spanish: 'Las variables independientes fueron controladas', english: 'The independent variables were controlled', pronunciation: 'lahs bah-ree-AH-blehs een-deh-pehn-dee-EHN-tehs FWEH-rohn kohn-troh-LAH-dahs', category: 'academic-vocabulary', audio: 'las-variables-independientes' },
  { spanish: 'El análisis arrojó resultados inesperados', english: 'The analysis yielded unexpected results', pronunciation: 'ehl ah-NAH-lee-sees ah-rroh-HOH reh-sool-TAH-dohs ee-nehs-peh-RAH-dohs', category: 'academic-vocabulary', audio: 'el-analisis-arrojo-resultados' },
  { spanish: 'La revisión bibliográfica abarca veinte años', english: 'The literature review spans twenty years', pronunciation: 'lah reh-bee-see-OHN bee-blee-oh-GRAH-fee-kah ah-BAHR-kah BEHN-teh AH-nyohs', category: 'academic-vocabulary', audio: 'la-revision-bibliografica' },
  { spanish: 'Los datos empíricos corroboran la teoría', english: 'The empirical data corroborate the theory', pronunciation: 'lohs DAH-tohs ehm-PEE-ree-kohs koh-rroh-BOH-rahn lah teh-oh-REE-ah', category: 'academic-vocabulary', audio: 'los-datos-empiricos-corroboran' },

  // === Literary Analysis (12) ===
  { spanish: 'El argumento de la novela es complejo', english: 'The plot of the novel is complex', pronunciation: 'ehl ahr-goo-MEHN-toh deh lah noh-BEH-lah ehs kohm-PLEH-hoh', category: 'literary-analysis', audio: 'el-argumento-de-la-novela' },
  { spanish: 'La trama se desarrolla en tres actos', english: 'The plot unfolds in three acts', pronunciation: 'lah TRAH-mah seh deh-sah-RROH-yah ehn trehs AHK-tohs', category: 'literary-analysis', audio: 'la-trama-se-desarrolla' },
  { spanish: 'El desenlace fue inesperado y conmovedor', english: 'The ending was unexpected and moving', pronunciation: 'ehl deh-sehn-LAH-seh fweh ee-nehs-peh-RAH-doh ee kohn-moh-beh-DOHR', category: 'literary-analysis', audio: 'el-desenlace-fue-inesperado' },
  { spanish: 'El narrador omnisciente revela los pensamientos', english: 'The omniscient narrator reveals the thoughts', pronunciation: 'ehl nah-rrah-DOHR ohm-nee-see-EHN-teh reh-BEH-lah lohs pehn-sah-mee-EHN-tohs', category: 'literary-analysis', audio: 'el-narrador-omnisciente' },
  { spanish: 'La metáfora del río simboliza el tiempo', english: 'The river metaphor symbolizes time', pronunciation: 'lah meh-TAH-foh-rah dehl RREE-oh seem-boh-LEE-sah ehl tee-EHM-poh', category: 'literary-analysis', audio: 'la-metafora-del-rio' },
  { spanish: 'El simbolismo es central en la obra', english: 'Symbolism is central to the work', pronunciation: 'ehl seem-boh-LEES-moh ehs sehn-TRAHL ehn lah OH-brah', category: 'literary-analysis', audio: 'el-simbolismo-es-central' },
  { spanish: 'El punto de vista alterna entre dos personajes', english: 'The point of view alternates between two characters', pronunciation: 'ehl POON-toh deh BEES-tah ahl-TEHR-nah EHN-treh dohs pehr-soh-NAH-hehs', category: 'literary-analysis', audio: 'el-punto-de-vista-alterna' },
  { spanish: 'El tono melancólico domina el relato', english: 'The melancholic tone dominates the story', pronunciation: 'ehl TOH-noh meh-lahn-KOH-lee-koh doh-MEE-nah ehl reh-LAH-toh', category: 'literary-analysis', audio: 'el-tono-melancolico-domina' },
  { spanish: 'El protagonista experimenta una transformación', english: 'The protagonist undergoes a transformation', pronunciation: 'ehl proh-tah-goh-NEES-tah ehks-peh-ree-MEHN-tah OO-nah trahns-fohr-mah-see-OHN', category: 'literary-analysis', audio: 'el-protagonista-experimenta' },
  { spanish: 'La ironía dramática crea tensión narrativa', english: 'Dramatic irony creates narrative tension', pronunciation: 'lah ee-roh-NEE-ah drah-MAH-tee-kah KREH-ah tehn-see-OHN nah-rrah-TEE-bah', category: 'literary-analysis', audio: 'la-ironia-dramatica-crea' },
  { spanish: 'El contexto histórico influye en la interpretación', english: 'The historical context influences interpretation', pronunciation: 'ehl kohn-TEHKS-toh ees-TOH-ree-koh een-FLOO-yeh ehn lah een-tehr-preh-tah-see-OHN', category: 'literary-analysis', audio: 'el-contexto-historico-influye' },
  { spanish: 'El autor emplea un lenguaje figurado', english: 'The author employs figurative language', pronunciation: 'ehl ow-TOHR ehm-PLEH-ah oon lehn-GWAH-heh fee-goo-RAH-doh', category: 'literary-analysis', audio: 'el-autor-emplea-lenguaje' },

  // === Summarizing & Paraphrasing (12) ===
  { spanish: 'En síntesis, la evidencia es contundente', english: 'In summary, the evidence is conclusive', pronunciation: 'ehn SEEN-teh-sees lah eh-bee-DEHN-see-ah ehs kohn-toon-DEHN-teh', category: 'summarizing-paraphrasing', audio: 'en-sintesis-la-evidencia' },
  { spanish: 'Para resumir, hay tres factores principales', english: 'To summarize, there are three main factors', pronunciation: 'PAH-rah reh-soo-MEER eye trehs fahk-TOH-rehs preen-see-PAH-lehs', category: 'summarizing-paraphrasing', audio: 'para-resumir-hay-tres-factores' },
  { spanish: 'En otras palabras, el sistema necesita reformas', english: 'In other words, the system needs reforms', pronunciation: 'ehn OH-trahs pah-LAH-brahs ehl sees-TEH-mah neh-seh-SEE-tah reh-FOHR-mahs', category: 'summarizing-paraphrasing', audio: 'en-otras-palabras-el-sistema' },
  { spanish: 'Dicho de otro modo, la correlación no implica causalidad', english: 'Put another way, correlation does not imply causation', pronunciation: 'DEE-choh deh OH-troh MOH-doh lah koh-rreh-lah-see-OHN noh eem-PLEE-kah kow-sah-lee-DAHD', category: 'summarizing-paraphrasing', audio: 'dicho-de-otro-modo' },
  { spanish: 'El autor sostiene que la educación es la clave', english: 'The author argues that education is the key', pronunciation: 'ehl ow-TOHR sohs-tee-EH-neh keh lah eh-doo-kah-see-OHN ehs lah KLAH-beh', category: 'summarizing-paraphrasing', audio: 'el-autor-sostiene-que' },
  { spanish: 'Se puede inferir que el modelo es insuficiente', english: 'It can be inferred that the model is insufficient', pronunciation: 'seh PWEH-deh een-feh-REER keh ehl moh-DEH-loh ehs een-soo-fee-see-EHN-teh', category: 'summarizing-paraphrasing', audio: 'se-puede-inferir-que' },
  { spanish: 'En definitiva, los resultados hablan por sí mismos', english: 'Ultimately, the results speak for themselves', pronunciation: 'ehn deh-fee-nee-TEE-bah lohs reh-sool-TAH-dohs AH-blahn pohr see MEES-mohs', category: 'summarizing-paraphrasing', audio: 'en-definitiva-los-resultados' },
  { spanish: 'Lo anterior sugiere una tendencia creciente', english: 'The above suggests a growing trend', pronunciation: 'loh ahn-teh-ree-OHR soo-hee-EH-reh OO-nah tehn-DEHN-see-ah kreh-see-EHN-teh', category: 'summarizing-paraphrasing', audio: 'lo-anterior-sugiere' },
  { spanish: 'Cabe concluir que la intervención fue eficaz', english: 'It can be concluded that the intervention was effective', pronunciation: 'KAH-beh kohn-kloo-EER keh lah een-tehr-behn-see-OHN fweh eh-fee-KAHS', category: 'summarizing-paraphrasing', audio: 'cabe-concluir-que' },
  { spanish: 'A grandes rasgos, el panorama es favorable', english: 'Broadly speaking, the outlook is favorable', pronunciation: 'ah GRAHN-dehs RAHS-gohs ehl pah-noh-RAH-mah ehs fah-boh-RAH-bleh', category: 'summarizing-paraphrasing', audio: 'a-grandes-rasgos' },
  { spanish: 'En pocas palabras, se requiere un cambio de paradigma', english: 'In a nutshell, a paradigm shift is required', pronunciation: 'ehn POH-kahs pah-LAH-brahs seh reh-kee-EH-reh oon KAHM-bee-oh deh pah-rah-DEEG-mah', category: 'summarizing-paraphrasing', audio: 'en-pocas-palabras' },
  { spanish: 'Como se ha demostrado, la hipótesis es válida', english: 'As has been demonstrated, the hypothesis is valid', pronunciation: 'KOH-moh seh ah deh-mohs-TRAH-doh lah ee-POH-teh-sees ehs BAH-lee-dah', category: 'summarizing-paraphrasing', audio: 'como-se-ha-demostrado' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L57PhraseByAudio = phraseByAudio

// === LECTURE SUMMARIZER (unique activity) ===

export interface LectureSummarizerChallenge {
  passage: string
  english: string
  correctSummary: string
  options: string[]
}

export const LECTURE_SUMMARIZER_CHALLENGES: LectureSummarizerChallenge[] = [
  {
    passage: 'La profesora García declaró en su ponencia: "Los datos empíricos demuestran que la educación bilingüe mejora el rendimiento cognitivo en un 23%."',
    english: 'Professor García stated in her presentation: "Empirical data shows that bilingual education improves cognitive performance by 23%."',
    correctSummary: 'La profesora García afirmó que los datos empíricos demostraban que la educación bilingüe mejoraba el rendimiento cognitivo.',
    options: [
      'La profesora García afirmó que los datos empíricos demostraban que la educación bilingüe mejoraba el rendimiento cognitivo.',
      'La profesora García dice que los datos empíricos demuestran que la educación bilingüe mejora el rendimiento.',
      'La profesora García negó que los datos empíricos demostraran algo sobre la educación bilingüe.',
      'La profesora García explicó que la educación bilingüe no tiene efectos cognitivos medibles.',
    ],
  },
  {
    passage: 'El doctor Ramírez anunció: "Nuestro equipo publicará los hallazgos en la revista Nature el próximo mes. Los resultados cambiarán el campo de la genómica."',
    english: 'Doctor Ramírez announced: "Our team will publish the findings in Nature next month. The results will change the field of genomics."',
    correctSummary: 'El doctor Ramírez anunció que su equipo publicaría los hallazgos en Nature y que los resultados cambiarían el campo de la genómica.',
    options: [
      'El doctor Ramírez dijo que su equipo publica los hallazgos y que los resultados cambian la genómica.',
      'El doctor Ramírez anunció que su equipo publicaría los hallazgos en Nature y que los resultados cambiarían el campo de la genómica.',
      'El doctor Ramírez sostuvo que su equipo había publicado los hallazgos en Nature el mes pasado.',
      'El doctor Ramírez mencionó que no publicaría nada hasta el próximo año.',
    ],
  },
  {
    passage: 'La rectora Mendoza indicó: "No podemos aceptar estos recortes presupuestarios. La universidad necesita más fondos para investigación, no menos."',
    english: 'Chancellor Mendoza stated: "We cannot accept these budget cuts. The university needs more research funding, not less."',
    correctSummary: 'La rectora Mendoza indicó que no podían aceptar esos recortes y que la universidad necesitaba más fondos para investigación.',
    options: [
      'La rectora Mendoza dijo que aceptarían los recortes presupuestarios con algunas condiciones.',
      'La rectora Mendoza explicó que la universidad ya tenía suficientes fondos para investigación.',
      'La rectora Mendoza indicó que no podían aceptar esos recortes y que la universidad necesitaba más fondos para investigación.',
      'La rectora Mendoza afirmó que los recortes no afectaban a la universidad.',
    ],
  },
  {
    passage: 'En su conferencia, el sociólogo Vargas argumentó: "La desigualdad social se ha intensificado. Las políticas actuales no están funcionando y debemos replantear el modelo."',
    english: 'In his lecture, sociologist Vargas argued: "Social inequality has intensified. Current policies are not working and we must rethink the model."',
    correctSummary: 'El sociólogo Vargas argumentó que la desigualdad social se había intensificado y que las políticas actuales no estaban funcionando.',
    options: [
      'El sociólogo Vargas mencionó que la desigualdad social ha disminuido gracias a las políticas actuales.',
      'El sociólogo Vargas negó que existiera desigualdad social significativa en la actualidad.',
      'El sociólogo Vargas argumentó que la desigualdad social se había intensificado y que las políticas actuales no estaban funcionando.',
      'El sociólogo Vargas sostuvo que las políticas actuales funcionan perfectamente.',
    ],
  },
  {
    passage: 'La investigadora Patel explicó: "Hemos descubierto una nueva especie en el Amazonas. Este hallazgo tendrá implicaciones para la conservación de la biodiversidad."',
    english: 'Researcher Patel explained: "We have discovered a new species in the Amazon. This finding will have implications for biodiversity conservation."',
    correctSummary: 'La investigadora Patel explicó que habían descubierto una nueva especie en el Amazonas y que el hallazgo tendría implicaciones para la conservación.',
    options: [
      'La investigadora Patel explicó que habían descubierto una nueva especie en el Amazonas y que el hallazgo tendría implicaciones para la conservación.',
      'La investigadora Patel dijo que descubrirán una nueva especie en el Amazonas el próximo año.',
      'La investigadora Patel afirmó que el Amazonas no tiene especies nuevas por descubrir.',
      'La investigadora Patel señaló que la conservación de la biodiversidad no es prioritaria.',
    ],
  },
  {
    passage: 'El filósofo Torres reflexionó: "El lenguaje no solo describe la realidad, sino que la construye. Cada palabra que elegimos moldea nuestra percepción del mundo."',
    english: 'Philosopher Torres reflected: "Language does not only describe reality, but constructs it. Every word we choose shapes our perception of the world."',
    correctSummary: 'El filósofo Torres reflexionó que el lenguaje no solo describía la realidad, sino que la construía, y que cada palabra moldeaba la percepción.',
    options: [
      'El filósofo Torres dijo que el lenguaje describe la realidad objetivamente y sin distorsiones.',
      'El filósofo Torres reflexionó que el lenguaje no solo describía la realidad, sino que la construía, y que cada palabra moldeaba la percepción.',
      'El filósofo Torres admitió que el lenguaje no tiene ningún efecto sobre la realidad.',
      'El filósofo Torres mencionó que solo las palabras científicas moldean la percepción del mundo.',
    ],
  },
  {
    passage: 'La economista Ríos advirtió: "Si no diversificamos la economía, enfrentaremos una recesión en los próximos cinco años. Es urgente invertir en tecnología y educación."',
    english: 'Economist Ríos warned: "If we do not diversify the economy, we will face a recession in the next five years. It is urgent to invest in technology and education."',
    correctSummary: 'La economista Ríos advirtió que si no diversificaban la economía, enfrentarían una recesión, y que era urgente invertir en tecnología y educación.',
    options: [
      'La economista Ríos sostuvo que la economía ya estaba suficientemente diversificada.',
      'La economista Ríos explicó que la recesión ya había terminado y no se repetirá.',
      'La economista Ríos dijo que la tecnología y la educación no son prioridades económicas.',
      'La economista Ríos advirtió que si no diversificaban la economía, enfrentarían una recesión, y que era urgente invertir en tecnología y educación.',
    ],
  },
]

// === LESSON DATA ===

export const L57Data: LessonData = {
  id: 'L5.7',
  hero: {
    lessonId: 'L5.7',
    title: 'Academic & Intellectual Spanish',
    subtitle: 'Mastering reported speech, scholarly discourse, and literary analysis',
    description: 'Navigate university seminars, research papers, and literary discussions with confidence. Learn to transform direct speech into reported speech, use academic vocabulary precisely, analyze literature, and summarize complex arguments — essential skills for C1-level fluency.',
    image: '/images/L5.7/L5.7.jpg',
    gradient: 'from-emerald-800/65 via-teal-700/55 to-cyan-700/65',
    accentColor: 'teal-200',
  },

  objectives: [
    { icon: '\uD83D\uDDE3\uFE0F', title: 'Reported Speech', desc: 'Transform direct quotes into indirect speech with correct tense backshifting: present to imperfect, future to conditional.' },
    { icon: '\uD83C\uDF93', title: 'Academic Vocabulary', desc: 'Use formal scholarly language: hipotesis, marco teorico, metodologia, hallazgos, cabe destacar, es menester.' },
    { icon: '\uD83D\uDCDA', title: 'Literary Analysis', desc: 'Discuss novels and poetry using critical terms: argumento, trama, desenlace, narrador omnisciente, metafora, simbolismo.' },
    { icon: '\uD83D\uDCDD', title: 'Summarizing & Paraphrasing', desc: 'Condense and rephrase academic content: en sintesis, en otras palabras, el autor sostiene que, se puede inferir que.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.4', label: 'News Reporting', detail: 'L4.4 introduced journalistic register and news vocabulary. Now apply similar skills to academic and literary contexts.' },
    { fromLesson: 'L4.7', label: 'Literary Vocabulary', detail: 'L4.7 covered expressive literary language. Now deepen your analysis with formal critical terminology.' },
    { fromLesson: 'L4.2', label: 'Subjunctive in Reported Speech', detail: 'L4.2 introduced subjunctive triggers. Now use subjunctive after "negar que," "dudar que" in academic discourse.' },
  ],

  sectionTransitions: [
    { afterSection: 'reported-speech', text: 'You can report what others said! Now let\'s build your academic vocabulary for university-level discussions.' },
    { afterSection: 'academic-vocabulary', text: 'Your scholarly vocabulary is growing! Let\'s apply analytical language to literature.' },
    { afterSection: 'literary-analysis', text: 'Excellent literary analysis skills! Now learn to summarize and paraphrase like a pro.' },
    { afterSection: 'dialogues', text: 'Great academic conversations! Let\'s explore the intellectual traditions of Latin America.' },
    { afterSection: 'cultural', text: 'Now test your reported speech skills in the Lecture Summarizer!' },
    { afterSection: 'lecture-summarizer', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Segun el autor...', english: 'According to the author...' },
    { spanish: 'Cabe destacar que...', english: 'It is worth noting that...' },
    { spanish: 'En sintesis...', english: 'In summary...' },
    { spanish: 'El argumento principal...', english: 'The main argument...' },
    { spanish: 'Se puede inferir que...', english: 'It can be inferred that...' },
    { spanish: 'Dijo que...', english: 'He/She said that...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La hipotesis fue corroborada por los datos empiricos', pronunciation: 'lah ee-POH-teh-sees fweh koh-rroh-boh-RAH-dah pohr lohs DAH-tohs ehm-PEE-ree-kohs', english: 'The hypothesis was corroborated by the empirical data', audio: 'la-hipotesis-fue-rechazada', tip: '"Hipotesis" has the stress on the third-to-last syllable: hi-PO-te-sis. Most words ending in -sis follow this pattern: analisis, sintesis, tesis.' },
    { spanish: 'El narrador omnisciente revela el desenlace', pronunciation: 'ehl nah-rrah-DOHR ohm-nee-see-EHN-teh reh-BEH-lah ehl deh-sehn-LAH-seh', english: 'The omniscient narrator reveals the ending', audio: 'el-narrador-omnisciente', tip: '"Omnisciente" is pronounced ohm-nee-see-EHN-teh — the "sc" before "i" sounds like "s" in Latin American Spanish, not "sh."' },
    { spanish: 'Afirmo que la metodologia era adecuada', pronunciation: 'ah-feer-MOH keh lah meh-toh-doh-loh-HEE-ah EH-rah ah-deh-KWAH-dah', english: 'She affirmed that the methodology was adequate', audio: 'afirmo-que-el-proyecto-era-viable', tip: 'In reported speech, present tense "es" becomes imperfect "era." This tense backshifting is automatic in academic Spanish.' },
    { spanish: 'La metafora del rio simboliza el paso del tiempo', pronunciation: 'lah meh-TAH-foh-rah dehl RREE-oh seem-boh-LEE-sah ehl PAH-soh dehl tee-EHM-poh', english: 'The river metaphor symbolizes the passage of time', audio: 'la-metafora-del-rio', tip: '"Metafora" is esdrujula (stress on third-to-last syllable): me-TA-fo-ra. All esdrujulas carry a written accent mark.' },
    { spanish: 'Dicho de otro modo, la correlacion no implica causalidad', pronunciation: 'DEE-choh deh OH-troh MOH-doh lah koh-rreh-lah-see-OHN noh eem-PLEE-kah kow-sah-lee-DAHD', english: 'Put another way, correlation does not imply causation', audio: 'dicho-de-otro-modo', tip: '"Correlacion" and "causalidad" are cognates. Recognize Latin roots to quickly expand your academic vocabulary.' },
    { spanish: 'Cabe concluir que los hallazgos respaldan la tesis', pronunciation: 'KAH-beh kohn-kloo-EER keh lohs ah-YAHS-gohs rehs-PAHL-dahn lah TEH-sees', english: 'It can be concluded that the findings support the thesis', audio: 'cabe-concluir-que', tip: '"Hallazgos" has the LL sound (like "y" in most Latin American dialects): ah-YAHS-gohs. A common academic word meaning "findings."' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'reported-speech', label: 'Reported Speech' },
    { id: 'academic-vocabulary', label: 'Academic Vocabulary' },
    { id: 'literary-analysis', label: 'Literary Analysis' },
    { id: 'summarizing-paraphrasing', label: 'Summarizing & Paraphrasing' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'term-sorting', label: 'Term Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'lecture-summarizer', label: 'Lecture Summarizer' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'reported-speech',
      title: 'Reported Speech — El Discurso Indirecto',
      description: 'Transform direct quotes into indirect speech. Key rule: present becomes imperfect, future becomes conditional, preterite stays the same.',
      tabs: [
        { label: 'Reporting Verbs', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'reported-speech').slice(0, 6) },
        { label: 'Tense Shifts', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'reported-speech').slice(6) },
      ],
    },
    {
      id: 'academic-vocabulary',
      title: 'Academic Vocabulary — Vocabulario Academico',
      description: 'Formal language for research papers, presentations, and scholarly debate. These phrases signal C1-level proficiency.',
      tabs: [
        { label: 'Research Terms', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'academic-vocabulary').slice(0, 6) },
        { label: 'Formal Connectors', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'academic-vocabulary').slice(6) },
      ],
    },
    {
      id: 'literary-analysis',
      title: 'Literary Analysis — Analisis Literario',
      description: 'Critical vocabulary for discussing novels, poetry, and drama. Essential for book clubs, university seminars, and literary criticism.',
      tabs: [
        { label: 'Narrative Elements', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'literary-analysis').slice(0, 6) },
        { label: 'Style & Technique', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'literary-analysis').slice(6) },
      ],
    },
    {
      id: 'summarizing-paraphrasing',
      title: 'Summarizing & Paraphrasing — Resumir y Parafrasear',
      description: 'Condense complex arguments and rephrase ideas in your own words — a key academic skill at the C1 level.',
      tabs: [
        { label: 'Summary Phrases', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'summarizing-paraphrasing').slice(0, 6) },
        { label: 'Paraphrasing Tools', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'summarizing-paraphrasing').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Esdrujulas: Academic Words with Antepenultimate Stress',
      content: 'Many academic words are esdrujulas (stress on the third-to-last syllable) and always carry a written accent: hipotesis, metodologia (me-to-do-lo-GI-a is NOT esdrujula, but metafora IS: me-TA-fo-ra), analisis, sintesis, empirico, bibliografico. Recognizing this pattern helps you pronounce scholarly vocabulary correctly.',
      example: 'Hipotesis (hi-PO-te-sis) | Metafora (me-TA-fo-ra) | Empirico (em-PI-ri-co) | Sintesis (SIN-te-sis)',
    },
    {
      title: 'Reported Speech Intonation',
      content: 'In indirect speech, the intonation flattens compared to direct quotes. When saying "Dijo que estaba cansado," the "que" clause flows smoothly without the dramatic rise of a direct quote. Practice keeping a steady, academic tone after reporting verbs like dijo, afirmo, explico.',
      example: 'Direct: "Estoy cansado." → Indirect: Dijo que estaba cansado. (smooth, no pause after "que")',
      reviewFrom: 'L4.4',
    },
    {
      title: 'Latin-Origin Academic Cognates',
      content: 'Spanish and English share hundreds of academic cognates from Latin: metodologia/methodology, hipotesis/hypothesis, analisis/analysis, variable/variable, correlacion/correlation. The pronunciation differs but the meaning is nearly identical. Use this to rapidly expand your scholarly vocabulary.',
      example: 'Investigacion (research) | Conclusion (conclusion) | Evidencia (evidence) | Paradigma (paradigm)',
    },
    {
      title: 'The "CC" Cluster in Academic Spanish',
      content: 'Words like "accion," "leccion," "direccion," "construccion" have a double-C (cc) before -ion. In careful academic speech, both C sounds are pronounced: ahk-see-OHN (not ah-see-OHN). This distinguishes formal from casual register.',
      example: 'Accion (ahk-see-OHN) | Leccion (lehk-see-OHN) | Construccion (kohns-trook-see-OHN)',
      reviewFrom: 'L4.2',
    },
  ],

  flashcardGroups: [
    {
      key: 'reported-speech',
      label: 'Reported Speech',
      audioKeys: ['dijo-que-estaba-cansado', 'afirmo-que-el-proyecto-era-viable', 'nego-que-hubiera-participado', 'explico-que-los-datos-confirmaban', 'menciono-que-vendria-al-congreso', 'segun-el-investigador', 'de-acuerdo-con-el-estudio', 'senalo-que-habria-cambios', 'sostuvo-que-la-metodologia', 'concluyo-que-se-necesitaba'],
    },
    {
      key: 'academic-literary',
      label: 'Academic & Literary',
      audioKeys: ['la-hipotesis-fue-rechazada', 'el-marco-teorico-se-basa', 'la-metodologia-combina-enfoques', 'los-hallazgos-contradicen', 'el-argumento-de-la-novela', 'la-trama-se-desarrolla', 'el-desenlace-fue-inesperado', 'el-narrador-omnisciente', 'la-metafora-del-rio', 'el-simbolismo-es-central'],
    },
    {
      key: 'summarizing',
      label: 'Summarizing & Paraphrasing',
      audioKeys: ['en-sintesis-la-evidencia', 'para-resumir-hay-tres-factores', 'en-otras-palabras-el-sistema', 'dicho-de-otro-modo', 'el-autor-sostiene-que', 'se-puede-inferir-que', 'en-definitiva-los-resultados', 'cabe-concluir-que'],
    },
  ],

  matchPairs: [
    { left: 'Dijo que', right: 'He/She said that' },
    { left: 'La hipotesis', right: 'The hypothesis' },
    { left: 'El desenlace', right: 'The ending/outcome' },
    { left: 'En sintesis', right: 'In summary' },
    { left: 'Cabe destacar', right: 'It is worth noting' },
    { left: 'El narrador', right: 'The narrator' },
    { left: 'Dicho de otro modo', right: 'Put another way' },
    { left: 'Los hallazgos', right: 'The findings' },
  ],
  matchLabels: { left: 'Espanol', right: 'English' },

  sortActivities: [
    {
      title: 'Academic vs. Literary Terms',
      instruction: 'Is this term from academic research or literary analysis?',
      buckets: ['Academic Research', 'Literary Analysis'],
      items: [
        { text: 'La hipotesis', bucket: 'Academic Research' },
        { text: 'La metodologia', bucket: 'Academic Research' },
        { text: 'Los hallazgos', bucket: 'Academic Research' },
        { text: 'Las variables', bucket: 'Academic Research' },
        { text: 'El desenlace', bucket: 'Literary Analysis' },
        { text: 'El narrador omnisciente', bucket: 'Literary Analysis' },
        { text: 'La metafora', bucket: 'Literary Analysis' },
        { text: 'La ironia dramatica', bucket: 'Literary Analysis' },
      ],
    },
    {
      title: 'Summary vs. Paraphrase Markers',
      instruction: 'Does this phrase introduce a summary or a paraphrase/restatement?',
      buckets: ['Summary', 'Paraphrase/Restatement'],
      items: [
        { text: 'En sintesis', bucket: 'Summary' },
        { text: 'Para resumir', bucket: 'Summary' },
        { text: 'En definitiva', bucket: 'Summary' },
        { text: 'A grandes rasgos', bucket: 'Summary' },
        { text: 'En otras palabras', bucket: 'Paraphrase/Restatement' },
        { text: 'Dicho de otro modo', bucket: 'Paraphrase/Restatement' },
        { text: 'Es decir', bucket: 'Paraphrase/Restatement' },
        { text: 'O sea', bucket: 'Paraphrase/Restatement' },
      ],
    },
  ],
  sortSectionId: 'term-sorting',
  sortTitle: 'Term Sorting',

  dialogues: [
    {
      id: 'dialogue-seminar',
      title: 'University Seminar on Climate Change — Quito, Ecuador',
      location: 'Quito',
      lines: [
        { speaker: 'Profesora Salazar', text: 'Buenas tardes. Hoy analizaremos el articulo de Ramirez sobre cambio climatico y migracion. Andrea, ¿podrias resumir la tesis principal?', audio: '/audio/L5.7/phrases/d1-line1.mp3' },
        { speaker: 'Andrea', text: 'Si, profesora. El autor sostiene que el cambio climatico sera el principal motor de migracion en America Latina para 2040.', audio: '/audio/L5.7/phrases/d1-line2.mp3', annotations: [{ phrase: 'El autor sostiene que', fromLesson: 'L5.7', note: 'Key summarizing phrase: "The author argues that..."' }] },
        { speaker: 'Profesora Salazar', text: 'Bien. ¿Y cual es el marco teorico que utiliza?', audio: '/audio/L5.7/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Se basa en la teoria de sistemas complejos. Cabe destacar que combina datos cuantitativos con estudios de caso cualitativos.', audio: '/audio/L5.7/phrases/d1-line4.mp3', annotations: [{ phrase: 'Cabe destacar que', fromLesson: 'L5.7', note: 'Formal academic connector: "It is worth noting that..."' }] },
        { speaker: 'Profesora Salazar', text: 'Excelente. Ahora, ¿alguien podria senalar las limitaciones del estudio?', audio: '/audio/L5.7/phrases/d1-line5.mp3' },
        { speaker: 'Andrea', text: 'Es menester senalar que la muestra solo abarca tres paises. Dicho de otro modo, los hallazgos no son generalizables a toda la region.', audio: '/audio/L5.7/phrases/d1-line6.mp3', annotations: [{ phrase: 'Es menester senalar', fromLesson: 'L5.7', note: 'Very formal: "It is necessary to point out..."' }] },
        { speaker: 'Diego', text: 'De acuerdo con el propio autor, se necesitan mas estudios longitudinales. El admitio que los datos eran preliminares.', audio: '/audio/L5.7/phrases/d1-line7.mp3' },
        { speaker: 'Profesora Salazar', text: 'A modo de conclusion, ¿que se puede inferir del articulo para las politicas publicas ecuatorianas?', audio: '/audio/L5.7/phrases/d1-line8.mp3' },
        { speaker: 'Andrea', text: 'En sintesis, se puede inferir que Ecuador necesita politicas de adaptacion climatica para reducir la presion migratoria interna.', audio: '/audio/L5.7/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-bookclub',
      title: 'Book Club Discussion: "Cien Anos de Soledad" — San Jose, Costa Rica',
      location: 'San Jose, Costa Rica',
      lines: [
        { speaker: 'Lucia', text: 'Acabo de terminar Cien anos de soledad. El desenlace me dejo sin palabras.', audio: '/audio/L5.7/phrases/d2-line1.mp3' },
        { speaker: 'Fernando', text: '¿Verdad? La trama se desarrolla de manera circular. Segun varios criticos, eso refleja la vision ciclica de la historia latinoamericana.', audio: '/audio/L5.7/phrases/d2-line2.mp3', annotations: [{ phrase: 'Segun varios criticos', fromLesson: 'L5.7', note: 'Citing sources: "According to several critics..."' }] },
        { speaker: 'Lucia', text: 'El narrador omnisciente es fascinante. Revela el futuro y el pasado al mismo tiempo, como si el tiempo no fuera lineal.', audio: '/audio/L5.7/phrases/d2-line3.mp3' },
        { speaker: 'Fernando', text: 'Exacto. Y la metafora de la soledad como condena familiar es el hilo conductor de toda la novela.', audio: '/audio/L5.7/phrases/d2-line4.mp3' },
        { speaker: 'Lucia', text: 'El simbolismo del hielo es brillante. Garcia Marquez dijo que queria capturar "el asombro ante lo cotidiano."', audio: '/audio/L5.7/phrases/d2-line5.mp3' },
        { speaker: 'Fernando', text: 'En otras palabras, el realismo magico no inventa la magia; la encuentra en la realidad. El punto de vista del narrador hace que lo imposible parezca natural.', audio: '/audio/L5.7/phrases/d2-line6.mp3', annotations: [{ phrase: 'En otras palabras', fromLesson: 'L5.7', note: 'Paraphrasing: "In other words..."' }] },
        { speaker: 'Lucia', text: 'El tono melancolico de las ultimas paginas me recordo a Pedro Paramo de Rulfo. ¿Creen que hay influencia directa?', audio: '/audio/L5.7/phrases/d2-line7.mp3' },
        { speaker: 'Fernando', text: 'Sin duda. Garcia Marquez afirmo que Rulfo habia sido una influencia fundamental. El argumento de Pedro Paramo tambien explora la memoria y la muerte.', audio: '/audio/L5.7/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Participate in a university seminar analyzing climate research in Quito and discuss the literary masterpiece "Cien Anos de Soledad" at a book club in San Jose, Costa Rica.',

  culturalNotes: [
    {
      title: 'Latin American Academic Traditions',
      content: 'Latin American universities have a rich tradition of academic debate rooted in the public university system. In countries like Argentina, Mexico, and Ecuador, universities are often free and publicly funded, creating a culture where education is seen as a public right. Academic discussions tend to be more openly political and socially engaged than in Anglo-Saxon traditions. Terms like "catedra libre" (free lecture open to the public) and "extension universitaria" (university outreach to communities) reflect this commitment to knowledge as a social good.',
    },
    {
      title: 'El Boom Literario Latinoamericano',
      content: 'The Latin American Literary Boom of the 1960s-70s revolutionized world literature. Authors like Gabriel Garcia Marquez (Colombia), Julio Cortazar (Argentina), Carlos Fuentes (Mexico), and Mario Vargas Llosa (Peru) introduced magical realism, experimental narrative, and profound social critique to global audiences. "Cien anos de soledad" (1967) became the defining novel of the movement. Understanding the Boom is essential for literary conversations in Spanish — these authors are cultural icons whose phrases and characters are part of everyday language across Latin America.',
    },
    {
      title: 'University Culture Across Latin America',
      content: 'University life in Latin America blends rigorous academics with vibrant social engagement. Student movements have shaped history — from the Cordoba Reform of 1918 (Argentina), which established university autonomy, to student protests in Mexico (1968) and Chile (2011). The "tesis de grado" (thesis defense) remains a formal rite of passage. Students often address professors as "profesor/a" or "doctor/a" and use usted in academic settings, even in countries where tuteo is common socially. Study groups ("grupos de estudio") and oral exams ("examenes orales") are more common than in the U.S. system.',
    },
  ],
  culturalGradient: 'from-emerald-50 to-teal-50',

  quiz: [
    { id: 1, type: 'mc', text: 'To report "Estoy cansado" (present) in indirect speech, you change it to:', options: ['Dijo que esta cansado', 'Dijo que estaba cansado', 'Dijo que estara cansado', 'Dijo que estuvo cansado'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La profesora ___ que los datos confirmaban la teoria." (explained)', answer: ['explico', 'explicó'] },
    { id: 3, type: 'mc', text: '"Cabe destacar" means:', options: ['It is impossible', 'It is forbidden', 'It is worth noting', 'It is obvious'], answer: 2 },
    { id: 4, type: 'tf', text: 'In reported speech, future tense ("publicare") becomes conditional ("publicaria").', answer: true },
    { id: 5, type: 'mc', text: '"El desenlace" in literary analysis refers to:', options: ['The beginning', 'The climax', 'The ending/resolution', 'The setting'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "En ___ palabras, el sistema necesita reformas." (other)', answer: 'otras' },
    { id: 7, type: 'mc', text: '"El narrador omnisciente" is a narrator who:', options: ['Is a character in the story', 'Knows only one character\'s thoughts', 'Knows everything about all characters', 'Speaks in first person'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what is the main thesis of the Ramirez article?', options: ['Education reform', 'Climate change as migration driver', 'Economic inequality', 'Urban development'], answer: 1 },
    { id: 9, type: 'tf', text: '"Es menester senalar" is a very formal way to say "it is necessary to point out."', answer: true },
    { id: 10, type: 'mc', text: '"Dicho de otro modo" is used to:', options: ['Contradict a statement', 'End a discussion', 'Paraphrase or restate', 'Ask a question'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "El autor ___ que la educacion es la clave." (argues/maintains)', answer: ['sostiene', 'afirma'] },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what literary device is central to "Cien anos de soledad"?', options: ['Rhyme scheme', 'Magical realism', 'Dramatic irony', 'Free verse'], answer: 1 },
    { id: 13, type: 'mc', text: '"Los hallazgos" translates to:', options: ['The hypotheses', 'The methods', 'The findings', 'The conclusions'], answer: 2 },
    { id: 14, type: 'tf', text: 'The Latin American Literary Boom of the 1960s-70s included authors like Garcia Marquez, Cortazar, and Fuentes.', answer: true },
    { id: 15, type: 'mc', text: '"Nego que hubiera participado" uses the subjunctive because:', options: ['It expresses certainty', 'Negar triggers subjunctive', 'It is a question', 'It is in the future'], answer: 1 },
  ],

  audioBase: '/audio/L5.7/phrases',

  uniqueActivity: {
    id: 'LectureSummarizerL57',
    sectionId: 'lecture-summarizer',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'reported-speech': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'academic-vocabulary': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'literary-analysis': { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'summarizing-paraphrasing': { bg: 'bg-emerald-50/30', border: 'border-emerald-200' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-teal-50/30', border: 'border-teal-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'term-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    cultural: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'lecture-summarizer': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
