// Example service-worker.js
self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Cache files or perform other setup tasks
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
    // Clean up old caches or perform other activation tasks
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // Intercept network requests and serve cached responses
});
