var fs = require("fs");
var data = fs.readFileSync("index.html"); //.toString();
//console.log(data);

const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//