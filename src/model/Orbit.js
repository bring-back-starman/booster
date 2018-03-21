import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Orbit = sequelize.define('orbit', {
  acronym: Sequelize.STRING,
  name: Sequelize.STRING,
  altitudeMinKm: Sequelize.INTEGER,
  altitudeMaxKm: Sequelize.INTEGER,
  description: Sequelize.TEXT,
});

export default Orbit;
