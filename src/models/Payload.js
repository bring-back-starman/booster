import { Sequelize } from 'sequelize';

import sequelize from '../config/sequelize';
import Customer from './Customer';
import Mission from './Mission';
import Orbit from './Orbit';

const Payload = sequelize.define('Payload', {
  name: Sequelize.STRING,
  weight: Sequelize.FLOAT,
  mission_id: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: Mission,

      // This is the column name of the referenced model
      key: 'id',
    },
  },
  orbit_id: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: Orbit,

      // This is the column name of the referenced model
      key: 'id',
    },
  },
  customer_id: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: Customer,

      // This is the column name of the referenced model
      key: 'id',
    },
  },
});

export default Payload;
