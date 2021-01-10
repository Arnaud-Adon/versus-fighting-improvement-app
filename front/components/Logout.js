import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import logoutImage from "../assets/images/functions/logout.png";
import { connect } from "react-redux";
import { logout } from "../actions";

const Logout = ({ logout }) => {
  const { container, imageStyle } = styles;

  const onLogout = () => {
    logout();
  };

  return (
    <TouchableOpacity style={container} onPress={onLogout}>
      <Image style={imageStyle} source={logoutImage} />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(undefined, mapDispatchToProps)(Logout);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});
