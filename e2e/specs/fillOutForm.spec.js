var __fillOutForm  = require('../objects/fillOutForm.object.js');
var __cleanForm = require('../objects/cleanForm.object.js');

describe('Form to save a person', function() {

  var name,lastName,email;

  beforeAll(function(){

    name     ="the name example";
    lastName ="the  last name example";
    email    ="the email example"+new Date();

  });

  beforeEach(function() {

    __cleanForm.cleanFields();

  });

  it("When I fill out all the fields  correctly and press the button Submit, all the fields should be empty after it",function(){

    __fillOutForm.setFirstName(name);
    __fillOutForm.setLastName(lastName);
    __fillOutForm.setEmail(email);
    __fillOutForm.clickSubmit();
    __fillOutForm.checkEmptyfields();

  });

  it(" a new row should appear on the table of the persons",function(){

      __fillOutForm.checkNewRow(name,lastName,email);

  });


});
