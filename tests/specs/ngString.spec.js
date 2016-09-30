describe('ngString directive',function(){
'use strict';

var testFixture='<form name="form">'+
'<input type="text" ng-model="person.firstName"   name="firstName" ng-string   ng-required="true"/>'+
' </form>';
var   scope, compile, element, compiled, form,testPerson;



beforeEach(
  module("ListOfPersons")
);


beforeEach(inject(function($rootScope, $compile) {
  testPerson ={"id":1,"firstName":"F name","lastName":"L name","email":"aa@aa.com","deleted":true};
  scope = $rootScope.$new();
  scope.person= angular.fromJson(testPerson);
  compile = $compile;
  element = angular.element(testFixture);
  compile(element)(scope);
  scope.$digest();
  form = scope.form;
}));


it('the model is  undefined   when is set with numbers', function() {
    form.firstName.$setViewValue('111111');
    scope.$apply();
    expect(scope.person.firstName).toEqual(undefined);
    expect(form.firstName.$valid).toBe(false);
    expect(form.$invalid).toBe(true);
});

it('the model is  undefined   when is set with null', function() {
    form.firstName.$setViewValue(null);
    scope.$apply();
    expect(scope.person.firstName).toEqual(undefined);
    expect(form.firstName.$valid).toBe(false);
    expect(form.$invalid).toBe(true);
});

it('the model is  undefined   when is set with undefined', function() {
    form.firstName.$setViewValue(undefined);
    scope.$apply();
    expect(scope.person.firstName).toEqual(undefined);
    expect(form.firstName.$valid).toBe(false);
    expect(form.$invalid).toBe(true);
});

it('the model has data    when is set with letters', function() {
    var value="text example";
    form.firstName.$setViewValue(value);
    scope.$apply();
    expect(scope.person.firstName).toEqual(value);
    expect(form.firstName.$valid).toBe(true);
    expect(form.$invalid).toBe(false);
});


});
