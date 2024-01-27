import express from "express";
import session from "express-session";
import ViteExpress from "vite-express";
function isLoggedIn(req,res,next) {
  req.user ? next() : res.redirect("/login")
}
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
app.get("/",isLoggedIn, (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
