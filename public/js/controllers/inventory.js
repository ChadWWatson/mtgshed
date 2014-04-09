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
			console.log(box);
		});
	};

	$scope.selectCard = function(card) {
		$scope.currentCard = card;
	};


	$scope.addToBox = function() {
		$scope.box.cards.push($scope.currentCard);
		console.log($scope.box.cards);
	};

	$scope.$watch('currentCard', function(newValue) {
		if (newValue !== {}) {
			console.log(newValue);
		}
	});

	$scope.$watch('cardSearchValue', function(newValue) {
		if (newValue.length > 0) {
			$scope.isLoading = true;
			Cards.byName({ name: newValue},function(cards) {
				if ( newValue === $scope.cardSearchValue) {
					$scope.isLoading = false;
					$scope.serverCards = cards;
				}
			});
		}
	});
}]);
