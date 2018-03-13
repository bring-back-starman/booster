import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Orbit = sequelize.define('orbit', {
  acronym: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  altitudeMinKm: {
    type: Sequelize.INTEGER,
    field: 'altitude_min_km',
  },
  altitudeMaxKm: {
    type: Sequelize.INTEGER,
    field: 'altitude_max_km',
  },
  description: {
    type: Sequelize.STRING,
  },
});

export default Orbit;
