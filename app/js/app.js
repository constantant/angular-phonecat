'use strict';

/* App Module */

var testApp = angular.module('testApp', [
  'ngRoute',
  'ngStorage',

  'testControllers'
]);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'template/list.html',
        controller: 'TestListController'
      }).
      when('/:itemId', {
        templateUrl: 'template/item-view.html',
        controller: 'TestItemViewController'
      }).
      when('/:itemId/edit', {
        templateUrl: 'template/item-edit.html',
        controller: 'TestItemEditController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
