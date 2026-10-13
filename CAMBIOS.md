# Registro de cambios

Formato: `## [día mes año] título`, con un párrafo de qué cambió. Lo más reciente va al final.

## [12 octubre 2026] Piloto

Creado el piloto del juego de casos por pasos con 10 casos y 53 preguntas (colelitiasis, colecistitis, coledocolitiasis, colangitis, pancreatitis biliar, hernia inguinal electiva y aguda, eventración), con explicación y fuente en cada paso, repetición espaciada y modo repaso por tema. Dosis verificadas en TG18 antimicrobianos, SIS/IDSA 2010 y ASHP 2013.

## [12 octubre 2026] Programa completo

Se ampliaron los casos a los cuatro años del programa: 113 casos y 435 pasos (47 de primer año, 26 de segundo, 25 de tercero y 15 de cuarto), con al menos un caso por punto curricular. Cada paso cita su guía o ensayo y la nota de Hermes; las dosis o duraciones que no pudieron verificarse en la fuente original (duración del antibiótico en el empiema, momento exacto del albendazol perioperatorio) se dejaron sin cifra.

## [12 octubre 2026] Proyecto independiente de Hermes

El juego salió del vault Hermes a su propia carpeta, `SynologyDrive/Pase de sala/`. El juego para el teléfono pasó a ser `pase-de-sala.html` (antes `Hermes/outputs/pase-de-sala-offline.html`) y los datos y el generador están en `fuente/` (antes `Hermes/.hermes-workspace/juego-casos/`). Hermes queda como fuente de consulta de solo lectura. El contenido del juego no cambió.

## [12 octubre 2026] App instalable para iPhone

El juego pasó a ser una app instalable (PWA) que funciona sin conexión: manifiesto, íconos para la pantalla de inicio y service worker que guarda la app y las tipografías en el teléfono. `construir.js` ahora genera la app en `docs/` para publicarla con GitHub Pages, y se quitó el archivo suelto `pase-de-sala.html`. Se agregaron márgenes para la muesca y la barra inferior del iPhone, se quitó la etiqueta «piloto» y se corrigió «1 casos». Probado en Chrome: con el servidor apagado y sin conexión, la app abre con los 113 casos y conserva el progreso.

## [12 octubre 2026] Opciones sin pistas de forma

Se reescribieron las opciones de los 435 pasos para que la respuesta no se adivine por la forma. Antes la correcta era la opción más larga en el 80 % de los pasos y 113 pasos tenían palabras absolutas («siempre», «nunca», «nada», «ninguno», «obligatorio») solo en las incorrectas. Ahora la correcta es la más larga en el 20 % y la más corta en el 14 %, y no queda ninguna palabra absoluta que la delate. Se mantuvo el contenido clínico de la correcta y el concepto de cada incorrecta, para que las explicaciones y las fuentes sigan valiendo; en algunos pasos se reemplazó una incorrecta absoluta («Nada», «Nunca») por otra conducta plausible. `construir.js` mide y lista estas pistas (`--pistas`), y se agregaron las herramientas `listar.js` y `aplicar.js`.

## [12 octubre 2026] Juego completo: ruleta, contrarreloj, errores, marcas y respaldo

La app pasó a tener cinco modos: sesión del día (casos con repetición espaciada), ruleta estilo Preguntados (7 coronas, 3 vidas, pregunta corona y tiempo opcional), contrarreloj de 90 segundos, mis errores y pregunta rápida. Se agregaron puntos con multiplicador por racha, rangos, racha de días, récords, diez logros, aciertos por tipo de paso y coronas por tema. Cada respuesta guarda la partida en curso, que se puede continuar al reabrir la app. Cualquier pregunta se puede marcar como dudosa con un comentario, y la lista se comparte para corregirla. El respaldo se guarda como archivo con el menú Compartir del iPhone, y la app avisa cuando hay una versión nueva. Probado con `herramientas/probar-juego.js`: 28 comprobaciones sin errores.

## [12 octubre 2026] 20 casos nuevos de 3.º y 4.º año

Segundo y tercer caso para los temas que tenían uno solo: cáncer de cavidad oral, vaciamiento cervical, empiema, cáncer de pulmón y quiste hidatídico (4.º año, `casos-anio4b.js`), y cáncer esofágico, cáncer gástrico, patología mamaria y cáncer de mama, histerectomías y nefrectomías (3.º año, `casos-anio3b.js`). Las cifras se verificaron en el texto o resumen original (Europe PMC y sitios de las sociedades): RTOG 9501 y EORTC 22931, AAO-HNS 2017, EAST 2021, WSES-AAST 2025, Fleischner 2017, ADAURA, WHO-IWGE 2010 (por revisiones abiertas de 2024 y 2026), CROSS, JGCA 2021, KATHERINE y WSES 2023. Total: 133 casos y 518 pasos, sin pistas de forma.

## [12 octubre 2026] Al menos 3 casos por tema

41 casos nuevos más (además de los 20 anteriores): tercer caso para los temas de 3.º y 4.º año que tenían dos (`casos-anio34c.js`), 12 de 2.º año (`casos-anio2b.js`) y 22 de 1.º año (`casos-anio1c.js`). Total: 174 casos y 667 pasos; los 57 temas tienen al menos 3 casos. Los pasos de Estudios pasaron de 37 a 74 y los de Dosis de 35 a 45. Las cifras y conductas se verificaron en el texto o resumen original (lista en el README); cuando no hubo acceso abierto a una guía, el caso se apoyó en la nota de Hermes correspondiente y no se incluyeron cifras sin verificar. Se balanceó el largo de las opciones de los casos nuevos: la correcta es la más larga en el 27 % de los pasos y la más corta en el 15 %, sin pasos con pistas. La prueba automática del juego pasa completa.

## [12 octubre 2026] Auditoría de Fármaco y Dosis de los casos originales

Se contrastaron los 95 pasos de Fármaco y Dosis de los 113 casos originales con su fuente (texto de las guías y ensayos vía Europe PMC). Correcciones: diclofenac o indometacina rectal justo antes de la CPRE, según ESGE 2020 (no "antes o después"); el paso del Lugol en Graves pasó a preguntar cuándo se indica (preoperatorio inmediato, ya eutiroidea), porque ATA 2016 no fija gotas ni días; la dosis de levotiroxina de 1,6 µg/kg cita una revisión que sí la respalda; la erradicación de Helicobacter se plantea con resistencia a la claritromicina ≥15 %, como Maastricht VI; la nitroglicerina en la fisura anal pasa a 2 veces por día durante 6 a 8 semanas; la profilaxis posexposición al VIH dice "idealmente en horas" en vez de "en 2 horas". No se pudo leer el PDF de UKKA 2026 sobre el calcio IV en la hiperpotasemia.

## [12 octubre 2026] Cálculos y epónimos

Nuevo tipo de paso **Cálculo**: no tiene opciones; se escribe el resultado en un casillero numérico (acepta coma o punto) y se compara con la respuesta dentro de un margen. Se sumaron 13 casos con 35 cálculos verificados en su fuente: hidratación de la pancreatitis según WATERFALL y BISAP, reanimación del quemado (regla de los nueve, ATLS 2 ml/kg/%, ritmo de las primeras 8 horas desde la quemadura y diuresis objetivo), mantenimiento según NICE, límites de corrección de la hiponatremia, dosis máxima de lidocaína y emulsión lipídica, heparina por peso (Raschke), Cockcroft-Gault y enoxaparina en insuficiencia renal, Glasgow-Blatchford, Alvarado, Glasgow, profilaxis en el paciente de 125 kg, nutrición enteral e índice tobillo-brazo. Se sumaron 12 casos de **epónimos** (60 preguntas): hernia inguinal, pared abdominal, esófago, estómago y duodeno, páncreas, maniobras de trauma, colecistectomía, proctología, sinus pilonidal, cirugía pediátrica e hidrocele, ostomías y pelvis. La ruleta pasa a 8 coronas y el inicio tiene dos modos nuevos: «Cálculos» y «Epónimos», de 10 preguntas cada uno. La prueba automática cubre el casillero numérico y los modos nuevos.
