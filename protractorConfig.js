/* eslint-disable no-undef */
exports.config = {
  seleniumAddress: `http://localhost:4723/wd/hub`,
  capabilities: {
    browserName: `chrome`,
    platformName: `Android`,
    deviceName: `device`
  },
  framework: `mocha`,
  mochaOpts: {
    timeout: 300000
  },
  specs: [`test/spec.js`],
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  }
};
