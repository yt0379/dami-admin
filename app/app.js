'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router', 'ui.router.state.events',
  'myApp.view1',
  'myApp.view1.editUser',
  'myApp.view2',
  'myApp.version',
  'myApp.userService',
]).
config(['$urlRouterProvider',function($urlRouterProvider) {
  // $locationProvider.hashPrefix('!');
  // $routeProvider.otherwise({redirectTo: '/view3'});
    $urlRouterProvider.otherwise('/view1')
}]);
