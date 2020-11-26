const AuthentificationController = require("./controllers/authentification");

module.exports = function (app) {
  app.post("/signup", AuthentificationController.signup);
  app.post("/signin", AuthentificationController.signin);
};
