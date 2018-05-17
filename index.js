const express = require('express');

const app = express();

const PORT = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send({ hi: 'hello there' });
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
