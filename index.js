const express = require("express");
const app = express();
console.log("🚀 ~ file: index.js:3 ~ app:", app);
const port = 3000;

app.get("/", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hwwwwwwwwwwwwwwwello Wdddddddsadsadddđorld!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
