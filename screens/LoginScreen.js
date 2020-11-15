import React from "react";
import { StyleSheet, View } from "react-native";
import Signup from "../components/Signup";

export default function LoginScreen() {
  const { container } = styles;
  return (
    <View style={container}>
      <Signup />
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