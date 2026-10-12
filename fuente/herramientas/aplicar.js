// node herramientas/aplicar.js casos-anio1a.js cambios.js
// cambios.js exporta { 'id-del-caso': { 1: ['correcta', 'incorrecta', ...], 2: { o: [...], e: 'nueva explicación' } } } (pasos numerados desde 1).
// Reemplaza solo las líneas `opciones:` (y `explicacion:` si se indica) de esos pasos, sin tocar el resto del archivo.
const fs = require('fs'), path = require('path');
const archivo = path.resolve(__dirname, '..', process.argv[2]);
const cambios = require(path.resolve(process.argv[3]));
const antes = require(archivo);
let src = fs.readFileSync(archivo, 'utf8');
const q = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let n = 0;
for (const [id, pasos] of Object.entries(cambios)) {
  const ini = src.indexOf(`id: '${id}'`);
  if (ini < 0) throw new Error('no encontré el caso ' + id);
  const caso = antes.find(c => c.id === id);
  const sig = src.indexOf("\n id: '", ini + 5); const fin = sig < 0 ? src.length : sig;
  let bloque = src.slice(ini, fin);
  for (const [num, v] of Object.entries(pasos)) {
    const o = Array.isArray(v) ? v : v.o, e = Array.isArray(v) ? null : v.e;
    const paso = caso.pasos[num - 1];
    if (!paso) throw new Error(id + ' no tiene paso ' + num);
    if (o) {
      if (o.length !== paso.opciones.length) throw new Error(id + ' paso ' + num + ': cambió la cantidad de opciones');
      const lineas = bloque.match(/^    opciones: \[.*\],$/gm);
      if (!lineas || lineas.length !== caso.pasos.length) throw new Error(id + ': no pude ubicar las líneas de opciones');
      bloque = bloque.replace(lineas[num - 1], '    opciones: [' + o.map(q).join(', ') + '],');
    }
    if (e) {
      const lineas = bloque.match(/^    explicacion: '.*',$/gm);
      if (!lineas || lineas.length !== caso.pasos.length) throw new Error(id + ': no pude ubicar las líneas de explicación');
      bloque = bloque.replace(lineas[num - 1], '    explicacion: ' + q(e) + ',');
    }
    n++;
  }
  src = src.slice(0, ini) + bloque + src.slice(fin);
}
fs.writeFileSync(archivo, src);
delete require.cache[archivo];
const despues = require(archivo);
if (despues.length !== antes.length) throw new Error('cambió la cantidad de casos');
console.log(n + ' pasos actualizados en ' + process.argv[2]);
