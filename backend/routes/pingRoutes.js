// backend/routes/pingRoutes.js
const express = require("express");  // Import express
const router = express.Router();     // Create a router instance

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Received login:", username, password);
  console.log("Expected login:", process.env.PING_USERNAME, process.env.PING_PASSWORD);

  if (username === process.env.PING_USERNAME && password === process.env.PING_PASSWORD) {
    return res.json({ message: "Login successful", token: "mock-token" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Logout route
router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

// Export router
module.exports = { router };
