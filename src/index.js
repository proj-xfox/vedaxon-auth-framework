const { createConfig } = require("./config");
const { generateToken, verifyToken } = require("./token");
const { hashPassword, comparePassword } = require("./password");
const { authMiddleware } = require("./middleware");
const { createSession } = require("./session");
const { AuthError } = require("./errors");

module.exports = {
  createConfig,
  generateToken,
  verifyToken,
  hashPassword,
  comparePassword,
  authMiddleware,
  createSession,
  AuthError,
};
