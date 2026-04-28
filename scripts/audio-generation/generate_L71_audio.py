"""Generate all audio files for L7.1 Dialectology & Sociolinguistics using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Phonetic Variation (12)
    ("en-argentina-sheismo", "En Argentina se pronuncia \"yo\" y \"calle\" con sonido \"sh\": \"sho\" y \"cashe\" — eso es el sheísmo rioplatense"),
    ("el-seseo-consiste", "El seseo consiste en pronunciar la \"z\" y la \"c\" ante e/i como \"s\": \"sapato\" en vez de \"θapato\""),
    ("la-distincion-entre-s-y-z", "La distinción entre \"s\" y \"z\" solo se mantiene en el centro y norte de España"),
    ("en-el-caribe-la-s-final", "En el Caribe, la \"s\" final se aspira o desaparece: \"estos\" suena como \"ehtoh\""),
    ("el-voseo-argentino", "El voseo argentino cambia la conjugación: \"vos tenés\", \"vos podés\", \"vos querés\""),
    ("en-mexico-la-x-puede", "En México, la \"x\" puede sonar como \"j\", \"ks\", o \"sh\" según la palabra: México, examen, Xochimilco"),
    ("en-el-caribe-r-y-l", "En el Caribe se intercambian la \"r\" y la \"l\": \"puerta\" suena como \"puelta\" y \"algo\" como \"argo\""),
    ("en-chile-la-ch", "En Chile, la \"ch\" a veces suena más suave, casi como \"sh\": \"mucho\" se oye como \"musho\""),
    ("el-yeismo-fusiona", "El yeísmo fusiona la \"ll\" y la \"y\" en un solo sonido: \"calle\" y \"caye\" suenan igual"),
    ("en-los-andes-la-ll", "En los Andes, la \"ll\" se distingue de la \"y\": \"calle\" tiene un sonido lateral palatal claro"),
    ("la-j-espanola-peninsular", "La \"j\" española peninsular es más fuerte y gutural que la \"j\" suave latinoamericana"),
    ("en-centroamerica-voseo", "En Centroamérica se usa el voseo con conjugaciones distintas a las argentinas: \"vos tenés\" vs. \"vos tenéis\""),
    # Vocabulary Divergence (12)
    ("el-transporte-publico", "El transporte público se llama \"autobús\" en España, \"camión\" en México, \"colectivo\" en Argentina y \"guagua\" en Cuba"),
    ("una-vivienda-es", "Una vivienda es un \"apartamento\" en Colombia, un \"departamento\" en México, y un \"piso\" en España"),
    ("en-espana-ordenador", "En España se dice \"ordenador\", en México \"computadora\" y en Colombia \"computador\""),
    ("el-vehiculo-coche-carro", "El vehículo es un \"coche\" en España, un \"carro\" en el Caribe y Centroamérica, y un \"auto\" en Argentina y Chile"),
    ("los-ninos-chicos-chamacos", "Los niños son \"chicos\" en Argentina, \"chamacos\" en México, \"chamos\" en Venezuela y \"pibes\" en el Río de la Plata"),
    ("el-movil-celular", "El \"móvil\" español es un \"celular\" en casi toda Latinoamérica"),
    ("el-zumo-jugo-patatas-papas", "El \"zumo\" de España es \"jugo\" en Latinoamérica; las \"patatas\" son \"papas\""),
    ("plata-lana-pasta-dinero", "\"Plata\" significa dinero en Argentina, pero en México se dice \"lana\" y en España \"pasta\""),
    ("el-boligrafo-pluma-lapicero", "El \"bolígrafo\" español es una \"pluma\" en México, un \"lapicero\" en Perú y una \"birome\" en Argentina"),
    ("enojado-enfadado-arrecho", "\"Enojado\" se usa en México, \"enfadado\" en España, \"arrecho\" en Venezuela y \"caliente\" en Colombia"),
    ("pollera-falda-enagua", "Una \"pollera\" argentina es una \"falda\" en España y una \"enagua\" en Costa Rica"),
    ("manejar-conducir", "\"Manejar\" es conducir en México, pero en España se dice \"conducir\" y en Argentina \"manejar\" o \"conducir\""),
    # Sociolects & Registers (12)
    ("el-lunfardo-porteno", "El lunfardo porteño nació en los conventillos de Buenos Aires: \"laburo\" (trabajo), \"mina\" (mujer), \"afanar\" (robar)"),
    ("el-calo-mexicano", "El caló mexicano incluye expresiones como \"neta\" (verdad), \"chido\" (genial), \"chamba\" (trabajo)"),
    ("el-parlache-medellin", "El parlache de Medellín usa \"parce\" (amigo), \"bacano\" (genial), \"gonorrea\" (insulto/halago según el tono)"),
    ("la-jerga-juvenil-espanola", "La jerga juvenil española incluye \"molar\" (gustar), \"flipar\" (sorprenderse), \"quedada\" (encuentro)"),
    ("la-clase-social-influye", "La clase social influye en el habla: el registro formal (\"¿Podría usted...?\") versus el coloquial (\"¿Me hacés un favor?\")"),
    ("en-colombia-habla-paisa", "En Colombia, el habla paisa (de Antioquia) es muy distinta del habla costeña: entonación, velocidad y vocabulario cambian"),
    ("el-vesre-argentino", "El vesre argentino invierte las sílabas: \"feca\" por café, \"garpa\" por pagar, \"jermu\" por mujer"),
    ("en-chile-flaite", "En Chile, el \"flaite\" es un sociolecto asociado con barrios populares: \"cachai\" (¿entiendes?), \"wea\" (cosa)"),
    ("el-habla-formal-mexicana", "El habla formal mexicana es reconocida por su cortesía: \"Disculpe, ¿sería tan amable de...?\""),
    ("el-coa-chileno", "El coa chileno es la jerga carcelaria: \"cana\" (cárcel), \"paco\" (policía), \"gil\" (tonto)"),
    ("en-espana-habla-andaluza", "En España, el habla andaluza aspira consonantes finales y suena muy distinta del castellano del norte"),
    ("el-habla-clases-altas-lima", "El habla de las clases altas limeñas se distingue por una pronunciación más cuidada y uso de \"usted\" frecuente"),
    # Code-Switching (12)
    ("el-spanglish-mezcla", "El spanglish mezcla inglés y español fluidamente: \"Voy a parkear el carro y te llamo pa'back\""),
    ("los-bilingues-cambian", "Los bilingües cambian de idioma según el tema: hablan de trabajo en inglés y de familia en español"),
    ("hablar-mocho-se-dice", "\"Hablar mocho\" se dice cuando alguien mezcla mal los dos idiomas, ni inglés ni español completo"),
    ("el-espanol-chicano", "El español chicano incluye préstamos como \"lonche\" (lunch), \"troca\" (truck), \"yarda\" (yard)"),
    ("el-nuyorican-mezcla", "El nuyorican mezcla el español puertorriqueño con inglés neoyorquino: \"Oye bro, vamos pal party esta noche\""),
    ("la-identidad-linguistica", "La identidad lingüística es política: elegir hablar español en EE.UU. es un acto de resistencia cultural"),
    ("el-code-switching-no-es", "El code-switching no es un defecto: es una habilidad cognitiva avanzada de los hablantes bilingües"),
    ("en-miami-se-escucha", "En Miami se escucha \"Ay, I forgot decirte que el meeting es at three en el conference room\""),
    ("los-jovenes-latinos", "Los jóvenes latinos en EE.UU. crean nuevas palabras: \"textear\" (text), \"likear\" (like), \"googlear\" (google)"),
    ("gloria-anzaldua-escribio", "Gloria Anzaldúa escribió que \"el español chicano es una lengua fronteriza, ni de aquí ni de allá\""),
    ("el-cambio-de-codigo", "El cambio de código puede ser interoracional (entre oraciones) o intraoracional (dentro de una misma oración)"),
    ("en-la-frontera-border-talk", "En la frontera México-EE.UU., el español y el inglés conviven en un continuo lingüístico llamado \"border talk\""),
]

DIALOGUE_LINES = [
    # D1: Linguistics Class — UNAM, Mexico City (Mexican voices)
    ("d1-line1", "Hoy vamos a analizar las variedades dialectales del español. ¿Quién puede dar un ejemplo de variación fonética?", "es-MX-DaliaNeural"),
    ("d1-line2", "En Argentina dicen \"sho\" en vez de \"yo.\" Mi compañero porteño dice \"sho me shamo Andrés\" y suena completamente distinto.", "es-MX-JorgeNeural"),
    ("d1-line3", "Excelente. Eso es el sheísmo rioplatense. La \"y\" y la \"ll\" se pronuncian como \"sh.\" ¿Y qué pasa en el Caribe?", "es-MX-DaliaNeural"),
    ("d1-line4", "La \"s\" final se aspira. Mi abuela cubana dice \"ehtoh\" en vez de \"estos\" y \"puelta\" en vez de \"puerta.\"", "es-MX-DaliaNeural"),
    ("d1-line5", "Muy bien. Y el intercambio de /r/ y /l/ es sistemático, no aleatorio. Son reglas fonológicas consistentes.", "es-MX-DaliaNeural"),
    ("d1-line6", "¿Y qué opinan del spanglish? ¿Es una variedad legítima o una corrupción del español?", "es-MX-JorgeNeural"),
    ("d1-line7", "Pregunta provocadora. La lingüística moderna demuestra que el cambio de código sigue reglas gramaticales complejas. No es una mezcla caótica.", "es-MX-DaliaNeural"),
    ("d1-line8", "Mi prima en Miami dice \"Voy a parkear el carro y te llamo pa'back.\" ¿Eso tiene reglas?", "es-MX-DaliaNeural"),
    ("d1-line9", "Absolutamente. \"Parkear\" sigue la morfología verbal española perfectamente: raíz inglesa + sufijo -ear. Es creatividad lingüística, no error.", "es-MX-DaliaNeural"),
    ("d1-line10", "¿Y el vocabulario? Es increíble que un autobús sea \"camión\" aquí en México, \"colectivo\" en Argentina y \"guagua\" en Cuba.", "es-MX-JorgeNeural"),
    ("d1-line11", "La divergencia léxica es una de las características más visibles de la variación dialectal. Son los mismos objetos, pero cada comunidad creó sus propios términos.", "es-MX-DaliaNeural"),
    ("d1-line12", "Profesora, ¿existe un español \"correcto\" o \"estándar\"?", "es-MX-DaliaNeural"),
    ("d1-line13", "No existe un español superior a otro. Cada variedad tiene su propia lógica interna, su propia gramática y su propia belleza. La diversidad lingüística es riqueza, no problema.", "es-MX-DaliaNeural"),
    ("d1-line14", "¡Me encanta esa perspectiva! Entonces el español no es uno, sino muchos.", "es-MX-JorgeNeural"),
    ("d1-line15", "Exacto. Quinientos ochenta millones de hablantes, cada uno con su propia voz. Esa es la verdadera riqueza del español.", "es-MX-DaliaNeural"),
    # D2: Friends from Different Countries — Miami Coffee Shop (varied voices)
    ("d2-line1", "¡Che, qué bueno que nos juntamos! Hace banda que no nos vemos. ¿Cómo andás, parce?", "es-AR-ElenaNeural"),
    ("d2-line2", "¡Uy, parcera! Todo bien, todo bacano. ¡Qué nota verte! ¿Y vos qué hacés por acá en Miami?", "es-CO-GonzaloNeural"),
    ("d2-line3", "¡Órale, qué onda, compas! Yo acabo de llegar. ¿Ya pidieron algo o qué?", "es-MX-DaliaNeural"),
    ("d2-line4", "Todavía no. ¿Vos querés un café con leche? Acá hacen uno re grosso.", "es-AR-ElenaNeural"),
    ("d2-line5", "¿\"Re grosso\"? Jajaja. ¿Eso qué es, parcera? ¿Bueno o malo?", "es-CO-GonzaloNeural"),
    ("d2-line6", "¡Buenísimo! \"Re\" es \"muy\" en argentino. \"Re grosso\" es algo increíble, genial.", "es-AR-ElenaNeural"),
    ("d2-line7", "Jaja, en México diríamos \"está bien chido.\" Oigan, ¿y cómo piden el camión acá?", "es-MX-DaliaNeural"),
    ("d2-line8", "¿Camión? Eso es un truck, Sofía. Acá se dice \"bus\" o... wait, ¿tú dices camión al autobús?", "es-CO-GonzaloNeural"),
    ("d2-line9", "¡Claro! En México el camión es el bus. Y ustedes, ¿cómo le dicen en Colombia?", "es-MX-DaliaNeural"),
    ("d2-line10", "Bus o buseta, depende del tamaño. Y en Argentina, ¿cómo es, Cami?", "es-CO-GonzaloNeural"),
    ("d2-line11", "¡Colectivo! O \"bondi\" en lunfardo. Es gracioso, hablamos el mismo idioma pero con palabras distintas.", "es-AR-ElenaNeural"),
    ("d2-line12", "Y estando acá en Miami, ya todos terminamos hablando mitad español, mitad inglés. \"Voy a parkear y nos vemos at the coffee shop.\"", "es-MX-DaliaNeural"),
    ("d2-line13", "¡Eso es spanglish puro! Mi mamá me regaña: \"¡Hablá bien, mijo!\" Pero es que uno se acostumbra.", "es-CO-GonzaloNeural"),
    ("d2-line14", "A mí me pasa igual. Pero ¿sabés qué? Me encanta. Cada uno trae su español y acá se mezcla todo. Es hermoso.", "es-AR-ElenaNeural"),
    ("d2-line15", "¡Simón! Tres países, tres acentos, un mismo corazón. Eso es lo bonito del español.", "es-MX-DaliaNeural"),
    ("d2-line16", "¡Qué chimba! Brindemos por la diversidad del español. ¡Salud, compadres!", "es-CO-GonzaloNeural"),
    ("d2-line17", "¡Salud! Y que cada quien hable como quiera. Todas las voces cuentan.", "es-AR-ElenaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.1...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
