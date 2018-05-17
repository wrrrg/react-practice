const express = require('express');

const app = express();

const PORT = process.env.port || 3000;

app.get('/', (req, res) => {
  res.json({ hi: 'hello there' });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
