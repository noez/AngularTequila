(function() {
	'use strict';

	angular
		.module('app.type')
		.controller('TypeController', TypeController);

	TypeController.$inject = ['types'];

	/* @ngInject */
	function TypeController(types) {
		var vm = this;
		vm.title = 'TypeController';
		vm.types = [];
		activate();

		////////////////

		function activate() {
			console.log(vm.title);
			return getTypes();
		}

		function getTypes() {
			types
				.getAll()
				.then(function then(data) {
					vm.types = data;
				})
				.catch(function error(err) {
					console.log(err);
				});
		}
	}
})();
