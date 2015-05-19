(function() {
    'use strict';

    angular
        .module('app.upload')
        .controller('UploadController', UploadController);

    UploadController.$inject = ['$scope','$rootScope','uploader','messages'];

    /* @ngInject */
    function UploadController($scope,$rootScope, uploader, messages) {
        
        $scope.upload = upload;
        $scope.image = {};

        $scope.messages = messages;
        activate();

        ////////////////

        function activate() {
        	console.log('Running UploadController..');
        }

        function upload () {
        	var fd = new FormData();
        	
        	angular.forEach($scope.files, function(file) {
        		fd.append('file' , file);
        	});

        	uploader.file(fd)
        		.then(function (res) {
        			$scope.image = res;
        			$scope.messages.addImage($scope.image);
                    $rootScope.$broadcast('upload.complete');
        		})
        		.catch(function (err){
        			console.log(err);
        		});
        }


    }
})();