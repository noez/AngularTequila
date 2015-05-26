(function () {
    'use strict';

    angular
        .module('app.event')
        .directive('jCarousel',['$compile', '$timeout', function ($compile, $timeout) {
            var jCarousel = null;
            return {
                scope : { source: '='},
                link: function (scope, element, attr) {
                    var
                        isInitialized = false,
                        stage = element;

                    jCarousel = stage.children('.jcarousel');

                    scope.$watch("source", function (newValue) {
                        console.log(typeof newValue);
                        if(isInitialized){
                            jCarousel.jcarousel('reload');
                        }else if(newValue){
                            $timeout(function () {
                                jCarousel.jcarousel({});
                            },0);
                            isInitialized = true;
                        }
                    });
                    
                },
                controller: ['$scope','$attrs', function ($scope, $attrs) {

                    if($attrs.jCarousel) $scope.$parent[$attrs.jCarousel] = this;
                    console.log($attrs.jCarousel);
                    console.log($scope.$parent[$attrs.jCarousel]);
                    this.next = function () {
                        jCarousel.jcarousel('scroll', '+=1');
                    };

                    this.prev = function () {
                        jCarousel.jcarousel('scroll', '-=1');
                    }

                }]
            }
        }]);
})();