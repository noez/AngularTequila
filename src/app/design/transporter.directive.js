(function () {
    "use strict";

    function tqTransporter($compile, $timeout) {
        return {
            restrict: 'A',
            scope: {
                source: '='
            },
            link: function (scope, element, attrs) {
                var isInitiaLized = false,
                    elImage = element,
                    container = $('.image-preview');
                elImage.on('load', function () {
                    $timeout(function(){
                        html2canvas(elImage.parent(), {

                            onrendered: function(canvas) {
                                document.body.appendChild(canvas);
                                console.log(canvas.toDataURL());
                            }
                        });
                    },2000);
                });

                scope.$watch("source", function (newValue) {

                    console.log(elImage.parent());
                    if(!_.isUndefined(newValue.file)){
                        elImage.attr('src', newValue.file);

                        /*;*/

                    }
                   /* */
                })
            }

        }
    }


    angular.module('app.design')
        .directive('tqTransporter', tqTransporter);

    tqTransporter.$inject = ['$compile', '$timeout'];

}());