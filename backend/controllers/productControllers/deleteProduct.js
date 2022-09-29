const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/productModel");
const checkIsAdmin = require("../../utilities/checkIsAdmin");

/**
 * @desc    Delete a Product
 * @route   DELETE api/products/delete
 * @access  Private
 */
const deleteProduct = asyncHandler(async (req, res) => {
  checkIsAdmin(req, res);

  // check if product exist
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found!");
  }

  // delete product
  await product.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = deleteProduct;
