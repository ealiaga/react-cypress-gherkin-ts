/* // ***********************************************************
// This example plugins/index.js can be used to load plugins
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require("@cypress/browserify-preprocessor");
module.exports = (on) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.plugin.unshift(['tsify']);

  on('file:preprocessor', cucumber(options))
} */

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}