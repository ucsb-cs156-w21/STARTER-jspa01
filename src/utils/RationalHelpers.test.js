import {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
} from "./RationalHelpers";
import Rational from "rationals/Rational";
jest.mock("rationals/Rational");

describe("RationalHelpers tests", () => {
  describe("addRationalsFromUserInput tests", () => {
    test("parses user input and passes it to Rational, calls toString on result", () => {
      Rational.sum = jest.fn();
      Rational.sum.mockReturnValue({
        toString: () => "1/1",
      });

      const userInput = {
        firstNumerator: "1",
        firstDenominator: "3",
        secondNumerator: "2",
        secondDenominator: "3",
      };

      const result = addRationalsFromUserInput(userInput);

      expect(Rational.sum).toBeCalledTimes(1);
      expect(result).toBe("1/1");
    });
  });
});
