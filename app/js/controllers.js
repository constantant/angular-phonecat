'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('TestListController', ['$scope', '$localStorage', '$rootScope', '$route', '$location', '$filter',
    function($scope, $localStorage, $rootScope, $route, $location, $filter) {

        $rootScope.title = 'Список записей';
        $scope.items = [];
        $scope.itemsInSearch = 0;
        $scope.query = '';
        $scope.limit = 10;
        $scope.perPage = 10;
        $scope.$storage = $localStorage.$default({items:[]});

        $scope.loadMore = function() {
            setItems($scope.limit);
            $scope.limit += $scope.perPage;
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
            setItems($scope.items.length);
        };

        $scope.filter = function(query){
            setItems($scope.perPage);
        };

        $scope.loadMore();

        function setItems(limit){
            var items = $filter('filter')($localStorage.items, $scope.query);
            $scope.itemsInSearch = items.length;
            $scope.items = items.slice(0, limit);
        }
    }
]);

testControllers.controller('TestItemViewController', ['$scope', '$routeParams', '$localStorage', '$rootScope', '$location',
    function($scope, $routeParams, $localStorage, $rootScope, $location) {

        $scope.index = $routeParams.itemId;
        $scope.data = $localStorage.items[$scope.index];
        $rootScope.title = $scope.data.name;

        $scope.removeItem = function(){
            $localStorage.items.splice($scope.index, 1);
            $location.url('/');
        };

    }
]);

testControllers.controller('TestItemEditController', ['$scope', '$routeParams', '$localStorage', '$rootScope', '$location',
    function($scope, $routeParams, $localStorage, $rootScope, $location) {

        $scope.index = $routeParams.itemId;
        $scope.data = $localStorage.items[$scope.index];
        $rootScope.title = 'Редактирование "' + $scope.data.name +'"';

        $scope.removeItem = function(){
            $localStorage.items.splice($scope.index, 1);
            $location.url('/');
        };

    }
]);
