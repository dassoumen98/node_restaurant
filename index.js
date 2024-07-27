const express = require("express");
const connectToDatabase = require("./db");
require("dotenv").config();
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to our Restaurant 🍕");
});

// import person route

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

// import menuitem routes
const menuItemRoutes = require("./routes/menuItemRoutes");
app.use("/menuitem", menuItemRoutes);

const port = process.env.PORT || 3000;
connectToDatabase();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
