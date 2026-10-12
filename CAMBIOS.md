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
