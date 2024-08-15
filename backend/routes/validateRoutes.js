const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Validate Token Route
router.get("/validate", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    User.findById(decoded.id)
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }

        res.json({ token, username: user.username });
      })
      .catch((error) => {
        res.status(500).json({ message: "An unexpected error occurred" });
      });
  });
});

module.exports = router;
