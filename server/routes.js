const AuthentificationController = require("./controllers/authentification");
const CharacterController = require("./controllers/character");

module.exports = function (app) {
  app.post("/signup", AuthentificationController.signup);
  app.post("/signin", AuthentificationController.signin);
  app.get("/characters", CharacterController.getCharacters);
};
