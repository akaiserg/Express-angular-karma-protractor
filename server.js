var express = require('express');
var jsonfile = require('jsonfile');
var bodyParser = require('body-parser');
var path = require('path');


var file = 'persons.json';
var data = {
  persons: [
    {
      id: 1,
      firstName: "F name",
      lastName : "L name",
      email    : "aa@aa.com",
      deleted  : "false"
    }
  ]
};


function addPerson(person) {

  var lastPerson = data.persons[data.persons.length - 1];
  if (lastPerson) {
    person.id = lastPerson.id + 1;
  }else {
    person.id = 1;
  }
  data.persons.push(person);
  return person;

}

function commonWriteHandler(res, err) {

  if (err) {
    res.status(500).send(err);
  }else{
    res.send({ success: true, data: data });
  }

}



function  stringToBoolean(stringBool){

  if(stringBool==="true"){
    return true;
  }else{
    return false;
  }

}


function updateStateById(id, state) {

  var updated = false;
  //console.info(data.persons);
  for (var i = 0; i < data.persons.length; i++) {
    if (id === data.persons[i].id) {
      data.persons[i].deleted=state;
      updated=true;
      break;
    }
  }
  //console.info(data.persons);
  return updated;

}

// Setup the express server and middleware
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



// Serve client app
app.use('/', express.static('src/'));

//app.use("/",express.static('tests/'));

// GET a list of all todos
app.get('/test', function(req, res) {
  res.send({ success: true, data: {"hello":"Hello Word!"} });
});



// GET a list of all todos
app.get('/persons', function(req, res) {
  jsonfile.readFile(file, function(err, obj) {
    if (err){
      jsonfile.writeFile(file, data, function(err) {
        commonWriteHandler(res, error);
      });
    }else{
      data = obj;
      res.send({ success: true, data: data });
    }
  });
});

// POST a new person
app.post('/persons', function(req, res) {
  var person = req.body;
  console.info(person);
  if (person===null) {
    res.status(400).send({ error: 'the body does not have  information' });
  }else{
    if (addPerson(person)) {
      jsonfile.writeFile(file, data, function(err) {
        commonWriteHandler(res, err);
      });
    }else {
      res.status(500).send({ error: 'unable to add the person' });
    }
  }
});


// PATCH  to update the state of a person
app.patch('/persons/:id/:activation', function(req, res) {

  var personId =parseInt(req.params.id);
  var isActivated = stringToBoolean(req.params.activation);
  if ( (personId===null || personId===undefined) || (isActivated===null || isActivated===undefined) ) {
    res.status(400).send({ error: 'the path variables are not correct' });
  }else{
    var updatedPerson=updateStateById(personId,isActivated);
    if (updatedPerson!==null) {
      jsonfile.writeFile(file, data, function(err) {
        commonWriteHandler(res, err);
      });
    }else {
      res.status(500).send({ error: 'unable to update the state of the person id '+ personId});
    }
  }
});




// Get config data
var server;
jsonfile.readFile('config.json', function(err, obj) {
  if (err) {
    console.log('Error reading config file');
  }
  else {
    // Start the  server
    server = app.listen(obj.port, function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log('App listening at http://%s:%s', host, port);
    });
  }
});
