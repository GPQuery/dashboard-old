(function() {
  'use strict';

  angular.module('gpqDash')
    .controller('Navbar', Navbar);

    function Navbar($timeout, $log, $q) {
      var vm = this;
      vm.races        = loadAll();
      vm.querySearch  = querySearch;
      vm.selectChange = selectChange;
      vm.searchChange = searchChange;

      // 
      // $timeout is used to simulate dataservice for now
      //
      function querySearch(query) {
        var results = query ? vm.races.filter( createFilterFor(query) ) : vm.races,
            deferred;

        deferred = $q.defer();
        $timeout(function() {
          deferred.resolve(results);
        }, Math.random() * 1000, false);
        return deferred.promise;
      }

      //
      // Change in selected item
      //
      function selectChange(item) {
        $log.info('Selected item changed to ' + JSON.stringify(item));
      }

      //
      // Change in search text
      //
      function searchChange(text) {
        $log.info('Search text changed to ' + text);
      }

      //
      // Populate races
      //
      function loadAll() {
        var raceList = '2015 Australian Grand Prix, 2015 Malaysian Grand Prix, 2015 Chinese Grand Prix, 2015 Bahrain Grand Prix, 2015 Spanish Grand Prix';
        return raceList.split(/, +/g).map(function (race) {
          return {
            value: race.toLowerCase(),
            display: race
          };
        });
      }

      //
      // Creates filter for query string
      //
      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(race) {
          return (race.value.indexOf(lowercaseQuery) === 0);
        };
      }


    }
})();