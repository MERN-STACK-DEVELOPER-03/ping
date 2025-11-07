const axios = require("axios");

const getKiboProducts = async (req, res) => {
  try {
    // Mock products for local demo
    const mockProducts = [
      { id: 1, name: "Electric Car Model X", price: 55000 },
      { id: 2, name: "SUV Model S", price: 48000 },
      { id: 3, name: "Compact EV Model C", price: 32000 },
    ];

    res.json({
      message: "✅ Mock Kibo Products fetched successfully (Local Demo)",
      products: mockProducts,
    });
  } catch (error) {
    console.error("Error fetching Kibo products:", error.message);
    res.status(500).json({ error: "Failed to fetch Kibo products" });
  }
};

module.exports = { getKiboProducts };
