import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Religious Terminology (12) ===
  { spanish: 'La fe es la creencia profunda en algo que no se puede ver ni demostrar con evidencia material', english: 'Faith is the deep belief in something that cannot be seen or demonstrated with material evidence', pronunciation: 'lah feh ehs lah kreh-EHN-see-ah proh-FOON-dah ehn AHL-goh keh noh seh PWEH-deh behr nee deh-mohs-TRAHR kohn eh-bee-DEHN-see-ah mah-teh-ree-AHL', category: 'religious-terminology', audio: 'la-fe' },
  { spanish: 'La oración es un acto de comunicación personal con lo divino que puede ser silenciosa o comunitaria', english: 'Prayer is an act of personal communication with the divine that can be silent or communal', pronunciation: 'lah oh-rah-see-OHN ehs oon AHK-toh deh koh-moo-nee-kah-see-OHN pehr-soh-NAHL kohn loh dee-BEE-noh keh PWEH-deh sehr see-lehn-see-OH-sah oh koh-moo-nee-TAH-ree-ah', category: 'religious-terminology', audio: 'la-oracion' },
  { spanish: 'El sacramento es un ritual sagrado que simboliza la gracia divina según la tradición cristiana', english: 'A sacrament is a sacred ritual that symbolizes divine grace according to Christian tradition', pronunciation: 'ehl sah-krah-MEHN-toh ehs oon ree-too-AHL sah-GRAH-doh keh seem-boh-LEE-sah lah GRAH-see-ah dee-BEE-nah seh-GOON lah trah-dee-see-OHN krees-tee-AH-nah', category: 'religious-terminology', audio: 'el-sacramento' },
  { spanish: 'La homilía es el sermón que el sacerdote pronuncia durante la misa para interpretar las escrituras', english: 'The homily is the sermon the priest delivers during mass to interpret the scriptures', pronunciation: 'lah oh-mee-LEE-ah ehs ehl sehr-MOHN keh ehl sah-sehr-DOH-teh proh-NOON-see-ah doo-RAHN-teh lah MEE-sah PAH-rah een-tehr-preh-TAHR lahs ehs-kree-TOO-rahs', category: 'religious-terminology', audio: 'la-homilia' },
  { spanish: 'El pecado representa la transgresión de las normas morales establecidas por la doctrina religiosa', english: 'Sin represents the transgression of moral norms established by religious doctrine', pronunciation: 'ehl peh-KAH-doh rreh-preh-SEHN-tah lah trahns-greh-see-OHN deh lahs NOHR-mahs moh-RAH-lehs ehs-tah-bleh-SEE-dahs pohr lah dohk-TREE-nah rreh-lee-hee-OH-sah', category: 'religious-terminology', audio: 'el-pecado' },
  { spanish: 'La redención es el acto de ser salvado del pecado a través del sacrificio y la misericordia divina', english: 'Redemption is the act of being saved from sin through sacrifice and divine mercy', pronunciation: 'lah rreh-dehn-see-OHN ehs ehl AHK-toh deh sehr sahl-BAH-doh dehl peh-KAH-doh ah trah-BEHS dehl sah-kree-FEE-see-oh ee lah mee-seh-ree-KOHR-dee-ah dee-BEE-nah', category: 'religious-terminology', audio: 'la-redencion' },
  { spanish: 'La gracia divina es el favor inmerecido que Dios otorga a los creyentes según la teología cristiana', english: 'Divine grace is the undeserved favor God grants to believers according to Christian theology', pronunciation: 'lah GRAH-see-ah dee-BEE-nah ehs ehl fah-BOHR een-meh-reh-SEE-doh keh dee-OHS oh-TOHR-gah ah lohs kreh-YEHN-tehs seh-GOON lah teh-oh-loh-HEE-ah krees-tee-AH-nah', category: 'religious-terminology', audio: 'la-gracia-divina' },
  { spanish: 'La resurrección es la creencia en que los muertos volverán a la vida en el fin de los tiempos', english: 'Resurrection is the belief that the dead will return to life at the end of times', pronunciation: 'lah rreh-soo-rrehk-see-OHN ehs lah kreh-EHN-see-ah ehn keh lohs MWEHR-tohs bohl-beh-RAHN ah lah BEE-dah ehn ehl feen deh lohs tee-EHM-pohs', category: 'religious-terminology', audio: 'la-resurreccion' },
  { spanish: 'El bautismo marca la entrada del creyente en la comunidad de fe a través del agua bendita', english: 'Baptism marks the believer\'s entrance into the community of faith through holy water', pronunciation: 'ehl bow-TEES-moh MAHR-kah lah ehn-TRAH-dah dehl kreh-YEHN-teh ehn lah koh-moo-nee-DAHD deh feh ah trah-BEHS dehl AH-gwah behn-DEE-tah', category: 'religious-terminology', audio: 'el-bautismo' },
  { spanish: 'La confesión permite al creyente reconocer sus pecados y recibir el perdón a través del sacerdote', english: 'Confession allows the believer to acknowledge their sins and receive forgiveness through the priest', pronunciation: 'lah kohn-feh-see-OHN pehr-MEE-teh ahl kreh-YEHN-teh rreh-koh-noh-SEHR soos peh-KAH-dohs ee rreh-see-BEER ehl pehr-DOHN ah trah-BEHS dehl sah-sehr-DOH-teh', category: 'religious-terminology', audio: 'la-confesion' },
  { spanish: 'El profeta transmite un mensaje divino a la humanidad según las tradiciones abrahámicas', english: 'The prophet transmits a divine message to humanity according to Abrahamic traditions', pronunciation: 'ehl proh-FEH-tah trahns-MEE-teh oon mehn-SAH-heh dee-BEE-noh ah lah oo-mah-nee-DAHD seh-GOON lahs trah-dee-see-OH-nehs ah-brah-AH-mee-kahs', category: 'religious-terminology', audio: 'el-profeta' },
  { spanish: 'El alma es la esencia espiritual e inmortal del ser humano según muchas tradiciones religiosas', english: 'The soul is the spiritual and immortal essence of the human being according to many religious traditions', pronunciation: 'ehl AHL-mah ehs lah eh-SEHN-see-ah ehs-pee-ree-too-AHL eh een-mohr-TAHL dehl sehr oo-MAH-noh seh-GOON MOO-chahs trah-dee-see-OH-nehs rreh-lee-hee-OH-sahs', category: 'religious-terminology', audio: 'el-alma' },

  // === Spiritual Practices (12) ===
  { spanish: 'La meditación calma la mente y permite una conexión profunda con el ser interior', english: 'Meditation calms the mind and allows a deep connection with the inner self', pronunciation: 'lah meh-dee-tah-see-OHN KAHL-mah lah MEHN-teh ee pehr-MEE-teh OO-nah koh-nehk-see-OHN proh-FOON-dah kohn ehl sehr een-teh-ree-OHR', category: 'spiritual-practices', audio: 'la-meditacion' },
  { spanish: 'El ayuno es una práctica espiritual que purifica el cuerpo y fortalece la disciplina interior', english: 'Fasting is a spiritual practice that purifies the body and strengthens inner discipline', pronunciation: 'ehl ah-YOO-noh ehs OO-nah PRAHK-tee-kah ehs-pee-ree-too-AHL keh poo-ree-FEE-kah ehl KWEHR-poh ee fohr-tah-LEH-seh lah dees-see-PLEE-nah een-teh-ree-OHR', category: 'spiritual-practices', audio: 'el-ayuno' },
  { spanish: 'La peregrinación es un viaje sagrado que el creyente realiza a un lugar de significado religioso', english: 'A pilgrimage is a sacred journey the believer makes to a place of religious significance', pronunciation: 'lah peh-reh-gree-nah-see-OHN ehs oon bee-AH-heh sah-GRAH-doh keh ehl kreh-YEHN-teh rreh-ah-LEE-sah ah oon loo-GAHR deh seeg-nee-fee-KAH-doh rreh-lee-hee-OH-soh', category: 'spiritual-practices', audio: 'la-peregrinacion' },
  { spanish: 'El retiro espiritual ofrece un espacio de silencio y reflexión lejos de la vida cotidiana', english: 'A spiritual retreat offers a space of silence and reflection away from daily life', pronunciation: 'ehl rreh-TEE-roh ehs-pee-ree-too-AHL oh-FREH-seh oon ehs-PAH-see-oh deh see-LEHN-see-oh ee rreh-flehk-see-OHN LEH-hohs deh lah BEE-dah koh-tee-dee-AH-nah', category: 'spiritual-practices', audio: 'el-retiro-espiritual' },
  { spanish: 'La ofrenda es un regalo simbólico que se presenta ante lo sagrado como muestra de devoción', english: 'An offering is a symbolic gift presented before the sacred as a show of devotion', pronunciation: 'lah oh-FREHN-dah ehs oon rreh-GAH-loh seem-BOH-lee-koh keh seh preh-SEHN-tah AHN-teh loh sah-GRAH-doh KOH-moh MWEHS-trah deh deh-boh-see-OHN', category: 'spiritual-practices', audio: 'la-ofrenda' },
  { spanish: 'El ritual de sanación combina la oración con prácticas tradicionales para restaurar el bienestar', english: 'The healing ritual combines prayer with traditional practices to restore wellbeing', pronunciation: 'ehl ree-too-AHL deh sah-nah-see-OHN kohm-BEE-nah lah oh-rah-see-OHN kohn PRAHK-tee-kahs trah-dee-see-oh-NAH-lehs PAH-rah rrehs-tow-RAHR ehl bee-ehn-ehs-TAHR', category: 'spiritual-practices', audio: 'el-ritual-de-sanacion' },
  { spanish: 'La ceremonia de limpia purifica la energía negativa usando hierbas, incienso y oraciones', english: 'The cleansing ceremony purifies negative energy using herbs, incense, and prayers', pronunciation: 'lah seh-reh-MOH-nee-ah deh LEEM-pee-ah poo-ree-FEE-kah lah eh-nehr-HEE-ah neh-gah-TEE-bah oo-SAHN-doh ee-EHR-bahs een-see-EHN-soh ee oh-rah-see-OH-nehs', category: 'spiritual-practices', audio: 'la-ceremonia-de-limpia' },
  { spanish: 'El rosario es una oración repetitiva que se reza con cuentas para meditar sobre los misterios de la fe', english: 'The rosary is a repetitive prayer said with beads to meditate on the mysteries of faith', pronunciation: 'ehl rroh-SAH-ree-oh ehs OO-nah oh-rah-see-OHN rreh-peh-tee-TEE-bah keh seh RREH-sah kohn KWEHN-tahs PAH-rah meh-dee-TAHR SOH-breh lohs mees-TEH-ree-ohs deh lah feh', category: 'spiritual-practices', audio: 'el-rosario' },
  { spanish: 'La velación mantiene una vela encendida como símbolo de esperanza y conexión con lo divino', english: 'A vigil keeps a candle lit as a symbol of hope and connection with the divine', pronunciation: 'lah beh-lah-see-OHN mahn-tee-EH-neh OO-nah BEH-lah ehn-sehn-DEE-dah KOH-moh SEEM-boh-loh deh ehs-peh-RAHN-sah ee koh-nehk-see-OHN kohn loh dee-BEE-noh', category: 'spiritual-practices', audio: 'la-velacion' },
  { spanish: 'La bendición es una invocación de protección y favor divino sobre una persona o lugar', english: 'A blessing is an invocation of divine protection and favor upon a person or place', pronunciation: 'lah behn-dee-see-OHN ehs OO-nah een-boh-kah-see-OHN deh proh-tehk-see-OHN ee fah-BOHR dee-BEE-noh SOH-breh OO-nah pehr-SOH-nah oh loo-GAHR', category: 'spiritual-practices', audio: 'la-bendicion' },
  { spanish: 'El mantra es una palabra o frase repetida durante la meditación para enfocar la mente', english: 'A mantra is a word or phrase repeated during meditation to focus the mind', pronunciation: 'ehl MAHN-trah ehs OO-nah pah-LAH-brah oh FRAH-seh rreh-peh-TEE-dah doo-RAHN-teh lah meh-dee-tah-see-OHN PAH-rah ehn-foh-KAHR lah MEHN-teh', category: 'spiritual-practices', audio: 'el-mantra' },
  { spanish: 'El yoga integra posturas físicas, respiración y meditación como camino hacia la paz interior', english: 'Yoga integrates physical postures, breathing, and meditation as a path toward inner peace', pronunciation: 'ehl YOH-gah een-TEH-grah pohs-TOO-rahs FEE-see-kahs rrehs-pee-rah-see-OHN ee meh-dee-tah-see-OHN KOH-moh kah-MEE-noh AH-see-ah lah pahs een-teh-ree-OHR', category: 'spiritual-practices', audio: 'el-yoga' },

  // === Interfaith Dialogue (12) ===
  { spanish: 'El ecumenismo promueve la unidad y cooperación entre las diferentes iglesias y denominaciones cristianas', english: 'Ecumenism promotes unity and cooperation among different Christian churches and denominations', pronunciation: 'ehl eh-koo-meh-NEES-moh proh-MWEH-beh lah oo-nee-DAHD ee koh-oh-peh-rah-see-OHN EHN-treh lahs dee-feh-REHN-tehs ee-GLEH-see-ahs ee deh-noh-mee-nah-see-OH-nehs krees-tee-AH-nahs', category: 'interfaith-dialogue', audio: 'el-ecumenismo' },
  { spanish: 'La tolerancia religiosa reconoce el derecho de cada persona a practicar su propia fe libremente', english: 'Religious tolerance recognizes the right of each person to practice their own faith freely', pronunciation: 'lah toh-leh-RAHN-see-ah rreh-lee-hee-OH-sah rreh-koh-NOH-seh ehl deh-REH-choh deh KAH-dah pehr-SOH-nah ah prahk-tee-KAHR soo PROH-pee-ah feh LEE-breh-MEHN-teh', category: 'interfaith-dialogue', audio: 'la-tolerancia-religiosa' },
  { spanish: 'La libertad de culto garantiza que nadie sea perseguido ni discriminado por sus creencias religiosas', english: 'Freedom of worship guarantees that no one is persecuted or discriminated against for their religious beliefs', pronunciation: 'lah lee-behr-TAHD deh KOOL-toh gah-rahn-TEE-sah keh NAH-dee-eh SEH-ah pehr-seh-GEE-doh nee dees-kree-mee-NAH-doh pohr soos kreh-EHN-see-ahs rreh-lee-hee-OH-sahs', category: 'interfaith-dialogue', audio: 'la-libertad-de-culto' },
  { spanish: 'El sincretismo fusiona elementos de diferentes tradiciones religiosas en una nueva expresión de fe', english: 'Syncretism fuses elements from different religious traditions into a new expression of faith', pronunciation: 'ehl seen-kreh-TEES-moh foo-see-OH-nah eh-leh-MEHN-tohs deh dee-feh-REHN-tehs trah-dee-see-OH-nehs rreh-lee-hee-OH-sahs ehn OO-nah NWEH-bah ehks-preh-see-OHN deh feh', category: 'interfaith-dialogue', audio: 'el-sincretismo' },
  { spanish: 'La coexistencia pacífica entre religiones requiere respeto mutuo y voluntad de entender al otro', english: 'Peaceful coexistence between religions requires mutual respect and willingness to understand the other', pronunciation: 'lah koh-ehk-sees-TEHN-see-ah pah-SEE-fee-kah EHN-treh rreh-lee-hee-OH-nehs rreh-kee-EH-reh rrehs-PEH-toh MOO-too-oh ee boh-loon-TAHD deh ehn-tehn-DEHR ahl OH-troh', category: 'interfaith-dialogue', audio: 'la-coexistencia-pacifica' },
  { spanish: 'El diálogo interreligioso busca puntos comunes entre las tradiciones de fe sin negar las diferencias', english: 'Interfaith dialogue seeks common ground among faith traditions without denying differences', pronunciation: 'ehl dee-AH-loh-goh een-tehr-rreh-lee-hee-OH-soh BOOS-kah POON-tohs koh-MOO-nehs EHN-treh lahs trah-dee-see-OH-nehs deh feh seen neh-GAHR lahs dee-feh-REHN-see-ahs', category: 'interfaith-dialogue', audio: 'el-dialogo-interreligioso' },
  { spanish: 'El laicismo defiende la separación entre el estado y las instituciones religiosas en la vida pública', english: 'Secularism defends the separation between the state and religious institutions in public life', pronunciation: 'ehl lah-ee-SEES-moh deh-fee-EHN-deh lah seh-pah-rah-see-OHN EHN-treh ehl ehs-TAH-doh ee lahs eens-tee-too-see-OH-nehs rreh-lee-hee-OH-sahs ehn lah BEE-dah POO-blee-kah', category: 'interfaith-dialogue', audio: 'el-laicismo' },
  { spanish: 'La conversión religiosa es el cambio voluntario de una fe a otra basado en una experiencia personal', english: 'Religious conversion is the voluntary change from one faith to another based on personal experience', pronunciation: 'lah kohn-behr-see-OHN rreh-lee-hee-OH-sah ehs ehl KAHM-bee-oh boh-loon-TAH-ree-oh deh OO-nah feh ah OH-trah bah-SAH-doh ehn OO-nah ehks-peh-ree-EHN-see-ah pehr-soh-NAHL', category: 'interfaith-dialogue', audio: 'la-conversion-religiosa' },
  { spanish: 'El fundamentalismo interpreta los textos sagrados de manera literal y rechaza cualquier modernización', english: 'Fundamentalism interprets sacred texts literally and rejects any modernization', pronunciation: 'ehl foon-dah-mehn-tah-LEES-moh een-tehr-PREH-tah lohs TEHKS-tohs sah-GRAH-dohs deh mah-NEH-rah lee-teh-RAHL ee rreh-CHAH-sah kwahl-kee-EHR moh-dehr-nee-sah-see-OHN', category: 'interfaith-dialogue', audio: 'el-fundamentalismo' },
  { spanish: 'La espiritualidad contemporánea busca sentido y trascendencia más allá de las religiones organizadas', english: 'Contemporary spirituality seeks meaning and transcendence beyond organized religions', pronunciation: 'lah ehs-pee-ree-too-ah-lee-DAHD kohn-tehm-poh-RAH-neh-ah BOOS-kah sehn-TEE-doh ee trah-sehn-DEHN-see-ah mahs ah-YAH deh lahs rreh-lee-hee-OH-nehs ohr-gah-nee-SAH-dahs', category: 'interfaith-dialogue', audio: 'la-espiritualidad-contemporanea' },
  { spanish: 'El respeto por las diferencias religiosas es la base de una sociedad pluralista y democrática', english: 'Respect for religious differences is the foundation of a pluralistic and democratic society', pronunciation: 'ehl rrehs-PEH-toh pohr lahs dee-feh-REHN-see-ahs rreh-lee-hee-OH-sahs ehs lah BAH-seh deh OO-nah soh-see-eh-DAHD ploo-rah-LEES-tah ee deh-moh-KRAH-tee-kah', category: 'interfaith-dialogue', audio: 'el-respeto-por-las-diferencias' },
  { spanish: 'La teología de la liberación une la fe cristiana con la lucha por la justicia social y los derechos de los pobres', english: 'Liberation theology unites Christian faith with the fight for social justice and the rights of the poor', pronunciation: 'lah teh-oh-loh-HEE-ah deh lah lee-beh-rah-see-OHN OO-neh lah feh krees-tee-AH-nah kohn lah LOO-chah pohr lah hoos-TEE-see-ah soh-see-AHL ee lohs deh-REH-chohs deh lohs POH-brehs', category: 'interfaith-dialogue', audio: 'la-teologia-de-la-liberacion' },

  // === Pilgrimage Traditions (12) ===
  { spanish: 'El Camino de Santiago atrae a miles de peregrinos que recorren cientos de kilómetros hasta la catedral', english: 'The Camino de Santiago attracts thousands of pilgrims who walk hundreds of kilometers to the cathedral', pronunciation: 'ehl kah-MEE-noh deh sahn-tee-AH-goh ah-TRAH-eh ah MEE-lehs deh peh-reh-GREE-nohs keh rreh-KOH-rrehn see-EHN-tohs deh kee-LOH-meh-trohs AHS-tah lah kah-teh-DRAHL', category: 'pilgrimage-traditions', audio: 'el-camino-de-santiago' },
  { spanish: 'La Virgen de Guadalupe es la patrona de México y símbolo de identidad nacional y fe popular', english: 'The Virgin of Guadalupe is the patron saint of Mexico and a symbol of national identity and popular faith', pronunciation: 'lah BEER-hehn deh gwah-dah-LOO-peh ehs lah pah-TROH-nah deh MEH-hee-koh ee SEEM-boh-loh deh ee-dehn-tee-DAHD nah-see-oh-NAHL ee feh poh-poo-LAHR', category: 'pilgrimage-traditions', audio: 'la-virgen-de-guadalupe' },
  { spanish: 'El Día de Muertos honra a los difuntos con altares, flores de cempasúchil y comida tradicional', english: 'Day of the Dead honors the deceased with altars, marigold flowers, and traditional food', pronunciation: 'ehl DEE-ah deh MWEHR-tohs OHN-rah ah lohs dee-FOON-tohs kohn ahl-TAH-rehs FLOH-rehs deh sehm-pah-SOO-cheel ee koh-MEE-dah trah-dee-see-oh-NAHL', category: 'pilgrimage-traditions', audio: 'el-dia-de-muertos' },
  { spanish: 'La Semana Santa es la celebración más importante del calendario litúrgico cristiano en el mundo hispano', english: 'Holy Week is the most important celebration of the Christian liturgical calendar in the Hispanic world', pronunciation: 'lah seh-MAH-nah SAHN-tah ehs lah seh-leh-brah-see-OHN mahs eem-pohr-TAHN-teh dehl kah-lehn-DAH-ree-oh lee-TOOR-hee-koh krees-tee-AH-noh ehn ehl MOON-doh ees-PAH-noh', category: 'pilgrimage-traditions', audio: 'la-semana-santa' },
  { spanish: 'Las procesiones llevan imágenes religiosas por las calles acompañadas de música y rezos comunitarios', english: 'Processions carry religious images through the streets accompanied by music and communal prayers', pronunciation: 'lahs proh-seh-see-OH-nehs YEH-bahn ee-MAH-heh-nehs rreh-lee-hee-OH-sahs pohr lahs KAH-yehs ah-kohm-pah-NYAH-dahs deh MOO-see-kah ee RREH-sohs koh-moo-nee-TAH-ree-ohs', category: 'pilgrimage-traditions', audio: 'las-procesiones' },
  { spanish: 'Los exvotos son objetos dejados en santuarios como agradecimiento por milagros o favores recibidos', english: 'Votive offerings are objects left in sanctuaries as gratitude for miracles or favors received', pronunciation: 'lohs ehks-BOH-tohs sohn ohb-HEH-tohs deh-HAH-dohs ehn sahn-too-AH-ree-ohs KOH-moh ah-grah-deh-see-mee-EHN-toh pohr mee-LAH-grohs oh fah-BOH-rehs rreh-see-BEE-dohs', category: 'pilgrimage-traditions', audio: 'los-exvotos' },
  { spanish: 'La romería es una festividad popular que combina devoción religiosa con música, baile y gastronomía', english: 'A romería is a popular festivity that combines religious devotion with music, dance, and gastronomy', pronunciation: 'lah rroh-meh-REE-ah ehs OO-nah fehs-tee-bee-DAHD poh-poo-LAHR keh kohm-BEE-nah deh-boh-see-OHN rreh-lee-hee-OH-sah kohn MOO-see-kah BAH-ee-leh ee gahs-troh-noh-MEE-ah', category: 'pilgrimage-traditions', audio: 'la-romeria' },
  { spanish: 'El santuario es un lugar sagrado donde los fieles acuden a orar y pedir protección divina', english: 'The sanctuary is a sacred place where the faithful go to pray and ask for divine protection', pronunciation: 'ehl sahn-too-AH-ree-oh ehs oon loo-GAHR sah-GRAH-doh DOHN-deh lohs fee-EH-lehs ah-KOO-dehn ah oh-RAHR ee peh-DEER proh-tehk-see-OHN dee-BEE-nah', category: 'pilgrimage-traditions', audio: 'el-santuario' },
  { spanish: 'La manda es una promesa hecha a un santo a cambio de un favor o milagro solicitado', english: 'A manda is a promise made to a saint in exchange for a requested favor or miracle', pronunciation: 'lah MAHN-dah ehs OO-nah proh-MEH-sah EH-chah ah oon SAHN-toh ah KAHM-bee-oh deh oon fah-BOHR oh mee-LAH-groh soh-lee-see-TAH-doh', category: 'pilgrimage-traditions', audio: 'la-manda' },
  { spanish: 'La fiesta patronal celebra al santo protector del pueblo con misas, ferias y fuegos artificiales', english: 'The patron saint festival celebrates the town\'s protective saint with masses, fairs, and fireworks', pronunciation: 'lah fee-EHS-tah pah-troh-NAHL seh-LEH-brah ahl SAHN-toh proh-tehk-TOHR dehl PWEH-bloh kohn MEE-sahs FEH-ree-ahs ee FWEH-gohs ahr-tee-fee-see-AH-lehs', category: 'pilgrimage-traditions', audio: 'la-fiesta-patronal' },
  { spanish: 'La danza de los voladores es un ritual prehispánico que representa la conexión entre la tierra y el cielo', english: 'The Danza de los Voladores is a pre-Hispanic ritual representing the connection between earth and sky', pronunciation: 'lah DAHN-sah deh lohs boh-lah-DOH-rehs ehs oon ree-too-AHL preh-ees-PAH-nee-koh keh rreh-preh-SEHN-tah lah koh-nehk-see-OHN EHN-treh lah tee-EH-rrah ee ehl see-EH-loh', category: 'pilgrimage-traditions', audio: 'la-danza-de-los-voladores' },
  { spanish: 'El sincretismo religioso en América Latina mezcla tradiciones indígenas con el catolicismo colonial', english: 'Religious syncretism in Latin America blends indigenous traditions with colonial Catholicism', pronunciation: 'ehl seen-kreh-TEES-moh rreh-lee-hee-OH-soh ehn ah-MEH-ree-kah lah-TEE-nah MEHS-klah trah-dee-see-OH-nehs een-DEE-heh-nahs kohn ehl kah-toh-lee-SEES-moh koh-loh-nee-AHL', category: 'pilgrimage-traditions', audio: 'el-sincretismo-religioso' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L97PhraseByAudio = phraseByAudio

// === RITUAL GUIDE (unique activity) ===

export interface RitualGuideChallenge {
  description: string
  english: string
  correctTradition: string
  options: string[]
}

export const RITUAL_GUIDE_CHALLENGES: RitualGuideChallenge[] = [
  {
    description: 'Miles de personas caminan durante semanas para llegar a una catedral en el noroeste de España, siguiendo una ruta medieval. ¿Qué tradición es?',
    english: 'Thousands of people walk for weeks to reach a cathedral in northwestern Spain, following a medieval route. What tradition is this?',
    correctTradition: 'El Camino de Santiago',
    options: ['La Semana Santa de Sevilla', 'El Camino de Santiago', 'La Romería del Rocío', 'La procesión del Señor de los Milagros'],
  },
  {
    description: 'El 1 y 2 de noviembre las familias construyen altares con flores naranjas, fotos y comida favorita para honrar a los que ya no están. ¿Qué celebración es?',
    english: 'On November 1st and 2nd, families build altars with orange flowers, photos, and favorite foods to honor those who have passed. What celebration is this?',
    correctTradition: 'El Día de Muertos',
    options: ['El Día de Muertos', 'La Semana Santa', 'La Navidad', 'El Carnaval'],
  },
  {
    description: 'En este ritual mesoamericano, cuatro personas giran suspendidas de un poste de 30 metros mientras un músico toca en la cima. ¿Qué ritual es?',
    english: 'In this Mesoamerican ritual, four people spin suspended from a 30-meter pole while a musician plays at the top. What ritual is this?',
    correctTradition: 'La Danza de los Voladores',
    options: ['La ceremonia de limpia', 'El baile del Güegüense', 'La Danza de los Voladores', 'La Guelaguetza'],
  },
  {
    description: 'Millones de personas visitan una basílica en Ciudad de México cada 12 de diciembre para venerar a una imagen que según la tradición se apareció en 1531. ¿A quién veneran?',
    english: 'Millions visit a basilica in Mexico City every December 12th to venerate an image that according to tradition appeared in 1531. Whom do they venerate?',
    correctTradition: 'La Virgen de Guadalupe',
    options: ['Santa Rosa de Lima', 'La Virgen de Guadalupe', 'La Virgen del Carmen', 'Santa Teresa de Ávila'],
  },
  {
    description: 'Durante una semana en primavera, ciudades como Sevilla y Antigua Guatemala llenan las calles con figuras religiosas cargadas sobre hombros. ¿Qué evento es?',
    english: 'During a week in spring, cities like Seville and Antigua Guatemala fill streets with religious figures carried on shoulders. What event is this?',
    correctTradition: 'La Semana Santa',
    options: ['La fiesta patronal', 'La romería', 'La Semana Santa', 'El Corpus Christi'],
  },
  {
    description: 'Un curandero usa hierbas como la ruda, copal y oraciones para limpiar la energía negativa de una persona o espacio. ¿Qué práctica es?',
    english: 'A healer uses herbs like rue, copal, and prayers to cleanse negative energy from a person or space. What practice is this?',
    correctTradition: 'La ceremonia de limpia',
    options: ['El bautismo', 'La confesión', 'La ceremonia de limpia', 'El retiro espiritual'],
  },
  {
    description: 'Un creyente deja un objeto pequeño en el santuario — una réplica de una pierna, un retrato, una trenza de cabello — como agradecimiento por un milagro concedido. ¿Qué son estos objetos?',
    english: 'A believer leaves a small object at the sanctuary — a replica of a leg, a portrait, a braid of hair — as gratitude for a granted miracle. What are these objects?',
    correctTradition: 'Los exvotos',
    options: ['Las ofrendas del Día de Muertos', 'Los exvotos', 'Las mandas', 'Los rosarios'],
  },
]

// === LESSON DATA ===

export const L97Data: LessonData = {
  id: 'L9.7',
  hero: {
    lessonId: 'L9.7',
    title: 'Religion & Spirituality',
    subtitle: 'Religious terminology, spiritual practices, interfaith dialogue, and pilgrimage traditions',
    description: 'Explore the rich vocabulary of faith, spirituality, and religious traditions across the Spanish-speaking world. From the Camino de Santiago to the Día de Muertos, learn to discuss sacred practices, interfaith dialogue, and the deep connection between religion and Latin American culture.',
    image: '/images/L9.7/L9.7.jpg',
    gradient: 'from-amber-800/65 via-orange-700/55 to-rose-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '✝️', title: 'Religious Terminology', desc: 'Learn vocabulary for faith, prayer, sacraments, sin, redemption, and the soul.' },
    { icon: '🧘', title: 'Spiritual Practices', desc: 'Master terms for meditation, fasting, pilgrimages, retreats, and healing rituals.' },
    { icon: '🤝', title: 'Interfaith Dialogue', desc: 'Discuss ecumenism, tolerance, freedom of worship, syncretism, and coexistence.' },
    { icon: '⛪', title: 'Pilgrimage Traditions', desc: 'Explore the Camino de Santiago, Día de Muertos, Semana Santa, and patron saint festivals.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.7', label: 'Celebrations & Traditions', detail: 'L3.7 introduced cultural celebrations. Now dive deeper into the religious roots that shape these traditions.' },
    { fromLesson: 'L7.8', label: 'Cultural Identity', detail: 'L7.8 explored identity and belonging. Now examine how religion and spirituality shape cultural identity in the Hispanic world.' },
    { fromLesson: 'L6.6', label: 'Philosophy & Ethics', detail: 'L6.6 covered philosophical concepts. Now explore the intersection of philosophy, theology, and spiritual thought.' },
  ],

  sectionTransitions: [
    { afterSection: 'religious-terminology', text: 'Theological vocabulary mastered! Now let\'s explore spiritual practices.' },
    { afterSection: 'spiritual-practices', text: 'Spiritual practices understood! Let\'s examine interfaith dialogue.' },
    { afterSection: 'interfaith-dialogue', text: 'Interfaith concepts clear! Now let\'s discover pilgrimage traditions.' },
    { afterSection: 'dialogues', text: 'Beautiful spiritual conversations! Let\'s explore the cultural side.' },
    { afterSection: 'cultural', text: 'Now test your knowledge in the Ritual Guide activity!' },
    { afterSection: 'ritual-guide', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La fe me da...', english: 'Faith gives me...' },
    { spanish: 'Creo que lo sagrado...', english: 'I believe that the sacred...' },
    { spanish: 'La tradición nos enseña...', english: 'Tradition teaches us...' },
    { spanish: 'El camino espiritual...', english: 'The spiritual path...' },
    { spanish: 'La paz interior viene de...', english: 'Inner peace comes from...' },
    { spanish: 'El respeto por las creencias...', english: 'Respect for beliefs...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La peregrinación al santuario de la Virgen de Guadalupe', pronunciation: 'lah peh-reh-gree-nah-see-OHN ahl sahn-too-AH-ree-oh deh lah BEER-hehn deh gwah-dah-LOO-peh', english: 'The pilgrimage to the sanctuary of the Virgin of Guadalupe', audio: 'la-peregrinacion', tip: '"Peregrinación" stresses the final syllable: peregrina-CIÓN. "Guadalupe" stresses the third-to-last: gua-da-LU-pe.' },
    { spanish: 'El sacramento del bautismo purifica el alma del creyente', pronunciation: 'ehl sah-krah-MEHN-toh dehl bow-TEES-moh poo-ree-FEE-kah ehl AHL-mah dehl kreh-YEHN-teh', english: 'The sacrament of baptism purifies the believer\'s soul', audio: 'el-sacramento', tip: '"Sacramento" stresses the penultimate: sacra-MEN-to. "Bautismo" also: bau-TIS-mo. Note "alma" is feminine but uses "el" because it starts with a stressed A.' },
    { spanish: 'La Semana Santa en Sevilla es una tradición de siglos de devoción', pronunciation: 'lah seh-MAH-nah SAHN-tah ehn seh-BEE-yah ehs OO-nah trah-dee-see-OHN deh SEE-glohs deh deh-boh-see-OHN', english: 'Holy Week in Seville is a tradition of centuries of devotion', audio: 'la-semana-santa', tip: '"Semana Santa" is always capitalized. "Sevilla" uses the LL sound, which in Spain sounds like the TH in "the" or a "Y" depending on the region.' },
    { spanish: 'El diálogo interreligioso promueve la coexistencia pacífica', pronunciation: 'ehl dee-AH-loh-goh een-tehr-rreh-lee-hee-OH-soh proh-MWEH-beh lah koh-ehk-sees-TEHN-see-ah pah-SEE-fee-kah', english: 'Interfaith dialogue promotes peaceful coexistence', audio: 'el-dialogo-interreligioso', tip: '"Interreligioso" has the strong RR: inter-RRELI-gioso. "Coexistencia" has four syllables after "co": co-exis-TEN-cia.' },
    { spanish: 'La ceremonia de limpia purifica con hierbas y oraciones ancestrales', pronunciation: 'lah seh-reh-MOH-nee-ah deh LEEM-pee-ah poo-ree-FEE-kah kohn ee-EHR-bahs ee oh-rah-see-OH-nehs ahn-sehs-TRAH-lehs', english: 'The cleansing ceremony purifies with herbs and ancestral prayers', audio: 'la-ceremonia-de-limpia', tip: '"Ceremonia" stresses the third-to-last: cere-MO-nia. "Hierbas" has a silent H: ee-EHR-bahs. "Ancestrales" stresses the penultimate: ances-TRA-les.' },
    { spanish: 'El sincretismo religioso mezcla tradiciones indígenas con el catolicismo', pronunciation: 'ehl seen-kreh-TEES-moh rreh-lee-hee-OH-soh MEHS-klah trah-dee-see-OH-nehs een-DEE-heh-nahs kohn ehl kah-toh-lee-SEES-moh', english: 'Religious syncretism blends indigenous traditions with Catholicism', audio: 'el-sincretismo-religioso', tip: '"Sincretismo" stresses the penultimate: sincre-TIS-mo. "Indígenas" stresses the second syllable: in-DÍ-ge-nas (esdrújula word).' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'religious-terminology', label: 'Religious Terminology' },
    { id: 'spiritual-practices', label: 'Spiritual Practices' },
    { id: 'interfaith-dialogue', label: 'Interfaith Dialogue' },
    { id: 'pilgrimage-traditions', label: 'Pilgrimage Traditions' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'ritual-guide', label: 'Ritual Guide' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'religious-terminology',
      title: 'Religious Terminology — Terminología Religiosa',
      description: 'Core vocabulary for faith, prayer, sacraments, sin, redemption, and the soul.',
      tabs: [
        { label: 'Faith & Sacraments', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'religious-terminology').slice(0, 6) },
        { label: 'Doctrine & Soul', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'religious-terminology').slice(6) },
      ],
    },
    {
      id: 'spiritual-practices',
      title: 'Spiritual Practices — Prácticas Espirituales',
      description: 'Meditation, fasting, pilgrimages, retreats, offerings, and healing rituals.',
      tabs: [
        { label: 'Inner Practices', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'spiritual-practices').slice(0, 6) },
        { label: 'Rituals & Devotion', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'spiritual-practices').slice(6) },
      ],
    },
    {
      id: 'interfaith-dialogue',
      title: 'Interfaith Dialogue — Diálogo Interreligioso',
      description: 'Ecumenism, tolerance, freedom of worship, syncretism, and peaceful coexistence.',
      tabs: [
        { label: 'Unity & Tolerance', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'interfaith-dialogue').slice(0, 6) },
        { label: 'Modern Perspectives', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'interfaith-dialogue').slice(6) },
      ],
    },
    {
      id: 'pilgrimage-traditions',
      title: 'Pilgrimage Traditions — Tradiciones de Peregrinación',
      description: 'The Camino de Santiago, Día de Muertos, Semana Santa, patron saint festivals, and syncretism.',
      tabs: [
        { label: 'Sacred Journeys', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'pilgrimage-traditions').slice(0, 6) },
        { label: 'Festivals & Syncretism', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'pilgrimage-traditions').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    { title: 'Religious Vocabulary — Latin Roots', content: 'Many Spanish religious words come from Latin: "sacramento" (sacramentum), "oración" (oratio), "resurrección" (resurrectio). While they share roots with English cognates, pronunciation differs: sa-cra-MEN-to, o-ra-CIÓN, resu-rrec-CIÓN.', example: 'El sacramento de la confesión requiere oración sincera.' },
    { title: 'The Soft G in Religious Terms', content: 'In words like "religión," "sagrado," "liturgia," the G before E/I is soft (like English H): re-li-HIÓN, li-TUR-hia. Before A/O/U, G is hard: sa-GRA-do, Gua-da-LU-pe.', example: 'La liturgia sagrada incluye la homilía del sacerdote.', reviewFrom: 'L3.7' },
    { title: 'Pilgrimage & Festival Words', content: '"Peregrinación," "procesión," and "celebración" all end in -CIÓN (always stressed). "Romería" stresses the I: rome-RÍ-a. "Santuario" stresses the A: santu-A-rio. These stress patterns are essential for natural pronunciation.', example: 'La peregrinación termina con una procesión al santuario.' },
    { title: 'Indigenous & Syncretic Terms', content: 'Words from Nahuatl and other indigenous languages are common in Mexican religious vocabulary: "cempasúchil" (marigold, cempa-SÚ-chil), "copal" (incense, co-PAL), "temazcal" (steam bath, te-maz-CAL). These words don\'t follow standard Spanish patterns.', example: 'El altar del Día de Muertos lleva cempasúchil, copal y tamales.', reviewFrom: 'L7.8' },
  ],

  flashcardGroups: [
    { key: 'religious', label: 'Religious Terminology', audioKeys: ['la-fe', 'la-oracion', 'el-sacramento', 'la-homilia', 'el-pecado', 'la-redencion', 'la-gracia-divina', 'la-resurreccion', 'el-bautismo', 'la-confesion', 'el-profeta', 'el-alma'] },
    { key: 'spiritual', label: 'Spiritual Practices', audioKeys: ['la-meditacion', 'el-ayuno', 'la-peregrinacion', 'el-retiro-espiritual', 'la-ofrenda', 'el-ritual-de-sanacion', 'la-ceremonia-de-limpia', 'el-rosario', 'la-velacion', 'la-bendicion', 'el-mantra', 'el-yoga'] },
    { key: 'pilgrimage', label: 'Traditions & Dialogue', audioKeys: ['el-camino-de-santiago', 'la-virgen-de-guadalupe', 'el-dia-de-muertos', 'la-semana-santa', 'las-procesiones', 'los-exvotos', 'el-ecumenismo', 'la-tolerancia-religiosa', 'el-sincretismo', 'el-dialogo-interreligioso'] },
  ],

  matchPairs: [
    { left: 'La fe', right: 'Faith' },
    { left: 'La oración', right: 'Prayer' },
    { left: 'El bautismo', right: 'Baptism' },
    { left: 'La peregrinación', right: 'Pilgrimage' },
    { left: 'El sincretismo', right: 'Syncretism' },
    { left: 'El Día de Muertos', right: 'Day of the Dead' },
    { left: 'La Semana Santa', right: 'Holy Week' },
    { left: 'La ceremonia de limpia', right: 'Cleansing ceremony' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    { title: 'Christian vs. Indigenous Traditions', instruction: 'Is this tradition primarily Christian or Indigenous/Syncretic?', buckets: ['Christian Tradition ✝️', 'Indigenous/Syncretic 🌿'], items: [
      { text: 'El sacramento', bucket: 'Christian Tradition ✝️' }, { text: 'La Semana Santa', bucket: 'Christian Tradition ✝️' }, { text: 'El bautismo', bucket: 'Christian Tradition ✝️' }, { text: 'El rosario', bucket: 'Christian Tradition ✝️' },
      { text: 'La ceremonia de limpia', bucket: 'Indigenous/Syncretic 🌿' }, { text: 'La Danza de los Voladores', bucket: 'Indigenous/Syncretic 🌿' }, { text: 'El Día de Muertos', bucket: 'Indigenous/Syncretic 🌿' }, { text: 'El cempasúchil en altares', bucket: 'Indigenous/Syncretic 🌿' },
    ] },
    { title: 'Personal vs. Communal Practice', instruction: 'Is this typically a personal or communal spiritual practice?', buckets: ['Personal Practice 🧘', 'Communal Practice 👥'], items: [
      { text: 'La meditación', bucket: 'Personal Practice 🧘' }, { text: 'El ayuno', bucket: 'Personal Practice 🧘' }, { text: 'La oración silenciosa', bucket: 'Personal Practice 🧘' }, { text: 'El retiro espiritual', bucket: 'Personal Practice 🧘' },
      { text: 'La procesión', bucket: 'Communal Practice 👥' }, { text: 'La romería', bucket: 'Communal Practice 👥' }, { text: 'La fiesta patronal', bucket: 'Communal Practice 👥' }, { text: 'La misa comunitaria', bucket: 'Communal Practice 👥' },
    ] },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-camino',
      title: 'Pilgrims on the Camino de Santiago — Spain',
      location: 'Camino de Santiago, Spain',
      lines: [
        { speaker: 'Elena', text: '¡Buen Camino! ¿Cuántos kilómetros llevas hoy?', audio: '/audio/L9.7/phrases/d1-line1.mp3' },
        { speaker: 'Miguel', text: 'Unos veinticinco. Me duelen los pies, pero el espíritu está fuerte. ¿Y tú?', audio: '/audio/L9.7/phrases/d1-line2.mp3' },
        { speaker: 'Elena', text: 'Lo mismo. Empecé en Saint-Jean-Pied-de-Port hace tres semanas. Es mi primera peregrinación.', audio: '/audio/L9.7/phrases/d1-line3.mp3' },
        { speaker: 'Miguel', text: '¿Qué te motivó a hacer el Camino? ¿Es una razón religiosa o más espiritual?', audio: '/audio/L9.7/phrases/d1-line4.mp3' },
        { speaker: 'Elena', text: 'Un poco de ambas. Perdí a mi madre el año pasado y necesitaba un espacio para reflexionar y encontrar paz interior.', audio: '/audio/L9.7/phrases/d1-line5.mp3', annotations: [{ phrase: 'paz interior', fromLesson: 'L7.8', note: 'Inner peace and identity concepts explored in L7.8' }] },
        { speaker: 'Miguel', text: 'Lo siento mucho. Caminar durante semanas tiene algo de meditación. Cada paso es una oración.', audio: '/audio/L9.7/phrases/d1-line6.mp3' },
        { speaker: 'Elena', text: 'Exacto. No soy muy religiosa en el sentido tradicional, pero aquí he sentido algo sagrado en la naturaleza y en la solidaridad de los peregrinos.', audio: '/audio/L9.7/phrases/d1-line7.mp3' },
        { speaker: 'Miguel', text: 'Eso es lo bello del Camino: une a personas de todas las creencias. He conocido católicos, budistas, ateos, todos caminando juntos.', audio: '/audio/L9.7/phrases/d1-line8.mp3' },
        { speaker: 'Elena', text: '¿Tú eres creyente?', audio: '/audio/L9.7/phrases/d1-line9.mp3' },
        { speaker: 'Miguel', text: 'Soy católico, pero mi fe ha evolucionado. Antes era más dogmática; ahora es más personal. El Camino me ha enseñado que la fe se vive caminando, no solo rezando.', audio: '/audio/L9.7/phrases/d1-line10.mp3' },
        { speaker: 'Elena', text: '¿Piensas llegar a la catedral de Santiago para la misa del peregrino?', audio: '/audio/L9.7/phrases/d1-line11.mp3' },
        { speaker: 'Miguel', text: 'Sí, quiero abrazar al apóstol Santiago y recibir la Compostela. Será un momento muy emotivo después de tantos kilómetros.', audio: '/audio/L9.7/phrases/d1-line12.mp3' },
        { speaker: 'Elena', text: 'A mí me emociona la idea de llegar. Dicen que muchos peregrinos lloran al ver las torres de la catedral.', audio: '/audio/L9.7/phrases/d1-line13.mp3' },
        { speaker: 'Miguel', text: 'Es verdad. Después de semanas de caminar, llegar es como completar un ciclo espiritual. No eres la misma persona que cuando empezaste.', audio: '/audio/L9.7/phrases/d1-line14.mp3' },
        { speaker: 'Elena', text: '¡Buen Camino, Miguel! Nos vemos en Santiago.', audio: '/audio/L9.7/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-diademuertos',
      title: 'Día de Muertos Preparation — Oaxaca',
      location: 'Oaxaca, Mexico',
      lines: [
        { speaker: 'Doña Carmen', text: 'Mija, ayúdame a poner las flores de cempasúchil en el altar. Tu abuelita llega esta noche.', audio: '/audio/L9.7/phrases/d2-line1.mp3' },
        { speaker: 'Lucía', text: 'Abuela, ¿realmente crees que los muertos regresan a visitarnos?', audio: '/audio/L9.7/phrases/d2-line2.mp3' },
        { speaker: 'Doña Carmen', text: 'Es lo que nos enseñaron nuestros antepasados. Las almas regresan atraídas por el aroma del cempasúchil y la comida que amaban.', audio: '/audio/L9.7/phrases/d2-line3.mp3' },
        { speaker: 'Lucía', text: '¿Y las velas? ¿Para qué son tantas?', audio: '/audio/L9.7/phrases/d2-line4.mp3' },
        { speaker: 'Doña Carmen', text: 'Cada vela ilumina el camino de regreso para un alma. Tu abuelita tiene la suya — la grande, en el centro.', audio: '/audio/L9.7/phrases/d2-line5.mp3', annotations: [{ phrase: 'cada vela ilumina el camino', fromLesson: 'L3.7', note: 'Celebrations vocabulary from L3.7 provides the foundation for understanding Día de Muertos' }] },
        { speaker: 'Lucía', text: '¿Es verdad que esta tradición viene de antes de la conquista española?', audio: '/audio/L9.7/phrases/d2-line6.mp3' },
        { speaker: 'Doña Carmen', text: 'Así es. Los aztecas honraban a los muertos mucho antes de que llegaran los españoles. Después se mezcló con el catolicismo. Eso es el sincretismo.', audio: '/audio/L9.7/phrases/d2-line7.mp3' },
        { speaker: 'Lucía', text: '¿Y el copal? Siempre me ha gustado ese aroma.', audio: '/audio/L9.7/phrases/d2-line8.mp3' },
        { speaker: 'Doña Carmen', text: 'El copal purifica el espacio y guía a las almas. Es una ofrenda sagrada desde tiempos prehispánicos.', audio: '/audio/L9.7/phrases/d2-line9.mp3' },
        { speaker: 'Lucía', text: 'Abuela, ¿qué comida ponemos para la abuelita?', audio: '/audio/L9.7/phrases/d2-line10.mp3' },
        { speaker: 'Doña Carmen', text: 'Su mole negro, tamales de frijol y chocolate caliente. Eran sus favoritos. También su pan de muerto, por supuesto.', audio: '/audio/L9.7/phrases/d2-line11.mp3' },
        { speaker: 'Lucía', text: 'Me gusta que esta tradición no sea triste. Es una celebración de la vida, ¿verdad?', audio: '/audio/L9.7/phrases/d2-line12.mp3' },
        { speaker: 'Doña Carmen', text: 'Exacto, mija. No lloramos a los muertos — los celebramos. Les recordamos con alegría, música y comida. La muerte es parte de la vida.', audio: '/audio/L9.7/phrases/d2-line13.mp3' },
        { speaker: 'Lucía', text: 'Cuando sea grande, quiero enseñarles esta tradición a mis hijos. Es parte de quiénes somos.', audio: '/audio/L9.7/phrases/d2-line14.mp3' },
        { speaker: 'Doña Carmen', text: 'Así se mantienen vivas las tradiciones, mija. Mientras alguien recuerde, nadie muere de verdad.', audio: '/audio/L9.7/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Walk the Camino de Santiago with pilgrims discussing faith and spiritual growth, then prepare a Día de Muertos altar in Oaxaca learning about syncretic traditions.',

  culturalNotes: [
    { title: 'El Sincretismo Religioso en América Latina', content: 'Latin American spirituality is defined by syncretism — the blending of indigenous, African, and European Catholic traditions. The Virgin of Guadalupe merges the Aztec goddess Tonantzin with the Catholic Mary. In Cuba, Santería fuses Yoruba orishas with Catholic saints. In the Andes, Pachamama (Mother Earth) is venerated alongside the Virgin Mary. Understanding syncretism is key to understanding Latin American culture and identity.' },
    { title: 'El Día de Muertos — UNESCO Heritage', content: 'The Día de Muertos is a UNESCO Intangible Cultural Heritage tradition. Unlike Halloween, it is not about fear — it celebrates the return of deceased loved ones. Families build elaborate altars (ofrendas) with photos, favorite foods, cempasúchil flowers, and candles. In Michoacán, families spend the entire night in cemeteries singing and sharing stories. The tradition teaches that death is not an ending but a continuation of life\'s cycle.' },
    { title: 'La Semana Santa Hispana', content: 'Holy Week (Semana Santa) is perhaps the most spectacular religious celebration in the Spanish-speaking world. Seville\'s processions feature massive "pasos" (floats) with religious sculptures carried by "costaleros" (bearers). In Antigua, Guatemala, citizens create elaborate "alfombras" (carpets) from colored sawdust and flowers. In the Philippines (historically Spanish), some devotees undergo actual crucifixion. Each country adds its own cultural expression to the shared Catholic tradition.' },
  ],
  culturalGradient: 'from-amber-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La fe" means:', options: ['The church', 'Faith', 'The priest', 'The altar'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La ___ de limpia purifica la energía negativa" (ceremony)', answer: 'ceremonia' },
    { id: 3, type: 'mc', text: '"El sincretismo" refers to:', options: ['Religious persecution', 'The blending of different religious traditions', 'A type of prayer', 'Church architecture'], answer: 1 },
    { id: 4, type: 'tf', text: '"El Camino de Santiago" is a pilgrimage route ending at a cathedral in Spain.', answer: true },
    { id: 5, type: 'mc', text: '"Los exvotos" are:', options: ['Religious songs', 'Objects left as gratitude for miracles', 'Church decorations', 'Prayer books'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "El ___ interreligioso busca puntos comunes entre las tradiciones" (dialogue)', answer: 'diálogo' },
    { id: 7, type: 'mc', text: 'In the Día de Muertos dialogue, what attracts souls back?', options: ['Church bells', 'The aroma of cempasúchil and food', 'Fireworks', 'Music'], answer: 1 },
    { id: 8, type: 'mc', text: '"La peregrinación" means:', options: ['A prayer', 'A pilgrimage', 'A confession', 'A blessing'], answer: 1 },
    { id: 9, type: 'tf', text: '"La tolerancia religiosa" means forcing everyone to practice the same religion.', answer: false },
    { id: 10, type: 'mc', text: 'In Dialogue 1, what did Miguel say about the Camino?', options: ['It is only for Catholics', 'It unites people of all beliefs', 'It is a vacation', 'It is too difficult'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ es la celebración más importante de la Semana Santa" (procession)', answer: 'procesión' },
    { id: 12, type: 'mc', text: '"El bautismo" marks:', options: ['Marriage', 'Entry into the community of faith through water', 'Death', 'Graduation'], answer: 1 },
    { id: 13, type: 'mc', text: '"La teología de la liberación" combines:', options: ['Art and religion', 'Christian faith with social justice', 'Music and prayer', 'Politics and economics'], answer: 1 },
    { id: 14, type: 'tf', text: 'The Danza de los Voladores is a pre-Hispanic ritual.', answer: true },
    { id: 15, type: 'mc', text: '"El ayuno" is the practice of:', options: ['Singing', 'Fasting for spiritual purification', 'Dancing', 'Reading scriptures'], answer: 1 },
  ],

  audioBase: '/audio/L9.7/phrases',

  uniqueActivity: {
    id: 'RitualGuideL97',
    sectionId: 'ritual-guide',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'religious-terminology': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'spiritual-practices': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'interfaith-dialogue': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'pilgrimage-traditions': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'ritual-guide': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
