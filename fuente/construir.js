// node construir.js [destino-artifact]  -> genera ../docs/ (la app instalable que publica GitHub Pages) y, con argumento, la página para el artifact de Claude
const fs = require('fs'), path = require('path');
const archivos = fs.readdirSync(__dirname).filter(f => /^casos-.*\.js$/.test(f)).sort();
const casos = archivos.flatMap(f => require('./' + f));
// Hermes (solo lectura): SynologyDrive/Obsidian/Hermes/wiki/concepts
const C = path.join(__dirname, '..', '..', 'Obsidian', 'Hermes', 'wiki', 'concepts');
const hayHermes = fs.existsSync(C);
const ids = new Set(); const avisos = [];
for (const c of casos) {
  if (ids.has(c.id)) throw new Error('id repetido ' + c.id); ids.add(c.id);
  for (const k of ['tema', 'anio', 'titulo', 'vineta']) if (!c[k]) throw new Error(c.id + ' sin ' + k);
  for (const p of c.pasos) {
    for (const k of ['tipo', 'pregunta', 'explicacion', 'fuente']) if (!p[k]) throw new Error(c.id + ' sin ' + k);
    if (new Set(p.opciones).size !== p.opciones.length || p.opciones.length < 3) throw new Error(c.id + ' opciones inválidas: ' + p.pregunta);
    const m = p.fuente.match(/Hermes: ([^;]+)/);
    if (m && hayHermes) { const ex = n => fs.existsSync(path.join(C, n.trim() + '.md')); const t = m[1].trim(); if (!ex(t)) { const partes = t.split(/, | y /); if (!partes.every(ex) && !ex(t)) avisos.push(c.id + ': revisar nota "' + t + '"') } }
  }
}
const plantilla = fs.readFileSync(path.join(__dirname, 'plantilla.html'), 'utf8');
const pagina = plantilla.replace('/*CASOS*/[]', JSON.stringify(casos));
if (process.argv[2]) fs.writeFileSync(process.argv[2], pagina);
const completa = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n' + pagina + '\n</body>\n</html>\n';
// App instalable (PWA) en ../docs: GitHub Pages publica esta carpeta. index.html también se puede abrir suelto, sin servidor.
const APP = path.join(__dirname, '..', 'docs');
fs.mkdirSync(APP, { recursive: true });
const cabezaApp = '<link rel="manifest" href="manifest.webmanifest">\n<link rel="apple-touch-icon" href="icono-180.png">\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-status-bar-style" content="default">\n<meta name="apple-mobile-web-app-title" content="Pase de sala">\n';
const pieApp = '<script>\nif (\'serviceWorker\' in navigator && (location.protocol === \'https:\' || location.hostname === \'localhost\')) navigator.serviceWorker.register(\'sw.js\');\nif (navigator.storage && navigator.storage.persist) navigator.storage.persist();\n</script>\n';
const app = completa.replace('</head>', cabezaApp + '</head>').replace('</body>', pieApp + '</body>');
fs.writeFileSync(path.join(APP, 'index.html'), app);
fs.writeFileSync(path.join(APP, 'manifest.webmanifest'), JSON.stringify({
  name: 'Pase de sala', short_name: 'Pase de sala', lang: 'es', start_url: './', scope: './', display: 'standalone',
  background_color: '#EEF3F1', theme_color: '#0F5C52',
  icons: [192, 512].map(n => ({ src: 'icono-' + n + '.png', sizes: n + 'x' + n, type: 'image/png', purpose: 'any' }))
}, null, 2));
for (const n of [180, 192, 512]) fs.copyFileSync(path.join(__dirname, 'iconos', 'icono-' + n + '.png'), path.join(APP, 'icono-' + n + '.png'));
const version = require('crypto').createHash('sha1').update(app).digest('hex').slice(0, 10);
fs.writeFileSync(path.join(APP, 'sw.js'), fs.readFileSync(path.join(__dirname, 'sw.js'), 'utf8').replace('__VERSION__', version));
const porAnio = {}; casos.forEach(c => porAnio[c.anio] = (porAnio[c.anio] || 0) + 1);
console.log('archivos', archivos.join(', '));
console.log('casos', casos.length, 'pasos', casos.reduce((s, c) => s + c.pasos.length, 0), 'por año', JSON.stringify(porAnio));
if (!hayHermes) console.log('AVISO: no se encontró Hermes en ' + C + '; no se verificaron las notas citadas');
if (avisos.length) console.log('AVISOS\n' + avisos.join('\n'));
