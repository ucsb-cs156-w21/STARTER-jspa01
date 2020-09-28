import React from "react";
import { render } from "@testing-library/react";
import AppFooter from "main/components/AppFooter";

describe("AppFooter tests", () => {
  test("(1 pts) renders without crashing", () => {
    render(<AppFooter />);
  });
});
