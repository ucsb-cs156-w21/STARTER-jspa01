import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "./Calculator";
import {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
} from "utils/RationalHelpers";
jest.mock("utils/RationalHelpers");

describe("Calculator tests", () => {
  test("it should render without crashing", () => {
    render(<Calculator />);
  });
  test("it should have have input fields for the first rational", () => {
    const { getByPlaceholderText } = render(<Calculator />);
    const firstNumeratorField = getByPlaceholderText("first numerator");
    const firstDenominatorField = getByPlaceholderText("first denominator");

    expect(firstNumeratorField).toBeInTheDocument();
    expect(firstDenominatorField).toBeInTheDocument();
  });

  test("it should have input fields for the second rational", () => {
    const { getByPlaceholderText } = render(<Calculator />);
    const secondNumeratorField = getByPlaceholderText("second numerator");
    const secondDenominatorField = getByPlaceholderText("second denominator");

    expect(secondNumeratorField).toBeInTheDocument();
    expect(secondDenominatorField).toBeInTheDocument();
  });

  test("pressing the add button should sum the two rationals", () => {
    addRationalsFromUserInput.mockReturnValue("1/1");

    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const firstNumeratorField = getByPlaceholderText("first numerator");
    const firstDenominatorField = getByPlaceholderText("first denominator");
    const secondNumeratorField = getByPlaceholderText("second numerator");
    const secondDenominatorField = getByPlaceholderText("second denominator");
    userEvent.type(firstNumeratorField, "1");
    userEvent.type(firstDenominatorField, "4");
    userEvent.type(secondNumeratorField, "3");
    userEvent.type(secondDenominatorField, "4");

    const addButton = getByText("Add");
    userEvent.click(addButton);

    const result = getByText("1/1");
    expect(result).toBeInTheDocument();
    expect(addRationalsFromUserInput).toHaveBeenCalledTimes(1);
    expect(addRationalsFromUserInput).toHaveBeenCalledWith({
      firstNumerator: "1",
      firstDenominator: "4",
      secondNumerator: "3",
      secondDenominator: "4",
    });
  });

  test("pressing the subtract button should subtract the two rationals", () => {
    subtractRationalsFromUserInput.mockReturnValue("-1/2");

    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const firstNumeratorField = getByPlaceholderText("first numerator");
    const firstDenominatorField = getByPlaceholderText("first denominator");
    const secondNumeratorField = getByPlaceholderText("second numerator");
    const secondDenominatorField = getByPlaceholderText("second denominator");
    userEvent.type(firstNumeratorField, "1");
    userEvent.type(firstDenominatorField, "4");
    userEvent.type(secondNumeratorField, "3");
    userEvent.type(secondDenominatorField, "4");

    const subtractButton = getByText("Subtract");
    userEvent.click(subtractButton);

    const result = getByText("-1/2");
    expect(result).toBeInTheDocument();
    expect(subtractRationalsFromUserInput).toHaveBeenCalledTimes(1);
    expect(subtractRationalsFromUserInput).toHaveBeenCalledWith({
      firstNumerator: "1",
      firstDenominator: "4",
      secondNumerator: "3",
      secondDenominator: "4",
    });
  });

  test("pressing the multiply button should multiply the two rationals", () => {
    multiplyRationalsFromUserInput.mockReturnValue("3/16");

    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const firstNumeratorField = getByPlaceholderText("first numerator");
    const firstDenominatorField = getByPlaceholderText("first denominator");
    const secondNumeratorField = getByPlaceholderText("second numerator");
    const secondDenominatorField = getByPlaceholderText("second denominator");
    userEvent.type(firstNumeratorField, "1");
    userEvent.type(firstDenominatorField, "4");
    userEvent.type(secondNumeratorField, "3");
    userEvent.type(secondDenominatorField, "4");

    const multiplyButton = getByText("Multiply");
    userEvent.click(multiplyButton);

    const result = getByText("3/16");
    expect(result).toBeInTheDocument();
    expect(multiplyRationalsFromUserInput).toHaveBeenCalledTimes(1);
    expect(multiplyRationalsFromUserInput).toHaveBeenCalledWith({
      firstNumerator: "1",
      firstDenominator: "4",
      secondNumerator: "3",
      secondDenominator: "4",
    });
  });

  test("pressing the multiply button should multiply the two rationals", () => {
    divideRationalsFromUserInput.mockReturnValue("3/1");

    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const firstNumeratorField = getByPlaceholderText("first numerator");
    const firstDenominatorField = getByPlaceholderText("first denominator");
    const secondNumeratorField = getByPlaceholderText("second numerator");
    const secondDenominatorField = getByPlaceholderText("second denominator");
    userEvent.type(firstNumeratorField, "1");
    userEvent.type(firstDenominatorField, "4");
    userEvent.type(secondNumeratorField, "3");
    userEvent.type(secondDenominatorField, "4");

    const divideButton = getByText("Divide");
    userEvent.click(divideButton);

    const result = getByText("3/1");
    expect(result).toBeInTheDocument();
    expect(divideRationalsFromUserInput).toHaveBeenCalledTimes(1);
    expect(divideRationalsFromUserInput).toHaveBeenCalledWith({
      firstNumerator: "1",
      firstDenominator: "4",
      secondNumerator: "3",
      secondDenominator: "4",
    });
  });
});
