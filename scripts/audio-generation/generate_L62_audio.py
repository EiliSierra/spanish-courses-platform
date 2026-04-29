"""Generate all audio files for L6.2 Literary & Poetic Language using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Literary Devices (12)
    ("metafora-transforma-la-realidad", 'La metáfora transforma la realidad: "La vida es un río que desemboca en el mar"'),
    ("simil-compara-con-como", 'El símil compara con "como": "Sus ojos brillaban como estrellas"'),
    ("hiperbole-exagera-para-enfatizar", 'La hipérbole exagera para enfatizar: "Te he dicho un millón de veces"'),
    ("personificacion-da-vida", 'La personificación da vida a lo inanimado: "El viento susurraba secretos"'),
    ("aliteracion-repite-sonidos", 'La aliteración repite sonidos: "Con el ala aleve del leve abanico" — Rubén Darío'),
    ("anafora-repite-palabras", 'La anáfora repite palabras al inicio: "Aquí fue Troya. Aquí mi desdicha" — Cervantes'),
    ("oximoron-une-contrarios", 'El oxímoron une contrarios: "Es hielo abrasador, es fuego helado" — Quevedo'),
    ("sinestesia-mezcla-sentidos", 'La sinestesia mezcla sentidos: "Una melodía azul inundaba la sala"'),
    ("metonimia-sustituye-por-cercania", 'La metonimia sustituye por cercanía: "Leyó a Cervantes" (sus obras)'),
    ("ironia-dramatica-lector-sabe", "La ironía dramática: el lector sabe lo que el personaje ignora"),
    ("antitesis-opone-ideas", 'La antítesis opone ideas: "Ayer naciste y morirás mañana" — Góngora'),
    ("encabalgamiento-rompe-verso", "El encabalgamiento rompe el verso: la oración continúa en la línea siguiente"),
    # Poetic Forms (12)
    ("soneto-catorce-versos", "El soneto tiene catorce versos endecasílabos: dos cuartetos y dos tercetos"),
    ("haiku-en-espanol", "El haiku en español: tres versos de cinco, siete y cinco sílabas"),
    ("verso-libre-no-sigue", "El verso libre no sigue un patrón métrico fijo ni rima obligatoria"),
    ("romance-serie-octasilabos", "El romance es una serie de octosílabos con rima asonante en los pares"),
    ("decima-espinela-diez", "La décima espinela: diez octosílabos con rima ABBAACCDDC"),
    ("copla-poema-breve", "La copla es un poema breve de carácter popular, cantado con música"),
    ("alejandrino-catorce-silabas", "El alejandrino tiene catorce sílabas divididas en dos hemistiquios"),
    ("rima-consonante-coincide", "La rima consonante coincide en vocales y consonantes desde la última vocal tónica"),
    ("rima-asonante-solo-vocales", 'La rima asonante solo coincide en las vocales: "alma" con "casa"'),
    ("endecasilabo-once-silabas", "El endecasílabo: once sílabas, el verso clásico del Siglo de Oro"),
    ("octasilabo-ocho-silabas", "El octosílabo: ocho sílabas, el verso más natural del español"),
    ("estrofa-conjunto-versos", "La estrofa es un conjunto de versos que forman una unidad rítmica"),
    # Literary Movements (12)
    ("realismo-magico-mezcla", "El realismo mágico mezcla lo cotidiano con lo fantástico: García Márquez, Cien años de soledad"),
    ("modernismo-busco-belleza", "El modernismo buscó la belleza pura: Rubén Darío renovó la poesía hispánica"),
    ("barroco-espanol-complejidad", "El barroco español: complejidad lingüística, Quevedo y Góngora lideraron el movimiento"),
    ("romanticismo-exalto-libertad", "El romanticismo exaltó la libertad y la emoción: Bécquer escribió las Rimas"),
    ("generacion-del-27-lorca", "La Generación del 27: Lorca, Alberti, Cernuda — poesía vanguardista española"),
    ("boom-latinoamericano-cortazar", "El boom latinoamericano: Cortázar, Vargas Llosa, Fuentes revolucionaron la narrativa"),
    ("naturalismo-mostro-realidad", "El naturalismo mostró la realidad cruda: influencia de Zola en Blasco Ibáñez"),
    ("costumbrismo-retrato-costumbres", "El costumbrismo retrató las costumbres locales con humor e ironía"),
    ("surrealismo-imagenes-oniricas", "El surrealismo en la poesía: imágenes oníricas sin lógica racional"),
    ("picaresca-antiheroe-narra", "La picaresca: el antihéroe narra su vida con astucia — El Lazarillo de Tormes"),
    ("poesia-social-posguerra", "La poesía social de posguerra: Blas de Otero denunció la injusticia con versos directos"),
    ("criollismo-celebro-identidad", "El criollismo celebró la identidad americana: paisajes, lengua y personajes locales"),
    # Criticism Vocabulary (12)
    ("subtexto-revela-personaje", "El subtexto revela lo que el personaje no dice pero siente profundamente"),
    ("voz-narrativa-primera-persona", "La voz narrativa en primera persona crea intimidad con el lector"),
    ("arco-del-personaje-muestra", "El arco del personaje muestra su transformación a lo largo de la obra"),
    ("ambiguedad-enriquece-texto", "La ambigüedad enriquece el texto: permite múltiples interpretaciones válidas"),
    ("leitmotiv-tema-recurrente", "El leitmotiv es un tema o imagen recurrente que unifica la obra"),
    ("intertextualidad-conecta-obras", "La intertextualidad conecta obras entre sí: Borges citaba a Borges citando a otros"),
    ("desdoblamiento-personaje-divide", "El desdoblamiento: cuando un personaje se divide en dos identidades opuestas"),
    ("catarsis-purificacion-emocional", "La catarsis es la purificación emocional que experimenta el lector o espectador"),
    ("narrador-omnisciente-sabe-todo", "El narrador omnisciente lo sabe todo: pensamientos, pasado y futuro de cada personaje"),
    ("climax-punto-mayor-tension", "El clímax es el punto de mayor tensión dramática en la trama"),
    ("desenlace-resuelve-conflictos", "El desenlace resuelve los conflictos y cierra el arco narrativo"),
    ("prosopopeya-otorga-cualidades", "La prosopopeya otorga cualidades humanas a conceptos abstractos en el discurso"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Poetry Workshop — Granada (es-ES voices)
    ("d1-line1", 'Bienvenidos al taller. Hoy analizaremos este fragmento de Lorca: "Verde que te quiero verde."', "es-ES-ElviraNeural"),
    ("d1-line2", "¿Es una anáfora, verdad? La repetición de verde al inicio de cada verso crea un efecto hipnótico.", "es-ES-AlvaroNeural"),
    ("d1-line3", 'Exacto. Pero también hay sinestesia: "verde viento" mezcla un color con algo intangible. ¿Qué efecto produce?', "es-ES-ElviraNeural"),
    ("d1-line4", "Creo que difumina los límites entre lo visual y lo táctil. El lector siente el verde, no solo lo ve.", "es-ES-ElviraNeural"),
    ("d1-line5", '¿Y el subtexto? ¿"Verde" representa la muerte en el universo lorquiano, o es la naturaleza?', "es-ES-AlvaroNeural"),
    ("d1-line6", "Esa ambigüedad es precisamente lo que hace grande a Lorca. El verde es vida, muerte, deseo y destino a la vez.", "es-ES-ElviraNeural"),
    ("d1-line7", "Es fascinante cómo un solo color se convierte en leitmotiv de todo el Romancero gitano.", "es-ES-ElviraNeural"),
    ("d1-line8", "La intertextualidad con la tradición del romance español también es evidente. Lorca renovó la forma manteniendo el octosílabo.", "es-ES-AlvaroNeural"),
    ("d1-line9", "Perfecto. Ahora quiero que cada uno escriba tres versos usando al menos una anáfora y un símil. Tienen veinte minutos.", "es-ES-ElviraNeural"),
    ("d1-line10", "¿Podemos usar verso libre o debemos respetar una métrica fija como el endecasílabo?", "es-ES-ElviraNeural"),
    ("d1-line11", "Verso libre. Pero quiero que presten atención al ritmo interno. La musicalidad no depende solo de la rima.", "es-ES-ElviraNeural"),
    ("d1-line12", "Entendido. Voy a intentar algo con encabalgamiento para que la idea fluya entre los versos.", "es-ES-AlvaroNeural"),
    ("d1-line13", "¡Excelente idea! El encabalgamiento crea tensión y sorpresa. Es como si el verso se negara a terminar.", "es-ES-ElviraNeural"),
    ("d1-line14", "Justo como en Neruda: las ideas se desbordan de un verso al siguiente como un río.", "es-ES-ElviraNeural"),
    ("d1-line15", "¡Eso mismo es un símil maravilloso! Ya están pensando como poetas. Manos a la obra.", "es-ES-ElviraNeural"),
    # Dialogue 2: Book Club — Buenos Aires (es-AR voices)
    ("d2-line1", "Acabo de terminar Cien años de soledad. Estoy abrumado. ¿Cómo procesás tanta información narrativa?", "es-AR-TomasNeural"),
    ("d2-line2", "Es que García Márquez usa el realismo mágico como si fuera lo más natural del mundo. Llueven flores y nadie se sorprende.", "es-AR-ElenaNeural"),
    ("d2-line3", "El arco del personaje de Úrsula me pareció el más poderoso. Ella es la columna vertebral de toda la saga.", "es-AR-TomasNeural"),
    ("d2-line4", "Totalmente. Y hay un desdoblamiento constante: los Aurelianos y los José Arcadios repiten patrones como un leitmotiv genealógico.", "es-AR-ElenaNeural"),
    ("d2-line5", "¿Notaste la ironía dramática al final? El lector sabe que Macondo va a desaparecer, pero los personajes siguen viviendo.", "es-AR-TomasNeural"),
    ("d2-line6", "Sí, y la catarsis cuando finalmente leés las profecías de Melquíades es devastadora. Todo cobra sentido.", "es-AR-ElenaNeural"),
    ("d2-line7", "Lo que más me impactó fue la circularidad. Es una metáfora del tiempo latinoamericano: la historia se repite.", "es-AR-TomasNeural"),
    ("d2-line8", "Ahora entiendo por qué dicen que el boom fue una revolución narrativa. Cortázar, Fuentes, Vargas Llosa — todos rompieron moldes.", "es-AR-ElenaNeural"),
    ("d2-line9", "¿Leíste Rayuela de Cortázar? Ahí la intertextualidad es el corazón del libro. Cita a Morelli, que es un alter ego del autor.", "es-AR-TomasNeural"),
    ("d2-line10", "Sí, y la voz narrativa cambia según el capítulo. Hay un narrador omnisciente, pero también fragmentos en primera persona.", "es-AR-ElenaNeural"),
    ("d2-line11", "Me encanta cómo la literatura latinoamericana no le tiene miedo a la ambigüedad. Nada es blanco o negro.", "es-AR-TomasNeural"),
    ("d2-line12", "Eso es parte de su riqueza. El clímax no siempre es explosivo; a veces es un silencio, una ausencia.", "es-AR-ElenaNeural"),
    ("d2-line13", 'Me encanta cómo la literatura latinoamericana no le tiene miedo a la ambigüedad. ¿Para la próxima reunión leemos a Borges? "El Aleph" es perfecto para analizar la metonimia y el infinito en la literatura.', "es-AR-TomasNeural"),
    ("d2-line14", "¡Dale! Borges es el maestro de la intertextualidad. Cada cuento es un laberinto de referencias. Va a dar para horas de discusión.", "es-AR-ElenaNeural"),
    ("d2-line15", "Perfecto. Preparo un análisis del narrador y vos te enfocás en los recursos literarios. ¡Nos vemos el jueves!", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.2...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
