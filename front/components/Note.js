import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { prefix } from "../utils/helper";

const Note = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
      <View style={styles.actionIconStyle}>
        <TouchableOpacity>
          <Ionicons style={styles.updateIconStyle} name={`${prefix}-brush`} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons style={styles.deleteIconStyle} name={`${prefix}-close`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Note.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Note;

const styles = StyleSheet.create({
  container: {
    height: 60,
    color: "#000",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "silver",
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
  },
  actionIconStyle: {
    position: "absolute",
    marginVertical: 10,
    marginHorizontal: 10,
    right: 0,
    width: 20,
  },
  updateIconStyle: {
    fontSize: 20,
    color: "blue",
  },
  deleteIconStyle: {
    fontSize: 25,
    color: "red",
  },
});
