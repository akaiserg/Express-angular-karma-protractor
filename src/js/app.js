/*
* app.js
*
* Initialize the ToDont app
*/
(function(global, $, ng) {

  'use strict';

  global.ListOfPersons = ng.module('ListOfPersons', []);

  global.ListOfPersons.constant('Config', {
    API_BASE_URL: 'http://localhost:8085/persons/',
  
  });

})(window, jQuery, angular);
