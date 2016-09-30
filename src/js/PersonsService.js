/*
* PersonsService.js
*
* Service for interacting with the backend
*/
(function(global, $, ng) {

	'use strict';

	global.ListOfPersons.service('PersonsService', ['$http', '$q', 'Config', function($http, $q, Config) {

    // BaseURL for the API
    this.baseUrl = Config.API_BASE_URL;

    this.get = function() {
      var deferred = $q.defer();
      $http({
        url: this.baseUrl,
        method: "GET"
      }).success(function(data) {
        if (data.success === true) {
          deferred.resolve(data);
        }else{
          deferred.reject(data);
        }
      }).error(function(data) {
        deferred.reject(data);
      });
      return deferred.promise;
    };

		// Add a new person to the list
	this.add = function(person) {
		var deferred = $q.defer();
		$http({
			url: this.baseUrl,
			method: "POST",
			data: person
		}).success(function(data) {
			if (data.success === true) {
				deferred.resolve(data);
			}
			else {
				deferred.reject(data);
			}
		}).error(function(data) {
			deferred.reject(data);
		});
		return deferred.promise;
	};


		// Add a new person to the list
	this.updateState = function(id,state) {
		var deferred = $q.defer();
		$http({
			url: this.baseUrl+id+"/"+state+"",
			method: "PATCH",
		}).success(function(data) {
			if(data.success === true){
				deferred.resolve(data);
			}else{
				deferred.reject(data);
			}
		}).error(function(data) {
			deferred.reject(data);
		});
		return deferred.promise;
	};




  }]);
})(window, jQuery, angular);
