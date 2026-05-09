// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controllers
const {
    getProducts,
    getSingleProduct
} = require("../controllers/productController");

// Route for all products
router.get("/", getProducts);

// Route for single product
router.get("/:id", getSingleProduct);

// Export router
module.exports = router;