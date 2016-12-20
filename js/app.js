'use strict'

// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

// ROUTES
myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: '/partials/problem1.htm',
        controller: 'problem1Controller'
    })
    .when('/problem1', {
        templateUrl: '/partials/problem1.htm',
        controller: 'problem1Controller'
    })
    .when('/problem2', {
        templateUrl: '/partials/problem2.htm',
        controller: 'problem2Controller'
    })
    .when('/problem3', {
        templateUrl: '/partials/problem3.htm',
        controller: 'problem3Controller'
    })
    .when('/problem4', {
        templateUrl: '/partials/problem4.htm',
        controller: 'problem4Controller'
    })
    
});