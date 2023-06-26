import { connection } from "./dbconnect.js";
import crypto from "crypto";

export default class AuthService {
  constructor() {
    this.connection = connection;
  }

  verify(username, password, cb) {
    console.log(username, password);
    this.connection.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      function (err, row) {
        if (err) {
          return cb(err);
        }
        console.log(row.length);
        if (!row || row.length == 0) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }
        crypto.pbkdf2(
          password,
          row.salt,
          310000,
          32,
          "sha256",
          function (err, hashedPassword) {
            if (err) {
              return cb(err);
            }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
              return cb(null, false, {
                message: "Incorrect username or password.",
              });
            }
            return cb(null, row);
          }
        );
      }
    );
  }

  signup(req, res, next) {
    //Para conseguir aceder ao this.connection dentro do handler
    var con = this.connection;
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      req.body.password,
      salt,
      310000,
      32,
      "sha256",
      function (err, hashedPassword) {
        if (err) {
          return next(err);
        }
        con.query(
          "INSERT INTO users (username, hashed_password, salt, name, email) VALUES (?, ?, ?, ?, ?)",
          [
            req.body.username,
            hashedPassword,
            salt,
            req.body.name,
            req.body.email,
          ],
          function (err) {
            console.log("teste");

            if (err) {
              return next(err);
            }
            console.log("teste");

            var user = {
              id: this.lastID,
              username: req.body.username,
            };
            console.log("teste");
            req.login(user, function (err) {
              if (err) {
                return next(err);
              }
              res.redirect("/");
            });
          }
        );
      }
    );
  }
}
