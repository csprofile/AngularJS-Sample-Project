'use strict'

myApp.controller('problem4Controller',['$scope',function($scope){
    var stringsCtrl = 0;
    var strings = new Array();
    strings[0] = {comp:[], msg:'Ok, first try 2+2'};
    strings[1] =  {comp:[2,'+',2], msg:'If 2+2 = 5, 2*2 must to be 5, right? Can you try it too?'};
    strings[2] =  {comp:[2,'*',2], msg:'And what about 4+4? Maybe 10?'};
    strings[3] =  {comp:[4,'+',4], msg:'Try 10/2...'};
    strings[4] =  {comp:[10,'/',2], msg:'Excellent, 4! And 2*4...? Yes, right! 10!'};
    strings[5] =  {comp:[2,'*',4], msg:'Now you can perform any calculation using this method, but remember, it was discovered yesterday, probably have some errors...'};

    $scope.num1 = 2;
    $scope.num2 = 2;
    $scope.op = '+';
    $scope.message = strings[stringsCtrl].msg;

    $scope.calc = function(a,b,op){
        var result;

        switch(op){
            case '+':
                result = a+b+((a+b)*0.25);
                break;
            case '-':
                result = a===b ? 0 : a-b-b/2;
                break;
            case '*':
                result =  (a*b)+((a*b)*0.25);
                break;
            case '/':
                result = a===b ? 1 : (a/b)-((a/b)*0.20);
                break;
        }
        $scope.nextMsg(a,b,op);
        return result;
    };

    $scope.execProblem4 = function(){
        $scope.problemResult4 = '';
        var result = $scope.calc($scope.num1,$scope.num2,$scope.op);

        $scope.problemResult4 = $scope.num1 + $scope.op + $scope.num2  + '=' + result;

    }

    $scope.nextMsg = function(a,b,op){
        var stringsRef = stringsCtrl +1;
        if(stringsRef < strings.length){
            if(a == strings[stringsRef].comp[0] && b ==  strings[stringsRef].comp[2] &&  op == strings[stringsRef].comp[1]){
                $scope.message = strings[stringsRef].msg;
                stringsCtrl++;
            }
        }
    }

}]);