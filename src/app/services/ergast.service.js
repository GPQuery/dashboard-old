(function() {
'use strict';

  angular.module('gpqDash')
      .factory('ergastService', ergastService);

  function ergastService($resource) {
    var url     = 'http://ergast.com/api/f1/:season/:round/:query.json?limit=:limit&offset=:offset';
    var params  = { 
      season: 'current',
      round: 'last',
      query: 'results',
      limit: '60',
      offset:'0'
    };
    var actions = {
      get: {
        method: 'GET',
        cache: true
      }
    };
    return $resource(url, params, actions);
  }

})();