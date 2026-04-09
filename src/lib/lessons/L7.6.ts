import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Diplomatic Language (12) ===
  { spanish: 'Proponemos que ambas partes se comprometan a un alto el fuego inmediato', english: 'We propose that both parties commit to an immediate ceasefire', pronunciation: 'proh-poh-NEH-mohs keh AHM-bahs PAHR-tehs seh kohm-proh-MEH-tahn ah oon AHL-toh ehl FWEH-goh een-meh-dee-AH-toh', category: 'diplomatic-language', audio: 'proponemos-que-ambas' },
  { spanish: 'Instamos a la comunidad internacional a tomar medidas urgentes', english: 'We urge the international community to take urgent measures', pronunciation: 'eens-TAH-mohs ah lah koh-moo-nee-DAHD een-tehr-nah-see-oh-NAHL ah toh-MAHR meh-DEE-dahs oor-HEHN-tehs', category: 'diplomatic-language', audio: 'instamos-a-la-comunidad' },
  { spanish: 'Exhortamos a las partes a retomar las negociaciones de buena fe', english: 'We exhort the parties to resume negotiations in good faith', pronunciation: 'ehks-ohr-TAH-mohs ah lahs PAHR-tehs ah rreh-toh-MAHR lahs neh-goh-see-ah-see-OH-nehs deh BWEH-nah feh', category: 'diplomatic-language', audio: 'exhortamos-a-las-partes' },
  { spanish: 'Hacemos un llamado a la paz y al diálogo como única vía de solución', english: 'We make a call for peace and dialogue as the only path to a solution', pronunciation: 'ah-SEH-mohs oon yah-MAH-doh ah lah pahs ee ahl dee-AH-loh-goh KOH-moh OO-nee-kah BEE-ah deh soh-loo-see-OHN', category: 'diplomatic-language', audio: 'hacemos-un-llamado' },
  { spanish: 'El comunicado conjunto establece los términos del acuerdo bilateral', english: 'The joint communiqué establishes the terms of the bilateral agreement', pronunciation: 'ehl koh-moo-nee-KAH-doh kohn-HOON-toh ehs-tah-BLEH-seh lohs TEHR-mee-nohs dehl ah-KWEHR-doh bee-lah-teh-RAHL', category: 'diplomatic-language', audio: 'el-comunicado-conjunto' },
  { spanish: 'La delegación expresa su más enérgica condena ante los hechos', english: 'The delegation expresses its strongest condemnation of the events', pronunciation: 'lah deh-leh-gah-see-OHN ehks-PREH-sah soo mahs eh-NEHR-hee-kah kohn-DEH-nah AHN-teh lohs EH-chohs', category: 'diplomatic-language', audio: 'la-delegacion-expresa' },
  { spanish: 'Reafirmamos nuestro compromiso con los principios del derecho internacional', english: 'We reaffirm our commitment to the principles of international law', pronunciation: 'rreh-ah-feer-MAH-mohs NWEHS-troh kohm-proh-MEE-soh kohn lohs preen-SEE-pee-ohs dehl deh-REH-choh een-tehr-nah-see-oh-NAHL', category: 'diplomatic-language', audio: 'reafirmamos-nuestro' },
  { spanish: 'La resolución fue adoptada por unanimidad del Consejo de Seguridad', english: 'The resolution was adopted unanimously by the Security Council', pronunciation: 'lah rreh-soh-loo-see-OHN fweh ah-dohp-TAH-dah pohr oo-nah-nee-mee-DAHD dehl kohn-SEH-hoh deh seh-goo-ree-DAHD', category: 'diplomatic-language', audio: 'la-resolucion-fue-adoptada' },
  { spanish: 'Solicitamos una sesión extraordinaria para abordar esta crisis humanitaria', english: 'We request an extraordinary session to address this humanitarian crisis', pronunciation: 'soh-lee-see-TAH-mohs OO-nah seh-see-OHN ehks-trah-ohr-dee-NAH-ree-ah PAH-rah ah-bohr-DAHR EHS-tah KREE-sees oo-mah-nee-TAH-ree-ah', category: 'diplomatic-language', audio: 'solicitamos-una-sesion' },
  { spanish: 'La soberanía de cada nación debe ser respetada sin excepciones', english: 'The sovereignty of each nation must be respected without exceptions', pronunciation: 'lah soh-beh-rah-NEE-ah deh KAH-dah nah-see-OHN DEH-beh sehr rrehs-peh-TAH-dah seen ehks-sehp-see-OH-nehs', category: 'diplomatic-language', audio: 'la-soberania-de-cada' },
  { spanish: 'Abogamos por una solución pacífica y duradera al conflicto', english: 'We advocate for a peaceful and lasting solution to the conflict', pronunciation: 'ah-boh-GAH-mohs pohr OO-nah soh-loo-see-OHN pah-SEE-fee-kah ee doo-rah-DEH-rah ahl kohn-FLEEK-toh', category: 'diplomatic-language', audio: 'abogamos-por-una' },
  { spanish: 'Las partes firmantes se comprometen a cumplir los términos acordados', english: 'The signing parties commit to fulfilling the agreed terms', pronunciation: 'lahs PAHR-tehs feer-MAHN-tehs seh kohm-proh-MEH-tehn ah koom-PLEER lohs TEHR-mee-nohs ah-kohr-DAH-dohs', category: 'diplomatic-language', audio: 'las-partes-firmantes' },

  // === Negotiation Mastery (12) ===
  { spanish: 'Estamos dispuestos a hacer concesiones si la otra parte muestra la misma voluntad', english: 'We are willing to make concessions if the other party shows the same willingness', pronunciation: 'ehs-TAH-mohs dees-PWEHS-tohs ah ah-SEHR kohn-seh-see-OH-nehs see lah OH-trah PAHR-teh MWEHS-trah lah MEES-mah boh-loon-TAHD', category: 'negotiation-mastery', audio: 'estamos-dispuestos-a-hacer' },
  { spanish: '¿Cuál sería un punto medio aceptable para ambas delegaciones?', english: 'What would be an acceptable middle ground for both delegations?', pronunciation: 'kwahl seh-REE-ah oon POON-toh MEH-dee-oh ah-sehp-TAH-bleh PAH-rah AHM-bahs deh-leh-gah-see-OH-nehs', category: 'negotiation-mastery', audio: 'cual-seria-un-punto' },
  { spanish: 'La propuesta es mutuamente beneficiosa para todas las partes involucradas', english: 'The proposal is mutually beneficial for all parties involved', pronunciation: 'lah proh-PWEHS-tah ehs moo-too-ah-MEHN-teh beh-neh-fee-see-OH-sah PAH-rah TOH-dahs lahs PAHR-tehs een-boh-loo-KRAH-dahs', category: 'negotiation-mastery', audio: 'la-propuesta-es-mutuamente' },
  { spanish: 'Necesitamos garantías verificables antes de avanzar con el acuerdo', english: 'We need verifiable guarantees before moving forward with the agreement', pronunciation: 'neh-seh-see-TAH-mohs gah-rahn-TEE-ahs beh-ree-fee-KAH-blehs AHN-tehs deh ah-bahn-SAHR kohn ehl ah-KWEHR-doh', category: 'negotiation-mastery', audio: 'necesitamos-garantias' },
  { spanish: 'Proponemos un período de prueba de seis meses con revisiones trimestrales', english: 'We propose a six-month trial period with quarterly reviews', pronunciation: 'proh-poh-NEH-mohs oon peh-REE-oh-doh deh PRWEH-bah deh seys MEH-sehs kohn rreh-bee-see-OH-nehs tree-mehs-TRAH-lehs', category: 'negotiation-mastery', audio: 'proponemos-un-periodo' },
  { spanish: 'Esta cláusula es innegociable para nuestra delegación', english: 'This clause is non-negotiable for our delegation', pronunciation: 'EHS-tah KLOW-soo-lah ehs een-neh-goh-see-AH-bleh PAH-rah NWEHS-trah deh-leh-gah-see-OHN', category: 'negotiation-mastery', audio: 'esta-clausula-es' },
  { spanish: 'Sugerimos redactar un memorándum de entendimiento como primer paso', english: 'We suggest drafting a memorandum of understanding as a first step', pronunciation: 'soo-heh-REE-mohs rreh-dahk-TAHR oon meh-moh-RAHN-doom deh ehn-tehn-dee-mee-EHN-toh KOH-moh pree-MEHR PAH-soh', category: 'negotiation-mastery', audio: 'sugerimos-redactar' },
  { spanish: 'Las condiciones previas deben cumplirse antes de iniciar la segunda fase', english: 'The preconditions must be met before starting the second phase', pronunciation: 'lahs kohn-dee-see-OH-nehs PREH-bee-ahs DEH-behn koom-PLEER-seh AHN-tehs deh ee-nee-see-AHR lah seh-GOON-dah FAH-seh', category: 'negotiation-mastery', audio: 'las-condiciones-previas' },
  { spanish: 'Respetamos su posición, pero consideramos que hay margen para el diálogo', english: 'We respect your position, but we believe there is room for dialogue', pronunciation: 'rrehs-peh-TAH-mohs soo poh-see-see-OHN PEH-roh kohn-see-deh-RAH-mohs keh ay MAHR-hehn PAH-rah ehl dee-AH-loh-goh', category: 'negotiation-mastery', audio: 'respetamos-su-posicion' },
  { spanish: 'El acuerdo marco establece los principios generales de cooperación', english: 'The framework agreement establishes the general principles of cooperation', pronunciation: 'ehl ah-KWEHR-doh MAHR-koh ehs-tah-BLEH-seh lohs preen-SEE-pee-ohs heh-neh-RAH-lehs deh koh-oh-peh-rah-see-OHN', category: 'negotiation-mastery', audio: 'el-acuerdo-marco' },
  { spanish: 'Ambas partes se beneficiarían de un enfoque más flexible', english: 'Both parties would benefit from a more flexible approach', pronunciation: 'AHM-bahs PAHR-tehs seh beh-neh-fee-see-ah-REE-ahn deh oon ehn-FOH-keh mahs flehk-SEE-bleh', category: 'negotiation-mastery', audio: 'ambas-partes-se-beneficiarian' },
  { spanish: 'Dejemos de lado las diferencias y centrémonos en lo que nos une', english: 'Let us set aside differences and focus on what unites us', pronunciation: 'deh-HEH-mohs deh LAH-doh lahs dee-feh-REHN-see-ahs ee sehn-TREH-moh-nohs ehn loh keh nohs OO-neh', category: 'negotiation-mastery', audio: 'dejemos-de-lado' },

  // === Conflict Mediation (12) ===
  { spanish: 'Entiendo la perspectiva de ambas partes y creo que hay puntos en común', english: 'I understand both parties\' perspectives and believe there are common points', pronunciation: 'ehn-tee-EHN-doh lah pehr-spehk-TEE-bah deh AHM-bahs PAHR-tehs ee KREH-oh keh ay POON-tohs ehn koh-MOON', category: 'conflict-mediation', audio: 'entiendo-la-perspectiva' },
  { spanish: '¿Podemos encontrar un terreno común que satisfaga a todos?', english: 'Can we find common ground that satisfies everyone?', pronunciation: 'poh-DEH-mohs ehn-kohn-TRAHR oon teh-RREH-noh koh-MOON keh sah-tees-FAH-gah ah TOH-dohs', category: 'conflict-mediation', audio: 'podemos-encontrar-un' },
  { spanish: 'Propongo una tregua para que ambas partes reflexionen con calma', english: 'I propose a truce so that both parties can reflect calmly', pronunciation: 'proh-POHN-goh OO-nah TREH-gwah PAH-rah keh AHM-bahs PAHR-tehs rreh-flehk-see-OH-nehn kohn KAHL-mah', category: 'conflict-mediation', audio: 'propongo-una-tregua' },
  { spanish: 'Busquemos una solución de compromiso que respete los intereses de todos', english: 'Let\'s seek a compromise solution that respects everyone\'s interests', pronunciation: 'boos-KEH-mohs OO-nah soh-loo-see-OHN deh kohm-proh-MEE-soh keh rrehs-PEH-teh lohs een-teh-REH-sehs deh TOH-dohs', category: 'conflict-mediation', audio: 'busquemos-una-solucion' },
  { spanish: 'Es fundamental que cada parte escuche sin interrumpir a la otra', english: 'It is fundamental that each party listen without interrupting the other', pronunciation: 'ehs foon-dah-mehn-TAHL keh KAH-dah PAHR-teh ehs-KOO-cheh seen een-teh-rroom-PEER ah lah OH-trah', category: 'conflict-mediation', audio: 'es-fundamental-que-cada' },
  { spanish: 'La mediación busca restaurar la comunicación entre las partes en conflicto', english: 'Mediation seeks to restore communication between the parties in conflict', pronunciation: 'lah meh-dee-ah-see-OHN BOOS-kah rrehs-tow-RAHR lah koh-moo-nee-kah-see-OHN EHN-treh lahs PAHR-tehs ehn kohn-FLEEK-toh', category: 'conflict-mediation', audio: 'la-mediacion-busca' },
  { spanish: 'Reconozcamos que ambas partes tienen preocupaciones legítimas', english: 'Let us acknowledge that both parties have legitimate concerns', pronunciation: 'rreh-koh-nohs-KAH-mohs keh AHM-bahs PAHR-tehs tee-EH-nehn preh-oh-koo-pah-see-OH-nehs leh-HEE-tee-mahs', category: 'conflict-mediation', audio: 'reconozcamos-que-ambas' },
  { spanish: 'La justicia restaurativa se centra en reparar el daño, no en castigar', english: 'Restorative justice focuses on repairing harm, not punishing', pronunciation: 'lah hoos-TEE-see-ah rrehs-tow-rah-TEE-bah seh SEHN-trah ehn rreh-pah-RAHR ehl DAH-nyoh noh ehn kahs-tee-GAHR', category: 'conflict-mediation', audio: 'la-justicia-restaurativa' },
  { spanish: 'Antes de buscar soluciones, necesitamos entender las causas del conflicto', english: 'Before seeking solutions, we need to understand the causes of the conflict', pronunciation: 'AHN-tehs deh boos-KAHR soh-loo-see-OH-nehs neh-seh-see-TAH-mohs ehn-tehn-DEHR lahs KOW-sahs dehl kohn-FLEEK-toh', category: 'conflict-mediation', audio: 'antes-de-buscar' },
  { spanish: 'El diálogo es siempre preferible a la confrontación', english: 'Dialogue is always preferable to confrontation', pronunciation: 'ehl dee-AH-loh-goh ehs see-EHM-preh preh-feh-REE-bleh ah lah kohn-frohn-tah-see-OHN', category: 'conflict-mediation', audio: 'el-dialogo-es-siempre' },
  { spanish: 'Les pido que mantengan el respeto mutuo durante esta sesión', english: 'I ask you to maintain mutual respect during this session', pronunciation: 'lehs PEE-doh keh mahn-TEHN-gahn ehl rrehs-PEH-toh MOO-too-oh doo-RAHN-teh EHS-tah seh-see-OHN', category: 'conflict-mediation', audio: 'les-pido-que-mantengan' },
  { spanish: 'Un mediador imparcial puede ayudar a desbloquear las negociaciones', english: 'An impartial mediator can help unblock the negotiations', pronunciation: 'oon meh-dee-ah-DOHR eem-pahr-see-AHL PWEH-deh ah-yoo-DAHR ah dehs-bloh-keh-AHR lahs neh-goh-see-ah-see-OH-nehs', category: 'conflict-mediation', audio: 'un-mediador-imparcial' },

  // === International Relations (12) ===
  { spanish: 'El tratado bilateral fue ratificado por los parlamentos de ambos países', english: 'The bilateral treaty was ratified by the parliaments of both countries', pronunciation: 'ehl trah-TAH-doh bee-lah-teh-RAHL fweh rrah-tee-fee-KAH-doh pohr lohs pahr-lah-MEHN-tohs deh AHM-bohs pah-EE-sehs', category: 'international-relations', audio: 'el-tratado-bilateral' },
  { spanish: 'La cumbre de líderes mundiales abordará el cambio climático y la migración', english: 'The world leaders\' summit will address climate change and migration', pronunciation: 'lah KOOM-breh deh LEE-deh-rehs moon-dee-AH-lehs ah-bohr-dah-RAH ehl KAHM-bee-oh klee-MAH-tee-koh ee lah mee-grah-see-OHN', category: 'international-relations', audio: 'la-cumbre-de-lideres' },
  { spanish: 'Las sanciones económicas buscan presionar sin recurrir a la fuerza militar', english: 'Economic sanctions seek to pressure without resorting to military force', pronunciation: 'lahs sahn-see-OH-nehs eh-koh-NOH-mee-kahs BOOS-kahn preh-see-oh-NAHR seen rreh-koo-RREER ah lah FWEHR-sah mee-lee-TAHR', category: 'international-relations', audio: 'las-sanciones-economicas' },
  { spanish: 'El derecho internacional humanitario protege a los civiles en zonas de conflicto', english: 'International humanitarian law protects civilians in conflict zones', pronunciation: 'ehl deh-REH-choh een-tehr-nah-see-oh-NAHL oo-mah-nee-TAH-ree-oh proh-TEH-heh ah lohs see-BEE-lehs ehn SOH-nahs deh kohn-FLEEK-toh', category: 'international-relations', audio: 'el-derecho-internacional' },
  { spanish: 'La Asamblea General de las Naciones Unidas se reúne cada septiembre en Nueva York', english: 'The UN General Assembly meets every September in New York', pronunciation: 'lah ah-sahm-BLEH-ah heh-neh-RAHL deh lahs nah-see-OH-nehs oo-NEE-dahs seh rreh-OO-neh KAH-dah sehp-tee-EHM-breh ehn NWEH-bah yohrk', category: 'international-relations', audio: 'la-asamblea-general' },
  { spanish: 'El embargo comercial ha tenido consecuencias devastadoras para la población civil', english: 'The trade embargo has had devastating consequences for the civilian population', pronunciation: 'ehl ehm-BAHR-goh koh-mehr-see-AHL ah teh-NEE-doh kohn-seh-KWEHN-see-ahs deh-bahs-tah-DOH-rahs PAH-rah lah poh-blah-see-OHN see-BEEL', category: 'international-relations', audio: 'el-embargo-comercial' },
  { spanish: 'Los acuerdos de paz de Colombia representan un hito en la diplomacia regional', english: 'The Colombian peace accords represent a milestone in regional diplomacy', pronunciation: 'lohs ah-KWEHR-dohs deh pahs deh koh-LOHM-bee-ah rreh-preh-SEHN-tahn oon EE-toh ehn lah dee-ploh-MAH-see-ah rreh-hee-oh-NAHL', category: 'international-relations', audio: 'los-acuerdos-de-paz' },
  { spanish: 'La diplomacia preventiva busca evitar los conflictos antes de que escalen', english: 'Preventive diplomacy seeks to avoid conflicts before they escalate', pronunciation: 'lah dee-ploh-MAH-see-ah preh-behn-TEE-bah BOOS-kah eh-bee-TAHR lohs kohn-FLEEK-tohs AHN-tehs deh keh ehs-KAH-lehn', category: 'international-relations', audio: 'la-diplomacia-preventiva' },
  { spanish: 'Las organizaciones no gubernamentales desempeñan un papel crucial en la ayuda humanitaria', english: 'Non-governmental organizations play a crucial role in humanitarian aid', pronunciation: 'lahs ohr-gah-nee-sah-see-OH-nehs noh goh-behr-nah-mehn-TAH-lehs deh-sehm-PEH-nyahn oon pah-PEHL kroo-see-AHL ehn lah ah-YOO-dah oo-mah-nee-TAH-ree-ah', category: 'international-relations', audio: 'las-organizaciones-no' },
  { spanish: 'El multilateralismo es esencial para abordar los desafíos globales del siglo XXI', english: 'Multilateralism is essential for addressing the global challenges of the 21st century', pronunciation: 'ehl mool-tee-lah-teh-rah-LEES-moh ehs eh-sehn-see-AHL PAH-rah ah-bohr-DAHR lohs deh-sah-FEE-ohs gloh-BAH-lehs dehl SEE-gloh beyn-tee-OO-noh', category: 'international-relations', audio: 'el-multilateralismo-es' },
  { spanish: 'La autodeterminación de los pueblos es un principio fundamental de la carta de la ONU', english: 'The self-determination of peoples is a fundamental principle of the UN charter', pronunciation: 'lah ow-toh-deh-tehr-mee-nah-see-OHN deh lohs PWEH-blohs ehs oon preen-SEE-pee-oh foon-dah-mehn-TAHL deh lah KAHR-tah deh lah oh-NOO', category: 'international-relations', audio: 'la-autodeterminacion' },
  { spanish: 'Los cascos azules son las fuerzas de paz de las Naciones Unidas', english: 'Blue helmets are the United Nations peacekeeping forces', pronunciation: 'lohs KAHS-kohs ah-SOO-lehs sohn lahs FWEHR-sahs deh pahs deh lahs nah-see-OH-nehs oo-NEE-dahs', category: 'international-relations', audio: 'los-cascos-azules' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L76PhraseByAudio = phraseByAudio

// === PEACE TABLE (unique activity) ===

export interface PeaceTableChallenge {
  conflict: string
  english: string
  correctResponse: string
  options: string[]
}

export const PEACE_TABLE_CHALLENGES: PeaceTableChallenge[] = [
  {
    conflict: 'Dos países vecinos disputan el control de un río fronterizo que provee agua a ambas naciones.',
    english: 'Two neighboring countries dispute control of a border river that provides water to both nations.',
    correctResponse: 'Proponemos un acuerdo de gestión compartida del recurso hídrico con supervisión internacional.',
    options: ['Proponemos un acuerdo de gestión compartida del recurso hídrico con supervisión internacional.', 'Un país debería ceder todos sus derechos al otro.', 'Deberíamos construir un muro en la frontera.', 'Que cada país use el agua sin coordinarse.'],
  },
  {
    conflict: 'Un grupo étnico minoritario exige mayor autonomía dentro de un estado centralizado.',
    english: 'An ethnic minority group demands greater autonomy within a centralized state.',
    correctResponse: '¿Podemos encontrar un terreno común que respete tanto la integridad territorial como los derechos del grupo?',
    options: ['La minoría debe aceptar las reglas sin cuestionar.', '¿Podemos encontrar un terreno común que respete tanto la integridad territorial como los derechos del grupo?', 'La independencia total es la única solución.', 'Ignoremos el problema hasta que desaparezca.'],
  },
  {
    conflict: 'Una empresa multinacional contamina un río que cruza tres países diferentes.',
    english: 'A multinational corporation pollutes a river that crosses three different countries.',
    correctResponse: 'Instamos a las tres naciones a formar una comisión conjunta que exija responsabilidad ambiental a la empresa.',
    options: ['Solo el país donde está la fábrica debe actuar.', 'La empresa tiene derecho a operar como quiera.', 'Instamos a las tres naciones a formar una comisión conjunta que exija responsabilidad ambiental a la empresa.', 'Cerremos la empresa inmediatamente sin diálogo.'],
  },
  {
    conflict: 'Dos comunidades vecinas están en conflicto por el uso de una tierra sagrada.',
    english: 'Two neighboring communities are in conflict over the use of a sacred land.',
    correctResponse: 'Reconozcamos que ambas partes tienen preocupaciones legítimas y busquemos un acuerdo de uso compartido respetuoso.',
    options: ['La comunidad más grande debería ganar.', 'Vendamos la tierra a un tercero.', 'Reconozcamos que ambas partes tienen preocupaciones legítimas y busquemos un acuerdo de uso compartido respetuoso.', 'Dejemos que los tribunales decidan sin consultar a las comunidades.'],
  },
  {
    conflict: 'Un país impone aranceles altos a las importaciones de su socio comercial principal.',
    english: 'A country imposes high tariffs on imports from its main trading partner.',
    correctResponse: 'Estamos dispuestos a hacer concesiones si la otra parte muestra la misma voluntad de reducir barreras comerciales.',
    options: ['Respondamos con aranceles aún más altos.', 'Cortemos todas las relaciones diplomáticas.', 'Aceptemos los aranceles sin negociar.', 'Estamos dispuestos a hacer concesiones si la otra parte muestra la misma voluntad de reducir barreras comerciales.'],
  },
  {
    conflict: 'Miles de refugiados llegan a la frontera de un país que no tiene capacidad para recibirlos a todos.',
    english: 'Thousands of refugees arrive at the border of a country that doesn\'t have the capacity to receive them all.',
    correctResponse: 'Hacemos un llamado a la comunidad internacional para compartir la responsabilidad y coordinar la ayuda humanitaria.',
    options: ['Cerremos la frontera completamente.', 'Hacemos un llamado a la comunidad internacional para compartir la responsabilidad y coordinar la ayuda humanitaria.', 'Dejemos que entren todos sin control.', 'Esto no es nuestro problema.'],
  },
  {
    conflict: 'Una potencia mundial amenaza con intervenir militarmente en un conflicto regional.',
    english: 'A world power threatens military intervention in a regional conflict.',
    correctResponse: 'Abogamos por una solución pacífica y exhortamos a todas las partes a resolver sus diferencias mediante el diálogo.',
    options: ['La intervención militar es la mejor opción.', 'Dejemos que la potencia haga lo que quiera.', 'Abogamos por una solución pacífica y exhortamos a todas las partes a resolver sus diferencias mediante el diálogo.', 'No nos involucremos en absoluto.'],
  },
]

// === LESSON DATA ===

export const L76Data: LessonData = {
  id: 'L7.6',
  hero: {
    lessonId: 'L7.6',
    title: 'Diplomacy & Conflict Resolution',
    subtitle: 'The language of peace, negotiation, and international cooperation',
    description: 'Master the formal register of diplomacy, negotiation strategy, conflict mediation, and international relations. From UN resolutions to community mediations, learn to navigate complex disputes with precision and grace in Spanish.',
    image: '/images/L7.6/L7.6.jpg',
    gradient: 'from-blue-800/65 via-indigo-700/55 to-violet-700/65',
    accentColor: 'blue-200',
  },

  objectives: [
    { icon: '🕊️', title: 'Diplomatic Language', desc: 'Use formal diplomatic register: proposals, communiqués, condemnations, and calls for peace.' },
    { icon: '🤝', title: 'Negotiation Mastery', desc: 'Navigate complex negotiations: concessions, counterproposals, framework agreements, and non-negotiables.' },
    { icon: '⚖️', title: 'Conflict Mediation', desc: 'Mediate disputes: find common ground, propose truces, and restore communication between parties.' },
    { icon: '🌍', title: 'International Relations', desc: 'Discuss treaties, sanctions, summits, humanitarian law, and multilateralism with precision.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.5', label: 'Professional Communication', detail: 'L5.5 taught formal professional language. Now elevate that formality to the diplomatic and international level.' },
    { fromLesson: 'L5.4', label: 'Argumentation', detail: 'L5.4 introduced structured argumentation. Now apply those skills in high-stakes negotiations and mediations.' },
    { fromLesson: 'L6.8', label: 'Rhetoric & Persuasion', detail: 'L6.8 taught rhetorical techniques. Now use persuasion in the most consequential arena: diplomacy and peace.' },
  ],

  sectionTransitions: [
    { afterSection: 'diplomatic-language', text: 'You speak the language of diplomacy! Now let\'s master the art of negotiation.' },
    { afterSection: 'negotiation-mastery', text: 'You can negotiate! Let\'s learn how to mediate conflicts between opposing parties.' },
    { afterSection: 'conflict-mediation', text: 'Mediation skills acquired! Now let\'s understand the vocabulary of international relations.' },
    { afterSection: 'dialogues', text: 'Diplomatic conversations explored! Let\'s discover how conflict resolution works across cultures.' },
    { afterSection: 'cultural', text: 'Cultural perspectives understood! Now test your diplomatic skills at the Peace Table.' },
    { afterSection: 'peace-table', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Proponemos que...', english: 'We propose that...' },
    { spanish: 'Instamos a...', english: 'We urge...' },
    { spanish: 'Estamos dispuestos a...', english: 'We are willing to...' },
    { spanish: '¿Podemos encontrar un terreno común?', english: 'Can we find common ground?' },
    { spanish: 'Hacemos un llamado a la paz...', english: 'We call for peace...' },
    { spanish: 'El tratado bilateral...', english: 'The bilateral treaty...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Exhortamos a las partes a retomar las negociaciones de buena fe', pronunciation: 'ehks-ohr-TAH-mohs ah lahs PAHR-tehs ah rreh-toh-MAHR lahs neh-goh-see-ah-see-OH-nehs deh BWEH-nah feh', english: 'We exhort the parties to resume negotiations in good faith', audio: 'exhortamos-a-las-partes-a-retomar-las-negociaciones-de-buena-fe', tip: '"Exhortamos" starts with an aspirated "eks" — the "x" before a consonant creates a soft "ks" sound. "Buena fe" (good faith) is a fundamental diplomatic concept; deliver it with gravitas.' },
    { spanish: 'Hacemos un llamado a la paz y al diálogo como única vía de solución', pronunciation: 'ah-SEH-mohs oon yah-MAH-doh ah lah pahs ee ahl dee-AH-loh-goh KOH-moh OO-nee-kah BEE-ah deh soh-loo-see-OHN', english: 'We make a call for peace and dialogue as the only path to a solution', audio: 'hacemos-un-llamado-a-la-paz-y-al-dialogo-como-unica-via-de-solucion', tip: 'This is one of the most common diplomatic phrases. "Llamado" carries the weight of a formal plea. The phrase should flow with measured authority.' },
    { spanish: 'La propuesta es mutuamente beneficiosa para todas las partes involucradas', pronunciation: 'lah proh-PWEHS-tah ehs moo-too-ah-MEHN-teh beh-neh-fee-see-OH-sah PAH-rah TOH-dahs lahs PAHR-tehs een-boh-loo-KRAH-dahs', english: 'The proposal is mutually beneficial for all parties involved', audio: 'la-propuesta-es-mutuamente-beneficiosa-para-todas-las-partes-involucradas', tip: '"Mutuamente beneficiosa" — this five-word phrase is the golden language of win-win diplomacy. Practice it until it flows naturally: moo-too-ah-MEHN-teh beh-neh-fee-see-OH-sah.' },
    { spanish: 'El derecho internacional humanitario protege a los civiles en zonas de conflicto', pronunciation: 'ehl deh-REH-choh een-tehr-nah-see-oh-NAHL oo-mah-nee-TAH-ree-oh proh-TEH-heh ah lohs see-BEE-lehs ehn SOH-nahs deh kohn-FLEEK-toh', english: 'International humanitarian law protects civilians in conflict zones', audio: 'el-derecho-internacional-humanitario-protege-a-los-civiles-en-zonas-de-conflicto', tip: 'This long phrase is standard UN language. Break it into chunks: "el derecho internacional / humanitario / protege a los civiles / en zonas de conflicto." Deliver each chunk with a micro-pause.' },
    { spanish: 'Busquemos una solución de compromiso que respete los intereses de todos', pronunciation: 'boos-KEH-mohs OO-nah soh-loo-see-OHN deh kohm-proh-MEE-soh keh rrehs-PEH-teh lohs een-teh-REH-sehs deh TOH-dohs', english: 'Let\'s seek a compromise solution that respects everyone\'s interests', audio: 'busquemos-una-solucion-de-compromiso-que-respete-los-intereses-de-todos', tip: '"Solución de compromiso" is key mediation vocabulary. Note that "compromiso" in Spanish means commitment/compromise, not the English false cognate "to compromise" (which means "comprometer" in Spanish).' },
    { spanish: 'Los acuerdos de paz de Colombia representan un hito en la diplomacia regional', pronunciation: 'lohs ah-KWEHR-dohs deh pahs deh koh-LOHM-bee-ah rreh-preh-SEHN-tahn oon EE-toh ehn lah dee-ploh-MAH-see-ah rreh-hee-oh-NAHL', english: 'The Colombian peace accords represent a milestone in regional diplomacy', audio: 'los-acuerdos-de-paz-de-colombia-representan-un-hito-en-la-diplomacia-regional', tip: '"Hito" means milestone/landmark — a short but powerful word. The Colombian peace process vocabulary is essential for understanding Latin American diplomacy.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'diplomatic-language', label: 'Diplomatic Language' },
    { id: 'negotiation-mastery', label: 'Negotiation Mastery' },
    { id: 'conflict-mediation', label: 'Conflict Mediation' },
    { id: 'international-relations', label: 'International Relations' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'diplomacy-sorting', label: 'Diplomacy Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'peace-table', label: 'Peace Table' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'diplomatic-language',
      title: 'Diplomatic Language — Lenguaje Diplomático',
      description: 'The formal register of international diplomacy: proposals, condemnations, and calls for action.',
      tabs: [
        { label: 'Proposals & Calls', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'diplomatic-language').slice(0, 6) },
        { label: 'Resolutions & Principles', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'diplomatic-language').slice(6) },
      ],
    },
    {
      id: 'negotiation-mastery',
      title: 'Negotiation Mastery — Maestría en Negociación',
      description: 'The art of concessions, counterproposals, and finding mutually beneficial agreements.',
      tabs: [
        { label: 'Concessions & Proposals', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'negotiation-mastery').slice(0, 6) },
        { label: 'Frameworks & Flexibility', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'negotiation-mastery').slice(6) },
      ],
    },
    {
      id: 'conflict-mediation',
      title: 'Conflict Mediation — Mediación de Conflictos',
      description: 'Bridging divides: finding common ground, proposing truces, and restoring communication.',
      tabs: [
        { label: 'Common Ground', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'conflict-mediation').slice(0, 6) },
        { label: 'Restoration & Process', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'conflict-mediation').slice(6) },
      ],
    },
    {
      id: 'international-relations',
      title: 'International Relations — Relaciones Internacionales',
      description: 'Treaties, sanctions, summits, and the institutions that shape the global order.',
      tabs: [
        { label: 'Treaties & Sanctions', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'international-relations').slice(0, 6) },
        { label: 'Global Governance', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'international-relations').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Formal Register of Diplomacy',
      content: 'Diplomatic Spanish operates at the highest register of formality. Verbs are conjugated in the first person plural ("proponemos," "instamos," "exhortamos") to represent a collective position. The subjunctive is essential: "Proponemos que ambas partes se comprometan" — the subjunctive "comprometan" expresses a formal proposal, not a statement of fact.',
      example: 'Proponemos que... | Instamos a que... | Exhortamos a que... | Solicitamos que...',
    },
    {
      title: 'Key Diplomatic Verbs',
      content: 'Spanish diplomacy uses a hierarchy of verbs that escalate in intensity: "sugerimos" (we suggest) → "proponemos" (we propose) → "instamos" (we urge) → "exhortamos" (we exhort) → "exigimos" (we demand) → "condenamos" (we condemn). Choosing the right verb signals your diplomatic posture.',
      example: 'Sugerimos > Proponemos > Instamos > Exhortamos > Exigimos > Condenamos',
      reviewFrom: 'L5.5',
    },
    {
      title: 'The Language of Compromise',
      content: '"Solución de compromiso" (compromise solution), "punto medio" (middle ground), "terreno común" (common ground), "concesiones mutuas" (mutual concessions) — these phrases form the core vocabulary of negotiation. In Spanish, "compromiso" means commitment, not the English "compromise" — a classic false cognate to watch for.',
      example: 'Busquemos un punto medio. | ¿Hay terreno común? | Estamos dispuestos a hacer concesiones.',
      reviewFrom: 'L5.4',
    },
    {
      title: 'Mediation Intonation',
      content: 'A mediator\'s voice must convey neutrality and calm. In Spanish mediation, questions are softer and more inviting than in everyday speech: "¿Podemos encontrar un terreno común?" should sound like a genuine invitation, not a demand. The key is a level, measured tone with slight rises at the end of proposals.',
      example: '¿Podemos encontrar...? [gentle rise] | Propongo una tregua... [level] | Reconozcamos que... [measured]',
    },
  ],

  flashcardGroups: [
    {
      key: 'diplomatic',
      label: 'Diplomatic Language',
      audioKeys: ['proponemos-que-ambas', 'instamos-a-la-comunidad', 'exhortamos-a-las-partes', 'hacemos-un-llamado', 'el-comunicado-conjunto', 'la-delegacion-expresa', 'reafirmamos-nuestro', 'la-resolucion-fue-adoptada'],
    },
    {
      key: 'negotiation',
      label: 'Negotiation Mastery',
      audioKeys: ['estamos-dispuestos-a-hacer', 'cual-seria-un-punto', 'la-propuesta-es-mutuamente', 'necesitamos-garantias', 'esta-clausula-es', 'respetamos-su-posicion', 'el-acuerdo-marco', 'dejemos-de-lado'],
    },
    {
      key: 'international',
      label: 'International Relations',
      audioKeys: ['el-tratado-bilateral', 'la-cumbre-de-lideres', 'las-sanciones-economicas', 'el-derecho-internacional', 'los-acuerdos-de-paz', 'la-diplomacia-preventiva', 'el-multilateralismo-es', 'los-cascos-azules'],
    },
  ],

  matchPairs: [
    { left: 'El tratado bilateral', right: 'Agreement between two countries' },
    { left: 'La tregua', right: 'Temporary ceasefire' },
    { left: 'Las sanciones', right: 'Economic penalties' },
    { left: 'El comunicado conjunto', right: 'Joint public statement' },
    { left: 'La soberanía', right: 'National self-governance' },
    { left: 'La mediación', right: 'Neutral third-party facilitation' },
    { left: 'El multilateralismo', right: 'Cooperation among many nations' },
    { left: 'Los cascos azules', right: 'UN peacekeeping forces' },
  ],
  matchLabels: { left: 'Término Diplomático', right: 'Definition' },

  sortActivities: [
    {
      title: 'Proposal or Demand?',
      instruction: 'Sort each diplomatic expression by its level of intensity.',
      buckets: ['Soft Diplomacy 🕊️', 'Strong Diplomacy ⚡'],
      items: [
        { text: 'Sugerimos redactar un memorándum', bucket: 'Soft Diplomacy 🕊️' },
        { text: 'Proponemos un período de prueba', bucket: 'Soft Diplomacy 🕊️' },
        { text: 'Respetamos su posición', bucket: 'Soft Diplomacy 🕊️' },
        { text: 'Dejemos de lado las diferencias', bucket: 'Soft Diplomacy 🕊️' },
        { text: 'Instamos a tomar medidas urgentes', bucket: 'Strong Diplomacy ⚡' },
        { text: 'Exhortamos a las partes', bucket: 'Strong Diplomacy ⚡' },
        { text: 'La delegación condena los hechos', bucket: 'Strong Diplomacy ⚡' },
        { text: 'Esta cláusula es innegociable', bucket: 'Strong Diplomacy ⚡' },
      ],
    },
    {
      title: 'Bilateral or Multilateral?',
      instruction: 'Does this concept involve two parties or many?',
      buckets: ['Bilateral (2 parties) 🤝', 'Multilateral (many parties) 🌍'],
      items: [
        { text: 'Tratado bilateral', bucket: 'Bilateral (2 parties) 🤝' },
        { text: 'Negociación directa', bucket: 'Bilateral (2 parties) 🤝' },
        { text: 'Comunicado conjunto', bucket: 'Bilateral (2 parties) 🤝' },
        { text: 'Acuerdo de libre comercio', bucket: 'Bilateral (2 parties) 🤝' },
        { text: 'Asamblea General de la ONU', bucket: 'Multilateral (many parties) 🌍' },
        { text: 'Cumbre de líderes mundiales', bucket: 'Multilateral (many parties) 🌍' },
        { text: 'Cascos azules', bucket: 'Multilateral (many parties) 🌍' },
        { text: 'Multilateralismo', bucket: 'Multilateral (many parties) 🌍' },
      ],
    },
  ],
  sortSectionId: 'diplomacy-sorting',
  sortTitle: 'Diplomacy Sorting',

  dialogues: [
    {
      id: 'dialogue-un-geneva',
      title: 'UN-Style Negotiation — Geneva',
      location: 'Geneva',
      lines: [
        { speaker: 'Embajadora Reyes', text: 'Estimados delegados, la situación en la frontera sur exige una respuesta coordinada e inmediata.', audio: '/audio/L7.6/phrases/d1-line1.mp3' },
        { speaker: 'Delegado Müller', text: 'Mi delegación comparte esa preocupación. Sin embargo, necesitamos garantías verificables antes de comprometer recursos.', audio: '/audio/L7.6/phrases/d1-line2.mp3' },
        { speaker: 'Embajadora Reyes', text: 'Proponemos un acuerdo marco que establezca los principios generales de cooperación humanitaria en la región.', audio: '/audio/L7.6/phrases/d1-line3.mp3', annotations: [{ phrase: 'acuerdo marco', fromLesson: 'L7.6', note: 'Framework agreement: establishes broad principles before detailed negotiations' }] },
        { speaker: 'Delegado Chen', text: 'Respetamos su posición, pero consideramos que hay margen para un enfoque más flexible en la cuestión de los plazos.', audio: '/audio/L7.6/phrases/d1-line4.mp3' },
        { speaker: 'Embajadora Reyes', text: '¿Cuál sería un punto medio aceptable para su delegación? Estamos dispuestos a hacer concesiones en los plazos si se mantienen los objetivos humanitarios.', audio: '/audio/L7.6/phrases/d1-line5.mp3' },
        { speaker: 'Delegado Müller', text: 'Sugerimos un período de prueba de seis meses con revisiones trimestrales. Eso nos daría tiempo para evaluar la eficacia del programa.', audio: '/audio/L7.6/phrases/d1-line6.mp3' },
        { speaker: 'Delegado Chen', text: 'Mi delegación apoya esa propuesta. Pero la cláusula de financiamiento es innegociable: los fondos deben ser supervisados por un organismo independiente.', audio: '/audio/L7.6/phrases/d1-line7.mp3' },
        { speaker: 'Embajadora Reyes', text: 'Entendemos su posición. La propuesta es mutuamente beneficiosa si logramos acordar los mecanismos de supervisión.', audio: '/audio/L7.6/phrases/d1-line8.mp3' },
        { speaker: 'Moderador', text: 'Creo que hay terreno común. Propongo que las tres delegaciones redacten un borrador conjunto para la próxima sesión.', audio: '/audio/L7.6/phrases/d1-line9.mp3' },
        { speaker: 'Delegado Müller', text: 'Aceptamos. Reafirmamos nuestro compromiso con los principios del derecho internacional humanitario.', audio: '/audio/L7.6/phrases/d1-line10.mp3' },
        { speaker: 'Delegado Chen', text: 'Igualmente. Dejemos de lado las diferencias técnicas y centrémonos en lo que nos une: proteger a la población civil.', audio: '/audio/L7.6/phrases/d1-line11.mp3' },
        { speaker: 'Embajadora Reyes', text: 'Excelente. El comunicado conjunto establecerá los términos preliminares. Hacemos un llamado a la paz como única vía.', audio: '/audio/L7.6/phrases/d1-line12.mp3' },
        { speaker: 'Moderador', text: 'Queda registrado. La sesión extraordinaria se reanudará el jueves. Gracias a todas las delegaciones por su espíritu constructivo.', audio: '/audio/L7.6/phrases/d1-line13.mp3' },
        { speaker: 'Embajadora Reyes', text: 'Gracias. La diplomacia preventiva siempre será más eficaz que la intervención tardía. Trabajemos juntos.', audio: '/audio/L7.6/phrases/d1-line14.mp3' },
        { speaker: 'Delegado Chen', text: 'Así es. El multilateralismo es esencial para los desafíos de nuestro tiempo. Nos vemos el jueves.', audio: '/audio/L7.6/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-mediation-bogota',
      title: 'Community Mediation — Bogotá',
      location: 'Bogotá',
      lines: [
        { speaker: 'Mediadora', text: 'Buenos días. Estamos aquí para facilitar el diálogo entre la asociación de vecinos y la empresa constructora. Les pido que mantengan el respeto mutuo.', audio: '/audio/L7.6/phrases/d2-line1.mp3' },
        { speaker: 'Sr. Morales', text: 'La construcción ha destruido nuestro parque comunitario. Exigimos que se detenga la obra inmediatamente.', audio: '/audio/L7.6/phrases/d2-line2.mp3' },
        { speaker: 'Ing. Vargas', text: 'Entendemos la frustración del vecindario, pero tenemos todos los permisos legales. La obra genera empleo para doscientas personas.', audio: '/audio/L7.6/phrases/d2-line3.mp3' },
        { speaker: 'Mediadora', text: 'Entiendo la perspectiva de ambas partes. Los vecinos valoran su espacio verde y la empresa tiene compromisos laborales. ¿Podemos encontrar un terreno común?', audio: '/audio/L7.6/phrases/d2-line4.mp3', annotations: [{ phrase: '¿Podemos encontrar un terreno común?', fromLesson: 'L7.6', note: 'Classic mediation question: reframes conflict as a shared problem to solve' }] },
        { speaker: 'Sra. López', text: 'Propongo que la empresa construya un nuevo parque en otro terreno cercano como compensación. Busquemos una solución de compromiso.', audio: '/audio/L7.6/phrases/d2-line5.mp3' },
        { speaker: 'Ing. Vargas', text: 'Es una posibilidad. Pero necesitaríamos que el municipio aportara el terreno. No podemos asumir todo el costo.', audio: '/audio/L7.6/phrases/d2-line6.mp3' },
        { speaker: 'Mediadora', text: 'Reconozcamos que ambas partes tienen preocupaciones legítimas. Señor Morales, ¿aceptaría un parque nuevo si fuera más grande y mejor equipado?', audio: '/audio/L7.6/phrases/d2-line7.mp3' },
        { speaker: 'Sr. Morales', text: 'Podría ser viable, pero queremos garantías por escrito. Ya nos han prometido cosas antes sin cumplirlas.', audio: '/audio/L7.6/phrases/d2-line8.mp3' },
        { speaker: 'Mediadora', text: 'Sugerimos redactar un memorándum de entendimiento como primer paso. Así ambas partes tendrán un documento formal con compromisos claros.', audio: '/audio/L7.6/phrases/d2-line9.mp3' },
        { speaker: 'Ing. Vargas', text: 'Estamos dispuestos a hacer esa concesión. Pero las condiciones previas deben ser claras: necesitamos que el municipio apruebe el cambio de uso de suelo.', audio: '/audio/L7.6/phrases/d2-line10.mp3' },
        { speaker: 'Sra. López', text: 'Y nosotros necesitamos un cronograma con fechas específicas. No queremos que esto se convierta en una promesa vacía.', audio: '/audio/L7.6/phrases/d2-line11.mp3' },
        { speaker: 'Mediadora', text: 'Excelente. Ambas partes se beneficiarían de un enfoque más flexible. Propongo una tregua: detengan las protestas y la empresa pause la demolición del área verde mientras negociamos.', audio: '/audio/L7.6/phrases/d2-line12.mp3' },
        { speaker: 'Sr. Morales', text: 'Aceptamos la tregua. El diálogo es siempre preferible a la confrontación.', audio: '/audio/L7.6/phrases/d2-line13.mp3' },
        { speaker: 'Ing. Vargas', text: 'De acuerdo. La justicia restaurativa se centra en reparar el daño, y eso es lo que queremos hacer.', audio: '/audio/L7.6/phrases/d2-line14.mp3' },
        { speaker: 'Mediadora', text: 'Perfecto. Nos reuniremos la próxima semana con el borrador del memorándum. La mediación funciona cuando todas las partes actúan de buena fe.', audio: '/audio/L7.6/phrases/d2-line15.mp3' },
        { speaker: 'Sra. López', text: 'Gracias por facilitar este espacio. Es fundamental que cada parte escuche a la otra. Hoy hemos dado un gran paso.', audio: '/audio/L7.6/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Navigate a UN-style multilateral negotiation in Geneva over humanitarian cooperation, then mediate a community dispute between neighbors and a construction company in Bogotá.',

  culturalNotes: [
    {
      title: 'La Diplomacia Latinoamericana',
      content: 'Latin America has a rich tradition of diplomacy and conflict resolution. The "Contadora Group" (1983) — Mexico, Venezuela, Colombia, and Panama — pioneered regional peace efforts in Central America. More recently, Colombia\'s peace process with the FARC (2016) is considered one of the most comprehensive peace agreements in history. Latin American diplomacy often emphasizes dialogue over force, reflecting a deep cultural commitment to "la palabra" (the word) as a tool for resolution.',
    },
    {
      title: 'El Derecho de Asilo en la Tradición Hispanoamericana',
      content: 'The right of asylum (el derecho de asilo) is deeply rooted in Latin American diplomatic tradition. The 1954 Caracas Convention on Diplomatic Asylum is uniquely Latin American — no other region has such a strong legal framework for protecting political dissidents. Embassies in Latin America have historically served as refuges during political crises, from Chile\'s 1973 coup to Ecuador\'s embassy sheltering Julian Assange. This tradition reflects a cultural value: even in the worst conflicts, there must be spaces of safety.',
    },
    {
      title: 'Mediación Comunitaria en el Mundo Hispano',
      content: 'Community mediation (mediación comunitaria) is growing across Latin America as an alternative to overburdened court systems. In Colombia, "Casas de Justicia" offer free mediation services. In Argentina, "centros de mediación comunitaria" resolve neighborhood disputes. Mexico\'s indigenous communities have practiced forms of mediation for centuries through community assemblies (asambleas). This tradition values collective problem-solving, oral testimony, and restoration over punishment — principles that align with modern restorative justice.',
    },
  ],
  culturalGradient: 'from-blue-50 to-indigo-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Instamos a" is used to:', options: ['Make a casual suggestion', 'Urgently call for action', 'Express gratitude', 'Describe a past event'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Proponemos que ambas ___ se comprometan" (parties)', answer: 'partes' },
    { id: 3, type: 'tf', text: '"El comunicado conjunto" is a formal statement issued by multiple parties together.', answer: true },
    { id: 4, type: 'mc', text: '"¿Cuál sería un punto medio aceptable?" is asking for:', options: ['A winner', 'A compromise', 'A surrender', 'A postponement'], answer: 1 },
    { id: 5, type: 'mc', text: '"La propuesta es mutuamente beneficiosa" means:', options: ['Only one side benefits', 'Both sides benefit', 'Neither side benefits', 'A third party benefits'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Hacemos un ___ a la paz" (call)', answer: 'llamado' },
    { id: 7, type: 'mc', text: '"Propongo una tregua" means:', options: ['I propose a surrender', 'I propose a truce/ceasefire', 'I propose a final solution', 'I propose an attack'], answer: 1 },
    { id: 8, type: 'tf', text: '"Los cascos azules" are UN peacekeeping forces.', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, what does the Embajadora propose first?', options: ['Military action', 'A framework agreement', 'Sanctions', 'A vote'], answer: 1 },
    { id: 10, type: 'mc', text: '"El derecho internacional humanitario" protects:', options: ['Soldiers only', 'Politicians only', 'Civilians in conflict zones', 'Diplomats only'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ de cada nación debe ser respetada" (sovereignty)', answer: 'soberanía' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does the mediadora suggest to formalize the agreement?', options: ['A lawsuit', 'A memorandum of understanding', 'A public protest', 'An election'], answer: 1 },
    { id: 13, type: 'tf', text: '"Solución de compromiso" in diplomatic Spanish means a compromise solution where both parties give something.', answer: true },
    { id: 14, type: 'mc', text: '"Exhortamos" is more intense than:', options: ['Exigimos', 'Condenamos', 'Sugerimos', 'Denunciamos'], answer: 2 },
    { id: 15, type: 'mc', text: 'A mediator should be:', options: ['On one side', 'Impartial and neutral', 'Aggressive', 'Silent throughout'], answer: 1 },
  ],

  audioBase: '/audio/L7.6/phrases',

  uniqueActivity: {
    id: 'PeaceTableL76',
    sectionId: 'peace-table',
    sectionColor: 'bg-blue-50/40',
    sectionBorder: 'border-blue-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'diplomatic-language': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'negotiation-mastery': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    'conflict-mediation': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'international-relations': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'matching-game': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    'diplomacy-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'peace-table': { bg: 'bg-blue-50/40', border: 'border-blue-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
