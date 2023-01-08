const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("Home");
});
app.use("/api/users", userRoutes);
// MONGODB
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(PORT);
    });
  })
  .catch((err) => console.log(err));
