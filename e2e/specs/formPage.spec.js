var __formPage  = require('../objects/formPage.object.js');
var __cleanForm = require('../objects/cleanForm.object.js');

describe('Form to save a person', function() {

  beforeEach(function() {

        __cleanForm.cleanFields();

  });

  it("should   have all the fields empty",function(){

    __formPage.emptyfields();

  });

  it(" the button Submit should be disabled",function(){

    __formPage.disabledButton();

  });


});
