import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import Star from "../components/Character/Star";

describe("Component Star", () => {
  test("should return number star icons define in props", async () => {
    //Arrange
    const title = "Technic";
    const starNumber = 1;

    //Act
    const { toJSON } = render(<Star number={starNumber} title={title} />);

    //Assert
    await waitFor(() => {
      expect(toJSON().children[1].children.length).toEqual(5);
    });
  });

  test("Should content title Thechnic", async () => {
    //Arrange
    const title = "Technic";
    const starNumber = 5;

    //Act
    const { toJSON } = render(<Star number={starNumber} title={title} />);

    //Assert
    await waitFor(() => {
      expect(toJSON().children[0].children[0]).toEqual(title);
    });
  });
});
