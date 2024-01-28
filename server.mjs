const express = require("express");
const bodyParser = require("body-parser");
const app = express();
import "dotenv/config";

// app.use(express.json());

// (2) Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, Madland Booking!" });
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
