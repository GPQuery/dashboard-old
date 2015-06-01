(function() {
'use strict';

angular.module('gpqDash')
  .directive('gpqTable', gpqTableDirective);

/* @ngInject */
function gpqTableDirective() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/tables/gpqTable.html'
  };

  return directive;
}

})();