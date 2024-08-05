const http = require('http');
const port = 1337;

const server = http.createServer((req, res) => {
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});