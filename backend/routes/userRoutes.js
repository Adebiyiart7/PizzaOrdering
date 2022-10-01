const express = require("express");

const loginUser = require("../controllers/userControllers/loginUser");
const registerUser = require("../controllers/userControllers/registerUser");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
