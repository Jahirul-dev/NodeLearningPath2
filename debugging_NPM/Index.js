const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  response.setHeader("Content-Type", "text/html");
  //usuql

  if (url === "/") {
    //console.log("data");
    response.write(
      '<div><form action="/create-user" method="post"><input type="text" name="username"> <button type="submit" >Submit<button/> </form></div>'
    );
    response.end();
  } else if (url === "/users") {
    response.write("<ul><li>User 1</li></ul>");
    response.end();
  } else if (url === "/create-user" && request.method === "POST") {
    //console.log("age");
    const body = [];

    request.on("data", (chunk) => {
      //console.log(chunk);
      body.push(chunk);
    });
    request.on("end", () => {
      //const regex =
      const parseBody = Buffer.concat(body).toString();
      //.replace(/[%2C+'   ']/g, " ");
      userName = parseBody.split("=")[1];
      console.log(userName);
      //console.log(parseBody);‚
    });

    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  } else {
    console.log("Not working.");
    response.end();
  }
});

server.listen(3003);
