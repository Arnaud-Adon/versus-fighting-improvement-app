import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));
const { Screen, Navigator } = createBottomTabNavigator();

const NavigationTest = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName={initialScreen}>{props.children}</Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default NavigationTest;
