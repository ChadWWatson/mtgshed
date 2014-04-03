'use strict';

//Articles service used for articles REST endpoint
angular.module('mtgshed.setlists').factory('SetLists', ['$resource', function($resource) {
    return $resource('api/sets/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
