const jwt = require('jsonwebtoken');

const config = require('../config/vars');

function generatePayload(user) {
  return {
    id: user.get('id'),
  };
}

function getIdFromPayload(payload) {
  const { id } = payload;

  return id;
}

function generateJwtToken(user) {
  const payload = generatePayload(user);
  const token = jwt.sign(payload, config.secret);

  console.log('--- JWT token ---');
  console.log(token);
}

module.exports = {
  generateJwtToken,
  generatePayload,
  getIdFromPayload,
};
