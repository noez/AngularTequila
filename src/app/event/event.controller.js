(function() {
	'use strict';

	angular
	.module('app.event')
	.controller('EventController', EventController);

	EventController.$inject = ['$scope','events','templates', '$timeout'];

	/* @ngInject */
	function EventController($scope, events, templates,$timeout) {

		$scope.events = [];
		$scope.getTemplates = getTemplates;

		$scope.templates = [];
		$scope.carousel;
		
		activate();

		////////////////

		function activate() {
			console.log($scope.title);
			return getEvents();
		}

		function getEvents () {
			events
			.getAll()
			.then(function (data){
				$scope.events = data;
				$scope.event = data[1];
				$scope.getTemplates($scope.event.id);
			})
			.catch(function (error) {
				console.log(error);
			});
		}

		function getTemplates (eventId) {
			templates
			.getById(eventId)
			.then(function (data) {
				$scope.templates = data;
			})
			.catch(function (err) {
				console.log(err);
			});
		}
	}
})();
