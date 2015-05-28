(function() {
    'use strict';

    angular
        .module('app.service')
        .factory('order', order);

    order.$inject = ['$http','$q','baseUrl'];

    /* @ngInject */
    function order($http, $q, baseUrl) {

        var service = {
            sendNewOrder: sendNewOrder
        };

        return service;

        ////////////////

        function sendNewOrder(newOrder) {
            var defered = $q.defer(),
                promise = defered.promise;

            $http.post('URL_VA_AQUI', { order : newOrder
            })
                .success(function(data) {
                    defered.resolve(data);
                })
                .error(function(data) {
                    defered.reject(data);
                });

            return promise;
        }
    }
})();