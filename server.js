const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const DATA_FILE = path.join(__dirname, "flag.txt");
const port = process.env.PORT;

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

function errorHandler(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
}

app.get("/flag", (req, res) => {
  fs.readFile(DATA_FILE, "utf-8", (err, data) => {
    res.json(data);
  });
});

app.get("/on", (req, res) => {
  fs.writeFile(DATA_FILE, 1, () => {
    res.json({});
  });
});

app.get("/off", (req, res) => {
  fs.writeFile(DATA_FILE, 0, () => {
    res.json({});
  });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
