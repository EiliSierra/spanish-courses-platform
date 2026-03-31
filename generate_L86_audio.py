"""Generate all audio files for L8.6 Music, Dance & Performing Arts using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.6\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Music Terminology (12)
    ("el-compas-de-esta-pieza", "El compás de esta pieza es de tres por cuatro, un vals clásico"),
    ("la-tonalidad-cambia", "La tonalidad cambia de mayor a menor en el segundo movimiento, creando melancolía"),
    ("el-acorde-de-septima", "El acorde de séptima dominante genera una tensión que pide resolución"),
    ("la-melodia-principal", "La melodía principal es interpretada por los violines en el registro agudo"),
    ("el-estribillo-es-la-parte", "El estribillo es la parte más pegadiza de la canción, la que todos recuerdan"),
    ("la-improvisacion-en-el-jazz", "La improvisación en el jazz latino combina armonía compleja con ritmos afrocubanos"),
    ("la-nota-esta-en-bemol", "La nota está en bemol, medio tono por debajo de la nota natural"),
    ("el-sostenido-eleva", "El sostenido eleva la nota medio tono, creando una sonoridad más brillante"),
    ("la-orquestacion-de-esta", "La orquestación de esta sinfonía usa metales y percusión con maestría"),
    ("el-arreglo-musical", "El arreglo musical transforma una balada sencilla en una obra orquestal compleja"),
    ("el-crescendo-va-aumentando", "El crescendo va aumentando la intensidad hasta llegar al fortísimo final"),
    ("la-sincopa-desplaza", "La síncopa desplaza el acento rítmico, dando una sensación de movimiento inesperado"),
    # Dance Styles (12)
    ("el-tango-milonguero", "El tango milonguero se baila en abrazo cerrado, pecho con pecho, sintiendo la música"),
    ("la-salsa-calena", "La salsa caleña de Colombia se distingue por sus pasos rápidos y acrobáticos"),
    ("el-flamenco-jondo", "El flamenco jondo es la expresión más profunda y visceral del cante flamenco"),
    ("la-cumbia-nacio", "La cumbia nació en la costa caribeña de Colombia y conquistó toda América Latina"),
    ("el-reggaeton-fusiona", "El reggaetón fusiona ritmos urbanos con dembow y letras en español"),
    ("la-bachata-dominicana", "La bachata dominicana se baila con movimientos de cadera sensuales y pasos laterales"),
    ("los-pasos-basicos", "Los pasos básicos del merengue son sencillos: marchar al ritmo de la música"),
    ("el-abrazo-cerrado", "El abrazo cerrado del tango requiere conexión total entre la pareja"),
    ("marcar-el-ritmo", "Marcar el ritmo con los pies es fundamental en el zapateado flamenco"),
    ("la-rueda-de-casino", "La rueda de casino es una forma grupal de bailar salsa originaria de Cuba"),
    ("el-danzon-es-el-baile", "El danzón es el baile nacional de Cuba, elegante y ceremonioso"),
    ("el-joropo-venezolano", "El joropo venezolano combina zapateo, vals y música de arpa llanera"),
    # Theater & Performance (12)
    ("el-elenco-de-esta-obra", "El elenco de esta obra incluye a los mejores actores del teatro hispanoamericano"),
    ("la-puesta-en-escena", "La puesta en escena es minimalista: solo tres sillas y una luz cenital"),
    ("el-monologo-del-protagonista", "El monólogo del protagonista dura quince minutos y deja al público sin aliento"),
    ("la-dramaturgia-de-esta", "La dramaturgia de esta pieza explora la violencia y la memoria en Colombia"),
    ("durante-el-entreacto", "Durante el entreacto, el público comenta la intensidad de la primera parte"),
    ("los-actores-se-preparan", "Los actores se preparan entre bambalinas antes de salir al escenario"),
    ("el-guion-fue-escrito", "El guion fue escrito por una dramaturga mexicana ganadora del premio nacional"),
    ("el-ensayo-general", "El ensayo general es el último antes del estreno y se hace con vestuario completo"),
    ("la-cuarta-pared", "La cuarta pared se rompe cuando el actor habla directamente al público"),
    ("el-teatro-del-absurdo", "El teatro del absurdo cuestiona la lógica y las convenciones sociales"),
    ("la-opera-combina", "La ópera combina canto lírico, actuación dramática y escenografía espectacular"),
    ("el-teatro-callejero", "El teatro callejero lleva el arte a las plazas y parques para todo el pueblo"),
    # Criticism & Review (12)
    ("la-interpretacion-fue-magistral", "La interpretación fue magistral; cada gesto transmitió una emoción auténtica"),
    ("la-coreografia-deslumbro", "La coreografía deslumbró al público con su precisión y creatividad"),
    ("la-puesta-en-escena-innovadora", "La puesta en escena innovadora rompió con todos los esquemas del teatro clásico"),
    ("el-ritmo-hipnotizante", "El ritmo hipnotizante de la percusión mantuvo al público en trance durante dos horas"),
    ("la-voz-del-solista", "La voz del solista estremeció al público con su potencia y su fragilidad"),
    ("el-album-representa", "El álbum representa una evolución artística que pocos esperaban de este grupo"),
    ("la-fusion-de-estilos", "La fusión de estilos tradicionales y electrónicos resulta sorprendentemente armoniosa"),
    ("el-vestuario-y-la-iluminacion", "El vestuario y la iluminación crearon una atmósfera onírica e inolvidable"),
    ("la-direccion-musical", "La dirección musical fue impecable, con transiciones fluidas entre cada número"),
    ("el-publico-estallo", "El público estalló en una ovación de pie que duró más de cinco minutos"),
    ("la-letra-de-esta-cancion", "La letra de esta canción es poesía pura disfrazada de música popular"),
    ("este-concierto-pasara", "Este concierto pasará a la historia como uno de los mejores de la temporada"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Backstage at a Tango Show — Buenos Aires
    ("d1-line1", "¡Qué espectáculo! Acabo de ver el show de tango y estoy temblando de emoción.", "es-AR-ElenaNeural"),
    ("d1-line2", "Es que el tango milonguero es así. Cuando es auténtico, te sacude el alma.", "es-AR-TomasNeural"),
    ("d1-line3", "La pareja principal bailó con los ojos cerrados. El abrazo era tan íntimo que parecían una sola persona.", "es-AR-ElenaNeural"),
    ("d1-line4", "Eso es lo que hace especial al tango de Buenos Aires. No es coreografía, es conexión pura. Se improvisa todo.", "es-AR-TomasNeural"),
    ("d1-line5", "¿Y el bandoneón? Cuando empezó a sonar Adiós Nonino sentí un nudo en la garganta.", "es-AR-ElenaNeural"),
    ("d1-line6", "Piazzolla revolucionó el tango. Fusionó elementos del jazz y la música clásica con el tango tradicional.", "es-AR-TomasNeural"),
    ("d1-line7", "Me contó uno de los bailarines que ensayan seis horas diarias. La técnica del zapateado es impresionante.", "es-AR-ElenaNeural"),
    ("d1-line8", "Sí, pero lo más difícil del tango no es la técnica, es la pausa. Saber cuándo no moverse es un arte.", "es-AR-TomasNeural"),
    ("d1-line9", "La iluminación también fue perfecta. Esa luz tenue con tonos rojos creó una atmósfera de otra época.", "es-AR-ElenaNeural"),
    ("d1-line10", "¿Sabías que el tango fue declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2009?", "es-AR-TomasNeural"),
    ("d1-line11", "No lo sabía. Y después de esta noche, entiendo perfectamente por qué. Es arte puro.", "es-AR-ElenaNeural"),
    ("d1-line12", "Si querés, mañana te llevo a una milonga de verdad. Ahí se baila tango entre la gente, sin escenario.", "es-AR-TomasNeural"),
    ("d1-line13", "¡Me encantaría! ¿Necesito saber bailar?", "es-AR-ElenaNeural"),
    ("d1-line14", "Solo necesitás sentir la música y dejarte llevar. El tango no se aprende, se vive.", "es-AR-TomasNeural"),
    ("d1-line15", "Entonces mañana nos vemos en la milonga. ¡Esta ciudad es mágica!", "es-AR-ElenaNeural"),
    # Dialogue 2: Music Producer in the Studio — Bogotá
    ("d2-line1", "Parcero, escuchá este arreglo que hice. Mezclé cumbia electrónica con un sample de una gaita colombiana.", "es-CO-SalomeNeural"),
    ("d2-line2", "¡Qué nota! El beat tiene un compás de cuatro por cuatro pero la gaita le da un sabor totalmente diferente.", "es-CO-GonzaloNeural"),
    ("d2-line3", "Esa era la idea. Quiero fusionar lo ancestral con lo urbano. La cumbia nació en la costa pero ahora es del mundo.", "es-CO-SalomeNeural"),
    ("d2-line4", "¿Y la voz? El estribillo necesita una melodía más pegadiza. Algo que la gente pueda cantar en los conciertos.", "es-CO-GonzaloNeural"),
    ("d2-line5", "Tienes razón. Probé con una tonalidad menor pero sonaba demasiado triste. Voy a cambiar a mayor.", "es-CO-SalomeNeural"),
    ("d2-line6", "¿Qué tal si le agregas un acorde de séptima en la transición? Eso crearía tensión antes del estribillo.", "es-CO-GonzaloNeural"),
    ("d2-line7", "Buena idea. Y quiero meter un solo de bajo en la mitad. Algo con mucha síncopa, bien funky.", "es-CO-SalomeNeural"),
    ("d2-line8", "La orquestación de la intro es brutal. Los metales le dan esa energía de big band latina.", "es-CO-GonzaloNeural"),
    ("d2-line9", "Eso es lo que más me costó. Escribir para trompetas y trombones sin que suene a salsa tradicional.", "es-CO-SalomeNeural"),
    ("d2-line10", "¿Ya tienes fecha de lanzamiento? Los festivales de música en Colombia están buscando propuestas innovadoras.", "es-CO-GonzaloNeural"),
    ("d2-line11", "Quiero tenerla lista para el Festival Estéreo Picnic. Sería increíble presentarla en vivo ahí.", "es-CO-SalomeNeural"),
    ("d2-line12", "Con este sonido, vas a deslumbrar. La fusión de lo electrónico con las raíces colombianas es el futuro.", "es-CO-GonzaloNeural"),
    ("d2-line13", "Eso espero. Colombia tiene una riqueza musical increíble y apenas estamos empezando a explorarla con tecnología.", "es-CO-SalomeNeural"),
    ("d2-line14", "Bueno, dale, vamos a grabar esa nueva versión del estribillo. ¡Esto va a sonar espectacular!", "es-CO-GonzaloNeural"),
    ("d2-line15", "¡Listo! Que suene la música. Tres, dos, uno...", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.6...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
