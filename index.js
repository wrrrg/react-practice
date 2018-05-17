const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
