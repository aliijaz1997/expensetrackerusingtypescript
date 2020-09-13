var cacheName = 'demo-app';
var filesToCache = [
    '/',
    "/static/js/bundle.js",
    "/static/js/main.chunk.js",
    "/static/js/1.chunk.js",
    "/sockjs-node",
     "/icon.jpg",
    "/manifest.json",
    "/icon.ico",
    // "/Clock-Back-icon.png",
];

self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});