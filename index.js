require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/login");
const authRoutes = require("./routes/register");

// database connection
connection();

// middlewares
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// routes
app.use("/api/login", userRoutes);
app.use("/api/register", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

module.exports = app;
