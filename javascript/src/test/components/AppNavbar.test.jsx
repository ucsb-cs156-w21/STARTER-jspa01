import React from "react";
import { render } from "@testing-library/react";
import AppNavbar from "main/components/AppNavbar";
import { BrowserRouter } from "react-router-dom";

describe("AppNavbar tests", () => {
  test("(1 pts) should have the name of the app", () => {
    const { getByText } = render(
      <BrowserRouter>
        <AppNavbar />
      </BrowserRouter>
    );

    const brand = getByText("React Rational Calculator");

    expect(brand).toBeInTheDocument();
  });
  test("(1 pts) should render a link to each page ", () => {
    const { getByText } = render(
      <BrowserRouter>
        <AppNavbar />
      </BrowserRouter>
    );

    const addLink = getByText("Add");
    const subtractLink = getByText("Subtract");
    const multiplyLink = getByText("Multiply");
    const divideLink = getByText("Divide");

    expect(addLink).toBeInTheDocument();
    expect(subtractLink).toBeInTheDocument();
    expect(multiplyLink).toBeInTheDocument();
    expect(divideLink).toBeInTheDocument();
  });
});
