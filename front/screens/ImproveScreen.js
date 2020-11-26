import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ImproveScreen() {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>Improve screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
