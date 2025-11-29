// auth-framework/src/password.js
const bcrypt = require('bcrypt');
const { createConfig } = require('./config');

const config = createConfig();

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(config.hashRounds);
  return await bcrypt.hash(password, salt);
}

async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = { hashPassword, comparePassword };
