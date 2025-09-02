const http = require('http');
const countStudents = require('./3-read_file_async');
const { error } = require('console');

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents('database.csv')
      .then((output) => {
        response.end(`This is the list of our students\n${output}`);
      })
      .catch((error) => {
        response.end(`This is the list of our students\n${output}`);
      });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

app.listen(1245), () => {
  console.log(`Server running at http://localhost:1245/`)
};

module.exports = app;
