import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Mission = sequelize.define('mission', {
  name: Sequelize.STRING,
  launchNumber: Sequelize.INTEGER,
  missionNumber: Sequelize.INTEGER,
  dateFrom: Sequelize.DATE,
  dateTo: Sequelize.DATE,
  dateType: Sequelize.STRING,
  vehicle: Sequelize.STRING,
  outcome: Sequelize.STRING,
  patchUrl: Sequelize.TEXT,
  links: Sequelize.JSON,
  launchVideo: Sequelize.STRING,
  description: Sequelize.TEXT,
  orbit: Sequelize.STRING,
});

export default Mission;
