import * as types from "../constants/ActionTypes";
import Axios from "axios";
import { SERVER_URL } from "../utils/helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../utils/rootNavigation";

export const authentification = (value) => {
  return {
    type: types.SIGN_UP,
    payload: value,
  };
};

export const getUser = (user) => {
  return {
    type: types.GET_USER,
    payload: user,
  };
};

export const fetchCharacters = () => {
  return {
    type: types.GET_CHARACTERS,
    payload: response.data.characters,
  }
}

export const parseError = (error) => {
  return {
    type: types.GET_ERROR,
    payload: error,
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
};

export const logoutUser = () => {
  return { 
    type: types.LOGOUT, 
    payload: null }
}

export const getNote = (notes) => {
  return { 
    type: types.GET_NOTE,
     payload: notes }
}

export const addNote = (note) => {
  return {
    type: types.ADD_NOTE,
    payload: note
  }
}

export const updateNote = (note) => {
  return {
    type: types.UPDATE_NOTE,
    payload: note
  }
}

export const deleteNote = (note) => {
  return {
    type: types.DELETE_NOTE,
    payload: note
  }
}

export const getNoteId = (noteId) => {
  return {
    type: types.GET_NOTE_ID,
    payload: noteId,
  };
};

export const signUp = (data) => async (dispatch) => {
  const SIGN_UP_URL = `${SERVER_URL}/signup`;

  return new Promise((onSuccess, onFail) => {
    await Axios.post(SIGN_UP_URL, data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      .then((response) => {
        
        dispatch(authentification(true));
        dispatch(getUser(response.data.user));
        AsyncStorage.setItem("token", JSON.stringify(response.data.token));
        RootNavigation.navigate("SelectCharacter");
        onSuccess()                                                                                                                                                                                                                                                                                                                                
      })
      .catch((error) => dispatch(parseError(error.response.data.message)));
  })

};

export const signinUser = (data) => (dispatch) => {
  const SIGN_IN_URL = `${SERVER_URL}/signin`;

  Axios.post(SIGN_IN_URL, data)
    .then((response) => {
      AsyncStorage.setItem("token", JSON.stringify(response.data.token) );
      dispatch(authentification(true));
      dispatch(getUser(response.data.user));

      if (response.data.user.characters.length > 0) {
        RootNavigation.navigate("Improve");
      } else {
        RootNavigation.navigate("SelectCharacter");
      }
    })
    .catch((error) => {
      dispatch(parseError(error.response.data.message));
    });
};

export const getCharacters = () => async (dispatch) => {
  const GET_CHARACTER_URL = `${SERVER_URL}/characters`;

  await Axios.get(GET_CHARACTER_URL)
    .then((response) => {
      dispatch(fetchCharacters(response.data.characters));
    })
    .catch((error) => console.log("a error was occured", error));
};

export const addCharacter = (userId, characterId) => async (dispatch) => {
  const ADD_CHARACTER_URL = `${SERVER_URL}/add-character`;
  const token = await AsyncStorage.getItem("token");
  await Axios.post(
    ADD_CHARACTER_URL,
    {
      userId,
      characterId,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  )
    .then((response) => {
      dispatch(getUser(response.data.user));
      RootNavigation.navigate("Improve");
    })
    .catch((error) => {
      dispatch(parseError(error.response.data.message));
    });
};

export const logout = () => async (dispatch) => {
  dispatch(logoutUser());
  dispatch(authentification(false));
  await AsyncStorage.removeItem("token");
  RootNavigation.navigate("Login");
};

export const getUserNote = (data) => async (dispatch) => {
  const GET_CHARACTER_NOTE_URL = `${SERVER_URL}/get-note`;
  const token = await AsyncStorage.getItem("token");

  await Axios.post(
    GET_CHARACTER_NOTE_URL,
    { data },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((response) => {
      dispatch(getNote(response.data.notes));
    })
    .catch((error) => dispatch(parseError(error.response.data.message)));
};

export const addUserNote = (data) => async (dispatch) => {
  const ADD_NOT_URL = `${SERVER_URL}/add-note`;
  const token = await AsyncStorage.getItem("token");

  await Axios.post(
    ADD_NOT_URL,
    { data },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((response) => {
      dispatch(addNote(response.data.note));
    })
    .catch((error) => {
      dispatch(parseError(error.response.data.message));
    });
};

export const updateUserNote = (data) => async (dispatch) => {
  const UPDATE_NOTE_URL = `${SERVER_URL}/update-note`;
  const token = await AsyncStorage.getItem("token");

  await Axios.post(
    UPDATE_NOTE_URL,
    { data },
    { headers: { Authorization: `Bearer ${token}` } }
  )
    .then((response) =>
      dispatch(updateNote(response.data.note))
    )
    .catch((error) => dispatch(parseError(error.response.data.message)));
};

export const deleteUserNote = (data) => async (dispatch) => {
  const DELETE_NOTE_URL = `${SERVER_URL}/delete-note`;
  const token = await AsyncStorage.getItem("token");

  await Axios.post(
    DELETE_NOTE_URL,
    { data },
    { headers: { Authorization: `Bearer ${token}` } }
  )
    .then((response) => {
      dispatch(deleteNote(response.data.note));
    })
    .catch((error) => dispatch(parseError(error.response.data.message)));
};


