const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/productModel");
const checkIsAdmin = require("../../utilities/checkIsAdmin");

/**
 * @desc    Update a product by ID
 * @route   PUT api/products/update:id
 * @access  Private
 */
const updateProduct = asyncHandler(async (req, res) => {
  checkIsAdmin(req, res);

  // check if product exist
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found!");
  }

  // try update the product or catch any error
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    req.status(400);
    throw new Error("Error updating product!");
  }
});

module.exports = updateProduct;
