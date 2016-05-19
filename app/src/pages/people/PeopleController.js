(function(){

  angular
       .module('peopleModule')
       .controller('PeopleController', ['$scope', 'People', function($scope, People) {
         var self = this;

         self.deletePerson = deletePerson;
         self.editPerson = editPerson;
         self.savePerson = savePerson;
         self.showAddPerson = showAddPerson;
         self.addPerson = addPerson;
         self.cancelEdit = cancelEdit;

         self.isEditFormHidden = isEditFormHidden;
         self.showAddPerson = showAddPerson;
         self.people = People.query();


         self.orderProp = 'firstName';


           function deletePerson($event, personId){
             People.delete({ id: personId }, function() {
               console.log('Reloading data...');
               self.people = People.query();
             });
           }


           function editPerson(person) {
             console.log("Edit " + person.firstName + " " + person.lastName);
             //self.person = People.get({id:personId});
             person.editMode = true;
           }

           function cancelEdit(person){
             pId = person.id;
             person.editMode = false;
             person = People.get({ id: pId});
           }

           function savePerson(person){
             People.update(person);
             person.editMode = false;
             console.log("Trying to save " + person);
           }

           function addPerson(person){

             People.update(person,function(){
               showAddPerson(false);
               self.people = People.query();
             });
             console.log("Trying to save " + person);
           }

           function showAddPerson(isDisplayed){
             console.log("Ellloooo");
             self.editFormHidden = isDisplayed;
           }

           function isEditFormHidden(){
             return self.editFormHidden;
           }


}]);

})();
