const passport = require('passport');

const { jwtStrategy } = require('./strategies');

module.exports = ({ config }) => {
  console.log('--- Configuring passport ---');
  const { secret } = config;

  passport.use('jwt', jwtStrategy({ secret }));
};
