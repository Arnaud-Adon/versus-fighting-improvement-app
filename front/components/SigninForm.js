import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";

const { width } = Dimensions.get("window");

const SigninForm = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const { container, inputStyle, buttonStyle, errorInput } = styles;
  const { signinUser } = props;

  const onSubmit = (data) => {
    console.log("data signin", data);
    signinUser(data);
  };

  return (
    <View style={container}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.username && (
        <Text style={errorInput}>Votre pseudo est requis.</Text>
      )}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.password && (
        <Text style={errorInput}>Votre mot de passe est requis.</Text>
      )}

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={buttonStyle}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, null)(SigninForm);

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    width: width - 80,
    height: 37,
    borderWidth: 1,
  },
  buttonStyle: {
    marginVertical: 20,
    width: width - 80,
    height: 37,
    backgroundColor: "blue",
    textAlign: "center",
    lineHeight: 30,
  },
  errorInput: {
    color: "red",
  },
});
