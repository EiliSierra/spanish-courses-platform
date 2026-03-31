import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Political Systems (12) ===
  { spanish: 'La democracia representativa permite que los ciudadanos elijan a sus gobernantes', english: 'Representative democracy allows citizens to choose their rulers', pronunciation: 'lah deh-moh-KRAH-see-ah rreh-preh-sehn-tah-TEE-bah pehr-MEE-teh keh lohs see-oo-dah-DAH-nohs eh-LEE-hahn ah soos goh-behr-NAHN-tehs', category: 'political-systems', audio: 'la-democracia-representativa' },
  { spanish: 'El estado de derecho garantiza que nadie esté por encima de la ley', english: 'The rule of law guarantees that no one is above the law', pronunciation: 'ehl ehs-TAH-doh deh deh-REH-choh gah-rahn-TEE-sah keh NAH-dee-eh ehs-TEH pohr ehn-SEE-mah deh lah ley', category: 'political-systems', audio: 'el-estado-de-derecho' },
  { spanish: 'La separación de poderes impide la concentración del poder en una sola persona', english: 'The separation of powers prevents the concentration of power in a single person', pronunciation: 'lah seh-pah-rah-see-OHN deh poh-DEH-rehs eem-PEE-deh lah kohn-sehn-trah-see-OHN dehl poh-DEHR ehn OO-nah SOH-lah pehr-SOH-nah', category: 'political-systems', audio: 'la-separacion-de-poderes' },
  { spanish: 'El poder ejecutivo recae en el presidente o primer ministro del gobierno', english: 'Executive power rests with the president or prime minister of the government', pronunciation: 'ehl poh-DEHR eh-heh-koo-TEE-boh rreh-KAH-eh ehn ehl preh-see-DEHN-teh oh pree-MEHR mee-NEES-troh dehl goh-bee-EHR-noh', category: 'political-systems', audio: 'el-poder-ejecutivo' },
  { spanish: 'El poder legislativo elabora y aprueba las leyes de un país', english: 'The legislative power drafts and approves a country\'s laws', pronunciation: 'ehl poh-DEHR leh-hees-lah-TEE-boh eh-lah-BOH-rah ee ah-PRWEH-bah lahs LEH-yehs deh oon pah-EES', category: 'political-systems', audio: 'el-poder-legislativo' },
  { spanish: 'El poder judicial interpreta las leyes y administra justicia', english: 'The judicial power interprets laws and administers justice', pronunciation: 'ehl poh-DEHR hoo-dee-see-AHL een-TEHR-preh-tah lahs LEH-yehs ee ahd-mee-NEES-trah hoos-TEE-see-ah', category: 'political-systems', audio: 'el-poder-judicial' },
  { spanish: 'El federalismo distribuye competencias entre el gobierno central y los estados', english: 'Federalism distributes powers between the central government and the states', pronunciation: 'ehl feh-deh-rah-LEES-moh dees-tree-BOO-yeh kohm-peh-TEHN-see-ahs EHN-treh ehl goh-bee-EHR-noh sehn-TRAHL ee lohs ehs-TAH-dohs', category: 'political-systems', audio: 'el-federalismo-distribuye' },
  { spanish: 'La república parlamentaria otorga al parlamento la función de elegir al jefe de gobierno', english: 'A parliamentary republic grants the parliament the function of choosing the head of government', pronunciation: 'lah rreh-POO-blee-kah pahr-lah-mehn-TAH-ree-ah oh-TOHR-gah ahl pahr-lah-MEHN-toh lah foon-see-OHN deh eh-leh-HEER ahl HEH-feh deh goh-bee-EHR-noh', category: 'political-systems', audio: 'la-republica-parlamentaria' },
  { spanish: 'La soberanía popular significa que el poder emana del pueblo', english: 'Popular sovereignty means that power emanates from the people', pronunciation: 'lah soh-beh-rah-NEE-ah poh-poo-LAHR seeg-NEE-fee-kah keh ehl poh-DEHR eh-MAH-nah dehl PWEH-bloh', category: 'political-systems', audio: 'la-soberania-popular' },
  { spanish: 'La constitución es la ley suprema que rige la organización del Estado', english: 'The constitution is the supreme law that governs the organization of the State', pronunciation: 'lah kohns-tee-too-see-OHN ehs lah ley soo-PREH-mah keh RREE-heh lah ohr-gah-nee-sah-see-OHN dehl ehs-TAH-doh', category: 'political-systems', audio: 'la-constitucion-es-la' },
  { spanish: 'El autoritarismo concentra el poder sin control democrático ni rendición de cuentas', english: 'Authoritarianism concentrates power without democratic control or accountability', pronunciation: 'ehl ow-toh-ree-tah-REES-moh kohn-SEHN-trah ehl poh-DEHR seen kohn-TROHL deh-moh-KRAH-tee-koh nee rrehn-dee-see-OHN deh KWEHN-tahs', category: 'political-systems', audio: 'el-autoritarismo-concentra' },
  { spanish: 'La alternancia en el poder es un indicador esencial de salud democrática', english: 'Alternation of power is an essential indicator of democratic health', pronunciation: 'lah ahl-tehr-NAHN-see-ah ehn ehl poh-DEHR ehs oon een-dee-kah-DOHR eh-sehn-see-AHL deh sah-LOOD deh-moh-KRAH-tee-kah', category: 'political-systems', audio: 'la-alternancia-en-el' },

  // === Elections & Campaigns (12) ===
  { spanish: 'La campaña electoral busca persuadir a los votantes con propuestas concretas', english: 'The electoral campaign seeks to persuade voters with concrete proposals', pronunciation: 'lah kahm-PAH-nyah eh-lehk-toh-RAHL BOOS-kah pehr-swah-DEER ah lohs boh-TAHN-tehs kohn proh-PWEHS-tahs kohn-KREH-tahs', category: 'elections-campaigns', audio: 'la-campana-electoral' },
  { spanish: 'El candidato presentó su plataforma ante miles de simpatizantes', english: 'The candidate presented his platform before thousands of supporters', pronunciation: 'ehl kahn-dee-DAH-toh preh-sehn-TOH soo plah-tah-FOHR-mah AHN-teh MEE-lehs deh seem-pah-tee-SAHN-tehs', category: 'elections-campaigns', audio: 'el-candidato-presento' },
  { spanish: 'Las encuestas de opinión predicen las tendencias electorales pero no son infalibles', english: 'Opinion polls predict electoral trends but are not infallible', pronunciation: 'lahs ehn-KWEHS-tahs deh oh-pee-nee-OHN preh-DEE-sehn lahs tehn-DEHN-see-ahs eh-lehk-toh-RAH-lehs PEH-roh noh sohn een-fah-LEE-blehs', category: 'elections-campaigns', audio: 'las-encuestas-de-opinion' },
  { spanish: 'La jornada electoral transcurrió con normalidad y alta participación ciudadana', english: 'Election day proceeded normally with high citizen turnout', pronunciation: 'lah hohr-NAH-dah eh-lehk-toh-RAHL trahns-koo-RREE-oh kohn nohr-mah-lee-DAHD ee AHL-tah pahr-tee-see-pah-see-OHN see-oo-dah-DAH-nah', category: 'elections-campaigns', audio: 'la-jornada-electoral' },
  { spanish: 'El escrutinio de los votos determinará al ganador de la contienda', english: 'The vote count will determine the winner of the contest', pronunciation: 'ehl ehs-kroo-TEE-nee-oh deh lohs BOH-tohs deh-tehr-mee-nah-RAH ahl gah-nah-DOHR deh lah kohn-tee-EHN-dah', category: 'elections-campaigns', audio: 'el-escrutinio-de-los' },
  { spanish: 'La segunda vuelta electoral se realiza cuando ningún candidato obtiene mayoría absoluta', english: 'A runoff election is held when no candidate obtains an absolute majority', pronunciation: 'lah seh-GOON-dah BWEL-tah eh-lehk-toh-RAHL seh rreh-ah-LEE-sah KWAHN-doh neen-GOON kahn-dee-DAH-toh ohb-tee-EH-neh mah-yoh-REE-ah ahb-soh-LOO-tah', category: 'elections-campaigns', audio: 'la-segunda-vuelta' },
  { spanish: 'El voto en blanco es una forma legítima de protesta electoral', english: 'A blank vote is a legitimate form of electoral protest', pronunciation: 'ehl BOH-toh ehn BLAHN-koh ehs OO-nah FOHR-mah leh-HEE-tee-mah deh proh-TEHS-tah eh-lehk-toh-RAHL', category: 'elections-campaigns', audio: 'el-voto-en-blanco' },
  { spanish: 'El padrón electoral incluye a todos los ciudadanos habilitados para votar', english: 'The electoral roll includes all citizens eligible to vote', pronunciation: 'ehl pah-DROHN eh-lehk-toh-RAHL een-KLOO-yeh ah TOH-dohs lohs see-oo-dah-DAH-nohs ah-bee-lee-TAH-dohs PAH-rah boh-TAHR', category: 'elections-campaigns', audio: 'el-padron-electoral' },
  { spanish: 'La propaganda política utiliza medios de comunicación para influir en la opinión pública', english: 'Political propaganda uses media to influence public opinion', pronunciation: 'lah proh-pah-GAHN-dah poh-LEE-tee-kah oo-tee-LEE-sah MEH-dee-ohs deh koh-moo-nee-kah-see-OHN PAH-rah een-floo-EER ehn lah oh-pee-nee-OHN POO-blee-kah', category: 'elections-campaigns', audio: 'la-propaganda-politica' },
  { spanish: 'El debate presidencial permite contrastar las visiones de los candidatos', english: 'The presidential debate allows contrasting the candidates\' visions', pronunciation: 'ehl deh-BAH-teh preh-see-dehn-see-AHL pehr-MEE-teh kohn-trahs-TAHR lahs bee-see-OH-nehs deh lohs kahn-dee-DAH-tohs', category: 'elections-campaigns', audio: 'el-debate-presidencial' },
  { spanish: 'La coalición de partidos se forma para alcanzar una mayoría parlamentaria', english: 'A coalition of parties is formed to achieve a parliamentary majority', pronunciation: 'lah koh-ah-lee-see-OHN deh pahr-TEE-dohs seh FOHR-mah PAH-rah ahl-kahn-SAHR OO-nah mah-yoh-REE-ah pahr-lah-mehn-TAH-ree-ah', category: 'elections-campaigns', audio: 'la-coalicion-de-partidos' },
  { spanish: 'El abstencionismo refleja el desencanto de los ciudadanos con la clase política', english: 'Abstentionism reflects citizens\' disenchantment with the political class', pronunciation: 'ehl ahbs-tehn-see-oh-NEES-moh rreh-FLEH-hah ehl deh-sehn-KAHN-toh deh lohs see-oo-dah-DAH-nohs kohn lah KLAH-seh poh-LEE-tee-kah', category: 'elections-campaigns', audio: 'el-abstencionismo-refleja' },

  // === Legislation & Policy (12) ===
  { spanish: 'Promulgar una ley es el acto formal de darle vigencia y fuerza obligatoria', english: 'To promulgate a law is the formal act of giving it validity and binding force', pronunciation: 'proh-mool-GAHR OO-nah ley ehs ehl AHK-toh fohr-MAHL deh DAHR-leh bee-HEHN-see-ah ee FWEHR-sah oh-blee-gah-TOH-ree-ah', category: 'legislation-policy', audio: 'promulgar-una-ley' },
  { spanish: 'El proyecto de ley debe ser debatido y aprobado por ambas cámaras del congreso', english: 'The bill must be debated and approved by both chambers of congress', pronunciation: 'ehl proh-YEHK-toh deh ley DEH-beh sehr deh-bah-TEE-doh ee ah-proh-BAH-doh pohr AHM-bahs KAH-mah-rahs dehl kohn-GREH-soh', category: 'legislation-policy', audio: 'el-proyecto-de-ley' },
  { spanish: 'La reforma constitucional requiere un proceso legislativo especial y mayorías calificadas', english: 'Constitutional reform requires a special legislative process and qualified majorities', pronunciation: 'lah rreh-FOHR-mah kohns-tee-too-see-oh-NAHL rreh-kee-EH-reh oon proh-SEH-soh leh-hees-lah-TEE-boh ehs-peh-see-AHL ee mah-yoh-REE-ahs kah-lee-fee-KAH-dahs', category: 'legislation-policy', audio: 'la-reforma-constitucional' },
  { spanish: 'La política pública busca resolver problemas sociales mediante intervención del Estado', english: 'Public policy seeks to solve social problems through State intervention', pronunciation: 'lah poh-LEE-tee-kah POO-blee-kah BOOS-kah rreh-sohl-BEHR proh-BLEH-mahs soh-see-AH-lehs meh-dee-AHN-teh een-tehr-behn-see-OHN dehl ehs-TAH-doh', category: 'legislation-policy', audio: 'la-politica-publica' },
  { spanish: 'El decreto ejecutivo permite al presidente actuar sin aprobación del congreso', english: 'An executive decree allows the president to act without congressional approval', pronunciation: 'ehl deh-KREH-toh eh-heh-koo-TEE-boh pehr-MEE-teh ahl preh-see-DEHN-teh ahk-too-AHR seen ah-proh-bah-see-OHN dehl kohn-GREH-soh', category: 'legislation-policy', audio: 'el-decreto-ejecutivo' },
  { spanish: 'La consulta popular somete decisiones clave a la voluntad directa del pueblo', english: 'A popular referendum submits key decisions to the direct will of the people', pronunciation: 'lah kohn-SOOL-tah poh-poo-LAHR soh-MEH-teh deh-see-see-OH-nehs KLAH-beh ah lah boh-loon-TAHD dee-REHK-tah dehl PWEH-bloh', category: 'legislation-policy', audio: 'la-consulta-popular' },
  { spanish: 'El veto presidencial puede bloquear una ley aprobada por el legislativo', english: 'A presidential veto can block a law approved by the legislature', pronunciation: 'ehl BEH-toh preh-see-dehn-see-AHL PWEH-deh bloh-keh-AHR OO-nah ley ah-proh-BAH-dah pohr ehl leh-hees-lah-TEE-boh', category: 'legislation-policy', audio: 'el-veto-presidencial' },
  { spanish: 'La jurisprudencia establece precedentes que guían la interpretación de las leyes', english: 'Jurisprudence establishes precedents that guide the interpretation of laws', pronunciation: 'lah hoo-rees-proo-DEHN-see-ah ehs-tah-BLEH-seh preh-seh-DEHN-tehs keh GEE-ahn lah een-tehr-preh-tah-see-OHN deh lahs LEH-yehs', category: 'legislation-policy', audio: 'la-jurisprudencia-establece' },
  { spanish: 'La descentralización transfiere competencias del gobierno central a los municipios', english: 'Decentralization transfers powers from the central government to municipalities', pronunciation: 'lah dehs-sehn-trah-lee-sah-see-OHN trahns-fee-EH-reh kohm-peh-TEHN-see-ahs dehl goh-bee-EHR-noh sehn-TRAHL ah lohs moo-nee-SEE-pee-ohs', category: 'legislation-policy', audio: 'la-descentralizacion' },
  { spanish: 'El presupuesto nacional determina cómo se asignan los recursos del Estado', english: 'The national budget determines how State resources are allocated', pronunciation: 'ehl preh-soo-PWEHS-toh nah-see-oh-NAHL deh-tehr-MEE-nah KOH-moh seh ah-SEEG-nahn lohs rreh-KOOR-sohs dehl ehs-TAH-doh', category: 'legislation-policy', audio: 'el-presupuesto-nacional' },
  { spanish: 'La regulación protege a los ciudadanos de abusos del mercado y del poder', english: 'Regulation protects citizens from market and power abuses', pronunciation: 'lah rreh-goo-lah-see-OHN proh-TEH-heh ah lohs see-oo-dah-DAH-nohs deh ah-BOO-sohs dehl mehr-KAH-doh ee dehl poh-DEHR', category: 'legislation-policy', audio: 'la-regulacion-protege' },
  { spanish: 'El estado de emergencia otorga poderes extraordinarios al ejecutivo temporalmente', english: 'A state of emergency temporarily grants extraordinary powers to the executive', pronunciation: 'ehl ehs-TAH-doh deh eh-mehr-HEHN-see-ah oh-TOHR-gah poh-DEH-rehs ehks-trah-ohr-dee-NAH-ree-ohs ahl eh-heh-koo-TEE-boh tehm-poh-RAHL-mehn-teh', category: 'legislation-policy', audio: 'el-estado-de-emergencia' },

  // === Civic Discourse (12) ===
  { spanish: 'La participación ciudadana fortalece la democracia y legitima las decisiones públicas', english: 'Citizen participation strengthens democracy and legitimizes public decisions', pronunciation: 'lah pahr-tee-see-pah-see-OHN see-oo-dah-DAH-nah fohr-tah-LEH-seh lah deh-moh-KRAH-see-ah ee leh-hee-TEE-mah lahs deh-see-see-OH-nehs POO-blee-kahs', category: 'civic-discourse', audio: 'la-participacion-ciudadana' },
  { spanish: 'La rendición de cuentas obliga a los funcionarios a explicar sus acciones', english: 'Accountability obliges officials to explain their actions', pronunciation: 'lah rrehn-dee-see-OHN deh KWEHN-tahs oh-BLEE-gah ah lohs foon-see-oh-NAH-ree-ohs ah ehks-plee-KAHR soos ahk-see-OH-nehs', category: 'civic-discourse', audio: 'la-rendicion-de-cuentas' },
  { spanish: 'La transparencia gubernamental es esencial para combatir la corrupción', english: 'Government transparency is essential to combat corruption', pronunciation: 'lah trahns-pah-REHN-see-ah goo-behr-nah-mehn-TAHL ehs eh-sehn-see-AHL PAH-rah kohm-bah-TEER lah koh-rroop-see-OHN', category: 'civic-discourse', audio: 'la-transparencia-gubernamental' },
  { spanish: 'La corrupción sistémica socava las instituciones y la confianza del pueblo', english: 'Systemic corruption undermines institutions and the people\'s trust', pronunciation: 'lah koh-rroop-see-OHN sees-TEH-mee-kah soh-KAH-bah lahs eens-tee-too-see-OH-nehs ee lah kohn-fee-AHN-sah dehl PWEH-bloh', category: 'civic-discourse', audio: 'la-corrupcion-sistemica' },
  { spanish: 'El clientelismo político intercambia favores por lealtad electoral', english: 'Political clientelism exchanges favors for electoral loyalty', pronunciation: 'ehl klee-ehn-teh-LEES-moh poh-LEE-tee-koh een-tehr-KAHM-bee-ah fah-BOH-rehs pohr leh-ahl-TAHD eh-lehk-toh-RAHL', category: 'civic-discourse', audio: 'el-clientelismo-politico' },
  { spanish: 'La sociedad civil organizada vigila y demanda mejoras al gobierno', english: 'Organized civil society monitors and demands improvements from the government', pronunciation: 'lah soh-see-eh-DAHD see-BEEL ohr-gah-nee-SAH-dah bee-HEE-lah ee deh-MAHN-dah meh-HOH-rahs ahl goh-bee-EHR-noh', category: 'civic-discourse', audio: 'la-sociedad-civil' },
  { spanish: 'El activismo juvenil está transformando el panorama político de América Latina', english: 'Youth activism is transforming the political landscape of Latin America', pronunciation: 'ehl ahk-tee-BEES-moh hoo-beh-NEEL ehs-TAH trahns-fohr-MAHN-doh ehl pah-noh-RAH-mah poh-LEE-tee-koh deh ah-MEH-ree-kah lah-TEE-nah', category: 'civic-discourse', audio: 'el-activismo-juvenil' },
  { spanish: 'La libertad de prensa es un pilar fundamental de toda democracia', english: 'Freedom of the press is a fundamental pillar of every democracy', pronunciation: 'lah lee-behr-TAHD deh PREHN-sah ehs oon pee-LAHR foon-dah-mehn-TAHL deh TOH-dah deh-moh-KRAH-see-ah', category: 'civic-discourse', audio: 'la-libertad-de-prensa' },
  { spanish: 'El derecho a la protesta pacífica está protegido por la constitución', english: 'The right to peaceful protest is protected by the constitution', pronunciation: 'ehl deh-REH-choh ah lah proh-TEHS-tah pah-SEE-fee-kah ehs-TAH proh-teh-HEE-doh pohr lah kohns-tee-too-see-OHN', category: 'civic-discourse', audio: 'el-derecho-a-la-protesta' },
  { spanish: 'La gobernanza democrática exige diálogo entre todas las fuerzas políticas', english: 'Democratic governance demands dialogue among all political forces', pronunciation: 'lah goh-behr-NAHN-sah deh-moh-KRAH-tee-kah ehk-SEE-heh dee-AH-loh-goh EHN-treh TOH-dahs lahs FWEHR-sahs poh-LEE-tee-kahs', category: 'civic-discourse', audio: 'la-gobernanza-democratica' },
  { spanish: 'Los movimientos sociales han sido motores de cambio en toda la región', english: 'Social movements have been engines of change throughout the region', pronunciation: 'lohs moh-bee-mee-EHN-tohs soh-see-AH-lehs ahn SEE-doh moh-TOH-rehs deh KAHM-bee-oh ehn TOH-dah lah rreh-hee-OHN', category: 'civic-discourse', audio: 'los-movimientos-sociales' },
  { spanish: 'La educación cívica prepara a los jóvenes para ejercer una ciudadanía responsable', english: 'Civic education prepares young people to exercise responsible citizenship', pronunciation: 'lah eh-doo-kah-see-OHN SEE-bee-kah preh-PAH-rah ah lohs HOH-beh-nehs PAH-rah eh-hehr-SEHR OO-nah see-oo-dah-dah-NEE-ah rrehs-pohn-SAH-bleh', category: 'civic-discourse', audio: 'la-educacion-civica' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L87PhraseByAudio = phraseByAudio

// === CABINET DEBATE (unique activity) ===

export interface CabinetDebateChallenge {
  issue: string
  english: string
  correctPosition: string
  options: string[]
}

export const CABINET_DEBATE_CHALLENGES: CabinetDebateChallenge[] = [
  {
    issue: 'El congreso propone eliminar el límite de reelección presidencial. ¿Cuál es la posición más democrática?',
    english: 'Congress proposes eliminating the presidential re-election limit. What is the most democratic position?',
    correctPosition: 'Defender la alternancia en el poder como garantía contra el autoritarismo',
    options: ['Defender la alternancia en el poder como garantía contra el autoritarismo', 'Permitir reelección indefinida si el pueblo lo aprueba', 'Eliminar la presidencia y crear un consejo militar', 'Dejar la decisión al presidente actual'],
  },
  {
    issue: 'Un grupo de ciudadanos exige acceso a los contratos del gobierno con empresas privadas. ¿Qué principio debe prevalecer?',
    english: 'A group of citizens demands access to government contracts with private companies. What principle should prevail?',
    correctPosition: 'La transparencia gubernamental: los ciudadanos tienen derecho a conocer el uso de los recursos públicos',
    options: ['La transparencia gubernamental: los ciudadanos tienen derecho a conocer el uso de los recursos públicos', 'La confidencialidad empresarial tiene prioridad absoluta', 'Solo los periodistas pueden solicitar esa información', 'El gobierno decide qué información es relevante'],
  },
  {
    issue: 'Una reforma constitucional quiere limitar el derecho a la protesta. ¿Cuál es la respuesta correcta desde la democracia?',
    english: 'A constitutional reform seeks to limit the right to protest. What is the correct response from a democratic standpoint?',
    correctPosition: 'La protesta pacífica es un derecho constitucional que no puede ser restringido arbitrariamente',
    options: ['Prohibir todas las manifestaciones por seguridad pública', 'La protesta pacífica es un derecho constitucional que no puede ser restringido arbitrariamente', 'Solo permitir protestas aprobadas por el gobierno', 'Las protestas son innecesarias en una democracia funcional'],
  },
  {
    issue: 'El presidente emite un decreto ejecutivo que contradice una ley aprobada por el congreso. ¿Qué debe suceder?',
    english: 'The president issues an executive decree that contradicts a law approved by congress. What should happen?',
    correctPosition: 'El poder judicial debe revisar el decreto para garantizar la separación de poderes',
    options: ['El decreto presidencial siempre prevalece sobre las leyes', 'El poder judicial debe revisar el decreto para garantizar la separación de poderes', 'El congreso debe disolverse por obstruir al presidente', 'No hay mecanismo para resolver este conflicto'],
  },
  {
    issue: 'Se descubre que un gobernador utiliza fondos públicos para financiar su campaña de reelección. ¿Qué mecanismo debe activarse?',
    english: 'A governor is discovered using public funds to finance his re-election campaign. What mechanism should be activated?',
    correctPosition: 'La rendición de cuentas: investigación independiente, proceso legal y posible destitución',
    options: ['Ignorarlo si su gestión ha sido buena', 'La rendición de cuentas: investigación independiente, proceso legal y posible destitución', 'Esperar hasta las próximas elecciones para que el pueblo decida', 'Solo el propio partido puede sancionarlo internamente'],
  },
  {
    issue: 'Un partido político propone que solo los propietarios de tierras puedan votar en las elecciones municipales. ¿Cuál es el principio democrático en juego?',
    english: 'A political party proposes that only landowners can vote in municipal elections. What democratic principle is at stake?',
    correctPosition: 'La soberanía popular: el sufragio universal es un derecho inalienable de todo ciudadano',
    options: ['Los propietarios tienen más interés en el bienestar del municipio', 'La soberanía popular: el sufragio universal es un derecho inalienable de todo ciudadano', 'Es aceptable si la mayoría del congreso lo aprueba', 'Los inquilinos pueden votar en las elecciones nacionales'],
  },
  {
    issue: 'Una comunidad indígena reclama su derecho a ser consultada sobre un proyecto minero en su territorio. ¿Qué debe garantizar el Estado?',
    english: 'An indigenous community claims its right to be consulted about a mining project in its territory. What must the State guarantee?',
    correctPosition: 'La consulta popular y la participación ciudadana: las comunidades afectadas deben tener voz en las decisiones que les impactan',
    options: ['El desarrollo económico siempre tiene prioridad sobre los derechos comunitarios', 'La consulta popular y la participación ciudadana: las comunidades afectadas deben tener voz en las decisiones que les impactan', 'Solo los expertos técnicos pueden tomar esa decisión', 'La empresa minera negocia directamente sin intervención del Estado'],
  },
]

// === LESSON DATA ===

export const L87Data: LessonData = {
  id: 'L8.7',
  hero: {
    lessonId: 'L8.7',
    title: 'Politics & Governance',
    subtitle: 'The language of political systems, civic participation, and democratic discourse',
    description: 'Master the specialized vocabulary of political systems, elections, legislation, and civic participation. From congressional debates to civic assemblies, learn to discuss democracy, governance, and political engagement in Spanish at the highest level.',
    image: '/images/L8.7/L8.7.jpg',
    gradient: 'from-blue-800/65 via-slate-700/55 to-gray-700/65',
    accentColor: 'blue-200',
  },

  objectives: [
    { icon: '🏛️', title: 'Political Systems', desc: 'Discuss democracy, separation of powers, federalism, constitutions, and forms of government.' },
    { icon: '🗳️', title: 'Elections & Campaigns', desc: 'Navigate electoral vocabulary: campaigns, candidates, polls, runoffs, and voter turnout.' },
    { icon: '📜', title: 'Legislation & Policy', desc: 'Understand lawmaking: bills, constitutional reform, executive decrees, and public policy.' },
    { icon: '🗣️', title: 'Civic Discourse', desc: 'Engage in civic debate: accountability, transparency, corruption, civil society, and youth activism.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L7.6', label: 'Diplomacy & International Relations', detail: 'L7.6 covered diplomatic language and international affairs. Now focus on domestic politics, governance structures, and civic participation.' },
    { fromLesson: 'L5.4', label: 'Argumentation & Persuasion', detail: 'L5.4 developed persuasive techniques. Now apply them to political debate, campaign rhetoric, and policy advocacy.' },
    { fromLesson: 'L7.3', label: 'Media Literacy', detail: 'L7.3 explored media analysis. Now use those critical skills to evaluate political discourse, propaganda, and electoral coverage.' },
  ],

  sectionTransitions: [
    { afterSection: 'political-systems', text: 'You understand political structures! Now let\'s explore how citizens choose their leaders through elections.' },
    { afterSection: 'elections-campaigns', text: 'Elections mastered! Let\'s learn how laws are made and policies are shaped.' },
    { afterSection: 'legislation-policy', text: 'You know the legislative process! Now let\'s discuss civic participation and democratic discourse.' },
    { afterSection: 'dialogues', text: 'Powerful political dialogues! Let\'s explore the cultural dimensions of Latin American politics.' },
    { afterSection: 'cultural', text: 'Cultural context understood! Now test your political knowledge in the Cabinet Debate.' },
    { afterSection: 'cabinet-debate', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La democracia representativa...', english: 'Representative democracy...' },
    { spanish: 'La separación de poderes...', english: 'The separation of powers...' },
    { spanish: 'La campaña electoral...', english: 'The electoral campaign...' },
    { spanish: 'Promulgar una ley...', english: 'To promulgate a law...' },
    { spanish: 'La participación ciudadana...', english: 'Citizen participation...' },
    { spanish: 'La rendición de cuentas...', english: 'Accountability...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La separación de poderes impide la concentración del poder en una sola persona', pronunciation: 'lah seh-pah-rah-see-OHN deh poh-DEH-rehs eem-PEE-deh lah kohn-sehn-trah-see-OHN dehl poh-DEHR ehn OO-nah SOH-lah pehr-SOH-nah', english: 'The separation of powers prevents the concentration of power in a single person', audio: 'la-separacion-de-poderes', tip: '"Separación" and "concentración" both end in -ción, stressed on the final syllable. This suffix is one of the most productive in Spanish political vocabulary — nación, constitución, legislación, regulación.' },
    { spanish: 'La campaña electoral busca persuadir a los votantes con propuestas concretas', pronunciation: 'lah kahm-PAH-nyah eh-lehk-toh-RAHL BOOS-kah pehr-swah-DEER ah lohs boh-TAHN-tehs kohn proh-PWEHS-tahs kohn-KREH-tahs', english: 'The electoral campaign seeks to persuade voters with concrete proposals', audio: 'la-campana-electoral', tip: '"Campaña" contains the ñ sound — the hallmark of Spanish. "Electoral" stresses the final syllable. Political vocabulary in Spanish tends to be Latinate and formal.' },
    { spanish: 'La rendición de cuentas obliga a los funcionarios a explicar sus acciones', pronunciation: 'lah rrehn-dee-see-OHN deh KWEHN-tahs oh-BLEE-gah ah lohs foon-see-oh-NAH-ree-ohs ah ehks-plee-KAHR soos ahk-see-OH-nehs', english: 'Accountability obliges officials to explain their actions', audio: 'la-rendicion-de-cuentas', tip: '"Rendición de cuentas" is the standard translation for "accountability" — literally "rendering of accounts." Many political concepts require multi-word expressions in Spanish rather than single terms.' },
    { spanish: 'La corrupción sistémica socava las instituciones y la confianza del pueblo', pronunciation: 'lah koh-rroop-see-OHN sees-TEH-mee-kah soh-KAH-bah lahs eens-tee-too-see-OH-nehs ee lah kohn-fee-AHN-sah dehl PWEH-bloh', english: 'Systemic corruption undermines institutions and the people\'s trust', audio: 'la-corrupcion-sistemica', tip: '"Socavar" (to undermine) is a powerful verb in political discourse. Notice how "corrupción" rolls the double-r at the start of the second syllable — this word demands forceful pronunciation.' },
    { spanish: 'El activismo juvenil está transformando el panorama político de América Latina', pronunciation: 'ehl ahk-tee-BEES-moh hoo-beh-NEEL ehs-TAH trahns-fohr-MAHN-doh ehl pah-noh-RAH-mah poh-LEE-tee-koh deh ah-MEH-ree-kah lah-TEE-nah', english: 'Youth activism is transforming the political landscape of Latin America', audio: 'el-activismo-juvenil', tip: '"Panorama político" (political landscape) is a metaphor used constantly in Spanish news. "Juvenil" (youth-related) stresses the final syllable — a common pattern for adjectives derived from Latin.' },
    { spanish: 'La consulta popular somete decisiones clave a la voluntad directa del pueblo', pronunciation: 'lah kohn-SOOL-tah poh-poo-LAHR soh-MEH-teh deh-see-see-OH-nehs KLAH-beh ah lah boh-loon-TAHD dee-REHK-tah dehl PWEH-bloh', english: 'A popular referendum submits key decisions to the direct will of the people', audio: 'la-consulta-popular', tip: '"Voluntad del pueblo" (will of the people) is a cornerstone phrase in democratic discourse. "Consulta popular" is used across Latin America for referenda and plebiscites.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'political-systems', label: 'Political Systems' },
    { id: 'elections-campaigns', label: 'Elections & Campaigns' },
    { id: 'legislation-policy', label: 'Legislation & Policy' },
    { id: 'civic-discourse', label: 'Civic Discourse' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'politics-sorting', label: 'Politics Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'cabinet-debate', label: 'Cabinet Debate' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'political-systems',
      title: 'Political Systems — Sistemas Políticos',
      description: 'The fundamental structures that organize political power: democracy, separation of powers, and forms of government.',
      tabs: [
        { label: 'Democracy & Law', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'political-systems').slice(0, 6) },
        { label: 'Government Forms', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'political-systems').slice(6) },
      ],
    },
    {
      id: 'elections-campaigns',
      title: 'Elections & Campaigns — Elecciones y Campañas',
      description: 'The vocabulary of democratic choice: campaigns, candidates, polls, and the electoral process.',
      tabs: [
        { label: 'The Campaign', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'elections-campaigns').slice(0, 6) },
        { label: 'Election Day', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'elections-campaigns').slice(6) },
      ],
    },
    {
      id: 'legislation-policy',
      title: 'Legislation & Policy — Legislación y Política Pública',
      description: 'How laws are made, reformed, and implemented: bills, decrees, budgets, and regulation.',
      tabs: [
        { label: 'Lawmaking', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'legislation-policy').slice(0, 6) },
        { label: 'Governance', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'legislation-policy').slice(6) },
      ],
    },
    {
      id: 'civic-discourse',
      title: 'Civic Discourse — Discurso Cívico',
      description: 'The language of civic engagement: participation, accountability, transparency, and social movements.',
      tabs: [
        { label: 'Accountability', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'civic-discourse').slice(0, 6) },
        { label: 'Activism & Rights', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'civic-discourse').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Political Vocabulary Is Latinate',
      content: 'Spanish political vocabulary shares deep roots with English through Latin: constitución/constitution, legislación/legislation, democracia/democracy, república/republic. The suffixes differ (-ción vs. -tion, -cia vs. -cy) but the stems are recognizable. This makes political Spanish surprisingly accessible for English speakers, though pronunciation differs significantly.',
      example: 'constitución ↔ constitution | legislación ↔ legislation | democracia ↔ democracy',
    },
    {
      title: 'The -ción Suffix in Political Spanish',
      content: 'The suffix -ción appears in dozens of political terms: constitución, separación, participación, regulación, descentralización, consulta. It always carries the stress and is always feminine (la constitución, la regulación). Mastering this pattern unlocks a vast portion of political vocabulary instantly.',
      example: 'la constitución | la regulación | la participación | la descentralización',
      reviewFrom: 'L7.6',
    },
    {
      title: 'Formal Register in Political Speech',
      content: 'Political discourse in Spanish uses an elevated register with specific markers: "cabe señalar que" (it should be noted that), "en virtud de" (by virtue of), "con arreglo a" (in accordance with). This formal language signals authority and institutional weight. Even informal political discussions in Latin America tend to be more formal than their English equivalents.',
      example: 'cabe señalar que... | en virtud de... | con arreglo a... | conforme a...',
      reviewFrom: 'L5.4',
    },
    {
      title: 'Compound Political Terms',
      content: 'Many key political concepts are multi-word expressions: "estado de derecho" (rule of law), "rendición de cuentas" (accountability), "separación de poderes" (separation of powers), "consulta popular" (referendum). These function as single semantic units — learn them as complete phrases, not word by word.',
      example: 'estado de derecho | rendición de cuentas | sociedad civil | política pública',
    },
  ],

  flashcardGroups: [
    {
      key: 'systems',
      label: 'Political Systems',
      audioKeys: ['la-democracia-representativa', 'el-estado-de-derecho', 'la-separacion-de-poderes', 'el-poder-ejecutivo', 'el-poder-legislativo', 'el-poder-judicial', 'el-federalismo-distribuye', 'la-republica-parlamentaria'],
    },
    {
      key: 'elections',
      label: 'Elections & Campaigns',
      audioKeys: ['la-campana-electoral', 'el-candidato-presento', 'las-encuestas-de-opinion', 'la-jornada-electoral', 'el-escrutinio-de-los', 'la-segunda-vuelta', 'el-voto-en-blanco', 'el-debate-presidencial'],
    },
    {
      key: 'civic',
      label: 'Legislation & Civic',
      audioKeys: ['promulgar-una-ley', 'el-proyecto-de-ley', 'la-politica-publica', 'la-participacion-ciudadana', 'la-rendicion-de-cuentas', 'la-transparencia-gubernamental', 'la-sociedad-civil', 'el-activismo-juvenil'],
    },
  ],

  matchPairs: [
    { left: 'La separación de poderes', right: 'Prevents power concentration' },
    { left: 'La segunda vuelta', right: 'Runoff election' },
    { left: 'Promulgar una ley', right: 'Give a law binding force' },
    { left: 'La rendición de cuentas', right: 'Accountability' },
    { left: 'El clientelismo', right: 'Favors for electoral loyalty' },
    { left: 'La consulta popular', right: 'Public referendum' },
    { left: 'El voto en blanco', right: 'Blank/protest vote' },
    { left: 'La sociedad civil', right: 'Organized citizenry' },
  ],
  matchLabels: { left: 'Concepto Político', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Which Branch of Government?',
      instruction: 'Does this function belong to the Executive, Legislative, or Judicial branch?',
      buckets: ['Executive 🏛️', 'Legislative 📜', 'Judicial ⚖️'],
      items: [
        { text: 'Promulgar decretos ejecutivos', bucket: 'Executive 🏛️' },
        { text: 'Dirigir la política exterior', bucket: 'Executive 🏛️' },
        { text: 'Nombrar ministros del gabinete', bucket: 'Executive 🏛️' },
        { text: 'Aprobar el presupuesto nacional', bucket: 'Legislative 📜' },
        { text: 'Debatir proyectos de ley', bucket: 'Legislative 📜' },
        { text: 'Reformar la constitución', bucket: 'Legislative 📜' },
        { text: 'Interpretar las leyes', bucket: 'Judicial ⚖️' },
        { text: 'Declarar inconstitucional un decreto', bucket: 'Judicial ⚖️' },
      ],
    },
    {
      title: 'Democratic Strength or Weakness?',
      instruction: 'Does this concept strengthen or weaken democracy?',
      buckets: ['Strengthens Democracy ✅', 'Weakens Democracy ❌'],
      items: [
        { text: 'La transparencia gubernamental', bucket: 'Strengthens Democracy ✅' },
        { text: 'La participación ciudadana', bucket: 'Strengthens Democracy ✅' },
        { text: 'La alternancia en el poder', bucket: 'Strengthens Democracy ✅' },
        { text: 'La libertad de prensa', bucket: 'Strengthens Democracy ✅' },
        { text: 'La corrupción sistémica', bucket: 'Weakens Democracy ❌' },
        { text: 'El clientelismo político', bucket: 'Weakens Democracy ❌' },
        { text: 'El autoritarismo', bucket: 'Weakens Democracy ❌' },
        { text: 'El abstencionismo masivo', bucket: 'Weakens Democracy ❌' },
      ],
    },
  ],
  sortSectionId: 'politics-sorting',
  sortTitle: 'Politics Sorting',

  dialogues: [
    {
      id: 'dialogue-congress-cdmx',
      title: 'Congressional Debate on Electoral Reform — CDMX',
      location: 'Mexico City',
      lines: [
        { speaker: 'Presidenta de la Comisión', text: 'Se abre el debate sobre el proyecto de reforma electoral. Tiene la palabra la diputada Ramírez.', audio: '/audio/L8.7/phrases/d1-line1.mp3' },
        { speaker: 'Dip. Ramírez', text: 'Compañeros legisladores, esta reforma busca fortalecer la participación ciudadana mediante la implementación del voto electrónico.', audio: '/audio/L8.7/phrases/d1-line2.mp3' },
        { speaker: 'Dip. Contreras', text: 'Con todo respeto, la soberanía popular no se fortalece con tecnología; se fortalece con educación cívica y transparencia.', audio: '/audio/L8.7/phrases/d1-line3.mp3' },
        { speaker: 'Dip. Ramírez', text: 'Cabe señalar que el abstencionismo ha alcanzado niveles históricos. El voto electrónico facilita el acceso al sufragio, especialmente en comunidades rurales.', audio: '/audio/L8.7/phrases/d1-line4.mp3', annotations: [{ phrase: 'Cabe señalar que', fromLesson: 'L7.2', note: 'Formal discourse marker from academic register' }] },
        { speaker: 'Dip. Morales', text: 'La pregunta fundamental es: ¿garantiza esta reforma la rendición de cuentas? Sin auditorías independientes, el voto electrónico puede ser manipulado.', audio: '/audio/L8.7/phrases/d1-line5.mp3' },
        { speaker: 'Dip. Contreras', text: 'Además, debemos considerar la brecha digital. No podemos promulgar una ley que excluya a los sectores más vulnerables de la sociedad.', audio: '/audio/L8.7/phrases/d1-line6.mp3' },
        { speaker: 'Presidenta de la Comisión', text: 'Les recuerdo que el estado de derecho exige que toda reforma respete los principios constitucionales de universalidad y secreto del voto.', audio: '/audio/L8.7/phrases/d1-line7.mp3' },
        { speaker: 'Dip. Ramírez', text: 'Por supuesto. El proyecto incluye una consulta popular para que los propios ciudadanos decidan si aceptan esta modalidad.', audio: '/audio/L8.7/phrases/d1-line8.mp3' },
        { speaker: 'Dip. Morales', text: 'La sociedad civil ha manifestado preocupaciones legítimas. Propongo que este proyecto pase a una segunda vuelta de debate con la participación de expertos independientes.', audio: '/audio/L8.7/phrases/d1-line9.mp3' },
        { speaker: 'Dip. Contreras', text: 'Concuerdo. La democracia representativa funciona cuando escuchamos todas las voces, no solo las que nos convienen políticamente.', audio: '/audio/L8.7/phrases/d1-line10.mp3' },
        { speaker: 'Presidenta de la Comisión', text: 'Se somete a votación la propuesta de ampliar el debate. Los que estén a favor, sírvanse manifestarlo.', audio: '/audio/L8.7/phrases/d1-line11.mp3' },
        { speaker: 'Dip. Ramírez', text: 'Acepto la propuesta. El activismo juvenil y las organizaciones ciudadanas merecen ser escuchados antes de tomar una decisión definitiva.', audio: '/audio/L8.7/phrases/d1-line12.mp3' },
        { speaker: 'Presidenta de la Comisión', text: 'Aprobado por unanimidad. Se aplaza el debate para incluir una audiencia pública con organizaciones de la sociedad civil.', audio: '/audio/L8.7/phrases/d1-line13.mp3' },
        { speaker: 'Dip. Morales', text: 'Así debe funcionar la separación de poderes: el legislativo delibera con responsabilidad, no con prisa.', audio: '/audio/L8.7/phrases/d1-line14.mp3' },
        { speaker: 'Presidenta de la Comisión', text: 'Se levanta la sesión. Recordemos que la gobernanza democrática exige diálogo entre todas las fuerzas políticas.', audio: '/audio/L8.7/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-assembly-montevideo',
      title: 'Civic Assembly on Local Governance — Montevideo',
      location: 'Montevideo',
      lines: [
        { speaker: 'Facilitadora', text: 'Buenas tardes. Esta asamblea ciudadana tiene como objetivo debatir el presupuesto participativo de nuestro barrio para el próximo año.', audio: '/audio/L8.7/phrases/d2-line1.mp3' },
        { speaker: 'Vecino Torres', text: 'Yo propongo que se destine más presupuesto a la educación cívica en las escuelas. Los jóvenes necesitan entender cómo funciona la democracia.', audio: '/audio/L8.7/phrases/d2-line2.mp3' },
        { speaker: 'Vecina López', text: 'Estoy de acuerdo, pero primero necesitamos transparencia. ¿Dónde están los informes de ejecución del presupuesto anterior?', audio: '/audio/L8.7/phrases/d2-line3.mp3', annotations: [{ phrase: 'transparencia', fromLesson: 'L8.7', note: 'Government transparency as a core civic demand' }] },
        { speaker: 'Facilitadora', text: 'Excelente punto. La rendición de cuentas es la base de la participación ciudadana. Tenemos los informes disponibles en la página web municipal.', audio: '/audio/L8.7/phrases/d2-line4.mp3' },
        { speaker: 'Vecino Gutiérrez', text: 'El problema real es el clientelismo. En las últimas elecciones, se repartieron favores a cambio de votos. Eso no es democracia.', audio: '/audio/L8.7/phrases/d2-line5.mp3' },
        { speaker: 'Vecina López', text: 'Por eso la sociedad civil organizada es tan importante. Nosotros, como vecinos, debemos vigilar y demandar mejoras.', audio: '/audio/L8.7/phrases/d2-line6.mp3' },
        { speaker: 'Vecino Torres', text: 'Uruguay tiene una tradición democrática fuerte. La consulta popular aquí funciona. Pero no podemos dar eso por sentado.', audio: '/audio/L8.7/phrases/d2-line7.mp3' },
        { speaker: 'Facilitadora', text: '¿Alguien más quiere intervenir? Recordemos que el derecho a la protesta pacífica incluye el derecho a expresar desacuerdo aquí.', audio: '/audio/L8.7/phrases/d2-line8.mp3' },
        { speaker: 'Joven Martínez', text: 'Soy parte de un colectivo estudiantil. Creemos que el activismo juvenil debe tener un espacio formal en estas decisiones, no solo consultivo.', audio: '/audio/L8.7/phrases/d2-line9.mp3' },
        { speaker: 'Vecino Gutiérrez', text: 'Los movimientos sociales siempre han sido motores de cambio en nuestra región. Tu generación tiene mucho que aportar.', audio: '/audio/L8.7/phrases/d2-line10.mp3' },
        { speaker: 'Facilitadora', text: 'Propongo crear una comisión mixta: vecinos, jóvenes y funcionarios municipales. La descentralización funciona cuando todos participan.', audio: '/audio/L8.7/phrases/d2-line11.mp3' },
        { speaker: 'Vecina López', text: 'Me parece justo. La libertad de prensa también importa: invitemos a medios locales para que la ciudadanía sepa qué decidimos aquí.', audio: '/audio/L8.7/phrases/d2-line12.mp3' },
        { speaker: 'Joven Martínez', text: 'La educación cívica prepara a los jóvenes para ejercer una ciudadanía responsable. Eso empieza en asambleas como esta.', audio: '/audio/L8.7/phrases/d2-line13.mp3' },
        { speaker: 'Facilitadora', text: 'Hermosas palabras. La política pública más efectiva es la que nace del diálogo ciudadano. Votemos las propuestas presentadas.', audio: '/audio/L8.7/phrases/d2-line14.mp3' },
        { speaker: 'Vecino Torres', text: 'Hoy demostramos que la participación ciudadana fortalece la democracia. Esto es lo que significa el estado de derecho en la práctica.', audio: '/audio/L8.7/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Participate in a congressional debate on electoral reform in Mexico City and attend a civic assembly on local governance and participatory budgeting in Montevideo.',

  culturalNotes: [
    {
      title: 'Political Diversity in Latin America',
      content: 'Latin America showcases an extraordinary range of political systems: from Uruguay\'s strong liberal democracy to Cuba\'s single-party state, from Mexico\'s federal republic to Bolivia\'s plurinational state that formally recognizes indigenous governance systems. Countries like Costa Rica have had no military since 1948, while others have experienced military dictatorships within living memory. This diversity makes political vocabulary in Spanish incredibly rich — "democracia" means something different in Santiago, Havana, and Bogotá, reflecting distinct historical trajectories.',
    },
    {
      title: 'Indigenous Political Movements',
      content: 'Indigenous political movements have reshaped governance across Latin America. Bolivia\'s 2009 constitution declared the country a "Estado Plurinacional," recognizing 36 indigenous nations with the right to self-governance. Ecuador\'s 2008 constitution included "Sumak Kawsay" (Buen Vivir — Good Living), an indigenous Quechua concept, as a governing principle. Mexico\'s Zapatista movement in Chiapas created autonomous self-governing communities. These movements have introduced concepts like "la autonomía comunitaria" and "los usos y costumbres" into mainstream political discourse.',
    },
    {
      title: 'Youth Activism and Digital Politics',
      content: 'A new generation of young Latin Americans is using social media, digital platforms, and creative protest to demand political change. Chile\'s 2019 "estallido social" (social explosion) was largely driven by students demanding constitutional reform. Colombia\'s 2021 "Paro Nacional" (National Strike) was organized through social networks by young people protesting inequality. Mexico\'s feminist movements have created new political vocabulary: "la marea verde" (the green wave) for reproductive rights, "Ni una menos" against gender violence. These movements show that "la participación ciudadana" is being redefined by digital-native generations.',
    },
  ],
  culturalGradient: 'from-blue-50 to-slate-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La separación de poderes" divides government into:', options: ['Two branches', 'Three branches: executive, legislative, judicial', 'Four branches', 'Five branches'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La ___ de cuentas obliga a los funcionarios a explicar sus acciones" (accountability)', answer: 'rendición' },
    { id: 3, type: 'tf', text: '"La segunda vuelta" is held when no candidate obtains an absolute majority.', answer: true },
    { id: 4, type: 'mc', text: '"Promulgar una ley" means:', options: ['To propose a law', 'To debate a law', 'To give a law binding force', 'To veto a law'], answer: 2 },
    { id: 5, type: 'mc', text: '"El clientelismo político" refers to:', options: ['A business model', 'Exchanging favors for electoral loyalty', 'A type of democracy', 'International trade agreements'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "La ___ popular somete decisiones clave a la voluntad directa del pueblo" (referendum)', answer: 'consulta' },
    { id: 7, type: 'mc', text: '"El estado de derecho" guarantees that:', options: ['The president has absolute power', 'No one is above the law', 'Only the military enforces order', 'Elections are optional'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, the congressional debate discusses:', options: ['Military spending', 'Electoral reform and electronic voting', 'International trade', 'Immigration policy'], answer: 1 },
    { id: 9, type: 'tf', text: '"El voto en blanco" is considered an illegitimate form of electoral participation.', answer: false },
    { id: 10, type: 'mc', text: '"La sociedad civil organizada" refers to:', options: ['The military', 'Citizens who organize to monitor and demand from government', 'Political parties only', 'International organizations'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La corrupción ___ socava las instituciones" (systemic)', answer: 'sistémica' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does the civic assembly in Montevideo discuss?', options: ['National defense', 'Participatory budgeting', 'International treaties', 'Electoral campaigns'], answer: 1 },
    { id: 13, type: 'mc', text: '"El federalismo" distributes powers between:', options: ['President and vice president', 'Central government and states', 'Military and civilians', 'Senate and House'], answer: 1 },
    { id: 14, type: 'tf', text: 'Bolivia\'s 2009 constitution declared it a "Estado Plurinacional," recognizing indigenous self-governance.', answer: true },
    { id: 15, type: 'mc', text: '"El activismo juvenil" is described in the lesson as:', options: ['A threat to stability', 'Transforming Latin America\'s political landscape', 'Irrelevant to real politics', 'Only happening in Europe'], answer: 1 },
  ],

  audioBase: '/audio/L8.7/phrases',

  uniqueActivity: {
    id: 'CabinetDebateL87',
    sectionId: 'cabinet-debate',
    sectionColor: 'bg-blue-50/40',
    sectionBorder: 'border-blue-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'political-systems': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'elections-campaigns': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'legislation-policy': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'civic-discourse': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'matching-game': { bg: 'bg-slate-50/30', border: 'border-slate-100' },
    'politics-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'cabinet-debate': { bg: 'bg-blue-50/40', border: 'border-blue-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
