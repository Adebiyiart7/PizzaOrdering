const asyncHandler = require("express-async-handler");

// LOCAL IMPORTS
const Product = require("../../models/productModel");
const checkIsAdmin = require("../../utilities/checkIsAdmin");
const addProductValidator = require("../../utilities/validators/addProductValidator");

/**
 * @desc    Add a new product
 * @route   POST api/products/add
 * @access  Private
 */
const addProduct = asyncHandler(async (req, res) => {
  checkIsAdmin(req, res);

  // get all input
  let { name, price, category, displayImage, images, description } = req.body;
  // call the validator function
  addProductValidator(name, price, category, displayImage, description, res);

  if (!images) {
    images = [];
  }

  const product = await Product.create({
    name: name,
    price: price,
    category: category,
    displayImage: displayImage,
    images: images,
    description: description,
  });

  res.status(201).json(product);
});

module.exports = addProduct;
