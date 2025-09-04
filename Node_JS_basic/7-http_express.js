const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2])
    .then((output) => {
      response.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      response.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
