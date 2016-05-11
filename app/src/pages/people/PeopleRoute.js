(function(){
  'use strict';

  angular.module('peopleModule')
         .config(['$routeProvider', '$locationProvider', PeopleRoutes]);

  function PeopleRoutes($routeProvider, $locationProvider, $q){
    $routeProvider
      .when('/people', {
        templateUrl: '/src/pages/people/view/content.html',
        controller: 'PeopleController',
        controllerAs: 'page'
      });
  }

})();
