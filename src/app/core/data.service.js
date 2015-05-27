/**
 * Simple Core Data Service Wrapper
 * 
 * @ngdoc     service
 * @name      dataService
 * @module    gpqDash.core
 * @requires  $resource
 * @returns   {HttpPromise}
 *
 * @description
 *
 * Provides wrapper for `$resource` service in `ngResource` module to retrieve data from RESTful
 * services.
 */
(function() {
'use strict';
angular.module('gpqDash.core')
  .factory('dataService', dataService);


/* @ngInject */
function dataService($resource) {

  // Default URL Template String
  // ------------------------
  var url = 'api/:season/:round/:query.json';


  // Default URL Parameters
  // ------------------------
  var params  = { 
    season: 'current',
    round: 'last',
    query: 'results',
    limit: '60',
    offset:'0'
  };

  // Custom HTTP Actions
  // ------------------------
  var actions = {

    // Last Race Results
    get: {
      method: 'GET',
      url: 'http://ergast.com/api/f1/current/last/results.json',
      params: {},
      isArray: false,
      cache: true
    }
  };
  return $resource(url, params, actions);
}

})();