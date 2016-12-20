'use strict'

myApp.controller('HeaderController',['$scope','$location','$timeout',function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);