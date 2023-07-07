const express = require("express");
const http = require("http");
const app = express();

app.use((req, res, next) => {
  console.log("in Middleware");
  res.send("<h1>datas</h1>");
});

app.use((req, res, next) => {
  console.log("In middleware 2");
  return res.end();
});

app.listen(3000);
