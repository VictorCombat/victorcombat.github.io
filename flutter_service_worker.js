'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b63847d5dfe3979f5c34427fe78f9ebb",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/email.svg": "6c341a8b5b57f1a7b50e4200779a05ac",
"assets/assets/icons/github.svg": "8e7a3ffddd70234cb8843694f84e01ba",
"assets/assets/icons/linkedin.svg": "2cc91a3bec4aaf505ee23d2bb54eba72",
"assets/assets/images/bg-subtraction-region-growing/bg-subtraction-01.PNG": "7bb651f60ff5a2afa9ed10b547726216",
"assets/assets/images/bg-subtraction-region-growing/bg-subtraction-02.PNG": "92b38232f5ef84e59ca55cba18c5b28c",
"assets/assets/images/bg-subtraction-region-growing/rg-01.jpg": "16191bbaa5288fa63b8ede57e1304305",
"assets/assets/images/bg-subtraction-region-growing/rg-02.jpg": "d791a0efbccd46b6ffb9308776f735e2",
"assets/assets/images/bg-subtraction-region-growing/rg-auto-01.JPG": "17169cc15b5678be9d9b603cc32143a4",
"assets/assets/images/bg-subtraction-region-growing/rg-auto-02.JPG": "a47304074ed29c0420aa735528e82fcd",
"assets/assets/images/cryptotrack/cryptotrack-banner.jpg": "f385c4fdbf224b1da2c8010d402f462f",
"assets/assets/images/cryptotrack/cryptotrack-converter-crypto.jpg": "a1ad74622ed4dfe40905b017d44141da",
"assets/assets/images/cryptotrack/cryptotrack-converter-fiat.jpg": "19a18320aaea213d5ffb498dc830cd6c",
"assets/assets/images/cryptotrack/cryptotrack-converter.jpg": "de5c9570cbd02e21143957b9da2de230",
"assets/assets/images/cryptotrack/cryptotrack-details-page-1D.jpg": "a150f63cb40f60636e0dffa1bcd7f80b",
"assets/assets/images/cryptotrack/cryptotrack-details-page-6M.jpg": "d479a0a655aa8041b5237cf2d56447d7",
"assets/assets/images/cryptotrack/cryptotrack-fav-page-drag.jpg": "de2499da32f1e7028b8b9698c9af8701",
"assets/assets/images/cryptotrack/cryptotrack-fav-page.jpg": "99e9d37081a510806f2ceadad72d2d89",
"assets/assets/images/cryptotrack/cryptotrack-home-page-bottom.jpg": "8c3d9318469a8028f7d19d9b7dc9a541",
"assets/assets/images/cryptotrack/cryptotrack-home-page-top.jpg": "1c38844f3be2a4d28dbda82d07d362db",
"assets/assets/images/cryptotrack/cryptotrack-search-page-searching.jpg": "6ae4329ec9d7d961d13133413aec474a",
"assets/assets/images/cryptotrack/cryptotrack-search-page-sort-modal.jpg": "25808c2b277551d75ac8f7fbe015b7a9",
"assets/assets/images/cryptotrack/cryptotrack-search-page.jpg": "b38a30156675363aedd993a3c9a3c2d6",
"assets/assets/images/home-banners/animated-mesh-neon.gif": "669c491470627d5c5c1798c8b347e5aa",
"assets/assets/images/home-banners/space.gif": "950f3683bea6963fc2ce72bfdfdbdcbc",
"assets/assets/images/orbital-defense/orbital-defense-banner.JPG": "9da20331928c5a92e8c54ad847df40d9",
"assets/assets/images/orbital-defense/orbital-defense-gameover-screen.JPG": "4432924645821183015a8ee903fd348d",
"assets/assets/images/orbital-defense/orbital-defense-home-screen.JPG": "d719497f19459799ecc6d005005c0ad9",
"assets/assets/images/orbital-defense/orbital-defense-ingame-01.JPG": "ed8e2b48cf0213dc2b91dda05cc0716d",
"assets/assets/images/orbital-defense/orbital-defense-ingame-02.JPG": "542be513a83d537183da2e5a4234ea9a",
"assets/assets/images/pac-man/pac-man-01.PNG": "948d8630f4a277d42d01a99c795c8869",
"assets/assets/images/pac-man/pac-man-02.PNG": "2e260dc6c5b0d63dde94252fdcf59254",
"assets/assets/images/pac-man/pac-man-03.PNG": "272f1ecabd4f05f46b28c4967f2e4642",
"assets/assets/images/pac-man/pac-man-04.PNG": "c10ee68cea2266372b39767c5f4b575d",
"assets/assets/images/pac-man/pac-man-banner.PNG": "3ca55e26866ccb134956803f8c784198",
"assets/assets/images/photo_victor_1000x1000.jpg": "ba3c2591fd49aa30d6379b4a59d0dc5b",
"assets/assets/images/pom-vcity/lyon_1er_hdv_terreaux_musee_beaux_arts.png": "e77db3e2108a3324deed7cb97c60fdc4",
"assets/assets/images/pom-vcity/lyon_1er_opera.png": "cff05b9a291ebe2210ae3df0a806511d",
"assets/assets/images/pom-vcity/lyon_3eme.png": "987d15236f44598047d29c4ba4848769",
"assets/assets/images/pom-vcity/lyon_3eme_desgenettes.png": "a8fab664ca36633f9bfd45ac483c4ede",
"assets/assets/images/pom-vcity/lyon_5eme_fourviere_02.png": "73d589f8176f0b6346b5045d03e46d18",
"assets/assets/images/pom-vcity/mont_d_or.png": "e2d3ae111ba626c378388436bbd79039",
"assets/assets/images/pom-vcity/villeurbanne.png": "a3804477ae767204aa8570b962806290",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "47eb2b0e1786b5b2f901ef9432a9432f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "6123591d426c1af02895e990af32a5d9",
"/": "6123591d426c1af02895e990af32a5d9",
"main.dart.js": "614704d9fac906e934135ccac29fc89f",
"manifest.json": "33f800ebfef064613f8dec323b266c5b",
"version.json": "c442cf15f61f5f4eb0931ac9eb5e50d6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
