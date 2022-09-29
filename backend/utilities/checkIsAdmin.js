const checkIsAdmin = (req, res) => {
  // if user is not an admin throw an error
  if (req.user.isAdmin === false) {
    res.status(400);
    throw new Error("You do not have permission to perform this mutation.");
  }
};

module.exports = checkIsAdmin;
