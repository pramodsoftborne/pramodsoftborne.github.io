'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f7c1a06ed3476da9d1315279c503e09a",
"index.html": "3b00936c71a63f6461d897024d1abacb",
"/": "3b00936c71a63f6461d897024d1abacb",
"main.dart.js": "4119c297c362114c451a8538f9319bc3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b9a4aecb6d72d59c16cac95e058ca56",
"assets/AssetManifest.json": "194df73d5189ff1ee0d2e81aaf8bb96f",
"assets/NOTICES": "7862232026fdc1a006f3a929c538e5bd",
"assets/FontManifest.json": "8e688721e6d770bde02e204e9775706e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/image_mobile.png": "60261c304781308eab57d2647920a298",
"assets/assets/tick.png": "1d47f3276454321ba7abe9b52a5dd087",
"assets/assets/flag.png": "183df2977e0f7303c940567d4e803395",
"assets/assets/image_walk.png": "98518bc6ee413b649225c1b011ed7f96",
"assets/assets/NPAppLogo.jpg": "a5993c7f2bc1d17cdb11cd9e82ea1a08",
"assets/assets/backButton.png": "4a5925a41f19ae405dca42eabe9b8e00",
"assets/assets/studymode/adultsystem.png": "5bec853c66d21fb6f46a57eceb286b26",
"assets/assets/studymode/rationale_img.png": "92606b058e76c580cd580498b1b16190",
"assets/assets/studymode/geriatricSystems.png": "2901b1f3026c4b3d027b80e370569dec",
"assets/assets/studymode/left_arrow.png": "89cf49f61a975235bd76428e194e0f29",
"assets/assets/studymode/circle_check.png": "553b758a8b5a83a271d20975b682a4d3",
"assets/assets/studymode/right_arrow.png": "1f9e802ed409e0c6d64cd877f8b970fa",
"assets/assets/studymode/like.png": "a7eb17e92b1025ed9775a702709f6ff5",
"assets/assets/studymode/timer.png": "490780bf7fd5c11230a457c6f9ca04db",
"assets/assets/studymode/recheck.png": "8e9caf661ed9d41c013336c72ffdfc62",
"assets/assets/studymode/time_period_img.png": "6d84960d4fd45067ece3cc91f2bb4359",
"assets/assets/studymode/study_mode_logo.png": "d0d9d316d083e7d80e50dc2a80b88799",
"assets/assets/studymode/professional_role.png": "476f3165ab03fdc85764bb5e8b6770e7",
"assets/assets/studymode/incorrect_img.png": "6968f58bc18b19a91b1dee71e8b0c917",
"assets/assets/studymode/pediatricSystems.png": "4bafe121d6977d3fb6c420ac66b34cc3",
"assets/assets/studymode/up_arrow.png": "f839a2d375ebd40974dc3ac0a0b5f95c",
"assets/assets/studymode/play_img.png": "81a414a971bfc9d047600134d327bdef",
"assets/assets/signin_fb.jpg": "a9a2cccccf48a853142b9188fa26256a",
"assets/assets/close_grey.png": "ac02f92f2c0238ef35e70583189c9d0f",
"assets/assets/hellothere.png": "47636075077a1bd46f95267b2a619dfa",
"assets/assets/splashbg_img.png": "5d9080119ffde7fcf80afb57d368755f",
"assets/assets/account.png": "e742acb18761ffb0d41df260a3a597b2",
"assets/assets/reader_book.png": "b660ea92e23237ad058e00a574e6e39b",
"assets/assets/drop_down.png": "c85401ba62b508072676e11df7b1133d",
"assets/assets/image_books.png": "7430c2fa75e9d47d57b6aa21ef9cd93c",
"assets/assets/search.png": "215a4ba8d9f82ab61a97b3ec53648349",
"assets/assets/auth_splash_bg.jpeg": "e317c3f7142a492b5687bcae86b4c295",
"assets/assets/google_login_icon.png": "8ef74d04412012255b0a8022232d4fce",
"assets/assets/smreview_logo.png": "528f73a53c8907533d428b30086a565b",
"assets/assets/splash_title_logo.png": "9a51e183a4c4b87e87f973363340374f",
"assets/assets/signin_google.png": "f41e885d38a0025e2fd7fcd2ebd9dc65",
"assets/assets/refresh_timer.png": "b9428f654d12fcaef4a23f86a7012104",
"assets/assets/checkMark.json": "6a8b7fca180b7a11221d004c9049bc92",
"assets/assets/dropdown.png": "dd85361fa79d34ee9ae45d92f41dd0db",
"assets/assets/splash_app_name.png": "cf0e2eada5d27d970f9b6159d739f9ff",
"assets/assets/image_fly.png": "d531b654f807cfac69289fa9980c928f",
"assets/assets/firstPage.png": "e7fdb4407df68ab24b353792f4ee54b7",
"assets/assets/image_step.png": "b5b22068e0ab13c4dde2df6c19d0fd40",
"assets/assets/watch_glass.png": "c08861ae38ae9abaee884c1fc2831d9f",
"assets/assets/fb_img.png": "9703f8ef0e679be24bbfb1873d3b952e",
"assets/assets/fonts/ProximaNova-Bold.ttf": "7fb6d59c135a4d8699cb9db099179137",
"assets/assets/fonts/SFProText-Semibold.ttf": "1a131c948d598ecec700d37d168a15b5",
"assets/assets/fonts/SFProDisplay-Medium.ttf": "70830fa4b0f259734f7e52903f3efd59",
"assets/assets/fonts/ProximaNova-Regular.ttf": "040553705dd07711703bb3aa73aa8f90",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/assets/facebook.png": "3a2bcbaf320506af79945d3964560beb",
"assets/assets/bg.png": "8f6231fb25ac82fe18ea26f94f6a7924",
"assets/assets/close.png": "c46b05b42c93999ec47e0242a7f8bfe0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
