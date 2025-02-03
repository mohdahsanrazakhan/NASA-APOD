// Import Workbox from the CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

console.log("⚙️ Hello from Service Worker");

// Use Workbox's NetworkFirst strategy for caching requests to the NASA APOD API
workbox.routing.registerRoute(
  /^https:\/\/api\.nasa\.gov\/planetary\/apod/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'nasa-api-cache',  // Customize cache name if needed
  })
);

// Automatically precache and route the files injected by Workbox during the build
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
