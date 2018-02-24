const path = require('path');

const env = process.env.NODE_ENV || 'development';

require('dotenv-safe').load({
  path: path.join(__dirname, `../../.env.${env}`),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env,
  logs: env === 'production' ? 'combined' : 'dev',
  port: process.env.PORT || 3000,
  enable: process.env.ENABLE_API || false,
  bodyLimit: '100kb',
};
