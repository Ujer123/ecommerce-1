const mongoose = require("mongoose");

// Define Product Schema
const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    category: String,
    size: Number,
    color: String,
  });


module.exports=mongoose.model("Product", ProductSchema)