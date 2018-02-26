const jwt = require('jsonwebtoken');

const config = require('../config/vars');
const User = require('../models/User');

function handleJwtToken(user) {
  const token = jwt.sign(user.get('id'), config.secret);

  console.log('--- JWT token ---');
  console.log(token);
}

module.exports = () => {
  const { email, password } = config.merlin;

  return User.findOne({
    where: {
      email,
      password,
    },
  }).then((user) => {
    if (user) {
      return handleJwtToken(user);
    }

    return User.create({
      email,
      password,
    }).then(handleJwtToken);
  });
};
