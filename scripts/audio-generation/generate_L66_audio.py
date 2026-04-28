"""Generate all audio files for L6.6 Philosophy & Abstract Thought using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.6\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Existential Concepts (12)
    ("el-ser-es-anterior", "El ser es anterior a la existencia"),
    ("la-nada-nos-confronta", "La nada nos confronta con nuestra finitud"),
    ("la-libertad-implica", "La libertad implica una responsabilidad absoluta"),
    ("la-angustia-surge", "La angustia surge ante las posibilidades infinitas"),
    ("el-absurdo-nace", "El absurdo nace de la tensión entre el hombre y el mundo"),
    ("la-autenticidad-exige", "La autenticidad exige vivir conforme a uno mismo"),
    ("el-libre-albedrio", "El libre albedrío es la capacidad de elegir"),
    ("la-conciencia-nos-distingue", "La conciencia nos distingue del resto de los seres"),
    ("el-existencialismo-plantea", "El existencialismo plantea que la existencia precede a la esencia"),
    ("la-contingencia-del-ser", "La contingencia del ser humano es innegable"),
    ("el-dasein-se-refiere", "El dasein se refiere al ser-en-el-mundo"),
    ("la-alienacion-surge", "La alienación surge cuando el individuo pierde su esencia"),
    # Ethical Reasoning (12)
    ("la-etica-estudia", "La ética estudia los principios del comportamiento moral"),
    ("la-moral-varia", "La moral varía según la cultura y la época"),
    ("el-bien-comun-debe", "El bien común debe prevalecer sobre el interés individual"),
    ("el-utilitarismo-busca", "El utilitarismo busca la mayor felicidad para el mayor número"),
    ("el-imperativo-categorico", "El imperativo categórico exige actuar según principios universales"),
    ("la-justicia-social-requiere", "La justicia social requiere equidad en la distribución de recursos"),
    ("el-relativismo-moral", "El relativismo moral niega la existencia de verdades absolutas"),
    ("la-virtud-es-un-habito", "La virtud es un hábito que se cultiva con la práctica"),
    ("el-dilema-etico", "El dilema ético nos obliga a elegir entre dos males"),
    ("la-bioetica-aborda", "La bioética aborda cuestiones de vida y muerte"),
    ("los-derechos-humanos", "Los derechos humanos son inalienables e universales"),
    ("la-responsabilidad-moral", "La responsabilidad moral recae en el agente consciente"),
    # Argumentation & Logic (12)
    ("la-premisa-debe-ser", "La premisa debe ser verdadera para que la conclusión sea válida"),
    ("la-conclusion-se-deriva", "La conclusión se deriva lógicamente de las premisas"),
    ("eso-es-una-falacia", "Eso es una falacia ad hominem: ataca a la persona, no al argumento"),
    ("el-silogismo-consta", "El silogismo consta de dos premisas y una conclusión"),
    ("la-deduccion-va", "La deducción va de lo general a lo particular"),
    ("la-induccion-parte", "La inducción parte de casos específicos para llegar a una generalización"),
    ("permitame-refutar", "Permítame refutar ese argumento con evidencia empírica"),
    ("no-se-puede-rebatir", "No se puede rebatir un hecho con una opinión"),
    ("tu-argumento-incurre", "Tu argumento incurre en una petición de principio"),
    ("la-analogia-es-un-recurso", "La analogía es un recurso argumentativo, no una prueba"),
    ("correlacion-no-implica", "Correlación no implica causalidad"),
    ("la-carga-de-la-prueba", "La carga de la prueba recae sobre quien afirma"),
    # Abstract Expression (12)
    ("en-esencia-el-problema", "En esencia, el problema radica en la falta de comunicación"),
    ("en-el-fondo-todos", "En el fondo, todos buscamos lo mismo"),
    ("la-trascendencia-del-arte", "La trascendencia del arte va más allá de lo material"),
    ("lo-intangible-a-menudo", "Lo intangible a menudo tiene más valor que lo tangible"),
    ("la-dualidad-entre-razon", "La dualidad entre razón y emoción define al ser humano"),
    ("la-paradoja-nos-obliga", "La paradoja nos obliga a repensar nuestras certezas"),
    ("la-dialectica-permite", "La dialéctica permite la síntesis de ideas opuestas"),
    ("lo-sublime-provoca", "Lo sublime provoca asombro y reverencia"),
    ("la-cosmovision-de-un-pueblo", "La cosmovisión de un pueblo moldea su filosofía"),
    ("el-pensamiento-critico", "El pensamiento crítico cuestiona lo que se da por sentado"),
    ("la-epistemologia-examina", "La epistemología examina los límites del conocimiento"),
    ("la-hermeneutica-se-ocupa", "La hermenéutica se ocupa de la interpretación de textos"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Philosophy Class — Buenos Aires (es-AR voices)
    ("d1-line1", 'Buenas tardes. Hoy vamos a analizar la frase de Sartre: "El hombre está condenado a ser libre." ¿Quién quiere empezar?', "es-AR-ElenaNeural"),
    ("d1-line2", "Yo. Me parece que Sartre plantea que la libertad no es un regalo, sino una carga. No podemos escapar de la responsabilidad de elegir.", "es-AR-TomasNeural"),
    ("d1-line3", "Estoy de acuerdo, pero creo que el problema es más profundo. Si no hay esencia previa, cada elección nos define. Eso genera angustia.", "es-AR-ElenaNeural"),
    ("d1-line4", "Excelente. ¿Y cómo se relaciona eso con el concepto de autenticidad?", "es-AR-ElenaNeural"),
    ("d1-line5", "En el fondo, vivir auténticamente significa aceptar esa libertad sin recurrir a excusas: ni la religión, ni la sociedad, ni la naturaleza humana.", "es-AR-TomasNeural"),
    ("d1-line6", "Pero ahí está la paradoja: si niego mi libertad para evitar la angustia, ¿soy menos libre o simplemente cobarde?", "es-AR-ElenaNeural"),
    ("d1-line7", "Sartre diría que es mala fe. Es una automentira existencial. Fingir que no elegimos cuando siempre lo hacemos.", "es-AR-TomasNeural"),
    ("d1-line8", "Muy bien. ¿Y Camus? ¿Cómo responde al absurdo que surge de esa libertad radical?", "es-AR-ElenaNeural"),
    ("d1-line9", "Camus dice que hay que imaginar a Sísifo feliz. En esencia, la respuesta al absurdo no es la evasión, sino la rebelión y la aceptación simultáneas.", "es-AR-TomasNeural"),
    ("d1-line10", "¿Pero no es contradictorio aceptar y rebelarse al mismo tiempo? La dialéctica de Camus me parece problemática.", "es-AR-ElenaNeural"),
    ("d1-line11", "Ahí radica precisamente lo genial de Camus: la contradicción no es un defecto del argumento, sino un reflejo fiel de la condición humana.", "es-AR-ElenaNeural"),
    ("d1-line12", "Entonces, ¿la filosofía no busca eliminar las contradicciones, sino comprenderlas?", "es-AR-TomasNeural"),
    ("d1-line13", "Exactamente. La filosofía, en el fondo, es el arte de convivir con las preguntas que no tienen respuesta definitiva.", "es-AR-ElenaNeural"),
    ("d1-line14", 'Me recuerda a lo que decía Sócrates: "Solo sé que no sé nada." La sabiduría comienza con reconocer nuestra ignorancia.', "es-AR-TomasNeural"),
    ("d1-line15", "Y eso, paradójicamente, es lo más liberador de todo.", "es-AR-ElenaNeural"),
    # Dialogue 2: Ethics Debate — Bogota (es-CO voices)
    ("d2-line1", "El tema de hoy: ¿Es moralmente justificable sacrificar a uno para salvar a muchos? El clásico dilema del tranvía. Empiece usted, doctora Vargas.", "es-CO-GonzaloNeural"),
    ("d2-line2", "Desde una perspectiva utilitarista, la respuesta es clara: el bien común debe prevalecer. La mayor felicidad para el mayor número.", "es-CO-SalomeNeural"),
    ("d2-line3", "Pero eso convierte a las personas en medios, no en fines. El imperativo categórico de Kant lo prohíbe expresamente.", "es-CO-GonzaloNeural"),
    ("d2-line4", "Su argumento presupone que los principios abstractos tienen más peso que las consecuencias reales. Eso me parece una falacia de apelación a la autoridad.", "es-CO-SalomeNeural"),
    ("d2-line5", "Con todo respeto, no es una falacia. Estoy apelando a un principio racional, no a una autoridad. La dignidad humana no es negociable.", "es-CO-GonzaloNeural"),
    ("d2-line6", "Interesante. ¿Y si consideramos la ética del cuidado? ¿Cómo cambia el análisis?", "es-CO-GonzaloNeural"),
    ("d2-line7", "La ética del cuidado nos obligaría a considerar la relación con cada persona. No es lo mismo sacrificar a un desconocido que a un ser querido.", "es-CO-SalomeNeural"),
    ("d2-line8", "Precisamente. Y ahí la premisa utilitarista se derrumba. No somos calculadoras morales; somos seres con vínculos afectivos.", "es-CO-GonzaloNeural"),
    ("d2-line9", "Permítame rebatir eso: si solo protegiéramos a quienes conocemos, nunca habría justicia social. Los derechos humanos son universales precisamente porque trascienden los vínculos personales.", "es-CO-SalomeNeural"),
    ("d2-line10", "Ahí tiene un punto válido. La tensión entre lo particular y lo universal es, en el fondo, el gran dilema ético de nuestra época.", "es-CO-GonzaloNeural"),
    ("d2-line11", "¿Podemos llegar a alguna síntesis? ¿O es este un dilema irresoluble?", "es-CO-GonzaloNeural"),
    ("d2-line12", "La dialéctica nos enseña que la síntesis no elimina la tensión. Debemos actuar con principios pero sin ignorar las consecuencias.", "es-CO-GonzaloNeural"),
    ("d2-line13", "Estoy de acuerdo. La sabiduría moral no es elegir un sistema ético, sino saber cuándo aplicar cada uno.", "es-CO-SalomeNeural"),
    ("d2-line14", "Magnífico cierre. La paradoja de la ética es que necesitamos múltiples marcos para navegar un mundo complejo. Gracias a los dos.", "es-CO-GonzaloNeural"),
    ("d2-line15", "Gracias. Y recordemos: el pensamiento crítico cuestiona lo que se da por sentado, incluyendo nuestras propias conclusiones.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.6...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
