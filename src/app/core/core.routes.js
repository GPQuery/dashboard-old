(function() {
'use strict';

angular.module('gpqDash.core')
  .config(uiRouterConfig);

/* @ngInject */
function uiRouterConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'app/dashboard/overview.html',
      controller: function() {
        var self = this;
        self.items = ['Item 1', 'Object 3', 'Penis'];
      },
      controllerAs: 'rm'
    });
  $urlRouterProvider.otherwise('/');
}

})();