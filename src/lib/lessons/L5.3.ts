import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Passive with Ser (12) ===
  { spanish: 'La casa fue construida en 1920', english: 'The house was built in 1920', pronunciation: 'lah KAH-sah fweh kohns-troo-EE-dah ehn meel noh-beh-see-EHN-tohs BEHN-teh', category: 'ser-passive', audio: 'la-casa-fue-construida' },
  { spanish: 'El libro fue escrito por García Márquez', english: 'The book was written by García Márquez', pronunciation: 'ehl LEE-broh fweh ehs-KREE-toh pohr gahr-SEE-ah MAHR-kehs', category: 'ser-passive', audio: 'el-libro-fue-escrito' },
  { spanish: 'Los resultados fueron publicados ayer', english: 'The results were published yesterday', pronunciation: 'lohs reh-sool-TAH-dohs FWEH-rohn poo-blee-KAH-dohs ah-YEHR', category: 'ser-passive', audio: 'los-resultados-fueron-publicados' },
  { spanish: 'La ley fue aprobada por el congreso', english: 'The law was approved by congress', pronunciation: 'lah leh-ee fweh ah-proh-BAH-dah pohr ehl kohn-GREH-soh', category: 'ser-passive', audio: 'la-ley-fue-aprobada' },
  { spanish: 'El cuadro fue pintado por Picasso', english: 'The painting was painted by Picasso', pronunciation: 'ehl KWAH-droh fweh peen-TAH-doh pohr pee-KAH-soh', category: 'ser-passive', audio: 'el-cuadro-fue-pintado' },
  { spanish: 'La carta fue enviada esta mañana', english: 'The letter was sent this morning', pronunciation: 'lah KAHR-tah fweh ehn-bee-AH-dah EHS-tah mah-NYAH-nah', category: 'ser-passive', audio: 'la-carta-fue-enviada' },
  { spanish: 'Las víctimas fueron rescatadas por los bomberos', english: 'The victims were rescued by the firefighters', pronunciation: 'lahs BEEK-tee-mahs FWEH-rohn rehs-kah-TAH-dahs pohr lohs bohm-BEH-rohs', category: 'ser-passive', audio: 'las-victimas-fueron-rescatadas' },
  { spanish: 'El edificio será demolido el próximo mes', english: 'The building will be demolished next month', pronunciation: 'ehl eh-dee-FEE-see-oh seh-RAH deh-moh-LEE-doh ehl PROHK-see-moh mehs', category: 'ser-passive', audio: 'el-edificio-sera-demolido' },
  { spanish: 'La película fue dirigida por Almodóvar', english: 'The film was directed by Almodóvar', pronunciation: 'lah peh-LEE-koo-lah fweh dee-ree-HEE-dah pohr ahl-moh-DOH-bahr', category: 'ser-passive', audio: 'la-pelicula-fue-dirigida' },
  { spanish: 'El premio fue otorgado a la científica', english: 'The prize was awarded to the scientist', pronunciation: 'ehl PREH-mee-oh fweh oh-tohr-GAH-doh ah lah see-ehn-TEE-fee-kah', category: 'ser-passive', audio: 'el-premio-fue-otorgado' },
  { spanish: 'Los documentos fueron firmados por el director', english: 'The documents were signed by the director', pronunciation: 'lohs doh-koo-MEHN-tohs FWEH-rohn feer-MAH-dohs pohr ehl dee-rehk-TOHR', category: 'ser-passive', audio: 'los-documentos-fueron-firmados' },
  { spanish: 'La obra fue inaugurada el viernes pasado', english: 'The work was inaugurated last Friday', pronunciation: 'lah OH-brah fweh ee-now-goo-RAH-dah ehl bee-EHR-nehs pah-SAH-doh', category: 'ser-passive', audio: 'la-obra-fue-inaugurada' },

  // === Passive Se (12) ===
  { spanish: 'Se construyó un puente nuevo', english: 'A new bridge was built', pronunciation: 'seh kohns-troo-YOH oon PWEHN-teh NWEH-boh', category: 'se-passive', audio: 'se-construyo-un-puente' },
  { spanish: 'Se vendieron todas las entradas', english: 'All the tickets were sold', pronunciation: 'seh behn-dee-EH-rohn TOH-dahs lahs ehn-TRAH-dahs', category: 'se-passive', audio: 'se-vendieron-todas-las-entradas' },
  { spanish: 'Se aprobó la ley de educación', english: 'The education law was approved', pronunciation: 'seh ah-proh-BOH lah leh-ee deh eh-doo-kah-see-OHN', category: 'se-passive', audio: 'se-aprobo-la-ley' },
  { spanish: 'Se publicaron los resultados del examen', english: 'The exam results were published', pronunciation: 'seh poo-blee-KAH-rohn lohs reh-sool-TAH-dohs dehl ehk-SAH-mehn', category: 'se-passive', audio: 'se-publicaron-los-resultados' },
  { spanish: 'Se inauguró el nuevo hospital', english: 'The new hospital was inaugurated', pronunciation: 'seh ee-now-goo-ROH ehl NWEH-boh ohs-pee-TAHL', category: 'se-passive', audio: 'se-inauguro-el-nuevo-hospital' },
  { spanish: 'Se firmó el acuerdo de paz', english: 'The peace agreement was signed', pronunciation: 'seh feer-MOH ehl ah-KWEHR-doh deh pahs', category: 'se-passive', audio: 'se-firmo-el-acuerdo' },
  { spanish: 'Se encontraron restos arqueológicos', english: 'Archaeological remains were found', pronunciation: 'seh ehn-kohn-TRAH-rohn REHS-tohs ahr-keh-oh-LOH-hee-kohs', category: 'se-passive', audio: 'se-encontraron-restos' },
  { spanish: 'Se canceló el vuelo por mal tiempo', english: 'The flight was cancelled due to bad weather', pronunciation: 'seh kahn-seh-LOH ehl BWEH-loh pohr mahl tee-EHM-poh', category: 'se-passive', audio: 'se-cancelo-el-vuelo' },
  { spanish: 'Se rompió la ventana durante la tormenta', english: 'The window was broken during the storm', pronunciation: 'seh rohm-pee-OH lah behn-TAH-nah doo-RAHN-teh lah tohr-MEHN-tah', category: 'se-passive', audio: 'se-rompio-la-ventana' },
  { spanish: 'Se abrieron dos escuelas nuevas', english: 'Two new schools were opened', pronunciation: 'seh ah-bree-EH-rohn dohs ehs-KWEH-lahs NWEH-bahs', category: 'se-passive', audio: 'se-abrieron-dos-escuelas' },
  { spanish: 'Se eligió al nuevo presidente', english: 'The new president was elected', pronunciation: 'seh eh-lee-hee-OH ahl NWEH-boh preh-see-DEHN-teh', category: 'se-passive', audio: 'se-eligio-al-nuevo-presidente' },
  { spanish: 'Se descubrió una nueva especie', english: 'A new species was discovered', pronunciation: 'seh dehs-koo-bree-OH OO-nah NWEH-bah ehs-PEH-see-eh', category: 'se-passive', audio: 'se-descubrio-una-nueva-especie' },

  // === Impersonal Se (12) ===
  { spanish: 'Se habla español aquí', english: 'Spanish is spoken here', pronunciation: 'seh AH-blah ehs-pah-NYOHL ah-KEE', category: 'impersonal-se', audio: 'se-habla-espanol-aqui' },
  { spanish: 'Se dice que va a llover mañana', english: 'They say it\'s going to rain tomorrow', pronunciation: 'seh DEE-seh keh bah ah yoh-BEHR mah-NYAH-nah', category: 'impersonal-se', audio: 'se-dice-que-va-a-llover' },
  { spanish: 'Se necesita experiencia previa', english: 'Prior experience is needed', pronunciation: 'seh neh-seh-SEE-tah ehks-peh-ree-EHN-see-ah PREH-bee-ah', category: 'impersonal-se', audio: 'se-necesita-experiencia' },
  { spanish: 'Se prohíbe fumar en este edificio', english: 'Smoking is prohibited in this building', pronunciation: 'seh proh-EE-beh foo-MAHR ehn EHS-teh eh-dee-FEE-see-oh', category: 'impersonal-se', audio: 'se-prohibe-fumar' },
  { spanish: 'Se puede pagar con tarjeta', english: 'You can pay by card', pronunciation: 'seh PWEH-deh pah-GAHR kohn tahr-HEH-tah', category: 'impersonal-se', audio: 'se-puede-pagar-con-tarjeta' },
  { spanish: 'Se vive bien en esta ciudad', english: 'One lives well in this city', pronunciation: 'seh BEE-beh bee-EHN ehn EHS-tah see-oo-DAHD', category: 'impersonal-se', audio: 'se-vive-bien-en-esta-ciudad' },
  { spanish: 'Se come muy bien en este restaurante', english: 'One eats very well at this restaurant', pronunciation: 'seh KOH-meh moo-ee bee-EHN ehn EHS-teh rehs-tow-RAHN-teh', category: 'impersonal-se', audio: 'se-come-muy-bien' },
  { spanish: 'Se trabaja mucho en esta empresa', english: 'People work a lot at this company', pronunciation: 'seh trah-BAH-hah MOO-choh ehn EHS-tah ehm-PREH-sah', category: 'impersonal-se', audio: 'se-trabaja-mucho' },
  { spanish: 'Se recomienda llegar temprano', english: 'It is recommended to arrive early', pronunciation: 'seh reh-koh-mee-EHN-dah yeh-GAHR tehm-PRAH-noh', category: 'impersonal-se', audio: 'se-recomienda-llegar-temprano' },
  { spanish: 'Se busca empleado con experiencia', english: 'Employee with experience wanted', pronunciation: 'seh BOOS-kah ehm-pleh-AH-doh kohn ehks-peh-ree-EHN-see-ah', category: 'impersonal-se', audio: 'se-busca-empleado' },
  { spanish: 'Se cree que el universo tiene 13 mil millones de años', english: 'It is believed the universe is 13 billion years old', pronunciation: 'seh KREH-eh keh ehl oo-nee-BEHR-soh tee-EH-neh TREH-seh meel mee-YOH-nehs deh AH-nyohs', category: 'impersonal-se', audio: 'se-cree-que-el-universo' },
  { spanish: 'No se permite la entrada a menores', english: 'Entry is not allowed for minors', pronunciation: 'noh seh pehr-MEE-teh lah ehn-TRAH-dah ah meh-NOH-rehs', category: 'impersonal-se', audio: 'no-se-permite-la-entrada' },

  // === Estar + Participle (12) ===
  { spanish: 'La puerta está cerrada', english: 'The door is closed', pronunciation: 'lah PWEHR-tah ehs-TAH seh-RRAH-dah', category: 'estar-result', audio: 'la-puerta-esta-cerrada' },
  { spanish: 'El trabajo está terminado', english: 'The work is finished', pronunciation: 'ehl trah-BAH-hoh ehs-TAH tehr-mee-NAH-doh', category: 'estar-result', audio: 'el-trabajo-esta-terminado' },
  { spanish: 'La mesa está puesta', english: 'The table is set', pronunciation: 'lah MEH-sah ehs-TAH PWEHS-tah', category: 'estar-result', audio: 'la-mesa-esta-puesta' },
  { spanish: 'Las luces están encendidas', english: 'The lights are on', pronunciation: 'lahs LOO-sehs ehs-TAHN ehn-sehn-DEE-dahs', category: 'estar-result', audio: 'las-luces-estan-encendidas' },
  { spanish: 'El carro está estacionado afuera', english: 'The car is parked outside', pronunciation: 'ehl KAH-rroh ehs-TAH ehs-tah-see-oh-NAH-doh ah-FWEH-rah', category: 'estar-result', audio: 'el-carro-esta-estacionado' },
  { spanish: 'La tienda está abierta hasta las nueve', english: 'The store is open until nine', pronunciation: 'lah tee-EHN-dah ehs-TAH ah-bee-EHR-tah AHS-tah lahs NWEH-beh', category: 'estar-result', audio: 'la-tienda-esta-abierta' },
  { spanish: 'Los niños están dormidos', english: 'The children are asleep', pronunciation: 'lohs NEE-nyohs ehs-TAHN dohr-MEE-dohs', category: 'estar-result', audio: 'los-ninos-estan-dormidos' },
  { spanish: 'El informe está escrito en español', english: 'The report is written in Spanish', pronunciation: 'ehl een-FOHR-meh ehs-TAH ehs-KREE-toh ehn ehs-pah-NYOHL', category: 'estar-result', audio: 'el-informe-esta-escrito' },
  { spanish: 'La ventana está rota', english: 'The window is broken', pronunciation: 'lah behn-TAH-nah ehs-TAH RROH-tah', category: 'estar-result', audio: 'la-ventana-esta-rota' },
  { spanish: 'El problema está resuelto', english: 'The problem is solved', pronunciation: 'ehl proh-BLEH-mah ehs-TAH reh-SWEHL-toh', category: 'estar-result', audio: 'el-problema-esta-resuelto' },
  { spanish: 'La comida está preparada', english: 'The food is prepared', pronunciation: 'lah koh-MEE-dah ehs-TAH preh-pah-RAH-dah', category: 'estar-result', audio: 'la-comida-esta-preparada' },
  { spanish: 'Los boletos están reservados', english: 'The tickets are reserved', pronunciation: 'lohs boh-LEH-tohs ehs-TAHN reh-sehr-BAH-dohs', category: 'estar-result', audio: 'los-boletos-estan-reservados' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L53PhraseByAudio = phraseByAudio

// === NEWSROOM EDITOR (unique activity) ===

export interface NewsroomEditorChallenge {
  activeVoice: string
  english: string
  correctPassive: string
  options: string[]
}

export const NEWSROOM_EDITOR_CHALLENGES: NewsroomEditorChallenge[] = [
  {
    activeVoice: 'El gobierno aprobó la nueva ley de educación.',
    english: 'The government approved the new education law.',
    correctPassive: 'Se aprobó la nueva ley de educación.',
    options: ['Se aprobó la nueva ley de educación.', 'La nueva ley de educación fue aprobada por el gobierno.', 'Se aprueba la nueva ley de educación.', 'La nueva ley de educación está aprobada.'],
  },
  {
    activeVoice: 'Los bomberos rescataron a veinte personas.',
    english: 'The firefighters rescued twenty people.',
    correctPassive: 'Veinte personas fueron rescatadas por los bomberos.',
    options: ['Se rescataron a veinte personas.', 'Veinte personas fueron rescatadas por los bomberos.', 'Veinte personas están rescatadas.', 'Se rescata a veinte personas.'],
  },
  {
    activeVoice: 'La empresa construirá un hospital nuevo.',
    english: 'The company will build a new hospital.',
    correctPassive: 'Se construirá un hospital nuevo.',
    options: ['Se construirá un hospital nuevo.', 'Un hospital nuevo será construido.', 'Un hospital nuevo está construido.', 'Se construye un hospital nuevo.'],
  },
  {
    activeVoice: 'Los científicos descubrieron una vacuna revolucionaria.',
    english: 'Scientists discovered a revolutionary vaccine.',
    correctPassive: 'Se descubrió una vacuna revolucionaria.',
    options: ['Una vacuna revolucionaria fue descubrida.', 'Se descubrió una vacuna revolucionaria.', 'Una vacuna está descubierta.', 'Se descubre una vacuna revolucionaria.'],
  },
  {
    activeVoice: 'El alcalde inauguró el parque central.',
    english: 'The mayor inaugurated the central park.',
    correctPassive: 'El parque central fue inaugurado por el alcalde.',
    options: ['Se inauguró el parque central por el alcalde.', 'El parque central está inaugurado.', 'El parque central fue inaugurado por el alcalde.', 'Se inaugura el parque central.'],
  },
  {
    activeVoice: 'Alguien rompió las ventanas del edificio.',
    english: 'Someone broke the building\'s windows.',
    correctPassive: 'Se rompieron las ventanas del edificio.',
    options: ['Las ventanas del edificio fueron rompidas.', 'Las ventanas del edificio están rotas.', 'Se rompieron las ventanas del edificio.', 'Las ventanas se rompen del edificio.'],
  },
  {
    activeVoice: 'La universidad publicará los resultados mañana.',
    english: 'The university will publish the results tomorrow.',
    correctPassive: 'Los resultados serán publicados mañana.',
    options: ['Se publicará los resultados mañana.', 'Los resultados están publicados mañana.', 'Los resultados serán publicados mañana.', 'Mañana se publica los resultados.'],
  },
]

// === LESSON DATA ===

export const L53Data: LessonData = {
  id: 'L5.3',
  hero: {
    lessonId: 'L5.3',
    title: 'Passive Voice & Impersonal Constructions',
    subtitle: 'Reporting events, stating facts, and describing results',
    description: 'Master the passive voice with ser, passive se, impersonal se, and estar + participle. These constructions are essential for formal writing, journalism, and sounding natural in professional Spanish. Learn when to use each form and why Spanish prefers se constructions over the ser passive.',
    image: '/images/L5.3/L5.3.jpg',
    gradient: 'from-gray-800/65 via-slate-700/55 to-zinc-700/65',
    accentColor: 'slate-200',
  },

  objectives: [
    { icon: '📰', title: 'Ser Passive', desc: 'Form passive sentences with ser + past participle: fue construida, fueron publicados, será demolido.' },
    { icon: '🔄', title: 'Passive Se', desc: 'Use se + verb to report events impersonally: se construyó, se vendieron, se aprobó.' },
    { icon: '🌐', title: 'Impersonal Se', desc: 'Express general truths and norms: se habla español, se prohíbe fumar, se necesita experiencia.' },
    { icon: '📋', title: 'Estar + Participle', desc: 'Describe resulting states: la puerta está cerrada, el trabajo está terminado.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.4', label: 'News Vocabulary', detail: 'L4.4 introduced media and current-events vocabulary. Now learn the passive constructions journalists actually use to report the news.' },
    { fromLesson: 'L4.3', label: 'Formal Register', detail: 'L4.3 covered formal language. Passive and impersonal constructions are the backbone of formal written Spanish.' },
    { fromLesson: 'L3.3', label: 'Tech & Passive Phrasing', detail: 'L3.3 introduced passive-like constructions in technology contexts. Now master the full grammar behind them.' },
  ],

  sectionTransitions: [
    { afterSection: 'ser-passive', text: 'You can form ser passives! Now let\'s learn Spanish\'s preferred alternative — passive se.' },
    { afterSection: 'se-passive', text: 'Passive se mastered! Let\'s explore impersonal se — for general truths and norms.' },
    { afterSection: 'impersonal-se', text: 'Impersonal se down! Now let\'s see how estar + participle describes resulting states.' },
    { afterSection: 'dialogues', text: 'Great conversations! Let\'s explore how Spanish culture shapes passive voice choices.' },
    { afterSection: 'cultural', text: 'Now put your skills to the test in the Newsroom Editor challenge!' },
    { afterSection: 'newsroom-editor', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Fue construido/a...', english: 'It was built...' },
    { spanish: 'Se necesita...', english: '... is needed' },
    { spanish: 'Se prohíbe...', english: '... is prohibited' },
    { spanish: 'Está terminado/a...', english: 'It is finished...' },
    { spanish: 'Se dice que...', english: 'They say that...' },
    { spanish: 'Fue escrito/a por...', english: 'It was written by...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La casa fue construida en mil novecientos veinte', pronunciation: 'lah KAH-sah fweh kohns-troo-EE-dah ehn meel noh-beh-see-EHN-tohs BEHN-teh', english: 'The house was built in 1920', audio: 'la-casa-fue-construida', tip: 'In ser passive, the participle agrees in gender and number with the subject: construida (feminine) because "casa" is feminine.' },
    { spanish: 'Se vendieron todas las entradas en una hora', pronunciation: 'seh behn-dee-EH-rohn TOH-dahs lahs ehn-TRAH-dahs ehn OO-nah OH-rah', english: 'All the tickets were sold in one hour', audio: 'se-vendieron-todas-las-entradas', tip: 'In passive se, the verb agrees with the grammatical subject: "se vendieron" (plural) because "entradas" is plural.' },
    { spanish: 'Se habla español en veintiún países', pronunciation: 'seh AH-blah ehs-pah-NYOHL ehn behn-tee-OON pah-EE-sehs', english: 'Spanish is spoken in twenty-one countries', audio: 'se-habla-espanol-aqui', tip: 'Impersonal se always uses third-person singular: "se habla," "se dice," "se necesita." The verb never changes.' },
    { spanish: 'La puerta está cerrada con llave', pronunciation: 'lah PWEHR-tah ehs-TAH seh-RRAH-dah kohn YAH-beh', english: 'The door is locked', audio: 'la-puerta-esta-cerrada', tip: 'Estar + participle describes a current state, not an action. "Está cerrada" = it IS closed (right now). "Fue cerrada" = it WAS closed (someone did it).' },
    { spanish: 'Se prohíbe fumar en lugares públicos', pronunciation: 'seh proh-EE-beh foo-MAHR ehn loo-GAH-rehs POO-blee-kohs', english: 'Smoking is prohibited in public places', audio: 'se-prohibe-fumar', tip: '"Se prohíbe" is impersonal — no agent is mentioned. You see this on signs everywhere in Spanish-speaking countries.' },
    { spanish: 'El problema fue resuelto por el equipo técnico', pronunciation: 'ehl proh-BLEH-mah fweh reh-SWEHL-toh pohr ehl eh-KEE-poh TEHK-nee-koh', english: 'The problem was solved by the technical team', audio: 'el-problema-esta-resuelto', tip: 'Note the irregular participle: resolver → resuelto (not "resolvido"). Other irregulars: escribir → escrito, abrir → abierto, romper → roto.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'ser-passive', label: 'Passive with Ser' },
    { id: 'se-passive', label: 'Passive Se' },
    { id: 'impersonal-se', label: 'Impersonal Se' },
    { id: 'estar-result', label: 'Estar + Participle' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'newsroom-editor', label: 'Newsroom Editor' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'ser-passive',
      title: 'Passive with Ser — La Voz Pasiva con Ser',
      description: 'Subject + ser (conjugated) + past participle (+ por + agent). The participle agrees in gender and number with the subject: fue construida, fueron publicados.',
      tabs: [
        { label: 'Past Passive', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'ser-passive').slice(0, 6) },
        { label: 'More Examples', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'ser-passive').slice(6) },
      ],
    },
    {
      id: 'se-passive',
      title: 'Passive Se — La Pasiva Refleja',
      description: 'Se + verb (agrees with subject). No agent mentioned — Spanish\'s preferred way to express passive meaning. "Se construyó un puente" is far more natural than "Un puente fue construido."',
      tabs: [
        { label: 'Singular Subject', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'se-passive').slice(0, 6) },
        { label: 'Plural Subject', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'se-passive').slice(6) },
      ],
    },
    {
      id: 'impersonal-se',
      title: 'Impersonal Se — El Se Impersonal',
      description: 'Se + 3rd-person singular verb. Used for general statements, rules, and norms where no specific subject is intended. "Se habla español" = "Spanish is spoken" / "One speaks Spanish."',
      tabs: [
        { label: 'Signs & Rules', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'impersonal-se').slice(0, 6) },
        { label: 'General Truths', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'impersonal-se').slice(6) },
      ],
    },
    {
      id: 'estar-result',
      title: 'Estar + Participle — Resulting States',
      description: 'Estar + past participle describes the STATE that results from an action. "La puerta está cerrada" = The door is (currently) closed. The participle agrees with the subject.',
      tabs: [
        { label: 'Around the House', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'estar-result').slice(0, 6) },
        { label: 'Work & Daily Life', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'estar-result').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Ser Passive: Participle Agreement',
      content: 'In the ser passive, the past participle works like an adjective — it must agree in gender and number with the subject. La casa fue construiDA (feminine singular). Los libros fueron escritOS (masculine plural). Las cartas fueron enviaDA S (feminine plural). Always check: does the participle match the subject?',
      example: 'La ley fue aprobada (fem.) | El proyecto fue aprobado (masc.) | Las leyes fueron aprobadas (fem. pl.)',
    },
    {
      title: 'Passive Se vs. Impersonal Se',
      content: 'Both use "se" but they work differently. Passive se: the verb agrees with the thing acted upon — "Se vendieron las casas" (plural verb, plural subject). Impersonal se: the verb is ALWAYS singular — "Se vive bien aquí" (no thing being acted upon). Key test: if there\'s a noun the action happens TO, it\'s passive se. If not, it\'s impersonal.',
      example: 'Se venden casas (passive se — casas is subject) | Se vive bien (impersonal — no subject thing)',
      reviewFrom: 'L4.3',
    },
    {
      title: 'Ser vs. Estar with Participles',
      content: 'Ser + participle = an ACTION (something happens). Estar + participle = a STATE (something IS a certain way). "La puerta fue cerrada a las 5" = The door was closed at 5 (someone closed it — action). "La puerta está cerrada" = The door is closed (it\'s in a closed state right now). This ser/estar distinction is crucial!',
      example: 'El informe fue escrito ayer (action) | El informe está escrito (state — it\'s done)',
      reviewFrom: 'L3.3',
    },
    {
      title: 'Irregular Past Participles',
      content: 'Several common verbs have irregular participles that you MUST memorize: abrir → abierto, cubrir → cubierto, decir → dicho, escribir → escrito, hacer → hecho, morir → muerto, poner → puesto, resolver → resuelto, romper → roto, ver → visto, volver → vuelto. These appear in ALL passive and estar constructions.',
      example: 'La carta fue escrita (not "escribida") | La ventana está rota (not "rompida") | El problema está resuelto (not "resolvido")',
    },
  ],

  flashcardGroups: [
    {
      key: 'ser-passive',
      label: 'Passive with Ser',
      audioKeys: ['la-casa-fue-construida', 'el-libro-fue-escrito', 'los-resultados-fueron-publicados', 'la-ley-fue-aprobada', 'el-cuadro-fue-pintado', 'la-carta-fue-enviada', 'las-victimas-fueron-rescatadas', 'el-edificio-sera-demolido', 'la-pelicula-fue-dirigida', 'el-premio-fue-otorgado', 'los-documentos-fueron-firmados', 'la-obra-fue-inaugurada'],
    },
    {
      key: 'se-passive',
      label: 'Passive Se',
      audioKeys: ['se-construyo-un-puente', 'se-vendieron-todas-las-entradas', 'se-aprobo-la-ley', 'se-publicaron-los-resultados', 'se-inauguro-el-nuevo-hospital', 'se-firmo-el-acuerdo', 'se-encontraron-restos', 'se-cancelo-el-vuelo', 'se-rompio-la-ventana', 'se-abrieron-dos-escuelas', 'se-eligio-al-nuevo-presidente', 'se-descubrio-una-nueva-especie'],
    },
    {
      key: 'impersonal-estar',
      label: 'Impersonal Se & Estar + Participle',
      audioKeys: ['se-habla-espanol-aqui', 'se-dice-que-va-a-llover', 'se-necesita-experiencia', 'se-prohibe-fumar', 'se-puede-pagar-con-tarjeta', 'se-vive-bien-en-esta-ciudad', 'la-puerta-esta-cerrada', 'el-trabajo-esta-terminado', 'la-mesa-esta-puesta', 'las-luces-estan-encendidas', 'la-ventana-esta-rota', 'el-problema-esta-resuelto'],
    },
  ],

  matchPairs: [
    { left: 'Fue construida', right: 'It was built (action)' },
    { left: 'Está construida', right: 'It is built (state)' },
    { left: 'Se habla', right: 'One speaks / is spoken' },
    { left: 'Se vendieron', right: 'Were sold' },
    { left: 'Se prohíbe', right: 'It is prohibited' },
    { left: 'Fue escrito por', right: 'It was written by' },
    { left: 'Se necesita', right: 'Is needed' },
    { left: 'Está cerrada', right: 'It is closed (state)' },
  ],
  matchLabels: { left: 'Estructura', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Ser Passive vs. Passive Se',
      instruction: 'Is this sentence using ser passive or passive se?',
      buckets: ['Ser Passive (fue/fueron)', 'Passive Se (se + verb)'],
      items: [
        { text: 'La casa fue construida', bucket: 'Ser Passive (fue/fueron)' },
        { text: 'El libro fue escrito por Borges', bucket: 'Ser Passive (fue/fueron)' },
        { text: 'Los documentos fueron firmados', bucket: 'Ser Passive (fue/fueron)' },
        { text: 'La ley fue aprobada', bucket: 'Ser Passive (fue/fueron)' },
        { text: 'Se construyó un puente', bucket: 'Passive Se (se + verb)' },
        { text: 'Se vendieron las entradas', bucket: 'Passive Se (se + verb)' },
        { text: 'Se aprobó la ley', bucket: 'Passive Se (se + verb)' },
        { text: 'Se canceló el vuelo', bucket: 'Passive Se (se + verb)' },
      ],
    },
    {
      title: 'Action vs. Resulting State',
      instruction: 'Does this describe an action (something happening) or a resulting state (how something is now)?',
      buckets: ['Action (ser/se)', 'Resulting State (estar)'],
      items: [
        { text: 'La puerta fue cerrada a las cinco', bucket: 'Action (ser/se)' },
        { text: 'Se rompió la ventana', bucket: 'Action (ser/se)' },
        { text: 'El informe fue escrito ayer', bucket: 'Action (ser/se)' },
        { text: 'Se inauguró el hospital', bucket: 'Action (ser/se)' },
        { text: 'La puerta está cerrada', bucket: 'Resulting State (estar)' },
        { text: 'La ventana está rota', bucket: 'Resulting State (estar)' },
        { text: 'El informe está escrito', bucket: 'Resulting State (estar)' },
        { text: 'El trabajo está terminado', bucket: 'Resulting State (estar)' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-newsroom',
      title: 'A Newsroom Discussion About Writing Headlines — Ciudad de México',
      location: 'Ciudad de México',
      lines: [
        { speaker: 'Editora Lucía', text: 'Pablo, tu titular dice "El gobierno aprobó la reforma." Necesitamos cambiarlo a voz pasiva para el periódico.', audio: '/audio/L5.3/phrases/d1-line1.mp3' },
        { speaker: 'Reportero Pablo', text: '¿Quieres que use "fue aprobada" o "se aprobó"? Siempre tengo esa duda.', audio: '/audio/L5.3/phrases/d1-line2.mp3' },
        { speaker: 'Editora Lucía', text: 'En titulares, se prefiere la pasiva refleja: "Se aprobó la reforma educativa." Es más conciso.', audio: '/audio/L5.3/phrases/d1-line3.mp3', annotations: [{ phrase: 'Se aprobó', fromLesson: 'L4.4', note: 'News reporting vocabulary from L4.4 — now in passive se form' }] },
        { speaker: 'Reportero Pablo', text: 'Entendido. ¿Y para el artículo completo? Ahí sí puedo usar "fue aprobada por el congreso," ¿verdad?', audio: '/audio/L5.3/phrases/d1-line4.mp3' },
        { speaker: 'Editora Lucía', text: 'Exacto. En el cuerpo del artículo se usa la pasiva con ser cuando se quiere mencionar quién hizo la acción.', audio: '/audio/L5.3/phrases/d1-line5.mp3' },
        { speaker: 'Reportero Pablo', text: 'También tengo esta oración: "Los resultados están publicados en la página web." ¿Está bien?', audio: '/audio/L5.3/phrases/d1-line6.mp3' },
        { speaker: 'Editora Lucía', text: 'Sí, pero ojo: "están publicados" describe un estado actual. Si quieres la acción, sería "fueron publicados" o "se publicaron."', audio: '/audio/L5.3/phrases/d1-line7.mp3', annotations: [{ phrase: 'están publicados', fromLesson: 'L3.3', note: 'Estar + participle for states, building on tech language from L3.3' }] },
        { speaker: 'Reportero Pablo', text: '¡Ahora me queda claro! Se usa "estar" para el resultado y "ser" o "se" para la acción.', audio: '/audio/L5.3/phrases/d1-line8.mp3' },
        { speaker: 'Editora Lucía', text: 'Perfecto. Y recuerda: en español periodístico se evita la pasiva con ser siempre que sea posible. La pasiva refleja suena mucho más natural.', audio: '/audio/L5.3/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-tour',
      title: 'A Tour Guide Explaining Historical Buildings — Cartagena, Colombia',
      location: 'Cartagena, Colombia',
      lines: [
        { speaker: 'Guía Carlos', text: 'Bienvenidos a la Ciudad Amurallada. Estas murallas fueron construidas en el siglo diecisiete para proteger la ciudad de los piratas.', audio: '/audio/L5.3/phrases/d2-line1.mp3' },
        { speaker: 'Turista Sarah', text: '¡Increíble! ¿Y se sabe quién las diseñó?', audio: '/audio/L5.3/phrases/d2-line2.mp3' },
        { speaker: 'Guía Carlos', text: 'Sí, fueron diseñadas por el ingeniero militar Bautista Antonelli. Se dice que tardaron casi doscientos años en completarse.', audio: '/audio/L5.3/phrases/d2-line3.mp3', annotations: [{ phrase: 'Se dice que', fromLesson: 'L4.3', note: 'Formal reporting expression introduced in L4.3 — impersonal se for hearsay' }] },
        { speaker: 'Turista Sarah', text: 'Se nota que están muy bien conservadas. ¿Se han restaurado recientemente?', audio: '/audio/L5.3/phrases/d2-line4.mp3' },
        { speaker: 'Guía Carlos', text: 'Sí, la última restauración fue realizada en dos mil quince. Ahora las murallas están protegidas como Patrimonio de la Humanidad.', audio: '/audio/L5.3/phrases/d2-line5.mp3' },
        { speaker: 'Turista Sarah', text: '¿Se permite caminar por encima de las murallas?', audio: '/audio/L5.3/phrases/d2-line6.mp3', annotations: [{ phrase: 'Se permite', fromLesson: 'L4.3', note: 'Impersonal se for rules and permissions, formal register from L4.3' }] },
        { speaker: 'Guía Carlos', text: '¡Por supuesto! Se puede pasear por la parte superior. Desde allí se ve toda la bahía. Es espectacular al atardecer.', audio: '/audio/L5.3/phrases/d2-line7.mp3' },
        { speaker: 'Turista Sarah', text: 'Me encanta. Se nota que esta ciudad fue construida con mucho cuidado y arte.', audio: '/audio/L5.3/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Discuss headline writing in a Mexico City newsroom and explore historical architecture on a guided tour in Cartagena, Colombia.',

  culturalNotes: [
    {
      title: 'La Voz Pasiva en el Periodismo Hispano',
      content: 'Unlike English journalism, which heavily relies on the "be + past participle" passive (e.g., "The law was passed"), Spanish journalism strongly prefers the passive se construction. A headline like "Se aprobó la reforma" feels natural and concise, while "La reforma fue aprobada" sounds heavy and overly formal. The Real Academia Española (RAE) itself notes that the ser passive is less common in spoken Spanish and is mostly reserved for written, formal contexts where the agent (the "doer") needs emphasis. Next time you read a Spanish newspaper, count how many "se" passives you see versus ser passives — you will find se wins overwhelmingly!',
    },
    {
      title: 'Se Habla Español: Un Letrero con Historia',
      content: '"Se habla español" is perhaps the most iconic impersonal se phrase in the world. Found on storefronts across the United States — from Miami to Los Angeles, Chicago to New York — this simple sign carries deep cultural significance. It signals inclusion, community, and belonging for the over 40 million Spanish speakers in the U.S. Grammatically, it is a perfect example of impersonal se: no specific person is the subject, just a general statement that "Spanish is spoken here." Variants like "Se habla inglés" appear in Latin American tourist areas, and "Se parle français" follows the same pattern in French. The phrase has become a symbol of bilingual identity and cultural pride.',
    },
    {
      title: 'El Español Formal vs. Informal: Cuándo Usar Pasiva',
      content: 'Understanding register is key to choosing the right passive construction. In everyday conversation, Spanish speakers rarely use the ser passive — they prefer active voice or passive se. "Mi mamá hizo la comida" (active) or "Se hizo la comida" (passive se) sound natural. But "La comida fue hecha por mi mamá" sounds stiff and unnatural in casual speech. In formal writing — academic papers, legal documents, news articles — the ser passive becomes more acceptable, especially when identifying the agent matters: "La Constitución fue redactada por los padres de la patria." Estar + participle, meanwhile, crosses all registers: "La tienda está cerrada" works in any context. Mastering these register differences will make you sound truly fluent rather than textbook-correct.',
    },
  ],
  culturalGradient: 'from-gray-50 to-slate-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La casa fue construida en 1920" is an example of:', options: ['Impersonal se', 'Passive se', 'Ser passive', 'Estar + participle'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete with passive se: "___ vendieron todas las entradas." (All the tickets were sold.)', answer: 'Se' },
    { id: 3, type: 'mc', text: '"Se habla español aquí" is an example of:', options: ['Ser passive', 'Passive se', 'Impersonal se', 'Estar + participle'], answer: 2 },
    { id: 4, type: 'tf', text: 'In passive se constructions, the verb must agree in number with the subject: "Se vendieron las casas" (plural).', answer: true },
    { id: 5, type: 'mc', text: '"La puerta está cerrada" describes:', options: ['An action happening now', 'A resulting state', 'A habitual action', 'A future event'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "El libro ___ escrito por García Márquez." (was written — ser passive)', answer: 'fue' },
    { id: 7, type: 'mc', text: 'Which construction does Spanish journalism prefer?', options: ['Ser passive', 'Passive se', 'Active voice only', 'Estar + participle'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Editora Lucía recommend for headlines?', options: ['Active voice', 'Ser passive with agent', 'Passive se (pasiva refleja)', 'Estar + participle'], answer: 2 },
    { id: 9, type: 'tf', text: 'Impersonal se always uses the third-person singular verb form, regardless of context.', answer: true },
    { id: 10, type: 'mc', text: '"La ventana está rota" vs. "La ventana fue rota" — what is the difference?', options: ['No difference', 'First = state now, Second = action', 'First = action, Second = state', 'First = future, Second = past'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "No ___ permite la entrada a menores." (Entry is not allowed for minors.)', answer: 'se' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, who designed the walls of Cartagena?', options: ['King Philip II', 'Bautista Antonelli', 'Simón Bolívar', 'An unknown architect'], answer: 1 },
    { id: 13, type: 'mc', text: 'The irregular past participle of "escribir" is:', options: ['escribido', 'escrito', 'escribto', 'escribiado'], answer: 1 },
    { id: 14, type: 'tf', text: '"Se habla español" has become a cultural symbol of bilingual identity in the United States.', answer: true },
    { id: 15, type: 'mc', text: '"Se necesita experiencia" — "se necesita" is in the:', options: ['Ser passive', 'Passive se', 'Impersonal se', 'Estar + participle'], answer: 2 },
  ],

  audioBase: '/audio/L5.3/phrases',

  uniqueActivity: {
    id: 'NewsroomEditorL53',
    sectionId: 'newsroom-editor',
    sectionColor: 'bg-slate-50/40',
    sectionBorder: 'border-slate-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-slate-50/30', border: 'border-slate-100' },
    'ser-passive': { bg: 'bg-gray-50/30', border: 'border-gray-100' },
    'se-passive': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'impersonal-se': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'estar-result': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'newsroom-editor': { bg: 'bg-slate-50/40', border: 'border-slate-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
