const express = require("express");
const router = require("./src/router");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const port = 8000;
app.use(morgan("tiny"));
app.use(express.json());
// app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", router);
app.listen(process.env.PORT || 3000, function () {
  console.log("Your app running on port " + process.env.PORT || 3000);
});
