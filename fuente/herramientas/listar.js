// node herramientas/listar.js casos-anio1a.js [desde] [hasta]  -> lista los pasos con el largo de cada opción (✓ = correcta) y sus pistas de forma
const path = require('path');
const archivo = process.argv[2];
const casos = require(path.resolve(__dirname, '..', archivo));
const desde = +(process.argv[3] || 0), hasta = +(process.argv[4] || casos.length);
const ABS = /\b(siempre|nunca|jamás|todos|todas|ninguno|ninguna|nada|únicamente|exclusivamente|solamente|cualquiera|cualquier|obligatori[ao]s?|absolut[ao]s?|absolutamente|sin excepción|en ningún caso|en todos los casos)\b/i;
casos.slice(desde, hasta).forEach((c, ci) => {
  console.log(`\n=== [${desde + ci}] ${c.id} · ${c.tema} · ${c.anio}.º · ${c.titulo}\n${c.vineta}`);
  c.pasos.forEach((p, i) => {
    const L = p.opciones.map(o => o.length), mx = Math.max(...L.slice(1)), mn = Math.min(...L.slice(1));
    const marca = L[0] > mx ? ' [CORRECTA MÁS LARGA]' : L[0] < mn ? ' [correcta más corta]' : '';
    console.log(`-- ${i + 1}. ${p.tipo}: ${p.pregunta}${marca}`);
    p.opciones.forEach((o, k) => console.log(`   ${k ? ' ' : '✓'} (${o.length}) ${o}${k && ABS.test(o) ? '   <ABS>' : ''}`));
    console.log(`   E: ${p.explicacion}`);
  });
});
