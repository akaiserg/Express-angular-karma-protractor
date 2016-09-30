describe('ListOfPersonsController', function() {

  'use strict';

  var scope, controller, timeout, q,PersonsService, mockPersonsService,testPersonScope,
     testPerson, testPersons, testNewPerson, testErrorMessage, testResponseSuccess, testResponseFailure;

  beforeEach(module('ListOfPersons'));

  beforeEach(inject(function($rootScope, $controller, $q,$timeout, _PersonsService_) {
    // Test data
    timeout=$timeout;
    testPerson ={"id":1,"firstName":"F name","lastName":"L name","email":"aa@aa.com","deleted":true};
    testPersons = {"persons":[testPerson]};
    //testNewItem = 'test item 2';
    testErrorMessage = 'Error message';
    testResponseSuccess = { success: true, data: testPersons  };
    testResponseFailure = { error: testErrorMessage };

    // Services
    PersonsService = _PersonsService_;
    q = $q;

    testPersonScope={
      id        :null,
      firstName :"",
      lastName  :"",
      email     :"",
      deleted   :false
    };

    // Controller setup
    scope = $rootScope.$new();
    controller = $controller('ListOfPersonsController', {
      $scope: scope,
      PersonsService: PersonsService
    });
  }));

  describe('initialization', function() {

    it('initializes with proper $scope variables and methods', function() {

      scope.$apply();
      expect(scope.persons).toEqual([]);
      expect(scope.person).toEqual(testPersonScope);
      expect(scope.errorMsg).toEqual(false);
    });

    it('initializes by getting the list of persons', function() {

      spyOn(scope, 'getPersons');
      timeout.flush();
      expect(scope.getPersons).toHaveBeenCalled();
    });

  });

  describe('getPersons()', function() {

  it('successfully gets the list of persons from the service', function() {
    spyOn(PersonsService, 'get').and.callFake(function() {
      var deferred = q.defer();
      deferred.resolve(testResponseSuccess);
      return deferred.promise;
    });

    scope.$apply(function() {
      scope.getPersons();
    });
    scope.getPersons();
    expect(PersonsService.get).toHaveBeenCalled();
    //console.info(scope);
    expect(scope.persons.length).toBe(testPersons.persons.length);
  });

  it('fails to get the list of persons from the service', function() {
      spyOn(PersonsService, 'get').and.callFake(function() {
        var deferred = q.defer();
        deferred.reject(testResponseFailure);
        return deferred.promise;
      });
      scope.$apply(function() {
        scope.getPersons();
      });
      expect(PersonsService.get).toHaveBeenCalled();
      expect(scope.persons.length).toBe(0);
      expect(scope.errorMsg).toEqual(testResponseFailure.error);
    });
});

describe('save()',function(){
  it('saves a new person  in the scope',function(){
    spyOn(PersonsService,'add').and.callFake(function(){
      var deferred= q.defer();
      deferred.resolve(testResponseSuccess);
      return deferred.promise;
    });
    expect(scope.persons.length).toBe(0);
    scope.$apply(function(){
      scope.person=testPerson;
      scope.save();
    });
    expect(PersonsService.add).toHaveBeenCalled();
    expect(scope.persons.length).toBe(1);
    expect(scope.person).toEqual(testPersonScope);

  });

  it('fails  to add a new person  in the scope',function(){
    spyOn(PersonsService,'add').and.callFake(function(){
      var deferred= q.defer();
      deferred.reject(testResponseFailure);
      return deferred.promise;
    });
    expect(scope.persons.length).toBe(0);
    scope.$apply(function(){
      scope.person=testPerson;
      scope.save();
    });
    expect(PersonsService.add).toHaveBeenCalled();
    expect(scope.persons.length).toBe(0);
  });



});

describe('updateState()',function(){

  it('updates the state of activation, for the value true',function(){
    var testPersonToUpdate ={"id":1,"firstName":"F name","lastName":"L name","email":"aa@aa.com","deleted":true};
    var testPersonUpdated ={"id":1,"firstName":"F name","lastName":"L name","email":"aa@aa.com","deleted":false};
    var testPersonsResponse = {"persons":[testPersonUpdated]};
    var testPersonsResponseSuccess = { success: true, data: testPersonsResponse  };
    spyOn(PersonsService,'updateState').and.callFake(function(){
      var deferred= q.defer();
      deferred.resolve(testPersonsResponseSuccess);
      return deferred.promise;
    });
    scope.$apply(function(){
      scope.updateState(angular.fromJson(testPersonToUpdate));
    });
    expect(PersonsService.updateState).toHaveBeenCalled();
    expect(scope.persons.length).toBe(1);
    expect(scope.persons[0].deleted).toBe(false);
  });

  it('updates the state of activation, for the value false',function(){
    var testPersonToUpdate ={"id":1,"firstName":"F name","lastName":"L name","email":"aa@aa.com","deleted":false};
    var testPersonUpdated ={"id":1,"firstName":"F name","lastName":"L name","email":"aa@aa.com","deleted":true};
    var testPersonsResponse = {"persons":[testPersonUpdated]};
    var testPersonsResponseSuccess = { success: true, data: testPersonsResponse  };
    spyOn(PersonsService,'updateState').and.callFake(function(){
      var deferred= q.defer();
      deferred.resolve(testPersonsResponseSuccess);
      return deferred.promise;
    });
    scope.$apply(function(){
      scope.updateState(angular.fromJson(testPersonToUpdate));
    });
    expect(PersonsService.updateState).toHaveBeenCalled();
    expect(scope.persons.length).toBe(1);
    expect(scope.persons[0].deleted).toBe(true);
  });

  it('fails to update the state of activation',function(){

      spyOn(PersonsService,'updateState').and.callFake(function(){
          var deferred=q.defer();
          deferred.reject(testResponseFailure);
          return deferred.promise;
      });
      scope.$apply(function(){
        scope.updateState(angular.fromJson(testPerson));
      });
      expect(PersonsService.updateState).toHaveBeenCalled();
      expect(scope.persons.length).toBe(0);
      expect(scope.errorMsg).toBe(testResponseFailure.error);

  });

});


});
