const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello there, how are you? :D');
});

app.listen(8080, () => {
  console.log('listening on port 8080...');
});