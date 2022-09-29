const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/productModel");

/**
 * @desc    Get all products
 * @route   GET api/products
 * @access  Public
 */
const getProduct = asyncHandler(async (req, res) => {
  let query = { available: true };

  if (req.query) {
    query = { ...query, ...req.query };
  }

  try {
    let products = await Product.find(query, {
      name: 1,
      price: 1,
      category: 1,
      available: 1,
      displayImage: 1,
      description: 1,
      description: 1,
      rating: 1,
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(400);
    throw new Error("Unable to query products.");
  }
});

module.exports = getProduct;
