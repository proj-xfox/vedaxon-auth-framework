const { verifyToken } = require("./token");

function authMiddleware(secret) {
  return (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "No token provided" });

    const token = header.split(" ")[1];
    const user = verifyToken(token, secret);

    if (!user) return res.status(401).json({ error: "Invalid or expired token" });

    req.user = user;
    next();
  };
}

module.exports = { authMiddleware };
