import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { getCharacters } from "../actions/index";
import Character from "./Character";

const { width } = Dimensions.get("window");

const CharacterList = ({ getSkills, getCharacters, characters }) => {
  const { container, nameCharacterStyle } = styles;
  const [nameCharacter, setNameCharacter] = useState("");

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    if (characters.length > 0 && nameCharacter === "") {
      setNameCharacter(characters[0].name);
    }
  }, [characters]);

  const choiceCharacter = (item) => {
    setNameCharacter(item.name);
    getSkills(item);
  };

  return (
    <View>
      <FlatList
        data={characters}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => choiceCharacter(item)}>
            <Character imageSrc={item.imageName} name={item.name} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
      <Text style={nameCharacterStyle}>{nameCharacter}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters.charactersList,
  };
};

const mapDispatchToProps = {
  getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);

const styles = StyleSheet.create({
  nameCharacterStyle: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    color: "#66CC99",
  },
});
