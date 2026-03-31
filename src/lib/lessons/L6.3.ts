import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Legal Terminology (12) ===
  { spanish: 'El demandante presentó las pruebas ante el tribunal', english: 'The plaintiff presented the evidence before the court', pronunciation: 'ehl deh-mahn-DAHN-teh preh-sehn-TOH lahs PRWEH-bahs AHN-teh ehl tree-boo-NAHL', category: 'legal-terminology', audio: 'el-demandante-presento-las-pruebas' },
  { spanish: 'El demandado negó todas las acusaciones', english: 'The defendant denied all the charges', pronunciation: 'ehl deh-mahn-DAH-doh neh-GOH TOH-dahs lahs ah-koo-sah-see-OH-nehs', category: 'legal-terminology', audio: 'el-demandado-nego-las-acusaciones' },
  { spanish: 'La sentencia fue dictada por unanimidad', english: 'The sentence was issued unanimously', pronunciation: 'lah sehn-TEHN-see-ah fweh deek-TAH-dah pohr oo-nah-nee-mee-DAHD', category: 'legal-terminology', audio: 'la-sentencia-fue-dictada' },
  { spanish: 'El fallo del juez es inapelable', english: 'The judge\'s ruling is unappealable', pronunciation: 'ehl FAH-yoh dehl hwes ehs ee-nah-peh-LAH-bleh', category: 'legal-terminology', audio: 'el-fallo-del-juez' },
  { spanish: 'Vamos a interponer una demanda civil', english: 'We are going to file a civil lawsuit', pronunciation: 'BAH-mohs ah een-tehr-poh-NEHR OO-nah deh-MAHN-dah see-BEEL', category: 'legal-terminology', audio: 'interponer-una-demanda-civil' },
  { spanish: 'Se presentó un recurso de apelación', english: 'An appeal was filed', pronunciation: 'seh preh-sehn-TOH oon reh-KOOR-soh deh ah-peh-lah-see-OHN', category: 'legal-terminology', audio: 'recurso-de-apelacion' },
  { spanish: 'La jurisprudencia establece un precedente claro', english: 'The case law establishes a clear precedent', pronunciation: 'lah hoo-rees-proo-DEHN-see-ah ehs-tah-BLEH-seh oon preh-seh-DEHN-teh KLAH-roh', category: 'legal-terminology', audio: 'la-jurisprudencia-establece' },
  { spanish: 'El código civil regula las relaciones entre particulares', english: 'The civil code regulates relations between private parties', pronunciation: 'ehl KOH-dee-goh see-BEEL reh-GOO-lah lahs reh-lah-see-OH-nehs EHN-treh pahr-tee-koo-LAH-rehs', category: 'legal-terminology', audio: 'el-codigo-civil-regula' },
  { spanish: 'La prescripción del delito opera a los cinco años', english: 'The statute of limitations on the crime takes effect after five years', pronunciation: 'lah prehs-kreep-see-OHN dehl deh-LEE-toh OH-peh-rah ah lohs SEEN-koh AH-nyohs', category: 'legal-terminology', audio: 'la-prescripcion-del-delito' },
  { spanish: 'El abogado solicitó el desistimiento de la causa', english: 'The lawyer requested the withdrawal of the case', pronunciation: 'ehl ah-boh-GAH-doh soh-lee-see-TOH ehl deh-sees-tee-mee-EHN-toh deh lah KOW-sah', category: 'legal-terminology', audio: 'el-desistimiento-de-la-causa' },
  { spanish: 'El perito presentó su informe ante el juzgado', english: 'The expert witness presented their report to the court', pronunciation: 'ehl peh-REE-toh preh-sehn-TOH soo een-FOHR-meh AHN-teh ehl hoos-GAH-doh', category: 'legal-terminology', audio: 'el-perito-presento-informe' },
  { spanish: 'Se declaró la nulidad del procedimiento', english: 'The nullity of the proceedings was declared', pronunciation: 'seh deh-klah-ROH lah noo-lee-DAHD dehl proh-seh-dee-mee-EHN-toh', category: 'legal-terminology', audio: 'nulidad-del-procedimiento' },

  // === Contracts & Documents (12) ===
  { spanish: 'Las partes contratantes acuerdan lo siguiente', english: 'The contracting parties agree to the following', pronunciation: 'lahs PAHR-tehs kohn-trah-TAHN-tehs ah-KWEHR-dahn loh see-gee-EHN-teh', category: 'contracts-documents', audio: 'las-partes-contratantes-acuerdan' },
  { spanish: 'En virtud de lo establecido en la ley', english: 'By virtue of what is established by law', pronunciation: 'ehn beer-TOOD deh loh ehs-tah-bleh-SEE-doh ehn lah LEH-ee', category: 'contracts-documents', audio: 'en-virtud-de-lo-establecido' },
  { spanish: 'Por medio de la presente se hace constar', english: 'By means of this document it is hereby stated', pronunciation: 'pohr MEH-dee-oh deh lah preh-SEHN-teh seh AH-seh kohns-TAHR', category: 'contracts-documents', audio: 'por-medio-de-la-presente' },
  { spanish: 'Quedan estipuladas las siguientes cláusulas', english: 'The following clauses are hereby stipulated', pronunciation: 'KEH-dahn ehs-tee-poo-LAH-dahs lahs see-gee-EHN-tehs KLOW-soo-lahs', category: 'contracts-documents', audio: 'quedan-estipuladas-las-clausulas' },
  { spanish: 'Esta disposición tiene carácter retroactivo', english: 'This provision has retroactive effect', pronunciation: 'EHS-tah dees-poh-see-see-OHN tee-EH-neh kah-RAHK-tehr reh-troh-ahk-TEE-boh', category: 'contracts-documents', audio: 'caracter-retroactivo' },
  { spanish: 'El contrato se rescinde de común acuerdo', english: 'The contract is terminated by mutual agreement', pronunciation: 'ehl kohn-TRAH-toh seh rehs-SEEN-deh deh koh-MOON ah-KWEHR-doh', category: 'contracts-documents', audio: 'de-comun-acuerdo' },
  { spanish: 'El otorgante firma en presencia de dos testigos', english: 'The grantor signs in the presence of two witnesses', pronunciation: 'ehl oh-tohr-GAHN-teh FEER-mah ehn preh-SEHN-see-ah deh dohs tehs-TEE-gohs', category: 'contracts-documents', audio: 'el-otorgante-firma' },
  { spanish: 'Se adjunta copia certificada del documento', english: 'A certified copy of the document is attached', pronunciation: 'seh ahd-HOON-tah KOH-pee-ah sehr-tee-fee-KAH-dah dehl doh-koo-MEHN-toh', category: 'contracts-documents', audio: 'copia-certificada-del-documento' },
  { spanish: 'El contrato entrará en vigor a partir de la fecha', english: 'The contract will take effect from this date', pronunciation: 'ehl kohn-TRAH-toh ehn-trah-RAH ehn bee-GOHR ah pahr-TEER deh lah FEH-chah', category: 'contracts-documents', audio: 'contrato-entrara-en-vigor' },
  { spanish: 'Ambas partes se obligan al cumplimiento íntegro', english: 'Both parties are bound to full compliance', pronunciation: 'AHM-bahs PAHR-tehs seh oh-BLEE-gahn ahl koom-plee-mee-EHN-toh EEN-teh-groh', category: 'contracts-documents', audio: 'ambas-partes-se-obligan' },
  { spanish: 'La cláusula de confidencialidad protege la información', english: 'The confidentiality clause protects the information', pronunciation: 'lah KLOW-soo-lah deh kohn-fee-dehn-see-ah-lee-DAHD proh-TEH-heh lah een-fohr-mah-see-OHN', category: 'contracts-documents', audio: 'clausula-de-confidencialidad' },
  { spanish: 'El arrendatario se compromete a mantener el inmueble', english: 'The tenant commits to maintaining the property', pronunciation: 'ehl ah-rrehn-dah-TAH-ree-oh seh kohm-proh-MEH-teh ah mahn-teh-NEHR ehl een-MWEH-bleh', category: 'contracts-documents', audio: 'el-arrendatario-se-compromete' },

  // === Bureaucratic Procedures (12) ===
  { spanish: 'Necesito tramitar un permiso de residencia', english: 'I need to process a residence permit', pronunciation: 'neh-seh-SEE-toh trah-mee-TAHR oon pehr-MEE-soh deh reh-see-DEHN-see-ah', category: 'bureaucratic-procedures', audio: 'tramitar-un-permiso-de-residencia' },
  { spanish: 'Voy a solicitar una prórroga del plazo', english: 'I am going to request an extension of the deadline', pronunciation: 'boy ah soh-lee-see-TAHR OO-nah PROH-rroh-gah dehl PLAH-soh', category: 'bureaucratic-procedures', audio: 'solicitar-una-prorroga' },
  { spanish: 'Debe presentar una declaración jurada', english: 'You must submit a sworn statement', pronunciation: 'DEH-beh preh-sehn-TAHR OO-nah deh-klah-rah-see-OHN hoo-RAH-dah', category: 'bureaucratic-procedures', audio: 'presentar-declaracion-jurada' },
  { spanish: 'El documento requiere el sello oficial', english: 'The document requires the official seal', pronunciation: 'ehl doh-koo-MEHN-toh reh-kee-EH-reh ehl SEH-yoh oh-fee-see-AHL', category: 'bureaucratic-procedures', audio: 'el-sello-oficial' },
  { spanish: 'El acta notarial debe estar debidamente firmada', english: 'The notarial deed must be duly signed', pronunciation: 'ehl AHK-tah noh-tah-ree-AHL DEH-beh ehs-TAHR deh-bee-dah-MEHN-teh feer-MAH-dah', category: 'bureaucratic-procedures', audio: 'acta-notarial-firmada' },
  { spanish: 'Se requiere la firma autenticada por un notario', english: 'An authenticated signature by a notary is required', pronunciation: 'seh reh-kee-EH-reh lah FEER-mah ow-tehn-tee-KAH-dah pohr oon noh-TAH-ree-oh', category: 'bureaucratic-procedures', audio: 'firma-autenticada-notario' },
  { spanish: 'El plazo de vigencia del pasaporte es de diez años', english: 'The passport\'s validity period is ten years', pronunciation: 'ehl PLAH-soh deh bee-HEHN-see-ah dehl pah-sah-POHR-teh ehs deh dee-EHS AH-nyohs', category: 'bureaucratic-procedures', audio: 'plazo-de-vigencia-pasaporte' },
  { spanish: 'Hay que renovar el registro antes del vencimiento', english: 'The registration must be renewed before expiration', pronunciation: 'AH-ee keh reh-noh-BAHR ehl reh-HEES-troh AHN-tehs dehl behn-see-mee-EHN-toh', category: 'bureaucratic-procedures', audio: 'renovar-registro-vencimiento' },
  { spanish: 'Debe acudir a la ventanilla número tres', english: 'You must go to window number three', pronunciation: 'DEH-beh ah-koo-DEER ah lah behn-tah-NEE-yah NOO-meh-roh trehs', category: 'bureaucratic-procedures', audio: 'acudir-ventanilla-tres' },
  { spanish: 'Necesita sacar un turno para ser atendido', english: 'You need to take a number to be served', pronunciation: 'neh-seh-SEE-tah sah-KAHR oon TOOR-noh PAH-rah sehr ah-tehn-DEE-doh', category: 'bureaucratic-procedures', audio: 'sacar-turno-para-ser-atendido' },
  { spanish: 'El trámite tarda entre tres y cinco días hábiles', english: 'The procedure takes between three and five business days', pronunciation: 'ehl TRAH-mee-teh TAHR-dah EHN-treh trehs ee SEEN-koh DEE-ahs AH-bee-lehs', category: 'bureaucratic-procedures', audio: 'tramite-tarda-dias-habiles' },
  { spanish: 'Debe adjuntar dos fotografías tamaño pasaporte', english: 'You must attach two passport-sized photographs', pronunciation: 'DEH-beh ahd-hoon-TAHR dohs foh-toh-grah-FEE-ahs tah-MAH-nyoh pah-sah-POHR-teh', category: 'bureaucratic-procedures', audio: 'adjuntar-fotografias-pasaporte' },

  // === Rights & Obligations (12) ===
  { spanish: 'Usted tiene derecho a un abogado defensor', english: 'You have the right to a defense attorney', pronunciation: 'oos-TEHD tee-EH-neh deh-REH-choh ah oon ah-boh-GAH-doh deh-fehn-SOHR', category: 'rights-obligations', audio: 'tiene-derecho-a-un-abogado' },
  { spanish: 'El empleador queda obligado a pagar las prestaciones', english: 'The employer is obligated to pay the benefits', pronunciation: 'ehl ehm-pleh-ah-DOHR KEH-dah oh-blee-GAH-doh ah pah-GAHR lahs prehs-tah-see-OH-nehs', category: 'rights-obligations', audio: 'queda-obligado-a-pagar' },
  { spanish: 'En cumplimiento de la normativa vigente', english: 'In compliance with current regulations', pronunciation: 'ehn koom-plee-mee-EHN-toh deh lah nohr-mah-TEE-bah bee-HEHN-teh', category: 'rights-obligations', audio: 'en-cumplimiento-de-la-normativa' },
  { spanish: 'Conforme a la ley, se garantizan los derechos laborales', english: 'In accordance with the law, labor rights are guaranteed', pronunciation: 'kohn-FOHR-meh ah lah LEH-ee seh gah-rahn-TEE-sahn lohs deh-REH-chohs lah-boh-RAH-lehs', category: 'rights-obligations', audio: 'conforme-a-la-ley' },
  { spanish: 'Sin perjuicio de las acciones legales correspondientes', english: 'Without prejudice to the corresponding legal actions', pronunciation: 'seen pehr-HWEE-see-oh deh lahs ahk-see-OH-nehs leh-GAH-lehs koh-rrehs-pohn-dee-EHN-tehs', category: 'rights-obligations', audio: 'sin-perjuicio-de-las-acciones' },
  { spanish: 'En caso de incumplimiento se aplicarán sanciones', english: 'In case of non-compliance, sanctions will be applied', pronunciation: 'ehn KAH-soh deh een-koom-plee-mee-EHN-toh seh ah-plee-kah-RAHN sahn-see-OH-nehs', category: 'rights-obligations', audio: 'en-caso-de-incumplimiento' },
  { spanish: 'A efectos legales, este documento tiene plena validez', english: 'For legal purposes, this document has full validity', pronunciation: 'ah eh-FEHK-tohs leh-GAH-lehs EHS-teh doh-koo-MEHN-toh tee-EH-neh PLEH-nah bah-lee-DEHS', category: 'rights-obligations', audio: 'a-efectos-legales' },
  { spanish: 'El ciudadano tiene derecho a la tutela judicial efectiva', english: 'The citizen has the right to effective judicial protection', pronunciation: 'ehl see-oo-dah-DAH-noh tee-EH-neh deh-REH-choh ah lah too-TEH-lah hoo-dee-see-AHL eh-fehk-TEE-bah', category: 'rights-obligations', audio: 'derecho-tutela-judicial' },
  { spanish: 'Queda prohibida toda forma de discriminación', english: 'All forms of discrimination are prohibited', pronunciation: 'KEH-dah proh-ee-BEE-dah TOH-dah FOHR-mah deh dees-kree-mee-nah-see-OHN', category: 'rights-obligations', audio: 'prohibida-discriminacion' },
  { spanish: 'El inquilino está sujeto a las condiciones del contrato', english: 'The tenant is subject to the conditions of the contract', pronunciation: 'ehl een-kee-LEE-noh ehs-TAH soo-HEH-toh ah lahs kohn-dee-see-OH-nehs dehl kohn-TRAH-toh', category: 'rights-obligations', audio: 'inquilino-sujeto-condiciones' },
  { spanish: 'La empresa responderá por los daños y perjuicios', english: 'The company will be liable for damages', pronunciation: 'lah ehm-PREH-sah rehs-pohn-deh-RAH pohr lohs DAH-nyohs ee pehr-HWEE-see-ohs', category: 'rights-obligations', audio: 'responder-danos-y-perjuicios' },
  { spanish: 'Todo trabajador tiene derecho a vacaciones remuneradas', english: 'Every worker has the right to paid vacation', pronunciation: 'TOH-doh trah-bah-hah-DOHR tee-EH-neh deh-REH-choh ah bah-kah-see-OH-nehs reh-moo-neh-RAH-dahs', category: 'rights-obligations', audio: 'derecho-vacaciones-remuneradas' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L63PhraseByAudio = phraseByAudio

// === LEGAL NAVIGATOR (unique activity) ===

export interface LegalNavigatorChallenge {
  document: string
  english: string
  question: string
  correctAnswer: string
  options: string[]
}

export const LEGAL_NAVIGATOR_CHALLENGES: LegalNavigatorChallenge[] = [
  {
    document: 'CLÁUSULA TERCERA. — El arrendatario se obliga a pagar la renta mensual de $15,000 MXN, a más tardar el día cinco de cada mes. En caso de mora, se aplicará un recargo del 3% mensual sobre el saldo insoluto.',
    english: 'CLAUSE THREE. — The tenant is obligated to pay a monthly rent of $15,000 MXN, no later than the fifth of each month. In case of late payment, a 3% monthly surcharge will be applied on the outstanding balance.',
    question: 'What happens if the tenant pays late?',
    correctAnswer: 'A 3% monthly surcharge is applied on the outstanding balance',
    options: ['The contract is immediately terminated', 'A 3% monthly surcharge is applied on the outstanding balance', 'The tenant must pay double rent the following month', 'The landlord can change the locks'],
  },
  {
    document: 'Por medio de la presente, el otorgante JUAN PÉREZ GARCÍA, con domicilio en Av. Reforma 245, Ciudad de México, confiere poder amplio y suficiente a MARÍA LÓPEZ DÍAZ para que en su nombre y representación realice todos los trámites necesarios ante la Secretaría de Relaciones Exteriores.',
    english: 'By means of this document, the grantor JUAN PÉREZ GARCÍA, residing at Av. Reforma 245, Mexico City, grants ample and sufficient power of attorney to MARÍA LÓPEZ DÍAZ to carry out all necessary procedures before the Ministry of Foreign Affairs on his behalf.',
    question: 'What is María López Díaz authorized to do?',
    correctAnswer: 'Carry out procedures at the Ministry of Foreign Affairs on behalf of Juan Pérez',
    options: ['Sign contracts for property sales', 'Carry out procedures at the Ministry of Foreign Affairs on behalf of Juan Pérez', 'Represent Juan Pérez in criminal proceedings', 'Manage all of Juan Pérez\'s financial accounts'],
  },
  {
    document: 'ARTÍCULO 14. — Ninguna ley se dará efecto retroactivo en perjuicio de persona alguna. Nadie podrá ser privado de la libertad o de sus propiedades, posesiones o derechos, sino mediante juicio seguido ante los tribunales previamente establecidos.',
    english: 'ARTICLE 14. — No law shall be given retroactive effect to the detriment of any person. No one may be deprived of liberty or of their properties, possessions, or rights, except through proceedings before previously established courts.',
    question: 'According to this article, when can someone lose their property?',
    correctAnswer: 'Only through proceedings before previously established courts',
    options: ['When the government issues a new decree', 'When a law is applied retroactively', 'Only through proceedings before previously established courts', 'When they fail to pay taxes for three consecutive years'],
  },
  {
    document: 'Las partes contratantes acuerdan que cualquier controversia derivada del presente contrato será resuelta mediante arbitraje, conforme a las reglas de la Cámara Nacional de Comercio. El laudo arbitral será definitivo y vinculante para ambas partes, sin posibilidad de recurso ordinario.',
    english: 'The contracting parties agree that any dispute arising from this contract shall be resolved through arbitration, in accordance with the rules of the National Chamber of Commerce. The arbitration award shall be final and binding for both parties, without the possibility of ordinary appeal.',
    question: 'How will disputes be resolved?',
    correctAnswer: 'Through binding arbitration with no ordinary appeal',
    options: ['Through civil court proceedings', 'Through binding arbitration with no ordinary appeal', 'Through mediation at the local municipality', 'Through negotiation between the parties\' lawyers'],
  },
  {
    document: 'DECLARACIÓN JURADA. — Yo, ANA MARTÍNEZ RUIZ, declaro bajo protesta de decir verdad que los datos proporcionados en la presente solicitud son verídicos y que cualquier falsedad en los mismos constituirá un delito conforme al Código Penal Federal, artículo 247.',
    english: 'SWORN STATEMENT. — I, ANA MARTÍNEZ RUIZ, declare under oath that the information provided in this application is truthful and that any falsehood therein shall constitute a crime under the Federal Penal Code, article 247.',
    question: 'What is the consequence of providing false information?',
    correctAnswer: 'It constitutes a crime under the Federal Penal Code',
    options: ['The application is simply rejected', 'A fine of up to $50,000 is imposed', 'It constitutes a crime under the Federal Penal Code', 'The applicant is permanently banned from reapplying'],
  },
  {
    document: 'CLÁUSULA DE CONFIDENCIALIDAD. — El trabajador se compromete a no divulgar, durante la vigencia del contrato ni durante los dos años posteriores a su terminación, información alguna relacionada con los procesos productivos, listas de clientes, estrategias comerciales o cualquier dato de naturaleza reservada de la empresa.',
    english: 'CONFIDENTIALITY CLAUSE. — The employee commits to not disclosing, during the term of the contract nor during the two years following its termination, any information related to production processes, client lists, commercial strategies, or any confidential company data.',
    question: 'How long does the confidentiality obligation last after the contract ends?',
    correctAnswer: 'Two years after termination',
    options: ['Only during the contract period', 'One year after termination', 'Two years after termination', 'Indefinitely'],
  },
  {
    document: 'RESOLUCIÓN ADMINISTRATIVA No. 2024-0847. — Vista la solicitud presentada por el C. ROBERTO FUENTES LEÓN con fecha 15 de marzo de 2024, y considerando que el solicitante no cumple con los requisitos establecidos en el artículo 32, fracción IV, del Reglamento Municipal, se RESUELVE: NEGAR la licencia de funcionamiento para el establecimiento ubicado en Calle Hidalgo 78.',
    english: 'ADMINISTRATIVE RESOLUTION No. 2024-0847. — Having reviewed the application submitted by Mr. ROBERTO FUENTES LEÓN dated March 15, 2024, and considering that the applicant does not meet the requirements established in article 32, section IV, of the Municipal Regulations, it is RESOLVED: TO DENY the operating license for the establishment located at Calle Hidalgo 78.',
    question: 'Why was the operating license denied?',
    correctAnswer: 'The applicant did not meet the requirements of article 32, section IV',
    options: ['The application was submitted past the deadline', 'The establishment is in a restricted zone', 'The applicant did not meet the requirements of article 32, section IV', 'The business type is not permitted in the municipality'],
  },
]

// === LESSON DATA ===

export const L63Data: LessonData = {
  id: 'L6.3',
  hero: {
    lessonId: 'L6.3',
    title: 'Legal & Bureaucratic Spanish',
    subtitle: 'Navigating official language with confidence',
    description: 'Master the specialized vocabulary of contracts, legal proceedings, bureaucratic procedures, and official documents. From understanding a rental agreement to filing paperwork at a government office, this lesson equips you with the formal register essential for real-world legal and administrative situations across the Spanish-speaking world.',
    image: '/images/L6.3/L6.3.jpg',
    gradient: 'from-stone-800/65 via-amber-700/55 to-yellow-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '\u2696\uFE0F', title: 'Legal Terminology', desc: 'Understand demandante, demandado, sentencia, fallo, recurso de apelacion, jurisprudencia, prescripcion.' },
    { icon: '\uD83D\uDCDC', title: 'Contracts & Documents', desc: 'Parse clauses with en virtud de, por medio de la presente, las partes contratantes, clausulas.' },
    { icon: '\uD83C\uDFDB\uFE0F', title: 'Bureaucratic Procedures', desc: 'Navigate tramitar, solicitar prorroga, declaracion jurada, sello oficial, plazo de vigencia.' },
    { icon: '\uD83D\uDEE1\uFE0F', title: 'Rights & Obligations', desc: 'Express tiene derecho a, queda obligado a, sin perjuicio de, conforme a la ley, a efectos legales.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.3', label: 'Passive Voice & Formal Register', detail: 'L5.3 introduced passive constructions (fue dictada, se establece). Legal Spanish relies heavily on these structures for impersonal authority.' },
    { fromLesson: 'L5.5', label: 'Professional Spanish', detail: 'L5.5 covered workplace vocabulary and formal communication. Legal contexts demand an even higher register with specialized formulas.' },
    { fromLesson: 'L5.4', label: 'Academic Hedging & Precision', detail: 'L5.4 taught precise, cautious language. Legal texts share this need for unambiguous, carefully qualified statements.' },
  ],

  sectionTransitions: [
    { afterSection: 'legal-terminology', text: 'You know the courtroom vocabulary! Now let\'s decode the language of contracts and official documents.' },
    { afterSection: 'contracts-documents', text: 'Contracts decoded! Time to navigate the bureaucratic maze of government offices.' },
    { afterSection: 'bureaucratic-procedures', text: 'You can handle any government office! Let\'s explore your rights and obligations under the law.' },
    { afterSection: 'dialogues', text: 'Great legal conversations! Let\'s explore the cultural context of law across Latin America.' },
    { afterSection: 'cultural', text: 'Now put your legal skills to the test in the Legal Navigator challenge!' },
    { afterSection: 'legal-navigator', text: 'Final stretch — quiz time to prove your legal mastery!' },
  ],

  personalizedVocab: [
    { spanish: 'Tengo derecho a...', english: 'I have the right to...' },
    { spanish: 'Conforme a la ley...', english: 'In accordance with the law...' },
    { spanish: 'Necesito tramitar...', english: 'I need to process...' },
    { spanish: 'Las partes acuerdan...', english: 'The parties agree...' },
    { spanish: 'Sin perjuicio de...', english: 'Without prejudice to...' },
    { spanish: 'En cumplimiento de...', english: 'In compliance with...' },
  ],

  pronunciationChallenges: [
    { spanish: 'El recurso de apelación fue admitido', pronunciation: 'ehl reh-KOOR-soh deh ah-peh-lah-see-OHN fweh ahd-mee-TEE-doh', english: 'The appeal was admitted', audio: 'recurso-de-apelacion', tip: '"Recurso" stresses the second syllable: re-KOOR-soh. "Apelación" ends with the stress on -SIÓN, a very common legal suffix.' },
    { spanish: 'Las partes contratantes firman de común acuerdo', pronunciation: 'lahs PAHR-tehs kohn-trah-TAHN-tehs FEER-mahn deh koh-MOON ah-KWEHR-doh', english: 'The contracting parties sign by mutual agreement', audio: 'las-partes-contratantes-acuerdan', tip: '"Contratantes" has four syllables: con-tra-TAN-tes. Legal Spanish loves present participles used as nouns.' },
    { spanish: 'La declaración jurada debe estar notarizada', pronunciation: 'lah deh-klah-rah-see-OHN hoo-RAH-dah DEH-beh ehs-TAHR noh-tah-ree-SAH-dah', english: 'The sworn statement must be notarized', audio: 'presentar-declaracion-jurada', tip: '"Jurada" comes from "jurar" (to swear). The J in Spanish is always pronounced as a strong H sound: hoo-RAH-dah.' },
    { spanish: 'Sin perjuicio de lo anteriormente establecido', pronunciation: 'seen pehr-HWEE-see-oh deh loh ahn-teh-ree-ohr-MEHN-teh ehs-tah-bleh-SEE-doh', english: 'Without prejudice to what was previously established', audio: 'sin-perjuicio-de-las-acciones', tip: '"Perjuicio" is tricky: per-HWI-cio. Don\'t confuse with "prejuicio" (prejudice) — "perjuicio" means harm or detriment.' },
    { spanish: 'El plazo de vigencia del contrato es de un año', pronunciation: 'ehl PLAH-soh deh bee-HEHN-see-ah dehl kohn-TRAH-toh ehs deh oon AH-nyoh', english: 'The contract\'s validity period is one year', audio: 'plazo-de-vigencia-pasaporte', tip: '"Vigencia" (validity/force) stresses the second syllable: vi-HEN-cia. Related to "vigente" (current/in force).' },
    { spanish: 'Conforme a la ley, el ciudadano tiene garantías', pronunciation: 'kohn-FOHR-meh ah lah LEH-ee ehl see-oo-dah-DAH-noh tee-EH-neh gah-rahn-TEE-ahs', english: 'In accordance with the law, the citizen has guarantees', audio: 'conforme-a-la-ley', tip: '"Conforme a" is one of the most common legal formulas. Always followed by a noun: conforme a la ley, conforme al artículo, conforme al reglamento.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'legal-terminology', label: 'Legal Terminology' },
    { id: 'contracts-documents', label: 'Contracts & Documents' },
    { id: 'bureaucratic-procedures', label: 'Bureaucratic Procedures' },
    { id: 'rights-obligations', label: 'Rights & Obligations' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Term Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'legal-navigator', label: 'Legal Navigator' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'legal-terminology',
      title: 'Legal Terminology — Terminologia Juridica',
      description: 'Core vocabulary of the courtroom and legal proceedings: plaintiffs, defendants, rulings, appeals, and statutes of limitations.',
      tabs: [
        { label: 'Court & Proceedings', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'legal-terminology').slice(0, 6) },
        { label: 'Rulings & Precedent', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'legal-terminology').slice(6) },
      ],
    },
    {
      id: 'contracts-documents',
      title: 'Contracts & Documents — Contratos y Documentos',
      description: 'The formulaic language of legal documents: contracting parties, clauses, retroactive provisions, and binding agreements.',
      tabs: [
        { label: 'Contract Formulas', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'contracts-documents').slice(0, 6) },
        { label: 'Terms & Obligations', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'contracts-documents').slice(6) },
      ],
    },
    {
      id: 'bureaucratic-procedures',
      title: 'Bureaucratic Procedures — Tramites Burocraticos',
      description: 'Navigate government offices like a native: permits, deadlines, sworn statements, official seals, and the art of waiting in line.',
      tabs: [
        { label: 'Processing & Filing', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'bureaucratic-procedures').slice(0, 6) },
        { label: 'Requirements & Deadlines', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'bureaucratic-procedures').slice(6) },
      ],
    },
    {
      id: 'rights-obligations',
      title: 'Rights & Obligations — Derechos y Obligaciones',
      description: 'The language of rights, duties, and legal consequences: what you are entitled to, what you are bound by, and what happens if rules are broken.',
      tabs: [
        { label: 'Rights & Compliance', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'rights-obligations').slice(0, 6) },
        { label: 'Obligations & Liability', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'rights-obligations').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Legal Suffixes: -cion, -miento, -dad',
      content: 'Legal Spanish is packed with abstract nouns ending in -cion (prescripcion, apelacion), -miento (cumplimiento, incumplimiento, desistimiento), and -dad (nulidad, responsabilidad). These always carry the stress on the last syllable of the suffix: prescripCION, cumplimienTO is an exception — stress falls on -MIEN-to. Master these endings and you unlock hundreds of legal terms.',
      example: 'Prescripcion | Cumplimiento | Responsabilidad | Incumplimiento | Nulidad',
    },
    {
      title: 'Formulaic Phrases Are Your Friend',
      content: 'Legal Spanish relies on fixed formulas that rarely change: "en virtud de" (by virtue of), "por medio de la presente" (by means of this document), "sin perjuicio de" (without prejudice to), "a efectos de" (for the purposes of). Memorize these as complete units — they function like legal building blocks that you plug into any context.',
      example: 'En virtud de lo dispuesto... | Por medio de la presente se notifica... | Sin perjuicio de lo anterior...',
      reviewFrom: 'L5.3',
    },
    {
      title: 'Passive Voice Dominates Legal Texts',
      content: 'Legal documents overwhelmingly use passive constructions to sound impersonal and authoritative: "fue dictada" (was issued), "sera aplicada" (will be applied), "queda estipulado" (is hereby stipulated). Both "ser + participle" and reflexive passive ("se establece," "se resuelve") are essential. Review L5.3 passive structures — they are the backbone of legal writing.',
      example: 'La sentencia fue dictada. | Se establece que... | Quedan estipuladas las clausulas.',
      reviewFrom: 'L5.3',
    },
    {
      title: 'The Future of Legal Consequence',
      content: 'Legal texts frequently use the future tense to express mandatory consequences: "se aplicaran sanciones" (sanctions WILL be applied), "responderá por los danos" (will be liable for damages). This is not a prediction — it is a legal certainty. The future here carries the force of obligation, not mere expectation.',
      example: 'Se aplicaran sanciones. | El contrato entrara en vigor. | La empresa respondera por los danos.',
    },
  ],

  flashcardGroups: [
    {
      key: 'legal-terminology',
      label: 'Legal Terminology',
      audioKeys: ['el-demandante-presento-las-pruebas', 'el-demandado-nego-las-acusaciones', 'la-sentencia-fue-dictada', 'el-fallo-del-juez', 'interponer-una-demanda-civil', 'recurso-de-apelacion', 'la-jurisprudencia-establece', 'el-codigo-civil-regula', 'la-prescripcion-del-delito', 'el-desistimiento-de-la-causa', 'el-perito-presento-informe', 'nulidad-del-procedimiento'],
    },
    {
      key: 'contracts-documents',
      label: 'Contracts & Documents',
      audioKeys: ['las-partes-contratantes-acuerdan', 'en-virtud-de-lo-establecido', 'por-medio-de-la-presente', 'quedan-estipuladas-las-clausulas', 'caracter-retroactivo', 'de-comun-acuerdo', 'el-otorgante-firma', 'copia-certificada-del-documento', 'contrato-entrara-en-vigor', 'ambas-partes-se-obligan', 'clausula-de-confidencialidad', 'el-arrendatario-se-compromete'],
    },
    {
      key: 'bureaucratic-rights',
      label: 'Bureaucracy & Rights',
      audioKeys: ['tramitar-un-permiso-de-residencia', 'solicitar-una-prorroga', 'presentar-declaracion-jurada', 'el-sello-oficial', 'acta-notarial-firmada', 'firma-autenticada-notario', 'tiene-derecho-a-un-abogado', 'queda-obligado-a-pagar', 'en-cumplimiento-de-la-normativa', 'conforme-a-la-ley'],
    },
  ],

  matchPairs: [
    { left: 'El demandante', right: 'The plaintiff' },
    { left: 'El demandado', right: 'The defendant' },
    { left: 'La sentencia', right: 'The sentence/ruling' },
    { left: 'Sin perjuicio de', right: 'Without prejudice to' },
    { left: 'En virtud de', right: 'By virtue of' },
    { left: 'Tramitar', right: 'To process/file' },
    { left: 'Declaracion jurada', right: 'Sworn statement' },
    { left: 'Plazo de vigencia', right: 'Validity period' },
  ],
  matchLabels: { left: 'Espanol', right: 'English' },

  sortActivities: [
    {
      title: 'Courtroom vs. Office',
      instruction: 'Does this term belong in a courtroom or a government office?',
      buckets: ['Courtroom \u2696\uFE0F', 'Government Office \uD83C\uDFDB\uFE0F'],
      items: [
        { text: 'El demandante', bucket: 'Courtroom \u2696\uFE0F' },
        { text: 'La sentencia', bucket: 'Courtroom \u2696\uFE0F' },
        { text: 'Recurso de apelacion', bucket: 'Courtroom \u2696\uFE0F' },
        { text: 'La jurisprudencia', bucket: 'Courtroom \u2696\uFE0F' },
        { text: 'Tramitar un permiso', bucket: 'Government Office \uD83C\uDFDB\uFE0F' },
        { text: 'El sello oficial', bucket: 'Government Office \uD83C\uDFDB\uFE0F' },
        { text: 'Sacar un turno', bucket: 'Government Office \uD83C\uDFDB\uFE0F' },
        { text: 'Dias habiles', bucket: 'Government Office \uD83C\uDFDB\uFE0F' },
      ],
    },
    {
      title: 'Rights vs. Obligations',
      instruction: 'Is this expressing a right or an obligation?',
      buckets: ['Right \uD83D\uDEE1\uFE0F', 'Obligation \uD83D\uDD12'],
      items: [
        { text: 'Tiene derecho a un abogado', bucket: 'Right \uD83D\uDEE1\uFE0F' },
        { text: 'Derecho a vacaciones remuneradas', bucket: 'Right \uD83D\uDEE1\uFE0F' },
        { text: 'Tutela judicial efectiva', bucket: 'Right \uD83D\uDEE1\uFE0F' },
        { text: 'Prohibida toda discriminacion', bucket: 'Right \uD83D\uDEE1\uFE0F' },
        { text: 'Queda obligado a pagar', bucket: 'Obligation \uD83D\uDD12' },
        { text: 'Se compromete a mantener', bucket: 'Obligation \uD83D\uDD12' },
        { text: 'Sujeto a las condiciones', bucket: 'Obligation \uD83D\uDD12' },
        { text: 'Respondera por los danos', bucket: 'Obligation \uD83D\uDD12' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Term Sorting',

  dialogues: [
    {
      id: 'dialogue-lawyer',
      title: 'Lawyer-Client Consultation — Ciudad de Mexico',
      location: 'Mexico City',
      lines: [
        { speaker: 'Licenciada Reyes', text: 'Buenos dias, senor Gutierrez. He revisado su caso. El arrendador le esta exigiendo el pago de tres meses de renta atrasada.', audio: '/audio/L6.3/phrases/d1-line1.mp3' },
        { speaker: 'Sr. Gutierrez', text: 'Pero licenciada, yo pague todos los meses. Tengo los recibos en mi cuenta bancaria.', audio: '/audio/L6.3/phrases/d1-line2.mp3' },
        { speaker: 'Licenciada Reyes', text: 'Perfecto. Esos comprobantes de pago son evidencia clave. Conforme a la ley, el arrendador tiene la carga de la prueba.', audio: '/audio/L6.3/phrases/d1-line3.mp3' },
        { speaker: 'Sr. Gutierrez', text: 'Y que pasa con la clausula que dice que puede rescindir el contrato?', audio: '/audio/L6.3/phrases/d1-line4.mp3' },
        { speaker: 'Licenciada Reyes', text: 'Esa clausula solo aplica en caso de incumplimiento comprobado. Sin perjuicio de eso, usted tiene derecho a impugnar la rescision.', audio: '/audio/L6.3/phrases/d1-line5.mp3', annotations: [{ phrase: 'sin perjuicio de', fromLesson: 'L5.3', note: 'Formal register phrase from L5.3 — used to add a condition without negating the previous statement' }] },
        { speaker: 'Sr. Gutierrez', text: 'Entonces, que me recomienda hacer?', audio: '/audio/L6.3/phrases/d1-line6.mp3' },
        { speaker: 'Licenciada Reyes', text: 'Primero, vamos a presentar una contestacion formal ante el juzgado. Adjuntaremos los comprobantes de pago como prueba documental.', audio: '/audio/L6.3/phrases/d1-line7.mp3' },
        { speaker: 'Sr. Gutierrez', text: 'Y si el juez falla en mi contra?', audio: '/audio/L6.3/phrases/d1-line8.mp3' },
        { speaker: 'Licenciada Reyes', text: 'En ese caso, interpondriamos un recurso de apelacion. Pero con las pruebas que tenemos, estoy confiada en que el fallo sera favorable.', audio: '/audio/L6.3/phrases/d1-line9.mp3' },
        { speaker: 'Sr. Gutierrez', text: 'Muchas gracias, licenciada. Me siento mas tranquilo sabiendo mis derechos.', audio: '/audio/L6.3/phrases/d1-line10.mp3' },
        { speaker: 'Licenciada Reyes', text: 'Para eso estamos. Le preparare el escrito y lo revisamos la proxima semana. No se preocupe, la ley lo protege.', audio: '/audio/L6.3/phrases/d1-line11.mp3' },
        { speaker: 'Sr. Gutierrez', text: 'Entendido. Una ultima pregunta: el plazo de prescripcion para este tipo de demanda, cuanto es?', audio: '/audio/L6.3/phrases/d1-line12.mp3' },
        { speaker: 'Licenciada Reyes', text: 'Para controversias de arrendamiento, el plazo es de dos anos conforme al codigo civil. Estamos dentro del plazo, asi que no hay problema.', audio: '/audio/L6.3/phrases/d1-line13.mp3' },
        { speaker: 'Sr. Gutierrez', text: 'Perfecto. Cuento con usted, licenciada. Nos vemos la proxima semana.', audio: '/audio/L6.3/phrases/d1-line14.mp3' },
        { speaker: 'Licenciada Reyes', text: 'Asi es. Traiga todos los recibos originales y una copia de su contrato de arrendamiento. Buenas tardes.', audio: '/audio/L6.3/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-immigration',
      title: 'At the Immigration Office — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Funcionaria', text: 'Siguiente. Buenos dias. Digame, que tramite necesita realizar?', audio: '/audio/L6.3/phrases/d2-line1.mp3' },
        { speaker: 'Carlos', text: 'Buenos dias. Necesito solicitar una prorroga de mi permiso de residencia. Vence el mes que viene.', audio: '/audio/L6.3/phrases/d2-line2.mp3' },
        { speaker: 'Funcionaria', text: 'De acuerdo. Tiene que presentar el formulario EX-02 cumplimentado, dos fotografias tamano pasaporte y una copia de su pasaporte vigente.', audio: '/audio/L6.3/phrases/d2-line3.mp3' },
        { speaker: 'Carlos', text: 'Aqui tengo todo. Tambien traje mi contrato de trabajo y los ultimos tres recibos de nomina, por si acaso.', audio: '/audio/L6.3/phrases/d2-line4.mp3' },
        { speaker: 'Funcionaria', text: 'Bien hecho. Esos documentos son necesarios para acreditar medios economicos suficientes. Dejeme verificar que todo esta en orden.', audio: '/audio/L6.3/phrases/d2-line5.mp3', annotations: [{ phrase: 'acreditar medios economicos', fromLesson: 'L5.5', note: 'Professional/financial vocabulary from L5.5' }] },
        { speaker: 'Carlos', text: 'Disculpe, necesito que los documentos lleven algun sello oficial?', audio: '/audio/L6.3/phrases/d2-line6.mp3' },
        { speaker: 'Funcionaria', text: 'El contrato de trabajo debe estar firmado por ambas partes. No necesita sello notarial, pero si necesita el certificado de empadronamiento actualizado.', audio: '/audio/L6.3/phrases/d2-line7.mp3' },
        { speaker: 'Carlos', text: 'Lo tengo aqui. Lo saque hace una semana en el ayuntamiento.', audio: '/audio/L6.3/phrases/d2-line8.mp3' },
        { speaker: 'Funcionaria', text: 'Perfecto, esta dentro del plazo de vigencia de tres meses. Todo parece correcto. El tramite tardara aproximadamente cuarenta y cinco dias habiles.', audio: '/audio/L6.3/phrases/d2-line9.mp3' },
        { speaker: 'Carlos', text: 'Y si mi permiso vence antes de que salga la resolucion?', audio: '/audio/L6.3/phrases/d2-line10.mp3' },
        { speaker: 'Funcionaria', text: 'No se preocupe. Al presentar la solicitud dentro del plazo, queda prorrogado automaticamente hasta que se dicte la resolucion. Aqui tiene su resguardo.', audio: '/audio/L6.3/phrases/d2-line11.mp3' },
        { speaker: 'Carlos', text: 'Muchas gracias. Una duda mas: si me deniegan la prorroga, puedo recurrir?', audio: '/audio/L6.3/phrases/d2-line12.mp3' },
        { speaker: 'Funcionaria', text: 'Si, tiene derecho a presentar un recurso de reposicion en el plazo de un mes, o un recurso contencioso-administrativo en dos meses. Todo viene explicado en la notificacion.', audio: '/audio/L6.3/phrases/d2-line13.mp3' },
        { speaker: 'Carlos', text: 'Entendido. Muchisimas gracias por toda la informacion. Que tenga buen dia.', audio: '/audio/L6.3/phrases/d2-line14.mp3' },
        { speaker: 'Funcionaria', text: 'De nada. Siguiente, por favor.', audio: '/audio/L6.3/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Navigate a lawyer-client consultation about a rental dispute in Mexico City and process a residence permit renewal at a government immigration office in Madrid.',

  culturalNotes: [
    {
      title: 'Legal Systems Across Latin America: Civil Law Tradition',
      content: 'Unlike the United States and the UK, which follow the common law tradition (based on judicial precedents), virtually all Latin American countries follow the civil law tradition inherited from Spain, which is itself rooted in Roman law and the Napoleonic Code. This means laws are primarily codified in comprehensive legal codes — the Codigo Civil, Codigo Penal, Codigo de Comercio — rather than built up case by case through court rulings. While "jurisprudencia" (case law) exists, it typically plays a supplementary role. Lawyers cite articles from codes, not previous court decisions. Understanding this distinction is crucial for anyone doing business or living in the Spanish-speaking world.',
    },
    {
      title: 'Tramitologia: The Culture of Bureaucracy',
      content: 'The humorous term "tramitologia" (the science of paperwork) captures a reality across much of the Spanish-speaking world: bureaucratic procedures can be extraordinarily complex and time-consuming. From obtaining a "constancia" (certificate) to getting a "sello" (official stamp), navigating government offices requires patience, the right documents, and often multiple visits. In Mexico, the phrase "vuelva manana" (come back tomorrow) is almost a national joke. In Spain, the "cita previa" (prior appointment) system has modernized many processes, but the culture of forms, stamps, and waiting persists. Understanding phrases like "sacar turno" (take a number), "ventanilla" (service window), and "dias habiles" (business days) is essential for daily life.',
    },
    {
      title: 'The Notary: A Powerful Figure in Spanish-Speaking Countries',
      content: 'In the civil law tradition, the "notario publico" holds far more authority than a notary public in the United States. Latin American and Spanish notaries are highly trained legal professionals — often requiring a law degree plus additional specialization — who authenticate documents, witness transactions, and give them legal force. A "escritura publica" (public deed) signed before a notary is essentially irrefutable in court. Buying property, creating a business, granting power of attorney — all require a notary. Their "fe publica" (public faith) means their authentication carries the weight of the state. The notary\'s "protocolo" (official record book) contains copies of every document they have ever authenticated.',
    },
  ],
  culturalGradient: 'from-stone-50 to-amber-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El demandante" refers to:', options: ['The judge', 'The plaintiff', 'The defendant', 'The witness'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Se presento un recurso de ___" (appeal)', answer: 'apelacion' },
    { id: 3, type: 'mc', text: '"En virtud de" means:', options: ['In spite of', 'By virtue of', 'In case of', 'For the purpose of'], answer: 1 },
    { id: 4, type: 'tf', text: 'In civil law countries, court rulings (jurisprudencia) are the primary source of law.', answer: false },
    { id: 5, type: 'mc', text: '"Las partes contratantes" are:', options: ['The court officials', 'The contracting parties', 'The legal witnesses', 'The government agencies'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Necesito tramitar un ___ de residencia" (permit)', answer: 'permiso' },
    { id: 7, type: 'mc', text: '"Sin perjuicio de" is best translated as:', options: ['Without prejudice to', 'With the benefit of', 'In spite of', 'As a result of'], answer: 0 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what evidence does Sr. Gutierrez have?', options: ['Witness testimony', 'Bank payment receipts', 'A notarized declaration', 'Video recordings'], answer: 1 },
    { id: 9, type: 'tf', text: '"Declaracion jurada" means a sworn statement made under oath.', answer: true },
    { id: 10, type: 'mc', text: '"El plazo de vigencia" refers to:', options: ['The payment deadline', 'The validity period', 'The appeal window', 'The trial date'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "A efectos ___, este documento tiene plena validez" (legal)', answer: 'legales' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, how long will the residence permit process take?', options: ['15 business days', '30 business days', '45 business days', '60 business days'], answer: 2 },
    { id: 13, type: 'mc', text: 'A "notario publico" in Latin America is:', options: ['A simple stamp clerk', 'A highly trained legal professional with state authority', 'The same as a US notary public', 'A court-appointed judge'], answer: 1 },
    { id: 14, type: 'tf', text: '"Tramitologia" is a humorous term for the complex bureaucratic culture in Spanish-speaking countries.', answer: true },
    { id: 15, type: 'mc', text: '"Queda obligado a" means:', options: ['Has the right to', 'Is obligated to', 'Is exempt from', 'May choose to'], answer: 1 },
  ],

  audioBase: '/audio/L6.3/phrases',

  uniqueActivity: {
    id: 'LegalNavigatorL63',
    sectionId: 'legal-navigator',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'legal-terminology': { bg: 'bg-stone-50/30', border: 'border-stone-200' },
    'contracts-documents': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'bureaucratic-procedures': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'rights-obligations': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-stone-50/30', border: 'border-stone-200' },
    'legal-navigator': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
