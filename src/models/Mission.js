import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';
import LaunchSite from './LaunchSite';

import Vehicle from './Vehicule';

const Mission = sequelize.define('Mission', {
  name: Sequelize.STRING,
  date: Sequelize.STRING,
  display_date: Sequelize.STRING,
  vehicle_id: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: Vehicle,

      // This is the column name of the referenced model
      key: 'id',
    },
  },
  launch_site_id: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: LaunchSite,

      // This is the column name of the referenced model
      key: 'id',
    },
  },
});

export default Mission;
