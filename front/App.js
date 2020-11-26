import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import LoginScreen from "./screens/LoginScreen";
import ImproveScreen from "./screens/ImproveScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import SettingScreen from "./screens/SettingScreen";
import { renderInitialScreen } from "./utils/helper";

const store = createStore(reducers, applyMiddleware(thunk));
const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  const [initialScreen, setInitialScreen] = useState("Login");

  // useEffect(() => {
  //   setInitialScreen(renderInitialScreen());
  // }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName={initialScreen}>
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Signup" component={SignupScreen} />
          <Screen name="Signin" component={SigninScreen} />
          <Screen name="Improve" component={ImproveScreen} />
          <Screen name="Setting" component={SettingScreen} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
