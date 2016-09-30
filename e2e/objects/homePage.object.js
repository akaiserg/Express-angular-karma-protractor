module.exports = {

  headers:{"p1":"#","p2":"First Name","p3":"Last Name","p4":"Email","p5":"Action"},

  checkTitle: function() {

    expect(browser.getTitle()).toEqual('List of persons');

  },

   checkTableHeaders: function(){

     var headers=this.headers;
     var headerElement0= browser.findElement(by.xpath("/html/body/div/div/div[1]/table/thead/tr/th[1]"));
     headerElement0.getText().then(function(txt){
       expect(txt).toEqual(headers.p1);
     });

     var headerElement1=browser.findElement(by.xpath("/html/body/div/div/div[1]/table/thead/tr/th[2]"));
     headerElement1.getText().then(function(txt){
       expect(txt).toEqual(headers.p2);
     });

     var headerElement3=browser.findElement(by.xpath("/html/body/div/div/div[1]/table/thead/tr/th[3]"));
     headerElement3.getText().then(function(txt){
       expect(txt).toEqual(headers.p3);
     });

     var headerElement4=browser.findElement(by.xpath("/html/body/div/div/div[1]/table/thead/tr/th[4]"));
     headerElement4.getText().then(function(txt){
       expect(txt).toEqual(headers.p4);
     });

     var headerElement5=browser.findElement(by.xpath("/html/body/div/div/div[1]/table/thead/tr/th[5]"));
     headerElement5.getText().then(function(txt){
       expect(txt).toEqual(headers.p5);
     });

       //var personId=by.binding('person.idss');
   },

   checkNgRepeat: function(){

     expect(element.all(by.repeater('person in persons')).count()).toBeGreaterThan(1);

   },

   pressButtonAction: function(){

      var ActualTxt;
      var btn=browser.findElement(by.xpath("/html/body/div/div/div[1]/table/tbody/tr[1]/td[4]/del/button"));
      btn.getText().then(function(txt){
        if(txt==="Activate"){
          ActualTxt="Activate";
        }else{
          ActualTxt="Desactivate";
        }
      });
      btn.click();
      browser.sleep(2000);
      var changedBtn=browser.findElement(by.xpath("/html/body/div/div/div[1]/table/tbody/tr[1]/td[4]/del/button"));
      changedBtn.getText().then(function(txt){
        if(ActualTxt==="Activate"){
            expect(txt).toEqual("Desactivate");
        }else{
            expect(txt).toEqual("Activate");
        }
      });

   },

   checkFormFields: function(){

       var fNameExist= browser.isElementPresent(by.xpath('//*[@id="first_name_id"]'));
       expect(fNameExist).toBeTruthy();
       var lNameExist= browser.isElementPresent(by.xpath('//*[@id="last_name_id"]'));
       expect(lNameExist).toBeTruthy();
       var emailExist= browser.isElementPresent(by.xpath('//*[@id="email_id"]'));
       expect(emailExist).toBeTruthy();
       var buttonExist= browser.isElementPresent(by.xpath('/html/body/div/div/div[2]/form/div[4]/button'));
       expect(buttonExist).toBeTruthy();

   },




};
