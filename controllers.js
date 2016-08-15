"use strict";

var app = angular.module("myApp", ['ngRoute']);

app.controller("mainCtrl", ['$scope', function ($scope) {
    var b = ["mos","asd","qwe"];
    $scope.a = [];
    $scope.a = b;
    $scope.s = "asdasdsad";
    $scope.activate = function(num) {
        
        for ( var i=0; i < $scope.a.length; i++ ) {
            $scope.a[i] = '';
        }
        
        $scope.a[num] = "active";
    };
}]);

app.controller("myCtrl", ['$scope', function ($scope) {
    $scope.product = {
        serial: "273",
        name: "leg bracelet",
        price: 110,
        supplier: "gaby's",
        details: "Somthing really smooth that sells"
        
    };
    
    $scope.try = "test"
}]);

app.directive("product", function () {
    return {
        restrict: "E",
        scope: {
            product: "=info"
        },
        templateUrl: "prodDir.html",
    }
})

app.config(function($routeProvider) {
    $routeProvider.when('/',
    {
        templateUrl: "Products.html",
        controller: "myCtrl"
    }).when('/addProduct', 
    {
        template: "<h3> There goes you add the product </h3>"
    }).otherwise(
    {
        template: "<h2>Heck NO!!! </h3>"
    })
})
