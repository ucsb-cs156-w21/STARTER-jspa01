import {
  addRationalsFromUserInput,
  parseRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
} from "utils/RationalHelpers";
import Rational from "rationals/Rational";
jest.mock("rationals/Rational");

describe("RationalHelpers tests", () => {
  const userInput = [
    { numerator: "1", denominator: "3" },
    { numerator: "3", denominator: "4" },
  ];
  test("parseRationalsFromUserInput returns an array of two rationals", () => {
    const result = parseRationalsFromUserInput(userInput);
    expect(result.length).toBe(2);
  });
  test("addRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(13, 12);
    Rational.sum = jest.fn();
    Rational.sum.mockReturnValue(expected);

    const result = addRationalsFromUserInput(userInput);

    expect(Rational.sum).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("subtractRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(-5, 12);
    Rational.subtract = jest.fn();
    Rational.subtract.mockReturnValue(expected);

    const result = subtractRationalsFromUserInput(userInput);
    expect(Rational.subtract).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("multiplyRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(1, 4);
    Rational.multiply = jest.fn();
    Rational.multiply.mockReturnValue(expected);

    const result = multiplyRationalsFromUserInput(userInput);
    expect(Rational.multiply).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("divideRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(4, 9);
    Rational.quotient = jest.fn();
    Rational.quotient.mockReturnValue(expected);

    const result = divideRationalsFromUserInput(userInput);
    expect(Rational.quotient).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });
});
