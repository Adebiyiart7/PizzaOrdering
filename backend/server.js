const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: "*" }));

app.use("/api/user", require("./routes/userRoutes"));

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running a localhost ${port}`));
