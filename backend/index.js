// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const productRoute = require("./route/productRoute");
require("dotenv").config();
const app = express();
const db = require("./connectdb");

app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use("/products", express.static("upload/products"));

db();

<<<<<<< HEAD
app.use("/product", productRoute)  
=======
app.use("/api", productRoute);
>>>>>>> 587f598af6e267fc94d018fd4e87a2aae077143b

// Start server
const PORT = process.env.PORT || 8500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
