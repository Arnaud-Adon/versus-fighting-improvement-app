import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Signup() {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>Signup component</Text>
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
