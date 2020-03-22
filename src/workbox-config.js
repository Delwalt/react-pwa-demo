const { injectManifest } = require("workbox-build");

const buildSW = () => {
  return injectManifest({
    swSrc: "src/sw-config.js", // This is the source file for service worker
    swDest: "build/service-worker.js", // This is destination of built service worker file
    globDirectory: "build", // Directory from to cache the files
    globPatterns: ["**/*.{js,css,html,png,svg}"], // Types of file to cache
    injectionPoint: '["_precache-placeholder_"]' // Point in swSrc file where all precache files will go
    // Other configuration options...
  }).then(({ count, size }) => {
    console.log(
      `Generated ${this.swDest}, which will precache ${count} files, totaling ${size} bytes.`
    );
  });
};

buildSW();
