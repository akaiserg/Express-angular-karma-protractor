var __validatedForm = require('../objects/validatedForm.object.js');
var __cleanForm      = require('../objects/cleanForm.object.js');

describe('The form is validated', function() {

  beforeEach(function() {

    __cleanForm.cleanFields();

  });

  it("If the  all fields have texts,  the submit button should be enable",function(){

    __validatedForm.setFirstName("name");
    __validatedForm.setLastName("last name");
    __validatedForm.setEmail(" email");
    __validatedForm.enableButton();

  });

});
