const CACHE_NAME = 'pwa-video-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/votre-video.mp4',
  '/icon-192.png',
  '/icon-512.png'
];

// Installation et mise en cache des fichiers
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Récupération depuis le cache si hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
