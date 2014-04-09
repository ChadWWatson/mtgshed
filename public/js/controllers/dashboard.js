'use strict';

angular.module('mtgshed.dashboard').controller('DashboardController', ['$scope', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', 'Inventory', function ($scope, $stateParams, $location, Global, SetLists, fileReader, Inventory) {
	$scope.global = Global;
	$scope.isViewingList = true;
	$scope.boxes = [];

	$scope.viewSet = function(box) {
		$location.path('dashboard/inventory/' + box._id);
	};

	$scope.showCreateBox = function() {
		$scope.isViewingList = false;
	};
	$scope.createBox = function() {
		var box = new Inventory({
			name: this.name
		});
		box.$save(function(response) {
			$scope.isViewingList = true;
			$scope.boxes.push(response);
		});
	};

	$scope.init = function () {
		Inventory.byUser({ userId: $scope.global.user._id},function(boxes) {
			$scope.boxes = boxes;
		});
	};

	$scope.init();
}]);
