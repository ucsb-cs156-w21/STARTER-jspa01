import Rational from "main/rationals/Rational";

const parseRationalsFromUserInput = (userInput) => {
  const rationals = userInput.map((value) => {
    const numerator = parseInt(value.numerator);
    const denominator = parseInt(value.denominator);
    if (isNaN(numerator)) {
      throw new Error(`Invalid numerator recieved: got "${value.numerator}"`);
    } else if (isNaN(denominator)) {
      throw new Error(
        `Invalid denominator recieved: got "${value.denominator}"`
      );
    }
    return new Rational(numerator, denominator);
  });

  return rationals;
};

const addRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.sum(firstRational, secondRational);

  return result;
};

const subtractRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.subtract(firstRational, secondRational);
  return result;
};

const multiplyRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.multiply(firstRational, secondRational);
  return result;
};

const divideRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );
  if (secondRational.numerator === 0) {
    throw new Error(
      "Invalid numerator recieved for the second rational during division: 0."
    );
  }

  const result = Rational.quotient(firstRational, secondRational);
  return result;
};

export {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
  parseRationalsFromUserInput,
};
