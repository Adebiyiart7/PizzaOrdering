const User = require("../../models/userModel");

const getMe = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      phone_number: user.phone_number,
    });
  } else {
    res.status(400);
    throw new Error("User not found!");
  }
};

module.exports = getMe;
