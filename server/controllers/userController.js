const User = require("../models/user");

exports.addCharacter = function (req, res, next) {
  const userId = req.body.userId;
  const characterId = req.body.characterId;

  console.log("userId", userId);
  console.log("characterId", characterId);

  User.findByIdAndUpdate(
    userId,
    {
      $push: {
        characters: {
          characterId,
          fightNumber: 0,
          victoryNumber: 0,
          defeatNumber: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
    },
    { new: true },
    function (err, user) {
      if (err) {
        next(err);
      }
      if (user) {
        User.findOne({ _id: userId }, (err, updatedUser) => {
          if (err) {
            next(err);
          }
          if (updatedUser) {
            res.send({ user: updatedUser });
          } else {
            res.status(404).send({
              message: "Le personnage n'a pas pu être enregistrer",
            });
          }
        });
      } else {
        res.status(404).send({
          message: "Le personnage n'a pas pu être enregistrer",
        });
      }
    }
  );
};
