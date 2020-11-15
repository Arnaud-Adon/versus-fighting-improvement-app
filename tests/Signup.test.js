/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import Signup from "../components/Signup";

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
