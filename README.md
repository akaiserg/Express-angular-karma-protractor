#  Express-angular-karma-protractor

To install the dependencies 

```javascript
  npm install
```
To run the unit tests

```javascript
  karma start
```
To see  the  coverage,  go to the folder <b> coverage</b>.

To run the applpication

```javascript
  node server.js
```

Enter to the url [http://localhost:8085](http://localhost:8085)

to run the E2E test,  go to the folder <b>node_modules\protractor\bin</b>.


Run

```
 ./webdriver-manager  update
```

Run the  tests  with PhantomJS:

```
./protractor ../../../e2e/config.js --multiCapabilities --browser=phantomjs --params.ORIGIN 'local'
  
```

Chrome:

```
./protractor ../../../e2e/config.js --multiCapabilities --browser=chrome--params.ORIGIN 'local'
  