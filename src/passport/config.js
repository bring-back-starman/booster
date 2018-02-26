const passport = require('passport');

const { jwtStrategy } = require('./strategies');

module.exports = ({ config }) => {
  const { secret } = config;

  passport.use('jwt', jwtStrategy({ secret }));
};
