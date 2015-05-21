(function () {
  'use strict';

  angular
      .module('app', [
        'app.core',
        'app.service',
        'app.layout',
        'app.timeline',
        'app.type',
        'app.version',
        'app.event',
        'app.design',
        'app.upload',
        'app.label',
        'app.filter',
        'app.text',
        'app.summary'
      ])
      .config(config);

  config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

  function config ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/home/home.html',
          controller : function () {
            alert('home');
          }
        });
    $urlRouterProvider.otherwise('/timeline/type');
  }
})();
