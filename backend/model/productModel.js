const mongoose = require("mongoose");

<<<<<<< HEAD
const productSchema = mongoose.Schema({
    name: {
=======
const productSchema = new mongoose.Schema({
    category: {
>>>>>>> 587f598af6e267fc94d018fd4e87a2aae077143b
        type: String,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    moq: {
        type: String,
        required: true
    },
    fabricType: {
        type: String,
        required: true
    },
    material: {
        type: String,
        default: 0
    },
    application: {
        type: String,
        required: true
    },
    colors: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true,
    },
    hoverimage: {
      type: String,
      required: true,
    },
    gender: {
        type: String,
      },
    season: {
        type: String,
        required: true,
      },
    gender: {
        type: String,
        required: true,
      },
    season: {
        type: String,
        required: true,
      },
      feature: {
        type: String,
        required: true,
      },
   pattern: {
        type: String,
        required: true,
      },
      occasion: {
        type: String,
        required: true,
      },
   uploadCategory: {
        type: String,
        required: true,
      },
   size: {
        type: Array,
        required: true,
      },

}, { timestamps: true });

const productModal = mongoose.model("Products", productSchema);

module.exports = productModal