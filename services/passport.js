const { googleClientID, googleClientSecret } = require('./../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(`access token: ${accessToken}`);
      console.log(`refresh token: `, refreshToken);
      console.log(`profile: `, profile.id);
      done();
    }
  )
);
