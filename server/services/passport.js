const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("../models/user");
const User = require("../models/user");

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (error, user) {
      if (error) {
        return done(error);
      }
      if (!user) {
        return done(null, false, { message: "Le pseudo n'est pas correcte" });
      }
      user.isEqual(password, function (err, same) {
        if (err) {
          return done(err);
        }
        if (!same) {
          return done(null, false, {
            message: "Le mot de passe est incorrecte",
          });
        } else {
          return done(null, user);
        }
      });
    });
  })
);
