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

var precacheConfig = [["/0-es2015.76bb1f2e73b74d91c43f.js","8af52b68670968c1449c54d483d5cdf7"],["/0-es5.48c8f9fe960c390b1e59.js","92a54ad80b3d9f46f33c58b927c98083"],["/1-es2015.25351fbf710b7a63af4f.js","edfd68912c0dc2f9cffc6e3fe0e2f5a9"],["/1-es5.91b8d8f7384c05e75160.js","93e3dded1f39c17196d19ec0b3eea507"],["/10-es2015.731178220cc413c94493.js","4bee09e4cc31850de1f373ea09968f8b"],["/10-es5.faf0516bc3d59ef62ba8.js","22818d034a44ece9d8b768c779ea817f"],["/14-es5.a925c240fd2000307027.js","f714484bb29612e2b2aab650b8ad8440"],["/15-es2015.765538f94643969fb661.js","7b2efdfea7fc1c9114c6456130fcaf27"],["/15-es5.2215c210d8558c5cdca9.js","c252912018f2c4f7e827c13a1e01a87d"],["/16-es2015.7a61341baa35c095e215.js","b0d6f3519aa94040539f0200ed62ae90"],["/16-es5.fbf6fbf9463531c95cf1.js","ebc20e2bc0323f3c0d3d10aa3a2f42f9"],["/17-es2015.c0ec0113326ccb4e68ed.js","c87781e4391cd1f9f6721b5cf9611ee8"],["/17-es5.36e4f37088081964b6bd.js","c493d66e5d12b548f7ba4a0d0a939752"],["/18-es2015.ebacc72d9353c8d6e5a1.js","2e7e214e278c6aa7590fc8b374f4f6ad"],["/18-es5.c48c5dc37a2e8583acd6.js","5e42ca092af457cebbeca634ca78b159"],["/19-es2015.0060ccc00cdf6d7a250b.js","a48d95aefaf8176b39d74d5a3c56d652"],["/19-es5.866d5d673356837e2fd3.js","66ad0527bd34edf564cee0e6b961e0bb"],["/2-es2015.d0e9a4307c601c9f9b55.js","897dc2be916896bf3ac8ab3c57ada455"],["/2-es5.b37beafa91049aab9bfa.js","4fcb3676b5da10cacc071cbcd4720c0a"],["/20-es2015.f92a2d511ddfdafc1c0a.js","36d1baa4b6779ae453546a423977fa5a"],["/20-es5.f70ad1b95a1a250c2c52.js","690692d95484b862650e0f77a8250c47"],["/21-es2015.bb4989c59d55c71d00d8.js","72b6d8edb50b36ce07e99db83ffd6c4b"],["/21-es5.bea8aa06b5d748323306.js","6b34cbf635e7f228be944d270e2c341f"],["/22-es2015.2d0c6e770bada5190490.js","e8336a9d323f9fd30648db4376cb23aa"],["/22-es5.d941d78bc054534095ce.js","acfd7f12bf9068dcb8ebfba25b049072"],["/23-es2015.16544dd47c8f02e66c1b.js","221a05cb418df25fae7ed1b9108d6313"],["/4-es5.370b52e35115242dfbf6.js","28aedd90d2bc86e8bb4f6dacc59aedba"],["/5-es2015.303f4db4bdd672bfe67f.js","281b5d55ea325359337d1af363849953"],["/5-es5.350831693a718130e36b.js","6c98c80d2db3d01551d22a6ae7edf352"],["/6-es2015.0f54eb2934499ce57ab7.js","a6594aaf0be79489e4c86fb4ab71d7d5"],["/6-es5.7e4666c26617a485aa80.js","910dcdb1ec98677de6b77067043e7abf"],["/7-es2015.d0ac20f6ec1650bcd466.js","feff544c3290a34a510fdec7aea82726"],["/8-es2015.a61419ac584be0ca32d6.js","76bb7d44b13ff9c5715bbcae2a5dc78d"],["/8-es5.b4c37ce1479ea7d9e37a.js","76e6937af938428f2c8c40631783d4e0"],["/9-es2015.c25773852b60459f7e5a.js","b9b75654d7cea87d3b1aa62ecea06f9b"],["/9-es5.d73143cc5c60fccc7737.js","aa0a4b02f2e8aab18eb6044f3355727c"],["/LucidaGrande.231ae382265b789a3845.ttf","231ae382265b789a3845d0c610ea4405"],["/LucidaGrande.2854dc105905a5b8c75d.woff","2854dc105905a5b8c75d4e985d460119"],["/LucidaGrandeBold.e5c7f501c390e2ddb25e.ttf","e5c7f501c390e2ddb25e96be9385be24"],["/LucidaGrandeBold.faea1cf624b168e93bd3.woff","faea1cf624b168e93bd30cd22922bd35"],["/NunitoSans-Bold.1b66d33939d8d9653c79.ttf","1b66d33939d8d9653c79fe29d43d4480"],["/NunitoSans-Bold.34704076b949c541becb.woff","34704076b949c541becbf03712f01a67"],["/NunitoSans-ExtraBold.100457943283bb661ffe.ttf","100457943283bb661ffefdbf3a569980"],["/NunitoSans-ExtraBold.b993d1109e01ba4f1453.woff","b993d1109e01ba4f1453440089245eb8"],["/NunitoSans-Regular.65f9cd8ad6f4986ededb.ttf","65f9cd8ad6f4986ededb321dca918a4a"],["/NunitoSans-Regular.d509e917a86308632b7f.woff","d509e917a86308632b7fdd384059f117"],["/assets/fonts/lato/lato-black-webfont.woff","9a4ed5e86934148533d947ad07cbdeb4"],["/assets/fonts/lato/lato-bold-webfont.woff","89bc3410e6274e3df386fd6852cb2aaf"],["/assets/fonts/lato/lato-regular-webfont.woff","cd3ec9d64ed7a791988e5a59969b771f"],["/assets/fonts/lucida-grante/LucidaGrande.ttf","231ae382265b789a3845d0c610ea4405"],["/assets/fonts/lucida-grante/LucidaGrande.woff","2854dc105905a5b8c75d4e985d460119"],["/assets/fonts/lucida-grante/LucidaGrandeBold.ttf","e5c7f501c390e2ddb25e96be9385be24"],["/assets/fonts/lucida-grante/LucidaGrandeBold.woff","faea1cf624b168e93bd30cd22922bd35"],["/assets/fonts/nunito-sans/NunitoSans-Bold.ttf","1b66d33939d8d9653c79fe29d43d4480"],["/assets/fonts/nunito-sans/NunitoSans-Bold.woff","34704076b949c541becbf03712f01a67"],["/assets/fonts/nunito-sans/NunitoSans-ExtraBold.ttf","100457943283bb661ffefdbf3a569980"],["/assets/fonts/nunito-sans/NunitoSans-ExtraBold.woff","b993d1109e01ba4f1453440089245eb8"],["/assets/fonts/nunito-sans/NunitoSans-Regular.ttf","65f9cd8ad6f4986ededb321dca918a4a"],["/assets/fonts/nunito-sans/NunitoSans-Regular.woff","d509e917a86308632b7fdd384059f117"],["/assets/images/header/burger-menu.svg","f7d87b24a07cac0dd506d2a994af4f21"],["/assets/images/icons/consent-active.svg","37a0e600a017776e409ee55dd8c1d1f4"],["/assets/images/icons/consent.svg","32e64226de9ce23a7148e2a8b4c9d7ea"],["/assets/images/icons/documents-forms-active.svg","e361553ddf6595462750287848105e41"],["/assets/images/icons/documents-forms.svg","a582c0436330bb8ff9c291631b2ffe81"],["/assets/images/icons/general-information-active.svg","f5168cdc92506549654df5ffa8710be7"],["/assets/images/icons/general-information.svg","5ad452fc7eb5dc708c99483949b8fce6"],["/assets/images/icons/icon-carrets.svg","aafb86db1d6d18d4707c3146c39b9bee"],["/assets/images/icons/icon-filter.svg","9893870c9f59a544d24069263e0dd1a4"],["/assets/images/icons/payment-active.svg","3d6c9737e99761233df9fd41de9406e3"],["/assets/images/icons/payment-settings-active.svg","b46d38f8e79d3f78168a24434db11405"],["/assets/images/icons/payment-settings.svg","b9c4af5fc5a64cf25b0ed6b46e5d8229"],["/assets/images/icons/payment.svg","0efaf260f2bfeb313637174619c4e41f"],["/assets/images/icons/term-conditions-active.svg","adb4f1c0f61433d8a76cfb42705d4733"],["/assets/images/icons/term-conditions.svg","826cf58e057cb3a03bf72304c366212b"],["/assets/images/icons/tuition-contract-active.svg","bea5243503df82cbf3daed51c87e95c9"],["/assets/images/icons/tuition-contract.svg","bfbf6d8b38781b5714a64d82750ad042"],["/assets/images/password/eye.svg","c306fd36adad23ca2f0be2637165f16e"],["/assets/images/password/eye_off.svg","3cdae6e98bc9b472f671e66ff6498b44"],["/assets/images/temp/img1.png","d968dc16c85e34da948e8d6c3e29fd17"],["/assets/images/temp/img2.png","f7d2c1c2435a6619655ec3332da37eae"],["/assets/images/temp/img3.png","2e7b92655de6f30dee32691bbcde0c51"],["/assets/images/temp/person-foto-placeholder.png","a780629ea7e6b02ea645fa7d0ac0d353"],["/common-es2015.8e8c9300102e88c6b127.js","7e23d889c3f8367a21a7725c291321d8"],["/common-es5.2a643f5d61ce4d5bd0ae.js","83b0efff5a5e7871484b5eca317c96ba"],["/fa-brands-400.2ef8ba3410dcc71578a8.woff","2ef8ba3410dcc71578a880e7064acd7a"],["/fa-brands-400.5bf145531213545e03ff.svg","5bf145531213545e03ff41cd27df7d2b"],["/fa-brands-400.98b6db59be947f563350.ttf","98b6db59be947f563350d2284fc9ea36"],["/fa-brands-400.a7b95dbdd87e0c809570.eot","a7b95dbdd87e0c809570affaf366a434"],["/fa-regular-400.427d721b86fc9c68b2e8.woff","427d721b86fc9c68b2e85ad42b69238c"],["/fa-regular-400.5eb754ab7dbd2fee5623.svg","5eb754ab7dbd2fee562360528db4c3c0"],["/fa-regular-400.65b9977aa23185e8964b.ttf","65b9977aa23185e8964b36eddbce7a20"],["/fa-regular-400.dcce4b7fbd5e895561e1.eot","dcce4b7fbd5e895561e18af4668265af"],["/fa-solid-900.46e7cec623d8bd790d9f.eot","46e7cec623d8bd790d9fdbc8de2d3ee7"],["/fa-solid-900.49279363201ed19a8407.svg","49279363201ed19a840796e05a74a91b"],["/fa-solid-900.a7140145ebaaf5fb14e4.woff","a7140145ebaaf5fb14e40430af5d25c4"],["/fa-solid-900.ff8d9f8adb0d09f11d48.ttf","ff8d9f8adb0d09f11d4816a152672f53"],["/icon-carrets.aafb86db1d6d18d4707c.svg","aafb86db1d6d18d4707c3146c39b9bee"],["/icon-search.58516c3e4430fd49d804.svg","58516c3e4430fd49d804535e5b869e79"],["/index.html","b8f03fe34de784a753395c7ae7dbe58d"],["/lato-black-webfont.9a4ed5e86934148533d9.woff","9a4ed5e86934148533d947ad07cbdeb4"],["/lato-bold-webfont.89bc3410e6274e3df386.woff","89bc3410e6274e3df386fd6852cb2aaf"],["/lato-regular-webfont.cd3ec9d64ed7a791988e.woff","cd3ec9d64ed7a791988e5a59969b771f"],["/main-es2015.68a5d88b523142e97311.js","24758de016107a5da2e182f12359b2de"],["/main-es5.99f04120af26cce25ffc.js","7aeca4390672b63eb9da8bc459439d25"],["/pdfjsWorker-es2015.bd91d836241c04415559.js","2b190b37cf64b01c0439cf3665ae15b3"],["/pdfjsWorker-es5.9f1177ab11f0da1bd546.js","2b190b37cf64b01c0439cf3665ae15b3"],["/polyfills-es2015.6319f80b7a4bed56ecba.js","d75ebe36713d2a454d5867c7ac201cf1"],["/polyfills-es5.2d4178370987dc14c35d.js","973ee46dfc16e34604bdb2cafa3c0ead"],["/runtime-es2015.2c759389ea20b5ba90d2.js","c94805449cb15c14d967370ed393069b"],["/runtime-es5.7652036d3547b530c480.js","0788d8ae1b48a10f62d10474f2dd60af"],["/scripts.201cd8c2534507b4525e.js","54c0c327699d83e9e746b736f80bcecc"],["/styles.6a53f537ac80340e8234.css","ba150fd853e3ad2c4a55d922bf7ec8b4"]];
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







