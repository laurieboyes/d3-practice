'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart1', {templateUrl: 'partials/chart1.html'});
  $routeProvider.when('/chart2', {templateUrl: 'partials/chart2.html'});
  $routeProvider.when('/chart3', {templateUrl: 'partials/chart3.html'});
  $routeProvider.otherwise({redirectTo: '/chart1'});
}]);
