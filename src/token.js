// auth-framework/src/token.js
const jwt = require('jsonwebtoken');
const { createConfig } = require('./config');

const config = createConfig();

function generateToken(payload) {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: config.tokenExpiry });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (error) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
