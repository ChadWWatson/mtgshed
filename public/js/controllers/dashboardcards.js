'use strict';

angular.module('mtgshed.dashboard').controller('DashboardCardsController', ['$scope', '$stateParams', '$location', 'Global', function ($scope, $stateParams, $location, Global) {
	$scope.global = Global;

}]);
