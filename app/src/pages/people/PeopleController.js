(function(){

  angular
       .module('peopleModule')
       .controller('PeopleController', ['$scope', 'People', function($scope, People) {
           $scope.people = People.query();
           $scope.orderProp = 'age';
}]);

})();
