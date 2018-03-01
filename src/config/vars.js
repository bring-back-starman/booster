const path = require('path');

const env = process.env.NODE_ENV || 'development';

require('dotenv-safe').load({
  path: path.join(__dirname, `../../.env.${env}`),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env,
  logs: env === 'production' ? 'combined' : 'dev',
  port: process.env.PORT,
  bodyLimit: '100kb',
  postgres: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  },
  secret: process.env.JWT_SECRET,
  merlin: {
    email: process.env.MERLIN_EMAIL,
    password: process.env.MERLIN_PASSWORD,
  },
};
