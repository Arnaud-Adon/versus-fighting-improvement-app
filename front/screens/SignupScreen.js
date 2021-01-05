import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { Picker, PickerIOS } from "@react-native-community/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { countries } from "../utils/countriesList";
import { signupUser } from "../actions";
import { connect } from "react-redux";
import { verifEmail, validateEqual, validateNotEmpty } from "../validations";
import { Ionicons } from "@expo/vector-icons";
import { prefix } from "../utils/helper";
import { useForm, Controller } from "react-hook-form";
import Error from "../components/Error";

const { width } = Dimensions.get("window");

const SignupScreen = ({ signupUser, isLogged, navigation }) => {
  const {
    container,
    title,
    buttonStyle,
    inputStyle,
    dateStyle,
    countryStyle,
    errorInput,
    eyeStyle,
  } = styles;

  const { control, handleSubmit, errors } = useForm();
  const [date, setDate] = useState(new Date());
  const [country, setCountry] = useState(countries[0].name);
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    if (isLogged) {
      navigation.navigate("SelectCharacter");
    }
  });

  const showPassword = () => {
    setSecure(!secure);
  };

  const onSubmit = (data) => {
    if (!data.birthdayDate) {
      data.birthdayDate = date;
    }
    if (!data.country) {
      data.country = country;
    }
    signupUser(data);
  };

  return (
    <ScrollView>
      <View style={container}>
        <Text style={title}>Inscription</Text>
        <View>
          <Text>Pseudo:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={inputStyle}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
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
        </View>

        <View>
          <Text>email:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={inputStyle}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && (
            <Text style={errorInput}>Votre email est requis.</Text>
          )}
        </View>

        <View style={dateStyle}>
          <Text>Date de naissance:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="clock"
                onChange={(event, selectedDate) => {
                  onChange(setDate(selectedDate));
                }}
              />
            )}
            name="birthdayDate"
            defaultValue={date}
          />
        </View>

        <View style={countryStyle}>
          <Text>Votre pays:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <PickerIOS
                selectedValue={country}
                style={{ height: 200, width: 100, color: "#000" }}
                onValueChange={(itemValue, itemIndex) =>
                  onChange(setCountry(itemValue))
                }
                mode={"dialog"}
              >
                {countries.length > 0 &&
                  countries.map((country, index) => {
                    const { name } = country;
                    return (
                      <PickerIOS.Item key={index} label={name} value={name} />
                    );
                  })}
              </PickerIOS>
            )}
            name="country"
            defaultValue={country}
          />
        </View>

        <View>
          <Text>Mot de passe:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <View>
                <TextInput
                  style={inputStyle}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  secureTextEntry={secure}
                  value={value}
                />
                <TouchableNativeFeedback onPress={showPassword}>
                  <Ionicons style={eyeStyle} name={`${prefix}-eye`} />
                </TouchableNativeFeedback>
              </View>
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.password && (
            <Text style={errorInput}>Veuillez choisir un mot de passe.</Text>
          )}
        </View>

        <View>
          <Text>Confirmation mot de passe:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <View>
                <TextInput
                  style={inputStyle}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  secureTextEntry={secure}
                  value={value}
                />
                <TouchableNativeFeedback onPress={showPassword}>
                  <Ionicons style={eyeStyle} name={`${prefix}-eye`} />
                </TouchableNativeFeedback>
              </View>
            )}
            name="confirmPassword"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.confirmPassword && (
            <Text style={errorInput}>Veuillez choisir un mot de passe.</Text>
          )}
        </View>

        <TouchableOpacity>
          <Text style={buttonStyle} onPress={handleSubmit(onSubmit)}>
            Valider
          </Text>
        </TouchableOpacity>
        <Error />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.authentification.isLogged,
  };
};

const mapDispatchToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
// export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 30,
  },
  inputStyle: {
    borderWidth: 1,
    width: width - 80,
    height: 37,
  },
  buttonStyle: {
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
  countryStyle: {
    width: width - 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  errorInput: {
    color: "red",
  },
  eyeStyle: {
    position: "absolute",
    fontSize: 24,
    top: 5,
    right: 10,
  },
});
