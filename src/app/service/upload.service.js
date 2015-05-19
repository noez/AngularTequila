(function() {
    'use strict';

    angular
        .module('app.service')
        .factory('uploader', uploader);

    uploader.$inject = ['$http', '$q', 'baseUrl'];

    /* @ngInject */
    function uploader($http, $q, baseUrl) {
        
        var service = {
            file: file
        };

        return service;

        ////////////////

        function file (fd) {
        	var defered = $q.defer(),
        			promise = defered.promise;

        	$http.post(baseUrl + 'customimages/', fd, {
        		headers: { 
        			'Content-Type': undefined, 
      				"Authorization": "Token d02221536dfccb4d55fd245b06a04348dff59108" 
      			},
      			transformRequest: angular.identify
        	})
        		.success(function (data) {
        			defered.resolve(data);
        		})
        		.error(function (data) {
        			defered.reject(data);
        		});

        		return promise;
        }
    }
})();