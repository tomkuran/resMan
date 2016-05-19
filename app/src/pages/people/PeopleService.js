(function(){
  'use strict';

  angular.module('peopleModule')
         .factory('People', ['$resource', function ($resource) {
           return $resource('http://127.0.0.1:8090/v1/persons/:id', {}, {
              query: {method:'GET', isArray:true},
              post: {method:'POST'},
              update: {method:'PUT'},
              remove: {method:'DELETE'}
            });
          }]);
        })();
