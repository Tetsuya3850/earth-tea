const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("\n\nHello, world!\n\n");
});

app.get("/show", (req, res) => {
  res.send(true);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
