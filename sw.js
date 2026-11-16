/*
 * Service worker : garde le site disponible hors connexion.
 * Change VERSION à chaque mise en ligne pour que les téléphones récupèrent les nouveaux fichiers.
 */
const VERSION = "cybergbe-v7";

const FICHIERS = [
  "./",
  "index.html",
  "css/style.css",
  "js/config.js",
  "js/icones.js",
  "js/content/fr.js",
  "js/content/ee.js",
  "js/app.js",
  "js/qrcode.js",
  "fonts/onest-latin-400-normal.woff2",
  "fonts/onest-latin-500-normal.woff2",
  "fonts/onest-latin-700-normal.woff2",
  "fonts/onest-latin-ext-400-normal.woff2",
  "fonts/onest-latin-ext-500-normal.woff2",
  "fonts/onest-latin-ext-700-normal.woff2",
  "fonts/unbounded-latin-600-normal.woff2",
  "fonts/unbounded-latin-700-normal.woff2",
  "fonts/unbounded-latin-ext-600-normal.woff2",
  "fonts/unbounded-latin-ext-700-normal.woff2",
  "icons/icone.svg",
  "icons/icone-192.png",
  "icons/icone-512.png",
  "manifest.webmanifest"
];

self.addEventListener("install", (ev) => {
  ev.waitUntil(caches.open(VERSION).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches.keys()
      .then((cles) => Promise.all(cles.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Réseau d'abord pour les pages et le contenu (pour avoir la dernière version),
// cache d'abord pour les polices, images et fichiers audio (lourds et stables).
self.addEventListener("fetch", (ev) => {
  const req = ev.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  const chemin = new URL(req.url).pathname;
  const lourd = /\.(woff2|png|svg|mp3|ogg|m4a|gz)$/.test(chemin) || chemin.indexOf("/vendor/") !== -1;

  if (lourd) {
    ev.respondWith(
      caches.match(req).then((enCache) => enCache || fetch(req).then((rep) => {
        if (rep.ok) { const copie = rep.clone(); caches.open(VERSION).then((c) => c.put(req, copie)); }
        return rep;
      }))
    );
    return;
  }

  ev.respondWith(
    fetch(req).then((rep) => {
      if (rep.ok) { const copie = rep.clone(); caches.open(VERSION).then((c) => c.put(req, copie)); }
      return rep;
    }).catch(() => caches.match(req).then((enCache) => enCache || caches.match("index.html")))
  );
});
