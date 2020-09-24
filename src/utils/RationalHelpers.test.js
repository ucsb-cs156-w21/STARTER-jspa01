import {
  addRationalsFromUserInput,
  parseRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
} from "./RationalHelpers";
import Rational from "rationals/Rational";
jest.mock("rationals/Rational");

describe("RationalHelpers tests", () => {
  const userInput = {
    firstNumerator: "1",
    firstDenominator: "3",
    secondNumerator: "3",
    secondDenominator: "4",
  };
  test("parseRationalsFromUserInput returns an array of two rationals", () => {
    const result = parseRationalsFromUserInput(userInput);
    expect(result.length).toBe(2);
  });
  test("addRationalsFromUserInput parses user input and returns string result", () => {
    Rational.sum = jest.fn();
    Rational.sum.mockReturnValue({
      toString: () => "13/12",
    });

    const result = addRationalsFromUserInput(userInput);

    expect(Rational.sum).toBeCalledTimes(1);
    expect(result).toBe("13/12");
  });

  test("subtractRationalsFromUserInput parses user input and returns string result", () => {
    Rational.subtract = jest.fn();
    Rational.subtract.mockReturnValue({
      toString: () => "-5/12",
    });

    const result = subtractRationalsFromUserInput(userInput);
    expect(Rational.subtract).toBeCalledTimes(1);
    expect(result).toBe("-5/12");
  });

  test("multiplyRationalsFromUserInput parses user input and returns string result", () => {
    Rational.multiply = jest.fn();
    Rational.multiply.mockReturnValue({
      toString: () => "1/4",
    });

    const result = multiplyRationalsFromUserInput(userInput);
    expect(Rational.multiply).toBeCalledTimes(1);
    expect(result).toBe("1/4");
  });

  test("divideRationalsFromUserInput parses user input and returns string result", () => {
    Rational.quotient = jest.fn();
    Rational.quotient.mockReturnValue({
      toString: () => "4/9",
    });

    const result = divideRationalsFromUserInput(userInput);
    expect(Rational.quotient).toBeCalledTimes(1);
    expect(result).toBe("4/9");
  });
});
