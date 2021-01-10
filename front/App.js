import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { getCharacters } from "./actions";
import thunk from "redux-thunk";
import LoginScreen from "./screens/LoginScreen";
import ImproveScreen from "./screens/ImproveScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import StatScreen from "./screens/StatScreen";
import VideoScreen from "./screens/VideoScreen";
import SettingScreen from "./screens/SettingScreen";
import { prefix, renderInitialScreen, loadConfiguration } from "./utils/helper";
import Loading from "./components/Loading";
import Logout from "./components/Logout";
import { navigationRef } from "./utils/rootNavigation";
import SelectCharacterScreen from "./screens/SelectCharacterScreen";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";

const store = createStore(reducers, applyMiddleware(thunk));

const Stack = createStackNavigator();

const ImproveTabs = createBottomTabNavigator();

const ImproveTabsScreen = () => {
  return (
    <ImproveTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          switch (route.name) {
            case "Improve":
              iconName = focused
                ? `${prefix}-paper-plane`
                : `${prefix}-paper-plane`;
              break;
            case "Stat":
              iconName = focused ? `${prefix}-stats` : `${prefix}-stats`;
              break;
            case "Video":
              iconName = focused ? `${prefix}-videocam` : `${prefix}-videocam`;
              break;
            case "Setting":
              iconName = focused ? `${prefix}-options` : `${prefix}-options`;
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{ activeTintColor: "red", inactiveTintColor: "blue" }}
    >
      <ImproveTabs.Screen name="Improve" component={ImproveScreen} />
      <ImproveTabs.Screen name="Stat" component={StatScreen} />
      <ImproveTabs.Screen name="Video" component={VideoScreen} />
      <ImproveTabs.Screen name="Setting" component={SettingScreen} />
    </ImproveTabs.Navigator>
  );
};

export default function App() {
  const [initialScreen, setInitialScreen] = useState("Login");
  const [loading, setLoading] = useState(true);

  const load = () => {
    try {
      setTimeout(() => {
        loadConfiguration();
        store.dispatch(getCharacters());
        setLoading(false);
      }, 2000);
    } catch (error) {
      // Store error with message
    }
  };

  useEffect(() => {
    // setInitialScreen(renderInitialScreen());
    load();
  }, []);

  // setInterval(() => {
  //   if (store.getState().characters.charactersList.length === 0) {
  //     store.dispatch(getCharacters());
  //     console.log("les personnage ont été ajoutés");
  //   } else {
  //     console.log("les personnage ont déjà été ajoutés");
  //   }
  // }, 500);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={initialScreen}
            screenOptions={({ route, navigation }) => ({
              headerTitle: false,
              headerLeft: () => {
                if (route.name === "Signup" || route.name === "Signin") {
                  return (
                    <Button
                      onPress={() => navigation.goBack()}
                      title="Retour"
                    />
                  );
                } else {
                  return false;
                }
              },
              headerRight: () => {
                if (
                  route.name === "Improve" ||
                  route.name === "Stat" ||
                  route.name === "Video" ||
                  route.name === "Setting"
                ) {
                  return <Logout />;
                }
              },
            })}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen
              name="SelectCharacter"
              component={SelectCharacterScreen}
            />
            <Stack.Screen name="Improve" component={ImproveTabsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
