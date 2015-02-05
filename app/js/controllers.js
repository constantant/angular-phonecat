'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('TestListController', ['$scope', '$localStorage', '$rootScope', '$route',
    function($scope, $localStorage, $rootScope, $route) {

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
        $rootScope.title = 'Список записей';

        $scope.addItem = function(){
            var len =  $localStorage.items.length;
            $localStorage.items.push({
                name:'Запись ' +len,
                text:'Здесь ваш текст...'
            });

            $route.updateParams(len);

        };

        $scope.removeItem = function(index){
            $localStorage.items.splice(index, 1);
        };
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
