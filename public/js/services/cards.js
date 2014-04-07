'use strict';

//Articles service used for articles REST endpoint
angular.module('mtgshed.services').factory('Cards', ['$resource', function($resource) {
    return $resource('api/cards/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
        byName: {
        	action: 'GET',
        	url: 'api/cards/name/:name',
        	isArray: true
        }
    });
}]);
