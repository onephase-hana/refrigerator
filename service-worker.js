const CACHE_NAME = "fridge-app-v1";
const urlsToCache = [
  "/refrigerator/",
  "/refrigerator/index.html",
  "/refrigerator/manifest.json",
  "/refrigerator/icon-192.png",
  "/refrigerator/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
