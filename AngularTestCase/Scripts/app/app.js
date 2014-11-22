
var app = angular.module('app', [

]);

// Execute bootstrapping code and any dependencies.
app.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);

app.directive("show", function () {
    return {
        link: function (scope, element, attributes) {
            scope.$watch(attributes.show, function (value) {
                element.css('display', value ? '' : 'none');
            });
        }
    };
});