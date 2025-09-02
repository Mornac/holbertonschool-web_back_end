const express = require('express')
const app = express()
const port = 1245

app.get('/', (request, result) => {
  result.send('Hello Holberton School!')
})

app.listen(port);
