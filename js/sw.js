const CACHE_NAME = 'dominadas-pro-v2';
const ASSETS = [
    '../',
    '../index.html',
    '../css/styles.css',
    './script.js',
    '../img/icon.png',
    'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (event) => {
    // Forzar al SW a activarse inmediatamente
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cacheando assets...');
                return cache.addAll(ASSETS);
            })
            .catch(err => console.error('Error cacheando assets:', err))
    );
});

self.addEventListener('activate', (event) => {
    // Tomar control de todos los clientes inmediatamente
    event.waitUntil(clients.claim());

    // Limpiar caches antiguas
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Borrando cache antigua:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    // Estrategia: Cache First, falling back to Network
    // Ideal para apps "App Shell" que quieren cargar rápido offline
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(
                    (response) => {
                        // No cachear respuestas no válidas o de terceros que no queremos (opcional)
                        if (!response || response.status !== 200 || response.type !== 'basic' && !event.request.url.includes('cdn.tailwindcss.com')) {
                            return response;
                        }

                        // Clonar la respuesta para cachearla
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});
