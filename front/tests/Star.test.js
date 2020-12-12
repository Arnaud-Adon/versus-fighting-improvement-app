import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Star from "../components/Star";

describe("Component SelectCharacter", () => {
  beforeEach(() => {
    AsyncStorage.clear();
  });

  test("Le composant SelectCharacter est bien rendu", async () => {
    //Arrange
    const { toJSON } = render(<Star />);
    //Assert
    await waitFor(() => expect(toJSON()).toMatchSnapshot());
  });

  test('Que la vue renderStars exist', async () => {
    const { queryByTestId } = render(<Star />);

    await waitFor(() => {
      expect(queryByTestId("renderStars")).toBeTruthy();
    });
  });

  test('Si le résulat contient au moins 5 Ionicons de type "star-outline"', () => {
    const { queryByTestId } = render(<Star />);

    await waitFor(() => {
      expect(queryByTestId("renderStars").props.children).toEqual(5);
    });
  })
});
