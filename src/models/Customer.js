import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';

const Customer = sequelize.define('Customer', {
  name: Sequelize.STRING,
  link: Sequelize.STRING,
});

export default Customer;
