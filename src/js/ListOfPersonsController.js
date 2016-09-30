/*
* ListOfPersonsController.js
*
* Controller  ListOfPersonsCont roller
*/
(function(global, $, ng    )   {

	'use strict';
  global.ListOfPersons.controller('ListOfPersonsController', ['$scope', '$timeout','PersonsService','$filter',  function($scope, $timeout,PersonsService,$filter) {
      $scope.persons = [];        // Array of to-do items
      $scope.errorMsg = false;  // Error message

      $scope.person={};

			$scope.save = function() {

				PersonsService.add($scope.person).then(
					function(response) {
						$scope.person=defaultPersonModel();
						$scope.persons = response.data.persons;
					},
					function(error) {
						$scope.errorMsg = error.error;
					}
				);

			};


			$scope.updateState=function(person){

					// change the state
					var state=person.deleted;
					if(state===true){
						state=false;
					}else{
						state=true;
					}
					//person.deleted=state;
					PersonsService.updateState(person.id,state).then(
						function(response) {
							$scope.person=defaultPersonModel();
							$scope.persons = response.data.persons;
						},
						function(error) {
							$scope.errorMsg = error.error;
						}
					);

			};

      $scope.getPersons=function(){

	        PersonsService.get().then(
	        function(response) {
	          $scope.persons = response.data.persons;
	        },
	        function(error) {
	          $scope.errorMsg = error.error;
	        }
	      );

  	};

    $scope.init=function(){

        $scope.getPersons();

    };


	    $timeout(function() {

	    	$scope.init();

	    });

			var defaultPersonModel=function(){

				return {
					id        :null,
					firstName :"",
					lastName  :"",
					email     :"",
					deleted   :false
				};

			};

			// set default  values
			$scope.person=defaultPersonModel();



  }]);




})(window, jQuery, angular);
