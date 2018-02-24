import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';

const LandingPad = sequelize.define('LandingPad', {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  lat: Sequelize.FLOAT,
  long: Sequelize.FLOAT,
});

export default LandingPad;
