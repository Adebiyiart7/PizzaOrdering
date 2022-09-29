const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// LOCAL IMPORTS
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token; // initialize a token variable

  // check if there is an authorization token in the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // assign the token to the variable
      token = req.headers.authorization.split(" ")[1];
      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user by id from the database
      const user = await User.findById(decoded.id).select("-password");

      // add the user to the request header
      req.user = user;

      next();
    } catch (error) {
      console.log(error);
      res.status(400);
      throw new Error("Not authorized!");
    }
  }

  if (!token) {
    res.status(400);
    throw new Error("Not authorized, no token!");
  }
});

module.exports = protect;
