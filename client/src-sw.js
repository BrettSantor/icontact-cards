// TODO: Create a service worker that caches static assets:
const CACHE_NAME = 'Static Files Cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/css/style.css',
  '/src/js/index.js',
  '/src/images/logo.png',
];

self.addEventListener('install', (e) =>
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
);

self.addEventListener('activate', (e) =>
  e.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  )
);

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
  });

  self.addEventListener('fetch', (e) =>
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
);
