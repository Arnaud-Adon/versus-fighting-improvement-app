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
import { renderInitialScreen, loadConfiguration } from "./utils/helper";
import Loading from "./components/Loading";

const store = createStore(reducers, applyMiddleware(thunk));
const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  const [initialScreen, setInitialScreen] = useState("Login");
  const [loading, setLoading] = useState(true);

  const loadFont = () => {
    try {
      setTimeout(() => {
        loadConfiguration();
        setLoading(false);
      }, 2000);
    } catch (error) {
      // Store error with message
    }
  };

  useEffect(() => {
    // setInitialScreen(renderInitialScreen());
    loadFont();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
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
}
