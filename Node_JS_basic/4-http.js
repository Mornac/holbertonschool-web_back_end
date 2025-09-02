const http = require('http');

http.createServer((request, response) => {
  response.write('Hello Holberton School!');
  response.end();
}).listen(1245), () => {
    console.log('Server running at http://localhost:1245/');
};
