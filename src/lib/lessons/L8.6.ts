import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Music Terminology (12) ===
  { spanish: 'El compás de esta pieza es de tres por cuatro, un vals clásico', english: 'The time signature of this piece is three-four, a classic waltz', pronunciation: 'ehl kohm-PAHS deh EHS-tah pee-EH-sah ehs deh trehs pohr KWAH-troh oon bahls KLAH-see-koh', category: 'music-terminology', audio: 'el-compas-de-esta-pieza' },
  { spanish: 'La tonalidad cambia de mayor a menor en el segundo movimiento, creando melancolía', english: 'The key changes from major to minor in the second movement, creating melancholy', pronunciation: 'lah toh-nah-lee-DAHD KAHM-bee-ah deh mah-YOHR ah meh-NOHR ehn ehl seh-GOON-doh moh-bee-mee-EHN-toh kreh-AHN-doh meh-lahn-koh-LEE-ah', category: 'music-terminology', audio: 'la-tonalidad-cambia' },
  { spanish: 'El acorde de séptima dominante genera una tensión que pide resolución', english: 'The dominant seventh chord creates a tension that demands resolution', pronunciation: 'ehl ah-KOHR-deh deh SEHP-tee-mah doh-mee-NAHN-teh heh-NEH-rah OO-nah tehn-see-OHN keh PEE-deh rreh-soh-loo-see-OHN', category: 'music-terminology', audio: 'el-acorde-de-septima' },
  { spanish: 'La melodía principal es interpretada por los violines en el registro agudo', english: 'The main melody is performed by the violins in the high register', pronunciation: 'lah meh-loh-DEE-ah preen-see-PAHL ehs een-tehr-preh-TAH-dah pohr lohs bee-oh-LEE-nehs ehn ehl rreh-HEES-troh ah-GOO-doh', category: 'music-terminology', audio: 'la-melodia-principal' },
  { spanish: 'El estribillo es la parte más pegadiza de la canción, la que todos recuerdan', english: 'The chorus is the catchiest part of the song, the one everyone remembers', pronunciation: 'ehl ehs-tree-BEE-yoh ehs lah PAHR-teh mahs peh-gah-DEE-sah deh lah kahn-see-OHN lah keh TOH-dohs rreh-KWEHR-dahn', category: 'music-terminology', audio: 'el-estribillo-es-la-parte' },
  { spanish: 'La improvisación en el jazz latino combina armonía compleja con ritmos afrocubanos', english: 'Improvisation in Latin jazz combines complex harmony with Afro-Cuban rhythms', pronunciation: 'lah eem-proh-bee-sah-see-OHN ehn ehl hahss lah-TEE-noh kohm-BEE-nah ahr-moh-NEE-ah kohm-PLEH-hah kohn RREE-tmohs ah-froh-koo-BAH-nohs', category: 'music-terminology', audio: 'la-improvisacion-en-el-jazz' },
  { spanish: 'La nota está en bemol, medio tono por debajo de la nota natural', english: 'The note is flat, a half step below the natural note', pronunciation: 'lah NOH-tah ehs-TAH ehn beh-MOHL MEH-dee-oh TOH-noh pohr deh-BAH-hoh deh lah NOH-tah nah-too-RAHL', category: 'music-terminology', audio: 'la-nota-esta-en-bemol' },
  { spanish: 'El sostenido eleva la nota medio tono, creando una sonoridad más brillante', english: 'The sharp raises the note a half step, creating a brighter sonority', pronunciation: 'ehl sohs-teh-NEE-doh eh-LEH-bah lah NOH-tah MEH-dee-oh TOH-noh kreh-AHN-doh OO-nah soh-noh-ree-DAHD mahs bree-YAHN-teh', category: 'music-terminology', audio: 'el-sostenido-eleva' },
  { spanish: 'La orquestación de esta sinfonía usa metales y percusión con maestría', english: 'The orchestration of this symphony uses brass and percussion with mastery', pronunciation: 'lah ohr-kehs-tah-see-OHN deh EHS-tah seen-foh-NEE-ah OO-sah meh-TAH-lehs ee pehr-koo-see-OHN kohn mah-ehs-TREE-ah', category: 'music-terminology', audio: 'la-orquestacion-de-esta' },
  { spanish: 'El arreglo musical transforma una balada sencilla en una obra orquestal compleja', english: 'The musical arrangement transforms a simple ballad into a complex orchestral work', pronunciation: 'ehl ah-RREH-gloh moo-see-KAHL trahns-FOHR-mah OO-nah bah-LAH-dah sehn-SEE-yah ehn OO-nah OH-brah ohr-kehs-TAHL kohm-PLEH-hah', category: 'music-terminology', audio: 'el-arreglo-musical' },
  { spanish: 'El crescendo va aumentando la intensidad hasta llegar al fortísimo final', english: 'The crescendo gradually increases in intensity until reaching the final fortissimo', pronunciation: 'ehl kreh-SHEHN-doh bah ah-oo-mehn-TAHN-doh lah een-tehn-see-DAHD AHS-tah yeh-GAHR ahl fohr-TEE-see-moh fee-NAHL', category: 'music-terminology', audio: 'el-crescendo-va-aumentando' },
  { spanish: 'La síncopa desplaza el acento rítmico, dando una sensación de movimiento inesperado', english: 'Syncopation displaces the rhythmic accent, giving a feeling of unexpected movement', pronunciation: 'lah SEEN-koh-pah dehs-PLAH-sah ehl ahk-SEHN-toh RREET-mee-koh DAHN-doh OO-nah sehn-sah-see-OHN deh moh-bee-mee-EHN-toh ee-nehs-peh-RAH-doh', category: 'music-terminology', audio: 'la-sincopa-desplaza' },

  // === Dance Styles (12) ===
  { spanish: 'El tango milonguero se baila en abrazo cerrado, pecho con pecho, sintiendo la música', english: 'Milonguero tango is danced in a close embrace, chest to chest, feeling the music', pronunciation: 'ehl TAHN-goh mee-lohn-GEH-roh seh BAH-ee-lah ehn ah-BRAH-soh seh-RRAH-doh PEH-choh kohn PEH-choh seen-tee-EHN-doh lah MOO-see-kah', category: 'dance-styles', audio: 'el-tango-milonguero' },
  { spanish: 'La salsa caleña de Colombia se distingue por sus pasos rápidos y acrobáticos', english: 'Colombian Cali-style salsa is distinguished by its fast and acrobatic steps', pronunciation: 'lah SAHL-sah kah-LEH-nyah deh koh-LOHM-bee-ah seh dees-TEEN-geh pohr soos PAH-sohs RRAH-pee-dohs ee ah-kroh-BAH-tee-kohs', category: 'dance-styles', audio: 'la-salsa-calena' },
  { spanish: 'El flamenco jondo es la expresión más profunda y visceral del cante flamenco', english: 'Deep flamenco is the most profound and visceral expression of flamenco singing', pronunciation: 'ehl flah-MEHN-koh HOHN-doh ehs lah ehks-preh-see-OHN mahs proh-FOON-dah ee bees-seh-RAHL dehl KAHN-teh flah-MEHN-koh', category: 'dance-styles', audio: 'el-flamenco-jondo' },
  { spanish: 'La cumbia nació en la costa caribeña de Colombia y conquistó toda América Latina', english: 'Cumbia was born on the Caribbean coast of Colombia and conquered all of Latin America', pronunciation: 'lah KOOM-bee-ah nah-see-OH ehn lah KOHS-tah kah-ree-BEH-nyah deh koh-LOHM-bee-ah ee kohn-kees-TOH TOH-dah ah-MEH-ree-kah lah-TEE-nah', category: 'dance-styles', audio: 'la-cumbia-nacio' },
  { spanish: 'El reggaetón fusiona ritmos urbanos con dembow y letras en español', english: 'Reggaeton fuses urban rhythms with dembow and lyrics in Spanish', pronunciation: 'ehl rreh-geh-TOHN foo-see-OH-nah RREE-tmohs oor-BAH-nohs kohn dehm-BOW ee LEH-trahs ehn ehs-pah-NYOHL', category: 'dance-styles', audio: 'el-reggaeton-fusiona' },
  { spanish: 'La bachata dominicana se baila con movimientos de cadera sensuales y pasos laterales', english: 'Dominican bachata is danced with sensual hip movements and lateral steps', pronunciation: 'lah bah-CHAH-tah doh-mee-nee-KAH-nah seh BAH-ee-lah kohn moh-bee-mee-EHN-tohs deh kah-DEH-rah sehn-soo-AH-lehs ee PAH-sohs lah-teh-RAH-lehs', category: 'dance-styles', audio: 'la-bachata-dominicana' },
  { spanish: 'Los pasos básicos del merengue son sencillos: marchar al ritmo de la música', english: 'The basic merengue steps are simple: march to the rhythm of the music', pronunciation: 'lohs PAH-sohs BAH-see-kohs dehl meh-REHN-geh sohn sehn-SEE-yohs mahr-CHAHR ahl RREE-tmoh deh lah MOO-see-kah', category: 'dance-styles', audio: 'los-pasos-basicos' },
  { spanish: 'El abrazo cerrado del tango requiere conexión total entre la pareja', english: 'The close embrace of tango requires total connection between the couple', pronunciation: 'ehl ah-BRAH-soh seh-RRAH-doh dehl TAHN-goh rreh-kee-EH-reh koh-nehk-see-OHN toh-TAHL EHN-treh lah pah-REH-hah', category: 'dance-styles', audio: 'el-abrazo-cerrado' },
  { spanish: 'Marcar el ritmo con los pies es fundamental en el zapateado flamenco', english: 'Marking the rhythm with your feet is fundamental in flamenco footwork', pronunciation: 'mahr-KAHR ehl RREE-tmoh kohn lohs pee-EHS ehs foon-dah-mehn-TAHL ehn ehl sah-pah-teh-AH-doh flah-MEHN-koh', category: 'dance-styles', audio: 'marcar-el-ritmo' },
  { spanish: 'La rueda de casino es una forma grupal de bailar salsa originaria de Cuba', english: 'Casino rueda is a group form of dancing salsa originating from Cuba', pronunciation: 'lah RRWEH-dah deh kah-SEE-noh ehs OO-nah FOHR-mah groo-PAHL deh bah-ee-LAHR SAHL-sah oh-ree-hee-NAH-ree-ah deh KOO-bah', category: 'dance-styles', audio: 'la-rueda-de-casino' },
  { spanish: 'El danzón es el baile nacional de Cuba, elegante y ceremonioso', english: 'Danzón is the national dance of Cuba, elegant and ceremonious', pronunciation: 'ehl dahn-SOHN ehs ehl BAH-ee-leh nah-see-oh-NAHL deh KOO-bah eh-leh-GAHN-teh ee seh-reh-moh-nee-OH-soh', category: 'dance-styles', audio: 'el-danzon-es-el-baile' },
  { spanish: 'El joropo venezolano combina zapateo, vals y música de arpa llanera', english: 'Venezuelan joropo combines footwork, waltz, and llanero harp music', pronunciation: 'ehl hoh-ROH-poh beh-neh-soh-LAH-noh kohm-BEE-nah sah-pah-TEH-oh bahls ee MOO-see-kah deh AHR-pah yah-NEH-rah', category: 'dance-styles', audio: 'el-joropo-venezolano' },

  // === Theater & Performance (12) ===
  { spanish: 'El elenco de esta obra incluye a los mejores actores del teatro hispanoamericano', english: 'The cast of this play includes the best actors in Hispanic American theater', pronunciation: 'ehl eh-LEHN-koh deh EHS-tah OH-brah een-KLOO-yeh ah lohs meh-HOH-rehs ahk-TOH-rehs dehl teh-AH-troh ees-pah-noh-ah-meh-ree-KAH-noh', category: 'theater-performance', audio: 'el-elenco-de-esta-obra' },
  { spanish: 'La puesta en escena es minimalista: solo tres sillas y una luz cenital', english: 'The staging is minimalist: just three chairs and a zenith light', pronunciation: 'lah PWEHS-tah ehn ehs-SEH-nah ehs mee-nee-mah-LEES-tah SOH-loh trehs SEE-yahs ee OO-nah loos seh-nee-TAHL', category: 'theater-performance', audio: 'la-puesta-en-escena' },
  { spanish: 'El monólogo del protagonista dura quince minutos y deja al público sin aliento', english: 'The protagonist\'s monologue lasts fifteen minutes and leaves the audience breathless', pronunciation: 'ehl moh-NOH-loh-goh dehl proh-tah-goh-NEES-tah DOO-rah KEEN-seh mee-NOO-tohs ee DEH-hah ahl POO-blee-koh seen ah-lee-EHN-toh', category: 'theater-performance', audio: 'el-monologo-del-protagonista' },
  { spanish: 'La dramaturgia de esta pieza explora la violencia y la memoria en Colombia', english: 'The dramaturgy of this piece explores violence and memory in Colombia', pronunciation: 'lah drah-mah-TOOR-hee-ah deh EHS-tah pee-EH-sah ehks-PLOH-rah lah bee-oh-LEHN-see-ah ee lah meh-MOH-ree-ah ehn koh-LOHM-bee-ah', category: 'theater-performance', audio: 'la-dramaturgia-de-esta' },
  { spanish: 'Durante el entreacto, el público comenta la intensidad de la primera parte', english: 'During the intermission, the audience discusses the intensity of the first part', pronunciation: 'doo-RAHN-teh ehl ehn-treh-AHK-toh ehl POO-blee-koh koh-MEHN-tah lah een-tehn-see-DAHD deh lah pree-MEH-rah PAHR-teh', category: 'theater-performance', audio: 'durante-el-entreacto' },
  { spanish: 'Los actores se preparan entre bambalinas antes de salir al escenario', english: 'The actors prepare backstage before going on stage', pronunciation: 'lohs ahk-TOH-rehs seh preh-PAH-rahn EHN-treh bahm-bah-LEE-nahs AHN-tehs deh sah-LEER ahl ehs-seh-NAH-ree-oh', category: 'theater-performance', audio: 'los-actores-se-preparan' },
  { spanish: 'El guion fue escrito por una dramaturga mexicana ganadora del premio nacional', english: 'The script was written by a Mexican playwright who won the national prize', pronunciation: 'ehl gee-OHN fweh ehs-KREE-toh pohr OO-nah drah-mah-TOOR-gah meh-hee-KAH-nah gah-nah-DOH-rah dehl PREH-mee-oh nah-see-oh-NAHL', category: 'theater-performance', audio: 'el-guion-fue-escrito' },
  { spanish: 'El ensayo general es el último antes del estreno y se hace con vestuario completo', english: 'The dress rehearsal is the last one before opening night and is done in full costume', pronunciation: 'ehl ehn-SAH-yoh heh-neh-RAHL ehs ehl OOL-tee-moh AHN-tehs dehl ehs-TREH-noh ee seh AH-seh kohn behs-too-AH-ree-oh kohm-PLEH-toh', category: 'theater-performance', audio: 'el-ensayo-general' },
  { spanish: 'La cuarta pared se rompe cuando el actor habla directamente al público', english: 'The fourth wall is broken when the actor speaks directly to the audience', pronunciation: 'lah KWAHR-tah pah-REHD seh RROM-peh KWAHN-doh ehl ahk-TOHR AH-blah dee-rehk-tah-MEHN-teh ahl POO-blee-koh', category: 'theater-performance', audio: 'la-cuarta-pared' },
  { spanish: 'El teatro del absurdo cuestiona la lógica y las convenciones sociales', english: 'Theater of the absurd questions logic and social conventions', pronunciation: 'ehl teh-AH-troh dehl ahb-SOOR-doh kwehs-tee-OH-nah lah LOH-hee-kah ee lahs kohn-behn-see-OH-nehs soh-see-AH-lehs', category: 'theater-performance', audio: 'el-teatro-del-absurdo' },
  { spanish: 'La ópera combina canto lírico, actuación dramática y escenografía espectacular', english: 'Opera combines lyrical singing, dramatic acting, and spectacular set design', pronunciation: 'lah OH-peh-rah kohm-BEE-nah KAHN-toh LEE-ree-koh ahk-too-ah-see-OHN drah-MAH-tee-kah ee ehs-seh-noh-grah-FEE-ah ehs-pehk-tah-koo-LAHR', category: 'theater-performance', audio: 'la-opera-combina' },
  { spanish: 'El teatro callejero lleva el arte a las plazas y parques para todo el pueblo', english: 'Street theater brings art to plazas and parks for all the people', pronunciation: 'ehl teh-AH-troh kah-yeh-HEH-roh YEH-bah ehl AHR-teh ah lahs PLAH-sahs ee PAHR-kehs PAH-rah TOH-doh ehl PWEH-bloh', category: 'theater-performance', audio: 'el-teatro-callejero' },

  // === Criticism & Review (12) ===
  { spanish: 'La interpretación fue magistral; cada gesto transmitió una emoción auténtica', english: 'The performance was masterful; every gesture conveyed an authentic emotion', pronunciation: 'lah een-tehr-preh-tah-see-OHN fweh mah-hees-TRAHL KAH-dah HEHS-toh trahns-mee-tee-OH OO-nah eh-moh-see-OHN ow-TEHN-tee-kah', category: 'criticism-review', audio: 'la-interpretacion-fue-magistral' },
  { spanish: 'La coreografía deslumbró al público con su precisión y creatividad', english: 'The choreography dazzled the audience with its precision and creativity', pronunciation: 'lah koh-reh-oh-grah-FEE-ah dehs-loom-BROH ahl POO-blee-koh kohn soo preh-see-see-OHN ee kreh-ah-tee-bee-DAHD', category: 'criticism-review', audio: 'la-coreografia-deslumbro' },
  { spanish: 'La puesta en escena innovadora rompió con todos los esquemas del teatro clásico', english: 'The innovative staging broke with all the conventions of classical theater', pronunciation: 'lah PWEHS-tah ehn ehs-SEH-nah ee-noh-bah-DOH-rah rrom-pee-OH kohn TOH-dohs lohs ehs-KEH-mahs dehl teh-AH-troh KLAH-see-koh', category: 'criticism-review', audio: 'la-puesta-en-escena-innovadora' },
  { spanish: 'El ritmo hipnotizante de la percusión mantuvo al público en trance durante dos horas', english: 'The hypnotizing rhythm of the percussion kept the audience in a trance for two hours', pronunciation: 'ehl RREE-tmoh eep-noh-tee-SAHN-teh deh lah pehr-koo-see-OHN mahn-TOO-boh ahl POO-blee-koh ehn TRAHN-seh doo-RAHN-teh dohs OH-rahs', category: 'criticism-review', audio: 'el-ritmo-hipnotizante' },
  { spanish: 'La voz del solista estremeció al público con su potencia y su fragilidad', english: 'The soloist\'s voice shook the audience with its power and fragility', pronunciation: 'lah bohs dehl soh-LEES-tah ehs-treh-meh-see-OH ahl POO-blee-koh kohn soo poh-TEHN-see-ah ee soo frah-hee-lee-DAHD', category: 'criticism-review', audio: 'la-voz-del-solista' },
  { spanish: 'El álbum representa una evolución artística que pocos esperaban de este grupo', english: 'The album represents an artistic evolution that few expected from this group', pronunciation: 'ehl AHL-boom rreh-preh-SEHN-tah OO-nah eh-boh-loo-see-OHN ahr-TEES-tee-kah keh POH-kohs ehs-peh-RAH-bahn deh EHS-teh GROO-poh', category: 'criticism-review', audio: 'el-album-representa' },
  { spanish: 'La fusión de estilos tradicionales y electrónicos resulta sorprendentemente armoniosa', english: 'The fusion of traditional and electronic styles turns out surprisingly harmonious', pronunciation: 'lah foo-see-OHN deh ehs-TEE-lohs trah-dee-see-oh-NAH-lehs ee eh-lehk-TROH-nee-kohs rreh-SOOL-tah sohr-prehn-dehn-teh-MEHN-teh ahr-moh-nee-OH-sah', category: 'criticism-review', audio: 'la-fusion-de-estilos' },
  { spanish: 'El vestuario y la iluminación crearon una atmósfera onírica e inolvidable', english: 'The costumes and lighting created a dreamlike and unforgettable atmosphere', pronunciation: 'ehl behs-too-AH-ree-oh ee lah ee-loo-mee-nah-see-OHN kreh-AH-rohn OO-nah aht-MOHS-feh-rah oh-NEE-ree-kah eh ee-nohl-bee-DAH-bleh', category: 'criticism-review', audio: 'el-vestuario-y-la-iluminacion' },
  { spanish: 'La dirección musical fue impecable, con transiciones fluidas entre cada número', english: 'The musical direction was impeccable, with fluid transitions between each number', pronunciation: 'lah dee-rehk-see-OHN moo-see-KAHL fweh eem-peh-KAH-bleh kohn trahn-see-see-OH-nehs FLOO-ee-dahs EHN-treh KAH-dah NOO-meh-roh', category: 'criticism-review', audio: 'la-direccion-musical' },
  { spanish: 'El público estalló en una ovación de pie que duró más de cinco minutos', english: 'The audience burst into a standing ovation that lasted more than five minutes', pronunciation: 'ehl POO-blee-koh ehs-tah-YOH ehn OO-nah oh-bah-see-OHN deh pee-EH keh doo-ROH mahs deh SEEN-koh mee-NOO-tohs', category: 'criticism-review', audio: 'el-publico-estallo' },
  { spanish: 'La letra de esta canción es poesía pura disfrazada de música popular', english: 'The lyrics of this song are pure poetry disguised as popular music', pronunciation: 'lah LEH-trah deh EHS-tah kahn-see-OHN ehs poh-eh-SEE-ah POO-rah dees-frah-SAH-dah deh MOO-see-kah poh-poo-LAHR', category: 'criticism-review', audio: 'la-letra-de-esta-cancion' },
  { spanish: 'Este concierto pasará a la historia como uno de los mejores de la temporada', english: 'This concert will go down in history as one of the best of the season', pronunciation: 'EHS-teh kohn-see-EHR-toh pah-sah-RAH ah lah ees-TOH-ree-ah KOH-moh OO-noh deh lohs meh-HOH-rehs deh lah tehm-poh-RAH-dah', category: 'criticism-review', audio: 'este-concierto-pasara' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L86PhraseByAudio = phraseByAudio

// === RHYTHM DECODER CHALLENGE (unique activity) ===

export interface RhythmDecoderChallenge {
  description: string
  english: string
  correctGenre: string
  options: string[]
}

export const RHYTHM_DECODER_CHALLENGES: RhythmDecoderChallenge[] = [
  {
    description: 'Dos bailarines se mueven pecho con pecho en un abrazo cerrado. Sus pies dibujan figuras complejas en el suelo mientras un bandoneón toca una melodía melancólica.',
    english: 'Two dancers move chest to chest in a close embrace. Their feet draw complex figures on the floor while a bandoneón plays a melancholic melody.',
    correctGenre: 'Tango',
    options: ['Tango', 'Salsa', 'Flamenco', 'Bachata'],
  },
  {
    description: 'Una bailaora golpea el suelo con los tacones en un ritmo frenético. Sus brazos serpentean sobre la cabeza mientras un cantaor grita desde lo más profundo del alma.',
    english: 'A female dancer strikes the floor with her heels in a frenetic rhythm. Her arms snake above her head while a male singer cries out from the depths of his soul.',
    correctGenre: 'Flamenco',
    options: ['Cumbia', 'Flamenco', 'Tango', 'Merengue'],
  },
  {
    description: 'Parejas se mueven rápidamente con pasos acrobáticos y giros vertiginosos. La música tiene trompetas, piano y un ritmo de clave que marca el compás.',
    english: 'Couples move quickly with acrobatic steps and dizzying spins. The music has trumpets, piano, and a clave rhythm that marks the beat.',
    correctGenre: 'Salsa',
    options: ['Bachata', 'Reggaetón', 'Salsa', 'Joropo'],
  },
  {
    description: 'Un beat electrónico con dembow suena en las bocinas. Los jóvenes bailan con movimientos de cadera al ritmo del perreo, cantando las letras en español.',
    english: 'An electronic beat with dembow sounds on the speakers. Young people dance with hip movements to the perreo rhythm, singing the lyrics in Spanish.',
    correctGenre: 'Reggaetón',
    options: ['Cumbia', 'Bachata', 'Salsa', 'Reggaetón'],
  },
  {
    description: 'Una pareja baila con movimientos sensuales de cadera y pasos laterales suaves. La guitarra acústica y los bongós crean una atmósfera romántica de la República Dominicana.',
    english: 'A couple dances with sensual hip movements and smooth lateral steps. The acoustic guitar and bongos create a romantic atmosphere from the Dominican Republic.',
    correctGenre: 'Bachata',
    options: ['Tango', 'Bachata', 'Salsa', 'Cumbia'],
  },
  {
    description: 'Hombres y mujeres se mueven en fila con pasos cortos y cadenciosos. Las flautas de millo y los tambores alegres suenan mientras agitan sus faldas y sombreros.',
    english: 'Men and women move in line with short, cadenced steps. Millo flutes and joyful drums play while they wave their skirts and hats.',
    correctGenre: 'Cumbia',
    options: ['Merengue', 'Cumbia', 'Flamenco', 'Joropo'],
  },
  {
    description: 'En un escenario con luces tenues, un pianista improvisa sobre acordes complejos mientras un percusionista toca congas y timbales con ritmos sincopados afrocubanos.',
    english: 'On a dimly lit stage, a pianist improvises over complex chords while a percussionist plays congas and timbales with syncopated Afro-Cuban rhythms.',
    correctGenre: 'Jazz latino',
    options: ['Jazz latino', 'Reggaetón', 'Tango', 'Flamenco'],
  },
]

// === LESSON DATA ===

export const L86Data: LessonData = {
  id: 'L8.6',
  hero: {
    lessonId: 'L8.6',
    title: 'Music, Dance & Performing Arts',
    subtitle: 'The rhythm, movement, and drama of the Spanish-speaking world',
    description: 'Immerse yourself in the rich vocabulary of music theory, dance styles, theater, and performance criticism. From the bandoneón of Buenos Aires to the flamenco stages of Sevilla, learn to discuss, analyze, and celebrate the performing arts in Spanish at the highest level.',
    image: '/images/L8.6/L8.6.jpg',
    gradient: 'from-purple-800/65 via-fuchsia-700/55 to-pink-700/65',
    accentColor: 'purple-200',
  },

  objectives: [
    { icon: '🎵', title: 'Music Terminology', desc: 'Master technical musical vocabulary: compás, tonalidad, acorde, melodía, estribillo, improvisación.' },
    { icon: '💃', title: 'Dance Styles', desc: 'Describe and distinguish tango, salsa, flamenco, cumbia, reggaetón, bachata, and more.' },
    { icon: '🎭', title: 'Theater & Performance', desc: 'Navigate theater vocabulary: elenco, puesta en escena, monólogo, dramaturgia, bambalinas.' },
    { icon: '⭐', title: 'Criticism & Review', desc: 'Write and understand performance reviews: magistral, deslumbrar, hipnotizante, innovador.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.7', label: 'Arts & Entertainment', detail: 'L4.7 introduced basic arts vocabulary (película, concierto, museo). Now explore professional-level performing arts terminology.' },
    { fromLesson: 'L6.2', label: 'Literary & Poetic Language', detail: 'L6.2 covered poetic expression. Music lyrics and theater scripts share the same literary devices and figurative language.' },
    { fromLesson: 'L7.2', label: 'Humor & Wordplay', detail: 'L7.2 explored linguistic creativity. Song lyrics, theater dialogue, and performance criticism all rely on wordplay and double meanings.' },
  ],

  sectionTransitions: [
    { afterSection: 'music-terminology', text: 'You speak the language of music! Now let\'s move to the dance floor.' },
    { afterSection: 'dance-styles', text: 'You know your tango from your salsa! Time to step behind the curtain.' },
    { afterSection: 'theater-performance', text: 'Backstage expert! Now learn to review and critique performances.' },
    { afterSection: 'dialogues', text: 'Wonderful conversations! Let\'s explore the cultural roots of these art forms.' },
    { afterSection: 'cultural', text: 'Now test your ear in the Rhythm Decoder challenge!' },
    { afterSection: 'rhythm-decoder', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El compás', english: 'The time signature / beat' },
    { spanish: 'La coreografía', english: 'The choreography' },
    { spanish: 'La puesta en escena', english: 'The staging' },
    { spanish: 'El estribillo', english: 'The chorus (of a song)' },
    { spanish: 'El elenco', english: 'The cast' },
    { spanish: 'Magistral', english: 'Masterful' },
  ],

  pronunciationChallenges: [
    { spanish: 'El tango milonguero se baila en abrazo cerrado', pronunciation: 'ehl TAHN-goh mee-lohn-GEH-roh seh BAH-ee-lah ehn ah-BRAH-soh seh-RRAH-doh', english: 'Milonguero tango is danced in a close embrace', audio: 'el-tango-milonguero-se-baila-en-abrazo-cerrado', tip: '"Milonguero" refers to someone who frequents milongas (tango dance halls). The stress falls on -GEH-. This style is the most intimate form of tango, focused on connection over flashy moves.' },
    { spanish: 'La coreografía deslumbró al público', pronunciation: 'lah koh-reh-oh-grah-FEE-ah dehs-loom-BROH ahl POO-blee-koh', english: 'The choreography dazzled the audience', audio: 'la-coreografia-deslumbro-al-publico', tip: '"Deslumbrar" literally means "to un-shadow" (des + lumbra). It describes something so brilliant it blinds you. A powerful word for art criticism!' },
    { spanish: 'El flamenco jondo es la expresión más profunda', pronunciation: 'ehl flah-MEHN-koh HOHN-doh ehs lah ehks-preh-see-OHN mahs proh-FOON-dah', english: 'Deep flamenco is the most profound expression', audio: 'el-flamenco-jondo-es-la-expresion-mas-profunda', tip: '"Jondo" is an Andalusian pronunciation of "hondo" (deep). Flamenco jondo is the oldest, most emotional form of flamenco — raw pain, love, and death expressed through voice and body.' },
    { spanish: 'La improvisación en el jazz latino es fascinante', pronunciation: 'lah eem-proh-bee-sah-see-OHN ehn ehl hahss lah-TEE-noh ehs fah-see-NAHN-teh', english: 'Improvisation in Latin jazz is fascinating', audio: 'la-improvisacion-en-el-jazz-latino-es-fascinante', tip: '"Jazz" in Spanish keeps the English pronunciation but is sometimes written "yaz" in informal contexts. Latin jazz was born when Cuban rhythms met American jazz in New York City.' },
    { spanish: 'El ensayo general se hace con vestuario completo', pronunciation: 'ehl ehn-SAH-yoh heh-neh-RAHL seh AH-seh kohn behs-too-AH-ree-oh kohm-PLEH-toh', english: 'The dress rehearsal is done in full costume', audio: 'el-ensayo-general-se-hace-con-vestuario-completo', tip: '"Ensayo" means both "rehearsal" and "essay" — connected by the idea of practicing/trying something. "Ensayo general" = dress rehearsal (the final, complete run-through).' },
    { spanish: 'La voz del solista estremeció al público', pronunciation: 'lah bohs dehl soh-LEES-tah ehs-treh-meh-see-OH ahl POO-blee-koh', english: 'The soloist\'s voice shook the audience', audio: 'la-voz-del-solista-estremecio-al-publico', tip: '"Estremecer" means to make someone tremble/shake with emotion. It\'s one of the most powerful verbs in Spanish criticism — use it when a performance literally gives you chills.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'music-terminology', label: 'Music Terminology' },
    { id: 'dance-styles', label: 'Dance Styles' },
    { id: 'theater-performance', label: 'Theater & Performance' },
    { id: 'criticism-review', label: 'Criticism & Review' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'rhythm-decoder', label: 'Rhythm Decoder' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'music-terminology',
      title: 'Music Terminology — Terminología Musical',
      description: 'The technical language of music theory, composition, and performance. From compás to orquestación, speak about music like a conservatory graduate.',
      tabs: [
        { label: 'Theory & Structure', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'music-terminology').slice(0, 6) },
        { label: 'Arrangement & Dynamics', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'music-terminology').slice(6) },
      ],
    },
    {
      id: 'dance-styles',
      title: 'Dance Styles — Estilos de Baile',
      description: 'From the intimate embrace of tango to the explosive energy of salsa, the Spanish-speaking world is a universe of rhythm and movement.',
      tabs: [
        { label: 'Tango, Flamenco & Salsa', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'dance-styles').slice(0, 6) },
        { label: 'Caribbean & Folk Dances', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'dance-styles').slice(6) },
      ],
    },
    {
      id: 'theater-performance',
      title: 'Theater & Performance — Teatro y Artes Escénicas',
      description: 'The vocabulary of the stage: from backstage preparation to the final curtain call, navigate the world of Hispanic theater.',
      tabs: [
        { label: 'Staging & Script', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'theater-performance').slice(0, 6) },
        { label: 'Stage Traditions', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'theater-performance').slice(6) },
      ],
    },
    {
      id: 'criticism-review',
      title: 'Criticism & Review — Crítica y Reseña',
      description: 'The language of arts criticism: how to praise, analyze, and evaluate performances with sophistication and nuance.',
      tabs: [
        { label: 'Performance Reviews', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'criticism-review').slice(0, 6) },
        { label: 'Audience & Legacy', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'criticism-review').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Musical Borrowed Words',
      content: 'Many musical terms come from Italian (crescendo, forte, piano, tempo) and are used identically in Spanish. However, Spanish adds its own: "estribillo" (chorus), "compás" (time signature/beat), and "tonada" (tune/melody). Some English words are borrowed: "jazz," "blues," "rock." In informal speech, you\'ll hear "el beat," "el groove," and "los fans."',
      example: 'Italian: crescendo, forte | Spanish: estribillo, compás | English: jazz, blues, rock',
    },
    {
      title: 'Dance Names as Cultural Markers',
      content: 'Each dance name tells a cultural story. "Tango" may come from African languages (the tangó drums). "Flamenco" possibly from the Arabic "fellah mengu" (fugitive peasant). "Cumbia" from the Bantu "cumbé" (dance). "Bachata" once meant a backyard party. Knowing these origins enriches your understanding of each dance.',
      example: 'Tango (African?) → Cumbia (Bantu) → Flamenco (Arabic?) → Bachata (party)',
      reviewFrom: 'L6.2',
    },
    {
      title: 'Theater Vocabulary from Greek & Latin',
      content: 'Spanish theater vocabulary connects directly to Greek and Latin roots. "Dramaturgia" (dramaturgy) from Greek "drama" (action). "Escenario" from Latin "scaenarium." "Monólogo" from Greek "monos" (alone) + "logos" (speech). "Protagonista" from Greek "protos" (first) + "agonistes" (actor/combatant). These roots help you decode new words.',
      example: 'Monólogo (alone + speech) | Protagonista (first + actor) | Escenario (stage scene)',
    },
    {
      title: 'The Language of Criticism',
      content: 'Spanish criticism uses intensifiers and metaphors extensively. "Magistral" (masterful), "deslumbrante" (dazzling), "sobrecogedor" (overwhelming), "estremecer" (to make tremble). Negative criticism is often softened: "le faltó intensidad" (it lacked intensity) rather than "fue malo" (it was bad). This diplomatic language is essential for professional reviewing.',
      example: 'Positive: magistral, deslumbrante | Diplomatic negative: "le faltó..." "no alcanzó a..."',
      reviewFrom: 'L7.2',
    },
  ],

  flashcardGroups: [
    {
      key: 'music',
      label: 'Music Terminology',
      audioKeys: ['el-compas-de-esta-pieza', 'la-tonalidad-cambia', 'el-acorde-de-septima', 'la-melodia-principal', 'el-estribillo-es-la-parte', 'la-improvisacion-en-el-jazz', 'la-nota-esta-en-bemol', 'el-sostenido-eleva', 'la-orquestacion-de-esta', 'el-arreglo-musical', 'el-crescendo-va-aumentando', 'la-sincopa-desplaza'],
    },
    {
      key: 'dance',
      label: 'Dance Styles',
      audioKeys: ['el-tango-milonguero', 'la-salsa-calena', 'el-flamenco-jondo', 'la-cumbia-nacio', 'el-reggaeton-fusiona', 'la-bachata-dominicana', 'los-pasos-basicos', 'el-abrazo-cerrado', 'marcar-el-ritmo', 'la-rueda-de-casino', 'el-danzon-es-el-baile', 'el-joropo-venezolano'],
    },
    {
      key: 'theater-criticism',
      label: 'Theater & Criticism',
      audioKeys: ['el-elenco-de-esta-obra', 'la-puesta-en-escena', 'el-monologo-del-protagonista', 'los-actores-se-preparan', 'el-ensayo-general', 'la-interpretacion-fue-magistral', 'la-coreografia-deslumbro', 'la-voz-del-solista', 'el-publico-estallo', 'este-concierto-pasara'],
    },
  ],

  matchPairs: [
    { left: 'El compás', right: 'Time signature / beat' },
    { left: 'El estribillo', right: 'The chorus' },
    { left: 'Bambalinas', right: 'Backstage / wings' },
    { left: 'El elenco', right: 'The cast' },
    { left: 'La coreografía', right: 'The choreography' },
    { left: 'Magistral', right: 'Masterful' },
    { left: 'El abrazo cerrado', right: 'The close embrace' },
    { left: 'La puesta en escena', right: 'The staging' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Music vs. Dance',
      instruction: 'Does this term belong to music theory or dance?',
      buckets: ['Music Theory 🎵', 'Dance 💃'],
      items: [
        { text: 'El compás', bucket: 'Music Theory 🎵' },
        { text: 'La tonalidad', bucket: 'Music Theory 🎵' },
        { text: 'El acorde', bucket: 'Music Theory 🎵' },
        { text: 'El crescendo', bucket: 'Music Theory 🎵' },
        { text: 'El abrazo cerrado', bucket: 'Dance 💃' },
        { text: 'El zapateado', bucket: 'Dance 💃' },
        { text: 'Los pasos básicos', bucket: 'Dance 💃' },
        { text: 'La salsa caleña', bucket: 'Dance 💃' },
      ],
    },
    {
      title: 'Theater vs. Criticism',
      instruction: 'Is this a theater term or a criticism/review phrase?',
      buckets: ['Theater Term 🎭', 'Criticism Phrase ⭐'],
      items: [
        { text: 'El elenco', bucket: 'Theater Term 🎭' },
        { text: 'Bambalinas', bucket: 'Theater Term 🎭' },
        { text: 'El entreacto', bucket: 'Theater Term 🎭' },
        { text: 'El ensayo general', bucket: 'Theater Term 🎭' },
        { text: 'Interpretación magistral', bucket: 'Criticism Phrase ⭐' },
        { text: 'Deslumbró al público', bucket: 'Criticism Phrase ⭐' },
        { text: 'Ritmo hipnotizante', bucket: 'Criticism Phrase ⭐' },
        { text: 'Ovación de pie', bucket: 'Criticism Phrase ⭐' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Performing Arts Sorting',

  dialogues: [
    {
      id: 'dialogue-tango',
      title: 'Backstage at a Tango Show — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Lucía', text: '¡Qué espectáculo! Acabo de ver el show de tango y estoy temblando de emoción.', audio: '/audio/L8.6/phrases/d1-line1.mp3' },
        { speaker: 'Martín', text: 'Es que el tango milonguero es así. Cuando es auténtico, te sacude el alma.', audio: '/audio/L8.6/phrases/d1-line2.mp3' },
        { speaker: 'Lucía', text: 'La pareja principal bailó con los ojos cerrados. El abrazo era tan íntimo que parecían una sola persona.', audio: '/audio/L8.6/phrases/d1-line3.mp3' },
        { speaker: 'Martín', text: 'Eso es lo que hace especial al tango de Buenos Aires. No es coreografía, es conexión pura. Se improvisa todo.', audio: '/audio/L8.6/phrases/d1-line4.mp3' },
        { speaker: 'Lucía', text: '¿Y el bandoneón? Cuando empezó a sonar "Adiós Nonino" sentí un nudo en la garganta.', audio: '/audio/L8.6/phrases/d1-line5.mp3', annotations: [{ phrase: 'Adiós Nonino', fromLesson: 'L4.7', note: 'Famous tango piece by Astor Piazzolla, connecting to arts vocabulary from L4.7' }] },
        { speaker: 'Martín', text: 'Piazzolla revolucionó el tango. Fusionó elementos del jazz y la música clásica con el tango tradicional.', audio: '/audio/L8.6/phrases/d1-line6.mp3' },
        { speaker: 'Lucía', text: 'Me contó uno de los bailarines que ensayan seis horas diarias. La técnica del zapateado es impresionante.', audio: '/audio/L8.6/phrases/d1-line7.mp3' },
        { speaker: 'Martín', text: 'Sí, pero lo más difícil del tango no es la técnica, es la pausa. Saber cuándo no moverse es un arte.', audio: '/audio/L8.6/phrases/d1-line8.mp3' },
        { speaker: 'Lucía', text: 'La iluminación también fue perfecta. Esa luz tenue con tonos rojos creó una atmósfera de otra época.', audio: '/audio/L8.6/phrases/d1-line9.mp3' },
        { speaker: 'Martín', text: '¿Sabías que el tango fue declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2009?', audio: '/audio/L8.6/phrases/d1-line10.mp3' },
        { speaker: 'Lucía', text: 'No lo sabía. Y después de esta noche, entiendo perfectamente por qué. Es arte puro.', audio: '/audio/L8.6/phrases/d1-line11.mp3' },
        { speaker: 'Martín', text: 'Si querés, mañana te llevo a una milonga de verdad. Ahí se baila tango entre la gente, sin escenario.', audio: '/audio/L8.6/phrases/d1-line12.mp3' },
        { speaker: 'Lucía', text: '¡Me encantaría! ¿Necesito saber bailar?', audio: '/audio/L8.6/phrases/d1-line13.mp3' },
        { speaker: 'Martín', text: 'Solo necesitás sentir la música y dejarte llevar. El tango no se aprende, se vive.', audio: '/audio/L8.6/phrases/d1-line14.mp3' },
        { speaker: 'Lucía', text: 'Entonces mañana nos vemos en la milonga. ¡Esta ciudad es mágica!', audio: '/audio/L8.6/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-studio',
      title: 'Music Producer in the Studio — Bogotá',
      location: 'Bogotá',
      lines: [
        { speaker: 'Camila', text: 'Parcero, escuchá este arreglo que hice. Mezclé cumbia electrónica con un sample de una gaita colombiana.', audio: '/audio/L8.6/phrases/d2-line1.mp3' },
        { speaker: 'Andrés', text: '¡Qué nota! El beat tiene un compás de cuatro por cuatro pero la gaita le da un sabor totalmente diferente.', audio: '/audio/L8.6/phrases/d2-line2.mp3' },
        { speaker: 'Camila', text: 'Esa era la idea. Quiero fusionar lo ancestral con lo urbano. La cumbia nació en la costa pero ahora es del mundo.', audio: '/audio/L8.6/phrases/d2-line3.mp3' },
        { speaker: 'Andrés', text: '¿Y la voz? El estribillo necesita una melodía más pegadiza. Algo que la gente pueda cantar en los conciertos.', audio: '/audio/L8.6/phrases/d2-line4.mp3' },
        { speaker: 'Camila', text: 'Tienes razón. Probé con una tonalidad menor pero sonaba demasiado triste. Voy a cambiar a mayor.', audio: '/audio/L8.6/phrases/d2-line5.mp3', annotations: [{ phrase: 'tonalidad menor', fromLesson: 'L6.2', note: 'Musical terms for emotional expression, connecting to poetic language from L6.2' }] },
        { speaker: 'Andrés', text: '¿Qué tal si le agregas un acorde de séptima en la transición? Eso crearía tensión antes del estribillo.', audio: '/audio/L8.6/phrases/d2-line6.mp3' },
        { speaker: 'Camila', text: 'Buena idea. Y quiero meter un solo de bajo en la mitad. Algo con mucha síncopa, bien funky.', audio: '/audio/L8.6/phrases/d2-line7.mp3' },
        { speaker: 'Andrés', text: 'La orquestación de la intro es brutal. Los metales le dan esa energía de big band latina.', audio: '/audio/L8.6/phrases/d2-line8.mp3' },
        { speaker: 'Camila', text: 'Eso es lo que más me costó. Escribir para trompetas y trombones sin que suene a salsa tradicional.', audio: '/audio/L8.6/phrases/d2-line9.mp3' },
        { speaker: 'Andrés', text: '¿Ya tienes fecha de lanzamiento? Los festivales de música en Colombia están buscando propuestas innovadoras.', audio: '/audio/L8.6/phrases/d2-line10.mp3' },
        { speaker: 'Camila', text: 'Quiero tenerla lista para el Festival Estéreo Picnic. Sería increíble presentarla en vivo ahí.', audio: '/audio/L8.6/phrases/d2-line11.mp3' },
        { speaker: 'Andrés', text: 'Con este sonido, vas a deslumbrar. La fusión de lo electrónico con las raíces colombianas es el futuro.', audio: '/audio/L8.6/phrases/d2-line12.mp3' },
        { speaker: 'Camila', text: 'Eso espero. Colombia tiene una riqueza musical increíble y apenas estamos empezando a explorarla con tecnología.', audio: '/audio/L8.6/phrases/d2-line13.mp3' },
        { speaker: 'Andrés', text: 'Bueno, dale, vamos a grabar esa nueva versión del estribillo. ¡Esto va a sonar espectacular!', audio: '/audio/L8.6/phrases/d2-line14.mp3' },
        { speaker: 'Camila', text: '¡Listo! Que suene la música. Tres, dos, uno...', audio: '/audio/L8.6/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Go backstage at an emotional tango show in Buenos Aires and step into a cutting-edge music production studio in Bogotá.',

  culturalNotes: [
    {
      title: 'El Tango: Patrimonio de la Humanidad',
      content: 'Tango was born in the late 1800s in the working-class neighborhoods (arrabal) of Buenos Aires and Montevideo, blending African rhythms, European melodies, and indigenous elements. Initially dismissed as "music of the poor," it conquered Paris in the 1910s and returned to Argentina as high culture. UNESCO declared it Intangible Cultural Heritage of Humanity in 2009. Today, milongas (tango dance halls) operate nightly across Buenos Aires, where locals and tourists dance together following centuries-old codes: the cabeceo (eye invitation), the tanda (set of songs), and the cortina (musical break between tandas).',
    },
    {
      title: 'La Revolución del Reggaetón',
      content: 'Reggaetón emerged in Puerto Rico in the 1990s, blending Jamaican dancehall (dembow rhythm), hip-hop, and Latin influences. Initially rejected by mainstream media as "vulgar" and "low culture," it became the most commercially successful Latin music genre in history. Artists like Daddy Yankee, Bad Bunny, and J Balvin turned reggaetón into a global phenomenon. The genre sparked intense debate about gender representation in lyrics, cultural authenticity, and what counts as "real" music — echoing the same controversies tango faced a century earlier. Today, reggaetón influences pop, trap, and electronic music worldwide.',
    },
    {
      title: 'La Tradición Teatral de Ciudad de México y Buenos Aires',
      content: 'Latin America has a rich theater tradition dating back to pre-Columbian ritual performances. Mexico City\'s Corredor Cultural de la Reforma hosts dozens of theaters, from the majestic Palacio de Bellas Artes to intimate experimental spaces. Buenos Aires is considered the theater capital of Latin America, with the legendary Avenida Corrientes ("the Broadway of Buenos Aires") hosting over 300 active theaters. The "teatro independiente" movement, born in Argentina in the 1930s, emphasized artistic freedom over commercial success and influenced theater across the continent. Today, both cities maintain vibrant scenes mixing classical, experimental, and community theater.',
    },
  ],
  culturalGradient: 'from-purple-50 to-pink-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El compás" in music refers to:', options: ['The melody', 'The time signature / beat', 'The lyrics', 'The volume'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El ___ es la parte más pegadiza de la canción" (chorus)', answer: 'estribillo' },
    { id: 3, type: 'mc', text: '"Bemol" means a note is:', options: ['Sharp (raised)', 'Flat (lowered)', 'Natural', 'Doubled'], answer: 1 },
    { id: 4, type: 'tf', text: 'The tango was declared UNESCO Intangible Cultural Heritage of Humanity in 2009.', answer: true },
    { id: 5, type: 'mc', text: '"Flamenco jondo" is:', options: ['A modern dance fusion', 'The most commercially popular style', 'The deepest, most emotional form of flamenco', 'A type of guitar'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Los actores se preparan entre ___" (backstage)', answer: 'bambalinas' },
    { id: 7, type: 'mc', text: 'In the Buenos Aires dialogue, what is a "milonga"?', options: ['A restaurant', 'A tango dance hall', 'A type of guitar', 'A neighborhood'], answer: 1 },
    { id: 8, type: 'mc', text: '"La puesta en escena" means:', options: ['The script', 'The cast', 'The staging', 'The rehearsal'], answer: 2 },
    { id: 9, type: 'tf', text: 'Reggaetón originated in Puerto Rico in the 1990s, blending Jamaican dancehall with hip-hop and Latin influences.', answer: true },
    { id: 10, type: 'mc', text: '"La interpretación fue magistral" is an example of:', options: ['Live commentary', 'A dance description', 'Performance criticism', 'A theater direction'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "El ___ general es el último ensayo antes del estreno" (dress rehearsal)', answer: 'ensayo' },
    { id: 12, type: 'mc', text: 'In the Bogotá dialogue, what is Camila fusing?', options: ['Tango and jazz', 'Cumbia and electronic music', 'Flamenco and rock', 'Bachata and hip-hop'], answer: 1 },
    { id: 13, type: 'mc', text: '"El elenco" refers to:', options: ['The script', 'The audience', 'The cast of a play', 'The stage'], answer: 2 },
    { id: 14, type: 'tf', text: 'Buenos Aires is known as the theater capital of Latin America, with over 300 active theaters.', answer: true },
    { id: 15, type: 'mc', text: '"La salsa caleña" is the style of salsa from:', options: ['Havana, Cuba', 'San Juan, Puerto Rico', 'Cali, Colombia', 'New York, USA'], answer: 2 },
  ],

  audioBase: '/audio/L8.6/phrases',

  uniqueActivity: {
    id: 'RhythmDecoderL86',
    sectionId: 'rhythm-decoder',
    sectionColor: 'bg-purple-50/40',
    sectionBorder: 'border-purple-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'music-terminology': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'dance-styles': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'theater-performance': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'criticism-review': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'rhythm-decoder': { bg: 'bg-purple-50/40', border: 'border-purple-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
