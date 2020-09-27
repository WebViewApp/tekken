document.addEventListener('deviceready', function () {
    
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
  
    window.plugins.OneSignal
      .startInit("31a79252-084d-4aee-ac71-322b0286940a")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
  }, false);