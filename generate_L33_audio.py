"""Generate all audio files for L3.3 Technology & Social Media using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.3\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Devices
    ("el-telefono-celular", "El teléfono celular"),
    ("la-computadora-portatil", "La computadora portátil"),
    ("la-tableta", "La tableta"),
    ("los-audifonos", "Los audífonos"),
    ("la-pantalla", "La pantalla"),
    ("el-cargador", "El cargador"),
    ("la-bateria-esta-baja", "La batería está baja"),
    ("la-camara-del-telefono", "La cámara del teléfono"),
    ("el-teclado", "El teclado"),
    ("el-raton-inalambrico", "El ratón inalámbrico"),
    # Social Media
    ("las-redes-sociales", "Las redes sociales"),
    ("publicar-una-foto", "Publicar una foto"),
    ("dar-un-like", "Dar un like"),
    ("compartir-un-video", "Compartir un video"),
    ("seguir-a-alguien", "Seguir a alguien"),
    ("los-seguidores", "Los seguidores"),
    ("un-mensaje-directo", "Un mensaje directo"),
    ("hacer-una-historia", "Hacer una historia"),
    ("etiquetar-a-un-amigo", "Etiquetar a un amigo"),
    ("dejar-un-comentario", "Dejar un comentario"),
    # Actions
    ("descargar-una-aplicacion", "Descargar una aplicación"),
    ("conectarse-al-wifi", "Conectarse al wifi"),
    ("buscar-en-internet", "Buscar en internet"),
    ("enviar-un-correo-electronico", "Enviar un correo electrónico"),
    ("tomar-una-captura-de-pantalla", "Tomar una captura de pantalla"),
    ("actualizar-la-aplicacion", "Actualizar la aplicación"),
    ("iniciar-sesion", "Iniciar sesión"),
    ("cerrar-sesion", "Cerrar sesión"),
    ("cambiar-la-contrasena", "Cambiar la contraseña"),
    ("guardar-el-archivo", "Guardar el archivo"),
    # Problems
    ("no-tengo-senal", "No tengo señal"),
    ("el-internet-esta-lento", "El internet está lento"),
    ("se-me-olvido-la-contrasena", "Se me olvidó la contraseña"),
    ("mi-telefono-se-congelo", "Mi teléfono se congeló"),
    ("no-puedo-abrir-la-aplicacion", "No puedo abrir la aplicación"),
    ("necesito-reiniciar-el-telefono", "Necesito reiniciar el teléfono"),
    ("no-hay-suficiente-memoria", "No hay suficiente memoria"),
    ("la-aplicacion-se-cerro-sola", "La aplicación se cerró sola"),
]

DIALOGUE_LINES = [
    # D1: Mexico City (Mexican voices)
    ("d1-line1", "¡Mira! Me compré un teléfono nuevo.", "es-MX-DaliaNeural"),
    ("d1-line2", "¡Qué bonito! ¿Ya descargaste todas tus aplicaciones?", "es-MX-JorgeNeural"),
    ("d1-line3", "Solo algunas. Necesito conectarme al wifi primero.", "es-MX-DaliaNeural"),
    ("d1-line4", "La contraseña del wifi está en la cocina, en un papelito.", "es-MX-JorgeNeural"),
    ("d1-line5", "¡Gracias! Ahora voy a iniciar sesión en mis redes sociales.", "es-MX-DaliaNeural"),
    ("d1-line6", "¿Usas todas las redes? Yo solo uso dos.", "es-MX-JorgeNeural"),
    ("d1-line7", "Yo uso como cinco. ¡Y ya publiqué una foto del teléfono nuevo!", "es-MX-DaliaNeural"),
    ("d1-line8", "Jaja, típico. ¿Ya te dieron likes?", "es-MX-JorgeNeural"),
    ("d1-line9", "¡Quince en cinco minutos! Y mi mamá dejó un comentario.", "es-MX-DaliaNeural"),
    # D2: Buenos Aires (Argentine voices)
    ("d2-line1", "¿Me podés ayudar? Mi computadora no funciona.", "es-AR-TomasNeural"),
    ("d2-line2", "¿Qué le pasa? ¿Se congeló?", "es-AR-ElenaNeural"),
    ("d2-line3", "No, el internet está muy lento y no puedo enviar un correo.", "es-AR-TomasNeural"),
    ("d2-line4", "¿Probaste reiniciar el router?", "es-AR-ElenaNeural"),
    ("d2-line5", "Sí, pero sigue lento. Y ahora dice que no tengo señal.", "es-AR-TomasNeural"),
    ("d2-line6", "Esperá, voy a revisar la conexión. ¿Cuál es la contraseña del wifi?", "es-AR-ElenaNeural"),
    ("d2-line7", "No me acuerdo... se me olvidó. Creo que está guardada en mi teléfono.", "es-AR-TomasNeural"),
    ("d2-line8", "¡Listo! Ya te conecté. El problema era la contraseña vieja.", "es-AR-ElenaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.3 Technology & Social Media...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
