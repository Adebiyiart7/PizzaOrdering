const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postal_code_or_zip: {
      type: String,
      required: true,
    },
    town_or_city: {
      type: String,
      required: true,
    },
    order_note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", orderSchema);
