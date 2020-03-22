if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for precache manifest file.  */
    workbox.precaching.precacheAndRoute(["_precache-placeholder_"]);

    /* Runtime cache strategies */

    // Cache API response
    workbox.routing.registerRoute(
      /^https:\/\/jsonplaceholder\.typicode\.com\/photos/,
      workbox.strategies.networkFirst({
        cacheName: "photosApi"
      })
    );

    // Api data caching
    workbox.routing.registerRoute(
      /^https:\/\/via\.placeholder\.com/,
      workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          }),
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
          })
        ]
      })
    );
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
