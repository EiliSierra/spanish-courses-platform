"""Generate all audio files for L10.1 The Art of Conversation using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L10.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Turn-Taking (12)
    ("perdona-que-te-interrumpa", "Perdona que te interrumpa, pero..."),
    ("como-iba-diciendo", "Como iba diciendo..."),
    ("dejame-terminar-y-luego", "Déjame terminar y luego te cuento"),
    ("queria-anadir-algo", "Quería añadir algo a lo que dijiste"),
    ("dejame-tomar-la-palabra", "Espera, déjame tomar la palabra"),
    ("te-cedo-el-turno", "Te cedo el turno, adelante"),
    ("puedo-decir-algo", "Perdón, ¿puedo decir algo?"),
    ("a-lo-que-iba", "A lo que iba..."),
    ("retomando-el-hilo", "Retomando el hilo de la conversación"),
    ("antes-de-que-se-me-olvide", "Antes de que se me olvide..."),
    ("tu-diras-te-escucho", "Tú dirás, te escucho"),
    ("un-momento-no-terminado", "Un momento, que no he terminado"),
    # Active Listening (12)
    ("no-me-digas", "¡No me digas!"),
    ("en-serio-que-fuerte", "¿En serio? ¡Qué fuerte!"),
    ("que-interesante-cuentame", "¡Qué interesante! Cuéntame más"),
    ("claro-claro-te-entiendo", "Claro, claro, te entiendo perfectamente"),
    ("aja-sigue-sigue", "Ajá, sigue, sigue"),
    ("ya-veo-tiene-sentido", "Ya veo, ya veo... tiene sentido"),
    ("que-barbaridad-que-paso", "¡Qué barbaridad! ¿Y qué pasó después?"),
    ("fijate-no-sabia", "¡Fíjate! Yo no sabía eso"),
    ("que-bien-me-alegro", "¡Qué bien! Me alegro mucho"),
    ("y-tu-que-opinas", "Mmm, ¿y tú qué opinas?"),
    ("totalmente-de-acuerdo", "Totalmente de acuerdo contigo"),
    ("que-pena-lo-siento", "¡Ay, qué pena! Lo siento mucho"),
    # Conversation Repair (12)
    ("lo-que-quiero-decir", "Lo que quiero decir es que..."),
    ("no-me-refiero-a-eso", "No me refiero a eso, sino a..."),
    ("me-explico-mal", "Me explico mal, a ver..."),
    ("a-ver-si-me-entiendes", "A ver si me entiendes bien"),
    ("para-ser-mas-preciso", "Para ser más preciso, quiero decir que..."),
    ("mejor-dicho-lo-que-pasa", "Mejor dicho, lo que pasa es que..."),
    ("dejame-reformular", "No es exactamente eso, déjame reformular"),
    ("me-has-malinterpretado", "Creo que me has malinterpretado"),
    ("es-decir-lo-que-intento", "Es decir, lo que intento explicar es..."),
    ("no-me-he-expresado-bien", "Perdón, no me he expresado bien"),
    ("o-sea-en-otras-palabras", "O sea, en otras palabras..."),
    ("no-me-sale-la-palabra", "Lo que pasa es que no me sale la palabra"),
    # Small Talk Mastery (12)
    ("que-calor-hace-hoy", "¡Qué calor hace hoy! ¿No te parece?"),
    ("cambiando-de-tema", "Bueno, cambiando de tema..."),
    ("a-proposito-supiste", "Oye, a propósito, ¿supiste lo de...?"),
    ("te-dejo-que-tengo-que-irme", "Bueno, te dejo que tengo que irme"),
    ("fue-un-placer-charlar", "Fue un placer charlar contigo"),
    ("hablando-de-eso-tu-familia", "Y hablando de eso, ¿qué tal tu familia?"),
    ("la-sobremesa-fue-larguisima", "La sobremesa de ayer fue larguísima"),
    ("que-tal-fin-de-semana", "¿Qué tal el fin de semana? ¿Hiciste algo?"),
    ("aqui-andamos-como-siempre", "Pues nada, aquí andamos, como siempre"),
    ("eso-me-recuerda", "Eso me recuerda que quería contarte algo"),
    ("que-gusto-verte", "Qué gusto verte, hace mucho que no nos vemos"),
    ("nos-ponemos-al-dia", "Nos ponemos al día otro rato, ¿vale?"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Dinner Party in Madrid
    ("d1-line1", "Bueno, ¿y qué me contáis? Hace meses que no nos juntamos todos.", "es-ES-ElviraNeural"),
    ("d1-line2", "Pues yo acabo de volver de Colombia. ¡Fue increíble! La gente, la comida...", "es-ES-AlvaroNeural"),
    ("d1-line3", "Perdona que te interrumpa, Diego, pero ¿fuiste a Cartagena? Me han dicho que es espectacular.", "es-MX-DaliaNeural"),
    ("d1-line4", "Sí, sí. Bueno, como iba diciendo, la gastronomía me dejó flipado. Probé de todo.", "es-ES-AlvaroNeural"),
    ("d1-line5", "¡No me digas! ¿Y qué fue lo mejor que comiste?", "es-ES-ElviraNeural"),
    ("d1-line6", "Un ajiaco bogotano que... bueno, es que no me sale la palabra... era como una sopa pero con tres tipos de patata.", "es-ES-AlvaroNeural"),
    ("d1-line7", "¡Fíjate! Yo he oído que en Bogotá la comida callejera es buenísima también.", "es-MX-JorgeNeural"),
    ("d1-line8", "Oye, a propósito, ¿supisteis lo de la nueva ruta directa Madrid-Bogotá?", "es-MX-DaliaNeural"),
    ("d1-line9", "Ajá, sí, lo leí. Cambiando un poco de tema, ¿alguien quiere más vino? Esta sobremesa va para largo.", "es-ES-ElviraNeural"),
    ("d1-line10", "¡Claro! Retomando el hilo, lo que quería decir es que Colombia me cambió la perspectiva. Es decir, ahora entiendo por qué la llaman el país más acogedor.", "es-ES-AlvaroNeural"),
    ("d1-line11", "Totalmente de acuerdo. Yo fui hace dos años y quiero volver. Bueno, ya os contaré.", "es-MX-JorgeNeural"),
    ("d1-line12", "Pues nada, aquí andamos, planificando viajes. ¡Qué gusto juntarnos así!", "es-MX-DaliaNeural"),
    ("d1-line13", "Oye, antes de que se me olvide, quería contaros algo del trabajo. ¿Me dejáis un momento?", "es-ES-ElviraNeural"),
    ("d1-line14", "Tú dirás, te escuchamos.", "es-ES-AlvaroNeural"),
    ("d1-line15", "¡Me han ascendido! Pero mejor dicho, lo que pasa es que me han dado un proyecto internacional.", "es-ES-ElviraNeural"),
    ("d1-line16", "¡Qué bien! ¡Me alegro mucho, Carmen! Eso hay que celebrarlo.", "es-MX-DaliaNeural"),
    # Dialogue 2: Networking Event in Mexico City
    ("d2-line1", "¡Qué gusto verte! Hace mucho que no coincidíamos en un evento así.", "es-MX-DaliaNeural"),
    ("d2-line2", "¡Andrea! Sí, desde la conferencia de Guadalajara. ¿Qué tal el fin de semana? ¿Hiciste algo interesante?", "es-MX-JorgeNeural"),
    ("d2-line3", "Pues nada, aquí andamos, como siempre. Bueno, en realidad sí — empecé un curso de inteligencia artificial.", "es-MX-DaliaNeural"),
    ("d2-line4", "¿En serio? ¡Qué interesante! Cuéntame más. ¿Es presencial o en línea?", "es-MX-JorgeNeural"),
    ("d2-line5", "En línea, pero tiene sesiones en vivo. Lo que pasa es que... a ver si me explico... no es tanto de programar, sino de, o sea, en otras palabras, de entender cómo aplicar la IA a negocios.", "es-MX-DaliaNeural"),
    ("d2-line6", "Ya veo, ya veo. Tiene sentido. Eso me recuerda que quería contarte algo — mi empresa está buscando alguien con ese perfil.", "es-MX-JorgeNeural"),
    ("d2-line7", "¡No me digas! Oye, a propósito, ¿sigues trabajando en la misma empresa?", "es-MX-DaliaNeural"),
    ("d2-line8", "Sí, pero cambié de área. Ahora estoy en innovación. Perdón, ¿puedo decir algo antes de que se me olvide?", "es-MX-JorgeNeural"),
    ("d2-line9", "Claro, claro, adelante.", "es-MX-DaliaNeural"),
    ("d2-line10", "Te mando mi tarjeta por WhatsApp. Hablando de eso, ¿sigues con el mismo número?", "es-MX-JorgeNeural"),
    ("d2-line11", "Sí, el mismo. Oye, mira, ya va a empezar la conferencia. Bueno, te dejo que tengo que buscar mi asiento.", "es-MX-DaliaNeural"),
    ("d2-line12", "Fue un placer charlar contigo. Nos ponemos al día otro rato, ¿va?", "es-MX-JorgeNeural"),
    ("d2-line13", "¡Claro que sí! Un gusto, Tomás. ¡Hablamos pronto!", "es-MX-DaliaNeural"),
    ("d2-line14", "¡Igualmente! Y suerte con el curso de IA. Cuéntame cómo te va.", "es-MX-JorgeNeural"),
    ("d2-line15", "¡Seguro! Nos vemos, Tomás.", "es-MX-DaliaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L10.1 The Art of Conversation...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
