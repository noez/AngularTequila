(function() {
	'use strict';

	angular
		.module('app.version')
		.controller('VersionController', VersionController);

	VersionController.$inject = ['$state', '$stateParams', 'versions'];

	/* @ngInject */
	function VersionController($state, $stateParams, versions) {
		var vm = this;
		vm.title = 'VersionController';

		vm.versions = [];
		vm.version = null;
		vm.box = 1;

		var typeid = $stateParams.typeid;

		activate();

		////////////////

		function activate() {
			console.log(vm.title);
			if (typeid) {
				return getVersions();
			};
		}

		function getVersions() {
			versions
				.allVersions(typeid)
				.then(function(versions) {
					vm.versions = versions;
					vm.version = vm.versions[0];
				})
				.catch(function(err) {
					console.log(err);
				});
		}
	}
})();
