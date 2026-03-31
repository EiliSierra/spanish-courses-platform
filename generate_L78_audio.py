"""Generate all audio files for L7.8 Cultural Identity & Migration using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Identity Concepts (12)
    ("la-identidad-cultural-se", "La identidad cultural se construye a través de la lengua, las tradiciones y la memoria colectiva"),
    ("el-sentido-de-pertenencia", "El sentido de pertenencia nos conecta con una comunidad y un lugar"),
    ("las-raices-culturales", "Las raíces culturales nos dan una base sólida desde la cual crecer"),
    ("la-nostalgia-por-la", "La nostalgia por la tierra natal es un sentimiento universal del migrante"),
    ("el-desarraigo-es-la", "El desarraigo es la dolorosa sensación de no pertenecer a ningún lugar"),
    ("la-diaspora-conecta", "La diáspora conecta a comunidades dispersas por el mundo con su origen común"),
    ("la-aculturacion-es", "La aculturación es el proceso de adoptar elementos de una nueva cultura"),
    ("la-hibridez-cultural", "La hibridez cultural crea identidades ricas que combinan múltiples tradiciones"),
    ("la-transculturacion-implica", "La transculturación implica un intercambio mutuo entre culturas en contacto"),
    ("la-identidad-no-es-fija", "La identidad no es fija; se transforma con cada experiencia y cada encuentro"),
    ("el-patrimonio-cultural", "El patrimonio cultural inmaterial incluye la lengua, la música y las costumbres"),
    ("la-memoria-historica", "La memoria histórica preserva las lecciones del pasado para las generaciones futuras"),
    # Migration Experience (12)
    ("emigrar-significa-dejar", "Emigrar significa dejar tu país; inmigrar significa llegar a uno nuevo"),
    ("el-exilio-forzado", "El exilio forzado arranca a las personas de su tierra sin posibilidad de retorno"),
    ("la-tierra-natal-vive", "La tierra natal vive en el recuerdo como un lugar idealizado por la distancia"),
    ("la-morrina-o-anoranza", "La morriña o añoranza es el dolor profundo de estar lejos de casa"),
    ("ser-documentado-o", "Ser documentado o indocumentado define el acceso a derechos fundamentales"),
    ("la-frontera-es-una", "La frontera es una línea que divide geografías, familias y destinos"),
    ("el-sueno-de-una-vida", "El sueño de una vida mejor impulsa a millones a cruzar océanos y desiertos"),
    ("las-remesas-que-envian", "Las remesas que envían los migrantes sostienen economías enteras en sus países de origen"),
    ("la-segunda-generacion", "La segunda generación vive entre dos mundos: el de sus padres y el del país de acogida"),
    ("el-retorno-al-pais", "El retorno al país de origen a menudo revela que ya no es el lugar que recordábamos"),
    ("la-integracion-no-significa", "La integración no significa renunciar a tu cultura; significa enriquecerla con otra"),
    ("cada-migrante-lleva", "Cada migrante lleva consigo una historia que merece ser escuchada"),
    # Belonging Language (12)
    ("me-siento-de-aqui", "Me siento de aquí y de allá, con un pie en cada mundo"),
    ("no-soy-ni-de-aqui", "No soy ni de aquí ni de allá; soy de los dos lugares a la vez"),
    ("llevo-mi-cultura", "Llevo mi cultura conmigo a donde quiera que vaya"),
    ("la-lengua-es-mi-patria", "La lengua es mi patria; donde hablo mi idioma, estoy en casa"),
    ("mi-hogar-no-es", "Mi hogar no es un lugar geográfico; es donde están las personas que amo"),
    ("soy-un-puente", "Soy un puente entre dos culturas, y eso me enriquece"),
    ("mi-acento-cuenta", "Mi acento cuenta la historia de todos los lugares donde he vivido"),
    ("aprendi-que-pertenecer", "Aprendí que pertenecer no es encajar; es ser aceptado siendo diferente"),
    ("la-comida-de-mi-abuela", "La comida de mi abuela es la forma más pura de nostalgia"),
    ("cuando-escucho-una-cancion", "Cuando escucho una canción de mi tierra, el corazón me lleva de vuelta"),
    ("mis-hijos-hablan", "Mis hijos hablan dos idiomas y viven dos culturas; son más ricos por ello"),
    ("el-espanol-me-conecta", "El español me conecta con millones de personas en todo el mundo"),
    # Social Justice (12)
    ("los-derechos-humanos-son", "Los derechos humanos son universales, indivisibles e inalienables"),
    ("la-igualdad-no-es", "La igualdad no es tratar a todos igual, sino dar a cada uno lo que necesita"),
    ("la-discriminacion-niega", "La discriminación niega la dignidad fundamental de todo ser humano"),
    ("la-xenofobia-surge", "La xenofobia surge del miedo a lo desconocido y se combate con educación"),
    ("la-inclusion-significa", "La inclusión significa crear espacios donde todas las voces sean escuchadas"),
    ("la-justicia-migratoria", "La justicia migratoria reconoce el derecho de toda persona a una vida digna"),
    ("la-ciudadania-no-deberia", "La ciudadanía no debería determinar el valor de una persona"),
    ("el-racismo-estructural", "El racismo estructural perpetúa desigualdades que trascienden generaciones"),
    ("la-diversidad-linguistica", "La diversidad lingüística es un patrimonio de la humanidad que debemos proteger"),
    ("la-solidaridad-entre", "La solidaridad entre pueblos es la base de un mundo más justo"),
    ("cada-persona-tiene", "Cada persona tiene derecho a mantener su identidad cultural sin discriminación"),
    ("la-empatia-intercultural", "La empatía intercultural es el antídoto contra la intolerancia"),
]

DIALOGUE_LINES = [
    # D1: Immigration Support Group — Los Angeles (varied voices)
    ("d1-line1", "Bienvenidos al grupo de apoyo para migrantes hispanos. Hoy hablaremos sobre identidad y pertenencia. ¿Quién quiere comenzar?", "es-MX-JorgeNeural"),
    ("d1-line2", "Yo llegué de Guatemala hace quince años. Mis hijos nacieron aquí, pero me preocupa que pierdan nuestra lengua y nuestras tradiciones.", "es-MX-DaliaNeural"),
    ("d1-line3", "¿Cómo manejas esa tensión entre dos culturas, Rosa?", "es-MX-JorgeNeural"),
    ("d1-line4", "Les enseño español en casa y cocinamos comida guatemalteca juntos. La comida de mi abuela es la forma más pura de nostalgia para mí.", "es-MX-DaliaNeural"),
    ("d1-line5", "Yo soy de El Salvador. Llevo diez años aquí y todavía siento el desarraigo — esa sensación de no pertenecer a ningún lugar completamente.", "es-VE-SebastianNeural"),
    ("d1-line6", "El desarraigo es común entre migrantes. Pero recuerda: la integración no significa renunciar a tu cultura; significa enriquecerla con otra.", "es-MX-JorgeNeural"),
    ("d1-line7", "Yo digo que no soy ni de aquí ni de allá, pero soy de los dos lugares a la vez. Mi acento cuenta la historia de todos los lugares donde he vivido.", "es-CO-SalomeNeural"),
    ("d1-line8", "Eso es hermoso, María Elena. Mis hijos hablan dos idiomas y viven dos culturas. Son más ricos por ello, aunque a veces sea difícil.", "es-MX-DaliaNeural"),
    ("d1-line9", "Lo que más me duele es que cuando vuelvo a El Salvador, ya no es el lugar que recordaba. El retorno revela que todo ha cambiado — incluso yo.", "es-VE-SebastianNeural"),
    ("d1-line10", "Ese es uno de los descubrimientos más difíciles de la migración. La tierra natal vive en el recuerdo como un lugar idealizado por la distancia.", "es-MX-JorgeNeural"),
    ("d1-line11", "Yo aprendí que pertenecer no es encajar; es ser aceptado siendo diferente. Llevo mi cultura conmigo a donde quiera que vaya.", "es-CO-SalomeNeural"),
    ("d1-line12", "Exactamente. La lengua es nuestra patria portátil. Donde hablamos nuestro idioma, estamos en casa.", "es-MX-JorgeNeural"),
    ("d1-line13", "Y cada migrante lleva consigo una historia que merece ser escuchada. Nuestras historias son valiosas.", "es-MX-DaliaNeural"),
    ("d1-line14", "Soy un puente entre dos culturas, y eso me enriquece. Ya no lo veo como una debilidad, sino como una fortaleza.", "es-VE-SebastianNeural"),
    ("d1-line15", "Hermosas palabras. Recuerden: la hibridez cultural crea identidades ricas. No tienen que elegir; pueden ser ambas cosas a la vez.", "es-MX-JorgeNeural"),
    ("d1-line16", "Cuando escucho una canción de mi tierra, el corazón me lleva de vuelta. Pero mi hogar ahora es aquí, con esta comunidad.", "es-CO-SalomeNeural"),
    # D2: Cultural Identity Panel — Madrid (Spanish voices + varied)
    ("d2-line1", "Bienvenidos a esta mesa redonda sobre identidad cultural en el siglo XXI. Nuestros panelistas representan experiencias diversas de migración e identidad.", "es-ES-ElviraNeural"),
    ("d2-line2", "Soy nigeriano de nacimiento, español de adopción. Llevo veinte años en Madrid y aún me preguntan: \"¿Pero de dónde eres de verdad?\"", "es-ES-AlvaroNeural"),
    ("d2-line3", "Esa pregunta revela mucho sobre cómo la sociedad define la pertenencia. ¿Qué les dice eso?", "es-ES-ElviraNeural"),
    ("d2-line4", "Que la identidad cultural se construye a través de la experiencia vivida, no del pasaporte. Pero el racismo estructural perpetúa la idea de que algunos \"pertenecen\" más que otros.", "es-ES-AlvaroNeural"),
    ("d2-line5", "Como mexicana en España, descubrí que la discriminación puede venir de lugares inesperados. Incluso entre hispanohablantes, hay jerarquías lingüísticas.", "es-MX-DaliaNeural"),
    ("d2-line6", "Exacto. La xenofobia no siempre es evidente. A veces es sutil: una mirada, un tono, una suposición de que no perteneces.", "es-ES-AlvaroNeural"),
    ("d2-line7", "Por eso la inclusión significa crear espacios donde todas las voces sean escuchadas, no solo las dominantes.", "es-ES-AlvaroNeural"),
    ("d2-line8", "¿Cómo ven el papel de la lengua en la identidad cultural?", "es-ES-ElviraNeural"),
    ("d2-line9", "La diversidad lingüística es un patrimonio de la humanidad. Cada lengua que muere lleva consigo una forma única de ver el mundo.", "es-MX-DaliaNeural"),
    ("d2-line10", "El español me conecta con millones de personas en todo el mundo, pero mi lengua igbo me conecta con mi historia familiar. Necesito las dos.", "es-ES-AlvaroNeural"),
    ("d2-line11", "La identidad no es fija; se transforma con cada experiencia y cada encuentro. Somos procesos, no productos terminados.", "es-ES-AlvaroNeural"),
    ("d2-line12", "La igualdad no es tratar a todos igual, sino dar a cada uno lo que necesita. Eso es equidad, no uniformidad.", "es-MX-DaliaNeural"),
    ("d2-line13", "¿Qué mensaje les darían a quienes viven entre dos culturas?", "es-ES-ElviraNeural"),
    ("d2-line14", "Que la solidaridad entre pueblos es la base de un mundo más justo. No estamos solos en esto.", "es-ES-AlvaroNeural"),
    ("d2-line15", "Que cada persona tiene derecho a mantener su identidad cultural sin discriminación. La empatía intercultural es el antídoto contra la intolerancia.", "es-MX-DaliaNeural"),
    ("d2-line16", "Y que la memoria histórica preserva las lecciones del pasado para las generaciones futuras. Sin memoria, repetimos los errores.", "es-ES-AlvaroNeural"),
    ("d2-line17", "Gracias a nuestros panelistas. Recordemos: la identidad cultural es un derecho, no un privilegio. Construyamos juntos un mundo más inclusivo.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.8...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
