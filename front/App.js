import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
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

const Stack = createStackNavigator();

const ImproveTabs = createBottomTabNavigator();

const ImproveTabsScreen = () => {
  <ImproveTabs.Navigator>
    <ImproveTabs.Screen name="Improve" component={ImproveScreen} />
    <ImproveTabs.Screen name="Setting" component={SettingScreen} />
  </ImproveTabs.Navigator>;
};

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
          <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={(options) => {
                return {
                  headerShown: false,
                };
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={(options) => {
                return {
                  headerTitle: false,
                };
              }}
            />
            <Stack.Screen
              name="Signin"
              component={SigninScreen}
              options={(options) => {
                return {
                  headerTitle: false,
                };
              }}
            />
            <Stack.Screen name="Improve" component={ImproveTabsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
