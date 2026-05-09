// Import product model
const Product = require("../models/Product");

// Get all products
exports.getProducts = async (req, res) => {

    try {

        // Fetch products
        const products = await Product.find();

        // Send response
        res.json(products);

    } catch (error) {

        // Error handling
        res.status(500).json({
            message: error.message
        });
    }
};

// Get single product
exports.getSingleProduct = async (req, res) => {

    try {

        // Find product by ID
        const product = await Product.findById(req.params.id);

        // Check product
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Send response
        res.json(product);

    } catch (error) {

        // Error handling
        res.status(500).json({
            message: error.message
        });
    }
};