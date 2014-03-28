'use strict';

//Articles service used for articles REST endpoint
angular.module('mtgshed.articles').factory('Articles', ['$resource', function($resource) {
    return $resource('articles/:articleId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
