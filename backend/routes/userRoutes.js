const express = require("express");

const registerUser = require("../controllers/userControllers/registerUser");
const loginUser = require("../controllers/userControllers/loginUser");
const getMe = require("../controllers/userControllers/getMe");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
