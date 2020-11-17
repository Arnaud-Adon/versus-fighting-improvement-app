import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Field, reduxForm } from "redux-form";
import { Picker, PickerIOS } from "@react-native-community/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { countries } from "../utils/countriesList";
import { prefix } from "../utils/helper";

const { width } = Dimensions.get("window");

const Signup = (props) => {
  const { container, title, button, input, dateStyle, country } = styles;
  const [language, setLanguage] = useState(countries[0].name);
  const [date, setDate] = useState(new Date());

  const { handleSubmit } = props;

  const submit = (values) => {
    if (!values.birthdayDate) {
      values.birthdayDate = date;
    }
    if (!values.country) {
      values.country = language;
    }

    console.log("values", values);
  };

  const renderInput = ({ input: { onChange, ...restInput } }) => {
    return <TextInput style={input} onChangeText={onChange} {...restInput} />;
  };

  const renderDateTimePicker = ({ ...restInput }) => {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"date"}
        is24Hour={true}
        display="clock"
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate;
          setDate(currentDate);
        }}
        {...restInput}
      />
    );
  };

  const renderCountriesPicker = ({ ...restInput }) => {
    if (prefix === "ios") {
      return (
        <PickerIOS
          selectedValue={language}
          style={{ height: 200, width: 100, color: "#000" }}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
          mode={"dialog"}
          {...restInput}
        >
          {countries.length > 0 &&
            countries.map((country, index) => {
              const { name } = country;
              return <PickerIOS.Item key={index} label={name} value={name} />;
            })}
        </PickerIOS>
      );
    } else {
      return (
        <Picker
          selectedValue={language}
          style={{ height: 200, width: 100, color: "#000" }}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
          mode={"dialog"}
          {...restInput}
        >
          {countries.length > 0 &&
            countries.map((country, index) => {
              const { name } = country;
              return <Picker.Item key={index} label={name} value={name} />;
            })}
        </Picker>
      );
    }
  };

  return (
    <ScrollView>
      <View style={container}>
        <Text style={title}>Inscription</Text>
        <View>
          <Text>Pseudo:</Text>
          <Field name="username" component={renderInput} />
        </View>
        <View>
          <Text>Email:</Text>
          <Field name="email" component={renderInput} />
        </View>
        <View style={dateStyle}>
          <Text>Date de naissance:</Text>
          <Field name="birthdayDate" component={renderDateTimePicker} />
        </View>
        <View style={country}>
          <Text>Pays:</Text>
          {countries.length > 0 && (
            <Field name="country" component={renderCountriesPicker} />
          )}
        </View>
        <View>
          <Text>Mot de passe:</Text>
          <Field name="password" component={renderInput} />
        </View>
        <View>
          <Text>Confirmation du mot de passe:</Text>
          <Field name="confirmPassword" component={renderInput} />
        </View>
        <TouchableOpacity>
          <Text style={button} onPress={handleSubmit(submit)}>
            Valider
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default reduxForm({
  form: "SignupForm",
})(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 30,
  },
  input: {
    borderWidth: 1,
    width: width - 80,
    height: 37,
  },
  button: {
    margin: 15,
    backgroundColor: "blue",
    width: width - 80,
    height: 30,
    textAlign: "center",
    lineHeight: 30,
    color: "#fff",
  },
  dateStyle: {
    width: width - 80,
    height: "auto",
  },
  country: {
    width: width - 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
