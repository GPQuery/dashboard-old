(function() {
'use strict';

angular.module('gpqDash')
  .controller('Current', Current);

/* @ngInject */
function Current(dataService, $mdSidenav, $log) {
  var vm = this;
  vm.data = setData();
  vm.toggleSidenav  = toggleSidenav;

  function toggleSidenav() {
    $mdSidenav('left').toggle().then(function() {
      $log.info('Sidenav opened.');
    });
  }

  function setData() {
    vm.data = dataService.get().$promise
    .then(function(response) {
      vm.data = response.MRData.RaceTable.Races[0];
      $log.info(vm.data);
    }, function(errorMsg) {
      vm.data = errorMsg;
    });
    return vm.data;
  }

}

  
})();