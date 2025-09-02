const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (request.url === '/students') {
    countStudents(process.argv[2])
      .then((output) => {
        response.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        response.end(err.message);
      });
  } else {
    response.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
