"""Generate all audio files for L5.6 Idioms, Proverbs & Colloquial Spanish using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.6\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Body Idioms (12)
    ("meter-la-pata", "Meter la pata"),
    ("tomar-el-pelo", "Tomar el pelo"),
    ("no-tener-pelos-en-la-lengua", "No tener pelos en la lengua"),
    ("dar-la-mano", "Dar la mano"),
    ("echar-una-mano", "Echar una mano"),
    ("costar-un-ojo-de-la-cara", "Costar un ojo de la cara"),
    ("poner-los-pies-en-la-tierra", "Poner los pies en la tierra"),
    ("tener-la-cabeza-en-las-nubes", "Tener la cabeza en las nubes"),
    ("dar-en-el-clavo", "Dar en el clavo"),
    ("quedarse-con-la-boca-abierta", "Quedarse con la boca abierta"),
    ("tener-sangre-fria", "Tener sangre fría"),
    ("romperse-la-cabeza", "Romperse la cabeza"),
    # Nature & Animal Idioms (12)
    ("estar-en-las-nubes", "Estar en las nubes"),
    ("llover-a-cantaros", "Llover a cántaros"),
    ("ser-un-pez-gordo", "Ser un pez gordo"),
    ("matar-dos-pajaros-de-un-tiro", "Matar dos pájaros de un tiro"),
    ("buscar-la-quinta-pata-al-gato", "Buscar la quinta pata al gato"),
    ("cuando-el-rio-suena", "Cuando el río suena, agua lleva"),
    ("estar-como-pez-en-el-agua", "Estar como pez en el agua"),
    ("ser-mas-lento-que-una-tortuga", "Ser más lento que una tortuga"),
    ("tener-memoria-de-pez", "Tener memoria de pez"),
    ("ahogarse-en-un-vaso-de-agua", "Ahogarse en un vaso de agua"),
    ("ser-pan-comido", "Ser pan comido"),
    ("estar-en-la-luna", "Estar en la luna"),
    # Proverbs / Refranes (12)
    ("no-hay-mal-que-por-bien-no-venga", "No hay mal que por bien no venga"),
    ("en-boca-cerrada-no-entran-moscas", "En boca cerrada no entran moscas"),
    ("mas-vale-tarde-que-nunca", "Más vale tarde que nunca"),
    ("a-caballo-regalado", "A caballo regalado no le mires el diente"),
    ("dime-con-quien-andas", "Dime con quién andas y te diré quién eres"),
    ("el-que-mucho-abarca", "El que mucho abarca, poco aprieta"),
    ("no-por-mucho-madrugar", "No por mucho madrugar amanece más temprano"),
    ("a-quien-madruga", "A quien madruga, Dios le ayuda"),
    ("mas-vale-prevenir-que-curar", "Más vale prevenir que curar"),
    ("ojos-que-no-ven", "Ojos que no ven, corazón que no siente"),
    ("el-habito-no-hace-al-monje", "El hábito no hace al monje"),
    ("camaron-que-se-duerme", "Camarón que se duerme, se lo lleva la corriente"),
    # Colloquial Intensifiers (12)
    ("que-fuerte", "¡Qué fuerte!"),
    ("mola-mucho", "Mola mucho"),
    ("estoy-flipando", "¡Estoy flipando!"),
    ("es-una-pasada", "Es una pasada"),
    ("que-guay", "¡Qué guay!"),
    ("que-chevere", "¡Qué chévere!"),
    ("que-padre", "¡Qué padre!"),
    ("que-copado", "¡Qué copado!"),
    ("no-manches", "¡No manches!"),
    ("que-locura", "¡Qué locura!"),
    ("que-barbaro", "¡Qué bárbaro!"),
    ("esta-buenisimo", "¡Está buenísimo!"),
]

DIALOGUE_LINES = [
    # D1: Friends Chatting in a Café — Medellín, Colombia (Colombian voices)
    ("d1-line1", "¡Ey, parcero! ¿Qué hubo? ¿Cómo te fue en la entrevista de trabajo?", "es-CO-SalomeNeural"),
    ("d1-line2", "Ay, hermano... metí la pata. Le dije al jefe que su empresa era pequeña.", "es-CO-GonzaloNeural"),
    ("d1-line3", "¡Nooo! ¿Y él qué dijo? ¡Qué fuerte!", "es-CO-SalomeNeural"),
    ("d1-line4", "Se quedó con la boca abierta. Pero bueno, no hay mal que por bien no venga.", "es-CO-GonzaloNeural"),
    ("d1-line5", "Eso sí es verdad. Oye, ¿y ya supiste lo de Julián? ¡Consiguió el trabajo en Google!", "es-CO-SalomeNeural"),
    ("d1-line6", "¡¿En serio?! ¡Qué chévere! Ese man siempre cae como pez en el agua en las entrevistas.", "es-CO-GonzaloNeural"),
    ("d1-line7", "Sí, a él nunca le toman el pelo. Siempre sabe qué decir.", "es-CO-SalomeNeural"),
    ("d1-line8", "Bueno, como dicen: a quien madruga, Dios le ayuda. Mañana voy a otra entrevista.", "es-CO-GonzaloNeural"),
    ("d1-line9", "¡Así se habla! ¡Dale con todo, parcero! ¡Tú puedes!", "es-CO-SalomeNeural"),
    # D2: Colleagues at the Office — Madrid, Spain (Spanish voices)
    ("d2-line1", "¡Tío! ¿Has visto el nuevo proyecto? ¡Es una pasada!", "es-ES-ElviraNeural"),
    ("d2-line2", "Sí, mola mucho. Pero el plazo es cortísimo. Nos van a costar un ojo de la cara las horas extra.", "es-ES-AlvaroNeural"),
    ("d2-line3", "Ya, pero es lo que hay. Más vale prevenir que curar — empecemos ya.", "es-ES-ElviraNeural"),
    ("d2-line4", "Tienes razón. Oye, ¿y qué pasó con el informe de Marcos? Lleva tres días y nada.", "es-ES-AlvaroNeural"),
    ("d2-line5", "Es que ese tío está siempre en las nubes. Hay que decírselo clarito.", "es-ES-ElviraNeural"),
    ("d2-line6", "¡Estoy flipando! Le mandé tres correos y ni los ha abierto.", "es-ES-AlvaroNeural"),
    ("d2-line7", "Bueno, no te ahogues en un vaso de agua. Yo le echo una mano y entre los dos lo terminamos.", "es-ES-ElviraNeural"),
    ("d2-line8", "¡Qué guay! Gracias, Laura. Contigo todo es pan comido.", "es-ES-AlvaroNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.6...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
