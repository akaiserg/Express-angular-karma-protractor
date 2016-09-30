
exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    //directConnect: true,


    specs: ['specs/*.spec.js','objects/*.js'],
    //homePage.spec.js','specs/tablePage.spec.js','specs/formPage.spec.js','specs/formPageValidation.spec.js','specs/validatedForm.spec.js
    // Execution from command prompt:
   // protractor conf.js --multiCapabilities --browser=chrome  --params.ORIGIN 'QA'
   // protractor conf.js --multiCapabilities --browser=chrome --params.ORIGIN 'local'
    framework: 'jasmine2',

   // suites: {
   //     homepage: 'tests/e2e/homepage/**/*Spec.js',
    //    search: ['tests/e2e/contact_search/**/*Spec.js',
    //        'tests/e2e/venue_search/**/*Spec.js']
   // },

  /* Capabilities: {
       browserName: 'phantomjs',
       platform: 'ANY',
       binary: 'C:\phantomjs-2.0.0-windows\bin\phantomjs.exe'
   },*/

  // capabilities: {'browserName': 'chrome'},


    multiCapabilities: [{
        browserName: 'phantomjs',
        platform: 'ANY'
      //  binary: 'C:\phantomjs-2.0.0-windows\bin\phantomjs.exe'
    }, {
        browserName: 'chrome',
        platform: 'ANY'
    }],

    params:{

        ORIGIN: 'QA'

    },

     rootElement: 'body',


    allScriptsTimeout: 11000,

    getPageTimeout : 100000,


    onPrepare: function() {

      if(this.browserName == 'phantomjs'){
          global.enviroment = 'pha';
      }

        if(this.browserName == 'chrome'){
            global.enviroment = 'chro';
        }

        /*
        if (browser.params.ORIGIN == 'QA') {
            global.origin_url = 'http://staffing-qa.nisumlatam.com:8080';
            browser.get('http://staffing-qa.nisumlatam.com:8080/#/login');
        }*/

        if (browser.params.ORIGIN == 'local') {
            global.origin_url = 'http://localhost:8085/';
            browser.get('http://localhost:8085/');
         }

        browser.driver.manage().window().maximize();


        require('protractor-http-mock').config = {
            rootDirectory: 'node_modules/protractor-http-mock', // default value: process.cwd()
            protractorConfig: 'my-protractor-config.conf' // default value: 'protractor-conf.js'
        };

    },



    jasmineNodeOpts: {
        /**
         * onComplete will be called just before the driver quits.
         */
        onComplete: function () {},
       //  If true, display spec names.
        isVerbose: true,
      //   If true, print colors to the terminal.
        showColors: true,
      //   If true, include stack traces in failures.
        includeStackTrace: true,
      //   Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 2500000
    }
};
