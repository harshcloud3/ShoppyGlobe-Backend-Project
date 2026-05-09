// Import mongoose
const mongoose = require("mongoose");

// User schema
const userSchema = new mongoose.Schema({

    // User name
    name: {
        type: String,
        required: true
    },

    // User email
    email: {
        type: String,
        required: true,
        unique: true
    },

    // User password
    password: {
        type: String,
        required: true
    }
});

// Export model
module.exports = mongoose.model("User", userSchema);