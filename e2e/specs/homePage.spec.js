var __browser   = require('../objects/browser.object.js');
var __homePage  = require('../objects/homePage.object.js');

describe(' enter to the home page', function() {

  beforeAll(function() {

     __browser.open();

  });

  it("should enter to the site",function(){

    __homePage.checkTitle();

  });


  it('should see the table and the form ', function() {

    __homePage.checkTableHeaders();
    __homePage.checkNgRepeat();
    __homePage.checkFormFields();

  });

  afterAll(function(){

  //  __browser.close();

  });


});
