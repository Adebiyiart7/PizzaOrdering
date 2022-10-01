const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  // initialze token
  let token;

  // check if request header has an auth token that starts with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // assign token
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // add user to the req obj
      req.user = await User.findById(decoded.payload).select("-password");

      // call the next middleware
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized!");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = protect;
