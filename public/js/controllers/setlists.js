'use strict';

angular.module('mtgshed.setlists').controller('SetListsController', ['$scope', '$stateParams', '$location', 'Global', 'SetLists', function ($scope, $stateParams, $location, Global, SetLists) {
    $scope.global = Global;

    $scope.find = function() {
        SetLists.query(function(sets) {
            console.log(sets);
            $scope.sets = sets;
        });
    };

    $scope.findOne = function() {
        SetLists.get({
            id: $stateParams.id
        }, function(setList) {
            $scope.setList = setList;
        });
    };
}]);
