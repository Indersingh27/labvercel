const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentGMT = new Date().toISOString();
  res.send(`Inderjeet Singh - WEB322 ${currentGMT}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
