const http = require('http');
const countStudents = require('./3-read_file_async');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    const database = process.argv[2];
    countStudents(database)
      .then((output) => {
        response.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        response.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(1245);

module.exports = server;
