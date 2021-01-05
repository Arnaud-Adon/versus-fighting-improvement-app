const AuthentificationController = require("./controllers/authentification");
const CharacterController = require("./controllers/character");
const UserController = require("./controllers/userController");
const passport = require("passport");
require("./services/passport");

const requireToken = passport.authenticate("jwt", { session: false });

module.exports = function (app) {
  app.post("/signup", AuthentificationController.signup);
  app.post("/signin", AuthentificationController.signin);
  app.get("/characters", CharacterController.getCharacters);
  app.post("/add-character", requireToken, UserController.addCharacter);
};
