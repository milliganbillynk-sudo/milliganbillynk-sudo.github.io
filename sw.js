// Минимальный service worker — нужен, чтобы браузер предлагал «Установить приложение». Ничего не кэширует.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
