const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const utilities = require('../tests/support/utils/Utilities');

exports.config = {
    baseUrl: '',
    specs: ['./tests/specs/**/*.spec.js'],
    env: 'sit',
    exclude: [],
    filesToWatch: [],
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results/',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    screenshotPath: './reports/screenshots',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 100000,
    },

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function(config, capabilities) {
        utilities.reportCleanUp();
    },

    beforeSession: function(config, capabilities, specs) {
        require('@babel/register');
    },

    before: function() {
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
        global.baseUrl = this.baseUrl;
        global.env = this.env;
        global.responsive = browser.capabilities.mobileEmulationEnabled;
    },

    afterTest: function(test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    },
};
