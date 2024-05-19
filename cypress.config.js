const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://engage-sphere.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
