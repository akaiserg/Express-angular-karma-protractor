describe('PersonsService', function(){

'use strict';

beforeEach(
  module('ListOfPersons')
);

var PersonsService,httpBackend,q,testUrl,testPerson,testPersons,config;

beforeEach(inject(function(_PersonsService_,$httpBackend,$q,Config){

  //console.info(Config.API_BASE_URL);
  testUrl=Config.API_BASE_URL;
  testPerson ={"id":1,"firstName":"F name","lastName":"L name","email":"aa@aa.com","deleted":true};
  testPersons = {"persons":[testPerson]};
  PersonsService= _PersonsService_;
  httpBackend=$httpBackend;
  q=$q;

}));

afterEach(function(){
  httpBackend.verifyNoOutstandingExpectation();
  httpBackend.verifyNoOutstandingRequest();
});

describe('init',function(){
    it('service is defined',function(){
      expect(PersonsService).toBeDefined();
      expect(PersonsService.baseUrl).toBeDefined();
    });
});

describe('get()',function(){

  it('gets the list of persons',function(){

    var promise, response,result;
    response={
      success:true,
      data:testPersons
    };
    httpBackend.expectGET(testUrl).respond(200,response);

    promise=PersonsService.get();

    promise.then(function(data){
      result=data;
    });
    httpBackend.flush();

    expect(result).toEqual(response);
    expect(result.data.length).toEqual(response.data.length);

  });

  it('fails to get the list of persons',function(){

    var result,promise, response,errorMsj;
    errorMsj="error message form server";
    response={
      error:errorMsj
    };
    httpBackend.expectGET(testUrl).respond(500,response);

    promise= PersonsService.get();
    // for the error
    promise.catch(function(dataResponse){ //promise.then(null,function(dataResponse){
      result=dataResponse;
    });
    httpBackend.flush();
    expect(result).toEqual(response);

  });


  it('gets a  problem with the format of the response ',function(){

    var promise, response,result;
    response={
      incorrect:true
    };
    httpBackend.expectGET(testUrl).respond(200,response);

    promise=PersonsService.get();

    promise.then(null,function(data){
      result=data;
    });
    httpBackend.flush();
    expect(result).toEqual(response);

  });

});

describe('add()',function(){

  it("saves a new person",function(){
    var result,promise, response;
    response={
      success:true,
      data:testPersons
    };
    httpBackend.expectPOST(testUrl).respond(200,response);
    promise= PersonsService.add(angular.fromJson(testPerson));
    promise.then(function(dataResponse){
      result=dataResponse;
    });
    httpBackend.flush();
    expect(result).toEqual(response);

  });

  it("fails trying to save  a new person",function(){
    var result,promise, response,errorMsj;
    errorMsj="error message form server";
    response={
      error:errorMsj
    };
    httpBackend.expectPOST(testUrl).respond(500,response);
    promise= PersonsService.add(angular.fromJson(testPerson));
    promise.catch(function(dataResponse){
      result=dataResponse;
    });
    httpBackend.flush();
    expect(result).toEqual(response);

  });

  it("gets a  problem with the format of the response",function(){
    var result,promise, response;
    response={
      wrong:true
    };
    httpBackend.expectPOST(testUrl).respond(200,response);
    promise= PersonsService.add(angular.fromJson(testPerson));
    promise.then(null,function(dataResponse){
      result=dataResponse;
    });
    httpBackend.flush();
    expect(result).toEqual(response);

  });

  });

  describe('updateState()',function(){

      it('updates the state of a person',function(){
        var result,promise, response,personId,personState;
        personId=1;
        personState= false;
        response={
          success:true,
          data:testPersons
        };
        httpBackend.expectPATCH(testUrl+personId+"/"+personState).respond(200,response);
        promise= PersonsService.updateState(personId,personState);
        promise.then(function(dataResponse){
          result=dataResponse;
        });
        httpBackend.flush();
        expect(result).toEqual(response);
      });


      it('fails updating the state of a person',function(){
        var result,promise, response,personId,personState,errorMsg;
        errorMsg="error message form server";
        personId=1;
        personState= false;
        response={
          error:errorMsg
        };
        httpBackend.expectPATCH(testUrl+personId+"/"+personState).respond(500,response);
        promise= PersonsService.updateState(personId,personState);
        promise.catch(function(dataResponse){
          result=dataResponse;
        });
        httpBackend.flush();
        expect(result).toEqual(response);
      });


      it('gets a  problem with the format of the response',function(){
        var result,promise, response,personId,personState;
        personId=1;
        personState= false;
        response={
          wrong:true
        };
        httpBackend.expectPATCH(testUrl+personId+"/"+personState).respond(200,response);
        promise= PersonsService.updateState(personId,personState);
        promise.then(null,function(dataResponse){
          result=dataResponse;
        });
        httpBackend.flush();
        expect(result).toEqual(response);
      });


});



});
