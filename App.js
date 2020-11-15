import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import ImproveScreen from "./screens/ImproveScreen";
import SettingScreen from "./screens/SettingScreen";

const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Improve" component={ImproveScreen} />
        <Screen name="Setting" component={SettingScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
