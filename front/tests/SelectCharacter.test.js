import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-community/async-storage";
import SelectCharacter from "../components/SelectCharacter";

describe("Component SelectCharacter", () => {
  test("Le composant SelectCharacter est bien rendu", async () => {
    //Arrange
    const { toJSON } = render(<SelectCharacter />);
    //Assert
    await waitFor(() => expect(toJSON()).toMatchSnapshot());
  });

  test('Contient la chaine de caractere "Selectionnez un personnage"', async () => {
    //Arrange
    const { queryByTestId } = render(<SelectCharacter />);

    //Assert
    await waitFor(() =>
      expect(queryByTestId("selectCharacterTitle").props.children).toBe(
        "Selectionnez un personnage"
      )
    );
  });

  test("Contient une Flatlist pour lister les images de personnage", async () => {
    //Arrange
    const { queryByTestId } = render(<SelectCharacter />);

    //Assert
    await waitFor(() =>
      expect(queryByTestId("flatlistCharacter")).toBeTruthy()
    );
  });

  test("Flatlist contient plusieurs items de type personnage dans sa prop renderItem", async () => {
    const { getByTestId, getByTest, queryByTestId, toJSON } = render(
      <SelectCharacter />
    );

    await waitFor(() =>
      expect(
        queryByTestId("flatlistCharacter").props.getItemCount()
      ).toBeGreaterThan(0)
    );
  });
});
