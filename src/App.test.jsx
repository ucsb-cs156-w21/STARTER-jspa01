import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders calculator", () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId("calculator");
  expect(calculator).toBeInTheDocument();
});
