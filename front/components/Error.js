import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { parseError } from "../actions";

const Error = ({ errorMessage, parseError }) => {
  const [error, setError] = useState(errorMessage);

  useEffect(() => {
    if (errorMessage != "") {
      setError(errorMessage);
    }
  }, [errorMessage]);

  const refreshErrorMessage = () => {
    if (errorMessage != "") {
      setError("");
      parseError("");
    }
  };

  const renderAlert = () => {
    return Alert.alert(
      "",
      error,
      [
        {
          text: "Ok",
          onPress: () => refreshErrorMessage(),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Text>{error && renderAlert()}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.error.message,
  };
};

const mapDispatchToProps = {
  parseError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
