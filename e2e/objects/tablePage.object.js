module.exports = {

  headers:{"p1":"#","p2":"First Name","p3":"Last Name","p4":"Email","p5":"Action"},

   fieldsOnTable: function(){

      element.all(by.repeater('person in persons')).count().then(function(count) {
        expect(count).toBeGreaterThan(0);
      });

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

   }

};
