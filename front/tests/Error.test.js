import React from "react";
import { Alert } from "react-native";
import { waitFor, render, fireEvent } from "@testing-library/react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import { parseError } from "../actions";
import * as types from "../constants/ActionTypes";
import { error } from "../reducers/errorReducer";
import Error from "../components/Error";

describe("Component Error", () => {
  test("should error reducer content the error message ", async () => {
    //Arrange
    const action = {
      type: types.GET_ERROR,
      payload: "Les identifiant ne sont pas correcte",
    };

    const initialState = {
      message: "",
    };

    //Assert
    expect(error(initialState, action).message).toEqual(
      "Les identifiant ne sont pas correcte"
    );
  });

  test("should content <Text/> in render ", async () => {
    //Arrange

    const initialStore = {
      authentification: {},
      characters: {},
      error: {
        message: "Les identifiants ne sont pas correcte",
      },
    };

    const store = createStore(reducers, initialStore, applyMiddleware(thunk));

    const message = store.getState().error.message;

    const component = (
      <Provider store={store}>
        <Error errorMessage={message} parseError={parseError} />
      </Provider>
    );

    const { toJSON } = render(component);

    //Assert
    await waitFor(() => {
      expect(toJSON().children[0].type).toEqual("Text");
    });
  });
});
