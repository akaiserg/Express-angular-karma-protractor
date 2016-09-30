module.exports = {


   setFirstName: function(value){

     var elem=element(by.id('first_name_id'));
      elem.sendKeys(value);

   },

   setLastName: function(value){

     var elem=element(by.id('last_name_id'));
      elem.sendKeys(value);

   },

     setEmail: function(value){

     var elem=element(by.id('email_id'));
      elem.sendKeys(value);

   },

   disabledButton: function(){

     var btn=element(by.id('btn_submit_id'));
     expect(btn.getAttribute('disabled')).toBeTruthy();

   }

};
