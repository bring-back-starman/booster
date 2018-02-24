import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';

const Orbit = sequelize.define('Orbit', {
  name: Sequelize.STRING,
  acronym: Sequelize.STRING,
  description: Sequelize.STRING,
});

export default Orbit;
