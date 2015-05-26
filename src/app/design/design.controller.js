(function() {
	'use strict';

	angular
		.module('app.design')
		.controller('DesignController', DesignController);

	DesignController.$inject = ['$scope'];

	/* @ngInject */
	function DesignController($scope) {
		$scope.title = 'DesignController';

		activate();

		////////////////

		function activate() {
			console.log($scope.title);
		}
	}
})();
