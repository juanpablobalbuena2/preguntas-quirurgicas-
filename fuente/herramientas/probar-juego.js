// node herramientas/probar-juego.js <carpeta docs> <chrome.exe> <perfil vacío, ruta sin espacios> <carpeta de capturas>
// Recorre todos los modos del juego en Chrome sin interfaz, verifica que funcionen y guarda capturas de pantalla.
const http = require('http'), fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const [dir, chrome, perfil, capturas] = process.argv.slice(2);
const tipos = { '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const srv = http.createServer((q, r) => {
  let f = decodeURIComponent(q.url.split('?')[0]); if (f === '/') f = '/index.html';
  const p = path.join(dir, f); if (!fs.existsSync(p)) { r.writeHead(404); return r.end() }
  r.writeHead(200, { 'content-type': tipos[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(r);
}).listen(8766);
const espera = ms => new Promise(r => setTimeout(r, ms));
let fallas = 0;
const ok = (cond, txt) => { console.log((cond ? 'OK   ' : 'FALLA') + ' ' + txt); if (!cond) fallas++ };
(async () => {
  const br = spawn(chrome, ['--headless=new', '--remote-debugging-port=9334', '--user-data-dir=' + perfil, 'about:blank'], { stdio: 'ignore' });
  let ws;
  for (let i = 0; i < 40 && !ws; i++) { await espera(250); try { const l = await (await fetch('http://127.0.0.1:9334/json')).json(); const t = l.find(x => x.type === 'page'); if (t) ws = new WebSocket(t.webSocketDebuggerUrl) } catch (e) {} }
  await new Promise(r => ws.onopen = r);
  let id = 0; const pend = {}; const errores = [];
  ws.onmessage = m => { const d = JSON.parse(m.data); if (pend[d.id]) { pend[d.id](d); delete pend[d.id] } if (d.method === 'Page.javascriptDialogOpening') ws.send(JSON.stringify({ id: 99999, method: 'Page.handleJavaScriptDialog', params: { accept: true } })); if (d.method === 'Runtime.exceptionThrown') errores.push(d.params.exceptionDetails.exception ? d.params.exceptionDetails.exception.description : d.params.exceptionDetails.text); if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errores.push(d.params.args.map(a => a.value || a.description).join(' ')) };
  const cmd = (method, params = {}) => new Promise(r => { pend[++id] = r; ws.send(JSON.stringify({ id, method, params })) });
  const ev = async e => { const r = (await cmd('Runtime.evaluate', { expression: e, awaitPromise: true, returnByValue: true })).result; return r.exceptionDetails ? 'EXC ' + (r.exceptionDetails.exception && r.exceptionDetails.exception.description) : r.result.value };
  const clic = s => ev(`(() => { const b = document.querySelector(${JSON.stringify(s)}); if (!b) return 'no existe ${s}'; b.click(); return 'ok' })()`);
  const responder = bien => ev(`(() => { const p = estado.modo === 'casos' ? POR_ID[estado.cola[estado.i]].pasos[estado.paso] : POR_CLAVE[estado.clave].p; const i = document.querySelector('#i-calc:not([disabled])');
    if (i) { i.value = ${bien} ? String(p.respuesta).replace('.', ',') : String(p.respuesta + (p.margen || 0) + 1000); document.querySelector('#f-calc').requestSubmit(); return 'ok' }
    const b = document.querySelector('.op[data-i="${bien ? 0 : 1}"]:not([disabled])'); if (!b) return 'no hay pregunta'; b.click(); return 'ok' })()`);
  const bien = () => responder(true), mal = () => responder(false);
  const foto = async nombre => { const s = await cmd('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); fs.writeFileSync(path.join(capturas, nombre + '.png'), Buffer.from(s.result.data, 'base64')) };
  await cmd('Page.enable'); await cmd('Runtime.enable');
  await cmd('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await cmd('Page.navigate', { url: 'http://localhost:8766/' }); await espera(2500);
  await ev('localStorage.clear()'); await cmd('Page.reload'); await espera(2000);
  ok(await ev('document.querySelectorAll(".modo").length') === 7, 'inicio con 7 modos');
  await foto('1-inicio');

  // Sesión de casos
  await clic('#m-sesion'); await espera(300);
  ok(await ev('!!document.querySelector(".vineta")'), 'sesión: muestra la viñeta');
  await mal(); await espera(200);
  ok(await ev('!!document.querySelector(".feedback.no")'), 'sesión: respuesta incorrecta marcada');
  await clic('#b-marcar'); await ev('document.querySelector("#t-marca").value = "La dosis parece alta"'); await clic('#b-guardar-marca'); await espera(200);
  ok(await ev('JSON.parse(localStorage.getItem("pase-de-sala-juego-v1")).marcas.length') === 1, 'marca guardada con comentario');
  await foto('2-caso-feedback');
  for (let n = 0; n < 8 && await ev('!!document.querySelector("#b-sig")'); n++) { await clic('#b-sig'); await espera(150); if (await ev('!!document.querySelector(".op:not([disabled]), #i-calc:not([disabled])")')) { await bien(); await espera(150) } }
  ok(await ev('!!document.querySelector(".next-review")'), 'sesión: pantalla de cierre del caso');
  ok(await ev('!!JSON.parse(localStorage.getItem("pase-de-sala-progreso-v1"))[Object.keys(JSON.parse(localStorage.getItem("pase-de-sala-progreso-v1")))[0]].nivel') , 'repetición espaciada actualizada');
  // Pausa y reanudación
  await clic('#b-otro'); await espera(200); await clic('#b-salir'); await espera(200);
  await cmd('Page.reload'); await espera(1500);
  ok(await ev('!!document.querySelector("#b-seguir")'), 'después de recargar ofrece continuar la partida');
  await clic('#b-seguir'); await espera(200);
  ok(await ev('document.querySelector(".eyebrow").textContent.includes("caso 2")'), 'retoma en el caso 2');
  await clic('#b-salir'); await espera(200); await clic('#b-descartar'); await espera(300);
  ok(await ev('juego.enCurso === null && !document.querySelector("#b-seguir")'), 'descartar la partida');

  // Ruleta
  await clic('#m-ruleta'); await espera(200);
  await foto('3-ruleta');
  for (let n = 0; n < 3; n++) {
    await clic('#b-girar'); await espera(2800);
    ok(await ev('estado.pantalla') === 'pregunta', 'ruleta: giro ' + (n + 1) + ' lleva a una pregunta (' + await ev('estado.tipo') + ')');
    await bien(); await espera(200);
    if (n === 0) await foto('4-ruleta-pregunta');
    await clic('#b-sig'); await espera(200);
  }
  ok(await ev('estado.pantalla') === 'corona', 'ruleta: 3 aciertos llevan a la pregunta corona');
  await clic('.cat'); await espera(200); await bien(); await espera(200);
  ok(await ev('estado.coronas.length') === 1, 'ruleta: corona ganada');
  await clic('#b-sig'); await espera(200);
  // Tiempo agotado
  await ev('juego.ajustes.tiempo = 1'); await clic('#b-girar'); await espera(4200);
  ok(await ev('!!document.querySelector(".feedback.no") && document.querySelector(".feedback strong").textContent.startsWith("Se terminó")'), 'ruleta: se agota el tiempo y cuenta como error');
  ok(await ev('estado.vidas') === 2, 'ruleta: perdió una vida');
  await ev('juego.ajustes.tiempo = 30');
  await ev('estado.vidas = 1'); await clic('#b-sig'); await espera(200); await clic('#b-girar'); await espera(2800); await mal(); await espera(200); await clic('#b-sig'); await espera(200);
  ok(await ev('estado.pantalla') === 'fin' && await ev('estado.motivo') === 'vidas', 'ruleta: sin vidas termina la partida');
  ok(await ev('juego.record.ruleta') > 0, 'ruleta: guarda el récord');
  await foto('5-fin');

  // Contrarreloj
  await clic('#b-ini'); await espera(200); await clic('#m-contrarreloj'); await espera(1200);
  const antes = await ev('estado.restante'); await mal(); await espera(200);
  ok(antes - await ev('estado.restante') >= 5000, 'contrarreloj: el error resta 5 segundos');
  await clic('#b-sig'); await espera(200);
  await ev('estado.finEn = Date.now() + 300'); await espera(1000);
  ok(await ev('estado.pantalla') === 'fin' && await ev('estado.motivo') === 'tiempo', 'contrarreloj: termina al agotarse el tiempo');

  // Mis errores
  await clic('#b-ini'); await espera(200);
  const nErr = await ev('clavesConError().length');
  ok(nErr > 0, 'hay ' + nErr + ' preguntas en Mis errores');
  await clic('#m-errores'); await espera(200);
  for (let n = 0; n < 20 && await ev('estado.pantalla') === 'pregunta'; n++) { await bien(); await espera(100); await clic('#b-sig'); await espera(100) }
  ok(await ev('clavesConError().length') === 0, 'Mis errores queda vacío al acertarlas');
  ok(await ev('!!juego.logros["errores-0"]'), 'logro «Sin pendientes»');

  // Pregunta rápida
  await clic('#b-ini'); await espera(200); await clic('#m-rapido'); await espera(200);
  ok(await ev('estado.cola.length') === 10 && await ev('new Set(estado.cola).size') === 10, 'pregunta rápida: 10 preguntas distintas');

  // Cálculos: casillero numérico
  ok(await ev('[leerNumero("1,5"), leerNumero("1.5"), leerNumero("1.050"), leerNumero(" 105 "), leerNumero("abc"), leerNumero("")].join("|")') === '1.5|1.5|1050|105||', 'lee números con coma, punto y miles');
  await ev('juego.enCurso = null; ir("inicio")'); await espera(200); await clic('#m-calculos'); await espera(200);
  ok(await ev('estado.cola.length') === 10 && await ev('estado.cola.every(k => esCalculo(POR_CLAVE[k].p))'), 'cálculos: 10 preguntas de cálculo');
  ok(await ev('!!document.querySelector("#i-calc") && !document.querySelector(".op")'), 'cálculos: muestra el casillero y no opciones');
  await clic('#b-calc'); await espera(150);
  ok(await ev('!document.querySelector("#msg-calc").hidden && !estado.resp'), 'cálculos: vacío no cuenta como respuesta');
  await foto('11-calculo');
  await mal(); await espera(200);
  ok(await ev('!!document.querySelector(".feedback.no") && document.querySelector(".feedback strong").textContent.includes("La respuesta es")'), 'cálculos: resultado fuera del margen es error');
  await foto('12-calculo-error');
  await clic('#b-sig'); await espera(200); await bien(); await espera(200);
  ok(await ev('!!document.querySelector(".feedback:not(.no)") && document.querySelector("#i-calc").classList.contains("ok")'), 'cálculos: resultado con coma decimal es acierto');
  // Epónimos
  await ev('juego.enCurso = null; ir("inicio")'); await espera(200); await clic('#m-eponimos'); await espera(200);
  ok(await ev('estado.cola.length') === 10 && await ev('estado.cola.every(k => POR_CLAVE[k].c.eponimos)'), 'epónimos: 10 preguntas de epónimos');
  ok(await ev('!document.querySelector(".contexto")'), 'epónimos: sin respuestas previas a la vista');
  await foto('13-eponimo');

  // Marcas, logros, ajustes y respaldo
  await ev('juego.enCurso = null; ir("marcas")'); await espera(200);
  ok(await ev('textoMarcas().includes("La dosis parece alta")'), 'la lista de marcas incluye el comentario');
  await foto('6-marcas');
  await ev('ir("ajustes")'); await espera(200); await clic('[data-sesion="10"]'); await espera(100);
  ok(await ev('juego.ajustes.sesion') === 10, 'ajuste de casos por sesión');
  const r = await ev('JSON.stringify(respaldo())');
  await ev('localStorage.clear(); prog = {}; juego = normalizarJuego({})');
  await ev(`restaurar(JSON.parse(${JSON.stringify(r)}))`);
  ok(await ev('juego.marcas.length') === 1 && await ev('Object.keys(prog).length') > 0, 'restaurar desde el respaldo recupera todo');
  await foto('7-ajustes');
  await ev('ir("inicio")'); await espera(200); await foto('8-inicio-con-progreso');
  await cmd('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'dark' }] }); await espera(300); await foto('9-inicio-oscuro');
  await ev('nuevaPartida("ruleta")'); await espera(300); await foto('10-ruleta-oscuro');

  ok(errores.length === 0, 'sin errores de JavaScript' + (errores.length ? ': ' + errores.join(' | ') : ''));
  console.log(fallas ? fallas + ' fallas' : 'todo bien');
  ws.close(); br.kill(); srv.close(); process.exit(0);
})().catch(e => { console.error(e); process.exit(1) });
