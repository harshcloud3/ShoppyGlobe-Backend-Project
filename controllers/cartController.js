// Import models
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add product to cart
exports.addToCart = async (req, res) => {

    try {

        // Get request data
        const { productId, quantity } = req.body;

        // Check product exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Validate quantity
        if (quantity <= 0) {
            return res.status(400).json({
                message: "Quantity must be greater than 0"
            });
        }

        // Create cart item
        const cart = await Cart.create({
            user: req.user.id,
            product: productId,
            quantity
        });

        // Send response
        res.status(201).json({
            message: "Product added to cart",
            cart
        });

    } catch (error) {

        // Error handling
        res.status(500).json({
            message: error.message
        });
    }
};

// Update cart quantity
exports.updateCart = async (req, res) => {

    try {

        // Update cart item
        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        // Send response
        res.json({
            message: "Cart updated",
            cart
        });

    } catch (error) {

        // Error handling
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete cart item
exports.deleteCart = async (req, res) => {

    try {

        // Delete cart item
        await Cart.findByIdAndDelete(req.params.id);

        // Send response
        res.json({
            message: "Cart item deleted"
        });

    } catch (error) {

        // Error handling
        res.status(500).json({
            message: error.message
        });
    }
};