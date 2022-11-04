const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  else if (req.url === "/about") {
    res.end("This is the about page");
  }
  else{
    res.end(`<h1>Oops! Not Found</h1>
    <p>404!</p>
    <a href="/">back home</a>
    `);}
  });
  

server.listen(5000);