const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hashPassword = function (user, next) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      console.log("Cannot generated salt");
      next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        console.log("Cannot hashed password");
        next(err);
      }
      user.password = hash;
      next();
    });
  });
};

exports.comparePassword = function (externalPassword, userPassword, done) {
  bcrypt.compare(externalPassword, userPassword, function (err, same) {
    if (err) {
      return done(err);
    }
    return done(null, same);
  });
};
