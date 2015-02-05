'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('TestListController', ['$scope', '$localStorage', '$rootScope', '$route', '$location',
    function($scope, $localStorage, $rootScope, $route, $location) {

        $rootScope.title = 'Список записей';
        $scope.items = [];
        $scope.limit = 10;
        $scope.$storage = $localStorage.$default({
            items: [
                {
                    name:'test 1',
                    text:'test test test 1 test test test test'
                },
                {
                    name:'test 2',
                    text:'test test 2 test test test test test'
                },
                {
                    name:'test 3',
                    text:'test test test test test 3 test test'
                }
            ]
        });

        $scope.loadMore = function() {
            $scope.items = $localStorage.items.slice(0, $scope.limit);
            $scope.limit += $scope.limit;
        };

        $scope.addItem = function(){
            var len =  $localStorage.items.length;
            $localStorage.items.push({
                name:'Запись ' +len,
                text:'Здесь ваш текст...'
            });

            $location.url('/' + len +'/edit');

        };

        $scope.removeItem = function(index){
            $localStorage.items.splice(index, 1);
            $scope.items = $localStorage.items.slice(0, $scope.limit);
        };

        $scope.loadMore();
    }
]);

testControllers.controller('TestItemViewController', ['$scope', '$routeParams', '$localStorage', '$rootScope',
    function($scope, $routeParams, $localStorage, $rootScope) {

        $scope.data = $localStorage.items[$routeParams.itemId];
        $rootScope.title = $scope.data.name;

    }
]);

testControllers.controller('TestItemEditController', ['$scope', '$routeParams', '$localStorage', '$rootScope',
    function($scope, $routeParams, $localStorage, $rootScope) {

        $scope.data = $localStorage.items[$routeParams.itemId];
        $rootScope.title = 'Редактирование "' + $scope.data.name +'"';

    }
]);
