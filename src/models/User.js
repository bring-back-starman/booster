const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: Sequelize.STRING,
  displayName: {
    type: Sequelize.STRING,
    allowNul: true,
  },
});

User.associate = () => {
  // associations can be defined here
};

module.exports = User;
