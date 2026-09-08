const CACHE_NAME = 'shake-diary-v1.0.0'; // 每次更新程式碼時，增加此版號

// 離線必備靜態資源清單
const STATIC_ASSETS = [
  './',
  './index.html',
  './icon.png'
];

// 1. 安裝階段：快取核心靜態檔案並強制接管
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // 跳過等待，讓新的 Service Worker 立即進入 activating 狀態
  self.skipWaiting();
});

// 2. 活化階段：清除舊版本的快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] 清理舊快取:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // 立即接管所有開啟中的客戶端頁面
  return self.clients.claim();
});

// 3. 攔截請求：支援離線運作
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // 只處理 GET 請求
  if (event.request.method !== 'GET') return;

  // 策略 A: Google Fonts 等外部字型樣式（Stale-While-Revalidate）
  if (requestUrl.hostname.includes('fonts.googleapis.com') || requestUrl.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => cachedResponse); // 離線時靜默失敗，使用快取
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // 策略 B: 本地應用程式資源（Cache-First，無快取時取網路並寫入快取）
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // 確認回應有效且狀態為 200
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // 離線且找不到快取時，如果是頁面導航則返回首頁
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
