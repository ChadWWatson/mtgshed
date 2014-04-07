'use strict';

angular.module('mtgshed.dashboard').controller('DashboardSetsController', ['$scope', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', function ($scope, $stateParams, $location, Global, SetLists, fileReader) {
    $scope.global = Global;

}]);
