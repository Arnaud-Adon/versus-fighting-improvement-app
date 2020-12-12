import * as types from "../constants/ActionTypes.js";

const initialState = {
  charactersList: [],
};

export const characters = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload,
      };
    default:
      return state;
  }
};
