const Sequelize = require('sequelize');

export default ({ postgres }, callback) => {
  const {
    username, password, database, port, host,
  } = postgres;

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

  callback(sequelize);
};
