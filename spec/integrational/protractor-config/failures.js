var env = require('../environment');

exports.config = {
    seleniumAddress: env.seleniumAddress,
    framework: 'jasmine2',
    specs: ['../protractor/fail-test.js'],
    plugins: [{
        path: '../../../index.js',
        screenshotPath: '.tmp/failures',
        screenshotOnExpect: 'failure',
        screenshotOnSpec: 'failure'
    }]
};
