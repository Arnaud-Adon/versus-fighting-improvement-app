import * as types from "../constants/ActionTypes";
import Axios from "axios";
import { SERVER_URL } from "../utils/helper";
import AsyncStorage from "@react-native-community/async-storage";

export const signupUser = (data) => async (dispatch) => {
  //Envoyer les information au server
  const SIGN_UP_URL = `${SERVER_URL}/signup`;
  await Axios.post(SIGN_UP_URL, data)
    .then((response) => {
      console.log("response", response.data.token);
      AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: types.SIGN_UP, payload: true });
    })
    .catch((error) => console.log("a error was occured", error));
};

export const signinUser = (data) => async (dispatch) => {
  const SIGN_IN_URL = `${SERVER_URL}/signin`;
  await Axios.post(SIGN_IN_URL, data)
    .then((response) => {
      console.log("response", response.data.token);
      AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: types.SIGN_UP, payload: true });
    })
    .catch((error) => console.log("a error was occured", error));
};

export const getCharacters = () => async (dispatch) => {
  console.log("getCharacters");
  const GET_CHARACTER_URL = `${SERVER_URL}/characters`;
  await Axios.get(GET_CHARACTER_URL)
    .then((response) => {
      dispatch({
        type: types.GET_CHARACTERS,
        payload: response.data.characters,
      });
    })
    .catch((error) => console.log("a error was occured", error));
};
