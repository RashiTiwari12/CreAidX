const User = require("../models/user.model");

async function handleUserSignup(req, res) {
  const { username, email, password } = req.body;

  try {
    // Attempt to create a new user
    const user = await User.create({ username, email, password });

    // Return a success response
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    // Handle duplicate key error (code 11000)
    if (error.code === 11000) {
      console.error("Duplicate key error:", error.keyValue);
      return res.status(400).json({ message: "Email already exists" });
    }

    // Handle other errors
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    // Attempt to create a new user
    const user = await User.findOne({ email, password });
    if (!user)
      return res.status(400).json({ message: "invalid user or password" });
    // Return a success response
    return res.status(200).json({ message: "LogIn successful", user });
  } catch (error) {
    // Handle other errors
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
