app.controller("AppController", ['$scope', '$http', function($scope, $http) {

        $scope.visible = true;
        $scope.name = "";

        $scope.$watch("name", function(newValue, oldValue) {
            if ($scope.name.length > 0) {
                $scope.greeting = "Greetings " + $scope.name;
            }
        });

        $scope.toggle = function() {
            $scope.visible = !$scope.visible;
        };

        $scope.GetData = function () {
            var promise = $http.get('api/Values/Get');
            promise.then(function(result) {
                $scope.values = result.data;
            });
        };
       
    }
]);