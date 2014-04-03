'use strict';

angular.module('mtgshed.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Admin',
        'link': 'admin'
    }];

    $scope.isCollapsed = false;
}]);
