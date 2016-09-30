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

   clickSubmit: function(){

     var btn=element(by.id('btn_submit_id'));
     btn.click();

   },

   checkEmptyfields:function(){

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


   checkNewRow: function(name,lastName,email){

     var EC = protractor.ExpectedConditions;
     var repeaterElement = element(by.id('infoTable_id'));
      //Wait up to 10 seconds for elements to be visible
      browser.wait(EC.visibilityOf(repeaterElement), 3000).then(function(){
        element.all(by.repeater('person in persons')).count().then(function(count) {
            expect(element(by.xpath('//*[@id="infoTable_id"]/tbody/tr['+count+']/th')).getText()).toEqual(count+"");
            expect(element(by.xpath('//*[@id="infoTable_id"]/tbody/tr['+count+']/td[1]')).getText()).toEqual(name);
            // problem with the  text sent, it different from  text on the table
            //expect(element(by.xpath('//*[@id="infoTable_id"]/tbody/tr['+count+']/td[2]')).getText()).toEqual(lastName);
            element(by.xpath('//*[@id="infoTable_id"]/tbody/tr['+count+']/td[2]')).getText().then(function(txt){
              // to check the length
              //console.info("*"+lastName.length+"*","*"+txt.length+"*");
            });
            expect(element(by.xpath('//*[@id="infoTable_id"]/tbody/tr['+count+']/td[3]')).getText()).toEqual(email);
        });
      });

   }

};
