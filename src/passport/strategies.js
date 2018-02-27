const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt');

const User = require('../models/User');
const { getIdFromPayload } = require('../jwt/token');

const jwtStrategy = ({ secret }) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
    ignoreExpiration: true,
  };

  // eslint-disable-next-line consistent-return
  return new JwtStrategy(options, async (payload, done) => {
    console.log('--- JWT payload ---', payload);
    try {
      const id = getIdFromPayload(payload);
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
