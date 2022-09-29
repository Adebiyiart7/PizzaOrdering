const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

// LOCAL IMPORTS
const connectDB = require("./config/db");
const { errorMiddleware } = require("./middleware/errorMiddleware");

// initialzed an express app
const app = express();

// connect database
connectDB();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

// error middleware
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));

/**
 *
 * Initialize a Node Application
 * Create Database Models
 * User controller; Register user, login user, get me
 * Added authMiddleware for protected routes
 *
 * Get Products
 * Add Product, check if user is an admin
 * Update Product, check if user is an admin
 * Delete Product, check if user is an admin
 *
 */

console.log("Learning JavaScript");

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} can eat.`);
  }
}

const animal = new Animal("Whiz", 23);

animal.eat();
