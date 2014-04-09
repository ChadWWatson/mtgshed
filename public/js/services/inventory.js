'use strict';

//Articles service used for articles REST endpoint
angular.module('mtgshed.dashboard').factory('Inventory', ['$resource', function($resource) {
	return $resource('api/inventory/:id', {
		id: '@_id'
	}, {
		update: {
			method: 'PUT'
		},
		byUser: {
			action: 'GET',
			url: 'api/inventory/user/:userId',
			isArray: true
		}
	});
}]);
