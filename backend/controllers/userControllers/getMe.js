const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const User = require("../../models/userModel");

/**
 * @desc    Get the current user details
 * @route   GET api/user/me
 * @access  Private
 */
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  // check if user exists
  if (!user) {
    res.status(400);
    throw new Error("User not found!");
  }

  // return the user details
  res.status(200).json({
    id: user.id,
    email: user.email,
  });
});

module.exports = getMe;
