const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Registration and login routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Token validation route
router.get("/validate", authMiddleware, (req, res) => {
  res.json({ token: req.token, username: req.user.username });
});

module.exports = router;
