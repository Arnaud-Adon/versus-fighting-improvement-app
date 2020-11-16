import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import LoginScreen from "./screens/LoginScreen";
import ImproveScreen from "./screens/ImproveScreen";
import SettingScreen from "./screens/SettingScreen";

const store = createStore(reducers);
const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Improve" component={ImproveScreen} />
          <Screen name="Setting" component={SettingScreen} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
