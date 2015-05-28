(function () {
    'use strict';

    angular
        .module('app.design')
        .controller('DesignController', DesignController);

    DesignController.$inject = ['$scope', '$state', '$stateParams', '$sessionStorage', 'designNetwork'];

    /* @ngInject */
    function DesignController($scope, $state, $stateParams, $sessionStorage, designNetwork) {

        $scope.title = 'DesignController';

        $scope.storage = $sessionStorage;

        $scope.design = designNetwork;

        $scope.imageLoaded = designNetwork.image;

        activate();

        ////////////////

        function activate() {

        }

        function orderExist() {
            return _.has($scope.storage, 'order');
        }
    }
})();
