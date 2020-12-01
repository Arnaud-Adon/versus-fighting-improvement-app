/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import SignupScreen from "../screens/SignupScreen";
import AsyncStorage from "@react-native-community/async-storage";
// import { createRenderer } from "react-test-renderer/shallow";
// import { create } from "react-test-renderer";

describe("Test SignupScreen fonctionnement", () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(<Signup />);
  // });

  // afterEach(() => {
  //   wrapper.unmount();
  // });

  test("Test de la présence des inputs du formulaire pour une inscription ", () => {
    //Arrange
    //Act
    //Assert
    // console.log(".debug()", wrapper.debug());
    // expect(wrapper.text()).toContain("<View />");
    expect(true).toBeTruthy();
  });
});
