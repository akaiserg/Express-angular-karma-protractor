/*
* ngString.js
*
* Directive for validating String  long more than  10 and only letters
*/
(function(global, $, ng) {

  'use strict';

  global.ListOfPersons.directive('ngString', function() {

    return{
      // restrict to an attribute type.
      restrict: 'A',
      // element must have ng-model attribute.
      require: 'ngModel',

    link: function(scope, ele, attrs, ctrl){

      // add a parser that will process each time the value is
      // parsed into the model when the user updates it.
      ctrl.$parsers.unshift(function(value) {

        var valid=value;
        if(value!==null ){
          var regexp = /^[a-zA-Z ]*-*$/;
          valid= regexp.test(value);
        }
        // if it's valid, return the value to the model,
        // otherwise return undefined.
        return valid ? value : undefined;

      });

   }

 };
});
})(window, jQuery, angular);
