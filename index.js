const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

// Mongo Nonsense
const mongoose = require('mongoose');
const { mongoURI, cookieKey } = require('./config/keys');

mongoose.connect(mongoURI, err => {
  if (err) {
    throw err;
  }
  console.log('Successfully connected to mongo!');
});
require('./models/User');

//Passport has to be after Mongo or it breaks
require('./services/passport');

const app = express();

//this tells express to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

// this tells passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

// routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
