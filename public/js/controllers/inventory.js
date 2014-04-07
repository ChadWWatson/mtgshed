'use strict';

angular.module('mtgshed.dashboard').controller('InventoryController', ['$scope', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', 'Inventory', 'Cards', function ($scope, $stateParams, $location, Global, SetLists, fileReader, Inventory, Cards) {
    $scope.global = Global;
    $scope.isViewingList = true;
    $scope.box = {};
    $scope.serverCards = [];
    $scope.cardSearchValue = '';    
    
    $scope.findOne = function() {
        Inventory.get({
            id: $stateParams.inventoryId
        }, function(box) {
            $scope.box = box;
        });
    };

    $scope.$watch("cardSearchValue", function(newValue, oldValue) {
        if (newValue.length > 0) {
            Cards.byName({ name: newValue},function(cards) {
                if ( newValue == $scope.cardSearchValue) {
                    $scope.serverCards = cards;
                }
            });
        }
    });
}]);
