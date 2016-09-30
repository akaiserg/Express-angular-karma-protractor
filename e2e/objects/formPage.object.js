module.exports = {

   emptyfields: function(){

      element(by.id('first_name_id')).getAttribute('value').then(function (text) {
          expect(text).toBe("");
      });
      element(by.id('last_name_id')).getAttribute('value').then(function (text) {
          expect(text).toBe("");
      });
      element(by.id('email_id')).getAttribute('value').then(function (text) {
          expect(text).toBe("");
      });

   },

   disabledButton: function(){

     expect(element(by.id('btn_submit_id')).getAttribute('disabled')).toBeTruthy();

   }

};
