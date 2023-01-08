const User = require("../models/User");
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // VALIDATION
    if (!name || !email || !password)
      res.status(400).json({ error: "Name, Email, Password Required" });
    if (password.length < 6)
      res
        .status(400)
        .json({ error: "at least 6 character required for Password" });
    const exists = await User.findOne({ email });
    if (exists) res.status(400).json({ error: "Email already exists" });
    // CREATE NEW USER
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      const { _id, name, email, photo, phone, bio } = user;
      res.status(201).json({
        _id,
        name,
        email,
        photo,
        phone,
        bio,
      });
    } else res.status(400).json({ error: "Invalid Input" });
    await res.send("Register User");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerUser,
};
