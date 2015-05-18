(function() {
  'use strict';

  angular.module('gpqDash')
    .controller('Dashboard', Dashboard);

    function Dashboard($mdSidenav, $log) {
      var vm = this;

      vm.toggleSidenav  = toggleSidenav;

      function toggleSidenav() {
        $mdSidenav('left').toggle().then(function() {
          $log.info('Sidenav opened.');
        });
      }

    }

    
})();