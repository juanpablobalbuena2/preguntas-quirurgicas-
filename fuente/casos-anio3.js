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
    opciones: ['Síndrome de Mirizzi', 'Coledocolitiasis impactada', 'Colangiocarcinoma hiliar', 'Colangitis esclerosante'],
    explicacion: 'La compresión extrínseca del hepático común por un cálculo impactado en el bacinete o el cístico, con ictericia, define el Mirizzi. Si hay erosión de la pared y fístula colecistobiliar, se clasifica en tipos más avanzados.',
    fuente: 'Hermes: Síndrome de Mirizzi' },
  { tipo: 'Conducta quirúrgica', pregunta: 'En la cirugía encontrás inflamación densa del triángulo hepatocístico sin poder lograr la visión crítica. ¿Qué hacés?',
    opciones: ['Colecistectomía subtotal o conversión, sin disecar a ciegas', 'Seguir disecando el triángulo hasta encontrar el cístico', 'Clipar y seccionar la estructura tubular más gruesa que llegue', 'Cerrar y derivar sin drenar la vesícula'],
    explicacion: 'En el Mirizzi el hepático común está pegado al bacinete y es fácil lesionarlo. Sin visión crítica se recurre a una estrategia de rescate: colecistectomía subtotal, conversión o, en tipos con fístula, reparación de la vía biliar.',
    fuente: 'SAGES Safe Cholecystectomy; Hermes: Síndrome de Mirizzi y Colecistectomía subtotal' },
  { tipo: 'Técnica', pregunta: 'Si hubiera una fístula que comprometa más de la mitad de la circunferencia del hepático, ¿qué reparación es la habitual?',
    opciones: ['Hepaticoyeyunostomía en Y de Roux', 'Sutura primaria del hepático sin tubo', 'Ligadura del hepático y drenaje externo', 'Drenaje subhepático sin reparar la vía'],
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
    opciones: ['Técnica abierta de Hasson o acceso en el punto de Palmer', 'Aguja de Veress umbilical a ciegas, como de rutina', 'Trocar óptico directo sobre la cicatriz de la laparotomía', 'Contraindicar la laparoscopia y operar por laparotomía'],
    explicacion: 'Con cirugía previa hay riesgo de adherencias bajo la cicatriz; se entra con técnica abierta o en un sitio alejado, como el cuadrante superior izquierdo (punto de Palmer).',
    fuente: 'Hermes: Neumoperitoneo con técnica abierta de Hasson; Principios de cirugía laparoscópica' },
  { tipo: 'Medidas generales', pregunta: '¿Con qué presión de neumoperitoneo trabajás habitualmente?',
    opciones: ['12 a 15 mmHg', '25 a 30 mmHg', '2 a 4 mmHg', '40 mmHg'],
    explicacion: 'Entre 12 y 15 mmHg se logra espacio de trabajo con repercusión hemodinámica y respiratoria tolerable; presiones mayores reducen el retorno venoso y la ventilación.',
    fuente: 'Hermes: Principios de cirugía laparoscópica' },
  { tipo: 'Diagnóstico', pregunta: 'Al insuflar cae bruscamente la capnografía, hay hipotensión y un soplo en rueda de molino. ¿Qué sospechás?',
    opciones: ['Embolia gaseosa de CO2', 'Neumotórax a tensión izquierdo', 'Reacción anafiláctica', 'Hipotermia grave'],
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
    opciones: ['Triángulo limpio, tercio inferior separado del lecho y dos estructuras', 'Ver el colédoco, el hepático común y la arteria hepática propia en el campo', 'Colangiografía normal, cístico corto y una sola arteria cística', 'Vesícula vacía, cístico clipado y lecho hepático seco'],
    explicacion: 'La visión crítica de Strasberg tiene tres criterios; se documenta con foto o video antes de clipar. Su objetivo es evitar la falsa identificación del colédoco como cístico.',
    fuente: 'SAGES Safe Cholecystectomy; Hermes: Prevención de lesiones durante la colecistectomía' },
  { tipo: 'Estudios', pregunta: 'La anatomía sigue dudosa. ¿Qué podés agregar para aclararla?',
    opciones: ['Colangiografía intraoperatoria o fluorescencia con indocianina', 'Ecografía abdominal de control en la mañana siguiente a la cirugía', 'TC de abdomen intraoperatoria con contraste', 'Clipar igual: la visión parcial alcanza'],
    explicacion: 'Cuando la anatomía no es clara, la colangiografía o la fluorescencia ayudan a identificar los conductos. No sustituyen la visión crítica pero suman información.',
    fuente: 'Hermes: Colangiografía peroperatoria por fluoroscopia y Colangiografía fluorescente con indocianina verde' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Si aun así no lográs la visión crítica, ¿qué hacés?',
    opciones: ['Rescate: colecistectomía subtotal, colecistostomía o conversión', 'Clipar la estructura que más se parece al cístico y seguir con la disección', 'Seguir disecando el triángulo el tiempo que haga falta', 'Seccionar las estructuras que entran en la vesícula'],
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
    opciones: ['Fuga del cístico o de un conducto de Luschka (Strasberg A)', 'Sección completa del colédoco (Strasberg E)', 'Ligadura del hepático común (Strasberg E2)', 'Lesión lateral del hepático común con estenosis (Strasberg D)'],
    explicacion: 'Una fuga con vía biliar continua y sin estenosis es una lesión menor, generalmente del muñón cístico o de un conducto accesorio del lecho.',
    fuente: 'WSES 2020, lesión biliar; Hermes: Lesión de la vía biliar principal en colecistectomía' },
  { tipo: 'Conducta quirúrgica', pregunta: 'La fuga no disminuye. ¿Qué indicás?',
    opciones: ['CPRE con esfinterotomía y prótesis biliar', 'Hepaticoyeyunostomía en Y de Roux', 'Relaparotomía y sutura del colédoco', 'Retirar el drenaje y repetir la ecografía'],
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
    opciones: ['Lesión mayor, Strasberg E2', 'Lesión menor, Strasberg A', 'Lesión lateral, Strasberg D', 'Coledocolitiasis residual'],
    explicacion: 'La pérdida de continuidad de la vía principal es una lesión tipo E; el subtipo depende de la distancia a la confluencia (E1 más de 2 cm, E2 menos de 2 cm).',
    fuente: 'Hermes: Lesión de la vía biliar principal en colecistectomía' },
  { tipo: 'Medidas generales', pregunta: '¿Qué hacés primero?',
    opciones: ['Controlar la sepsis: drenaje percutáneo, antibióticos y soporte', 'Hepaticoyeyunostomía inmediata en el mismo hospital donde ocurrió la lesión', 'Observar con antibióticos y repetir la ecografía', 'Colocar una prótesis por CPRE para unir los extremos'],
    explicacion: 'Pasadas las primeras 72 horas, con colección e infección, primero se controla la sepsis y se define la anatomía; la reparación se hace con los tejidos en condiciones y por un equipo con experiencia.',
    fuente: 'WSES 2020, lesión biliar; Hermes: Manejo percutáneo de la lesión biliar iatrogénica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cuál es la reparación definitiva?',
    opciones: ['Hepaticoyeyunostomía en Y de Roux, en un centro con experiencia', 'Anastomosis terminoterminal del colédoco sobre un tubo en T de Kehr', 'Coledocoduodenostomía laterolateral', 'Prótesis biliar plástica permanente con recambios por CPRE'],
    explicacion: 'La hepaticoyeyunostomía en Y de Roux, con mucosa sana y sin tensión, es la reparación estándar de las lesiones tipo E; la anastomosis terminoterminal tiene alta tasa de estenosis.',
    fuente: 'WSES 2020, lesión biliar; Hermes: Hepaticoyeyunostomía' },
  { tipo: 'Estudios', pregunta: '¿Qué estudio agregás antes de reparar?',
    opciones: ['Angio-TC para evaluar la arteria hepática derecha', 'Endoscopia digestiva alta para descartar úlcera', 'Colonoscopia completa para descartar un tumor sincrónico', 'Gammagrafía ósea corporal total'],
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
    opciones: ['Punción con aguja fina guiada por ecografía', 'Centellograma tiroideo con tecnecio', 'Tiroidectomía total directa sin punción', 'Control ecográfico en 2 años y luego decidir'],
    explicacion: 'Un nódulo sólido hipoecoico con microcalcificaciones y bordes irregulares es de alta sospecha; se punza desde 1 cm. El centellograma solo se pide con TSH baja.',
    fuente: 'ATA 2015, nódulo tiroideo; Hermes: Nódulo tiroideo' },
  { tipo: 'Diagnóstico', pregunta: 'La citología es Bethesda VI. ¿Qué significa?',
    opciones: ['Maligno (habitualmente carcinoma papilar)', 'Benigno (nódulo coloide)', 'No diagnóstico (muestra insuficiente)', 'Atipia de significado incierto'],
    explicacion: 'Bethesda VI es maligno, con más del 95 % de riesgo; la mayoría corresponde a carcinoma papilar.',
    fuente: 'Sistema Bethesda; Hermes: Nódulo tiroideo' },
  { tipo: 'Estudios', pregunta: '¿Qué estudio hacés antes de operar?',
    opciones: ['Ecografía de los compartimentos ganglionares del cuello', 'PET-TC de cuerpo entero para estadificar de rutina antes de operar', 'Tiroglobulina sérica para confirmar el diagnóstico', 'Centellograma corporal total con yodo'],
    explicacion: 'La ecografía cervical preoperatoria busca metástasis ganglionares que cambiarían la extensión de la cirugía.',
    fuente: 'ATA 2015, cáncer diferenciado de tiroides' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Es un tumor de 1,8 cm sin extensión extratiroidea ni ganglios. ¿Qué cirugía es aceptable?',
    opciones: ['Lobectomía o tiroidectomía total, decidida con la paciente', 'Solo tiroidectomía total con vaciamiento central y lateral', 'Enucleación del nódulo', 'Vigilancia activa con ecografía cada 6 meses'],
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
    opciones: ['Hipocalcemia por hipoparatiroidismo posoperatorio', 'Lesión bilateral del nervio laríngeo recurrente', 'Crisis tirotóxica por manipulación de la glándula', 'Hematoma cervical con compresión de la vía aérea'],
    explicacion: 'Parestesias, Chvostek positivo y calcio bajo tras una tiroidectomía total indican hipoparatiroidismo, por lesión o desvascularización de las paratiroides.',
    fuente: 'Hermes: Tiroidectomía' },
  { tipo: 'Fármaco', pregunta: 'Con síntomas y calcio de 7 mg/dl, ¿qué indicás?',
    opciones: ['Gluconato de calcio IV', 'Calcio oral sin vía IV', 'Levotiroxina oral', 'Furosemida y solución salina'],
    explicacion: 'La hipocalcemia sintomática o grave se trata con calcio IV y monitoreo electrocardiográfico; luego se pasa a calcio oral con calcitriol.',
    fuente: 'Society for Endocrinology 2016, hipocalcemia aguda' },
  { tipo: 'Dosis', pregunta: '¿Con qué dosis inicial?',
    opciones: ['10 a 20 ml al 10 % diluidos, en unos 10 minutos', '100 ml al 10 % en bolo rápido sin diluir', '1 ml al 10 % por vía subcutánea, repetible', '500 mg de carbonato por vía oral, dosis única'],
    explicacion: 'Se administran 10 a 20 ml de gluconato de calcio al 10 % en 50 a 100 ml de dextrosa al 5 % en unos 10 minutos, con monitoreo, seguido de una infusión si persiste.',
    fuente: 'Society for Endocrinology 2016, hipocalcemia aguda' },
  { tipo: 'Medidas generales', pregunta: 'Para el alta, ¿qué indicás?',
    opciones: ['Calcio oral y calcitriol, con control de calcio y PTH', 'Alta sin tratamiento, porque se recupera sola en pocos días', 'Dieta rica en lácteos sin suplementos', 'Una dosis única de vitamina D en megadosis'],
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
    opciones: ['Yoduro de potasio (Lugol o SSKI)', 'Levotiroxina en dosis supresiva', 'Iodo radiactivo en dosis baja', 'Corticoides en dosis altas'],
    explicacion: 'En la enfermedad de Graves, el yoduro preoperatorio reduce la vascularización de la glándula y el sangrado intraoperatorio.',
    fuente: 'ATA 2016, hipertiroidismo' },
  { tipo: 'Medidas generales', pregunta: '¿En qué momento lo indicás?',
    opciones: ['En el preoperatorio inmediato, ya eutiroidea', 'Un mes antes, en lugar de los antitiroideos', 'Después de la cirugía, para frenar la tormenta', 'Solo si sigue hipertiroidea el día de la cirugía'],
    explicacion: 'ATA 2016 indica un preparado con yoduro de potasio en el preoperatorio inmediato, una vez lograda la eutiroidea con antitiroideos: no los reemplaza. Los esquemas clásicos de unos 10 días son práctica histórica y las gotas varían según el preparado.',
    fuente: 'ATA 2016, hipertiroidismo' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué cirugía indicás?',
    opciones: ['Tiroidectomía total', 'Lobectomía unilateral', 'Tiroidectomía subtotal bilateral', 'Istmectomía con biopsia'],
    explicacion: 'En la enfermedad de Graves se prefiere la tiroidectomía total, porque elimina el riesgo de recurrencia con complicaciones similares a la subtotal.',
    fuente: 'ATA 2016, hipertiroidismo' },
  { tipo: 'Dosis', pregunta: 'Después, ¿con qué dosis inicial de levotiroxina la reemplazás?',
    opciones: ['Alrededor de 1,6 µg/kg/día, ajustada por TSH', '10 µg/kg/día desde el primer día', '25 µg por semana, en una sola toma', 'No necesita reemplazo si queda eutiroidea'],
    explicacion: 'La dosis de reemplazo completa es cercana a 1,6 µg/kg/día; se ajusta con la TSH a las 6 a 8 semanas.',
    fuente: 'Revisión de levotiroxina tras tiroidectomía (Front Endocrinol 2020;11:626268): dosis empírica de alrededor de 1,6 µg/kg en enfermedad benigna' }
 ]
},
{
 id: 'ulcera-01', tema: 'Úlcera gastroduodenal', anio: 3,
 titulo: 'Melena y un coágulo en la úlcera',
 vineta: 'Varón de 67 años que toma ibuprofeno por artrosis. Melena e hipotensión que responde a cristaloides. Hemoglobina 7,8 g/dl. Endoscopia a las 12 horas: úlcera bulbar posterior de 1,5 cm con vaso visible no sangrante.',
 pasos: [
  { tipo: 'Diagnóstico', pregunta: '¿Qué clasificación de Forrest tiene?',
    opciones: ['Forrest IIa (vaso visible)', 'Forrest Ia (sangrado en chorro)', 'Forrest IIc (base pigmentada)', 'Forrest III (base limpia, sin estigmas)'],
    explicacion: 'El vaso visible no sangrante es Forrest IIa, de alto riesgo de resangrado, por lo que requiere tratamiento endoscópico.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa; Hermes: Complicaciones de la úlcera gastroduodenal' },
  { tipo: 'Medidas generales', pregunta: '¿Con qué umbral transfundís glóbulos rojos?',
    opciones: ['Hemoglobina menor de 7 g/dl (8 si es cardiópata)', 'Hemoglobina menor de 10 g/dl, por la edad', 'Si persiste la hipotensión, sin mirar la hemoglobina', 'Si la hemoglobina baja de 5 g/dl'],
    explicacion: 'La estrategia restrictiva, con umbral de 7 g/dl y objetivo de 7 a 9, reduce la mortalidad y el resangrado; en cardiópatas se usa un umbral más alto.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa' },
  { tipo: 'Fármaco', pregunta: 'Después de la terapia endoscópica, ¿qué indicás?',
    opciones: ['Inhibidor de la bomba de protones en dosis altas', 'Antiácidos orales cada 4 horas', 'Bloqueante H2 (ranitidina) en dosis estándar por vía oral', 'Sucralfato como protector de la mucosa'],
    explicacion: 'Tras la hemostasia endoscópica de una úlcera de alto riesgo, el inhibidor de bomba en dosis altas reduce el resangrado.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa' },
  { tipo: 'Dosis', pregunta: '¿Con qué esquema?',
    opciones: ['80 mg IV y luego 8 mg/h durante 72 horas', '20 mg VO por día durante 8 semanas', '40 mg IV por semana durante un mes', '80 mg IV en dosis única y luego 20 mg VO por día'],
    explicacion: 'El esquema es un bolo de 80 mg seguido de infusión de 8 mg/h o bolos intermitentes en dosis altas durante 72 horas, y luego dos dosis diarias por vía oral.',
    fuente: 'ESGE 2021, hemorragia digestiva alta no varicosa' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Resangra y falla una segunda endoscopia. ¿Qué hacés?',
    opciones: ['Angioembolización o cirugía con ligadura del vaso', 'Tercera endoscopia con clips y adrenalina', 'Duplicar la infusión de inhibidor de bomba', 'Transfundir y esperar que deje de sangrar'],
    explicacion: 'Si falla el segundo intento endoscópico, la embolización de la gastroduodenal o la cirugía con ligadura del vaso son las opciones de rescate.',
    fuente: 'ESGE 2021; Hermes: Complicaciones de la úlcera gastroduodenal' },
  { tipo: 'Fármaco', pregunta: 'La biopsia muestra Helicobacter pylori. ¿Qué tratamiento de erradicación indicás en una región con resistencia a la claritromicina del 15 % o más?',
    opciones: ['Cuádruple con bismuto durante 14 días', 'Triple con claritromicina durante 7 días', 'Amoxicilina en dosis altas sola por 14 días', 'Inhibidor de bomba sin antibióticos por 8 semanas'],
    explicacion: 'Maastricht VI recomienda, donde la resistencia a la claritromicina es del 15 % o más, la cuádruple con bismuto durante 14 días (o la concomitante sin bismuto), y confirmar la erradicación con prueba de aliento.',
    fuente: 'Maastricht VI/Florence 2022' }
 ]
},
{
 id: 'ulcera-02', tema: 'Úlcera gastroduodenal', anio: 3,
 titulo: 'Úlcera gástrica que no cicatriza',
 vineta: 'Varón de 60 años con una úlcera de 2 cm en la curvatura menor del antro. Erradicó H. pylori y recibió inhibidor de bomba 12 semanas, pero la úlcera persiste. Las biopsias fueron negativas.',
 pasos: [
  { tipo: 'Estudios', pregunta: '¿Qué hacés antes de decidir la cirugía?',
    opciones: ['Repetir la endoscopia con biopsias múltiples', 'Operar sin más estudios, por la refractariedad', 'Suspender el inhibidor de bomba y observar', 'Una TC de abdomen con contraste'],
    explicacion: 'Toda úlcera gástrica refractaria obliga a repetir las biopsias, porque puede ser un cáncer; también se revisan el consumo de AINE y la erradicación.',
    fuente: 'Hermes: Enfermedad ulcerosa péptica' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Persiste refractaria y benigna. ¿Qué cirugía indicás?',
    opciones: ['Gastrectomía distal que incluya la úlcera', 'Vagotomía troncular y piloroplastia', 'Gastrectomía total con Y de Roux', 'Fundoplicatura y piloroplastia'],
    explicacion: 'La úlcera gástrica refractaria se reseca con una gastrectomía distal que la incluya; así se trata y se obtiene diagnóstico histológico completo.',
    fuente: 'Hermes: Gastrectomía; Reconstrucción después de gastrectomía' },
  { tipo: 'Diagnóstico', pregunta: 'Meses después tiene sudoración, palpitaciones y diarrea a los 20 minutos de comer. ¿Qué es?',
    opciones: ['Síndrome de dumping temprano', 'Dumping tardío por hipoglucemia', 'Síndrome del asa aferente por obstrucción', 'Úlcera de la boca anastomótica'],
    explicacion: 'Los síntomas vasomotores y digestivos en los primeros 30 minutos se deben al paso rápido de contenido hiperosmolar al intestino; el dumping tardío ocurre 1 a 3 horas después por hipoglucemia.',
    fuente: 'Hermes: Complicaciones de gastrectomía' },
  { tipo: 'Medidas generales', pregunta: '¿Qué indicás primero para el dumping?',
    opciones: ['Comidas chicas y frecuentes, sin azúcares simples ni líquidos', 'Reoperación con conversión a Y de Roux en el corto plazo, sin dieta previa', 'Dieta rica en azúcares para evitar la hipoglucemia', 'Octreótido subcutáneo antes de cada comida'],
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
    opciones: ['Bajar de peso, elevar la cabecera y no cenar tarde', 'Dieta líquida estricta por 4 semanas', 'Reposo después de cada comida, acostado', 'Evitar las comidas picantes como medida principal'],
    explicacion: 'La pérdida de peso, la elevación de la cabecera y evitar comer antes de acostarse tienen respaldo para mejorar el reflujo.',
    fuente: 'Hermes: Enfermedad por reflujo gastroesofágico' },
  { tipo: 'Fármaco', pregunta: '¿Qué tratamiento farmacológico inicial indicás?',
    opciones: ['Inhibidor de bomba antes del desayuno por 8 semanas', 'Antiácidos a demanda después de cada comida', 'Procinéticos (domperidona) antes de cada comida, por 8 semanas', 'Antibióticos para erradicar H. pylori'],
    explicacion: 'El inhibidor de bomba en dosis estándar, tomado 30 a 60 minutos antes del desayuno durante 8 semanas, es el tratamiento inicial del reflujo típico sin síntomas de alarma.',
    fuente: 'Hermes: Enfermedad por reflujo gastroesofágico' },
  { tipo: 'Estudios', pregunta: 'Persiste regurgitación pese al tratamiento y quiere operarse. ¿Qué estudios pedís?',
    opciones: ['Endoscopia, pH-metría sin inhibidor de bomba y manometría', 'Radiografía de tórax y seriada esofagogastroduodenal con bario', 'Endoscopia y pH-metría bajo inhibidor de bomba', 'TC de abdomen y endoscopia'],
    explicacion: 'Antes de la cirugía hay que demostrar el reflujo en forma objetiva (esofagitis grave o tiempo de exposición ácida elevado) y descartar con manometría un trastorno motor como la acalasia.',
    fuente: 'Lyon 2.0 (2023); Hermes: Fundoplicatura laparoscópica' },
  { tipo: 'Diagnóstico', pregunta: '¿Qué tiempo de exposición ácida en la pH-metría es concluyente de reflujo según Lyon?',
    opciones: ['Más del 6 %', 'Más del 1 %', 'Más del 30 %', 'Más del 15 %'],
    explicacion: 'Según el consenso de Lyon, un tiempo de exposición ácida mayor del 6 % es concluyente, menor del 4 % es normal y entre 4 y 6 % es indeterminado.',
    fuente: 'Lyon 2.0 (2023)' },
  { tipo: 'Técnica', pregunta: 'Los estudios confirman reflujo con motilidad normal. ¿Qué cirugía indicás?',
    opciones: ['Fundoplicatura laparoscópica con cierre de pilares', 'Gastrectomía subtotal con Y de Roux', 'Esofagectomía distal con anastomosis', 'Miotomía de Heller con funduplicatura parcial'],
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
    opciones: ['Erosiones de Cameron en el cuello herniario', 'Cáncer gástrico del fundus herniado', 'Hemorroides internas sangrantes', 'Gastritis atrófica con déficit de B12'],
    explicacion: 'Las lesiones de Cameron, erosiones lineales en el cuello de la hernia, causan pérdida crónica de sangre; igual corresponde la endoscopia para descartar otras causas.',
    fuente: 'Hermes: Hernia hiatal y paraesofágica' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué indicás?',
    opciones: ['Reparación laparoscópica programada con fundoplicatura', 'Observación y control endoscópico anual', 'Gastrectomía total con esofagoyeyunostomía', 'Hierro endovenoso e inhibidor de bomba de por vida, sin cirugía'],
    explicacion: 'La hernia paraesofágica sintomática se repara; los pasos clave son reducir el estómago, resecar el saco, lograr esófago intraabdominal sin tensión, cerrar los pilares y agregar una fundoplicatura.',
    fuente: 'Hermes: Hernia hiatal y paraesofágica' },
  { tipo: 'Diagnóstico', pregunta: 'Si llegara con dolor intenso, arcadas sin vómito e imposibilidad de pasar una sonda nasogástrica, ¿qué sospecharías?',
    opciones: ['Vólvulo gástrico agudo (tríada de Borchardt)', 'Infarto agudo de miocardio inferior', 'Pancreatitis aguda necrotizante', 'Perforación esofágica (síndrome de Boerhaave)'],
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
    opciones: ['Biopsia asistida por vacío guiada por estereotaxia', 'Control mamográfico con magnificación en 6 meses', 'Ecografía dirigida y alta si es normal', 'Mastectomía simple sin biopsia previa'],
    explicacion: 'Las microcalcificaciones sospechosas sin masa se biopsian con guía estereotáxica, habitualmente con sistemas asistidos por vacío; se deja un marcador.',
    fuente: 'Hermes: Evaluación de la patología mamaria' },
  { tipo: 'Diagnóstico', pregunta: 'Informa carcinoma ductal in situ de alto grado. ¿Qué significa?',
    opciones: ['Cáncer confinado a los conductos, sin invasión', 'Cáncer invasor con alto riesgo de metástasis ganglionares', 'Lesión benigna sin riesgo de progresar a cáncer invasor', 'Mastopatía fibroquística con hiperplasia atípica'],
    explicacion: 'El carcinoma in situ no atraviesa la membrana basal y por eso no da metástasis ganglionares, pero puede progresar a invasor.',
    fuente: 'Hermes: Cáncer de mama' },
  { tipo: 'Técnica', pregunta: '¿Cómo lo resecás?',
    opciones: ['Escisión con marcación previa y radiografía de la pieza', 'Mastectomía radical modificada con vaciamiento', 'Cuadrantectomía con vaciamiento axilar completo', 'Resección guiada por palpación, sin marcación previa'],
    explicacion: 'Las lesiones no palpables se localizan antes de operar y se verifica en la pieza que las calcificaciones fueron resecadas. Después de la cirugía conservadora se indica radioterapia.',
    fuente: 'Hermes: Cáncer de mama' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Hacés biopsia de ganglio centinela en la cirugía conservadora del carcinoma in situ?',
    opciones: ['No de rutina; sí con mastectomía o sospecha de invasión', 'Sí, porque el carcinoma es de alto grado', 'No: vaciamiento axilar directo por tratarse de un alto grado', 'Sí, pero solo si el in situ es de bajo grado'],
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
    opciones: ['Nefrectomía parcial', 'Nefrectomía radical', 'Nefroureterectomía', 'Vigilancia activa con TC anual'],
    explicacion: 'Para tumores T1 que técnicamente lo permitan se prefiere la nefrectomía parcial, porque preserva función renal con control oncológico equivalente.',
    fuente: 'EAU 2024, carcinoma renal' },
  { tipo: 'Técnica', pregunta: 'Si hicieras una nefrectomía radical, ¿en qué orden tratás los vasos del pedículo?',
    opciones: ['Primero la arteria y luego la vena', 'Primero la vena y luego la arteria', 'Ambos juntos en masa', 'Es indistinto el orden'],
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
    opciones: ['Donde cruza por debajo de la arteria uterina', 'En la unión pieloureteral', 'En el cruce con el psoas a nivel lumbar', 'En su entrada al trígono vesical'],
    explicacion: 'El uréter pasa por debajo de la arteria uterina a unos 1,5 a 2 cm del cuello uterino ("el agua pasa bajo el puente"); también es vulnerable en el ligamento infundibulopélvico.',
    fuente: 'Hermes: Histerectomía; Lesión iatrogénica de la vía urinaria' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Cómo reparás una sección del uréter distal tan cerca de la vejiga?',
    opciones: ['Reimplante ureterovesical sobre un catéter doble J', 'Ureteroureterostomía terminoterminal espatulada', 'Ligadura del uréter y nefrostomía definitiva', 'Nefrectomía izquierda en el mismo acto'],
    explicacion: 'Las lesiones del tercio distal se reparan con reimplante en la vejiga; el psoas hitch o el colgajo de Boari ganan longitud. La anastomosis terminoterminal es para lesiones cortas del tercio medio o superior.',
    fuente: 'AUA 2017, trauma urológico; Hermes: Lesión iatrogénica de la vía urinaria' },
  { tipo: 'Medidas generales', pregunta: '¿Qué principio general guía la reparación?',
    opciones: ['Repararla en el acto, sin tensión y con drenaje', 'Esperar a que dé síntomas para confirmar la lesión', 'Sutura con material no reabsorbible y sin catéter', 'No drenar el lecho para no favorecer la fístula urinaria'],
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
    opciones: ['TC de tórax, abdomen y pelvis con contraste y CEA', 'Ecografía abdominal y radiografía de tórax', 'PET-TC de cuerpo entero de rutina', 'Resonancia de abdomen y centellograma óseo'],
    explicacion: 'La estadificación del cáncer de colon se hace con TC de tórax, abdomen y pelvis y CEA basal; el PET se reserva para situaciones dudosas.',
    fuente: 'ESMO 2023, cáncer de colon localizado; Hermes: Cirugía del cáncer de colon' },
  { tipo: 'Conducta quirúrgica', pregunta: 'No hay metástasis. ¿Qué cirugía indicás?',
    opciones: ['Hemicolectomía derecha con ligadura central y linfadenectomía', 'Resección segmentaria del ciego con márgenes de 2 cm a cada lado', 'Colectomía total con ileorrectoanastomosis', 'Mucosectomía endoscópica y control'],
    explicacion: 'El cáncer del ciego se trata con hemicolectomía derecha oncológica, con ligadura en el origen de los vasos y resección del mesocolon con sus ganglios.',
    fuente: 'Hermes: Colectomía derecha' },
  { tipo: 'Técnica', pregunta: '¿Cuántos ganglios como mínimo debe tener la pieza para una estadificación adecuada?',
    opciones: ['12', '3', '30', '6'],
    explicacion: 'Al menos 12 ganglios en la pieza son necesarios para estadificar con confianza; menos de 12 se considera factor de riesgo en estadio II.',
    fuente: 'ESMO 2023, cáncer de colon localizado' },
  { tipo: 'Fármaco', pregunta: 'La anatomía patológica es pT3 N1 (estadio III). ¿Qué indicás?',
    opciones: ['Quimioterapia adyuvante (CAPOX o FOLFOX)', 'Seguimiento con CEA y TC, sin adyuvancia', 'Radioterapia adyuvante sobre el lecho tumoral', 'Inmunoterapia con anti-PD-1 de rutina'],
    explicacion: 'El estadio III recibe quimioterapia adyuvante con oxaliplatino y fluoropirimidina; reduce la recurrencia y la mortalidad.',
    fuente: 'ESMO 2023, cáncer de colon localizado' },
  { tipo: 'Dosis', pregunta: '¿Cuánto dura en un estadio III de bajo riesgo (T1-3 N1) con CAPOX?',
    opciones: ['3 meses', '2 semanas', '24 meses', '12 meses'],
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
    opciones: ['Perforación del ciego (asa cerrada)', 'Vólvulo de sigma secundario', 'Isquemia del sigma por el tumor', 'Fístula colovesical'],
    explicacion: 'Con válvula competente el colon queda en asa cerrada; el ciego es el segmento de mayor diámetro y el que se perfora, sobre todo por encima de 10 a 12 cm.',
    fuente: 'Hermes: Cirugía del cáncer de colon' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué opciones son razonables?',
    opciones: ['Hartmann o, en centros con experiencia, prótesis como puente', 'Observar con sonda nasogástrica y enemas evacuantes durante una semana', 'Colonoscopia descompresiva y alta con dieta', 'Quimioterapia neoadyuvante sin descompresión'],
    explicacion: 'La obstrucción izquierda se resuelve con resección (Hartmann o anastomosis con o sin ostomía de protección según el paciente) o con prótesis como puente; ambas son aceptables según el contexto y la experiencia.',
    fuente: 'Hermes: Cirugía del cáncer de colon' },
  { tipo: 'Técnica', pregunta: 'En la laparotomía el ciego está isquémico con desgarros serosos. ¿Qué hacés?',
    opciones: ['Colectomía subtotal que incluya el ciego y el tumor', 'Resección del sigma y observar el ciego', 'Cecostomía con sonda y resección del sigma', 'Sutura de los desgarros serosos y operación de Hartmann'],
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
    opciones: ['Síndrome de Lynch hereditario', 'Poliposis adenomatosa familiar', 'Síndrome de Peutz-Jeghers', 'Cáncer esporádico sin estudio'],
    explicacion: 'Cáncer colorrectal joven, colon derecho y familiares con cáncer de colon y endometrio sugieren síndrome de Lynch (deficiencia de reparación de errores de apareamiento).',
    fuente: 'Hermes: Síndrome de Lynch' },
  { tipo: 'Estudios', pregunta: '¿Qué pedís sobre el tumor?',
    opciones: ['Estudio de reparación de errores (IHQ o IMS)', 'Dosaje de CEA y CA 19-9 en la sangre', 'Mutación de APC en el tejido tumoral resecado', 'Mutación de BRCA1 y BRCA2 en el tumor'],
    explicacion: 'Se recomienda estudiar la reparación de errores de apareamiento en todo cáncer colorrectal; si está deficiente, se completa con estudio germinal y asesoramiento genético.',
    fuente: 'Hermes: Síndrome de Lynch' },
  { tipo: 'Medidas generales', pregunta: 'Se confirma Lynch. ¿Cómo vigilás a sus hermanos portadores?',
    opciones: ['Colonoscopia cada 1 a 2 años desde los 20 a 25 años', 'Colonoscopia cada 10 años desde los 50 años', 'Sangre oculta en materia fecal anual', 'Colonoscopia cada 5 años desde los 40 años'],
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
    opciones: ['Poliposis adenomatosa familiar clásica', 'Síndrome de Lynch con pólipos múltiples', 'Poliposis juvenil con hamartomas', 'Colitis ulcerosa con pseudopólipos'],
    explicacion: 'Cientos a miles de adenomas por mutación germinal de APC definen la poliposis adenomatosa familiar clásica; el riesgo de cáncer es casi del 100 % sin cirugía.',
    fuente: 'Hermes: Poliposis adenomatosa familiar' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Con el recto tapizado de pólipos, ¿qué cirugía indicás?',
    opciones: ['Proctocolectomía con reservorio ileal y anastomosis ileoanal', 'Colectomía total con ileorrecto anastomosis y control del recto', 'Hemicolectomía izquierda con colonoscopias anuales', 'Polipectomías endoscópicas cada 6 meses sin cirugía'],
    explicacion: 'Con compromiso rectal importante se reseca el recto con reservorio ileal; la ileorrecto anastomosis se reserva para recto con pocos pólipos.',
    fuente: 'Hermes: Poliposis adenomatosa familiar' },
  { tipo: 'Medidas generales', pregunta: '¿Qué vigilancia extracolónica es prioritaria?',
    opciones: ['Endoscopia alta con visión lateral (duodeno y papila)', 'Mamografía y ecografía mamaria anual desde los 20 años', 'Colangiorresonancia anual por riesgo biliar', 'TC de cerebro anual por meduloblastoma'],
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
    opciones: ['Resonancia pélvica de alta resolución', 'TC de abdomen y pelvis con contraste', 'Ecografía abdominal con Doppler', 'Colonoscopia virtual por TC'],
    explicacion: 'La resonancia pélvica define T, N, la distancia a la fascia mesorrectal, la invasión venosa extramural y la relación con el esfínter, que deciden el tratamiento.',
    fuente: 'ESMO 2017, cáncer de recto; Hermes: Cirugía del cáncer de recto' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Con la fascia mesorrectal amenazada, ¿qué indicás antes de la cirugía?',
    opciones: ['Neoadyuvancia (quimiorradioterapia o neoadyuvancia total)', 'Cirugía inmediata con escisión total del mesorrecto', 'Quimioterapia paliativa sin intención curativa', 'Resección local transanal y radioterapia posterior sobre el lecho'],
    explicacion: 'El margen circunferencial amenazado es indicación de neoadyuvancia; la neoadyuvancia total (ensayos RAPIDO y PRODIGE 23) mejora la respuesta y reduce las metástasis.',
    fuente: 'ESMO 2017; ensayos RAPIDO y PRODIGE 23' },
  { tipo: 'Técnica', pregunta: '¿Cuál es el principio técnico clave de la resección?',
    opciones: ['Escisión total del mesorrecto en el plano areolar', 'Disección intramesorrectal para acortar el tiempo', 'Resección local transanal de espesor completo', 'Disección por detrás de la fascia presacra'],
    explicacion: 'La escisión total del mesorrecto en el plano "sagrado" reduce la recurrencia local; la calidad del mesorrecto se informa en la pieza. Disecar por detrás de la fascia presacra produce sangrado venoso grave.',
    fuente: 'Hermes: Escisión total del mesorrecto' },
  { tipo: 'Conducta quirúrgica', pregunta: 'Tras la neoadyuvancia hay respuesta clínica completa en endoscopia y resonancia. ¿Qué opción podés ofrecer?',
    opciones: ['Vigilancia estrecha (watch and wait) en un programa', 'Alta sin seguimiento porque el tumor desapareció', 'Amputación abdominoperineal igual, a las 8 semanas', 'Un refuerzo de radioterapia de contacto de rutina'],
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
    opciones: ['Amputación abdominoperineal con colostomía definitiva', 'Resección anterior baja con anastomosis coloanal e ileostomía', 'Resección local transanal de espesor completo', 'Colostomía de descarga sin resección'],
    explicacion: 'La invasión del esfínter externo impide preservar el esfínter con márgenes oncológicos; la amputación abdominoperineal es la opción.',
    fuente: 'Hermes: Amputación abdominoperineal; Preservación esfinteriana en cáncer de recto' },
  { tipo: 'Técnica', pregunta: '¿Qué evita la "cintura" de la pieza en el plano del elevador?',
    opciones: ['Resección extraelevadora (cilíndrica)', 'Disección más cerca de la pared rectal', 'Disección interesfinteriana del canal', 'Cierre perineal sin drenaje'],
    explicacion: 'La disección que sigue el mesorrecto hasta el elevador deja una pieza con cintura y riesgo de margen positivo y perforación; la técnica extraelevadora incluye los elevadores.',
    fuente: 'Hermes: Amputación abdominoperineal' },
  { tipo: 'Medidas generales', pregunta: 'Antes de la cirugía, ¿qué hacés con la ostomía?',
    opciones: ['Marcar el sitio sentada y parada, con estomaterapia', 'Elegir el sitio en el quirófano con la paciente acostada', 'Ubicarla en la cicatriz mediana para no abrir otra incisión', 'Esperar a ver la longitud del colon disponible en la cirugía'],
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
    opciones: ['Laparoscopia con citología peritoneal', 'Colonoscopia para descartar tumor sincrónico', 'Centellograma óseo corporal total de rutina', 'Resonancia de cerebro con gadolinio de rutina'],
    explicacion: 'La laparoscopia detecta metástasis peritoneales que la TC no ve, evitando laparotomías innecesarias; la citología positiva equivale a enfermedad M1.',
    fuente: 'Hermes: Cáncer gástrico' },
  { tipo: 'Fármaco', pregunta: 'Sin carcinomatosis, ¿qué tratamiento sistémico perioperatorio indicás?',
    opciones: ['Quimioterapia perioperatoria con FLOT', 'Cirugía sola, sin quimioterapia', 'Radioterapia preoperatoria sola', 'Inmunoterapia sola sin quimioterapia'],
    explicacion: 'En el ensayo FLOT4, la quimioterapia perioperatoria con 5-FU, leucovorina, oxaliplatino y docetaxel mejoró la supervivencia frente a ECF/ECX.',
    fuente: 'Ensayo FLOT4' },
  { tipo: 'Dosis', pregunta: '¿Cuántos ciclos de FLOT se dan?',
    opciones: ['4 ciclos antes y 4 después de la cirugía', '1 ciclo antes y 6 después de la cirugía', '12 ciclos después de la cirugía', '8 ciclos antes de la cirugía'],
    explicacion: 'El esquema FLOT4 son 4 ciclos preoperatorios y 4 posoperatorios, cada 2 semanas.',
    fuente: 'Ensayo FLOT4' },
  { tipo: 'Conducta quirúrgica', pregunta: '¿Qué cirugía indicás para un cáncer de antro?',
    opciones: ['Gastrectomía subtotal con linfadenectomía D2', 'Gastrectomía total con linfadenectomía D1', 'Resección en cuña con margen de 2 cm', 'Gastroyeyunostomía de derivación'],
    explicacion: 'El tumor distal con margen proximal adecuado se trata con gastrectomía subtotal y D2, con la misma supervivencia que la total y mejor calidad de vida.',
    fuente: 'Hermes: Gastrectomía; Linfadenectomía D2 gástrica' },
  { tipo: 'Técnica', pregunta: '¿Cuántos ganglios como mínimo debe tener la pieza?',
    opciones: ['16 o más', '5 o más', '2 o más', '10 o más'],
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
    opciones: ['Evaluación y soporte nutricional, enteral si hace falta', 'Operar primero y nutrir después', 'Ayuno hasta la cirugía para no aspirar', 'Nutrición parenteral total de rutina por la disfagia'],
    explicacion: 'La desnutrición es frecuente por la disfagia y aumenta las complicaciones; se prioriza la vía enteral.',
    fuente: 'Hermes: Cirugía del cáncer de esófago' },
  { tipo: 'Fármaco', pregunta: 'Para un adenocarcinoma localmente avanzado, ¿qué tratamiento preoperatorio mostró mejor supervivencia en el ensayo ESOPEC?',
    opciones: ['Quimioterapia perioperatoria FLOT', 'Quimiorradioterapia preoperatoria CROSS', 'Cirugía sola sin neoadyuvancia', 'Inmunoterapia con nivolumab sola'],
    explicacion: 'En ESOPEC, en adenocarcinoma esofágico resecable, FLOT perioperatorio logró mayor supervivencia que CROSS. CROSS sigue siendo estándar en el carcinoma escamoso.',
    fuente: 'Ensayo ESOPEC; ensayo CROSS' },
  { tipo: 'Técnica', pregunta: '¿Qué abordaje se usa habitualmente para un tumor del esófago distal?',
    opciones: ['Esofagectomía de Ivor Lewis (abdomen y tórax derecho)', 'Esofagectomía transhiatal sin toracotomía', 'Resección endoscópica submucosa', 'Gastrectomía total ampliada al esófago abdominal por vía transhiatal'],
    explicacion: 'Ivor Lewis permite linfadenectomía en dos campos y anastomosis intratorácica para tumores distales; el abordaje en tres campos (McKeown) se prefiere en tumores más altos.',
    fuente: 'Hermes: Esofagectomía' },
  { tipo: 'Diagnóstico', pregunta: 'En el día 6 posoperatorio aparece fiebre, taquicardia y derrame pleural derecho con líquido turbio. ¿Qué sospechás?',
    opciones: ['Fuga de la anastomosis intratorácica', 'Neumonía aspirativa del lóbulo inferior', 'Quilotórax por lesión del conducto torácico', 'Atelectasia del lóbulo inferior con derrame reactivo'],
    explicacion: 'Fiebre, taquicardia y derrame turbio tras una anastomosis intratorácica son fuga hasta demostrar lo contrario; se confirma con endoscopia o TC con contraste oral.',
    fuente: 'Hermes: Esofagectomía' }
 ]
}
];
