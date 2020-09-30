import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Multiply from "main/pages/Multiply";

describe("Multiply tests", () => {
  test("(1 pts) it should render without crashing", () => {
    render(<Multiply />);
  });

  test("(5 pts) pressing the calculate button should multiply the two rationals", () => {
    const { getAllByPlaceholderText, getByRole, getByText } = render(
      <Multiply />
    );

    const title = getByText("Multiply");
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
    expect(resultNumeratorField.value).toEqual("3");
    expect(resultDenominatorField.value).toEqual("16");
  });
});
