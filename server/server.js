const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

const PORT = 5000;

app.use(cors());

app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
