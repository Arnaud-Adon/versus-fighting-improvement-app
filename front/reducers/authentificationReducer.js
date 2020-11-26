import * as types from "../constants/ActionTypes";

const initialState = {
  isLogged: false,
};

export const authentification = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
