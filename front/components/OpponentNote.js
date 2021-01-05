import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { prefix } from "../utils/helper";
import Note from "./Note";

const { width } = Dimensions.get("window");

const notesMock = [
  { id: 1, text: "Note 1" },
  { id: 2, text: "Note 2" },
  { id: 3, text: "Note 3" },
  { id: 4, text: "Note 4" },
  { id: 5, text: "Note 5" },
];

const OpponentNote = ({ getShowAddNote }) => {
  const setShowAddNote = (value) => {
    getShowAddNote(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addNoteContainer}>
        <TouchableOpacity onPress={() => setShowAddNote(true)}>
          <Ionicons
            name={`${prefix}-add-circle-outline`}
            style={styles.addIconStyle}
          />
        </TouchableOpacity>

        <Text>Ajouter une note</Text>
      </View>
      <View style={styles.listStyle}>
        <FlatList
          data={notesMock}
          renderItem={({ item }) => <Note text={item.text} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default OpponentNote;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  addNoteContainer: {
    marginVertical: 10,
    width: width - 200,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  addIconStyle: {
    fontSize: 30,
    color: "green",
  },
  listStyle: {
    width: width - 80,
    height: 220,
    borderWidth: 1,
  },
});
