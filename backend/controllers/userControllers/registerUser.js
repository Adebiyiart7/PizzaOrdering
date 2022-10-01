const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../../models/userModel");
const generateToken = require("../../utils/generateToken");

/**
 * @desc     Register a new user
 * @route    POST api/user/register
 * @access   Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { email, phone_number, password } = req.body;

  if (!email || !phone_number || !password) {
    res.status(400);
    throw new Error("Please fill in all fields.");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exist.");
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    phone_number,
    password: hashedPassword,
  });

  res.status(200).json({ id: user.id, token: generateToken(user.id) });
});

module.exports = registerUser;
