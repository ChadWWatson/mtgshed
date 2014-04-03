'use strict';

angular.module('mtgshed.admin').controller('AdminController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Set Lists',
        'link': '/admin/setlists'
    }];

    $scope.isCollapsed = false;
}]);
