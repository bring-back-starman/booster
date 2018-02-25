const { Sequelize } = require('sequelize');
const config = require('./vars');

const {
  username, password, database, port, host,
} = config.postgres;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres',
  port,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
