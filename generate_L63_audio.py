"""Generate all audio files for L6.3 Legal & Bureaucratic Spanish using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.3\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Legal Terminology (12)
    ("el-demandante-presento-las-pruebas", "El demandante presentó las pruebas ante el tribunal"),
    ("el-demandado-nego-las-acusaciones", "El demandado negó todas las acusaciones"),
    ("la-sentencia-fue-dictada", "La sentencia fue dictada por unanimidad"),
    ("el-fallo-del-juez", "El fallo del juez es inapelable"),
    ("interponer-una-demanda-civil", "Vamos a interponer una demanda civil"),
    ("recurso-de-apelacion", "Se presentó un recurso de apelación"),
    ("la-jurisprudencia-establece", "La jurisprudencia establece un precedente claro"),
    ("el-codigo-civil-regula", "El código civil regula las relaciones entre particulares"),
    ("la-prescripcion-del-delito", "La prescripción del delito opera a los cinco años"),
    ("el-desistimiento-de-la-causa", "El abogado solicitó el desistimiento de la causa"),
    ("el-perito-presento-informe", "El perito presentó su informe ante el juzgado"),
    ("nulidad-del-procedimiento", "Se declaró la nulidad del procedimiento"),
    # Contracts & Documents (12)
    ("las-partes-contratantes-acuerdan", "Las partes contratantes acuerdan lo siguiente"),
    ("en-virtud-de-lo-establecido", "En virtud de lo establecido en la ley"),
    ("por-medio-de-la-presente", "Por medio de la presente se hace constar"),
    ("quedan-estipuladas-las-clausulas", "Quedan estipuladas las siguientes cláusulas"),
    ("caracter-retroactivo", "Esta disposición tiene carácter retroactivo"),
    ("de-comun-acuerdo", "El contrato se rescinde de común acuerdo"),
    ("el-otorgante-firma", "El otorgante firma en presencia de dos testigos"),
    ("copia-certificada-del-documento", "Se adjunta copia certificada del documento"),
    ("contrato-entrara-en-vigor", "El contrato entrará en vigor a partir de la fecha"),
    ("ambas-partes-se-obligan", "Ambas partes se obligan al cumplimiento íntegro"),
    ("clausula-de-confidencialidad", "La cláusula de confidencialidad protege la información"),
    ("el-arrendatario-se-compromete", "El arrendatario se compromete a mantener el inmueble"),
    # Bureaucratic Procedures (12)
    ("tramitar-un-permiso-de-residencia", "Necesito tramitar un permiso de residencia"),
    ("solicitar-una-prorroga", "Voy a solicitar una prórroga del plazo"),
    ("presentar-declaracion-jurada", "Debe presentar una declaración jurada"),
    ("el-sello-oficial", "El documento requiere el sello oficial"),
    ("acta-notarial-firmada", "El acta notarial debe estar debidamente firmada"),
    ("firma-autenticada-notario", "Se requiere la firma autenticada por un notario"),
    ("plazo-de-vigencia-pasaporte", "El plazo de vigencia del pasaporte es de diez años"),
    ("renovar-registro-vencimiento", "Hay que renovar el registro antes del vencimiento"),
    ("acudir-ventanilla-tres", "Debe acudir a la ventanilla número tres"),
    ("sacar-turno-para-ser-atendido", "Necesita sacar un turno para ser atendido"),
    ("tramite-tarda-dias-habiles", "El trámite tarda entre tres y cinco días hábiles"),
    ("adjuntar-fotografias-pasaporte", "Debe adjuntar dos fotografías tamaño pasaporte"),
    # Rights & Obligations (12)
    ("tiene-derecho-a-un-abogado", "Usted tiene derecho a un abogado defensor"),
    ("queda-obligado-a-pagar", "El empleador queda obligado a pagar las prestaciones"),
    ("en-cumplimiento-de-la-normativa", "En cumplimiento de la normativa vigente"),
    ("conforme-a-la-ley", "Conforme a la ley, se garantizan los derechos laborales"),
    ("sin-perjuicio-de-las-acciones", "Sin perjuicio de las acciones legales correspondientes"),
    ("en-caso-de-incumplimiento", "En caso de incumplimiento se aplicarán sanciones"),
    ("a-efectos-legales", "A efectos legales, este documento tiene plena validez"),
    ("derecho-tutela-judicial", "El ciudadano tiene derecho a la tutela judicial efectiva"),
    ("prohibida-discriminacion", "Queda prohibida toda forma de discriminación"),
    ("inquilino-sujeto-condiciones", "El inquilino está sujeto a las condiciones del contrato"),
    ("responder-danos-y-perjuicios", "La empresa responderá por los daños y perjuicios"),
    ("derecho-vacaciones-remuneradas", "Todo trabajador tiene derecho a vacaciones remuneradas"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Lawyer-Client — Mexico City (es-MX voices)
    ("d1-line1", "Buenos dias, senor Gutierrez. He revisado su caso. El arrendador le esta exigiendo el pago de tres meses de renta atrasada.", "es-MX-DaliaNeural"),
    ("d1-line2", "Pero licenciada, yo pague todos los meses. Tengo los recibos en mi cuenta bancaria.", "es-MX-JorgeNeural"),
    ("d1-line3", "Perfecto. Esos comprobantes de pago son evidencia clave. Conforme a la ley, el arrendador tiene la carga de la prueba.", "es-MX-DaliaNeural"),
    ("d1-line4", "Y que pasa con la clausula que dice que puede rescindir el contrato?", "es-MX-JorgeNeural"),
    ("d1-line5", "Esa clausula solo aplica en caso de incumplimiento comprobado. Sin perjuicio de eso, usted tiene derecho a impugnar la rescision.", "es-MX-DaliaNeural"),
    ("d1-line6", "Entonces, que me recomienda hacer?", "es-MX-JorgeNeural"),
    ("d1-line7", "Primero, vamos a presentar una contestacion formal ante el juzgado. Adjuntaremos los comprobantes de pago como prueba documental.", "es-MX-DaliaNeural"),
    ("d1-line8", "Y si el juez falla en mi contra?", "es-MX-JorgeNeural"),
    ("d1-line9", "En ese caso, interpondriamos un recurso de apelacion. Pero con las pruebas que tenemos, estoy confiada en que el fallo sera favorable.", "es-MX-DaliaNeural"),
    ("d1-line10", "Muchas gracias, licenciada. Me siento mas tranquilo sabiendo mis derechos.", "es-MX-JorgeNeural"),
    ("d1-line11", "Para eso estamos. Le preparare el escrito y lo revisamos la proxima semana. No se preocupe, la ley lo protege.", "es-MX-DaliaNeural"),
    ("d1-line12", "Entendido. Una ultima pregunta: el plazo de prescripcion para este tipo de demanda, cuanto es?", "es-MX-JorgeNeural"),
    ("d1-line13", "Para controversias de arrendamiento, el plazo es de dos anos conforme al codigo civil. Estamos dentro del plazo, asi que no hay problema.", "es-MX-DaliaNeural"),
    ("d1-line14", "Perfecto. Cuento con usted, licenciada. Nos vemos la proxima semana.", "es-MX-JorgeNeural"),
    ("d1-line15", "Asi es. Traiga todos los recibos originales y una copia de su contrato de arrendamiento. Buenas tardes.", "es-MX-DaliaNeural"),
    # Dialogue 2: Immigration Office — Madrid (es-ES voices)
    ("d2-line1", "Siguiente. Buenos dias. Digame, que tramite necesita realizar?", "es-ES-ElviraNeural"),
    ("d2-line2", "Buenos dias. Necesito solicitar una prorroga de mi permiso de residencia. Vence el mes que viene.", "es-ES-AlvaroNeural"),
    ("d2-line3", "De acuerdo. Tiene que presentar el formulario EX-02 cumplimentado, dos fotografias tamano pasaporte y una copia de su pasaporte vigente.", "es-ES-ElviraNeural"),
    ("d2-line4", "Aqui tengo todo. Tambien traje mi contrato de trabajo y los ultimos tres recibos de nomina, por si acaso.", "es-ES-AlvaroNeural"),
    ("d2-line5", "Bien hecho. Esos documentos son necesarios para acreditar medios economicos suficientes. Dejeme verificar que todo esta en orden.", "es-ES-ElviraNeural"),
    ("d2-line6", "Disculpe, necesito que los documentos lleven algun sello oficial?", "es-ES-AlvaroNeural"),
    ("d2-line7", "El contrato de trabajo debe estar firmado por ambas partes. No necesita sello notarial, pero si necesita el certificado de empadronamiento actualizado.", "es-ES-ElviraNeural"),
    ("d2-line8", "Lo tengo aqui. Lo saque hace una semana en el ayuntamiento.", "es-ES-AlvaroNeural"),
    ("d2-line9", "Perfecto, esta dentro del plazo de vigencia de tres meses. Todo parece correcto. El tramite tardara aproximadamente cuarenta y cinco dias habiles.", "es-ES-ElviraNeural"),
    ("d2-line10", "Y si mi permiso vence antes de que salga la resolucion?", "es-ES-AlvaroNeural"),
    ("d2-line11", "No se preocupe. Al presentar la solicitud dentro del plazo, queda prorrogado automaticamente hasta que se dicte la resolucion. Aqui tiene su resguardo.", "es-ES-ElviraNeural"),
    ("d2-line12", "Muchas gracias. Una duda mas: si me deniegan la prorroga, puedo recurrir?", "es-ES-AlvaroNeural"),
    ("d2-line13", "Si, tiene derecho a presentar un recurso de reposicion en el plazo de un mes, o un recurso contencioso-administrativo en dos meses. Todo viene explicado en la notificacion.", "es-ES-ElviraNeural"),
    ("d2-line14", "Entendido. Muchisimas gracias por toda la informacion. Que tenga buen dia.", "es-ES-AlvaroNeural"),
    ("d2-line15", "De nada. Siguiente, por favor.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.3...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
