// node construir.js [--pistas]  -> valida los casos y genera ../docs/ (la app instalable que publica GitHub Pages)
// --pistas lista cada paso cuya respuesta se puede adivinar por la forma de las opciones (largo o palabras absolutas)
const fs = require('fs'), path = require('path');
const archivos = fs.readdirSync(__dirname).filter(f => /^casos-.*\.js$/.test(f)).sort();
const casos = archivos.flatMap(f => require('./' + f));
// Hermes (solo lectura): SynologyDrive/Obsidian/Hermes/wiki/concepts
const C = path.join(__dirname, '..', '..', 'Obsidian', 'Hermes', 'wiki', 'concepts');
const hayHermes = fs.existsSync(C);
const TIPOS = ['Diagnóstico', 'Estudios', 'Medidas generales', 'Fármaco', 'Dosis', 'Conducta quirúrgica', 'Técnica'];
// Palabras que, si aparecen solo en las incorrectas, delatan que son falsas
const ABSOLUTAS = /\b(siempre|nunca|jamás|todos|todas|ninguno|ninguna|nada|únicamente|exclusivamente|solamente|cualquiera|cualquier|obligatori[ao]s?|absolut[ao]s?|absolutamente|sin excepción|en ningún caso|en todos los casos)\b/i;
const ids = new Set(); const avisos = []; const pistas = [];
let pasos = 0, masLarga = 0, masCorta = 0;
for (const c of casos) {
  if (ids.has(c.id)) throw new Error('id repetido ' + c.id); ids.add(c.id);
  for (const k of ['tema', 'anio', 'titulo', 'vineta']) if (!c[k]) throw new Error(c.id + ' sin ' + k);
  c.pasos.forEach((p, i) => {
    for (const k of ['tipo', 'pregunta', 'explicacion', 'fuente']) if (!p[k]) throw new Error(c.id + ' sin ' + k);
    if (!TIPOS.includes(p.tipo)) throw new Error(c.id + ' tipo de paso desconocido: ' + p.tipo);
    if (new Set(p.opciones).size !== p.opciones.length || p.opciones.length < 3) throw new Error(c.id + ' opciones inválidas: ' + p.pregunta);
    const m = p.fuente.match(/Hermes: ([^;]+)/);
    if (m && hayHermes) { const ex = n => fs.existsSync(path.join(C, n.trim() + '.md')); const t = m[1].trim(); if (!ex(t)) { const partes = t.split(/, | y /); if (!partes.every(ex) && !ex(t)) avisos.push(c.id + ': revisar nota "' + t + '"') } }
    // Pistas de forma
    pasos++;
    const [ok, ...mal] = p.opciones.map(o => o.length);
    const lugar = c.id + ' paso ' + (i + 1) + ' (' + p.tipo + ')';
    if (ok > Math.max(...mal)) masLarga++;
    if (ok < Math.min(...mal)) masCorta++;
    if (ok > 1.2 * Math.max(...mal)) pistas.push(lugar + ': la correcta es claramente la más larga');
    if (ok < 0.8 * Math.min(...mal)) pistas.push(lugar + ': la correcta es claramente la más corta');
    const abs = p.opciones.slice(1).filter(o => ABSOLUTAS.test(o));
    if (abs.length && !ABSOLUTAS.test(p.opciones[0])) pistas.push(lugar + ': palabra absoluta solo en incorrectas: "' + abs[0].match(ABSOLUTAS)[0] + '"');
  });
}
const plantilla = fs.readFileSync(path.join(__dirname, 'plantilla.html'), 'utf8');
const pagina = plantilla.replace('/*CASOS*/[]', JSON.stringify(casos));
const completa = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n' + pagina + '\n</body>\n</html>\n';
// App instalable (PWA) en ../docs: GitHub Pages publica esta carpeta. index.html también se puede abrir suelto, sin servidor.
const APP = path.join(__dirname, '..', 'docs');
fs.mkdirSync(APP, { recursive: true });
const cabezaApp = '<link rel="manifest" href="manifest.webmanifest">\n<link rel="apple-touch-icon" href="icono-180.png">\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-status-bar-style" content="default">\n<meta name="apple-mobile-web-app-title" content="Pase de sala">\n';
const app = completa.replace('</head>', cabezaApp + '</head>'); // el service worker se registra desde la plantilla
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
const pct = n => Math.round(n / pasos * 100) + ' %';
console.log('archivos', archivos.join(', '));
console.log('casos', casos.length, 'pasos', pasos, 'por año', JSON.stringify(porAnio));
console.log('pistas de forma: correcta más larga', pct(masLarga), '(meta ≤ 30 %), más corta', pct(masCorta), '(meta ≤ 30 %),', pistas.length, 'pasos con pistas' + (process.argv.includes('--pistas') ? '' : ' (detalle con --pistas)'));
if (process.argv.includes('--pistas') && pistas.length) console.log(pistas.join('\n'));
if (!hayHermes) console.log('AVISO: no se encontró Hermes en ' + C + '; no se verificaron las notas citadas');
if (avisos.length) console.log('AVISOS\n' + avisos.join('\n'));
