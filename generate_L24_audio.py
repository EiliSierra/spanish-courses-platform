"""Generate all audio files for L2.4 At the Hotel using edge-tts with varied regional voices."""
import asyncio
import edge_tts
import os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L2.4\phrases"

# Regional voices rotation (Colombian, Mexican, Argentine, Spanish, Chilean, Venezuelan)
VOICES_ES = [
    "es-CO-SalomeNeural",    # Colombian female
    "es-MX-DaliaNeural",     # Mexican female
    "es-AR-ElenaNeural",     # Argentine female
    "es-ES-ElviraNeural",    # Spanish female
    "es-CL-CatalinaNeural",  # Chilean female
    "es-CO-GonzaloNeural",   # Colombian male
    "es-MX-JorgeNeural",     # Mexican male
    "es-AR-TomasNeural",     # Argentine male
    "es-ES-AlvaroNeural",    # Spanish male
    "es-VE-SebastianNeural", # Venezuelan male
    "es-VE-PaolaNeural",     # Venezuelan female
    "es-CL-LorenzoNeural",   # Chilean male
]

# Phrase audio files: (filename, spanish_text)
PHRASES = [
    # Hotel Areas
    ("la-habitacion", "La habitación"),
    ("la-recepcion", "La recepción"),
    ("el-lobby", "El lobby"),
    ("la-piscina", "La piscina"),
    ("el-elevador", "El elevador"),
    ("las-escaleras", "Las escaleras"),
    ("el-estacionamiento", "El estacionamiento"),
    ("el-restaurante-del-hotel", "El restaurante del hotel"),
    ("el-gimnasio", "El gimnasio"),
    ("la-terraza", "La terraza"),
    # Room Amenities
    ("la-cama-doble", "La cama doble"),
    ("la-almohada", "La almohada"),
    ("la-toalla", "La toalla"),
    ("el-aire-acondicionado", "El aire acondicionado"),
    ("la-llave-de-la-habitacion", "La llave de la habitación"),
    ("la-caja-fuerte", "La caja fuerte"),
    ("el-wifi", "El wifi"),
    ("la-vista-al-mar", "La vista al mar"),
    ("el-balcon", "El balcón"),
    ("el-minibar", "El minibar"),
    # Check-in & Check-out
    ("la-reservacion", "La reservación"),
    ("registrarse", "Registrarse"),
    ("la-salida", "La salida"),
    ("el-pasaporte", "El pasaporte"),
    ("la-tarjeta-de-credito", "La tarjeta de crédito"),
    ("tres-noches", "Tres noches"),
    ("el-huesped", "El huésped"),
    ("el-equipaje", "El equipaje"),
    ("la-maleta", "La maleta"),
    ("la-propina", "La propina"),
    # Requests & Problems
    ("necesito-mas-toallas", "Necesito más toallas"),
    ("no-funciona", "No funciona"),
    ("puede-ayudarme", "¿Puede ayudarme?"),
    ("hace-mucho-calor", "Hace mucho calor"),
    ("no-hay-agua-caliente", "No hay agua caliente"),
    ("hay-mucho-ruido", "Hay mucho ruido"),
    ("a-que-hora-es-el-desayuno", "¿A qué hora es el desayuno?"),
    ("tienen-servicio-de-lavanderia", "¿Tienen servicio de lavandería?"),
]

# Dialogue lines
DIALOGUE_LINES = [
    # Dialogue 1: Check-in Buenos Aires (Argentine voices)
    ("d1-line1", "Buenas tardes. Bienvenido al Hotel Palermo. ¿Tiene reservación?", "es-AR-ElenaNeural"),
    ("d1-line2", "Sí, tengo una reservación a nombre de López. Tres noches.", "es-AR-TomasNeural"),
    ("d1-line3", "Perfecto. Necesito su pasaporte y una tarjeta de crédito, por favor.", "es-AR-ElenaNeural"),
    ("d1-line4", "Aquí tiene. ¿La habitación tiene wifi?", "es-AR-TomasNeural"),
    ("d1-line5", "Sí, el wifi es gratis. La contraseña está en la llave. Su habitación es la trescientos ocho, en el tercer piso.", "es-AR-ElenaNeural"),
    ("d1-line6", "¿A qué hora es el desayuno?", "es-AR-TomasNeural"),
    ("d1-line7", "De siete a diez de la mañana, en el restaurante del primer piso. El elevador está a la derecha.", "es-AR-ElenaNeural"),
    ("d1-line8", "Muchas gracias. ¿Tienen estacionamiento?", "es-AR-TomasNeural"),
    ("d1-line9", "Sí, el estacionamiento está detrás del hotel. Aquí tiene su llave. ¡Disfrute su estadía!", "es-AR-ElenaNeural"),
    # Dialogue 2: Problem in Cancún (Mexican voices)
    ("d2-line1", "Buenas noches. Tengo un problema con mi habitación.", "es-MX-JorgeNeural"),
    ("d2-line2", "¿Qué pasó? ¿En qué puedo ayudarle?", "es-MX-DaliaNeural"),
    ("d2-line3", "El aire acondicionado no funciona y hace mucho calor.", "es-MX-JorgeNeural"),
    ("d2-line4", "Lo siento mucho. Puedo cambiarle a otra habitación en el mismo piso.", "es-MX-DaliaNeural"),
    ("d2-line5", "¿La otra habitación tiene vista al mar?", "es-MX-JorgeNeural"),
    ("d2-line6", "Sí, la habitación quinientos doce tiene balcón y vista al mar. ¿Le parece bien?", "es-MX-DaliaNeural"),
    ("d2-line7", "¡Perfecto! También necesito dos toallas más, por favor.", "es-MX-JorgeNeural"),
    ("d2-line8", "Claro. Las toallas llegan a su habitación en diez minutos. Aquí está su nueva llave.", "es-MX-DaliaNeural"),
]

async def generate_audio(text: str, voice: str, output_path: str, rate: str = "-10%"):
    """Generate a single audio file."""
    communicate = edge_tts.Communicate(text, voice, rate=rate)
    await communicate.save(output_path)

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    tasks = []

    # Generate phrase audio with rotating voices
    for i, (filename, text) in enumerate(PHRASES):
        voice = VOICES_ES[i % len(VOICES_ES)]
        output_path = os.path.join(OUTPUT_DIR, f"{filename}.mp3")
        if not os.path.exists(output_path):
            tasks.append((text, voice, output_path, "-10%"))
            print(f"  Queue: {filename} ({voice.split('-')[1]})")
        else:
            print(f"  Skip: {filename} (exists)")

    # Generate dialogue audio with specific voices
    for filename, text, voice in DIALOGUE_LINES:
        output_path = os.path.join(OUTPUT_DIR, f"{filename}.mp3")
        if not os.path.exists(output_path):
            tasks.append((text, voice, output_path, "-10%"))
            print(f"  Queue: {filename} ({voice})")
        else:
            print(f"  Skip: {filename} (exists)")

    print(f"\nGenerating {len(tasks)} audio files...")

    # Process in batches of 5 to avoid rate limiting
    for i in range(0, len(tasks), 5):
        batch = tasks[i:i+5]
        await asyncio.gather(*[generate_audio(t, v, o, r) for t, v, o, r in batch])
        print(f"  Batch {i//5 + 1}/{(len(tasks)+4)//5} done")

    print(f"\nDone! {len(tasks)} files generated in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
