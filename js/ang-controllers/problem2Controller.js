'use strict'

myApp.controller('problem2Controller',['$scope',function($scope){

    $scope.l1 = 'a';
    $scope.n1 = 1;
    $scope.l2 = 'b';
    $scope.n2 = 2;
    $scope.l3 = 'c';
    $scope.n3 = 3;


    $scope.map = function(hash, fn) {
        var self = hash;
        Object.keys(self).forEach(function(key) {
            var newKeyValue = fn(key, self[key]);
            self[newKeyValue[0]] = newKeyValue[1];
            delete self[key];
        });

        return self;
    };

    $scope.execProblem2 = function(){
        var myHash = {}
        myHash[$scope.l1] = $scope.n1;
        myHash[$scope.l2] = $scope.n2;
        myHash[$scope.l3] = $scope.n3;


        $scope.problemResult2 =  JSON.stringify(
            $scope.map(myHash,function(key, value){
                return [key.toUpperCase(), parseFloat(value) + 1];
            })
        );

    }

}]);