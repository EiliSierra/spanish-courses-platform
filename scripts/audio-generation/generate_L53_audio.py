"""Generate all audio files for L5.3 Passive Voice & Impersonal Se using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.3\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Passive with Ser (12)
    ("la-casa-fue-construida", "La casa fue construida en 1920"),
    ("el-libro-fue-escrito", "El libro fue escrito por García Márquez"),
    ("los-resultados-fueron-publicados", "Los resultados fueron publicados ayer"),
    ("la-ley-fue-aprobada", "La ley fue aprobada por el congreso"),
    ("el-cuadro-fue-pintado", "El cuadro fue pintado por Picasso"),
    ("la-carta-fue-enviada", "La carta fue enviada esta mañana"),
    ("las-victimas-fueron-rescatadas", "Las víctimas fueron rescatadas por los bomberos"),
    ("el-edificio-sera-demolido", "El edificio será demolido el próximo mes"),
    ("la-pelicula-fue-dirigida", "La película fue dirigida por Almodóvar"),
    ("el-premio-fue-otorgado", "El premio fue otorgado a la científica"),
    ("los-documentos-fueron-firmados", "Los documentos fueron firmados por el director"),
    ("la-obra-fue-inaugurada", "La obra fue inaugurada el viernes pasado"),
    # Passive Se (12)
    ("se-construyo-un-puente", "Se construyó un puente nuevo"),
    ("se-vendieron-todas-las-entradas", "Se vendieron todas las entradas"),
    ("se-aprobo-la-ley", "Se aprobó la ley de educación"),
    ("se-publicaron-los-resultados", "Se publicaron los resultados del examen"),
    ("se-inauguro-el-nuevo-hospital", "Se inauguró el nuevo hospital"),
    ("se-firmo-el-acuerdo", "Se firmó el acuerdo de paz"),
    ("se-encontraron-restos", "Se encontraron restos arqueológicos"),
    ("se-cancelo-el-vuelo", "Se canceló el vuelo por mal tiempo"),
    ("se-rompio-la-ventana", "Se rompió la ventana durante la tormenta"),
    ("se-abrieron-dos-escuelas", "Se abrieron dos escuelas nuevas"),
    ("se-eligio-al-nuevo-presidente", "Se eligió al nuevo presidente"),
    ("se-descubrio-una-nueva-especie", "Se descubrió una nueva especie"),
    # Impersonal Se (12)
    ("se-habla-espanol-aqui", "Se habla español aquí"),
    ("se-dice-que-va-a-llover", "Se dice que va a llover mañana"),
    ("se-necesita-experiencia", "Se necesita experiencia previa"),
    ("se-prohibe-fumar", "Se prohíbe fumar en este edificio"),
    ("se-puede-pagar-con-tarjeta", "Se puede pagar con tarjeta"),
    ("se-vive-bien-en-esta-ciudad", "Se vive bien en esta ciudad"),
    ("se-come-muy-bien", "Se come muy bien en este restaurante"),
    ("se-trabaja-mucho", "Se trabaja mucho en esta empresa"),
    ("se-recomienda-llegar-temprano", "Se recomienda llegar temprano"),
    ("se-busca-empleado", "Se busca empleado con experiencia"),
    ("se-cree-que-el-universo", "Se cree que el universo tiene 13 mil millones de años"),
    ("no-se-permite-la-entrada", "No se permite la entrada a menores"),
    # Estar + Participle (12)
    ("la-puerta-esta-cerrada", "La puerta está cerrada"),
    ("el-trabajo-esta-terminado", "El trabajo está terminado"),
    ("la-mesa-esta-puesta", "La mesa está puesta"),
    ("las-luces-estan-encendidas", "Las luces están encendidas"),
    ("el-carro-esta-estacionado", "El carro está estacionado afuera"),
    ("la-tienda-esta-abierta", "La tienda está abierta hasta las nueve"),
    ("los-ninos-estan-dormidos", "Los niños están dormidos"),
    ("el-informe-esta-escrito", "El informe está escrito en español"),
    ("la-ventana-esta-rota", "La ventana está rota"),
    ("el-problema-esta-resuelto", "El problema está resuelto"),
    ("la-comida-esta-preparada", "La comida está preparada"),
    ("los-boletos-estan-reservados", "Los boletos están reservados"),
]

DIALOGUE_LINES = [
    # D1: Newsroom Discussion — Ciudad de México (Mexican voices)
    ("d1-line1", "Pablo, tu titular dice \"El gobierno aprobó la reforma.\" Necesitamos cambiarlo a voz pasiva para el periódico.", "es-MX-DaliaNeural"),
    ("d1-line2", "¿Quieres que use \"fue aprobada\" o \"se aprobó\"? Siempre tengo esa duda.", "es-MX-JorgeNeural"),
    ("d1-line3", "En titulares, se prefiere la pasiva refleja: \"Se aprobó la reforma educativa.\" Es más conciso.", "es-MX-DaliaNeural"),
    ("d1-line4", "Entendido. ¿Y para el artículo completo? Ahí sí puedo usar \"fue aprobada por el congreso,\" ¿verdad?", "es-MX-JorgeNeural"),
    ("d1-line5", "Exacto. En el cuerpo del artículo se usa la pasiva con ser cuando se quiere mencionar quién hizo la acción.", "es-MX-DaliaNeural"),
    ("d1-line6", "También tengo esta oración: \"Los resultados están publicados en la página web.\" ¿Está bien?", "es-MX-JorgeNeural"),
    ("d1-line7", "Sí, pero ojo: \"están publicados\" describe un estado actual. Si quieres la acción, sería \"fueron publicados\" o \"se publicaron.\"", "es-MX-DaliaNeural"),
    ("d1-line8", "¡Ahora me queda claro! Se usa \"estar\" para el resultado y \"ser\" o \"se\" para la acción.", "es-MX-JorgeNeural"),
    ("d1-line9", "Perfecto. Y recuerda: en español periodístico se evita la pasiva con ser siempre que sea posible. La pasiva refleja suena mucho más natural.", "es-MX-DaliaNeural"),
    # D2: Tour Guide — Cartagena, Colombia (Colombian voices)
    ("d2-line1", "Bienvenidos a la Ciudad Amurallada. Estas murallas fueron construidas en el siglo diecisiete para proteger la ciudad de los piratas.", "es-CO-GonzaloNeural"),
    ("d2-line2", "¡Increíble! ¿Y se sabe quién las diseñó?", "es-CO-SalomeNeural"),
    ("d2-line3", "Sí, fueron diseñadas por el ingeniero militar Bautista Antonelli. Se dice que tardaron casi doscientos años en completarse.", "es-CO-GonzaloNeural"),
    ("d2-line4", "Se nota que están muy bien conservadas. ¿Se han restaurado recientemente?", "es-CO-SalomeNeural"),
    ("d2-line5", "Sí, la última restauración fue realizada en dos mil quince. Ahora las murallas están protegidas como Patrimonio de la Humanidad.", "es-CO-GonzaloNeural"),
    ("d2-line6", "¿Se permite caminar por encima de las murallas?", "es-CO-SalomeNeural"),
    ("d2-line7", "¡Por supuesto! Se puede pasear por la parte superior. Desde allí se ve toda la bahía. Es espectacular al atardecer.", "es-CO-GonzaloNeural"),
    ("d2-line8", "Me encanta. Se nota que esta ciudad fue construida con mucho cuidado y arte.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.3...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
