var __tablePage = require('../objects/tablePage.object.js');
var __browser   = require('../objects/browser.object.js');

describe('Table with the persons', function() {

  it("should not be empty",function(){

    __tablePage.fieldsOnTable();

  });

  it(" when the  button of the  first row  is pressed the value of the button should change",function(){

    __tablePage.pressButtonAction();

  });


});
