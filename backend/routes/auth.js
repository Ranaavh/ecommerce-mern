const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const router = express.Router();

// Register Route
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Check if user already exists
  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      return bcrypt
        .genSalt(10)
        .then((salt) => bcrypt.hash(password, salt))
        .then((hashedPassword) => {
          // Create user
          const newUser = new User({ email, password: hashedPassword });
          return newUser.save();
        })
        .then((newUser) => {
          // Create token
          const token = jwt.sign({ id: newUser._id }, "your_jwt_secret", {
            expiresIn: "32h",
          });

          // Send response
          res.json({ success: true, token });
        });
    })
    .catch((error) => {
      console.error("Register Error:", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    });
});

// Login Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Find user
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          success: false,
          errorType: "INVALID_CREDENTIALS",
          message: "Invalid email or password",
        });
      }

      // Check password
      return bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({
            success: false,
            errorType: "INVALID_CREDENTIALS",
            message: "Invalid email or password",
          });
        }

        // Create token
        const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
          expiresIn: "1h",
        });

        // Send response
        res.json({ success: true, token });
      });
    })
    .catch((error) => {
      console.error("Login Error:", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    });
});

module.exports = router;
