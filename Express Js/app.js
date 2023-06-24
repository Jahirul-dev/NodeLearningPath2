const http = require("http");

const express = require("express");
const app = express();
// this is not javascript file, it's a definition typescript file but still it exports E which is this

// function in the end. So it exports a function here

// and therefore we execute it as a function

// and this will initialize a new object, you could say where expressjs,

// the framework will store and manage a lot of things for us behind the scenes,

// so a lot of logic is in this app constant here.

const server = http.createServer();
server.listen(2000);
