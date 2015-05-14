'use strict';

angular.module('gpqDash', [
  // Angular Modules
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngMaterial',

  // Third Party Modules
  'ui.router', 'nvd3'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
