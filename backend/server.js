const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello");
  res.end();
});
app.listen(port, function () {
  console.log("Your app running on port " + port);
});
