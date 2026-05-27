const defaultConfig = {
  jwtSecret: process.env.JWT_SECRET || "default_secret",
  tokenExpiry: "30d",
  hashRounds: 12,
};

function createConfig(customConfig = {}) {
  return { ...defaultConfig, ...customConfig };
}

module.exports = { createConfig };
