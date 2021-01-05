import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Skill from "../components/Skill";
import Star from "../components/Star";

describe("Component Skill", () => {
  const skillsMock = {
    power: 3,
    health: 3,
    mobility: 4,
    technical: 2,
    scope: 3,
  };

  test("Should return five component Star", async () => {
    //Arrange
    const { toJSON } = render(<Skill skills={skillsMock} />);

    //Assert
    await waitFor(() =>
      expect(toJSON().children[0].children.length).toEqual(5)
    );
  });
});
