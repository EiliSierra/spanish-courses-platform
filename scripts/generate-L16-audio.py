"""Generate all audio files for L1.6 Family & Relationships using edge-tts."""
import asyncio
import edge_tts
import os

OUTPUT_PHRASES = "D:/ClaudeEili/Proyectos/SpanishCourses-Next/public/audio/L1.6/phrases"
OUTPUT_DIALOGUES = "D:/ClaudeEili/Proyectos/SpanishCourses-Next/public/audio/L1.6/dialogues"

# Varied voices for phrases (Mexican Spanish primary)
VOICE_MX_F = "es-MX-DaliaNeural"
VOICE_MX_M = "es-MX-JorgeNeural"
VOICE_CO_F = "es-CO-SalomeNeural"
VOICE_CO_M = "es-CO-GonzaloNeural"

# Phrases: audio_key -> (text, voice)
PHRASES = {
    # Immediate Family
    "la-mama": ("La mamá", VOICE_MX_F),
    "el-papa": ("El papá", VOICE_MX_M),
    "el-hermano": ("El hermano", VOICE_MX_M),
    "la-hermana": ("La hermana", VOICE_MX_F),
    "el-hijo": ("El hijo", VOICE_MX_M),
    "la-hija": ("La hija", VOICE_MX_F),
    "el-esposo": ("El esposo", VOICE_MX_M),
    "la-esposa": ("La esposa", VOICE_MX_F),
    "el-bebe": ("El bebé", VOICE_MX_F),
    # Extended Family
    "el-abuelo": ("El abuelo", VOICE_MX_M),
    "la-abuela": ("La abuela", VOICE_MX_F),
    "el-tio": ("El tío", VOICE_MX_M),
    "la-tia": ("La tía", VOICE_MX_F),
    "el-primo": ("El primo", VOICE_MX_M),
    "la-prima": ("La prima", VOICE_MX_F),
    "el-sobrino": ("El sobrino", VOICE_MX_M),
    "la-sobrina": ("La sobrina", VOICE_MX_F),
    "el-nieto": ("El nieto", VOICE_MX_M),
    "la-nieta": ("La nieta", VOICE_MX_F),
    # Describing Family
    "mi-familia": ("Mi familia", VOICE_MX_F),
    "mi-mama-se-llama": ("Mi mamá se llama", VOICE_MX_F),
    "tengo-dos-hermanos": ("Tengo dos hermanos", VOICE_MX_M),
    "soy-hijo-unico": ("Soy hijo único", VOICE_MX_M),
    "vivimos-juntos": ("Vivimos juntos", VOICE_MX_F),
    "mi-hermano-es-mayor": ("Mi hermano es mayor", VOICE_MX_F),
    "mi-hermana-es-menor": ("Mi hermana es menor", VOICE_MX_M),
    # Possessives
    "mi-mis": ("Mi, mis", VOICE_MX_F),
    "tu-tus": ("Tu, tus", VOICE_MX_M),
    "su-sus": ("Su, sus", VOICE_MX_F),
    "nuestro": ("Nuestro, nuestra", VOICE_MX_M),
    "tienes-hermanos": ("¿Tienes hermanos?", VOICE_MX_F),
    "como-se-llama-tu-mama": ("¿Cómo se llama tu mamá?", VOICE_MX_M),
}

# Dialogue 1 - Mexico City (Mexican voices)
DIALOGUE_1 = [
    ("d1-line1", "¡Hola! Bienvenido a mi casa. Te presento a mi familia.", VOICE_MX_F),
    ("d1-line2", "¡Mucho gusto! ¿Es tu mamá?", VOICE_MX_M),
    ("d1-line3", "Sí, mi mamá se llama Carmen. Y este es mi papá, Roberto.", VOICE_MX_F),
    ("d1-line4", "Mucho gusto, señora Carmen, señor Roberto.", VOICE_MX_M),
    ("d1-line5", "Y mis hermanos: Luis tiene veinte años y Sofía tiene quince.", VOICE_MX_F),
    ("d1-line6", "¡Qué familia tan bonita!", VOICE_MX_M),
]

# Dialogue 2 - Bogotá (Colombian voices)
DIALOGUE_2 = [
    ("d2-line1", "¿Tienes hermanos?", VOICE_CO_F),
    ("d2-line2", "Sí, tengo tres hermanos. Dos hermanos y una hermana.", VOICE_CO_M),
    ("d2-line3", "¡Tres! Tu familia es grande. ¿Viven juntos?", VOICE_CO_F),
    ("d2-line4", "Sí, vivimos con mis abuelos también. Somos ocho en la casa.", VOICE_CO_M),
    ("d2-line5", "¡Ocho! En mi familia somos cuatro: mis papás, mi hermana y yo.", VOICE_CO_F),
    ("d2-line6", "¿Cómo se llama tu hermana?", VOICE_CO_M),
    ("d2-line7", "Se llama Valentina. Tiene doce años.", VOICE_CO_F),
]

async def generate(text: str, voice: str, output_path: str):
    """Generate a single audio file."""
    communicate = edge_tts.Communicate(text, voice, rate="-10%")
    await communicate.save(output_path)

async def main():
    print("Generating L1.6 phrase audio files...")
    tasks = []
    for key, (text, voice) in PHRASES.items():
        path = os.path.join(OUTPUT_PHRASES, f"{key}.mp3")
        if not os.path.exists(path):
            tasks.append(generate(text, voice, path))
            print(f"  Queued: {key}")
        else:
            print(f"  Skip (exists): {key}")

    if tasks:
        await asyncio.gather(*tasks)
        print(f"  Generated {len(tasks)} phrase files")

    print("\nGenerating L1.6 dialogue audio files...")
    tasks = []
    for lines in [DIALOGUE_1, DIALOGUE_2]:
        for key, text, voice in lines:
            path = os.path.join(OUTPUT_DIALOGUES, f"{key}.mp3")
            if not os.path.exists(path):
                tasks.append(generate(text, voice, path))
                print(f"  Queued: {key}")
            else:
                print(f"  Skip (exists): {key}")

    if tasks:
        await asyncio.gather(*tasks)
        print(f"  Generated {len(tasks)} dialogue files")

    total = len(os.listdir(OUTPUT_PHRASES)) + len(os.listdir(OUTPUT_DIALOGUES))
    print(f"\nDone! Total L1.6 audio files: {total}")

if __name__ == "__main__":
    asyncio.run(main())
