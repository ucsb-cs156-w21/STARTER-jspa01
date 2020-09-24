import Rational from "rationals/Rational";

const parseRationalsFromUserInput = (userInput) => {
  const firstRational = new Rational(
    parseInt(userInput.firstNumerator),
    parseInt(userInput.firstDenominator)
  );
  const secondRational = new Rational(
    parseInt(userInput.secondNumerator),
    parseInt(userInput.secondDenominator)
  );

  return [firstRational, secondRational];
};

const addRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.sum(firstRational, secondRational);

  return result.toString();
};

const subtractRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.subtract(firstRational, secondRational);
  return result.toString();
};

const multiplyRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.multiply(firstRational, secondRational);
  return result.toString();
};

const divideRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.quotient(firstRational, secondRational);
  return result.toString();
};

export {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
  parseRationalsFromUserInput,
};
