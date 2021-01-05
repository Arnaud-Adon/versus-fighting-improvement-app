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
import { addCharacter } from "../actions";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

const SelectCharacterScreen = ({
  characters,
  user,
  addCharacter,
  navigation,
}) => {
  const { container, titleStyle, buttonStyle } = styles;
  const [caracterId, setCharacterId] = useState(null);
  const [skills, setSkills] = useState("");

  useEffect(() => {
    if (characters.length > 0 && !caracterId && !skills) {
      setCharacterId(characters[0]._id);
      setSkills(characters[0].skills);
    }
  }, [characters]);

  const getSkills = ({ _id, skills }) => {
    setCharacterId(_id);
    setSkills(skills);
  };

  const submitCharacter = () => {
    addCharacter(user._id, caracterId);
  };

  return (
    <View style={container}>
      <Text style={titleStyle}>Veuillez sélectionner votre personnage</Text>
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
    user: state.user.informations,
  };
};

const mapDispatchToProps = {
  addCharacter,
};

SelectCharacterScreen.propTypes = {
  characters: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCharacterScreen);

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
