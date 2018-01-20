const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

function errorHandler(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
}

app.get("/show", (req, res) => {
  var random_boolean = Math.random() >= 0.5;
  res.send(random_boolean);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
