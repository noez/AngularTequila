(function() {
    'use strict';

    angular
        .module('app.version')
        .controller('VersionController', VersionController);

    VersionController.$inject = [];

    /* @ngInject */
    function VersionController() {
        var vm = this;
        vm.title = 'VersionController';

        activate();

        ////////////////

        function activate() {
        	console.log(vm.title);
        }
    }
})();