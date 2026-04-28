"""Generate all audio files for L9.7 Religion & Spirituality using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Religious Terminology (12)
    ("la-fe", "La fe es la creencia profunda en algo que no se puede ver ni demostrar con evidencia material"),
    ("la-oracion", "La oración es un acto de comunicación personal con lo divino que puede ser silenciosa o comunitaria"),
    ("el-sacramento", "El sacramento es un ritual sagrado que simboliza la gracia divina según la tradición cristiana"),
    ("la-homilia", "La homilía es el sermón que el sacerdote pronuncia durante la misa para interpretar las escrituras"),
    ("el-pecado", "El pecado representa la transgresión de las normas morales establecidas por la doctrina religiosa"),
    ("la-redencion", "La redención es el acto de ser salvado del pecado a través del sacrificio y la misericordia divina"),
    ("la-gracia-divina", "La gracia divina es el favor inmerecido que Dios otorga a los creyentes según la teología cristiana"),
    ("la-resurreccion", "La resurrección es la creencia en que los muertos volverán a la vida en el fin de los tiempos"),
    ("el-bautismo", "El bautismo marca la entrada del creyente en la comunidad de fe a través del agua bendita"),
    ("la-confesion", "La confesión permite al creyente reconocer sus pecados y recibir el perdón a través del sacerdote"),
    ("el-profeta", "El profeta transmite un mensaje divino a la humanidad según las tradiciones abrahámicas"),
    ("el-alma", "El alma es la esencia espiritual e inmortal del ser humano según muchas tradiciones religiosas"),
    # Spiritual Practices (12)
    ("la-meditacion", "La meditación calma la mente y permite una conexión profunda con el ser interior"),
    ("el-ayuno", "El ayuno es una práctica espiritual que purifica el cuerpo y fortalece la disciplina interior"),
    ("la-peregrinacion", "La peregrinación es un viaje sagrado que el creyente realiza a un lugar de significado religioso"),
    ("el-retiro-espiritual", "El retiro espiritual ofrece un espacio de silencio y reflexión lejos de la vida cotidiana"),
    ("la-ofrenda", "La ofrenda es un regalo simbólico que se presenta ante lo sagrado como muestra de devoción"),
    ("el-ritual-de-sanacion", "El ritual de sanación combina la oración con prácticas tradicionales para restaurar el bienestar"),
    ("la-ceremonia-de-limpia", "La ceremonia de limpia purifica la energía negativa usando hierbas, incienso y oraciones"),
    ("el-rosario", "El rosario es una oración repetitiva que se reza con cuentas para meditar sobre los misterios de la fe"),
    ("la-velacion", "La velación mantiene una vela encendida como símbolo de esperanza y conexión con lo divino"),
    ("la-bendicion", "La bendición es una invocación de protección y favor divino sobre una persona o lugar"),
    ("el-mantra", "El mantra es una palabra o frase repetida durante la meditación para enfocar la mente"),
    ("el-yoga", "El yoga integra posturas físicas, respiración y meditación como camino hacia la paz interior"),
    # Interfaith Dialogue (12)
    ("el-ecumenismo", "El ecumenismo promueve la unidad y cooperación entre las diferentes iglesias y denominaciones cristianas"),
    ("la-tolerancia-religiosa", "La tolerancia religiosa reconoce el derecho de cada persona a practicar su propia fe libremente"),
    ("la-libertad-de-culto", "La libertad de culto garantiza que nadie sea perseguido ni discriminado por sus creencias religiosas"),
    ("el-sincretismo", "El sincretismo fusiona elementos de diferentes tradiciones religiosas en una nueva expresión de fe"),
    ("la-coexistencia-pacifica", "La coexistencia pacífica entre religiones requiere respeto mutuo y voluntad de entender al otro"),
    ("el-dialogo-interreligioso", "El diálogo interreligioso busca puntos comunes entre las tradiciones de fe sin negar las diferencias"),
    ("el-laicismo", "El laicismo defiende la separación entre el estado y las instituciones religiosas en la vida pública"),
    ("la-conversion-religiosa", "La conversión religiosa es el cambio voluntario de una fe a otra basado en una experiencia personal"),
    ("el-fundamentalismo", "El fundamentalismo interpreta los textos sagrados de manera literal y rechaza cualquier modernización"),
    ("la-espiritualidad-contemporanea", "La espiritualidad contemporánea busca sentido y trascendencia más allá de las religiones organizadas"),
    ("el-respeto-por-las-diferencias", "El respeto por las diferencias religiosas es la base de una sociedad pluralista y democrática"),
    ("la-teologia-de-la-liberacion", "La teología de la liberación une la fe cristiana con la lucha por la justicia social y los derechos de los pobres"),
    # Pilgrimage Traditions (12)
    ("el-camino-de-santiago", "El Camino de Santiago atrae a miles de peregrinos que recorren cientos de kilómetros hasta la catedral"),
    ("la-virgen-de-guadalupe", "La Virgen de Guadalupe es la patrona de México y símbolo de identidad nacional y fe popular"),
    ("el-dia-de-muertos", "El Día de Muertos honra a los difuntos con altares, flores de cempasúchil y comida tradicional"),
    ("la-semana-santa", "La Semana Santa es la celebración más importante del calendario litúrgico cristiano en el mundo hispano"),
    ("las-procesiones", "Las procesiones llevan imágenes religiosas por las calles acompañadas de música y rezos comunitarios"),
    ("los-exvotos", "Los exvotos son objetos dejados en santuarios como agradecimiento por milagros o favores recibidos"),
    ("la-romeria", "La romería es una festividad popular que combina devoción religiosa con música, baile y gastronomía"),
    ("el-santuario", "El santuario es un lugar sagrado donde los fieles acuden a orar y pedir protección divina"),
    ("la-manda", "La manda es una promesa hecha a un santo a cambio de un favor o milagro solicitado"),
    ("la-fiesta-patronal", "La fiesta patronal celebra al santo protector del pueblo con misas, ferias y fuegos artificiales"),
    ("la-danza-de-los-voladores", "La danza de los voladores es un ritual prehispánico que representa la conexión entre la tierra y el cielo"),
    ("el-sincretismo-religioso", "El sincretismo religioso en América Latina mezcla tradiciones indígenas con el catolicismo colonial"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Camino de Santiago — Spain
    ("d1-line1", "¡Buen Camino! ¿Cuántos kilómetros llevas hoy?", "es-ES-ElviraNeural"),
    ("d1-line2", "Unos veinticinco. Me duelen los pies, pero el espíritu está fuerte. ¿Y tú?", "es-ES-AlvaroNeural"),
    ("d1-line3", "Lo mismo. Empecé en Saint-Jean-Pied-de-Port hace tres semanas. Es mi primera peregrinación.", "es-ES-ElviraNeural"),
    ("d1-line4", "¿Qué te motivó a hacer el Camino? ¿Es una razón religiosa o más espiritual?", "es-ES-AlvaroNeural"),
    ("d1-line5", "Un poco de ambas. Perdí a mi madre el año pasado y necesitaba un espacio para reflexionar y encontrar paz interior.", "es-ES-ElviraNeural"),
    ("d1-line6", "Lo siento mucho. Caminar durante semanas tiene algo de meditación. Cada paso es una oración.", "es-ES-AlvaroNeural"),
    ("d1-line7", "Exacto. No soy muy religiosa en el sentido tradicional, pero aquí he sentido algo sagrado en la naturaleza y en la solidaridad de los peregrinos.", "es-ES-ElviraNeural"),
    ("d1-line8", "Eso es lo bello del Camino: une a personas de todas las creencias. He conocido católicos, budistas, ateos, todos caminando juntos.", "es-ES-AlvaroNeural"),
    ("d1-line9", "¿Tú eres creyente?", "es-ES-ElviraNeural"),
    ("d1-line10", "Soy católico, pero mi fe ha evolucionado. Antes era más dogmática; ahora es más personal. El Camino me ha enseñado que la fe se vive caminando, no solo rezando.", "es-ES-AlvaroNeural"),
    ("d1-line11", "¿Piensas llegar a la catedral de Santiago para la misa del peregrino?", "es-ES-ElviraNeural"),
    ("d1-line12", "Sí, quiero abrazar al apóstol Santiago y recibir la Compostela. Será un momento muy emotivo después de tantos kilómetros.", "es-ES-AlvaroNeural"),
    ("d1-line13", "A mí me emociona la idea de llegar. Dicen que muchos peregrinos lloran al ver las torres de la catedral.", "es-ES-ElviraNeural"),
    ("d1-line14", "Es verdad. Después de semanas de caminar, llegar es como completar un ciclo espiritual. No eres la misma persona que cuando empezaste.", "es-ES-AlvaroNeural"),
    ("d1-line15", "¡Buen Camino, Miguel! Nos vemos en Santiago.", "es-ES-ElviraNeural"),
    # Dialogue 2: Día de Muertos — Oaxaca, Mexico
    ("d2-line1", "Mija, ayúdame a poner las flores de cempasúchil en el altar. Tu abuelita llega esta noche.", "es-MX-DaliaNeural"),
    ("d2-line2", "Abuela, ¿realmente crees que los muertos regresan a visitarnos?", "es-MX-DaliaNeural"),
    ("d2-line3", "Es lo que nos enseñaron nuestros antepasados. Las almas regresan atraídas por el aroma del cempasúchil y la comida que amaban.", "es-MX-DaliaNeural"),
    ("d2-line4", "¿Y las velas? ¿Para qué son tantas?", "es-MX-DaliaNeural"),
    ("d2-line5", "Cada vela ilumina el camino de regreso para un alma. Tu abuelita tiene la suya — la grande, en el centro.", "es-MX-DaliaNeural"),
    ("d2-line6", "¿Es verdad que esta tradición viene de antes de la conquista española?", "es-MX-DaliaNeural"),
    ("d2-line7", "Así es. Los aztecas honraban a los muertos mucho antes de que llegaran los españoles. Después se mezcló con el catolicismo. Eso es el sincretismo.", "es-MX-DaliaNeural"),
    ("d2-line8", "¿Y el copal? Siempre me ha gustado ese aroma.", "es-MX-DaliaNeural"),
    ("d2-line9", "El copal purifica el espacio y guía a las almas. Es una ofrenda sagrada desde tiempos prehispánicos.", "es-MX-DaliaNeural"),
    ("d2-line10", "Abuela, ¿qué comida ponemos para la abuelita?", "es-MX-DaliaNeural"),
    ("d2-line11", "Su mole negro, tamales de frijol y chocolate caliente. Eran sus favoritos. También su pan de muerto, por supuesto.", "es-MX-DaliaNeural"),
    ("d2-line12", "Me gusta que esta tradición no sea triste. Es una celebración de la vida, ¿verdad?", "es-MX-DaliaNeural"),
    ("d2-line13", "Exacto, mija. No lloramos a los muertos — los celebramos. Les recordamos con alegría, música y comida. La muerte es parte de la vida.", "es-MX-DaliaNeural"),
    ("d2-line14", "Cuando sea grande, quiero enseñarles esta tradición a mis hijos. Es parte de quiénes somos.", "es-MX-DaliaNeural"),
    ("d2-line15", "Así se mantienen vivas las tradiciones, mija. Mientras alguien recuerde, nadie muere de verdad.", "es-MX-DaliaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.7...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
