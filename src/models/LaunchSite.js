import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';

const LaunchSite = sequelize.define('LaunchSite', {
  name: Sequelize.STRING,
  lat: Sequelize.FLOAT,
  long: Sequelize.FLOAT,
  description: Sequelize.STRING,
});

export default LaunchSite;
