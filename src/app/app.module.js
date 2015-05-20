(function () {
  'use strict';

  angular
      .module('app', [
        'app.core',
        'app.service',
        'app.layout',
        'app.upload',
        'app.label',
        'app.filter',
        'app.text'
      ])
      .config(config);

  config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

  function config ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/'
        });
  }
})();
