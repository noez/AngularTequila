(function() {
    'use strict';

    angular
        .module('app.event')
        .controller('EventController', EventController);

    EventController.$inject = [];

    /* @ngInject */
    function EventController() {
        var vm = this;
        vm.title = 'EventController';

        activate();

        ////////////////

        function activate() {
        	console.log(vm.title);
        }
    }
})();