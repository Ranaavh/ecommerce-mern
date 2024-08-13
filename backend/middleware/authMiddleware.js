const jwt = require("jsonwebtoken");

// Middleware to check if user is authenticated,Protect certain routes from unauthorized access.
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user data to request object
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(400).json({ message: "Invalid token or expired." }); // token invalid/expired
  }
};

module.exports = authMiddleware;
