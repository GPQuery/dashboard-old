/**
 * Registers flag icon IDs with SVG file URLs.
 *
 * @ngDoc     filter
 * @name      icon.config.js
 * @module    gpqDash.core
 *
 * @description
 *
 * Pre-registers flag icons with source URLs prior to <md-icon> direcive compilation.
 * Icons are not internally loaded until $http request sent by $mdIcon loads the SVG on demand.
 */
(function() {
'use strict';

angular.module('gpqDash.core')
  .config(configIcons);

/* @ngInject */
function configIcons($mdIconProvider) {
  $mdIconProvider
    .icon('Abu Dhabi', 'bower_components/livery-flags/flags/4x3/ae.svg')
    .icon('American', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('American-Italian', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('Argentina', 'bower_components/livery-flags/flags/4x3/ar.svg')
    .icon('Argentine', 'bower_components/livery-flags/flags/4x3/ar.svg')
    .icon('Argentine-Italian', 'bower_components/livery-flags/flags/4x3/ar.svg')
    .icon('Australia', 'bower_components/livery-flags/flags/4x3/au.svg')
    .icon('Australian', 'bower_components/livery-flags/flags/4x3/au.svg')
    .icon('Austria', 'bower_components/livery-flags/flags/4x3/at.svg')
    .icon('Austrian', 'bower_components/livery-flags/flags/4x3/at.svg')
    .icon('Bahrain', 'bower_components/livery-flags/flags/4x3/bh.svg')
    .icon('Belgian', 'bower_components/livery-flags/flags/4x3/be.svg')
    .icon('Belgium', 'bower_components/livery-flags/flags/4x3/be.svg')
    .icon('Brazil', 'bower_components/livery-flags/flags/4x3/br.svg')
    .icon('Brazilian', 'bower_components/livery-flags/flags/4x3/br.svg')
    .icon('British', 'bower_components/livery-flags/flags/4x3/gb.svg')
    .icon('Caesars Palace', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('Canada', 'bower_components/livery-flags/flags/4x3/ca.svg')
    .icon('Canadian', 'bower_components/livery-flags/flags/4x3/ca.svg')
    .icon('Chilean', 'bower_components/livery-flags/flags/4x3/cl.svg')
    .icon('China', 'bower_components/livery-flags/flags/4x3/cn.svg')
    .icon('Chinese', 'bower_components/livery-flags/flags/4x3/cn.svg')
    .icon('Colombian', 'bower_components/livery-flags/flags/4x3/co.svg')
    .icon('Czech', 'bower_components/livery-flags/flags/4x3/cz.svg')
    .icon('Dallas', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('Danish', 'bower_components/livery-flags/flags/4x3/dk.svg')
    .icon('Detroit', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('Dutch', 'bower_components/livery-flags/flags/4x3/nl.svg')
    .icon('East German', 'bower_components/livery-flags/flags/4x3/de.svg')
    .icon('European', 'bower_components/livery-flags/flags/4x3/de.svg')
    .icon('Finnish', 'bower_components/livery-flags/flags/4x3/fi.svg')
    .icon('France', 'bower_components/livery-flags/flags/4x3/fr.svg')
    .icon('French', 'bower_components/livery-flags/flags/4x3/fr.svg')
    .icon('German', 'bower_components/livery-flags/flags/4x3/de.svg')
    .icon('Germany', 'bower_components/livery-flags/flags/4x3/de.svg')
    .icon('Hong Kong', 'bower_components/livery-flags/flags/4x3/hk.svg')
    .icon('Hungarian', 'bower_components/livery-flags/flags/4x3/hu.svg')
    .icon('Hungary', 'bower_components/livery-flags/flags/4x3/hu.svg')
    .icon('India', 'bower_components/livery-flags/flags/4x3/in.svg')
    .icon('Indian', 'bower_components/livery-flags/flags/4x3/in.svg')
    .icon('Indianapolis 500', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('Irish', 'bower_components/livery-flags/flags/4x3/ie.svg')
    .icon('Italian', 'bower_components/livery-flags/flags/4x3/it.svg')
    .icon('Italy', 'bower_components/livery-flags/flags/4x3/it.svg')
    .icon('Japan', 'bower_components/livery-flags/flags/4x3/jp.svg')
    .icon('Japanese', 'bower_components/livery-flags/flags/4x3/jp.svg')
    .icon('Korea', 'bower_components/livery-flags/flags/4x3/kr.svg')
    .icon('Korean', 'bower_components/livery-flags/flags/4x3/kr.svg')
    .icon('Liechtensteiner', 'bower_components/livery-flags/flags/4x3/li.svg')
    .icon('Luxembourg', 'bower_components/livery-flags/flags/4x3/lu.svg')
    .icon('Malaysia', 'bower_components/livery-flags/flags/4x3/my.svg')
    .icon('Malaysian', 'bower_components/livery-flags/flags/4x3/my.svg')
    .icon('Mexican', 'bower_components/livery-flags/flags/4x3/mx.svg')
    .icon('Mexico', 'bower_components/livery-flags/flags/4x3/mx.svg')
    .icon('Monaco', 'bower_components/livery-flags/flags/4x3/mc.svg')
    .icon('Monegasque', 'bower_components/livery-flags/flags/4x3/mc.svg')
    .icon('Moroccan', 'bower_components/livery-flags/flags/4x3/ma.svg')
    .icon('Morocco', 'bower_components/livery-flags/flags/4x3/ma.svg')
    .icon('Netherlands', 'bower_components/livery-flags/flags/4x3/nl.svg')
    .icon('New Zealand', 'bower_components/livery-flags/flags/4x3/nz.svg')
    .icon('New Zealander', 'bower_components/livery-flags/flags/4x3/nz.svg')
    .icon('Pacific', 'bower_components/livery-flags/flags/4x3/jp.svg')
    .icon('Pescara', 'bower_components/livery-flags/flags/4x3/it.svg')
    .icon('Polish', 'bower_components/livery-flags/flags/4x3/pl.svg')
    .icon('Portugal', 'bower_components/livery-flags/flags/4x3/pt.svg')
    .icon('Portuguese', 'bower_components/livery-flags/flags/4x3/pt.svg')
    .icon('Rhodesian', 'bower_components/livery-flags/flags/4x3/zw.svg')
    .icon('Russia', 'bower_components/livery-flags/flags/4x3/ru.svg')
    .icon('Russian', 'bower_components/livery-flags/flags/4x3/ru.svg')
    .icon('San Marino', 'bower_components/livery-flags/flags/4x3/sm.svg')
    .icon('Singapore', 'bower_components/livery-flags/flags/4x3/sg.svg')
    .icon('South Africa', 'bower_components/livery-flags/flags/4x3/za.svg')
    .icon('South African', 'bower_components/livery-flags/flags/4x3/za.svg')
    .icon('Spain', 'bower_components/livery-flags/flags/4x3/es.svg')
    .icon('Spanish', 'bower_components/livery-flags/flags/4x3/es.svg')
    .icon('Sweden', 'bower_components/livery-flags/flags/4x3/se.svg')
    .icon('Swedish', 'bower_components/livery-flags/flags/4x3/se.svg')
    .icon('Swiss', 'bower_components/livery-flags/flags/4x3/ch.svg')
    .icon('Switzerland', 'bower_components/livery-flags/flags/4x3/ch.svg')
    .icon('Thai', 'bower_components/livery-flags/flags/4x3/th.svg')
    .icon('Turkey', 'bower_components/livery-flags/flags/4x3/tr.svg')
    .icon('Turkish', 'bower_components/livery-flags/flags/4x3/tr.svg')
    .icon('UAE', 'bower_components/livery-flags/flags/4x3/ae.svg')
    .icon('UK', 'bower_components/livery-flags/flags/4x3/gb.svg')
    .icon('United Arab Emirates', 'bower_components/livery-flags/flags/4x3/ae.svg')
    .icon('United States West', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('United States', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('Uruguayan', 'bower_components/livery-flags/flags/4x3/uy.svg')
    .icon('USA', 'bower_components/livery-flags/flags/4x3/us.svg')
    .icon('Venezuelan', 'bower_components/livery-flags/flags/4x3/ve.svg');
}

})();