const N='m13-v4',A=['./','index.html','manifest.json','icon-192.png','icon-512.png','https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(N).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>0)))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const y=x.clone();caches.open(N).then(c=>c.put(e.request,y));return x}).catch(()=>caches.match('index.html'))))});
