import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Divide from "main/pages/Divide";

describe("Divide tests", () => {
  test("(1 pts) it should render without crashing", () => {
    render(<Divide />);
  });

  test("(2 pts) pressing the calculate button should divide the two rationals", () => {
    const { getAllByPlaceholderText, getByRole, getByText } = render(
      <Divide />
    );

    const title = getByText("Divide");
    expect(title).toBeInTheDocument();

    const numeratorFields = getAllByPlaceholderText("numerator");
    const denominatorFields = getAllByPlaceholderText("denominator");
    userEvent.type(numeratorFields[0], "1");
    userEvent.type(denominatorFields[0], "4");
    userEvent.type(numeratorFields[1], "3");
    userEvent.type(denominatorFields[1], "4");

    const calculateButton = getByRole("button");
    userEvent.click(calculateButton);

    const resultNumeratorField = getAllByPlaceholderText("numerator")[2];
    const resultDenominatorField = getAllByPlaceholderText("denominator")[2];
    expect(resultNumeratorField.value).toEqual("1");
    expect(resultDenominatorField.value).toEqual("3");
  });
});
