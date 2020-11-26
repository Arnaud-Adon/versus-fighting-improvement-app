import { Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export const prefix = Platform.OS === "ios" ? "ios" : "md";

export const SERVER_URL = "http://localhost:3090";

export const renderInitialScreen = () => {
  try {
    if (AsyncStorage.getItem("token")) {
      return "Improve";
    } else {
      return "Login";
    }
  } catch (error) {
    console.log("A error was occured: ", error);
  }
};
