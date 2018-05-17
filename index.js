const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ hi: 'hello there' });
});

app.get('/two', (req, res) => {
  res.json('A second route');
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
