const passport = require("passport"),
  LocalStrategy = require("passport-local");
const UserModel = require("../models/user");
const User = require("../models/user");
const passwordHelper = require("../helper/password");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (error, user) => {
      if (error) {
        return done(error);
      }
      if (!user) {
        return done(null, false, { message: "Le pseudo n'est pas correcte" });
      }
      user.isEqual(password, function (err, same) {
        if (err) return done(err);
        if (!same)
          return done(null, false, {
            message: "Le mot de passe est incorrecte",
          });
        return done(null, user);
      });
    });
  })
);
