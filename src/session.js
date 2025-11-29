function createSession(user, options = {}) {
  return {
    id: user.id,
    email: user.email,
    roles: user.roles || [],
    issuedAt: options.issuedAt || Date.now(),
    expiresAt: options.expiresAt || null, // optionally set expiry
    ...options.extraData,                 // extendable metadata
  };
}

module.exports = { createSession };
