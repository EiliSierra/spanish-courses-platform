"""Generate all audio files for L10.2 Your Spanish Journey: Comprehensive Review using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L10.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Grammar Mastery (12)
    ("cuando-era-nino-jugaba", "Cuando era niño, siempre jugaba en el parque que estaba cerca de mi casa"),
    ("ayer-comi-restaurante", "Ayer comí en el restaurante donde conocí a mi esposa hace diez años"),
    ("habiamos-terminado-proyecto", "Ya habíamos terminado el proyecto cuando el jefe nos pidió cambios"),
    ("importante-ciudadanos-participen", "Es importante que todos los ciudadanos participen en las elecciones"),
    ("si-hubiera-sabido-verdad", "Si yo hubiera sabido la verdad, habría tomado una decisión diferente"),
    ("ojala-hijos-pudieran-ver", "Ojalá que mis hijos pudieran ver lo que hemos construido juntos"),
    ("si-tuviera-tiempo-estudiaria", "Si tuviera más tiempo, estudiaría lingüística computacional en Barcelona"),
    ("informe-sera-presentado", "El informe será presentado por la directora en la conferencia del viernes"),
    ("profesor-dijo-resultados", "El profesor dijo que los resultados habían superado todas las expectativas"),
    ("mujer-cuyo-libro-premio", "La mujer cuyo libro ganó el premio es colombiana y vive en Madrid"),
    ("habré-terminado-doctorado", "Para el año que viene, ya habré terminado mi doctorado en educación bilingüe"),
    ("si-hubieras-llegado-antes", "Si hubieras llegado antes, habrías conocido al autor del cual te hablé"),
    # Vocabulary Integration (12)
    ("abogado-diagnostico-empresa", "El abogado diagnosticó que la empresa necesitaba una reestructuración financiera completa"),
    ("chef-permacultura-menu", "El chef utilizó técnicas de permacultura para crear un menú sostenible y delicioso"),
    ("arquitecta-hospital-ecologico", "La arquitecta diseñó un hospital ecológico con paneles solares y jardines terapéuticos"),
    ("periodista-investigo-corrupcion", "El periodista investigó la corrupción política mientras cubría la crisis migratoria"),
    ("profesora-biologia-ia-medicina", "La profesora de biología explicó cómo la inteligencia artificial transforma la medicina genómica"),
    ("emprendedor-telemedicina-rural", "El emprendedor mexicano lanzó una aplicación de telemedicina para comunidades rurales"),
    ("embajadora-tratado-climatico", "La embajadora negoció un tratado climático que incluía derechos indígenas"),
    ("ingeniero-puente-presupuesto", "El ingeniero civil supervisó la construcción del puente mientras gestionaba el presupuesto municipal"),
    ("psicologa-terapia-ansiedad", "La psicóloga infantil recomendó terapia de arte para los niños con trastornos de ansiedad"),
    ("sommelier-vinos-gastronomia", "El sommelier argentino maridó vinos de Mendoza con platos de la gastronomía peruana"),
    ("activista-deforestacion-amazonas", "La activista denunció la deforestación del Amazonas en la cumbre de las Naciones Unidas"),
    ("musico-sinfonia-cumbia-jazz", "El músico callejero compuso una sinfonía que fusionaba cumbia, jazz y música clásica"),
    # Cultural Fluency (12)
    ("vale-sale-ambos-okay", "En España dicen vale y en México dicen sale — pero ambos significan okay, está bien"),
    ("con-todo-respeto-discrepar", "Con todo respeto, estimado colega, permítame discrepar de su brillante pero cuestionable análisis"),
    ("propuesta-agujeros-queso", "No es por nada, pero tu propuesta tiene más agujeros que un queso suizo, compadre"),
    ("cachai-entendes-same-energy", "Aquí en Chile decimos cachai y en Argentina dicen entendés — same energy, poh"),
    ("agradeceria-considerar-solicitud", "Le agradecería enormemente si pudiera considerar nuestra humilde solicitud, señor ministro"),
    ("abuela-mucho-abarca", "Mi abuela siempre decía: el que mucho abarca, poco aprieta — y tenía toda la razón"),
    ("quiubo-parce-asere", "En Colombia te dicen quiubo, parce y en Cuba te dicen asere, ¿qué bolá? — pura calidez"),
    ("mire-usted-replantear", "Mire usted, con el debido respeto, creo que deberíamos replantear esta estrategia por completo"),
    ("da-igual-tu-vos-usted", "A mí me da igual si me hablas de tú, de vos o de usted — lo importante es que me hables"),
    ("no-hay-mal-bien-venga", "Dicen que no hay mal que por bien no venga y yo le añado: ni gringo que no aprenda español"),
    ("manana-formal-tarde-informal", "En la mañana soy formal: buenos días, licenciado; en la tarde: ¿qué onda, carnal?"),
    ("escribo-saludarle-cafecito", "Le escribo para saludarle cordialmente y, de paso, recordarle que me debe un cafecito"),
    # Real-World Scenarios (12)
    ("quisiera-mesa-ventana", "Buenas tardes, quisiera una mesa para dos junto a la ventana, si fuera tan amable"),
    ("experiencia-salario-justo", "Considerando mi experiencia y el mercado actual, creo que un salario de sesenta mil sería justo"),
    ("dolor-punzante-pecho", "Doctor, tengo un dolor punzante en el pecho que empeora cuando respiro profundamente"),
    ("colegas-investigacion-climatico", "Estimados colegas, hoy les presento los resultados de nuestra investigación sobre el cambio climático"),
    ("escribo-confirmar-contrato", "Le escribo para confirmar la reunión del martes y adjuntar el contrato revisado para su aprobación"),
    ("oficial-perdi-consulado", "Disculpe, oficial, me perdí — ¿podría indicarme cómo llegar al consulado de mi país?"),
    ("abrir-cuenta-plazos-fijos", "Buenos días, vengo a abrir una cuenta de ahorros y me gustaría información sobre los plazos fijos"),
    ("juez-cliente-inocente", "Señor juez, mi cliente es inocente y las pruebas presentadas por la fiscalía son insuficientes"),
    ("denunciar-equipaje-reclamacion", "Quiero denunciar que mi equipaje no llegó en el vuelo y necesito presentar una reclamación formal"),
    ("propongo-comite-desigualdad", "Compañeros, propongo que formemos un comité para abordar el problema de la desigualdad salarial"),
    ("solicitar-extension-emergencia", "Profesora, me gustaría solicitar una extensión del plazo porque tuve una emergencia familiar"),
    ("televidentes-reportaje-crisis", "Queridos televidentes, esta noche les traemos un reportaje especial sobre la crisis hídrica en Centroamérica"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Reflecting on the Journey — Bogotá
    ("d1-line1", "Bueno, aquí estamos. Tu última clase de español. ¿Cómo te sientes?", "es-CO-SalomeNeural"),
    ("d1-line2", "Honestamente, profesora, estoy emocionado y un poco triste a la vez. Ha sido un viaje increíble.", "es-MX-JorgeNeural"),
    ("d1-line3", "¿Te acuerdas de tu primera clase? No sabías ni decir me llamo sin ponerte nervioso.", "es-CO-SalomeNeural"),
    ("d1-line4", "¡Ja! Y ahora puedo debatir sobre política, negociar contratos y hasta contar chistes en español. Si me hubieran dicho eso entonces, no lo habría creído.", "es-MX-JorgeNeural"),
    ("d1-line5", "Lo que más me enorgullece es que no solo aprendiste la gramática — aprendiste a VIVIR en español. Eso es lo que importa.", "es-CO-SalomeNeural"),
    ("d1-line6", "Tiene razón. Cuando viajé a Argentina el mes pasado, la gente me preguntaba de qué país hispanohablante era. ¡No podían creer que fuera estudiante!", "es-MX-JorgeNeural"),
    ("d1-line7", "¡Eso es el mejor cumplido! Recuerda: el español no es solo un idioma — es una puerta a 21 países y 580 millones de personas.", "es-CO-SalomeNeural"),
    ("d1-line8", "Profesora, gracias por todo. Usted me enseñó que aprender un idioma es aprender a ver el mundo con otros ojos. Nunca lo olvidaré.", "es-MX-JorgeNeural"),
    ("d1-line9", "Y tú me enseñaste que la dedicación supera al talento. El español es tu casa ahora. Bienvenido para siempre.", "es-CO-SalomeNeural"),
    # Dialogue 2: Business-Social Situation — Buenos Aires
    ("d2-line1", "¡Che, bienvenido a Buenos Aires! ¿Llegaste bien? Te presento a la Dra. Fernández, directora de la fundación con la que vamos a colaborar.", "es-AR-TomasNeural"),
    ("d2-line2", "Encantado, Dra. Fernández. He leído mucho sobre el trabajo que su fundación ha hecho en educación rural. Es un honor conocerla.", "es-MX-JorgeNeural"),
    ("d2-line3", "El gusto es mío. Martín me contó que usted lidera el proyecto de tecnología educativa. ¿Me podría dar un resumen de la propuesta?", "es-AR-ElenaNeural"),
    ("d2-line4", "Por supuesto. Nuestra plataforma utiliza inteligencia artificial para adaptar las lecciones al nivel de cada estudiante. Si la implementáramos en sus escuelas rurales, podríamos cerrar la brecha digital en menos de dos años.", "es-MX-JorgeNeural"),
    ("d2-line5", "Interesante. ¿Y cómo manejarían el tema de la conectividad? En muchas zonas no hay internet estable.", "es-AR-ElenaNeural"),
    ("d2-line6", "Excelente pregunta. Hemos desarrollado un modo offline que sincroniza los datos cuando se recupera la conexión. Es decir, los estudiantes pueden aprender sin internet.", "es-MX-JorgeNeural"),
    ("d2-line7", "Dale, esto pinta muy bien. ¿Qué les parece si seguimos la charla cenando? Conozco una parrilla espectacular acá cerca.", "es-AR-TomasNeural"),
    ("d2-line8", "¡Me encanta la idea! Así podemos hablar más distendidos. Además, no se puede venir a Buenos Aires sin probar un buen asado.", "es-AR-ElenaNeural"),
    ("d2-line9", "¡Con mucho gusto! Y de paso brindamos por esta nueva colaboración. Como dice el refrán: el que no arriesga, no gana.", "es-MX-JorgeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L10.2 Your Spanish Journey: Comprehensive Review...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
