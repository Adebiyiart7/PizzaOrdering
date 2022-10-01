const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
});

module.exports = registerUser;
