importScripts('http://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

if (workbox) {

  /* *
  console.log("Workbox loaded!");
  workbox.setConfig({
    debug: true
  });
  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
  /* */

  workbox.routing.registerRoute(
    new RegExp('/wtracks/.*'),
    workbox.strategies.networkFirst({
      cacheName: 'wtracks:local',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('.*'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'wtracks:ext',
    })
  );


} else {
  console.log("Workbox didn't load 😬");
}
