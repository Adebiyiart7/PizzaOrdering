const addProductValidator = (
  name,
  price,
  category,
  displayImage,
  description,
  res
) => {
  if (!name || !price || !category || !displayImage || !description) {
    res.status(400);
    throw new Error("These fields must not be empty!");
  }
};

module.exports = addProductValidator;
