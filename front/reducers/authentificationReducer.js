import * as types from "../constants/ActionTypes";

const initialState = {
  isLogged: false,
};

export const authentification = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        isLogged: action.payload,
      };
      break;
    default:
      return state;
  }
};
