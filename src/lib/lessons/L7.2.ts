import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Puns & Wordplay (12) ===
  { spanish: '¿Qué le dijo el 0 al 8? — Bonito cinturón', english: 'What did 0 say to 8? — Nice belt (the 8 looks like a 0 wearing a belt)', pronunciation: 'keh leh DEE-hoh ehl SEH-roh ahl OH-choh boh-NEE-toh seen-too-ROHN', category: 'puns-wordplay', audio: 'que-le-dijo-el-cero-al-ocho' },
  { spanish: '¿Cómo se dice pañuelo en japonés? — Saka-moko', english: 'How do you say handkerchief in Japanese? — Saka-moko (sounds like "saca moco" = pick your nose)', pronunciation: 'KOH-moh seh DEE-seh pah-NYOO-eh-loh ehn hah-poh-NEHS SAH-kah MOH-koh', category: 'puns-wordplay', audio: 'como-se-dice-panuelo' },
  { spanish: '¿Qué hace una abeja en el gimnasio? — ¡Zumba!', english: 'What does a bee do at the gym? — Zumba! (buzz + the dance workout)', pronunciation: 'keh AH-seh OO-nah ah-BEH-hah ehn ehl heem-NAH-see-oh SOOM-bah', category: 'puns-wordplay', audio: 'que-hace-una-abeja' },
  { spanish: 'El calambur juega con la división de sílabas: "oro parece, plata no es"', english: 'A calambur plays with syllable division: "oro parece, plata no es" (plátano = banana)', pronunciation: 'ehl kah-lahm-BOOR HWEH-gah kohn lah dee-bee-see-OHN deh SEE-lah-bahs OH-roh pah-REH-seh PLAH-tah noh ehs', category: 'puns-wordplay', audio: 'el-calambur-juega' },
  { spanish: '¿Cuál es el colmo de un electricista? — Que su esposa se llame Luz y sus hijos le hagan corto', english: 'What is the worst thing for an electrician? — That his wife is named Luz (light) and his kids short-circuit him', pronunciation: 'kwahl ehs ehl KOHL-moh deh oon eh-lehk-tree-SEES-tah keh soo ehs-POH-sah seh YAH-meh loos ee soos EE-hohs leh AH-gahn KOHR-toh', category: 'puns-wordplay', audio: 'cual-es-el-colmo-electricista' },
  { spanish: '¿Por qué el libro de matemáticas estaba triste? — Porque tenía muchos problemas', english: 'Why was the math book sad? — Because it had many problems', pronunciation: 'pohr keh ehl LEE-broh deh mah-teh-MAH-tee-kahs ehs-TAH-bah TREES-teh pohr-keh teh-NEE-ah MOO-chohs proh-BLEH-mahs', category: 'puns-wordplay', audio: 'por-que-el-libro-matematicas' },
  { spanish: 'Un juego de palabras con homófonos: "llama" puede ser el animal, el fuego o el verbo llamar', english: 'A wordplay with homophones: "llama" can be the animal, the flame, or the verb to call', pronunciation: 'oon HWEH-goh deh pah-LAH-brahs kohn oh-MOH-foh-nohs YAH-mah PWEH-deh sehr ehl ah-nee-MAHL ehl FWEH-goh oh ehl BEHR-boh yah-MAHR', category: 'puns-wordplay', audio: 'un-juego-de-palabras-homofonos' },
  { spanish: '¿Qué le dijo un techo a otro techo? — Techo de menos', english: 'What did one roof say to another? — I "roof" you (techo de menos sounds like "te echo de menos" = I miss you)', pronunciation: 'keh leh DEE-hoh oon TEH-choh ah OH-troh TEH-choh TEH-choh deh MEH-nohs', category: 'puns-wordplay', audio: 'que-le-dijo-un-techo' },
  { spanish: '"Vino" puede ser el pasado de "venir" o la bebida — el contexto decide', english: '"Vino" can be the past tense of "to come" or wine — context decides', pronunciation: 'BEE-noh PWEH-deh sehr ehl pah-SAH-doh deh beh-NEER oh lah beh-BEE-dah ehl kohn-TEHKS-toh deh-SEE-deh', category: 'puns-wordplay', audio: 'vino-puede-ser' },
  { spanish: '¿Qué le dijo el semáforo al carro? — No me mires, me estoy cambiando', english: 'What did the traffic light say to the car? — Don\'t look at me, I\'m changing (clothes/colors)', pronunciation: 'keh leh DEE-hoh ehl seh-MAH-foh-roh ahl KAH-rroh noh meh MEE-rehs meh ehs-TOY kahm-bee-AHN-doh', category: 'puns-wordplay', audio: 'que-le-dijo-el-semaforo' },
  { spanish: '"Gato" tiene cuatro significados: el animal, el gato hidráulico, el juego y el sirviente', english: '"Gato" has four meanings: the animal, the car jack, the game (tic-tac-toe), and the servant', pronunciation: 'GAH-toh tee-EH-neh KWAH-troh seeg-nee-fee-KAH-dohs ehl ah-nee-MAHL ehl GAH-toh ee-DROW-lee-koh ehl HWEH-goh ee ehl seer-bee-EHN-teh', category: 'puns-wordplay', audio: 'gato-tiene-cuatro-significados' },
  { spanish: 'El retruécano invierte el orden: "hay que comer para vivir, no vivir para comer"', english: 'The retruécano inverts order: "one must eat to live, not live to eat"', pronunciation: 'ehl rreh-troo-EH-kah-noh een-bee-EHR-teh ehl OHR-dehn ay keh koh-MEHR PAH-rah bee-BEER noh bee-BEER PAH-rah koh-MEHR', category: 'puns-wordplay', audio: 'el-retruecano-invierte' },

  // === Albur & Double Entendre (12) ===
  { spanish: 'El albur es un duelo verbal mexicano donde gana quien mantiene el doble sentido', english: 'Albur is a Mexican verbal duel where the winner maintains the double meaning', pronunciation: 'ehl ahl-BOOR ehs oon DWEH-loh behr-BAHL meh-hee-KAH-noh DOHN-deh GAH-nah kee-EHN mahn-tee-EH-neh ehl DOH-bleh sehn-TEE-doh', category: 'albur-double-entendre', audio: 'el-albur-es-un-duelo' },
  { spanish: 'En el albur, "¿Me prestas tu taladro?" puede tener otro significado', english: 'In albur, "Can you lend me your drill?" can have another meaning', pronunciation: 'ehn ehl ahl-BOOR meh PREHS-tahs too tah-LAH-droh PWEH-deh teh-NEHR OH-troh seeg-nee-fee-KAH-doh', category: 'albur-double-entendre', audio: 'en-el-albur-me-prestas' },
  { spanish: 'La frase "¿Te gusta el arroz?" es inocente, pero en Tepito tiene doble sentido', english: 'The phrase "Do you like rice?" is innocent, but in Tepito it has a double meaning', pronunciation: 'lah FRAH-seh teh GOOS-tah ehl ah-RROHS ehs ee-noh-SEHN-teh PEH-roh ehn teh-PEE-toh tee-EH-neh DOH-bleh sehn-TEE-doh', category: 'albur-double-entendre', audio: 'la-frase-te-gusta-el-arroz' },
  { spanish: 'Alburear requiere rapidez mental y conocimiento del doble sentido', english: 'To alburear requires mental speed and knowledge of double meanings', pronunciation: 'ahl-boo-reh-AHR rreh-kee-EH-reh rrah-pee-DEHS mehn-TAHL ee koh-noh-see-mee-EHN-toh dehl DOH-bleh sehn-TEE-doh', category: 'albur-double-entendre', audio: 'alburear-requiere-rapidez' },
  { spanish: '"Hay te va" puede significar "aquí tienes" o iniciar un duelo de albur', english: '"Hay te va" can mean "here you go" or start an albur duel', pronunciation: 'ay teh bah PWEH-deh seeg-nee-fee-KAHR ah-KEE tee-EH-nehs oh ee-nee-see-AHR oon DWEH-loh deh ahl-BOOR', category: 'albur-double-entendre', audio: 'hay-te-va-puede-significar' },
  { spanish: 'El doble sentido funciona porque muchas palabras en español tienen acepciones múltiples', english: 'Double entendre works because many Spanish words have multiple meanings', pronunciation: 'ehl DOH-bleh sehn-TEE-doh foon-see-OH-nah pohr-keh MOO-chahs pah-LAH-brahs ehn ehs-pah-NYOHL tee-EH-nehn ah-sehp-see-OH-nehs MOOL-tee-plehs', category: 'albur-double-entendre', audio: 'el-doble-sentido-funciona' },
  { spanish: '"Estoy bien parado" puede significar estar en buena posición o algo más literal', english: '"Estoy bien parado" can mean being in a good position or something more literal', pronunciation: 'ehs-TOY bee-EHN pah-RAH-doh PWEH-deh seeg-nee-fee-KAHR ehs-TAHR ehn BWEH-nah poh-see-see-OHN oh AHL-goh mahs lee-teh-RAHL', category: 'albur-double-entendre', audio: 'estoy-bien-parado' },
  { spanish: 'En Veracruz se dice que las "bombas" jarochas son primas del albur chilango', english: 'In Veracruz they say jarocha "bombas" (rhymes) are cousins of the Mexico City albur', pronunciation: 'ehn beh-rah-KROOS seh DEE-seh keh lahs BOHM-bahs hah-ROH-chahs sohn PREE-mahs dehl ahl-BOOR chee-LAHN-goh', category: 'albur-double-entendre', audio: 'en-veracruz-se-dice' },
  { spanish: '"Me lo como" es una frase inocente sobre comida, pero en contexto de albur cambia todo', english: '"I\'ll eat it" is an innocent food phrase, but in albur context everything changes', pronunciation: 'meh loh KOH-moh ehs OO-nah FRAH-seh ee-noh-SEHN-teh SOH-breh koh-MEE-dah PEH-roh ehn kohn-TEHKS-toh deh ahl-BOOR KAHM-bee-ah TOH-doh', category: 'albur-double-entendre', audio: 'me-lo-como-es-una-frase' },
  { spanish: 'Saber cuándo algo tiene doble sentido te protege de caer en un albur accidental', english: 'Knowing when something has a double meaning protects you from falling into an accidental albur', pronunciation: 'sah-BEHR KWAHN-doh AHL-goh tee-EH-neh DOH-bleh sehn-TEE-doh teh proh-TEH-heh deh kah-EHR ehn oon ahl-BOOR ahk-see-dehn-TAHL', category: 'albur-double-entendre', audio: 'saber-cuando-algo-tiene' },
  { spanish: '"Se me paró el reloj" tiene un sentido literal obvio, pero albureros lo interpretan diferente', english: '"My watch stopped" has an obvious literal meaning, but albur players interpret it differently', pronunciation: 'seh meh pah-ROH ehl rreh-LOHH tee-EH-neh oon sehn-TEE-doh lee-teh-RAHL OHB-bee-oh PEH-roh ahl-boo-REH-rohs loh een-TEHR-preh-tahn dee-feh-REHN-teh', category: 'albur-double-entendre', audio: 'se-me-paro-el-reloj' },
  { spanish: 'El campeón de albur es "El Monstruo de Tepito", Lourdes Ruiz, la única mujer reconocida', english: 'The albur champion is "The Monster of Tepito," Lourdes Ruiz, the only recognized woman', pronunciation: 'ehl kahm-peh-OHN deh ahl-BOOR ehs ehl MOHNS-troo-oh deh teh-PEE-toh LOOR-dehs roo-EES lah OO-nee-kah moo-HEHR rreh-koh-noh-SEE-dah', category: 'albur-double-entendre', audio: 'el-campeon-de-albur' },

  // === Sarcasm & Irony Markers (12) ===
  { spanish: '¡No me digas! — dicho con tono exagerado significa "como si no lo supiera"', english: 'You don\'t say! — said with exaggerated tone means "as if I didn\'t know"', pronunciation: 'noh meh DEE-gahs DEE-choh kohn TOH-noh ehk-sah-heh-RAH-doh seeg-nee-FEE-kah KOH-moh see noh loh soo-pee-EH-rah', category: 'sarcasm-irony-markers', audio: 'no-me-digas-dicho' },
  { spanish: '¡Qué sorpresa! — cuando no hay sorpresa alguna, puro sarcasmo', english: 'What a surprise! — when there is no surprise at all, pure sarcasm', pronunciation: 'keh sohr-PREH-sah KWAHN-doh noh ay sohr-PREH-sah ahl-GOO-nah POO-roh sahr-KAHS-moh', category: 'sarcasm-irony-markers', audio: 'que-sorpresa-cuando-no-hay' },
  { spanish: '¡Claro que sí! — con tono irónico significa exactamente lo contrario', english: 'Of course! — with ironic tone means exactly the opposite', pronunciation: 'KLAH-roh keh see kohn TOH-noh ee-ROH-nee-koh seeg-nee-FEE-kah ehk-SAHK-tah-MEHN-teh loh kohn-TRAH-ree-oh', category: 'sarcasm-irony-markers', audio: 'claro-que-si-con-tono' },
  { spanish: 'Como si fuera poco, también me toca lavar los platos — sarcasmo puro', english: 'As if that weren\'t enough, I also get to wash the dishes — pure sarcasm', pronunciation: 'KOH-moh see FWEH-rah POH-koh tahm-bee-EHN meh TOH-kah lah-BAHR lohs PLAH-tohs sahr-KAHS-moh POO-roh', category: 'sarcasm-irony-markers', audio: 'como-si-fuera-poco-tambien' },
  { spanish: '¡Faltaba más! — puede ser genuino (generosidad) o sarcástico (molestia)', english: '"Of course!" — can be genuine (generosity) or sarcastic (annoyance)', pronunciation: 'fahl-TAH-bah mahs PWEH-deh sehr heh-noo-EE-noh heh-neh-roh-see-DAHD oh sahr-KAHS-tee-koh moh-LEHS-tee-ah', category: 'sarcasm-irony-markers', audio: 'faltaba-mas-puede-ser' },
  { spanish: '¡Qué amable! — dicho con los ojos en blanco significa todo lo contrario', english: 'How kind! — said with an eye roll means the exact opposite', pronunciation: 'keh ah-MAH-bleh DEE-choh kohn lohs OH-hohs ehn BLAHN-koh seeg-nee-FEE-kah TOH-doh loh kohn-TRAH-ree-oh', category: 'sarcasm-irony-markers', audio: 'que-amable-dicho-con-ojos' },
  { spanish: 'Sí, sí, sí... seguro que sí — la repetición marca incredulidad sarcástica', english: 'Yeah, yeah, yeah... sure thing — repetition signals sarcastic disbelief', pronunciation: 'see see see seh-GOO-roh keh see lah rreh-peh-tee-see-OHN MAHR-kah een-kreh-doo-lee-DAHD sahr-KAHS-tee-kah', category: 'sarcasm-irony-markers', audio: 'si-si-si-seguro-que-si' },
  { spanish: '¡Ay, pobrecito! — con sarcasmo implica que exageras tu sufrimiento', english: 'Oh, poor thing! — with sarcasm implies you\'re exaggerating your suffering', pronunciation: 'ay poh-breh-SEE-toh kohn sahr-KAHS-moh eem-PLEE-kah keh ehk-sah-HEH-rahs too soo-free-mee-EHN-toh', category: 'sarcasm-irony-markers', audio: 'ay-pobrecito-con-sarcasmo' },
  { spanish: '¡Qué interesante! — alargar la "e" es la clave del tono irónico', english: 'How interesting! — stretching the "e" is the key to the ironic tone', pronunciation: 'keh een-teh-reh-SAHN-teh ah-lahr-GAHR lah eh ehs lah KLAH-beh dehl TOH-noh ee-ROH-nee-koh', category: 'sarcasm-irony-markers', audio: 'que-interesante-alargar' },
  { spanish: 'Mira quién habla — lo dice alguien que hace exactamente lo mismo', english: 'Look who\'s talking — said by someone who does exactly the same thing', pronunciation: 'MEE-rah kee-EHN AH-blah loh DEE-seh AHL-gee-ehn keh AH-seh ehk-SAHK-tah-MEHN-teh loh MEES-moh', category: 'sarcasm-irony-markers', audio: 'mira-quien-habla' },
  { spanish: '¡Para nada! — dicho con sonrisa forzada es sarcasmo nivel experto', english: 'Not at all! — said with a forced smile is expert-level sarcasm', pronunciation: 'PAH-rah NAH-dah DEE-choh kohn sohn-REE-sah fohr-SAH-dah ehs sahr-KAHS-moh nee-BEHL ehks-PEHR-toh', category: 'sarcasm-irony-markers', audio: 'para-nada-dicho-con-sonrisa' },
  { spanish: '¡Genial, justo lo que necesitaba! — el sarcasmo perfecto para un mal día', english: 'Great, just what I needed! — the perfect sarcasm for a bad day', pronunciation: 'heh-nee-AHL HOOS-toh loh keh neh-seh-see-TAH-bah ehl sahr-KAHS-moh pehr-FEHK-toh PAH-rah oon mahl DEE-ah', category: 'sarcasm-irony-markers', audio: 'genial-justo-lo-que' },

  // === Comedic Storytelling (12) ===
  { spanish: 'Es que... resulta que... y entonces... — el setup perfecto para un chiste mexicano', english: 'The thing is... it turns out... and then... — the perfect setup for a Mexican joke', pronunciation: 'ehs keh rreh-SOOL-tah keh ee ehn-TOHN-sehs ehl SEH-tup pehr-FEHK-toh PAH-rah oon CHEES-teh meh-hee-KAH-noh', category: 'comedic-storytelling', audio: 'es-que-resulta-que' },
  { spanish: 'Había una vez un hombre tan tacaño, tan tacaño, que... — la repetición crea expectativa', english: 'Once upon a time there was a man so stingy, so stingy, that... — repetition builds anticipation', pronunciation: 'ah-BEE-ah OO-nah behs oon OHM-breh tahn tah-KAH-nyoh tahn tah-KAH-nyoh keh lah rreh-peh-tee-see-OHN KREH-ah ehks-pehk-tah-TEE-bah', category: 'comedic-storytelling', audio: 'habia-una-vez-un-hombre' },
  { spanish: 'La exageración es el alma del humor: "Tengo tanta hambre que me comería un elefante"', english: 'Exaggeration is the soul of humor: "I\'m so hungry I could eat an elephant"', pronunciation: 'lah ehk-sah-heh-rah-see-OHN ehs ehl AHL-mah dehl oo-MOHR TEHN-goh TAHN-tah AHM-breh keh meh koh-meh-REE-ah oon eh-leh-FAHN-teh', category: 'comedic-storytelling', audio: 'la-exageracion-es-el-alma' },
  { spanish: 'Un doctor, un abogado y un ingeniero entran a un bar... — el formato clásico de chiste', english: 'A doctor, a lawyer, and an engineer walk into a bar... — the classic joke format', pronunciation: 'oon dohk-TOHR oon ah-boh-GAH-doh ee oon een-heh-nee-EH-roh EHN-trahn ah oon bahr ehl fohr-MAH-toh KLAH-see-koh deh CHEES-teh', category: 'comedic-storytelling', audio: 'un-doctor-un-abogado' },
  { spanish: 'El humor autodepreciativo: "Soy tan malo cocinando que quemé el agua"', english: 'Self-deprecating humor: "I\'m such a bad cook that I burned the water"', pronunciation: 'ehl oo-MOHR ow-toh-deh-preh-see-ah-TEE-boh soy tahn MAH-loh koh-see-NAHN-doh keh keh-MEH ehl AH-gwah', category: 'comedic-storytelling', audio: 'el-humor-autodepreciativo' },
  { spanish: '¿Y sabes qué pasó después? — la pausa dramática antes del remate', english: 'And do you know what happened next? — the dramatic pause before the punchline', pronunciation: 'ee SAH-behs keh pah-SOH dehs-PWEHS lah POW-sah drah-MAH-tee-kah AHN-tehs dehl rreh-MAH-teh', category: 'comedic-storytelling', audio: 'y-sabes-que-paso-despues' },
  { spanish: 'Le digo: "¿Cómo que no?" Y me dice: "Pues no." — el ping-pong cómico', english: 'I say: "What do you mean no?" And they say: "Well, no." — comedic ping-pong', pronunciation: 'leh DEE-goh KOH-moh keh noh ee meh DEE-seh pwehs noh ehl peeng-POHNG KOH-mee-koh', category: 'comedic-storytelling', audio: 'le-digo-como-que-no' },
  { spanish: 'Esto me recuerda cuando... — transición para encadenar chistes', english: 'This reminds me of when... — transition for chaining jokes', pronunciation: 'EHS-toh meh rreh-KWEHR-dah KWAHN-doh trahn-see-see-OHN PAH-rah ehn-kah-deh-NAHR CHEES-tehs', category: 'comedic-storytelling', audio: 'esto-me-recuerda-cuando' },
  { spanish: 'El remate debe ser inesperado: "...y resulta que era el mesero"', english: 'The punchline should be unexpected: "...and it turns out it was the waiter"', pronunciation: 'ehl rreh-MAH-teh DEH-beh sehr ee-nehs-peh-RAH-doh ee rreh-SOOL-tah keh EH-rah ehl meh-SEH-roh', category: 'comedic-storytelling', audio: 'el-remate-debe-ser' },
  { spanish: '¡No, espera, que se pone mejor! — alargar la historia aumenta la risa', english: 'No, wait, it gets better! — extending the story increases the laughter', pronunciation: 'noh ehs-PEH-rah keh seh POH-neh meh-HOHR ah-lahr-GAHR lah ees-TOH-ree-ah ow-MEHN-tah lah RREE-sah', category: 'comedic-storytelling', audio: 'no-espera-que-se-pone' },
  { spanish: 'Juro que esto es verdad — decir esto antes del chiste lo hace más gracioso', english: 'I swear this is true — saying this before the joke makes it funnier', pronunciation: 'HOO-roh keh EHS-toh ehs behr-DAHD deh-SEER EHS-toh AHN-tehs dehl CHEES-teh loh AH-seh mahs grah-see-OH-soh', category: 'comedic-storytelling', audio: 'juro-que-esto-es-verdad' },
  { spanish: 'La regla de tres en comedia: primero estableces, luego refuerzas, al final sorprendes', english: 'The rule of three in comedy: first you establish, then reinforce, finally surprise', pronunciation: 'lah RREH-glah deh trehs ehn koh-MEH-dee-ah pree-MEH-roh ehs-tah-BLEH-sehs LWEH-goh rreh-FWEHR-sahs ahl fee-NAHL sohr-PREHN-dehs', category: 'comedic-storytelling', audio: 'la-regla-de-tres-en-comedia' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L72PhraseByAudio = phraseByAudio

// === PUN MASTER CHALLENGE (unique activity) ===

export interface PunMasterChallenge {
  setup: string
  english: string
  correctPunchline: string
  options: string[]
}

export const PUN_MASTER_CHALLENGES: PunMasterChallenge[] = [
  {
    setup: '¿Qué le dijo el 0 al 8?',
    english: 'What did 0 say to 8?',
    correctPunchline: 'Bonito cinturón',
    options: ['Bonito cinturón', 'Estás muy gordo', 'Te ves redondo', 'Somos iguales'],
  },
  {
    setup: '¿Por qué el libro de matemáticas estaba triste?',
    english: 'Why was the math book sad?',
    correctPunchline: 'Porque tenía muchos problemas',
    options: ['Porque tenía muchos problemas', 'Porque nadie lo leía', 'Porque era muy viejo', 'Porque le faltaban páginas'],
  },
  {
    setup: '¿Qué hace una abeja en el gimnasio?',
    english: 'What does a bee do at the gym?',
    correctPunchline: '¡Zumba!',
    options: ['¡Zumba!', '¡Pica!', '¡Suda!', '¡Vuela!'],
  },
  {
    setup: '¿Qué le dijo un techo a otro techo?',
    english: 'What did one roof say to another roof?',
    correctPunchline: 'Techo de menos',
    options: ['Techo de menos', 'Estamos muy altos', 'Ya nos vamos a caer', 'Somos gemelos'],
  },
  {
    setup: '¿Cuál es el colmo de un electricista?',
    english: 'What is the worst thing for an electrician?',
    correctPunchline: 'Que su esposa se llame Luz y sus hijos le hagan corto',
    options: ['Que su esposa se llame Luz y sus hijos le hagan corto', 'Que no tenga energía', 'Que le den toques en la puerta', 'Que viva a oscuras'],
  },
  {
    setup: '¿Qué le dijo el semáforo al carro?',
    english: 'What did the traffic light say to the car?',
    correctPunchline: 'No me mires, me estoy cambiando',
    options: ['No me mires, me estoy cambiando', 'Espérame un momento', 'Te voy a detener', 'Sigue derecho'],
  },
  {
    setup: '¿Cómo se dice pañuelo en japonés?',
    english: 'How do you say handkerchief in Japanese?',
    correctPunchline: 'Saka-moko',
    options: ['Saka-moko', 'Ashi-noko', 'Kiru-koto', 'Hana-muki'],
  },
]

// === LESSON DATA ===

export const L72Data: LessonData = {
  id: 'L7.2',
  hero: {
    lessonId: 'L7.2',
    title: 'Humor, Wordplay & Double Entendre',
    subtitle: 'The art of making people laugh in Spanish',
    description: 'Master Spanish puns (juegos de palabras), the legendary Mexican albur tradition, sarcasm markers, and comedic storytelling techniques. At upper-intermediate level, humor is the ultimate proof of fluency — understanding what makes native speakers laugh.',
    image: '/images/L7.2/L7.2.jpg',
    gradient: 'from-yellow-800/65 via-amber-700/55 to-orange-700/65',
    accentColor: 'yellow-200',
  },

  objectives: [
    { icon: '🃏', title: 'Puns & Wordplay', desc: 'Understand Spanish puns using homophones, calambur, retruécano, and words with multiple meanings.' },
    { icon: '🇲🇽', title: 'Albur & Double Entendre', desc: 'Navigate Mexico\'s albur tradition — recognize double meanings and avoid accidental innuendo.' },
    { icon: '😏', title: 'Sarcasm & Irony', desc: 'Detect and deploy Spanish sarcasm markers: tone, repetition, exaggeration, and context clues.' },
    { icon: '🎭', title: 'Comedic Storytelling', desc: 'Master joke structure, the rule of three, dramatic pauses, and the art of the remate (punchline).' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.8', label: 'Irony & Humor Basics', detail: 'L5.8 introduced ironic expressions and humor at B2 level. Now elevate to native-level wordplay and complex sarcasm.' },
    { fromLesson: 'L5.6', label: 'Idioms & Figurative Language', detail: 'L5.6 covered idioms and figurative expressions. Puns and albur take figurative language to its most playful extreme.' },
    { fromLesson: 'L6.4', label: 'Colloquial & Informal Language', detail: 'L6.4 taught informal registers and slang. Humor lives in informal contexts — this lesson masters the comedic side.' },
  ],

  sectionTransitions: [
    { afterSection: 'puns-wordplay', text: 'You\'ve cracked Spanish puns! Now let\'s explore the legendary albur tradition.' },
    { afterSection: 'albur-double-entendre', text: 'Double meanings decoded! Let\'s learn how Spanish signals sarcasm and irony.' },
    { afterSection: 'sarcasm-irony-markers', text: 'Sarcasm mastered! Now let\'s put it all together in comedic storytelling.' },
    { afterSection: 'dialogues', text: 'Hilarious conversations! Let\'s explore the rich culture of Spanish-language humor.' },
    { afterSection: 'cultural', text: 'Culture check complete — now prove your humor skills in the Pun Master challenge!' },
    { afterSection: 'pun-master', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El chiste es...', english: 'The joke is...' },
    { spanish: 'Tiene doble sentido...', english: 'It has a double meaning...' },
    { spanish: '¡No me digas!', english: 'You don\'t say! (sarcastic)' },
    { spanish: 'Es que resulta que...', english: 'The thing is, it turns out...' },
    { spanish: '¡Qué bueno el remate!', english: 'Great punchline!' },
    { spanish: 'Me muero de risa', english: 'I\'m dying of laughter' },
  ],

  pronunciationChallenges: [
    { spanish: '¿Qué le dijo el 0 al 8? Bonito cinturón', pronunciation: 'keh leh DEE-hoh ehl SEH-roh ahl OH-choh boh-NEE-toh seen-too-ROHN', english: 'What did 0 say to 8? Nice belt', audio: 'que-le-dijo-el-cero-al-ocho', tip: 'Spanish joke delivery relies on natural rhythm. Don\'t rush the setup — pause before "Bonito cinturón" for maximum comic effect.' },
    { spanish: '¡No me digas! ¡Qué sorpresa!', pronunciation: 'noh meh DEE-gahs keh sohr-PREH-sah', english: 'You don\'t say! What a surprise!', audio: 'no-me-digas-dicho', tip: 'Sarcasm in Spanish is ALL about elongation. Stretch the vowels: "¡Nooo me digaaas!" The longer, the more sarcastic.' },
    { spanish: 'El albur es un duelo verbal mexicano', pronunciation: 'ehl ahl-BOOR ehs oon DWEH-loh behr-BAHL meh-hee-KAH-noh', english: 'Albur is a Mexican verbal duel', audio: 'el-albur-es-un-duelo', tip: '"Albur" rhymes with "sur" (south). It comes from Arabic "al-bur" meaning a trick or gamble with words.' },
    { spanish: 'Soy tan malo cocinando que quemé el agua', pronunciation: 'soy tahn MAH-loh koh-see-NAHN-doh keh keh-MEH ehl AH-gwah', english: 'I\'m such a bad cook that I burned the water', audio: 'el-humor-autodepreciativo', tip: 'Self-deprecating humor uses "tan... que..." (so... that...). The exaggeration after "que" is where the laugh lives.' },
    { spanish: 'Y resulta que era el mesero', pronunciation: 'ee rreh-SOOL-tah keh EH-rah ehl meh-SEH-roh', english: 'And it turns out it was the waiter', audio: 'el-remate-debe-ser', tip: '"Resulta que" is THE punchline transition phrase. Drop your voice slightly, pause, then deliver. Native comedians swear by it.' },
    { spanish: '¡Genial, justo lo que necesitaba!', pronunciation: 'heh-nee-AHL HOOS-toh loh keh neh-seh-see-TAH-bah', english: 'Great, just what I needed! (sarcastic)', audio: 'genial-justo-lo-que', tip: 'To signal sarcasm, raise your pitch on "Genial" and drop it flat on "justo lo que necesitaba." The contrast is the sarcasm.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'puns-wordplay', label: 'Puns & Wordplay' },
    { id: 'albur-double-entendre', label: 'Albur & Double Entendre' },
    { id: 'sarcasm-irony-markers', label: 'Sarcasm & Irony' },
    { id: 'comedic-storytelling', label: 'Comedic Storytelling' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Humor Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'pun-master', label: 'Pun Master' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'puns-wordplay',
      title: 'Puns & Wordplay — Juegos de Palabras',
      description: 'Spanish puns exploit homophones, polysemy, and syllable tricks. The calambur splits words differently; the retruécano inverts them. Master these and you\'ll understand why native speakers groan and laugh simultaneously.',
      tabs: [
        { label: 'Classic Puns', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'puns-wordplay').slice(0, 6) },
        { label: 'Wordplay Techniques', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'puns-wordplay').slice(6) },
      ],
    },
    {
      id: 'albur-double-entendre',
      title: 'Albur & Double Entendre — El Arte del Doble Sentido',
      description: 'The Mexican albur is a verbal chess match of double meanings. It\'s an art form with its own champions and traditions. Learning to recognize (and dodge) double entendres is essential cultural fluency.',
      tabs: [
        { label: 'Albur Tradition', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'albur-double-entendre').slice(0, 6) },
        { label: 'Double Meaning Awareness', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'albur-double-entendre').slice(6) },
      ],
    },
    {
      id: 'sarcasm-irony-markers',
      title: 'Sarcasm & Irony Markers — Señales de Sarcasmo',
      description: 'Spanish doesn\'t have a sarcasm font, but it has clear signals: tone elongation, eye rolls, specific phrases, and exaggerated enthusiasm. Learn to read — and deploy — these markers like a native.',
      tabs: [
        { label: 'Classic Sarcasm', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'sarcasm-irony-markers').slice(0, 6) },
        { label: 'Advanced Irony', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'sarcasm-irony-markers').slice(6) },
      ],
    },
    {
      id: 'comedic-storytelling',
      title: 'Comedic Storytelling — El Arte de Contar Chistes',
      description: 'Great comedy in Spanish follows a rhythm: setup (planteamiento), build (desarrollo), and punchline (remate). Master the timing phrases, exaggeration techniques, and storytelling connectors that make Spanish jokes land.',
      tabs: [
        { label: 'Setup & Structure', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'comedic-storytelling').slice(0, 6) },
        { label: 'Delivery & Timing', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'comedic-storytelling').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Sarcasm = Vowel Elongation',
      content: 'The #1 sarcasm marker in Spanish is stretching vowels. "¡Qué sorpresa!" is genuine. "¡Quééé sorpresaaa!" is dripping sarcasm. The more you stretch, the more sarcastic. Practice elongating key vowels while keeping a flat, deadpan tone on the rest.',
      example: '¡No me digaaas! | ¡Qué interesaaante! | ¡Claroooo que sí!',
    },
    {
      title: 'The Comedic Pause',
      content: 'Spanish comedy relies heavily on "la pausa dramática" — the beat before the punchline. After "¿Y sabes qué?" or "Y resulta que...", pause for 1-2 seconds. The audience\'s anticipation IS the comedy. Rush the punchline and you kill the joke.',
      example: 'Y entonces... (pause) ...resulta que era el mesero.',
      reviewFrom: 'L5.8',
    },
    {
      title: 'Albur Rhythm',
      content: 'Albur exchanges are rapid-fire — like verbal ping-pong. Each response must come within a beat. The rhythm is: statement → response → counter → escalation. If you pause too long, you "lose." Speed and wit are everything in this tradition.',
      example: '"¿Me prestas tu taladro?" — "No, porque luego no me lo regresas." (instant comeback)',
    },
    {
      title: 'Joke Intonation Patterns',
      content: 'Spanish jokes follow a specific melody: rising intonation during setup ("Había una vez..."), level during development ("tan tacaño, tan tacaño..."), and a sharp drop + speed change at the punchline. The tonal shift signals "here comes the funny part."',
      example: '↗ Había una vez un hombre → tan tacaño, tan tacaño → ↘ que no se bañaba para no gastar el jabón.',
    },
  ],

  flashcardGroups: [
    {
      key: 'puns',
      label: 'Puns & Wordplay',
      audioKeys: ['que-le-dijo-el-cero-al-ocho', 'como-se-dice-panuelo', 'que-hace-una-abeja', 'el-calambur-juega', 'cual-es-el-colmo-electricista', 'por-que-el-libro-matematicas', 'un-juego-de-palabras-homofonos', 'que-le-dijo-un-techo', 'vino-puede-ser', 'que-le-dijo-el-semaforo', 'gato-tiene-cuatro-significados', 'el-retruecano-invierte'],
    },
    {
      key: 'albur',
      label: 'Albur & Double Entendre',
      audioKeys: ['el-albur-es-un-duelo', 'en-el-albur-me-prestas', 'la-frase-te-gusta-el-arroz', 'alburear-requiere-rapidez', 'hay-te-va-puede-significar', 'el-doble-sentido-funciona', 'estoy-bien-parado', 'en-veracruz-se-dice', 'me-lo-como-es-una-frase', 'saber-cuando-algo-tiene', 'se-me-paro-el-reloj', 'el-campeon-de-albur'],
    },
    {
      key: 'sarcasm-comedy',
      label: 'Sarcasm & Comedy',
      audioKeys: ['no-me-digas-dicho', 'que-sorpresa-cuando-no-hay', 'claro-que-si-con-tono', 'faltaba-mas-puede-ser', 'es-que-resulta-que', 'la-exageracion-es-el-alma', 'el-humor-autodepreciativo', 'y-sabes-que-paso-despues', 'la-regla-de-tres-en-comedia', 'genial-justo-lo-que'],
    },
  ],

  matchPairs: [
    { left: 'Calambur', right: 'Syllable-splitting wordplay' },
    { left: 'Albur', right: 'Mexican verbal duel' },
    { left: '¡No me digas!', right: 'Sarcastic "You don\'t say!"' },
    { left: 'Remate', right: 'Punchline' },
    { left: 'Doble sentido', right: 'Double meaning' },
    { left: 'Retruécano', right: 'Word order inversion' },
    { left: '¡Faltaba más!', right: 'Sarcastic/genuine "Of course!"' },
    { left: 'Regla de tres', right: 'Comedy rule of three' },
  ],
  matchLabels: { left: 'Humor Term', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Genuine vs. Sarcastic',
      instruction: 'Is this expression being used genuinely or sarcastically?',
      buckets: ['Genuine 😊', 'Sarcastic 😏'],
      items: [
        { text: '¡Qué alegría verte! (said warmly)', bucket: 'Genuine 😊' },
        { text: '¡Muchas gracias por tu ayuda!', bucket: 'Genuine 😊' },
        { text: '¡Qué bonito día!', bucket: 'Genuine 😊' },
        { text: '¡Felicidades, te lo mereces!', bucket: 'Genuine 😊' },
        { text: '¡Qué sorpresaaa! (with eye roll)', bucket: 'Sarcastic 😏' },
        { text: '¡Genial, justo lo que necesitaba!', bucket: 'Sarcastic 😏' },
        { text: '¡Ay, pobrecito! (mocking tone)', bucket: 'Sarcastic 😏' },
        { text: 'Sí, sí, sí... seguro que sí...', bucket: 'Sarcastic 😏' },
      ],
    },
    {
      title: 'Humor Type',
      instruction: 'Classify each item by humor technique.',
      buckets: ['Pun / Wordplay 🃏', 'Sarcasm / Irony 😏'],
      items: [
        { text: '¿Qué le dijo el 0 al 8? Bonito cinturón', bucket: 'Pun / Wordplay 🃏' },
        { text: '"Vino" = wine or "he/she came"', bucket: 'Pun / Wordplay 🃏' },
        { text: 'Techo de menos (te echo de menos)', bucket: 'Pun / Wordplay 🃏' },
        { text: '"Gato" = cat, car jack, tic-tac-toe', bucket: 'Pun / Wordplay 🃏' },
        { text: '¡No me digaaas! (elongated)', bucket: 'Sarcasm / Irony 😏' },
        { text: '¡Claro que sí! (with flat tone)', bucket: 'Sarcasm / Irony 😏' },
        { text: 'Mira quién habla...', bucket: 'Sarcasm / Irony 😏' },
        { text: 'Como si fuera poco...', bucket: 'Sarcasm / Irony 😏' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Humor Sorting',

  dialogues: [
    {
      id: 'dialogue-comedy-show',
      title: 'Backstage at a Comedy Show — Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Daniela', text: '¡Güey, estoy nerviosa! Es mi primera vez haciendo stand-up en el Foro Comedy.', audio: '/audio/L7.2/phrases/d1-line1.mp3' },
        { speaker: 'Rodrigo', text: 'Tranquila. Tu material es buenísimo. El chiste del semáforo me mató de risa.', audio: '/audio/L7.2/phrases/d1-line2.mp3' },
        { speaker: 'Daniela', text: '¿Tú crees? Es que el remate depende mucho de la pausa... si me apuro, se pierde.', audio: '/audio/L7.2/phrases/d1-line3.mp3' },
        { speaker: 'Rodrigo', text: 'Exacto. La pausa es todo. Acuérdate: "Y resulta que..." — respira — luego sueltas el remate.', audio: '/audio/L7.2/phrases/d1-line4.mp3' },
        { speaker: 'Daniela', text: '¿Y el bloque de albures? No sé si el público va a captar los dobles sentidos.', audio: '/audio/L7.2/phrases/d1-line5.mp3', annotations: [{ phrase: 'doble sentidos', fromLesson: 'L5.8', note: 'Double meanings explored in irony/humor basics (L5.8)' }] },
        { speaker: 'Rodrigo', text: 'Estamos en la Ciudad de México, ¡aquí el albur es deporte nacional! Van a captar todo.', audio: '/audio/L7.2/phrases/d1-line6.mp3' },
        { speaker: 'Daniela', text: 'Jaja, tienes razón. Oye, ¿y si meto algo de sarcasmo? Tipo "¡Qué sorpresaaa que nadie llega a tiempo!"', audio: '/audio/L7.2/phrases/d1-line7.mp3' },
        { speaker: 'Rodrigo', text: '¡Eso es oro! El público ama el sarcasmo porque se identifican. Todos hemos dicho "¡Genial, justo lo que necesitaba!"', audio: '/audio/L7.2/phrases/d1-line8.mp3' },
        { speaker: 'Daniela', text: 'Ok, voy a abrir con el autodepreciativo: "Soy tan mala con los nombres que le digo \'mija\' a todo el mundo."', audio: '/audio/L7.2/phrases/d1-line9.mp3' },
        { speaker: 'Rodrigo', text: '¡Perfecto! Eso rompe el hielo. Y luego la regla de tres: estableces, refuerzas, sorprendes.', audio: '/audio/L7.2/phrases/d1-line10.mp3' },
        { speaker: 'Daniela', text: 'Sí: "Mi novio cocina... a veces... bueno, una vez quemó el agua." ¡Tres tiempos!', audio: '/audio/L7.2/phrases/d1-line11.mp3' },
        { speaker: 'Rodrigo', text: '¡Eso! Y para cerrar, el calambur de "oro parece, plata no es." ¡El público va a morir!', audio: '/audio/L7.2/phrases/d1-line12.mp3', annotations: [{ phrase: 'oro parece, plata no es', fromLesson: 'L5.6', note: 'Figurative language and riddles from L5.6' }] },
        { speaker: 'Daniela', text: 'Me dice el productor que son cinco minutos. ¿Cinco minutos? ¡Como si fuera poco!', audio: '/audio/L7.2/phrases/d1-line13.mp3' },
        { speaker: 'Rodrigo', text: '¡No me digas! Con tu material podrías llenar una hora. Pero bueno, dale — ¡a matar!', audio: '/audio/L7.2/phrases/d1-line14.mp3' },
        { speaker: 'Daniela', text: '¡Deséame suerte! O mejor no, que luego dices "¡faltaba más!" con ese tono tuyo...', audio: '/audio/L7.2/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-friends-jokes',
      title: 'Friends Telling Jokes at a Café — Bogotá',
      location: 'Bogotá',
      lines: [
        { speaker: 'Camila', text: '¡Parceros, tengo un chiste buenísimo! ¿Listos? ¿Cómo se dice pañuelo en japonés?', audio: '/audio/L7.2/phrases/d2-line1.mp3' },
        { speaker: 'Andrés', text: 'No sé, ¿cómo?', audio: '/audio/L7.2/phrases/d2-line2.mp3' },
        { speaker: 'Camila', text: '¡Saka-moko! ¿Pillaron? ¡Saca moco!', audio: '/audio/L7.2/phrases/d2-line3.mp3' },
        { speaker: 'Andrés', text: 'Jajaja, ¡qué asco! Bueno, les tengo uno mejor. Un doctor, un abogado y un ingeniero entran a un bar...', audio: '/audio/L7.2/phrases/d2-line4.mp3' },
        { speaker: 'Valentina', text: '¡Ay no, otra vez el formato clásico! ¡Qué sorpresaaa!', audio: '/audio/L7.2/phrases/d2-line5.mp3', annotations: [{ phrase: '¡Qué sorpresaaa!', fromLesson: 'L5.8', note: 'Sarcastic exclamation pattern from L5.8' }] },
        { speaker: 'Andrés', text: '¡No, espera, que se pone mejor! Resulta que el doctor pide un whisky, el abogado pide un vodka...', audio: '/audio/L7.2/phrases/d2-line6.mp3' },
        { speaker: 'Camila', text: '¿Y el ingeniero?', audio: '/audio/L7.2/phrases/d2-line7.mp3' },
        { speaker: 'Andrés', text: '...y el ingeniero pide la cuenta. Porque los ingenieros siempre calculan todo. ¡Juro que es verdad!', audio: '/audio/L7.2/phrases/d2-line8.mp3' },
        { speaker: 'Valentina', text: '¡Claro que sí! Buenísimo. Oigan, ¿ustedes saben la diferencia entre sarcasmo y humor?', audio: '/audio/L7.2/phrases/d2-line9.mp3' },
        { speaker: 'Camila', text: '¿Cuál es?', audio: '/audio/L7.2/phrases/d2-line10.mp3' },
        { speaker: 'Valentina', text: 'El humor te hace reír. El sarcasmo te hace reír y luego preguntarte si fue un insulto.', audio: '/audio/L7.2/phrases/d2-line11.mp3' },
        { speaker: 'Andrés', text: '¡Eso! Como cuando tu mamá dice "¡Ay, qué ordenado tu cuarto!" y está todo tirado. Eso es sarcasmo puro.', audio: '/audio/L7.2/phrases/d2-line12.mp3' },
        { speaker: 'Camila', text: 'Mi favorito es el humor autodepreciativo: "Soy tan despistada que una vez busqué el celular con la linterna del celular."', audio: '/audio/L7.2/phrases/d2-line13.mp3', annotations: [{ phrase: 'humor autodepreciativo', fromLesson: 'L6.4', note: 'Self-referential informal register from L6.4' }] },
        { speaker: 'Valentina', text: '¡Me muero! Esto me recuerda cuando mi abuelo decía: "El que ríe al último, piensa más lento."', audio: '/audio/L7.2/phrases/d2-line14.mp3' },
        { speaker: 'Andrés', text: '¡Jajaja! Tu abuelo era un crack. Bueno, ¿pedimos otro tinto y seguimos con los chistes?', audio: '/audio/L7.2/phrases/d2-line15.mp3' },
        { speaker: 'Camila', text: '¡Faltaba más! Pero el próximo chiste lo cuenta Valentina, que siempre se salva.', audio: '/audio/L7.2/phrases/d2-line16.mp3' },
        { speaker: 'Valentina', text: '¡Ay, pobrecita de mí! ¿Ven? Eso fue sarcasmo. Ya estoy aprendiendo.', audio: '/audio/L7.2/phrases/d2-line17.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Go backstage at a comedy show in Mexico City to learn joke delivery and timing, then join friends in a Bogotá café for a hilarious joke-telling session.',

  culturalNotes: [
    {
      title: 'El Albur: Mexico\'s Verbal Chess',
      content: 'The albur is far more than dirty jokes — it\'s a sophisticated verbal art form with deep roots in Mexican popular culture, particularly in neighborhoods like Tepito in Mexico City. Albur masters are celebrated artists. Lourdes Ruiz, known as "La Verdolaga" or "El Monstruo de Tepito," is the only woman to have won Mexico\'s national albur championship. She even teaches albur workshops at universities. The art requires encyclopedic knowledge of double meanings, lightning-fast reflexes, and the ability to maintain a poker face. For Spanish learners, understanding albur is crucial cultural literacy — even if you never participate, you\'ll recognize when it\'s happening around you.',
    },
    {
      title: 'Regional Humor Styles Across Latin America',
      content: 'Each Spanish-speaking country has its own comedy DNA. Mexico leads with albur and "comedia de carpa" (tent comedy) traditions. Argentina favors intellectual, dry humor — their stand-up scene rivals New York\'s. Colombia\'s humor is warm and storytelling-based, full of "¿Y entonces qué cree?" (And then what do you think?). Spain\'s humor tends toward the absurd ("humor absurdo") and self-deprecating. Chile loves dark humor and wordplay with their distinctive slang. Cuban humor is politically charged and resilient — "reírse para no llorar" (laugh so you don\'t cry). Understanding these styles helps you connect authentically with speakers from each region.',
    },
    {
      title: 'The Spanish-Language Comedy Boom',
      content: 'Latin American stand-up comedy is experiencing a golden age. Netflix specials by comedians like Franco Escamilla (Mexico), Rodrigo Noya (Colombia), and Malena Pichot (Argentina) have created a pan-Hispanic comedy audience. Platforms like Comedy Central Latin America and YouTube channels have democratized humor, letting regional jokes go viral across borders. The "comedy club" culture, once limited to Mexico City and Buenos Aires, now thrives in Bogotá, Lima, Santiago, and Madrid. For Spanish learners, watching stand-up is one of the best ways to improve comprehension — comedians speak naturally, use current slang, and their delivery teaches you rhythm and timing.',
    },
  ],
  culturalGradient: 'from-yellow-50 to-amber-50',

  quiz: [
    { id: 1, type: 'mc', text: 'In the joke "¿Qué le dijo el 0 al 8?", why is the answer "Bonito cinturón" funny?', options: ['Because 8 wears a belt', 'Because 8 looks like 0 with a belt around it', 'Because 0 is jealous', 'Because belts are funny'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete the sarcastic phrase: "¡Qué ___!" (surprise — said sarcastically)', answer: 'sorpresa' },
    { id: 3, type: 'mc', text: 'What is "albur" in Mexican culture?', options: ['A type of food', 'A verbal duel using double meanings', 'A traditional dance', 'A card game'], answer: 1 },
    { id: 4, type: 'tf', text: 'Elongating vowels (¡Nooo me digaaas!) is a common way to signal sarcasm in Spanish.', answer: true },
    { id: 5, type: 'mc', text: 'What is a "calambur"?', options: ['A type of joke about animals', 'Wordplay that splits syllables differently', 'A Mexican insult', 'A comedy club'], answer: 1 },
    { id: 6, type: 'fill', text: 'The comedy "rule of three" in Spanish is: estableces, refuerzas, ___', answer: 'sorprendes' },
    { id: 7, type: 'mc', text: '"¡Faltaba más!" can be:', options: ['Only genuine', 'Only sarcastic', 'Either genuine or sarcastic depending on tone', 'Neither — it\'s a greeting'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what technique does Daniela plan to open with?', options: ['A pun', 'Self-deprecating humor', 'An albur', 'A political joke'], answer: 1 },
    { id: 9, type: 'tf', text: 'A "retruécano" inverts word order to create a new meaning: "comer para vivir / vivir para comer."', answer: true },
    { id: 10, type: 'mc', text: '"Resulta que..." is used to:', options: ['Start a conversation', 'Signal a punchline transition', 'Express sadness', 'Ask a question'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "Mira quién ___" (Look who\'s talking)', answer: 'habla' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what joke does Camila tell?', options: ['The traffic light joke', 'The handkerchief in Japanese joke', 'The math book joke', 'The electrician joke'], answer: 1 },
    { id: 13, type: 'mc', text: 'Who is Lourdes Ruiz (El Monstruo de Tepito)?', options: ['A comedian on Netflix', 'A professional wrestler', 'Mexico\'s albur champion', 'A TV host'], answer: 2 },
    { id: 14, type: 'tf', text: 'Self-deprecating humor in Spanish often uses "tan... que..." (so... that...) for exaggeration.', answer: true },
    { id: 15, type: 'mc', text: 'Which country is known for intellectual, dry humor similar to New York-style comedy?', options: ['Mexico', 'Colombia', 'Argentina', 'Cuba'], answer: 2 },
  ],

  audioBase: '/audio/L7.2/phrases',

  uniqueActivity: {
    id: 'PunMasterL72',
    sectionId: 'pun-master',
    sectionColor: 'bg-yellow-50/40',
    sectionBorder: 'border-yellow-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'puns-wordplay': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'albur-double-entendre': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'sarcasm-irony-markers': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'comedic-storytelling': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'verb-sorting': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pun-master': { bg: 'bg-yellow-50/40', border: 'border-yellow-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
