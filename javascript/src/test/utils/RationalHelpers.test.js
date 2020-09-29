import {
  addRationalsFromUserInput,
  parseRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
} from "main/utils/RationalHelpers";
import Rational from "main/rationals/Rational";
jest.mock("main/rationals/Rational");

describe("RationalHelpers tests", () => {
  const userInput = [
    { numerator: "1", denominator: "3" },
    { numerator: "3", denominator: "4" },
  ];
  test("(2 pts) parseRationalsFromUserInput returns an array of two rationals", () => {
    const result = parseRationalsFromUserInput(userInput);
    expect(result.length).toBe(2);
  });

  test("(3 pts) parseRationalsFromUserInput throws an error when it parses an invalid input", () => {
    const invalidUserInput = [
      {
        numerator: "",
        denominator: "",
      },
    ];

    expect(() => parseRationalsFromUserInput(invalidUserInput)).toThrow();

    const anotherInvalidUserInput = [
      {
        numerator: "1",
        denominator: "",
      },
    ];

    expect(() =>
      parseRationalsFromUserInput(anotherInvalidUserInput)
    ).toThrow();
  });
  test("(1 pts) addRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(13, 12);
    Rational.sum = jest.fn();
    Rational.sum.mockReturnValue(expected);

    const result = addRationalsFromUserInput(userInput);

    expect(Rational.sum).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("(3 pts) subtractRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(-5, 12);
    Rational.subtract = jest.fn();
    Rational.subtract.mockReturnValue(expected);

    const result = subtractRationalsFromUserInput(userInput);
    expect(Rational.subtract).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("(3 pts) multiplyRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(1, 4);
    Rational.multiply = jest.fn();
    Rational.multiply.mockReturnValue(expected);

    const result = multiplyRationalsFromUserInput(userInput);
    expect(Rational.multiply).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("(3 pts) divideRationalsFromUserInput parses user input and returns string result", () => {
    const expected = new Rational(4, 9);
    Rational.quotient = jest.fn();
    Rational.quotient.mockReturnValue(expected);

    const result = divideRationalsFromUserInput(userInput);
    expect(Rational.quotient).toBeCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("(3 pts) divideRationalsFromUserInput throws an error if the second numerator is 0", () => {
    const invalidUserInput = [
      {
        numerator: "0",
        denominator: "2",
      },
      {
        numerator: "0",
        denominator: "2",
      },
    ];

    Rational.mockImplementation(() => ({
      numerator: 0,
      denominator: 2,
    }));

    expect(() => divideRationalsFromUserInput(invalidUserInput)).toThrow();
  });
});
