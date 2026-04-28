"""Generate all audio files for L6.7 History of the Spanish Language using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Latin Origins (12)
    ("la-palabra-agua-viene", 'La palabra "agua" viene del latín "aqua"'),
    ("el-latin-vulgar-evoluciono", "El latín vulgar evolucionó de manera distinta en cada región"),
    ("hijo-proviene-del-latin", '"Hijo" proviene del latín "filius"; la f se convirtió en h'),
    ("las-lenguas-romances", "Las lenguas romances son hijas del latín"),
    ("noche-deriva-de-noctem", '"Noche" deriva de "noctem" con la típica palatalización castellana'),
    ("el-castellano-conserva", "El castellano conserva la distinción entre ser y estar del latín"),
    ("plaza-viene-de-platea", '"Plaza" viene de "platea" y "lluvia" de "pluvia"'),
    ("los-verbos-en-ar-er-ir", "Los verbos en -ar, -er, -ir reflejan las conjugaciones latinas"),
    ("pueblo-desciende-de-populus", '"Pueblo" desciende de "populus" mediante evolución fonética regular'),
    ("el-genero-gramatical", "El género gramatical español hereda el sistema de tres géneros del latín"),
    ("ojo-viene-de-oculus", '"Ojo" viene de "oculus" y "oreja" de "auricula"'),
    ("el-subjuntivo-espanol", "El subjuntivo español preserva modos verbales del latín clásico"),
    # Arabic Influence (12)
    ("almohada-viene-del-arabe", '"Almohada" viene del árabe "al-mujadda" (el cojín)'),
    ("alfombra-proviene-de", '"Alfombra" proviene de "al-hanbariyya" (la tapicería)'),
    ("ojala-proviene-del-arabe", '"Ojalá" proviene del árabe "inshallah" (si Dios quiere)'),
    ("alcalde-viene-de-al-qadi", '"Alcalde" viene de "al-qadi" (el juez)'),
    ("algebra-proviene-del-arabe", '"Álgebra" proviene del árabe "al-jabr" (la restauración)'),
    ("azucar-viene-de-as-sukkar", '"Azúcar" viene de "as-sukkar" a través del árabe'),
    ("el-prefijo-al-es", 'El prefijo "al-" es el artículo definido en árabe'),
    ("mas-de-4000-palabras", "Más de 4.000 palabras españolas tienen origen árabe"),
    ("aceite-proviene-de-az-zayt", '"Aceite" proviene de "az-zayt" y "aceituna" de "az-zaytuna"'),
    ("guadalquivir-significa", '"Guadalquivir" significa "el río grande" en árabe'),
    ("alhambra-quiere-decir", '"Alhambra" quiere decir "la roja" en árabe'),
    ("la-influencia-arabe-se-extiende", "La influencia árabe se extiende a la arquitectura, la música y la gastronomía"),
    # Medieval Spanish (12)
    ("en-espanol-medieval-fablar", 'En español medieval se decía "fablar" en vez de "hablar"'),
    ("fazer-se-transformo", '"Fazer" se transformó en "hacer" con la aspiración de la f'),
    ("el-cantar-de-mio-cid", "El Cantar de Mio Cid es la primera obra importante en castellano"),
    ("cervantes-escribio-el-quijote", 'Cervantes escribió "El Quijote" en el español del Siglo de Oro'),
    ("la-cedilla-existia", 'La "ç" cedilla existía en español antiguo y luego desapareció'),
    ("la-pronunciacion-de-la-j", 'La pronunciación de la "j" cambió de un sonido palatal a velar'),
    ("alfonso-x-el-sabio", "Alfonso X el Sabio estandarizó el castellano como lengua de cultura"),
    ("agora-se-convirtio", '"Agora" se convirtió en "ahora" en español moderno'),
    ("vos-era-el-pronombre", '"Vos" era el pronombre de respeto en español medieval'),
    ("la-x-en-espanol-antiguo", 'La "x" en español antiguo representaba el sonido "sh"'),
    ("mexico-conserva-la-ortografia", '"México" conserva la ortografía antigua con "x" que se pronuncia como "j"'),
    ("el-espanol-medieval-tenia", "El español medieval tenía sonidos sibilantes que luego se simplificaron"),
    # Modern Evolution (12)
    ("la-real-academia-espanola", "La Real Academia Española se fundó en 1713 para fijar la lengua"),
    ("el-lema-de-la-rae", 'El lema de la RAE es "Limpia, fija y da esplendor"'),
    ("las-reformas-ortograficas", "Las reformas ortográficas simplificaron la escritura del español"),
    ("america-latina-desarrollo", "América Latina desarrolló sus propias variantes a partir de la Colonia"),
    ("el-voseo-tiene-raices", "El voseo tiene raíces en el castellano del siglo XVI"),
    ("las-lenguas-indigenas", "Las lenguas indígenas aportaron miles de palabras al español americano"),
    ("chocolate-tomate-aguacate", '"Chocolate", "tomate" y "aguacate" vienen del náhuatl'),
    ("el-espanol-es-la-segunda", "El español es la segunda lengua materna más hablada del mundo"),
    ("el-spanglish-refleja", 'El "spanglish" refleja el contacto entre inglés y español en EE.UU.'),
    ("la-rae-ahora-acepta", 'La RAE ahora acepta neologismos como "tuitear" y "wasapear"'),
    ("el-lenguaje-inclusivo", 'El lenguaje inclusivo con la "e" genera un intenso debate lingüístico'),
    ("hoy-580-millones", "Hoy 580 millones de personas hablan español en el mundo"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Linguistics Lecture — Madrid (es-ES voices)
    ("d1-line1", "Buenos días. Hoy exploraremos cómo el latín vulgar se transformó en castellano. ¿Alguien sabe qué significa vulgar en este contexto?", "es-ES-AlvaroNeural"),
    ("d1-line2", "¿Se refiere al latín hablado por el pueblo, no al latín clásico de los escritores?", "es-ES-ElviraNeural"),
    ("d1-line3", 'Exacto. "Vulgar" viene de "vulgus" — el pueblo. Era el latín cotidiano de soldados, comerciantes y colonos.', "es-ES-AlvaroNeural"),
    ("d1-line4", "Entonces, ¿por qué el español suena tan diferente del italiano o el francés si todos vienen del latín?", "es-ES-AlvaroNeural"),
    ("d1-line5", "Gran pregunta. Cada región evolucionó de forma aislada. El castellano tuvo una influencia única: ochocientos años de contacto con el árabe.", "es-ES-AlvaroNeural"),
    ("d1-line6", "¿Y eso explica todas las palabras con al? Almohada, alfombra, alcalde...", "es-ES-ElviraNeural"),
    ("d1-line7", "Exactamente. El al es el artículo definido en árabe. Más de cuatro mil palabras españolas tienen origen árabe.", "es-ES-AlvaroNeural"),
    ("d1-line8", "Es fascinante. ¿Y qué pasó con el sonido de la f que se convirtió en h?", "es-ES-AlvaroNeural"),
    ("d1-line9", 'Ah, el cambio f a h es la firma del castellano. "Filius" se convirtió en "hijo", "facere" en "hacer". Ninguna otra lengua romance hizo este cambio.', "es-ES-AlvaroNeural"),
    ("d1-line10", '¿Es verdad que "México" conserva la ortografía antigua? ¿Que la x antes sonaba como sh?', "es-ES-ElviraNeural"),
    ("d1-line11", 'Sí. En el español del siglo XVI, "México" se pronunciaba "Meshico." Cuando el sonido cambió a j, la ortografía de algunos nombres se mantuvo como símbolo cultural.', "es-ES-AlvaroNeural"),
    ("d1-line12", "¿Y el español seguirá cambiando? ¿Cómo será en cien años?", "es-ES-AlvaroNeural"),
    ("d1-line13", "Sin duda. La lengua es un organismo vivo. Ya incorporamos tuitear, wasapear... y el debate sobre el lenguaje inclusivo muestra que la evolución continúa.", "es-ES-AlvaroNeural"),
    ("d1-line14", "¿La RAE decide qué cambios son válidos?", "es-ES-ElviraNeural"),
    ("d1-line15", 'La RAE registra el uso, no lo controla. La lengua la hacen los hablantes. La academia solo "limpia, fija y da esplendor."', "es-ES-AlvaroNeural"),
    ("d1-line16", "¡Qué viaje tan increíble del latín hasta el tuitear! La historia de nuestra lengua es fascinante.", "es-ES-AlvaroNeural"),
    # Dialogue 2: Tour of the Alhambra — Granada (es-ES voices)
    ("d2-line1", "Bienvenidos a la Alhambra, que en árabe significa la roja. Aquí empieza nuestro viaje por la herencia lingüística árabe en español.", "es-ES-ElviraNeural"),
    ("d2-line2", "Es impresionante. ¿Por qué hay tanta influencia árabe en el español?", "es-ES-AlvaroNeural"),
    ("d2-line3", "Los árabes gobernaron partes de la península ibérica desde el año 711 hasta 1492. Fueron ochocientos años de convivencia cultural.", "es-ES-ElviraNeural"),
    ("d2-line4", "¿Solo dejaron palabras con al? ¿O la influencia fue más profunda?", "es-ES-AlvaroNeural"),
    ("d2-line5", 'Va mucho más allá. Los árabes trajeron avances en ciencia, medicina, agricultura y filosofía. "Álgebra", "algoritmo", "cifra" — todo viene del árabe.', "es-ES-ElviraNeural"),
    ("d2-line6", '¿Y la palabra "ojalá"? Siempre me ha parecido especial.', "es-ES-AlvaroNeural"),
    ("d2-line7", '"Ojalá" proviene de "inshallah" — "si Dios quiere." Es quizás la herencia más bella del árabe en español. Se usa con subjuntivo: "ojalá que llueva."', "es-ES-ElviraNeural"),
    ("d2-line8", '¿Y los nombres de lugares? ¿"Guadalquivir" también es árabe?', "es-ES-AlvaroNeural"),
    ("d2-line9", 'Sí. "Guadalquivir" significa "el río grande." Y muchos nombres con Guad vienen del árabe wadi (río): Guadalajara, Guadiana, Guadalupe.', "es-ES-ElviraNeural"),
    ("d2-line10", "Entonces, cuando digo ojalá que mañana visite el Alcázar de un alcalde, estoy usando tres palabras árabes sin darme cuenta.", "es-ES-AlvaroNeural"),
    ("d2-line11", "¡Exacto! Y si duerme en una almohada, sobre una alfombra, y mira por la ventana al jardín con azahares, suma seis más.", "es-ES-ElviraNeural"),
    ("d2-line12", "Es increíble cómo la historia vive en cada palabra que pronunciamos.", "es-ES-AlvaroNeural"),
    ("d2-line13", "Así es. La lengua es un museo vivo. Cada palabra lleva consigo la historia de los pueblos que la crearon.", "es-ES-ElviraNeural"),
    ("d2-line14", "Ahora miraré el español con otros ojos. Cada palabra es una ventana a la historia.", "es-ES-AlvaroNeural"),
    ("d2-line15", "Y eso, amigos, es la magia de la lingüística histórica. Sigamos el recorrido — hay más historias esperando en cada sala.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.7...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
