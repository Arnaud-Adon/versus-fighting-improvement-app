import api from "./axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToken = async (value) => {
  await AsyncStorage.setItem("token", JSON.stringify(value));
};

export const addUser = (data) => {
  return new Promise((onSuccess, onFail) => {
    api
      .post("/signup", data)
      .then((response, error) => {
        if (!response || error) {
          return onFail(error?.response.data.message);
        }
        return onSuccess(response);
      })
      .catch((error) => onFail(error?.response.data.message));
  });
};

export const getUser = (data) => {
  return new Promise((onSuccess, onFail) => {
    api
      .post("/signin", data)
      .then((response, error) => {
        if (!response || error) {
          return onFail(error?.response.data.message);
        }
        return onSuccess(response);
      })
      .catch((error) => onFail(error?.response.data.message));
  });
};

export const getCharacters = () => {
    return new Promise((onSuccess, onFail) => {
        await Axios.get("/characters")
          .then((response, error) => {
            if(!response || error){
                return onFail(error)
            }
            return onSuccess(response?.data.characters)
            
          })
          .catch((error) => onFail(error));
    })

};

// export const addCharacter = (userId, characterId) => async (dispatch) => {
//   const ADD_CHARACTER_URL = `${SERVER_URL}/add-character`;
//   const token = await AsyncStorage.getItem("token");
//   await Axios.post(
//     ADD_CHARACTER_URL,
//     {
//       userId,
//       characterId,
//     },
//     { headers: { Authorization: `Bearer ${token}` } }
//   )
//     .then((response) => {
//       dispatch(getUser(response.data.user));
//       RootNavigation.navigate("Improve");
//     })
//     .catch((error) => {
//       dispatch(parseError(error.response.data.message));
//     });
// };

// export const logout = () => async (dispatch) => {
//   dispatch(logoutUser());
//   dispatch(authentification(false));
//   await AsyncStorage.removeItem("token");
//   RootNavigation.navigate("Login");
// };

// export const getUserNote = (data) => async (dispatch) => {
//   const GET_CHARACTER_NOTE_URL = `${SERVER_URL}/get-note`;
//   const token = await AsyncStorage.getItem("token");

//   await Axios.post(
//     GET_CHARACTER_NOTE_URL,
//     { data },
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   )
//     .then((response) => {
//       dispatch(getNote(response.data.notes));
//     })
//     .catch((error) => dispatch(parseError(error.response.data.message)));
// };

// export const addUserNote = (data) => async (dispatch) => {
//   const ADD_NOT_URL = `${SERVER_URL}/add-note`;
//   const token = await AsyncStorage.getItem("token");

//   await Axios.post(
//     ADD_NOT_URL,
//     { data },
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   )
//     .then((response) => {
//       dispatch(addNote(response.data.note));
//     })
//     .catch((error) => {
//       dispatch(parseError(error.response.data.message));
//     });
// };

// export const updateUserNote = (data) => async (dispatch) => {
//   const UPDATE_NOTE_URL = `${SERVER_URL}/update-note`;
//   const token = await AsyncStorage.getItem("token");

//   await Axios.post(
//     UPDATE_NOTE_URL,
//     { data },
//     { headers: { Authorization: `Bearer ${token}` } }
//   )
//     .then((response) => dispatch(updateNote(response.data.note)))
//     .catch((error) => dispatch(parseError(error.response.data.message)));
// };

// export const deleteUserNote = (data) => async (dispatch) => {
//   const DELETE_NOTE_URL = `${SERVER_URL}/delete-note`;
//   const token = await AsyncStorage.getItem("token");

//   await Axios.post(
//     DELETE_NOTE_URL,
//     { data },
//     { headers: { Authorization: `Bearer ${token}` } }
//   )
//     .then((response) => {
//       dispatch(deleteNote(response.data.note));
//     })
//     .catch((error) => dispatch(parseError(error.response.data.message)));
// };
