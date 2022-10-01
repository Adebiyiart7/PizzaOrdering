const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../../models/userModel");
const generateToken = require("../../utils/generateToken");

/**
 * @desc     Login user
 * @route    POST api/user/login
 * @access   Public
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields!");
  }

  // find user
  const user = await User.findOne({ email });

  // login user
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user.id,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

module.exports = loginUser;
