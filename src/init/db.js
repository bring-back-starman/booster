const sequelize = require('../config/sequelize');

module.exports = () => new Promise((resolve) => {
  console.log('Syncing database...');

  sequelize.sync().then(() => {
    console.log('Database successfully synced !');
    resolve();
  });
});
