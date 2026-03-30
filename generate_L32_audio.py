"""Generate all audio files for L3.2 Home & Housing using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Rooms
    ("la-cocina", "La cocina"), ("el-bano", "El baño"), ("la-sala", "La sala"),
    ("el-dormitorio", "El dormitorio"), ("el-comedor", "El comedor"),
    ("el-garaje", "El garaje"), ("el-jardin", "El jardín"), ("el-balcon", "El balcón"),
    ("el-pasillo", "El pasillo"), ("la-terraza", "La terraza"),
    # Furniture
    ("la-cama", "La cama"), ("la-mesa", "La mesa"), ("la-silla", "La silla"),
    ("el-sofa", "El sofá"), ("el-estante", "El estante"), ("la-lampara", "La lámpara"),
    ("el-espejo", "El espejo"), ("la-alfombra", "La alfombra"),
    ("el-closet", "El clóset"), ("la-cortina", "La cortina"),
    # Housing
    ("busco-un-departamento", "Busco un departamento"),
    ("cuanto-es-la-renta", "¿Cuánto es la renta?"),
    ("tiene-dos-recamaras", "Tiene dos recámaras"),
    ("esta-amueblado", "Está amueblado"),
    ("la-casa-es-grande", "La casa es grande y luminosa"),
    ("quiero-vivir-cerca", "Quiero vivir cerca del centro"),
    ("los-servicios-incluidos", "Los servicios están incluidos"),
    ("necesito-un-cuarto-mas", "Necesito un cuarto más"),
    ("el-vecindario-es-tranquilo", "El vecindario es tranquilo"),
    ("prefiero-un-piso-alto", "Prefiero un piso alto"),
    # Chores
    ("lavar-los-platos", "Lavar los platos"), ("barrer-el-piso", "Barrer el piso"),
    ("tender-la-cama", "Tender la cama"), ("sacar-la-basura", "Sacar la basura"),
    ("cocinar-la-cena", "Cocinar la cena"), ("limpiar-la-casa", "Limpiar la casa"),
    ("pasar-la-aspiradora", "Pasar la aspiradora"), ("regar-las-plantas", "Regar las plantas"),
]

DIALOGUE_LINES = [
    # D1: Mexico City (Mexican voices)
    ("d1-line1", "Hola, vi el anuncio del departamento. ¿Todavía está disponible?", "es-MX-DaliaNeural"),
    ("d1-line2", "Sí, claro. Es un departamento de dos recámaras con un baño completo.", "es-MX-JorgeNeural"),
    ("d1-line3", "¿Cuánto es la renta mensual?", "es-MX-DaliaNeural"),
    ("d1-line4", "Son doce mil pesos al mes. Los servicios de agua y gas están incluidos.", "es-MX-JorgeNeural"),
    ("d1-line5", "¿Está amueblado?", "es-MX-DaliaNeural"),
    ("d1-line6", "Sí, tiene cama, sofá, mesa con sillas y un estante en la sala.", "es-MX-JorgeNeural"),
    ("d1-line7", "¿Y el vecindario? ¿Es tranquilo?", "es-MX-DaliaNeural"),
    ("d1-line8", "Muy tranquilo. Está cerca del metro y hay un parque al lado.", "es-MX-JorgeNeural"),
    ("d1-line9", "Me interesa mucho. ¿Puedo verlo mañana?", "es-MX-DaliaNeural"),
    # D2: Medellin (Colombian voices)
    ("d2-line1", "¿Cómo es tu casa nueva?", "es-CO-SalomeNeural"),
    ("d2-line2", "Es un apartamento grande con tres habitaciones y dos baños.", "es-CO-GonzaloNeural"),
    ("d2-line3", "¡Qué bien! ¿Tiene balcón?", "es-CO-SalomeNeural"),
    ("d2-line4", "Sí, un balcón con vista a las montañas. Es muy bonito.", "es-CO-GonzaloNeural"),
    ("d2-line5", "¿Y la cocina? ¿Es grande?", "es-CO-SalomeNeural"),
    ("d2-line6", "Sí, la cocina es amplia y luminosa. Tiene mucho espacio para cocinar.", "es-CO-GonzaloNeural"),
    ("d2-line7", "¿Quién limpia? ¿Tú o tu compañero?", "es-CO-SalomeNeural"),
    ("d2-line8", "Nos turnamos. Yo barro y paso la aspiradora. Él lava los platos y cocina.", "es-CO-GonzaloNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.2 Home & Housing...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
