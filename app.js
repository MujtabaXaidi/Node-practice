const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }

  res.end(`not found`);
});

server.listen(5000);
