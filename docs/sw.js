// Service worker de la app: guarda el juego para usarlo sin conexión. construir.js pone la versión en CACHE en cada generación,
// así el teléfono baja la versión nueva la próxima vez que abre la app con conexión.
const CACHE = 'pase-de-sala-07bbe641e8';
const ARCHIVOS = ['./', './index.html', './manifest.webmanifest', './icono-180.png', './icono-192.png', './icono-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('pase-de-sala-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Tipografías de Google: se guardan la primera vez que se bajan; sin conexión se usan las guardadas.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open('fuentes-pase-de-sala').then(c => c.match(e.request).then(r => r || fetch(e.request).then(res => { c.put(e.request, res.clone()); return res }))));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
