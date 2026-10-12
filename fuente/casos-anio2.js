// Segundo año. Primera opción = correcta.
// Fuentes externas: WSES-AAST 2021 enfermedades anorrectales urgentes; ASCRS 2023 fisura anal; ASCRS 2019 enfermedad pilonidal;
// ESVS 2022 enfermedad venosa crónica; ensayo EVRA; ESC 2019 embolia pulmonar; ESC 2024 y ESVS 2024 arteriopatía periférica;
// ESVS 2020 isquemia aguda de miembros; IWGDF/IDSA 2023 pie diabético; WSES 2017 trauma esplénico; WSES 2020 trauma hepático;
// WSES 2017 trauma pélvico; ACOSOG Z0011; ACR BI-RADS; WSES 2019 pancreatitis grave; ensayos PANTER y TENSION;
// UEG HaPanEU 2017 pancreatitis crónica; ensayo ESCAPE; SIS/IDSA 2010 dosis; EHS 2026 hernia ventral de urgencia.
module.exports = [
{
 id: 'ano-04', tema: 'Fisuras y fístulas anales', anio: 2,
 titulo: 'Dolor anal desgarrante de 3 meses',
 vineta: 'Mujer de 32 años con dolor anal intenso durante y después de defecar desde hace 3 meses, con sangrado escaso. Fisura en la línea media posterior con bordes indurados, colgajo centinela y fibras del esfínter interno visibles. Continencia normal.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Fisura anal crónica primaria', 'Fisura anal aguda', 'Fisura secundaria a enfermedad de Crohn', 'Fístula perianal'],
    explicacion: 'Más de 6 semanas de evolución, colgajo centinela, papila hipertrófica y fibras del esfínter interno expuestas definen la cronicidad. La ubicación posterior en la línea media es típica; las laterales obligan a buscar otra causa.',
    fuente: 'WSES-AAST 2021; Hermes: Fisura anal' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medidas generales indicás?',
    opciones: ['Fibra, agua, baños de asiento y analgesia', 'Dieta sin residuos para defecar menos veces', 'Laxantes estimulantes diarios por un mes', 'Ir directo a la esfinterotomía sin medidas previas'],
    explicacion: 'Corregir la consistencia fecal es la base de todo tratamiento: las heces duras perpetúan la lesión.',
    fuente: 'WSES-AAST 2021; Hermes: Fisura anal' },
  { tipo: 'Fármaco', pregunta: '¿Qué tratamiento farmacológico de primera línea indicás?',
    opciones: ['Diltiazem tópico al 2 % (bloqueante cálcico)', 'Corticoide tópico en crema dos veces por día', 'Antibiótico oral (metronidazol) por 7 días', 'Dilatación anal manual bajo anestesia'],
    explicacion: 'Los bloqueantes cálcicos tópicos tienen eficacia similar a los nitratos con menos cefalea, y son la primera línea en la fisura crónica. La dilatación manual está contraindicada por la incontinencia que causa.',
    fuente: 'ASCRS 2023, fisura anal' },
  { tipo: 'Dosis', pregunta: '¿Cómo se aplica?',
    opciones: ['Pomada 2 a 3 veces por día durante 6 a 8 semanas', 'Una única aplicación antes de defecar', 'Una vez por semana durante un mes completo', 'Cuando duele, como máximo durante 3 días seguidos'],
    explicacion: 'La relajación química del esfínter necesita constancia: se aplica varias veces por día durante al menos 6 semanas antes de considerar el fracaso.',
    fuente: 'ASCRS 2023, fisura anal; WSES-AAST 2021' },
  { tipo: 'Conducta quirúrgica', pregunta: 'No cicatriza tras 8 semanas de tratamiento correcto. ¿Qué indicás?',
    opciones: ['Esfinterotomía lateral interna, o toxina botulínica', 'Fistulotomía de la fisura con sedal cortante en dos tiempos', 'Dilatación anal forzada bajo anestesia', 'Hemorroidectomía con resección del colgajo'],
    explicacion: 'La esfinterotomía lateral interna es el tratamiento más eficaz de la fisura crónica refractaria en pacientes sin incontinencia previa; la toxina botulínica es una alternativa con menos riesgo funcional pero más recurrencia.',
    fuente: 'ASCRS 2023, fisura anal' }
 ]
},
{
 id: 'ano-05', tema: 'Fisuras y fístulas anales', anio: 2,
 titulo: 'Orificio que supura después de un absceso',
 vineta: 'Varón de 40 años al que le drenaron un absceso perianal hace 4 meses. Persiste un orificio externo a 2 cm del margen anal que supura en forma intermitente. Al tacto se palpa un cordón hacia la línea media posterior.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Fístula perianal', 'Fisura anal', 'Quiste pilonidal', 'Hidradenitis supurativa'],
    explicacion: 'Un orificio externo que supura tras el drenaje de un absceso, con un trayecto palpable hacia el canal anal, es una fístula de origen criptoglandular.',
    fuente: 'Hermes: Absceso y fístula anorrectal' },
  { tipo: 'Estudios', pregunta: '¿Cuándo pedís una resonancia pélvica?',
    opciones: ['Si es compleja, recidivada, anterior en la mujer o con Crohn', 'De rutina antes de operar una fístula, aunque sea simple y baja', 'Recién cuando fracasó una fistulotomía previa', 'Cuando hay fiebre o dolor durante el examen'],
    explicacion: 'La resonancia es el mapa preferido para fístulas complejas, recurrentes o en Crohn. En una fístula simple baja puede bastar el examen bajo anestesia.',
    fuente: 'Hermes: Absceso y fístula anorrectal' },
  { tipo: 'Conducta quirúrgica', pregunta: 'En el examen bajo anestesia es interesfinteriana baja. ¿Qué hacés?',
    opciones: ['Fistulotomía', 'Colgajo de avance rectal', 'Colostomía', 'Antibióticos prolongados'],
    explicacion: 'La fistulotomía cura la fístula simple baja con mínimo riesgo para la continencia. Las técnicas que preservan el esfínter (sedal, colgajo, LIFT) se reservan para fístulas que comprometen más esfínter.',
    fuente: 'Hermes: Absceso y fístula anorrectal' },
  { tipo: 'Técnica', pregunta: 'Si comprometiera más de un tercio del esfínter externo, ¿qué harías en un primer tiempo?',
    opciones: ['Sedal laxo y luego una técnica que preserve el esfínter', 'Fistulotomía completa igual, en un solo tiempo', 'Inyectar adhesivo de fibrina en el trayecto y dar el alta definitiva', 'Colostomía de protección y fistulotomía diferida'],
    explicacion: 'Seccionar mucho esfínter arriesga incontinencia. El sedal laxo controla la sepsis y permite luego un colgajo de avance, LIFT u otra técnica conservadora.',
    fuente: 'Hermes: Absceso y fístula anorrectal' }
 ]
},
{
 id: 'pilo-01', tema: 'Quiste pilonidal', anio: 2,
 titulo: 'Dolor sacrococcígeo con tumefacción',
 vineta: 'Varón de 20 años, peludo, con 3 días de dolor y tumefacción fluctuante en el pliegue interglúteo. Se ven dos fositas en la línea media. Afebril.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Absceso pilonidal', 'Absceso perianal', 'Hidradenitis supurativa', 'Quiste dermoide sacro'],
    explicacion: 'Fositas en la línea media del pliegue con un absceso adyacente son la presentación aguda de la enfermedad pilonidal.',
    fuente: 'Hermes: Quiste pilonidal' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué hacés ahora?',
    opciones: ['Incisión y drenaje lateral a la línea media', 'Resección amplia del quiste en la misma urgencia', 'Antibióticos solos y control en 48 horas', 'Resección y colgajo romboidal de urgencia'],
    explicacion: 'El absceso se drena; la resección definitiva se planifica después, cuando la inflamación cede. Una incisión fuera de la línea media cicatriza mejor.',
    fuente: 'ASCRS 2019, enfermedad pilonidal; Hermes: Quiste pilonidal' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Meses después tiene enfermedad crónica sintomática. ¿Qué técnica evitás?',
    opciones: ['Escisión con cierre primario en la línea media', 'Técnicas de cierre fuera de la línea media (Karydakis, Bascom)', 'Pit-picking', 'Destechado'],
    explicacion: 'El cierre en la línea media tiene más infección y recurrencia. Las técnicas que aplanan el pliegue y cierran fuera de la línea media son preferibles.',
    fuente: 'ASCRS 2019, enfermedad pilonidal; Hermes: Quiste pilonidal' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medida puede reducir la recurrencia?',
    opciones: ['Depilación de la región e higiene del pliegue', 'Reposo prolongado y evitar estar sentado', 'Antibióticos profilácticos en ciclos mensuales', 'Dieta hipograsa y descenso de peso estricto'],
    explicacion: 'Eliminar el pelo de la zona reduce la recurrencia después del tratamiento.',
    fuente: 'ASCRS 2019, enfermedad pilonidal' }
 ]
},
{
 id: 'hernia-04', tema: 'Hernias recidivadas', anio: 2,
 titulo: 'Recurrencia tras un Lichtenstein',
 vineta: 'Varón de 62 años operado con técnica de Lichtenstein hace 3 años. Presenta recurrencia inguinal derecha sintomática y reducible.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué pedís antes de operar?',
    opciones: ['El protocolo quirúrgico de la operación anterior', 'Una TC de abdomen y pelvis de rutina', 'Una resonancia dinámica de la región inguinal con maniobra de Valsalva', 'Una ecografía para medir el defecto'],
    explicacion: 'Saber qué técnica, plano y malla se usaron orienta la vía de reparación y ayuda a entender el mecanismo de la falla.',
    fuente: 'Hermes: Hernia inguinal recurrente' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Por qué vía la reparás?',
    opciones: ['Posterior (TEP o TAPP), por un plano no operado', 'Anterior otra vez, con una malla más grande', 'Shouldice para evitar otra malla', 'Observación, porque recidivó una vez'],
    explicacion: 'Se prefiere el plano virgen: posterior tras una reparación anterior y anterior tras una posterior. Así se evita disecar tejido cicatricial con malla.',
    fuente: 'HerniaSurge; Hermes: Hernia inguinal recurrente' },
  { tipo: 'Medidas generales', pregunta: '¿Cuándo derivarías a un centro especializado?',
    opciones: ['Multirrecurrencia, ambos planos operados o infección de malla', 'En la primera recurrencia, aunque sea simple, reducible y por un solo plano', 'Cuando el defecto mida más de 1 cm en la ecografía', 'Cuando el paciente prefiera operarse en otro hospital'],
    explicacion: 'Las recurrencias múltiples o con ambos planos operados son técnicamente complejas y deben resolverse en unidades con experiencia en pared.',
    fuente: 'Hermes: Hernia inguinal recurrente' }
 ]
},
{
 id: 'hernia-05', tema: 'Hernias recidivadas', anio: 2,
 titulo: 'Bulto doloroso debajo del ligamento inguinal',
 vineta: 'Mujer de 78 años con dolor y un bulto irreductible debajo del ligamento inguinal izquierdo desde hace 20 horas, con vómitos. Piel sin cambios. Leucocitos 12.000/mm³.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué sospechás?',
    opciones: ['Hernia crural irreductible con posible estrangulación', 'Adenopatía inguinal abscedada con linfangitis', 'Hernia inguinal directa crónicamente irreductible', 'Aneurisma de la arteria femoral común trombosado'],
    explicacion: 'Una masa irreductible debajo del ligamento inguinal en una mujer mayor, con vómitos, es una hernia crural complicada hasta demostrar otra cosa; es la hernia con más riesgo de estrangulación.',
    fuente: 'Hermes: Hernia crural' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué hacés?',
    opciones: ['Cirugía de urgencia en las próximas horas', 'Reducción manual bajo sedación y control ambulatorio', 'Observación con analgesia', 'Cirugía programada en un mes'],
    explicacion: 'Ante vómitos y más de 20 horas de irreductibilidad se opera de urgencia; la reducción manual se intenta solo sin sospecha de isquemia.',
    fuente: 'HerniaSurge 2023, urgencia' },
  { tipo: 'Técnica', pregunta: 'Para liberar el anillo crural, ¿qué estructura debés proteger?',
    opciones: ['La vena femoral, lateral al saco', 'El nervio ilioinguinal', 'El conducto deferente', 'La arteria epigástrica en la línea media'],
    explicacion: 'El anillo crural tiene la vena femoral por fuera; la sección para liberarlo se hace hacia medial, sobre el ligamento lacunar. La sutura de cierre tampoco debe comprimir la vena.',
    fuente: 'Hermes: Hernia inguinal estrangulada' }
 ]
},
{
 id: 'venosa-01', tema: 'Enfermedad venosa crónica', anio: 2,
 titulo: 'Úlcera maleolar interna',
 vineta: 'Mujer de 66 años con una úlcera de 4 cm en el maléolo interno izquierdo de 5 meses, con lipodermatoesclerosis. Pulsos pedios palpables, índice tobillo-brazo 1,0. Eco Doppler: reflujo de la safena interna, sistema profundo competente.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene y en qué CEAP está?',
    opciones: ['Úlcera venosa activa, CEAP C6', 'Úlcera arterial', 'Úlcera neuropática', 'Úlcera venosa cicatrizada, C5'],
    explicacion: 'Una úlcera maleolar interna con cambios cutáneos crónicos y reflujo venoso, con perfusión arterial normal, es una úlcera venosa activa (C6).',
    fuente: 'ESVS 2022, enfermedad venosa crónica; Hermes: Úlcera venosa' },
  { tipo: 'Estudios', pregunta: '¿Por qué medís el índice tobillo-brazo antes de comprimir?',
    opciones: ['Para descartar arteriopatía que contraindique la compresión', 'Para diagnosticar el reflujo de la safena', 'Para clasificar la úlcera en la CEAP', 'Para predecir el tiempo de cicatrización de la úlcera venosa activa'],
    explicacion: 'La compresión intensa sobre un miembro con mala perfusión puede producir necrosis. Un índice bajo obliga a reducir la compresión o evaluar la arteriopatía.',
    fuente: 'ESVS 2022; Hermes: Úlcera venosa' },
  { tipo: 'Medidas generales', pregunta: '¿Cuál es el tratamiento causal?',
    opciones: ['Compresión multicomponente (40 mmHg en el tobillo)', 'Apósitos de plata y curaciones diarias, sin compresión', 'Antibióticos sistémicos por la colonización de la úlcera', 'Reposo en cama con el miembro elevado durante semanas'],
    explicacion: 'La compresión es lo que cicatriza la úlcera venosa. Ningún apósito la reemplaza, y los antibióticos solo se usan si hay infección clínica.',
    fuente: 'ESVS 2022, enfermedad venosa crónica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cuándo tratás el reflujo de la safena?',
    opciones: ['En forma temprana, junto con la compresión', 'Solo después de que cicatrice, si recidiva', 'No se trata: la compresión alcanza', 'Cuando la úlcera tenga más de 2 años'],
    explicacion: 'En el ensayo EVRA, la ablación temprana del reflujo superficial más compresión aceleró la cicatrización y redujo la recurrencia frente a diferirla.',
    fuente: 'Ensayo EVRA; ESVS 2022' }
 ]
},
{
 id: 'tep-01', tema: 'Tromboembolismo pulmonar', anio: 2,
 titulo: 'Disnea súbita en el día 6',
 vineta: 'Mujer de 59 años en el día 6 de una histerectomía por cáncer. Disnea súbita, frecuencia 112, saturación 89 %, presión 125/80 mmHg. Angio-TC: embolia pulmonar segmentaria bilateral; sin dilatación del ventrículo derecho y troponina normal.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Cómo estratificás el riesgo?',
    opciones: ['Riesgo bajo o intermedio-bajo', 'Riesgo alto, por la hipoxemia', 'Riesgo intermedio-alto', 'No hace falta estratificar'],
    explicacion: 'El riesgo alto es la embolia con inestabilidad hemodinámica. En el estable, la disfunción del ventrículo derecho y la troponina elevada definen el intermedio-alto; esta paciente no tiene ninguna de las dos.',
    fuente: 'ESC 2019, embolia pulmonar' },
  { tipo: 'Fármaco', pregunta: '¿Qué tratamiento indicás?',
    opciones: ['Heparina de bajo peso molecular a dosis terapéutica', 'Trombólisis sistémica con alteplasa', 'Filtro de vena cava inferior y luego anticoagulación', 'Aspirina más medias de compresión'],
    explicacion: 'La embolia estable se trata con anticoagulación. La trombólisis se reserva para el riesgo alto y el filtro, para la contraindicación absoluta de anticoagular.',
    fuente: 'ESC 2019, embolia pulmonar' },
  { tipo: 'Dosis', pregunta: '¿Con qué dosis de enoxaparina?',
    opciones: ['1 mg/kg subcutánea cada 12 horas', '40 mg subcutánea cada 24 horas', '100 mg IV en bolo', '0,5 mg/kg cada 48 horas'],
    explicacion: 'La dosis terapéutica es 1 mg/kg cada 12 horas (o 1,5 mg/kg cada 24 horas), ajustada a la función renal. 40 mg por día es la dosis profiláctica.',
    fuente: 'ESC 2019, embolia pulmonar; ficha técnica de enoxaparina' },
  { tipo: 'Medidas generales', pregunta: '¿Cuánto dura la anticoagulación en esta paciente con cáncer activo?',
    opciones: ['Al menos 3 a 6 meses, y mientras el cáncer esté activo', '7 días, hasta el alta hospitalaria', 'Durante la internación y un mes más', 'De por vida, sin reevaluar el riesgo de sangrado'],
    explicacion: 'Tras una embolia con factor transitorio quirúrgico se anticoagula al menos 3 meses, pero con cáncer activo se extiende y se reevalúa periódicamente.',
    fuente: 'ESC 2019, embolia pulmonar' }
 ]
},
{
 id: 'tep-02', tema: 'Tromboembolismo pulmonar', anio: 2,
 titulo: 'Embolia con hipotensión',
 vineta: 'Varón de 64 años, 3 semanas después de una fractura de cadera. Disnea súbita, presión 78/50 mmHg pese a líquidos, ventrículo derecho dilatado en la ecografía. No operado recientemente ni con sangrado activo.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué riesgo tiene?',
    opciones: ['Riesgo alto', 'Riesgo intermedio-bajo', 'Riesgo bajo', 'Riesgo intermedio-alto'],
    explicacion: 'La hipotensión persistente o el shock definen la embolia de riesgo alto, con mortalidad elevada a corto plazo.',
    fuente: 'ESC 2019, embolia pulmonar' },
  { tipo: 'Fármaco', pregunta: '¿Qué tratamiento indicás?',
    opciones: ['Trombólisis sistémica con heparina no fraccionada', 'Heparina de bajo peso molecular sin trombólisis', 'Aspirina y oxígeno a alto flujo', 'Diuréticos IV para descargar el ventrículo derecho dilatado'],
    explicacion: 'En la embolia de riesgo alto sin contraindicación se indica trombólisis sistémica con heparina no fraccionada. Si está contraindicada o falla, embolectomía quirúrgica o tratamiento por catéter.',
    fuente: 'ESC 2019, embolia pulmonar' },
  { tipo: 'Dosis', pregunta: '¿Qué esquema de alteplasa?',
    opciones: ['100 mg IV en 2 horas', '10 mg IV en bolo único', '1 g IV', '100 mg IV en 24 horas'],
    explicacion: 'El esquema habitual es 100 mg de alteplasa en 2 horas; en el paro cardíaco se usa un esquema acelerado.',
    fuente: 'ESC 2019, embolia pulmonar' }
 ]
},
{
 id: 'arteria-01', tema: 'Patología arterial periférica', anio: 2,
 titulo: 'Dolor en la pantorrilla al caminar',
 vineta: 'Varón de 64 años, fumador, hipertenso y dislipémico. Dolor en la pantorrilla derecha que aparece a las 3 cuadras y cede al detenerse. Pulsos femoral presente y poplíteo y distales ausentes. Índice tobillo-brazo 0,65.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Claudicación intermitente por arteriopatía periférica', 'Claudicación neurógena por estenosis del conducto lumbar', 'Isquemia crónica amenazante de la extremidad', 'Insuficiencia venosa crónica sintomática'],
    explicacion: 'Dolor reproducible con el ejercicio que cede con el reposo, con índice tobillo-brazo menor de 0,9 y pulsos ausentes desde el poplíteo, es claudicación por arteriopatía. Sin dolor de reposo ni lesiones, no es amenazante.',
    fuente: 'ESC 2024 y ESVS 2024, arteriopatía periférica; Hermes: Enfermedad arterial periférica' },
  { tipo: 'Medidas generales', pregunta: '¿Qué indicación es la más eficaz para mejorar la distancia de marcha?',
    opciones: ['Dejar de fumar y ejercicio supervisado durante 3 meses', 'Reposo y caminar lo mínimo para no provocar dolor', 'Medias de compresión elástica de alta presión', 'Revascularización inmediata por vía endovascular del eje femoropoplíteo'],
    explicacion: 'El ejercicio supervisado mejora la distancia de marcha tanto como la revascularización en la claudicación, y dejar de fumar reduce la progresión y los eventos cardiovasculares.',
    fuente: 'ESC 2024 y ESVS 2024, arteriopatía periférica' },
  { tipo: 'Fármaco', pregunta: '¿Qué tratamiento médico indicás para reducir eventos cardiovasculares?',
    opciones: ['Antiagregante y estatina de alta intensidad', 'Anticoagulación con warfarina, RIN 2 a 3', 'Vasodilatadores periféricos (pentoxifilina)', 'Estatina sola si el colesterol está alto'],
    explicacion: 'Todo paciente con arteriopatía sintomática recibe antiagregación (aspirina o clopidogrel), estatina de alta intensidad y control de la presión y la diabetes.',
    fuente: 'ESC 2024 y ESVS 2024, arteriopatía periférica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cuándo revascularizás?',
    opciones: ['Si sigue limitado tras 3 meses de tratamiento óptimo', 'Ahora, para evitar la progresión a amputación', 'Solo si aparece una úlcera en el pie', 'Cuando el índice tobillo-brazo baje de 0,2'],
    explicacion: 'La claudicación se revasculariza solo si persiste la limitación con tratamiento médico y ejercicio, porque la amputación es rara en este estadio.',
    fuente: 'ESC 2024 y ESVS 2024; Hermes: Enfermedad arterial periférica' }
 ]
},
{
 id: 'arteria-02', tema: 'Patología arterial periférica', anio: 2,
 titulo: 'Pierna fría y dolorosa de golpe',
 vineta: 'Mujer de 76 años con fibrilación auricular sin anticoagular. Dolor súbito en la pierna izquierda de 4 horas, pierna fría y pálida, sin pulso femoral, hipoestesia en el pie y movilidad de los dedos conservada.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene y qué categoría de Rutherford?',
    opciones: ['Isquemia aguda embólica, Rutherford IIa o IIb', 'Isquemia crónica agudizada, Rutherford I', 'Flegmasía cerulea dolens por trombosis venosa', 'Isquemia irreversible, Rutherford III'],
    explicacion: 'Dolor, palidez, ausencia de pulso y frialdad súbitos en una paciente con fibrilación auricular son embolia arterial. Con déficit sensitivo y motricidad conservada la extremidad está amenazada pero recuperable; la parálisis y el rigor serían irreversibles.',
    fuente: 'ESVS 2020, isquemia aguda de miembros' },
  { tipo: 'Fármaco', pregunta: '¿Qué indicás de inmediato?',
    opciones: ['Heparina no fraccionada IV en bolo', 'Aspirina sola', 'Trombólisis sistémica', 'Esperar la angio-TC para iniciar tratamiento'],
    explicacion: 'Se anticoagula de inmediato con heparina IV para limitar la propagación del trombo, mientras se planifica la revascularización.',
    fuente: 'ESVS 2020, isquemia aguda de miembros' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué tratamiento indicás?',
    opciones: ['Embolectomía urgente con catéter de Fogarty', 'Observación con heparina IV y Doppler a las 24 horas', 'Amputación primaria supracondílea', 'Tratamiento médico y control ambulatorio'],
    explicacion: 'Una extremidad amenazada se revasculariza con urgencia; en una embolia femoral, la embolectomía con Fogarty es rápida y eficaz.',
    fuente: 'ESVS 2020, isquemia aguda de miembros' },
  { tipo: 'Técnica', pregunta: 'Tras revascularizar, la pantorrilla está tensa y duele al estirar los dedos. ¿Qué hacés?',
    opciones: ['Fasciotomía de los cuatro compartimentos', 'Elevar el miembro y observar la evolución', 'Vendaje compresivo y analgesia', 'Esperar la medición de presiones a las 24 horas'],
    explicacion: 'El síndrome compartimental por reperfusión se trata con fasciotomía completa de los cuatro compartimentos, sin esperar déficit motor ni ausencia de pulso.',
    fuente: 'ESVS 2020; Hermes: Síndrome compartimental agudo de las extremidades' }
 ]
},
{
 id: 'arteria-03', tema: 'Patología arterial periférica', anio: 2,
 titulo: 'Úlcera infectada en un pie diabético',
 vineta: 'Varón de 68 años diabético. Úlcera plantar bajo la cabeza del primer metatarsiano con celulitis de 3 cm alrededor, sin signos sistémicos. La sonda toca hueso. Pulsos pedios ausentes, índice tobillo-brazo 0,6.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué problemas tiene que ordenar?',
    opciones: ['Infección moderada, probable osteomielitis e isquemia', 'Úlcera neuropática pura sin infección ni isquemia', 'Celulitis leve sin osteomielitis ni isquemia', 'Gangrena húmeda del antepié con sepsis'],
    explicacion: 'Celulitis de más de 2 cm o compromiso profundo define infección moderada; el contacto con hueso sugiere osteomielitis y el índice bajo indica isquemia. Hay que tratar las tres cosas.',
    fuente: 'IWGDF/IDSA 2023, infección del pie diabético; Hermes: Pie diabético' },
  { tipo: 'Estudios', pregunta: '¿Qué estudios pedís?',
    opciones: ['Radiografía, cultivo de tejido profundo y evaluación vascular', 'Hisopado superficial de la úlcera y radiografía', 'Hemograma y eritrosedimentación seriados', 'Gammagrafía ósea con leucocitos marcados como primer estudio y luego biopsia'],
    explicacion: 'La radiografía busca osteomielitis y gas; el cultivo de tejido profundo o hueso (no el hisopado) orienta el antibiótico, y la evaluación vascular decide la revascularización.',
    fuente: 'IWGDF/IDSA 2023' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medida es indispensable para cicatrizar?',
    opciones: ['Descarga efectiva de la presión plantar', 'Caminar normalmente para estimular la circulación', 'Reposo relativo con calzado habitual', 'Apósitos con plata o hidrocoloide'],
    explicacion: 'Sin quitar la presión de la úlcera plantar no cicatriza; la descarga se adapta para que el paciente la cumpla.',
    fuente: 'Hermes: Pie diabético' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué hacés con la isquemia?',
    opciones: ['Revascularizar para permitir la cicatrización', 'Amputación mayor directa por debajo de la rodilla', 'Antibióticos prolongados sin revascularizar', 'Observar la evolución con curaciones'],
    explicacion: 'Una úlcera con isquemia no cicatriza solo con antibióticos ni curaciones; la revascularización temprana mejora la cicatrización y el salvamento de la extremidad.',
    fuente: 'IWGDF/IDSA 2023; Hermes: Isquemia crónica amenazante de la extremidad' }
 ]
},
{
 id: 'mama-01', tema: 'Patología mamaria', anio: 2,
 titulo: 'Nódulo mamario en una mujer joven',
 vineta: 'Mujer de 24 años con un nódulo de 2 cm en la mama derecha, móvil, elástico, indoloro, de bordes netos. Sin antecedentes familiares.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué estudio pedís primero?',
    opciones: ['Ecografía mamaria', 'Mamografía', 'Resonancia', 'Biopsia quirúrgica directa'],
    explicacion: 'En mujeres menores de 30 a 35 años la ecografía es el estudio inicial por la densidad mamaria; la mamografía tiene baja sensibilidad a esa edad.',
    fuente: 'Hermes: Evaluación de la patología mamaria' },
  { tipo: 'Diagnóstico', pregunta: 'La ecografía muestra un nódulo oval, circunscripto, paralelo a la piel. ¿Qué es lo más probable?',
    opciones: ['Fibroadenoma (BI-RADS 3)', 'Carcinoma ductal (BI-RADS 5)', 'Quiste complicado', 'Mastitis granulomatosa'],
    explicacion: 'Una lesión sólida oval, circunscripta y paralela a la piel en una mujer joven es típica de fibroadenoma, categoría probablemente benigna (BI-RADS 3).',
    fuente: 'ACR BI-RADS; Hermes: Evaluación de la patología mamaria' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Control ecográfico en 6 meses, o biopsia si crece', 'Mastectomía subcutánea preventiva', 'Resección quirúrgica en la próxima semana', 'Alta sin controles, por ser una lesión benigna'],
    explicacion: 'BI-RADS 3 tiene menos de 2 % de riesgo de malignidad y se controla a corto plazo. Se biopsia si crece, cambia o hay discordancia clínica.',
    fuente: 'ACR BI-RADS' }
 ]
},
{
 id: 'mama-02', tema: 'Patología mamaria', anio: 2,
 titulo: 'Nódulo sospechoso en una mujer de 56 años',
 vineta: 'Mujer de 56 años con un nódulo de 1,8 cm en el cuadrante superoexterno derecho, duro e irregular. Mamografía: masa espiculada BI-RADS 5. Axila clínica y ecográficamente negativa.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Cómo confirmás el diagnóstico?',
    opciones: ['Biopsia con aguja gruesa guiada por imagen', 'Biopsia escisional con márgenes amplios', 'Punción con aguja fina para citología', 'Resonancia mamaria y luego cirugía'],
    explicacion: 'La biopsia con aguja gruesa confirma la invasión y da receptores hormonales y HER2, que definen el tratamiento antes de cualquier cirugía.',
    fuente: 'Hermes: Cáncer de mama' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Es un carcinoma ductal invasor, receptores positivos, HER2 negativo. ¿Qué cirugía indicás?',
    opciones: ['Cirugía conservadora, ganglio centinela y radioterapia', 'Mastectomía radical modificada con vaciamiento', 'Cirugía conservadora con vaciamiento axilar completo de los tres niveles', 'Hormonoterapia primaria sin cirugía'],
    explicacion: 'Un tumor de 1,8 cm en una mama de tamaño adecuado permite cirugía conservadora más radioterapia, con supervivencia equivalente a la mastectomía. La axila clínicamente negativa se estadifica con ganglio centinela.',
    fuente: 'Hermes: Cáncer de mama; Cirugía axilar en cáncer de mama' },
  { tipo: 'Técnica', pregunta: 'El ganglio centinela tiene metástasis en 1 de 2 ganglios. ¿Completás el vaciamiento?',
    opciones: ['No: con 1 o 2 ganglios y radioterapia, Z0011 no mostró beneficio', 'Sí, porque el ganglio centinela es positivo', 'Sí, y además convertir a mastectomía', 'Sí, con vaciamiento y radioterapia axilar complementaria'],
    explicacion: 'En el ACOSOG Z0011, en tumores T1-T2 con 1 o 2 ganglios centinela positivos tratados con cirugía conservadora y radioterapia, el vaciamiento no mejoró la supervivencia y aumentó el linfedema.',
    fuente: 'Ensayo ACOSOG Z0011' }
 ]
},
{
 id: 'trauma-04', tema: 'Trauma avanzado', anio: 2,
 titulo: 'Lesión esplénica en un paciente estable',
 vineta: 'Varón de 25 años, caída de moto. Estable desde el ingreso. TC: laceración esplénica de 4 cm de profundidad (grado III de la AAST), sin extravasación de contraste ni otras lesiones.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué clase WSES tiene?',
    opciones: ['Clase II (moderada)', 'Clase IV (grave)', 'Clase I (menor)', 'Clase III (grave)'],
    explicacion: 'WSES combina el grado anatómico con la hemodinamia: el grado III de la AAST en un paciente estable es clase II.',
    fuente: 'WSES 2017, trauma esplénico; Hermes: Traumatismo esplénico' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Manejo no operatorio con vigilancia', 'Esplenectomía laparoscópica programada', 'Esplenorrafia de rutina por laparotomía', 'Alta con control ambulatorio en 48 horas'],
    explicacion: 'El paciente estable sin otra indicación de laparotomía se maneja sin operar, siempre que haya vigilancia, controles seriados y capacidad de rescate.',
    fuente: 'WSES 2017, trauma esplénico' },
  { tipo: 'Medidas generales', pregunta: '¿Qué controles hacés?',
    opciones: ['Examen y hemoglobina seriados', 'Sin controles si sigue estable', 'TC de abdomen cada 6 horas', 'Laparoscopia diagnóstica a las 24 h'],
    explicacion: 'Se vigilan los signos vitales, el abdomen y la hemoglobina; ante deterioro se considera angioembolización o cirugía.',
    fuente: 'WSES 2017, trauma esplénico' },
  { tipo: 'Fármaco', pregunta: 'Si terminara esplenectomizado, ¿qué vacunas indicás?',
    opciones: ['Neumococo, meningococo y Hib', 'Antigripal anual y hepatitis B', 'Antitetánica y antigripal', 'BCG y triple viral de refuerzo'],
    explicacion: 'La asplenia aumenta el riesgo de sepsis fulminante por gérmenes encapsulados; se vacuna contra neumococo, meningococo y Haemophilus, idealmente a partir de las 2 semanas de la cirugía, más antigripal anual.',
    fuente: 'WSES 2017, trauma esplénico' }
 ]
},
{
 id: 'trauma-05', tema: 'Trauma avanzado', anio: 2,
 titulo: 'Fractura de pelvis en libro abierto',
 vineta: 'Mujer de 45 años atropellada. Presión 75/40 mmHg pese a 1 litro de cristaloides. Dolor pélvico, radiografía con diástasis de la sínfisis (libro abierto). FAST negativo.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿De dónde sangra probablemente?',
    opciones: ['De la pelvis (venas y focos de fractura)', 'Del abdomen, aunque el FAST sea negativo', 'Del tórax, por un hemotórax no visto', 'De una fractura de fémur oculta'],
    explicacion: 'Con FAST negativo y fractura en libro abierto, el shock es probablemente pélvico; el sangrado es mayormente venoso y óseo.',
    fuente: 'WSES 2017, trauma pélvico; Hermes: Trauma pélvico' },
  { tipo: 'Medidas generales', pregunta: '¿Qué hacés de inmediato?',
    opciones: ['Faja pélvica sobre los trocánteres y transfusión masiva', 'Laparotomía exploradora para buscar el sangrado', 'TC de pelvis con contraste para definir la fractura', 'Colocar sonda vesical y medir la diuresis'],
    explicacion: 'La faja pélvica reduce el volumen pélvico y el sangrado; se coloca sobre los trocánteres mayores. Se transfunde de forma balanceada y precoz.',
    fuente: 'WSES 2017, trauma pélvico' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Persiste inestable. ¿Qué opciones tenés?',
    opciones: ['Packing preperitoneal, fijación externa y angioembolización', 'Transfundir y esperar 24 horas para fijar la pelvis en forma definitiva', 'Más cristaloides hasta normalizar la presión', 'Laparotomía con exploración del hematoma pélvico'],
    explicacion: 'En el inestable se combinan el packing preperitoneal, la fijación mecánica y la angioembolización según disponibilidad. Abrir el hematoma pélvico por laparotomía empeora el sangrado.',
    fuente: 'WSES 2017, trauma pélvico' },
  { tipo: 'Medidas generales', pregunta: 'Hay sangre en el meato uretral. ¿Colocás una sonda vesical?',
    opciones: ['No, sin antes hacer una uretrografía retrógrada', 'Sí, de inmediato, para medir la diuresis horaria', 'Sí, con fuerza si encuentra resistencia', 'Sí, una sonda más fina con lubricante'],
    explicacion: 'La sangre en el meato con fractura pélvica sugiere lesión uretral; una sonda a ciegas puede completar una sección parcial. Se estudia primero y, si hay lesión, se coloca una cistostomía.',
    fuente: 'WSES 2017, trauma pélvico' }
 ]
},
{
 id: 'trauma-06', tema: 'Trauma avanzado', anio: 2,
 titulo: 'Lesión hepática con respuesta transitoria',
 vineta: 'Varón de 30 años con trauma cerrado. Laceración hepática grado IV en la TC con extravasación de contraste arterial. Respondió a 2 unidades de sangre y se mantiene estable.',
 pasos: [
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Angioembolización y continuar el manejo no operatorio', 'Hepatectomía derecha reglada de urgencia', 'Observación clínica sin tratar la extravasación arterial', 'Alta a las 24 horas si la hemoglobina se mantiene'],
    explicacion: 'En el estable, el grado no obliga a operar. La extravasación arterial en el adulto puede tratarse con angioembolización dentro del manejo no operatorio.',
    fuente: 'WSES 2020, trauma hepático; Hermes: Trauma hepático' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Se descompensa y lo llevás a quirófano con hemorragia hepática masiva. ¿Qué hacés primero?',
    opciones: ['Compresión manual, packing perihepático y maniobra de Pringle', 'Hepatectomía reglada inmediata del segmento lesionado', 'Ligadura de la vena cava inferior suprahepática', 'Sutura profunda de las laceraciones con puntos en U'],
    explicacion: 'El control de daños hepático empieza por compresión, packing y Pringle para controlar el flujo. Las resecciones regladas en un paciente en shock aumentan la mortalidad.',
    fuente: 'WSES 2020, trauma hepático; Hermes: Trauma hepático' },
  { tipo: 'Medidas generales', pregunta: '¿Qué complicaciones tardías vigilás?',
    opciones: ['Biliomas, fístula biliar, hemobilia y pseudoaneurismas', 'Pancreatitis aguda y pseudoquiste pancreático', 'Úlcera duodenal de estrés con hemorragia digestiva alta', 'Hernia diafragmática y vólvulo gástrico'],
    explicacion: 'Las lesiones de alto grado pueden complicarse con colecciones biliares, hemobilia o pseudoaneurismas, que se manejan con drenaje, CPRE o embolización.',
    fuente: 'Hermes: Trauma hepático' }
 ]
},
{
 id: 'panc-02', tema: 'Pancreatitis aguda', anio: 2,
 titulo: 'Necrosis infectada a las 5 semanas',
 vineta: 'Varón de 50 años con pancreatitis necrotizante hace 5 semanas. Fiebre y deterioro clínico. TC: necrosis encapsulada de 12 cm retrogástrica con burbujas de gas.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Necrosis encapsulada infectada', 'Pseudoquiste no infectado', 'Colección aguda peripancreática', 'Absceso hepático'],
    explicacion: 'Después de 4 semanas, una colección con pared y contenido necrótico es necrosis encapsulada; el gas en su interior con deterioro clínico indica infección.',
    fuente: 'Atlanta revisada; Hermes: Pancreatitis aguda necrotizante' },
  { tipo: 'Fármaco', pregunta: '¿Qué antibiótico indicás?',
    opciones: ['Un carbapenémico, ajustado luego por cultivo', 'No indico antibiótico hasta tener el cultivo', 'Cefalexina por vía oral durante 14 días', 'Ampicilina IV en monoterapia durante 7 días'],
    explicacion: 'Ante infección de la necrosis se indican antibióticos que penetren el páncreas, como los carbapenémicos, ajustados a los cultivos obtenidos al drenar.',
    fuente: 'WSES 2019, pancreatitis grave' },
  { tipo: 'Dosis', pregunta: '¿Qué dosis de meropenem?',
    opciones: ['1 g IV cada 8 horas', '1 g VO cada 24 horas', '100 mg IV cada 12 horas', '6 g IV en bolo'],
    explicacion: 'La dosis de meropenem en infección intraabdominal es 1 g IV cada 8 horas, ajustada a la función renal.',
    fuente: 'SIS/IDSA 2010, tabla de dosis' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cómo controlás el foco?',
    opciones: ['Abordaje escalonado: drenaje y, si no mejora, necrosectomía', 'Necrosectomía abierta de entrada con lavado retroperitoneal continuo', 'Antibióticos prolongados sin drenaje mientras tolere', 'Pancreatectomía corporocaudal con esplenectomía'],
    explicacion: 'En los ensayos PANTER y TENSION, el abordaje escalonado redujo las complicaciones mayores frente a la necrosectomía abierta. Una colección retrogástrica es ideal para el drenaje endoscópico.',
    fuente: 'Ensayos PANTER y TENSION; WSES 2019' }
 ]
},
{
 id: 'panc-03', tema: 'Pancreatitis crónica', anio: 2,
 titulo: 'Dolor y diarrea grasa en un bebedor',
 vineta: 'Varón de 48 años con consumo de alcohol de 20 años y tabaquismo. Dolor epigástrico recurrente, pérdida de peso y deposiciones voluminosas, grasas y malolientes. TC: calcificaciones pancreáticas y Wirsung de 9 mm con litiasis cefálica.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Pancreatitis crónica con insuficiencia exocrina', 'Pancreatitis aguda recurrente sin cambios crónicos', 'Adenocarcinoma de cabeza de páncreas con obstrucción', 'Enfermedad celíaca con malabsorción secundaria'],
    explicacion: 'Calcificaciones, dilatación ductal y esteatorrea en un bebedor indican pancreatitis crónica con insuficiencia exocrina. Hay que excluir cáncer si aparece una masa o cambia el cuadro.',
    fuente: 'Hermes: Pancreatitis crónica' },
  { tipo: 'Medidas generales', pregunta: '¿Qué medida es fundamental?',
    opciones: ['Abstinencia total de alcohol y tabaco', 'Dieta con menos de 20 g diarios de grasa', 'Ayuno durante las crisis de dolor', 'Analgésicos opioides en horario fijo'],
    explicacion: 'Dejar el alcohol y el tabaco reduce los episodios de dolor y la progresión. La dieta no debe ser pobre en grasas si se reemplazan las enzimas.',
    fuente: 'UEG HaPanEU 2017, pancreatitis crónica; Hermes: Pancreatitis crónica' },
  { tipo: 'Fármaco', pregunta: '¿Qué indicás para la esteatorrea?',
    opciones: ['Enzimas pancreáticas con las comidas', 'Loperamida', 'Antibióticos', 'Inhibidor de bomba como único tratamiento'],
    explicacion: 'La insuficiencia exocrina se trata con enzimas pancreáticas gastrorresistentes tomadas con las comidas.',
    fuente: 'UEG HaPanEU 2017, pancreatitis crónica' },
  { tipo: 'Dosis', pregunta: '¿Qué dosis inicial de lipasa?',
    opciones: ['40.000 a 50.000 unidades por comida principal', '1.000 unidades por día, en el desayuno', '500.000 unidades por día, en ayunas', '10.000 unidades por semana, con la cena'],
    explicacion: 'La dosis inicial recomendada es de 40.000 a 50.000 unidades de lipasa en cada comida principal y la mitad en las colaciones, ajustando según la respuesta.',
    fuente: 'UEG HaPanEU 2017, pancreatitis crónica' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Persiste el dolor pese al tratamiento médico. ¿Qué indicás con Wirsung dilatado y litiasis?',
    opciones: ['Drenaje quirúrgico temprano (Partington o Frey) o endoscópico', 'Pancreatectomía total de entrada con autotrasplante', 'Opioides en dosis crecientes sin límite de tiempo', 'Esperar 10 años hasta que el páncreas se agote'],
    explicacion: 'Con Wirsung dilatado y dolor, el drenaje está indicado; en el ensayo ESCAPE, la cirugía temprana alivió mejor el dolor que el escalonamiento endoscópico. Con masa cefálica se prefiere Frey o Beger.',
    fuente: 'Ensayo ESCAPE; Hermes: Derivación del Wirsung en pancreatitis crónica' }
 ]
},
{
 id: 'pared-03', tema: 'Eventraciones', anio: 2,
 titulo: 'Eventración irreductible con vómitos',
 vineta: 'Mujer de 70 años con eventración mediana conocida, irreductible y dolorosa desde hace 10 horas, con vómitos. Estable, qSOFA negativo. TC: defecto de 5 cm con asa de delgado incarcerada sin signos de isquemia.',
 pasos: [
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Cirugía urgente, evaluando el asa y reparando el defecto', 'Reducción manual bajo sedación y alta con faja', 'Observación 48 horas con sonda nasogástrica', 'Cirugía programada en 2 meses, tras optimizarla'],
    explicacion: 'Una eventración irreductible con oclusión se opera de urgencia para evaluar el intestino y reparar el defecto.',
    fuente: 'EHS 2026, hernia ventral de urgencia; Hermes: Hernia ventral complicada y de urgencia' },
  { tipo: 'Técnica', pregunta: 'El asa es viable, sin resección y sin contaminación. ¿Cómo reparás?',
    opciones: ['Malla sintética macroporosa onlay, con cierre del defecto', 'Sutura simple del defecto sin malla', 'Malla biológica en posición intraperitoneal', 'Malla retromuscular con separación de componentes posterior'],
    explicacion: 'EHS 2026 sugiere reparar con malla en lugar de sutura en el defecto cerrable, y en urgencia prefiere la malla sintética macroporosa en onlay frente al plano retromuscular.',
    fuente: 'EHS 2026, hernia ventral de urgencia' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Si el defecto midiera 14 cm y no pudiera cerrarse sin separación de componentes, ¿qué harías?',
    opciones: ['Cerrar la cavidad y derivar para una reparación planificada', 'Separación de componentes anterior en la misma urgencia', 'Abdomen abierto con presión negativa de rutina', 'Malla puente intraperitoneal permanente de PTFE'],
    explicacion: 'Ante un defecto no cerrable, EHS 2026 sugiere diferir la reconstrucción, cerrar la cavidad (piel, saco o malla absorbible) y derivar a un centro experto.',
    fuente: 'EHS 2026, hernia ventral de urgencia' }
 ]
},
{
 id: 'biliar-08', tema: 'Litiasis vesicular y colecistitis', anio: 2,
 titulo: 'Sepsis en un paciente de terapia intensiva',
 vineta: 'Varón de 70 años en terapia intensiva por un politraumatismo hace 10 días, con nutrición parenteral. Fiebre y aumento de los requerimientos de vasopresor sin otro foco. Ecografía: vesícula distendida sin cálculos, pared de 6 mm, líquido perivesicular.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué sospechás?',
    opciones: ['Colecistitis alitiásica', 'Colecistitis litiásica', 'Colangitis', 'Hallazgo normal en terapia intensiva'],
    explicacion: 'En el paciente crítico (trauma, quemaduras, ayuno, nutrición parenteral, vasopresores), la sepsis sin otro foco con vesícula distendida y alterada sugiere colecistitis alitiásica. La pared engrosada aislada no alcanza para el diagnóstico.',
    fuente: 'Hermes: Colecistitis alitiásica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás en este paciente inestable?',
    opciones: ['Colecistostomía percutánea', 'Colecistectomía abierta inmediata', 'Solo antibióticos', 'CPRE'],
    explicacion: 'En el paciente inestable la colecistostomía drena el foco con poco riesgo. La colecistectomía es definitiva cuando la fisiología lo permite.',
    fuente: 'Hermes: Colecistitis alitiásica y Drenaje de la vesícula biliar' },
  { tipo: 'Medidas generales', pregunta: 'No mejora a las 48 horas del drenaje. ¿Qué hacés?',
    opciones: ['Buscar necrosis, perforación u otro foco, y considerar cirugía', 'Esperar una semana más con el drenaje y el mismo antibiótico', 'Retirar el drenaje y repetir la ecografía', 'Cambiar el antibiótico a un carbapenémico y esperar otras 72 horas'],
    explicacion: 'El drenaje no corrige una vesícula necrótica o perforada; si no hay mejoría hay que reevaluar con imagen y considerar la colecistectomía.',
    fuente: 'Hermes: Colecistitis alitiásica' }
 ]
}
];
