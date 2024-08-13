const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register a new user
exports.register = (req, res) => {
  const { email, password } = req.body;

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
      return bcrypt.genSalt(10);
    })
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      // Create user
      const newUser = new User({ email, password: hashedPassword });
      return newUser.save();
    })
    .then((newUser) => {
      // Create token
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "32h",
      });

      res.json({ success: true, token });
    })
    .catch((error) => {
      console.error("Register Error:", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    });
};

// Login an existing user
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Find user by email
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(422).json({
          success: false,
          errorType: "INVALID_CREDENTIALS",
          message: "Invalid email or password",
        });
      }

      // Compare password with hashed password
      return bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({
            success: false,
            errorType: "INVALID_CREDENTIALS",
            message: "Invalid email or password",
          });
        }

        // Create a token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "32h",
        });

        res.json({ success: true, token });
      });
    })
    .catch((error) => {
      console.error("Login Error:", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    });
};
