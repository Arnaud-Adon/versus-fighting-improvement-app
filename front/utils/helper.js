import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadAsync } from "expo-font";

export const prefix = Platform.OS === "ios" ? "ios" : "md";

export const SERVER_URL = "http://localhost:3090";

export const renderInitialScreen = async () => {
  try {
    if (await AsyncStorage.getItem("token")) {
      return "Improve";
    } else {
      return "Login";
    }
  } catch (error) {
    console.log("A error was occured: ", error);
  }
};

export const loadConfiguration = async () => {
  await loadAsync({
    LockerliOne: require("../assets/fonts/LeckerliOne-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });
};
