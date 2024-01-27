import express from "express";
import ViteExpress from "vite-express";
import { supabase } from "./database/db.js";
import session from "express-session";
import dotenv from 'dotenv';
dotenv.config();
import './auth.js';
import passport from "passport";
const app = express();

app.use(session({ secret: "bruh"}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
app.get('/login/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login/auth/failure',
    scope: ['profile', 'email']
  })
)
app.get('/login/auth/failure', (req,res) => {
  res.send('Failed to authenticate..')
})
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.get('/logout', (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.redirect('/');
    });
  });
});

app.get('/api/auth/check', (req, res) => {
  res.json({ isAuthenticated: req.isAuthenticated(), user: req.user });
});
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
