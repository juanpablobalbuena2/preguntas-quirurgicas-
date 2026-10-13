# Pase de sala: juego de casos clínicos del programa de residencia

Nota de traspaso para seguir este proyecto con otro agente (Antigravity, Codex, Gemini, Claude u otro). Leela entera antes de tocar nada.

Última actualización: 12 de octubre de 2026.

## Qué es

Es un juego para el iPhone, tipo Preguntados, que ayuda a fijar los conocimientos básicos del programa de la residencia de cirugía general. Cada tarjeta es un **caso clínico por pasos**: el caso, y después preguntas de diagnóstico, estudios, medidas generales, fármaco, dosis, conducta quirúrgica y técnica. Todas las preguntas son de opción múltiple con una sola respuesta correcta. Después de cada paso se muestran la explicación y la fuente.

Usuario: una sola persona (el residente), desde el teléfono. Tiene que funcionar sin conexión.

## Relación con Hermes

El juego es un proyecto **independiente** del vault Hermes. Hermes (`SynologyDrive/Obsidian/Hermes/`) es la base de conocimiento que se **consulta** para escribir casos nuevos:

- Notas de conceptos: `Obsidian/Hermes/wiki/concepts/`
- Programa oficial (fuente de los temas): `Obsidian/Hermes/wiki/Programa formativo de la residencia de cirugía general.md`
- Esquema del vault: `Obsidian/Hermes/AGENTS.md`

**Desde este proyecto, Hermes es de solo lectura.** No se crean, editan ni mueven archivos de Hermes, no se tocan los checkboxes de progreso del programa y no se registran los cambios del juego en `wiki/log.md`. Los cambios del juego se anotan en `CAMBIOS.md` de esta carpeta.

## Dónde está cada cosa

Todo en `SynologyDrive/Pase de sala/`:

| Qué | Ruta |
|---|---|
| **App para el teléfono** (lo que publica GitHub Pages) | `docs/` (generada; no se edita a mano) |
| Casos | `fuente/casos-*.js`: piloto, `anio1a`, `anio1b`, `anio1c`, `anio2`, `anio2b`, `anio3`, `anio3b`, `anio34c`, `anio4` y `anio4b` |
| Interfaz y lógica del juego (HTML, CSS y JS sin dependencias) | `fuente/plantilla.html` |
| Generador y validador | `fuente/construir.js` |
| Service worker (modo sin conexión) | `fuente/sw.js` |
| Íconos y su generador | `fuente/iconos/`, `fuente/iconos.ps1` |
| Herramientas para editar casos y probar la app | `fuente/herramientas/` |
| Mapa del programa (63 puntos por año, con sus notas de Hermes) | `fuente/programa.json` |
| Registro de cambios | `CAMBIOS.md` |
| **App publicada** (para instalar en el iPhone) | https://juanpablobalbuena2.github.io/preguntas-quirurgicas-/ |
| Repositorio | https://github.com/juanpablobalbuena2/preguntas-quirurgicas- (rama `main`, Pages desde `/docs`) |

## Estado actual

- 174 casos y 667 pasos: 69 de 1.º año, 38 de 2.º, 40 de 3.º y 27 de 4.º.
- Los 57 temas del programa tienen al menos 3 casos.
- Pasos por tipo: Diagnóstico 134, Conducta quirúrgica 143, Medidas generales 116, Fármaco 80, Técnica 75, Estudios 74 y Dosis 45.
- Las opciones no tienen pistas de forma: la correcta es la más larga en el 27 % de los pasos, la más corta en el 15 %, y ninguna incorrecta usa palabras absolutas que la delaten.
- Para ver el conteo por tema, desde `fuente/`:
  ```bash
  node -e "const fs=require('fs');const c=fs.readdirSync('.').filter(f=>/^casos-.*.js$/.test(f)).flatMap(f=>require('./'+f));const t={};c.forEach(x=>{const k=x.anio+' | '+x.tema;t[k]=(t[k]||0)+1});Object.keys(t).sort().forEach(k=>console.log(t[k],k))"
  ```

## Cómo se genera

Hace falta Node.js. Desde `fuente/`:

```bash
node construir.js            # valida y genera la app
node construir.js --pistas   # además lista cada paso con pistas de forma
```

El script:
1. carga todos los archivos `casos-*.js`;
2. valida que no haya ids repetidos ni campos vacíos, que el tipo de paso sea uno de los siete, que cada paso tenga al menos 3 opciones sin duplicados y que las notas de Hermes citadas existan en `../../Obsidian/Hermes/wiki/concepts/` (si no existen, imprime `AVISOS`; si no encuentra Hermes, avisa y sigue sin esa verificación);
3. mide las **pistas de forma**: cuántas veces la correcta es la opción más larga o la más corta (meta: 30 % o menos cada una), y marca cada paso donde la correcta es claramente la más larga o la más corta (20 % de diferencia) o donde una incorrecta usa una palabra absoluta («siempre», «nunca», «nada», «ninguno», «obligatorio», etc.) que la correcta no usa;
4. inserta los casos en `plantilla.html` (reemplaza `/*CASOS*/[]`);
5. escribe la app en `../docs/`: `index.html`, `manifest.webmanifest`, `sw.js` (con una versión nueva en cada generación, para que el teléfono baje la actualización) y los íconos.

**Antes de publicar, la línea de pistas tiene que decir «0 pasos con pistas».**

### Herramientas (`fuente/herramientas/`)

- `node herramientas/listar.js casos-anio2.js [desde] [hasta]`: lista los pasos con el largo de cada opción y sus pistas, para revisar un archivo.
- `node herramientas/aplicar.js casos-anio2.js cambios.js`: reemplaza solo las líneas `opciones:` (y `explicacion:` si se indica) de los pasos que diga `cambios.js`, sin tocar el resto del archivo. El formato está en el comentario del script.
- `node herramientas/probar-juego.js <docs> <chrome.exe> <perfil> <capturas>`: recorre todos los modos en Chrome sin interfaz y verifica que funcionen. El perfil tiene que ser una carpeta vacía en una ruta sin espacios (por ejemplo `C:/Users/Public/pase-perfil`); con espacios o nombres cortos de Windows, Chrome no puede guardar datos y la prueba falla.

## Cómo se usa en el teléfono

La app se publica con GitHub Pages desde la carpeta `docs/` y se instala en el iPhone desde Safari: Compartir → «Agregar a pantalla de inicio». Después abre sin conexión. El service worker guarda la app en el teléfono y, cada vez que se abre con conexión, baja la versión nueva si la hay; entonces aparece el aviso «Hay una versión nueva de los casos» con un botón para actualizar.

Para publicar un cambio: `node construir.js` desde `fuente/`, y después hacer commit y push del repositorio (incluida la carpeta `docs/`). GitHub Pages tarda uno o dos minutos en actualizarse.

## Formato de un caso

```js
{ id: 'colon-01',                     // único en todo el proyecto
  tema: 'Cáncer de colon',            // agrupa el progreso y el modo repaso; reutilizá los temas existentes
  anio: 3,                            // 1 a 4, según el programa
  titulo: 'Anemia y tumor en el ciego',
  vineta: 'Mujer de 68 años con ...',
  pasos: [
    { tipo: 'Diagnóstico',            // Diagnóstico | Estudios | Medidas generales | Fármaco | Dosis | Conducta quirúrgica | Técnica
      pregunta: '¿Qué tiene?',
      opciones: ['CORRECTA', 'incorrecta', 'incorrecta', 'incorrecta'],   // la PRIMERA es la correcta; el juego las mezcla
      explicacion: 'Por qué es así y por qué las otras no.',
      fuente: 'Guía o ensayo; Hermes: Nombre exacto de la nota' }
  ] }
```

- La parte `Hermes: ...` tiene que coincidir con el nombre de un archivo de `Obsidian/Hermes/wiki/concepts/` (sin `.md`). Se pueden citar varias notas separadas por «y» o por coma.
- Cada `opciones:` y cada `explicacion:` van en una sola línea (las herramientas dependen de eso).
- Los casos nuevos se agregan en un archivo nuevo `fuente/casos-<algo>.js` (por ejemplo `casos-anio4b.js`) o al final de uno existente.
- Los pasos de un caso se pueden mostrar sueltos (en la ruleta y los otros modos rápidos), acompañados de la viñeta y de las respuestas de los pasos anteriores. Por eso cada pregunta tiene que entenderse con esa información.

## Reglas que no se negocian (definidas con el usuario)

1. **Nunca mostrar una indicación, un fármaco o una dosis sin fuente.** Cada paso cita una guía, consenso o ensayo concreto, y la nota de Hermes si existe.
2. **Nunca escribir opciones ambiguas.** Tiene que haber una sola respuesta claramente correcta; las incorrectas son plausibles pero inequívocamente peores.
3. **Las opciones no pueden delatar la respuesta por su forma.** La correcta no tiene que ser sistemáticamente la más larga, la más corta ni la única con matices, y las incorrectas no usan palabras absolutas («siempre», «nunca», «nada», «ninguno», «obligatorio», «todos», «solamente») que la correcta no tenga. Las cuatro opciones van con la misma estructura gramatical y un largo parecido.
4. **Nunca mezclar lo vigente con lo histórico sin aclararlo.** Si una conducta cambió, se dice cuál es la actual y desde qué guía.
5. **El fármaco y la dosis van en pasos separados** (paso `Fármaco` y paso `Dosis`), y cada uno puntúa por separado.
6. **Si una dosis o duración no se puede verificar en la fuente original, no se inventa.** Se pregunta lo que sí está verificado o se omite el paso. Hoy quedaron sin cifra la duración del antibiótico en el empiema y el momento exacto del albendazol antes de la cirugía.
7. Las indicaciones pueden ser higiénico-dietéticas, farmacológicas (fármaco y dosis), quirúrgicas o técnicas. El énfasis está en el diagnóstico y el tratamiento.
8. Los casos pueden ser largos. Los temas que Hermes no cubre se completan con fuentes oficiales de internet (guías de sociedades, ensayos, PubMed/PMC). No se saltan verificaciones anti-bot ni se usan fuentes no oficiales.
9. Hermes es de solo lectura (ver «Relación con Hermes»). El progreso del juego es independiente del progreso del programa en Hermes.

## Cómo funciona el juego (fuente/plantilla.html)

### Modos

- **Sesión del día**: casos completos con repetición espaciada tipo Leitner. Intervalos por nivel: `[0, 1, 3, 7, 16, 35]` días. Cada sesión tiene 5, 10 o 15 casos (se elige en Ajustes): primero los vencidos y después los nuevos. Puntuación del caso: 85 % o más sube un nivel; menos del 60 % vuelve al nivel 1; en el medio mantiene el nivel. Un caso está «dominado» desde el nivel 3. También se puede **repasar un tema** completo.
- **Ruleta** (estilo Preguntados): 3 vidas y 7 coronas, una por tipo de paso. Se gira la ruleta, sale una categoría y una pregunta suelta de ese tipo. Cada acierto llena el medidor; con 3 aciertos seguidos se juega una **pregunta corona** de la categoría que se elija. Un error cuesta una vida y vacía el medidor. Se gana con las 7 coronas. Tiempo por pregunta: sin tiempo, 30 o 20 segundos (Ajustes).
- **Contrarreloj**: 90 segundos de preguntas sueltas; cada error resta 5 segundos. El reloj se detiene mientras se lee la explicación.
- **Mis errores**: repasa hasta 15 preguntas cuya última respuesta fue incorrecta. Al acertarlas salen de la lista.
- **Pregunta rápida**: 10 preguntas sueltas, sin reloj.

Las preguntas sueltas se eligen primero entre las que se fallaron, después entre las nunca vistas y después el resto, con algo de azar.

### Puntos, rango, rachas y logros

- Cada acierto suma 100 puntos (50 en Mis errores y Pregunta rápida). En los modos de juego, los aciertos seguidos multiplican los puntos hasta ×2. En la ruleta hay bonus por tiempo sobrante, 300 por pregunta corona y 1000 por ganar. Un caso completo perfecto suma 200.
- Los puntos acumulados definen el rango: Estudiante, Interno, Residente de 1.º a 4.º año, Jefe de residentes y Cirujano de planta.
- Racha: días seguidos con al menos una respuesta. Récords de ruleta y contrarreloj. Diez logros.
- En el inicio se ven los aciertos por tipo de paso y las coronas por tema (un tema gana la corona cuando todos sus casos están dominados).

### Preguntas marcadas como dudosas

Después de responder cualquier pregunta se puede tocar «Marcar como dudosa» y escribir un comentario. La pantalla «Preguntas marcadas» comparte o copia la lista en un texto con el código de cada paso (`id-del-caso#número de paso`), la pregunta, la respuesta del juego y el comentario. **Cuando el usuario pase esa lista, se revisa cada paso contra su fuente y se corrige en el `casos-*.js` que corresponda.**

### Datos guardados

- `localStorage`, clave `pase-de-sala-progreso-v1`: repetición espaciada por caso. **No cambiar la clave ni los `id` de los casos**: el progreso guardado depende de ellos.
- `localStorage`, clave `pase-de-sala-juego-v1`: puntos, racha, récords, logros, ajustes, estadística por paso (clave `id#número de paso`), preguntas marcadas y la partida en curso. **Si se reordenan los pasos de un caso, sus estadísticas quedan asociadas al número viejo.**
- La partida en curso se guarda después de cada respuesta: si se cierra la app, el inicio ofrece continuarla.
- Respaldo: en Ajustes, «Guardar copia en un archivo» abre el menú Compartir del iPhone para guardarlo en iCloud o Archivos, y «Restaurar desde un archivo» lo recupera. También se puede copiar y pegar como texto. Acepta los respaldos viejos (solo la repetición espaciada).
- El progreso está atado a la dirección web y a la app instalada: en Safari común, en otra dirección o en otro navegador empieza de cero. **No cambiar la dirección de publicación** sin avisarle al usuario.

### Diseño

Tipografías Bricolage Grotesque, Source Sans 3 e IBM Plex Mono (Google Fonts; el service worker las guarda para usarlas sin conexión). Verde quirófano `#0F5C52` y acento yodo `#B8661A`, modo claro y oscuro, y un color por tipo de paso (variables `--t-*`) que se usa en la ruleta, las coronas y los márgenes de las hojas.

## Fuentes verificadas que ya se usaron (para reutilizar)

Verificadas para las tandas de octubre de 2026 (en el texto o resumen original vía Europe PMC, la API oficial que da acceso a PubMed y PMC sin pasar por sus verificaciones anti-bot): RTOG 9501 y EORTC 22931, AAO-HNS 2017 (masa cervical), EAST 2021 (hemotórax retenido), WSES-AAST 2025 (trauma torácico), Fleischner 2017, ADAURA, CROSS, JGCA 2021, KATHERINE, WSES 2023 (lesión urinaria), WSES 2020 (lesión biliar y apendicitis), WSES 2019 (pancreatitis grave), WSES 2022 (isquemia mesentérica), ESGAR 2017 (pólipos vesiculares), HerniaSurge 2018, CALISTO, ESCHAR, Caravaggio, Present 1999 (infliximab), RE-VERSE AD, EHS/AHS 2020 y 2022, ESAIC 2024 (delirium), JSA 2025 y EMHG 2024 (hipertermia maligna), Association of Anaesthetists 2025 (acceso vascular), Ley 26.529. Anteriores: TG18 (antibióticos en infección biliar, tabla 3 de Gomi 2018), SIS/IDSA 2010 (tabla de dosis), ASHP 2013 (profilaxis), WSES (apendicitis 2020, bazo 2017, hígado 2020, pelvis 2017, pancreatitis grave 2019, lesión biliar 2020, enfermedades anorrectales 2021), ATLS 10.ª ed., CRASH-2, Surviving Sepsis 2021, ESPEN, BTS 2023 y MIST-2, ESC 2019 (embolia pulmonar), ESC/ESVS 2024 (arteriopatía periférica), ESVS 2020 y 2022, IWGDF/IDSA 2023, ASCRS (hemorroides 2018, fisura 2023, pilonidal 2019), HerniaSurge, EHS 2026 (hernia ventral de urgencia), ATA 2015 y 2016, Society for Endocrinology 2016 (hipocalcemia), ESGE 2021, Maastricht VI, Lyon 2.0, ESMO 2023 (colon) e IDEA, RAPIDO y PRODIGE 23, FLOT4, ESOPEC, CROSS, ACOSOG Z0011, JCOG0802, CALGB 140503, BCLC 2022, EORTC 40983, WHO-IWGE 2010, BILCAP, PRODIGE 24, DROP, ISGPS 2016, EAU 2024, AUA 2017, ley 26.529.

## Próximos pasos sugeridos

1. Seguir sumando casos donde el usuario detecte huecos, y pasos de Dosis, que siguen siendo los menos frecuentes.
2. Verificar contra la fuente original los pasos de Fármaco y Dosis, sobre todo los que no citan una nota de Hermes.
3. Revisar las preguntas que el usuario marque como dudosas y corregirlas en el `casos-*.js` que corresponda.
4. Después de cada cambio: `node construir.js` desde `fuente/`, revisar que no haya `AVISOS` ni pistas, agregar una entrada en `CAMBIOS.md`, y hacer commit y push para publicarlo.
