importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"),[{'revision':'365a068c309c149697b2da6fd727f97c','url':'bundle.js'}],workbox.routing.registerRoute((({request:e})=>"image"===e.destination),new workbox.strategies.CacheFirst),workbox.routing.registerRoute((({request:e})=>"script"===e.destination||"style"===e.destination),new workbox.strategies.StaleWhileRevalidate),workbox.routing.registerRoute((({request:e})=>"navigate"===e.mode),new workbox.strategies.NetworkFirst);