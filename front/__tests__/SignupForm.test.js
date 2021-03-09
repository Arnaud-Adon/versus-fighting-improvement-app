import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import SignupForm from "../components/Sign/SignupForm";
import { useCallback } from "react/cjs/react.development";

describe("SignupForm Test", () => {
  afterEach(cleanup);

  it("should render SignupForm component", () => {
    const SignupFormComponent = render(<SignupForm />);

    expect(SignupFormComponent).toBeTruthy();
  });

  it("should return all register inputs needed", () => {
    render(<SignupForm />);
  });
});

// const [text, setText] = useState("")

// const handleChange =  useCallback((e) => {
//     const result = fetch('/api', e.target.value)
//     setText(result)

// })

// <input type="text" value={text} />
