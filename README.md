# Vedaxon Auth Framework

A **lightweight, reusable authentication framework** for Node.js applications.  
Designed for developers who want clean JWT authentication, password hashing, and plug-and-play Express.js middleware without the overhead of large auth libraries.

---

## 🚀 Features

- 🔐 **Generate & verify JWT tokens**
- 🔑 **Password hashing & comparison using bcrypt**
- 🧩 **Express middleware for protected routes**
- 🧱 **Session object creator**
- ⚠️ **Custom `AuthError` class** for consistent API responses
- ⚙️ Configurable via environment variables or programmatically
- 🪶 Small, minimal, dependency-lean library

---

## 📦 Installation

```bash
npm install vedaxon-auth-framework
```

---

## 🧠 Quick Usage Example

```javascript
const express = require("express");
const {
  generateToken,
  verifyToken,
  hashPassword,
  comparePassword,
  createSession,
  authMiddleware,
  AuthError
} = require("vedaxon-auth-framework");

const app = express();
app.use(express.json());

// Example protected route
app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

// Example signup flow
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hashed = await hashPassword(password);

  // Save user to DB and respond
  res.json({ email, password: hashed });
});

// Example login flow
app.post("/login", async (req, res) => {
  const { user, password } = req.body;

  const match = await comparePassword(password, user.password);
  if (!match) throw new AuthError("Invalid credentials", 401);

  const token = generateToken({ id: user.id, email: user.email });

  res.json(createSession(user, token));
});

app.listen(5000, () => console.log("Auth server running"));
```

---

## 🔧 API Reference

### **1. `generateToken(payload, expiresIn = "1h")`**
Create a JWT token from a payload.

### **2. `verifyToken(token)`**
Verify and decode a JWT token.

### **3. `hashPassword(password)`**
Securely hash a password using bcrypt.

### **4. `comparePassword(password, hash)`**
Compare raw password with hashed password.

### **5. `createSession(user, token)`**
Generate a standardized response session object.

### **6. `authMiddleware(req, res, next)`**
Protect routes by validating the Authorization header.

### **7. `AuthError(message, statusCode)`**
Custom error class for unified error handling.

---

## 🛠️ Environment Variables (Optional)

| Variable          | Description                        |
|------------------|------------------------------------|
| `JWT_SECRET`     | Secret key for signing tokens      |
| `JWT_EXPIRES_IN` | Token expiry (default: 1h)         |

---

## 📘 Example Database Schema (Optional)

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 💡 Ideal For

- REST APIs  
- SaaS apps  
- CRM/ERP dashboards  
- Multi-tenant platforms  
- Microservices needing lightweight auth  

---

## 📄 License

MIT
