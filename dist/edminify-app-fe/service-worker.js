/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0-es2015.e1dcf45e594ca50723ab.js","cec27de0936b9247793f62479583174b"],["/0-es5.6999a0423b8db74f35b8.js","7e7fd2fceb4789b874f24ae295df6d23"],["/1-es5.231c24528282e5f6bd87.js","bd9e3f70a5a54249a9d27c113464408c"],["/11-es5.7a4b3d6093292f55baf4.js","ef025d9fea80cc6310dbdac1906c9f40"],["/12-es2015.ff973b630d8b55b2c839.js","78ae94bd97b0526d2e76bb6b02959b35"],["/12-es5.29fd52598e1a362e107c.js","e7d5a3b2484ce4638d60ca292719e987"],["/13-es2015.e9c94f7f05dbbd196a8a.js","00fbf474dbd124fd994004636aa64c48"],["/13-es5.ea48408704c8cbfcddb2.js","3c75593bf6c6498de3e01cc1ef0646a2"],["/14-es2015.edbf7f6db966d1977970.js","0eeb7911907fbde304d3bc79faf97e2d"],["/14-es5.27d14587552cc32b2cfa.js","978793239debcb3b655674125390b1c2"],["/15-es2015.656f4870b282b2bfdd22.js","6135aaeadff8803e8a8927052ffee441"],["/15-es5.f699101115dd11326228.js","170f95d89e216e8f82b51228be7c1bfc"],["/16-es2015.f84408114b89d9c23e53.js","d49f75f5d0945ff482f6d4bf6f1a7a36"],["/16-es5.23c05c8d9082319bf0ae.js","12c1d60e183110393c247262cad57087"],["/17-es2015.66b988a0a06d4eae259c.js","5020b960f56b920e7d9ec1ceac6061c5"],["/17-es5.e451fe03866bd74386bd.js","e0b1e79eb72b95b37d7c8e1f750a5747"],["/18-es2015.a0e7266369c41207acbc.js","edc12d653d032bbda5f318bf08c0d894"],["/18-es5.7d24fc15c725205d9c09.js","dfa762d27a578131ea242ac46a78af1c"],["/19-es2015.72c1c71dc3938d746eee.js","5b9fc2b92669b45121e4132775fa81b4"],["/2-es2015.eeedcb7315bb2085404b.js","3d5fe1afe16cf6813d5c4e201415cad4"],["/2-es5.156a5734e840fe5cd5c0.js","240b66e5142eaddc64bb52ac03276d73"],["/3-es2015.d064fbf424fb972a7df7.js","82bddb2ee00eabe6a37a202f962fb5f6"],["/4-es2015.221215828fab67fb7e37.js","4932f003fc549b12ba5bc2524b56c282"],["/4-es5.122e820030e30b595826.js","f3769b4ee8fc797f731d7846da5645e5"],["/5-es2015.e4ac7e8b2f7b105991ea.js","f64f9d519ffd8c2c9cbb38ca0ce02cdb"],["/5-es5.2a99453cfa011fea2ce7.js","d3e027fecb08b2505ebcc4f0cfd00998"],["/6-es2015.1d39e10b5fd52bba1bd6.js","32d5c4f56b335623183fc33a90e3845e"],["/6-es5.d11d049aea528301ae27.js","910dcdb1ec98677de6b77067043e7abf"],["/7-es2015.0f2f14a258dbbe97122b.js","e1b0de1758957c984838f2d8ac7d682d"],["/7-es5.0abe3681b130f59e2a2c.js","60684e83fbbe6c4abb6b17efd1f03442"],["/LucidaGrande.231ae382265b789a3845.ttf","231ae382265b789a3845d0c610ea4405"],["/LucidaGrande.2854dc105905a5b8c75d.woff","2854dc105905a5b8c75d4e985d460119"],["/LucidaGrandeBold.e5c7f501c390e2ddb25e.ttf","e5c7f501c390e2ddb25e96be9385be24"],["/LucidaGrandeBold.faea1cf624b168e93bd3.woff","faea1cf624b168e93bd30cd22922bd35"],["/NunitoSans-Bold.1b66d33939d8d9653c79.ttf","1b66d33939d8d9653c79fe29d43d4480"],["/NunitoSans-Bold.34704076b949c541becb.woff","34704076b949c541becbf03712f01a67"],["/NunitoSans-ExtraBold.100457943283bb661ffe.ttf","100457943283bb661ffefdbf3a569980"],["/NunitoSans-ExtraBold.b993d1109e01ba4f1453.woff","b993d1109e01ba4f1453440089245eb8"],["/NunitoSans-Regular.65f9cd8ad6f4986ededb.ttf","65f9cd8ad6f4986ededb321dca918a4a"],["/NunitoSans-Regular.d509e917a86308632b7f.woff","d509e917a86308632b7fdd384059f117"],["/assets/fonts/lato/lato-black-webfont.woff","9a4ed5e86934148533d947ad07cbdeb4"],["/assets/fonts/lato/lato-bold-webfont.woff","89bc3410e6274e3df386fd6852cb2aaf"],["/assets/fonts/lato/lato-regular-webfont.woff","cd3ec9d64ed7a791988e5a59969b771f"],["/assets/fonts/lucida-grante/LucidaGrande.ttf","231ae382265b789a3845d0c610ea4405"],["/assets/fonts/lucida-grante/LucidaGrande.woff","2854dc105905a5b8c75d4e985d460119"],["/assets/fonts/lucida-grante/LucidaGrandeBold.ttf","e5c7f501c390e2ddb25e96be9385be24"],["/assets/fonts/lucida-grante/LucidaGrandeBold.woff","faea1cf624b168e93bd30cd22922bd35"],["/assets/fonts/nunito-sans/NunitoSans-Bold.ttf","1b66d33939d8d9653c79fe29d43d4480"],["/assets/fonts/nunito-sans/NunitoSans-Bold.woff","34704076b949c541becbf03712f01a67"],["/assets/fonts/nunito-sans/NunitoSans-ExtraBold.ttf","100457943283bb661ffefdbf3a569980"],["/assets/fonts/nunito-sans/NunitoSans-ExtraBold.woff","b993d1109e01ba4f1453440089245eb8"],["/assets/fonts/nunito-sans/NunitoSans-Regular.ttf","65f9cd8ad6f4986ededb321dca918a4a"],["/assets/fonts/nunito-sans/NunitoSans-Regular.woff","d509e917a86308632b7fdd384059f117"],["/assets/images/header/burger-menu.svg","f7d87b24a07cac0dd506d2a994af4f21"],["/assets/images/icons/consent-active.svg","37a0e600a017776e409ee55dd8c1d1f4"],["/assets/images/icons/consent.svg","32e64226de9ce23a7148e2a8b4c9d7ea"],["/assets/images/icons/documents-forms-active.svg","e361553ddf6595462750287848105e41"],["/assets/images/icons/documents-forms.svg","a582c0436330bb8ff9c291631b2ffe81"],["/assets/images/icons/general-information-active.svg","f5168cdc92506549654df5ffa8710be7"],["/assets/images/icons/general-information.svg","5ad452fc7eb5dc708c99483949b8fce6"],["/assets/images/icons/icon-carrets.svg","aafb86db1d6d18d4707c3146c39b9bee"],["/assets/images/icons/icon-filter.svg","9893870c9f59a544d24069263e0dd1a4"],["/assets/images/icons/payment-active.svg","3d6c9737e99761233df9fd41de9406e3"],["/assets/images/icons/payment-settings-active.svg","b46d38f8e79d3f78168a24434db11405"],["/assets/images/icons/payment-settings.svg","b9c4af5fc5a64cf25b0ed6b46e5d8229"],["/assets/images/icons/payment.svg","0efaf260f2bfeb313637174619c4e41f"],["/assets/images/icons/term-conditions-active.svg","adb4f1c0f61433d8a76cfb42705d4733"],["/assets/images/icons/term-conditions.svg","826cf58e057cb3a03bf72304c366212b"],["/assets/images/icons/tuition-contract-active.svg","bea5243503df82cbf3daed51c87e95c9"],["/assets/images/icons/tuition-contract.svg","bfbf6d8b38781b5714a64d82750ad042"],["/assets/images/password/eye.svg","c306fd36adad23ca2f0be2637165f16e"],["/assets/images/password/eye_off.svg","3cdae6e98bc9b472f671e66ff6498b44"],["/assets/images/temp/img1.png","d968dc16c85e34da948e8d6c3e29fd17"],["/assets/images/temp/img2.png","f7d2c1c2435a6619655ec3332da37eae"],["/assets/images/temp/img3.png","2e7b92655de6f30dee32691bbcde0c51"],["/assets/images/temp/person-foto-placeholder.png","a780629ea7e6b02ea645fa7d0ac0d353"],["/fa-brands-400.2ef8ba3410dcc71578a8.woff","2ef8ba3410dcc71578a880e7064acd7a"],["/fa-brands-400.5bf145531213545e03ff.svg","5bf145531213545e03ff41cd27df7d2b"],["/fa-brands-400.98b6db59be947f563350.ttf","98b6db59be947f563350d2284fc9ea36"],["/fa-brands-400.a7b95dbdd87e0c809570.eot","a7b95dbdd87e0c809570affaf366a434"],["/fa-regular-400.427d721b86fc9c68b2e8.woff","427d721b86fc9c68b2e85ad42b69238c"],["/fa-regular-400.5eb754ab7dbd2fee5623.svg","5eb754ab7dbd2fee562360528db4c3c0"],["/fa-regular-400.65b9977aa23185e8964b.ttf","65b9977aa23185e8964b36eddbce7a20"],["/fa-regular-400.dcce4b7fbd5e895561e1.eot","dcce4b7fbd5e895561e18af4668265af"],["/fa-solid-900.46e7cec623d8bd790d9f.eot","46e7cec623d8bd790d9fdbc8de2d3ee7"],["/fa-solid-900.49279363201ed19a8407.svg","49279363201ed19a840796e05a74a91b"],["/fa-solid-900.a7140145ebaaf5fb14e4.woff","a7140145ebaaf5fb14e40430af5d25c4"],["/fa-solid-900.ff8d9f8adb0d09f11d48.ttf","ff8d9f8adb0d09f11d4816a152672f53"],["/icon-carrets.aafb86db1d6d18d4707c.svg","aafb86db1d6d18d4707c3146c39b9bee"],["/icon-search.58516c3e4430fd49d804.svg","58516c3e4430fd49d804535e5b869e79"],["/index.html","597c35d786d799a340421a05bea43f5a"],["/lato-black-webfont.9a4ed5e86934148533d9.woff","9a4ed5e86934148533d947ad07cbdeb4"],["/lato-bold-webfont.89bc3410e6274e3df386.woff","89bc3410e6274e3df386fd6852cb2aaf"],["/lato-regular-webfont.cd3ec9d64ed7a791988e.woff","cd3ec9d64ed7a791988e5a59969b771f"],["/main-es2015.9d69e99834e15396267f.js","c3bf004f03449f46208d909d140788ef"],["/main-es5.43b5afe5988375dc02bb.js","a95d3096c5c515ade8c0f24426483f0f"],["/pdfjsWorker-es2015.f05a105467b06e29d7dc.js","8f27ba0eacafe9fb36d90ee51841c390"],["/pdfjsWorker-es5.37af3e111da1385084e7.js","8f27ba0eacafe9fb36d90ee51841c390"],["/polyfills-es2015.d9755fc6bbb9c9de5efc.js","8902072e44b5b0ffec5472b68fab6b82"],["/polyfills-es5.b0a37a596f523311424b.js","6f2bbf1d2283009f64792d8251004c34"],["/runtime-es2015.0d9bb94be93bd268db62.js","ed91ec0eeaa652a267566febaa8ffee5"],["/runtime-es5.5a7e7a519f34a9d0c8d3.js","0ee19525950f1038f5c0c4ac26945eb3"],["/scripts.201cd8c2534507b4525e.js","54c0c327699d83e9e746b736f80bcecc"],["/styles.6a53f537ac80340e8234.css","ba150fd853e3ad2c4a55d922bf7ec8b4"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







