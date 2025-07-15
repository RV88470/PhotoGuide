// service-worker.js

const CACHE_NAME = 'd750-guide-cache-v1'; // Nom du cache, incrémentez-le à chaque mise à jour de votre app
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/data.js',
    '/script.js',
    // Ajoutez ici tous les chemins vers vos fichiers d'icônes
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png'
];

// Installation du Service Worker et mise en cache des fichiers
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache ouvert');
                return cache.addAll(urlsToCache);
            })
    );
});

// Récupération des ressources depuis le cache ou le réseau
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si la ressource est dans le cache, la retourne
                if (response) {
                    return response;
                }
                // Sinon, la récupère du réseau
                return fetch(event.request);
            })
    );
});

// Activation du Service Worker et nettoyage des anciens caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Supprime les anciens caches
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});