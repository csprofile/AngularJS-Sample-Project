'use strict'

myApp.controller('problem3Controller',['$scope',function($scope){
    $scope.grid = new Array(3);

    for(var x=0 ; x< $scope.grid.length ; x++){
        $scope.grid[x] = new Array(3);
        $scope.grid[x][0] = 0;
        $scope.grid[x][1] = 0;
        $scope.grid[x][2] = 0;
    }
    $scope.grid[2][2] = 1;


    $scope.findIt = function(arr) {
        for(var x = arr.length - 1; x >= 0 ;  x--){
            for(var y = 0 ; y < arr[x].length ; y++){
                if(arr[x][y] == 1){
                    var output = [y, arr.length - (x + 1)];
                    break;
                }
            }

            if(output)
                break;
        }

        return output;
    }

    $scope.execProblem3 = function(){
        $scope.problemResult3 = $scope.findIt($scope.grid);
    }
}]);