'use strict';

angular.module('mtgshed.dashboard').controller('InventoryController', ['$scope', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', 'Inventory', 'Cards', function ($scope, $stateParams, $location, Global, SetLists, fileReader, Inventory, Cards) {
    $scope.global = Global;
    $scope.isViewingList = true;
    $scope.box = {};
    $scope.currentCard = null;
    $scope.serverCards = [];
    $scope.cardSearchValue = '';    
    $scope.isLoading = false;

    $scope.findOne = function() {
        Inventory.get({
            id: $stateParams.inventoryId
        }, function(box) {
            $scope.box = box;
        });
    };

    $scope.selectCard = function(card) {
        $scope.currentCard = card;
    };

    $scope.$watch("currentCard", function(newValue, oldValue) {
        if (newValue !== {}) {
            console.log(newValue);
        }
    });

    $scope.$watch("cardSearchValue", function(newValue, oldValue) {
        if (newValue.length > 0) {
            $scope.isLoading = true;
            Cards.byName({ name: newValue},function(cards) {
                if ( newValue == $scope.cardSearchValue) {
                    $scope.isLoading = false;
                    $scope.serverCards = cards;
                }
            });
        }
    });
}]);
