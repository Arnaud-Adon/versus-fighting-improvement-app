/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import SignupScreen from "../screens/SignupScreen";
import AsyncStorage from "@react-native-community/async-storage";
// import { createRenderer } from "react-test-renderer/shallow";
// import { create } from "react-test-renderer";

// Test utilisant Enzyme

describe("Test Signup fonctionnement", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Test de la présence des inputs du formulaire pour une inscription ", () => {
    //Arrange
    //Act
    //Assert
    // console.log(".debug()", wrapper.debug());
    expect(wrapper.text()).toContain("<View />");
  });
});

// Text utilisant React test renderer

// const setup = (_propOverrides) => {
//   const renderer = createRenderer();
//   renderer.render(<SignupScreen />);
//   const output = renderer.getRenderOutput;
//   return output;
// };

// describe("SignupScreen ", () => {
//   it("Should render input and button", () => {
//     const output = setup();
//     console.log("output.props.children", output.props.children);
//     const [input] = output.props.children;

//     const render = create(<SignupScreen/>)
//   });
// });
