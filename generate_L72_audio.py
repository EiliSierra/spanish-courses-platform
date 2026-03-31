"""Generate all audio files for L7.2 Humor, Wordplay & Double Entendre using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Puns & Wordplay (12)
    ("que-le-dijo-el-cero-al-ocho", "¿Qué le dijo el 0 al 8? — Bonito cinturón"),
    ("como-se-dice-panuelo", "¿Cómo se dice pañuelo en japonés? — Saka-moko"),
    ("que-hace-una-abeja", "¿Qué hace una abeja en el gimnasio? — ¡Zumba!"),
    ("el-calambur-juega", "El calambur juega con la división de sílabas: \"oro parece, plata no es\""),
    ("cual-es-el-colmo-electricista", "¿Cuál es el colmo de un electricista? — Que su esposa se llame Luz y sus hijos le hagan corto"),
    ("por-que-el-libro-matematicas", "¿Por qué el libro de matemáticas estaba triste? — Porque tenía muchos problemas"),
    ("un-juego-de-palabras-homofonos", "Un juego de palabras con homófonos: \"llama\" puede ser el animal, el fuego o el verbo llamar"),
    ("que-le-dijo-un-techo", "¿Qué le dijo un techo a otro techo? — Techo de menos"),
    ("vino-puede-ser", "\"Vino\" puede ser el pasado de \"venir\" o la bebida — el contexto decide"),
    ("que-le-dijo-el-semaforo", "¿Qué le dijo el semáforo al carro? — No me mires, me estoy cambiando"),
    ("gato-tiene-cuatro-significados", "\"Gato\" tiene cuatro significados: el animal, el gato hidráulico, el juego y el sirviente"),
    ("el-retruecano-invierte", "El retruécano invierte el orden: \"hay que comer para vivir, no vivir para comer\""),
    # Albur & Double Entendre (12)
    ("el-albur-es-un-duelo", "El albur es un duelo verbal mexicano donde gana quien mantiene el doble sentido"),
    ("en-el-albur-me-prestas", "En el albur, \"¿Me prestas tu taladro?\" puede tener otro significado"),
    ("la-frase-te-gusta-el-arroz", "La frase \"¿Te gusta el arroz?\" es inocente, pero en Tepito tiene doble sentido"),
    ("alburear-requiere-rapidez", "Alburear requiere rapidez mental y conocimiento del doble sentido"),
    ("hay-te-va-puede-significar", "\"Hay te va\" puede significar \"aquí tienes\" o iniciar un duelo de albur"),
    ("el-doble-sentido-funciona", "El doble sentido funciona porque muchas palabras en español tienen acepciones múltiples"),
    ("estoy-bien-parado", "\"Estoy bien parado\" puede significar estar en buena posición o algo más literal"),
    ("en-veracruz-se-dice", "En Veracruz se dice que las \"bombas\" jarochas son primas del albur chilango"),
    ("me-lo-como-es-una-frase", "\"Me lo como\" es una frase inocente sobre comida, pero en contexto de albur cambia todo"),
    ("saber-cuando-algo-tiene", "Saber cuándo algo tiene doble sentido te protege de caer en un albur accidental"),
    ("se-me-paro-el-reloj", "\"Se me paró el reloj\" tiene un sentido literal obvio, pero albureros lo interpretan diferente"),
    ("el-campeon-de-albur", "El campeón de albur es \"El Monstruo de Tepito\", Lourdes Ruiz, la única mujer reconocida"),
    # Sarcasm & Irony Markers (12)
    ("no-me-digas-dicho", "¡No me digas! — dicho con tono exagerado significa \"como si no lo supiera\""),
    ("que-sorpresa-cuando-no-hay", "¡Qué sorpresa! — cuando no hay sorpresa alguna, puro sarcasmo"),
    ("claro-que-si-con-tono", "¡Claro que sí! — con tono irónico significa exactamente lo contrario"),
    ("como-si-fuera-poco-tambien", "Como si fuera poco, también me toca lavar los platos — sarcasmo puro"),
    ("faltaba-mas-puede-ser", "¡Faltaba más! — puede ser genuino (generosidad) o sarcástico (molestia)"),
    ("que-amable-dicho-con-ojos", "¡Qué amable! — dicho con los ojos en blanco significa todo lo contrario"),
    ("si-si-si-seguro-que-si", "Sí, sí, sí... seguro que sí — la repetición marca incredulidad sarcástica"),
    ("ay-pobrecito-con-sarcasmo", "¡Ay, pobrecito! — con sarcasmo implica que exageras tu sufrimiento"),
    ("que-interesante-alargar", "¡Qué interesante! — alargar la \"e\" es la clave del tono irónico"),
    ("mira-quien-habla", "Mira quién habla — lo dice alguien que hace exactamente lo mismo"),
    ("para-nada-dicho-con-sonrisa", "¡Para nada! — dicho con sonrisa forzada es sarcasmo nivel experto"),
    ("genial-justo-lo-que", "¡Genial, justo lo que necesitaba! — el sarcasmo perfecto para un mal día"),
    # Comedic Storytelling (12)
    ("es-que-resulta-que", "Es que... resulta que... y entonces... — el setup perfecto para un chiste mexicano"),
    ("habia-una-vez-un-hombre", "Había una vez un hombre tan tacaño, tan tacaño, que... — la repetición crea expectativa"),
    ("la-exageracion-es-el-alma", "La exageración es el alma del humor: \"Tengo tanta hambre que me comería un elefante\""),
    ("un-doctor-un-abogado", "Un doctor, un abogado y un ingeniero entran a un bar... — el formato clásico de chiste"),
    ("el-humor-autodepreciativo", "El humor autodepreciativo: \"Soy tan malo cocinando que quemé el agua\""),
    ("y-sabes-que-paso-despues", "¿Y sabes qué pasó después? — la pausa dramática antes del remate"),
    ("le-digo-como-que-no", "Le digo: \"¿Cómo que no?\" Y me dice: \"Pues no.\" — el ping-pong cómico"),
    ("esto-me-recuerda-cuando", "Esto me recuerda cuando... — transición para encadenar chistes"),
    ("el-remate-debe-ser", "El remate debe ser inesperado: \"...y resulta que era el mesero\""),
    ("no-espera-que-se-pone", "¡No, espera, que se pone mejor! — alargar la historia aumenta la risa"),
    ("juro-que-esto-es-verdad", "Juro que esto es verdad — decir esto antes del chiste lo hace más gracioso"),
    ("la-regla-de-tres-en-comedia", "La regla de tres en comedia: primero estableces, luego refuerzas, al final sorprendes"),
]

DIALOGUE_LINES = [
    # D1: Backstage at a Comedy Show — Mexico City (Mexican voices)
    ("d1-line1", "¡Güey, estoy nerviosa! Es mi primera vez haciendo stand-up en el Foro Comedy.", "es-MX-DaliaNeural"),
    ("d1-line2", "Tranquila. Tu material es buenísimo. El chiste del semáforo me mató de risa.", "es-MX-JorgeNeural"),
    ("d1-line3", "¿Tú crees? Es que el remate depende mucho de la pausa... si me apuro, se pierde.", "es-MX-DaliaNeural"),
    ("d1-line4", "Exacto. La pausa es todo. Acuérdate: \"Y resulta que...\" — respira — luego sueltas el remate.", "es-MX-JorgeNeural"),
    ("d1-line5", "¿Y el bloque de albures? No sé si el público va a captar los doble sentidos.", "es-MX-DaliaNeural"),
    ("d1-line6", "Estamos en la Ciudad de México, ¡aquí el albur es deporte nacional! Van a captar todo.", "es-MX-JorgeNeural"),
    ("d1-line7", "Jaja, tienes razón. Oye, ¿y si meto algo de sarcasmo? Tipo \"¡Qué sorpresaaa que nadie llega a tiempo!\"", "es-MX-DaliaNeural"),
    ("d1-line8", "¡Eso es oro! El público ama el sarcasmo porque se identifican. Todos hemos dicho \"¡Genial, justo lo que necesitaba!\"", "es-MX-JorgeNeural"),
    ("d1-line9", "Ok, voy a abrir con el autodepreciativo: \"Soy tan mala con los nombres que le digo 'mija' a todo el mundo.\"", "es-MX-DaliaNeural"),
    ("d1-line10", "¡Perfecto! Eso rompe el hielo. Y luego la regla de tres: estableces, refuerzas, sorprendes.", "es-MX-JorgeNeural"),
    ("d1-line11", "Sí: \"Mi novio cocina... a veces... bueno, una vez quemó el agua.\" ¡Tres tiempos!", "es-MX-DaliaNeural"),
    ("d1-line12", "¡Eso! Y para cerrar, el calambur de \"oro parece, plata no es.\" ¡El público va a morir!", "es-MX-JorgeNeural"),
    ("d1-line13", "Me dice el productor que son cinco minutos. ¿Cinco minutos? ¡Como si fuera poco!", "es-MX-DaliaNeural"),
    ("d1-line14", "¡No me digas! Con tu material podrías llenar una hora. Pero bueno, dale — ¡a matar!", "es-MX-JorgeNeural"),
    ("d1-line15", "¡Deséame suerte! O mejor no, que luego dices \"¡faltaba más!\" con ese tono tuyo...", "es-MX-DaliaNeural"),
    # D2: Friends Telling Jokes at a Café — Bogotá (Colombian voices)
    ("d2-line1", "¡Parceros, tengo un chiste buenísimo! ¿Listos? ¿Cómo se dice pañuelo en japonés?", "es-CO-SalomeNeural"),
    ("d2-line2", "No sé, ¿cómo?", "es-CO-GonzaloNeural"),
    ("d2-line3", "¡Saka-moko! ¿Pillaron? ¡Saca moco!", "es-CO-SalomeNeural"),
    ("d2-line4", "Jajaja, ¡qué asco! Bueno, les tengo uno mejor. Un doctor, un abogado y un ingeniero entran a un bar...", "es-CO-GonzaloNeural"),
    ("d2-line5", "¡Ay no, otra vez el formato clásico! ¡Qué sorpresaaa!", "es-CO-SalomeNeural"),
    ("d2-line6", "¡No, espera, que se pone mejor! Resulta que el doctor pide un whisky, el abogado pide un vodka...", "es-CO-GonzaloNeural"),
    ("d2-line7", "¿Y el ingeniero?", "es-CO-SalomeNeural"),
    ("d2-line8", "...y el ingeniero pide la cuenta. Porque los ingenieros siempre calculan todo. ¡Juro que es verdad!", "es-CO-GonzaloNeural"),
    ("d2-line9", "¡Claro que sí! Buenísimo. Oigan, ¿ustedes saben la diferencia entre sarcasmo y humor?", "es-CO-SalomeNeural"),
    ("d2-line10", "¿Cuál es?", "es-CO-SalomeNeural"),
    ("d2-line11", "El humor te hace reír. El sarcasmo te hace reír y luego preguntarte si fue un insulto.", "es-CO-SalomeNeural"),
    ("d2-line12", "¡Eso! Como cuando tu mamá dice \"¡Ay, qué ordenado tu cuarto!\" y está todo tirado. Eso es sarcasmo puro.", "es-CO-GonzaloNeural"),
    ("d2-line13", "Mi favorito es el humor autodepreciativo: \"Soy tan despistada que una vez busqué el celular con la linterna del celular.\"", "es-CO-SalomeNeural"),
    ("d2-line14", "¡Me muero! Esto me recuerda cuando mi abuelo decía: \"El que ríe al último, piensa más lento.\"", "es-CO-SalomeNeural"),
    ("d2-line15", "¡Jajaja! Tu abuelo era un crack. Bueno, ¿pedimos otro tinto y seguimos con los chistes?", "es-CO-GonzaloNeural"),
    ("d2-line16", "¡Faltaba más! Pero el próximo chiste lo cuenta Valentina, que siempre se salva.", "es-CO-SalomeNeural"),
    ("d2-line17", "¡Ay, pobrecita de mí! ¿Ven? Eso fue sarcasmo. Ya estoy aprendiendo.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.2...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
