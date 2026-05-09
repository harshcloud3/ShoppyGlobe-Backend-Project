// Import JWT
const jwt = require("jsonwebtoken");

// Authentication middleware
module.exports = (req, res, next) => {

    // Get token from header
    const token = req.header("Authorization");

    // Check token
    if (!token) {
        return res.status(401).json({
            message: "Access denied"
        });
    }

    try {

        // Verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // Save user data
        req.user = verified;

        // Continue
        next();

    } catch (error) {

        // Invalid token
        res.status(401).json({
            message: "Invalid token"
        });
    }
};