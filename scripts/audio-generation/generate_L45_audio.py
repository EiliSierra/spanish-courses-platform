"""Generate all audio files for L4.5 Health & Wellness using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.5\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Mental Health
    ("la-salud-mental", "La salud mental"),
    ("estoy-estresado", "Estoy estresado"),
    ("necesito-descansar", "Necesito descansar"),
    ("me-siento-ansioso", "Me siento ansioso"),
    ("la-terapia-me-ayuda", "La terapia me ayuda mucho"),
    ("practico-la-meditacion", "Practico la meditación"),
    ("me-siento-agotado", "Me siento agotado"),
    ("manejar-el-estres", "Tengo que manejar el estrés"),
    ("respirar-profundo", "Respirar profundo ayuda"),
    ("bienestar-emocional", "Mi bienestar emocional es importante"),
    # Lifestyle
    ("estilo-de-vida-saludable", "Llevo un estilo de vida saludable"),
    ("duermo-ocho-horas", "Duermo ocho horas cada noche"),
    ("tomo-mucha-agua", "Tomo mucha agua durante el día"),
    ("evito-cafeina", "Evito el exceso de cafeína"),
    ("no-fumo-ni-bebo", "No fumo ni bebo alcohol"),
    ("me-acuesto-temprano", "Me acuesto temprano"),
    ("tiempo-al-aire-libre", "Paso tiempo al aire libre"),
    ("rutina-de-sueno", "Tengo una rutina de sueño"),
    ("desconecto-telefono", "Desconecto el teléfono antes de dormir"),
    ("equilibrio-es-clave", "El equilibrio es clave"),
    # Exercise & Diet
    ("hago-ejercicio", "Hago ejercicio tres veces por semana"),
    ("como-frutas-verduras", "Como frutas y verduras todos los días"),
    ("corro-en-el-parque", "Corro en el parque por las mañanas"),
    ("practico-yoga", "Practico yoga para relajarme"),
    ("evito-comida-chatarra", "Evito la comida chatarra"),
    ("levanto-pesas", "Levanto pesas en el gimnasio"),
    ("dieta-equilibrada", "Llevo una dieta equilibrada"),
    ("camino-treinta-minutos", "Camino al menos treinta minutos al día"),
    ("proteinas-esenciales", "Las proteínas son esenciales"),
    ("estirar-despues-correr", "Necesito estirar después de correr"),
    # Advice
    ("recomiendo-duermas", "Te recomiendo que duermas más"),
    ("importante-hagas-ejercicio", "Es importante que hagas ejercicio"),
    ("sugiero-pruebes-meditacion", "Sugiero que pruebes la meditación"),
    ("deberias-consultar", "Deberías consultar a un especialista"),
    ("reduzcas-azucar", "Es mejor que reduzcas el azúcar"),
    ("aconsejo-camines", "Te aconsejo que camines más"),
    ("no-bueno-trabajes-tanto", "No es bueno que trabajes tanto"),
    ("ojala-sientas-mejor", "Ojalá que te sientas mejor pronto"),
]

DIALOGUE_LINES = [
    # D1: Lima (Peruvian-style — use Colombian/Mexican as proxy)
    ("d1-line1", "Últimamente me siento muy estresada con el trabajo.", "es-CO-SalomeNeural"),
    ("d1-line2", "¿En serio? ¿Qué está pasando?", "es-CO-GonzaloNeural"),
    ("d1-line3", "Trabajo muchas horas y no duermo bien. Me siento agotada.", "es-CO-SalomeNeural"),
    ("d1-line4", "Te recomiendo que hables con tu jefe sobre tu carga de trabajo.", "es-CO-GonzaloNeural"),
    ("d1-line5", "Sí, tienes razón. También necesito una rutina de sueño.", "es-CO-SalomeNeural"),
    ("d1-line6", "Es importante que desconectes el teléfono antes de dormir.", "es-CO-GonzaloNeural"),
    ("d1-line7", "¿Tú qué haces para manejar el estrés?", "es-CO-SalomeNeural"),
    ("d1-line8", "Practico meditación y hago yoga dos veces por semana. Me ayuda mucho.", "es-CO-GonzaloNeural"),
    ("d1-line9", "Sugiero que lo intentemos juntos. Ojalá me ayude también.", "es-CO-SalomeNeural"),
    # D2: Medellín (Colombian voices)
    ("d2-line1", "Quiero empezar a hacer ejercicio pero no sé por dónde comenzar.", "es-MX-DaliaNeural"),
    ("d2-line2", "Te aconsejo que empieces con algo simple, como caminar treinta minutos al día.", "es-MX-JorgeNeural"),
    ("d2-line3", "¿Y la dieta? Como mucha comida chatarra.", "es-MX-DaliaNeural"),
    ("d2-line4", "Es mejor que reduzcas el azúcar y comas más frutas y verduras.", "es-MX-JorgeNeural"),
    ("d2-line5", "¿Tú vas al gimnasio?", "es-MX-DaliaNeural"),
    ("d2-line6", "Sí, levanto pesas tres veces por semana y corro en el parque los fines de semana.", "es-MX-JorgeNeural"),
    ("d2-line7", "Me gustaría probar yoga. Dicen que es bueno para relajarse.", "es-MX-DaliaNeural"),
    ("d2-line8", "¡Sí! Es excelente para el cuerpo y la mente. El equilibrio es clave.", "es-MX-JorgeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.5 Health & Wellness...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
