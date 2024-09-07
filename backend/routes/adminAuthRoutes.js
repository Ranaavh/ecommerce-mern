const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

const router = express.Router();

// Admin login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt with:", email, password); // Logging input

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      console.log("Admin not found"); // Logging admin check
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log("Password mismatch"); // Logging password check
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    console.log("Login successful"); // Logging successful login
    res.json({ token, email: admin.email });
  } catch (error) {
    console.error("Server error:", error); // Logging server errors
    res.status(500).json({ message: "Server error" });
  }
});

// Protected route example (to verify token)
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard!" });
});

function verifyToken(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
}

module.exports = router;
