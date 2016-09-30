var __formValidation = require('../objects/formValidation.object.js');
var __cleanForm      = require('../objects/cleanForm.object.js');

describe('Validation for the person form', function() {

  beforeEach(function() {

        __cleanForm.cleanFields();

    });

  it("If the  first name  has just  numbers,  the submit button should be disable",function(){

    __formValidation.setFirstName("12334 32322");
    __formValidation.setLastName("");
    __formValidation.setEmail("");
    __formValidation.disabledButton();

  });

  it("If the  last name  has just  numbers,  the submit button should be disable",function(){

    __formValidation.setFirstName("");
    __formValidation.setLastName("211221 12212112");
    __formValidation.setEmail("");
    __formValidation.disabledButton();

  });


  it("If the  email  has just  numbers,  the submit button should be disable",function(){

    __formValidation.setFirstName("");
    __formValidation.setLastName("");
    __formValidation.setEmail("211221 12212112");
    __formValidation.disabledButton();

  });

  it("If all the fields have  numbers,  the submit button should be disable",function(){

    __formValidation.setFirstName("2322332 2332");
    __formValidation.setLastName("233232 3232");
    __formValidation.setEmail("211221 12212112");
    __formValidation.disabledButton();

  });

  it("Ifthe name or the last name has numbers and  letters,  the submit button should be disable",function(){

    __formValidation.setFirstName("the name ");
    __formValidation.setLastName("the  last name 2");
    __formValidation.setEmail("email");
    __formValidation.disabledButton();

  });


});
