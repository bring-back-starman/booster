const config = require('../config/vars');
const User = require('../models/User');
const { generateJwtToken } = require('../jwt/token');

module.exports = () => {
  const { email, password } = config.merlin;

  return User.findOne({
    where: {
      email,
      password,
    },
  }).then((user) => {
    if (user) {
      return generateJwtToken(user);
    }

    return User.create({
      email,
      password,
    }).then(generateJwtToken);
  });
};
