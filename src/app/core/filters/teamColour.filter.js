/**
 * Filters Constructor names for flag icons
 *
 * @ngDoc     filter
 * @name      teamColour
 * @module    gpqDash.core
 * @returns   {string}
 *
 * @description
 *
 * Converts input string to lowercase, and replaces all spaces and underscores with hyphens.
 */
(function() {
'use strict';

angular.module('gpqDash.core')
  .filter('teamColour', teamColour);

/* @ngInject */
function teamColour() {

  // Convert input string to kebab
  // ------------------------
  return function(input) {
    input = input || '';
    var flag = '';
    return function(input) {
      flag = input && input.replace(/_/g, '-');
      return flag.toLowerCase();
    };
  };
}
  
})();