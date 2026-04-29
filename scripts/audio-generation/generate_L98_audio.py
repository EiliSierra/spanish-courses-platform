"""Generate all audio files for L9.8 Entrepreneurship & Startups using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Startup Lifecycle (12)
    ("la-idea-de-negocio", "La idea de negocio surge cuando identificas un problema real que afecta a un grupo de personas"),
    ("el-mvp", "El MVP es la versión mínima del producto que permite validar la hipótesis con usuarios reales"),
    ("la-validacion-del-mercado", "La validación del mercado confirma que existe suficiente demanda para tu producto o servicio"),
    ("el-product-market-fit", "El product-market fit se alcanza cuando tu producto satisface una necesidad real del mercado de manera sostenible"),
    ("la-traccion", "La tracción demuestra con datos que tu startup está creciendo y que el modelo de negocio funciona"),
    ("la-escalabilidad", "La escalabilidad es la capacidad de crecer sin que los costos aumenten proporcionalmente"),
    ("el-pivoteo", "El pivoteo es el cambio estratégico de dirección cuando el modelo original no funciona como se esperaba"),
    ("el-modelo-de-negocio", "El modelo de negocio describe cómo la empresa crea, entrega y captura valor para sus clientes"),
    ("la-propuesta-de-valor", "La propuesta de valor explica por qué el cliente debería elegir tu producto sobre la competencia"),
    ("el-lean-startup", "El lean startup minimiza el desperdicio construyendo productos iterativamente basándose en el feedback"),
    ("el-equipo-fundador", "El equipo fundador combina habilidades complementarias en tecnología, negocio y diseño"),
    ("la-cultura-de-la-startup", "La cultura de la startup define los valores, la velocidad y la tolerancia al riesgo del equipo"),
    # Funding & Investment (12)
    ("el-capital-semilla", "El capital semilla es la primera inversión que permite a la startup desarrollar su producto inicial"),
    ("la-ronda-serie-a", "La ronda serie A financia el crecimiento de startups que ya han demostrado tracción y product-market fit"),
    ("el-inversor-angel", "El inversor ángel es una persona que invierte su propio dinero en startups en etapas tempranas"),
    ("el-crowdfunding", "El crowdfunding permite a miles de personas invertir pequeñas cantidades para financiar un proyecto"),
    ("la-valoracion-pre-money", "La valoración pre-money estima cuánto vale la empresa antes de recibir la nueva inversión"),
    ("el-term-sheet", "El term sheet establece las condiciones principales de la inversión antes de firmar el contrato final"),
    ("la-dilucion", "La dilución ocurre cuando los fundadores ceden un porcentaje de propiedad a cambio de capital nuevo"),
    ("el-pitch-deck", "El pitch deck es la presentación que los emprendedores usan para convencer a los inversores de financiar su proyecto"),
    ("la-aceleradora", "La aceleradora proporciona mentoría, recursos y financiamiento a startups durante un programa intensivo"),
    ("el-bootstrapping", "El bootstrapping financia la startup con ingresos propios sin depender de inversores externos"),
    ("la-debida-diligencia", "La debida diligencia es el proceso de investigación que el inversor realiza antes de comprometer su capital"),
    ("la-ronda-puente", "La ronda puente es una financiación temporal que mantiene a la startup operando hasta la siguiente ronda formal"),
    # Scaling & Growth (12)
    ("la-expansion-internacional", "La expansión internacional requiere adaptar el producto a las regulaciones y cultura de cada mercado"),
    ("la-franquicia", "La franquicia permite replicar un modelo de negocio exitoso en múltiples ubicaciones con operadores independientes"),
    ("las-economias-de-escala", "Las economías de escala reducen el costo unitario a medida que aumenta el volumen de producción"),
    ("la-retencion-de-clientes", "La retención de clientes es más rentable que la adquisición de nuevos clientes para el crecimiento sostenible"),
    ("el-crecimiento-exponencial", "El crecimiento exponencial ocurre cuando cada nuevo usuario atrae a más usuarios de manera orgánica"),
    ("la-automatizacion-de-procesos", "La automatización de procesos permite escalar operaciones sin necesidad de contratar proporcionalmente más personal"),
    ("la-estrategia-de-salida", "La estrategia de salida define cómo los fundadores e inversores recuperarán su inversión"),
    ("la-fusion-o-adquisicion", "La fusión o adquisición permite a empresas más grandes absorber startups con tecnología innovadora"),
    ("el-unicornio", "El unicornio es una startup valorada en más de mil millones de dólares antes de salir a bolsa"),
    ("la-oferta-publica-inicial", "La oferta pública inicial permite a la startup vender acciones al público en la bolsa de valores"),
    ("la-internacionalizacion", "La internacionalización exitosa requiere entender las diferencias culturales y adaptar el marketing local"),
    ("el-crecimiento-sostenible", "El crecimiento sostenible equilibra la velocidad de expansión con la salud financiera de la empresa"),
    # Social Enterprise (12)
    ("el-emprendimiento-social", "El emprendimiento social busca resolver problemas sociales o ambientales a través de modelos de negocio sostenibles"),
    ("el-triple-impacto", "El triple impacto mide el éxito en tres dimensiones: económica, social y ambiental"),
    ("la-empresa-b-certificada", "La empresa B certificada cumple con estándares rigurosos de desempeño social y ambiental verificados externamente"),
    ("el-impacto-medible", "El impacto medible utiliza indicadores cuantificables para demostrar el cambio social generado"),
    ("la-innovacion-social", "La innovación social desarrolla soluciones nuevas para necesidades sociales que los mercados tradicionales no atienden"),
    ("la-economia-solidaria", "La economía solidaria prioriza el bienestar de las personas y comunidades sobre la maximización del beneficio"),
    ("el-comercio-justo", "El comercio justo garantiza precios dignos a los productores de países en desarrollo"),
    ("la-microfinanza", "La microfinanza ofrece servicios financieros a personas de bajos ingresos que no tienen acceso a la banca tradicional"),
    ("la-economia-circular", "La economía circular diseña productos para ser reutilizados, reciclados o compostados al final de su vida útil"),
    ("la-inversion-de-impacto", "La inversión de impacto busca retorno financiero junto con beneficios sociales y ambientales medibles"),
    ("la-cooperativa", "La cooperativa es una empresa de propiedad colectiva donde cada miembro tiene voz y voto en las decisiones"),
    ("el-emprendedor-social", "El emprendedor social mide su éxito no solo por las ganancias sino por las vidas que transforma"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Demo Day — Santiago, Chile
    ("d1-line1", "Bienvenidos al Demo Day de Start-Up Chile. Hoy presentan las diez startups de nuestra última generación.", "es-CL-CatalinaNeural"),
    ("d1-line2", "Buenos días. Soy Tomás, cofundador de AgroData. Nuestro problema: el 30% de la producción agrícola en Chile se pierde por falta de datos.", "es-CL-LorenzoNeural"),
    ("d1-line3", "¿Cuál es su solución?", "es-CL-CatalinaNeural"),
    ("d1-line4", "Sensores IoT de bajo costo que monitorean suelo, agua y clima en tiempo real. Nuestro MVP redujo las pérdidas un 40% en las fincas piloto.", "es-CL-LorenzoNeural"),
    ("d1-line5", "¿Cuál es su tracción actual?", "es-CL-CatalinaNeural"),
    ("d1-line6", "120 fincas activas, crecimiento mensual del 25%, y un ingreso recurrente anual de 200.000 dólares. Estamos en product-market fit.", "es-CL-LorenzoNeural"),
    ("d1-line7", "¿Cuánto están buscando en esta ronda?", "es-CL-CatalinaNeural"),
    ("d1-line8", "Un millón quinientos mil dólares en nuestra ronda serie A. Con ese capital, expandimos a Perú y Colombia en los próximos 18 meses.", "es-CL-LorenzoNeural"),
    ("d1-line9", "¿Cuál es su ventaja competitiva frente a soluciones existentes?", "es-CL-CatalinaNeural"),
    ("d1-line10", "Nuestros sensores cuestan un 70% menos que la competencia y nuestro modelo de suscripción mensual elimina la barrera de entrada para pequeños agricultores.", "es-CL-LorenzoNeural"),
    ("d1-line11", "¿Y el componente de impacto social?", "es-CL-CatalinaNeural"),
    ("d1-line12", "Somos empresa B certificada. El 60% de nuestros clientes son pequeños agricultores familiares. Medimos nuestro triple impacto con indicadores verificados.", "es-CL-LorenzoNeural"),
    ("d1-line13", "¿Estrategia de salida?", "es-CL-CatalinaNeural"),
    ("d1-line14", "Adquisición estratégica por un corporativo agroindustrial con compromiso de mantener nuestra misión social. Ya hemos tenido conversaciones preliminares.", "es-CL-LorenzoNeural"),
    ("d1-line15", "Impresionante presentación, Tomás. Inversores, tienen 15 minutos para hacer preguntas.", "es-CL-CatalinaNeural"),
    # Dialogue 2: Social Enterprise Workshop — Lima, Peru
    ("d2-line1", "Bienvenidos al taller de emprendimiento social. Hoy vamos a trabajar en cómo crear empresas que generen ganancias y cambio social al mismo tiempo.", "es-VE-PaolaNeural"),
    ("d2-line2", "Ana, tengo una duda. ¿Realmente se puede ganar dinero y ayudar a la comunidad? ¿No son objetivos contradictorios?", "es-VE-SebastianNeural"),
    ("d2-line3", "No lo son. El emprendimiento social demuestra que el impacto y la rentabilidad pueden coexistir. La clave está en el modelo de negocio.", "es-VE-PaolaNeural"),
    ("d2-line4", "¿Puedes darnos un ejemplo real?", "es-VE-SebastianNeural"),
    ("d2-line5", "Claro. En Perú, hay cooperativas de café que pagan precios de comercio justo a los productores. Son rentables porque sus clientes valoran el impacto social.", "es-VE-PaolaNeural"),
    ("d2-line6", "¿Y cómo miden el impacto? Los inversores quieren números, no solo buenas intenciones.", "es-VE-SebastianNeural"),
    ("d2-line7", "Exacto. Por eso usamos indicadores cuantificables: empleos creados, toneladas de CO2 reducidas, familias con acceso a agua limpia. Todo verificable.", "es-VE-PaolaNeural"),
    ("d2-line8", "¿Qué papel juega la certificación B en esto?", "es-VE-SebastianNeural"),
    ("d2-line9", "La certificación B es como un sello de calidad para empresas sociales. Demuestra que cumples estándares rigurosos de impacto social y ambiental.", "es-VE-PaolaNeural"),
    ("d2-line10", "¿Y la economía circular? He escuchado mucho sobre ese concepto.", "es-VE-SebastianNeural"),
    ("d2-line11", "Es diseñar productos pensando en su fin de vida: que se puedan reciclar, reutilizar o compostar. Eliminas el concepto de \"basura\" — todo es recurso.", "es-VE-PaolaNeural"),
    ("d2-line12", "Me inspira. Quiero crear una empresa que transforme residuos de la industria pesquera en fertilizante orgánico.", "es-VE-SebastianNeural"),
    ("d2-line13", "¡Excelente idea! Eso es economía circular aplicada. Generas valor económico eliminando un problema ambiental. Triple impacto perfecto.", "es-VE-PaolaNeural"),
    ("d2-line14", "¿Por dónde empiezo? ¿Necesito un MVP?", "es-VE-SebastianNeural"),
    ("d2-line15", "Sí. Empieza validando con un piloto pequeño, mide el impacto desde el día uno, y busca una aceleradora de emprendimiento social. ¡El primer paso es empezar!", "es-VE-PaolaNeural"),
    ("d2-line16", "Gracias, Ana. Hoy aprendí que emprender no es solo ganar dinero — es transformar el mundo.", "es-VE-SebastianNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.8...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
