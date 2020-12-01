import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

const Error = (props) => {
  return (
    <View>
      <Text>{props.error}</Text>
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
