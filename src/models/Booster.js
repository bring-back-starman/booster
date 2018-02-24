import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';

const Booster = sequelize.define('Booster', {
  name: Sequelize.STRING,
  version: Sequelize.STRING,
});

export default Booster;
