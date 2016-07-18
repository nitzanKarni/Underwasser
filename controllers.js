var app = angular.module("myApp", []);

app.controller("myCtrl", ['$scope', function ($scope) {
    $scope.product = {
        serial: "273",
        name: "leg bracelet",
        price: 110,
        supplier: "gaby's"
    };
}]);

app.directive("product", function () {
    return {
        templateUrl: "prodDir.html",
        restrict: "E"
    }
})
