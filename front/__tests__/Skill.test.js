import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import Skill from "../components/Character/Skill";
import Star from "../components/Character/Star";

describe("Component Skill Test", () => {
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
