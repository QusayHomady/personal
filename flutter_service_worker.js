'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b09458938ac9f69e0f491530a8765924",
".git/config": "d55d9297483af710e38c8c0b04b2bde5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "689fd3a8353981f8f13bf126f8fca488",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90299eff45ecfc759c81092b9f444d32",
".git/logs/refs/heads/gh-pages": "ca8fba8e045ada0e8ce1ab161df7c9ad",
".git/logs/refs/remotes/origin/gh-pages": "152f52547529f3493c4e9feb3a580bab",
".git/objects/06/13e2d7d45521cf553bfd0dc11b15317fac5471": "18dcf6d7feb67ec9d7f2d524c5d58f2c",
".git/objects/07/bbb20bb4600005b7c0f204da7f2bff8b82772b": "b6130a6bf23cddcaf9505f9b438889d1",
".git/objects/0b/63aa02ccc5b4ed0e15b28959ad4531593aed32": "6522ac96278d8234b55fba72086edb20",
".git/objects/0c/e5719c1cbc7714abb7d6a6784950259e689ece": "d8abba3c57d58f5a30684a7cfe81be73",
".git/objects/14/6b16fcb66b3508e1a0f0eea6428c946bdb2460": "0c654eaef71965ceee67f15e009fe738",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/2d3d9477be5b9edc3f232bf2bed9cf888bc2e4": "3014e454013794a3b0cc97e4187e1623",
".git/objects/21/55b458806dc1ce3bf8e5746f0eef536c4b0a4a": "9776e3d7ad1f1b3fb02e5a26b7b33bdc",
".git/objects/24/c3af0e5b82845e5d352ca6be80b97df81fda40": "e99f8532115f2441efcb82866b109718",
".git/objects/24/c58a17e50d2eef7ca652ce745ade866ceb84d2": "84c5ab735ec05f83daddc3149077cb5c",
".git/objects/29/289533778cc698806a3c52c3a877a5a6f013d1": "d8c05ba4e4d86bdee6ba51ce5916e56f",
".git/objects/2b/030ccf24a6c9339590c2ff3839e9a76af656d1": "648f853bc987a7b06451d14e653c6e6b",
".git/objects/2d/4d53db86223cbcc047d565138c61660d9e266c": "18ab760f91fd41986467cc5205a6b42a",
".git/objects/37/8c20630267758cf57088192507a37de37ac383": "5210e9fc91767db3165798895dcee42e",
".git/objects/41/f9def3c31150bb89199f4334195440ea9c609f": "84232037e4e5fb0d7f1e2e8b6a00e553",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/4bbe8cf0523f141b48db8eee09ab804274eadc": "a0412bd6b13864eb598049ff29151dbb",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/65/22f75b136721b68acc78754e960555a76931ba": "fc7ed1eec37edf21ac312a5d65ffa2ab",
".git/objects/65/3ce21b0236d5bd3ed8d5f407cfc3f7b947504a": "c54ef75e4268c230823adba1b8edad1b",
".git/objects/68/b4e1ffc35f19e0ad5a27c51a89632c617dd43a": "b61f18518051ef3040312fc1cd07a733",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/d6084e964180f1366b5124c79a8ccdc6812f5b": "a559ecb37ad439eabe0c73f002e54fc3",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/adbd9d747465afbdb8149ec59392b232f6bdd8": "db2cac2c3e25295b8924d2fea8d758c3",
".git/objects/81/348bd019db7ae4a2da1ade7f58951b2664da38": "56a6540bf9b330dbdcb446855bcdca3d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3f246c5f854a2bc0d9ac3066626cd31f79e017": "88a27852dc2800fc5caf14aeb6b315d0",
".git/objects/8d/472f19c664d2544782b8b45abb525b8f65708a": "3133247343803accdd5bec446092172b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/93/2473b91ca2f63206a6dda7ccd32bbe7e758dc4": "986e2ae90fcc7e2fd935940107c36002",
".git/objects/95/4ff5c177c7a5f60b7163958d6ef0921f4b46a0": "ae230bb84c8decec63fafb3faa241205",
".git/objects/98/a52ff8aea3a5f2e7e5e1a0a93750c5334974cd": "39a69fe50dc77df75972c4fd0c2d9a6a",
".git/objects/9a/cccc5ce2102ec83ae4d7bd7a949d031d94acdc": "75c71c7673b94590a4670c84df4ad525",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a8/e13550537cdb39fd10c1c01df33f2aff139a0b": "faa54d8ff4b2b941489e05daa821e891",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/b4/6ccc81e4bb670d39f3c2b12a3e87803599d161": "0992ef3c7a1990950756a480067e77cd",
".git/objects/b6/0539736aa88bd712a72d83149bfaa6fa17ae70": "abc0d2d8c33f0a9f5cb7b9d039f0f018",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/00aef3a2ad843d14807796df193f564c78e315": "1f58e24db3e41d05da6c45afc8449a08",
".git/objects/bf/58766a50f89f85fb1c546fa71cb8fdcd86977e": "a85f98ecf65976602bc2e709095e0ed4",
".git/objects/bf/e7146d07be8e3aa25ac7d1d9b3b62929172330": "1bcb6b02751496af657ca7a95aa547f5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/439b200838c12caabbbeaaef957acb93639fa9": "20b5c65e95626d5b166b1faed2ce1c97",
".git/objects/c9/367cb6198d3aa83e762bc8e52ae094906fec2a": "d7cb1268855939a77c51067c2d77363c",
".git/objects/d3/405711ab5b707a0c75d055a1374ac53ea01677": "b48952f7ab94f5c5309eac643a2dfb41",
".git/objects/d3/73eeb8448e5eb725e68e562c1ab139b318c0c9": "083557454bf32621b81430bd1c7e7562",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/ab81926aae3c49e5d2f79980f16bb02d3b2b25": "61a5c1386754b8174be5c895a9fe8a9e",
".git/objects/da/029638edf23e07197b66d4dcd2468696109d2d": "94446153cd387c7d49be0aaed11483b3",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/0080dc288384032effb617c0894f5d68b25d23": "bed9fadb441bd25e9a07ba23692e3c56",
".git/objects/de/f38d77c31edf5737be9b4e869746189981b2a5": "a4468c62cd410001f55675a9e86f7ddb",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e7/96fb2eec110439e02fabc62b60ded624cb4fbf": "515aff2351378c53dbf20d643e2a18c8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/f4b25473e6a9592ce4751d10f2581ada7499b4": "fa98494185ce97dc914fe8bb7cd183ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/4d9f6c4f1f8feb225fbd329292ae29f0e7f155": "e815daae513645202f9baded6efcdf80",
".git/objects/f1/0c584668c0c0f8fb2e5a4edffd1f03870a3ecd": "b8a300e7fda67c6c1a460bbb3480833e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/f0d3805bdc7490e9186b9f3d7bff8b8140e689": "72ebf8e5fac5164a7e91589c8da6c1ab",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/f9/6902824cf93fbe0e05a1e070a534baff686c93": "ca9a6f936a55b7532a79ab3e5968aaf9",
".git/refs/heads/gh-pages": "d0348d44e79e1980d3a916267f458cab",
".git/refs/remotes/origin/gh-pages": "d0348d44e79e1980d3a916267f458cab",
"assets/AssetManifest.bin": "1709a3d1e7b7570ae46b43fe6ad1cbbf",
"assets/AssetManifest.bin.json": "b8a3c673455fa4cf59fcfe287257a26f",
"assets/AssetManifest.json": "a813e025d15560b49a2ddf7bd28ff3ea",
"assets/assets/icons/api.png": "221f9be3c26670ee7bdbd1f335710015",
"assets/assets/icons/dart.png": "b73081b39828581f204c481373c77e4e",
"assets/assets/icons/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/icons/fier.png": "e6ba467265c6799f61c2dbd982565b16",
"assets/assets/icons/flutter.png": "0ee7b2475a1b7d3fa4a1d811b97321c2",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/laravel.497x512.png": "a7f495342a5caf3c2d0ca8a522a56d25",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/mobile.png": "419a781aca9819a514b9e0aac5f45c4e",
"assets/assets/icons/mysql.png": "730bf8cd3482e10254fc6dba2d53b48e",
"assets/assets/icons/opj.png": "54053a4fa76959f6899cd08e24fc3ec0",
"assets/assets/icons/php.png": "94242182bd0c201484a8e9d8e8f55d25",
"assets/assets/icons/slogan.png": "25c569239373ce31ea7918efb7dd2a5c",
"assets/assets/icons/SQLite.png": "8f2ec32d0288aef264e9486ac35752fd",
"assets/assets/icons/whatsapp%2520(1).png": "1aa80beced508dbc8357acd5c5a85b08",
"assets/assets/images/burds.png": "4f8b1d61978e727a1efee35f9234efc9",
"assets/assets/images/lod.json": "aa8ea9c3e8af0910fa475358d615c811",
"assets/assets/images/me.png": "359b6f30f2b36d895fa12d3a3c3e8ca6",
"assets/assets/images/profile.png": "b4e1a0f27c0a46c6ddcc5495cc87061e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a284fd4bbf4c7e8189e9d58ef821f5b1",
"assets/lod.json": "aa8ea9c3e8af0910fa475358d615c811",
"assets/NOTICES": "ad2468e7fc48f739c7785989bbe32003",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "359b6f30f2b36d895fa12d3a3c3e8ca6",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "75904f297150972275a1053dde632dc9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "722f3649dda6f918d011754ae6e175a4",
"/": "722f3649dda6f918d011754ae6e175a4",
"main.dart.js": "c943b1a1aed8078693be72a295f7c10d",
"manifest.json": "901c5fa508f965fe7e280ba36e8b1eeb",
"splash/img/dark-1x.png": "8ba647872511bf5393093d37546705e8",
"splash/img/dark-2x.png": "4ca943892b561d1638cb6239149835c3",
"splash/img/dark-3x.png": "b80134477e0b63b0c0770bd44d286c00",
"splash/img/dark-4x.png": "6e52b1fcd8c995339386665abedd53aa",
"splash/img/light-1x.png": "8ba647872511bf5393093d37546705e8",
"splash/img/light-2x.png": "4ca943892b561d1638cb6239149835c3",
"splash/img/light-3x.png": "b80134477e0b63b0c0770bd44d286c00",
"splash/img/light-4x.png": "6e52b1fcd8c995339386665abedd53aa",
"version.json": "cf1362020e60627e05bfae19b64c205e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
