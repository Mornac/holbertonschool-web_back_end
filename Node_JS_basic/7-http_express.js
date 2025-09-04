const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (request, response) => {
//  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.arg[2])
    .then((output) => {
      //      response.set('Content-Type', 'text/plain');
      response.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      //      response.set('Content-Type', 'text/plain');
      response.send(err.message);
    });
});

app.listen(1245);

module.exports = app;
