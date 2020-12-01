import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Dimensions, ScrollView, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import SigninForm from "../components/SigninForm";
import GoogleAuthForm from "../components/GoogleAuthForm";

const { width } = Dimensions.get("window");

const SigninScreen = ({ isLogged, navigation }) => {
  const { container, titleStyle } = styles;

  useEffect(() => {
    if (isLogged) {
      navigation.navigate("Improve");
    }
  });

  return (
    <View style={container}>
      <Text style={titleStyle}>Connexion</Text>
      <SigninForm />
      <GoogleAuthForm />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.authentification.isLogged,
  };
};

export default connect(mapStateToProps, undefined)(SigninScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 50,
    textAlign: "center",
  },
});
