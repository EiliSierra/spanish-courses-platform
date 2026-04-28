"""Generate all audio files for L6.5 Translation & Interpretation using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.5\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # False Friends (12)
    ("embarazada-bebe", "Estoy embarazada, voy a tener un bebé"),
    ("problema-actual", "El problema actual es la inflación"),
    ("exito-profesional", "Su éxito profesional fue enorme"),
    ("persona-sensible", "Es una persona muy sensible"),
    ("realizar-proyecto", "Necesito realizar este proyecto"),
    ("libreria-comprar", "Voy a la librería a comprar un libro"),
    ("constipado-congestion", "Estoy constipado, tengo mucha congestión"),
    ("no-me-molestes", "No me molestes, estoy trabajando"),
    ("soportar-calor", "No puedo soportar el calor"),
    ("pretendo-terminar", "Pretendo terminar antes de las cinco"),
    ("carpeta-escritorio", "Dejé la carpeta sobre el escritorio"),
    ("conductor-autobus", "El conductor del autobús es muy amable"),
    # Untranslatable Words (12)
    ("sobremesa-tres-horas", "La sobremesa duró tres horas con café y risas"),
    ("tres-de-la-madrugada", "Salimos a las tres de la madrugada"),
    ("estrenar-zapatos", "Voy a estrenar mis zapatos nuevos"),
    ("aprovechar-oportunidad", "Hay que aprovechar esta oportunidad"),
    ("puedo-tutearte", "¿Puedo tutearte o prefieres que te hable de usted?"),
    ("desvele-estudiando", "Me desvelé estudiando para el examen"),
    ("pastel-empalaga", "Este pastel empalaga, es demasiado dulce"),
    ("consuegra-cenar", "Mi consuegra viene a cenar esta noche"),
    ("anteayer-cine", "Anteayer fuimos al cine juntos"),
    ("tocayo-carlos", "¡Eres mi tocayo! También te llamas Carlos"),
    ("friolento-frio", "Soy muy friolento, siempre tengo frío"),
    ("pena-ajena", "Siento pena ajena cuando alguien canta mal en público"),
    # Context-Dependent Translations (12)
    ("ya-voy", "Ya voy — estoy saliendo ahora mismo"),
    ("ya-no-quiero", "Ya no quiero más, gracias"),
    ("vestido-queda", "Este vestido te queda perfecto"),
    ("quedamos-cafe", "Quedamos en el café a las tres"),
    ("se-puso-rojo", "Se puso rojo de vergüenza"),
    ("pon-la-mesa", "Pon la mesa para la cena"),
    ("echo-de-menos", "Te echo de menos todos los días"),
    ("echale-sal", "Échale más sal a la sopa"),
    ("ventana-da-jardin", "La ventana da al jardín"),
    ("me-da-igual", "Me da igual, tú decides"),
    ("llevo-tres-anos", "Llevo tres años viviendo aquí"),
    ("lleva-ropa-elegante", "Siempre lleva ropa elegante"),
    # Register & Cultural Translation (12)
    ("formal-donde-estacion", "¿Me podría indicar dónde se encuentra la estación?"),
    ("informal-donde-estacion", "¿Sabes dónde queda la estación?"),
    ("formal-disculpe", "Le ruego disculpe las molestias ocasionadas"),
    ("informal-perdona", "Perdona, fue sin querer"),
    ("formal-carta", "Estimado señor, me dirijo a usted para solicitar..."),
    ("informal-favor", "¡Oye, necesito pedirte un favor!"),
    ("formal-lamento", "Lamento comunicarle que su solicitud ha sido denegada"),
    ("informal-lo-siento", "Lo siento, no se pudo, hermano"),
    ("formal-disposicion", "Quedo a su entera disposición para cualquier consulta"),
    ("informal-me-dices", "Cualquier cosa, me dices"),
    ("formal-tan-amable", "Sería tan amable de facilitarme esa información"),
    ("informal-porfa", "¿Me pasas eso? Porfa"),
]

DIALOGUE_LINES = [
    # Dialogue 1: UN Translators — NYC (varied voices)
    ("d1-line1", "Hoy casi cometo un error terrible. Traduje embarrassed como embarazada en un documento oficial.", "es-CO-SalomeNeural"),
    ("d1-line2", "¡Dios mío! Eso habría sido un desastre diplomático. ¿Lo corregiste a tiempo?", "es-MX-JorgeNeural"),
    ("d1-line3", "Sí, por suerte. Pero me hizo pensar en cuántos falsos amigos nos acechan cada día.", "es-CO-SalomeNeural"),
    ("d1-line4", "Totalmente. La semana pasada tuve que traducir sobremesa y no encontraba un equivalente en inglés.", "es-MX-JorgeNeural"),
    ("d1-line5", "Es que no lo hay. Tuve que escribir una nota al pie explicando el concepto cultural.", "es-CO-SalomeNeural"),
    ("d1-line6", "¿Y qué haces cuando el registro formal en español no tiene equivalente en inglés?", "es-MX-JorgeNeural"),
    ("d1-line7", "Adapto el tono. Le ruego tenga a bien no se puede traducir literalmente. Busco la función, no las palabras.", "es-CO-SalomeNeural"),
    ("d1-line8", "Exacto. Traducimos significados, no palabras. Eso es lo que nos enseñaron en la carrera.", "es-MX-JorgeNeural"),
    ("d1-line9", "Y lo más difícil: mantener el humor. Los chistes con doble sentido son prácticamente imposibles.", "es-CO-SalomeNeural"),
    ("d1-line10", "¡Ni me lo digas! Ayer intenté traducir un juego de palabras con éxito y exit. Imposible.", "es-MX-JorgeNeural"),
    ("d1-line11", "Ahí es donde la interpretación se convierte en arte. No estamos traduciendo idiomas, estamos traduciendo culturas.", "es-CO-SalomeNeural"),
    ("d1-line12", "Bien dicho. Por eso amo este trabajo. Cada documento es un rompecabezas cultural.", "es-MX-JorgeNeural"),
    ("d1-line13", "Oye, ¿y la conferencia de mañana? Llevo tres semanas preparando la terminología especializada.", "es-CO-SalomeNeural"),
    ("d1-line14", "Yo también. Es sobre cambio climático. El vocabulario técnico en ese campo evoluciona constantemente.", "es-MX-JorgeNeural"),
    ("d1-line15", "Bueno, a seguir con la preparación. ¡Que no nos agarren los falsos amigos mañana!", "es-CO-SalomeNeural"),
    # Dialogue 2: Learning the Untranslatable — Salamanca (es-ES voices + varied)
    ("d2-line1", "Profesora, estoy frustrada. No entiendo por qué ya puede significar tantas cosas diferentes.", "es-VE-PaolaNeural"),
    ("d2-line2", "Es normal, Sarah. Ya es una de las palabras más difíciles del español. ¿Puedes darme un ejemplo?", "es-ES-ElviraNeural"),
    ("d2-line3", "Ya voy significa I'm coming pero ya no significa not anymore. ¡Es confuso!", "es-VE-PaolaNeural"),
    ("d2-line4", "Piénsalo así: ya marca un cambio de estado. Ya voy, ahora empiezo a ir. Ya no, dejó de ser así.", "es-ES-ElviraNeural"),
    ("d2-line5", "¡Ah! Entonces es como un interruptor. Algo cambia en ese momento.", "es-VE-PaolaNeural"),
    ("d2-line6", "¡Exactamente! Y hablando de palabras difíciles, ¿has experimentado la sobremesa española?", "es-ES-ElviraNeural"),
    ("d2-line7", "Sí, mi familia anfitriona se queda en la mesa una hora después de comer. Al principio me parecía raro.", "es-VE-PaolaNeural"),
    ("d2-line8", "Y ahora, ¿te gusta?", "es-ES-ElviraNeural"),
    ("d2-line9", "¡Me encanta! Pero cuando intento explicarla en inglés, no encuentro las palabras adecuadas.", "es-VE-PaolaNeural"),
    ("d2-line10", "Porque no existen. La sobremesa es intraducible. Y eso es lo bello de aprender otro idioma.", "es-ES-ElviraNeural"),
    ("d2-line11", 'También me cuesta "estrenar." Ayer dije "I first-timed my shoes" y todos se rieron.', "es-VE-PaolaNeural"),
    ("d2-line12", "¡Ja! Es que estrenar no tiene traducción directa. Puedes decir to wear for the first time pero pierdes la emoción.", "es-ES-ElviraNeural"),
    ("d2-line13", "Exacto. Cuando dices estrenar sientes la ilusión. La traducción larga no captura eso.", "es-VE-PaolaNeural"),
    ("d2-line14", "Estás pensando como traductora. El día que dejes de buscar equivalentes palabra por palabra, habrás llegado.", "es-ES-ElviraNeural"),
    ("d2-line15", "Creo que ya estoy empezando a pensar en español. A veces sueño en español también.", "es-VE-PaolaNeural"),
    ("d2-line16", "¡Eso es la señal definitiva! Cuando sueñas en otro idioma, ya no estás traduciendo — estás viviendo en él.", "es-ES-ElviraNeural"),
    ("d2-line17", "Gracias, profesora. Creo que necesito dejar de traducir y empezar a interpretar.", "es-VE-PaolaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.5...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
