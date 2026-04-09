import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Content Strategy (12) ===
  { spanish: 'El calendario de contenidos organiza las publicaciones por fecha, plataforma y objetivo de cada post', english: 'The content calendar organizes posts by date, platform, and objective of each post', pronunciation: 'ehl kah-lehn-DAH-ree-oh deh kohn-teh-NEE-dohs ohr-gah-NEE-sah lahs poo-blee-kah-see-OH-nehs pohr FEH-chah plah-tah-FOHR-mah ee ohb-heh-TEE-boh deh KAH-dah pohst', category: 'content-strategy', audio: 'el-calendario-de-contenidos' },
  { spanish: 'El engagement mide el nivel de interacción entre la audiencia y el contenido de la marca', english: 'Engagement measures the level of interaction between the audience and the brand\'s content', pronunciation: 'ehl ehn-GAYSH-mehnt MEE-deh ehl nee-BEHL deh een-teh-rahk-see-OHN EHN-treh lah ow-dee-EHN-see-ah ee ehl kohn-teh-NEE-doh deh lah MAHR-kah', category: 'content-strategy', audio: 'el-engagement' },
  { spanish: 'El alcance orgánico se refiere a la cantidad de personas que ven el contenido sin publicidad pagada', english: 'Organic reach refers to the number of people who see the content without paid advertising', pronunciation: 'ehl ahl-KAHN-seh ohr-GAH-nee-koh seh rreh-fee-EH-reh ah lah kahn-tee-DAHD deh pehr-SOH-nahs keh behn ehl kohn-teh-NEE-doh seen poo-blee-see-DAHD pah-GAH-dah', category: 'content-strategy', audio: 'el-alcance-organico' },
  { spanish: 'La segmentación de audiencia divide al público en grupos según sus intereses y comportamientos', english: 'Audience segmentation divides the public into groups based on their interests and behaviors', pronunciation: 'lah sehg-mehn-tah-see-OHN deh ow-dee-EHN-see-ah dee-BEE-deh ahl POO-blee-koh ehn GROO-pohs seh-GOON soos een-teh-REH-sehs ee kohm-pohr-tah-mee-EHN-tohs', category: 'content-strategy', audio: 'la-segmentacion-de-audiencia' },
  { spanish: 'El contenido viral se difunde rápidamente a través de las redes sociales gracias al alto engagement', english: 'Viral content spreads quickly through social media thanks to high engagement', pronunciation: 'ehl kohn-teh-NEE-doh bee-RAHL seh dee-FOON-deh RRAH-pee-dah-MEHN-teh ah trah-BEHS deh lahs RREH-dehs soh-see-AH-lehs GRAH-see-ahs ahl AHL-toh ehn-GAYSH-mehnt', category: 'content-strategy', audio: 'el-contenido-viral' },
  { spanish: 'El storytelling de marca conecta emocionalmente con la audiencia contando la historia detrás del producto', english: 'Brand storytelling connects emotionally with the audience by telling the story behind the product', pronunciation: 'ehl STOHR-ee-teh-leeng deh MAHR-kah koh-NEHK-tah eh-moh-see-oh-NAHL-mehn-teh kohn lah ow-dee-EHN-see-ah kohn-TAHN-doh lah ees-TOH-ree-ah deh-TRAHS dehl proh-DOOK-toh', category: 'content-strategy', audio: 'el-storytelling-de-marca' },
  { spanish: 'La estrategia omnicanal asegura una experiencia coherente del usuario en todas las plataformas', english: 'The omnichannel strategy ensures a coherent user experience across all platforms', pronunciation: 'lah ehs-trah-TEH-hee-ah ohm-nee-kah-NAHL ah-seh-GOO-rah OO-nah ehks-peh-ree-EHN-see-ah koh-eh-REHN-teh dehl oo-soo-AH-ree-oh ehn TOH-dahs lahs plah-tah-FOHR-mahs', category: 'content-strategy', audio: 'la-estrategia-omnicanal' },
  { spanish: 'El contenido generado por usuarios aporta autenticidad y construye comunidad alrededor de la marca', english: 'User-generated content provides authenticity and builds community around the brand', pronunciation: 'ehl kohn-teh-NEE-doh heh-neh-RAH-doh pohr oo-soo-AH-ree-ohs ah-POHR-tah ow-tehn-tee-see-DAHD ee kohns-TROO-yeh koh-moo-nee-DAHD ahl-rreh-deh-DOHR deh lah MAHR-kah', category: 'content-strategy', audio: 'el-contenido-generado' },
  { spanish: 'El tono de voz de la marca define cómo se comunica con su audiencia en cada plataforma', english: 'The brand\'s tone of voice defines how it communicates with its audience on each platform', pronunciation: 'ehl TOH-noh deh bohs deh lah MAHR-kah deh-FEE-neh KOH-moh seh koh-moo-NEE-kah kohn soo ow-dee-EHN-see-ah ehn KAH-dah plah-tah-FOHR-mah', category: 'content-strategy', audio: 'el-tono-de-voz' },
  { spanish: 'La curación de contenidos selecciona y comparte material relevante de otras fuentes para la audiencia', english: 'Content curation selects and shares relevant material from other sources for the audience', pronunciation: 'lah koo-rah-see-OHN deh kohn-teh-NEE-dohs seh-lehk-see-OH-nah ee kohm-PAHR-teh mah-teh-ree-AHL rreh-leh-BAHN-teh deh OH-trahs FWEHN-tehs PAH-rah lah ow-dee-EHN-see-ah', category: 'content-strategy', audio: 'la-curacion-de-contenidos' },
  { spanish: 'El marketing de contenidos atrae clientes potenciales ofreciendo información valiosa en lugar de publicidad directa', english: 'Content marketing attracts potential clients by offering valuable information instead of direct advertising', pronunciation: 'ehl MAHR-keh-teeng deh kohn-teh-NEE-dohs ah-TRAH-eh klee-EHN-tehs poh-tehn-see-AH-lehs oh-freh-see-EHN-doh een-fohr-mah-see-OHN bah-lee-OH-sah ehn loo-GAHR deh poo-blee-see-DAHD dee-REHK-tah', category: 'content-strategy', audio: 'el-marketing-de-contenidos' },
  { spanish: 'La publicación cruzada adapta el mismo mensaje a diferentes formatos según cada red social', english: 'Cross-posting adapts the same message to different formats according to each social network', pronunciation: 'lah poo-blee-kah-see-OHN kroo-SAH-dah ah-DAHP-tah ehl MEES-moh mehn-SAH-heh ah dee-feh-REHN-tehs fohr-MAH-tohs seh-GOON KAH-dah rrehd soh-see-AHL', category: 'content-strategy', audio: 'la-publicacion-cruzada' },

  // === Analytics & Metrics (12) ===
  { spanish: 'La tasa de conversión mide el porcentaje de visitantes que completan una acción deseada', english: 'The conversion rate measures the percentage of visitors who complete a desired action', pronunciation: 'lah TAH-sah deh kohn-behr-see-OHN MEE-deh ehl pohr-sehn-TAH-heh deh bee-see-TAHN-tehs keh kohm-PLEH-tahn OO-nah ahk-see-OHN deh-seh-AH-dah', category: 'analytics-metrics', audio: 'la-tasa-de-conversion' },
  { spanish: 'El retorno de inversión calcula cuánto dinero genera cada dólar invertido en marketing', english: 'Return on investment calculates how much money each dollar invested in marketing generates', pronunciation: 'ehl rreh-TOHR-noh deh een-behr-see-OHN kahl-KOO-lah KWAHN-toh dee-NEH-roh heh-NEH-rah KAH-dah DOH-lahr een-behr-TEE-doh ehn MAHR-keh-teeng', category: 'analytics-metrics', audio: 'el-retorno-de-inversion' },
  { spanish: 'Las impresiones cuentan el número total de veces que se muestra un contenido en pantalla', english: 'Impressions count the total number of times content is displayed on screen', pronunciation: 'lahs eem-preh-see-OH-nehs KWEHN-tahn ehl NOO-meh-roh toh-TAHL deh BEH-sehs keh seh MWEHS-trah oon kohn-teh-NEE-doh ehn pahn-TAH-yah', category: 'analytics-metrics', audio: 'las-impresiones' },
  { spanish: 'El costo por clic determina cuánto paga el anunciante cada vez que alguien hace clic en su anuncio', english: 'Cost per click determines how much the advertiser pays each time someone clicks on their ad', pronunciation: 'ehl KOHS-toh pohr kleek deh-tehr-MEE-nah KWAHN-toh PAH-gah ehl ah-noon-see-AHN-teh KAH-dah behs keh AHL-gee-ehn AH-seh kleek ehn soo ah-NOON-see-oh', category: 'analytics-metrics', audio: 'el-costo-por-clic' },
  { spanish: 'El embudo de ventas visualiza el recorrido del cliente desde el descubrimiento hasta la compra final', english: 'The sales funnel visualizes the customer journey from discovery to final purchase', pronunciation: 'ehl ehm-BOO-noh deh BEHN-tahs bee-soo-ah-LEE-sah ehl rreh-koh-RREE-doh dehl klee-EHN-teh DEHS-deh ehl dehs-koo-bree-mee-EHN-toh AHS-tah lah KOHM-prah fee-NAHL', category: 'analytics-metrics', audio: 'el-embudo-de-ventas' },
  { spanish: 'Los indicadores clave de rendimiento miden el éxito de las campañas según objetivos específicos', english: 'Key performance indicators measure the success of campaigns according to specific objectives', pronunciation: 'lohs een-dee-kah-DOH-rehs KLAH-beh deh rrehn-dee-mee-EHN-toh MEE-dehn ehl EHK-see-toh deh lahs kahm-PAH-nyahs seh-GOON ohb-heh-TEE-bohs ehs-peh-SEE-fee-kohs', category: 'analytics-metrics', audio: 'los-indicadores-clave' },
  { spanish: 'La tasa de rebote indica el porcentaje de visitantes que abandonan el sitio sin interactuar', english: 'The bounce rate indicates the percentage of visitors who leave the site without interacting', pronunciation: 'lah TAH-sah deh rreh-BOH-teh een-DEE-kah ehl pohr-sehn-TAH-heh deh bee-see-TAHN-tehs keh ah-bahn-DOH-nahn ehl SEE-tee-oh seen een-teh-rahk-too-AHR', category: 'analytics-metrics', audio: 'la-tasa-de-rebote' },
  { spanish: 'El valor de vida del cliente estima cuánto gastará un cliente durante toda su relación con la marca', english: 'Customer lifetime value estimates how much a customer will spend during their entire relationship with the brand', pronunciation: 'ehl bah-LOHR deh BEE-dah dehl klee-EHN-teh ehs-TEE-mah KWAHN-toh gahs-tah-RAH oon klee-EHN-teh doo-RAHN-teh TOH-dah soo rreh-lah-see-OHN kohn lah MAHR-kah', category: 'analytics-metrics', audio: 'el-valor-de-vida' },
  { spanish: 'Las métricas de vanidad como los seguidores no siempre reflejan el impacto real del negocio', english: 'Vanity metrics like followers do not always reflect the real business impact', pronunciation: 'lahs MEH-tree-kahs deh bah-nee-DAHD KOH-moh lohs seh-gee-DOH-rehs noh see-EHM-preh rreh-FLEH-hahn ehl eem-PAHK-toh rreh-AHL dehl neh-GOH-see-oh', category: 'analytics-metrics', audio: 'las-metricas-de-vanidad' },
  { spanish: 'La atribución de conversiones identifica qué canal de marketing generó cada venta', english: 'Conversion attribution identifies which marketing channel generated each sale', pronunciation: 'lah ah-tree-boo-see-OHN deh kohn-behr-see-OH-nehs ee-dehn-tee-FEE-kah keh kah-NAHL deh MAHR-keh-teeng heh-neh-ROH KAH-dah BEHN-tah', category: 'analytics-metrics', audio: 'la-atribucion-de-conversiones' },
  { spanish: 'El panel de control centraliza todas las métricas importantes en una sola vista para tomar decisiones', english: 'The dashboard centralizes all important metrics in a single view for decision-making', pronunciation: 'ehl pah-NEHL deh kohn-TROHL sehn-trah-LEE-sah TOH-dahs lahs MEH-tree-kahs eem-pohr-TAHN-tehs ehn OO-nah SOH-lah BEES-tah PAH-rah toh-MAHR deh-see-see-OH-nehs', category: 'analytics-metrics', audio: 'el-panel-de-control' },
  { spanish: 'La prueba A/B compara dos versiones de contenido para determinar cuál funciona mejor', english: 'A/B testing compares two versions of content to determine which performs better', pronunciation: 'lah proo-EH-bah AH BEH kohm-PAH-rah dohs behr-see-OH-nehs deh kohn-teh-NEE-doh PAH-rah deh-tehr-mee-NAHR kwahl foon-see-OH-nah meh-HOHR', category: 'analytics-metrics', audio: 'la-prueba-ab' },

  // === Influencer Marketing (12) ===
  { spanish: 'El influencer de nicho tiene una audiencia pequeña pero muy comprometida con un tema específico', english: 'The niche influencer has a small but highly engaged audience on a specific topic', pronunciation: 'ehl een-floo-EHN-sehr deh NEE-choh tee-EH-neh OO-nah ow-dee-EHN-see-ah peh-KEH-nyah PEH-roh moo-ee kohm-proh-meh-TEE-dah kohn oon TEH-mah ehs-peh-SEE-fee-koh', category: 'influencer-marketing', audio: 'el-influencer-de-nicho' },
  { spanish: 'La colaboración de marca asocia al influencer con un producto para crear contenido conjunto', english: 'The brand collaboration associates the influencer with a product to create joint content', pronunciation: 'lah koh-lah-boh-rah-see-OHN deh MAHR-kah ah-SOH-see-ah ahl een-floo-EHN-sehr kohn oon proh-DOOK-toh PAH-rah kreh-AHR kohn-teh-NEE-doh kohn-HOON-toh', category: 'influencer-marketing', audio: 'la-colaboracion-de-marca' },
  { spanish: 'El contenido patrocinado debe identificarse claramente para cumplir con las regulaciones de publicidad', english: 'Sponsored content must be clearly identified to comply with advertising regulations', pronunciation: 'ehl kohn-teh-NEE-doh pah-troh-see-NAH-doh DEH-beh ee-dehn-tee-fee-KAHR-seh KLAH-rah-MEHN-teh PAH-rah koom-PLEER kohn lahs rreh-goo-lah-see-OH-nehs deh poo-blee-see-DAHD', category: 'influencer-marketing', audio: 'el-contenido-patrocinado' },
  { spanish: 'La autenticidad es el factor más importante para que una recomendación de influencer sea creíble', english: 'Authenticity is the most important factor for an influencer recommendation to be credible', pronunciation: 'lah ow-tehn-tee-see-DAHD ehs ehl fahk-TOHR mahs eem-pohr-TAHN-teh PAH-rah keh OO-nah rreh-koh-mehn-dah-see-OHN deh een-floo-EHN-sehr SEH-ah kreh-EE-bleh', category: 'influencer-marketing', audio: 'la-autenticidad' },
  { spanish: 'El marketing de afiliados paga una comisión al influencer por cada venta generada a través de su enlace', english: 'Affiliate marketing pays the influencer a commission for each sale generated through their link', pronunciation: 'ehl MAHR-keh-teeng deh ah-fee-lee-AH-dohs PAH-gah OO-nah koh-mee-see-OHN ahl een-floo-EHN-sehr pohr KAH-dah BEHN-tah heh-neh-RAH-dah ah trah-BEHS deh soo ehn-LAH-seh', category: 'influencer-marketing', audio: 'el-marketing-de-afiliados' },
  { spanish: 'El UGC o contenido generado por usuarios es más confiable que la publicidad tradicional para los consumidores', english: 'UGC or user-generated content is more trustworthy than traditional advertising for consumers', pronunciation: 'ehl oo-heh-SEH oh kohn-teh-NEE-doh heh-neh-RAH-doh pohr oo-soo-AH-ree-ohs ehs mahs kohn-fee-AH-bleh keh lah poo-blee-see-DAHD trah-dee-see-oh-NAHL PAH-rah lohs kohn-soo-mee-DOH-rehs', category: 'influencer-marketing', audio: 'el-ugc' },
  { spanish: 'El microinfluencer tiene entre mil y cien mil seguidores y ofrece mayor tasa de engagement', english: 'The micro-influencer has between one thousand and one hundred thousand followers and offers a higher engagement rate', pronunciation: 'ehl mee-kroh-een-floo-EHN-sehr tee-EH-neh EHN-treh meel ee see-EHN meel seh-gee-DOH-rehs ee oh-FREH-seh mah-YOHR TAH-sah deh ehn-GAYSH-mehnt', category: 'influencer-marketing', audio: 'el-microinfluencer' },
  { spanish: 'La gestión de la reputación en línea monitorea lo que se dice sobre la marca en redes sociales', english: 'Online reputation management monitors what is said about the brand on social media', pronunciation: 'lah hehs-tee-OHN deh lah rreh-poo-tah-see-OHN ehn LEE-neh-ah moh-nee-toh-REH-ah loh keh seh DEE-seh SOH-breh lah MAHR-kah ehn RREH-dehs soh-see-AH-lehs', category: 'influencer-marketing', audio: 'la-gestion-de-la-reputacion' },
  { spanish: 'El embajador de marca representa a la empresa de manera continua más allá de una sola campaña', english: 'The brand ambassador represents the company on an ongoing basis beyond a single campaign', pronunciation: 'ehl ehm-bah-hah-DOHR deh MAHR-kah rreh-preh-SEHN-tah ah lah ehm-PREH-sah deh mah-NEH-rah kohn-TEE-noo-ah mahs ah-YAH deh OO-nah SOH-lah kahm-PAH-nyah', category: 'influencer-marketing', audio: 'el-embajador-de-marca' },
  { spanish: 'La economía de creadores permite a individuos monetizar su contenido y construir negocios personales', english: 'The creator economy allows individuals to monetize their content and build personal businesses', pronunciation: 'lah eh-koh-noh-MEE-ah deh kreh-ah-DOH-rehs pehr-MEE-teh ah een-dee-BEE-doo-ohs moh-neh-tee-SAHR soo kohn-teh-NEE-doh ee kohns-troo-EER neh-GOH-see-ohs pehr-soh-NAH-lehs', category: 'influencer-marketing', audio: 'la-economia-de-creadores' },
  { spanish: 'Los seguidores falsos inflan artificialmente las métricas y dañan la credibilidad del influencer', english: 'Fake followers artificially inflate metrics and damage the influencer\'s credibility', pronunciation: 'lohs seh-gee-DOH-rehs FAHL-sohs EEN-flahn ahr-tee-fee-see-AHL-mehn-teh lahs MEH-tree-kahs ee DAH-nyahn lah kreh-dee-bee-lee-DAHD dehl een-floo-EHN-sehr', category: 'influencer-marketing', audio: 'los-seguidores-falsos' },
  { spanish: 'La transparencia en las asociaciones comerciales genera confianza entre el influencer y su comunidad', english: 'Transparency in commercial partnerships builds trust between the influencer and their community', pronunciation: 'lah trahns-pah-REHN-see-ah ehn lahs ah-soh-see-ah-see-OH-nehs koh-mehr-see-AH-lehs heh-NEH-rah kohn-fee-AHN-sah EHN-treh ehl een-floo-EHN-sehr ee soo koh-moo-nee-DAHD', category: 'influencer-marketing', audio: 'la-transparencia' },

  // === SEO/SEM (12) ===
  { spanish: 'La optimización para buscadores mejora la visibilidad de un sitio web en los resultados de búsqueda', english: 'Search engine optimization improves a website\'s visibility in search results', pronunciation: 'lah ohp-tee-mee-sah-see-OHN PAH-rah boos-kah-DOH-rehs meh-HOH-rah lah bee-see-bee-lee-DAHD deh oon SEE-tee-oh wehb ehn lohs rreh-sool-TAH-dohs deh BOOS-keh-dah', category: 'seo-sem', audio: 'la-optimizacion-para-buscadores' },
  { spanish: 'Las palabras clave son los términos que los usuarios escriben en el buscador para encontrar información', english: 'Keywords are the terms users type in the search engine to find information', pronunciation: 'lahs pah-LAH-brahs KLAH-beh sohn lohs TEHR-mee-nohs keh lohs oo-soo-AH-ree-ohs ehs-KREE-behn ehn ehl boos-kah-DOHR PAH-rah ehn-kohn-TRAHR een-fohr-mah-see-OHN', category: 'seo-sem', audio: 'las-palabras-clave' },
  { spanish: 'El posicionamiento web determina en qué lugar aparece tu sitio en la página de resultados', english: 'Web positioning determines where your site appears on the results page', pronunciation: 'ehl poh-see-see-oh-nah-mee-EHN-toh wehb deh-tehr-MEE-nah ehn keh loo-GAHR ah-pah-REH-seh too SEE-tee-oh ehn lah PAH-hee-nah deh rreh-sool-TAH-dohs', category: 'seo-sem', audio: 'el-posicionamiento-web' },
  { spanish: 'La campaña de pago por clic cobra al anunciante solo cuando el usuario hace clic en el anuncio', english: 'The pay-per-click campaign charges the advertiser only when the user clicks on the ad', pronunciation: 'lah kahm-PAH-nyah deh PAH-goh pohr kleek KOH-brah ahl ah-noon-see-AHN-teh SOH-loh KWAHN-doh ehl oo-soo-AH-ree-oh AH-seh kleek ehn ehl ah-NOON-see-oh', category: 'seo-sem', audio: 'la-campana-de-pago' },
  { spanish: 'El algoritmo del buscador evalúa cientos de factores para clasificar la relevancia de cada página web', english: 'The search engine algorithm evaluates hundreds of factors to rank the relevance of each web page', pronunciation: 'ehl ahl-goh-REET-moh dehl boos-kah-DOHR eh-bah-LOO-ah see-EHN-tohs deh fahk-TOH-rehs PAH-rah klah-see-fee-KAHR lah rreh-leh-BAHN-see-ah deh KAH-dah PAH-hee-nah wehb', category: 'seo-sem', audio: 'el-algoritmo-del-buscador' },
  { spanish: 'La indexación registra las páginas web en la base de datos del buscador para incluirlas en los resultados', english: 'Indexing registers web pages in the search engine\'s database to include them in results', pronunciation: 'lah een-dehk-sah-see-OHN rreh-HEES-trah lahs PAH-hee-nahs wehb ehn lah BAH-seh deh DAH-tohs dehl boos-kah-DOHR PAH-rah een-kloo-EER-lahs ehn lohs rreh-sool-TAH-dohs', category: 'seo-sem', audio: 'la-indexacion' },
  { spanish: 'El enlace de retroceso desde un sitio de alta autoridad mejora el posicionamiento de tu página', english: 'A backlink from a high-authority site improves your page\'s ranking', pronunciation: 'ehl ehn-LAH-seh deh rreh-troh-SEH-soh DEHS-deh oon SEE-tee-oh deh AHL-tah ow-toh-ree-DAHD meh-HOH-rah ehl poh-see-see-oh-nah-mee-EHN-toh deh too PAH-hee-nah', category: 'seo-sem', audio: 'el-enlace-de-retroceso' },
  { spanish: 'La estrategia de contenido largo posiciona mejor que los artículos cortos en los buscadores modernos', english: 'Long-form content strategy ranks better than short articles in modern search engines', pronunciation: 'lah ehs-trah-TEH-hee-ah deh kohn-teh-NEE-doh LAHR-goh poh-see-see-OH-nah meh-HOHR keh lohs ahr-TEE-koo-lohs KOHR-tohs ehn lohs boos-kah-DOH-rehs moh-DEHR-nohs', category: 'seo-sem', audio: 'la-estrategia-de-contenido-largo' },
  { spanish: 'La auditoría SEO analiza la salud técnica del sitio web para identificar problemas de rendimiento', english: 'An SEO audit analyzes the technical health of the website to identify performance issues', pronunciation: 'lah ow-dee-toh-REE-ah ess-ee-OH ah-nah-LEE-sah lah sah-LOOD TEHK-nee-kah dehl SEE-tee-oh wehb PAH-rah ee-dehn-tee-fee-KAHR proh-BLEH-mahs deh rrehn-dee-mee-EHN-toh', category: 'seo-sem', audio: 'la-auditoria-seo' },
  { spanish: 'El remarketing muestra anuncios a personas que ya visitaron tu sitio web anteriormente', english: 'Remarketing shows ads to people who have already visited your website before', pronunciation: 'ehl rreh-MAHR-keh-teeng MWEHS-trah ah-NOON-see-ohs ah pehr-SOH-nahs keh yah bee-see-TAH-rohn too SEE-tee-oh wehb ahn-teh-ree-ohr-MEHN-teh', category: 'seo-sem', audio: 'el-remarketing' },
  { spanish: 'La búsqueda por voz está cambiando la forma en que los usuarios interactúan con los buscadores', english: 'Voice search is changing the way users interact with search engines', pronunciation: 'lah BOOS-keh-dah pohr bohs ehs-TAH kahm-bee-AHN-doh lah FOHR-mah ehn keh lohs oo-soo-AH-ree-ohs een-teh-rahk-TOO-ahn kohn lohs boos-kah-DOH-rehs', category: 'seo-sem', audio: 'la-busqueda-por-voz' },
  { spanish: 'La intención de búsqueda determina si el usuario quiere información, comprar algo o navegar a un sitio específico', english: 'Search intent determines whether the user wants information, to buy something, or to navigate to a specific site', pronunciation: 'lah een-tehn-see-OHN deh BOOS-keh-dah deh-tehr-MEE-nah see ehl oo-soo-AH-ree-oh kee-EH-reh een-fohr-mah-see-OHN kohm-PRAHR AHL-goh oh nah-beh-GAHR ah oon SEE-tee-oh ehs-peh-SEE-fee-koh', category: 'seo-sem', audio: 'la-intencion-de-busqueda' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L96PhraseByAudio = phraseByAudio

// === CAMPAIGN BUILDER (unique activity) ===

export interface CampaignBuilderChallenge {
  brief: string
  english: string
  correctStrategy: string
  options: string[]
}

export const CAMPAIGN_BUILDER_CHALLENGES: CampaignBuilderChallenge[] = [
  {
    brief: 'Una marca de café artesanal quiere aumentar su alcance orgánico entre millennials en Instagram. ¿Qué estrategia recomiendas?',
    english: 'An artisan coffee brand wants to increase its organic reach among millennials on Instagram. What strategy do you recommend?',
    correctStrategy: 'Crear contenido de storytelling mostrando el proceso de producción y colaborar con microinfluencers del nicho gastronómico',
    options: ['Publicar solo fotos del producto con precios', 'Crear contenido de storytelling mostrando el proceso de producción y colaborar con microinfluencers del nicho gastronómico', 'Comprar seguidores para aumentar los números rápidamente', 'Publicar el mismo contenido en todas las plataformas sin adaptar'],
  },
  {
    brief: 'La tasa de conversión de tu tienda en línea es del 0.5%. ¿Qué acción priorizas para mejorarla?',
    english: 'Your online store\'s conversion rate is 0.5%. What action do you prioritize to improve it?',
    correctStrategy: 'Realizar pruebas A/B en las páginas de producto y optimizar el embudo de ventas',
    options: ['Aumentar el gasto en publicidad para traer más tráfico', 'Realizar pruebas A/B en las páginas de producto y optimizar el embudo de ventas', 'Cambiar completamente el diseño del sitio web', 'Reducir los precios de todos los productos un 50%'],
  },
  {
    brief: 'Un influencer con 500.000 seguidores tiene una tasa de engagement del 0.3%. ¿Qué recomiendas al cliente?',
    english: 'An influencer with 500,000 followers has an engagement rate of 0.3%. What do you recommend to the client?',
    correctStrategy: 'Buscar un microinfluencer de nicho con menos seguidores pero mayor engagement y audiencia más relevante',
    options: ['Aceptar la colaboración porque tiene muchos seguidores', 'Buscar un microinfluencer de nicho con menos seguidores pero mayor engagement y audiencia más relevante', 'Pedirle al influencer que compre más seguidores', 'No usar influencers en absoluto'],
  },
  {
    brief: 'Tu contenido en Facebook tiene alto alcance pero bajo engagement. ¿Cómo ajustas la estrategia?',
    english: 'Your Facebook content has high reach but low engagement. How do you adjust the strategy?',
    correctStrategy: 'Analizar qué tipo de contenido genera más interacción y crear más contenido interactivo como encuestas y preguntas',
    options: ['Publicar con más frecuencia para mantener la visibilidad', 'Analizar qué tipo de contenido genera más interacción y crear más contenido interactivo como encuestas y preguntas', 'Dejar de publicar en Facebook y mudarse a TikTok', 'Invertir todo el presupuesto en anuncios pagados'],
  },
  {
    brief: 'Una startup de tecnología educativa quiere posicionar su blog en los primeros resultados de Google. ¿Qué estrategia SEO implementas?',
    english: 'An edtech startup wants to rank its blog in the top Google results. What SEO strategy do you implement?',
    correctStrategy: 'Investigar palabras clave de cola larga relevantes y crear contenido largo de alta calidad con enlaces de retroceso',
    options: ['Rellenar las páginas con la mayor cantidad de palabras clave posible', 'Investigar palabras clave de cola larga relevantes y crear contenido largo de alta calidad con enlaces de retroceso', 'Copiar el contenido de los competidores que ya posicionan', 'Pagar por enlaces en sitios de baja calidad para obtener backlinks rápidos'],
  },
  {
    brief: 'Un restaurante local quiere crear una campaña de marketing digital con presupuesto limitado. ¿Qué priorizas?',
    english: 'A local restaurant wants to create a digital marketing campaign with a limited budget. What do you prioritize?',
    correctStrategy: 'Crear contenido UGC invitando a clientes a compartir fotos y usar segmentación geográfica en redes sociales',
    options: ['Contratar a un macroinfluencer con millones de seguidores', 'Crear contenido UGC invitando a clientes a compartir fotos y usar segmentación geográfica en redes sociales', 'Hacer publicidad en televisión nacional', 'Crear una app móvil del restaurante'],
  },
  {
    brief: 'Las métricas muestran que el 70% de tus visitantes abandonan el sitio en la página de precios. ¿Qué haces?',
    english: 'Metrics show that 70% of your visitors leave the site on the pricing page. What do you do?',
    correctStrategy: 'Rediseñar la página de precios con pruebas A/B, agregar testimonios y simplificar las opciones',
    options: ['Eliminar la página de precios completamente', 'Rediseñar la página de precios con pruebas A/B, agregar testimonios y simplificar las opciones', 'Bajar los precios hasta que la gente deje de irse', 'Ignorar los datos y enfocarse en traer más tráfico'],
  },
]

// === LESSON DATA ===

export const L96Data: LessonData = {
  id: 'L9.6',
  hero: {
    lessonId: 'L9.6',
    title: 'Social Media & Digital Marketing',
    subtitle: 'Content strategy, analytics, influencer marketing, and SEO/SEM',
    description: 'Master the vocabulary of digital marketing — from content calendars and engagement metrics to influencer collaborations and search engine optimization. Learn to discuss marketing strategies, analyze campaign data, and navigate the creator economy in Spanish.',
    image: '/images/L9.6/L9.6.jpg',
    gradient: 'from-purple-800/65 via-violet-700/55 to-blue-700/65',
    accentColor: 'purple-200',
  },

  objectives: [
    { icon: '📱', title: 'Content Strategy', desc: 'Learn vocabulary for content calendars, engagement, organic reach, and brand storytelling.' },
    { icon: '📊', title: 'Analytics & Metrics', desc: 'Master terms for conversion rates, ROI, impressions, CPC, and KPIs.' },
    { icon: '🤳', title: 'Influencer Marketing', desc: 'Discuss brand collaborations, sponsored content, authenticity, and the creator economy.' },
    { icon: '🔎', title: 'SEO & SEM', desc: 'Explore search optimization, keywords, web positioning, and pay-per-click campaigns.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.3', label: 'Technology & Social Media', detail: 'L3.3 introduced basic social media vocabulary. Now master the professional marketing language behind those platforms.' },
    { fromLesson: 'L5.5', label: 'Professional Communication', detail: 'L5.5 covered workplace communication. Now apply those skills to the digital marketing industry.' },
    { fromLesson: 'L8.2', label: 'Business & Economics', detail: 'L8.2 taught financial terminology. Now learn how ROI, conversion rates, and KPIs drive marketing decisions.' },
  ],

  sectionTransitions: [
    { afterSection: 'content-strategy', text: 'Content strategy mastered! Now let\'s analyze the numbers behind it.' },
    { afterSection: 'analytics-metrics', text: 'Data-driven! Let\'s explore the world of influencer marketing.' },
    { afterSection: 'influencer-marketing', text: 'Influencer savvy! Now let\'s optimize for search engines.' },
    { afterSection: 'dialogues', text: 'Great marketing conversations! Let\'s explore the culture of digital marketing.' },
    { afterSection: 'cultural', text: 'Now test your marketing instincts in the Campaign Builder activity!' },
    { afterSection: 'campaign-builder', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La campaña generó...', english: 'The campaign generated...' },
    { spanish: 'Necesitamos optimizar...', english: 'We need to optimize...' },
    { spanish: 'El engagement aumentó...', english: 'Engagement increased...' },
    { spanish: 'La tasa de conversión es...', english: 'The conversion rate is...' },
    { spanish: 'Según las métricas...', english: 'According to the metrics...' },
    { spanish: 'El ROI de esta campaña...', english: 'The ROI of this campaign...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La segmentación de audiencia es fundamental para cualquier campaña', pronunciation: 'lah sehg-mehn-tah-see-OHN deh ow-dee-EHN-see-ah ehs foon-dah-mehn-TAHL PAH-rah kwahl-kee-EHR kahm-PAH-nyah', english: 'Audience segmentation is fundamental for any campaign', audio: 'la-segmentacion-de-audiencia-es-fundamental-para-cualquier-campana', tip: '"Segmentación" stresses the final syllable: segmenta-CIÓN. "Audiencia" stresses the third-to-last: au-DIEN-cia.' },
    { spanish: 'El retorno de inversión justifica el presupuesto de marketing', pronunciation: 'ehl rreh-TOHR-noh deh een-behr-see-OHN hoos-tee-FEE-kah ehl preh-soo-PWEHS-toh deh MAHR-keh-teeng', english: 'Return on investment justifies the marketing budget', audio: 'el-retorno-de-inversion-justifica-el-presupuesto-de-marketing', tip: '"Inversión" has a nasal N before S: in-ver-SIÓN. "Presupuesto" is a long word with stress on the penultimate: presu-PUES-to.' },
    { spanish: 'Las palabras clave determinan el posicionamiento en buscadores', pronunciation: 'lahs pah-LAH-brahs KLAH-beh deh-tehr-MEE-nahn ehl poh-see-see-oh-nah-mee-EHN-toh ehn boos-kah-DOH-rehs', english: 'Keywords determine search engine positioning', audio: 'las-palabras-clave-determinan-el-posicionamiento-en-buscadores', tip: '"Posicionamiento" is one of the longest words in marketing Spanish: po-si-cio-na-MIEN-to. Practice breaking it into syllables.' },
    { spanish: 'El contenido patrocinado debe ser transparente para los seguidores', pronunciation: 'ehl kohn-teh-NEE-doh pah-troh-see-NAH-doh DEH-beh sehr trahns-pah-REHN-teh PAH-rah lohs seh-gee-DOH-rehs', english: 'Sponsored content must be transparent for followers', audio: 'el-contenido-patrocinado-debe-ser-transparente-para-los-seguidores', tip: '"Patrocinado" stresses -NA-: patroci-NA-do. "Transparente" stresses the penultimate: transpa-REN-te.' },
    { spanish: 'La prueba A/B optimiza las tasas de conversión del embudo de ventas', pronunciation: 'lah proo-EH-bah AH BEH ohp-tee-MEE-sah lahs TAH-sahs deh kohn-behr-see-OHN dehl ehm-BOO-noh deh BEHN-tahs', english: 'A/B testing optimizes the conversion rates of the sales funnel', audio: 'la-prueba-ab-optimiza-las-tasas-de-conversion-del-embudo-de-ventas', tip: '"Embudo" (funnel) stresses the penultimate: em-BU-do. "Conversión" follows the standard -CIÓN pattern.' },
    { spanish: 'El microinfluencer ofrece mayor engagement que las celebridades tradicionales', pronunciation: 'ehl mee-kroh-een-floo-EHN-sehr oh-FREH-seh mah-YOHR ehn-GAYSH-mehnt keh lahs seh-leh-bree-DAH-dehs trah-dee-see-oh-NAH-lehs', english: 'The micro-influencer offers higher engagement than traditional celebrities', audio: 'el-microinfluencer-ofrece-mayor-engagement-que-las-celebridades-tradicionales', tip: '"Microinfluencer" blends Spanish and English: mee-kroh-in-floo-EN-ser. In marketing Spanish, many English loanwords keep their original pronunciation.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'content-strategy', label: 'Content Strategy' },
    { id: 'analytics-metrics', label: 'Analytics & Metrics' },
    { id: 'influencer-marketing', label: 'Influencer Marketing' },
    { id: 'seo-sem', label: 'SEO & SEM' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'campaign-builder', label: 'Campaign Builder' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'content-strategy',
      title: 'Content Strategy — Estrategia de Contenidos',
      description: 'Vocabulary for content planning, engagement, storytelling, and omnichannel strategies.',
      tabs: [
        { label: 'Planning & Creation', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'content-strategy').slice(0, 6) },
        { label: 'Distribution & Voice', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'content-strategy').slice(6) },
      ],
    },
    {
      id: 'analytics-metrics',
      title: 'Analytics & Metrics — Analítica y Métricas',
      description: 'Conversion rates, ROI, impressions, KPIs, and data-driven marketing decisions.',
      tabs: [
        { label: 'Core Metrics', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'analytics-metrics').slice(0, 6) },
        { label: 'Advanced Analysis', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'analytics-metrics').slice(6) },
      ],
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing — Marketing de Influencers',
      description: 'Brand collaborations, sponsored content, authenticity, and the creator economy.',
      tabs: [
        { label: 'Collaborations', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'influencer-marketing').slice(0, 6) },
        { label: 'Creator Economy', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'influencer-marketing').slice(6) },
      ],
    },
    {
      id: 'seo-sem',
      title: 'SEO & SEM — Posicionamiento y Publicidad Digital',
      description: 'Search optimization, keywords, rankings, pay-per-click, and voice search.',
      tabs: [
        { label: 'Search Optimization', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'seo-sem').slice(0, 6) },
        { label: 'Advanced SEO', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'seo-sem').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Marketing Loanwords in Spanish',
      content: 'Spanish marketing borrows heavily from English: "engagement," "storytelling," "clickbait," "remarketing." While some marketers pronounce these in English, many adapt them: "en-GAYSH-ment," "MAHR-keh-teeng." The RAE (Real Academia Española) recommends Spanish equivalents when they exist: "interacción" for engagement, "narrativa de marca" for brand storytelling.',
      example: 'El engagement de la campaña de storytelling fue excepcional.',
    },
    {
      title: 'Metric Terms — Spanish Precision',
      content: 'Metric vocabulary often uses compound phrases: "tasa de conversión" (conversion rate), "retorno de inversión" (ROI), "costo por clic" (CPC). Each word is stressed normally, but practice saying the full phrase fluently: TAH-sah deh kohn-behr-see-OHN.',
      example: 'La tasa de conversión mejoró un 25% con la nueva estrategia.',
      reviewFrom: 'L8.2',
    },
    {
      title: 'SEO Vocabulary',
      content: 'SEO terms in Spanish combine tech and marketing vocabulary: "posicionamiento" (positioning/ranking), "optimización" (optimization), "indexación" (indexing). These long words follow standard Spanish stress rules — practice breaking them into syllables: po-si-cio-na-MIEN-to.',
      example: 'La optimización para buscadores mejoró el posicionamiento del sitio.',
      reviewFrom: 'L3.3',
    },
    {
      title: 'Campaign & Strategy Terms',
      content: 'Words like "campaña" (campaign), "estrategia" (strategy), and "segmentación" (segmentation) are essential. Note: "campaña" (cam-PA-ña) has the ñ sound that doesn\'t exist in English. "Estrategia" stresses the third-to-last: es-tra-TE-gia.',
      example: 'La campaña de segmentación superó todas las métricas de la estrategia.',
    },
  ],

  flashcardGroups: [
    {
      key: 'content',
      label: 'Content Strategy',
      audioKeys: ['el-calendario-de-contenidos', 'el-engagement', 'el-alcance-organico', 'la-segmentacion-de-audiencia', 'el-contenido-viral', 'el-storytelling-de-marca', 'la-estrategia-omnicanal', 'el-contenido-generado', 'el-tono-de-voz', 'la-curacion-de-contenidos', 'el-marketing-de-contenidos', 'la-publicacion-cruzada'],
    },
    {
      key: 'analytics',
      label: 'Analytics & Metrics',
      audioKeys: ['la-tasa-de-conversion', 'el-retorno-de-inversion', 'las-impresiones', 'el-costo-por-clic', 'el-embudo-de-ventas', 'los-indicadores-clave', 'la-tasa-de-rebote', 'el-valor-de-vida', 'las-metricas-de-vanidad', 'la-atribucion-de-conversiones', 'el-panel-de-control', 'la-prueba-ab'],
    },
    {
      key: 'influencer-seo',
      label: 'Influencer & SEO',
      audioKeys: ['el-influencer-de-nicho', 'la-colaboracion-de-marca', 'el-contenido-patrocinado', 'la-autenticidad', 'el-marketing-de-afiliados', 'la-optimizacion-para-buscadores', 'las-palabras-clave', 'el-posicionamiento-web', 'la-campana-de-pago', 'el-algoritmo-del-buscador'],
    },
  ],

  matchPairs: [
    { left: 'El engagement', right: 'Audience interaction level' },
    { left: 'La tasa de conversión', right: 'Conversion rate' },
    { left: 'Las palabras clave', right: 'Keywords' },
    { left: 'El embudo de ventas', right: 'Sales funnel' },
    { left: 'El contenido patrocinado', right: 'Sponsored content' },
    { left: 'El alcance orgánico', right: 'Organic reach' },
    { left: 'La prueba A/B', right: 'A/B testing' },
    { left: 'El retorno de inversión', right: 'ROI' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Organic vs. Paid Strategy',
      instruction: 'Is this an organic or paid marketing strategy?',
      buckets: ['Organic Strategy 🌱', 'Paid Strategy 💰'],
      items: [
        { text: 'El alcance orgánico', bucket: 'Organic Strategy 🌱' },
        { text: 'El storytelling de marca', bucket: 'Organic Strategy 🌱' },
        { text: 'El marketing de contenidos', bucket: 'Organic Strategy 🌱' },
        { text: 'La optimización para buscadores', bucket: 'Organic Strategy 🌱' },
        { text: 'El costo por clic', bucket: 'Paid Strategy 💰' },
        { text: 'La campaña de pago por clic', bucket: 'Paid Strategy 💰' },
        { text: 'El remarketing', bucket: 'Paid Strategy 💰' },
        { text: 'El contenido patrocinado', bucket: 'Paid Strategy 💰' },
      ],
    },
    {
      title: 'Content vs. Analytics',
      instruction: 'Is this a content creation concept or an analytics metric?',
      buckets: ['Content Creation 📱', 'Analytics Metric 📊'],
      items: [
        { text: 'El calendario de contenidos', bucket: 'Content Creation 📱' },
        { text: 'El storytelling de marca', bucket: 'Content Creation 📱' },
        { text: 'La curación de contenidos', bucket: 'Content Creation 📱' },
        { text: 'El tono de voz', bucket: 'Content Creation 📱' },
        { text: 'La tasa de conversión', bucket: 'Analytics Metric 📊' },
        { text: 'La tasa de rebote', bucket: 'Analytics Metric 📊' },
        { text: 'Las impresiones', bucket: 'Analytics Metric 📊' },
        { text: 'El valor de vida del cliente', bucket: 'Analytics Metric 📊' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-agency',
      title: 'Marketing Agency Meeting — Medellín',
      location: 'Medellín',
      lines: [
        { speaker: 'Daniela', text: 'Bien, equipo. Revisemos las métricas de la campaña del mes pasado. ¿Cómo fue el engagement?', audio: '/audio/L9.6/phrases/d1-line1.mp3' },
        { speaker: 'Andrés', text: 'El engagement subió un 35% respecto al mes anterior. Los reels con storytelling tuvieron el mayor alcance orgánico.', audio: '/audio/L9.6/phrases/d1-line2.mp3' },
        { speaker: 'Daniela', text: '¿Y la tasa de conversión? Recordemos que el cliente espera un ROI del 300%.', audio: '/audio/L9.6/phrases/d1-line3.mp3' },
        { speaker: 'Andrés', text: 'La conversión mejoró del 1.2% al 2.1% gracias a la prueba A/B en la página de destino.', audio: '/audio/L9.6/phrases/d1-line4.mp3' },
        { speaker: 'Daniela', text: 'Excelente. ¿Qué tal la colaboración con la influencer de nicho que contratamos?', audio: '/audio/L9.6/phrases/d1-line5.mp3', annotations: [{ phrase: 'influencer de nicho', fromLesson: 'L3.3', note: 'Social media vocabulary expanded from basic terms in L3.3' }] },
        { speaker: 'Andrés', text: 'Increíble. Tiene solo 15.000 seguidores pero su engagement es del 8%. Generó más ventas que el macroinfluencer del trimestre pasado.', audio: '/audio/L9.6/phrases/d1-line6.mp3' },
        { speaker: 'Daniela', text: 'Eso confirma nuestra estrategia: microinfluencers con audiencias auténticas valen más que números inflados.', audio: '/audio/L9.6/phrases/d1-line7.mp3' },
        { speaker: 'Andrés', text: 'Para el próximo mes propongo enfocarnos en SEO. El posicionamiento del blog del cliente ha bajado.', audio: '/audio/L9.6/phrases/d1-line8.mp3' },
        { speaker: 'Daniela', text: 'Buena idea. Necesitamos investigar palabras clave de cola larga y crear contenido más extenso y de mayor calidad.', audio: '/audio/L9.6/phrases/d1-line9.mp3' },
        { speaker: 'Andrés', text: 'También deberíamos implementar remarketing para recuperar a los visitantes que abandonan el embudo de ventas.', audio: '/audio/L9.6/phrases/d1-line10.mp3' },
        { speaker: 'Daniela', text: 'De acuerdo. Actualicemos el calendario de contenidos y presentemos la nueva estrategia al cliente el viernes.', audio: '/audio/L9.6/phrases/d1-line11.mp3' },
        { speaker: 'Andrés', text: 'Perfecto. Voy a preparar el panel de control con todas las métricas actualizadas para la presentación.', audio: '/audio/L9.6/phrases/d1-line12.mp3' },
        { speaker: 'Daniela', text: 'Excelente trabajo, Andrés. Los datos hablan: nuestra estrategia está funcionando.', audio: '/audio/L9.6/phrases/d1-line13.mp3' },
        { speaker: 'Andrés', text: 'Gracias, Dani. El marketing basado en datos es el futuro. Sin métricas, todo es intuición.', audio: '/audio/L9.6/phrases/d1-line14.mp3' },
        { speaker: 'Daniela', text: 'Totalmente de acuerdo. Y la intuición sin datos es solo una apuesta.', audio: '/audio/L9.6/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-influencer',
      title: 'Influencer Brand Deal — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Sofía', text: 'Hola, Carlos. Gracias por reunirte conmigo. Te cuento: mi marca de cosmética natural quiere colaborar contigo.', audio: '/audio/L9.6/phrases/d2-line1.mp3' },
        { speaker: 'Carlos', text: 'Encantado, Sofía. He visto vuestros productos y me gustan mucho. ¿Qué tipo de colaboración tenéis en mente?', audio: '/audio/L9.6/phrases/d2-line2.mp3' },
        { speaker: 'Sofía', text: 'Queremos que seas embajador de marca durante tres meses. Contenido semanal en Instagram y TikTok.', audio: '/audio/L9.6/phrases/d2-line3.mp3' },
        { speaker: 'Carlos', text: 'Me interesa, pero necesito que sea auténtico. Solo promociono productos que realmente uso. Eso es clave para mi comunidad.', audio: '/audio/L9.6/phrases/d2-line4.mp3' },
        { speaker: 'Sofía', text: 'Totalmente de acuerdo. La autenticidad es lo que buscamos. Por eso te elegimos a ti y no a un macroinfluencer.', audio: '/audio/L9.6/phrases/d2-line5.mp3', annotations: [{ phrase: 'autenticidad', fromLesson: 'L5.5', note: 'Professional communication and credibility concepts from L5.5' }] },
        { speaker: 'Carlos', text: '¿El contenido será patrocinado? Siempre identifico claramente las colaboraciones. Es una cuestión de transparencia con mis seguidores.', audio: '/audio/L9.6/phrases/d2-line6.mp3' },
        { speaker: 'Sofía', text: 'Sí, todo el contenido llevará la etiqueta de contenido patrocinado. Cumplimos con las regulaciones de publicidad.', audio: '/audio/L9.6/phrases/d2-line7.mp3' },
        { speaker: 'Carlos', text: '¿Cuáles son las métricas que esperáis? ¿Engagement, conversiones, alcance?', audio: '/audio/L9.6/phrases/d2-line8.mp3' },
        { speaker: 'Sofía', text: 'Principalmente engagement y tráfico a la web. Utilizaremos un enlace de afiliado para medir las conversiones directas.', audio: '/audio/L9.6/phrases/d2-line9.mp3' },
        { speaker: 'Carlos', text: 'Perfecto. Propongo crear contenido tipo "mi rutina de mañana" mostrando los productos de forma natural.', audio: '/audio/L9.6/phrases/d2-line10.mp3' },
        { speaker: 'Sofía', text: 'Me encanta la idea. El storytelling es lo que mejor funciona con tu audiencia.', audio: '/audio/L9.6/phrases/d2-line11.mp3' },
        { speaker: 'Carlos', text: 'También puedo hacer un directo probando los productos en tiempo real. Eso genera mucho engagement.', audio: '/audio/L9.6/phrases/d2-line12.mp3' },
        { speaker: 'Sofía', text: 'Genial. ¿Podemos incluir un código de descuento exclusivo para tus seguidores?', audio: '/audio/L9.6/phrases/d2-line13.mp3' },
        { speaker: 'Carlos', text: 'Claro, eso siempre funciona bien. Le damos valor a la comunidad y medimos el impacto directo.', audio: '/audio/L9.6/phrases/d2-line14.mp3' },
        { speaker: 'Sofía', text: 'Perfecto. Te envío el contrato esta tarde. ¡Será una gran colaboración!', audio: '/audio/L9.6/phrases/d2-line15.mp3' },
        { speaker: 'Carlos', text: '¡Estoy emocionado! Cuando la marca y el creador comparten valores, la magia ocurre.', audio: '/audio/L9.6/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience a marketing agency metrics review meeting in Medellín and an influencer brand deal negotiation in Madrid.',

  culturalNotes: [
    {
      title: 'El Marketing Digital en América Latina',
      content: 'Latin America is one of the fastest-growing digital marketing markets in the world. Brazil, Mexico, and Colombia lead in social media adoption, with Instagram and TikTok dominating. Interestingly, WhatsApp is a major marketing channel in Latin America — businesses use it for customer service, sales, and even automated chatbots. "Marketing de WhatsApp" is a concept rarely seen in the US but essential in the region.',
    },
    {
      title: 'Influencers en el Mundo Hispanohablante',
      content: 'The Spanish-speaking influencer market has its own dynamics. In Mexico, "Yuya" (beauty) and "Luisito Comunica" (travel) pioneered the creator economy. In Spain, "El Rubius" and "Ibai Llanos" built media empires from their bedrooms. A key cultural difference: Latin American audiences value "cercanía" (closeness/relatability) over polish. Influencers who feel like "amigos" outperform those who feel like celebrities.',
    },
    {
      title: 'Spanglish en el Marketing Digital',
      content: 'Digital marketing in Spanish is a fascinating blend of Spanish and English. Terms like "engagement," "branding," "landing page," and "call to action" are used alongside their Spanish equivalents. Some purists advocate for "interacción" over "engagement" and "página de destino" over "landing page." In practice, most marketers code-switch freely, creating a professional "Spanglish" that reflects the global nature of digital marketing.',
    },
  ],
  culturalGradient: 'from-purple-50 to-blue-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El engagement" measures:', options: ['Website speed', 'The level of audience interaction with content', 'The number of employees', 'Server uptime'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La tasa de ___ mide el porcentaje de visitantes que compran" (conversion)', answer: 'conversión' },
    { id: 3, type: 'mc', text: '"El embudo de ventas" is:', options: ['A type of advertisement', 'The customer journey from discovery to purchase', 'A social media platform', 'A content calendar'], answer: 1 },
    { id: 4, type: 'tf', text: '"Las palabras clave" are the terms users type in search engines.', answer: true },
    { id: 5, type: 'mc', text: '"El contenido patrocinado" must:', options: ['Be hidden from the audience', 'Be clearly identified as sponsored', 'Only appear on weekends', 'Be free of charge'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "El ___ de inversión calcula cuánto genera cada dólar" (return)', answer: 'retorno' },
    { id: 7, type: 'mc', text: 'A microinfluencer typically has:', options: ['Over 10 million followers', 'Between 1,000 and 100,000 followers with high engagement', 'No social media accounts', 'Only corporate followers'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what improved from 1.2% to 2.1%?', options: ['Engagement rate', 'Conversion rate', 'Bounce rate', 'Follower count'], answer: 1 },
    { id: 9, type: 'tf', text: '"El remarketing" shows ads to people who already visited your website.', answer: true },
    { id: 10, type: 'mc', text: '"La prueba A/B" is used to:', options: ['Grade students', 'Compare two versions of content to see which performs better', 'Test internet speed', 'Verify user identity'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "El ___ orgánico se refiere a las personas que ven el contenido sin publicidad" (reach)', answer: 'alcance' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what did Carlos insist on for his collaborations?', options: ['Higher payment', 'Authenticity and transparency', 'More followers', 'Exclusive platform rights'], answer: 1 },
    { id: 13, type: 'mc', text: '"La indexación" in SEO means:', options: ['Deleting web pages', 'Registering pages in the search engine database', 'Buying backlinks', 'Creating content'], answer: 1 },
    { id: 14, type: 'tf', text: '"Las métricas de vanidad" like follower count always reflect real business impact.', answer: false },
    { id: 15, type: 'mc', text: '"El storytelling de marca" aims to:', options: ['List product features', 'Connect emotionally with the audience through the brand story', 'Reduce prices', 'Eliminate competitors'], answer: 1 },
  ],

  audioBase: '/audio/L9.6/phrases',

  uniqueActivity: {
    id: 'CampaignBuilderL96',
    sectionId: 'campaign-builder',
    sectionColor: 'bg-purple-50/40',
    sectionBorder: 'border-purple-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'content-strategy': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'analytics-metrics': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'influencer-marketing': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'seo-sem': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    cultural: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'campaign-builder': { bg: 'bg-purple-50/40', border: 'border-purple-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
