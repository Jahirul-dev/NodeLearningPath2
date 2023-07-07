// const http = require("http");

// const express = require("express");

// const app = express();

// app.use((req, res, next) => {
//   console.log("In middleware");
//   res.send("Data has passed");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In another middleware");
//   res.end();
// });

// const server = http.createServer(app);
// server.listen(2000);
const express = require("express");

const http = require("http");

const bodyParser = require("body-parser");

const apps = express();

apps.use(bodyParser.urlencoded({ extended: false }));

apps.use("/add-product", (req, res, next) => {
  // console.log("In other middleware");
  res.send(
    '<form action="/product" method="post"><input type="text" name="title" /><button type="submit">Add product</button></form>'
  );
});

apps.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// apps.get("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// apps.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

apps.use("/", (req, res, next) => {
  // console.log("In ");
  res.send("<h2>TAke positions</h2>");
});

let server = http.createServer(apps);
server.listen(3000);
