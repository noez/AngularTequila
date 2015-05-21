(function() {
    'use strict';

    angular
        .module('app.design')
        .controller('DesignController', DesignController);

    DesignController.$inject = [];

    /* @ngInject */
    function DesignController() {
        var vm = this;
        vm.title = 'DesignController';

        activate();

        ////////////////

        function activate() {
        	console.log(vm.title);
        }
    }
})();