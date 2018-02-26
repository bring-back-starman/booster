const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

const Mission = sequelize.define('mission', {
  name: Sequelize.STRING,
  date: Sequelize.STRING,
  displayDate: Sequelize.STRING,
});

Mission.associate = () => {
  // associations can be defined here
};

module.exports = Mission;
