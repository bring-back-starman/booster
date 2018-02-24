import { Sequelize } from 'sequelize';

import config from './config';

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

export default sequelize;
