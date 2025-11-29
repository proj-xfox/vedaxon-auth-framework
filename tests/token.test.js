const { generateToken, verifyToken } = require("../src/token");

describe("JWT Token Tests", () => {
  const secret = "testsecret";
  const payload = { id: 1, email: "user@example.com" };

  test("should generate a token", () => {
    const token = generateToken(payload, secret, "1h");
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(0);
  });

  test("should verify a valid token", () => {
    const token = generateToken(payload, secret, "1h");
    const decoded = verifyToken(token, secret);
    expect(decoded.id).toBe(payload.id);
    expect(decoded.email).toBe(payload.email);
  });

  test("should return null for invalid token", () => {
    const decoded = verifyToken("invalidtoken", secret);
    expect(decoded).toBeNull();
  });
});
