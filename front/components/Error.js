import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";

const Error = (props) => {
  return (
    <View>
      <Alert>{props.error}</Alert>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, undefined)(Error);

const styles = StyleSheet({
  container: {},
});
