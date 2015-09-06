'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  console.log('Allo! Allo from your module: ' + 'main');

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('thing-list', {
      url: '/thing',
      templateUrl: 'main/templates/thing-list.html',
      controller: 'ThingListCtrl as ctrl'
    })
    .state('thing-details', {
      url: '/thing/details',
      templateUrl: 'main/templates/thing-details.html',
      controller: 'ThingDetailCtrl as ctrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'main/templates/login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .state('logout', {
      url: '/login',
      onEnter: function() {
        // logout code here?
        console.log('Logout code not implemented');
      }
    })
    ;
});
