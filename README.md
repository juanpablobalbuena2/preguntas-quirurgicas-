# Pase de sala: juego de casos clínicos del programa de residencia

Nota de traspaso para seguir este proyecto con otro agente (Antigravity, Codex, Gemini, Claude u otro). Leela entera antes de tocar nada.

Última actualización: 12 de octubre de 2026.

## Qué es

Es un juego para el teléfono, tipo Preguntados, que ayuda a fijar los conocimientos básicos del programa de la residencia de cirugía general. Cada tarjeta es un **caso clínico por pasos**: el caso, y después preguntas de diagnóstico, estudios, medidas generales, fármaco, dosis, conducta quirúrgica y técnica. Todas las preguntas son de opción múltiple con una sola respuesta correcta. Después de cada paso se muestran la explicación y la fuente.

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
| Casos | `fuente/casos-piloto.js`, `fuente/casos-anio1a.js`, `fuente/casos-anio1b.js`, `fuente/casos-anio2.js`, `fuente/casos-anio3.js`, `fuente/casos-anio4.js` |
| Interfaz (HTML, CSS y JS sin dependencias) | `fuente/plantilla.html` |
| Generador y validador | `fuente/construir.js` |
| Service worker (modo sin conexión) | `fuente/sw.js` |
| Íconos y su generador | `fuente/iconos/`, `fuente/iconos.ps1` |
| Mapa del programa (63 puntos por año, con sus notas de Hermes) | `fuente/programa.json` |
| Registro de cambios | `CAMBIOS.md` |
| **App publicada** (para instalar en el iPhone) | https://juanpablobalbuena2.github.io/preguntas-quirurgicas-/ |
| Repositorio | https://github.com/juanpablobalbuena2/preguntas-quirurgicas- (rama `main`, Pages desde `/docs`) |
| Versión publicada como artifact de Claude | https://claude.ai/artifact/YVkJk56jGinFT7XZGxmC5U (solo se actualiza desde Claude; necesita conexión) |

## Estado actual

- 113 casos y 435 pasos: 47 de 1.º año, 26 de 2.º, 25 de 3.º y 15 de 4.º.
- Hay al menos un caso por cada uno de los 63 puntos del programa.
- Temas con un solo caso (los primeros para ampliar): cáncer gástrico, cáncer esofágico, cáncer de pulmón, empiema, quiste hidatídico, cavidad oral, vaciamiento cervical, nefrectomías, histerectomías, pancreatitis crónica, quiste pilonidal, enfermedad venosa crónica, canalizaciones venosas, soporte nutricional, traqueostomías, entre otros. Para ver el conteo actualizado, desde `fuente/`:
  ```bash
  node -e "const fs=require('fs');const c=fs.readdirSync('.').filter(f=>/^casos-.*\.js$/.test(f)).flatMap(f=>require('./'+f));const t={};c.forEach(x=>{const k=x.anio+' | '+x.tema;t[k]=(t[k]||0)+1});Object.keys(t).sort().forEach(k=>console.log(t[k],k))"
  ```

## Cómo se genera

Hace falta Node.js. Desde `fuente/`:

```bash
node construir.js
```

El script:
1. carga todos los archivos `casos-*.js`;
2. valida que no haya ids repetidos ni campos vacíos, que cada paso tenga al menos 3 opciones sin duplicados y que las notas de Hermes citadas existan en `../../Obsidian/Hermes/wiki/concepts/` (si no existen, imprime `AVISOS`; si no encuentra Hermes, avisa y sigue sin esa verificación);
3. inserta los casos en `plantilla.html` (reemplaza `/*CASOS*/[]`);
4. escribe la app en `../docs/`: `index.html`, `manifest.webmanifest`, `sw.js` (con una versión nueva en cada generación, para que el teléfono baje la actualización) y los íconos.

Con un argumento (`node construir.js ruta.html`) también escribe la página sin envoltorio, que es lo que se publica como artifact de Claude. Desde otro agente no hace falta.

## Cómo se usa en el teléfono

La app se publica con GitHub Pages desde la carpeta `docs/` y se instala en el iPhone desde Safari: Compartir → «Agregar a pantalla de inicio». Después abre sin conexión. El service worker guarda la app en el teléfono y, cada vez que se abre con conexión, baja la versión nueva si la hay. La actualización se ve la vez siguiente que se abre.

Para publicar un cambio: `node construir.js` desde `fuente/`, y después hacer commit y push del repositorio (incluida la carpeta `docs/`). GitHub Pages tarda uno o dos minutos en actualizarse.

`docs/index.html` también funciona como archivo suelto, sin servidor, pero así no se instala ni guarda la app.

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
- Los casos nuevos se agregan en un archivo nuevo `fuente/casos-<algo>.js` (por ejemplo `casos-anio4b.js`) o al final de uno existente.

## Reglas que no se negocian (definidas con el usuario)

1. **Nunca mostrar una indicación, un fármaco o una dosis sin fuente.** Cada paso cita una guía, consenso o ensayo concreto, y la nota de Hermes si existe.
2. **Nunca escribir opciones ambiguas.** Tiene que haber una sola respuesta claramente correcta; las incorrectas son plausibles pero inequívocamente peores.
3. **Nunca mezclar lo vigente con lo histórico sin aclararlo.** Si una conducta cambió, se dice cuál es la actual y desde qué guía.
4. **El fármaco y la dosis van en pasos separados** (paso `Fármaco` y paso `Dosis`), y cada uno puntúa por separado.
5. **Si una dosis o duración no se puede verificar en la fuente original, no se inventa.** Se pregunta lo que sí está verificado o se omite el paso. Hoy quedaron sin cifra la duración del antibiótico en el empiema y el momento exacto del albendazol antes de la cirugía.
6. Las indicaciones pueden ser higiénico-dietéticas, farmacológicas (fármaco y dosis), quirúrgicas o técnicas. El énfasis está en el diagnóstico y el tratamiento.
7. Los casos pueden ser largos. Los temas que Hermes no cubre se completan con fuentes oficiales de internet (guías de sociedades, ensayos, PubMed/PMC). No se saltan verificaciones anti-bot ni se usan fuentes no oficiales.
8. Hermes es de solo lectura (ver «Relación con Hermes»). El progreso del juego es independiente del progreso del programa en Hermes.

## Cómo funciona el juego (fuente/plantilla.html)

- Repetición espaciada tipo Leitner. Intervalos por nivel: `[0, 1, 3, 7, 16, 35]` días.
- Cada sesión tiene 5 casos: primero los vencidos y después los nuevos.
- Puntuación del caso: 85 % o más sube un nivel; menos del 60 % vuelve al nivel 1; en el medio mantiene el nivel. Un caso se considera «dominado» desde el nivel 3.
- Progreso por tema y por año, y un **modo repaso** para elegir un tema.
- El progreso se guarda en el `localStorage` del navegador con la clave `pase-de-sala-progreso-v1`. Está atado a la dirección web y a la app instalada: en Safari común, en otra dirección o en otro navegador empieza de cero. **No cambiar la dirección de publicación** sin avisarle al usuario. Para pasarlo, se usa la opción de copia de seguridad (copiar y pegar un código).
- **No cambiar los `id` de casos existentes**: el progreso guardado se asocia a ellos.
- Diseño: tipografías Bricolage Grotesque, Source Sans 3 e IBM Plex Mono (Google Fonts; sin conexión se usan las del sistema), verde quirófano `#0F5C52` y acento yodo `#B8661A`, modo claro y oscuro.

## Fuentes verificadas que ya se usaron (para reutilizar)

TG18 (antibióticos en infección biliar, tabla 3 de Gomi 2018), SIS/IDSA 2010 (tabla de dosis), ASHP 2013 (profilaxis), WSES (apendicitis 2020, bazo 2017, hígado 2020, pelvis 2017, pancreatitis grave 2019, lesión biliar 2020, enfermedades anorrectales 2021), ATLS 10.ª ed., CRASH-2, Surviving Sepsis 2021, ESPEN, BTS 2023 y MIST-2, ESC 2019 (embolia pulmonar), ESC/ESVS 2024 (arteriopatía periférica), ESVS 2020 y 2022, IWGDF/IDSA 2023, ASCRS (hemorroides 2018, fisura 2023, pilonidal 2019), HerniaSurge, EHS 2026 (hernia ventral de urgencia), ATA 2015 y 2016, Society for Endocrinology 2016 (hipocalcemia), ESGE 2021, Maastricht VI, Lyon 2.0, ESMO 2023 (colon) e IDEA, RAPIDO y PRODIGE 23, FLOT4, ESOPEC, CROSS, ACOSOG Z0011, JCOG0802, CALGB 140503, BCLC 2022, EORTC 40983, WHO-IWGE 2010, BILCAP, PRODIGE 24, DROP, ISGPS 2016, EAU 2024, AUA 2017, ley 26.529.

## Próximos pasos sugeridos

1. Agregar un segundo y tercer caso a los temas que tienen uno solo (ver arriba), sobre todo en 3.º y 4.º año.
2. Repasar con el usuario los casos que le resulten dudosos mientras juega y corregirlos en el archivo `fuente/casos-*.js` que corresponda.
3. Después de cada cambio: `node construir.js` desde `fuente/`, revisar que no haya `AVISOS`, agregar una entrada en `CAMBIOS.md`, y hacer commit y push para publicarlo.
