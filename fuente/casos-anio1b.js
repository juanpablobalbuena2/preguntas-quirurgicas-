// Primer año, puntos 15 a 28. Primera opción = correcta.
// Fuentes externas: ATLS 10.ª ed.; CRASH-2; PROPPR; guías de Bologna 2017 (WSES) de oclusión por bridas; WSES 2020 apendicitis;
// BTS 2023 enfermedad pleural; MIST-2; National Tracheostomy Safety Project; TracMan; EUPSA 2022; EAU guías de urología pediátrica;
// ESVS 2022 enfermedad venosa crónica; ASCRS 2018 hemorroides; ACPGBI 2021 urgencias colorrectales; EHS/AHS 2020 circunstancias especiales.
module.exports = [
{
 id: 'trauma-01', tema: 'Manejo inicial del politraumatizado', anio: 1,
 titulo: 'Motociclista hipotenso',
 vineta: 'Varón de 28 años, choque de moto. Llega con vía aérea permeable, frecuencia respiratoria 24, saturación 95 %. Frecuencia cardíaca 130, presión 80/50 mmHg, piel fría. FAST con líquido en el espacio de Morison. Pelvis estable. Glasgow 14.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Shock hemorrágico por sangrado intraabdominal', 'Shock neurogénico por lesión medular', 'Taponamiento cardíaco por contusión', 'Shock séptico por perforación de víscera hueca'],
    explicacion: 'Taquicardia, hipotensión y frialdad con FAST positivo en un traumatizado inestable indican hemorragia intraabdominal. El shock neurogénico cursa con bradicardia y piel caliente.',
    fuente: 'ATLS 10.ª ed.; Hermes: Atención inicial del paciente traumatizado' },
  { tipo: 'Medidas generales', pregunta: '¿Cómo empezás la reanimación?',
    opciones: ['Hasta 1 litro de cristaloide tibio, sangre precoz e hipotensión permisiva', '4 litros de cristaloide antes de transfundir, para restaurar la presión arterial', 'Coloides como primera elección hasta normalizar la presión arterial', 'Esperar el hematocrito para decidir si transfundir'],
    explicacion: 'ATLS 10 indica un bolo inicial de 1 litro de cristaloide tibio en el adulto y transfusión temprana si no responde. El exceso de cristaloides diluye factores y empeora la coagulopatía.',
    fuente: 'ATLS 10.ª ed., shock' },
  { tipo: 'Fármaco', pregunta: '¿Qué antifibrinolítico indicás?',
    opciones: ['Ácido tranexámico dentro de las primeras 3 horas', 'Ácido tranexámico recién a las 8 horas del trauma', 'Vitamina K intravenosa en dosis alta', 'Desmopresina en infusión continua'],
    explicacion: 'En el ensayo CRASH-2, el ácido tranexámico redujo la muerte por sangrado si se administraba dentro de las 3 horas; después de ese plazo no beneficia e incluso puede ser perjudicial.',
    fuente: 'Ensayo CRASH-2' },
  { tipo: 'Dosis', pregunta: '¿Con qué esquema?',
    opciones: ['1 g IV en 10 minutos y luego 1 g en 8 horas', '1 g por vía oral cada 8 horas durante 3 días', '10 g IV en bolo único en la guardia', '100 mg IV en dosis única al ingreso'],
    explicacion: 'El esquema de CRASH-2 es una carga de 1 g en 10 minutos seguida de 1 g en 8 horas.',
    fuente: 'Ensayo CRASH-2' },
  { tipo: 'Conducta quirúrgica', pregunta: 'No responde a la reanimación inicial. ¿Qué hacés?',
    opciones: ['Laparotomía de urgencia, con control de daños si hace falta', 'TC de abdomen con contraste para definir la lesión', 'Manejo no operatorio con observación en terapia intensiva', 'Embolización como primera opción en un paciente sin respuesta'],
    explicacion: 'Un paciente inestable con FAST positivo que no responde va directo al quirófano. La TC y el manejo no operatorio son para el paciente estable o que responde.',
    fuente: 'ATLS 10.ª ed.; Hermes: Abdomen abierto y cierre temporal' }
 ]
},
{
 id: 'trauma-02', tema: 'Manejo inicial del politraumatizado', anio: 1,
 titulo: 'Disnea súbita tras un choque',
 vineta: 'Varón de 35 años, choque frontal. Disnea intensa, frecuencia respiratoria 36, saturación 82 %, presión 75/40 mmHg, ingurgitación yugular, desviación traqueal a la izquierda y ausencia de murmullo vesicular en el hemitórax derecho.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Neumotórax a tensión derecho', 'Hemotórax masivo izquierdo', 'Taponamiento cardíaco agudo', 'Contusión pulmonar bilateral'],
    explicacion: 'Hipotensión, yugulares ingurgitadas, tráquea desviada al lado contrario y ausencia de murmullo del lado afectado son un neumotórax a tensión, un diagnóstico clínico.',
    fuente: 'ATLS 10.ª ed., trauma torácico' },
  { tipo: 'Estudios', pregunta: '¿Pedís una radiografía de tórax antes de tratar?',
    opciones: ['No: se descomprime de inmediato', 'Sí, para confirmar el lado afectado', 'Sí, una TC de tórax sin contraste', 'Sí, una ecografía formal por radiología'],
    explicacion: 'El neumotórax a tensión se trata antes de cualquier imagen; esperar una radiografía puede llevar al paro.',
    fuente: 'ATLS 10.ª ed., trauma torácico' },
  { tipo: 'Técnica', pregunta: '¿Dónde descomprimís con aguja en el adulto?',
    opciones: ['Cuarto o quinto espacio, línea axilar media o anterior', 'Segundo espacio intercostal, línea medioclavicular', 'Séptimo espacio, línea escapular posterior', 'Subxifoideo, dirigido al hombro izquierdo'],
    explicacion: 'ATLS 10 recomienda en el adulto el cuarto o quinto espacio en la línea axilar media o anterior, porque en el segundo espacio la pared suele ser demasiado gruesa para la aguja. Luego se coloca un tubo de tórax.',
    fuente: 'ATLS 10.ª ed., trauma torácico' },
  { tipo: 'Técnica', pregunta: '¿Dónde colocás el tubo de tórax definitivo?',
    opciones: ['Triángulo de seguridad, por encima del borde superior de la costilla', 'Segundo espacio anterior, por debajo del borde inferior de la costilla', 'Por debajo del octavo espacio intercostal, en la línea escapular', 'En el espacio donde se palpe más enfisema subcutáneo de la pared'],
    explicacion: 'El triángulo de seguridad (borde del pectoral mayor, borde del dorsal ancho y quinto espacio) evita la mama, los músculos grandes y el diafragma. Entrar por encima de la costilla evita el paquete vasculonervioso.',
    fuente: 'ATLS 10.ª ed.; Hermes: Trauma torácico' }
 ]
},
{
 id: 'trauma-03', tema: 'Manejo inicial del politraumatizado', anio: 1,
 titulo: 'Hemotórax después de una puñalada',
 vineta: 'Varón de 24 años con herida de arma blanca en el hemitórax izquierdo, lateral. Hemodinámicamente estable. Radiografía: hemotórax izquierdo. Colocás un tubo de tórax y drena 1700 ml de sangre de inmediato.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Cómo lo clasificás?',
    opciones: ['Hemotórax masivo', 'Hemotórax pequeño', 'Derrame pleural paraneumónico', 'Neumotórax simple'],
    explicacion: 'Un drenaje inicial de 1500 ml o más, o un tercio de la volemia, define el hemotórax masivo.',
    fuente: 'ATLS 10.ª ed., trauma torácico' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Toracotomía de urgencia en quirófano', 'Segundo tubo de tórax de mayor calibre', 'Observación con control del débito', 'Fibrinolíticos intrapleurales'],
    explicacion: 'Un drenaje inmediato de 1500 ml o más, o más de 200 ml/h durante 2 a 4 horas, o la necesidad persistente de transfusión indican toracotomía.',
    fuente: 'ATLS 10.ª ed., trauma torácico' },
  { tipo: 'Medidas generales', pregunta: 'Si el drenaje hubiera sido de 400 ml y luego mínimo, ¿qué harías con el tubo?',
    opciones: ['Mantenerlo hasta la reexpansión y buscar hemotórax retenido', 'Retirarlo a las 2 horas si el débito es bajo', 'Clamparlo en forma permanente para favorecer la hemostasia del parénquima', 'Recambiarlo cada 24 horas para evitar la infección'],
    explicacion: 'Un hemotórax no masivo se maneja con el tubo hasta la reexpansión. Si queda un hemotórax retenido, la videotoracoscopia temprana reduce el empiema y el fibrotórax.',
    fuente: 'ATLS 10.ª ed.; Hermes: Trauma torácico' }
 ]
},
{
 id: 'aa-01', tema: 'Abdomen agudo', anio: 1,
 titulo: 'Vómitos y distensión con cicatriz previa',
 vineta: 'Mujer de 60 años con histerectomía hace 10 años. Dolor cólico, vómitos y ausencia de gases desde hace 24 horas. Abdomen distendido, timpánico, sin defensa ni peritonismo. Afebril. Lactato normal. TC: asas de delgado dilatadas con cambio de calibre, sin signos de isquemia ni asa cerrada.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Oclusión de delgado por bridas, sin estrangulación', 'Íleo paralítico por trastorno electrolítico', 'Vólvulo de sigmoides con asa cerrada', 'Pseudoobstrucción colónica aguda (Ogilvie)'],
    explicacion: 'Cirugía abdominal previa, vómitos y distensión con cambio de calibre en la TC indican oclusión por bridas. Sin peritonismo, fiebre, lactato elevado ni signos tomográficos de isquemia, se puede intentar manejo no operatorio.',
    fuente: 'Guías de Bologna 2017 (WSES); Hermes: Oclusión por bridas' },
  { tipo: 'Medidas generales', pregunta: '¿Qué manejo inicial indicás?',
    opciones: ['Ayuno, sonda nasogástrica, hidratación IV y electrolitos', 'Laxantes osmóticos y dieta líquida para movilizar el tránsito', 'Cirugía inmediata para liberar las bridas', 'Proquinéticos IV y movilización precoz'],
    explicacion: 'El manejo no operatorio consiste en descompresión con sonda nasogástrica, reposición de líquidos y electrolitos y vigilancia clínica estrecha.',
    fuente: 'Guías de Bologna 2017 (WSES)' },
  { tipo: 'Fármaco', pregunta: '¿Qué estudio terapéutico agregás?',
    opciones: ['Contraste hidrosoluble por la sonda y radiografía a las 24 horas', 'Bario por vía oral y radiografías seriadas cada 6 horas', 'Enema de bario para descartar una obstrucción colónica asociada', 'Neostigmina 2 mg IV con monitoreo cardíaco continuo'],
    explicacion: 'El contraste hidrosoluble predice la resolución si llega al colon en 24 horas y reduce la necesidad de cirugía y la estancia. El bario está contraindicado por riesgo de peritonitis si hay perforación.',
    fuente: 'Guías de Bologna 2017 (WSES)' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Hasta cuándo esperás?',
    opciones: ['Hasta 72 horas, o antes si aparecen signos de isquemia', 'Hasta 10 días, mientras la sonda siga drenando', 'Hasta 6 horas, y si no resolvió, cirugía exploradora', 'Hasta que la paciente acepte la cirugía por el malestar'],
    explicacion: 'Si no resuelve en 72 horas, o aparecen fiebre, peritonismo, leucocitosis o lactato en aumento, está indicada la cirugía. Prolongar el manejo conservador aumenta la morbimortalidad.',
    fuente: 'Guías de Bologna 2017 (WSES)' }
 ]
},
{
 id: 'aa-02', tema: 'Abdomen agudo', anio: 1,
 titulo: 'Neumoperitoneo con dolor epigástrico súbito',
 vineta: 'Varón de 50 años, fumador, consumidor de AINE. Dolor epigástrico súbito e intenso de 6 horas que se generalizó, abdomen en tabla. Radiografía de tórax de pie: neumoperitoneo. Presión 105/70 mmHg, frecuencia 110.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Cuál es el diagnóstico más probable?',
    opciones: ['Úlcera péptica perforada', 'Pancreatitis aguda', 'Cólico renal', 'Infarto agudo de miocardio'],
    explicacion: 'Dolor epigástrico súbito con abdomen en tabla y neumoperitoneo en un consumidor de AINE es una úlcera perforada hasta que se demuestre otra cosa.',
    fuente: 'Hermes: Complicaciones de la úlcera gastroduodenal' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medidas iniciales indicás?',
    opciones: ['Reanimación, sonda, IBP IV, antibióticos y cirugía urgente', 'Antiácidos orales, analgesia y alta con control ambulatorio', 'Observación 24 horas con sonda y repetir la radiografía', 'Endoscopia diagnóstica urgente para localizar la úlcera'],
    explicacion: 'Con peritonitis difusa se reanima, se descomprime, se inician inhibidor de la bomba de protones IV y antibióticos, y se opera sin demora. La endoscopia está contraindicada con perforación.',
    fuente: 'WSES 2020, úlcera péptica perforada y sangrante' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué operación indicás para una perforación prepilórica de 8 mm?',
    opciones: ['Rafia simple con parche de epiplón y lavado', 'Gastrectomía subtotal con reconstrucción Billroth II', 'Vagotomía troncular y piloroplastia', 'Gastrectomía total con esofagoyeyunostomía'],
    explicacion: 'Para perforaciones menores de 2 cm, la rafia con epiploplastia es suficiente; la cirugía ácido reductora ya no se indica de rutina. Se toma biopsia si hay sospecha de malignidad (sobre todo en úlceras gástricas).',
    fuente: 'WSES 2020, úlcera péptica perforada y sangrante' },
  { tipo: 'Fármaco', pregunta: '¿Qué indicás después para evitar la recidiva?',
    opciones: ['Erradicar H. pylori, inhibidor de bomba y suspender AINE y tabaco', 'Antiácidos a demanda y continuar los AINE a la menor dosis posible', 'Corticoides en dosis bajas para cicatrizar la mucosa', 'No hace falta tratamiento médico después de la rafia'],
    explicacion: 'La erradicación del Helicobacter pylori, el inhibidor de bomba y la suspensión de AINE y tabaco previenen la recidiva y hacen innecesaria la cirugía ácido reductora.',
    fuente: 'WSES 2020, úlcera péptica perforada y sangrante' }
 ]
},
{
 id: 'pleura-01', tema: 'Manejo del espacio pleural', anio: 1,
 titulo: 'Neumotórax en un joven alto',
 vineta: 'Varón de 22 años, alto y delgado, fumador, sin enfermedad pulmonar. Dolor pleurítico izquierdo desde ayer con disnea leve. Saturación 97 %, estable. Radiografía: neumotórax izquierdo de 3 cm en el ápice.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Neumotórax espontáneo primario', 'Neumotórax espontáneo secundario', 'Neumotórax a tensión', 'Neumotórax traumático'],
    explicacion: 'Sin enfermedad pulmonar previa, en un joven alto y fumador, es primario. El secundario aparece sobre una enfermedad pulmonar (EPOC, fibrosis) y se maneja de forma más agresiva.',
    fuente: 'BTS 2023, enfermedad pleural' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás si tiene pocos síntomas?',
    opciones: ['Manejo conservador o ambulatorio, según el paciente', 'Tubo de tórax de 28 Fr con aspiración continua', 'Cirugía videotoracoscópica inmediata con pleurodesis', 'Pleurodesis química con talco de entrada'],
    explicacion: 'BTS 2023 considera el manejo conservador en adultos con síntomas mínimos sin importar el tamaño, y el ambulatorio cuando hay buen apoyo y seguimiento. Si no son aptos, aspiración con aguja o drenaje.',
    fuente: 'BTS 2023, enfermedad pleural' },
  { tipo: 'Medidas generales', pregunta: '¿Qué le indicás al alta?',
    opciones: ['Dejar de fumar; no volar hasta la resolución ni bucear sin cirugía', 'Puede viajar en avión al día siguiente del alta', 'Reposo en cama durante un mes y suspender la actividad física y el trabajo', 'Puede bucear al mes si la radiografía es normal'],
    explicacion: 'Fumar aumenta la recurrencia. No se vuela hasta confirmar la resolución y el buceo se desaconseja de por vida salvo pleurectomía bilateral.',
    fuente: 'BTS 2023, enfermedad pleural' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Si tuviera una recurrencia homolateral, ¿qué indicás?',
    opciones: ['Videotoracoscopia con resección de bullas y pleurodesis', 'Otra aspiración y seguimiento con radiografías', 'Toracotomía posterolateral con resección de bullas', 'Oxígeno a alto flujo y observación'],
    explicacion: 'Tras una recurrencia (o en profesiones de riesgo) se indica cirugía definitiva por videotoracoscopia, que reduce la recurrencia a valores bajos.',
    fuente: 'BTS 2023, enfermedad pleural' }
 ]
},
{
 id: 'pleura-02', tema: 'Manejo del espacio pleural', anio: 1,
 titulo: 'Derrame tabicado con fiebre',
 vineta: 'Varón de 60 años con neumonía hace 10 días que persiste febril. Derrame pleural derecho; la punción da líquido turbio con pH 6,9 y glucosa 30 mg/dl. La ecografía muestra tabiques.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Derrame paraneumónico complicado o empiema', 'Derrame paraneumónico simple', 'Trasudado por insuficiencia cardíaca', 'Hemotórax coagulado'],
    explicacion: 'Un pH menor de 7,2, glucosa baja, pus o tabiques definen el derrame complicado o empiema y obligan a drenar.',
    fuente: 'BTS 2023, enfermedad pleural' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Drenaje con tubo de tórax y antibióticos', 'Antibióticos solos durante 6 semanas por vía IV', 'Punciones evacuadoras semanales con antibióticos', 'Decorticación abierta como primera opción'],
    explicacion: 'El derrame complicado necesita drenaje además de antibióticos. La cirugía (videotoracoscopia) se reserva para el fracaso del drenaje y del tratamiento intrapleural.',
    fuente: 'BTS 2023, enfermedad pleural' },
  { tipo: 'Fármaco', pregunta: 'El drenaje es insuficiente por los tabiques. ¿Qué tratamiento intrapleural agregás?',
    opciones: ['Alteplasa más desoxirribonucleasa (DNasa)', 'Estreptoquinasa sola en dosis alta', 'Talco para pleurodesis', 'Solución salina hipertónica en lavado'],
    explicacion: 'En el ensayo MIST-2, la combinación de alteplasa y DNasa mejoró el drenaje radiológico y redujo la necesidad de cirugía; cada fármaco solo no fue eficaz.',
    fuente: 'Ensayo MIST-2 (Rahman, 2011)' },
  { tipo: 'Dosis', pregunta: '¿Con qué esquema?',
    opciones: ['Alteplasa 10 mg más DNasa 5 mg cada 12 horas, 6 dosis', 'Alteplasa 100 mg IV en 2 horas, dosis única', 'Alteplasa 1 mg intrapleural en dosis única', 'DNasa 50 mg intrapleural sola, cada 8 horas durante 7 días'],
    explicacion: 'El esquema de MIST-2 es alteplasa 10 mg y DNasa 5 mg por el tubo, dos veces por día durante 3 días, clampeando 1 hora tras cada dosis.',
    fuente: 'Ensayo MIST-2 (Rahman, 2011)' }
 ]
},
{
 id: 'traq-01', tema: 'Traqueostomías', anio: 1,
 titulo: 'Cánula desplazada al tercer día',
 vineta: 'Paciente con traqueostomía quirúrgica hecha hace 3 días en terapia intensiva. Desaturación súbita, la cánula está fuera del estoma. Tiene vía aérea superior permeable e intubación orotraqueal factible.',
 pasos: [
  { tipo: 'Medidas generales', pregunta: '¿Qué hacés?',
    opciones: ['Oxígeno por boca y estoma; si no recupera, intubación orotraqueal', 'Reintroducir a ciegas una cánula del mismo tamaño por el estoma, con mandril', 'Llamar al cirujano y esperar sin manipular la vía aérea', 'Agrandar el estoma con bisturí para reintroducir la cánula'],
    explicacion: 'Antes de los 7 días el trayecto no está maduro y reintroducir a ciegas puede crear una falsa vía. Se oxigena por la boca y el estoma, y si no alcanza se intuba por boca; el reemplazo se hace con visión.',
    fuente: 'National Tracheostomy Safety Project' },
  { tipo: 'Medidas generales', pregunta: '¿Qué debe haber en la cabecera de todo paciente traqueostomizado?',
    opciones: ['Cánulas de repuesto, aspiración y datos de la vía aérea', 'Un ambú con máscara y un laringoscopio', 'Una jeringa y un tubo endotraqueal número 8', 'Un equipo de tubo de tórax y un set de cricotiroidotomía'],
    explicacion: 'Se recomienda tener cánula de repuesto y una de menor calibre, dilatador, aspiración y un cartel con el tipo de traqueostomía y si la vía aérea superior es intubable.',
    fuente: 'National Tracheostomy Safety Project' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Hacer la traqueostomía temprana (antes de los 4 días de intubación) mejora la mortalidad?',
    opciones: ['No: en el ensayo TracMan no redujo la mortalidad', 'Sí, la reduce a la mitad a 30 días', 'Sí, en los pacientes con más de 7 días de ventilación', 'Sí, pero solo en pacientes quirúrgicos'],
    explicacion: 'En TracMan, la traqueostomía temprana no mejoró la mortalidad a 30 días ni la estancia en terapia; muchos pacientes del grupo tardío nunca la necesitaron.',
    fuente: 'Ensayo TracMan (Young, 2013)' }
 ]
},
{
 id: 'pared-02', tema: 'Pared abdominal y laparotomías', anio: 1,
 titulo: 'Cierre de una laparotomía mediana',
 vineta: 'Terminás una resección de colon electiva por laparotomía mediana de 20 cm en una paciente de 64 años, IMC 29, sin otros factores de riesgo de eventración.',
 pasos: [
  { tipo: 'Técnica', pregunta: '¿Cómo cerrás la aponeurosis?',
    opciones: ['Continua, puntos pequeños, monofilamento de absorción lenta', 'Puntos separados, material trenzado de absorción rápida', 'Continua, puntos grandes a 2 cm del borde, absorción lenta', 'Cierre en masa con nailon y puntos separados cada 2 cm'],
    explicacion: 'La técnica de puntos pequeños (small bites) con sutura continua de absorción lenta, relación largo de sutura y largo de herida de al menos 4:1, reduce la eventración frente a los puntos grandes.',
    fuente: 'Guía EHS/AHS 2022 de cierre de laparotomía; Hermes: Cicatrización y prevención de la hernia incisional' },
  { tipo: 'Dosis', pregunta: '¿Qué relación largo de sutura y largo de herida buscás?',
    opciones: ['Al menos 4:1', 'Cerca de 1:1', 'Cerca de 2:1', 'No más de 3:1'],
    explicacion: 'Una relación de al menos 4:1 se asocia con menos eventración; con puntos pequeños suele superar 5:1.',
    fuente: 'Guía EHS/AHS 2022 de cierre de laparotomía' },
  { tipo: 'Medidas generales', pregunta: '¿Cuándo considerarías malla profiláctica?',
    opciones: ['En alto riesgo (obesidad, aneurisma de aorta), onlay o retromuscular', 'En las laparotomías contaminadas, con malla biológica intraperitoneal', 'En reoperaciones, con malla intraperitoneal de PTFE', 'En pacientes delgados con cierre a tensión, con malla en puente'],
    explicacion: 'La guía EHS/AHS 2022 sugiere considerar malla sintética permanente profiláctica en laparotomías medianas electivas de pacientes de alto riesgo, en posición onlay o retromuscular; no se recomienda intraperitoneal.',
    fuente: 'Guía EHS/AHS 2022 de cierre de laparotomía' }
 ]
},
{
 id: 'apend-01', tema: 'Apendicitis aguda', anio: 1,
 titulo: 'Dolor en fosa ilíaca derecha',
 vineta: 'Varón de 24 años. Dolor periumbilical que migró a la fosa ilíaca derecha hace 18 horas, anorexia, náuseas, temperatura 37,9 °C, defensa en la fosa ilíaca derecha. Leucocitos 14.500/mm³ con neutrofilia. Ecografía: apéndice de 9 mm no compresible, sin colección ni apendicolito.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Cuál es el diagnóstico?',
    opciones: ['Apendicitis aguda no complicada', 'Apendicitis complicada con absceso', 'Linfadenitis mesentérica', 'Ileítis por Crohn'],
    explicacion: 'Migración del dolor, signos inflamatorios y un apéndice mayor de 6 mm no compresible confirman la apendicitis. Sin colección, perforación ni apendicolito, es no complicada.',
    fuente: 'WSES 2020, apendicitis aguda; Hermes: Apendicitis aguda' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué tratamiento indicás?',
    opciones: ['Apendicectomía laparoscópica; antibióticos solos como alternativa', 'Antibióticos solos, sin ofrecer la cirugía por el riesgo anestésico', 'Observación sin antibióticos con ecografía a las 24 horas', 'Apendicectomía por laparotomía mediana exploradora'],
    explicacion: 'La apendicectomía laparoscópica es el tratamiento de elección. En la no complicada sin apendicolito, los antibióticos solos son una alternativa segura en pacientes informados, con recurrencia cercana al 40 % a 5 años.',
    fuente: 'WSES 2020; ensayo APPAC a 5 años' },
  { tipo: 'Fármaco', pregunta: '¿Qué antibiótico indicás alrededor de la cirugía?',
    opciones: ['Una dosis preoperatoria, sin antibióticos posoperatorios', 'Antibióticos IV posoperatorios durante 7 días', 'No indico antibióticos: es una cirugía limpia', 'Antibióticos orales durante 14 días a partir del alta hospitalaria'],
    explicacion: 'En la apendicitis no complicada alcanza la profilaxis preoperatoria; los antibióticos posoperatorios no reducen las complicaciones.',
    fuente: 'WSES 2020, apendicitis aguda' },
  { tipo: 'Técnica', pregunta: '¿Cómo cerrás el muñón apendicular?',
    opciones: ['Ligadura con endoloop o sutura, sin invaginación', 'Ligadura e invaginación en bolsa de tabaco', 'Dejarlo abierto con un drenaje en la fosa ilíaca', 'Engrapadora lineal de rutina en la base'],
    explicacion: 'La ligadura simple es adecuada y la invaginación no aporta beneficio. La engrapadora se reserva para bases inflamadas o anchas.',
    fuente: 'WSES 2020, apendicitis aguda' }
 ]
},
{
 id: 'apend-02', tema: 'Apendicitis aguda', anio: 1,
 titulo: 'Apendicitis perforada',
 vineta: 'Mujer de 38 años con 4 días de dolor en fosa ilíaca derecha, fiebre de 38,8 °C y peritonismo localizado. TC: apéndice perforado con líquido libre y gas extraluminal, sin absceso organizado. Estable.',
 pasos: [
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Apendicectomía laparoscópica urgente y aspiración', 'Antibióticos solos y TC de control a las 72 horas', 'Drenaje percutáneo guiado por TC y antibióticos', 'Antibióticos y apendicectomía diferida a las 8 semanas'],
    explicacion: 'La apendicitis perforada con peritonitis requiere control quirúrgico del foco. El drenaje percutáneo es para el absceso organizado en pacientes seleccionados.',
    fuente: 'WSES 2020, apendicitis aguda' },
  { tipo: 'Técnica', pregunta: '¿Lavado peritoneal abundante?',
    opciones: ['No: se aspira el pus sin lavado de rutina', 'Sí, con 10 litros de solución tibia', 'Sí, con iodopovidona diluida', 'Sí, con antibióticos en el lavado'],
    explicacion: 'El lavado no redujo los abscesos frente a la aspiración sola en la apendicitis complicada.',
    fuente: 'WSES 2020, apendicitis aguda' },
  { tipo: 'Fármaco', pregunta: '¿Qué esquema antibiótico indicás?',
    opciones: ['Ceftriaxona más metronidazol', 'Ampicilina-sulbactam en monoterapia', 'Cefalexina por vía oral durante 10 días', 'Vancomicina IV en monoterapia'],
    explicacion: 'La infección intraabdominal comunitaria se cubre contra enterobacterias y anaerobios, por ejemplo con cefalosporina de tercera generación más metronidazol. Ampicilina-sulbactam no se recomienda por la resistencia de E. coli.',
    fuente: 'SIS/IDSA 2010, infección intraabdominal complicada' },
  { tipo: 'Dosis', pregunta: '¿Qué dosis de metronidazol?',
    opciones: ['500 mg IV cada 8 horas', '50 mg IV cada 24 horas', '2 g IV cada 6 horas', '250 mg VO cada 48 horas'],
    explicacion: 'La dosis IV es 500 mg cada 8 a 12 horas o 1500 mg cada 24 horas.',
    fuente: 'SIS/IDSA 2010, tabla de dosis' },
  { tipo: 'Medidas generales', pregunta: '¿Cuánto dura el antibiótico tras un buen control del foco?',
    opciones: ['De 3 a 5 días', 'De 14 días completos', 'Hasta normalizar los leucocitos', 'Una dosis única'],
    explicacion: 'Con control adecuado del foco, WSES 2020 propone 3 a 5 días; en el ensayo STOP-IT, 4 días fueron tan efectivos como tratamientos más largos.',
    fuente: 'WSES 2020; ensayo STOP-IT' }
 ]
},
{
 id: 'hernia-03', tema: 'Hernia inguinal', anio: 1,
 titulo: 'Bulto inguinal en una mujer',
 vineta: 'Mujer de 52 años con un bulto reducible en la ingle derecha, por debajo de la línea entre la espina ilíaca y el pubis, que molesta al estar de pie.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tenés que descartar especialmente?',
    opciones: ['Hernia crural (femoral)', 'Hidrocele', 'Varicocele', 'Testículo no descendido'],
    explicacion: 'En las mujeres las hernias crurales son proporcionalmente más frecuentes y tienen alto riesgo de estrangulación; se ubican por debajo del ligamento inguinal.',
    fuente: 'Hermes: Hernia inguinal; Hernia crural' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué abordaje preferís?',
    opciones: ['TEP o TAPP, que explora el orificio crural', 'Lichtenstein con malla, como en el varón', 'Observación hasta que aparezca dolor', 'Bassini con refuerzo del ligamento inguinal'],
    explicacion: 'En la mujer se prefiere el abordaje posterior, que permite ver y reparar una hernia crural oculta; tras un Lichtenstein en mujeres, muchas recurrencias son crurales.',
    fuente: 'HerniaSurge; Hermes: Hernia inguinal' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Indicarías espera vigilada?',
    opciones: ['No: en la mujer con sospecha crural se repara', 'Sí, como en el varón con pocos síntomas', 'Sí, hasta que aparezca alguna complicación', 'Sí, con faja y control clínico anual'],
    explicacion: 'La espera vigilada aceptada en varones con pocos síntomas no se extrapola a mujeres, por la frecuencia de hernias crurales y su riesgo de estrangulación.',
    fuente: 'Hermes: Hernia inguinal' }
 ]
},
{
 id: 'umb-01', tema: 'Hernia umbilical y epigástrica', anio: 1,
 titulo: 'Hernia umbilical en un cirrótico',
 vineta: 'Varón de 58 años con cirrosis alcohólica, abstinente, ascitis controlada con diuréticos, MELD 12. Hernia umbilical de 2 cm sintomática, con piel sana.',
 pasos: [
  { tipo: 'Conducta quirúrgica', pregunta: '¿Lo operás en forma programada?',
    opciones: ['Sí, tras optimizar la ascitis, porque el MELD es menor de 15', 'No, por el alto riesgo de descompensación hepática tras la cirugía', 'No, se espera y se opera si se complica', 'Sí, en las próximas horas, sin optimizar'],
    explicacion: 'La reparación electiva es segura en cirróticos con MELD menor de 15 tras optimizar; la urgencia multiplica por siete la mortalidad, y entre 26 % y 37 % de los no operados termina en una reparación urgente.',
    fuente: 'Guía EHS/AHS 2020 de circunstancias especiales; Hermes: Hernia umbilical del adulto' },
  { tipo: 'Técnica', pregunta: '¿Qué técnica indicás?',
    opciones: ['Reparación abierta con malla onlay o preperitoneal', 'Sutura simple con puntos separados', 'Malla intraperitoneal por vía laparoscópica', 'Plicatura de la aponeurosis sin malla'],
    explicacion: 'La sutura recidiva alrededor del 15 % a los 6 meses y la laparoscopia con ascitis aumentó las complicaciones sistémicas y la mortalidad.',
    fuente: 'Guía EHS/AHS 2020 de circunstancias especiales' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medida perioperatoria es clave?',
    opciones: ['Controlar la ascitis antes y después para evitar fuga y recurrencia', 'Suspender los diuréticos una semana antes de la cirugía', 'Dieta hiperproteica sin restricción de sodio para mejorar la cicatrización', 'Paracentesis evacuadora cada día durante un mes'],
    explicacion: 'La ascitis no controlada aumenta la presión sobre la reparación, la fuga de líquido y la infección; se optimiza con el equipo de hepatología.',
    fuente: 'Hermes: Hernia umbilical del adulto' }
 ]
},
{
 id: 'umb-02', tema: 'Hernia umbilical y epigástrica', anio: 1,
 titulo: 'Hernia umbilical en edad fértil',
 vineta: 'Mujer de 30 años con una hernia umbilical de 1,5 cm, reducible y poco sintomática. Planea dos embarazos más.',
 pasos: [
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cuándo la operás?',
    opciones: ['Postergarla hasta después del último embarazo, si es posible', 'Ahora, con malla, antes del próximo embarazo', 'Durante el próximo embarazo, en el segundo trimestre', 'No se opera: se cierra sola después del parto'],
    explicacion: 'Un embarazo posterior aumenta 1,6 veces la recurrencia, y la hernia rara vez se complica durante la gestación. Por eso se sugiere esperar al último embarazo.',
    fuente: 'Guía EHS/AHS 2020 de circunstancias especiales' },
  { tipo: 'Técnica', pregunta: 'Si no pudiera esperar, ¿qué técnica sugiere la guía?',
    opciones: ['Sutura del defecto', 'Malla intraperitoneal', 'Malla retromuscular amplia', 'Separación de componentes'],
    explicacion: 'En mujeres que se van a embarazar, la malla redujo la recurrencia pero casi duplicó el dolor crónico (17,5 % frente a 9,5 %), por lo que se sugiere sutura si la cirugía no puede postergarse.',
    fuente: 'Guía EHS/AHS 2020 de circunstancias especiales' },
  { tipo: 'Medidas generales', pregunta: '¿Qué le indicás mientras espera?',
    opciones: ['Pautas de alarma de incarceración', 'Faja abdominal durante todo el día', 'Reposo relativo y evitar levantar peso', 'Control con ecografía cada 3 meses'],
    explicacion: 'Con hernia reducible se observa, pero la paciente debe consultar ante dolor persistente, irreductibilidad o vómitos.',
    fuente: 'Hermes: Hernia umbilical del adulto' }
 ]
},
{
 id: 'ped-01', tema: 'Hernias y patología genital en niños', anio: 1,
 titulo: 'Bulto inguinal en un lactante',
 vineta: 'Lactante de 4 meses, nacido a término, con un bulto inguinal derecho que aparece al llorar y se reduce solo. Examen normal en reposo; testículos en las bolsas.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Hernia inguinal indirecta', 'Hidrocele no comunicante', 'Testículo retráctil', 'Adenopatía inguinal'],
    explicacion: 'Un bulto intermitente que aumenta con el llanto y se reduce es una hernia indirecta por un proceso vaginal permeable.',
    fuente: 'Hermes: Hernia inguinal en el niño' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Reparación programada pronta', 'Observar hasta los 2 años', 'Braguero hasta el cierre', 'Operar solo si se incarcera'],
    explicacion: 'Toda hernia inguinal pediátrica se repara porque no se cierra sola y el riesgo de incarceración es alto en lactantes (12 % a término, 39 % en prematuros).',
    fuente: 'Guía EUPSA 2022; Hermes: Hernia inguinal en el niño' },
  { tipo: 'Técnica', pregunta: '¿En qué consiste la reparación?',
    opciones: ['Ligadura alta del saco, sin malla', 'Lichtenstein con malla liviana', 'Reparación de Shouldice', 'Malla preperitoneal pequeña'],
    explicacion: 'El defecto es el proceso vaginal permeable: se liga el saco preservando deferente y vasos. No se usa malla. Abierta y laparoscópica tienen resultados similares.',
    fuente: 'Guía EUPSA 2022; Hermes: Hernia inguinal en el niño' }
 ]
},
{
 id: 'ped-02', tema: 'Hernias y patología genital en niños', anio: 1,
 titulo: 'Bolsa escrotal vacía',
 vineta: 'Lactante de 8 meses con el testículo izquierdo no palpable en la bolsa; se palpa en el conducto inguinal y no desciende con maniobras.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Testículo no descendido palpable', 'Testículo retráctil inguinal', 'Hidrocele del cordón', 'Hernia inguinal irreductible'],
    explicacion: 'Un testículo palpable en el conducto que no baja a la bolsa con maniobras es un testículo no descendido; el retráctil puede llevarse a la bolsa y se queda.',
    fuente: 'EAU, guías de urología pediátrica' },
  { tipo: 'Estudios', pregunta: '¿Pedís una ecografía?',
    opciones: ['No: no cambia la conducta', 'Sí, para medir el volumen testicular', 'Sí, y una resonancia de pelvis', 'Sí, junto con un cariotipo'],
    explicacion: 'La imagen no aporta en el testículo palpable y no localiza de forma confiable el no palpable, que se estudia por laparoscopia.',
    fuente: 'EAU, guías de urología pediátrica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cuándo lo operás?',
    opciones: ['Orquidopexia entre los 6 y los 12 meses', 'Orquidopexia a los 5 años, antes de la escuela', 'Orquidopexia en la pubertad', 'Tratamiento hormonal sin cirugía'],
    explicacion: 'La cirugía temprana preserva la fertilidad y facilita el control del riesgo tumoral. El tratamiento hormonal no se recomienda como estándar.',
    fuente: 'EAU, guías de urología pediátrica' }
 ]
},
{
 id: 'ped-03', tema: 'Hernias y patología genital en niños', anio: 1,
 titulo: 'Dolor escrotal súbito en un adolescente',
 vineta: 'Varón de 14 años con dolor escrotal izquierdo súbito e intenso desde hace 3 horas, náuseas. Testículo ascendido, horizontal, reflejo cremastérico ausente.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué sospechás?',
    opciones: ['Torsión testicular', 'Epididimitis', 'Torsión de hidátide', 'Orquitis urliana'],
    explicacion: 'Dolor súbito, testículo alto y horizontal y cremastérico ausente en un adolescente son torsión hasta demostrar lo contrario.',
    fuente: 'Hermes: Torsión testicular' },
  { tipo: 'Estudios', pregunta: '¿Esperás la ecografía Doppler para decidir?',
    opciones: ['No: con alta sospecha se explora de inmediato', 'Sí, para confirmar la falta de flujo', 'Sí, una centellografía testicular', 'Sí, y un urocultivo para descartar epididimitis'],
    explicacion: 'Una ecografía normal no descarta la torsión y la demora reduce la viabilidad, que cae mucho después de las 6 horas. Con sospecha alta, el quirófano no espera la imagen.',
    fuente: 'Hermes: Torsión testicular' },
  { tipo: 'Técnica', pregunta: 'El testículo recupera el color tras destorcerlo. ¿Qué hacés?',
    opciones: ['Orquidopexia de ambos testículos', 'Orquidopexia solo del lado afectado', 'Orquiectomía del lado afectado', 'Destorcer y cerrar sin fijar'],
    explicacion: 'La anomalía de fijación (badajo de campana) suele ser bilateral, por lo que se fijan ambos testículos. Si el testículo no es viable, se extirpa y se fija el contralateral.',
    fuente: 'Hermes: Torsión testicular' }
 ]
},
{
 id: 'var-01', tema: 'Várices de miembros inferiores', anio: 1,
 titulo: 'Várices sintomáticas',
 vineta: 'Mujer de 48 años con pesadez y edema vespertino en la pierna derecha y várices en el territorio de la safena interna. Eco Doppler: reflujo de la unión safenofemoral y de la safena interna en todo el muslo. Sin úlcera.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Cómo la clasificás en CEAP clínica?',
    opciones: ['C2 o C3 (várices, edema)', 'C0 (sin signos visibles)', 'C5 (úlcera cicatrizada)', 'C6 (úlcera venosa activa)'],
    explicacion: 'La clasificación CEAP clínica va de C0 (sin signos) a C6 (úlcera activa): C2 son várices, C3 edema, C4 cambios cutáneos, C5 úlcera cicatrizada.',
    fuente: 'ESVS 2022, enfermedad venosa crónica' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medidas generales indicás?',
    opciones: ['Medias de compresión, actividad física, control de peso y elevación', 'Reposo en cama con las piernas en alto durante el día', 'Calor local y masajes circulares diarios sobre los trayectos varicosos', 'Anticoagulación oral profiláctica y medias durante 3 meses'],
    explicacion: 'La compresión alivia los síntomas y el edema, junto con ejercicio, descenso de peso y elevación. No corrige el reflujo.',
    fuente: 'ESVS 2022, enfermedad venosa crónica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué tratamiento definitivo es de primera elección?',
    opciones: ['Ablación térmica endovenosa de la safena interna', 'Safenectomía con fleboextracción como primera opción', 'Escleroterapia con espuma de la unión safenofemoral como estándar', 'Ligadura del cayado sola'],
    explicacion: 'ESVS 2022 recomienda la ablación térmica endovenosa (láser o radiofrecuencia) sobre la cirugía para la insuficiencia de safena interna, por menor dolor y recuperación más rápida con resultados similares. La cirugía sigue siendo opción donde no hay ablación.',
    fuente: 'ESVS 2022, enfermedad venosa crónica' }
 ]
},
{
 id: 'ano-01', tema: 'Patología anal', anio: 1,
 titulo: 'Sangrado y prolapso al defecar',
 vineta: 'Varón de 45 años con sangrado rojo rutilante al final de la defecación y prolapso que se reduce solo. Constipación crónica. Anoscopia: hemorroides internas de grado II.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué grado tienen y qué más evaluás?',
    opciones: ['Grado II; evaluar colonoscopia según edad y síntomas', 'Grado IV; indicar hemorroidectomía sin más estudios', 'Grado I; repetir la anoscopia en un año', 'Grado III; pedir una TC de abdomen'],
    explicacion: 'Las internas se gradúan de I (no prolapsan) a IV (irreductibles). El sangrado no debe atribuirse a hemorroides sin descartar otras causas según edad y síntomas.',
    fuente: 'ASCRS 2018, hemorroides; Hermes: Enfermedad hemorroidal' },
  { tipo: 'Medidas generales', pregunta: '¿Qué indicás primero?',
    opciones: ['Más fibra y agua, y no pujar ni demorar en el inodoro', 'Hemorroidectomía programada en las próximas semanas, sin otra medida', 'Dieta sin residuos para disminuir el volumen fecal', 'Reposo y baños de asiento con agua fría'],
    explicacion: 'La modificación de la dieta con fibra y líquidos y los hábitos de defecación son la primera línea (recomendación fuerte 1B).',
    fuente: 'ASCRS 2018, hemorroides' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Persisten los síntomas. ¿Qué procedimiento indicás?',
    opciones: ['Ligadura con bandas elásticas en el consultorio', 'Hemorroidectomía de Milligan-Morgan programada', 'Esfinterotomía lateral interna', 'Hemorroidopexia con engrapadora de urgencia'],
    explicacion: 'Para grados I a III que no responden al tratamiento médico, la ligadura elástica es el procedimiento ambulatorio más eficaz. La hemorroidectomía se reserva para grado III y IV o fracaso.',
    fuente: 'ASCRS 2018, hemorroides' }
 ]
},
{
 id: 'ano-02', tema: 'Patología anal', anio: 1,
 titulo: 'Dolor anal con bulto azulado',
 vineta: 'Mujer de 33 años con dolor anal intenso de 36 horas y un nódulo azulado, tenso, en el margen anal.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Hemorroide externa trombosada', 'Absceso perianal superficial', 'Fisura anal aguda con pólipo centinela', 'Prolapso rectal mucoso'],
    explicacion: 'Un nódulo azulado, tenso y doloroso en el margen anal, de aparición brusca, es una trombosis hemorroidal externa.',
    fuente: 'ASCRS 2018, hemorroides' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás con 36 horas de evolución?',
    opciones: ['Escisión del trombo con anestesia local', 'Incisión y drenaje simple del coágulo', 'Ligadura con banda elástica', 'Hemorroidectomía de urgencia de los tres paquetes'],
    explicacion: 'En las primeras 72 horas, la escisión resuelve los síntomas más rápido y recurre menos que la incisión simple. Después, el manejo suele ser médico porque el dolor ya está cediendo.',
    fuente: 'ASCRS 2018, hemorroides; revisión AAFP' },
  { tipo: 'Medidas generales', pregunta: 'Si tuviera 6 días de evolución, ¿qué indicarías?',
    opciones: ['Baños de asiento, analgesia, fibra y ablandadores', 'Escisión urgente del trombo con anestesia local', 'Antibióticos orales y control en 48 horas', 'Reposo en cama y hielo local continuo'],
    explicacion: 'Pasadas las 72 horas la trombosis tiende a resolver sola y se trata en forma conservadora, salvo dolor intenso o necrosis.',
    fuente: 'ASCRS 2018, hemorroides' }
 ]
},
{
 id: 'ano-03', tema: 'Patología anal', anio: 1,
 titulo: 'Tumefacción perianal fluctuante',
 vineta: 'Varón de 35 años sin comorbilidades. Dolor perianal de 3 días, tumefacción fluctuante a las 5 en posición de litotomía, sin celulitis extensa. Afebril, no diabético.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Absceso perianal', 'Hemorroide trombosada', 'Fisura anal', 'Quiste pilonidal'],
    explicacion: 'Dolor y tumefacción fluctuante perianal es un absceso de origen criptoglandular.',
    fuente: 'Hermes: Absceso y fístula anorrectal' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué hacés y cuándo?',
    opciones: ['Drenaje quirúrgico dentro de las 24 horas', 'Antibióticos orales y control en una semana', 'Esperar que fistulice en forma espontánea', 'Punción con aguja fina y cultivo'],
    explicacion: 'El absceso se drena siempre. Sin signos sistémicos ni factores de riesgo de infección necrosante, ACPGBI propone operar dentro de las 24 horas de la decisión.',
    fuente: 'ACPGBI 2021, urgencias colorrectales' },
  { tipo: 'Técnica', pregunta: '¿Cómo lo drenás?',
    opciones: ['Incisión amplia cerca del esfínter, sin buscar el orificio interno', 'Incisión radial alejada del ano y taponaje apretado con gasa durante 48 horas', 'Buscar el orificio interno con estilete y abrir la fístula', 'Drenar y colocar un sedal laxo a través del esfínter'],
    explicacion: 'En el absceso primario no se busca el orificio interno ni se trata la fístula. La incisión va cerca del esfínter para evitar un trayecto largo, y no se tapona de rutina.',
    fuente: 'ACPGBI 2021, urgencias colorrectales' },
  { tipo: 'Fármaco', pregunta: '¿Indicás antibióticos?',
    opciones: ['No, si está bien drenado y sin factores de riesgo', 'Sí, amoxicilina-clavulánico durante 14 días', 'Sí, ciprofloxacina y metronidazol por 7 días', 'Sí, una dosis única de vancomicina en el quirófano'],
    explicacion: 'Los antibióticos y los cultivos tienen poco valor en el absceso no complicado drenado; se reservan para celulitis extensa, inmunosupresión, diabetes o signos sistémicos.',
    fuente: 'ACPGBI 2021, urgencias colorrectales' }
 ]
},
{
 id: 'osto-01', tema: 'Ostomías', anio: 1,
 titulo: 'Colostomía con bordes oscuros',
 vineta: 'Paciente en el día 1 de una operación de Hartmann. La colostomía está oscura en la mucosa visible. Afebril, abdomen blando.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Cómo evaluás la extensión de la isquemia?',
    opciones: ['Tubo iluminado o endoscopio por el estoma, debajo de la fascia', 'TC con contraste endovenoso para buscar neumatosis', 'Esperar a que se desprenda la mucosa y reevaluar en una semana', 'Biopsia de la mucosa oscura y anatomía patológica urgente'],
    explicacion: 'La evaluación clínica y endoscópica es más útil que la TC. Lo que define la conducta es si la isquemia llega por debajo de la fascia.',
    fuente: 'ACPGBI 2021, urgencias colorrectales' },
  { tipo: 'Conducta quirúrgica', pregunta: 'La necrosis se extiende por debajo de la fascia. ¿Qué indicás?',
    opciones: ['Reoperación urgente para rehacer el estoma', 'Observación clínica y nueva evaluación en 48 horas', 'Curaciones locales y bolsa de estoma más grande', 'Antibióticos IV solos y control de la temperatura'],
    explicacion: 'Un estoma no viable por debajo de la fascia puede perforarse dentro del abdomen y causar peritonitis; se reopera para rehacerlo con intestino viable.',
    fuente: 'ACPGBI 2021, urgencias colorrectales' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medida preoperatoria reduce las complicaciones de los estomas programados?',
    opciones: ['Marcación preoperatoria del sitio por estomaterapia', 'Hacer el estoma en la línea media para evitar hernias', 'Ubicarlo en un pliegue cutáneo para disimularlo', 'Decidir el sitio durante la cirugía sin marcar'],
    explicacion: 'Marcar un sitio que el paciente vea y maneje, a través del recto anterior y lejos de pliegues y cicatrices, reduce fugas y complicaciones.',
    fuente: 'Hermes: Complicaciones de ostomías' }
 ]
},
{
 id: 'osto-02', tema: 'Ostomías', anio: 1,
 titulo: 'Ileostomía de alto débito',
 vineta: 'Paciente con ileostomía en asa hace 5 días tras una resección anterior baja. Débito de 2200 ml/día, sed, creatinina en aumento.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Ileostomía de alto débito con deshidratación', 'Fuga anastomótica con colección pélvica infectada', 'Íleo posoperatorio prolongado', 'Obstrucción del estoma por edema'],
    explicacion: 'Un débito mayor de 1,5 a 2 litros por día con signos de deshidratación y caída de la función renal es una ileostomía de alto débito, causa frecuente de reinternación.',
    fuente: 'Hermes: Ileostomía' },
  { tipo: 'Medidas generales', pregunta: '¿Qué indicación de líquidos es correcta?',
    opciones: ['Restringir líquidos hipotónicos y dar rehidratación oral con sodio', 'Tomar abundante agua y té, al menos 3 litros por día, para reponer', 'Jugos de fruta y bebidas deportivas sin restricción', 'Suspender la ingesta oral y dar nutrición parenteral'],
    explicacion: 'El agua y los líquidos hipotónicos aumentan la pérdida de sodio por el estoma. Se restringen y se reemplazan por una solución oral con alta concentración de sodio, con hidratación IV si hace falta.',
    fuente: 'Hermes: Ileostomía' },
  { tipo: 'Fármaco', pregunta: '¿Qué fármaco reduce el débito?',
    opciones: ['Loperamida antes de las comidas', 'Metoclopramida antes de las comidas', 'Laxantes osmóticos por la noche', 'Eritromicina en dosis bajas'],
    explicacion: 'La loperamida enlentece el tránsito y reduce el débito; se toma antes de las comidas. Los proquinéticos y laxantes lo empeoran.',
    fuente: 'Hermes: Ileostomía' }
 ]
},
{
 id: 'gastro-01', tema: 'Ostomías', anio: 1,
 titulo: 'Gastrostomía para alimentación',
 vineta: 'Varón de 72 años con disfagia por un ACV hace 3 semanas, sin recuperación de la deglución prevista en el próximo mes. Necesita alimentación enteral prolongada.',
 pasos: [
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué acceso enteral indicás?',
    opciones: ['Gastrostomía endoscópica percutánea', 'Sonda nasogástrica indefinida', 'Nutrición parenteral', 'Yeyunostomía quirúrgica abierta como primera opción'],
    explicacion: 'Cuando se prevé alimentación enteral por más de 4 a 6 semanas, la gastrostomía percutánea es la vía de elección por menor desplazamiento y mejor tolerancia que la sonda nasogástrica.',
    fuente: 'Hermes: Gastrostomía' },
  { tipo: 'Medidas generales', pregunta: 'La sonda se sale al 7.º día. ¿Qué hacés?',
    opciones: ['No reintroducirla a ciegas; endoscopia o radiología', 'Reintroducir una sonda Foley a ciegas y empezar a alimentar', 'Esperar a que cierre el orificio y colocar otra', 'Alimentar por la boca de inmediato con espesantes'],
    explicacion: 'Antes de la maduración del trayecto (unas 4 semanas) el estómago puede separarse de la pared; una sonda reintroducida a ciegas puede quedar en la cavidad peritoneal y causar peritonitis al alimentar.',
    fuente: 'Hermes: Gastrostomía' },
  { tipo: 'Medidas generales', pregunta: '¿Qué cuidado previene la complicación del tope interno enterrado?',
    opciones: ['Rotar la sonda y moverla, sin apretar el tope externo', 'Fijar el tope externo bien apretado contra la piel', 'Dejarla fija, sin rotarla, para no lesionar el trayecto', 'Cambiarla cada semana por una de mayor calibre'],
    explicacion: 'Un tope externo demasiado ajustado empuja el interno dentro de la pared gástrica (buried bumper). Se deja un margen de movilidad y se rota la sonda.',
    fuente: 'Hermes: Gastrostomía' }
 ]
}
];
