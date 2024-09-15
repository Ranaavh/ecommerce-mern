const express = require("express");
const multer = require("multer");
const router = express.Router();
const Product = require("../models/productModel");

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Save with timestamp for uniqueness
  },
});

const upload = multer({ storage: storage });

// Add a new product with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newProduct = new Product({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      rating: req.body.rating,
      image: req.file.path, // Store the file path of the uploaded image
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    console.log(`Deleting product with ID: ${req.params.id}`); // Log the ID
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product deleted successfully:", product);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
