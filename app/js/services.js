'use strict';

/* Services */

var testServices = angular.module('testServices', ['ngStorage']);

testServices.factory('Item', ['$localStorage',
  function($localStorage){
    console.log($localStorage);
    /*return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });*/
    return 1;
  }]);
