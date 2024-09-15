const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/adminModel"); // Ensure the path is correct

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createAdmin = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("123", salt); // Password you want to use

  const newAdmin = new Admin({
    email: "admin@gmail.com",
    password: hashedPassword,
  });

  try {
    await newAdmin.save();
    console.log("Admin user created");
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
