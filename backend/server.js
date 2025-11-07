const express = require("express");
const cors = require("cors");
require("dotenv").config(); // load .env variables

const { router: pingRoutes } = require("./routes/pingRoutes");
const { router: kiboRoutes } = require("./routes/kiboRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ping", pingRoutes);
app.use("/api/kibo", kiboRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
