import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Live Commentary (12) ===
  { spanish: '¡Gooool! ¡Gol de la selección! ¡Se desborda la hinchada en las tribunas!', english: 'Goooal! Goal for the national team! The fans are going wild in the stands!', pronunciation: 'GOOHL GOHL deh lah seh-lehk-see-OHN seh dehs-BOHR-dah lah een-CHAH-dah ehn lahs tree-BOO-nahs', category: 'live-commentary', audio: 'gol-de-la-seleccion' },
  { spanish: 'Saca de banda para el equipo local desde la línea lateral derecha', english: 'Throw-in for the home team from the right sideline', pronunciation: 'SAH-kah deh BAHN-dah PAH-rah ehl eh-KEE-poh loh-KAHL DEHS-deh lah LEE-neh-ah lah-teh-RAHL deh-REH-chah', category: 'live-commentary', audio: 'saca-de-banda' },
  { spanish: 'Tiro de esquina para el visitante, se preparan en el área grande', english: 'Corner kick for the away team, they are getting ready in the box', pronunciation: 'TEE-roh deh ehs-KEE-nah PAH-rah ehl bee-see-TAHN-teh seh preh-PAH-rahn ehn ehl AH-reh-ah GRAHN-deh', category: 'live-commentary', audio: 'tiro-de-esquina' },
  { spanish: '¡Fuera de lugar! El delantero estaba en posición adelantada y el árbitro lo marca', english: 'Offside! The striker was in an advanced position and the referee calls it', pronunciation: 'foo-EH-rah deh loo-GAHR ehl deh-lahn-TEH-roh ehs-TAH-bah ehn poh-see-see-OHN ah-deh-lahn-TAH-dah ee ehl AHR-bee-troh loh MAHR-kah', category: 'live-commentary', audio: 'fuera-de-lugar' },
  { spanish: 'Estamos en tiempo de descuento, quedan tres minutos de adición', english: 'We are in stoppage time, three minutes of added time remain', pronunciation: 'ehs-TAH-mohs ehn tee-EHM-poh deh dehs-KWEHN-toh KEH-dahn trehs mee-NOO-tohs deh ah-dee-see-OHN', category: 'live-commentary', audio: 'tiempo-de-descuento' },
  { spanish: '¡Penal! ¡El árbitro señala el punto de penalti sin dudarlo!', english: 'Penalty! The referee points to the penalty spot without hesitation!', pronunciation: 'peh-NAHL ehl AHR-bee-troh seh-NYAH-lah ehl POON-toh deh peh-NAHL-tee seen doo-DAHR-loh', category: 'live-commentary', audio: 'penal-el-arbitro' },
  { spanish: '¡Tarjeta roja directa! El jugador es expulsado del campo de juego', english: 'Straight red card! The player is sent off the field of play', pronunciation: 'tahr-HEH-tah RROH-hah dee-REHK-tah ehl hoo-gah-DOHR ehs ehks-pool-SAH-doh dehl KAHM-poh deh HWEH-goh', category: 'live-commentary', audio: 'tarjeta-roja-directa' },
  { spanish: '¡Contraataque fulminante! Tres toques y el balón está en la red', english: 'Lightning counterattack! Three touches and the ball is in the net', pronunciation: 'kohn-trah-ah-TAH-keh fool-mee-NAHN-teh trehs TOH-kehs ee ehl bah-LOHN ehs-TAH ehn lah RREHD', category: 'live-commentary', audio: 'contraataque-fulminante' },
  { spanish: 'El portero se luce con una atajada espectacular a mano cambiada', english: 'The goalkeeper shines with a spectacular save with the opposite hand', pronunciation: 'ehl pohr-TEH-roh seh LOO-seh kohn OO-nah ah-tah-HAH-dah ehs-pehk-tah-koo-LAHR ah MAH-noh kahm-bee-AH-dah', category: 'live-commentary', audio: 'el-portero-se-luce' },
  { spanish: 'Falta táctica en la mitad de la cancha, el juego se detiene', english: 'Tactical foul at midfield, play is stopped', pronunciation: 'FAHL-tah TAHK-tee-kah ehn lah mee-TAHD deh lah KAHN-chah ehl HWEH-goh seh deh-tee-EH-neh', category: 'live-commentary', audio: 'falta-tactica-mitad' },
  { spanish: '¡Golazo de media cancha! ¡Esto es candidato al gol del año!', english: 'Amazing goal from midfield! This is a candidate for goal of the year!', pronunciation: 'goh-LAH-soh deh MEH-dee-ah KAHN-chah EHS-toh ehs kahn-dee-DAH-toh ahl gohl dehl AH-nyoh', category: 'live-commentary', audio: 'golazo-de-media-cancha' },
  { spanish: 'Cambio en el equipo local: sale el número diez, entra el nueve', english: 'Substitution for the home team: number ten comes off, number nine comes on', pronunciation: 'KAHM-bee-oh ehn ehl eh-KEE-poh loh-KAHL SAH-leh ehl NOO-meh-roh dee-EHS EHN-trah ehl NWEH-beh', category: 'live-commentary', audio: 'cambio-en-el-equipo' },

  // === Sports Analysis (12) ===
  { spanish: 'La táctica del equipo se basa en un esquema de cuatro-tres-tres con presión alta', english: 'The team\'s tactic is based on a four-three-three formation with high pressing', pronunciation: 'lah TAHK-tee-kah dehl eh-KEE-poh seh BAH-sah ehn oon ehs-KEH-mah deh KWAH-troh trehs trehs kohn preh-see-OHN AHL-tah', category: 'sports-analysis', audio: 'la-tactica-del-equipo' },
  { spanish: 'La presión alta obliga al rival a cometer errores en la salida desde atrás', english: 'High pressing forces the opponent into mistakes when playing out from the back', pronunciation: 'lah preh-see-OHN AHL-tah oh-BLEE-gah ahl rree-BAHL ah koh-meh-TEHR eh-RROH-rehs ehn lah sah-LEE-dah DEHS-deh ah-TRAHS', category: 'sports-analysis', audio: 'la-presion-alta-obliga' },
  { spanish: 'La posesión del balón superó el sesenta por ciento en el primer tiempo', english: 'Ball possession exceeded sixty percent in the first half', pronunciation: 'lah poh-seh-see-OHN dehl bah-LOHN soo-peh-ROH ehl seh-SEHN-tah pohr see-EHN-toh ehn ehl pree-MEHR tee-EHM-poh', category: 'sports-analysis', audio: 'la-posesion-del-balon' },
  { spanish: 'La defensa en zona permite cubrir más espacio pero exige coordinación perfecta', english: 'Zone defense allows covering more space but demands perfect coordination', pronunciation: 'lah deh-FEHN-sah ehn SOH-nah pehr-MEE-teh koo-BREER mahs ehs-PAH-see-oh PEH-roh ehk-SEE-heh koh-ohr-dee-nah-see-OHN pehr-FEHK-tah', category: 'sports-analysis', audio: 'la-defensa-en-zona' },
  { spanish: 'El rendimiento del jugador ha decaído notablemente en los últimos veinte minutos', english: 'The player\'s performance has notably declined in the last twenty minutes', pronunciation: 'ehl rrehn-dee-mee-EHN-toh dehl hoo-gah-DOHR ah deh-kah-EE-doh noh-TAH-bleh-MEHN-teh ehn lohs OOL-tee-mohs BEHN-teh mee-NOO-tohs', category: 'sports-analysis', audio: 'el-rendimiento-del-jugador' },
  { spanish: 'Las estadísticas del partido muestran un dominio claro del equipo visitante', english: 'The match statistics show a clear dominance by the visiting team', pronunciation: 'lahs ehs-tah-DEES-tee-kahs dehl pahr-TEE-doh MWEHS-trahn oon doh-MEE-nee-oh KLAH-roh dehl eh-KEE-poh bee-see-TAHN-teh', category: 'sports-analysis', audio: 'las-estadisticas-del-partido' },
  { spanish: 'El mediocampista tuvo un porcentaje de pases completados del noventa y dos por ciento', english: 'The midfielder had a pass completion rate of ninety-two percent', pronunciation: 'ehl meh-dee-oh-kahm-PEES-tah TOO-boh oon pohr-sehn-TAH-heh deh PAH-sehs kohm-pleh-TAH-dohs dehl noh-BEHN-tah ee dohs pohr see-EHN-toh', category: 'sports-analysis', audio: 'el-mediocampista-tuvo' },
  { spanish: 'La transición de defensa a ataque fue la clave del triunfo', english: 'The transition from defense to attack was the key to victory', pronunciation: 'lah trahn-see-see-OHN deh deh-FEHN-sah ah ah-TAH-keh fweh lah KLAH-beh dehl tree-OON-foh', category: 'sports-analysis', audio: 'la-transicion-de-defensa' },
  { spanish: 'El director técnico hizo cambios tácticos acertados en el entretiempo', english: 'The head coach made wise tactical changes at halftime', pronunciation: 'ehl dee-rehk-TOHR TEHK-nee-koh EE-soh KAHM-bee-ohs TAHK-tee-kohs ah-sehr-TAH-dohs ehn ehl ehn-treh-tee-EHM-poh', category: 'sports-analysis', audio: 'el-director-tecnico-hizo' },
  { spanish: 'Los tiros a puerta fueron ocho contra tres a favor del equipo local', english: 'Shots on goal were eight to three in favor of the home team', pronunciation: 'lohs TEE-rohs ah PWEHR-tah foo-EH-rohn OH-choh KOHN-trah trehs ah fah-BOHR dehl eh-KEE-poh loh-KAHL', category: 'sports-analysis', audio: 'los-tiros-a-puerta' },
  { spanish: 'El mapa de calor revela que el lateral derecho fue el jugador más activo', english: 'The heat map reveals that the right back was the most active player', pronunciation: 'ehl MAH-pah deh kah-LOHR rreh-BEH-lah keh ehl lah-teh-RAHL deh-REH-choh fweh ehl hoo-gah-DOHR mahs ahk-TEE-boh', category: 'sports-analysis', audio: 'el-mapa-de-calor' },
  { spanish: 'El VAR confirmó la decisión del árbitro tras revisar la jugada polémica', english: 'VAR confirmed the referee\'s decision after reviewing the controversial play', pronunciation: 'ehl bahr kohn-feer-MOH lah deh-see-see-OHN dehl AHR-bee-troh trahs rreh-bee-SAHR lah hoo-GAH-dah poh-LEH-mee-kah', category: 'sports-analysis', audio: 'el-var-confirmo' },

  // === Athlete Interviews (12) ===
  { spanish: 'Ha sido un partido muy disputado, los dos equipos dieron todo en la cancha', english: 'It was a very hard-fought match, both teams gave everything on the field', pronunciation: 'ah SEE-doh oon pahr-TEE-doh MOO-ee dees-poo-TAH-doh lohs dohs eh-KEE-pohs dee-EH-rohn TOH-doh ehn lah KAHN-chah', category: 'athlete-interviews', audio: 'ha-sido-un-partido' },
  { spanish: 'Dimos todo en la cancha y creo que el resultado es justo', english: 'We gave everything on the field and I think the result is fair', pronunciation: 'DEE-mohs TOH-doh ehn lah KAHN-chah ee KREH-oh keh ehl rreh-sool-TAH-doh ehs HOOS-toh', category: 'athlete-interviews', audio: 'dimos-todo-en-la-cancha' },
  { spanish: 'El equipo mostró carácter para remontar un marcador adverso', english: 'The team showed character to come back from an unfavorable score', pronunciation: 'ehl eh-KEE-poh mohs-TROH kah-RAHK-tehr PAH-rah rreh-mohn-TAHR oon mahr-kah-DOHR ahd-BEHR-soh', category: 'athlete-interviews', audio: 'el-equipo-mostro-caracter' },
  { spanish: 'Hay que seguir trabajando, esto no ha terminado todavía', english: 'We have to keep working, this isn\'t over yet', pronunciation: 'AH-ee keh seh-GEER trah-bah-HAHN-doh EHS-toh noh ah tehr-mee-NAH-doh toh-dah-BEE-ah', category: 'athlete-interviews', audio: 'hay-que-seguir-trabajando' },
  { spanish: 'Dedicamos esta victoria a la afición que nos apoyó durante todo el torneo', english: 'We dedicate this victory to the fans who supported us throughout the tournament', pronunciation: 'deh-dee-KAH-mohs EHS-tah beek-TOH-ree-ah ah lah ah-fee-see-OHN keh nohs ah-poh-YOH doo-RAHN-teh TOH-doh ehl tohr-NEH-oh', category: 'athlete-interviews', audio: 'dedicamos-esta-victoria' },
  { spanish: 'Estoy muy orgulloso de mis compañeros, lucharon hasta el último minuto', english: 'I am very proud of my teammates, they fought until the very last minute', pronunciation: 'ehs-TOY MOO-ee ohr-goo-YOH-soh deh mees kohm-pah-NYEH-rohs loo-CHAH-rohn AHS-tah ehl OOL-tee-moh mee-NOO-toh', category: 'athlete-interviews', audio: 'estoy-muy-orgulloso' },
  { spanish: 'La lesión me tuvo fuera tres meses, pero volví más fuerte que nunca', english: 'The injury kept me out for three months, but I came back stronger than ever', pronunciation: 'lah leh-see-OHN meh TOO-boh foo-EH-rah trehs MEH-sehs PEH-roh bohl-BEE mahs foo-EHR-teh keh NOON-kah', category: 'athlete-interviews', audio: 'la-lesion-me-tuvo' },
  { spanish: 'El gol que marqué hoy es el más importante de mi carrera', english: 'The goal I scored today is the most important of my career', pronunciation: 'ehl gohl keh mahr-KEH OY ehs ehl mahs eem-pohr-TAHN-teh deh mee kah-RREH-rah', category: 'athlete-interviews', audio: 'el-gol-que-marque' },
  { spanish: 'Tenemos que mantener los pies en la tierra y pensar en el próximo partido', english: 'We have to stay grounded and think about the next match', pronunciation: 'teh-NEH-mohs keh mahn-teh-NEHR lohs pee-EHS ehn lah tee-EH-rrah ee pehn-SAHR ehn ehl PROHK-see-moh pahr-TEE-doh', category: 'athlete-interviews', audio: 'tenemos-que-mantener' },
  { spanish: 'Mi entrenador me dijo que confiara en mis habilidades y así lo hice', english: 'My coach told me to trust my abilities and that\'s what I did', pronunciation: 'mee ehn-treh-nah-DOHR meh DEE-hoh keh kohn-fee-AH-rah ehn mees ah-bee-lee-DAH-dehs ee ah-SEE loh EE-seh', category: 'athlete-interviews', audio: 'mi-entrenador-me-dijo' },
  { spanish: 'El público nos dio una energía increíble, se siente su apoyo desde la cancha', english: 'The crowd gave us incredible energy, you can feel their support from the field', pronunciation: 'ehl POO-blee-koh nohs dee-OH OO-nah eh-nehr-HEE-ah een-kreh-EE-bleh seh see-EHN-teh soo ah-POH-yoh DEHS-deh lah KAHN-chah', category: 'athlete-interviews', audio: 'el-publico-nos-dio' },
  { spanish: 'Agradezco a Dios y a mi familia por estar siempre a mi lado', english: 'I thank God and my family for always being by my side', pronunciation: 'ah-grah-DEHS-koh ah dee-OHS ee ah mee fah-MEE-lee-ah pohr ehs-TAHR see-EHM-preh ah mee LAH-doh', category: 'athlete-interviews', audio: 'agradezco-a-dios' },

  // === Fan Culture (12) ===
  { spanish: 'La hinchada es el alma del equipo, su pasión mueve montañas', english: 'The fans are the soul of the team, their passion moves mountains', pronunciation: 'lah een-CHAH-dah ehs ehl AHL-mah dehl eh-KEE-poh soo pah-see-OHN MWEH-beh mohn-TAH-nyahs', category: 'fan-culture', audio: 'la-hinchada-es-el-alma' },
  { spanish: 'La barra brava alienta sin parar durante los noventa minutos', english: 'The ultras cheer nonstop for the full ninety minutes', pronunciation: 'lah BAH-rrah BRAH-bah ah-lee-EHN-tah seen pah-RAHR doo-RAHN-teh lohs noh-BEHN-tah mee-NOO-tohs', category: 'fan-culture', audio: 'la-barra-brava-alienta' },
  { spanish: 'El clásico entre Boca y River es uno de los derbis más apasionantes del mundo', english: 'The classic match between Boca and River is one of the most passionate derbies in the world', pronunciation: 'ehl KLAH-see-koh EHN-treh BOH-kah ee RREE-behr ehs OO-noh deh lohs DEHR-bees mahs ah-pah-see-oh-NAHN-tehs dehl MOON-doh', category: 'fan-culture', audio: 'el-clasico-entre-boca' },
  { spanish: 'Me puse la camiseta de la selección y salí a celebrar a la calle', english: 'I put on the national team jersey and went out to celebrate in the street', pronunciation: 'meh POO-seh lah kah-mee-SEH-tah deh lah seh-lehk-see-OHN ee sah-LEE ah seh-leh-BRAHR ah lah KAH-yeh', category: 'fan-culture', audio: 'me-puse-la-camiseta' },
  { spanish: '¡El estadio se vino abajo con el gol del empate en el último segundo!', english: 'The stadium went wild with the equalizing goal in the last second!', pronunciation: 'ehl ehs-TAH-dee-oh seh BEE-noh ah-BAH-hoh kohn ehl gohl dehl ehm-PAH-teh ehn ehl OOL-tee-moh seh-GOON-doh', category: 'fan-culture', audio: 'el-estadio-se-vino-abajo' },
  { spanish: 'Cantar los himnos del equipo con ochenta mil personas es una experiencia única', english: 'Singing the team anthems with eighty thousand people is a unique experience', pronunciation: 'kahn-TAHR lohs EEM-nohs dehl eh-KEE-poh kohn oh-CHEHN-tah meel pehr-SOH-nahs ehs OO-nah ehks-peh-ree-EHN-see-ah OO-nee-kah', category: 'fan-culture', audio: 'cantar-los-himnos' },
  { spanish: 'Los abonados llenan el estadio partido tras partido, llueva o truene', english: 'Season ticket holders fill the stadium match after match, rain or shine', pronunciation: 'lohs ah-boh-NAH-dohs YEH-nahn ehl ehs-TAH-dee-oh pahr-TEE-doh trahs pahr-TEE-doh YWEH-bah oh TRWEH-neh', category: 'fan-culture', audio: 'los-abonados-llenan' },
  { spanish: 'El banderazo antes del partido llena las calles de color y pasión', english: 'The fan march before the match fills the streets with color and passion', pronunciation: 'ehl bahn-deh-RAH-soh AHN-tehs dehl pahr-TEE-doh YEH-nah lahs KAH-yehs deh koh-LOHR ee pah-see-OHN', category: 'fan-culture', audio: 'el-banderazo-antes' },
  { spanish: 'La rivalidad entre equipos es parte de la identidad cultural de cada ciudad', english: 'The rivalry between teams is part of the cultural identity of each city', pronunciation: 'lah rree-bah-lee-DAHD EHN-treh eh-KEE-pohs ehs PAHR-teh deh lah ee-dehn-tee-DAHD kool-too-RAHL deh KAH-dah see-oo-DAHD', category: 'fan-culture', audio: 'la-rivalidad-entre' },
  { spanish: 'Ver el partido en la pantalla gigante de la plaza es una tradición del barrio', english: 'Watching the match on the big screen in the plaza is a neighborhood tradition', pronunciation: 'behr ehl pahr-TEE-doh ehn lah pahn-TAH-yah hee-GAHN-teh deh lah PLAH-sah ehs OO-nah trah-dee-see-OHN dehl BAH-rree-oh', category: 'fan-culture', audio: 'ver-el-partido-en' },
  { spanish: 'Las supersticiones son sagradas: siempre veo el partido con la misma ropa', english: 'Superstitions are sacred: I always watch the match in the same clothes', pronunciation: 'lahs soo-pehr-stee-see-OH-nehs sohn sah-GRAH-dahs see-EHM-preh BEH-oh ehl pahr-TEE-doh kohn lah MEES-mah RROH-pah', category: 'fan-culture', audio: 'las-supersticiones-son' },
  { spanish: 'El fútbol no es solo un deporte, es una forma de vida y una religión popular', english: 'Football is not just a sport, it is a way of life and a popular religion', pronunciation: 'ehl FOOT-bohl noh ehs SOH-loh oon deh-POHR-teh ehs OO-nah FOHR-mah deh BEE-dah ee OO-nah rreh-lee-hee-OHN poh-poo-LAHR', category: 'fan-culture', audio: 'el-futbol-no-es-solo' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L85PhraseByAudio = phraseByAudio

// === LIVE COMMENTARY CHALLENGE (unique activity) ===

export interface LiveCommentaryChallenge {
  gameAction: string
  english: string
  correctPhrase: string
  options: string[]
}

export const LIVE_COMMENTARY_CHALLENGES: LiveCommentaryChallenge[] = [
  {
    gameAction: 'The ball crosses the goal line after a powerful header!',
    english: 'What does the commentator shout?',
    correctPhrase: '¡Gooool! ¡Gol de cabeza!',
    options: ['¡Gooool! ¡Gol de cabeza!', '¡Fuera de lugar!', '¡Tiro de esquina!', '¡Tarjeta roja!'],
  },
  {
    gameAction: 'A defender tackles from behind in the penalty area.',
    english: 'What does the referee call?',
    correctPhrase: '¡Penal! ¡Falta dentro del área!',
    options: ['¡Saca de banda!', '¡Penal! ¡Falta dentro del área!', '¡Tiro de esquina!', '¡Fuera de lugar!'],
  },
  {
    gameAction: 'The striker receives the ball but is ahead of the last defender.',
    english: 'What does the linesman signal?',
    correctPhrase: '¡Fuera de lugar! Posición adelantada del delantero',
    options: ['¡Tarjeta roja!', '¡Cambio en el equipo!', '¡Fuera de lugar! Posición adelantada del delantero', '¡Penal!'],
  },
  {
    gameAction: 'A player makes a violent tackle and the referee reaches into his pocket.',
    english: 'What card is shown?',
    correctPhrase: '¡Tarjeta roja directa! ¡Expulsión!',
    options: ['¡Tiro de esquina!', '¡Saca de banda!', '¡Penal!', '¡Tarjeta roja directa! ¡Expulsión!'],
  },
  {
    gameAction: 'The ball goes out of play over the touchline near the corner flag.',
    english: 'What is the restart?',
    correctPhrase: 'Saca de banda para el equipo visitante',
    options: ['Tiro de esquina', '¡Penal!', 'Saca de banda para el equipo visitante', '¡Fuera de lugar!'],
  },
  {
    gameAction: 'A team steals the ball in their own half and launches a quick 3v1 attack.',
    english: 'How does the commentator describe this?',
    correctPhrase: '¡Contraataque fulminante! ¡Tres contra uno!',
    options: ['¡Saca de banda!', '¡Contraataque fulminante! ¡Tres contra uno!', '¡Tarjeta roja!', '¡Tiempo de descuento!'],
  },
  {
    gameAction: 'The referee adds extra minutes at the end of the second half.',
    english: 'What time period is this?',
    correctPhrase: '¡Tiempo de descuento! Tres minutos de adición',
    options: ['¡Entretiempo!', '¡Prórroga!', '¡Tiempo de descuento! Tres minutos de adición', '¡Final del partido!'],
  },
]

// === LESSON DATA ===

export const L85Data: LessonData = {
  id: 'L8.5',
  hero: {
    lessonId: 'L8.5',
    title: 'Sports Commentary & Journalism',
    subtitle: 'The electric language of live sports broadcasting',
    description: 'Master the explosive vocabulary of live sports commentary, tactical analysis, post-game interviews, and fan culture. From "¡Gooool!" to post-match press conferences, learn the passionate language that unites millions of Spanish-speaking sports fans around the world.',
    image: '/images/L8.5/L8.5.jpg',
    gradient: 'from-emerald-800/65 via-green-700/55 to-lime-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '🎙️', title: 'Live Commentary', desc: 'Use explosive sports commentary phrases: ¡Gooool!, fuera de lugar, tiro de esquina, penal, contraataque.' },
    { icon: '📊', title: 'Sports Analysis', desc: 'Discuss tactics, formations, statistics, and player performance like a professional analyst.' },
    { icon: '🎤', title: 'Athlete Interviews', desc: 'Understand and reproduce the language athletes use in post-game press conferences.' },
    { icon: '🏟️', title: 'Fan Culture', desc: 'Express the passion of la hinchada, la barra brava, and the rituals of sports fandom.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.5', label: 'Sports & Hobbies', detail: 'L3.5 introduced basic sports vocabulary (jugar, equipo, partido). Now dive into professional commentary and journalism language.' },
    { fromLesson: 'L7.3', label: 'Media Literacy', detail: 'L7.3 covered media analysis. Apply those critical skills to sports journalism and broadcasting bias.' },
    { fromLesson: 'L6.8', label: 'Public Speaking', detail: 'L6.8 taught persuasive speech. Sports commentary is one of the most energetic forms of public speaking.' },
  ],

  sectionTransitions: [
    { afterSection: 'live-commentary', text: 'You can call the action live! Now let\'s analyze the game like a professional.' },
    { afterSection: 'sports-analysis', text: 'Tactical genius! Now hear how athletes speak after the final whistle.' },
    { afterSection: 'athlete-interviews', text: 'Great press conference skills! Time to feel the passion of the fans.' },
    { afterSection: 'dialogues', text: 'Incredible commentary! Let\'s explore how sports shape culture.' },
    { afterSection: 'cultural', text: 'Now test your commentary speed in the Live Commentary challenge!' },
    { afterSection: 'live-commentary-activity', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: '¡Gooool!', english: 'Goooal!' },
    { spanish: '¡Qué jugada!', english: 'What a play!' },
    { spanish: 'La hinchada', english: 'The fans / supporters' },
    { spanish: 'El clásico', english: 'The classic derby' },
    { spanish: '¡Tarjeta roja!', english: 'Red card!' },
    { spanish: 'Tiempo de descuento', english: 'Stoppage time' },
  ],

  pronunciationChallenges: [
    { spanish: '¡Contraataque fulminante! ¡Tres toques y gol!', pronunciation: 'kohn-trah-ah-TAH-keh fool-mee-NAHN-teh trehs TOH-kehs ee gohl', english: 'Lightning counterattack! Three touches and goal!', audio: 'contraataque-fulminante-tres-toques-y-gol', tip: '"Fulminante" (lightning-fast) has the stress on -NAHN-. This word is pure sports commentary gold — you\'ll hear it in every Latin American broadcast.' },
    { spanish: 'El estadio se vino abajo con el gol', pronunciation: 'ehl ehs-TAH-dee-oh seh BEE-noh ah-BAH-hoh kohn ehl gohl', english: 'The stadium went wild with the goal', audio: 'el-estadio-se-vino-abajo-con-el-gol', tip: '"Se vino abajo" literally means "came down" — an idiom meaning the crowd erupted. The stadium didn\'t collapse; the noise was just that intense!' },
    { spanish: 'La barra brava alienta sin parar', pronunciation: 'lah BAH-rrah BRAH-bah ah-lee-EHN-tah seen pah-RAHR', english: 'The ultras cheer nonstop', audio: 'la-barra-brava-alienta-sin-parar', tip: '"Barra brava" is uniquely Latin American — organized fan groups known for drums, flags, and constant chanting. Roll the double R in "barra" strongly!' },
    { spanish: 'Saca de banda desde la línea lateral', pronunciation: 'SAH-kah deh BAHN-dah DEHS-deh lah LEE-neh-ah lah-teh-RAHL', english: 'Throw-in from the sideline', audio: 'saca-de-banda-desde-la-linea-lateral', tip: '"Saca de banda" is the Spanish term for throw-in. In some countries you\'ll also hear "lateral" or "saque de banda."' },
    { spanish: '¡Penal! ¡El árbitro señala el punto!', pronunciation: 'peh-NAHL ehl AHR-bee-troh seh-NYAH-lah ehl POON-toh', english: 'Penalty! The referee points to the spot!', audio: 'penal-el-arbitro-senala-el-punto', tip: '"Penal" (not "penalti") is more common in Latin America. In Spain, you\'ll hear "penalti." The "ñ" in "señala" is key — it means "signals/points to."' },
    { spanish: 'El director técnico hizo cambios tácticos acertados', pronunciation: 'ehl dee-rehk-TOHR TEHK-nee-koh EE-soh KAHM-bee-ohs TAHK-tee-kohs ah-sehr-TAH-dohs', english: 'The head coach made wise tactical changes', audio: 'el-director-tecnico-hizo-cambios-tacticos-acertados', tip: 'In Latin America, the coach is "director técnico" or "DT." In Spain, it\'s "entrenador" or "míster" (borrowed from English). "Acertados" means well-chosen/wise.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'live-commentary', label: 'Live Commentary' },
    { id: 'sports-analysis', label: 'Sports Analysis' },
    { id: 'athlete-interviews', label: 'Athlete Interviews' },
    { id: 'fan-culture', label: 'Fan Culture' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'live-commentary-activity', label: 'Live Commentary Challenge' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'live-commentary',
      title: 'Live Commentary — Narración en Vivo',
      description: 'The fast-paced, emotionally charged language of live sports broadcasting. These are the phrases you hear when commentators lose their voices!',
      tabs: [
        { label: 'Goals & Highlights', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'live-commentary').slice(0, 6) },
        { label: 'Fouls & Restarts', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'live-commentary').slice(6) },
      ],
    },
    {
      id: 'sports-analysis',
      title: 'Sports Analysis — Análisis Deportivo',
      description: 'The vocabulary of tactical breakdowns, statistics, and performance evaluation used by sports analysts and pundits.',
      tabs: [
        { label: 'Tactics & Formation', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'sports-analysis').slice(0, 6) },
        { label: 'Stats & Performance', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'sports-analysis').slice(6) },
      ],
    },
    {
      id: 'athlete-interviews',
      title: 'Athlete Interviews — Entrevistas a Atletas',
      description: 'The humble, emotional, and formulaic language athletes use in post-game press conferences across the Spanish-speaking world.',
      tabs: [
        { label: 'Victory & Team Spirit', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'athlete-interviews').slice(0, 6) },
        { label: 'Resilience & Gratitude', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'athlete-interviews').slice(6) },
      ],
    },
    {
      id: 'fan-culture',
      title: 'Fan Culture — La Cultura del Hincha',
      description: 'The passionate world of sports fandom: from organized supporter groups to stadium rituals and neighborhood traditions.',
      tabs: [
        { label: 'Stadium Life', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'fan-culture').slice(0, 6) },
        { label: 'Rituals & Identity', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'fan-culture').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Art of the Extended "Gol"',
      content: 'In Spanish-language commentary, the word "gol" is famously elongated: "¡GOOOOOL!" The length of the "o" corresponds to the excitement level. Commentators like Andrés Cantor are legendary for holding the note for 20+ seconds. This is uniquely Hispanic — English commentators say "Goal!" once and move on.',
      example: '¡Gol! (calm) → ¡Goool! (excited) → ¡GOOOOOOOL! (legendary)',
    },
    {
      title: 'Speed and Rhythm in Commentary',
      content: 'Sports commentary in Spanish is remarkably fast. Commentators use short, punchy phrases connected by exclamations. The rhythm accelerates as action intensifies: "La toma... avanza... pasa al centro... ¡REMATA! ¡GOOOOL!" Practice speaking faster while maintaining clarity.',
      example: 'Recibe... conduce... pasa... centra... ¡GOLAZO!',
    },
    {
      title: 'Regional Sports Vocabulary',
      content: 'Sports terminology varies significantly across Spanish-speaking countries. "Portero" (Spain) = "arquero" (Argentina) = "guardameta" (formal). "Penalti" (Spain) = "penal" (Latin America). "Camiseta" = "casaca" (Argentina) = "playera" (Mexico). Context helps you decode regional variants.',
      example: 'España: "¡Penalti!" | Argentina: "¡Penal!" | México: "¡Penalti/Penal!"',
      reviewFrom: 'L7.3',
    },
    {
      title: 'Post-Game Interview Formulas',
      content: 'Athletes across the Spanish-speaking world use remarkably similar phrases in interviews. Learn the formulas: "Ha sido un partido [adjective]" (It was a [adj] match), "Dimos todo en [la cancha/el campo]" (We gave everything), "Hay que seguir [verb]-ando" (We have to keep [verb]-ing). These templates work in any sports context.',
      example: '"Ha sido un partido muy difícil" | "Dimos todo en la cancha" | "Hay que seguir trabajando"',
      reviewFrom: 'L6.8',
    },
  ],

  flashcardGroups: [
    {
      key: 'live-commentary',
      label: 'Live Commentary',
      audioKeys: ['gol-de-la-seleccion', 'saca-de-banda', 'tiro-de-esquina', 'fuera-de-lugar', 'tiempo-de-descuento', 'penal-el-arbitro', 'tarjeta-roja-directa', 'contraataque-fulminante', 'el-portero-se-luce', 'falta-tactica-mitad', 'golazo-de-media-cancha', 'cambio-en-el-equipo'],
    },
    {
      key: 'sports-analysis',
      label: 'Sports Analysis',
      audioKeys: ['la-tactica-del-equipo', 'la-presion-alta-obliga', 'la-posesion-del-balon', 'la-defensa-en-zona', 'el-rendimiento-del-jugador', 'las-estadisticas-del-partido', 'el-mediocampista-tuvo', 'la-transicion-de-defensa', 'el-director-tecnico-hizo', 'los-tiros-a-puerta', 'el-mapa-de-calor', 'el-var-confirmo'],
    },
    {
      key: 'interviews-fans',
      label: 'Interviews & Fan Culture',
      audioKeys: ['ha-sido-un-partido', 'dimos-todo-en-la-cancha', 'el-equipo-mostro-caracter', 'dedicamos-esta-victoria', 'la-hinchada-es-el-alma', 'la-barra-brava-alienta', 'el-clasico-entre-boca', 'el-estadio-se-vino-abajo', 'cantar-los-himnos', 'el-futbol-no-es-solo'],
    },
  ],

  matchPairs: [
    { left: '¡Gooool!', right: 'Goooal!' },
    { left: 'Fuera de lugar', right: 'Offside' },
    { left: 'Tarjeta roja', right: 'Red card' },
    { left: 'La hinchada', right: 'The fans / supporters' },
    { left: 'Penal', right: 'Penalty kick' },
    { left: 'El clásico', right: 'The derby match' },
    { left: 'Tiro de esquina', right: 'Corner kick' },
    { left: 'La barra brava', right: 'The ultras' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Commentary vs. Analysis',
      instruction: 'Is this phrase from live commentary or post-match analysis?',
      buckets: ['Live Commentary 🎙️', 'Post-Match Analysis 📊'],
      items: [
        { text: '¡Gooool!', bucket: 'Live Commentary 🎙️' },
        { text: '¡Tarjeta roja directa!', bucket: 'Live Commentary 🎙️' },
        { text: '¡Contraataque fulminante!', bucket: 'Live Commentary 🎙️' },
        { text: '¡Fuera de lugar!', bucket: 'Live Commentary 🎙️' },
        { text: 'La posesión del balón superó el 60%', bucket: 'Post-Match Analysis 📊' },
        { text: 'El mapa de calor revela...', bucket: 'Post-Match Analysis 📊' },
        { text: 'Las estadísticas muestran dominio', bucket: 'Post-Match Analysis 📊' },
        { text: 'El rendimiento ha decaído', bucket: 'Post-Match Analysis 📊' },
      ],
    },
    {
      title: 'Player vs. Fan Language',
      instruction: 'Would an athlete or a fan say this?',
      buckets: ['Athlete Interview 🎤', 'Fan Culture 🏟️'],
      items: [
        { text: 'Dimos todo en la cancha', bucket: 'Athlete Interview 🎤' },
        { text: 'El equipo mostró carácter', bucket: 'Athlete Interview 🎤' },
        { text: 'Hay que seguir trabajando', bucket: 'Athlete Interview 🎤' },
        { text: 'Dedicamos esta victoria a la afición', bucket: 'Athlete Interview 🎤' },
        { text: 'La barra brava alienta sin parar', bucket: 'Fan Culture 🏟️' },
        { text: 'El estadio se vino abajo', bucket: 'Fan Culture 🏟️' },
        { text: 'Cantar los himnos con 80 mil personas', bucket: 'Fan Culture 🏟️' },
        { text: 'Las supersticiones son sagradas', bucket: 'Fan Culture 🏟️' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Sports Language Sorting',

  dialogues: [
    {
      id: 'dialogue-radio',
      title: 'Live Radio Commentary — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Narrador', text: '¡Buenas noches, señoras y señores! Estamos en La Bombonera, el templo del fútbol argentino, para el superclásico entre Boca y River.', audio: '/audio/L8.5/phrases/d1-line1.mp3' },
        { speaker: 'Comentarista', text: 'El ambiente es impresionante. La hinchada de Boca no ha parado de cantar desde que se abrieron las puertas.', audio: '/audio/L8.5/phrases/d1-line2.mp3' },
        { speaker: 'Narrador', text: '¡Arranca el partido! Boca con la posesión... pase largo al delantero... la recibe de espaldas...', audio: '/audio/L8.5/phrases/d1-line3.mp3' },
        { speaker: 'Comentarista', text: 'River está jugando con presión alta, no dejan salir a Boca. La táctica del técnico visitante está funcionando.', audio: '/audio/L8.5/phrases/d1-line4.mp3' },
        { speaker: 'Narrador', text: '¡Falta! ¡Tarjeta amarilla para el lateral de River! Tiro libre peligroso para Boca...', audio: '/audio/L8.5/phrases/d1-line5.mp3', annotations: [{ phrase: 'presión alta', fromLesson: 'L3.5', note: 'Advanced tactical vocabulary building on basic sports terms from L3.5' }] },
        { speaker: 'Comentarista', text: 'El estadio contiene la respiración... se prepara el número diez...', audio: '/audio/L8.5/phrases/d1-line6.mp3' },
        { speaker: 'Narrador', text: '¡TIRA! ¡Y... GOOOOOL! ¡GOOOOL DE BOCA! ¡Se vino abajo La Bombonera! ¡La hinchada explota!', audio: '/audio/L8.5/phrases/d1-line7.mp3' },
        { speaker: 'Comentarista', text: '¡Qué golazo! Tiro libre perfecto al ángulo superior izquierdo. El arquero de River ni se movió.', audio: '/audio/L8.5/phrases/d1-line8.mp3' },
        { speaker: 'Narrador', text: 'Boca uno, River cero. ¡El estadio tiembla! La barra brava enloquece con los bombos y las banderas.', audio: '/audio/L8.5/phrases/d1-line9.mp3' },
        { speaker: 'Comentarista', text: 'River necesita reaccionar. El director técnico ya está haciendo señas para un cambio táctico.', audio: '/audio/L8.5/phrases/d1-line10.mp3' },
        { speaker: 'Narrador', text: '¡Penal para River! ¡El árbitro señala el punto! ¡Esto se pone dramático, damas y caballeros!', audio: '/audio/L8.5/phrases/d1-line11.mp3' },
        { speaker: 'Comentarista', text: 'Momento crucial. El delantero de River contra el arquero de Boca. Ochenta mil almas en silencio...', audio: '/audio/L8.5/phrases/d1-line12.mp3' },
        { speaker: 'Narrador', text: '¡DISPARA! ¡Y EL ARQUERO LA ATAJA! ¡INCREÍBLE! ¡Boca sigue adelante! ¡Esto es fútbol, esto es pasión!', audio: '/audio/L8.5/phrases/d1-line13.mp3' },
        { speaker: 'Comentarista', text: 'Estamos en tiempo de descuento. Tres minutos de adición. El partido se define aquí y ahora.', audio: '/audio/L8.5/phrases/d1-line14.mp3' },
        { speaker: 'Narrador', text: '¡FINAL DEL PARTIDO! ¡Boca Juniors gana el superclásico uno a cero! ¡La Bombonera es una fiesta!', audio: '/audio/L8.5/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-press',
      title: 'Post-Game Press Conference — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Periodista 1', text: 'Entrenador, ¿cómo evalúa el rendimiento del equipo esta noche?', audio: '/audio/L8.5/phrases/d2-line1.mp3' },
        { speaker: 'Entrenador', text: 'Ha sido un partido muy disputado. Los dos equipos dieron todo en el campo. Estoy orgulloso de mis jugadores.', audio: '/audio/L8.5/phrases/d2-line2.mp3' },
        { speaker: 'Periodista 2', text: '¿Qué le pareció la actuación del delantero? Marcó dos goles y dio una asistencia.', audio: '/audio/L8.5/phrases/d2-line3.mp3' },
        { speaker: 'Entrenador', text: 'Está en un momento espectacular. Pero quiero destacar el trabajo colectivo. Sin el equipo, esos goles no existen.', audio: '/audio/L8.5/phrases/d2-line4.mp3' },
        { speaker: 'Periodista 1', text: '¿Cómo explica los cambios tácticos en el segundo tiempo?', audio: '/audio/L8.5/phrases/d2-line5.mp3', annotations: [{ phrase: 'cambios tácticos', fromLesson: 'L6.8', note: 'Strategic language connecting to public speaking and argumentation from L6.8' }] },
        { speaker: 'Entrenador', text: 'Vimos que la defensa en zona no estaba funcionando. Pasamos a marcaje individual y eso nos dio más control.', audio: '/audio/L8.5/phrases/d2-line6.mp3' },
        { speaker: 'Periodista 3', text: 'El VAR anuló un gol en el primer tiempo. ¿Está de acuerdo con la decisión?', audio: '/audio/L8.5/phrases/d2-line7.mp3' },
        { speaker: 'Entrenador', text: 'Respeto la tecnología. El VAR está para ayudar al árbitro. Si dice fuera de lugar, hay que aceptarlo.', audio: '/audio/L8.5/phrases/d2-line8.mp3' },
        { speaker: 'Periodista 2', text: '¿Hay alguna actualización sobre la lesión del mediocampista que salió en camilla?', audio: '/audio/L8.5/phrases/d2-line9.mp3' },
        { speaker: 'Entrenador', text: 'Es pronto para hablar. Los médicos lo están evaluando. Esperemos que no sea grave. El equipo le manda mucha fuerza.', audio: '/audio/L8.5/phrases/d2-line10.mp3' },
        { speaker: 'Periodista 1', text: '¿Qué le dice a la afición que llenó el estadio esta noche?', audio: '/audio/L8.5/phrases/d2-line11.mp3' },
        { speaker: 'Entrenador', text: 'Les dedicamos esta victoria. Sin su apoyo, nada de esto sería posible. La afición es nuestro jugador número doce.', audio: '/audio/L8.5/phrases/d2-line12.mp3' },
        { speaker: 'Periodista 3', text: '¿Cómo se preparan para el clásico del próximo fin de semana?', audio: '/audio/L8.5/phrases/d2-line13.mp3' },
        { speaker: 'Entrenador', text: 'Hay que mantener los pies en la tierra. Disfrutaremos esta noche, pero mañana empieza la preparación. Un partido a la vez.', audio: '/audio/L8.5/phrases/d2-line14.mp3' },
        { speaker: 'Periodista 1', text: 'Muchas gracias, entrenador. Enhorabuena por la victoria.', audio: '/audio/L8.5/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience a thrilling live radio commentary of a Superclásico match in Buenos Aires and sit in on a post-game press conference in Madrid.',

  culturalNotes: [
    {
      title: 'El Fútbol como Religión en América Latina',
      content: 'In Latin America, football (soccer) transcends sport — it is a cultural identity, a social language, and for many, a secular religion. The legendary Diego Maradona is worshiped in Argentina\'s "Iglesia Maradoniana" (Church of Maradona). Stadiums like La Bombonera in Buenos Aires and the Azteca in Mexico City are considered temples. When a national team plays, entire countries stop: schools close, offices empty, and streets fall silent until the final whistle, when they either erupt in celebration or collective mourning.',
    },
    {
      title: 'El Béisbol en el Caribe Hispano',
      content: 'While football dominates most of Latin America, the Caribbean has its own sports passion: baseball. In the Dominican Republic, Cuba, Venezuela, and Puerto Rico, "la pelota" (the ball) means baseball, not soccer. Dominican players have transformed Major League Baseball, and towns produce stars the way Argentina produces footballers. The vocabulary shifts entirely: "jonrón" (home run), "lanzador" (pitcher), "bateador" (batter), "la Serie del Caribe" (the Caribbean Series). Understanding this split helps you connect with fans across the Spanish-speaking world.',
    },
    {
      title: 'Los Deportes Extremos y la Nueva Cultura del Fitness',
      content: 'A new sports culture is emerging across Latin America. CrossFit boxes, running clubs, surfing communities, and extreme sports events are booming in cities from Bogotá to Buenos Aires. The language blends Spanish with English borrowings: "hacer CrossFit," "el trail running," "el surf." Meanwhile, traditional sports like "lucha libre" (wrestling) in Mexico and "pelota vasca" (Basque pelota) in Spain preserve centuries-old traditions. This fusion of old and new reflects a continent in constant cultural evolution.',
    },
  ],
  culturalGradient: 'from-emerald-50 to-green-50',

  quiz: [
    { id: 1, type: 'mc', text: '"¡Gooool!" is famously elongated by Spanish-language commentators. This tradition is:', options: ['Common in English too', 'Unique to Hispanic broadcasting', 'Only used in Argentina', 'A modern invention'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Saca de ___" (throw-in)', answer: 'banda' },
    { id: 3, type: 'mc', text: '"Fuera de lugar" means:', options: ['Foul', 'Corner kick', 'Offside', 'Penalty'], answer: 2 },
    { id: 4, type: 'tf', text: '"La barra brava" refers to the organized ultra fan groups in Latin American football.', answer: true },
    { id: 5, type: 'mc', text: 'In the radio commentary dialogue, where is the match taking place?', options: ['Santiago Bernabéu', 'Estadio Azteca', 'La Bombonera', 'Camp Nou'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Tiempo de ___" (stoppage time)', answer: 'descuento' },
    { id: 7, type: 'mc', text: '"El director técnico" is the Latin American term for:', options: ['The referee', 'The team captain', 'The head coach', 'The sports analyst'], answer: 2 },
    { id: 8, type: 'mc', text: 'In the press conference, what tactical change did the coach make?', options: ['Changed the goalkeeper', 'Switched from zone to man marking', 'Added a striker', 'Played with 10 men'], answer: 1 },
    { id: 9, type: 'tf', text: 'In the Caribbean (Dominican Republic, Cuba, Venezuela), "la pelota" usually refers to baseball, not soccer.', answer: true },
    { id: 10, type: 'mc', text: '"¡Tarjeta roja directa!" means:', options: ['Yellow card', 'Straight red card', 'Corner kick', 'Free kick'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ es el alma del equipo" (the fans)', answer: 'hinchada' },
    { id: 12, type: 'mc', text: '"Contraataque fulminante" describes:', options: ['A slow buildup play', 'A defensive formation', 'A lightning-fast counterattack', 'A penalty shootout'], answer: 2 },
    { id: 13, type: 'mc', text: 'VAR stands for:', options: ['Variable Action Replay', 'Video Assistant Referee', 'Virtual Analysis Review', 'Video Arbitration Rule'], answer: 1 },
    { id: 14, type: 'tf', text: 'The Superclásico between Boca Juniors and River Plate is one of the biggest derbies in world football.', answer: true },
    { id: 15, type: 'mc', text: 'What does the coach say about the fans in the press conference?', options: ['They should be quieter', 'They are the twelfth player', 'They need more passion', 'They should come earlier'], answer: 1 },
  ],

  audioBase: '/audio/L8.5/phrases',

  uniqueActivity: {
    id: 'LiveCommentaryL85',
    sectionId: 'live-commentary-activity',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'live-commentary': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'sports-analysis': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'athlete-interviews': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'fan-culture': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'live-commentary-activity': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
