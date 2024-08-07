// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        errorType: "INVALID_CREDENTIALS",
        message: "Invalid email or password",
      });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        errorType: "INVALID_CREDENTIALS",
        message: "Invalid email or password",
      });
    }

    // Create a token
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    // Send response
    res.json({ success: true, token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
});

module.exports = router;
