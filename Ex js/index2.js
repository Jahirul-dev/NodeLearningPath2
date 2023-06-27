const express = require("express");

const app = express();

app.use((res, req, next) => {
  console.log("in Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In middleware 2");
  return res.end();
});

app.listen(3000);
