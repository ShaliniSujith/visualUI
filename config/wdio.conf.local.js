const baseConfig = require('./wdio.base.conf.js').config;
const commandlineArgs = require('minimist')(process.argv.slice(2));
const Browser = require('../tests/support/utils/Browser');

browserCaps = new Browser(commandlineArgs['browser'], commandlineArgs['headless']).create();

const localConfig = Object.assign(baseConfig, {
    services: ['selenium-standalone'],
    runner: 'local',
    capabilities: [browserCaps],
});

exports.config = localConfig;
