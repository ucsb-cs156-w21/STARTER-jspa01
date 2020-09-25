import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Add from "pages/Add";
import { addRationalsFromUserInput } from "utils/RationalHelpers";
jest.mock("utils/RationalHelpers");

describe("Add tests", () => {
  test("it should render without crashing", () => {
    render(<Add />);
  });
  test("it should have have 3 input fields each for numerator and denominator", () => {
    const { getAllByPlaceholderText } = render(<Add />);
    const numeratorFields = getAllByPlaceholderText("numerator");
    const denominatorFields = getAllByPlaceholderText("denominator");

    expect(numeratorFields.length).toBe(3);
    expect(denominatorFields.length).toBe(3);
  });

  test("pressing the add button should sum the two rationals", () => {
    addRationalsFromUserInput.mockReturnValue({
      numerator: 1,
      denominator: 1,
    });

    const { getAllByPlaceholderText, getByRole } = render(<Add />);
    const firstNumeratorField = getAllByPlaceholderText("numerator")[0];
    const firstDenominatorField = getAllByPlaceholderText("denominator")[0];
    const secondNumeratorField = getAllByPlaceholderText("numerator")[1];
    const secondDenominatorField = getAllByPlaceholderText("denominator")[1];
    userEvent.type(firstNumeratorField, "1");
    userEvent.type(firstDenominatorField, "4");
    userEvent.type(secondNumeratorField, "3");
    userEvent.type(secondDenominatorField, "4");

    const addButton = getByRole("button");
    userEvent.click(addButton);

    const resultNumeratorField = getAllByPlaceholderText("numerator")[2];
    const resultDenominatorField = getAllByPlaceholderText("denominator")[2];
    expect(resultNumeratorField.value).toEqual("1");
    expect(resultDenominatorField.value).toEqual("1");
    expect(addRationalsFromUserInput).toHaveBeenCalledTimes(1);
    expect(addRationalsFromUserInput).toHaveBeenCalledWith([
      { numerator: "1", denominator: "4" },
      { numerator: "3", denominator: "4" },
    ]);
  });
});
