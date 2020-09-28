import React from "react";
import { render } from "@testing-library/react";
import AppFooter from "main/components/AppFooter";

describe("AppFooter tests", () => {
  test("renders without crashing", () => {
    render(<AppFooter />);
  });
});
