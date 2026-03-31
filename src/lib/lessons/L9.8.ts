import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Startup Lifecycle (12) ===
  { spanish: 'La idea de negocio surge cuando identificas un problema real que afecta a un grupo de personas', english: 'The business idea arises when you identify a real problem affecting a group of people', pronunciation: 'lah ee-DEH-ah deh neh-GOH-see-oh SOOR-heh KWAHN-doh ee-dehn-tee-FEE-kahs oon proh-BLEH-mah rreh-AHL keh ah-FEHK-tah ah oon GROO-poh deh pehr-SOH-nahs', category: 'startup-lifecycle', audio: 'la-idea-de-negocio' },
  { spanish: 'El MVP es la versión mínima del producto que permite validar la hipótesis con usuarios reales', english: 'The MVP is the minimum version of the product that allows validating the hypothesis with real users', pronunciation: 'ehl eh-MEH-beh-PEH ehs lah behr-see-OHN MEE-nee-mah dehl proh-DOOK-toh keh pehr-MEE-teh bah-lee-DAHR lah ee-POH-teh-sees kohn oo-soo-AH-ree-ohs rreh-AH-lehs', category: 'startup-lifecycle', audio: 'el-mvp' },
  { spanish: 'La validación del mercado confirma que existe suficiente demanda para tu producto o servicio', english: 'Market validation confirms that there is enough demand for your product or service', pronunciation: 'lah bah-lee-dah-see-OHN dehl mehr-KAH-doh kohn-FEER-mah keh ehk-SEES-teh soo-fee-see-EHN-teh deh-MAHN-dah PAH-rah too proh-DOOK-toh oh sehr-BEE-see-oh', category: 'startup-lifecycle', audio: 'la-validacion-del-mercado' },
  { spanish: 'El product-market fit se alcanza cuando tu producto satisface una necesidad real del mercado de manera sostenible', english: 'Product-market fit is reached when your product satisfies a real market need in a sustainable way', pronunciation: 'ehl PROH-duhkt MAHR-keht feet seh ahl-KAHN-sah KWAHN-doh too proh-DOOK-toh sah-tees-FAH-seh OO-nah neh-seh-see-DAHD rreh-AHL dehl mehr-KAH-doh deh mah-NEH-rah sohs-teh-NEE-bleh', category: 'startup-lifecycle', audio: 'el-product-market-fit' },
  { spanish: 'La tracción demuestra con datos que tu startup está creciendo y que el modelo de negocio funciona', english: 'Traction demonstrates with data that your startup is growing and the business model works', pronunciation: 'lah trahk-see-OHN deh-MWEHS-trah kohn DAH-tohs keh too STAHR-tuhp ehs-TAH kreh-see-EHN-doh ee keh ehl moh-DEH-loh deh neh-GOH-see-oh foon-see-OH-nah', category: 'startup-lifecycle', audio: 'la-traccion' },
  { spanish: 'La escalabilidad es la capacidad de crecer sin que los costos aumenten proporcionalmente', english: 'Scalability is the ability to grow without costs increasing proportionally', pronunciation: 'lah ehs-kah-lah-bee-lee-DAHD ehs lah kah-pah-see-DAHD deh kreh-SEHR seen keh lohs KOHS-tohs ow-MEHN-tehn proh-pohr-see-oh-NAHL-mehn-teh', category: 'startup-lifecycle', audio: 'la-escalabilidad' },
  { spanish: 'El pivoteo es el cambio estratégico de dirección cuando el modelo original no funciona como se esperaba', english: 'Pivoting is the strategic change of direction when the original model does not work as expected', pronunciation: 'ehl pee-boh-TEH-oh ehs ehl KAHM-bee-oh ehs-trah-TEH-hee-koh deh dee-rehk-see-OHN KWAHN-doh ehl moh-DEH-loh oh-ree-hee-NAHL noh foon-see-OH-nah KOH-moh seh ehs-peh-RAH-bah', category: 'startup-lifecycle', audio: 'el-pivoteo' },
  { spanish: 'El modelo de negocio describe cómo la empresa crea, entrega y captura valor para sus clientes', english: 'The business model describes how the company creates, delivers, and captures value for its customers', pronunciation: 'ehl moh-DEH-loh deh neh-GOH-see-oh dehs-KREE-beh KOH-moh lah ehm-PREH-sah KREH-ah ehn-TREH-gah ee kahp-TOO-rah bah-LOHR PAH-rah soos klee-EHN-tehs', category: 'startup-lifecycle', audio: 'el-modelo-de-negocio' },
  { spanish: 'La propuesta de valor explica por qué el cliente debería elegir tu producto sobre la competencia', english: 'The value proposition explains why the customer should choose your product over the competition', pronunciation: 'lah proh-PWEHS-tah deh bah-LOHR ehks-PLEE-kah pohr keh ehl klee-EHN-teh deh-beh-REE-ah eh-leh-HEER too proh-DOOK-toh SOH-breh lah kohm-peh-TEHN-see-ah', category: 'startup-lifecycle', audio: 'la-propuesta-de-valor' },
  { spanish: 'El lean startup minimiza el desperdicio construyendo productos iterativamente basándose en el feedback', english: 'Lean startup minimizes waste by building products iteratively based on feedback', pronunciation: 'ehl leen STAHR-tuhp mee-nee-MEE-sah ehl dehs-pehr-DEE-see-oh kohns-troo-YEHN-doh proh-DOOK-tohs ee-teh-rah-tee-bah-MEHN-teh bah-SAHN-doh-seh ehn ehl FEED-bahk', category: 'startup-lifecycle', audio: 'el-lean-startup' },
  { spanish: 'El equipo fundador combina habilidades complementarias en tecnología, negocio y diseño', english: 'The founding team combines complementary skills in technology, business, and design', pronunciation: 'ehl eh-KEE-poh foon-dah-DOHR kohm-BEE-nah ah-bee-lee-DAH-dehs kohm-pleh-mehn-TAH-ree-ahs ehn tehk-noh-loh-HEE-ah neh-GOH-see-oh ee dee-SEH-nyoh', category: 'startup-lifecycle', audio: 'el-equipo-fundador' },
  { spanish: 'La cultura de la startup define los valores, la velocidad y la tolerancia al riesgo del equipo', english: 'The startup culture defines the values, speed, and risk tolerance of the team', pronunciation: 'lah kool-TOO-rah deh lah STAHR-tuhp deh-FEE-neh lohs bah-LOH-rehs lah beh-loh-see-DAHD ee lah toh-leh-RAHN-see-ah ahl ree-EHS-goh dehl eh-KEE-poh', category: 'startup-lifecycle', audio: 'la-cultura-de-la-startup' },

  // === Funding & Investment (12) ===
  { spanish: 'El capital semilla es la primera inversión que permite a la startup desarrollar su producto inicial', english: 'Seed capital is the first investment that allows the startup to develop its initial product', pronunciation: 'ehl kah-pee-TAHL seh-MEE-yah ehs lah pree-MEH-rah een-behr-see-OHN keh pehr-MEE-teh ah lah STAHR-tuhp deh-sah-rroh-YAHR soo proh-DOOK-toh ee-nee-see-AHL', category: 'funding-investment', audio: 'el-capital-semilla' },
  { spanish: 'La ronda serie A financia el crecimiento de startups que ya han demostrado tracción y product-market fit', english: 'The Series A round finances the growth of startups that have already demonstrated traction and product-market fit', pronunciation: 'lah RROHN-dah SEH-ree-eh AH fee-NAHN-see-ah ehl kreh-see-mee-EHN-toh deh STAHR-tuhps keh yah ahn deh-mohs-TRAH-doh trahk-see-OHN ee PROH-duhkt MAHR-keht feet', category: 'funding-investment', audio: 'la-ronda-serie-a' },
  { spanish: 'El inversor ángel es una persona que invierte su propio dinero en startups en etapas tempranas', english: 'An angel investor is a person who invests their own money in early-stage startups', pronunciation: 'ehl een-behr-SOHR AHN-hehl ehs OO-nah pehr-SOH-nah keh een-bee-EHR-teh soo PROH-pee-oh dee-NEH-roh ehn STAHR-tuhps ehn eh-TAH-pahs tehm-PRAH-nahs', category: 'funding-investment', audio: 'el-inversor-angel' },
  { spanish: 'El crowdfunding permite a miles de personas invertir pequeñas cantidades para financiar un proyecto', english: 'Crowdfunding allows thousands of people to invest small amounts to finance a project', pronunciation: 'ehl KROWD-fahn-deeng pehr-MEE-teh ah MEE-lehs deh pehr-SOH-nahs een-behr-TEER peh-KEH-nyahs kahn-tee-DAH-dehs PAH-rah fee-nahn-see-AHR oon proh-YEHK-toh', category: 'funding-investment', audio: 'el-crowdfunding' },
  { spanish: 'La valoración pre-money estima cuánto vale la empresa antes de recibir la nueva inversión', english: 'The pre-money valuation estimates how much the company is worth before receiving the new investment', pronunciation: 'lah bah-loh-rah-see-OHN preh-MAH-nee ehs-TEE-mah KWAHN-toh BAH-leh lah ehm-PREH-sah AHN-tehs deh rreh-see-BEER lah NWEH-bah een-behr-see-OHN', category: 'funding-investment', audio: 'la-valoracion-pre-money' },
  { spanish: 'El term sheet establece las condiciones principales de la inversión antes de firmar el contrato final', english: 'The term sheet establishes the main conditions of the investment before signing the final contract', pronunciation: 'ehl tehrm sheet ehs-tah-BLEH-seh lahs kohn-dee-see-OH-nehs preen-see-PAH-lehs deh lah een-behr-see-OHN AHN-tehs deh feer-MAHR ehl kohn-TRAH-toh fee-NAHL', category: 'funding-investment', audio: 'el-term-sheet' },
  { spanish: 'La dilución ocurre cuando los fundadores ceden un porcentaje de propiedad a cambio de capital nuevo', english: 'Dilution occurs when founders give up a percentage of ownership in exchange for new capital', pronunciation: 'lah dee-loo-see-OHN oh-KOO-rreh KWAHN-doh lohs foon-dah-DOH-rehs SEH-dehn oon pohr-sehn-TAH-heh deh proh-pee-eh-DAHD ah KAHM-bee-oh deh kah-pee-TAHL NWEH-boh', category: 'funding-investment', audio: 'la-dilucion' },
  { spanish: 'El pitch deck es la presentación que los emprendedores usan para convencer a los inversores de financiar su proyecto', english: 'The pitch deck is the presentation entrepreneurs use to convince investors to fund their project', pronunciation: 'ehl peetch dehk ehs lah preh-sehn-tah-see-OHN keh lohs ehm-prehn-deh-DOH-rehs OO-sahn PAH-rah kohn-behn-SEHR ah lohs een-behr-SOH-rehs deh fee-nahn-see-AHR soo proh-YEHK-toh', category: 'funding-investment', audio: 'el-pitch-deck' },
  { spanish: 'La aceleradora proporciona mentoría, recursos y financiamiento a startups durante un programa intensivo', english: 'The accelerator provides mentorship, resources, and funding to startups during an intensive program', pronunciation: 'lah ah-seh-leh-rah-DOH-rah proh-pohr-see-OH-nah mehn-toh-REE-ah rreh-KOOR-sohs ee fee-nahn-see-ah-mee-EHN-toh ah STAHR-tuhps doo-RAHN-teh oon proh-GRAH-mah een-tehn-SEE-boh', category: 'funding-investment', audio: 'la-aceleradora' },
  { spanish: 'El bootstrapping financia la startup con ingresos propios sin depender de inversores externos', english: 'Bootstrapping finances the startup with its own revenue without depending on external investors', pronunciation: 'ehl BOOS-trahp-peeng fee-NAHN-see-ah lah STAHR-tuhp kohn een-GREH-sohs PROH-pee-ohs seen deh-pehn-DEHR deh een-behr-SOH-rehs ehks-TEHR-nohs', category: 'funding-investment', audio: 'el-bootstrapping' },
  { spanish: 'La debida diligencia es el proceso de investigación que el inversor realiza antes de comprometer su capital', english: 'Due diligence is the investigation process the investor carries out before committing their capital', pronunciation: 'lah deh-BEE-dah dee-lee-HEHN-see-ah ehs ehl proh-SEH-soh deh een-behs-tee-gah-see-OHN keh ehl een-behr-SOHR rreh-ah-LEE-sah AHN-tehs deh kohm-proh-meh-TEHR soo kah-pee-TAHL', category: 'funding-investment', audio: 'la-debida-diligencia' },
  { spanish: 'La ronda puente es una financiación temporal que mantiene a la startup operando hasta la siguiente ronda formal', english: 'A bridge round is temporary financing that keeps the startup operating until the next formal round', pronunciation: 'lah RROHN-dah PWEHN-teh ehs OO-nah fee-nahn-see-ah-see-OHN tehm-poh-RAHL keh mahn-tee-EH-neh ah lah STAHR-tuhp oh-peh-RAHN-doh AHS-tah lah see-gee-EHN-teh RROHN-dah fohr-MAHL', category: 'funding-investment', audio: 'la-ronda-puente' },

  // === Scaling & Growth (12) ===
  { spanish: 'La expansión internacional requiere adaptar el producto a las regulaciones y cultura de cada mercado', english: 'International expansion requires adapting the product to the regulations and culture of each market', pronunciation: 'lah ehks-pahn-see-OHN een-tehr-nah-see-oh-NAHL rreh-kee-EH-reh ah-dahp-TAHR ehl proh-DOOK-toh ah lahs rreh-goo-lah-see-OH-nehs ee kool-TOO-rah deh KAH-dah mehr-KAH-doh', category: 'scaling-growth', audio: 'la-expansion-internacional' },
  { spanish: 'La franquicia permite replicar un modelo de negocio exitoso en múltiples ubicaciones con operadores independientes', english: 'Franchising allows replicating a successful business model in multiple locations with independent operators', pronunciation: 'lah frahn-KEE-see-ah pehr-MEE-teh rreh-plee-KAHR oon moh-DEH-loh deh neh-GOH-see-oh ehk-see-TOH-soh ehn MOOL-tee-plehs oo-bee-kah-see-OH-nehs kohn oh-peh-rah-DOH-rehs een-deh-pehn-dee-EHN-tehs', category: 'scaling-growth', audio: 'la-franquicia' },
  { spanish: 'Las economías de escala reducen el costo unitario a medida que aumenta el volumen de producción', english: 'Economies of scale reduce the unit cost as production volume increases', pronunciation: 'lahs eh-koh-noh-MEE-ahs deh ehs-KAH-lah rreh-DOO-sehn ehl KOHS-toh oo-nee-TAH-ree-oh ah meh-DEE-dah keh ow-MEHN-tah ehl boh-LOO-mehn deh proh-dook-see-OHN', category: 'scaling-growth', audio: 'las-economias-de-escala' },
  { spanish: 'La retención de clientes es más rentable que la adquisición de nuevos clientes para el crecimiento sostenible', english: 'Customer retention is more profitable than acquiring new customers for sustainable growth', pronunciation: 'lah rreh-tehn-see-OHN deh klee-EHN-tehs ehs mahs rrehn-TAH-bleh keh lah ahd-kee-see-see-OHN deh NWEH-bohs klee-EHN-tehs PAH-rah ehl kreh-see-mee-EHN-toh sohs-teh-NEE-bleh', category: 'scaling-growth', audio: 'la-retencion-de-clientes' },
  { spanish: 'El crecimiento exponencial ocurre cuando cada nuevo usuario atrae a más usuarios de manera orgánica', english: 'Exponential growth occurs when each new user attracts more users organically', pronunciation: 'ehl kreh-see-mee-EHN-toh ehks-poh-nehn-see-AHL oh-KOO-rreh KWAHN-doh KAH-dah NWEH-boh oo-soo-AH-ree-oh ah-TRAH-eh ah mahs oo-soo-AH-ree-ohs deh mah-NEH-rah ohr-GAH-nee-kah', category: 'scaling-growth', audio: 'el-crecimiento-exponencial' },
  { spanish: 'La automatización de procesos permite escalar operaciones sin necesidad de contratar proporcionalmente más personal', english: 'Process automation allows scaling operations without needing to proportionally hire more staff', pronunciation: 'lah ow-toh-mah-tee-sah-see-OHN deh proh-SEH-sohs pehr-MEE-teh ehs-kah-LAHR oh-peh-rah-see-OH-nehs seen neh-seh-see-DAHD deh kohn-trah-TAHR proh-pohr-see-oh-NAHL-mehn-teh mahs pehr-soh-NAHL', category: 'scaling-growth', audio: 'la-automatizacion-de-procesos' },
  { spanish: 'La estrategia de salida define cómo los fundadores e inversores recuperarán su inversión', english: 'The exit strategy defines how founders and investors will recover their investment', pronunciation: 'lah ehs-trah-TEH-hee-ah deh sah-LEE-dah deh-FEE-neh KOH-moh lohs foon-dah-DOH-rehs eh een-behr-SOH-rehs rreh-koo-peh-rah-RAHN soo een-behr-see-OHN', category: 'scaling-growth', audio: 'la-estrategia-de-salida' },
  { spanish: 'La fusión o adquisición permite a empresas más grandes absorber startups con tecnología innovadora', english: 'Merger or acquisition allows larger companies to absorb startups with innovative technology', pronunciation: 'lah foo-see-OHN oh ahd-kee-see-see-OHN pehr-MEE-teh ah ehm-PREH-sahs mahs GRAHN-dehs ahb-sohr-BEHR STAHR-tuhps kohn tehk-noh-loh-HEE-ah ee-noh-bah-DOH-rah', category: 'scaling-growth', audio: 'la-fusion-o-adquisicion' },
  { spanish: 'El unicornio es una startup valorada en más de mil millones de dólares antes de salir a bolsa', english: 'A unicorn is a startup valued at over one billion dollars before going public', pronunciation: 'ehl oo-nee-KOHR-nee-oh ehs OO-nah STAHR-tuhp bah-loh-RAH-dah ehn mahs deh meel mee-YOH-nehs deh DOH-lah-rehs AHN-tehs deh sah-LEER ah BOHL-sah', category: 'scaling-growth', audio: 'el-unicornio' },
  { spanish: 'La oferta pública inicial permite a la startup vender acciones al público en la bolsa de valores', english: 'The initial public offering allows the startup to sell shares to the public on the stock exchange', pronunciation: 'lah oh-FEHR-tah POO-blee-kah ee-nee-see-AHL pehr-MEE-teh ah lah STAHR-tuhp behn-DEHR ahk-see-OH-nehs ahl POO-blee-koh ehn lah BOHL-sah deh bah-LOH-rehs', category: 'scaling-growth', audio: 'la-oferta-publica-inicial' },
  { spanish: 'La internacionalización exitosa requiere entender las diferencias culturales y adaptar el marketing local', english: 'Successful internationalization requires understanding cultural differences and adapting local marketing', pronunciation: 'lah een-tehr-nah-see-oh-nah-lee-sah-see-OHN ehk-see-TOH-sah rreh-kee-EH-reh ehn-tehn-DEHR lahs dee-feh-REHN-see-ahs kool-too-RAH-lehs ee ah-dahp-TAHR ehl MAHR-keh-teeng loh-KAHL', category: 'scaling-growth', audio: 'la-internacionalizacion' },
  { spanish: 'El crecimiento sostenible equilibra la velocidad de expansión con la salud financiera de la empresa', english: 'Sustainable growth balances the speed of expansion with the financial health of the company', pronunciation: 'ehl kreh-see-mee-EHN-toh sohs-teh-NEE-bleh eh-kee-LEE-brah lah beh-loh-see-DAHD deh ehks-pahn-see-OHN kohn lah sah-LOOD fee-nahn-see-EH-rah deh lah ehm-PREH-sah', category: 'scaling-growth', audio: 'el-crecimiento-sostenible' },

  // === Social Enterprise (12) ===
  { spanish: 'El emprendimiento social busca resolver problemas sociales o ambientales a través de modelos de negocio sostenibles', english: 'Social entrepreneurship seeks to solve social or environmental problems through sustainable business models', pronunciation: 'ehl ehm-prehn-dee-mee-EHN-toh soh-see-AHL BOOS-kah rreh-sohl-BEHR proh-BLEH-mahs soh-see-AH-lehs oh ahm-bee-ehn-TAH-lehs ah trah-BEHS deh moh-DEH-lohs deh neh-GOH-see-oh sohs-teh-NEE-blehs', category: 'social-enterprise', audio: 'el-emprendimiento-social' },
  { spanish: 'El triple impacto mide el éxito en tres dimensiones: económica, social y ambiental', english: 'Triple impact measures success in three dimensions: economic, social, and environmental', pronunciation: 'ehl TREE-pleh eem-PAHK-toh MEE-deh ehl EHK-see-toh ehn trehs dee-mehn-see-OH-nehs eh-koh-NOH-mee-kah soh-see-AHL ee ahm-bee-ehn-TAHL', category: 'social-enterprise', audio: 'el-triple-impacto' },
  { spanish: 'La empresa B certificada cumple con estándares rigurosos de desempeño social y ambiental verificados externamente', english: 'The certified B corporation meets rigorous standards of social and environmental performance verified externally', pronunciation: 'lah ehm-PREH-sah beh sehr-tee-fee-KAH-dah KOOM-pleh kohn ehs-TAHN-dah-rehs ree-goo-ROH-sohs deh dehm-peh-NYOH soh-see-AHL ee ahm-bee-ehn-TAHL beh-ree-fee-KAH-dohs ehks-tehr-nah-MEHN-teh', category: 'social-enterprise', audio: 'la-empresa-b-certificada' },
  { spanish: 'El impacto medible utiliza indicadores cuantificables para demostrar el cambio social generado', english: 'Measurable impact uses quantifiable indicators to demonstrate the social change generated', pronunciation: 'ehl eem-PAHK-toh meh-DEE-bleh oo-tee-LEE-sah een-dee-kah-DOH-rehs kwahn-tee-fee-KAH-blehs PAH-rah deh-mohs-TRAHR ehl KAHM-bee-oh soh-see-AHL heh-neh-RAH-doh', category: 'social-enterprise', audio: 'el-impacto-medible' },
  { spanish: 'La innovación social desarrolla soluciones nuevas para necesidades sociales que los mercados tradicionales no atienden', english: 'Social innovation develops new solutions for social needs that traditional markets do not address', pronunciation: 'lah ee-noh-bah-see-OHN soh-see-AHL deh-sah-RROH-yah soh-loo-see-OH-nehs NWEH-bahs PAH-rah neh-seh-see-DAH-dehs soh-see-AH-lehs keh lohs mehr-KAH-dohs trah-dee-see-oh-NAH-lehs noh ah-tee-EHN-dehn', category: 'social-enterprise', audio: 'la-innovacion-social' },
  { spanish: 'La economía solidaria prioriza el bienestar de las personas y comunidades sobre la maximización del beneficio', english: 'The solidarity economy prioritizes the wellbeing of people and communities over profit maximization', pronunciation: 'lah eh-koh-noh-MEE-ah soh-lee-DAH-ree-ah pree-oh-REE-sah ehl bee-ehn-ehs-TAHR deh lahs pehr-SOH-nahs ee koh-moo-nee-DAH-dehs SOH-breh lah mahk-see-mee-sah-see-OHN dehl beh-neh-FEE-see-oh', category: 'social-enterprise', audio: 'la-economia-solidaria' },
  { spanish: 'El comercio justo garantiza precios dignos a los productores de países en desarrollo', english: 'Fair trade guarantees fair prices to producers in developing countries', pronunciation: 'ehl koh-MEHR-see-oh HOOS-toh gah-rahn-TEE-sah PREH-see-ohs DEEG-nohs ah lohs proh-dook-TOH-rehs deh pah-EE-sehs ehn deh-sah-RROH-yoh', category: 'social-enterprise', audio: 'el-comercio-justo' },
  { spanish: 'La microfinanza ofrece servicios financieros a personas de bajos ingresos que no tienen acceso a la banca tradicional', english: 'Microfinance offers financial services to low-income people who do not have access to traditional banking', pronunciation: 'lah mee-kroh-fee-NAHN-sah oh-FREH-seh sehr-BEE-see-ohs fee-nahn-see-EH-rohs ah pehr-SOH-nahs deh BAH-hohs een-GREH-sohs keh noh tee-EH-nehn ahk-SEH-soh ah lah BAHN-kah trah-dee-see-oh-NAHL', category: 'social-enterprise', audio: 'la-microfinanza' },
  { spanish: 'La economía circular diseña productos para ser reutilizados, reciclados o compostados al final de su vida útil', english: 'The circular economy designs products to be reused, recycled, or composted at the end of their useful life', pronunciation: 'lah eh-koh-noh-MEE-ah seer-koo-LAHR dee-SEH-nyah proh-DOOK-tohs PAH-rah sehr rreh-oo-tee-lee-SAH-dohs rreh-see-KLAH-dohs oh kohm-pohs-TAH-dohs ahl fee-NAHL deh soo BEE-dah OO-teel', category: 'social-enterprise', audio: 'la-economia-circular' },
  { spanish: 'La inversión de impacto busca retorno financiero junto con beneficios sociales y ambientales medibles', english: 'Impact investing seeks financial return along with measurable social and environmental benefits', pronunciation: 'lah een-behr-see-OHN deh eem-PAHK-toh BOOS-kah rreh-TOHR-noh fee-nahn-see-EH-roh HOON-toh kohn beh-neh-FEE-see-ohs soh-see-AH-lehs ee ahm-bee-ehn-TAH-lehs meh-DEE-blehs', category: 'social-enterprise', audio: 'la-inversion-de-impacto' },
  { spanish: 'La cooperativa es una empresa de propiedad colectiva donde cada miembro tiene voz y voto en las decisiones', english: 'A cooperative is a collectively owned business where each member has a voice and vote in decisions', pronunciation: 'lah koh-oh-peh-rah-TEE-bah ehs OO-nah ehm-PREH-sah deh proh-pee-eh-DAHD koh-lehk-TEE-bah DOHN-deh KAH-dah mee-EHM-broh tee-EH-neh bohs ee BOH-toh ehn lahs deh-see-see-OH-nehs', category: 'social-enterprise', audio: 'la-cooperativa' },
  { spanish: 'El emprendedor social mide su éxito no solo por las ganancias sino por las vidas que transforma', english: 'The social entrepreneur measures their success not only by profits but by the lives they transform', pronunciation: 'ehl ehm-prehn-deh-DOHR soh-see-AHL MEE-deh soo EHK-see-toh noh SOH-loh pohr lahs gah-NAHN-see-ahs SEE-noh pohr lahs BEE-dahs keh trahns-FOHR-mah', category: 'social-enterprise', audio: 'el-emprendedor-social' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L98PhraseByAudio = phraseByAudio

// === PITCH PERFECT (unique activity) ===

export interface PitchPerfectChallenge {
  scenario: string
  english: string
  correctPitch: string
  options: string[]
}

export const PITCH_PERFECT_CHALLENGES: PitchPerfectChallenge[] = [
  {
    scenario: 'Tienes 60 segundos para convencer a un inversor ángel. Tu startup de fintech ayuda a personas sin cuenta bancaria a acceder a servicios financieros. ¿Cuál es tu mejor pitch?',
    english: 'You have 60 seconds to convince an angel investor. Your fintech startup helps unbanked people access financial services. What is your best pitch?',
    correctPitch: 'Más de 200 millones de personas en Latinoamérica no tienen cuenta bancaria. Nuestra app permite microahorro y micropréstamos desde cualquier teléfono, con un modelo que ya tiene 50.000 usuarios y crece 30% mensual.',
    options: ['Nuestra app es la mejor del mercado y necesitamos su dinero para crecer', 'Más de 200 millones de personas en Latinoamérica no tienen cuenta bancaria. Nuestra app permite microahorro y micropréstamos desde cualquier teléfono, con un modelo que ya tiene 50.000 usuarios y crece 30% mensual.', 'Somos una empresa de tecnología financiera con un gran equipo de ingenieros', 'Queremos ser el banco digital más grande de Latinoamérica en cinco años'],
  },
  {
    scenario: 'Tu startup de educación online pivoteó tres veces y un inversor te pregunta: "¿Por qué debería confiar en ustedes si han cambiado de dirección tantas veces?" ¿Cómo respondes?',
    english: 'Your edtech startup pivoted three times and an investor asks: "Why should I trust you if you\'ve changed direction so many times?" How do you respond?',
    correctPitch: 'Cada pivoteo fue basado en datos del mercado. Aprendimos que los profesores, no los estudiantes, son nuestros verdaderos clientes. Esa lección nos dio product-market fit: 90% de retención y crecimiento orgánico del 40%.',
    options: ['Porque esta vez sí va a funcionar, estamos seguros', 'Cada pivoteo fue basado en datos del mercado. Aprendimos que los profesores, no los estudiantes, son nuestros verdaderos clientes. Esa lección nos dio product-market fit: 90% de retención y crecimiento orgánico del 40%.', 'No se preocupe, muchas startups exitosas pivotearon varias veces', 'Hemos mejorado nuestro producto significativamente desde la última versión'],
  },
  {
    scenario: 'Estás en un demo day de una aceleradora en Santiago. ¿Cómo empiezas tu presentación de 3 minutos para captar la atención inmediata de los inversores?',
    english: 'You\'re at a demo day at an accelerator in Santiago. How do you start your 3-minute presentation to immediately capture investors\' attention?',
    correctPitch: 'Hace dos años mi madre esperó seis horas en un hospital público para una consulta de 10 minutos. Eso me inspiró a crear MediRápido: telemedicina que reduce el tiempo de espera de horas a minutos.',
    options: ['Buenos días, mi nombre es Carlos y soy el CEO de nuestra empresa', 'Hace dos años mi madre esperó seis horas en un hospital público para una consulta de 10 minutos. Eso me inspiró a crear MediRápido: telemedicina que reduce el tiempo de espera de horas a minutos.', 'Nuestra empresa tiene un equipo increíble y una tecnología innovadora', 'El mercado de salud digital vale 500 mil millones de dólares globalmente'],
  },
  {
    scenario: 'Un inversor te dice: "Su propuesta de valor no es clara. ¿Qué problema resuelven exactamente?" Tu startup de logística conecta pequeños comerciantes con repartidores. ¿Cómo clarificas?',
    english: 'An investor says: "Your value proposition is not clear. What problem do you solve exactly?" Your logistics startup connects small merchants with delivery drivers. How do you clarify?',
    correctPitch: 'El pequeño comerciante pierde el 40% de sus ventas potenciales porque no puede ofrecer entregas rápidas. Nosotros conectamos tiendas locales con una red de 5.000 repartidores, con entrega en menos de una hora y a la mitad del costo de los competidores.',
    options: ['Resolvemos el problema de la logística de última milla en América Latina', 'El pequeño comerciante pierde el 40% de sus ventas potenciales porque no puede ofrecer entregas rápidas. Nosotros conectamos tiendas locales con una red de 5.000 repartidores, con entrega en menos de una hora y a la mitad del costo de los competidores.', 'Somos como Uber pero para entregas de tiendas pequeñas', 'Nuestra plataforma tecnológica es superior a cualquier competidor en el mercado'],
  },
  {
    scenario: 'Un fondo de inversión de impacto te pregunta cómo mides el impacto social de tu empresa de reciclaje en comunidades rurales. ¿Qué respondes?',
    english: 'An impact investment fund asks how you measure the social impact of your recycling company in rural communities. What do you respond?',
    correctPitch: 'Medimos tres indicadores verificados por terceros: toneladas de plástico reciclado (850 este año), empleos dignos creados en comunidades rurales (120 familias), e ingresos adicionales generados para recicladores informales (35% de aumento promedio).',
    options: ['Nuestro impacto social es muy grande y la comunidad está contenta', 'Medimos tres indicadores verificados por terceros: toneladas de plástico reciclado (850 este año), empleos dignos creados en comunidades rurales (120 familias), e ingresos adicionales generados para recicladores informales (35% de aumento promedio).', 'Somos una empresa B certificada, así que cumplimos con todos los estándares', 'El impacto ambiental se puede ver en la limpieza de los ríos de la zona'],
  },
  {
    scenario: 'Un inversor potencial pregunta por tu estrategia de salida. Tu empresa social tiene doble propósito: ganancias e impacto. ¿Cómo contestas sin comprometer tu misión?',
    english: 'A potential investor asks about your exit strategy. Your social enterprise has a dual purpose: profits and impact. How do you answer without compromising your mission?',
    correctPitch: 'Nuestra estructura como empresa B certificada protege la misión social incluso en caso de venta. La estrategia es una adquisición por un corporativo de triple impacto o una oferta pública que mantenga la cláusula de impacto en los estatutos.',
    options: ['No pensamos en la salida, solo en el impacto social', 'Nuestra estructura como empresa B certificada protege la misión social incluso en caso de venta. La estrategia es una adquisición por un corporativo de triple impacto o una oferta pública que mantenga la cláusula de impacto en los estatutos.', 'Venderemos la empresa al mejor postor cuando llegue el momento', 'Preferimos no tener inversores externos para mantener nuestra independencia'],
  },
  {
    scenario: 'Estás negociando un term sheet con una aceleradora que pide el 15% de equity. Tú consideras que es demasiado. ¿Cómo negocias?',
    english: 'You\'re negotiating a term sheet with an accelerator asking for 15% equity. You consider it too much. How do you negotiate?',
    correctPitch: 'Agradecemos la oferta. Con nuestra tracción actual (200% de crecimiento trimestral) y una valoración pre-money basada en comparables del mercado, proponemos 8% a cambio de los $150K más mentoría y acceso a su red de inversores.',
    options: ['Aceptamos los términos porque necesitamos el dinero urgentemente', 'Agradecemos la oferta. Con nuestra tracción actual (200% de crecimiento trimestral) y una valoración pre-money basada en comparables del mercado, proponemos 8% a cambio de los $150K más mentoría y acceso a su red de inversores.', 'Eso es demasiado, no vamos a dar más del 5% de equity', 'Necesitamos consultarlo con nuestro abogado antes de responder'],
  },
]

// === LESSON DATA ===

export const L98Data: LessonData = {
  id: 'L9.8',
  hero: {
    lessonId: 'L9.8',
    title: 'Entrepreneurship & Innovation',
    subtitle: 'Startup lifecycle, funding, scaling, failure/pivoting, and social enterprise',
    description: 'Master the vocabulary of entrepreneurship — from building an MVP and validating your market to pitching investors, scaling your startup, and creating social impact. Learn to navigate the startup ecosystem in Spanish-speaking markets.',
    image: '/images/L9.8/L9.8.jpg',
    gradient: 'from-teal-800/65 via-emerald-700/55 to-green-700/65',
    accentColor: 'teal-200',
  },

  objectives: [
    { icon: '💡', title: 'Startup Lifecycle', desc: 'Learn vocabulary for business ideas, MVPs, market validation, product-market fit, and pivoting.' },
    { icon: '💰', title: 'Funding & Investment', desc: 'Master terms for seed capital, Series A, angel investors, crowdfunding, and term sheets.' },
    { icon: '📈', title: 'Scaling & Growth', desc: 'Discuss international expansion, economies of scale, unicorns, and exit strategies.' },
    { icon: '🌱', title: 'Social Enterprise', desc: 'Explore triple impact, B corps, social innovation, fair trade, and solidarity economy.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L8.2', label: 'Economics & Business', detail: 'L8.2 covered macroeconomics and finance. Now apply those concepts to the world of startups and venture capital.' },
    { fromLesson: 'L5.5', label: 'Professional Communication', detail: 'L5.5 taught workplace communication. Now use those skills to pitch investors and negotiate deals.' },
    { fromLesson: 'L6.8', label: 'Public Speaking & Rhetoric', detail: 'L6.8 covered persuasive speaking. Now apply rhetoric to elevator pitches and investor presentations.' },
  ],

  sectionTransitions: [
    { afterSection: 'startup-lifecycle', text: 'Startup basics covered! Now let\'s explore how to fund your venture.' },
    { afterSection: 'funding-investment', text: 'Funding mastered! Let\'s learn about scaling and growth strategies.' },
    { afterSection: 'scaling-growth', text: 'Growth strategies understood! Now let\'s discover social enterprise.' },
    { afterSection: 'dialogues', text: 'Great entrepreneurial conversations! Let\'s explore the culture.' },
    { afterSection: 'cultural', text: 'Now test your pitch skills in the Pitch Perfect activity!' },
    { afterSection: 'pitch-perfect', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Nuestra startup resuelve...', english: 'Our startup solves...' },
    { spanish: 'El modelo de negocio es...', english: 'The business model is...' },
    { spanish: 'Buscamos capital para...', english: 'We are seeking capital to...' },
    { spanish: 'La tracción demuestra que...', english: 'Traction demonstrates that...' },
    { spanish: 'El impacto social se mide en...', english: 'Social impact is measured in...' },
    { spanish: 'Pivoteamos porque...', english: 'We pivoted because...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La validación del mercado confirma la demanda del producto', pronunciation: 'lah bah-lee-dah-see-OHN dehl mehr-KAH-doh kohn-FEER-mah lah deh-MAHN-dah dehl proh-DOOK-toh', english: 'Market validation confirms product demand', audio: 'la-validacion-del-mercado', tip: '"Validación" follows the standard -CIÓN pattern. "Mercado" stresses the penultimate: mer-CA-do.' },
    { spanish: 'El inversor ángel quiere ver tracción antes de invertir', pronunciation: 'ehl een-behr-SOHR AHN-hehl kee-EH-reh behr trahk-see-OHN AHN-tehs deh een-behr-TEER', english: 'The angel investor wants to see traction before investing', audio: 'el-inversor-angel', tip: '"Inversor" stresses the last syllable: inver-SOR. "Ángel" is stressed on the first syllable: ÁN-gel (esdrújula).' },
    { spanish: 'La escalabilidad determina el potencial de crecimiento', pronunciation: 'lah ehs-kah-lah-bee-lee-DAHD deh-tehr-MEE-nah ehl poh-tehn-see-AHL deh kreh-see-mee-EHN-toh', english: 'Scalability determines the growth potential', audio: 'la-escalabilidad', tip: '"Escalabilidad" is a long word: es-ca-la-bi-li-DAD. Practice syllable by syllable. "Crecimiento" stresses the third-to-last: creci-MIEN-to.' },
    { spanish: 'El emprendimiento social genera triple impacto', pronunciation: 'ehl ehm-prehn-dee-mee-EHN-toh soh-see-AHL heh-NEH-rah TREE-pleh eem-PAHK-toh', english: 'Social entrepreneurship generates triple impact', audio: 'el-emprendimiento-social', tip: '"Emprendimiento" stresses the fourth-to-last: emprendi-MIEN-to. It comes from "emprender" (to undertake/start) — a key verb for entrepreneurs.' },
    { spanish: 'La ronda serie A financia el crecimiento de la startup', pronunciation: 'lah RROHN-dah SEH-ree-eh AH fee-NAHN-see-ah ehl kreh-see-mee-EHN-toh deh lah STAHR-tuhp', english: 'The Series A round finances the startup\'s growth', audio: 'la-ronda-serie-a', tip: '"Ronda" and "serie" are both stressed on the penultimate: RON-da, SE-rie. "Financia" has four syllables: fi-NAN-cia.' },
    { spanish: 'La cooperativa es propiedad colectiva de todos sus miembros', pronunciation: 'lah koh-oh-peh-rah-TEE-bah ehs proh-pee-eh-DAHD koh-lehk-TEE-bah deh TOH-dohs soos mee-EHM-brohs', english: 'The cooperative is collectively owned by all its members', audio: 'la-cooperativa', tip: '"Cooperativa" has five syllables: co-o-pe-ra-TI-va. "Propiedad" stresses the last syllable: propie-DAD.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'startup-lifecycle', label: 'Startup Lifecycle' },
    { id: 'funding-investment', label: 'Funding & Investment' },
    { id: 'scaling-growth', label: 'Scaling & Growth' },
    { id: 'social-enterprise', label: 'Social Enterprise' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'pitch-perfect', label: 'Pitch Perfect' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'startup-lifecycle',
      title: 'Startup Lifecycle — El Ciclo de Vida de una Startup',
      description: 'From idea to product-market fit: MVPs, validation, traction, scalability, and pivoting.',
      tabs: [
        { label: 'Idea to MVP', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'startup-lifecycle').slice(0, 6) },
        { label: 'Growth & Culture', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'startup-lifecycle').slice(6) },
      ],
    },
    {
      id: 'funding-investment',
      title: 'Funding & Investment — Financiamiento e Inversión',
      description: 'Seed capital, Series A, angel investors, crowdfunding, term sheets, and dilution.',
      tabs: [
        { label: 'Early Stage', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'funding-investment').slice(0, 6) },
        { label: 'Advanced Funding', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'funding-investment').slice(6) },
      ],
    },
    {
      id: 'scaling-growth',
      title: 'Scaling & Growth — Escalamiento y Crecimiento',
      description: 'International expansion, economies of scale, exit strategies, and unicorns.',
      tabs: [
        { label: 'Expansion Strategies', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'scaling-growth').slice(0, 6) },
        { label: 'Exits & Milestones', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'scaling-growth').slice(6) },
      ],
    },
    {
      id: 'social-enterprise',
      title: 'Social Enterprise — Emprendimiento Social',
      description: 'Triple impact, B corps, social innovation, fair trade, and solidarity economy.',
      tabs: [
        { label: 'Mission-Driven', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'social-enterprise').slice(0, 6) },
        { label: 'Impact Models', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'social-enterprise').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    { title: 'Startup Loanwords in Spanish', content: 'The Spanish startup ecosystem uses many English loanwords: "startup," "MVP," "pitch," "bootstrapping." However, many concepts have Spanish equivalents: "emprendimiento" (entrepreneurship), "capital semilla" (seed capital), "pivoteo" (pivoting). Professional contexts often mix both freely.', example: 'El MVP de nuestra startup ya tiene tracción en el mercado.' },
    { title: 'Investment Vocabulary', content: 'Financial terms combine English and Spanish: "ronda serie A" (Series A round), "inversor ángel" (angel investor), "valoración pre-money" (pre-money valuation). Note that "inversión" (investment) and "inversor" (investor) have different stress: inver-SIÓN vs. inver-SOR.', example: 'El inversor ángel participó en la ronda serie A con una valoración pre-money de dos millones.', reviewFrom: 'L8.2' },
    { title: 'Social Enterprise Terms', content: '"Emprendimiento social" (social entrepreneurship), "triple impacto" (triple impact), and "economía solidaria" (solidarity economy) are core terms. "Emprendimiento" is a long word: em-pren-di-MIEN-to (7 syllables). Practice it slowly before building speed.', example: 'El emprendimiento social busca triple impacto: económico, social y ambiental.' },
    { title: 'Growth & Scale Vocabulary', content: '"Escalabilidad" (scalability), "crecimiento exponencial" (exponential growth), and "internacionalización" (internationalization) are important but challenging words. Break them down: es-ca-la-bi-li-DAD, in-ter-na-cio-na-li-za-CIÓN.', example: 'La escalabilidad del producto permite un crecimiento exponencial.', reviewFrom: 'L6.8' },
  ],

  flashcardGroups: [
    { key: 'lifecycle', label: 'Startup Lifecycle', audioKeys: ['la-idea-de-negocio', 'el-mvp', 'la-validacion-del-mercado', 'el-product-market-fit', 'la-traccion', 'la-escalabilidad', 'el-pivoteo', 'el-modelo-de-negocio', 'la-propuesta-de-valor', 'el-lean-startup', 'el-equipo-fundador', 'la-cultura-de-la-startup'] },
    { key: 'funding', label: 'Funding & Investment', audioKeys: ['el-capital-semilla', 'la-ronda-serie-a', 'el-inversor-angel', 'el-crowdfunding', 'la-valoracion-pre-money', 'el-term-sheet', 'la-dilucion', 'el-pitch-deck', 'la-aceleradora', 'el-bootstrapping', 'la-debida-diligencia', 'la-ronda-puente'] },
    { key: 'social', label: 'Social Enterprise', audioKeys: ['el-emprendimiento-social', 'el-triple-impacto', 'la-empresa-b-certificada', 'el-impacto-medible', 'la-innovacion-social', 'la-economia-solidaria', 'el-comercio-justo', 'la-microfinanza', 'la-economia-circular', 'la-inversion-de-impacto', 'la-cooperativa', 'el-emprendedor-social'] },
  ],

  matchPairs: [
    { left: 'El MVP', right: 'Minimum Viable Product' },
    { left: 'El capital semilla', right: 'Seed capital' },
    { left: 'El pivoteo', right: 'Strategic change of direction' },
    { left: 'El unicornio', right: 'Startup valued over $1B' },
    { left: 'La escalabilidad', right: 'Ability to grow without proportional cost increase' },
    { left: 'El triple impacto', right: 'Economic, social, environmental success' },
    { left: 'La dilución', right: 'Giving up ownership for capital' },
    { left: 'El pitch deck', right: 'Investor presentation' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    { title: 'Startup Stage', instruction: 'Is this an early-stage or growth-stage concept?', buckets: ['Early Stage 🌱', 'Growth Stage 📈'], items: [
      { text: 'La idea de negocio', bucket: 'Early Stage 🌱' }, { text: 'El MVP', bucket: 'Early Stage 🌱' }, { text: 'El capital semilla', bucket: 'Early Stage 🌱' }, { text: 'La validación del mercado', bucket: 'Early Stage 🌱' },
      { text: 'La expansión internacional', bucket: 'Growth Stage 📈' }, { text: 'La ronda serie A', bucket: 'Growth Stage 📈' }, { text: 'Las economías de escala', bucket: 'Growth Stage 📈' }, { text: 'La oferta pública inicial', bucket: 'Growth Stage 📈' },
    ] },
    { title: 'Profit-Driven vs. Impact-Driven', instruction: 'Is this concept more profit-driven or impact-driven?', buckets: ['Profit-Driven 💰', 'Impact-Driven 🌱'], items: [
      { text: 'El unicornio', bucket: 'Profit-Driven 💰' }, { text: 'La valoración pre-money', bucket: 'Profit-Driven 💰' }, { text: 'La estrategia de salida', bucket: 'Profit-Driven 💰' }, { text: 'La fusión o adquisición', bucket: 'Profit-Driven 💰' },
      { text: 'El emprendimiento social', bucket: 'Impact-Driven 🌱' }, { text: 'El comercio justo', bucket: 'Impact-Driven 🌱' }, { text: 'La empresa B certificada', bucket: 'Impact-Driven 🌱' }, { text: 'La economía solidaria', bucket: 'Impact-Driven 🌱' },
    ] },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-demoday',
      title: 'Startup Accelerator Demo Day — Santiago',
      location: 'Santiago, Chile',
      lines: [
        { speaker: 'Camila', text: 'Bienvenidos al Demo Day de Start-Up Chile. Hoy presentan las diez startups de nuestra última generación.', audio: '/audio/L9.8/phrases/d1-line1.mp3' },
        { speaker: 'Tomás', text: 'Buenos días. Soy Tomás, cofundador de AgroData. Nuestro problema: el 30% de la producción agrícola en Chile se pierde por falta de datos.', audio: '/audio/L9.8/phrases/d1-line2.mp3' },
        { speaker: 'Camila', text: '¿Cuál es su solución?', audio: '/audio/L9.8/phrases/d1-line3.mp3' },
        { speaker: 'Tomás', text: 'Sensores IoT de bajo costo que monitorean suelo, agua y clima en tiempo real. Nuestro MVP redujo las pérdidas un 40% en las fincas piloto.', audio: '/audio/L9.8/phrases/d1-line4.mp3' },
        { speaker: 'Camila', text: '¿Cuál es su tracción actual?', audio: '/audio/L9.8/phrases/d1-line5.mp3', annotations: [{ phrase: 'tracción actual', fromLesson: 'L8.2', note: 'Business metrics vocabulary from L8.2 provides the foundation for startup terminology' }] },
        { speaker: 'Tomás', text: '120 fincas activas, crecimiento mensual del 25%, y un ingreso recurrente anual de 200.000 dólares. Estamos en product-market fit.', audio: '/audio/L9.8/phrases/d1-line6.mp3' },
        { speaker: 'Camila', text: '¿Cuánto están buscando en esta ronda?', audio: '/audio/L9.8/phrases/d1-line7.mp3' },
        { speaker: 'Tomás', text: 'Un millón quinientos mil dólares en nuestra ronda serie A. Con ese capital, expandimos a Perú y Colombia en los próximos 18 meses.', audio: '/audio/L9.8/phrases/d1-line8.mp3' },
        { speaker: 'Camila', text: '¿Cuál es su ventaja competitiva frente a soluciones existentes?', audio: '/audio/L9.8/phrases/d1-line9.mp3' },
        { speaker: 'Tomás', text: 'Nuestros sensores cuestan un 70% menos que la competencia y nuestro modelo de suscripción mensual elimina la barrera de entrada para pequeños agricultores.', audio: '/audio/L9.8/phrases/d1-line10.mp3' },
        { speaker: 'Camila', text: '¿Y el componente de impacto social?', audio: '/audio/L9.8/phrases/d1-line11.mp3' },
        { speaker: 'Tomás', text: 'Somos empresa B certificada. El 60% de nuestros clientes son pequeños agricultores familiares. Medimos nuestro triple impacto con indicadores verificados.', audio: '/audio/L9.8/phrases/d1-line12.mp3' },
        { speaker: 'Camila', text: '¿Estrategia de salida?', audio: '/audio/L9.8/phrases/d1-line13.mp3' },
        { speaker: 'Tomás', text: 'Adquisición estratégica por un corporativo agroindustrial con compromiso de mantener nuestra misión social. Ya hemos tenido conversaciones preliminares.', audio: '/audio/L9.8/phrases/d1-line14.mp3' },
        { speaker: 'Camila', text: 'Impresionante presentación, Tomás. Inversores, tienen 15 minutos para hacer preguntas.', audio: '/audio/L9.8/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-social-enterprise',
      title: 'Social Enterprise Workshop — Lima',
      location: 'Lima, Peru',
      lines: [
        { speaker: 'Ana', text: 'Bienvenidos al taller de emprendimiento social. Hoy vamos a trabajar en cómo crear empresas que generen ganancias y cambio social al mismo tiempo.', audio: '/audio/L9.8/phrases/d2-line1.mp3' },
        { speaker: 'Diego', text: 'Ana, tengo una duda. ¿Realmente se puede ganar dinero y ayudar a la comunidad? ¿No son objetivos contradictorios?', audio: '/audio/L9.8/phrases/d2-line2.mp3' },
        { speaker: 'Ana', text: 'No lo son. El emprendimiento social demuestra que el impacto y la rentabilidad pueden coexistir. La clave está en el modelo de negocio.', audio: '/audio/L9.8/phrases/d2-line3.mp3' },
        { speaker: 'Diego', text: '¿Puedes darnos un ejemplo real?', audio: '/audio/L9.8/phrases/d2-line4.mp3' },
        { speaker: 'Ana', text: 'Claro. En Perú, hay cooperativas de café que pagan precios de comercio justo a los productores. Son rentables porque sus clientes valoran el impacto social.', audio: '/audio/L9.8/phrases/d2-line5.mp3', annotations: [{ phrase: 'comercio justo', fromLesson: 'L5.5', note: 'Fair trade concepts build on professional communication and ethical business from L5.5' }] },
        { speaker: 'Diego', text: '¿Y cómo miden el impacto? Los inversores quieren números, no solo buenas intenciones.', audio: '/audio/L9.8/phrases/d2-line6.mp3' },
        { speaker: 'Ana', text: 'Exacto. Por eso usamos indicadores cuantificables: empleos creados, toneladas de CO2 reducidas, familias con acceso a agua limpia. Todo verificable.', audio: '/audio/L9.8/phrases/d2-line7.mp3' },
        { speaker: 'Diego', text: '¿Qué papel juega la certificación B en esto?', audio: '/audio/L9.8/phrases/d2-line8.mp3' },
        { speaker: 'Ana', text: 'La certificación B es como un sello de calidad para empresas sociales. Demuestra que cumples estándares rigurosos de impacto social y ambiental.', audio: '/audio/L9.8/phrases/d2-line9.mp3' },
        { speaker: 'Diego', text: '¿Y la economía circular? He escuchado mucho sobre ese concepto.', audio: '/audio/L9.8/phrases/d2-line10.mp3' },
        { speaker: 'Ana', text: 'Es diseñar productos pensando en su fin de vida: que se puedan reciclar, reutilizar o compostar. Eliminas el concepto de "basura" — todo es recurso.', audio: '/audio/L9.8/phrases/d2-line11.mp3' },
        { speaker: 'Diego', text: 'Me inspira. Quiero crear una empresa que transforme residuos de la industria pesquera en fertilizante orgánico.', audio: '/audio/L9.8/phrases/d2-line12.mp3' },
        { speaker: 'Ana', text: '¡Excelente idea! Eso es economía circular aplicada. Generas valor económico eliminando un problema ambiental. Triple impacto perfecto.', audio: '/audio/L9.8/phrases/d2-line13.mp3' },
        { speaker: 'Diego', text: '¿Por dónde empiezo? ¿Necesito un MVP?', audio: '/audio/L9.8/phrases/d2-line14.mp3' },
        { speaker: 'Ana', text: 'Sí. Empieza validando con un piloto pequeño, mide el impacto desde el día uno, y busca una aceleradora de emprendimiento social. ¡El primer paso es empezar!', audio: '/audio/L9.8/phrases/d2-line15.mp3' },
        { speaker: 'Diego', text: 'Gracias, Ana. Hoy aprendí que emprender no es solo ganar dinero — es transformar el mundo.', audio: '/audio/L9.8/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience a startup accelerator demo day in Santiago and a social enterprise workshop in Lima discussing impact-driven business models.',

  culturalNotes: [
    { title: 'El Ecosistema de Startups en América Latina', content: 'Latin America has become a hotbed for startups. Programs like Start-Up Chile, Colombia\'s Apps.co, and Mexico\'s 500 Startups Latin America have created thriving ecosystems. The region produced its first "decacorns" (startups valued over $10B): Mercado Libre (Argentina), Nubank (Brazil/Mexico), and Rappi (Colombia). The word "emprender" (to start a business) has become one of the most aspirational verbs for young Latin Americans.' },
    { title: 'La Economía Social y Solidaria', content: 'Latin America has a strong tradition of solidarity economy. Cooperatives in Argentina, community banks in Brazil, and fair trade networks in Peru demonstrate that business can serve people over profit. The "economía social y solidaria" movement combines indigenous community values with modern business practices. Countries like Ecuador and Bolivia have even enshrined solidarity economy principles in their constitutions.' },
    { title: 'El Fracaso como Aprendizaje', content: 'In traditional Latin American culture, "el fracaso" (failure) carries heavy stigma. However, the startup movement is changing this. Events like "Fuckup Nights" (which started in Mexico!) celebrate failure as a learning opportunity. The phrase "fracasar rápido, aprender rápido" (fail fast, learn fast) is becoming part of the entrepreneurial vocabulary. This cultural shift is essential for innovation — without the freedom to fail, there\'s no freedom to innovate.' },
  ],
  culturalGradient: 'from-teal-50 to-emerald-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El MVP" stands for:', options: ['Most Valuable Player', 'Minimum Viable Product', 'Maximum Value Proposition', 'Market Validation Process'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El capital ___ es la primera inversión en una startup" (seed)', answer: 'semilla' },
    { id: 3, type: 'mc', text: '"El pivoteo" means:', options: ['Closing the company', 'A strategic change of direction', 'Hiring more employees', 'Going public'], answer: 1 },
    { id: 4, type: 'tf', text: '"La dilución" occurs when founders give up ownership in exchange for investment capital.', answer: true },
    { id: 5, type: 'mc', text: '"El triple impacto" measures success in:', options: ['Three financial metrics', 'Economic, social, and environmental dimensions', 'Three different markets', 'Three product versions'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "La empresa B ___ cumple estándares de impacto social" (certified)', answer: 'certificada' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, what did AgroData use to reduce agricultural losses?', options: ['Drones', 'Low-cost IoT sensors', 'Satellite imagery', 'Manual surveys'], answer: 1 },
    { id: 8, type: 'mc', text: '"El unicornio" is a startup valued at:', options: ['$1 million', '$10 million', '$100 million', 'Over $1 billion'], answer: 3 },
    { id: 9, type: 'tf', text: '"El bootstrapping" means financing a startup with its own revenue without external investors.', answer: true },
    { id: 10, type: 'mc', text: '"La propuesta de valor" explains:', options: ['The company\'s price list', 'Why customers should choose your product', 'How much the company is worth', 'The exit strategy'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ de escala reducen el costo unitario" (economies)', answer: 'economías' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what did Diego want to create?', options: ['A coffee cooperative', 'A tech startup', 'A company turning fishing waste into organic fertilizer', 'A social media platform'], answer: 2 },
    { id: 13, type: 'mc', text: '"La aceleradora" provides:', options: ['Only money', 'Mentorship, resources, and funding', 'Only office space', 'Legal services only'], answer: 1 },
    { id: 14, type: 'tf', text: '"El comercio justo" guarantees fair prices to producers in developing countries.', answer: true },
    { id: 15, type: 'mc', text: '"La debida diligencia" is:', options: ['A legal requirement to pay taxes', 'The investigation process before investing', 'A type of business license', 'An accounting method'], answer: 1 },
  ],

  audioBase: '/audio/L9.8/phrases',

  uniqueActivity: {
    id: 'PitchPerfectL98',
    sectionId: 'pitch-perfect',
    sectionColor: 'bg-teal-50/40',
    sectionBorder: 'border-teal-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'startup-lifecycle': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'funding-investment': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'scaling-growth': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'social-enterprise': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    cultural: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pitch-perfect': { bg: 'bg-teal-50/40', border: 'border-teal-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
