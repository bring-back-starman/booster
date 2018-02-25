const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

const Mission = sequelize.define('mission', {
  name: Sequelize.STRING,
  date: Sequelize.STRING,
  display_date: Sequelize.STRING,
});

Mission.associate = (models) => {
  // associations can be defined here
};

module.exports = Mission;
