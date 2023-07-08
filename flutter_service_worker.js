'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "ceb50712538608df6208f7f136659705",
"assets/AssetManifest.smcbin": "7943164390b7200a201259ed358e4bdc",
"assets/assets/fonts/Playfair_9pt-Regular.ttf": "d4929ab98b22ce526445991860da8306",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/home_image/1656997167linkedin-logo-white.png": "b61b1be0e56eab8307acd34095c91d00",
"assets/assets/images/home_image/1685999314142.jpg": "cb3bd7ac0f60fff7e024f6a0c23c8f91",
"assets/assets/images/home_image/1686060851856.jpg": "838904b71171b1dc5e6baecd53270edb",
"assets/assets/images/home_image/Daco_4074592.png": "61de4c48a30bfb84cb6af6dbe0cf3fe1",
"assets/assets/images/home_image/Daco_4092999.png": "30134d14b72c9a578d2bd8968fc7dc32",
"assets/assets/images/home_image/Daco_5795435.png": "98453de9baf8af81444fbbfdc8ab9844",
"assets/assets/images/home_image/Dart_logo.png": "336a180cdb7ac48497d0b6878c9a203d",
"assets/assets/images/home_image/Dart_logo.webp": "336a180cdb7ac48497d0b6878c9a203d",
"assets/assets/images/home_image/download.png": "af3eb3e5b60af9ae45cd0d3460f8cb3b",
"assets/assets/images/home_image/firebase.png": "9ad79828751ede5dbe9f92f97237bdf2",
"assets/assets/images/home_image/flutter-app-developer.jpg.webp": "6156dac3b55421873c157d96af1108ca",
"assets/assets/images/home_image/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/home_image/GitHub_Logo.png": "cefc20232703e5e3c24efd5f50d75e26",
"assets/assets/images/home_image/images.jpeg": "b586178818a5e4081f9e4567e99e133f",
"assets/assets/images/home_image/kisspng-computer-icons-website-world-wide-web-favicon-domain-www-icon-5ab077ac2512f0.0199233715215144121519.png": "7157cefe345d1fae3c6ef556f43639cf",
"assets/assets/images/home_image/kisspng-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-5b1bf7831a5909.5705156015285594911079.png": "9ad79828751ede5dbe9f92f97237bdf2",
"assets/assets/images/home_image/kisspng-iphone-x-iphone-7-ios-12-messages-white-mobile-5b2948cfdf4383.6343998715294322719145.png": "c5c8423b478ce4ddb935fa3b524c0d47",
"assets/assets/images/home_image/kisspng-vector-android-logo-computer-icons-5b0de831d82897.4360942415276380658854.png": "02d719c5fac46e9e818ca4090bea72ce",
"assets/assets/images/home_image/LinkedIn_Logo_2013%2520logo.png": "d15824fbf8a7376d74dba56bcc969644",
"assets/assets/images/home_image/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png": "45445b6b85301538b6fc3590c4264b84",
"assets/assets/images/home_image/Titik-titik.png": "b9336a6e32ea702d628de6f65b0e7045",
"assets/assets/images/home_image/Titik-titik2.png": "a313a5636dbc80f680f77ad369ebf8e1",
"assets/assets/images/home_image/whatsapp-logo.png": "b5ef61b2ff3471f8d416292630e53ad7",
"assets/FontManifest.json": "9f54766cbc9e0b288cb114a15a6ac82c",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "2ae8fdec9d91c56b117aa10966755c25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fcc1a32652a47ddf9bf0e3aba7b2ff07",
"/": "fcc1a32652a47ddf9bf0e3aba7b2ff07",
"main.dart.js": "fd9174e4dd729bfd2590471da0b6c7ab",
"manifest.json": "d899e58ba79eeb01d040664e45f04ea5",
"version.json": "03acefc4795e8573b194262cd3a4419f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
