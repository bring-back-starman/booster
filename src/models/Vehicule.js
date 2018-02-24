import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';

const Vehicle = sequelize.define('Vehicle', {
  name: Sequelize.STRING,
});

export default Vehicle;
