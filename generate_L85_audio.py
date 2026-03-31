"""Generate all audio files for L8.5 Sports Commentary & Journalism using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.5\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Live Commentary (12)
    ("gol-de-la-seleccion", "¡Gooool! ¡Gol de la selección! ¡Se desborda la hinchada en las tribunas!"),
    ("saca-de-banda", "Saca de banda para el equipo local desde la línea lateral derecha"),
    ("tiro-de-esquina", "Tiro de esquina para el visitante, se preparan en el área grande"),
    ("fuera-de-lugar", "¡Fuera de lugar! El delantero estaba en posición adelantada y el árbitro lo marca"),
    ("tiempo-de-descuento", "Estamos en tiempo de descuento, quedan tres minutos de adición"),
    ("penal-el-arbitro", "¡Penal! ¡El árbitro señala el punto de penalti sin dudarlo!"),
    ("tarjeta-roja-directa", "¡Tarjeta roja directa! El jugador es expulsado del campo de juego"),
    ("contraataque-fulminante", "¡Contraataque fulminante! Tres toques y el balón está en la red"),
    ("el-portero-se-luce", "El portero se luce con una atajada espectacular a mano cambiada"),
    ("falta-tactica-mitad", "Falta táctica en la mitad de la cancha, el juego se detiene"),
    ("golazo-de-media-cancha", "¡Golazo de media cancha! ¡Esto es candidato al gol del año!"),
    ("cambio-en-el-equipo", "Cambio en el equipo local: sale el número diez, entra el nueve"),
    # Sports Analysis (12)
    ("la-tactica-del-equipo", "La táctica del equipo se basa en un esquema de cuatro-tres-tres con presión alta"),
    ("la-presion-alta-obliga", "La presión alta obliga al rival a cometer errores en la salida desde atrás"),
    ("la-posesion-del-balon", "La posesión del balón superó el sesenta por ciento en el primer tiempo"),
    ("la-defensa-en-zona", "La defensa en zona permite cubrir más espacio pero exige coordinación perfecta"),
    ("el-rendimiento-del-jugador", "El rendimiento del jugador ha decaído notablemente en los últimos veinte minutos"),
    ("las-estadisticas-del-partido", "Las estadísticas del partido muestran un dominio claro del equipo visitante"),
    ("el-mediocampista-tuvo", "El mediocampista tuvo un porcentaje de pases completados del noventa y dos por ciento"),
    ("la-transicion-de-defensa", "La transición de defensa a ataque fue la clave del triunfo"),
    ("el-director-tecnico-hizo", "El director técnico hizo cambios tácticos acertados en el entretiempo"),
    ("los-tiros-a-puerta", "Los tiros a puerta fueron ocho contra tres a favor del equipo local"),
    ("el-mapa-de-calor", "El mapa de calor revela que el lateral derecho fue el jugador más activo"),
    ("el-var-confirmo", "El VAR confirmó la decisión del árbitro tras revisar la jugada polémica"),
    # Athlete Interviews (12)
    ("ha-sido-un-partido", "Ha sido un partido muy disputado, los dos equipos dieron todo en la cancha"),
    ("dimos-todo-en-la-cancha", "Dimos todo en la cancha y creo que el resultado es justo"),
    ("el-equipo-mostro-caracter", "El equipo mostró carácter para remontar un marcador adverso"),
    ("hay-que-seguir-trabajando", "Hay que seguir trabajando, esto no ha terminado todavía"),
    ("dedicamos-esta-victoria", "Dedicamos esta victoria a la afición que nos apoyó durante todo el torneo"),
    ("estoy-muy-orgulloso", "Estoy muy orgulloso de mis compañeros, lucharon hasta el último minuto"),
    ("la-lesion-me-tuvo", "La lesión me tuvo fuera tres meses, pero volví más fuerte que nunca"),
    ("el-gol-que-marque", "El gol que marqué hoy es el más importante de mi carrera"),
    ("tenemos-que-mantener", "Tenemos que mantener los pies en la tierra y pensar en el próximo partido"),
    ("mi-entrenador-me-dijo", "Mi entrenador me dijo que confiara en mis habilidades y así lo hice"),
    ("el-publico-nos-dio", "El público nos dio una energía increíble, se siente su apoyo desde la cancha"),
    ("agradezco-a-dios", "Agradezco a Dios y a mi familia por estar siempre a mi lado"),
    # Fan Culture (12)
    ("la-hinchada-es-el-alma", "La hinchada es el alma del equipo, su pasión mueve montañas"),
    ("la-barra-brava-alienta", "La barra brava alienta sin parar durante los noventa minutos"),
    ("el-clasico-entre-boca", "El clásico entre Boca y River es uno de los derbis más apasionantes del mundo"),
    ("me-puse-la-camiseta", "Me puse la camiseta de la selección y salí a celebrar a la calle"),
    ("el-estadio-se-vino-abajo", "¡El estadio se vino abajo con el gol del empate en el último segundo!"),
    ("cantar-los-himnos", "Cantar los himnos del equipo con ochenta mil personas es una experiencia única"),
    ("los-abonados-llenan", "Los abonados llenan el estadio partido tras partido, llueva o truene"),
    ("el-banderazo-antes", "El banderazo antes del partido llena las calles de color y pasión"),
    ("la-rivalidad-entre", "La rivalidad entre equipos es parte de la identidad cultural de cada ciudad"),
    ("ver-el-partido-en", "Ver el partido en la pantalla gigante de la plaza es una tradición del barrio"),
    ("las-supersticiones-son", "Las supersticiones son sagradas: siempre veo el partido con la misma ropa"),
    ("el-futbol-no-es-solo", "El fútbol no es solo un deporte, es una forma de vida y una religión popular"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Live Radio Commentary — Buenos Aires
    ("d1-line1", "¡Buenas noches, señoras y señores! Estamos en La Bombonera, el templo del fútbol argentino, para el superclásico entre Boca y River.", "es-AR-TomasNeural"),
    ("d1-line2", "El ambiente es impresionante. La hinchada de Boca no ha parado de cantar desde que se abrieron las puertas.", "es-AR-ElenaNeural"),
    ("d1-line3", "¡Arranca el partido! Boca con la posesión... pase largo al delantero... la recibe de espaldas...", "es-AR-TomasNeural"),
    ("d1-line4", "River está jugando con presión alta, no dejan salir a Boca. La táctica del técnico visitante está funcionando.", "es-AR-ElenaNeural"),
    ("d1-line5", "¡Falta! ¡Tarjeta amarilla para el lateral de River! Tiro libre peligroso para Boca...", "es-AR-TomasNeural"),
    ("d1-line6", "El estadio contiene la respiración... se prepara el número diez...", "es-AR-ElenaNeural"),
    ("d1-line7", "¡TIRA! ¡Y... GOOOOOL! ¡GOOOOL DE BOCA! ¡Se vino abajo La Bombonera! ¡La hinchada explota!", "es-AR-TomasNeural"),
    ("d1-line8", "¡Qué golazo! Tiro libre perfecto al ángulo superior izquierdo. El arquero de River ni se movió.", "es-AR-ElenaNeural"),
    ("d1-line9", "Boca uno, River cero. ¡El estadio tiembla! La barra brava enloquece con los bombos y las banderas.", "es-AR-TomasNeural"),
    ("d1-line10", "River necesita reaccionar. El director técnico ya está haciendo señas para un cambio táctico.", "es-AR-ElenaNeural"),
    ("d1-line11", "¡Penal para River! ¡El árbitro señala el punto! ¡Esto se pone dramático, damas y caballeros!", "es-AR-TomasNeural"),
    ("d1-line12", "Momento crucial. El delantero de River contra el arquero de Boca. Ochenta mil almas en silencio...", "es-AR-ElenaNeural"),
    ("d1-line13", "¡DISPARA! ¡Y EL ARQUERO LA ATAJA! ¡INCREÍBLE! ¡Boca sigue adelante! ¡Esto es fútbol, esto es pasión!", "es-AR-TomasNeural"),
    ("d1-line14", "Estamos en tiempo de descuento. Tres minutos de adición. El partido se define aquí y ahora.", "es-AR-ElenaNeural"),
    ("d1-line15", "¡FINAL DEL PARTIDO! ¡Boca Juniors gana el superclásico uno a cero! ¡La Bombonera es una fiesta!", "es-AR-TomasNeural"),
    # Dialogue 2: Post-Game Press Conference — Madrid
    ("d2-line1", "Entrenador, ¿cómo evalúa el rendimiento del equipo esta noche?", "es-ES-ElviraNeural"),
    ("d2-line2", "Ha sido un partido muy disputado. Los dos equipos dieron todo en el campo. Estoy orgulloso de mis jugadores.", "es-ES-AlvaroNeural"),
    ("d2-line3", "¿Qué le pareció la actuación del delantero? Marcó dos goles y dio una asistencia.", "es-ES-ElviraNeural"),
    ("d2-line4", "Está en un momento espectacular. Pero quiero destacar el trabajo colectivo. Sin el equipo, esos goles no existen.", "es-ES-AlvaroNeural"),
    ("d2-line5", "¿Cómo explica los cambios tácticos en el segundo tiempo?", "es-ES-ElviraNeural"),
    ("d2-line6", "Vimos que la defensa en zona no estaba funcionando. Pasamos a marcaje individual y eso nos dio más control.", "es-ES-AlvaroNeural"),
    ("d2-line7", "El VAR anuló un gol en el primer tiempo. ¿Está de acuerdo con la decisión?", "es-ES-ElviraNeural"),
    ("d2-line8", "Respeto la tecnología. El VAR está para ayudar al árbitro. Si dice fuera de lugar, hay que aceptarlo.", "es-ES-AlvaroNeural"),
    ("d2-line9", "¿Hay alguna actualización sobre la lesión del mediocampista que salió en camilla?", "es-ES-ElviraNeural"),
    ("d2-line10", "Es pronto para hablar. Los médicos lo están evaluando. Esperemos que no sea grave. El equipo le manda mucha fuerza.", "es-ES-AlvaroNeural"),
    ("d2-line11", "¿Qué le dice a la afición que llenó el estadio esta noche?", "es-ES-ElviraNeural"),
    ("d2-line12", "Les dedicamos esta victoria. Sin su apoyo, nada de esto sería posible. La afición es nuestro jugador número doce.", "es-ES-AlvaroNeural"),
    ("d2-line13", "¿Cómo se preparan para el clásico del próximo fin de semana?", "es-ES-ElviraNeural"),
    ("d2-line14", "Hay que mantener los pies en la tierra. Disfrutaremos esta noche, pero mañana empieza la preparación. Un partido a la vez.", "es-ES-AlvaroNeural"),
    ("d2-line15", "Muchas gracias, entrenador. Enhorabuena por la victoria.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.5...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
