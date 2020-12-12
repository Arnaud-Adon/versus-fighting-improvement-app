import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Skill from "../components/Skill";
import Star from "../components/Star";

describe("Component Skill", () => {
  beforeEach(() => {
    AsyncStorage.clear();
  });

  test("Le composant Skill est bien rendu", async () => {
    //Arrange
    const { toJSON } = render(<Skill />);
    //Assert
    await waitFor(() => expect(toJSON()).toMatchSnapshot());
  });

  test("renderSkillsCharacter should contain 5 component <star/>", async () => {
    const { queryByTestId } = render(<Star />);

    await waitFor(() => {
      expect(queryByTestId("renderSkillsCharacter").props.children).toEqual(5);
    });
  });
});
