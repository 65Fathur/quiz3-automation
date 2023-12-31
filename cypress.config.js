const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    USER: 'fathurkuadrat3@gmail.com',
    PASS: 'Persib2023!',
    FIRSTNAME: 'dima',
    LASTNAME: 'fathur',
    JALAN1: 'jalan senang senang suka saya',
    JALAN2: 'nomer 30',
    PERUSAHAAN: 'Palu gada Corp',
    NOHP:'0800000',
    KOTA:'karimun japan',
    PROVINSI: 'jawa paling barat',
    KODEPOS: '40134',
  },
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
