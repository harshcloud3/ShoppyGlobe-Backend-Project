// Import required packages
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register user
exports.register = async (req, res) => {

    try {

        // Get data from request body
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Send response
        res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (error) {

        // Error handling
        res.status(500).json({
            message: error.message
        });
    }
};

// Login user
exports.login = async (req, res) => {

    try {

        // Get login data
        const { email, password } = req.body;

        // Check user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // Send token
        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {

        // Error handling
        res.status(500).json({
            message: error.message
        });
    }
};