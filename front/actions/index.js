import * as types from "../constants/ActionTypes";
import * as RootNavigation from "../utils/rootNavigation";
import { setToken, addUser, getUser, getCharacters } from "../lib/service";

export const setAuthentification = (value) => {
  return {
    type: types.SIGN_UP,
    payload: value,
  };
};

export const setUser = (user) => {
  return {
    type: types.GET_USER,
    payload: user,
  };
};

export const setCharacters = (characters) => {
  return {
    type: types.GET_CHARACTERS,
    payload: characters,
  };
};

export const parseError = (error) => {
  return {
    type: types.GET_ERROR,
    payload: error,
  };
};

export const logoutUser = () => {
  return {
    type: types.LOGOUT,
    payload: null,
  };
};

export const getNote = (notes) => {
  return {
    type: types.GET_NOTE,
    payload: notes,
  };
};

export const addNote = (note) => {
  return {
    type: types.ADD_NOTE,
    payload: note,
  };
};

export const updateNote = (note) => {
  return {
    type: types.UPDATE_NOTE,
    payload: note,
  };
};

export const deleteNote = (note) => {
  return {
    type: types.DELETE_NOTE,
    payload: note,
  };
};

export const getNoteId = (noteId) => {
  return {
    type: types.GET_NOTE_ID,
    payload: noteId,
  };
};

export const register = (body) => (dispatch) => {
  addUser(body)
    .then(({ user, token }) => {
      dispatch(setAuthentification(true));
      dispatch(setUser(user));
      setToken(token);
      RootNavigation.navigate("SelectCharacter");
    })
    .catch((message) => dispatch(parseError(message)));
};

export const login = (body) => {
  getUser(body)
    .then(({ user, token }) => {
      dispatch(setAuthentification(true));
      dispatch(setUser(user));
      setToken(token);
      if (user?.characters.length > 0) {
        RootNavigation.navigate("Improve");
      } else {
        RootNavigation.navigate("SelectCharacter");
      }
    })
    .catch((message) => dispatch(parseError(message)));
};

export const fetchCharacters = () => {
  getCharacters()
    .then((characters) => dispatch(setCharacters(characters)))
    .catch((error) => new Error(`Failed to get all characters: ${error}`));
};
