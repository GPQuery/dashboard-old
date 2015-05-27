(function() {
'use strict';

angular.module('gpqDash')
  .controller('Current', Current);

/* @ngInject */
function Current(dataService, $log) {
  var self = this;

  self.data = setData();

  // Populate Data
  // ------------------------
  function setData() {
    self.data = dataService.get().$promise
        .then(function(response) {
          self.data = response.MRData.RaceTable.Races[0];
        }, function(errorMsg) {
          self.data = errorMsg;
        });
    return self.data;
  }

}

  
})();