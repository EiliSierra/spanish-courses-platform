"""Generate all audio files for L4.3 Formal vs Informal (Tú, Usted & Vos) using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.3\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Tú Forms (10)
    ("como-estas-tu", "¿Cómo estás tú?"),
    ("tu-puedes-hacerlo", "Tú puedes hacerlo"),
    ("quieres-ir-al-cine", "¿Quieres ir al cine?"),
    ("dime-la-verdad", "Dime la verdad"),
    ("tienes-tiempo", "¿Tienes tiempo?"),
    ("ven-aqui-un-momento", "Ven aquí un momento"),
    ("tu-hablas-muy-bien", "Tú hablas muy bien"),
    ("que-piensas-de-esto", "¿Qué piensas de esto?"),
    ("sientate-donde-quieras", "Siéntate donde quieras"),
    ("cuentame-que-paso", "Cuéntame qué pasó"),
    # Usted Forms (10)
    ("como-esta-usted", "¿Cómo está usted?"),
    ("pase-usted-por-favor", "Pase usted, por favor"),
    ("podria-repetir-eso", "¿Podría repetir eso?"),
    ("disculpe-la-molestia", "Disculpe la molestia"),
    ("en-que-le-puedo-ayudar", "¿En qué le puedo ayudar?"),
    ("le-agradezco-su-tiempo", "Le agradezco su tiempo"),
    ("tome-asiento-por-favor", "Tome asiento, por favor"),
    ("tiene-usted-alguna-pregunta", "¿Tiene usted alguna pregunta?"),
    ("permitame-explicarle", "Permítame explicarle"),
    ("fue-un-placer-conocerlo", "Fue un placer conocerlo"),
    # Vos Forms (8)
    ("como-estas-vos", "¿Cómo estás vos?"),
    ("queres-tomar-algo", "¿Querés tomar algo?"),
    ("vos-sabes-que-te-quiero", "Vos sabés que te quiero"),
    ("contame-que-te-paso", "Contame qué te pasó"),
    ("veni-a-mi-casa", "Vení a mi casa"),
    ("tenes-tiempo-ahora", "¿Tenés tiempo ahora?"),
    ("sentate-donde-quieras", "Sentate donde quieras"),
    ("decime-la-verdad", "Decime la verdad"),
    # Contexts (10)
    ("con-amigos-uso-tu", "Con amigos uso tú"),
    ("al-doctor-le-digo-usted", "Al doctor le digo usted"),
    ("en-argentina-se-usa-vos", "En Argentina se usa vos"),
    ("a-los-mayores-usted", "A los mayores se les trata de usted"),
    ("en-colombia-usted-comun", "En Colombia usted es más común"),
    ("en-entrevista-usted", "En una entrevista se usa usted"),
    ("entre-hermanos-tu-vos", "Entre hermanos se usa tú o vos"),
    ("tutear-hablar-de-tu", "Tutear es hablar de tú"),
    ("vosear-hablar-de-vos", "Vosear es hablar de vos"),
    ("registro-cambia-situacion", "El registro cambia según la situación"),
]

DIALOGUE_LINES = [
    # D1: Formal Business Meeting — Lima (Peruvian/Colombian voices)
    ("d1-line1", "Buenos días. Pase, por favor. Tome asiento.", "es-CO-SalomeNeural"),
    ("d1-line2", "Gracias, señora Rojas. Le agradezco su tiempo.", "es-MX-JorgeNeural"),
    ("d1-line3", "¿En qué le puedo ayudar hoy?", "es-CO-SalomeNeural"),
    ("d1-line4", "Quería hablarle sobre el proyecto nuevo. ¿Podría revisar este documento?", "es-MX-JorgeNeural"),
    ("d1-line5", "Por supuesto. Permítame leerlo con atención.", "es-CO-SalomeNeural"),
    ("d1-line6", "Tómese su tiempo. No hay prisa.", "es-MX-JorgeNeural"),
    ("d1-line7", "Muy bien. ¿Tiene alguna pregunta adicional?", "es-CO-SalomeNeural"),
    ("d1-line8", "No, señora. Fue un placer. Muchas gracias por recibirme.", "es-MX-JorgeNeural"),
    # D2: Casual Friends — Buenos Aires (Argentine voices)
    ("d2-line1", "¡Che! ¿Cómo estás, boludo? ¡Hace mucho que no te veo!", "es-AR-TomasNeural"),
    ("d2-line2", "¡Hola! Bien, ¿y vos? Contame, ¿qué estuviste haciendo?", "es-AR-ElenaNeural"),
    ("d2-line3", "Nada, laburando como loco. ¿Querés tomar un mate?", "es-AR-TomasNeural"),
    ("d2-line4", "¡Dale! Vení, sentate acá. Te cuento algo increíble.", "es-AR-ElenaNeural"),
    ("d2-line5", "¿Qué pasó? Decime, decime.", "es-AR-TomasNeural"),
    ("d2-line6", "Conseguí un trabajo nuevo. ¡No lo podés creer!", "es-AR-ElenaNeural"),
    ("d2-line7", "¡No me digás! ¡Felicitaciones! ¿Y cuándo empezás?", "es-AR-TomasNeural"),
    ("d2-line8", "El lunes que viene. Estoy re nerviosa pero contenta.", "es-AR-ElenaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.3 Formal vs Informal...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
