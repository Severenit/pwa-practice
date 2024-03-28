// Install Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
});

// Activate Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activated');
});
