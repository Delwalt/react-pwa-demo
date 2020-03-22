if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for precache manifest file.  */
    workbox.precaching.precacheAndRoute(["_precache-placeholder_"]);
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
