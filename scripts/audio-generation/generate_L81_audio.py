"""Generate all audio files for L8.1 Medical Spanish using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Anatomy & Symptoms (12)
    ("el-higado-esta-inflamado", "El hígado está inflamado"),
    ("los-rinones-filtran-la-sangre", "Los riñones filtran la sangre"),
    ("la-columna-vertebral-sostiene", "La columna vertebral sostiene el cuerpo"),
    ("dolor-agudo-en-el-abdomen", "El paciente reporta dolor agudo en el abdomen"),
    ("dolor-cronico-espalda-baja", "Sufre de dolor crónico en la espalda baja"),
    ("hinchazon-rodilla-derecha", "Se observa hinchazón en la rodilla derecha"),
    ("fiebre-alta-no-cede", "La fiebre alta no cede con el paracetamol"),
    ("mareos-vision-borrosa", "Presenta mareos y visión borrosa"),
    ("nauseas-empeoran-despues-comer", "Las náuseas empeoran después de comer"),
    ("presion-arterial-elevada", "La presión arterial está elevada"),
    ("ritmo-cardiaco-irregular", "El ritmo cardíaco es irregular"),
    ("sistema-inmunologico-comprometido", "El sistema inmunológico está comprometido"),
    # Diagnosis & Treatment (12)
    ("diagnostico-preliminar-gastritis", "El diagnóstico preliminar indica gastritis"),
    ("recetar-medicamentos-infeccion", "Voy a recetar medicamentos para la infección"),
    ("dosis-recomendada-500mg", "La dosis recomendada es de 500 miligramos"),
    ("efectos-secundarios-medicamento", "Este medicamento puede causar efectos secundarios"),
    ("contraindicaciones-farmacos", "Existen contraindicaciones con otros fármacos"),
    ("pronostico-favorable-tratamiento", "El pronóstico es favorable si sigue el tratamiento"),
    ("realizar-biopsia-tejido", "Necesitamos realizar una biopsia del tejido"),
    ("tratamiento-ambulatorio-fisioterapia", "El tratamiento ambulatorio incluye fisioterapia"),
    ("analisis-sangre-completo", "Hay que hacer un análisis de sangre completo"),
    ("cirugia-minimamente-invasiva", "La cirugía será mínimamente invasiva"),
    ("antibiotico-amplio-espectro", "Le receto un antibiótico de amplio espectro"),
    ("guardar-reposo-absoluto", "El paciente debe guardar reposo absoluto"),
    # Patient Communication (12)
    ("desde-cuando-estos-sintomas", "¿Desde cuándo presenta estos síntomas?"),
    ("alergico-algun-medicamento", "¿Es usted alérgico a algún medicamento?"),
    ("hacerle-analisis-laboratorio", "Necesitamos hacerle unos análisis de laboratorio"),
    ("recetar-antiinflamatorio", "Le voy a recetar un antiinflamatorio"),
    ("tomar-medicamento-cada-8-horas", "Debe tomar el medicamento cada 8 horas"),
    ("cirugias-anteriores", "¿Ha tenido cirugías anteriores?"),
    ("escala-1-10-dolor", "En una escala del 1 al 10, ¿cómo califica su dolor?"),
    ("cita-de-seguimiento", "Vamos a programar una cita de seguimiento"),
    ("antecedentes-familiares-diabetes", "¿Tiene antecedentes familiares de diabetes?"),
    ("procedimiento-rutinario", "No se preocupe, el procedimiento es rutinario"),
    ("consentimiento-informado", "Necesita firmar el consentimiento informado"),
    ("consultar-especialista", "Le recomiendo consultar con un especialista"),
    # Emergency & Mental Health (12)
    ("codigo-rojo-emergencia-quirofano", "Código rojo, tenemos una emergencia en el quirófano"),
    ("estado-critico-intubacion", "Paciente en estado crítico, necesita intubación"),
    ("signos-vitales-estables", "Los signos vitales están estables"),
    ("oxigeno-mascarilla-paciente", "Administren oxígeno por mascarilla al paciente"),
    ("crisis-de-ansiedad", "El paciente presenta una crisis de ansiedad"),
    ("trastorno-estres-postraumatico", "Fue diagnosticado con trastorno de estrés postraumático"),
    ("terapia-cognitivo-conductual", "La terapia cognitivo-conductual ha mostrado mejoras"),
    ("via-intravenosa-inmediato", "Necesitamos una vía intravenosa de inmediato"),
    ("desfibrilador-despejen-area", "El desfibrilador está listo, despejen el área"),
    ("depresion-clinica-abordaje-integral", "La depresión clínica requiere un abordaje integral"),
    ("riesgo-autolesion-paciente", "Evalúen el riesgo de autolesión del paciente"),
    ("psiquiatra-ajustara-medicacion", "El psiquiatra ajustará la medicación la próxima semana"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Emergency Consultation — Hospital General de México
    ("d1-line1", "Buenas noches, soy la doctora Ramírez. ¿Qué le trae a urgencias esta noche?", "es-MX-DaliaNeural"),
    ("d1-line2", "Doctora, tengo un dolor muy fuerte en el pecho que me baja por el brazo izquierdo.", "es-MX-JorgeNeural"),
    ("d1-line3", "¿Desde cuándo presenta estos síntomas? ¿Es la primera vez?", "es-MX-DaliaNeural"),
    ("d1-line4", "Empezó hace como dos horas. Nunca me había pasado algo así.", "es-MX-JorgeNeural"),
    ("d1-line5", "¿Es usted alérgico a algún medicamento? ¿Toma alguna medicina actualmente?", "es-MX-DaliaNeural"),
    ("d1-line6", "Solo tomo pastillas para la presión. Soy alérgico a la penicilina.", "es-MX-JorgeNeural"),
    ("d1-line7", "Entendido. Enfermera, necesitamos un electrocardiograma de inmediato y vía intravenosa con solución salina.", "es-MX-DaliaNeural"),
    ("d1-line8", "Enseguida, doctora. La presión arterial está en 160 sobre 100. Ritmo cardíaco a 110.", "es-CO-SalomeNeural"),
    ("d1-line9", "Señor, vamos a hacerle unos análisis de sangre y mantenerlo en observación. No se preocupe, está en buenas manos.", "es-MX-DaliaNeural"),
    ("d1-line10", "Gracias, doctora. ¿Cree que es algo grave?", "es-MX-JorgeNeural"),
    ("d1-line11", "Necesitamos descartar un evento cardíaco. Los resultados nos dirán más. Por ahora, descanse y respire con calma.", "es-MX-DaliaNeural"),
    ("d1-line12", "Doctora, el electrocardiograma muestra elevación del segmento ST.", "es-CO-SalomeNeural"),
    ("d1-line13", "Confirmo. Preparen al paciente para cateterismo de urgencia. Avisen a cardiología.", "es-MX-DaliaNeural"),
    ("d1-line14", "¿Qué significa eso, doctora?", "es-MX-JorgeNeural"),
    ("d1-line15", "Indica que una arteria del corazón puede estar bloqueada. Vamos a actuar rápido para proteger su corazón. ¿Tiene algún familiar al que podamos llamar?", "es-MX-DaliaNeural"),
    # Dialogue 2: Mental Health Session — Buenos Aires
    ("d2-line1", "Bienvenida, Camila. ¿Cómo te sentiste esta semana desde nuestra última sesión?", "es-AR-ElenaNeural"),
    ("d2-line2", "Tuve varios ataques de ansiedad. Sobre todo por las noches, cuando no puedo dormir.", "es-AR-TomasNeural"),
    ("d2-line3", "¿Podés describir qué sentís físicamente durante esos episodios?", "es-AR-ElenaNeural"),
    ("d2-line4", "Se me acelera el corazón, me tiemblan las manos y siento que no puedo respirar.", "es-AR-TomasNeural"),
    ("d2-line5", "Esos son síntomas clásicos de una crisis de ansiedad. ¿Pudiste usar la técnica de respiración que practicamos?", "es-AR-ElenaNeural"),
    ("d2-line6", "Lo intenté, pero a veces el miedo es tan fuerte que no puedo concentrarme en nada.", "es-AR-TomasNeural"),
    ("d2-line7", "Es completamente válido. La terapia cognitivo-conductual nos enseña a identificar los pensamientos que disparan esa ansiedad.", "es-AR-ElenaNeural"),
    ("d2-line8", "¿Como cuáles pensamientos?", "es-AR-TomasNeural"),
    ("d2-line9", "Por ejemplo, pensamientos catastróficos como algo terrible va a pasar. Vamos a trabajar en reemplazarlos con pensamientos más realistas.", "es-AR-ElenaNeural"),
    ("d2-line10", "¿Y sobre la medicación? El psiquiatra me recetó sertralina pero me da miedo tomarla.", "es-AR-TomasNeural"),
    ("d2-line11", "Los efectos secundarios iniciales son leves y temporales. La combinación de terapia y medicación tiene la mejor evidencia científica para el trastorno de ansiedad.", "es-AR-ElenaNeural"),
    ("d2-line12", "Está bien. Voy a confiar en el proceso. ¿Cuándo es la próxima cita?", "es-AR-TomasNeural"),
    ("d2-line13", "La semana que viene, misma hora. Y recordá: si tenés una crisis fuera del horario, podés llamar a la línea de crisis las 24 horas.", "es-AR-ElenaNeural"),
    ("d2-line14", "Gracias, licenciada. Me hace bien hablar de esto.", "es-AR-TomasNeural"),
    ("d2-line15", "Para eso estamos. El primer paso siempre es el más difícil, y vos ya lo diste.", "es-AR-ElenaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.1...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
