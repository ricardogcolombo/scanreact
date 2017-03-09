angular.module('scanner', [
  'ionic',
  'ngCordova',
  'ionic.service.core',
  'ionic.service.push',
  'ionic.service.deploy',
  'scanner.controllers'
])

/* Mas adelante para los push!!

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: 'YOUR_APP_ID',
    // The public API key all services will use for this app
    api_key: 'YOUR_API_KEY',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    //gcm_id: 'GCM_ID',
  });
}])

*/

.run(function($rootScope, $ionicDeploy, $ionicPlatform, $cordovaStatusbar) {

  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusBar.style(1);
    }

    $rootScope.updateOptions = {
      interval: 2 * 60 * 1000
    };

    $ionicDeploy.watch($rootScope.updateOptions).then(function() {}, function() {}, function(hasUpdate) {
      $rootScope.lastChecked = new Date();
      console.log('WATCH RESULT', hasUpdate);
    });
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeController as vm'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/home');

});
