const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const UserRoute = require("./app/routes/User");
const BandAdminRoute = require("./app/routes/BandAdmin");
const InquiryRoute = require("./app/routes/Inquiry");

// (2) Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", UserRoute);
app.use("/band-admin", BandAdminRoute);
app.use("/inquiry", InquiryRoute);

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Success! Connected to database!");
  })
  .catch((err) => {
    console.log("Could not connect to database!", err);
    process.exit();
  });

// Root GET route
app.get("/", (req, res) => {
  res.json({ message: "Hello, Madland Booking!" });
});

// Listen on Port for incoming connections
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
