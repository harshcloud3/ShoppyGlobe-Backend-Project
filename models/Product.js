// Import mongoose
const mongoose = require("mongoose");

// Product schema
const productSchema = new mongoose.Schema({

    // Product name
    name: {
        type: String,
        required: true
    },

    // Product price
    price: {
        type: Number,
        required: true
    },

    // Product description
    description: {
        type: String,
        required: true
    },

    // Product stock quantity
    stock: {
        type: Number,
        required: true
    }
});

// Export model
module.exports = mongoose.model("Product", productSchema);