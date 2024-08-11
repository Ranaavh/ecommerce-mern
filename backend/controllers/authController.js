const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register a new user
exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Create token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "32h",
    });

    res.json({ success: true, token });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(422).json({
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
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ success: true, token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};
