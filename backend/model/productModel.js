const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
      type: String,
      required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: true,
    },
    hoverimage: {
      type: String,
      required: true,
    },
    material: {
        type: String,
      },
    application: {
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
    pattern: {
        type: String,
        required: true,
      },
    occasion: {
        type: String,
        required: true,
      },
    type: {
        type: String,
        required: true,
      },
    businesstype: {
        type: String,
        required: true,
      },

}, { timestamps: true });

module.exports = mongoose.model("Products", productSchema);