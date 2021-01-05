import * as types from "../constants/ActionTypes";

const initialState = {
  message: "",
};

export const error = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ERROR:
      return {
        ...state,
        message: action.payload,
      };
      break;
    default:
      return state;
  }
};
