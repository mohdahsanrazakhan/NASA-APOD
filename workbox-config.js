module.exports = {
  globDirectory: '.',  // The directory to start looking for files to cache
  globPatterns: [
    '**/*.{js,html}'  // Pattern to match the files you want to precache
  ],
  swDest: 'sw.js',  // The output destination for the generated service worker file
  swSrc: 'src-sw.js',  // Path to your custom service worker file
};
