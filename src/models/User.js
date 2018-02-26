const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize');

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: Sequelize.STRING,
});

User.associate = () => {
  // associations can be defined here
};

module.exports = User;
