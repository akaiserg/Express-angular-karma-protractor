module.exports = {

  open:function(){

    browser.get(global.origin_url);
    browser.driver.manage().window().maximize();

  },

  close:function(){

      browser.close();
  }

};
