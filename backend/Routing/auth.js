import express from "express";
import AuthController from "../controllers/authController.js";
import passport from "passport";
import LocalStrategy from "passport-local";
// import logger from "morgan";
import session from "express-session";

const router = express.Router();

let authController = new AuthController();

///login
router.get("/login", function (req, res, next) {
  // res.render("login");
  console.log(res);
  res.send(res);
});

passport.use(
  new LocalStrategy((username, passport, cb) => {
    authController.verify(username, passport, cb);
  })
);

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.post("/signup", (req, res, next) => {
  authController.signup(req, res, next);
});

export default router;
