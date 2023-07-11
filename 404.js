const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileName = '.' + req.url;
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
