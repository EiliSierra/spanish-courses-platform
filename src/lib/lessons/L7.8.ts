import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Identity Concepts (12) ===
  { spanish: 'La identidad cultural se construye a través de la lengua, las tradiciones y la memoria colectiva', english: 'Cultural identity is built through language, traditions, and collective memory', pronunciation: 'lah ee-dehn-tee-DAHD kool-too-RAHL seh kohns-TROO-yeh ah trah-BEHS deh lah LEHN-gwah lahs trah-dee-see-OH-nehs ee lah meh-MOH-ree-ah koh-lehk-TEE-bah', category: 'identity-concepts', audio: 'la-identidad-cultural-se' },
  { spanish: 'El sentido de pertenencia nos conecta con una comunidad y un lugar', english: 'The sense of belonging connects us with a community and a place', pronunciation: 'ehl sehn-TEE-doh deh pehr-teh-NEHN-see-ah nohs koh-NEHK-tah kohn OO-nah koh-moo-nee-DAHD ee oon loo-GAHR', category: 'identity-concepts', audio: 'el-sentido-de-pertenencia' },
  { spanish: 'Las raíces culturales nos dan una base sólida desde la cual crecer', english: 'Cultural roots give us a solid foundation from which to grow', pronunciation: 'lahs rrah-EE-sehs kool-too-RAH-lehs nohs dahn OO-nah BAH-seh SOH-lee-dah DEHS-deh lah kwahl kreh-SEHR', category: 'identity-concepts', audio: 'las-raices-culturales' },
  { spanish: 'La nostalgia por la tierra natal es un sentimiento universal del migrante', english: 'Nostalgia for the homeland is a universal feeling of the migrant', pronunciation: 'lah nohs-TAHL-hee-ah pohr lah tee-EH-rrah nah-TAHL ehs oon sehn-tee-mee-EHN-toh oo-nee-behr-SAHL dehl mee-GRAHN-teh', category: 'identity-concepts', audio: 'la-nostalgia-por-la' },
  { spanish: 'El desarraigo es la dolorosa sensación de no pertenecer a ningún lugar', english: 'Uprooting is the painful sensation of not belonging to any place', pronunciation: 'ehl deh-sah-RRAH-ee-goh ehs lah doh-loh-ROH-sah sehn-sah-see-OHN deh noh pehr-teh-neh-SEHR ah neen-GOON loo-GAHR', category: 'identity-concepts', audio: 'el-desarraigo-es-la' },
  { spanish: 'La diáspora conecta a comunidades dispersas por el mundo con su origen común', english: 'The diaspora connects communities scattered around the world with their common origin', pronunciation: 'lah dee-AHS-poh-rah koh-NEHK-tah ah koh-moo-nee-DAH-dehs dees-PEHR-sahs pohr ehl MOON-doh kohn soo oh-REE-hehn koh-MOON', category: 'identity-concepts', audio: 'la-diaspora-conecta' },
  { spanish: 'La aculturación es el proceso de adoptar elementos de una nueva cultura', english: 'Acculturation is the process of adopting elements of a new culture', pronunciation: 'lah ah-kool-too-rah-see-OHN ehs ehl proh-SEH-soh deh ah-dohp-TAHR eh-leh-MEHN-tohs deh OO-nah NWEH-bah kool-TOO-rah', category: 'identity-concepts', audio: 'la-aculturacion-es' },
  { spanish: 'La hibridez cultural crea identidades ricas que combinan múltiples tradiciones', english: 'Cultural hybridity creates rich identities that combine multiple traditions', pronunciation: 'lah ee-bree-DEHS kool-too-RAHL KREH-ah ee-dehn-tee-DAH-dehs RREE-kahs keh kohm-BEE-nahn MOOL-tee-plehs trah-dee-see-OH-nehs', category: 'identity-concepts', audio: 'la-hibridez-cultural' },
  { spanish: 'La transculturación implica un intercambio mutuo entre culturas en contacto', english: 'Transculturation implies a mutual exchange between cultures in contact', pronunciation: 'lah trahns-kool-too-rah-see-OHN eem-PLEE-kah oon een-tehr-KAHM-bee-oh MOO-too-oh EHN-treh kool-TOO-rahs ehn kohn-TAHK-toh', category: 'identity-concepts', audio: 'la-transculturacion-implica' },
  { spanish: 'La identidad no es fija; se transforma con cada experiencia y cada encuentro', english: 'Identity is not fixed; it transforms with each experience and each encounter', pronunciation: 'lah ee-dehn-tee-DAHD noh ehs FEE-hah seh trahns-FOHR-mah kohn KAH-dah ehks-peh-ree-EHN-see-ah ee KAH-dah ehn-KWEHN-troh', category: 'identity-concepts', audio: 'la-identidad-no-es-fija' },
  { spanish: 'El patrimonio cultural inmaterial incluye la lengua, la música y las costumbres', english: 'Intangible cultural heritage includes language, music, and customs', pronunciation: 'ehl pah-tree-MOH-nee-oh kool-too-RAHL een-mah-teh-ree-AHL een-KLOO-yeh lah LEHN-gwah lah MOO-see-kah ee lahs kohs-TOOM-brehs', category: 'identity-concepts', audio: 'el-patrimonio-cultural' },
  { spanish: 'La memoria histórica preserva las lecciones del pasado para las generaciones futuras', english: 'Historical memory preserves the lessons of the past for future generations', pronunciation: 'lah meh-MOH-ree-ah ees-TOH-ree-kah preh-SEHR-bah lahs lehk-see-OH-nehs dehl pah-SAH-doh PAH-rah lahs heh-neh-rah-see-OH-nehs foo-TOO-rahs', category: 'identity-concepts', audio: 'la-memoria-historica' },

  // === Migration Experience (12) ===
  { spanish: 'Emigrar significa dejar tu país; inmigrar significa llegar a uno nuevo', english: 'To emigrate means to leave your country; to immigrate means to arrive in a new one', pronunciation: 'eh-mee-GRAHR seeg-NEE-fee-kah deh-HAHR too pah-EES een-mee-GRAHR seeg-NEE-fee-kah yeh-GAHR ah OO-noh NWEH-boh', category: 'migration-experience', audio: 'emigrar-significa-dejar' },
  { spanish: 'El exilio forzado arranca a las personas de su tierra sin posibilidad de retorno', english: 'Forced exile tears people from their land without the possibility of return', pronunciation: 'ehl ehk-SEE-lee-oh fohr-SAH-doh ah-RRAHN-kah ah lahs pehr-SOH-nahs deh soo tee-EH-rrah seen poh-see-bee-lee-DAHD deh rreh-TOHR-noh', category: 'migration-experience', audio: 'el-exilio-forzado' },
  { spanish: 'La tierra natal vive en el recuerdo como un lugar idealizado por la distancia', english: 'The homeland lives in memory as a place idealized by distance', pronunciation: 'lah tee-EH-rrah nah-TAHL BEE-beh ehn ehl rreh-KWEHR-doh KOH-moh oon loo-GAHR ee-deh-ah-lee-SAH-doh pohr lah dees-TAHN-see-ah', category: 'migration-experience', audio: 'la-tierra-natal-vive' },
  { spanish: 'La morriña o añoranza es el dolor profundo de estar lejos de casa', english: 'Morriña or añoranza is the deep pain of being far from home', pronunciation: 'lah moh-RREE-nyah oh ah-nyoh-RAHN-sah ehs ehl doh-LOHR proh-FOON-doh deh ehs-TAHR LEH-hohs deh KAH-sah', category: 'migration-experience', audio: 'la-morrina-o-anoranza' },
  { spanish: 'Ser documentado o indocumentado define el acceso a derechos fundamentales', english: 'Being documented or undocumented defines access to fundamental rights', pronunciation: 'sehr doh-koo-mehn-TAH-doh oh een-doh-koo-mehn-TAH-doh deh-FEE-neh ehl ahk-SEH-soh ah deh-REH-chohs foon-dah-mehn-TAH-lehs', category: 'migration-experience', audio: 'ser-documentado-o' },
  { spanish: 'La frontera es una línea que divide geografías, familias y destinos', english: 'The border is a line that divides geographies, families, and destinies', pronunciation: 'lah frohn-TEH-rah ehs OO-nah LEE-neh-ah keh dee-BEE-deh heh-oh-grah-FEE-ahs fah-MEE-lee-ahs ee dehs-TEE-nohs', category: 'migration-experience', audio: 'la-frontera-es-una' },
  { spanish: 'El sueño de una vida mejor impulsa a millones a cruzar océanos y desiertos', english: 'The dream of a better life drives millions to cross oceans and deserts', pronunciation: 'ehl SWEH-nyoh deh OO-nah BEE-dah meh-HOHR eem-POOL-sah ah mee-YOH-nehs ah kroo-SAHR oh-SEH-ah-nohs ee deh-see-EHR-tohs', category: 'migration-experience', audio: 'el-sueno-de-una-vida' },
  { spanish: 'Las remesas que envían los migrantes sostienen economías enteras en sus países de origen', english: 'The remittances that migrants send sustain entire economies in their countries of origin', pronunciation: 'lahs rreh-MEH-sahs keh ehn-BEE-ahn lohs mee-GRAHN-tehs sohs-tee-EH-nehn eh-koh-noh-MEE-ahs ehn-TEH-rahs ehn soos pah-EE-sehs deh oh-REE-hehn', category: 'migration-experience', audio: 'las-remesas-que-envian' },
  { spanish: 'La segunda generación vive entre dos mundos: el de sus padres y el del país de acogida', english: 'The second generation lives between two worlds: their parents\' and the host country\'s', pronunciation: 'lah seh-GOON-dah heh-neh-rah-see-OHN BEE-beh EHN-treh dohs MOON-dohs ehl deh soos PAH-drehs ee ehl dehl pah-EES deh ah-KOH-hee-dah', category: 'migration-experience', audio: 'la-segunda-generacion' },
  { spanish: 'El retorno al país de origen a menudo revela que ya no es el lugar que recordábamos', english: 'Returning to the country of origin often reveals it is no longer the place we remembered', pronunciation: 'ehl rreh-TOHR-noh ahl pah-EES deh oh-REE-hehn ah meh-NOO-doh rreh-BEH-lah keh yah noh ehs ehl loo-GAHR keh rreh-kohr-DAH-bah-mohs', category: 'migration-experience', audio: 'el-retorno-al-pais' },
  { spanish: 'La integración no significa renunciar a tu cultura; significa enriquecerla con otra', english: 'Integration doesn\'t mean giving up your culture; it means enriching it with another', pronunciation: 'lah een-teh-grah-see-OHN noh seeg-NEE-fee-kah rreh-noon-see-AHR ah too kool-TOO-rah seeg-NEE-fee-kah ehn-rree-keh-SEHR-lah kohn OH-trah', category: 'migration-experience', audio: 'la-integracion-no-significa' },
  { spanish: 'Cada migrante lleva consigo una historia que merece ser escuchada', english: 'Every migrant carries with them a story that deserves to be heard', pronunciation: 'KAH-dah mee-GRAHN-teh YEH-bah kohn-SEE-goh OO-nah ees-TOH-ree-ah keh meh-REH-seh sehr ehs-koo-CHAH-dah', category: 'migration-experience', audio: 'cada-migrante-lleva' },

  // === Belonging Language (12) ===
  { spanish: 'Me siento de aquí y de allá, con un pie en cada mundo', english: 'I feel from here and from there, with a foot in each world', pronunciation: 'meh see-EHN-toh deh ah-KEE ee deh ah-YAH kohn oon pee-EH ehn KAH-dah MOON-doh', category: 'belonging-language', audio: 'me-siento-de-aqui' },
  { spanish: 'No soy ni de aquí ni de allá; soy de los dos lugares a la vez', english: 'I\'m neither from here nor there; I\'m from both places at once', pronunciation: 'noh soy nee deh ah-KEE nee deh ah-YAH soy deh lohs dohs loo-GAH-rehs ah lah behs', category: 'belonging-language', audio: 'no-soy-ni-de-aqui' },
  { spanish: 'Llevo mi cultura conmigo a donde quiera que vaya', english: 'I carry my culture with me wherever I go', pronunciation: 'YEH-boh mee kool-TOO-rah kohn-MEE-goh ah DOHN-deh kee-EH-rah keh BAH-yah', category: 'belonging-language', audio: 'llevo-mi-cultura' },
  { spanish: 'La lengua es mi patria; donde hablo mi idioma, estoy en casa', english: 'Language is my homeland; wherever I speak my language, I am home', pronunciation: 'lah LEHN-gwah ehs mee PAH-tree-ah DOHN-deh AH-bloh mee ee-dee-OH-mah ehs-TOY ehn KAH-sah', category: 'belonging-language', audio: 'la-lengua-es-mi-patria' },
  { spanish: 'Mi hogar no es un lugar geográfico; es donde están las personas que amo', english: 'My home is not a geographic place; it is where the people I love are', pronunciation: 'mee oh-GAHR noh ehs oon loo-GAHR heh-oh-GRAH-fee-koh ehs DOHN-deh ehs-TAHN lahs pehr-SOH-nahs keh AH-moh', category: 'belonging-language', audio: 'mi-hogar-no-es' },
  { spanish: 'Soy un puente entre dos culturas, y eso me enriquece', english: 'I am a bridge between two cultures, and that enriches me', pronunciation: 'soy oon PWEHN-teh EHN-treh dohs kool-TOO-rahs ee EH-soh meh ehn-rree-KEH-seh', category: 'belonging-language', audio: 'soy-un-puente' },
  { spanish: 'Mi acento cuenta la historia de todos los lugares donde he vivido', english: 'My accent tells the story of all the places where I\'ve lived', pronunciation: 'mee ahk-SEHN-toh KWEHN-tah lah ees-TOH-ree-ah deh TOH-dohs lohs loo-GAH-rehs DOHN-deh eh bee-BEE-doh', category: 'belonging-language', audio: 'mi-acento-cuenta' },
  { spanish: 'Aprendí que pertenecer no es encajar; es ser aceptado siendo diferente', english: 'I learned that belonging is not fitting in; it\'s being accepted while being different', pronunciation: 'ah-prehn-DEE keh pehr-teh-neh-SEHR noh ehs ehn-kah-HAHR ehs sehr ahk-sehp-TAH-doh see-EHN-doh dee-feh-REHN-teh', category: 'belonging-language', audio: 'aprendi-que-pertenecer' },
  { spanish: 'La comida de mi abuela es la forma más pura de nostalgia', english: 'My grandmother\'s food is the purest form of nostalgia', pronunciation: 'lah koh-MEE-dah deh mee ah-BWEH-lah ehs lah FOHR-mah mahs POO-rah deh nohs-TAHL-hee-ah', category: 'belonging-language', audio: 'la-comida-de-mi-abuela' },
  { spanish: 'Cuando escucho una canción de mi tierra, el corazón me lleva de vuelta', english: 'When I hear a song from my homeland, my heart takes me back', pronunciation: 'KWAHN-doh ehs-KOO-choh OO-nah kahn-see-OHN deh mee tee-EH-rrah ehl koh-rah-SOHN meh YEH-bah deh BWEL-tah', category: 'belonging-language', audio: 'cuando-escucho-una-cancion' },
  { spanish: 'Mis hijos hablan dos idiomas y viven dos culturas; son más ricos por ello', english: 'My children speak two languages and live two cultures; they are richer for it', pronunciation: 'mees EE-hohs AH-blahn dohs ee-dee-OH-mahs ee BEE-behn dohs kool-TOO-rahs sohn mahs RREE-kohs pohr EH-yoh', category: 'belonging-language', audio: 'mis-hijos-hablan' },
  { spanish: 'El español me conecta con millones de personas en todo el mundo', english: 'Spanish connects me with millions of people around the world', pronunciation: 'ehl ehs-pah-NYOHL meh koh-NEHK-tah kohn mee-YOH-nehs deh pehr-SOH-nahs ehn TOH-doh ehl MOON-doh', category: 'belonging-language', audio: 'el-espanol-me-conecta' },

  // === Social Justice (12) ===
  { spanish: 'Los derechos humanos son universales, indivisibles e inalienables', english: 'Human rights are universal, indivisible, and inalienable', pronunciation: 'lohs deh-REH-chohs oo-MAH-nohs sohn oo-nee-behr-SAH-lehs een-dee-bee-SEE-blehs eh ee-nah-lee-eh-NAH-blehs', category: 'social-justice', audio: 'los-derechos-humanos-son' },
  { spanish: 'La igualdad no es tratar a todos igual, sino dar a cada uno lo que necesita', english: 'Equality is not treating everyone the same, but giving each person what they need', pronunciation: 'lah ee-gwahl-DAHD noh ehs trah-TAHR ah TOH-dohs ee-GWAHL SEE-noh dahr ah KAH-dah OO-noh loh keh neh-seh-SEE-tah', category: 'social-justice', audio: 'la-igualdad-no-es' },
  { spanish: 'La discriminación niega la dignidad fundamental de todo ser humano', english: 'Discrimination denies the fundamental dignity of every human being', pronunciation: 'lah dees-kree-mee-nah-see-OHN nee-EH-gah lah deeg-nee-DAHD foon-dah-mehn-TAHL deh TOH-doh sehr oo-MAH-noh', category: 'social-justice', audio: 'la-discriminacion-niega' },
  { spanish: 'La xenofobia surge del miedo a lo desconocido y se combate con educación', english: 'Xenophobia arises from fear of the unknown and is combated with education', pronunciation: 'lah seh-noh-FOH-bee-ah SOOR-heh dehl mee-EH-doh ah loh dehs-koh-noh-SEE-doh ee seh kohm-BAH-teh kohn eh-doo-kah-see-OHN', category: 'social-justice', audio: 'la-xenofobia-surge' },
  { spanish: 'La inclusión significa crear espacios donde todas las voces sean escuchadas', english: 'Inclusion means creating spaces where all voices are heard', pronunciation: 'lah een-kloo-see-OHN seeg-NEE-fee-kah kreh-AHR ehs-PAH-see-ohs DOHN-deh TOH-dahs lahs BOH-sehs SEH-ahn ehs-koo-CHAH-dahs', category: 'social-justice', audio: 'la-inclusion-significa' },
  { spanish: 'La justicia migratoria reconoce el derecho de toda persona a una vida digna', english: 'Migration justice recognizes every person\'s right to a dignified life', pronunciation: 'lah hoos-TEE-see-ah mee-grah-TOH-ree-ah rreh-koh-NOH-seh ehl deh-REH-choh deh TOH-dah pehr-SOH-nah ah OO-nah BEE-dah DEEG-nah', category: 'social-justice', audio: 'la-justicia-migratoria' },
  { spanish: 'La ciudadanía no debería determinar el valor de una persona', english: 'Citizenship should not determine a person\'s worth', pronunciation: 'lah see-oo-dah-dah-NEE-ah noh deh-beh-REE-ah deh-tehr-mee-NAHR ehl bah-LOHR deh OO-nah pehr-SOH-nah', category: 'social-justice', audio: 'la-ciudadania-no-deberia' },
  { spanish: 'El racismo estructural perpetúa desigualdades que trascienden generaciones', english: 'Structural racism perpetuates inequalities that transcend generations', pronunciation: 'ehl rrah-SEES-moh ehs-trook-too-RAHL pehr-peh-TOO-ah deh-see-gwahl-DAH-dehs keh trahs-see-EHN-dehn heh-neh-rah-see-OH-nehs', category: 'social-justice', audio: 'el-racismo-estructural' },
  { spanish: 'La diversidad lingüística es un patrimonio de la humanidad que debemos proteger', english: 'Linguistic diversity is a heritage of humanity that we must protect', pronunciation: 'lah dee-behr-see-DAHD leen-GWEES-tee-kah ehs oon pah-tree-MOH-nee-oh deh lah oo-mah-nee-DAHD keh deh-BEH-mohs proh-teh-HEHR', category: 'social-justice', audio: 'la-diversidad-linguistica' },
  { spanish: 'La solidaridad entre pueblos es la base de un mundo más justo', english: 'Solidarity among peoples is the foundation of a more just world', pronunciation: 'lah soh-lee-dah-ree-DAHD EHN-treh PWEH-blohs ehs lah BAH-seh deh oon MOON-doh mahs HOOS-toh', category: 'social-justice', audio: 'la-solidaridad-entre' },
  { spanish: 'Cada persona tiene derecho a mantener su identidad cultural sin discriminación', english: 'Every person has the right to maintain their cultural identity without discrimination', pronunciation: 'KAH-dah pehr-SOH-nah tee-EH-neh deh-REH-choh ah mahn-teh-NEHR soo ee-dehn-tee-DAHD kool-too-RAHL seen dees-kree-mee-nah-see-OHN', category: 'social-justice', audio: 'cada-persona-tiene' },
  { spanish: 'La empatía intercultural es el antídoto contra la intolerancia', english: 'Intercultural empathy is the antidote against intolerance', pronunciation: 'lah ehm-pah-TEE-ah een-tehr-kool-too-RAHL ehs ehl ahn-TEE-doh-toh KOHN-trah lah een-toh-leh-RAHN-see-ah', category: 'social-justice', audio: 'la-empatia-intercultural' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L78PhraseByAudio = phraseByAudio

// === IDENTITY MOSAIC (unique activity) ===

export interface IdentityMosaicChallenge {
  concept: string
  english: string
  correctDescription: string
  options: string[]
}

export const IDENTITY_MOSAIC_CHALLENGES: IdentityMosaicChallenge[] = [
  {
    concept: 'Una familia mexicana en Chicago prepara tamales para Navidad mientras sus hijos cantan villancicos en inglés.',
    english: 'A Mexican family in Chicago prepares tamales for Christmas while their children sing carols in English.',
    correctDescription: 'la hibridez cultural — la familia combina tradiciones de dos culturas en una celebración única',
    options: ['la hibridez cultural — la familia combina tradiciones de dos culturas en una celebración única', 'la aculturación forzada — han perdido su identidad mexicana', 'el desarraigo total — ya no son mexicanos', 'la asimilación completa — abandonaron sus costumbres'],
  },
  {
    concept: 'Un poeta colombiano en el exilio escribe sobre Bogotá con una intensidad que nunca tuvo cuando vivía allí.',
    english: 'A Colombian poet in exile writes about Bogotá with an intensity he never had when he lived there.',
    correctDescription: 'la nostalgia del exilio — la distancia idealiza el recuerdo y potencia la creatividad',
    options: ['la indiferencia cultural — no le importa su país', 'el olvido selectivo — solo recuerda lo bueno', 'la nostalgia del exilio — la distancia idealiza el recuerdo y potencia la creatividad', 'la pérdida de identidad — ya no se siente colombiano'],
  },
  {
    concept: 'Una joven nacida en España de padres marroquíes dice: "No soy ni de aquí ni de allá, pero soy de los dos lugares."',
    english: 'A young woman born in Spain to Moroccan parents says: "I\'m neither from here nor there, but I\'m from both places."',
    correctDescription: 'la identidad transnacional — la segunda generación construye una identidad que trasciende fronteras',
    options: ['la confusión identitaria — no sabe quién es', 'la identidad transnacional — la segunda generación construye una identidad que trasciende fronteras', 'el rechazo cultural — rechaza ambas culturas', 'la crisis existencial — necesita elegir una cultura'],
  },
  {
    concept: 'En una escuela de Los Ángeles, niños de diez países diferentes comparten sus tradiciones culinarias en un festival multicultural.',
    english: 'In a school in Los Angeles, children from ten different countries share their culinary traditions at a multicultural festival.',
    correctDescription: 'la inclusión cultural — se crea un espacio donde todas las identidades son celebradas y respetadas',
    options: ['la competencia cultural — cada cultura intenta ser "la mejor"', 'la inclusión cultural — se crea un espacio donde todas las identidades son celebradas y respetadas', 'la asimilación — todos adoptan la cultura estadounidense', 'el folclor superficial — solo se muestra lo exótico'],
  },
  {
    concept: 'Una abuela guatemalteca le enseña su lengua indígena a sus nietos nacidos en Estados Unidos, sabiendo que es de las últimas hablantes.',
    english: 'A Guatemalan grandmother teaches her indigenous language to her US-born grandchildren, knowing she is one of the last speakers.',
    correctDescription: 'la preservación del patrimonio lingüístico — transmitir una lengua en peligro es un acto de resistencia cultural',
    options: ['un esfuerzo inútil — los niños hablarán inglés de todas formas', 'la preservación del patrimonio lingüístico — transmitir una lengua en peligro es un acto de resistencia cultural', 'la imposición cultural — obliga a los niños a aprender algo innecesario', 'la nostalgia improductiva — vive en el pasado'],
  },
  {
    concept: 'Un grupo de migrantes centroamericanos crea una asociación comunitaria en su ciudad de acogida para apoyarse mutuamente.',
    english: 'A group of Central American migrants creates a community association in their host city to support each other.',
    correctDescription: 'la solidaridad de la diáspora — las comunidades migrantes recrean redes de apoyo lejos de casa',
    options: ['el aislamiento cultural — no quieren integrarse', 'la solidaridad de la diáspora — las comunidades migrantes recrean redes de apoyo lejos de casa', 'la dependencia comunitaria — no pueden funcionar solos', 'el separatismo cultural — rechazan la cultura de acogida'],
  },
  {
    concept: 'Una activista mexicoamericana dice: "Mi acento no es un defecto; es la prueba de que hablo dos idiomas y vivo dos mundos."',
    english: 'A Mexican-American activist says: "My accent is not a defect; it is proof that I speak two languages and live two worlds."',
    correctDescription: 'el orgullo de la identidad bilingüe — el acento como símbolo de riqueza cultural, no de deficiencia',
    options: ['la vergüenza lingüística — debería eliminar su acento', 'la rebeldía cultural — desafía las normas por provocar', 'el orgullo de la identidad bilingüe — el acento como símbolo de riqueza cultural, no de deficiencia', 'la resistencia a la integración — se niega a hablar bien inglés'],
  },
]

// === LESSON DATA ===

export const L78Data: LessonData = {
  id: 'L7.8',
  hero: {
    lessonId: 'L7.8',
    title: 'Cultural Identity & Migration',
    subtitle: 'The language of roots, journeys, and belonging',
    description: 'Explore the vocabulary of cultural identity, the migrant experience, the language of belonging, and social justice. From diaspora to hybridity, from borders to bridges, learn to discuss the most human of themes in Spanish.',
    image: '/images/L7.8/L7.8.jpg',
    gradient: 'from-rose-800/65 via-pink-700/55 to-red-700/65',
    accentColor: 'rose-200',
  },

  objectives: [
    { icon: '🌱', title: 'Identity Concepts', desc: 'Discuss cultural identity, roots, belonging, diaspora, acculturation, and hybridity.' },
    { icon: '✈️', title: 'Migration Experience', desc: 'Express the migrant journey: emigration, exile, nostalgia, borders, and the dream of a better life.' },
    { icon: '🏠', title: 'Belonging Language', desc: 'Articulate what home means: "neither from here nor there," language as homeland, bicultural identity.' },
    { icon: '⚖️', title: 'Social Justice', desc: 'Advocate for human rights, equality, inclusion, and justice in the context of migration and identity.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.8', label: 'Cultural Fluency', detail: 'L5.8 developed cultural sensitivity and nuanced expression. Now apply that fluency to the deepest questions of identity.' },
    { fromLesson: 'L6.5', label: 'Translation & Interpretation', detail: 'L6.5 explored intercultural mediation. Now use those skills to bridge cultures and advocate for understanding.' },
    { fromLesson: 'L6.7', label: 'History of Spanish', detail: 'L6.7 traced the evolution of Spanish across continents. Now understand how language shapes cultural identity.' },
  ],

  sectionTransitions: [
    { afterSection: 'identity-concepts', text: 'You understand identity! Now let\'s explore the migrant experience — the journey, the loss, and the hope.' },
    { afterSection: 'migration-experience', text: 'You\'ve walked in the migrant\'s shoes! Let\'s learn how people express belonging and home.' },
    { afterSection: 'belonging-language', text: 'You speak the language of belonging! Now let\'s discuss the social justice dimensions.' },
    { afterSection: 'dialogues', text: 'Powerful conversations explored! Let\'s discover how identity and migration shape cultures worldwide.' },
    { afterSection: 'cultural', text: 'Cultural perspectives understood! Now test your knowledge in the Identity Mosaic.' },
    { afterSection: 'identity-mosaic', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La identidad cultural se construye...', english: 'Cultural identity is built...' },
    { spanish: 'La nostalgia por la tierra natal...', english: 'Nostalgia for the homeland...' },
    { spanish: 'No soy ni de aquí ni de allá...', english: 'I\'m neither from here nor there...' },
    { spanish: 'La lengua es mi patria...', english: 'Language is my homeland...' },
    { spanish: 'Los derechos humanos son...', english: 'Human rights are...' },
    { spanish: 'La inclusión significa...', english: 'Inclusion means...' },
  ],

  pronunciationChallenges: [
    { spanish: 'No soy ni de aquí ni de allá; soy de los dos lugares a la vez', pronunciation: 'noh soy nee deh ah-KEE nee deh ah-YAH soy deh lohs dohs loo-GAH-rehs ah lah behs', english: 'I\'m neither from here nor there; I\'m from both places at once', audio: 'no-soy-ni-de-aqui-ni-de-alla-soy-de-los-dos-lugares-a-la-vez', tip: 'This phrase captures the bicultural experience perfectly. The repetition of "ni...ni" (neither...nor) creates a rhythm of negation, but the second part — "soy de los dos" — transforms it into affirmation.' },
    { spanish: 'La lengua es mi patria; donde hablo mi idioma, estoy en casa', pronunciation: 'lah LEHN-gwah ehs mee PAH-tree-ah DOHN-deh AH-bloh mee ee-dee-OH-mah ehs-TOY ehn KAH-sah', english: 'Language is my homeland; wherever I speak my language, I am home', audio: 'la-lengua-es-mi-patria-donde-hablo-mi-idioma-estoy-en-casa', tip: 'This powerful metaphor equates language with homeland. "Patria" (homeland) has deep emotional weight in Spanish — it evokes patriotism, belonging, and roots. Deliver it with gravitas.' },
    { spanish: 'La morriña o añoranza es el dolor profundo de estar lejos de casa', pronunciation: 'lah moh-RREE-nyah oh ah-nyoh-RAHN-sah ehs ehl doh-LOHR proh-FOON-doh deh ehs-TAHR LEH-hohs deh KAH-sah', english: 'Morriña or añoranza is the deep pain of being far from home', audio: 'la-morrina-o-anoranza-es-el-dolor-profundo-de-estar-lejos-de-casa', tip: '"Morriña" is Galician in origin — a word so specific to homesickness that it has no exact English translation. "Añoranza" is the Castilian equivalent. Both carry the weight of longing that only a migrant truly understands.' },
    { spanish: 'El desarraigo es la dolorosa sensación de no pertenecer a ningún lugar', pronunciation: 'ehl deh-sah-RRAH-ee-goh ehs lah doh-loh-ROH-sah sehn-sah-see-OHN deh noh pehr-teh-neh-SEHR ah neen-GOON loo-GAHR', english: 'Uprooting is the painful sensation of not belonging to any place', audio: 'el-desarraigo-es-la-dolorosa-sensacion-de-no-pertenecer-a-ningun-lugar', tip: '"Desarraigo" literally means "uprooting" — des (un-) + arraigo (rootedness). The word itself contains the metaphor: roots torn from the earth. Spanish excels at these compact, metaphorical nouns.' },
    { spanish: 'La hibridez cultural crea identidades ricas que combinan múltiples tradiciones', pronunciation: 'lah ee-bree-DEHS kool-too-RAHL KREH-ah ee-dehn-tee-DAH-dehs RREE-kahs keh kohm-BEE-nahn MOOL-tee-plehs trah-dee-see-OH-nehs', english: 'Cultural hybridity creates rich identities that combine multiple traditions', audio: 'la-hibridez-cultural-crea-identidades-ricas-que-combinan-multiples-tradiciones', tip: '"Hibridez" comes from "híbrido" (hybrid). Modern identity studies celebrate hybridity as a strength, not a weakness. The word should sound affirmative, not apologetic.' },
    { spanish: 'Cada migrante lleva consigo una historia que merece ser escuchada', pronunciation: 'KAH-dah mee-GRAHN-teh YEH-bah kohn-SEE-goh OO-nah ees-TOH-ree-ah keh meh-REH-seh sehr ehs-koo-CHAH-dah', english: 'Every migrant carries with them a story that deserves to be heard', audio: 'cada-migrante-lleva-consigo-una-historia-que-merece-ser-escuchada', tip: 'This phrase is a declaration of dignity. "Merece ser escuchada" (deserves to be heard) uses the passive voice to emphasize that the responsibility lies with the listener, not the storyteller.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'identity-concepts', label: 'Identity Concepts' },
    { id: 'migration-experience', label: 'Migration Experience' },
    { id: 'belonging-language', label: 'Belonging Language' },
    { id: 'social-justice', label: 'Social Justice' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'identity-sorting', label: 'Identity Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'identity-mosaic', label: 'Identity Mosaic' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'identity-concepts',
      title: 'Identity Concepts — Conceptos de Identidad',
      description: 'The vocabulary of who we are: roots, belonging, memory, and the ever-evolving self.',
      tabs: [
        { label: 'Roots & Belonging', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'identity-concepts').slice(0, 6) },
        { label: 'Culture & Memory', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'identity-concepts').slice(6) },
      ],
    },
    {
      id: 'migration-experience',
      title: 'Migration Experience — La Experiencia Migratoria',
      description: 'The journey, the loss, the hope, and the courage of leaving everything behind.',
      tabs: [
        { label: 'The Journey', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'migration-experience').slice(0, 6) },
        { label: 'New Beginnings', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'migration-experience').slice(6) },
      ],
    },
    {
      id: 'belonging-language',
      title: 'Belonging Language — El Lenguaje de la Pertenencia',
      description: 'How people express home, identity, and the space between two worlds.',
      tabs: [
        { label: 'Between Worlds', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'belonging-language').slice(0, 6) },
        { label: 'Home & Heritage', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'belonging-language').slice(6) },
      ],
    },
    {
      id: 'social-justice',
      title: 'Social Justice — Justicia Social',
      description: 'Rights, equality, inclusion, and the fight for dignity in the context of migration.',
      tabs: [
        { label: 'Rights & Equality', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'social-justice').slice(0, 6) },
        { label: 'Solidarity & Action', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'social-justice').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Words Without Translation',
      content: 'Some Spanish words related to identity and migration have no exact English equivalent. "Morriña" (Galician homesickness), "desarraigo" (the state of being uprooted), "añoranza" (deep longing), "querencia" (the place where one feels safe) — these words carry entire emotional worlds. Learning them is not just vocabulary; it\'s gaining access to experiences that English cannot name.',
      example: 'Morriña (homesickness) | Desarraigo (uprootedness) | Querencia (safe place) | Terruño (native soil)',
    },
    {
      title: 'The Political Weight of "Migrante" vs. "Inmigrante"',
      content: 'In Spanish, word choice carries political weight. "Migrante" (migrant) is neutral and emphasizes the person. "Inmigrante" (immigrant) emphasizes arrival. "Refugiado" (refugee) has legal implications. "Indocumentado" (undocumented) is preferred over "ilegal" (illegal), which dehumanizes. How we name people shapes how we treat them.',
      example: 'migrante (neutral) | inmigrante (arrival focus) | refugiado (legal status) | indocumentado (preferred over "ilegal")',
      reviewFrom: 'L5.8',
    },
    {
      title: 'Expressing Duality: "Ni...Ni" and "Tanto...Como"',
      content: 'Bilingual and bicultural identity often uses dual structures: "Ni de aquí ni de allá" (neither from here nor there), "tanto mexicano como americano" (both Mexican and American). These structures capture the lived reality of millions who exist between cultures. The key is that these are not contradictions — they are expansions of identity.',
      example: 'Ni...ni (neither...nor) → expansion | Tanto...como (both...and) → inclusion',
      reviewFrom: 'L6.5',
    },
    {
      title: 'The Subjunctive of Hope',
      content: 'Migration discourse uses the subjunctive extensively to express hope and desire: "Espero que mis hijos tengan un futuro mejor" (I hope my children have a better future), "Ojalá que algún día podamos volver" (I hope that someday we can return). The subjunctive is the grammar of dreams, and migration is fundamentally about dreams.',
      example: 'Espero que tengan... | Ojalá que podamos... | Sueño con que haya... | Quiero que vivan...',
    },
  ],

  flashcardGroups: [
    {
      key: 'identity',
      label: 'Identity Concepts',
      audioKeys: ['la-identidad-cultural-se', 'el-sentido-de-pertenencia', 'las-raices-culturales', 'la-nostalgia-por-la', 'el-desarraigo-es-la', 'la-diaspora-conecta', 'la-hibridez-cultural', 'la-identidad-no-es-fija'],
    },
    {
      key: 'migration',
      label: 'Migration Experience',
      audioKeys: ['emigrar-significa-dejar', 'el-exilio-forzado', 'la-morrina-o-anoranza', 'la-frontera-es-una', 'el-sueno-de-una-vida', 'la-segunda-generacion', 'la-integracion-no-significa', 'cada-migrante-lleva'],
    },
    {
      key: 'belonging',
      label: 'Belonging & Justice',
      audioKeys: ['me-siento-de-aqui', 'no-soy-ni-de-aqui', 'la-lengua-es-mi-patria', 'soy-un-puente', 'los-derechos-humanos-son', 'la-inclusion-significa', 'la-diversidad-linguistica', 'la-empatia-intercultural'],
    },
  ],

  matchPairs: [
    { left: 'El desarraigo', right: 'Not belonging anywhere' },
    { left: 'La diáspora', right: 'Communities scattered worldwide' },
    { left: 'La aculturación', right: 'Adopting a new culture\'s elements' },
    { left: 'La hibridez cultural', right: 'Blending multiple traditions' },
    { left: 'La morriña', right: 'Deep homesickness' },
    { left: 'La xenofobia', right: 'Fear of foreigners' },
    { left: 'La inclusión', right: 'All voices heard and valued' },
    { left: 'Las remesas', right: 'Money sent to home country' },
  ],
  matchLabels: { left: 'Concepto', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Personal or Structural?',
      instruction: 'Is this concept primarily about personal experience or systemic/structural issues?',
      buckets: ['Personal Experience 💭', 'Structural Issue 🏛️'],
      items: [
        { text: 'La morriña / añoranza', bucket: 'Personal Experience 💭' },
        { text: 'El sentido de pertenencia', bucket: 'Personal Experience 💭' },
        { text: 'La nostalgia por la tierra natal', bucket: 'Personal Experience 💭' },
        { text: 'La hibridez cultural', bucket: 'Personal Experience 💭' },
        { text: 'El racismo estructural', bucket: 'Structural Issue 🏛️' },
        { text: 'La discriminación', bucket: 'Structural Issue 🏛️' },
        { text: 'La justicia migratoria', bucket: 'Structural Issue 🏛️' },
        { text: 'Los derechos humanos', bucket: 'Structural Issue 🏛️' },
      ],
    },
    {
      title: 'Emigrar or Inmigrar?',
      instruction: 'Does this relate to LEAVING (emigrar) or ARRIVING (inmigrar)?',
      buckets: ['Leaving / Emigrar 🛫', 'Arriving / Inmigrar 🛬'],
      items: [
        { text: 'El exilio forzado', bucket: 'Leaving / Emigrar 🛫' },
        { text: 'El desarraigo', bucket: 'Leaving / Emigrar 🛫' },
        { text: 'La morriña', bucket: 'Leaving / Emigrar 🛫' },
        { text: 'Dejar la tierra natal', bucket: 'Leaving / Emigrar 🛫' },
        { text: 'La integración', bucket: 'Arriving / Inmigrar 🛬' },
        { text: 'La aculturación', bucket: 'Arriving / Inmigrar 🛬' },
        { text: 'El país de acogida', bucket: 'Arriving / Inmigrar 🛬' },
        { text: 'La segunda generación', bucket: 'Arriving / Inmigrar 🛬' },
      ],
    },
  ],
  sortSectionId: 'identity-sorting',
  sortTitle: 'Identity Sorting',

  dialogues: [
    {
      id: 'dialogue-support-la',
      title: 'Immigration Support Group — Los Angeles',
      location: 'Los Angeles',
      lines: [
        { speaker: 'Facilitador', text: 'Bienvenidos al grupo de apoyo para migrantes hispanos. Hoy hablaremos sobre identidad y pertenencia. ¿Quién quiere comenzar?', audio: '/audio/L7.8/phrases/d1-line1.mp3' },
        { speaker: 'Rosa', text: 'Yo llegué de Guatemala hace quince años. Mis hijos nacieron aquí, pero me preocupa que pierdan nuestra lengua y nuestras tradiciones.', audio: '/audio/L7.8/phrases/d1-line2.mp3' },
        { speaker: 'Facilitador', text: '¿Cómo manejas esa tensión entre dos culturas, Rosa?', audio: '/audio/L7.8/phrases/d1-line3.mp3' },
        { speaker: 'Rosa', text: 'Les enseño español en casa y cocinamos comida guatemalteca juntos. La comida de mi abuela es la forma más pura de nostalgia para mí.', audio: '/audio/L7.8/phrases/d1-line4.mp3', annotations: [{ phrase: 'La comida de mi abuela es la forma más pura de nostalgia', fromLesson: 'L7.8', note: 'Food as cultural memory: a universal migrant experience' }] },
        { speaker: 'Javier', text: 'Yo soy de El Salvador. Llevo diez años aquí y todavía siento el desarraigo — esa sensación de no pertenecer a ningún lugar completamente.', audio: '/audio/L7.8/phrases/d1-line5.mp3' },
        { speaker: 'Facilitador', text: 'El desarraigo es común entre migrantes. Pero recuerda: la integración no significa renunciar a tu cultura; significa enriquecerla con otra.', audio: '/audio/L7.8/phrases/d1-line6.mp3' },
        { speaker: 'María Elena', text: 'Yo digo que no soy ni de aquí ni de allá, pero soy de los dos lugares a la vez. Mi acento cuenta la historia de todos los lugares donde he vivido.', audio: '/audio/L7.8/phrases/d1-line7.mp3' },
        { speaker: 'Rosa', text: 'Eso es hermoso, María Elena. Mis hijos hablan dos idiomas y viven dos culturas. Son más ricos por ello, aunque a veces sea difícil.', audio: '/audio/L7.8/phrases/d1-line8.mp3' },
        { speaker: 'Javier', text: 'Lo que más me duele es que cuando vuelvo a El Salvador, ya no es el lugar que recordaba. El retorno revela que todo ha cambiado — incluso yo.', audio: '/audio/L7.8/phrases/d1-line9.mp3' },
        { speaker: 'Facilitador', text: 'Ese es uno de los descubrimientos más difíciles de la migración. La tierra natal vive en el recuerdo como un lugar idealizado por la distancia.', audio: '/audio/L7.8/phrases/d1-line10.mp3' },
        { speaker: 'María Elena', text: 'Yo aprendí que pertenecer no es encajar; es ser aceptado siendo diferente. Llevo mi cultura conmigo a donde quiera que vaya.', audio: '/audio/L7.8/phrases/d1-line11.mp3' },
        { speaker: 'Facilitador', text: 'Exactamente. La lengua es nuestra patria portátil. Donde hablamos nuestro idioma, estamos en casa.', audio: '/audio/L7.8/phrases/d1-line12.mp3' },
        { speaker: 'Rosa', text: 'Y cada migrante lleva consigo una historia que merece ser escuchada. Nuestras historias son valiosas.', audio: '/audio/L7.8/phrases/d1-line13.mp3' },
        { speaker: 'Javier', text: 'Soy un puente entre dos culturas, y eso me enriquece. Ya no lo veo como una debilidad, sino como una fortaleza.', audio: '/audio/L7.8/phrases/d1-line14.mp3' },
        { speaker: 'Facilitador', text: 'Hermosas palabras. Recuerden: la hibridez cultural crea identidades ricas. No tienen que elegir; pueden ser ambas cosas a la vez.', audio: '/audio/L7.8/phrases/d1-line15.mp3' },
        { speaker: 'María Elena', text: 'Cuando escucho una canción de mi tierra, el corazón me lleva de vuelta. Pero mi hogar ahora es aquí, con esta comunidad.', audio: '/audio/L7.8/phrases/d1-line16.mp3' },
      ],
    },
    {
      id: 'dialogue-panel-madrid',
      title: 'Cultural Identity Panel — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Moderadora', text: 'Bienvenidos a esta mesa redonda sobre identidad cultural en el siglo XXI. Nuestros panelistas representan experiencias diversas de migración e identidad.', audio: '/audio/L7.8/phrases/d2-line1.mp3' },
        { speaker: 'Dr. Okafor', text: 'Soy nigeriano de nacimiento, español de adopción. Llevo veinte años en Madrid y aún me preguntan: "¿Pero de dónde eres de verdad?"', audio: '/audio/L7.8/phrases/d2-line2.mp3' },
        { speaker: 'Moderadora', text: 'Esa pregunta revela mucho sobre cómo la sociedad define la pertenencia. ¿Qué les dice eso?', audio: '/audio/L7.8/phrases/d2-line3.mp3' },
        { speaker: 'Prof. García', text: 'Que la identidad cultural se construye a través de la experiencia vivida, no del pasaporte. Pero el racismo estructural perpetúa la idea de que algunos "pertenecen" más que otros.', audio: '/audio/L7.8/phrases/d2-line4.mp3', annotations: [{ phrase: 'la identidad cultural se construye a través de la experiencia vivida', fromLesson: 'L7.8', note: 'Key insight: identity is constructed through lived experience, not documentation' }] },
        { speaker: 'Dra. Mendoza', text: 'Como mexicana en España, descubrí que la discriminación puede venir de lugares inesperados. Incluso entre hispanohablantes, hay jerarquías lingüísticas.', audio: '/audio/L7.8/phrases/d2-line5.mp3' },
        { speaker: 'Dr. Okafor', text: 'Exacto. La xenofobia no siempre es evidente. A veces es sutil: una mirada, un tono, una suposición de que no perteneces.', audio: '/audio/L7.8/phrases/d2-line6.mp3' },
        { speaker: 'Prof. García', text: 'Por eso la inclusión significa crear espacios donde todas las voces sean escuchadas, no solo las dominantes.', audio: '/audio/L7.8/phrases/d2-line7.mp3' },
        { speaker: 'Moderadora', text: '¿Cómo ven el papel de la lengua en la identidad cultural?', audio: '/audio/L7.8/phrases/d2-line8.mp3' },
        { speaker: 'Dra. Mendoza', text: 'La diversidad lingüística es un patrimonio de la humanidad. Cada lengua que muere lleva consigo una forma única de ver el mundo.', audio: '/audio/L7.8/phrases/d2-line9.mp3' },
        { speaker: 'Dr. Okafor', text: 'El español me conecta con millones de personas en todo el mundo, pero mi lengua igbo me conecta con mi historia familiar. Necesito las dos.', audio: '/audio/L7.8/phrases/d2-line10.mp3' },
        { speaker: 'Prof. García', text: 'La identidad no es fija; se transforma con cada experiencia y cada encuentro. Somos procesos, no productos terminados.', audio: '/audio/L7.8/phrases/d2-line11.mp3' },
        { speaker: 'Dra. Mendoza', text: 'La igualdad no es tratar a todos igual, sino dar a cada uno lo que necesita. Eso es equidad, no uniformidad.', audio: '/audio/L7.8/phrases/d2-line12.mp3' },
        { speaker: 'Moderadora', text: '¿Qué mensaje les darían a quienes viven entre dos culturas?', audio: '/audio/L7.8/phrases/d2-line13.mp3' },
        { speaker: 'Dr. Okafor', text: 'Que la solidaridad entre pueblos es la base de un mundo más justo. No estamos solos en esto.', audio: '/audio/L7.8/phrases/d2-line14.mp3' },
        { speaker: 'Dra. Mendoza', text: 'Que cada persona tiene derecho a mantener su identidad cultural sin discriminación. La empatía intercultural es el antídoto contra la intolerancia.', audio: '/audio/L7.8/phrases/d2-line15.mp3' },
        { speaker: 'Prof. García', text: 'Y que la memoria histórica preserva las lecciones del pasado para las generaciones futuras. Sin memoria, repetimos los errores.', audio: '/audio/L7.8/phrases/d2-line16.mp3' },
        { speaker: 'Moderadora', text: 'Gracias a nuestros panelistas. Recordemos: la identidad cultural es un derecho, no un privilegio. Construyamos juntos un mundo más inclusivo.', audio: '/audio/L7.8/phrases/d2-line17.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Share stories of migration, belonging, and cultural preservation in an immigrant support group in Los Angeles, then participate in a panel discussion about cultural identity and social justice in Madrid.',

  culturalNotes: [
    {
      title: 'La Experiencia Latina en Estados Unidos',
      content: 'With over 60 million Hispanics/Latinos, the US has the second-largest Spanish-speaking population in the world after Mexico. The Latino experience encompasses enormous diversity: Mexican-Americans in the Southwest, Puerto Ricans in New York, Cubans in Miami, Central Americans in Los Angeles, and many more. Terms like "Hispanic," "Latino," "Latinx," and "Latine" reflect ongoing debates about identity and naming. The phrase "Ni de aquí ni de allá" has become an anthem for millions who live between two cultures, two languages, and two worlds.',
    },
    {
      title: 'El Exilio Político en la Historia Hispana',
      content: 'Political exile has profoundly shaped Spanish-language culture. The Spanish Civil War (1936-39) sent hundreds of thousands into exile — many to Mexico, which welcomed them openly. Argentine and Chilean dictatorships in the 1970s created massive diasporas in Europe. Cuban exile post-1959 shaped Miami\'s identity. These exiles brought their culture, literature, and art with them, enriching their host countries while keeping their homelands alive in memory. Writers like the exiled poet Rafael Alberti and novelist Roberto Bolaño turned exile into powerful literature.',
    },
    {
      title: 'Mestizaje y Identidad en América Latina',
      content: 'The concept of "mestizaje" (racial and cultural mixing) is central to Latin American identity. Unlike the US model of distinct racial categories, many Latin American countries celebrate mestizaje as foundational to national identity — though this narrative has also been used to erase Indigenous and Afro-descendant identities. Modern movements challenge simplified mestizaje, advocating for recognition of distinct cultural contributions. The philosopher José Vasconcelos called Latin Americans "la raza cósmica" (the cosmic race) — a blend of all cultures creating something new.',
    },
  ],
  culturalGradient: 'from-rose-50 to-pink-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El desarraigo" means:', options: ['Integration', 'The state of being uprooted', 'Nostalgia', 'Immigration'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La ___ es mi patria; donde hablo mi idioma, estoy en casa" (language)', answer: 'lengua' },
    { id: 3, type: 'tf', text: '"La aculturación" means completely abandoning your original culture.', answer: false },
    { id: 4, type: 'mc', text: '"La morriña" is a Galician word for:', options: ['Happiness', 'Deep homesickness', 'Anger', 'Excitement'], answer: 1 },
    { id: 5, type: 'mc', text: '"Emigrar" means:', options: ['To arrive in a new country', 'To leave your country', 'To return home', 'To travel for vacation'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "No soy ni de ___ ni de allá" (here)', answer: 'aquí' },
    { id: 7, type: 'mc', text: '"La hibridez cultural" creates identities that are:', options: ['Confused and lost', 'Rich combinations of multiple traditions', 'Purely from one culture', 'Temporary'], answer: 1 },
    { id: 8, type: 'tf', text: '"Las remesas" are money that migrants send back to their home countries.', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, what does Javier discover when he returns to El Salvador?', options: ['Everything is the same', 'It is no longer the place he remembered', 'He wants to stay', 'His family moved away'], answer: 1 },
    { id: 10, type: 'mc', text: '"La inclusión" means:', options: ['Everyone must be the same', 'All voices are heard and valued', 'Only some people are welcome', 'People should assimilate completely'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ surge del miedo a lo desconocido" (xenophobia)', answer: 'xenofobia' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, Dr. Okafor says the question "¿De dónde eres de verdad?" reveals:', options: ['Genuine curiosity', 'How society defines belonging', 'Good manners', 'Interest in geography'], answer: 1 },
    { id: 13, type: 'tf', text: '"La identidad no es fija" means identity is constantly evolving and changing.', answer: true },
    { id: 14, type: 'mc', text: '"La diáspora" refers to:', options: ['A single immigrant', 'Communities scattered around the world', 'A government policy', 'A type of food'], answer: 1 },
    { id: 15, type: 'mc', text: 'The phrase "Soy un puente entre dos culturas" expresses:', options: ['Confusion', 'Bicultural identity as strength', 'Rejection of both cultures', 'A desire to choose one culture'], answer: 1 },
  ],

  audioBase: '/audio/L7.8/phrases',

  uniqueActivity: {
    id: 'IdentityMosaicL78',
    sectionId: 'identity-mosaic',
    sectionColor: 'bg-rose-50/40',
    sectionBorder: 'border-rose-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'identity-concepts': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'migration-experience': { bg: 'bg-red-50/30', border: 'border-red-100' },
    'belonging-language': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    'social-justice': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'matching-game': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    'identity-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'identity-mosaic': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
