import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Newsroom Operations (12) ===
  { spanish: 'La sala de redacción funciona como el corazón del periódico donde se toman las decisiones editoriales', english: 'The newsroom functions as the heart of the newspaper where editorial decisions are made', pronunciation: 'lah SAH-lah deh rreh-dahk-see-OHN foon-see-OH-nah KOH-moh ehl koh-rah-SOHN dehl peh-ree-OH-dee-koh DOHN-deh seh TOH-mahn lahs deh-see-see-OH-nehs eh-dee-toh-ree-AH-lehs', category: 'newsroom-operations', audio: 'la-sala-de-redaccion' },
  { spanish: 'El cierre de edición es el momento límite para entregar las notas antes de imprimir', english: 'The editorial deadline is the final moment to submit articles before printing', pronunciation: 'ehl see-EH-rreh deh eh-dee-see-OHN ehs ehl moh-MEHN-toh LEE-mee-teh PAH-rah ehn-treh-GAHR lahs NOH-tahs AHN-tehs deh eem-pree-MEER', category: 'newsroom-operations', audio: 'el-cierre-de-edicion' },
  { spanish: 'La nota de última hora obliga a los editores a reorganizar toda la primera plana', english: 'Breaking news forces editors to reorganize the entire front page', pronunciation: 'lah NOH-tah deh OOL-tee-mah OH-rah oh-BLEE-gah ah lohs eh-dee-TOH-rehs ah rreh-ohr-gah-nee-SAHR TOH-dah lah pree-MEH-rah PLAH-nah', category: 'newsroom-operations', audio: 'la-nota-de-ultima-hora' },
  { spanish: 'El comunicado de prensa es un documento oficial que las instituciones envían a los medios', english: 'A press release is an official document that institutions send to the media', pronunciation: 'ehl koh-moo-nee-KAH-doh deh PREHN-sah ehs oon doh-koo-MEHN-toh oh-fee-see-AHL keh lahs eens-tee-too-see-OH-nehs ehn-BEE-ahn ah lohs MEH-dee-ohs', category: 'newsroom-operations', audio: 'el-comunicado-de-prensa' },
  { spanish: 'El corresponsal de guerra arriesga su vida para informar desde zonas de conflicto', english: 'The war correspondent risks their life to report from conflict zones', pronunciation: 'ehl koh-rrehs-pohn-SAHL deh GEH-rrah ah-rree-EHS-gah soo BEE-dah PAH-rah een-fohr-MAHR DEHS-deh SOH-nahs deh kohn-FLEEK-toh', category: 'newsroom-operations', audio: 'el-corresponsal-de-guerra' },
  { spanish: 'El jefe de redacción asigna las coberturas y supervisa la calidad de las notas', english: 'The editor-in-chief assigns coverage and supervises the quality of articles', pronunciation: 'ehl HEH-feh deh rreh-dahk-see-OHN ah-SEEG-nah lahs koh-behr-TOO-rahs ee soo-pehr-BEE-sah lah kah-lee-DAHD deh lahs NOH-tahs', category: 'newsroom-operations', audio: 'el-jefe-de-redaccion' },
  { spanish: 'La conferencia de prensa permite a los periodistas hacer preguntas directas al portavoz', english: 'The press conference allows journalists to ask the spokesperson direct questions', pronunciation: 'lah kohn-feh-REHN-see-ah deh PREHN-sah pehr-MEE-teh ah lohs peh-ree-oh-DEES-tahs ah-SEHR preh-GOON-tahs dee-REHK-tahs ahl pohr-tah-BOHS', category: 'newsroom-operations', audio: 'la-conferencia-de-prensa' },
  { spanish: 'La columna de opinión refleja el punto de vista personal del periodista sobre un tema', english: 'The opinion column reflects the journalist\'s personal viewpoint on a topic', pronunciation: 'lah koh-LOOM-nah deh oh-pee-nee-OHN rreh-FLEH-hah ehl POON-toh deh BEES-tah pehr-soh-NAHL dehl peh-ree-oh-DEES-tah SOH-breh oon TEH-mah', category: 'newsroom-operations', audio: 'la-columna-de-opinion' },
  { spanish: 'El reportero gráfico captura imágenes que complementan y refuerzan la narrativa escrita', english: 'The photojournalist captures images that complement and reinforce the written narrative', pronunciation: 'ehl rreh-pohr-TEH-roh GRAH-fee-koh kahp-TOO-rah ee-MAH-heh-nehs keh kohm-pleh-MEHN-tahn ee rreh-FWEHR-sahn lah nah-rrah-TEE-bah ehs-KREE-tah', category: 'newsroom-operations', audio: 'el-reportero-grafico' },
  { spanish: 'La agencia de noticias distribuye información a medios de comunicación de todo el mundo', english: 'The news agency distributes information to media outlets around the world', pronunciation: 'lah ah-HEHN-see-ah deh noh-TEE-see-ahs dees-tree-BOO-yeh een-fohr-mah-see-OHN ah MEH-dee-ohs deh koh-moo-nee-kah-see-OHN deh TOH-doh ehl MOON-doh', category: 'newsroom-operations', audio: 'la-agencia-de-noticias' },
  { spanish: 'La primicia es la noticia que un medio publica antes que cualquier competidor', english: 'A scoop is a story that a media outlet publishes before any competitor', pronunciation: 'lah pree-MEE-see-ah ehs lah noh-TEE-see-ah keh oon MEH-dee-oh poo-BLEE-kah AHN-tehs keh kwahl-kee-EHR kohm-peh-tee-DOHR', category: 'newsroom-operations', audio: 'la-primicia' },
  { spanish: 'El editorial representa la postura oficial del periódico sobre un asunto de interés público', english: 'The editorial represents the newspaper\'s official stance on a matter of public interest', pronunciation: 'ehl eh-dee-toh-ree-AHL rreh-preh-SEHN-tah lah pohs-TOO-rah oh-fee-see-AHL dehl peh-ree-OH-dee-koh SOH-breh oon ah-SOON-toh deh een-teh-REHS POO-blee-koh', category: 'newsroom-operations', audio: 'el-editorial' },

  // === Investigative Techniques (12) ===
  { spanish: 'La fuente confidencial proporciona información bajo la condición de mantener su identidad en secreto', english: 'The confidential source provides information on the condition of keeping their identity secret', pronunciation: 'lah FWEHN-teh kohn-fee-dehn-see-AHL proh-pohr-see-OH-nah een-fohr-mah-see-OHN BAH-hoh lah kohn-dee-see-OHN deh mahn-teh-NEHR soo ee-dehn-tee-DAHD ehn seh-KREH-toh', category: 'investigative-techniques', audio: 'la-fuente-confidencial' },
  { spanish: 'El derecho al anonimato protege a las fuentes que denuncian irregularidades de represalias', english: 'The right to anonymity protects sources who report irregularities from retaliation', pronunciation: 'ehl deh-REH-choh ahl ah-noh-nee-MAH-toh proh-TEH-heh ah lahs FWEHN-tehs keh deh-NOON-see-ahn ee-rreh-goo-lah-ree-DAH-dehs deh rreh-preh-SAH-lee-ahs', category: 'investigative-techniques', audio: 'el-derecho-al-anonimato' },
  { spanish: 'El acceso a la información pública es un derecho fundamental en las democracias modernas', english: 'Access to public information is a fundamental right in modern democracies', pronunciation: 'ehl ahk-SEH-soh ah lah een-fohr-mah-see-OHN POO-blee-kah ehs oon deh-REH-choh foon-dah-mehn-TAHL ehn lahs deh-moh-KRAH-see-ahs moh-DEHR-nahs', category: 'investigative-techniques', audio: 'el-acceso-a-la-informacion' },
  { spanish: 'La solicitud de transparencia obliga al gobierno a revelar documentos sobre el gasto público', english: 'The transparency request forces the government to reveal documents about public spending', pronunciation: 'lah soh-lee-see-TOOD deh trahns-pah-REHN-see-ah oh-BLEE-gah ahl goh-bee-EHR-noh ah rreh-beh-LAHR doh-koo-MEHN-tohs SOH-breh ehl GAHS-toh POO-blee-koh', category: 'investigative-techniques', audio: 'la-solicitud-de-transparencia' },
  { spanish: 'Cruzar datos de diferentes bases permite descubrir patrones de corrupción ocultos', english: 'Cross-referencing data from different databases allows discovering hidden corruption patterns', pronunciation: 'kroo-SAHR DAH-tohs deh dee-feh-REHN-tehs BAH-sehs pehr-MEE-teh dehs-koo-BREER pah-TROH-nehs deh koh-roop-see-OHN oh-KOOL-tohs', category: 'investigative-techniques', audio: 'cruzar-datos-de-diferentes' },
  { spanish: 'El denunciante interno arriesga su carrera para revelar prácticas ilegales dentro de una organización', english: 'The whistleblower risks their career to reveal illegal practices within an organization', pronunciation: 'ehl deh-noon-see-AHN-teh een-TEHR-noh ah-rree-EHS-gah soo kah-RREH-rah PAH-rah rreh-beh-LAHR PRAHK-tee-kahs ee-leh-GAH-lehs DEHN-troh deh OO-nah ohr-gah-nee-sah-see-OHN', category: 'investigative-techniques', audio: 'el-denunciante-interno' },
  { spanish: 'La investigación encubierta requiere que el periodista se infiltre sin revelar su identidad profesional', english: 'Undercover investigation requires the journalist to infiltrate without revealing their professional identity', pronunciation: 'lah een-behs-tee-gah-see-OHN ehn-koo-bee-EHR-tah rreh-kee-EH-reh keh ehl peh-ree-oh-DEES-tah seh een-FEEL-treh seen rreh-beh-LAHR soo ee-dehn-tee-DAHD proh-feh-see-oh-NAHL', category: 'investigative-techniques', audio: 'la-investigacion-encubierta' },
  { spanish: 'La cadena de custodia documental garantiza que las pruebas no han sido alteradas ni manipuladas', english: 'The documentary chain of custody guarantees that evidence has not been altered or manipulated', pronunciation: 'lah kah-DEH-nah deh koos-TOH-dee-ah doh-koo-mehn-TAHL gah-rahn-TEE-sah keh lahs proo-EH-bahs noh ahn SEE-doh ahl-teh-RAH-dahs nee mah-nee-poo-LAH-dahs', category: 'investigative-techniques', audio: 'la-cadena-de-custodia' },
  { spanish: 'La corroboración exige verificar cada dato con al menos dos fuentes independientes', english: 'Corroboration requires verifying each piece of data with at least two independent sources', pronunciation: 'lah koh-rroh-boh-rah-see-OHN ehk-SEE-heh beh-ree-fee-KAHR KAH-dah DAH-toh kohn ahl MEH-nohs dohs FWEHN-tehs een-deh-pehn-dee-EHN-tehs', category: 'investigative-techniques', audio: 'la-corroboracion-exige' },
  { spanish: 'El seguimiento del dinero público revela cómo se desvían fondos destinados a programas sociales', english: 'Following public money reveals how funds intended for social programs are diverted', pronunciation: 'ehl seh-gee-mee-EHN-toh dehl dee-NEH-roh POO-blee-koh rreh-BEH-lah KOH-moh seh dehs-BEE-ahn FOHN-dohs dehs-tee-NAH-dohs ah proh-GRAH-mahs soh-see-AH-lehs', category: 'investigative-techniques', audio: 'el-seguimiento-del-dinero' },
  { spanish: 'La filtración de documentos clasificados puede cambiar el curso de la historia política', english: 'The leak of classified documents can change the course of political history', pronunciation: 'lah feel-trah-see-OHN deh doh-koo-MEHN-tohs klah-see-fee-KAH-dohs PWEH-deh kahm-bee-AHR ehl KOOR-soh deh lah ees-TOH-ree-ah poh-LEE-tee-kah', category: 'investigative-techniques', audio: 'la-filtracion-de-documentos' },
  { spanish: 'El periodista de investigación dedica meses o años a una sola historia para garantizar su rigor', english: 'The investigative journalist dedicates months or years to a single story to ensure its rigor', pronunciation: 'ehl peh-ree-oh-DEES-tah deh een-behs-tee-gah-see-OHN deh-DEE-kah MEH-sehs oh AH-nyohs ah OO-nah SOH-lah ees-TOH-ree-ah PAH-rah gah-rahn-tee-SAHR soo ree-GOHR', category: 'investigative-techniques', audio: 'el-periodista-de-investigacion' },

  // === Editorial Ethics (12) ===
  { spanish: 'La objetividad periodística exige separar los hechos de las opiniones personales del reportero', english: 'Journalistic objectivity demands separating facts from the reporter\'s personal opinions', pronunciation: 'lah ohb-heh-tee-bee-DAHD peh-ree-oh-DEES-tee-kah ehk-SEE-heh seh-pah-RAHR lohs EH-chohs deh lahs oh-pee-nee-OH-nehs pehr-soh-NAH-lehs dehl rreh-pohr-TEH-roh', category: 'editorial-ethics', audio: 'la-objetividad-periodistica' },
  { spanish: 'El sesgo editorial distorsiona la información al presentarla desde una perspectiva parcial', english: 'Editorial bias distorts information by presenting it from a partial perspective', pronunciation: 'ehl SEHS-goh eh-dee-toh-ree-AHL dees-tohr-see-OH-nah lah een-fohr-mah-see-OHN ahl preh-sehn-TAHR-lah DEHS-deh OO-nah pehr-spehk-TEE-bah pahr-see-AHL', category: 'editorial-ethics', audio: 'el-sesgo-editorial' },
  { spanish: 'El derecho de réplica permite a las personas afectadas responder a informaciones erróneas', english: 'The right of reply allows affected persons to respond to erroneous information', pronunciation: 'ehl deh-REH-choh deh RREH-plee-kah pehr-MEE-teh ah lahs pehr-SOH-nahs ah-fehk-TAH-dahs rrehs-pohn-DEHR ah een-fohr-mah-see-OH-nehs eh-RROH-neh-ahs', category: 'editorial-ethics', audio: 'el-derecho-de-replica' },
  { spanish: 'La fe de erratas corrige públicamente los errores cometidos en publicaciones anteriores', english: 'The correction notice publicly corrects errors made in previous publications', pronunciation: 'lah feh deh eh-RRAH-tahs koh-RREE-heh POO-blee-kah-MEHN-teh lohs eh-RROH-rehs koh-meh-TEE-dohs ehn poo-blee-kah-see-OH-nehs ahn-teh-ree-OH-rehs', category: 'editorial-ethics', audio: 'la-fe-de-erratas' },
  { spanish: 'La línea editorial define la postura ideológica y los principios que guían al medio', english: 'The editorial line defines the ideological stance and principles that guide the media outlet', pronunciation: 'lah LEE-neh-ah eh-dee-toh-ree-AHL deh-FEE-neh lah pohs-TOO-rah ee-deh-oh-LOH-hee-kah ee lohs preen-SEE-pee-ohs keh GEE-ahn ahl MEH-dee-oh', category: 'editorial-ethics', audio: 'la-linea-editorial' },
  { spanish: 'El conflicto de intereses ocurre cuando el periodista tiene vínculos personales con la noticia', english: 'A conflict of interest occurs when the journalist has personal ties to the story', pronunciation: 'ehl kohn-FLEEK-toh deh een-teh-REH-sehs oh-KOO-rreh KWAHN-doh ehl peh-ree-oh-DEES-tah tee-EH-neh BEEN-koo-lohs pehr-soh-NAH-lehs kohn lah noh-TEE-see-ah', category: 'editorial-ethics', audio: 'el-conflicto-de-intereses' },
  { spanish: 'La presunción de inocencia obliga a los medios a no condenar a un acusado antes del juicio', english: 'The presumption of innocence obliges media to not condemn an accused person before trial', pronunciation: 'lah preh-soon-see-OHN deh ee-noh-SEHN-see-ah oh-BLEE-gah ah lohs MEH-dee-ohs ah noh kohn-deh-NAHR ah oon ah-koo-SAH-doh AHN-tehs dehl HOO-ee-see-oh', category: 'editorial-ethics', audio: 'la-presuncion-de-inocencia' },
  { spanish: 'El sensacionalismo sacrifica la precisión informativa para generar más audiencia y ventas', english: 'Sensationalism sacrifices informational accuracy to generate more audience and sales', pronunciation: 'ehl sehn-sah-see-oh-nah-LEES-moh sah-kree-FEE-kah lah preh-see-see-OHN een-fohr-mah-TEE-bah PAH-rah heh-neh-RAHR mahs ow-dee-EHN-see-ah ee BEHN-tahs', category: 'editorial-ethics', audio: 'el-sensacionalismo' },
  { spanish: 'La autorregulación de los medios establece códigos de conducta internos sin intervención estatal', english: 'Media self-regulation establishes internal codes of conduct without state intervention', pronunciation: 'lah ow-toh-rreh-goo-lah-see-OHN deh lohs MEH-dee-ohs ehs-tah-BLEH-seh KOH-dee-gohs deh kohn-DOOK-tah een-TEHR-nohs seen een-tehr-behn-see-OHN ehs-tah-TAHL', category: 'editorial-ethics', audio: 'la-autorregulacion' },
  { spanish: 'El derecho a la privacidad limita lo que los medios pueden publicar sobre la vida de las personas', english: 'The right to privacy limits what media can publish about people\'s lives', pronunciation: 'ehl deh-REH-choh ah lah pree-bah-see-DAHD lee-MEE-tah loh keh lohs MEH-dee-ohs PWEH-dehn poo-blee-KAHR SOH-breh lah BEE-dah deh lahs pehr-SOH-nahs', category: 'editorial-ethics', audio: 'el-derecho-a-la-privacidad' },
  { spanish: 'La cláusula de conciencia permite al periodista negarse a escribir contra sus principios éticos', english: 'The conscience clause allows the journalist to refuse to write against their ethical principles', pronunciation: 'lah KLOW-soo-lah deh kohn-see-EHN-see-ah pehr-MEE-teh ahl peh-ree-oh-DEES-tah neh-GAHR-seh ah ehs-kree-BEER KOHN-trah soos preen-SEE-pee-ohs EH-tee-kohs', category: 'editorial-ethics', audio: 'la-clausula-de-conciencia' },
  { spanish: 'La responsabilidad social del periodismo implica informar al público con veracidad y equilibrio', english: 'The social responsibility of journalism involves informing the public with truthfulness and balance', pronunciation: 'lah rrehs-pohn-sah-bee-lee-DAHD soh-see-AHL dehl peh-ree-oh-DEES-moh eem-PLEE-kah een-fohr-MAHR ahl POO-blee-koh kohn beh-rah-see-DAHD ee eh-kee-LEE-bree-oh', category: 'editorial-ethics', audio: 'la-responsabilidad-social' },

  // === Digital Journalism (12) ===
  { spanish: 'El periodismo de datos utiliza bases de datos masivas para encontrar historias ocultas en las cifras', english: 'Data journalism uses massive databases to find stories hidden in the numbers', pronunciation: 'ehl peh-ree-oh-DEES-moh deh DAH-tohs oo-tee-LEE-sah BAH-sehs deh DAH-tohs mah-SEE-bahs PAH-rah ehn-kohn-TRAHR ees-TOH-ree-ahs oh-KOOL-tahs ehn lahs SEE-frahs', category: 'digital-journalism', audio: 'el-periodismo-de-datos' },
  { spanish: 'La verificación de hechos combate la desinformación confirmando o desmintiendo afirmaciones públicas', english: 'Fact-checking combats disinformation by confirming or debunking public claims', pronunciation: 'lah beh-ree-fee-kah-see-OHN deh EH-chohs kohm-BAH-teh lah dehs-een-fohr-mah-see-OHN kohn-feer-MAHN-doh oh dehs-meen-tee-EHN-doh ah-feer-mah-see-OH-nehs POO-blee-kahs', category: 'digital-journalism', audio: 'la-verificacion-de-hechos' },
  { spanish: 'El clickbait utiliza titulares engañosos para generar clics sin ofrecer contenido de calidad', english: 'Clickbait uses misleading headlines to generate clicks without offering quality content', pronunciation: 'ehl kleek-BAYT oo-tee-LEE-sah tee-too-LAH-rehs ehn-gah-NYOH-sohs PAH-rah heh-neh-RAHR kleeks seen oh-freh-SEHR kohn-teh-NEE-doh deh kah-lee-DAHD', category: 'digital-journalism', audio: 'el-clickbait' },
  { spanish: 'El paywall restringe el acceso al contenido periodístico a quienes pagan una suscripción', english: 'The paywall restricts access to journalistic content to those who pay a subscription', pronunciation: 'ehl PAY-wahl rrehs-TREEN-heh ehl ahk-SEH-soh ahl kohn-teh-NEE-doh peh-ree-oh-DEES-tee-koh ah kee-EH-nehs PAH-gahn OO-nah soos-kreep-see-OHN', category: 'digital-journalism', audio: 'el-paywall' },
  { spanish: 'La suscripción digital permite a los lectores apoyar el periodismo de calidad con pagos mensuales', english: 'The digital subscription allows readers to support quality journalism with monthly payments', pronunciation: 'lah soos-kreep-see-OHN dee-hee-TAHL pehr-MEE-teh ah lohs lehk-TOH-rehs ah-poh-YAHR ehl peh-ree-oh-DEES-moh deh kah-lee-DAHD kohn PAH-gohs mehn-soo-AH-lehs', category: 'digital-journalism', audio: 'la-suscripcion-digital' },
  { spanish: 'El podcast periodístico permite profundizar en temas complejos con formato de audio largo', english: 'The journalistic podcast allows deepening into complex topics in long-form audio format', pronunciation: 'ehl POHD-kahst peh-ree-oh-DEES-tee-koh pehr-MEE-teh proh-foon-dee-SAHR ehn TEH-mahs kohm-PLEH-hohs kohn fohr-MAH-toh deh OW-dee-oh LAHR-goh', category: 'digital-journalism', audio: 'el-podcast-periodistico' },
  { spanish: 'La viralidad puede amplificar tanto noticias verdaderas como información falsa de manera exponencial', english: 'Virality can amplify both true news and false information exponentially', pronunciation: 'lah bee-rah-lee-DAHD PWEH-deh ahm-plee-fee-KAHR TAHN-toh noh-TEE-see-ahs behr-dah-DEH-rahs KOH-moh een-fohr-mah-see-OHN FAHL-sah deh mah-NEH-rah ehks-poh-nehn-see-AHL', category: 'digital-journalism', audio: 'la-viralidad' },
  { spanish: 'El algoritmo de las redes sociales determina qué noticias ve cada usuario según su historial', english: 'The social media algorithm determines which news each user sees based on their history', pronunciation: 'ehl ahl-goh-REET-moh deh lahs RREH-dehs soh-see-AH-lehs deh-tehr-MEE-nah keh noh-TEE-see-ahs beh KAH-dah oo-soo-AH-ree-oh seh-GOON soo ees-toh-ree-AHL', category: 'digital-journalism', audio: 'el-algoritmo-de-las-redes' },
  { spanish: 'La cámara de eco refuerza las creencias existentes al limitar la exposición a perspectivas diferentes', english: 'The echo chamber reinforces existing beliefs by limiting exposure to different perspectives', pronunciation: 'lah KAH-mah-rah deh EH-koh rreh-FWEHR-sah lahs kreh-EHN-see-ahs ehk-sees-TEHN-tehs ahl lee-mee-TAHR lah ehks-poh-see-see-OHN ah pehr-spehk-TEE-bahs dee-feh-REHN-tehs', category: 'digital-journalism', audio: 'la-camara-de-eco' },
  { spanish: 'El periodismo inmersivo utiliza realidad virtual para que el lector experimente la noticia en primera persona', english: 'Immersive journalism uses virtual reality so the reader experiences the news firsthand', pronunciation: 'ehl peh-ree-oh-DEES-moh een-mehr-SEE-boh oo-tee-LEE-sah rreh-ah-lee-DAHD beer-too-AHL PAH-rah keh ehl lehk-TOHR ehks-peh-ree-MEHN-teh lah noh-TEE-see-ah ehn pree-MEH-rah pehr-SOH-nah', category: 'digital-journalism', audio: 'el-periodismo-inmersivo' },
  { spanish: 'La inteligencia artificial genera borradores de noticias rutinarias como resultados deportivos y financieros', english: 'Artificial intelligence generates drafts of routine news like sports and financial results', pronunciation: 'lah een-teh-lee-HEHN-see-ah ahr-tee-fee-see-AHL heh-NEH-rah boh-rrah-DOH-rehs deh noh-TEE-see-ahs rroo-tee-NAH-ree-ahs KOH-moh rreh-sool-TAH-dohs deh-pohr-TEE-bohs ee fee-nahn-see-EH-rohs', category: 'digital-journalism', audio: 'la-inteligencia-artificial-genera' },
  { spanish: 'La transparencia algorítmica exige que los medios expliquen cómo seleccionan y priorizan las noticias', english: 'Algorithmic transparency demands that media explain how they select and prioritize news', pronunciation: 'lah trahns-pah-REHN-see-ah ahl-goh-REET-mee-kah ehk-SEE-heh keh lohs MEH-dee-ohs ehks-PLEE-kehn KOH-moh seh-lehk-see-OH-nahn ee pree-oh-REE-sahn lahs noh-TEE-see-ahs', category: 'digital-journalism', audio: 'la-transparencia-algoritmica' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L95PhraseByAudio = phraseByAudio

// === SOURCE VERIFIER (unique activity) ===

export interface SourceVerifierChallenge {
  scenario: string
  english: string
  correctAction: string
  options: string[]
}

export const SOURCE_VERIFIER_CHALLENGES: SourceVerifierChallenge[] = [
  {
    scenario: 'Un informante anónimo te envía documentos que muestran sobornos en el gobierno municipal. ¿Qué haces primero?',
    english: 'An anonymous informant sends you documents showing bribes in the municipal government. What do you do first?',
    correctAction: 'Verificar la autenticidad de los documentos con fuentes independientes',
    options: ['Publicar la noticia inmediatamente para tener la primicia', 'Verificar la autenticidad de los documentos con fuentes independientes', 'Ignorar la información porque el informante es anónimo', 'Entregar los documentos directamente a la policía'],
  },
  {
    scenario: 'Descubres que tu editor quiere suavizar una investigación sobre un anunciante importante. ¿Cómo actúas?',
    english: 'You discover that your editor wants to soften an investigation about an important advertiser. How do you act?',
    correctAction: 'Invocar la cláusula de conciencia y defender la integridad de la investigación',
    options: ['Aceptar los cambios para mantener tu empleo', 'Invocar la cláusula de conciencia y defender la integridad de la investigación', 'Publicar la versión completa en tus redes sociales personales', 'Filtrar la historia a un medio de la competencia'],
  },
  {
    scenario: 'Una fuente te pide que publiques información sin verificar a cambio de futuras exclusivas. ¿Qué decides?',
    english: 'A source asks you to publish unverified information in exchange for future exclusives. What do you decide?',
    correctAction: 'Rechazar el trato y verificar la información de manera independiente',
    options: ['Aceptar el trato porque las exclusivas son muy valiosas', 'Rechazar el trato y verificar la información de manera independiente', 'Publicar la información pero agregar la nota "sin confirmar"', 'Negociar un mejor trato con la fuente'],
  },
  {
    scenario: 'Un político demanda al periódico por una investigación sobre sus propiedades. ¿Cuál es la mejor defensa?',
    english: 'A politician sues the newspaper for an investigation about their properties. What is the best defense?',
    correctAction: 'Demostrar que la información fue verificada con múltiples fuentes documentales',
    options: ['Retirar la publicación y pedir disculpas públicas', 'Demostrar que la información fue verificada con múltiples fuentes documentales', 'Contraatacar publicando más información sobre el político', 'Pedir a la fuente que testifique revelando su identidad'],
  },
  {
    scenario: 'Encuentras un dato impactante en una base de datos pública pero no tienes segunda fuente. ¿Qué haces?',
    english: 'You find shocking data in a public database but have no second source. What do you do?',
    correctAction: 'Buscar documentos adicionales y entrevistar expertos para corroborar el hallazgo',
    options: ['Publicar el dato citando la base de datos como única fuente', 'Buscar documentos adicionales y entrevistar expertos para corroborar el hallazgo', 'Esperar a que otro medio publique la misma información', 'Descartar el dato porque solo tienes una fuente'],
  },
  {
    scenario: 'Una fotografía viral de un desastre natural podría ser falsa. ¿Cómo procedes antes de publicarla?',
    english: 'A viral photograph of a natural disaster might be fake. How do you proceed before publishing it?',
    correctAction: 'Realizar una búsqueda inversa de imagen y contactar al fotógrafo original',
    options: ['Publicarla porque ya se hizo viral y el público la ha visto', 'Realizar una búsqueda inversa de imagen y contactar al fotógrafo original', 'Añadir una nota diciendo que la foto no ha sido verificada', 'No publicar ninguna foto hasta que termine el desastre'],
  },
  {
    scenario: 'Un denunciante interno de una farmacéutica te revela datos sobre efectos secundarios ocultos. ¿Cómo proteges la fuente?',
    english: 'A pharmaceutical whistleblower reveals hidden side-effect data to you. How do you protect the source?',
    correctAction: 'Usar comunicaciones encriptadas y nunca almacenar la identidad de la fuente en los registros del periódico',
    options: ['Pedir a la fuente que firme un acuerdo de confidencialidad con el periódico', 'Usar comunicaciones encriptadas y nunca almacenar la identidad de la fuente en los registros del periódico', 'Revelar la identidad de la fuente al abogado del periódico únicamente', 'Publicar la historia sin citar ninguna fuente para mayor protección'],
  },
]

// === LESSON DATA ===

export const L95Data: LessonData = {
  id: 'L9.5',
  hero: {
    lessonId: 'L9.5',
    title: 'Journalism & Investigative Reporting',
    subtitle: 'Newsroom operations, investigative techniques, source protection, and editorial ethics',
    description: 'Master the vocabulary of professional journalism — from newsroom operations and investigative techniques to editorial ethics and digital media. Learn how reporters protect sources, verify facts, and uphold press freedom in the Spanish-speaking world.',
    image: '/images/L9.5/L9.5.jpg',
    gradient: 'from-orange-800/65 via-amber-700/55 to-rose-700/65',
    accentColor: 'orange-200',
  },

  objectives: [
    { icon: '📰', title: 'Newsroom Operations', desc: 'Learn vocabulary for the sala de redacción, deadlines, press conferences, and editorial roles.' },
    { icon: '🔍', title: 'Investigative Techniques', desc: 'Master terms for source protection, data cross-referencing, whistleblowers, and document verification.' },
    { icon: '⚖️', title: 'Editorial Ethics', desc: 'Discuss objectivity, bias, right of reply, corrections, and the social responsibility of journalism.' },
    { icon: '💻', title: 'Digital Journalism', desc: 'Explore data journalism, fact-checking, clickbait, paywalls, and algorithmic transparency.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.4', label: 'News & Current Events', detail: 'L4.4 introduced headlines, opinions, and reporting verbs. Now dive into the professional world behind those headlines.' },
    { fromLesson: 'L7.3', label: 'Media Literacy', detail: 'L7.3 covered media analysis and critical reading. Now learn the newsroom processes that shape the news you consume.' },
    { fromLesson: 'L5.4', label: 'Argumentation & Persuasion', detail: 'L5.4 taught persuasive techniques. Now see how editorial ethics intersect with argumentation in professional journalism.' },
  ],

  sectionTransitions: [
    { afterSection: 'newsroom-operations', text: 'You know how the newsroom works! Now let\'s explore investigative techniques.' },
    { afterSection: 'investigative-techniques', text: 'Investigative tools mastered! Let\'s examine the ethical boundaries of journalism.' },
    { afterSection: 'editorial-ethics', text: 'Ethics understood! Now let\'s dive into the digital transformation of journalism.' },
    { afterSection: 'dialogues', text: 'Great newsroom conversations! Let\'s explore the culture of press freedom.' },
    { afterSection: 'cultural', text: 'Now test your journalistic instincts in the Source Verifier activity!' },
    { afterSection: 'source-verifier', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La fuente dijo que...', english: 'The source said that...' },
    { spanish: 'Según nuestras investigaciones...', english: 'According to our investigations...' },
    { spanish: 'El medio publicó...', english: 'The outlet published...' },
    { spanish: 'Se ha confirmado que...', english: 'It has been confirmed that...' },
    { spanish: 'La información fue verificada por...', english: 'The information was verified by...' },
    { spanish: 'El derecho a saber...', english: 'The right to know...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La sala de redacción está en estado de alerta máxima', pronunciation: 'lah SAH-lah deh rreh-dahk-see-OHN ehs-TAH ehn ehs-TAH-doh deh ah-LEHR-tah MAHK-see-mah', english: 'The newsroom is on maximum alert', audio: 'la-sala-de-redaccion-esta-en-estado-de-alerta-maxima', tip: '"Redacción" has the stress on the final syllable: redac-CIÓN. The double R at the beginning is a strong trill.' },
    { spanish: 'La fuente confidencial exige anonimato absoluto', pronunciation: 'lah FWEHN-teh kohn-fee-dehn-see-AHL ehk-SEE-heh ah-noh-nee-MAH-toh ahb-soh-LOO-toh', english: 'The confidential source demands absolute anonymity', audio: 'la-fuente-confidencial-exige-anonimato-absoluto', tip: '"Confidencial" stresses the last syllable: confiden-CIAL. Note how "exige" uses the soft G before E: ek-SEE-heh.' },
    { spanish: 'El periodismo de datos revela patrones ocultos en las cifras', pronunciation: 'ehl peh-ree-oh-DEES-moh deh DAH-tohs rreh-BEH-lah pah-TROH-nehs oh-KOOL-tohs ehn lahs SEE-frahs', english: 'Data journalism reveals hidden patterns in the numbers', audio: 'el-periodismo-de-datos-revela-patrones-ocultos-en-las-cifras', tip: '"Periodismo" places stress on the third-to-last syllable: perio-DIS-mo. This is a key word for this entire lesson!' },
    { spanish: 'La verificación de hechos es fundamental para combatir la desinformación', pronunciation: 'lah beh-ree-fee-kah-see-OHN deh EH-chohs ehs foon-dah-mehn-TAHL PAH-rah kohm-bah-TEER lah dehs-een-fohr-mah-see-OHN', english: 'Fact-checking is fundamental to combating disinformation', audio: 'la-verificacion-de-hechos-es-fundamental-para-combatir-la-desinformacion', tip: '"Verificación" and "desinformación" both end in -CIÓN, always stressed. "Hechos" has the hard CH sound: EH-chohs.' },
    { spanish: 'El sesgo editorial puede distorsionar la percepción pública de la realidad', pronunciation: 'ehl SEHS-goh eh-dee-toh-ree-AHL PWEH-deh dees-tohr-see-oh-NAHR lah pehr-sehp-see-OHN POO-blee-kah deh lah rreh-ah-lee-DAHD', english: 'Editorial bias can distort the public perception of reality', audio: 'el-sesgo-editorial-puede-distorsionar-la-percepcion-publica-de-la-realidad', tip: '"Sesgo" is pronounced SEHS-goh with a hard G. "Editorial" stresses the last syllable: edito-RIAL.' },
    { spanish: 'El corresponsal de guerra transmite la noticia desde la primera línea del conflicto', pronunciation: 'ehl koh-rrehs-pohn-SAHL deh GEH-rrah trahns-MEE-teh lah noh-TEE-see-ah DEHS-deh lah pree-MEH-rah LEE-neh-ah dehl kohn-FLEEK-toh', english: 'The war correspondent broadcasts the news from the front line of the conflict', audio: 'el-corresponsal-de-guerra-transmite-la-noticia-desde-la-primera-linea-del-conflicto', tip: '"Corresponsal" stresses the last syllable: correspon-SAL. "Guerra" has the double R trill: GEH-rrah.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'newsroom-operations', label: 'Newsroom Operations' },
    { id: 'investigative-techniques', label: 'Investigative Techniques' },
    { id: 'editorial-ethics', label: 'Editorial Ethics' },
    { id: 'digital-journalism', label: 'Digital Journalism' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'source-verifier', label: 'Source Verifier' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'newsroom-operations',
      title: 'Newsroom Operations — La Sala de Redacción',
      description: 'Vocabulary for newsroom roles, deadlines, press conferences, and editorial processes.',
      tabs: [
        { label: 'Roles & Structure', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'newsroom-operations').slice(0, 6) },
        { label: 'News Production', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'newsroom-operations').slice(6) },
      ],
    },
    {
      id: 'investigative-techniques',
      title: 'Investigative Techniques — Técnicas de Investigación',
      description: 'Source protection, data cross-referencing, whistleblowers, and document verification.',
      tabs: [
        { label: 'Sources & Protection', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'investigative-techniques').slice(0, 6) },
        { label: 'Methods & Evidence', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'investigative-techniques').slice(6) },
      ],
    },
    {
      id: 'editorial-ethics',
      title: 'Editorial Ethics — Ética Editorial',
      description: 'Objectivity, bias, right of reply, corrections, and the social responsibility of journalism.',
      tabs: [
        { label: 'Standards & Rights', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'editorial-ethics').slice(0, 6) },
        { label: 'Responsibility & Limits', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'editorial-ethics').slice(6) },
      ],
    },
    {
      id: 'digital-journalism',
      title: 'Digital Journalism — Periodismo Digital',
      description: 'Data journalism, fact-checking, clickbait, paywalls, algorithms, and the digital transformation of media.',
      tabs: [
        { label: 'Tools & Trends', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'digital-journalism').slice(0, 6) },
        { label: 'Impact & Challenges', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'digital-journalism').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Journalism Vocabulary — Key Stress Patterns',
      content: 'Most journalism-related words ending in -ción are stressed on the last syllable: redac-CIÓN, investiga-CIÓN, informa-CIÓN. Words ending in -ismo stress the penultimate: perio-DIS-mo, sensaciona-LIS-mo. Master these patterns and you\'ll sound professional.',
      example: 'La redacción publicó la investigación sobre la desinformación.',
    },
    {
      title: 'The Double R in Media Spanish',
      content: 'Many key journalism words use the strong trilled RR: corresponsal, corroboración, autorregulación. Remember: RR at the start of a word or after N/L/S is always the strong trill, even when written with a single R: redacción, reportero, réplica.',
      example: 'El reportero corroboró la información con el corresponsal.',
      reviewFrom: 'L4.4',
    },
    {
      title: 'Legal & Ethical Terms',
      content: 'Many ethical terms come from Latin and have cognates in English: "presunción" (presumption), "cláusula" (clause), "conflicto" (conflict). However, pronunciation differs significantly. Focus on Spanish stress: presun-CIÓN, CLÁU-su-la, con-FLIC-to.',
      example: 'La presunción de inocencia es un principio fundamental del derecho.',
    },
    {
      title: 'Digital Media Loanwords',
      content: 'Spanish journalism adopts English tech terms with Spanish pronunciation: "clickbait" (kleek-BAYT), "paywall" (PAY-wahl), "podcast" (POHD-kahst). Some have Spanish equivalents: "streaming" = "transmisión en vivo," "fake news" = "noticias falsas." Professional journalists prefer Spanish terms when they exist.',
      example: 'El paywall del periódico protege el contenido del clickbait.',
    },
  ],

  flashcardGroups: [
    {
      key: 'newsroom',
      label: 'Newsroom Operations',
      audioKeys: ['la-sala-de-redaccion', 'el-cierre-de-edicion', 'la-nota-de-ultima-hora', 'el-comunicado-de-prensa', 'el-corresponsal-de-guerra', 'el-jefe-de-redaccion', 'la-conferencia-de-prensa', 'la-columna-de-opinion', 'el-reportero-grafico', 'la-agencia-de-noticias', 'la-primicia', 'el-editorial'],
    },
    {
      key: 'investigative',
      label: 'Investigative Techniques',
      audioKeys: ['la-fuente-confidencial', 'el-derecho-al-anonimato', 'el-acceso-a-la-informacion', 'la-solicitud-de-transparencia', 'cruzar-datos-de-diferentes', 'el-denunciante-interno', 'la-investigacion-encubierta', 'la-cadena-de-custodia', 'la-corroboracion-exige', 'el-seguimiento-del-dinero', 'la-filtracion-de-documentos', 'el-periodista-de-investigacion'],
    },
    {
      key: 'ethics-digital',
      label: 'Ethics & Digital',
      audioKeys: ['la-objetividad-periodistica', 'el-sesgo-editorial', 'el-derecho-de-replica', 'la-fe-de-erratas', 'la-linea-editorial', 'el-periodismo-de-datos', 'la-verificacion-de-hechos', 'el-clickbait', 'el-paywall', 'la-suscripcion-digital'],
    },
  ],

  matchPairs: [
    { left: 'La sala de redacción', right: 'The newsroom' },
    { left: 'La fuente confidencial', right: 'The confidential source' },
    { left: 'El sesgo editorial', right: 'Editorial bias' },
    { left: 'La verificación de hechos', right: 'Fact-checking' },
    { left: 'El derecho de réplica', right: 'Right of reply' },
    { left: 'El corresponsal de guerra', right: 'War correspondent' },
    { left: 'La fe de erratas', right: 'Correction notice' },
    { left: 'El periodismo de datos', right: 'Data journalism' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Ethics vs. Techniques',
      instruction: 'Is this concept an ethical principle or an investigative technique?',
      buckets: ['Ethical Principle ⚖️', 'Investigative Technique 🔍'],
      items: [
        { text: 'La objetividad periodística', bucket: 'Ethical Principle ⚖️' },
        { text: 'El derecho de réplica', bucket: 'Ethical Principle ⚖️' },
        { text: 'La presunción de inocencia', bucket: 'Ethical Principle ⚖️' },
        { text: 'La cláusula de conciencia', bucket: 'Ethical Principle ⚖️' },
        { text: 'Cruzar datos', bucket: 'Investigative Technique 🔍' },
        { text: 'La investigación encubierta', bucket: 'Investigative Technique 🔍' },
        { text: 'La corroboración de fuentes', bucket: 'Investigative Technique 🔍' },
        { text: 'El seguimiento del dinero', bucket: 'Investigative Technique 🔍' },
      ],
    },
    {
      title: 'Traditional vs. Digital Journalism',
      instruction: 'Does this belong to traditional or digital journalism?',
      buckets: ['Traditional Journalism 📰', 'Digital Journalism 💻'],
      items: [
        { text: 'La sala de redacción', bucket: 'Traditional Journalism 📰' },
        { text: 'El cierre de edición', bucket: 'Traditional Journalism 📰' },
        { text: 'La conferencia de prensa', bucket: 'Traditional Journalism 📰' },
        { text: 'El comunicado de prensa', bucket: 'Traditional Journalism 📰' },
        { text: 'El clickbait', bucket: 'Digital Journalism 💻' },
        { text: 'El paywall', bucket: 'Digital Journalism 💻' },
        { text: 'El periodismo de datos', bucket: 'Digital Journalism 💻' },
        { text: 'El algoritmo de las redes', bucket: 'Digital Journalism 💻' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-newsroom',
      title: 'Investigative Newsroom — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Luciana', text: '¡Llegó la filtración que esperábamos! Tenemos documentos sobre los contratos del gobierno provincial.', audio: '/audio/L9.5/phrases/d1-line1.mp3' },
        { speaker: 'Martín', text: '¿De quién viene la fuente? Necesitamos verificar la autenticidad antes de avanzar.', audio: '/audio/L9.5/phrases/d1-line2.mp3' },
        { speaker: 'Luciana', text: 'Es un denunciante interno del ministerio. Exige anonimato absoluto. Usamos comunicaciones encriptadas.', audio: '/audio/L9.5/phrases/d1-line3.mp3' },
        { speaker: 'Martín', text: 'Bien. Necesitamos corroborar cada dato con al menos dos fuentes independientes antes de publicar.', audio: '/audio/L9.5/phrases/d1-line4.mp3' },
        { speaker: 'Luciana', text: 'Ya crucé los datos con la base de contrataciones públicas. Los montos coinciden con lo que dice la fuente.', audio: '/audio/L9.5/phrases/d1-line5.mp3', annotations: [{ phrase: 'crucé los datos', fromLesson: 'L4.4', note: 'Data cross-referencing builds on news reporting vocabulary from L4.4' }] },
        { speaker: 'Martín', text: '¿Y el abogado del diario ya revisó los riesgos legales? No quiero una demanda por difamación.', audio: '/audio/L9.5/phrases/d1-line6.mp3' },
        { speaker: 'Luciana', text: 'Sí, dice que si tenemos la cadena de custodia documental completa, estamos protegidos legalmente.', audio: '/audio/L9.5/phrases/d1-line7.mp3' },
        { speaker: 'Martín', text: 'Perfecto. Preparemos un borrador para la reunión editorial de mañana. Esto podría ser la primicia del año.', audio: '/audio/L9.5/phrases/d1-line8.mp3' },
        { speaker: 'Luciana', text: '¿Pedimos el derecho de réplica al gobierno antes de publicar?', audio: '/audio/L9.5/phrases/d1-line9.mp3' },
        { speaker: 'Martín', text: 'Siempre. La ética periodística exige que les demos la oportunidad de responder. Es nuestra obligación profesional.', audio: '/audio/L9.5/phrases/d1-line10.mp3' },
        { speaker: 'Luciana', text: 'De acuerdo. Enviaré las preguntas al portavoz del ministerio con un plazo de 48 horas para responder.', audio: '/audio/L9.5/phrases/d1-line11.mp3' },
        { speaker: 'Martín', text: 'Y que el equipo de datos prepare las visualizaciones. Una buena infografía vale más que mil palabras.', audio: '/audio/L9.5/phrases/d1-line12.mp3' },
        { speaker: 'Luciana', text: 'El cierre de edición es el viernes. Tenemos tres días para tener todo listo.', audio: '/audio/L9.5/phrases/d1-line13.mp3' },
        { speaker: 'Martín', text: 'Vamos a hacer periodismo como debe ser: riguroso, ético y sin miedo. Esta historia importa.', audio: '/audio/L9.5/phrases/d1-line14.mp3' },
        { speaker: 'Luciana', text: 'Así es. El público tiene derecho a saber cómo se gastan sus impuestos.', audio: '/audio/L9.5/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-press-freedom',
      title: 'Press Freedom Conference — Ciudad de México',
      location: 'Mexico City',
      lines: [
        { speaker: 'Dr. Reyes', text: 'Bienvenidos a la Conferencia Internacional sobre Libertad de Prensa. México enfrenta una crisis de violencia contra periodistas.', audio: '/audio/L9.5/phrases/d2-line1.mp3' },
        { speaker: 'Carmen', text: 'Doctor Reyes, ¿cómo afecta la autocensura al periodismo investigativo en la región?', audio: '/audio/L9.5/phrases/d2-line2.mp3' },
        { speaker: 'Dr. Reyes', text: 'Muchos periodistas evitan temas de narcotráfico y corrupción por miedo a represalias. La autocensura mata historias antes de nacer.', audio: '/audio/L9.5/phrases/d2-line3.mp3' },
        { speaker: 'Carmen', text: '¿Qué papel juegan las organizaciones internacionales en la protección de periodistas amenazados?', audio: '/audio/L9.5/phrases/d2-line4.mp3' },
        { speaker: 'Dr. Reyes', text: 'Son fundamentales. Ofrecen refugio temporal, asesoría legal y presión diplomática sobre gobiernos que no protegen a la prensa.', audio: '/audio/L9.5/phrases/d2-line5.mp3', annotations: [{ phrase: 'presión diplomática', fromLesson: 'L7.3', note: 'International pressure connects to media literacy concepts from L7.3' }] },
        { speaker: 'Carmen', text: '¿Y el periodismo digital ha mejorado o empeorado la situación?', audio: '/audio/L9.5/phrases/d2-line6.mp3' },
        { speaker: 'Dr. Reyes', text: 'Ambas cosas. Las redes sociales democratizan la información, pero también amplifican la desinformación y las amenazas digitales.', audio: '/audio/L9.5/phrases/d2-line7.mp3' },
        { speaker: 'Carmen', text: 'En su experiencia, ¿cuál es la herramienta más importante para un periodista de investigación?', audio: '/audio/L9.5/phrases/d2-line8.mp3' },
        { speaker: 'Dr. Reyes', text: 'La paciencia y el rigor. Una buena investigación puede tomar meses. No hay atajos para la verdad.', audio: '/audio/L9.5/phrases/d2-line9.mp3' },
        { speaker: 'Carmen', text: '¿Cómo ve el futuro del periodismo en América Latina?', audio: '/audio/L9.5/phrases/d2-line10.mp3' },
        { speaker: 'Dr. Reyes', text: 'Con esperanza cautelosa. Hay una nueva generación de periodistas que usan datos y tecnología para hacer investigaciones que antes eran imposibles.', audio: '/audio/L9.5/phrases/d2-line11.mp3' },
        { speaker: 'Carmen', text: '¿Algún consejo para los jóvenes que quieren dedicarse al periodismo investigativo?', audio: '/audio/L9.5/phrases/d2-line12.mp3' },
        { speaker: 'Dr. Reyes', text: 'Aprendan periodismo de datos, protejan siempre a sus fuentes, y nunca olviden que su trabajo sirve a la sociedad, no al poder.', audio: '/audio/L9.5/phrases/d2-line13.mp3' },
        { speaker: 'Carmen', text: 'Gracias, doctor Reyes. Sus palabras son inspiración para todos los que creemos en el poder del periodismo libre.', audio: '/audio/L9.5/phrases/d2-line14.mp3' },
        { speaker: 'Dr. Reyes', text: 'Gracias a ustedes. Mientras haya periodistas valientes, la democracia tiene futuro.', audio: '/audio/L9.5/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience an investigative newsroom in Buenos Aires working on a corruption exposé and a press freedom conference in Mexico City discussing threats to journalism.',

  culturalNotes: [
    {
      title: 'El Periodismo Investigativo en América Latina',
      content: 'Latin America has produced some of the world\'s bravest investigative journalists. From the "Panama Papers" collaboration involving reporters across the continent, to independent outlets like El Faro (El Salvador) and Animal Político (Mexico), Latin American journalism has exposed corruption at the highest levels. However, it comes at a cost: the region is one of the most dangerous for journalists, with Mexico, Colombia, and Honduras ranking among the deadliest countries for press workers.',
    },
    {
      title: 'La Libertad de Prensa y la Censura',
      content: 'Press freedom varies dramatically across the Spanish-speaking world. Uruguay and Costa Rica rank among the freest, while Cuba, Venezuela, and Nicaragua face severe restrictions. Even in democracies, "lawfare" — using lawsuits to silence journalists — has become a growing threat. Understanding these dynamics is essential for anyone who wants to discuss media and democracy in Spanish.',
    },
    {
      title: 'El Periodismo de Datos en Español',
      content: 'Data journalism is booming in Latin America. Organizations like Ojo Público (Peru), CIPER (Chile), and Chequeado (Argentina) use open data to hold governments accountable. Spain\'s El Confidencial and Civio also lead in European Spanish-language data journalism. "Seguir el dinero" (follow the money) is the motto of a new generation of journalists who use spreadsheets as powerfully as they use words.',
    },
  ],
  culturalGradient: 'from-orange-50 to-amber-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La sala de redacción" is:', options: ['A printing press', 'The newsroom where editorial decisions are made', 'A journalism school', 'A press conference room'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La fuente ___ exige anonimato" (confidential)', answer: 'confidencial' },
    { id: 3, type: 'mc', text: '"El cierre de edición" refers to:', options: ['Closing the newspaper permanently', 'The deadline for submitting articles', 'Editing a finished article', 'Censoring content'], answer: 1 },
    { id: 4, type: 'tf', text: '"La fe de erratas" is a section where the newspaper corrects previous errors.', answer: true },
    { id: 5, type: 'mc', text: '"Cruzar datos" means to:', options: ['Delete data', 'Cross-reference data from different sources', 'Encrypt data', 'Publish raw data'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "El ___ editorial distorsiona la información" (bias)', answer: 'sesgo' },
    { id: 7, type: 'mc', text: '"El clickbait" in Spanish journalism refers to:', options: ['Quality headlines', 'Misleading headlines designed to generate clicks', 'Breaking news alerts', 'Investigative reports'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what did Luciana cross-reference?', options: ['Phone records', 'Public procurement database data', 'Social media posts', 'Bank statements'], answer: 1 },
    { id: 9, type: 'tf', text: '"La cláusula de conciencia" allows a journalist to refuse to write against their ethical principles.', answer: true },
    { id: 10, type: 'mc', text: '"El denunciante interno" is equivalent to:', options: ['An editor', 'A whistleblower', 'A columnist', 'A photographer'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ de hechos combate la desinformación" (verification)', answer: 'verificación' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what did Dr. Reyes say kills stories before they are born?', options: ['Censorship laws', 'Self-censorship', 'Lack of funding', 'Editorial bias'], answer: 1 },
    { id: 13, type: 'mc', text: '"La primicia" means:', options: ['The editorial', 'A scoop — publishing a story before competitors', 'A correction', 'An opinion column'], answer: 1 },
    { id: 14, type: 'tf', text: 'Data journalism ("periodismo de datos") uses databases to discover hidden stories.', answer: true },
    { id: 15, type: 'mc', text: '"El derecho de réplica" gives the right to:', options: ['Publish without editing', 'Respond to erroneous information about oneself', 'Access classified documents', 'Remain anonymous'], answer: 1 },
  ],

  audioBase: '/audio/L9.5/phrases',

  uniqueActivity: {
    id: 'SourceVerifierL95',
    sectionId: 'source-verifier',
    sectionColor: 'bg-orange-50/40',
    sectionBorder: 'border-orange-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'newsroom-operations': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'investigative-techniques': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'editorial-ethics': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'digital-journalism': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'source-verifier': { bg: 'bg-orange-50/40', border: 'border-orange-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
