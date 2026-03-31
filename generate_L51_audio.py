"""Generate all audio files for L5.1 Pluperfect & Narrative Sequencing using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Pluperfect Regular -AR (10)
    ("habia-hablado-con-profesor", "Ya había hablado con el profesor"),
    ("habiamos-terminado-proyecto", "Habíamos terminado el proyecto antes del plazo"),
    ("habia-estudiado-toda-la-noche", "Ella había estudiado toda la noche"),
    ("habian-viajado-a-colombia", "Habían viajado a Colombia el año anterior"),
    ("habias-trabajado-antes", "¿Habías trabajado antes en un restaurante?"),
    ("ya-habian-cerrado-tienda", "Cuando llegué, ya habían cerrado la tienda"),
    ("nunca-habia-probado", "Nunca había probado la comida peruana"),
    ("habiamos-caminado-tres-horas", "Habíamos caminado tres horas cuando empezó a llover"),
    ("avion-habia-despegado", "El avión había despegado sin nosotros"),
    ("habia-reservado-mesa", "Ya había reservado la mesa antes de llamarte"),
    # Pluperfect Irregular Participles (10)
    ("habia-escrito-carta", "Había escrito una carta pero no la envié"),
    ("habian-abierto-ventanas", "Ya habían abierto todas las ventanas"),
    ("habiamos-dicho-verdad", "Habíamos dicho la verdad desde el principio"),
    ("habia-hecho-tarea", "Ella había hecho la tarea antes de salir"),
    ("habian-vuelto-vacaciones", "Habían vuelto de vacaciones el lunes"),
    ("habias-visto-pelicula", "¿Habías visto esa película antes?"),
    ("no-habia-puesto-atencion", "No había puesto atención a la advertencia"),
    ("habiamos-roto-record", "Habíamos roto el récord anterior"),
    ("habia-muerto-autor", "Ya había muerto el autor cuando publicaron el libro"),
    ("habia-descubierto-clave", "Había descubierto la clave del problema"),
    # Temporal Connectors (14)
    ("antes-de-que-llegara", "Antes de que llegara el jefe, ya habíamos resuelto el problema"),
    ("despues-de-que-habian", "Después de que habían comido, salieron a caminar"),
    ("cuando-ya-habia-oscurecido", "Cuando ya había oscurecido, encendieron las luces"),
    ("apenas-habia-terminado", "Apenas había terminado de hablar cuando sonó el teléfono"),
    ("una-vez-que-habian", "Una vez que habían llegado todos, comenzó la reunión"),
    ("hasta-ese-momento", "Hasta ese momento, no había entendido la situación"),
    ("para-cuando-llegamos", "Para cuando llegamos, ya se habían ido"),
    ("tan-pronto-como", "Tan pronto como había recibido la noticia, llamó a su madre"),
    ("desde-que-habia-empezado", "Desde que había empezado el curso, su español mejoró mucho"),
    ("mientras-habiamos-estado", "Mientras habíamos estado de viaje, renovaron la oficina"),
    ("no-bien-habia-amanecido", "No bien había amanecido, empezaron a construir"),
    ("al-momento-de-llegar", "Al momento de llegar, ya habían vendido todas las entradas"),
    ("luego-de-que-habia", "Luego de que había estudiado todo el día, se fue a dormir"),
    ("a-partir-de-que", "A partir de que había obtenido el título, le ofrecieron mejores puestos"),
    # Narrative Sequencing (14)
    ("primero-habia-llovido", "Primero había llovido, luego salió el sol"),
    ("todo-habia-comenzado", "Todo había comenzado con una simple llamada"),
    ("policia-descubrio", "La policía descubrió que el ladrón había escapado por la ventana"),
    ("supo-que-habia-cometido", "Supo que había cometido un error cuando ya era demasiado tarde"),
    ("empresa-habia-quebrado", "Según nos contaron, la empresa había quebrado meses antes"),
    ("recordo-nunca-habia-dicho", "Recordó que nunca le había dicho lo que sentía"),
    ("al-revisar-camaras", "Al revisar las cámaras, vieron que alguien había entrado de noche"),
    ("habia-olvidado-pasaporte", "Me di cuenta de que había olvidado mi pasaporte en casa"),
    ("detective-concluyo", "El detective concluyó que el sospechoso había mentido"),
    ("despues-de-lo-que", "Después de lo que había pasado, decidieron mudarse"),
    ("nadie-sabia-que", "Nadie sabía que él había vivido en tres países"),
    ("investigacion-revelo", "La investigación reveló que habían usado fondos públicos"),
    ("alguien-habia-cambiado", "Cuando revisé, noté que alguien había cambiado la contraseña"),
    ("habian-confundido-documentos", "Resultó que habían confundido los documentos"),
]

DIALOGUE_LINES = [
    # D1: Reconstructing the Crime — Bogotá (Colombian voices)
    ("d1-line1", "Bueno, dígame: ¿qué había pasado antes de que usted llegara a la oficina?", "es-CO-GonzaloNeural"),
    ("d1-line2", "Cuando llegué a las ocho, la puerta ya había sido forzada.", "es-CO-SalomeNeural"),
    ("d1-line3", "¿Y había notado algo raro los días anteriores?", "es-CO-GonzaloNeural"),
    ("d1-line4", "Sí, el martes había visto a un hombre desconocido en el estacionamiento.", "es-CO-SalomeNeural"),
    ("d1-line5", "¿Había hablado con él?", "es-CO-GonzaloNeural"),
    ("d1-line6", "No, no le había puesto atención. Pensé que era un empleado nuevo.", "es-CO-SalomeNeural"),
    ("d1-line7", "Entiendo. ¿Los documentos que habían desaparecido eran confidenciales?", "es-CO-GonzaloNeural"),
    ("d1-line8", "Sí, eran archivos que habíamos guardado bajo llave. Nunca habíamos tenido un robo así.", "es-CO-SalomeNeural"),
    ("d1-line9", "No se preocupe. Para cuando terminemos la investigación, habremos resuelto todo.", "es-CO-GonzaloNeural"),
    # D2: Grandmother's Memoir — Buenos Aires (Argentine voices)
    ("d2-line1", "Abuela, contame: ¿cómo era la vida antes de que yo naciera?", "es-AR-ElenaNeural"),
    ("d2-line2", "Ay, nena. Para cuando vos naciste, yo ya había vivido en tres ciudades diferentes.", "es-AR-TomasNeural"),
    ("d2-line3", "¿En serio? ¿Y qué había pasado con el abuelo?", "es-AR-ElenaNeural"),
    ("d2-line4", "Nos habíamos conocido en Córdoba. Él había llegado de Italia hacía dos años.", "es-AR-TomasNeural"),
    ("d2-line5", "¡Qué romántico! ¿Y ya habían decidido casarse rápido?", "es-AR-ElenaNeural"),
    ("d2-line6", "No, primero él había tenido que aprender español. Pero una vez que habíamos empezado a hablar, no paramos más.", "es-AR-TomasNeural"),
    ("d2-line7", "Me encanta esa historia. Nunca me la habías contado tan completa.", "es-AR-ElenaNeural"),
    ("d2-line8", "Es que hasta ahora no me habías preguntado con tanta curiosidad, mi amor.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.1...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
