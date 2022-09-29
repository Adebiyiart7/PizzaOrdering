const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const addProduct = require("../controllers/productControllers/addProduct");
const deleteProduct = require("../controllers/productControllers/deleteProduct");
const getProduct = require("../controllers/productControllers/getProducts");
const updateProduct = require("../controllers/productControllers/updateProduct");
const protect = require("../middleware/authMiddleware");

router.get("/", getProduct); // getProduct route
router.post("/add", protect, addProduct); // addProduct route
router.put("/update/:id", protect, updateProduct); // updateProduct route
router.delete("/delete/:id", protect, deleteProduct);

module.exports = router;
