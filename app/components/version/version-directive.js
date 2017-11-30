'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])

.directive('routerLinkActive', ['$location', function($location) {
  return function(scope, elm, attrs) {
      //1.监听路由事件
      scope.$on('$stateChangeSuccess',function (event) {
          console.log('$stateChangeSuccess');
          var path = $location.path();
          var href = elm.find('a').attr('href').substr(2);
          if(path.indexOf(href)!=-1) {
              //路由匹配
              elm.addClass('active')
          }else{
              elm.removeClass('active')
          }
      })
  };
}]);








