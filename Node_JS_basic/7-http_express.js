const countStudents = require('./3-read_file_async');
const express = require('express');
const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const database = process.argv[2];
  countStudents(database)
    .then((output) => {
      response.set('Content-Type', 'text/plain');
      response.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      response.set('Content-Type', 'text/plain');
      response.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port);

module.exports = app;
