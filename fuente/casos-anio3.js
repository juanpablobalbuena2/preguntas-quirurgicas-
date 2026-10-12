// Tercer año. Primera opción = correcta.
// Fuentes externas: WSES 2020 lesión biliar; SAGES Safe Cholecystectomy; ATA 2015 nódulo y cáncer diferenciado de tiroides;
// ATA 2016 hipertiroidismo; Society for Endocrinology 2016 hipocalcemia aguda; ESGE 2021 hemorragia digestiva no varicosa;
// Maastricht VI/Florence 2022 H. pylori; Lyon 2.0 (2023) ERGE; ESMO 2023 cáncer de colon localizado; ensayo IDEA;
// ESMO 2017 y NCCN cáncer de recto; ensayos RAPIDO y PRODIGE 23; ensayo FLOT4; ensayo ESOPEC; ensayo CROSS;
// EAU 2024 carcinoma renal; AUA 2017 trauma urológico (lesión ureteral).
module.exports = [
{
 id: 'vb-06', tema: 'Vía biliar principal y síndrome coledociano', anio: 3,
 titulo: 'Colecistitis con ictericia y un cálculo en el bacinete',
 vineta: 'Mujer de 58 años con colecistitis crónica reagudizada e ictericia (bilirrubina 4 mg/dl). La colangiorresonancia muestra un cálculo impactado en el bacinete que comprime el hepático común desde afuera, sin litiasis coledociana.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Síndrome de Mirizzi', 'Coledocolitiasis', 'Colangiocarcinoma hiliar', 'Colangitis esclerosante'],
    explicacion: 'La compresión extrínseca del hepático común por un cálculo impactado en el bacinete o el cístico, con ictericia, define el Mirizzi. Si hay erosión de la pared y fístula colecistobiliar, se clasifica en tipos más avanzados.',
    fuente: 'Hermes: Síndrome de Mirizzi' },
  { tipo: 'Conducta quirúrgica', pregunta: 'En la cirugía encontrás inflamación densa del triángulo hepatocístico sin poder lograr la visión crítica. ¿Qué hacés?',
    opciones: ['Colecistectomía subtotal (o conversión), sin disecar el triángulo a ciegas', 'Seguir disecando hasta encontrar el cístico', 'Seccionar la estructura tubular más gruesa', 'Abandonar la cirugía sin hacer nada'],
    explicacion: 'En el Mirizzi el hepático común está pegado al bacinete y es fácil lesionarlo. Sin visión crítica se recurre a una estrategia de rescate: colecistectomía subtotal, conversión o, en tipos con fístula, reparación de la vía biliar.',
    fuente: 'SAGES Safe Cholecystectomy; Hermes: Síndrome de Mirizzi y Colecistectomía subtotal' },
  { tipo: 'Técnica', pregunta: 'Si hubiera una fístula que comprometa más de la mitad de la circunferencia del hepático, ¿qué reparación es la habitual?',
    opciones: ['Anastomosis biliodigestiva (hepaticoyeyunostomía en Y de Roux)', 'Sutura primaria sin tubo', 'Ligadura del hepático', 'Solo drenaje subhepático'],
    explicacion: 'Las fístulas grandes dejan un defecto que no se cierra sin estenosis; la reconstrucción con hepaticoyeyunostomía es la opción habitual. Los defectos pequeños pueden cerrarse sobre un tubo o con un colgajo de vesícula.',
    fuente: 'Hermes: Síndrome de Mirizzi; Técnica de la anastomosis biliodigestiva' }
 ]
},
{
 id: 'lap-01', tema: 'Cirugía laparoscópica de la vía biliar', anio: 3,
 titulo: 'Neumoperitoneo en un paciente con cirugías previas',
 vineta: 'Varón de 55 años con laparotomía mediana previa por una perforación. Se programa colecistectomía laparoscópica por litiasis sintomática.',
 pasos: [
  { tipo: 'Técnica', pregunta: '¿Cómo hacés el acceso inicial?',
    opciones: ['Técnica abierta de Hasson o acceso por el punto de Palmer, lejos de la cicatriz', 'Aguja de Veress en el ombligo a ciegas', 'Trocar óptico directo sobre la cicatriz', 'No se puede operar por laparoscopia'],
    explicacion: 'Con cirugía previa hay riesgo de adherencias bajo la cicatriz; se entra con técnica abierta o en un sitio alejado, como el cuadrante superior izquierdo (punto de Palmer).',
    fuente: 'Hermes: Neumoperitoneo con técnica abierta de Hasson; Principios de cirugía laparoscópica' },
  { tipo: 'Medidas generales', pregunta: '¿Con qué presión de neumoperitoneo trabajás habitualmente?',
    opciones: ['12 a 15 mmHg', '25 a 30 mmHg', '2 a 4 mmHg', '40 mmHg'],
    explicacion: 'Entre 12 y 15 mmHg se logra espacio de trabajo con repercusión hemodinámica y respiratoria tolerable; presiones mayores reducen el retorno venoso y la ventilación.',
    fuente: 'Hermes: Principios de cirugía laparoscópica' },
  { tipo: 'Diagnóstico', pregunta: 'Al insuflar cae bruscamente la capnografía, hay hipotensión y un soplo en rueda de molino. ¿Qué sospechás?',
    opciones: ['Embolia gaseosa de CO2', 'Neumotórax a tensión', 'Reacción alérgica', 'Hipotermia'],
    explicacion: 'La caída del CO2 espirado con colapso hemodinámico y soplo en rueda de molino al insuflar indican embolia gaseosa: se suspende la insuflación, se desinfla, se coloca al paciente en decúbito lateral izquierdo con Trendelenburg y se ventila con oxígeno al 100 %.',
    fuente: 'Hermes: Principios de cirugía laparoscópica' }
 ]
},
{
 id: 'lap-02', tema: 'Cirugía laparoscópica de la vía biliar', anio: 3,
 titulo: 'Identificación segura antes de clipar',
 vineta: 'Colecistectomía laparoscópica programada en una mujer de 45 años. Disecaste el triángulo hepatocístico.',
 pasos: [
  { tipo: 'Técnica', pregunta: '¿Qué tres criterios definen la visión crítica de seguridad?',
    opciones: ['Triángulo hepatocístico libre de grasa y tejido, tercio inferior de la vesícula separado del lecho y solo dos estructuras entrando en la vesícula', 'Ver el colédoco, el hepático y la arteria hepática', 'Colangiografía normal, cístico corto y arteria única', 'Vesícula vacía, cístico clipado y lecho seco'],
    explicacion: 'La visión crítica de Strasberg tiene tres criterios; se documenta con foto o video antes de clipar. Su objetivo es evitar la falsa identificación del colédoco como cístico.',
    fuente: 'SAGES Safe Cholecystectomy; Hermes: Prevención de lesiones durante la colecistectomía' },
  { tipo: 'Estudios', pregunta: 'La anatomía sigue dudosa. ¿Qué podés agregar para aclararla?',
    opciones: ['Colangiografía intraoperatoria o fluorescencia con verde de indocianina', 'Ecografía abdominal de control al día siguiente', 'TC intraoperatoria', 'Nada; clipar igual'],
    explicacion: 'Cuando la anatomía no es clara, la colangiografía o la fluorescencia ayudan a identificar los conductos. No sustituyen la visión crítica pero suman información.',
    fuente: 'Hermes: Colangiografía peroperatoria por fluoroscopia y Colangiografía fluorescente con indocianina verde' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Si aun así no lográs la visión crítica, ¿qué hacés?',
    opciones: ['Estrategia de rescate: colecistectomía subtotal, colecistostomía o conversión', 'Clipar la estructura que parece el cístico', 'Seguir disecando sin límite de tiempo', 'Seccionar todo lo que entra en la vesícula'],
    explicacion: 'Las estrategias de rescate evitan la lesión biliar cuando el triángulo es inseguro. Convertir no siempre resuelve el problema; la subtotal es muchas veces la opción más segura.',
    fuente: 'SAGES Safe Cholecystectomy; Hermes: Colecistectomía subtotal' }
 ]
},
{
 id: 'lesbil-01', tema: 'Lesiones quirúrgicas de la vía biliar', anio: 3,
 titulo: 'Bilis por el drenaje al segundo día',
 vineta: 'Mujer de 50 años en el día 2 de una colecistectomía laparoscópica. Por el drenaje salen 300 ml/día de bilis. Afebril, sin ictericia, abdomen blando. La colangiorresonancia muestra una vía biliar continua y sin estenosis.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué lesión es la más probable?',
    opciones: ['Fuga del muñón cístico o de un conducto de Luschka (Strasberg A)', 'Sección completa del colédoco (E)', 'Ligadura del hepático (E2)', 'Lesión lateral del hepático con estenosis (D)'],
    explicacion: 'Una fuga con vía biliar continua y sin estenosis es una lesión menor, generalmente del muñón cístico o de un conducto accesorio del lecho.',
    fuente: 'WSES 2020, lesión biliar; Hermes: Lesión de la vía biliar principal en colecistectomía' },
  { tipo: 'Conducta quirúrgica', pregunta: 'La fuga no disminuye. ¿Qué indicás?',
    opciones: ['CPRE con esfinterotomía y prótesis biliar', 'Hepaticoyeyunostomía', 'Relaparotomía y sutura del colédoco', 'Retirar el drenaje'],
    explicacion: 'La CPRE baja la presión de la vía biliar y la fuga cierra en la gran mayoría; si hay una colección sin drenaje, se drena por vía percutánea.',
    fuente: 'WSES 2020, lesión biliar' }
 ]
},
{
 id: 'lesbil-02', tema: 'Lesiones quirúrgicas de la vía biliar', anio: 3,
 titulo: 'Ictericia progresiva y clips sobre el hepático',
 vineta: 'Varón de 42 años, 5 días después de una colecistectomía laparoscópica dificultosa. Ictericia progresiva (bilirrubina 8 mg/dl), fiebre y dolor. Ecografía: vía biliar intrahepática dilatada y colección subhepática. Colangiorresonancia: interrupción completa del hepático común a 2 cm de la confluencia.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tipo de lesión es?',
    opciones: ['Lesión mayor, Strasberg E (tipo E2 por el nivel)', 'Lesión menor tipo A', 'Lesión tipo D lateral', 'Coledocolitiasis residual'],
    explicacion: 'La pérdida de continuidad de la vía principal es una lesión tipo E; el subtipo depende de la distancia a la confluencia (E1 más de 2 cm, E2 menos de 2 cm).',
    fuente: 'Hermes: Lesión de la vía biliar principal en colecistectomía' },
  { tipo: 'Medidas generales', pregunta: '¿Qué hacés primero?',
    opciones: ['Controlar la sepsis: drenaje percutáneo de la colección y de la vía biliar, antibióticos y soporte', 'Hepaticoyeyunostomía inmediata en el hospital donde ocurrió', 'Observar', 'Colocar una prótesis por CPRE para unir los extremos'],
    explicacion: 'Pasadas las primeras 72 horas, con colección e infección, primero se controla la sepsis y se define la anatomía; la reparación se hace con los tejidos en condiciones y por un equipo con experiencia.',
    fuente: 'WSES 2020, lesión biliar; Hermes: Manejo percutáneo de la lesión biliar iatrogénica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cuál es la reparación definitiva?',
    opciones: ['Hepaticoyeyunostomía en Y de Roux, en un centro con experiencia', 'Anastomosis terminoterminal del colédoco', 'Coledocoduodenostomía', 'Prótesis biliar permanente'],
    explicacion: 'La hepaticoyeyunostomía en Y de Roux, con mucosa sana y sin tensión, es la reparación estándar de las lesiones tipo E; la anastomosis terminoterminal tiene alta tasa de estenosis.',
    fuente: 'WSES 2020, lesión biliar; Hermes: Hepaticoyeyunostomía' },
  { tipo: 'Estudios', pregunta: '¿Qué estudio agregás antes de reparar?',
    opciones: ['Evaluación de la arteria hepática derecha (angio-TC)', 'Endoscopia digestiva alta', 'Colonoscopia', 'Gammagrafía ósea'],
    explicacion: 'La lesión combinada de la arteria hepática derecha es frecuente en las lesiones altas y condiciona el nivel de la reconstrucción.',
    fuente: 'Hermes: Lesión de la vía biliar principal en colecistectomía' }
 ]
},
{
 id: 'tiroides-01', tema: 'Patología tiroidea', anio: 3,
 titulo: 'Nódulo tiroideo en una ecografía',
 vineta: 'Mujer de 45 años con un nódulo tiroideo de 1,8 cm, sólido, hipoecoico, con microcalcificaciones y bordes irregulares. TSH normal. Sin adenopatías palpables.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué estudio pedís?',
    opciones: ['Punción con aguja fina guiada por ecografía', 'Centellograma tiroideo', 'Tiroidectomía directa', 'Control ecográfico en 2 años'],
    explicacion: 'Un nódulo sólido hipoecoico con microcalcificaciones y bordes irregulares es de alta sospecha; se punza desde 1 cm. El centellograma solo se pide con TSH baja.',
    fuente: 'ATA 2015, nódulo tiroideo; Hermes: Nódulo tiroideo' },
  { tipo: 'Diagnóstico', pregunta: 'La citología es Bethesda VI. ¿Qué significa?',
    opciones: ['Maligno (habitualmente carcinoma papilar)', 'Benigno', 'No diagnóstico', 'Atipia de significado incierto'],
    explicacion: 'Bethesda VI es maligno, con más del 95 % de riesgo; la mayoría corresponde a carcinoma papilar.',
    fuente: 'Sistema Bethesda; Hermes: Nódulo tiroideo' },
  { tipo: 'Estudios', pregunta: '¿Qué estudio hacés antes de operar?',
    opciones: ['Ecografía de los compartimentos ganglionares central y lateral del cuello', 'PET-TC de rutina', 'Tiroglobulina para diagnóstico', 'Centellograma corporal total'],
    explicacion: 'La ecografía cervical preoperatoria busca metástasis ganglionares que cambiarían la extensión de la cirugía.',
    fuente: 'ATA 2015, cáncer diferenciado de tiroides' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Es un tumor de 1,8 cm sin extensión extratiroidea ni ganglios. ¿Qué cirugía es aceptable?',
    opciones: ['Lobectomía o tiroidectomía total, decidida con la paciente', 'Solo tiroidectomía total con vaciamiento central y lateral', 'Enucleación del nódulo', 'Observación obligatoria'],
    explicacion: 'Para tumores de 1 a 4 cm sin extensión extratiroidea ni ganglios, ATA 2015 acepta tanto la lobectomía como la tiroidectomía total; el vaciamiento se reserva para ganglios comprometidos.',
    fuente: 'ATA 2015, cáncer diferenciado de tiroides' }
 ]
},
{
 id: 'tiroides-02', tema: 'Patología tiroidea', anio: 3,
 titulo: 'Hormigueos después de una tiroidectomía total',
 vineta: 'Mujer de 40 años en el primer día de una tiroidectomía total por bocio. Refiere parestesias peribucales y en los dedos. Signo de Chvostek positivo. Calcio total 7,0 mg/dl.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Hipocalcemia por hipoparatiroidismo posoperatorio', 'Lesión del nervio laríngeo recurrente', 'Crisis tirotóxica', 'Hematoma cervical'],
    explicacion: 'Parestesias, Chvostek positivo y calcio bajo tras una tiroidectomía total indican hipoparatiroidismo, por lesión o desvascularización de las paratiroides.',
    fuente: 'Hermes: Tiroidectomía' },
  { tipo: 'Fármaco', pregunta: 'Con síntomas y calcio de 7 mg/dl, ¿qué indicás?',
    opciones: ['Gluconato de calcio IV', 'Solo calcio oral', 'Levotiroxina', 'Furosemida'],
    explicacion: 'La hipocalcemia sintomática o grave se trata con calcio IV y monitoreo electrocardiográfico; luego se pasa a calcio oral con calcitriol.',
    fuente: 'Society for Endocrinology 2016, hipocalcemia aguda' },
  { tipo: 'Dosis', pregunta: '¿Con qué dosis inicial?',
    opciones: ['10 a 20 ml de gluconato de calcio al 10 % diluidos, en unos 10 minutos', '100 ml al 10 % en bolo rápido', '1 ml por vía subcutánea', '500 mg por vía oral'],
    explicacion: 'Se administran 10 a 20 ml de gluconato de calcio al 10 % en 50 a 100 ml de dextrosa al 5 % en unos 10 minutos, con monitoreo, seguido de una infusión si persiste.',
    fuente: 'Society for Endocrinology 2016, hipocalcemia aguda' },
  { tipo: 'Medidas generales', pregunta: 'Para el alta, ¿qué indicás?',
    opciones: ['Calcio oral más calcitriol, con control del calcio y de la PTH', 'Nada', 'Solo dieta rica en lácteos', 'Vitamina D en dosis única de por vida'],
    explicacion: 'El hipoparatiroidismo posoperatorio se maneja con calcio oral y calcitriol; la mayoría es transitorio, y se define como permanente si persiste más de 6 a 12 meses.',
    fuente: 'Hermes: Tiroidectomía' }
 ]
},
{
 id: 'tiroides-03', tema: 'Patología tiroidea', anio: 3,
 titulo: 'Enfermedad de Graves para cirugía',
 vineta: 'Mujer de 30 años con enfermedad de Graves, bocio grande y oftalmopatía moderada. Recibe metimazol y está eutiroidea. Se decide tiroidectomía total.',
 pasos: [
  { tipo: 'Fármaco', pregunta: '¿Qué agregás en los días previos a la cirugía?',
    opciones: ['Yoduro de potasio (solución de Lugol o SSKI)', 'Levotiroxina', 'Iodo radiactivo', 'Corticoides en dosis altas'],
    explicacion: 'En la enfermedad de Graves, el yoduro preoperatorio reduce la vascularización de la glándula y el sangrado intraoperatorio.',
    fuente: 'ATA 2016, hipertiroidismo' },
  { tipo: 'Dosis', pregunta: '¿Con qué esquema?',
    opciones: ['Lugol 5 a 7 gotas (o SSKI 1 a 2 gotas) 3 veces por día durante 10 días antes de la cirugía', '1 gota por semana durante 3 meses', 'Una dosis única el día de la cirugía', '50 gotas por día durante 2 días'],
    explicacion: 'ATA 2016 indica Lugol 5 a 7 gotas o SSKI 1 a 2 gotas tres veces por día, diluidas en agua o jugo, durante 10 días antes de la operación.',
    fuente: 'ATA 2016, hipertiroidismo' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué cirugía indicás?',
    opciones: ['Tiroidectomía total', 'Lobectomía unilateral', 'Tiroidectomía subtotal bilateral', 'Istmectomía'],
    explicacion: 'En la enfermedad de Graves se prefiere la tiroidectomía total, porque elimina el riesgo de recurrencia con complicaciones similares a la subtotal.',
    fuente: 'ATA 2016, hipertiroidismo' },
  { tipo: 'Dosis', pregunta: 'Después, ¿con qué dosis inicial de levotiroxina la reemplazás?',
    opciones: ['Alrededor de 1,6 µg/kg/día, ajustando por TSH a las 6 a 8 semanas', '10 µg/kg/día', '25 µg por semana', 'No necesita reemplazo'],
    explicacion: 'La dosis de reemplazo completa es cercana a 1,6 µg/kg/día; se ajusta con la TSH a las 6 a 8 semanas.',
    fuente: 'ATA 2016, hipertiroidismo' }
 ]
},
{
 id: 'ulcera-01', tema: 'Úlcera gastroduodenal', anio: 3,
 titulo: 'Melena y un coágulo en la úlcera',
 vineta: 'Varón de 67 años que toma ibuprofeno por artrosis. Melena e hipotensión que responde a cristaloides. Hemoglobina 7,8 g/dl. Endoscopia a las 12 horas: úlcera bulbar posterior de 1,5 cm con vaso visible no sangrante.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué clasificación de Forrest tiene?',
    opciones: ['Forrest IIa (vaso visible)', 'Forrest Ia', 'Forrest IIc', 'Forrest III'],
    explicacion: 'El vaso visible no sangrante es Forrest IIa, de alto riesgo de resangrado, por lo que requiere tratamiento endoscópico.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa; Hermes: Complicaciones de la úlcera gastroduodenal' },
  { tipo: 'Medidas generales', pregunta: '¿Con qué umbral transfundís glóbulos rojos?',
    opciones: ['Hemoglobina menor de 7 g/dl (8 si hay enfermedad cardiovascular)', 'Hemoglobina menor de 10 g/dl siempre', 'Nunca', 'Solo si la hemoglobina es menor de 5'],
    explicacion: 'La estrategia restrictiva, con umbral de 7 g/dl y objetivo de 7 a 9, reduce la mortalidad y el resangrado; en cardiópatas se usa un umbral más alto.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa' },
  { tipo: 'Fármaco', pregunta: 'Después de la terapia endoscópica, ¿qué indicás?',
    opciones: ['Inhibidor de la bomba de protones en dosis altas', 'Antiácidos', 'Bloqueante H2 en dosis bajas', 'Ninguno'],
    explicacion: 'Tras la hemostasia endoscópica de una úlcera de alto riesgo, el inhibidor de bomba en dosis altas reduce el resangrado.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa' },
  { tipo: 'Dosis', pregunta: '¿Con qué esquema?',
    opciones: ['Bolo IV de 80 mg y luego 8 mg/h (o bolos intermitentes en dosis altas) durante 72 horas', '20 mg VO por día', '40 mg IV por semana', '80 mg IV dosis única'],
    explicacion: 'El esquema es un bolo de 80 mg seguido de infusión de 8 mg/h o bolos intermitentes en dosis altas durante 72 horas, y luego dos dosis diarias por vía oral.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Resangra y falla una segunda endoscopia. ¿Qué hacés?',
    opciones: ['Angioembolización transarterial o cirugía (duodenotomía con ligadura del vaso)', 'Tercera endoscopia de rutina', 'Más inhibidor de bomba', 'Transfundir y esperar'],
    explicacion: 'Si falla el segundo intento endoscópico, la embolización de la gastroduodenal o la cirugía con ligadura del vaso son las opciones de rescate.',
    fuente: 'ESGE 2021; Hermes: Complicaciones de la úlcera gastroduodenal' },
  { tipo: 'Fármaco', pregunta: 'La biopsia muestra Helicobacter pylori. ¿Qué tratamiento de erradicación indicás donde no se conoce la resistencia a la claritromicina?',
    opciones: ['Cuádruple con bismuto (inhibidor de bomba, bismuto, tetraciclina y metronidazol) durante 14 días', 'Triple con claritromicina durante 7 días', 'Amoxicilina sola', 'Solo inhibidor de bomba'],
    explicacion: 'Maastricht VI recomienda la cuádruple con bismuto durante 14 días cuando la resistencia a la claritromicina es alta o desconocida, y confirmar la erradicación con prueba de aliento.',
    fuente: 'Maastricht VI/Florence 2022' }
 ]
},
{
 id: 'ulcera-02', tema: 'Úlcera gastroduodenal', anio: 3,
 titulo: 'Úlcera gástrica que no cicatriza',
 vineta: 'Varón de 60 años con una úlcera de 2 cm en la curvatura menor del antro. Erradicó H. pylori y recibió inhibidor de bomba 12 semanas, pero la úlcera persiste. Las biopsias fueron negativas.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué hacés antes de decidir la cirugía?',
    opciones: ['Repetir la endoscopia con biopsias múltiples para descartar cáncer', 'Operar sin más estudios', 'Suspender el tratamiento', 'Una TC alcanza'],
    explicacion: 'Toda úlcera gástrica refractaria obliga a repetir las biopsias, porque puede ser un cáncer; también se revisan el consumo de AINE y la erradicación.',
    fuente: 'Hermes: Enfermedad ulcerosa péptica' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Persiste refractaria y benigna. ¿Qué cirugía indicás?',
    opciones: ['Gastrectomía distal incluyendo la úlcera, con reconstrucción tipo Billroth I o Y de Roux', 'Vagotomía troncular sola', 'Gastrectomía total', 'Fundoplicatura'],
    explicacion: 'La úlcera gástrica refractaria se reseca con una gastrectomía distal que la incluya; así se trata y se obtiene diagnóstico histológico completo.',
    fuente: 'Hermes: Gastrectomía; Reconstrucción después de gastrectomía' },
  { tipo: 'Diagnóstico', pregunta: 'Meses después tiene sudoración, palpitaciones y diarrea a los 20 minutos de comer. ¿Qué es?',
    opciones: ['Síndrome de dumping temprano', 'Dumping tardío por hipoglucemia', 'Síndrome del asa aferente', 'Úlcera de la boca anastomótica'],
    explicacion: 'Los síntomas vasomotores y digestivos en los primeros 30 minutos se deben al paso rápido de contenido hiperosmolar al intestino; el dumping tardío ocurre 1 a 3 horas después por hipoglucemia.',
    fuente: 'Hermes: Complicaciones de gastrectomía' },
  { tipo: 'Medidas generales', pregunta: '¿Qué indicás primero para el dumping?',
    opciones: ['Comidas pequeñas y frecuentes, pobres en azúcares simples, sin líquidos durante la comida', 'Reoperación', 'Dieta rica en azúcares', 'Ayuno'],
    explicacion: 'La mayoría mejora con medidas dietéticas; el octreótido o la reoperación se reservan para los casos refractarios.',
    fuente: 'Hermes: Complicaciones de gastrectomía' }
 ]
},
{
 id: 'erge-01', tema: 'Reflujo gastroesofágico y cirugía antirreflujo', anio: 3,
 titulo: 'Pirosis de años',
 vineta: 'Varón de 42 años con pirosis y regurgitación desde hace 5 años, sin disfagia, sin pérdida de peso ni anemia. IMC 29.',
 pasos: [
  { tipo: 'Medidas generales', pregunta: '¿Qué medidas generales indicás?',
    opciones: ['Bajar de peso, elevar la cabecera de la cama y no cenar en las 2 a 3 horas previas a acostarse', 'Dieta líquida', 'Reposo', 'Ninguna'],
    explicacion: 'La pérdida de peso, la elevación de la cabecera y evitar comer antes de acostarse tienen respaldo para mejorar el reflujo.',
    fuente: 'Hermes: Enfermedad por reflujo gastroesofágico' },
  { tipo: 'Fármaco', pregunta: '¿Qué tratamiento farmacológico inicial indicás?',
    opciones: ['Inhibidor de la bomba de protones en dosis estándar, antes del desayuno, durante 8 semanas', 'Antiácidos a demanda solamente', 'Procinéticos solos', 'Antibióticos'],
    explicacion: 'El inhibidor de bomba en dosis estándar, tomado 30 a 60 minutos antes del desayuno durante 8 semanas, es el tratamiento inicial del reflujo típico sin síntomas de alarma.',
    fuente: 'Hermes: Enfermedad por reflujo gastroesofágico' },
  { tipo: 'Estudios', pregunta: 'Persiste regurgitación pese al tratamiento y quiere operarse. ¿Qué estudios pedís?',
    opciones: ['Endoscopia, pH-metría (o pH-impedancia) sin inhibidor de bomba y manometría', 'Solo una radiografía de tórax', 'Solo endoscopia', 'TC de abdomen'],
    explicacion: 'Antes de la cirugía hay que demostrar el reflujo en forma objetiva (esofagitis grave o tiempo de exposición ácida elevado) y descartar con manometría un trastorno motor como la acalasia.',
    fuente: 'Lyon 2.0 (2023); Hermes: Fundoplicatura laparoscópica' },
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiempo de exposición ácida en la pH-metría es concluyente de reflujo según Lyon?',
    opciones: ['Más del 6 %', 'Más del 1 %', 'Más del 30 %', 'Cualquier valor'],
    explicacion: 'Según el consenso de Lyon, un tiempo de exposición ácida mayor del 6 % es concluyente, menor del 4 % es normal y entre 4 y 6 % es indeterminado.',
    fuente: 'Lyon 2.0 (2023)' },
  { tipo: 'Técnica', pregunta: 'Los estudios confirman reflujo con motilidad normal. ¿Qué cirugía indicás?',
    opciones: ['Fundoplicatura laparoscópica con cierre de pilares', 'Gastrectomía', 'Esofagectomía', 'Miotomía de Heller'],
    explicacion: 'La fundoplicatura laparoscópica con cierre crural es el tratamiento quirúrgico estándar; la miotomía es para acalasia.',
    fuente: 'Hermes: Fundoplicatura laparoscópica' }
 ]
},
{
 id: 'erge-02', tema: 'Reflujo gastroesofágico y cirugía antirreflujo', anio: 3,
 titulo: 'Hernia paraesofágica sintomática',
 vineta: 'Mujer de 74 años con plenitud posprandial, dolor torácico al comer y anemia ferropénica. TC: hernia paraesofágica con más de la mitad del estómago en el tórax.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué explica la anemia?',
    opciones: ['Úlceras o erosiones de Cameron en el cuello herniario', 'Cáncer gástrico seguro', 'Hemorroides', 'Déficit de vitamina B12'],
    explicacion: 'Las lesiones de Cameron, erosiones lineales en el cuello de la hernia, causan pérdida crónica de sangre; igual corresponde la endoscopia para descartar otras causas.',
    fuente: 'Hermes: Hernia hiatal y paraesofágica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Reparación laparoscópica programada: reducción, resección del saco, cierre de pilares y fundoplicatura', 'Observación', 'Gastrectomía total', 'Solo hierro'],
    explicacion: 'La hernia paraesofágica sintomática se repara; los pasos clave son reducir el estómago, resecar el saco, lograr esófago intraabdominal sin tensión, cerrar los pilares y agregar una fundoplicatura.',
    fuente: 'Hermes: Hernia hiatal y paraesofágica' },
  { tipo: 'Diagnóstico', pregunta: 'Si llegara con dolor intenso, arcadas sin vómito e imposibilidad de pasar una sonda nasogástrica, ¿qué sospecharías?',
    opciones: ['Vólvulo gástrico agudo (tríada de Borchardt)', 'Infarto de miocardio', 'Pancreatitis', 'Cólico biliar'],
    explicacion: 'La tríada de Borchardt (dolor epigástrico, arcadas improductivas e imposibilidad de pasar la sonda) indica vólvulo gástrico, una urgencia por riesgo de isquemia.',
    fuente: 'Hermes: Hernia hiatal y paraesofágica' }
 ]
},
{
 id: 'mama-03', tema: 'Patología mamaria y cáncer de mama', anio: 3,
 titulo: 'Microcalcificaciones en un control',
 vineta: 'Mujer de 52 años asintomática. Mamografía de control: microcalcificaciones finas lineales agrupadas en 2 cm del cuadrante superoexterno izquierdo (BI-RADS 4C).',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Cómo obtenés el diagnóstico?',
    opciones: ['Biopsia asistida por vacío guiada por estereotaxia', 'Control en 6 meses', 'Ecografía y alta', 'Mastectomía directa'],
    explicacion: 'Las microcalcificaciones sospechosas sin masa se biopsian con guía estereotáxica, habitualmente con sistemas asistidos por vacío; se deja un marcador.',
    fuente: 'Hermes: Evaluación de la patología mamaria' },
  { tipo: 'Diagnóstico', pregunta: 'Informa carcinoma ductal in situ de alto grado. ¿Qué significa?',
    opciones: ['Proliferación maligna confinada a los conductos, sin invasión de la membrana basal', 'Cáncer invasor con metástasis', 'Lesión benigna sin riesgo', 'Mastopatía fibroquística'],
    explicacion: 'El carcinoma in situ no atraviesa la membrana basal y por eso no da metástasis ganglionares, pero puede progresar a invasor.',
    fuente: 'Hermes: Cáncer de mama' },
  { tipo: 'Técnica', pregunta: '¿Cómo lo resecás?',
    opciones: ['Escisión localizada con marcación (arpón o semilla) y márgenes negativos, con radiografía de la pieza', 'Mastectomía radical modificada', 'Vaciamiento axilar', 'Resección sin marcación'],
    explicacion: 'Las lesiones no palpables se localizan antes de operar y se verifica en la pieza que las calcificaciones fueron resecadas. Después de la cirugía conservadora se indica radioterapia.',
    fuente: 'Hermes: Cáncer de mama' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Hacés biopsia de ganglio centinela en la cirugía conservadora del carcinoma in situ?',
    opciones: ['No de rutina; sí si se hace mastectomía o hay sospecha de invasión', 'Sí, siempre', 'Vaciamiento axilar siempre', 'Solo si es bajo grado'],
    explicacion: 'Sin invasión no hay metástasis ganglionares; el centinela se agrega en la mastectomía (porque después no puede hacerse) o si se sospecha un componente invasor.',
    fuente: 'Hermes: Cirugía axilar en cáncer de mama' }
 ]
},
{
 id: 'uro-01', tema: 'Nefrectomías', anio: 3,
 titulo: 'Masa renal incidental',
 vineta: 'Varón de 58 años con una masa sólida de 3 cm en el polo inferior del riñón derecho, con realce, hallada en una TC por otro motivo. Función renal normal y riñón contralateral sano.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué es lo más probable?',
    opciones: ['Carcinoma de células renales (T1a)', 'Quiste simple', 'Angiomiolipoma con grasa macroscópica', 'Absceso renal'],
    explicacion: 'Una masa sólida que realza es un carcinoma renal hasta demostrar lo contrario; menor de 4 cm es T1a. El angiomiolipoma se reconoce por grasa macroscópica.',
    fuente: 'EAU 2024, carcinoma renal; Hermes: Nefrectomía' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué cirugía indicás?',
    opciones: ['Nefrectomía parcial', 'Nefrectomía radical', 'Nefroureterectomía', 'Observación obligatoria'],
    explicacion: 'Para tumores T1 que técnicamente lo permitan se prefiere la nefrectomía parcial, porque preserva función renal con control oncológico equivalente.',
    fuente: 'EAU 2024, carcinoma renal' },
  { tipo: 'Técnica', pregunta: 'Si hicieras una nefrectomía radical, ¿en qué orden tratás los vasos del pedículo?',
    opciones: ['Primero la arteria y luego la vena', 'Primero la vena y luego la arteria', 'Ambos juntos en masa', 'No importa'],
    explicacion: 'Ligar primero la arteria evita la congestión y el sangrado del riñón que se produciría al ocluir la vena con la arteria abierta.',
    fuente: 'Hermes: Nefrectomía' }
 ]
},
{
 id: 'uro-02', tema: 'Histerectomías', anio: 3,
 titulo: 'Uréter seccionado durante una histerectomía',
 vineta: 'Durante una histerectomía abdominal por miomas, al ligar la arteria uterina izquierda notás orina en el campo y un uréter seccionado a 3 cm de la vejiga.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Dónde es más vulnerable el uréter en la histerectomía?',
    opciones: ['Donde cruza por debajo de la arteria uterina, cerca del cuello', 'En la pelvis renal', 'En el cruce con el psoas a nivel lumbar', 'En el hilio renal'],
    explicacion: 'El uréter pasa por debajo de la arteria uterina a unos 1,5 a 2 cm del cuello uterino ("el agua pasa bajo el puente"); también es vulnerable en el ligamento infundibulopélvico.',
    fuente: 'Hermes: Histerectomía; Lesión iatrogénica de la vía urinaria' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cómo reparás una sección del uréter distal tan cerca de la vejiga?',
    opciones: ['Reimplante ureterovesical (con psoas hitch si hace falta), sobre un catéter doble J', 'Ureteroureterostomía terminoterminal', 'Ligadura del uréter', 'Nefrectomía'],
    explicacion: 'Las lesiones del tercio distal se reparan con reimplante en la vejiga; el psoas hitch o el colgajo de Boari ganan longitud. La anastomosis terminoterminal es para lesiones cortas del tercio medio o superior.',
    fuente: 'AUA 2017, trauma urológico; Hermes: Lesión iatrogénica de la vía urinaria' },
  { tipo: 'Medidas generales', pregunta: '¿Qué principio general guía la reparación?',
    opciones: ['Reconocerla en la misma cirugía y repararla sin tensión, con espatulado, sutura reabsorbible y drenaje', 'Esperar a que dé síntomas', 'Sutura con material no reabsorbible', 'No drenar'],
    explicacion: 'La reparación inmediata tiene mejores resultados; se usan anastomosis sin tensión, espatuladas, con sutura reabsorbible, catéter y drenaje.',
    fuente: 'AUA 2017, trauma urológico' }
 ]
},
{
 id: 'colon-01', tema: 'Cáncer de colon', anio: 3,
 titulo: 'Anemia y tumor en el ciego',
 vineta: 'Mujer de 68 años con anemia ferropénica y astenia. Colonoscopia: tumor ulcerado en el ciego; la biopsia informa adenocarcinoma. El resto del colon está libre.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué estudios de estadificación pedís?',
    opciones: ['TC de tórax, abdomen y pelvis con contraste y CEA', 'Solo ecografía', 'PET-TC de rutina', 'Resonancia de cerebro'],
    explicacion: 'La estadificación del cáncer de colon se hace con TC de tórax, abdomen y pelvis y CEA basal; el PET se reserva para situaciones dudosas.',
    fuente: 'ESMO 2023, cáncer de colon localizado; Hermes: Cirugía del cáncer de colon' },
  { tipo: 'Conducta quirúrgica', pregunta: 'No hay metástasis. ¿Qué cirugía indicás?',
    opciones: ['Hemicolectomía derecha con ligadura central de los vasos ileocólicos y linfadenectomía', 'Resección segmentaria del ciego', 'Colectomía total', 'Polipectomía endoscópica'],
    explicacion: 'El cáncer del ciego se trata con hemicolectomía derecha oncológica, con ligadura en el origen de los vasos y resección del mesocolon con sus ganglios.',
    fuente: 'Hermes: Colectomía derecha' },
  { tipo: 'Técnica', pregunta: '¿Cuántos ganglios como mínimo debe tener la pieza para una estadificación adecuada?',
    opciones: ['12', '3', '30', 'No importa'],
    explicacion: 'Al menos 12 ganglios en la pieza son necesarios para estadificar con confianza; menos de 12 se considera factor de riesgo en estadio II.',
    fuente: 'ESMO 2023, cáncer de colon localizado' },
  { tipo: 'Fármaco', pregunta: 'La anatomía patológica es pT3 N1 (estadio III). ¿Qué indicás?',
    opciones: ['Quimioterapia adyuvante con fluoropirimidina y oxaliplatino (CAPOX o FOLFOX)', 'Solo seguimiento', 'Radioterapia adyuvante', 'Inmunoterapia de rutina'],
    explicacion: 'El estadio III recibe quimioterapia adyuvante con oxaliplatino y fluoropirimidina; reduce la recurrencia y la mortalidad.',
    fuente: 'ESMO 2023, cáncer de colon localizado' },
  { tipo: 'Dosis', pregunta: '¿Cuánto dura en un estadio III de bajo riesgo (T1-3 N1) con CAPOX?',
    opciones: ['3 meses', '2 semanas', '2 años', '12 meses'],
    explicacion: 'El análisis IDEA mostró que 3 meses de CAPOX son no inferiores a 6 en el estadio III de bajo riesgo, con mucha menos neuropatía; en alto riesgo (T4 o N2) se prefieren 6 meses.',
    fuente: 'Ensayo IDEA; ESMO 2023' }
 ]
},
{
 id: 'colon-02', tema: 'Cáncer de colon', anio: 3,
 titulo: 'Oclusión por cáncer de sigma',
 vineta: 'Varón de 76 años con distensión, vómitos y sin eliminación de gases desde hace 3 días. TC: tumor estenosante del sigma con colon proximal dilatado (ciego de 9 cm) sin perforación ni metástasis. Estable.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué riesgo tiene un ciego tan dilatado con válvula ileocecal competente?',
    opciones: ['Perforación del ciego por la obstrucción en asa cerrada', 'Ninguno', 'Vólvulo de sigma', 'Pancreatitis'],
    explicacion: 'Con válvula competente el colon queda en asa cerrada; el ciego es el segmento de mayor diámetro y el que se perfora, sobre todo por encima de 10 a 12 cm.',
    fuente: 'Hermes: Cirugía del cáncer de colon' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué opciones son razonables?',
    opciones: ['Resección con colostomía terminal (Hartmann) o, en centros con experiencia, prótesis como puente a la cirugía', 'Observar con sonda nasogástrica una semana', 'Colonoscopia y alta', 'Quimioterapia sin descompresión'],
    explicacion: 'La obstrucción izquierda se resuelve con resección (Hartmann o anastomosis con o sin ostomía de protección según el paciente) o con prótesis como puente; ambas son aceptables según el contexto y la experiencia.',
    fuente: 'Hermes: Cirugía del cáncer de colon' },
  { tipo: 'Técnica', pregunta: 'En la laparotomía el ciego está isquémico con desgarros serosos. ¿Qué hacés?',
    opciones: ['Colectomía subtotal o total incluyendo el ciego y el tumor', 'Solo resección del sigma', 'Cecostomía', 'Sutura de los desgarros y Hartmann'],
    explicacion: 'Si el ciego está comprometido, se incluye en la resección con una colectomía subtotal que también trata el tumor.',
    fuente: 'Hermes: Cirugía del cáncer de colon' }
 ]
},
{
 id: 'colon-03', tema: 'Cáncer de colon', anio: 3,
 titulo: 'Cáncer de colon en un hombre de 38 años',
 vineta: 'Varón de 38 años con un adenocarcinoma de colon derecho. Su padre tuvo cáncer de colon a los 45 años y una tía, cáncer de endometrio a los 50.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué síndrome sospechás?',
    opciones: ['Síndrome de Lynch', 'Poliposis adenomatosa familiar', 'Síndrome de Peutz-Jeghers', 'Cáncer esporádico sin estudio'],
    explicacion: 'Cáncer colorrectal joven, colon derecho y familiares con cáncer de colon y endometrio sugieren síndrome de Lynch (deficiencia de reparación de errores de apareamiento).',
    fuente: 'Hermes: Síndrome de Lynch' },
  { tipo: 'Estudios', pregunta: '¿Qué pedís sobre el tumor?',
    opciones: ['Inmunohistoquímica de las proteínas de reparación (MLH1, MSH2, MSH6, PMS2) o inestabilidad de microsatélites', 'Solo CEA', 'Mutación APC en el tumor', 'Nada'],
    explicacion: 'Se recomienda estudiar la reparación de errores de apareamiento en todo cáncer colorrectal; si está deficiente, se completa con estudio germinal y asesoramiento genético.',
    fuente: 'Hermes: Síndrome de Lynch' },
  { tipo: 'Medidas generales', pregunta: 'Se confirma Lynch. ¿Cómo vigilás a sus hermanos portadores?',
    opciones: ['Colonoscopia cada 1 a 2 años desde los 20 a 25 años (o según gen)', 'Colonoscopia cada 10 años desde los 50', 'Sangre oculta anual', 'Ninguna'],
    explicacion: 'Los portadores tienen cánceres de intervalo por la carcinogénesis acelerada; la colonoscopia se hace cada 1 a 2 años desde los 20 a 25 años, ajustada según el gen.',
    fuente: 'Hermes: Síndrome de Lynch' }
 ]
},
{
 id: 'colon-04', tema: 'Cáncer de colon', anio: 3,
 titulo: 'Cientos de pólipos en una joven',
 vineta: 'Mujer de 22 años con rectorragia. Colonoscopia: más de 500 adenomas en todo el colon y el recto. Su madre murió de cáncer de colon a los 40.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiene?',
    opciones: ['Poliposis adenomatosa familiar clásica', 'Síndrome de Lynch', 'Poliposis juvenil', 'Colitis ulcerosa'],
    explicacion: 'Cientos a miles de adenomas por mutación germinal de APC definen la poliposis adenomatosa familiar clásica; el riesgo de cáncer es casi del 100 % sin cirugía.',
    fuente: 'Hermes: Poliposis adenomatosa familiar' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Con el recto tapizado de pólipos, ¿qué cirugía indicás?',
    opciones: ['Proctocolectomía total con reservorio ileal y anastomosis ileoanal', 'Colectomía total con ileorrecto anastomosis', 'Hemicolectomía izquierda', 'Polipectomías endoscópicas periódicas'],
    explicacion: 'Con compromiso rectal importante se reseca el recto con reservorio ileal; la ileorrecto anastomosis se reserva para recto con pocos pólipos.',
    fuente: 'Hermes: Poliposis adenomatosa familiar' },
  { tipo: 'Medidas generales', pregunta: '¿Qué vigilancia extracolónica es prioritaria?',
    opciones: ['Endoscopia alta con visión lateral por los adenomas duodenales y de la papila', 'Mamografía anual desde los 20', 'Colangiorresonancia anual', 'Ninguna'],
    explicacion: 'Tras la colectomía, el cáncer duodenal o periampular y los desmoides son causas principales de muerte; se vigila el duodeno con endoscopio de visión lateral.',
    fuente: 'Hermes: Poliposis adenomatosa familiar' }
 ]
},
{
 id: 'recto-01', tema: 'Cáncer de recto', anio: 3,
 titulo: 'Tumor de recto medio localmente avanzado',
 vineta: 'Varón de 60 años con rectorragia y cambio del ritmo evacuatorio. Adenocarcinoma a 7 cm del margen anal. Resonancia: T3c N1, fascia mesorrectal amenazada (1 mm). TC sin metástasis.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué estudio define la estadificación local?',
    opciones: ['Resonancia magnética pélvica de alta resolución', 'Solo TC', 'Ecografía abdominal', 'Colonoscopia virtual'],
    explicacion: 'La resonancia pélvica define T, N, la distancia a la fascia mesorrectal, la invasión venosa extramural y la relación con el esfínter, que deciden el tratamiento.',
    fuente: 'ESMO 2017, cáncer de recto; Hermes: Cirugía del cáncer de recto' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Con la fascia mesorrectal amenazada, ¿qué indicás antes de la cirugía?',
    opciones: ['Tratamiento neoadyuvante (quimiorradioterapia o neoadyuvancia total)', 'Cirugía inmediata sin neoadyuvancia', 'Solo quimioterapia paliativa', 'Polipectomía'],
    explicacion: 'El margen circunferencial amenazado es indicación de neoadyuvancia; la neoadyuvancia total (ensayos RAPIDO y PRODIGE 23) mejora la respuesta y reduce las metástasis.',
    fuente: 'ESMO 2017; ensayos RAPIDO y PRODIGE 23' },
  { tipo: 'Técnica', pregunta: '¿Cuál es el principio técnico clave de la resección?',
    opciones: ['Escisión total del mesorrecto en el plano areolar entre fascia propia y presacra, con mesorrecto intacto', 'Disección intramesorrectal rápida', 'Resección local transanal', 'Disección por fuera de la fascia presacra'],
    explicacion: 'La escisión total del mesorrecto en el plano "sagrado" reduce la recurrencia local; la calidad del mesorrecto se informa en la pieza. Disecar por detrás de la fascia presacra produce sangrado venoso grave.',
    fuente: 'Hermes: Escisión total del mesorrecto' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Tras la neoadyuvancia hay respuesta clínica completa en endoscopia y resonancia. ¿Qué opción podés ofrecer?',
    opciones: ['Vigilancia estrecha ("watch and wait") en un programa estructurado, explicando el riesgo de rebrote', 'Alta sin seguimiento', 'Amputación abdominoperineal obligatoria', 'Más radioterapia de rutina'],
    explicacion: 'Con respuesta clínica completa puede ofrecerse vigilancia intensiva con endoscopia y resonancia; alrededor de un cuarto rebrota, casi siempre rescatable con cirugía.',
    fuente: 'Hermes: Vigilancia y espera en cáncer de recto' }
 ]
},
{
 id: 'recto-02', tema: 'Cáncer de recto', anio: 3,
 titulo: 'Tumor que invade el esfínter',
 vineta: 'Mujer de 66 años con adenocarcinoma de recto a 2 cm del margen anal que, en la resonancia tras la neoadyuvancia, sigue invadiendo el esfínter externo.',
 pasos: [
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué cirugía indicás?',
    opciones: ['Amputación abdominoperineal con colostomía terminal definitiva', 'Resección anterior baja con anastomosis', 'Resección local transanal', 'Solo colostomía'],
    explicacion: 'La invasión del esfínter externo impide preservar el esfínter con márgenes oncológicos; la amputación abdominoperineal es la opción.',
    fuente: 'Hermes: Amputación abdominoperineal; Preservación esfinteriana en cáncer de recto' },
  { tipo: 'Técnica', pregunta: '¿Qué evita la "cintura" de la pieza en el plano del elevador?',
    opciones: ['Resección extraelevadora (cilíndrica), con los elevadores en la pieza', 'Disección más cerca del tumor', 'Disección intraesfinteriana', 'No dejar drenaje'],
    explicacion: 'La disección que sigue el mesorrecto hasta el elevador deja una pieza con cintura y riesgo de margen positivo y perforación; la técnica extraelevadora incluye los elevadores.',
    fuente: 'Hermes: Amputación abdominoperineal' },
  { tipo: 'Medidas generales', pregunta: 'Antes de la cirugía, ¿qué hacés con la ostomía?',
    opciones: ['Marcar el sitio con la paciente sentada y parada, con estomaterapia', 'Elegir el sitio en el quirófano', 'Ubicarla en la cicatriz mediana', 'Nada'],
    explicacion: 'La marcación preoperatoria por estomaterapia reduce las complicaciones y mejora la calidad de vida.',
    fuente: 'Hermes: Amputación abdominoperineal' }
 ]
},
{
 id: 'gastrico-01', tema: 'Cáncer gástrico', anio: 3,
 titulo: 'Adenocarcinoma gástrico localmente avanzado',
 vineta: 'Varón de 62 años con pérdida de peso y anemia. Endoscopia: tumor ulcerado de antro. Biopsia: adenocarcinoma. TC: engrosamiento parietal con ganglios perigástricos, sin metástasis visibles.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué estudio agregás a la estadificación en un tumor avanzado (cT3 o mayor)?',
    opciones: ['Laparoscopia de estadificación con citología peritoneal', 'Colonoscopia', 'Centellograma óseo de rutina', 'Ninguno'],
    explicacion: 'La laparoscopia detecta metástasis peritoneales que la TC no ve, evitando laparotomías innecesarias; la citología positiva equivale a enfermedad M1.',
    fuente: 'Hermes: Cáncer gástrico' },
  { tipo: 'Fármaco', pregunta: 'Sin carcinomatosis, ¿qué tratamiento sistémico perioperatorio indicás?',
    opciones: ['Quimioterapia perioperatoria con FLOT', 'Ninguno', 'Solo radioterapia', 'Hormonoterapia'],
    explicacion: 'En el ensayo FLOT4, la quimioterapia perioperatoria con 5-FU, leucovorina, oxaliplatino y docetaxel mejoró la supervivencia frente a ECF/ECX.',
    fuente: 'Ensayo FLOT4' },
  { tipo: 'Dosis', pregunta: '¿Cuántos ciclos de FLOT se dan?',
    opciones: ['4 ciclos antes y 4 después de la cirugía', '1 ciclo antes', '12 ciclos solo después', '2 años de mantenimiento'],
    explicacion: 'El esquema FLOT4 son 4 ciclos preoperatorios y 4 posoperatorios, cada 2 semanas.',
    fuente: 'Ensayo FLOT4' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué cirugía indicás para un cáncer de antro?',
    opciones: ['Gastrectomía distal (subtotal) con linfadenectomía D2', 'Gastrectomía total con D1', 'Resección en cuña', 'Gastroyeyunostomía'],
    explicacion: 'El tumor distal con margen proximal adecuado se trata con gastrectomía subtotal y D2, con la misma supervivencia que la total y mejor calidad de vida.',
    fuente: 'Hermes: Gastrectomía; Linfadenectomía D2 gástrica' },
  { tipo: 'Técnica', pregunta: '¿Cuántos ganglios como mínimo debe tener la pieza?',
    opciones: ['16 o más', '5', '2', 'No importa'],
    explicacion: 'Se requieren al menos 16 ganglios para una estadificación N adecuada; la D2 bien hecha suele obtener más.',
    fuente: 'Hermes: Linfadenectomía D2 gástrica' }
 ]
},
{
 id: 'esofago-01', tema: 'Cáncer esofágico', anio: 3,
 titulo: 'Disfagia progresiva en un hombre con Barrett',
 vineta: 'Varón de 64 años con Barrett conocido sin control, disfagia progresiva a sólidos y pérdida de 8 kg. Endoscopia: tumor de esófago distal y unión gastroesofágica. Biopsia: adenocarcinoma. TC y PET: T3 N1, sin metástasis.',
 pasos: [
  { tipo: 'Medidas generales', pregunta: '¿Qué hacés con el estado nutricional antes del tratamiento?',
    opciones: ['Evaluación y soporte nutricional, por vía enteral si hace falta', 'Nada', 'Ayuno hasta la cirugía', 'Nutrición parenteral de rutina'],
    explicacion: 'La desnutrición es frecuente por la disfagia y aumenta las complicaciones; se prioriza la vía enteral.',
    fuente: 'Hermes: Cirugía del cáncer de esófago' },
  { tipo: 'Fármaco', pregunta: 'Para un adenocarcinoma localmente avanzado, ¿qué tratamiento preoperatorio mostró mejor supervivencia en el ensayo ESOPEC?',
    opciones: ['Quimioterapia perioperatoria FLOT', 'Quimiorradioterapia CROSS', 'Ninguno', 'Inmunoterapia sola'],
    explicacion: 'En ESOPEC, en adenocarcinoma esofágico resecable, FLOT perioperatorio logró mayor supervivencia que CROSS. CROSS sigue siendo estándar en el carcinoma escamoso.',
    fuente: 'Ensayo ESOPEC; ensayo CROSS' },
  { tipo: 'Técnica', pregunta: '¿Qué abordaje se usa habitualmente para un tumor del esófago distal?',
    opciones: ['Esofagectomía de Ivor Lewis (abdominal y torácica derecha, anastomosis intratorácica)', 'Esofagectomía transhiatal obligatoria', 'Resección endoscópica', 'Gastrectomía total sola'],
    explicacion: 'Ivor Lewis permite linfadenectomía en dos campos y anastomosis intratorácica para tumores distales; el abordaje en tres campos (McKeown) se prefiere en tumores más altos.',
    fuente: 'Hermes: Esofagectomía' },
  { tipo: 'Diagnóstico', pregunta: 'En el día 6 posoperatorio aparece fiebre, taquicardia y derrame pleural derecho con líquido turbio. ¿Qué sospechás?',
    opciones: ['Fuga de la anastomosis intratorácica', 'Neumonía sin relación', 'Quilotórax', 'Atelectasia'],
    explicacion: 'Fiebre, taquicardia y derrame turbio tras una anastomosis intratorácica son fuga hasta demostrar lo contrario; se confirma con endoscopia o TC con contraste oral.',
    fuente: 'Hermes: Esofagectomía' }
 ]
}
];
