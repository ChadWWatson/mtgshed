'use strict';

angular.module('mtgshed.dashboard').controller('DashboardCardsController', ['$scope', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', function ($scope, $stateParams, $location, Global, SetLists, fileReader) {
    $scope.global = Global;

}]);
