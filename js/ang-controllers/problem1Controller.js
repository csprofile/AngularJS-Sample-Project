'use strict'

myApp.controller('problem1Controller',['$scope','$timeout',function($scope,$timeout){
    $scope.talkStr = "Hello";
    $scope.beforeStr = "I'm first!"

    var AClass = function() {
        var self = this;

        this.talk = function(talkFn) {
            talkFn();
        };

        this.before = function(afterFnName, beforeFn) {
            self[afterFnName] = (function() {
                var cachedFn = self[afterFnName];

                return function() {
                    beforeFn();
                    cachedFn.apply(this, arguments);
                };

            }());
        }
    }


    $scope.execProblem1 = function(str1, str2){
        $scope.problemResult1 = '';


        var a = new AClass();
        a.before('talk', function() {
            $timeout(function() {
                $scope.problemResult1 = str2;
            }, 0);
        });


        $scope.problemResult1 = a.talk(function(){
            $timeout(function() {
                $scope.problemResult1 += ' ' + str1; //"$scope.problemResult1 +=" to concatenate text filled by function "before"!
            }, 0);
        });

    }
}]);