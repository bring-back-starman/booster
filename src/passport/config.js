const passport = require('passport');

const { jwtStrategy } = require('./strategies');

module.exports = ({ app, config }) => {
  const { secret } = config;

  passport.use('jwt', jwtStrategy({ secret }));

  app.use(passport.authenticate('jwt', { session: false }));
};
