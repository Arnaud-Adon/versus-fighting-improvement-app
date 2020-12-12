import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { renderImageRequire } from "../utils/RequireImageList";

const Character = ({ name }) => {
  const { container, imageStyle } = styles;

  return (
    <View style={container}>
      <Image style={imageStyle} source={renderImageRequire(name)} />
      <Text>{name}</Text>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },
});
