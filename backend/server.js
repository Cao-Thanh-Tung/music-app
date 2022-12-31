const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 8000;
// app.use(express.json());
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  // res.send("hello");
  res.send({
    name: "thanh",
  });
  res.end();
});
app.listen(port, function () {
  console.log("Your app running on port " + port);
});
