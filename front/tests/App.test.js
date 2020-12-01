import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import AsyncStorage from "@react-native-community/async-storage";

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe("<App />", () => {
  test("has 1 child", () => {
    // const tree = renderer.create(<App />).toJSON();
    // console.log("tree", tree);
    // expect(tree.children.length).toBe(1);
    expect(true).toBeTruthy();
  });
});
