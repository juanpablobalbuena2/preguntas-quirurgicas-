# Pase de sala

Juego de casos clínicos para el iPhone. Antes de hacer cualquier cosa, leé `README.md` entero: tiene la estructura, el formato de los casos y las reglas que no se negocian.

- Para escribir casos se consulta el vault Hermes (`../Obsidian/Hermes/`), que es **de solo lectura** desde este proyecto.
- Los casos se editan en `fuente/casos-*.js` y la app se regenera con `node construir.js` desde `fuente/`. Eso escribe `docs/`, que no se edita a mano.
- Las opciones no pueden delatar la respuesta por su largo ni por palabras absolutas: `node construir.js` tiene que terminar con «0 pasos con pistas» y sin `AVISOS`.
- Para publicar en el teléfono: commit y push (GitHub Pages publica `docs/`).
- Cada cambio se anota en `CAMBIOS.md`.
