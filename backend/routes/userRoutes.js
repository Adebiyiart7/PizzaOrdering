const express = require("express");
const registerUser = require("../controllers/userControllers/registerUser");

const router = express.Router();

router.post("/register", registerUser);
// router
module.exports = router;
