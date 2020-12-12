const User = require("../models/user");
const jwt = require("jwt-simple");
const lodash = require("lodash");
const config = require("../config");
const passport = require("passport");
require("../services/passport");

function getTokenFromUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timeStamp,
    },
    config.jwtKey
  );
}

exports.signup = function (req, res, next) {
  //   console.log("req.body", req.body);
  const username = req.body.username;
  const email = req.body.email;
  const birthdayDate = req.body.birthdayDate;
  const country = req.body.country;
  const password = req.body.password;
  const createdAt = new Date();

  User.findOne({ username: username }, function (err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: "User already exist" });
    }
    if (
      lodash.isEmpty(username) ||
      lodash.isEmpty(email) ||
      lodash.isEmpty(birthdayDate) ||
      lodash.isEmpty(country) ||
      lodash.isEmpty(password)
    ) {
      return res.status(422).send({ error: "Data from create user is empty" });
    } else {
      const user = new User({
        username: username,
        email: email,
        birthdayDate: birthdayDate,
        country: country,
        password: password,
        createdAt: createdAt,
      });

      user.save(function (err, user) {
        if (err) {
          return next(err);
        } else {
          return res.json({ token: getTokenFromUser(user) });
        }
      });
    }
  });
};

exports.signin = function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(404)
        .send({ message: "les identifiants ne sont pas correcte" });
    } else {
      return res.json({ token: getTokenFromUser(user) });
    }
  })(req, res, next);
};
