const express = require("express");
const axios = require("axios");
const router = express.Router();

const KIBO_API_URL = process.env.KIBO_API_URL;

// Simulated Kibo API endpoint
router.get("/data", async (req, res) => {
  try {
    // In real scenario, you would attach Ping token here
    // const token = req.headers.authorization;

    // For now, just return mock data
    const data = { message: "✅ Mock data from Kibo API" };

    // Or if you want to call real API:
    // const response = await axios.get(KIBO_API_URL, { headers: { Authorization: `Bearer ${token}` } });
    // return res.json(response.data);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch Kibo data" });
  }
});

module.exports = { router };
