const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(PORT);
    });
  })
  .catch((err) => console.log(err));
