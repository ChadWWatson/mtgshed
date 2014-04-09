'use strict';

angular.module('mtgshed.dashboard').controller('InventoryController', ['$scope', '$http', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', 'Inventory', 'Cards', function ($scope, $http, $stateParams, $location, Global, SetLists, fileReader, Inventory, Cards) {
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
		
		window.scrollTo(0,0);
	};


	$scope.addToBox = function() {
		$http.post('/api/inventory/' + $stateParams.inventoryId + '/cards',{cardId: $scope.currentCard._id})
			.success(function(card){
				if(card !== null) {
					$scope.box.cards.push(angular.copy($scope.currentCard));
				}
			}).
			error(function(error) {
				console.log(error);
			});
	};

	function dataRequest() {
		Cards
			.byName({ name: $scope.searchValue},function(cards) {
				if ( $scope.searchValue === $scope.cardSearchValue) {
					$scope.isLoading = false;
					$scope.serverCards = cards;
				}
			});
	}

	function delayRequest() {
		if(delayRequest.timeout) {
			clearTimeout(delayRequest.timeout);
		}
		delayRequest.timeout = setTimeout(function() {
				dataRequest();
			}, 300); // 200ms delay
	}

	$scope.$watch('cardSearchValue', function(newValue) {
		if (newValue.length > 1) {
			$scope.searchValue = newValue;
			$scope.isLoading = true;
			$scope.serverCards = [];
			delayRequest();
		}
	});
}]);
