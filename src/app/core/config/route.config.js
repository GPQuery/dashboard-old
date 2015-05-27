(function() {
'use strict';

angular.module('gpqDash.core')
  .config(routesConfig);

/* @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {

  // State Object Configuration
  var dash  = {
    url: '/dash',
    templateUrl: 'app/dashboard/dashboard.html',
    controller: 'Dashboard',
    controllerAs: 'vm'
  };
  var home  = {
    url: '/',
    templateUrl: 'app/current/current.html',
    controller: 'Current',
    controllerAs: 'vm'
  };


  $stateProvider
    .state('dash', dash)
    .state('home', home);
    /*
    {
      url: '/',
      templateUrl: 'app/dashboard/overview.html',
      controller: function() {
        var self = this;
        self.items = ['Item 1', 'Object 3', 'Penis'];
      },
      controllerAs: 'rm'
    });
    */
  $urlRouterProvider.otherwise('/');
}

})();