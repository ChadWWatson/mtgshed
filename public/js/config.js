'use strict';

//Setting up route
angular.module('mtgshed').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin/index.html'
    })
      .state('list sets', {
        url: '/admin/sets/manage',
        templateUrl: 'views/admin/set-update.html'
    })
      .state('create article', {
        url: '/articles/create',
        templateUrl: 'views/articles/create.html'
    })
      .state('edit article', {
        url: '/articles/:articleId/edit',
        templateUrl: 'views/articles/edit.html'
    })
      .state('article by id', {
        url: '/articles/:articleId',
        templateUrl: 'views/articles/view.html'
    })
      .state('dashboard sets', {
        url: '/dashboard/sets',
        templateUrl: 'views/dashboard/sets.html'
    })
      .state('dashboard cards', {
        url: '/dashboard/my-cards',
        templateUrl: 'views/dashboard/cards.html'
    })
      .state('dashboard decks', {
        url: '/dashboard/decks',
        templateUrl: 'views/dashboard/decks.html'
    })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/index.html'
    })
      .state('edit inventory', {
        url: '/dashboard/inventory/:inventoryId',
        templateUrl: 'views/inventory/index.html'
    })
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
    });
}
]);

//Setting HTML5 Location Mode
angular.module('mtgshed').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);
