'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('stories/discovery.json').success(function(data) {
    $scope.years = data;
  });

  $scope.orderProp = 'year';
});
