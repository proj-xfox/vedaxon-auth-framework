const defaultConfig = {
  jwtSecret: process.env.JWT_SECRET || "default_secret",
  tokenExpiry: "1h",
  hashRounds: 12,
};

function createConfig(customConfig = {}) {
  return { ...defaultConfig, ...customConfig };
}

module.exports = { createConfig };
