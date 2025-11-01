const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  chromeWebSecurity: false,

  env: {
    allure: true,
  },

  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});