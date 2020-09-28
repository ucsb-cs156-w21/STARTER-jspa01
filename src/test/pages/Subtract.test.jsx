import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Subtract from "main/pages/Subtract";

describe("Subtract tests", () => {
  test("it should render without crashing", () => {
    render(<Subtract />);
  });

  test("pressing the calculate button should sum the two rationals", () => {
    const { getAllByPlaceholderText, getByRole } = render(<Subtract />);
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
    expect(resultNumeratorField.value).toEqual("-1");
    expect(resultDenominatorField.value).toEqual("2");
  });
});
