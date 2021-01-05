import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import SigninForm from "../components/SigninForm";
import GoogleAuthForm from "../components/GoogleAuthForm";
import Error from "../components/Error";

const SigninScreen = () => {
  const { container, titleStyle } = styles;

  // useEffect(() => {
  //   if (isLogged) {
  //     navigation.navigate("SelectCharacter");
  //   }
  // });

  return (
    <View style={container}>
      <Text style={titleStyle}>Connexion</Text>
      <SigninForm />
      <GoogleAuthForm />
      <Error />
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
