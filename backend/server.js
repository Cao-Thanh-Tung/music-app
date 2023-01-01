const express = require("express");
const app = express();
const morgan = require("morgan");
const myenv = require("dotenv").config();
const port = 8000;
app.use(morgan("tiny"));
app.use(express.json());
// app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  // res.send("hello");
  res.send({
    name: "thanh",
  });
  res.end();
});
app.listen(process.env.PORT || 3000, function () {
  console.log("Your app running on port " + process.env.PORT || 3000);
});
