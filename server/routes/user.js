const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

// Create User (Register)
router.post("/", async (req, res) => {
  const { username, password, verifyPassword } = req.body;
  if (!username || !password || !verifyPassword) {
    return res.status(400).json({ message: "Please fill out all fields" });
  }
  if (password !== verifyPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  if (password.length < 7) {
    return res
      .status(400)
      .json({ message: "Password must be at least 7 characters" });
  }
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res
      .status(400)
      .json({ message: "User with this username already exists" });
  }

  // create user if everything passed
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    hashedPassword,
  });
  const saveUser = await newUser.save();

  // log user in
  const token = jwt.sign(
    {
      user: saveUser._id,
    },
    process.env.JWT_SECRET
  );

  res
    .cookie("token", token, {
      httpOnly: true,
    })
    .send();
});

// Login User
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Please fill out all fields" });
  }
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const passwordCorrect = await bcrypt.compare(
    password,
    existingUser.hashedPassword
  );
  if (!passwordCorrect) {
    return res
      .status(401)
      .json({ message: "Username or password is incorrect" });
  }

  // log user in
  const token = jwt.sign(
    {
      user: existingUser._id,
    },
    process.env.JWT_SECRET
  );

  res
    .cookie("token", token, {
      httpOnly: true,
    })
    .send();
});

// log out user
router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

// log all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Could not find all users" });
  }
});

module.exports = router;
