# Applitools UI Tests

### Summary
This directory contains the UI Tests for the Applitool demo page, these tests are written in nodejs using [mocha](https://mochajs.org/) test framework, [webdriverio](http://webdriver.io/), and [Allure](https://www.npmjs.com/package/@wdio/allure-reporter) for reporting.

### Installation
You should have Node.js installed. If you don't have Node installed, we recommend installing NVM to assist managing multiple active Node.js versions.
    
Once node is installed, execute:   

    npm install

### How do I run the tests on my local machine?

    npm test
    
### Launch Arguments
By default tests are executed using a Chrome browser. 

To run tests in headless mode:

    npm test -- --headless

### Run Single test
Version 1 test execution

    npm run test -- --spec=oldWayTest --baseUrl=https://demo.applitools.com/hackathon.html

Version 2 test execution

 npm run test -- --spec=oldWayTest --baseUrl=https://demo.applitools.com/hackathonV2.html
  

### Generate Allure report 
    
    npm run report
