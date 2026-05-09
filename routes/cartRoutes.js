// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import middleware
const auth = require("../middleware/authMiddleware");

// Import controllers
const {
    addToCart,
    updateCart,
    deleteCart
} = require("../controllers/cartController");

// Protected routes
router.post("/", auth, addToCart);

router.put("/:id", auth, updateCart);

router.delete("/:id", auth, deleteCart);

// Export router
module.exports = router;