const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // include any other plugin code...
      
      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
    defaultCommandTimeout: 20000,
    retryOnNetworkFailure: true,
    specPattern: "cypress/e2e/specs/**/*.js",
    environment: "qa-environment-01",
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false
  }
})