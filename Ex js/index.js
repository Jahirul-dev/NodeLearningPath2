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

const apps = express();
apps.use("/about", (req, res, next) => {
  console.log("In other middleware");
  res.send("<h2>TAke positionsewe</h2>");
  next();
});

apps.use("/", (req, res, next) => {
  console.log("In ");
  res.send("<h2>TAke positions</h2>");
});

let server = http.createServer(apps);
server.listen(3000);
