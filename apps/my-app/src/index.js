// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Frontend Service</h1>');
});

app.listen(port, () => {
  console.log('Frontend service is running on http://localhost:');
});
