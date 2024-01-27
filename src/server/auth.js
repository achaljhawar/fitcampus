import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
dotenv.config();
const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET;
passport.use(new GoogleStrategy({
    clientID: "700504179193-2j6bml69kbtkslmlaf84hg9mpnivfi6i.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/login/google/callback",
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