// Import mongoose
const mongoose = require("mongoose");

// Cart schema
const cartSchema = new mongoose.Schema({

    // Store user ID
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // Store product ID
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    // Product quantity
    quantity: {
        type: Number,
        required: true
    }
});

// Export model
module.exports = mongoose.model("Cart", cartSchema);