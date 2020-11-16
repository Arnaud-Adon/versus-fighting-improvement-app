import * as types from "../constants/ActionTypes";
import Axios from "axios";

export const signupUser = async (data) => (dispatch) => {
  //Envoyer les information au server
  const SIGN_UP_URL = "";
  // await Axios.post(SIGN_UP_URL, data).then().catch(error => console.log("a error was occured", error))
  //    dispatch({type: types.SIGN_UP, payload: })
};
