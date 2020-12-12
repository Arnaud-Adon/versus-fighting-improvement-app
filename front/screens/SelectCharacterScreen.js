import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CharacterList from "../components/CharacterList";
import Skill from "../components/Skill";

const { width } = Dimensions.get("window");

const SelectCharacterScreen = ({ characters }) => {
  const { container, titleStyle, buttonStyle } = styles;
  const [skills, setSkills] = useState("");
  const [caracterId, setCharacterId] = useState(null);

  useEffect(() => {
    if (characters.length > 0 && skills === "") {
      setSkills(characters[0].skills);
    }
  }, [characters]);

  const getSkills = ({ _id, skills }) => {
    setCharacterId(_id);
    setSkills(skills);
  };

  const submitCharacter = () => {
    registerCharacter(caracterId);
  };

  return (
    <View style={container}>
      <Text style={titleStyle} testID="selectCharacterTitle">
        Veuillez sélectionner votre personnage
      </Text>
      <CharacterList getSkills={getSkills} />
      <Skill skills={skills} />
      <TouchableOpacity onPress={submitCharacter}>
        <Text style={buttonStyle}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters.charactersList,
  };
};

export default connect(mapStateToProps, undefined)(SelectCharacterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonStyle: {
    paddingVertical: 5,
    width: width - 200,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#333399",
    textAlign: "center",
    color: "#fff",
  },
});
