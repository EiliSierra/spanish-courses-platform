"""Generate all audio files for L5.5 Professional Spanish using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.5\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Email Conventions (12)
    ("estimado-senor-garcia", "Estimado/a señor/a García:"),
    ("le-escribo-para-informarle", "Le escribo para informarle sobre el estado del proyecto"),
    ("adjunto-encontrara-informe", "Adjunto encontrará el informe trimestral"),
    ("quedo-a-su-disposicion", "Quedo a su disposición para cualquier consulta"),
    ("atentamente-recursos-humanos", "Atentamente, Departamento de Recursos Humanos"),
    ("por-la-presente-comunico", "Por la presente, le comunico que su solicitud ha sido aprobada"),
    ("en-relacion-con-correo", "En relación con su correo del pasado martes"),
    ("le-agradezco-de-antemano", "Le agradezco de antemano su pronta respuesta"),
    ("sin-otro-particular", "Sin otro particular, le saluda cordialmente"),
    ("acuso-recibo-mensaje", "Acuso recibo de su mensaje y procederé a revisarlo"),
    ("lamento-informarle-plazo", "Lamento informarle que no será posible cumplir con el plazo"),
    ("quedo-en-espera-comentarios", "Quedo en espera de sus comentarios al respecto"),
    # Meeting Language (12)
    ("propongo-que-revisemos", "Propongo que revisemos los resultados del último trimestre"),
    ("tomemos-en-cuenta", "Tomemos en cuenta las opiniones de todos los departamentos"),
    ("orden-del-dia-incluye", "El orden del día incluye tres puntos principales"),
    ("pasemos-al-siguiente-punto", "Pasemos al siguiente punto de la agenda"),
    ("alguien-tiene-algo-que-agregar", "¿Alguien tiene algo que agregar antes de continuar?"),
    ("hacer-hincapie-presupuesto", "Quiero hacer hincapié en la importancia del presupuesto"),
    ("sugiero-formemos-comite", "Sugiero que formemos un comité para evaluar las opciones"),
    ("estoy-de-acuerdo-directora", "Estoy de acuerdo con lo que ha planteado la directora"),
    ("solicitar-prorroga", "Me gustaría solicitar una prórroga de dos semanas"),
    ("levantemos-acta-acuerdos", "Levantemos acta de los acuerdos alcanzados hoy"),
    ("alguna-pregunta-pendiente", "Antes de cerrar, ¿hay alguna pregunta pendiente?"),
    ("quedamos-en-reunirnos", "Quedamos en reunirnos la próxima semana para dar seguimiento"),
    # Negotiation Phrases (12)
    ("dispuestos-a-negociar", "Estamos dispuestos a negociar los términos del contrato"),
    ("propuesta-incluye-descuento", "Nuestra propuesta incluye un descuento del quince por ciento"),
    ("llegar-a-un-acuerdo", "Necesitamos llegar a un acuerdo antes del viernes"),
    ("condiciones-aceptables", "¿Qué condiciones serían aceptables para su empresa?"),
    ("plazo-de-pago-treinta", "Podemos ofrecer un plazo de pago de treinta días"),
    ("oferta-mutuamente-beneficiosa", "Consideramos que esta oferta es mutuamente beneficiosa"),
    ("no-podemos-aceptar", "Lamentablemente, no podemos aceptar esas condiciones"),
    ("punto-intermedio", "Propongo un punto intermedio que satisfaga a ambas partes"),
    ("comprometemos-cumplir-plazos", "Nos comprometemos a cumplir con los plazos establecidos"),
    ("revisar-clausula-exclusividad", "¿Estarían de acuerdo en revisar la cláusula de exclusividad?"),
    ("aceptan-firmar-hoy", "Si aceptan estas condiciones, podemos firmar hoy mismo"),
    ("consultar-equipo-respuesta", "Necesito consultar con mi equipo antes de dar una respuesta definitiva"),
    # Presentation Delivery (12)
    ("en-primer-lugar-agradecer", "En primer lugar, me gustaría agradecer su presencia hoy"),
    ("a-continuacion-resultados", "A continuación, les presentaré los resultados de la investigación"),
    ("como-pueden-observar", "Como pueden observar en esta gráfica, las ventas aumentaron un veinte por ciento"),
    ("datos-muestran-tendencia", "Los datos muestran que la tendencia es claramente positiva"),
    ("en-resumen-tres-pilares", "En resumen, los tres pilares de nuestra estrategia son innovación, sostenibilidad y crecimiento"),
    ("para-concluir-logros", "Para concluir, quiero destacar los logros más significativos"),
    ("permitanme-compartir-datos", "Permítanme compartir algunos datos relevantes"),
    ("importante-senalar-resultados", "Es importante señalar que estos resultados superaron nuestras expectativas"),
    ("siguiente-diapositiva", "Si me permiten, pasaré a la siguiente diapositiva"),
    ("turno-preguntas-respuestas", "Quisiera abrir el turno de preguntas y respuestas"),
    ("tema-central-presentacion", "Esto nos lleva al tema central de la presentación de hoy"),
    ("gracias-atencion-preguntas", "Muchas gracias por su atención. Estoy abierto/a a preguntas"),
]

DIALOGUE_LINES = [
    # D1: Quarterly Review Meeting — Ciudad de Panamá (Colombian voices as closest for Panama)
    ("d1-line1", "Buenos días a todos. Gracias por asistir. El orden del día incluye tres puntos: resultados del trimestre, presupuesto del próximo año y nuevas contrataciones.", "es-CO-SalomeNeural"),
    ("d1-line2", "Buenos días, directora. Antes de empezar, quisiera solicitar que agreguemos un punto sobre la capacitación del personal.", "es-CO-GonzaloNeural"),
    ("d1-line3", "Por supuesto. Lo incluiremos al final. Pasemos al primer punto. Lic. Mendoza, ¿nos puede presentar los resultados?", "es-CO-SalomeNeural"),
    ("d1-line4", "Con gusto. Como pueden observar en esta gráfica, las ventas del trimestre aumentaron un quince por ciento con respecto al año anterior.", "es-CO-GonzaloNeural"),
    ("d1-line5", "Excelente. ¿Qué factores contribuyeron a este crecimiento?", "es-CO-SalomeNeural"),
    ("d1-line6", "Los datos muestran que la expansión al mercado centroamericano fue el factor principal. También la campaña de marketing digital tuvo un impacto significativo.", "es-CO-GonzaloNeural"),
    ("d1-line7", "Propongo que destinemos parte del presupuesto a fortalecer esa campaña. Los resultados lo justifican.", "es-CO-GonzaloNeural"),
    ("d1-line8", "Estoy de acuerdo. Sugiero que formemos un comité para evaluar las opciones de inversión. ¿Alguien tiene algo que agregar?", "es-CO-SalomeNeural"),
    ("d1-line9", "Solo quiero hacer hincapié en que necesitamos los datos actualizados para la próxima reunión.", "es-CO-GonzaloNeural"),
    ("d1-line10", "Perfecto. Levantemos acta de los acuerdos. Quedamos en reunirnos la próxima semana para dar seguimiento.", "es-CO-SalomeNeural"),
    # D2: Contract Negotiation — Barcelona (Spanish voices)
    ("d2-line1", "Bienvenida, Sra. Reyes. Hemos revisado su propuesta con mucho interés. Sin embargo, hay algunos puntos que nos gustaría negociar.", "es-ES-AlvaroNeural"),
    ("d2-line2", "Por supuesto, Sr. Vila. Estamos dispuestos a negociar los términos. ¿Cuáles son sus inquietudes principales?", "es-ES-ElviraNeural"),
    ("d2-line3", "En primer lugar, el plazo de entrega de seis meses nos parece demasiado largo. Necesitaríamos acortarlo a cuatro meses.", "es-ES-AlvaroNeural"),
    ("d2-line4", "Entiendo su posición. Lamentablemente, cuatro meses no sería viable para la fase de desarrollo. Propongo un punto intermedio: cinco meses con un entregable parcial al tercer mes.", "es-ES-ElviraNeural"),
    ("d2-line5", "Eso podría funcionar. Segundo, ¿estarían de acuerdo en incluir una cláusula de exclusividad para el mercado europeo?", "es-ES-AlvaroNeural"),
    ("d2-line6", "Necesito consultar con mi equipo antes de dar una respuesta definitiva sobre la exclusividad. Lo que sí podemos ofrecer es prioridad en el servicio posventa.", "es-ES-ElviraNeural"),
    ("d2-line7", "¿Y en cuanto al precio? Nuestra propuesta incluye un descuento del diez por ciento si firmamos antes de fin de mes.", "es-ES-AlvaroNeural"),
    ("d2-line8", "Consideramos que esa oferta es mutuamente beneficiosa. Si aceptan el plazo de cinco meses con el entregable parcial, podemos confirmar el descuento hoy mismo.", "es-ES-ElviraNeural"),
    ("d2-line9", "Me parece justo. Nos comprometemos a cumplir con los plazos establecidos por nuestra parte. ¿Procedemos a firmar?", "es-ES-AlvaroNeural"),
    ("d2-line10", "Perfecto. Le agradezco su flexibilidad, Sr. Vila. Ha sido un placer negociar con ustedes.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.5...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
