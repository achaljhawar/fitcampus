import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
dotenv.config();

passport.use(new GoogleStrategy({
    clientID: "1051323857860-s1v3gnrprh01t8sjo572404dap749sa9.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "https://fitcampus.onrender.com/login/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
passport.serializeUser(function(user, done){
    done(null, user);
})
passport.deserializeUser(function(user, done){
    done(null, user);
})