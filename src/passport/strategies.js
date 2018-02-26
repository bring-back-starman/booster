const passportJwt = require('passport-jwt');

const User = require('../models/User');

const { ExtractJwt, Strategy: JwtStrategy } = passportJwt;

const jwtStrategy = ({ secret }) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
  };

  // eslint-disable-next-line consistent-return
  return new JwtStrategy(options, async (payload, done) => {
    console.log('--- JWT payload ---', payload);
    try {
      const { sub: id } = payload;
      const user = await User.findById(id);

      if (!user) {
        return done(null, false);
      }

      done(null, user);
    } catch (err) {
      done(err, false);
    }
  });
};

module.exports = {
  jwtStrategy,
};
