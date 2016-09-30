describe('app.js', function() {

  beforeEach(module('ListOfPersons'));

  it('should define the ListOfPersons object', function() {
    expect(window.ListOfPersons).toBeDefined();
    expect(window.ListOfPersons.name).toBe('ListOfPersons');
  });

  it('should define the Config constant', inject(function(Config) {
  expect(Config).toBeDefined();
  expect(Config.API_BASE_URL).toBeDefined();
}));


});
