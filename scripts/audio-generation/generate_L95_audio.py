"""Generate all audio files for L9.5 Journalism & Investigative Reporting using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.5\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Newsroom Operations (12)
    ("la-sala-de-redaccion", "La sala de redacción funciona como el corazón del periódico donde se toman las decisiones editoriales"),
    ("el-cierre-de-edicion", "El cierre de edición es el momento límite para entregar las notas antes de imprimir"),
    ("la-nota-de-ultima-hora", "La nota de última hora obliga a los editores a reorganizar toda la primera plana"),
    ("el-comunicado-de-prensa", "El comunicado de prensa es un documento oficial que las instituciones envían a los medios"),
    ("el-corresponsal-de-guerra", "El corresponsal de guerra arriesga su vida para informar desde zonas de conflicto"),
    ("el-jefe-de-redaccion", "El jefe de redacción asigna las coberturas y supervisa la calidad de las notas"),
    ("la-conferencia-de-prensa", "La conferencia de prensa permite a los periodistas hacer preguntas directas al portavoz"),
    ("la-columna-de-opinion", "La columna de opinión refleja el punto de vista personal del periodista sobre un tema"),
    ("el-reportero-grafico", "El reportero gráfico captura imágenes que complementan y refuerzan la narrativa escrita"),
    ("la-agencia-de-noticias", "La agencia de noticias distribuye información a medios de comunicación de todo el mundo"),
    ("la-primicia", "La primicia es la noticia que un medio publica antes que cualquier competidor"),
    ("el-editorial", "El editorial representa la postura oficial del periódico sobre un asunto de interés público"),
    # Investigative Techniques (12)
    ("la-fuente-confidencial", "La fuente confidencial proporciona información bajo la condición de mantener su identidad en secreto"),
    ("el-derecho-al-anonimato", "El derecho al anonimato protege a las fuentes que denuncian irregularidades de represalias"),
    ("el-acceso-a-la-informacion", "El acceso a la información pública es un derecho fundamental en las democracias modernas"),
    ("la-solicitud-de-transparencia", "La solicitud de transparencia obliga al gobierno a revelar documentos sobre el gasto público"),
    ("cruzar-datos-de-diferentes", "Cruzar datos de diferentes bases permite descubrir patrones de corrupción ocultos"),
    ("el-denunciante-interno", "El denunciante interno arriesga su carrera para revelar prácticas ilegales dentro de una organización"),
    ("la-investigacion-encubierta", "La investigación encubierta requiere que el periodista se infiltre sin revelar su identidad profesional"),
    ("la-cadena-de-custodia", "La cadena de custodia documental garantiza que las pruebas no han sido alteradas ni manipuladas"),
    ("la-corroboracion-exige", "La corroboración exige verificar cada dato con al menos dos fuentes independientes"),
    ("el-seguimiento-del-dinero", "El seguimiento del dinero público revela cómo se desvían fondos destinados a programas sociales"),
    ("la-filtracion-de-documentos", "La filtración de documentos clasificados puede cambiar el curso de la historia política"),
    ("el-periodista-de-investigacion", "El periodista de investigación dedica meses o años a una sola historia para garantizar su rigor"),
    # Editorial Ethics (12)
    ("la-objetividad-periodistica", "La objetividad periodística exige separar los hechos de las opiniones personales del reportero"),
    ("el-sesgo-editorial", "El sesgo editorial distorsiona la información al presentarla desde una perspectiva parcial"),
    ("el-derecho-de-replica", "El derecho de réplica permite a las personas afectadas responder a informaciones erróneas"),
    ("la-fe-de-erratas", "La fe de erratas corrige públicamente los errores cometidos en publicaciones anteriores"),
    ("la-linea-editorial", "La línea editorial define la postura ideológica y los principios que guían al medio"),
    ("el-conflicto-de-intereses", "El conflicto de intereses ocurre cuando el periodista tiene vínculos personales con la noticia"),
    ("la-presuncion-de-inocencia", "La presunción de inocencia obliga a los medios a no condenar a un acusado antes del juicio"),
    ("el-sensacionalismo", "El sensacionalismo sacrifica la precisión informativa para generar más audiencia y ventas"),
    ("la-autorregulacion", "La autorregulación de los medios establece códigos de conducta internos sin intervención estatal"),
    ("el-derecho-a-la-privacidad", "El derecho a la privacidad limita lo que los medios pueden publicar sobre la vida de las personas"),
    ("la-clausula-de-conciencia", "La cláusula de conciencia permite al periodista negarse a escribir contra sus principios éticos"),
    ("la-responsabilidad-social", "La responsabilidad social del periodismo implica informar al público con veracidad y equilibrio"),
    # Digital Journalism (12)
    ("el-periodismo-de-datos", "El periodismo de datos utiliza bases de datos masivas para encontrar historias ocultas en las cifras"),
    ("la-verificacion-de-hechos", "La verificación de hechos combate la desinformación confirmando o desmintiendo afirmaciones públicas"),
    ("el-clickbait", "El clickbait utiliza titulares engañosos para generar clics sin ofrecer contenido de calidad"),
    ("el-paywall", "El paywall restringe el acceso al contenido periodístico a quienes pagan una suscripción"),
    ("la-suscripcion-digital", "La suscripción digital permite a los lectores apoyar el periodismo de calidad con pagos mensuales"),
    ("el-podcast-periodistico", "El podcast periodístico permite profundizar en temas complejos con formato de audio largo"),
    ("la-viralidad", "La viralidad puede amplificar tanto noticias verdaderas como información falsa de manera exponencial"),
    ("el-algoritmo-de-las-redes", "El algoritmo de las redes sociales determina qué noticias ve cada usuario según su historial"),
    ("la-camara-de-eco", "La cámara de eco refuerza las creencias existentes al limitar la exposición a perspectivas diferentes"),
    ("el-periodismo-inmersivo", "El periodismo inmersivo utiliza realidad virtual para que el lector experimente la noticia en primera persona"),
    ("la-inteligencia-artificial-genera", "La inteligencia artificial genera borradores de noticias rutinarias como resultados deportivos y financieros"),
    ("la-transparencia-algoritmica", "La transparencia algorítmica exige que los medios expliquen cómo seleccionan y priorizan las noticias"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Investigative Newsroom — Buenos Aires
    ("d1-line1", "¡Llegó la filtración que esperábamos! Tenemos documentos sobre los contratos del gobierno provincial.", "es-AR-ElenaNeural"),
    ("d1-line2", "¿De quién viene la fuente? Necesitamos verificar la autenticidad antes de avanzar.", "es-AR-TomasNeural"),
    ("d1-line3", "Es un denunciante interno del ministerio. Exige anonimato absoluto. Usamos comunicaciones encriptadas.", "es-AR-ElenaNeural"),
    ("d1-line4", "Bien. Necesitamos corroborar cada dato con al menos dos fuentes independientes antes de publicar.", "es-AR-TomasNeural"),
    ("d1-line5", "Ya crucé los datos con la base de contrataciones públicas. Los montos coinciden con lo que dice la fuente.", "es-AR-ElenaNeural"),
    ("d1-line6", "¿Y el abogado del diario ya revisó los riesgos legales? No quiero una demanda por difamación.", "es-AR-TomasNeural"),
    ("d1-line7", "Sí, dice que si tenemos la cadena de custodia documental completa, estamos protegidos legalmente.", "es-AR-ElenaNeural"),
    ("d1-line8", "Perfecto. Preparemos un borrador para la reunión editorial de mañana. Esto podría ser la primicia del año.", "es-AR-TomasNeural"),
    ("d1-line9", "¿Pedimos el derecho de réplica al gobierno antes de publicar?", "es-AR-ElenaNeural"),
    ("d1-line10", "Siempre. La ética periodística exige que les demos la oportunidad de responder. Es nuestra obligación profesional.", "es-AR-TomasNeural"),
    ("d1-line11", "De acuerdo. Enviaré las preguntas al portavoz del ministerio con un plazo de 48 horas para responder.", "es-AR-ElenaNeural"),
    ("d1-line12", "Y que el equipo de datos prepare las visualizaciones. Una buena infografía vale más que mil palabras.", "es-AR-TomasNeural"),
    ("d1-line13", "El cierre de edición es el viernes. Tenemos tres días para tener todo listo.", "es-AR-ElenaNeural"),
    ("d1-line14", "Vamos a hacer periodismo como debe ser: riguroso, ético y sin miedo. Esta historia importa.", "es-AR-TomasNeural"),
    ("d1-line15", "Así es. El público tiene derecho a saber cómo se gastan sus impuestos.", "es-AR-ElenaNeural"),
    # Dialogue 2: Press Freedom Conference — Mexico City
    ("d2-line1", "Bienvenidos a la Conferencia Internacional sobre Libertad de Prensa. México enfrenta una crisis de violencia contra periodistas.", "es-MX-JorgeNeural"),
    ("d2-line2", "Doctor Reyes, ¿cómo afecta la autocensura al periodismo investigativo en la región?", "es-MX-DaliaNeural"),
    ("d2-line3", "Muchos periodistas evitan temas de narcotráfico y corrupción por miedo a represalias. La autocensura mata historias antes de nacer.", "es-MX-JorgeNeural"),
    ("d2-line4", "¿Qué papel juegan las organizaciones internacionales en la protección de periodistas amenazados?", "es-MX-DaliaNeural"),
    ("d2-line5", "Son fundamentales. Ofrecen refugio temporal, asesoría legal y presión diplomática sobre gobiernos que no protegen a la prensa.", "es-MX-JorgeNeural"),
    ("d2-line6", "¿Y el periodismo digital ha mejorado o empeorado la situación?", "es-MX-DaliaNeural"),
    ("d2-line7", "Ambas cosas. Las redes sociales democratizan la información, pero también amplifican la desinformación y las amenazas digitales.", "es-MX-JorgeNeural"),
    ("d2-line8", "En su experiencia, ¿cuál es la herramienta más importante para un periodista de investigación?", "es-MX-DaliaNeural"),
    ("d2-line9", "La paciencia y el rigor. Una buena investigación puede tomar meses. No hay atajos para la verdad.", "es-MX-JorgeNeural"),
    ("d2-line10", "¿Cómo ve el futuro del periodismo en América Latina?", "es-MX-DaliaNeural"),
    ("d2-line11", "Con esperanza cautelosa. Hay una nueva generación de periodistas que usan datos y tecnología para hacer investigaciones que antes eran imposibles.", "es-MX-JorgeNeural"),
    ("d2-line12", "¿Algún consejo para los jóvenes que quieren dedicarse al periodismo investigativo?", "es-MX-DaliaNeural"),
    ("d2-line13", "Aprendan periodismo de datos, protejan siempre a sus fuentes, y nunca olviden que su trabajo sirve a la sociedad, no al poder.", "es-MX-JorgeNeural"),
    ("d2-line14", "Gracias, doctor Reyes. Sus palabras son inspiración para todos los que creemos en el poder del periodismo libre.", "es-MX-DaliaNeural"),
    ("d2-line15", "Gracias a ustedes. Mientras haya periodistas valientes, la democracia tiene futuro.", "es-MX-JorgeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.5...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
