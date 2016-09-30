module.exports = {

  cleanFields:function(){

    var firstName=element(by.id('first_name_id'));
    firstName.clear();
    var lastName=element(by.id('last_name_id'));
    lastName.clear();
    var email=element(by.id('email_id'));
    email.clear();

  }

};
