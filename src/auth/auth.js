import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import jwt from 'jwt-simple';

import config from '../config/vars';

const stategy = new Strategy({
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, (payload, done) => done(null, true));

passport.use(stategy);

export default {
  initialize() {
    return passport.initialize();
  },
  authenticate() {
    return (req, res, next) => passport.authenticate('jwt', { session: false }, (err, user, info) => {
      req.user = user;
      next(err);
    })(req, res, next);
  },
  token: jwt.encode({}, config.secret),
};
