(function() {
	'use strict';

	angular
		.module('app.type')
		.controller('TypeController', TypeController);

	TypeController.$inject = [];

	/* @ngInject */
	function TypeController() {
		var vm = this;
		vm.title = 'TypeController';

		activate();

		////////////////

		function activate() {
			console.log(vm.title);
		}
	}
})();
