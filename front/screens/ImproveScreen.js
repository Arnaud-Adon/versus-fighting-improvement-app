import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import OpponentList from "../components/OpponentList";
import UserCharacter from "../components/UserCharacter";
import UserInfo from "../components/UserInfo";
import {
  getUserInformations,
  getByLastUpdateUserCharacter,
  getCharacterList,
} from "../selectors";
import versusLogo from "../assets/images/screen/vs.png";
import OpponentCharacter from "../components/OpponentCharacter";
import OpponentNote from "../components/OpponentNote";
import AddNote from "../components/AddNote";

const initialState = {
  nameCharacter: "",
  infoCharacter: {},
  opponentCharacter: {},
  // TODO: Ajout des attributs liées aux autres composants
};

export default function ImproveScreen(props) {
  const { container, imageStyle, imageContainer } = styles;
  const [state, setState] = useState(initialState);
  const [showOpponentList, setShowOpponentList] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const { nameCharacter, infoCharacter, opponentCharacter } = state;

  const user = useSelector((state) => getUserInformations(state));

  const userCharacters = useSelector((state) =>
    getByLastUpdateUserCharacter(state)
  );

  const charactersList = useSelector((state) => getCharacterList(state));

  const getShowOpponentListInput = (value) => {
    setShowOpponentList(value);
  };

  const getShowAddNote = (value) => {
    setShowAddNote(value);
  };

  const getOpponentIdSelected = (characterId) => {
    charactersList.filter((character) => {
      if (character._id === characterId) {
        setState((prevState) => ({
          ...prevState,
          opponentCharacter: character,
        }));
      }
    });
  };

  useEffect(() => {
    if (!nameCharacter) {
      charactersList.map((character) => {
        if (character._id === userCharacters[0].characterId) {
          setState((prevState) => ({
            ...prevState,
            nameCharacter: character.name,
            infoCharacter: userCharacters[0],
            opponentCharacter: charactersList[0],
          }));
        }
      });
    }
  }, []);

  return (
    <View style={container}>
      <UserInfo username={user.username} imageId={user.imageId} />
      <UserCharacter name={nameCharacter} info={infoCharacter} />
      <View style={imageContainer}>
        <Image style={imageStyle} source={versusLogo} />
      </View>
      <OpponentCharacter
        name={opponentCharacter.name}
        getShowOpponentListInput={getShowOpponentListInput}
      />
      {showOpponentList && (
        <OpponentList
          charactersList={charactersList}
          getShowOpponentListInput={getShowOpponentListInput}
          getOpponentIdSelected={getOpponentIdSelected}
        />
      )}
      <OpponentNote getShowAddNote={getShowAddNote} />
      {showAddNote && <AddNote getShowAddNote={getShowAddNote} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 100,
    height: 120,
  },
});
