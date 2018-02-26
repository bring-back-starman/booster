const syncDatabase = require('./db');
const initScraping = require('./scraping');

module.exports = async () => {
  await syncDatabase();
  await initScraping();
};
