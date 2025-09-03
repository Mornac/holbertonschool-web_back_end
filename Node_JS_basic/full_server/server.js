const express = require('express');

const app = express();
const port = 1245;

app.get('/routes/index.js');
app.listen(port);

export default app;
