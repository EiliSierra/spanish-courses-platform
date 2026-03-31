"""Generate all audio files for L7.7 Creative Writing & Storytelling using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Narrative Techniques (12)
    ("el-narrador-en-primera", "El narrador en primera persona nos sumerge en la mente del protagonista"),
    ("el-flashback-o-analepsis", "El flashback o analepsis nos transporta a un momento anterior de la historia"),
    ("el-foreshadowing-o-prolepsis", "El foreshadowing o prolepsis anticipa eventos que ocurrirán más adelante"),
    ("el-flujo-de-consciencia", "El flujo de consciencia captura los pensamientos desordenados de un personaje"),
    ("el-monologo-interior", "El monólogo interior revela lo que un personaje piensa pero no dice"),
    ("el-punto-de-vista", "El punto de vista múltiple presenta la historia desde varias perspectivas"),
    ("el-narrador-omnisciente", "El narrador omnisciente todo lo sabe: pensamientos, pasado y futuro"),
    ("el-narrador-no-fiable", "El narrador no fiable nos engaña deliberadamente sobre los hechos"),
    ("la-elipsis-narrativa", "La elipsis narrativa omite eventos para crear misterio o acelerar el ritmo"),
    ("el-tiempo-no-lineal", "El tiempo no lineal desordena la cronología para generar sorpresa"),
    ("la-metaficcion-hace", "La metaficción hace que la historia hable de sí misma como ficción"),
    ("el-cliffhanger-deja", "El cliffhanger deja la acción suspendida para mantener el suspenso"),
    # Descriptive Writing (12)
    ("el-paisaje-se-extendia", "El paisaje se extendía hasta donde alcanzaba la vista, vasto e inmutable"),
    ("una-brisa-tenue", "Una brisa tenue acariciaba los campos de trigo dorado"),
    ("el-silencio-era-ensordecedor", "El silencio era ensordecedor, como si el mundo hubiera dejado de respirar"),
    ("la-luz-se-filtraba", "La luz se filtraba entre las hojas, creando un mosaico de sombras"),
    ("el-aire-olia", "El aire olía a lluvia inminente y a tierra húmeda"),
    ("las-calles-adoquinadas", "Las calles adoquinadas reflejaban la luz mortecina del atardecer"),
    ("su-rostro-era-un-mapa", "Su rostro era un mapa de arrugas que contaban historias sin palabras"),
    ("la-niebla-envolvia", "La niebla envolvía el pueblo como un manto de algodón gris"),
    ("el-rio-murmuraba", "El río murmuraba secretos antiguos entre las piedras desgastadas"),
    ("un-trueno-lejano", "Un trueno lejano anunciaba la tormenta con voz de gigante dormido"),
    ("los-colores-del-mercado", "Los colores del mercado explotaban como fuegos artificiales de tela y especias"),
    ("la-casa-crujia", "La casa crujía bajo el peso de los años, como un anciano que suspira"),
    # Dialogue Craft (12)
    ("dijo-con-voz-entrecortada", "dijo con voz entrecortada, como si cada palabra le costara un esfuerzo"),
    ("murmuro-entre-dientes", "murmuró entre dientes, sin levantar la mirada del suelo"),
    ("exclamo-con-ironia", "exclamó con ironía, dibujando una sonrisa amarga en los labios"),
    ("suspiro-antes-de-responder", "suspiró antes de responder, como si buscara las palabras exactas"),
    ("grito-con-una-rabia", "gritó con una rabia que hacía temblar las paredes"),
    ("confeso-en-voz-baja", "confesó en voz baja, como quien entrega un secreto peligroso"),
    ("respondio-con-calma", "respondió con calma glacial, sin que una sola emoción cruzara su rostro"),
    ("tartamudeo-buscando", "tartamudeó, buscando las palabras que se le escapaban como peces"),
    ("interrumpio-con-impaciencia", "interrumpió con impaciencia, sin dejar terminar la frase"),
    ("suplico-con-los-ojos", "suplicó con los ojos llenos de lágrimas que no se atrevía a derramar"),
    ("mintio-sin-pestanear", "mintió sin pestañear, con la tranquilidad de quien ha ensayado mil veces"),
    ("pregunto-con-genuina", "preguntó con genuina curiosidad, inclinando la cabeza como un pájaro"),
    # Story Structure (12)
    ("el-planteamiento-establece", "El planteamiento establece el mundo, los personajes y el tono de la historia"),
    ("el-nudo-es-donde", "El nudo es donde el conflicto se desarrolla y las tensiones aumentan"),
    ("el-climax-es-el-momento", "El clímax es el momento de máxima tensión donde todo cambia"),
    ("el-desenlace-resuelve", "El desenlace resuelve los conflictos y cierra los arcos narrativos"),
    ("el-conflicto-interno", "El conflicto interno enfrenta al personaje consigo mismo"),
    ("la-resolucion-puede-ser", "La resolución puede ser abierta, dejando que el lector imagine el final"),
    ("el-arco-del-personaje", "El arco del personaje muestra su transformación a lo largo de la historia"),
    ("el-antagonista-no-siempre", "El antagonista no siempre es un villano; puede ser una circunstancia"),
    ("el-tema-subyacente", "El tema subyacente da profundidad y significado universal a la historia"),
    ("el-giro-argumental", "El giro argumental sorprende al lector al cambiar el rumbo de la trama"),
    ("el-epilogo-ofrece", "El epílogo ofrece un vistazo al futuro de los personajes después del final"),
    ("la-tension-dramatica", "La tensión dramática mantiene al lector en vilo, deseando saber qué pasará"),
]

DIALOGUE_LINES = [
    # D1: Creative Writing Workshop — Oaxaca (Mexican voices)
    ("d1-line1", "Bienvenidos al taller de escritura creativa. Hoy trabajaremos con la técnica del narrador no fiable. ¿Alguien puede definirlo?", "es-MX-DaliaNeural"),
    ("d1-line2", "Es un narrador que nos engaña deliberadamente sobre los hechos. El lector descubre la verdad solo al final.", "es-MX-JorgeNeural"),
    ("d1-line3", "Exacto. Piensen en un personaje que cuenta su versión de los hechos, pero oculta información crucial. ¿Qué efecto tiene en el lector?", "es-MX-DaliaNeural"),
    ("d1-line4", "Crea un giro argumental que sorprende al lector al cambiar todo el rumbo de la trama. Es como releer la historia con ojos nuevos.", "es-MX-DaliaNeural"),
    ("d1-line5", "Perfecto. Ahora quiero que escriban una escena de tres párrafos. Primer párrafo: planteamiento con descripción sensorial.", "es-MX-DaliaNeural"),
    ("d1-line6", "¿Puedo usar el flujo de consciencia? Quiero que los pensamientos del personaje se mezclen con la descripción del lugar.", "es-MX-JorgeNeural"),
    ("d1-line7", "Claro. Recuerden: el flujo de consciencia captura los pensamientos desordenados. No necesitan comas perfectas ni lógica lineal.", "es-MX-DaliaNeural"),
    ("d1-line8", "Yo quiero empezar con una imagen: \"El silencio era ensordecedor, como si el mundo hubiera dejado de respirar.\"", "es-MX-DaliaNeural"),
    ("d1-line9", "¡Hermoso! Esa es una paradoja descriptiva — \"silencio ensordecedor.\" Usen los cinco sentidos: no solo lo que se ve, sino lo que se oye, huele, toca y saborea.", "es-MX-DaliaNeural"),
    ("d1-line10", "Tengo un problema con el diálogo. Todo suena igual, como si todos los personajes fueran la misma persona.", "es-MX-JorgeNeural"),
    ("d1-line11", "Cada personaje debe tener una voz única. Uno \"murmura entre dientes,\" otro \"exclama con ironía.\" La acción del diálogo revela el carácter.", "es-MX-DaliaNeural"),
    ("d1-line12", "Y el subtext, ¿no? Lo que el personaje NO dice es tan importante como lo que dice.", "es-MX-DaliaNeural"),
    ("d1-line13", "Exacto. Un personaje que \"confesó en voz baja, como quien entrega un secreto peligroso\" — ahí está el subtexto. La forma de hablar es el mensaje.", "es-MX-DaliaNeural"),
    ("d1-line14", "Entiendo. El arco del personaje muestra su transformación. Si el diálogo no cambia con el personaje, la historia no evoluciona.", "es-MX-JorgeNeural"),
    ("d1-line15", "Brillante. Recuerden: toda gran historia tiene un tema subyacente que da profundidad universal. Escriban con el corazón, editen con la cabeza.", "es-MX-DaliaNeural"),
    # D2: Book Editing Session — Madrid (Spanish voices)
    ("d2-line1", "He leído tu manuscrito completo, Ana. La historia es poderosa, pero necesitamos hablar de estructura. El nudo se extiende demasiado.", "es-ES-AlvaroNeural"),
    ("d2-line2", "Sé que el nudo es largo. Pero necesito ese tiempo para desarrollar la relación entre los dos protagonistas.", "es-ES-ElviraNeural"),
    ("d2-line3", "Entiendo, pero el lector pierde la tensión dramática. Propongo usar elipsis narrativa — omitir las escenas repetitivas y saltar a los momentos clave.", "es-ES-AlvaroNeural"),
    ("d2-line4", "¿Y si uso flashbacks en vez de narrar todo linealmente? Puedo revelar la relación a través de recuerdos mientras la trama principal avanza.", "es-ES-ElviraNeural"),
    ("d2-line5", "¡Eso es! El tiempo no lineal puede ser tu mejor aliado. Desordena la cronología para generar sorpresa.", "es-ES-AlvaroNeural"),
    ("d2-line6", "Ahora, sobre el clímax. ¿Crees que el lector lo ve venir?", "es-ES-ElviraNeural"),
    ("d2-line7", "Sí, necesitas más foreshadowing sutil. Planta pistas pequeñas que solo cobren sentido en la relectura. La prolepsis bien hecha es invisible la primera vez.", "es-ES-AlvaroNeural"),
    ("d2-line8", "Tu descripción del mercado de Oaxaca es magistral: \"Los colores explotaban como fuegos artificiales de tela y especias.\" Eso es pura poesía.", "es-ES-AlvaroNeural"),
    ("d2-line9", "Gracias. Pero en el capítulo siete, el diálogo entre María y su padre suena forzado. \"Dijo\" aparece quince veces en dos páginas.", "es-ES-AlvaroNeural"),
    ("d2-line10", "Tienes razón. Necesito más variedad: \"murmuró entre dientes,\" \"suspiró antes de responder,\" \"respondió con calma glacial.\"", "es-ES-ElviraNeural"),
    ("d2-line11", "Perfecto. Y el desenlace — ¿va a ser abierto o cerrado?", "es-ES-AlvaroNeural"),
    ("d2-line12", "Quiero una resolución abierta. Que el lector imagine el final. Pero necesito que sea satisfactoria, no frustrante.", "es-ES-ElviraNeural"),
    ("d2-line13", "Entonces cierra los arcos emocionales pero deja abierta la trama externa. El conflicto interno del personaje se resuelve, pero su viaje continúa.", "es-ES-AlvaroNeural"),
    ("d2-line14", "Eso es exactamente lo que quiero. Un epílogo que ofrezca un vistazo al futuro sin cerrarlo todo.", "es-ES-ElviraNeural"),
    ("d2-line15", "Me encanta tu voz como escritora, Ana. Esta novela va a ser especial. Ahora — a reescribir el segundo acto.", "es-ES-AlvaroNeural"),
    ("d2-line16", "A reescribir. Como dice la frase: \"Escribir es reescribir.\" Nos vemos la próxima semana con la versión revisada.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.7...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
