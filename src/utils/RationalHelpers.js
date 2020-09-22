import Rational from "rationals/Rational";

const addRationalsFromUserInput = (userInput) => {
  const firstRational = new Rational(
    parseInt(userInput.firstNumerator),
    parseInt(userInput.firstDenominator)
  );
  const secondRational = new Rational(
    parseInt(userInput.secondNumerator),
    parseInt(userInput.secondDenominator)
  );

  const result = Rational.sum(firstRational, secondRational);

  return result.toString();
};

const subtractRationalsFromUserInput = (userInput) => {
  return "0/1";
};

export { addRationalsFromUserInput, subtractRationalsFromUserInput };
