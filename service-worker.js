"use strict";var precacheConfig=[["/Diamond-Clicker/index.html","f6ea8d1f5e59d547078d9e265389c8b1"],["/Diamond-Clicker/static/css/main.8417e5c2.css","ea78ceb14b4815379efb0369d1730ad5"],["/Diamond-Clicker/static/js/main.d3cd21c4.js","be414178c6da892e5427a50d460e8401"],["/Diamond-Clicker/static/media/10.ab69906a.png","ab69906a00b6caab0c4867bba2eb781b"],["/Diamond-Clicker/static/media/11.dacd62ce.png","dacd62ce70d188f4fa0cd689555b0d73"],["/Diamond-Clicker/static/media/13.b9e351be.png","b9e351bea541014f31de7b1f2158494f"],["/Diamond-Clicker/static/media/14.81155d32.png","81155d3257fe51fbf3d874bdb50fa7a8"],["/Diamond-Clicker/static/media/16.c20b57f1.png","c20b57f1a749c52af588862b1b4f006e"],["/Diamond-Clicker/static/media/19.61f6b739.png","61f6b73930cee4389d3647a512d156fa"],["/Diamond-Clicker/static/media/2.707bf01a.png","707bf01ae08903f00091c573c95814fc"],["/Diamond-Clicker/static/media/20.54b92e90.png","54b92e90ca33df9795e6a84a137a98cc"],["/Diamond-Clicker/static/media/22.9e9cdee7.png","9e9cdee7e04486c02ae7b4b85fb156e6"],["/Diamond-Clicker/static/media/25.b7e9343b.png","b7e9343ba6b9d590e207ad56a6499234"],["/Diamond-Clicker/static/media/26.87d9b2c8.png","87d9b2c8dadd9834d7c3a42af8231831"],["/Diamond-Clicker/static/media/28.1496efaa.png","1496efaa745c6580e35f86d63a916a05"],["/Diamond-Clicker/static/media/29.85b826aa.png","85b826aaef2fd18ed515fb6f124fcbde"],["/Diamond-Clicker/static/media/3.f10b272e.png","f10b272e10da8142418a8058a3d83415"],["/Diamond-Clicker/static/media/31.79aa6cfb.png","79aa6cfb4abcda36edc4e9e1434fd615"],["/Diamond-Clicker/static/media/32.c3f2216d.png","c3f2216d48ec1879144aacbbe87b494e"],["/Diamond-Clicker/static/media/4.16070c0e.png","16070c0ed77455c5f053b335f518a3ef"],["/Diamond-Clicker/static/media/5.2436a2b7.png","2436a2b7cdb500938a70ff4d6448616c"],["/Diamond-Clicker/static/media/7.b1b8a7ac.png","b1b8a7ac88831e0a55bb6c8f6187f32c"],["/Diamond-Clicker/static/media/Diamond.00589a23.png","00589a239fcc55c199358f551c27c66a"],["/Diamond-Clicker/static/media/Minecrafter.Alt.dc7947b6.ttf","dc7947b63602675ec87b023cfc35d028"],["/Diamond-Clicker/static/media/achievement.0303bd2a.jpg","0303bd2a1d7cd739c2530c5653850f18"],["/Diamond-Clicker/static/media/achievementGet.45d7ac4e.png","45d7ac4e714386231674812eada4caa1"],["/Diamond-Clicker/static/media/closedShop.9e1e2715.png","9e1e2715c45042eff62d5d99a1a0e8df"],["/Diamond-Clicker/static/media/diamondsBg.d36140f6.png","d36140f664a3bce17e4d8055c331567f"],["/Diamond-Clicker/static/media/hand.7e72967f.png","7e72967f7e24490a186dc51651744b8a"],["/Diamond-Clicker/static/media/inventoryBar.1c9b5ccb.png","1c9b5ccbdfb3e0a905b3df2cb17eecba"],["/Diamond-Clicker/static/media/shopBg.e129dbec.png","e129dbece1daf5dd437f8687231cf90e"],["/Diamond-Clicker/static/media/shopcreeper.ab6435ea.png","ab6435ea067fffb41db4d95f1b5a3d37"],["/Diamond-Clicker/static/media/shopdiamond pickaxe.9895d00d.png","9895d00d028830a9883acb2d6e36551e"],["/Diamond-Clicker/static/media/shopgolden pickaxe.4efe13d1.png","4efe13d188dada04e402ed86629b521e"],["/Diamond-Clicker/static/media/shophand.426e4d0d.png","426e4d0d5a75a9363b00daab2cc31311"],["/Diamond-Clicker/static/media/shopiron pickaxe.874173a0.png","874173a07a4cc19313c9343abe9786f1"],["/Diamond-Clicker/static/media/shopstick.96418fbd.png","96418fbd74dfa704fca62a5e8248c098"],["/Diamond-Clicker/static/media/shopstone pickaxe.ea25bc2b.png","ea25bc2bac815a520855935015125fa3"],["/Diamond-Clicker/static/media/shoptnt.3e02978e.png","3e02978e6b7712f0d45fc97598cce4e2"],["/Diamond-Clicker/static/media/shopwooden pickaxe.34d7a569.png","34d7a5699839447588ef7195279c1e6e"],["/Diamond-Clicker/static/media/slkscr.f7aceb26.ttf","f7aceb264f771788b55c3ce038678124"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var i="/Diamond-Clicker/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});