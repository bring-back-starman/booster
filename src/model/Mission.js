import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Mission = sequelize.define('mission', {
  name: {
    type: Sequelize.STRING,
  },
  launchNumber: {
    type: Sequelize.INTEGER,
    field: 'launch_number',
  },
  missionNumber: {
    type: Sequelize.INTEGER,
    field: 'mission_number',
  },
  dateFrom: {
    type: Sequelize.DATE,
    field: 'date_from',
  },
  dateTo: {
    type: Sequelize.DATE,
    field: 'date_to',
  },
  dateType: {
    type: Sequelize.STRING,
    field: 'date_type',
  },
  missionOutcome: {
    type: Sequelize.STRING,
    field: 'mission_outcome',
  },
  patchUrl: {
    type: Sequelize.STRING,
    field: 'patch_url',
  },
  links: {
    type: Sequelize.JSON,
  },
  launchVideo: {
    type: Sequelize.STRING,
    field: 'launch_video',
  },
  description: {
    type: Sequelize.STRING,
  },
});

export default Mission;
