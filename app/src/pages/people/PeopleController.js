(function(){

  angular
       .module('peopleModule')
       .controller('PeopleController', ['$scope', 'People', function($scope, People) {
         var self = this;
         self.showToast = showToast;
         self.getPerson = getPerson;
           $scope.people = People.query();
           $scope.orderProp = 'firstName';


           function showToast($event){
             console.log($event);
           }


           function getPerson(personId) {
             console.log(People.get({id:personId}));
           }
}]);

})();
