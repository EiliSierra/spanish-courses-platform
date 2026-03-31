"""Generate all audio files for L1.7 Food & Drinks using edge-tts."""
import asyncio
import edge_tts
import os

OUTPUT_PHRASES = "D:/ClaudeEili/Proyectos/SpanishCourses-Next/public/audio/L1.7/phrases"
OUTPUT_DIALOGUES = "D:/ClaudeEili/Proyectos/SpanishCourses-Next/public/audio/L1.7/dialogues"

VOICE_MX_F = "es-MX-DaliaNeural"
VOICE_MX_M = "es-MX-JorgeNeural"
VOICE_AR_F = "es-AR-ElenaNeural"
VOICE_AR_M = "es-AR-TomasNeural"

PHRASES = {
    # Restaurant Basics
    "el-menu": ("El menú", VOICE_MX_M),
    "el-mesero": ("El mesero", VOICE_MX_M),
    "mesa-para-dos": ("Una mesa para dos", VOICE_MX_F),
    "tengo-reservacion": ("Tengo una reservación", VOICE_MX_F),
    "plato-del-dia": ("El plato del día", VOICE_MX_M),
    "que-recomienda": ("¿Qué recomienda?", VOICE_MX_F),
    "incluida-propina": ("¿Está incluida la propina?", VOICE_MX_F),
    # Proteins & Dishes
    "el-pollo": ("El pollo", VOICE_MX_M),
    "la-carne": ("La carne", VOICE_MX_F),
    "el-pescado": ("El pescado", VOICE_MX_M),
    "el-cerdo": ("El cerdo", VOICE_MX_M),
    "los-camarones": ("Los camarones", VOICE_MX_F),
    "el-arroz": ("El arroz", VOICE_MX_M),
    "los-frijoles": ("Los frijoles", VOICE_MX_F),
    "las-papas": ("Las papas", VOICE_MX_F),
    "la-entrada": ("La entrada", VOICE_MX_F),
    "el-plato-fuerte": ("El plato fuerte", VOICE_MX_M),
    "el-postre": ("El postre", VOICE_MX_M),
    # Describing Food
    "picante": ("Picante", VOICE_MX_F),
    "dulce": ("Dulce", VOICE_MX_F),
    "salado": ("Salado", VOICE_MX_M),
    "caliente": ("Caliente", VOICE_MX_F),
    "frio": ("Frío", VOICE_MX_M),
    "fresco": ("Fresco", VOICE_MX_M),
    "rico": ("Rico", VOICE_MX_F),
    "asado": ("Asado", VOICE_MX_M),
    # Dietary
    "soy-vegetariano": ("Soy vegetariano", VOICE_MX_M),
    "soy-alergico": ("Soy alérgico al maní", VOICE_MX_M),
    "sin-gluten": ("Sin gluten", VOICE_MX_F),
    "opciones-vegetarianas": ("¿Tiene opciones vegetarianas?", VOICE_MX_F),
    "para-empezar": ("Para empezar, quiero", VOICE_MX_F),
    "de-plato-fuerte": ("De plato fuerte, quiero", VOICE_MX_M),
}

# Dialogue 1 - Oaxaca, Mexico (Mexican voices)
DIALOGUE_1 = [
    ("d1-line1", "Buenas tardes. ¿Mesa para cuántos?", VOICE_MX_M),
    ("d1-line2", "Para dos, por favor. Tengo una reservación a nombre de García.", VOICE_MX_F),
    ("d1-line3", "Perfecto. Aquí tienen el menú. El plato del día es mole negro con pollo.", VOICE_MX_M),
    ("d1-line4", "¿El mole es muy picante?", VOICE_MX_F),
    ("d1-line5", "Un poco picante, pero muy rico. ¿Tiene alguna alergia?", VOICE_MX_M),
    ("d1-line6", "No. Para empezar, quiero la sopa de tortilla. De plato fuerte, el mole negro.", VOICE_MX_F),
    ("d1-line7", "¡Excelente elección! ¿Y de postre?", VOICE_MX_M),
    ("d1-line8", "De postre, flan, por favor.", VOICE_MX_F),
]

# Dialogue 2 - Buenos Aires (Argentine voices)
DIALOGUE_2 = [
    ("d2-line1", "Bienvenidos. ¿Qué van a pedir?", VOICE_AR_M),
    ("d2-line2", "¿Qué recomienda? Es mi primera vez aquí.", VOICE_AR_F),
    ("d2-line3", "El asado es espectacular. También las empanadas de carne.", VOICE_AR_M),
    ("d2-line4", "Soy vegetariano. ¿Tiene opciones vegetarianas?", VOICE_AR_F),
    ("d2-line5", "Sí, tenemos una provoleta y ensalada caprese. También papas a la crema.", VOICE_AR_M),
    ("d2-line6", "Perfecto. Quiero la provoleta y la ensalada, por favor.", VOICE_AR_F),
    ("d2-line7", "¿Y para tomar?", VOICE_AR_M),
    ("d2-line8", "Un agua mineral, por favor. ¿Está incluida la propina?", VOICE_AR_F),
    ("d2-line9", "No, la propina no está incluida. Diez por ciento es lo común.", VOICE_AR_M),
]

async def generate(text, voice, path):
    c = edge_tts.Communicate(text, voice, rate="-10%")
    await c.save(path)

async def main():
    os.makedirs(OUTPUT_PHRASES, exist_ok=True)
    os.makedirs(OUTPUT_DIALOGUES, exist_ok=True)

    print("Generating L1.7 phrase audio files...")
    tasks = []
    for key, (text, voice) in PHRASES.items():
        path = os.path.join(OUTPUT_PHRASES, f"{key}.mp3")
        if not os.path.exists(path):
            tasks.append(generate(text, voice, path))
            print(f"  Queued: {key}")
        else:
            print(f"  Skip: {key}")
    if tasks:
        await asyncio.gather(*tasks)
        print(f"  Generated {len(tasks)} phrase files")

    print("\nGenerating L1.7 dialogue audio files...")
    tasks = []
    for lines in [DIALOGUE_1, DIALOGUE_2]:
        for key, text, voice in lines:
            path = os.path.join(OUTPUT_DIALOGUES, f"{key}.mp3")
            if not os.path.exists(path):
                tasks.append(generate(text, voice, path))
                print(f"  Queued: {key}")
            else:
                print(f"  Skip: {key}")
    if tasks:
        await asyncio.gather(*tasks)
        print(f"  Generated {len(tasks)} dialogue files")

    total = len(os.listdir(OUTPUT_PHRASES)) + len(os.listdir(OUTPUT_DIALOGUES))
    print(f"\nDone! Total L1.7 audio files: {total}")

if __name__ == "__main__":
    asyncio.run(main())
