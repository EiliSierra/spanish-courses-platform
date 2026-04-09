import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Anatomy & Symptoms (12) ===
  { spanish: 'El hígado está inflamado', english: 'The liver is inflamed', pronunciation: 'ehl EE-gah-doh ehs-TAH een-flah-MAH-doh', category: 'anatomy-symptoms', audio: 'el-higado-esta-inflamado' },
  { spanish: 'Los riñones filtran la sangre', english: 'The kidneys filter the blood', pronunciation: 'lohs ree-NYOH-nehs FEEL-trahn lah SAHN-greh', category: 'anatomy-symptoms', audio: 'los-rinones-filtran-la-sangre' },
  { spanish: 'La columna vertebral sostiene el cuerpo', english: 'The spinal column supports the body', pronunciation: 'lah koh-LOOM-nah behr-teh-BRAHL sohs-tee-EH-neh ehl KWEHR-poh', category: 'anatomy-symptoms', audio: 'la-columna-vertebral-sostiene' },
  { spanish: 'El paciente reporta dolor agudo en el abdomen', english: 'The patient reports sharp pain in the abdomen', pronunciation: 'ehl pah-see-EHN-teh rreh-POHR-tah doh-LOHR ah-GOO-doh ehn ehl ahb-DOH-mehn', category: 'anatomy-symptoms', audio: 'dolor-agudo-en-el-abdomen' },
  { spanish: 'Sufre de dolor crónico en la espalda baja', english: 'He/she suffers from chronic lower back pain', pronunciation: 'SOO-freh deh doh-LOHR KROH-nee-koh ehn lah ehs-PAHL-dah BAH-hah', category: 'anatomy-symptoms', audio: 'dolor-cronico-espalda-baja' },
  { spanish: 'Se observa hinchazón en la rodilla derecha', english: 'Swelling is observed in the right knee', pronunciation: 'seh ohb-SEHR-bah een-chah-SOHN ehn lah rroh-DEE-yah deh-REH-chah', category: 'anatomy-symptoms', audio: 'hinchazon-rodilla-derecha' },
  { spanish: 'La fiebre alta no cede con el paracetamol', english: 'The high fever does not subside with acetaminophen', pronunciation: 'lah fee-EH-breh AHL-tah noh SEH-deh kohn ehl pah-rah-seh-tah-MOHL', category: 'anatomy-symptoms', audio: 'fiebre-alta-no-cede' },
  { spanish: 'Presenta mareos y visión borrosa', english: 'He/she presents dizziness and blurred vision', pronunciation: 'preh-SEHN-tah mah-REH-ohs ee bee-see-OHN boh-RROH-sah', category: 'anatomy-symptoms', audio: 'mareos-vision-borrosa' },
  { spanish: 'Las náuseas empeoran después de comer', english: 'The nausea worsens after eating', pronunciation: 'lahs NOW-seh-ahs ehm-peh-OH-rahn dehs-PWEHS deh koh-MEHR', category: 'anatomy-symptoms', audio: 'nauseas-empeoran-despues-comer' },
  { spanish: 'La presión arterial está elevada', english: 'The blood pressure is elevated', pronunciation: 'lah preh-see-OHN ahr-teh-ree-AHL ehs-TAH eh-leh-BAH-dah', category: 'anatomy-symptoms', audio: 'presion-arterial-elevada' },
  { spanish: 'El ritmo cardíaco es irregular', english: 'The heart rate is irregular', pronunciation: 'ehl REET-moh kahr-DEE-ah-koh ehs ee-rreh-goo-LAHR', category: 'anatomy-symptoms', audio: 'ritmo-cardiaco-irregular' },
  { spanish: 'El sistema inmunológico está comprometido', english: 'The immune system is compromised', pronunciation: 'ehl sees-TEH-mah een-moo-noh-LOH-hee-koh ehs-TAH kohm-proh-meh-TEE-doh', category: 'anatomy-symptoms', audio: 'sistema-inmunologico-comprometido' },

  // === Diagnosis & Treatment (12) ===
  { spanish: 'El diagnóstico preliminar indica gastritis', english: 'The preliminary diagnosis indicates gastritis', pronunciation: 'ehl dee-ahg-NOHS-tee-koh preh-lee-mee-NAHR een-DEE-kah gahs-TREE-tees', category: 'diagnosis-treatment', audio: 'diagnostico-preliminar-gastritis' },
  { spanish: 'Voy a recetar medicamentos para la infección', english: 'I am going to prescribe medication for the infection', pronunciation: 'boy ah rreh-seh-TAHR meh-dee-kah-MEHN-tohs PAH-rah lah een-fehk-see-OHN', category: 'diagnosis-treatment', audio: 'recetar-medicamentos-infeccion' },
  { spanish: 'La dosis recomendada es de 500 miligramos', english: 'The recommended dose is 500 milligrams', pronunciation: 'lah DOH-sees rreh-koh-mehn-DAH-dah ehs deh kee-nee-EHN-tohs mee-lee-GRAH-mohs', category: 'diagnosis-treatment', audio: 'dosis-recomendada-500mg' },
  { spanish: 'Este medicamento puede causar efectos secundarios', english: 'This medication can cause side effects', pronunciation: 'EHS-teh meh-dee-kah-MEHN-toh PWEH-deh kow-SAHR eh-FEHK-tohs seh-koon-DAH-ree-ohs', category: 'diagnosis-treatment', audio: 'efectos-secundarios-medicamento' },
  { spanish: 'Existen contraindicaciones con otros fármacos', english: 'There are contraindications with other drugs', pronunciation: 'ehk-SEES-tehn kohn-trah-een-dee-kah-see-OH-nehs kohn OH-trohs FAHR-mah-kohs', category: 'diagnosis-treatment', audio: 'contraindicaciones-farmacos' },
  { spanish: 'El pronóstico es favorable si sigue el tratamiento', english: 'The prognosis is favorable if he/she follows the treatment', pronunciation: 'ehl proh-NOHS-tee-koh ehs fah-boh-RAH-bleh see SEE-geh ehl trah-tah-mee-EHN-toh', category: 'diagnosis-treatment', audio: 'pronostico-favorable-tratamiento' },
  { spanish: 'Necesitamos realizar una biopsia del tejido', english: 'We need to perform a tissue biopsy', pronunciation: 'neh-seh-see-TAH-mohs rreh-ah-lee-SAHR OO-nah bee-OHP-see-ah dehl teh-HEE-doh', category: 'diagnosis-treatment', audio: 'realizar-biopsia-tejido' },
  { spanish: 'El tratamiento ambulatorio incluye fisioterapia', english: 'The outpatient treatment includes physical therapy', pronunciation: 'ehl trah-tah-mee-EHN-toh ahm-boo-lah-TOH-ree-oh een-KLOO-yeh fee-see-oh-teh-RAH-pee-ah', category: 'diagnosis-treatment', audio: 'tratamiento-ambulatorio-fisioterapia' },
  { spanish: 'Hay que hacer un análisis de sangre completo', english: 'A complete blood test needs to be done', pronunciation: 'eye keh ah-SEHR oon ah-NAH-lee-sees deh SAHN-greh kohm-PLEH-toh', category: 'diagnosis-treatment', audio: 'analisis-sangre-completo' },
  { spanish: 'La cirugía será mínimamente invasiva', english: 'The surgery will be minimally invasive', pronunciation: 'lah see-roo-HEE-ah seh-RAH MEE-nee-mah-MEHN-teh een-bah-SEE-bah', category: 'diagnosis-treatment', audio: 'cirugia-minimamente-invasiva' },
  { spanish: 'Le receto un antibiótico de amplio espectro', english: 'I prescribe a broad-spectrum antibiotic', pronunciation: 'leh rreh-SEH-toh oon ahn-tee-bee-OH-tee-koh deh AHM-plee-oh ehs-PEHK-troh', category: 'diagnosis-treatment', audio: 'antibiotico-amplio-espectro' },
  { spanish: 'El paciente debe guardar reposo absoluto', english: 'The patient must observe complete bed rest', pronunciation: 'ehl pah-see-EHN-teh DEH-beh gwahr-DAHR rreh-POH-soh ahb-soh-LOO-toh', category: 'diagnosis-treatment', audio: 'guardar-reposo-absoluto' },

  // === Patient Communication (12) ===
  { spanish: '¿Desde cuándo presenta estos síntomas?', english: 'How long have you had these symptoms?', pronunciation: 'DEHS-deh KWAHN-doh preh-SEHN-tah EHS-tohs SEEN-toh-mahs', category: 'patient-communication', audio: 'desde-cuando-estos-sintomas' },
  { spanish: '¿Es usted alérgico a algún medicamento?', english: 'Are you allergic to any medication?', pronunciation: 'ehs oos-TEHD ah-LEHR-hee-koh ah ahl-GOON meh-dee-kah-MEHN-toh', category: 'patient-communication', audio: 'alergico-algun-medicamento' },
  { spanish: 'Necesitamos hacerle unos análisis de laboratorio', english: 'We need to run some lab tests on you', pronunciation: 'neh-seh-see-TAH-mohs ah-SEHR-leh OO-nohs ah-NAH-lee-sees deh lah-boh-rah-TOH-ree-oh', category: 'patient-communication', audio: 'hacerle-analisis-laboratorio' },
  { spanish: 'Le voy a recetar un antiinflamatorio', english: 'I am going to prescribe you an anti-inflammatory', pronunciation: 'leh boy ah rreh-seh-TAHR oon ahn-tee-een-flah-mah-TOH-ree-oh', category: 'patient-communication', audio: 'recetar-antiinflamatorio' },
  { spanish: 'Debe tomar el medicamento cada 8 horas', english: 'You must take the medication every 8 hours', pronunciation: 'DEH-beh toh-MAHR ehl meh-dee-kah-MEHN-toh KAH-dah OH-choh OH-rahs', category: 'patient-communication', audio: 'tomar-medicamento-cada-8-horas' },
  { spanish: '¿Ha tenido cirugías anteriores?', english: 'Have you had previous surgeries?', pronunciation: 'ah teh-NEE-doh see-roo-HEE-ahs ahn-teh-ree-OH-rehs', category: 'patient-communication', audio: 'cirugias-anteriores' },
  { spanish: 'En una escala del 1 al 10, ¿cómo califica su dolor?', english: 'On a scale of 1 to 10, how would you rate your pain?', pronunciation: 'ehn OO-nah ehs-KAH-lah dehl OO-noh ahl dee-EHS KOH-moh kah-LEE-fee-kah soo doh-LOHR', category: 'patient-communication', audio: 'escala-1-10-dolor' },
  { spanish: 'Vamos a programar una cita de seguimiento', english: 'We are going to schedule a follow-up appointment', pronunciation: 'BAH-mohs ah proh-grah-MAHR OO-nah SEE-tah deh seh-gee-mee-EHN-toh', category: 'patient-communication', audio: 'cita-de-seguimiento' },
  { spanish: '¿Tiene antecedentes familiares de diabetes?', english: 'Do you have a family history of diabetes?', pronunciation: 'tee-EH-neh ahn-teh-seh-DEHN-tehs fah-mee-lee-AH-rehs deh dee-ah-BEH-tehs', category: 'patient-communication', audio: 'antecedentes-familiares-diabetes' },
  { spanish: 'No se preocupe, el procedimiento es rutinario', english: 'Don\'t worry, the procedure is routine', pronunciation: 'noh seh preh-oh-KOO-peh ehl proh-seh-dee-mee-EHN-toh ehs rroo-tee-NAH-ree-oh', category: 'patient-communication', audio: 'procedimiento-rutinario' },
  { spanish: 'Necesita firmar el consentimiento informado', english: 'You need to sign the informed consent', pronunciation: 'neh-seh-SEE-tah feer-MAHR ehl kohn-sehn-tee-mee-EHN-toh een-fohr-MAH-doh', category: 'patient-communication', audio: 'consentimiento-informado' },
  { spanish: 'Le recomiendo consultar con un especialista', english: 'I recommend you consult with a specialist', pronunciation: 'leh rreh-koh-mee-EHN-doh kohn-sool-TAHR kohn oon ehs-peh-see-ah-LEES-tah', category: 'patient-communication', audio: 'consultar-especialista' },

  // === Emergency & Mental Health (12) ===
  { spanish: 'Código rojo, tenemos una emergencia en el quirófano', english: 'Code red, we have an emergency in the operating room', pronunciation: 'KOH-dee-goh RROH-hoh teh-NEH-mohs OO-nah eh-mehr-HEHN-see-ah ehn ehl kee-ROH-fah-noh', category: 'emergency-mental-health', audio: 'codigo-rojo-emergencia-quirofano' },
  { spanish: 'Paciente en estado crítico, necesita intubación', english: 'Patient in critical condition, needs intubation', pronunciation: 'pah-see-EHN-teh ehn ehs-TAH-doh KREE-tee-koh neh-seh-SEE-tah een-too-bah-see-OHN', category: 'emergency-mental-health', audio: 'estado-critico-intubacion' },
  { spanish: 'Los signos vitales están estables', english: 'The vital signs are stable', pronunciation: 'lohs SEEG-nohs bee-TAH-lehs ehs-TAHN ehs-TAH-blehs', category: 'emergency-mental-health', audio: 'signos-vitales-estables' },
  { spanish: 'Administren oxígeno por mascarilla al paciente', english: 'Administer oxygen by mask to the patient', pronunciation: 'ahd-mee-NEES-trehn ohk-SEE-heh-noh pohr mahs-kah-REE-yah ahl pah-see-EHN-teh', category: 'emergency-mental-health', audio: 'oxigeno-mascarilla-paciente' },
  { spanish: 'El paciente presenta una crisis de ansiedad', english: 'The patient is having an anxiety attack', pronunciation: 'ehl pah-see-EHN-teh preh-SEHN-tah OO-nah KREE-sees deh ahn-see-eh-DAHD', category: 'emergency-mental-health', audio: 'crisis-de-ansiedad' },
  { spanish: 'Fue diagnosticado con trastorno de estrés postraumático', english: 'He/she was diagnosed with post-traumatic stress disorder', pronunciation: 'fweh dee-ahg-nohs-tee-KAH-doh kohn trahs-TOHR-noh deh ehs-TREHS pohs-trow-MAH-tee-koh', category: 'emergency-mental-health', audio: 'trastorno-estres-postraumatico' },
  { spanish: 'La terapia cognitivo-conductual ha mostrado mejoras', english: 'Cognitive-behavioral therapy has shown improvement', pronunciation: 'lah teh-RAH-pee-ah kohg-nee-TEE-boh kohn-dook-TWAHL ah mohs-TRAH-doh meh-HOH-rahs', category: 'emergency-mental-health', audio: 'terapia-cognitivo-conductual' },
  { spanish: 'Necesitamos una vía intravenosa de inmediato', english: 'We need an IV line immediately', pronunciation: 'neh-seh-see-TAH-mohs OO-nah BEE-ah een-trah-beh-NOH-sah deh een-meh-dee-AH-toh', category: 'emergency-mental-health', audio: 'via-intravenosa-inmediato' },
  { spanish: 'El desfibrilador está listo, despejen el área', english: 'The defibrillator is ready, clear the area', pronunciation: 'ehl dehs-fee-bree-lah-DOHR ehs-TAH LEES-toh dehs-PEH-hehn ehl AH-reh-ah', category: 'emergency-mental-health', audio: 'desfibrilador-despejen-area' },
  { spanish: 'La depresión clínica requiere un abordaje integral', english: 'Clinical depression requires a comprehensive approach', pronunciation: 'lah deh-preh-see-OHN KLEE-nee-kah rreh-kee-EH-reh oon ah-bohr-DAH-heh een-teh-GRAHL', category: 'emergency-mental-health', audio: 'depresion-clinica-abordaje-integral' },
  { spanish: 'Evalúen el riesgo de autolesión del paciente', english: 'Assess the patient\'s self-harm risk', pronunciation: 'eh-bah-LOO-ehn ehl ree-EHS-goh deh ow-toh-leh-see-OHN dehl pah-see-EHN-teh', category: 'emergency-mental-health', audio: 'riesgo-autolesion-paciente' },
  { spanish: 'El psiquiatra ajustará la medicación la próxima semana', english: 'The psychiatrist will adjust the medication next week', pronunciation: 'ehl see-kee-AH-trah ah-hoos-tah-RAH lah meh-dee-kah-see-OHN lah PROHK-see-mah seh-MAH-nah', category: 'emergency-mental-health', audio: 'psiquiatra-ajustara-medicacion' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L81PhraseByAudio = phraseByAudio

// === TRIAGE SIMULATOR (unique activity) ===

export interface TriageSimulatorChallenge {
  patientSymptoms: string
  english: string
  correctAction: string
  options: string[]
}

export const TRIAGE_SIMULATOR_CHALLENGES: TriageSimulatorChallenge[] = [
  {
    patientSymptoms: 'Paciente de 45 años con dolor torácico intenso, sudoración y dificultad para respirar.',
    english: '45-year-old patient with intense chest pain, sweating, and difficulty breathing.',
    correctAction: 'Realizar un electrocardiograma y administrar aspirina de inmediato',
    options: ['Recetar paracetamol y enviar a casa', 'Realizar un electrocardiograma y administrar aspirina de inmediato', 'Programar una cita de seguimiento para la próxima semana', 'Recomendar reposo y líquidos abundantes'],
  },
  {
    patientSymptoms: 'Niño de 8 años con fiebre de 39.5°C, erupción cutánea y rigidez en el cuello.',
    english: '8-year-old child with 39.5°C fever, skin rash, and neck stiffness.',
    correctAction: 'Sospechar meningitis y realizar punción lumbar urgente',
    options: ['Administrar ibuprofeno y observar 24 horas', 'Sospechar meningitis y realizar punción lumbar urgente', 'Recetar antibiótico oral y cita en 3 días', 'Aplicar crema tópica para la erupción'],
  },
  {
    patientSymptoms: 'Mujer de 30 años con ataques de pánico recurrentes, insomnio y pensamientos intrusivos.',
    english: '30-year-old woman with recurrent panic attacks, insomnia, and intrusive thoughts.',
    correctAction: 'Referir a psiquiatría para evaluación de trastorno de ansiedad',
    options: ['Recetar somníferos y reevaluar en un mes', 'Referir a psiquiatría para evaluación de trastorno de ansiedad', 'Recomendar ejercicio físico únicamente', 'Hospitalizar de inmediato en sala de emergencias'],
  },
  {
    patientSymptoms: 'Paciente diabético con herida en el pie que no cicatriza, enrojecimiento y olor fétido.',
    english: 'Diabetic patient with a non-healing foot wound, redness, and foul odor.',
    correctAction: 'Evaluar la herida, tomar cultivo y comenzar antibióticos intravenosos',
    options: ['Limpiar la herida y aplicar vendaje', 'Recetar crema antibiótica tópica', 'Evaluar la herida, tomar cultivo y comenzar antibióticos intravenosos', 'Programar cirugía reconstructiva electiva'],
  },
  {
    patientSymptoms: 'Hombre de 60 años con pérdida súbita del habla, debilidad en el brazo derecho y confusión.',
    english: '60-year-old man with sudden speech loss, right arm weakness, and confusion.',
    correctAction: 'Activar código ictus y realizar tomografía cerebral de emergencia',
    options: ['Administrar analgésicos y monitorear', 'Activar código ictus y realizar tomografía cerebral de emergencia', 'Programar resonancia magnética para la próxima semana', 'Recetar antiinflamatorios y reposo'],
  },
  {
    patientSymptoms: 'Adolescente de 16 años con tristeza persistente, aislamiento social y marcas de autolesión en los brazos.',
    english: '16-year-old adolescent with persistent sadness, social isolation, and self-harm marks on arms.',
    correctAction: 'Realizar evaluación psiquiátrica urgente y activar protocolo de seguridad',
    options: ['Hablar con los padres y enviar a casa', 'Recetar antidepresivos inmediatamente', 'Realizar evaluación psiquiátrica urgente y activar protocolo de seguridad', 'Recomendar actividades recreativas y ejercicio'],
  },
  {
    patientSymptoms: 'Mujer embarazada de 34 semanas con presión arterial 180/110, visión borrosa y dolor de cabeza severo.',
    english: '34-week pregnant woman with blood pressure 180/110, blurred vision, and severe headache.',
    correctAction: 'Sospechar preeclampsia severa y preparar para parto de emergencia',
    options: ['Recetar antihipertensivos orales y reposo en casa', 'Sospechar preeclampsia severa y preparar para parto de emergencia', 'Programar ecografía de rutina para la próxima semana', 'Administrar analgésicos para el dolor de cabeza'],
  },
]

// === LESSON DATA ===

export const L81Data: LessonData = {
  id: 'L8.1',
  hero: {
    lessonId: 'L8.1',
    title: 'Medical Spanish',
    subtitle: 'Beyond C2 — Professional healthcare communication',
    description: 'Master essential medical vocabulary: anatomy, symptoms, diagnosis, prescriptions, patient communication, emergency protocols, and mental health terminology. Speak confidently in clinical settings across the Spanish-speaking world.',
    image: '/images/L8.1/L8.1.jpg',
    gradient: 'from-red-800/65 via-rose-700/55 to-pink-700/65',
    accentColor: 'rose-200',
  },

  objectives: [
    { icon: '🫀', title: 'Anatomy & Symptoms', desc: 'Name organs, body systems, and describe symptoms with clinical precision.' },
    { icon: '💊', title: 'Diagnosis & Treatment', desc: 'Discuss diagnoses, prescriptions, dosages, side effects, and prognoses.' },
    { icon: '🗣️', title: 'Patient Communication', desc: 'Conduct patient interviews: medical history, allergies, pain scales, and consent.' },
    { icon: '🚑', title: 'Emergency & Mental Health', desc: 'Handle ER protocols, vital signs, psychiatric crises, and therapy terminology.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.5', label: 'Health & Wellness', detail: 'L4.5 covered general wellness vocabulary. Now expand to full clinical terminology.' },
    { fromLesson: 'L2.1', label: 'At the Doctor', detail: 'L2.1 introduced basic doctor visit phrases. Now handle complex medical consultations.' },
    { fromLesson: 'L7.5', label: 'Psychology & Emotions', detail: 'L7.5 explored emotional vocabulary. Now apply it to clinical mental health contexts.' },
  ],

  sectionTransitions: [
    { afterSection: 'anatomy-symptoms', text: 'You know the body and its signals! Now let\'s learn how doctors diagnose and treat.' },
    { afterSection: 'diagnosis-treatment', text: 'Diagnosis and treatment covered! Time to practice talking with patients.' },
    { afterSection: 'patient-communication', text: 'Excellent bedside manner! Now let\'s handle emergencies and mental health.' },
    { afterSection: 'dialogues', text: 'Real clinical conversations mastered! Let\'s explore how healthcare works across cultures.' },
    { afterSection: 'cultural', text: 'Cultural context complete — now test your triage skills!' },
    { afterSection: 'triage-simulator', text: 'Final stretch — quiz time to certify your medical Spanish!' },
  ],

  personalizedVocab: [
    { spanish: 'Me duele...', english: 'It hurts me... / My ... hurts' },
    { spanish: 'Soy alérgico/a a...', english: 'I am allergic to...' },
    { spanish: 'Tengo antecedentes de...', english: 'I have a history of...' },
    { spanish: 'Necesito una receta para...', english: 'I need a prescription for...' },
    { spanish: 'El diagnóstico es...', english: 'The diagnosis is...' },
    { spanish: 'Los efectos secundarios incluyen...', english: 'The side effects include...' },
  ],

  pronunciationChallenges: [
    { spanish: 'El diagnóstico preliminar indica una infección urinaria', pronunciation: 'ehl dee-ahg-NOHS-tee-koh preh-lee-mee-NAHR een-DEE-kah OO-nah een-fehk-see-OHN oo-ree-NAH-ree-ah', english: 'The preliminary diagnosis indicates a urinary infection', audio: 'el-diagnostico-preliminar-indica-una-infeccion-urinaria', tip: '"Diagnóstico" has the stress on -NÓS-: dee-ahg-NÓS-tee-koh. Many medical terms in Spanish mirror Latin roots.' },
    { spanish: 'La presión arterial sistólica está en ciento cuarenta', pronunciation: 'lah preh-see-OHN ahr-teh-ree-AHL sees-TOH-lee-kah ehs-TAH ehn see-EHN-toh kwah-REHN-tah', english: 'The systolic blood pressure is at one hundred forty', audio: 'la-presion-arterial-sistolica-esta-en-ciento-cuarenta', tip: '"Arterial" stresses the last syllable: ahr-teh-ree-AHL. Medical adjectives often end in -al with final stress.' },
    { spanish: 'Trastorno de estrés postraumático requiere terapia especializada', pronunciation: 'trahs-TOHR-noh deh ehs-TREHS pohs-trow-MAH-tee-koh rreh-kee-EH-reh teh-RAH-pee-ah ehs-peh-see-ah-lee-SAH-dah', english: 'Post-traumatic stress disorder requires specialized therapy', audio: 'trastorno-de-estres-postraumatico-requiere-terapia-especializada', tip: '"Postraumático" is a compound word: pos-trau-MÁ-ti-co. Break long medical terms into syllable groups.' },
    { spanish: 'Administren epinefrina intramuscular de inmediato', pronunciation: 'ahd-mee-NEES-trehn eh-pee-neh-FREE-nah een-trah-moos-koo-LAHR deh een-meh-dee-AH-toh', english: 'Administer intramuscular epinephrine immediately', audio: 'administren-epinefrina-intramuscular-de-inmediato', tip: '"Intramuscular" and "intravenosa" share the prefix "intra-" (within). Learn prefixes to decode medical terms fast.' },
    { spanish: 'La terapia cognitivo-conductual es el tratamiento de primera línea', pronunciation: 'lah teh-RAH-pee-ah kohg-nee-TEE-boh kohn-dook-TWAHL ehs ehl trah-tah-mee-EHN-toh deh pree-MEH-rah LEE-neh-ah', english: 'Cognitive-behavioral therapy is the first-line treatment', audio: 'la-terapia-cognitivo-conductual-es-el-tratamiento-de-primera-linea', tip: '"Cognitivo-conductual" is a hyphenated compound adjective. In clinical settings, these are spoken as one flowing unit.' },
    { spanish: 'El electrocardiograma muestra arritmia ventricular', pronunciation: 'ehl eh-lehk-troh-kahr-dee-oh-GRAH-mah MWEHS-trah ah-RREET-mee-ah behn-tree-koo-LAHR', english: 'The electrocardiogram shows ventricular arrhythmia', audio: 'el-electrocardiograma-muestra-arritmia-ventricular', tip: '"Electrocardiograma" is 8 syllables! Break it: e-lec-tro-car-dio-gra-ma. Practice chunking long medical words.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'anatomy-symptoms', label: 'Anatomy & Symptoms' },
    { id: 'diagnosis-treatment', label: 'Diagnosis & Treatment' },
    { id: 'patient-communication', label: 'Patient Communication' },
    { id: 'emergency-mental-health', label: 'Emergency & Mental Health' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'medical-sorting', label: 'Medical Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'triage-simulator', label: 'Triage Simulator' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'anatomy-symptoms',
      title: 'Anatomy & Symptoms — Anatomía y Síntomas',
      description: 'Learn to identify organs, body systems, and describe symptoms with clinical accuracy.',
      tabs: [
        { label: 'Body & Organs', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'anatomy-symptoms').slice(0, 6) },
        { label: 'Symptoms & Vitals', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'anatomy-symptoms').slice(6) },
      ],
    },
    {
      id: 'diagnosis-treatment',
      title: 'Diagnosis & Treatment — Diagnóstico y Tratamiento',
      description: 'Medical terminology for diagnosing conditions, prescribing medication, and discussing prognoses.',
      tabs: [
        { label: 'Diagnosis & Rx', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'diagnosis-treatment').slice(0, 6) },
        { label: 'Procedures & Recovery', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'diagnosis-treatment').slice(6) },
      ],
    },
    {
      id: 'patient-communication',
      title: 'Patient Communication — Comunicación con el Paciente',
      description: 'Essential phrases for patient interviews, medical history, informed consent, and follow-up care.',
      tabs: [
        { label: 'Intake Questions', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'patient-communication').slice(0, 6) },
        { label: 'Instructions & Follow-up', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'patient-communication').slice(6) },
      ],
    },
    {
      id: 'emergency-mental-health',
      title: 'Emergency & Mental Health — Emergencias y Salud Mental',
      description: 'Critical emergency room protocols, vital signs terminology, psychiatric assessments, and therapy vocabulary.',
      tabs: [
        { label: 'ER & Emergencies', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'emergency-mental-health').slice(0, 6) },
        { label: 'Mental Health', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'emergency-mental-health').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Medical Latin Roots in Spanish',
      content: 'Most medical terms in Spanish come directly from Latin and Greek, making them similar to English medical terms. "Diagnóstico" = diagnosis, "pronóstico" = prognosis, "biopsia" = biopsy. The key difference is pronunciation — Spanish applies its phonetic rules consistently. The stress usually falls on the penultimate syllable unless there\'s an accent mark.',
      example: 'Diagnóstico (dee-ahg-NÓS-tee-koh) | Pronóstico (proh-NÓS-tee-koh) | Biopsia (bee-OHP-see-ah)',
    },
    {
      title: 'Compound Medical Terms',
      content: 'Long medical words are built from prefixes and roots: "intra-" (within), "cardio-" (heart), "neuro-" (nerve), "-itis" (inflammation), "-ectomía" (removal). Break them into chunks: "electrocardiograma" = electro + cardio + grama. Once you learn the building blocks, you can decode almost any medical term.',
      example: 'Intravenosa = intra+venosa | Gastroenteritis = gastro+enter+itis | Apendicectomía = apéndice+ectomía',
    },
    {
      title: 'Formal Register in Clinical Settings',
      content: 'Medical Spanish uses "usted" exclusively with patients. Verbs are conjugated in the third person formal: "¿Tiene dolor?" not "¿Tienes dolor?" Commands use the subjunctive: "Respire profundo" (breathe deeply), "Abra la boca" (open your mouth). This formal register shows respect and professionalism.',
      example: '¿Siente dolor aquí? (Do you feel pain here?) | Acuéstese, por favor. (Lie down, please.)',
      reviewFrom: 'L4.5',
    },
    {
      title: 'Emergency Communication Speed',
      content: 'In emergencies, Spanish medical teams use short, direct commands. Drop unnecessary words: "¡Oxígeno!" instead of "Administren oxígeno al paciente." Common codes: "código rojo" (cardiac arrest), "código azul" (respiratory failure). Practice these phrases at speed — in real emergencies, clear and fast communication saves lives.',
      example: '¡Desfibrilador! | ¡Intubación ya! | ¡Vía aérea despejada! | ¡Pulso débil!',
    },
  ],

  flashcardGroups: [
    {
      key: 'anatomy-symptoms',
      label: 'Anatomy & Symptoms',
      audioKeys: ['el-higado-esta-inflamado', 'los-rinones-filtran-la-sangre', 'la-columna-vertebral-sostiene', 'dolor-agudo-en-el-abdomen', 'dolor-cronico-espalda-baja', 'hinchazon-rodilla-derecha', 'fiebre-alta-no-cede', 'mareos-vision-borrosa', 'nauseas-empeoran-despues-comer', 'presion-arterial-elevada', 'ritmo-cardiaco-irregular', 'sistema-inmunologico-comprometido'],
    },
    {
      key: 'diagnosis-treatment',
      label: 'Diagnosis & Treatment',
      audioKeys: ['diagnostico-preliminar-gastritis', 'recetar-medicamentos-infeccion', 'dosis-recomendada-500mg', 'efectos-secundarios-medicamento', 'contraindicaciones-farmacos', 'pronostico-favorable-tratamiento', 'realizar-biopsia-tejido', 'tratamiento-ambulatorio-fisioterapia', 'analisis-sangre-completo', 'cirugia-minimamente-invasiva', 'antibiotico-amplio-espectro', 'guardar-reposo-absoluto'],
    },
    {
      key: 'patient-emergency',
      label: 'Patient & Emergency',
      audioKeys: ['desde-cuando-estos-sintomas', 'alergico-algun-medicamento', 'hacerle-analisis-laboratorio', 'tomar-medicamento-cada-8-horas', 'codigo-rojo-emergencia-quirofano', 'signos-vitales-estables', 'crisis-de-ansiedad', 'terapia-cognitivo-conductual'],
    },
  ],

  matchPairs: [
    { left: 'El hígado', right: 'The liver' },
    { left: 'Los riñones', right: 'The kidneys' },
    { left: 'Dolor agudo', right: 'Sharp pain' },
    { left: 'Recetar medicamentos', right: 'To prescribe medication' },
    { left: 'Efectos secundarios', right: 'Side effects' },
    { left: 'Signos vitales', right: 'Vital signs' },
    { left: 'Crisis de ansiedad', right: 'Anxiety attack' },
    { left: 'Consentimiento informado', right: 'Informed consent' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Emergency vs. Routine',
      instruction: 'Is this an emergency action or a routine procedure?',
      buckets: ['Emergency 🚑', 'Routine 🏥'],
      items: [
        { text: 'Código rojo en el quirófano', bucket: 'Emergency 🚑' },
        { text: 'Intubación de emergencia', bucket: 'Emergency 🚑' },
        { text: 'Activar código ictus', bucket: 'Emergency 🚑' },
        { text: 'Administrar desfibrilador', bucket: 'Emergency 🚑' },
        { text: 'Cita de seguimiento', bucket: 'Routine 🏥' },
        { text: 'Análisis de sangre completo', bucket: 'Routine 🏥' },
        { text: 'Recetar antiinflamatorio', bucket: 'Routine 🏥' },
        { text: 'Firmar consentimiento informado', bucket: 'Routine 🏥' },
      ],
    },
    {
      title: 'Physical vs. Mental Health',
      instruction: 'Does this term relate to physical or mental health?',
      buckets: ['Physical Health 🫀', 'Mental Health 🧠'],
      items: [
        { text: 'Presión arterial elevada', bucket: 'Physical Health 🫀' },
        { text: 'Biopsia del tejido', bucket: 'Physical Health 🫀' },
        { text: 'Columna vertebral', bucket: 'Physical Health 🫀' },
        { text: 'Cirugía mínimamente invasiva', bucket: 'Physical Health 🫀' },
        { text: 'Crisis de ansiedad', bucket: 'Mental Health 🧠' },
        { text: 'Trastorno de estrés postraumático', bucket: 'Mental Health 🧠' },
        { text: 'Terapia cognitivo-conductual', bucket: 'Mental Health 🧠' },
        { text: 'Depresión clínica', bucket: 'Mental Health 🧠' },
      ],
    },
  ],
  sortSectionId: 'medical-sorting',
  sortTitle: 'Medical Sorting',

  dialogues: [
    {
      id: 'dialogue-er',
      title: 'Emergency Consultation — Hospital General de México',
      location: 'Mexico City',
      lines: [
        { speaker: 'Dra. Ramírez', text: 'Buenas noches, soy la doctora Ramírez. ¿Qué le trae a urgencias esta noche?', audio: '/audio/L8.1/phrases/d1-line1.mp3' },
        { speaker: 'Paciente', text: 'Doctora, tengo un dolor muy fuerte en el pecho que me baja por el brazo izquierdo.', audio: '/audio/L8.1/phrases/d1-line2.mp3' },
        { speaker: 'Dra. Ramírez', text: '¿Desde cuándo presenta estos síntomas? ¿Es la primera vez?', audio: '/audio/L8.1/phrases/d1-line3.mp3' },
        { speaker: 'Paciente', text: 'Empezó hace como dos horas. Nunca me había pasado algo así.', audio: '/audio/L8.1/phrases/d1-line4.mp3' },
        { speaker: 'Dra. Ramírez', text: '¿Es usted alérgico a algún medicamento? ¿Toma alguna medicina actualmente?', audio: '/audio/L8.1/phrases/d1-line5.mp3' },
        { speaker: 'Paciente', text: 'Solo tomo pastillas para la presión. Soy alérgico a la penicilina.', audio: '/audio/L8.1/phrases/d1-line6.mp3', annotations: [{ phrase: 'pastillas para la presión', fromLesson: 'L4.5', note: 'Medication vocabulary from Health & Wellness' }] },
        { speaker: 'Dra. Ramírez', text: 'Entendido. Enfermera, necesitamos un electrocardiograma de inmediato y vía intravenosa con solución salina.', audio: '/audio/L8.1/phrases/d1-line7.mp3' },
        { speaker: 'Enfermera López', text: 'Enseguida, doctora. La presión arterial está en 160 sobre 100. Ritmo cardíaco a 110.', audio: '/audio/L8.1/phrases/d1-line8.mp3' },
        { speaker: 'Dra. Ramírez', text: 'Señor, vamos a hacerle unos análisis de sangre y mantenerlo en observación. No se preocupe, está en buenas manos.', audio: '/audio/L8.1/phrases/d1-line9.mp3' },
        { speaker: 'Paciente', text: 'Gracias, doctora. ¿Cree que es algo grave?', audio: '/audio/L8.1/phrases/d1-line10.mp3' },
        { speaker: 'Dra. Ramírez', text: 'Necesitamos descartar un evento cardíaco. Los resultados nos dirán más. Por ahora, descanse y respire con calma.', audio: '/audio/L8.1/phrases/d1-line11.mp3' },
        { speaker: 'Enfermera López', text: 'Doctora, el electrocardiograma muestra elevación del segmento ST.', audio: '/audio/L8.1/phrases/d1-line12.mp3' },
        { speaker: 'Dra. Ramírez', text: 'Confirmo. Preparen al paciente para cateterismo de urgencia. Avisen a cardiología.', audio: '/audio/L8.1/phrases/d1-line13.mp3' },
        { speaker: 'Paciente', text: '¿Qué significa eso, doctora?', audio: '/audio/L8.1/phrases/d1-line14.mp3' },
        { speaker: 'Dra. Ramírez', text: 'Indica que una arteria del corazón puede estar bloqueada. Vamos a actuar rápido para proteger su corazón. ¿Tiene algún familiar al que podamos llamar?', audio: '/audio/L8.1/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-mental-health',
      title: 'Mental Health Session — Clínica Psicológica, Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Lic. Fernández', text: 'Bienvenida, Camila. ¿Cómo te sentiste esta semana desde nuestra última sesión?', audio: '/audio/L8.1/phrases/d2-line1.mp3' },
        { speaker: 'Camila', text: 'Tuve varios ataques de ansiedad. Sobre todo por las noches, cuando no puedo dormir.', audio: '/audio/L8.1/phrases/d2-line2.mp3' },
        { speaker: 'Lic. Fernández', text: '¿Podés describir qué sentís físicamente durante esos episodios?', audio: '/audio/L8.1/phrases/d2-line3.mp3' },
        { speaker: 'Camila', text: 'Se me acelera el corazón, me tiemblan las manos y siento que no puedo respirar.', audio: '/audio/L8.1/phrases/d2-line4.mp3' },
        { speaker: 'Lic. Fernández', text: 'Esos son síntomas clásicos de una crisis de ansiedad. ¿Pudiste usar la técnica de respiración que practicamos?', audio: '/audio/L8.1/phrases/d2-line5.mp3', annotations: [{ phrase: 'crisis de ansiedad', fromLesson: 'L7.5', note: 'Emotional vocabulary from Psychology & Emotions' }] },
        { speaker: 'Camila', text: 'Lo intenté, pero a veces el miedo es tan fuerte que no puedo concentrarme en nada.', audio: '/audio/L8.1/phrases/d2-line6.mp3' },
        { speaker: 'Lic. Fernández', text: 'Es completamente válido. La terapia cognitivo-conductual nos enseña a identificar los pensamientos que disparan esa ansiedad.', audio: '/audio/L8.1/phrases/d2-line7.mp3' },
        { speaker: 'Camila', text: '¿Como cuáles pensamientos?', audio: '/audio/L8.1/phrases/d2-line8.mp3' },
        { speaker: 'Lic. Fernández', text: 'Por ejemplo, pensamientos catastróficos como "algo terrible va a pasar." Vamos a trabajar en reemplazarlos con pensamientos más realistas.', audio: '/audio/L8.1/phrases/d2-line9.mp3' },
        { speaker: 'Camila', text: '¿Y sobre la medicación? El psiquiatra me recetó sertralina pero me da miedo tomarla.', audio: '/audio/L8.1/phrases/d2-line10.mp3' },
        { speaker: 'Lic. Fernández', text: 'Los efectos secundarios iniciales son leves y temporales. La combinación de terapia y medicación tiene la mejor evidencia científica para el trastorno de ansiedad.', audio: '/audio/L8.1/phrases/d2-line11.mp3' },
        { speaker: 'Camila', text: 'Está bien. Voy a confiar en el proceso. ¿Cuándo es la próxima cita?', audio: '/audio/L8.1/phrases/d2-line12.mp3' },
        { speaker: 'Lic. Fernández', text: 'La semana que viene, misma hora. Y recordá: si tenés una crisis fuera del horario, podés llamar a la línea de crisis las 24 horas.', audio: '/audio/L8.1/phrases/d2-line13.mp3' },
        { speaker: 'Camila', text: 'Gracias, licenciada. Me hace bien hablar de esto.', audio: '/audio/L8.1/phrases/d2-line14.mp3' },
        { speaker: 'Lic. Fernández', text: 'Para eso estamos. El primer paso siempre es el más difícil, y vos ya lo diste.', audio: '/audio/L8.1/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience a real emergency room consultation at Hospital General de México and sit in on a mental health therapy session at a psychology clinic in Buenos Aires.',

  culturalNotes: [
    {
      title: 'Healthcare Systems Across Latin America',
      content: 'Latin American countries have diverse healthcare systems. Mexico\'s IMSS and ISSSTE provide public coverage to workers, while Cuba offers universal free healthcare. Argentina\'s "obras sociales" (union-based health plans) coexist with private "prepagas." Understanding these systems is crucial for medical interpreters and healthcare workers. When a patient says "no tengo seguro" (I don\'t have insurance), the clinical approach may change entirely — ask about access to medication and follow-up care.',
    },
    {
      title: 'Folk Medicine & Modern Healthcare',
      content: 'Many patients blend traditional remedies with modern medicine. "Curanderos" (folk healers), "sobadores" (traditional massage therapists), and herbal remedies like "manzanilla" (chamomile), "árnica," and "sábila" (aloe vera) are widely trusted. A culturally competent healthcare provider asks "¿Está tomando algo natural o remedios caseros?" (Are you taking anything natural or home remedies?) without judgment — some herbs interact with pharmaceuticals, making this clinically important, not just cultural sensitivity.',
    },
    {
      title: 'The Role of Medical Interpreters',
      content: 'In the U.S., over 25 million Spanish speakers have limited English proficiency. Medical interpreters are legally required in healthcare settings under Title VI of the Civil Rights Act. A mistranslation can be life-threatening — the famous case of "intoxicado" being translated as "intoxicated" instead of "nauseated" led to a $71 million malpractice settlement. Professional medical interpreters must know both clinical terminology and cultural context, making Medical Spanish a high-demand specialization.',
    },
  ],
  culturalGradient: 'from-rose-50 to-red-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El hígado" refers to which organ?', options: ['The heart', 'The liver', 'The lungs', 'The kidneys'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La presión ___ está elevada" (blood/arterial)', answer: 'arterial' },
    { id: 3, type: 'mc', text: '"Recetar medicamentos" means:', options: ['To buy medication', 'To prescribe medication', 'To take medication', 'To refuse medication'], answer: 1 },
    { id: 4, type: 'tf', text: '"Efectos secundarios" are side effects of a medication.', answer: true },
    { id: 5, type: 'mc', text: 'What does "¿Desde cuándo presenta estos síntomas?" ask?', options: ['Where does it hurt?', 'What medication do you take?', 'How long have you had these symptoms?', 'Are you allergic to anything?'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Código ___, tenemos una emergencia" (red)', answer: 'rojo' },
    { id: 7, type: 'mc', text: '"Trastorno de estrés postraumático" is the Spanish term for:', options: ['Bipolar disorder', 'PTSD', 'OCD', 'ADHD'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does the EKG show?', options: ['Normal rhythm', 'ST segment elevation', 'Low heart rate', 'Atrial fibrillation'], answer: 1 },
    { id: 9, type: 'tf', text: '"Consentimiento informado" means the patient must sign before certain procedures.', answer: true },
    { id: 10, type: 'mc', text: '"La dosis recomendada" translates to:', options: ['The maximum dose', 'The recommended dose', 'The initial dose', 'The lethal dose'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "Los signos ___ están estables" (vital)', answer: 'vitales' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what therapy approach does Lic. Fernández use?', options: ['Psychoanalysis', 'Cognitive-behavioral therapy', 'Hypnotherapy', 'Art therapy'], answer: 1 },
    { id: 13, type: 'mc', text: '"Contraindicaciones" refers to:', options: ['Extra benefits', 'Reasons NOT to use a medication', 'Dosage instructions', 'Allergic reactions'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, "curanderos" are folk healers who blend traditional and modern medicine.', answer: true },
    { id: 15, type: 'mc', text: '"El tratamiento ambulatorio" means:', options: ['Emergency treatment', 'Outpatient treatment', 'Surgical treatment', 'Ambulance treatment'], answer: 1 },
  ],

  audioBase: '/audio/L8.1/phrases',

  uniqueActivity: {
    id: 'TriageSimulatorL81',
    sectionId: 'triage-simulator',
    sectionColor: 'bg-rose-50/40',
    sectionBorder: 'border-rose-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'anatomy-symptoms': { bg: 'bg-red-50/30', border: 'border-red-100' },
    'diagnosis-treatment': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'patient-communication': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'emergency-mental-health': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'medical-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'triage-simulator': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
