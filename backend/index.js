// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const productRoute = require("./route/productRoute")

require("dotenv").config();


const db = require("./connectdb")

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/products", express.static("upload/products"));


db();

app.use("/api", productRoute)  

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

